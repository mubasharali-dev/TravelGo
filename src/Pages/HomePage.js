import Banner from "../Components/Banner";
import Flights from "../Components/Flights";
import Footer from "../Components/Footer";
import Island from "../Components/Island";
import Navbar from "../Components/NavBar";
import Packages from "../Components/Packages";
import Testimonials from "../Components/Testimonials";
import { Container } from "@chakra-ui/react"; // Import Chakra UI Container component

const HomePage = ({isLoggedIn, setFetchAgain, fetchAgain}) => {
    return (
        <>
            <Container maxW="100%" p={0} overflowX = "hidden"> {/* Use Container and set maxW to 100% */}

                <Navbar
                    isLoggedIn={isLoggedIn}
                    setFetchAgain={setFetchAgain}
                    fetchAgain={fetchAgain}
                />
                <Banner/>
                <Flights/>
                <Packages/>
                <Island/>
                <Testimonials/>
                <Footer/>
            </Container>
        </>
    );
};

export default HomePage;
