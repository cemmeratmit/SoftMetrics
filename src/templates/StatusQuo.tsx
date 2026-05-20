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
              src="/assets/images/timeline.png"
              alt="status quo image"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/design.png"
              alt="status quo image"
              width={260}
              height={224}
            />
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/moodboard.png"
              alt="status quo image"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/samples.png"
              alt="status quo image"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/work.png"
              alt="status quo image"
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
