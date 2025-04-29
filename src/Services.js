// import { motion } from 'framer-motion';

// const Services = () => (
//   <motion.div
//     className="tab-content"
//     initial={{ opacity: 0, y: 30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h2>Our Services</h2>
//     <ul>
//       <li>✔️ Tax Filing for Individuals</li>
//       <li>✔️ Business Return Services</li>
//       <li>✔️ Audit Assistance</li>
//       <li>✔️ Bookkeeping Services</li>
//     </ul>
//   </motion.div>
// );

// export default Services;

import React from 'react';
import './ServiceSection.css';
import { FaFileAlt, FaEdit, FaFolderOpen, FaBalanceScale, FaIdBadge, FaPercentage } from 'react-icons/fa';

const services = [
  {
    icon: <FaFileAlt size={36} />,
    title: 'Advance Tax Planning',
    description: 'Tax Planning is minimizing your tax liability by making the best use of all...'
  },
  {
    icon: <FaEdit size={36} />,
    title: 'Amendment',
    description: 'An amended return is a return filed in order to make corrections ...'
  },
  {
    icon: <FaFolderOpen size={36} />,
    title: 'Extension Filing',
    description: 'A filing extension is an exemption made to both individual taxpayers ...'
  },
  {
    icon: <FaBalanceScale size={36} />,
    title: 'Tax Representation',
    description: 'If you have a tax problem, a notice from the IRS, or are under audit, you...'
  },
  {
    icon: <FaIdBadge size={36} />,
    title: 'ITIN Processing',
    description: 'An Individual Taxpayer Identification Number (ITIN) is a tax ...'
  },
  {
    icon: <FaPercentage size={36} />,
    title: 'Federal & State Filing',
    description: 'Report of Foreign Bank and Financial Accounts, that must be filed with ...'
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h4 style={{color:"yellow"}}>Services</h4>
        <h2>The fields on which we give services</h2>
      </div>
      <div className="card-container">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="icon-box">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="read-more">Read more →</span>
            {/* {service.title === 'Federal & State Filing' && <span className="read-more">Read more →</span>} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
