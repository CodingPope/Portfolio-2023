// import { Button } from 'components/Button';
// import { DecoderText } from 'components/DecoderText';
// import { Divider } from 'components/Divider';
// import { Footer } from 'components/Footer';
// import { Heading } from 'components/Heading';
// import { Icon } from 'components/Icon';
// import { Input } from 'components/Input';
// import { Meta } from 'components/Meta';
// import { Section } from 'components/Section';
// import { Text } from 'components/Text';
// import { tokens } from 'components/ThemeProvider/theme';
// import { Transition } from 'components/Transition';
// import { useFormInput } from 'hooks';
import { useRef } from 'react';
// import { cssProps, msToNum, numToMs } from 'utils/style';
// import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_it9yeve', 'service_it9yeve', form.current, '2J_Qizti9JpwzQY-M')
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

// function getStatusError({
//   status,
//   errorMessage,
//   fallback = 'There was a problem with your request',
// }) {
//   if (status === 200) return false;

//   const statuses = {
//     500: 'There was a problem with the server, try again later',
//     404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
//   };

//   if (errorMessage) {
//     return errorMessage;
//   }

//   return statuses[status] || fallback;
// }

// function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
//   const numDelay = msToNum(delayMs) * multiplier;
//   return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
// }
