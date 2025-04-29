import { motion } from 'framer-motion';

const Refund = () => (
  <motion.div
    className="tab-content"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Refund Policy</h2>
    <p>If you're not satisfied, we offer a full refund within 14 days of purchase. Please contact support with your order ID to initiate a return.</p>
  </motion.div>
);

export default Refund;