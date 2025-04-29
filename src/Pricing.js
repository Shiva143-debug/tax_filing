import { motion } from 'framer-motion';

const Pricing = () => (
  <motion.div
    className="tab-content"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Pricing</h2>
    <div className="pricing-tiers">
      <div className="tier">
        <h3>Basic</h3>
        <p>$49/year</p>
        <p>Includes personal tax filing</p>
      </div>
      <div className="tier">
        <h3>Pro</h3>
        <p>$99/year</p>
        <p>Includes personal + business filing</p>
      </div>
      <div className="tier">
        <h3>Premium</h3>
        <p>$199/year</p>
        <p>All services + audit support</p>
      </div>
    </div>
  </motion.div>
);

export default Pricing;