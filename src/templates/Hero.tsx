import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type IHeroProps = {
  onContactClick: () => void;
};

const Hero = (props: IHeroProps) => {
  // ← Accept props
  return (
    <Background color="bg-primary-100">
      {/* Navbar */}
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/cemmeratmit/SoftMetrics">GitHub</Link>
        </li>
        <li>
          <button onClick={props.onContactClick}>
            {' '}
            {/* ← Use props */}
            Contact Us
          </button>
        </li>
      </NavbarTwoColumns>

      {/* Content */}
      <Section yPadding="pt-40 pb-32">
        <HeroOneButton
          title={
            <div className="mb-2">
              <>
                {'The Desktop Device for Textile Measurement\n'}
                <img
                  src="/assets/images/main-logo.png"
                  alt="SoftMetrics Logo"
                  width={1200}
                  height={400}
                  style={{ objectFit: 'contain' }}
                />
              </>
            </div>
          }
          description="Get Credible Results Fast and All in One Place."
          button={
            <div className="mb-20 mt-12">
              <button onClick={props.onContactClick}>
                {' '}
                {/* ← Use props */}
                <Button xl>Contact Us</Button>
              </button>
            </div>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
