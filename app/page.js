import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Technologies, World } from '../sections';

const Page = () => (
  <div className="bg-gray-900 overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Explore />
    </div>

    <div className="relative">
      <GetStarted />
      <Technologies />
    </div>
    <Footer />
  </div>
);

export default Page;
