type ITextBlockProps = {
  title?: string;
  description?: string; // Optional description
  paragraphs?: string[]; // makes it possible to add an array of paragraphs
  alignment?: 'left' | 'center' | 'right'; // Text alignment
  className?: string; // Custom styling
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: string;
  highlightColor?: string;
};

const TextBlock = (props: ITextBlockProps) => {
  // Map alignment to Tailwind classes
  const alignmentMap: Record<string, string> = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
  };

  const align = alignmentMap[props.alignment || 'center'];

  // Only center (mx-auto) if alignment is center
  const isCentered = props.alignment === 'center' || !props.alignment;
  const marginClass = isCentered ? 'mx-auto' : '';

  return (
    <div className={`px-4 py-12 ${props.className || ''}`}>
      {/* Title */}
      {props.title && (
        <h2 className={`mb-4 text-3xl font-bold text-primary-300 ${align}`}>
          {props.title}
        </h2>
      )}

      {/* Description */}
      {props.description && (
        <p
          className={`max-w-3xl text-lg text-brown-100 ${marginClass} ${align}`}
        >
          {props.description}
        </p>
      )}

      {/* Multiple Paragraphs (if provided) */}
      {props.paragraphs && (
        <div className={`max-w-3xl ${marginClass}`}>
          {props.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-4 text-lg text-brown-100 ${align} whitespace-pre-wrap`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export { TextBlock };
