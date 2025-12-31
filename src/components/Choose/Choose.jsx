import React from 'react';
import './choose.css';

import choose1 from '../../assets/01.svg';
import choose2 from '../../assets/02.svg';
import choose3 from '../../assets/03.svg';
import choose4 from '../../assets/04.svg';

const Choose = () => {
    return (
        <section className="choose">
            <div className="choose__inner">

                {/* SECTION TITLE */}
                <h2 className="choose__title">
                    Choose the School That Fits You Best
                </h2>

                {/* CARD GRID */}
                <div className="choose__grid">

                    {/* CARD 1 */}
                    <article className="choose__card">
                        <img
                            src={choose1}
                            alt="Pre-Schools & Early Learning Centres"
                            className="choose__image"
                        />

                        <div className="choose__overlay">
                            <h3 className="choose__card-title">
                                Pre-Schools & Early Learning Centres
                            </h3>
                            <p className="choose__card-text">
                                Nurturing foundational skills for toddlers and pre-primary children.
                            </p>
                        </div>
                    </article>

                    {/* CARD 2 */}
                    <article className="choose__card">
                        <img
                            src={choose2}
                            alt="K–12 CBSE Day Schools"
                            className="choose__image"
                        />

                        <div className="choose__overlay">
                            <h3 className="choose__card-title">
                                K–12 CBSE Day Schools
                            </h3>
                            <p className="choose__card-text">
                                Reputed schools offering complete schooling from Kindergarten to Grade 12.
                            </p>
                        </div>
                    </article>

                    {/* CARD 3 */}
                    <article className="choose__card">
                        <img
                            src={choose3}
                            alt="Heritage to New-Age Schools"
                            className="choose__image"
                        />

                        <div className="choose__overlay">
                            <h3 className="choose__card-title">
                                Heritage to New-Age Schools
                            </h3>
                            <p className="choose__card-text">
                                Time-tested schools to innovative pedagogy, tech-enabled, future-ready schools.
                            </p>
                        </div>
                    </article>

                    {/* CARD 4 */}
                    <article className="choose__card">
                        <img
                            src={choose4}
                            alt="International Curriculum Schools"
                            className="choose__image"
                        />

                        <div className="choose__overlay">
                            <h3 className="choose__card-title">
                                International Curriculum Schools
                            </h3>
                            <p className="choose__card-text">
                                Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.
                            </p>
                        </div>
                    </article>

                </div>
                {/* MOBILE PAGINATION DOTS */}
                <div className="choose__pagination">
                    <span className="choose__dot is-active" />
                    <span className="choose__dot" />
                    <span className="choose__dot" />
                    <span className="choose__dot" />
                </div>

            </div>
        </section>
    );
};

export default Choose;
