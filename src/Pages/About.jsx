import "../Styles/About.css"
import { Badge, IconBadge } from "../Components/badge";

const About = () => {
  return (
    <>
      <section className="who">
        <div className="who-head">
        <Badge iconUrl="iuaevrjs" trigger="loop" text="Welcome" />
          <h1>
            Cobuyr pioneered Social Buying, redefining e-commerce payments into
            a collaborative experience.
          </h1>
        </div>
        <div className="who-text">
          <p>
            At Cobuyr, our vision revolves around fostering innovative
            connections among people through technology. In an era where
            everyday essentials strain budgets and sharing experiences enriches
            lives, we recognized a crucial gap in the e-commerce landscape: the
            inability to facilitate shared payments for products and services.
            Traditional e-commerce methods hinder the collective buying
            experience. Online checkout processes typically cater to
            single-purchase transactions, limiting social dynamics and business
            potential. However, we've brought forth a game-changing solution.
            Cobuyr pioneered Social Buying, redefining e-commerce payments into
            a collaborative experience. Our platform empowers families, friends,
            and communities within marketplaces to unite in group purchases for
            the first time.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;