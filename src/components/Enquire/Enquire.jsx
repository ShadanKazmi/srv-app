// import React from 'react';
// import './enquire.css';

// import image1 from '../../assets/img1.jpg'
// import image2 from '../../assets/img2.png'
// import image3 from '../../assets/img3.jpg'
// import image4 from '../../assets/img4.jpg'
// import image5 from '../../assets/img5.png'
// import image6 from '../../assets/img6.png'
// const Enquire = () => {
//   return (
//     <section className="enquire">
//       <div className="enquire__inner">

//         {/* LEFT CONTENT */}
//         <div className="enquire__content">
//           <p className="enquire__eyebrow">
//             Discover Gurugram’s
//           </p>

//           <h1 className="enquire__title">
//             Top 30+ Schools
//           </h1>

//           <p className="enquire__subtitle">
//             ALL IN ONE PLACE
//           </p>

//           <div className="enquire__pill">
//             <div className="enquire__pill-content">
//               <div className="enquire__pill-left">
//                 <strong>Apparel House,</strong>
//                 <span>Sec 44, Gurugram</span>
//               </div>

//               <div className="enquire__pill-divider"></div>

//               <div className="enquire__pill-right">
//                 <strong>2–3 August 2025</strong>
//                 <span>Sat–Sun | 10AM – 6PM</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="enquire__media">
//           {/* Column 1 */}
//           <div className="enquire__media-column">
//             <div className="enquire__media-track">
//               {/* ORIGINAL */}
//               <div className="enquire__media-item">
//                 <img src={image1} alt="" />
//               </div>
//               <div className="enquire__media-item">
//                 <img src={image4} alt="" />
//               </div>

//               {/* DUPLICATE */}
//               <div className="enquire__media-item">
//                 <img src={image1} alt="" aria-hidden="true" />
//               </div>
//               <div className="enquire__media-item">
//                 <img src={image4} alt="" aria-hidden="true" />
//               </div>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div className="enquire__media-column">
//             <div className="enquire__media-track">
//               {/* ORIGINAL */}
//               <div className="enquire__media-item">
//                 <img src={image2} alt="" />
//               </div>
//               <div className="enquire__media-item">
//                 <img src={image5} alt="" />
//               </div>

//               {/* DUPLICATE */}
//               <div className="enquire__media-item">
//                 <img src={image2} alt="" aria-hidden="true" />
//               </div>
//               <div className="enquire__media-item">
//                 <img src={image5} alt="" aria-hidden="true" />
//               </div>
//             </div>
//           </div>

//           {/* Column 3 */}
//           <div className="enquire__media-column">
//             <div className="enquire__media-track">
//               {/* ORIGINAL */}
//               <div className="enquire__media-item">
//                 <img src={image3} alt="" />
//               </div>
//               <div className="enquire__media-item">
//                 <img src={image6} alt="" />
//               </div>

//               {/* DUPLICATE */}
//               <div className="enquire__media-item">
//                 <img src={image3} alt="" aria-hidden="true" />
//               </div>
//               <div className="enquire__media-item">
//                 <img src={image6} alt="" aria-hidden="true" />
//               </div>
//             </div>
//           </div>
//         </div>





//         {/* ENQUIRE FORM */}
//         <div className="enquire__form">
//           <h2 className="enquire__form-title">Enquire Now</h2>

//           <form className="enquire__form-fields">
//             <input
//               type="text"
//               placeholder="Parent’s Name"
//               aria-label="Parent’s Name"
//             />

//             <input
//               type="tel"
//               placeholder="Phone number"
//               aria-label="Phone number"
//             />

//             <input
//               type="text"
//               placeholder="Which grade are you looking for?"
//               aria-label="Which grade are you looking for?"
//             />

//             {/* SUBMIT CTA (REUSED) */}
//             <button type="submit" className="enquire__submit">
//               <span className="enquire__submit-icon">↗</span>
//               <span className="enquire__submit-text">Submit</span>
//             </button>
//           </form>
//         </div>



//       </div>
//     </section>
//   );
// };

// export default Enquire;


// import React, { useEffect, useRef, useState } from 'react';
// import './enquire.css';

// import image1 from '../../assets/img1.jpg';
// import image2 from '../../assets/img2.png';
// import image3 from '../../assets/img3.jpg';
// import image4 from '../../assets/img4.jpg';
// import image5 from '../../assets/img5.png';
// import image6 from '../../assets/img6.png';

// const Enquire = () => {
//   const rowRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const maxIndex = 2;

//   const go = (dir) => {
//     setIndex((prev) =>
//       dir === 'next'
//         ? Math.min(prev + 1, maxIndex)
//         : Math.max(prev - 1, 0)
//     );
//   };

//   // Horizontal autoplay
//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((i) => (i + 1) % (maxIndex + 1));
//     }, 6000);

