import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="A TOOL FOR EVERYONE"
    description="We are building a device for performing measurements without barriers.\n
    Maximum Flexibility. Minimum Barriers.
    Maximum Accuracy. Minimal Size.
    It is small enough to fit your desk.
    It is easy to use and provides instructions if you are new to mechanical testing.
    It provides results in minutes to fit your busy schedule.
    It is modular and can be adjusted for any soft goods innovation you might be working on.
    And it is so affordable, that you can have one too."
  >
    <VerticalFeatureRow
      title="DEMOCRATIZING TEXTILE RESEARCH"
      description="Industry grade testing equipment is highly accurate and reliable. But is is also expensive, large and requires training to operate. We do not want to replace industry grade testing equipment, but we want to democratize textile measurement by providing trend based measurements and conclusive data fast and all in one place without complicated setups. We want to make measuring of textiles and soft goods accessible to everyone."
      image="/assets/images/blueprint-drawing.png"
      imageAlt="drawing of low fidelity measurements and industrial testing equipment"
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
