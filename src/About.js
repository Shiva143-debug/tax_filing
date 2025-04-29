import { motion } from 'framer-motion';

const About = () => (
    <motion.div
      className="tab-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Us</h2>
      <p>We are a leading company offering the best services in tax filing. With a decade of experience, we help individuals and businesses meet compliance effortlessly.</p>
    </motion.div>
  );
  
  export default About;