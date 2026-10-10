import Head from 'next/head';
import { useRouter } from 'next/router';

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const name = 'Jokwon Pope';
const defaultOgImage = `${siteUrl}/social-image.png`;

export const Meta = ({ title, description, prefix = name, ogImage = defaultOgImage }) => {
  const { asPath } = useRouter();
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  const isDefaultImage = ogImage === defaultOgImage;

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={name} />

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Banner for the site" />
      {isDefaultImage && <meta property="og:image:type" content="image/png" />}
      {isDefaultImage && <meta property="og:image:width" content="1280" />}
      {isDefaultImage && <meta property="og:image:height" content="675" />}
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${asPath.split(/[?#]/)[0]}`} />
      <meta property="og:description" content={description} />
    </Head>
  );
};
