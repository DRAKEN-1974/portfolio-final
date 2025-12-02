import project2Main from '~/assets/project2-main.png';
import project2Sidebar from '~/assets/project2-sidebar.png';
import tokioLogo from '~/assets/tokio-logo.svg';
import tokioCode from '~/assets/tokio-code.webp';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';

import {
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';

import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './rust-task-runner.module.css';

const title = 'Distributed Task Runner in Rust';
const description =
  'A high-performance distributed task-runner built using Rust, Tokio, Actix-Web, message queues, and structured logging.';
const roles = ['Rust', 'Distributed Systems', 'Backend Engineering'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export default function RustTaskRunner() {
  return (
    <Fragment>
      <ProjectContainer
        className={styles.slice}
        style={{
          background: 'linear-gradient(180deg, #0e0e0e 0%, #111 40%, #0a0a0a 100%)',
        }}
      >
        {/* HEADER */}
        <ProjectHeader title={title} description={description} roles={roles} />

        {/* MAIN IMAGE */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${project2Main} 800w, ${project2Main} 1920w`}
              width={900}
              height={550}
              placeholder={project2Main}
              alt="Rust distributed task-runner - main architecture screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw,
                      (max-width: ${media.tablet}px) 90vw,
                      80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* SECTION 1 — JOB EXECUTION */}
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Concurrent Job Execution</ProjectSectionHeading>
              <ProjectSectionText>
                The task-runner uses Tokio's multi-threaded runtime to execute jobs
                concurrently across distributed worker pools. Workers listen for jobs,
                pull them from queues, and process them asynchronously with full isolation.
              </ProjectSectionText>
              <ProjectSectionText>
                Failures are handled with structured retries, exponential backoff, and
                detailed logging for full transparency into worker behavior.
              </ProjectSectionText>
            </div>

            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={project2Sidebar}
                width={360}
                height={760}
                placeholder={project2Sidebar}
                alt="Rust worker pool and job scheduling flow"
                sizes={`(max-width: ${media.mobile}px) 200px, 360px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* SECTION 2 — TOKIO + QUEUE ARCHITECTURE */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Tokio Runtime & Queue Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                Workers subscribe to distributed queues where tasks are published through
                Actix-Web services. The system ensures predictable scaling, high throughput,
                and complete decoupling between producers and consumers.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={tokioCode}
              width={880}
              height={500}
              placeholder={tokioCode}
              alt="Tokio async code snippet"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* GRID SECTION — LOGO + CODE */}
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  src={tokioLogo}
                  width={440}
                  height={200}
                  placeholder={tokioLogo}
                  alt="Tokio runtime logo"
                  role="presentation"
                />
              </div>

              <div className={styles.gridForeground}>
                <Image
                  src={tokioCode}
                  width={440}
                  height={340}
                  placeholder={tokioCode}
                  alt="Tokio scheduling example"
                />
              </div>
            </div>

            <div className={styles.gridText}>
              <ProjectSectionHeading>Observability & Logging</ProjectSectionHeading>
              <ProjectSectionText>
                The task-runner integrates structured logs, metrics, and distributed tracing.
                This provides insight into queue delays, worker utilization, and system
                bottlenecks — critical for debugging distributed workloads.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* OUTCOME SECTION */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The system delivers high performance under load, predictable job execution,
                and strong reliability. Built with clean modular architecture and modern
                Rust async features, it is suitable for production-grade distributed systems.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={project2Main}
              width={940}
              height={540}
              placeholder={project2Main}
              alt="Final architecture visualization"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </Fragment>
  );
}
