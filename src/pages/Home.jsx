import Hero from "../components/home/Hero";
import QuickOverview from "../components/home/QuickOverview";
import EventsPreview from "../components/home/EventsPreview";
import Newsletter from "../components/home/Newsletter";
import FooterPreview from "../components/home/FooterPreview";

const Home = () => {
  return (
    <div className="w-full">
      <section className="bg-primary-50">
        <Hero />
      </section>

      <section className="bg-bg-primary-80">
        <QuickOverview />
      </section>

      <section className="bg-primary-100">
        <EventsPreview />
      </section>

      <section className="bg-secondary-80">
        <Newsletter />
      </section>

      <section className="bg-neutral-800 text-neutral-100">
        <FooterPreview />
      </section>
    </div>
  );
};

export default Home;
