import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { StatusQuo } from './StatusQuo';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-brown-100 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <StatusQuo />
    <Banner />
    <Footer />
  </div>
);

export { Base };
