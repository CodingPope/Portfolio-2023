import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Joe Pope. I’m a creative technologist who enjoys building things that sit at the
      intersection of software, design, and human behavior. While my foundation is in
      front-end and full-stack development, I’m less interested in titles than I am in how
      ideas become experiences—how something starts as a rough concept and turns into a
      product people actually want to use. I spend a lot of time experimenting: with
      interfaces, side projects, content, and new directions. Some of that shows up as web
      and mobile applications, some of it as YouTube videos, or product ideas. I’m
      naturally entrepreneurial, curious, and ADD by default. Outside of work, I travel
      when I can, camp, longboard, game. This portfolio is a snapshot of how I think, what
      I’ve built so far, and the kinds of problems I’m drawn to—both technical and
      creative.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <div className={styles.socialLinks} data-visible={visible}>
                <Button
                  iconHoverShift
                  className={styles.socialButton}
                  href="https://www.youtube.com/@Joe_Pope"
                  target="_blank"
                  rel="noopener noreferrer"
                  iconEnd="arrowRight"
                >
                  YouTube
                </Button>
                <Button
                  iconHoverShift
                  className={styles.socialButton}
                  href="https://www.instagram.com/thejoepope/"
                  target="_blank"
                  rel="noopener noreferrer"
                  iconEnd="arrowRight"
                >
                  Instagram
                </Button>
                <Button
                  iconHoverShift
                  className={styles.socialButton}
                  href="https://github.com/CodingPope/"
                  target="_blank"
                  rel="noopener noreferrer"
                  iconEnd="arrowRight"
                >
                  GitHub
                </Button>
              </div>
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="NFT representation of me"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
