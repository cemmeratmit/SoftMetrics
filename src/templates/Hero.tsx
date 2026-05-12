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
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'The Desktop Device for Textile Measurement\n'}
              <span className="text-primary-500">SoftMetrics.</span>
            </>
          }
          description="get credible results fast and all in one place."
          button={
            <button onClick={() => setContactFormOpen(true)}>
              {' '}
              {/* change link from button to form */}
              <Button xl>contact us</Button>
            </button>
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
