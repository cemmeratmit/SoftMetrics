import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Mission"
    description="Textile testing is done behind closed doors, they are expensive, large and inaccessible.
This alienates small scale labs and independent researchers slowing down innovation.
SoftMetrics is a desktop device that provides credible results fast and all in one place, making textile measurement accessible to everyone."
  >
    <VerticalFeatureRow
      title="Democratizing textile measurement"
      description="Industry grade testing equipment is great! It is highly accurate and reliable. But is is also expensive, large and difficult to operate. We do not want to replace industry grade testing equipment, butwe want to democratize textile measurement by providing a desktop device that provides credible results fast and all in one place - without complicated setups. We want to make measuring of textiles and soft goods accessible to everyone."
      image="/assets/images/test-lab.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Yes, we want this!"
      description="We talked to over 50 researcers and educators and their need for fast and relieable results in early R&D convinced us. We want it. You want it. We need to build it."
      image="/assets/images/prusa.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="We?"
      description="We are SoftMetrics, a team of 3 MIT grad students with a passion for textiles, design and engineering. Your are interested in our project and want to learn more? Contact us!"
      image="/assets/images/team.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
