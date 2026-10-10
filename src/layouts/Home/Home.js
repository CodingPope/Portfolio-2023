import figmaCoverL from 'assets/figmaCover-large.webp';
import figmaCover from 'assets/figmaCover.webp';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import NiceToMeetHomeL from 'assets/NiceToMeetHome-large.webp';
import NiceToMeetHome from 'assets/NiceToMeetHome.webp';
import NiceToMeetSignInL from 'assets/NiceToMeetSignIn-large.webp';
import NiceToMeetSignIn from 'assets/NiceToMeetSignIn.webp';
import ProxChatImg1L from 'assets/ProxChatImg1-large.webp';
import ProxChatImg1 from 'assets/ProxChatImg1.webp';
import ProxChatImg2L from 'assets/ProxChatImg2-large.webp';
import ProxChatImg2 from 'assets/ProxChatImg2.webp';
import SocialCircleMapL from 'assets/SocialCircleMap-large.webp';
import SocialCircleMap from 'assets/SocialCircleMap.webp';
import SocialCircleProfileL from 'assets/SocialCircleProfile-large.webp';
import SocialCircleProfile from 'assets/SocialCircleProfile.webp';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import VannaTerminalL from 'assets/VannaTerminal-large.webp';
import VannaTerminal from 'assets/VannaTerminal.webp';
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
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      details,
    ];

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
        title="Vanna Trading Terminal"
        description="A browser-based paper trading terminal built for practicing execution without risking real capital.

Vanna streams live-feel market data into a customizable grid workspace — watchlist, order book, depth chart, and order ticket — and routes every order through a simulated paper-trading engine with realistic fills, spreads, and order lifecycle tracking."
        techStack={[
          'React + TypeScript',
          'FastAPI (Python)',
          'Real-time market data',
          'AG Grid & lightweight-charts',
          'Paper trading engine',
          'React Three Fiber',
        ]}
        status="Beta"
        buttonText="Try it live"
        buttonLink="https://vanna-trading-terminal.vercel.app/"
        secondaryButtonText="GitHub"
        secondaryButtonLink="https://github.com/CodingPope/vanna-trading-terminal"
        model={{
          type: 'laptop',
          alt: 'Vanna trading terminal dashboard showing a live chart, order book, and order ticket',
          textures: [
            {
              srcSet: [VannaTerminal, VannaTerminalL],
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
        title="Social Circle"
        description="Map-first hyperlocal events platform -

A product-focused app designed to help people meet organically through shared interests. Social Circle rethinks local discovery by combining real-time maps, event-based interaction, and lightweight social context—without turning connection into a swipe game."
        techStack={[
          'React Native',
          'Firebase',
          'Maps',
          'Event chat',
          'RSVP & discovery',
          'Interest-based filtering',
        ]}
        status="TestFlight beta"
        caseStudyLink="/articles/Why-Social-Circle-Exists"
        buttonText="GitHub"
        buttonLink="https://github.com/CodingPope/SocialCircle"
        secondaryButtonText="Join TestFlight"
        secondaryButtonLink="https://testflight.apple.com/join/qSuvsM4q"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [SocialCircleMap, SocialCircleMapL],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [SocialCircleProfile, SocialCircleProfileL],
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
        title="Nice to Meet Ya"
        description="Private community spaces for the groups you actually share a place or a pastime with -

A mobile app for apartment buildings, HOAs, dog meetups, pickup sports and other real-world groups. Join without ever sharing your phone number, choose what is allowed to interrupt you, and keep up with alerts, events, group chat and a neighbor exchange without the 300 person group chat."
        techStack={[
          'React Native (Expo)',
          'TypeScript',
          'Supabase / Postgres',
          'Apple & Google sign-in',
          'Push notifications',
          'Time-limited alerts',
        ]}
        status="In development"
        buttonText="GitHub"
        buttonLink="https://github.com/CodingPope/building-app"
        model={{
          type: 'phone',
          alt: 'Nice to Meet Ya sign-in screen and building home feed',
          textures: [
            {
              srcSet: [NiceToMeetSignIn, NiceToMeetSignInL],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [NiceToMeetHome, NiceToMeetHomeL],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="ProxChat"
        description="Proximity-based voice/chat experiment

A concept project exploring how communication can emerge from shared physical presence rather than profiles or social graphs. ProxChat focuses on ephemeral, low-friction interaction and real-time awareness."
        techStack={[
          'Agora / WebRTC',
          'Realtime communication',
          'Presence detection',
          'Ephemeral rooms',
        ]}
        status="Concept prototype"
        buttonText="GitHub"
        buttonLink="https://github.com/CodingPope/ProxChat"
        model={{
          type: 'phone',
          alt: 'ProxChat app screen',
          textures: [
            {
              srcSet: [ProxChatImg2, ProxChatImg2L],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [ProxChatImg1, ProxChatImg1L],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="UI/UX Designs"
        description="Projects that I am currently building out on Figma"
        buttonText="View project"
        buttonLink="https://www.figma.com/design/KaSKxkYtLWSDJx29qunN0Y/UI-UX-Designs?node-id=444-12"
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
