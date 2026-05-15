import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { ImageBlock } from './ImageBlock';
import { StatusQuo } from './StatusQuo';
import { TextBlock } from './TextBlock';

const Base = () => (
  <div className="text-brown-100 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <TextBlock
      title="A TOOL FOR EVERYONE"
      titleSize="md"
      paragraphs={[
        'Maximum Flexibility. Minimum Barriers. \nMaximum Accuracy. Minimal Size.',
        ' > It is small enough to fit your desk.\n > It is easy to use and provides instructions if you are new to mechanical testing. \n > It provides results in minutes to fit your busy schedule. \n > It is modular and can be adjusted for any soft goods innovation you might be working on.',
        'And it is so affordable, that you can have one too.',
      ]}
      // description="Maximum Flexibility. Minimum Barriers. Maximum Accuracy. Minimal Size. It is small enough to fit your desk. It is easy to use and provides instructions if you are new to mechanical testing. It provides results in minutes to fit your busy schedule. It is modular and can be adjusted for any soft goods innovation you might be working on. And it is so affordable, that you can have one too."
      alignment="left"
      backgroundColor="bg-gray-100"
    />
    <ImageBlock
      src="/assets/images/blueprint-drawing.png"
      alt="Our solution is more flexible than industrial testing, but more accurate than low fidelity setups."
      // caption="Our solution is more flexible than industrial testing, but more accurate than low fidelity setups."
      maxWidth="full"
      alignment="center"
    />
    {/* <VerticalFeatures /> */}{' '}
    {/* temporarily commented out, can be brought back */}
    <StatusQuo />
    <Banner />
    <Footer />
  </div>
);

export { Base };
