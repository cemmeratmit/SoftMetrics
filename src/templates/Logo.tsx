// import { AppConfig } from '../utils/AppConfig';
// only needs to be imported if logo is text based

type ILogoProps = {
  xl?: boolean;
};

/* EXAMPLE LOGO

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg>

      {AppConfig.site_name}
    </span>
  );
};
*/

const Logo = (props: ILogoProps) => {
  return (
    <span className="inline-flex items-center">
      <img
        src="/assets/images/logo-03.png"
        alt="Logo"
        style={{ height: props.xl ? '44px' : '32px' }}
      />
    </span>
  );
};

export { Logo };
