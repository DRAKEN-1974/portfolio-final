import rustMainApi from '~/assets/rust-main-api.png';
import rustSidebar1 from '~/assets/rust-api-sidebar-1.png';
import rustGridBackground from '~/assets/rust-grid-background.png';
import rustGridForeground from '~/assets/rust-grid-foreground.png';
import rustBackground from '~/assets/rust-background.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';

import {
  ProjectBackground,
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
import styles from './rust-api.module.css';

const title = 'High-Performance Rust API Architecture';
const description =
  'A complete backend system built using Rust, Actix-Web, SQLx, PostgreSQL, JWT auth, Argon2 hashing, and clean modular architecture.';
const roles = ['Backend Development', 'Rust', 'API Engineering'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export default function RustApi() {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>

        {/* ⭐ NEW GLOBAL BACKGROUND IMAGE */}
        <ProjectBackground
          src={rustBackground}
          srcSet={`${rustBackground} 1280w, ${rustBackground} 2560w`}
          width={1280}
          height={800}
          placeholder={rustBackground}
          opacity={0.45} 
        />

        <ProjectHeader title={title} description={description} roles={roles} />

        {/* ⭐ MAIN IMAGE */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${rustMainApi} 800w, ${rustMainApi} 1920w`}
              width={800}
              height={500}
              placeholder={rustMainApi}
              alt="Rust API main code editor screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw,
                      (max-width: ${media.tablet}px) 90vw,
                      80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* ⭐ AUTH + SECURITY SECTION */}
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Authentication & Security</ProjectSectionHeading>
              <ProjectSectionText>
                This Rust backend implements secure password hashing using Argon2,
                JWT authentication, and structured claim validation to ensure
                high-grade security across the entire request flow.
              </ProjectSectionText>
              <ProjectSectionText>
                Actix-Web middlewares combined with SQLx models deliver strict
                type-safety and predictable performance.
              </ProjectSectionText>
            </div>

            {/* ⭐ SIDEBAR IMAGE */}
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${rustSidebar1} 350w, ${rustSidebar1} 700w`}
                width={350}
                height={700}
                placeholder={rustSidebar1}
                alt="Rust sidebar screenshot"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* ⭐ DATABASE SECTION */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Database Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                SQLx provides compile-time validation for queries, async execution,
                connection pooling, migrations, and extremely efficient interaction 
                with PostgreSQL databases.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={rustGridBackground}
              width={800}
              height={500}
              placeholder={rustGridBackground}
              alt="Rust terminal showing build and database logs"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* ⭐ GRID / ANNOTATION SECTION */}
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>

              {/* GRID BACKGROUND */}
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${rustGridBackground} 440w, ${rustGridBackground} 880w`}
                  width={440}
                  height={790}
                  placeholder={rustGridBackground}
                  alt="Grid background terminal logs"
                  role="presentation"
                />
              </div>

              {/* GRID FOREGROUND */}
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${rustGridForeground} 440w, ${rustGridForeground} 880w`}
                  width={440}
                  height={340}
                  placeholder={rustGridForeground}
                  alt="Rust Cargo.toml and dependencies screenshot"
                />
              </div>

            </div>

            <div className={styles.gridText}>
              <ProjectSectionHeading>Token Validation Layer</ProjectSectionHeading>
              <ProjectSectionText>
                JWT tokens are decoded, verified, and validated against expiration 
                through custom Actix middleware — ensuring only authenticated users 
                access protected routes.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* ⭐ OUTCOME SECTION */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                This Rust backend demonstrates strong architectural foundations, 
                secure authentication, high performance, and modular code structure —
                making it suitable for production systems.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={rustMainApi}
              width={940}
              height={500}
              placeholder={rustMainApi}
              alt="Rust final result preview"
            />
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
