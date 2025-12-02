import rustMainApi from '~/assets/rust-main-api.png';

import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';


import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Rust Backend Developer',
    description: `Portfolio of ${config.name} — Rust backend developer focusing on high-performance APIs, systems programming, and secure backend engineering.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);

  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (!visibleSections.includes(section)) {
              setVisibleSections(prev => [...prev, section]);
            }
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => setScrollIndicatorHidden(!entry.isIntersecting),
      { rootMargin: '-100% 0px 0px 0px' }
    );

    [intro, projectOne, projectTwo, details].forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <ProjectSummary
  id="project-1"
  sectionRef={projectOne}
  visible={visibleSections.includes(projectOne.current)}
  index={1}
  title="High-Performance Rust API Architecture"
  description="A backend implemented using Rust, Actix-Web, SQLx, PostgreSQL, Argon2 hashing, and JWT-based authentication."
  buttonText="View Project"
  buttonLink="/projects/rust-api"
  model={{
    type: 'laptop',
    alt: 'Rust Backend API',
    textures: [
      {
        srcSet: `${rustMainApi} 1280w, ${rustMainApi} 2560w`,
        placeholder: rustMainApi,
      },
    ],
  }}
/>


      {/* PROJECT 2 — Rust Task Runner */}
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Distributed Task Runner in Rust"
        description="A high-performance distributed task runner built with Rust, Tokio, and Actix-Web."
        buttonText="View Project"
        buttonLink="/projects/rust-task-runner"
        model={{
          type: 'laptop',
          alt: 'Rust Task Runner',
          textures: [
            {
              srcSet: `${sliceTexture} 1280w, ${sliceTextureLarge} 2560w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      <Footer />
    </div>
  );
};
