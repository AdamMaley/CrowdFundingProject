import { Fragment } from "react";
import mobileHero from "../images/image-hero-mobile.jpg";
import desktopHero from "../images/image-hero-desktop.jpg";

const Showcase = () => {
    return (
        <Fragment>
            <section className="md:hidden">
                <img src={mobileHero} alt="" />
            </section>

            <section className="hidden">
                <img src={desktopHero} alt="" />
            </section>
        </Fragment>
    )
}

export default Showcase
