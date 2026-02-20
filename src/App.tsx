import Layout from './components/Layout';
import Hero from './components/Hero';
import News from './components/News';
import VideoGallery from './components/VideoGallery';
import Profiles from './components/Profiles';

function App() {
  return (
    <Layout>
      <Hero />
      <Profiles />
      <News />
      <VideoGallery />
    </Layout>
  );
}

export default App;
