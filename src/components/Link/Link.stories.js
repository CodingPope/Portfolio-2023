import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://Joew.com">Primary link</Link>
    <Link secondary href="https://Joew.com">
      Secondary link
    </Link>
  </StoryContainer>
);
