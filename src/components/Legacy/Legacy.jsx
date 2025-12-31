import React from 'react';
import './legacy.css';
import image from '../../assets/Legacy.svg';
import school1 from '../../assets/school1.svg';
import school2 from '../../assets/school2.svg';
import school3 from '../../assets/school3.svg';
import school4 from '../../assets/school4.svg';
import school5 from '../../assets/school5.svg';
import school6 from '../../assets/school6.svg';


const Legacy = () => {
    return (
        <>
            <section className="legacy">
                <div className="legacy__inner">
                    <img
                        src={image}
                        alt="Legacy statistics"
                        className="legacy__image"
                    />
                </div>
                <section className="participating-schools">

                    <div className="participating-schools__inner">
                        <h2 className="participating-schools__title">
                            Participating Schools
                        </h2>
                        <div className="participating-schools__grid">

                            <div className="participating-schools__row participating-schools__row--ltr">
                                <div className="participating-schools__track">
                                    {[school1, school2, school3, school4, school5, school6].map((logo, i) => (
                                        <div className="participating-schools__item" key={`r1-a-${i}`}>
                                            <img src={logo} alt="School logo" />
                                        </div>
                                    ))}

                                    {[school1, school2, school3, school4, school5, school6].map((logo, i) => (
                                        <div className="participating-schools__item" key={`r1-b-${i}`} aria-hidden="true">
                                            <img src={logo} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="participating-schools__row participating-schools__row--rtl">
                                <div className="participating-schools__track">
                                    {[school1, school2, school3, school4, school5, school6].map((logo, i) => (
                                        <div className="participating-schools__item" key={`r2-a-${i}`}>
                                            <img src={logo} alt="School logo" />
                                        </div>
                                    ))}

                                    {[school1, school2, school3, school4, school5, school6].map((logo, i) => (
                                        <div className="participating-schools__item" key={`r2-b-${i}`} aria-hidden="true">
                                            <img src={logo} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>


                    </div>
                </section>

            </section>
        </>
    );
};

export default Legacy;
