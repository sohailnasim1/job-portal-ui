import { useTheme } from '../context/ThemeContext';

const TermsOfService = () => {
  const { theme } = useTheme();

  const sectionTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const headingTextClass = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div
      className={`min-h-[calc(100vh-5rem)] ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-primary-50'
      } px-4 py-12`}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className={`text-4xl font-black mb-8 ${headingTextClass}`}>
          Terms of Service
        </h1>

        <div className={`space-y-6 ${sectionTextClass}`}>
          <p>
            These Terms of Service govern your use of JobPortal. By accessing
            or using our website, you agree to be bound by these terms.
          </p>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              Using Our Services
            </h2>
            <p>
              You must use JobPortal in compliance with all applicable laws
              and only for its intended purpose of finding jobs, posting job
              listings, and connecting employers with candidates.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              Account Responsibilities
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activity that occurs under your
              account.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              Content and Conduct
            </h2>
            <p>
              Job listings, applications, and profile information you submit
              must be accurate and not violate the rights of any third party.
              We reserve the right to remove content that violates these
              terms.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Continued
              use of JobPortal after changes are posted constitutes acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              reach out via our Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
