// import { Button } from 'components/Button';
// import { DecoderText } from 'components/DecoderText';
// import { Divider } from 'components/Divider';
// import { Footer } from 'components/Footer';
// import { Heading } from 'components/Heading';
// import { Meta } from 'components/Meta';
// import { Section } from 'components/Section';
// import { Text } from 'components/Text';
// import { tokens } from 'components/ThemeProvider/theme';
// import { Transition } from 'components/Transition';
// import { useFormInput } from 'hooks';
// import { useRef, useState } from 'react';
// import { cssProps, msToNum, numToMs } from 'utils/style';
// import styles from './Contact.module.css';
// import emailjs from '@emailjs/browser';

// export const Contact = () => {
//   const form = useRef();
//   const userName = useFormInput('');
//   const email = useFormInput('');
//   const message = useFormInput('');
//   const [sending, setSending] = useState(false);
//   const [complete, setComplete] = useState(false);
//   const initDelay = tokens.base.durationS;
//   const [testInfo, setTestInfo] = useState({ userName, email, message });
//   const sendEmail = e => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_it9yeve', 'template_mhwh75h', form.current, '2J_Qizti9JpwzQY-M')
//       .then(
//         result => {
//           console.log(result.text, e.target, testInfo);
//         },
//         error => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <Section className={styles.contact}>
//       <Meta
//         title="Contact"
//         description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
//       />
//       <Transition unmount in={!complete} timeout={1600}>
//         {(visible, status) => (
//           <form className={styles.form} ref={form} onSubmit={sendEmail}>
//             <Heading
//               className={styles.title}
//               data-status={status}
//               level={3}
//               as="h1"
//               style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
//             >
//               <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
//             </Heading>
//             <Divider
//               className={styles.divider}
//               data-status={status}
//               style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
//             />
//             <input
//               type="text"
//               name="reply_to"
//               required
//               className={styles.input}
//               style={getDelay(tokens.base.durationXS, initDelay)}
//               placeholder="Your Name"
//               {...userName}
//             />
//             <input
//               required
//               name="user_email"
//               type="email"
//               className={styles.input}
//               data-status={status}
//               style={getDelay(tokens.base.durationXS, initDelay)}
//               autoComplete="email"
//               placeholder="Your Email"
//               maxLength={512}
//               {...email}
//             />
//             <textarea
//               required
//               multiline
//               className={styles.input}
//               data-status={status}
//               style={getDelay(tokens.base.durationS, initDelay)}
//               autoComplete="off"
//               placeholder="Message"
//               maxLength={4096}
//               {...message}
//               name="message"
//             />
//             <br />
//             <Button
//               className={styles.button}
//               data-status={status}
//               data-sending={sending}
//               style={getDelay(tokens.base.durationM, initDelay)}
//               disabled={sending}
//               loading={sending}
//               loadingText="Sending..."
//               icon="send"
//               type="submit"
//               value="Send"
//             >
//               Send message
//             </Button>
//           </form>
//         )}
//       </Transition>
//       <Transition unmount in={complete}>
//         {(visible, status) => (
//           <div className={styles.complete} aria-live="polite">
//             <Heading
//               level={3}
//               as="h3"
//               className={styles.completeTitle}
//               data-status={status}
//             >
//               Message Sent
//             </Heading>
//             <Text
//               size="l"
//               as="p"
//               className={styles.completeText}
//               data-status={status}
//               style={getDelay(tokens.base.durationXS)}
//             >
//               I’ll get back to you within a couple days, sit tight
//             </Text>
//             <Button
//               secondary
//               iconHoverShift
//               className={styles.completeButton}
//               data-status={status}
//               style={getDelay(tokens.base.durationM)}
//               href="/"
//               icon="chevronRight"
//             >
//               Back to homepage
//             </Button>
//           </div>
//         )}
//       </Transition>
//       <Footer className={styles.footer} />
//     </Section>
//   );
// };

// function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
//   const numDelay = msToNum(delayMs) * multiplier;
//   return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
// }
