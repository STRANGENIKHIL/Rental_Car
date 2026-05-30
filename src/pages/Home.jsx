// Home Page Component
// This serves as the landing page of the application, rendering the Hero section and Featured vehicles.
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";



const Home = () => {
    return (
        <div>
            {/* The main intro and search filter panel */}
            <Hero />
            {/* Grid of featured vehicles available for rent */}
            <FeaturedSection />
            {/* Banner encouraging users to list their cars */}
            <Banner />
            <Testimonial />
            <NewsLetter />
            
        </div>
    );
};

export default Home;
