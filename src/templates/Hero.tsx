import Link from 'next/link';
import { useState } from 'react'; // For contact form

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { ContactForm } from './ContactForm'; // for contact form
import { Logo } from './Logo';

const Hero = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false); // for contact form

  return (
    <Background color="bg-primary-100">
      {/* Navbar */}
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/cemmeratmit/SoftMetrics">GitHub</Link>
        </li>
        <li>
          <button onClick={() => setContactFormOpen(true)}>
            {' '}
            {/* change link to form in navbar */}
            contact us
          </button>
        </li>
      </NavbarTwoColumns>

      {/* Content */}
      <Section yPadding="pt-40 pb-32">
        <HeroOneButton
          //          title={
          //            <>
          //              {'The Desktop Device for Textile Measurement\n'}
          //              <span className="text-primary-500">SoftMetrics.</span>
          //            </>
          //          }
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
          description="get credible results fast and all in one place."
          button={
            <div className="mb-20 mt-12">
              <button onClick={() => setContactFormOpen(true)}>
                {' '}
                {/* change link from button to form */}
                <Button xl>contact us</Button>
              </button>
            </div>
          }
        />
      </Section>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </Background>
  );
};

export { Hero };
