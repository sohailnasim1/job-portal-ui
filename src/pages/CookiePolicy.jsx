import { useTheme } from '../context/ThemeContext';

const CookiePolicy = () => {
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
          Cookie Policy
        </h1>

        <div className={`space-y-6 ${sectionTextClass}`}>
          <p>
            This Cookie Policy explains how JobPortal uses cookies and similar
            technologies to recognize you when you visit our website and how
            you can manage your preferences.
          </p>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              What Are Cookies?
            </h2>
            <p>
              Cookies are small data files placed on your device when you
              visit a website. They are widely used to make websites work, or
              work more efficiently, as well as to provide reporting
              information.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              How We Use Cookies
            </h2>
            <p>
              We use cookies to keep you signed in, remember your preferences
              (such as theme and saved jobs), and understand how our site is
              used so we can improve it.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              Managing Cookies
            </h2>
            <p>
              Most browsers allow you to control cookies through their
              settings. You can usually find these settings in the
              "Options" or "Preferences" menu of your browser. Disabling
              cookies may affect the functionality of this site.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-2 ${headingTextClass}`}>
              Contact Us
            </h2>
            <p>
              If you have any questions about this Cookie Policy, please
              reach out via our Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
