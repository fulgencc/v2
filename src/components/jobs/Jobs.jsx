/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { motion } from 'framer-motion';
import * as styles from './jobs.module.scss';

const jobs = [{
  name: 'WELL Health',
  title: 'Software Engineer',
  date: 'October 2021 - Present // Santa Barbara, CA',
},
{
  name: 'Ohana',
  title: 'Frontend Engineer',
  date: 'April 2021 - September 2021 // Beverly Hills, CA',
  descriptions: ['Wrote modern and robust code in a complex codebase to implement a plethora of client features.',
    'Led our companys frontend development, and had a leadership opportunity with a small team.',
    'Developed a large amount of features to streamline user experiences, including redesigning Facebook & Instagram authentication flows.'],
},
{
  name: 'Public Works',
  title: 'Full Stack Software Engineer',
  date: 'Dec 2017 - April 2021 // Los Angeles, CA',
  descriptions: ['Spearheaded implementing modern technology standards, creating the first React.js, Typescript, Web API, and SQL Server web application at the company.',
    'Created the company’s first design style guide for web applications.',
    'Full stack development of web applications, including the gathering of functional requirements from customers.',
  ],
},
{
  name: 'Eiswelt',
  title: 'Contract Web Designer',
  date: 'June 2017 - Aug 2017 // Westminister, CA',
  descriptions: ['Designed and built Eiswelt Gelato’s public website.',
    'Worked with the owner to design a static site using HTML/CSS.'],
},
{
  name: 'UC Irvine',
  title: 'Computer Science Major',
  date: '2012-2016 // Irvine, CA',
  descriptions: ['Core computer science program plus coursework in game design/programming.'],
},
];

const JobDescription = (props) => {
  const {
    title,
    name,
    date,
    descriptions,
  } = props;

  return (
    <div>
      <div>
        <h3 className={styles.job_header}>
          {title}
          {' '}
          <span className={styles.highlighted}>
            @
            {' '}
            {name}
          </span>
        </h3>
        <h4 className={styles.job_date}>{date}</h4>
      </div>
      <ul className={styles.job_list}>
        {descriptions && descriptions.map((descr) => (<li>{descr}</li>))}
      </ul>
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       <h3>
  //         {title}
  //         {' '}
  //         <span>
  //           @
  //           {' '}
  //           {job}
  //         </span>
  //       </h3>
  //       <h4>{date}</h4>
  //     </div>
  //     <ul>
  //       {descriptions.map((descr) => (<li>{descr}</li>))}
  //     </ul>
  //   </div>
  // );
};

const Jobs = () => {
  const [selectedJob, setSelectedJob] = React.useState(jobs[0]);
  const [tabHighlightHeight, setTabHighlightHeight] = React.useState(0);

  const handleSetJobs = (jobName) => {
    setSelectedJob(jobs.find((job) => job.name === jobName));
  };

  return (
    <section id="work" className={styles.section}>
      <h2>Work &amp; Education</h2>
      <div className={styles.inner_section}>
        <div className={styles.tab_list} role="tablist">
          {jobs.map((job, idx) => (
            <button
              id={idx}
              type="button"
              role="tab"
              tabIndex={selectedJob.name === job.name ? '0' : '-1'}
              aria-selected={selectedJob.name === job.name ? 'true' : 'false'}
              aria-controls="panel-0"
              onClick={(e) => {
                setTabHighlightHeight(((idx + 1) * e.currentTarget.offsetHeight) - 50);
                handleSetJobs(job.name);
              }}
              className={styles.tab_button}
            >
              {job.name}
            </button>
          ))}
          <motion.div className={styles.tab_highlight} animate={{ y: tabHighlightHeight }} />
        </div>
        <div>
          <JobDescription {...selectedJob} />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
