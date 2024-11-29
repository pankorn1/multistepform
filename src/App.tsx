import { Logo } from './components';
import { MultiStepFormProvider, MultiStepForm } from './modules';

function App() {
  return (
    <main className="main-wrapper">
      <div className="support">
        <div className="support__inner">
          <div className="logo">
            <Logo />
            <p>PANKORN</p>
          </div>
          <div className="contact-support">
            <p>
              Need help? <br /> Contact our customer support
            </p>
            <p>
              <a href="mailto:support@domain.com">earth.pankorn@gmail.com</a>
            </p>
            <p>
              <a href="tel:1234567890">098 765 4321</a>
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <MultiStepFormProvider>
          <MultiStepForm />
        </MultiStepFormProvider>
      </div>
    </main>
  );
}

export default App;
