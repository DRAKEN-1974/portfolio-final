import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Section } from '~/components/section';
import { Icon } from '~/components/icon';
import { Divider } from '~/components/divider';
import { DecoderText } from '~/components/decoder-text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import styles from './contact.module.css';
import contactImg from '~/assets/contact-anime.jpeg';
import contactImgLarge from '~/assets/contact-anime.jpeg';
import contactImgPlaceholder from '~/assets/contact-anime.jpeg';
import contactSvg from './contact-graphic.svg';

const ContactText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Let’s Connect" start={visible} delay={500} />
    </Heading>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m always excited to talk about new ideas, collaborations, or anything related
      to backend engineering, Rust, and system architecture. If you’d like to discuss
      a project or simply want to say hello, feel free to reach out through any of
      the platforms below.
    </Text>

    <div className={styles.contactList} data-visible={visible}>
      <a href="mailto:lp3587269@gmail.com" className={styles.item}>
        <Icon icon="mail" />
        <span>lp3587269@gmail.com</span>
      </a>
    </div>

    <div className={styles.socials} data-visible={visible}>
      <a
        href="https://instagram.com/DRAKEN__1974"
        target="_blank"
        className={styles.socialLink}
      >
        <Icon icon="instagram" />
        Instagram
      </a>

      <a
        href="https://github.com/draken-1974"
        target="_blank"
        className={styles.socialLink}
      >
        <Icon icon="github" />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/gudhal-chauhan-187928295/"
        target="_blank"
        className={styles.socialLink}
      >
        <Icon icon="linkedin" />
        LinkedIn
      </a>
    </div>
  </Fragment>
);

export const meta = () => {
  return [
    {
      title: 'Contact',
      description: 'Get in touch with Gudhal Chauhan',
    },
  ];
};

export const Contact = ({ id = 'contact', sectionRef }) => {
  const [visible, setVisible] = useState(true);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.contact}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {({ nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            {/* LEFT COLUMN */}
            <div className={styles.column}>
              <ContactText visible={visible} titleId={titleId} />
            </div>

            {/* RIGHT COLUMN — IMAGE + SVG EXACT LIKE PROFILE */}
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={900}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Contact
                </div>
              </div>

              <div className={styles.image}>
                <img
                  src={contactImg}
                  srcSet={`${contactImg} 480w, ${contactImgLarge} 960w`}
                  placeholder={contactImgPlaceholder}
                  className={styles.contactGraphic}
                  alt="Contact section visual"
                  data-visible={visible}
                />

                <svg
                  className={styles.svg}
                  data-visible={visible}
                  viewBox="0 0 136 766"
                >
                  <use href={`${contactSvg}#contact-graphic`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
