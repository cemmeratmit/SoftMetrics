import Image from 'next/image';

import { Section } from '@/layout/Section';

const StatusQuo = () => (
  <Section
    title="Status Quo"
    description="See where our minds are currently at and what we're working on."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/ai-render.png"
              alt="status quo image"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/first-proto.png"
              alt="First prototype made from old 3D printer"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/stacked-logo.png"
              alt="Logo Design."
              width={260}
              height={224}
            />
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/detail-5.png"
              alt="added handles"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/ruler.png"
              alt="low fidelity testing damages credibility"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/studio-clean.png"
              alt="second prototype in our studio"
              width={260}
              height={224}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { StatusQuo };
