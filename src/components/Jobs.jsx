import * as React from 'react';
import { motion } from 'framer-motion';
import * as styles from './jobs.module.scss';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = React.useState('Ohana');
  const [tabHighlightHeight, setTabHighlightHeight] = React.useState(0);
  const jobList = ['Ohana', 'Public Works', 'Eiswelt'];
  return (
    <section className={styles.section}>
      <div className={styles.inner_section}>
        <div className={styles.tab_list} role="tablist">
          {jobList.map((job, idx) => (
            <button
              id={idx}
              type="button"
              role="tab"
              tabIndex={selectedJob === job ? '0' : '-1'}
              aria-selected={selectedJob === job ? 'true' : 'false'}
              aria-controls="panel-0"
              onClick={(e) => {
                setTabHighlightHeight(((idx + 1) * e.currentTarget.offsetHeight) - 50);
                console.log(((idx + 1) * e.currentTarget.offsetHeight) - 50);
                setSelectedJob(job);
              }}
              className={styles.tab_button}
            >
              {job}
            </button>
          ))}
          <motion.div className={styles.tab_highlight} animate={{ y: tabHighlightHeight }} />
        </div>
        <div>
          <p>hi</p>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
