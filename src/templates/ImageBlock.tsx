type IImageBlockProps = {
  src: string; // Image path (required)
  alt: string; // Alt text (required)
  caption?: string; // Optional caption below image
  width?: number; // Image width
  height?: number; // Image height
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
  alignment?: 'left' | 'center' | 'right';
  className?: string; // Custom styling
  backgroundColor?: string; // Background color
};

const ImageBlock = (props: IImageBlockProps) => {
  // Map alignment
  const alignmentMap: Record<string, string> = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
  };

  const align = alignmentMap[props.alignment || 'center'];

  // Map max width
  const maxWidthMap: Record<string, string> = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    full: 'max-w-full',
  };

  const maxWidth = maxWidthMap[props.maxWidth || 'full'];

  return (
    <div className={`px-4 py-12 ${props.className || ''}`}>
      {/* Image Container */}
      <div
        style={{ display: 'flex', justifyContent: align }}
        className={`${maxWidth}`}
      >
        <img
          src={props.src}
          alt={props.alt}
          width={props.width || 800}
          height={props.height || 600}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      {/* Caption (if provided) */}
      {props.caption && (
        <p className="mt-4 text-center text-sm text-gray-600">
          {props.caption}
        </p>
      )}
    </div>
  );
};

export { ImageBlock };
