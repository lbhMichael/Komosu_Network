import FAQ from "@/sections/faq";
import LandingPage from "@/sections/landingPage";
import Offer from "@/sections/offer";
import OfferAnimation from "@/sections/offerAmin";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import VideoShowcase from "@/sections/videoShowcase";
import styles from "./page.module.css"

const Home = () => {
  return <div>
  <section className={styles.section}><LandingPage/></section>
  <section className={styles.section}>
  <Services/>
  </section>
  <section className={styles.section}>
    <VideoShowcase/>
  </section>
  <section className={styles.section}>
    <Offer/>
  </section>
  <section className={styles.section}>
    <OfferAnimation/>
  </section>
  <section className={styles.section}>
    <Testimonials/>
  </section>
  <section className={styles.section}>
    <FAQ/>
  </section>
  </div>;
};

export default Home;