//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     if (rowRef.current) {
//       rowRef.current.style.transform = `translateX(-${index * 220}px)`;
//     }
//   }, [index]);

//   return (
//     <section className="enquire">
//       <div className="enquire__inner">

//         {/* LEFT CONTENT */}
//         <div className="enquire__content">
//           <p className="enquire__eyebrow">Discover Gurugram’s</p>
//           <h1 className="enquire__title">Top 30+ Schools</h1>
//           <p className="enquire__subtitle">ALL IN ONE PLACE</p>

//           <div className="enquire__pill">
//             <div className="enquire__pill-content">
//               <div className="enquire__pill-left">
//                 <strong>Apparel House,</strong>
//                 <span>Sec 44, Gurugram</span>
//               </div>
//               <div className="enquire__pill-divider" />
//               <div className="enquire__pill-right">
//                 <strong>2–3 August 2025</strong>
//                 <span>Sat–Sun | 10AM – 6PM</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MEDIA SLIDER */}
//         <div
//           className="enquire__media-slider"
//           aria-roledescription="carousel"
//           aria-label="School gallery"
//         >
//           <div className="enquire__media-row" ref={rowRef}>

//             {/* COLUMN 1 */}
//             <div className="enquire__media-column">
//               <div className="enquire__media-track">
//                 {[image1, image4, image1, image4].map((img, i) => (
//                   <div className="enquire__media-item" key={i}>
//                     <img src={img} alt="" aria-hidden={i > 1} />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* COLUMN 2 */}
//             <div className="enquire__media-column">
//               <div className="enquire__media-track reverse">
//                 {[image2, image5, image2, image5].map((img, i) => (
//                   <div className="enquire__media-item" key={i}>
//                     <img src={img} alt="" aria-hidden={i > 1} />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* COLUMN 3 */}
//             <div className="enquire__media-column">
//               <div className="enquire__media-track">
//                 {[image3, image6, image3, image6].map((img, i) => (
//                   <div className="enquire__media-item" key={i}>
//                     <img src={img} alt="" aria-hidden={i > 1} />
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* FORM */}
//         <div className="enquire__form">
//           <h2 className="enquire__form-title">Enquire Now</h2>

//           <form className="enquire__form-fields">
//             <input placeholder="Parent’s Name" />
//             <input placeholder="Phone number" />
//             <input placeholder="Which grade are you looking for?" />

//             <button type="submit" className="enquire__submit">
//               <span className="enquire__submit-icon">↗</span>
//               <span className="enquire__submit-text">Submit</span>
//             </button>
//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Enquire;

import React from 'react';
import './enquire.css';

import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';
import image5 from '../../assets/img5.png';
import image6 from '../../assets/img6.png';

const Enquire = () => {
  return (
    <section className="enquire">
      <div className="enquire__inner">

        {/* LEFT CONTENT */}
        <div className="enquire__content">
          <p className="enquire__eyebrow">Discover Gurugram’s</p>
          <h1 className="enquire__title">Top 30+ Schools</h1>
          <p className="enquire__subtitle">ALL IN ONE PLACE</p>

          <div className="enquire__pill">
            <div className="enquire__pill-content">
              <div className="enquire__pill-left">
                <strong>Apparel House,</strong>
                <span>Sec 44, Gurugram</span>
              </div>
              <div className="enquire__pill-divider" />
              <div className="enquire__pill-right">
                <strong>2–3 August 2025</strong>
                <span>Sat–Sun | 10AM – 6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE COLUMNS – VERTICAL LOOP ONLY */}
        <div className="enquire__media">

          {/* COLUMN 1 */}
          <div className="enquire__media-column">
            <div className="enquire__media-track">
              {[image1, image4, image1, image4].map((img, i) => (
                <div className="enquire__media-item" key={i}>
                  <img src={img} alt="" aria-hidden={i > 1} />
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2 (REVERSED) */}
          <div className="enquire__media-column">
            <div className="enquire__media-track enquire__media-track--reverse">
              {[image2, image5, image2, image5].map((img, i) => (
                <div className="enquire__media-item" key={i}>
                  <img src={img} alt="" aria-hidden={i > 1} />
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="enquire__media-column">
            <div className="enquire__media-track">
              {[image3, image6, image3, image6].map((img, i) => (
                <div className="enquire__media-item" key={i}>
                  <img src={img} alt="" aria-hidden={i > 1} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="enquire__form">
          <h2 className="enquire__form-title">Enquire Now</h2>

          <form className="enquire__form-fields">
            <input placeholder="Parent’s Name" />
            <input placeholder="Phone number" />
            <input placeholder="Which grade are you looking for?" />

            <button type="submit" className="enquire__submit">
              <span className="enquire__submit-icon">↗</span>
              <span className="enquire__submit-text">Submit</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Enquire;
