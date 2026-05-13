import { useState } from 'react';

type IContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactForm = (props: IContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send to your API route
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email');
      }

      // Success!
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Close after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        props.onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      // console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!props.isOpen) return null;

  return (
    <>
      {/* Overlay/Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={props.onClose} />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 mx-4 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>

        {submitted ? (
          <div className="py-8 text-center">
            <p className="font-semibold text-green-600">✓ Thank you!</p>
            <p className="mt-2 text-gray-600">We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            {error && (
              <div className="rounded border border-red-200 bg-red-50 px-4 py-2 text-red-600">
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100"
                placeholder="Your message..."
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 rounded-lg bg-primary-600 px-4 py-2 font-medium text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
              <button
                type="button"
                onClick={props.onClose}
                disabled={loading}
                className="flex-1 rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300 disabled:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export { ContactForm };
