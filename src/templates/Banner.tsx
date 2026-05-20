import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

type IBannerProps = {
  onContactClick: () => void;
};

const Banner = (props: IBannerProps) => {
  return (
    <Section>
      <CTABanner
        title="We are currently looking for collaborators and early testers."
        subtitle="Interested? Talk to us!"
        button={
          <button onClick={props.onContactClick}>
            {' '}
            <Button>Contact</Button>
          </button>
        }
      />
    </Section>
  );
};

export { Banner };
