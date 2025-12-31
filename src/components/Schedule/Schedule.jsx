import React from 'react'
import './schedule.css';
import scheduleImage from '../../assets/schedule.svg'



const Schedule = () => {
    return (
        <section className="schedule">
            <div className="schedule__inner">

                <div className="schedule__content">
                    <p className="schedule__eyebrow">
                        Exciting Opportunities for Parents!
                    </p>

                    <h2 className="schedule__title">
                        Pre-schedule Your<br />School Appointments
                    </h2>

                    <p className="schedule__subtitle">
                        To Avoid Rush
                    </p>

                    <div className="schedule__actions">
                        <button className="schedule__cta" type="button">
                            <span className="schedule__cta-icon">↗</span>
                            <span className="schedule__cta-text">Pre-schedule Now</span>
                        </button>
                    </div>

                </div>
                <div className="schedule__media">
                    <img
                        src={scheduleImage}
                        alt="Parents interacting with school representatives"
                    />
                </div>

            </div>
        </section>
    );
};

export default Schedule