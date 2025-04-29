import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div
    className="tab-content"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Contact Us</h2>
    <p>Email: support@onetaxfiler.com</p>
    <p>Phone: (123) 456-7890</p>
    <p>Address: 501 E 32nd St, Chicago, IL</p>
  </motion.div>
);

export default Contact;