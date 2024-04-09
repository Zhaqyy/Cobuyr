/* eslint-disable react/no-unescaped-entities */
import "../Styles/Plat.css";
import { Badge } from "../Components/badge";
import { Icon } from "../assets/icon";
import { motion } from "framer-motion";
import Transition from "../Components/Transition";
import { Section } from "../Components/inView";
import Footer from "../Components/Footer/footer";
import { SpotBtn } from "../Components/magnetBtn";

const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  transition: { staggerChildren: 0.4, duration: 0.5 },
};

const platVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

const Platform = () => {
  return (
    <>
      {/* <motion.section
        className="ind"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      > */}
      <Section className="platHead">
        <div className="plattext">
          <h2>Modernize your checkout overnight to attract and
retain more customers</h2>
          <p>
            Cobuyr is the first and only all-in-one payments, connected data and
            customer analytics platform that empowers retailers to acquire more
            customers, increase average order value, and lower the cost of
            customer acquisition by enabling people to buy together for the
            first time.
          </p>
          <SpotBtn text={"Book Demo"} /* variant={homeVariants} */ />
        </div>
        <div className="platimg">
          <img src="/group.webp" alt="dsdss" />
        </div>
      </Section>

      <Section className="info-banner">
        <h2>Give your customers the buying experience they want</h2>
        <p>
          Cobuyr provides the checkout experience consumers expect that will
          drive and improve customer acquisition and conversion for retailers.
          Developed for the modern era of Social Buying, Cobuyr transforms your
          traditional single person payment transaction into a multi-person,
          money-making group purchasing experience by enabling many people to
          buy together for the first time at checkout.
        </p>
      </Section>

      <Section className="platList">
        <h2>Powerful Capabilities in One Solution</h2>

        <div className="list">
          <div className="subtext">
            <h3>Enable customers to split purchases</h3>
            <p>
              Cobuyr's pre-built API Plug-ln enables you to add the Group Buy
              form to your website, and within your existing check in process,
              in just minutes so your customers can start to buy together today.
              It's the quick and simple to provide your customers with the
              modern checkout experience they expect including the ability to
              communicate with each other at payment.
            </p>
          </div>
          <div /* className="col-bg" */ className="platimg">
            <img src="/group.webp" alt="" />
          </div>
        </div>

        <div className="list">
          <div className="subtext">
            <h3>Give your custorners multiple ways to buy</h3>
            <p>
              Cobuyr enables your customers to use multiple cards in a single
              payment transaction by using the Cobur Group Buy checkout form at
              checkout. Customers can use the group buy functionality to split
              purchases, split payment cards and to securely share payment links
              through email, social media and text messaging.
            </p>
          </div>
          <div /* className="col-bg" */ className="platimg">
            <img src="/group.webp" alt="" />
          </div>
        </div>
        <div className="list">
          <div className="subtext">
            <h3>Integrate your systems and data in minutes</h3>
            <p>
              Cobuyr automatically integrates your payments, CRM and e-commerce
              systems using pre- built APIs, as well automating payments,
              fulfilment and marketing processes between Cobuyr and your systems
              so there is a seamless flow of data and information, and one
              unified experience for your customers and employees.
            </p>
          </div>
          <div /* className="col-bg" */ className="platimg">
            <img src="/group.webp" alt="" />
          </div>
        </div>
        <div className="list">
          <div className="subtext">
            <h3>Transform your payments data into customer insights</h3>
            <p>
              Cobuy unifies all of your data including single and multi-party
              payment transactions, customer information, products and much more
              into a single view so you have a complete understanding of who is
              buying with whom, when and where. Using Cobuyr's pre-built, auto
              populated dashboards and reports, you have connected insights to
              supercharge your marketing and communications strategy.
            </p>
          </div>
          <div /* className="col-bg" */ className="platimg">
            <img src="/group.webp" alt="" />
          </div>
        </div>
        <div className="list">
          <div className="subtext">
            <h3>Predict what your customers will buy next</h3>
            <p>
              Cobuyr features advanced analytics which enable you to identify
              which of your customers are the most valued by volume of
              transactions and customer lifetime value and, uniquely, which of
              your connected customers are purchasing together within groups of
              cobuyers and which of these cobuyers are primary and secondary
              buyers.
            </p>
          </div>
          <div /* className="col-bg" */ className="platimg">
            <img src="/group.webp" alt="" />
          </div>
        </div>
      </Section>

      <Footer />
      {/* </motion.section> */}
    </>
  );
};

const TransPlatform = Transition(Platform);
export default TransPlatform;
