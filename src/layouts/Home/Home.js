import movieListL from 'assets/MovieList.png';
import figmaCover from 'assets/figmaCover.png';
import figmaCoverL from 'assets/figmaCoverL.png';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import movieList from 'assets/MovieList.png';
import cryptoImgL from 'assets/crypto-large.PNG';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import crypto from 'assets/crypto.PNG';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Full-stack', 'Front-end', 'Content Creator', 'Oreo Enthusiast'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
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
      <Meta
        title="Developer"
        description="Design portfolio of Jokwon Pope — a software developer  working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Movie Ranking and Reviews"
        description="Check the ranking of your favorite movies and get information on new movies"
        buttonText="View repo"
        buttonLink="https://github.com/CodingPope/Movie-List"
        model={{
          type: 'laptop',
          alt: 'MovieList photo',
          textures: [
            {
              srcSet: [movieList, movieListL],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Crypto tracking"
        description="Design and development for a crypto tracking app built in React Native"
        buttonText="View repo"
        buttonLink="https://github.com/CodingPope/CryptoTracker"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [crypto, cryptoImgL],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [crypto, cryptoImgL],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="UI/UX Designs"
        description="Projects that I am currently builing out on Figma"
        buttonText="View project"
        buttonLink="https://www.figma.com/file/KaSKxkYtLWSDJx29qunN0Y/UI%2FUX-Designs?"
        model={{
          type: 'laptop',
          alt: 'An image of a design system',
          textures: [
            {
              srcSet: [figmaCover, figmaCoverL],
              placeholder: sprTexturePlaceholder,
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
