import imgArrow from '../images/icon-arrow.svg';
import './questions.css';

// Components
import Button from './Button';

export default function Questions() {

    return (
        <section className="questions">
            <div className="box-text">
                <h2>Frequently Asked Questions</h2>
                <p>
                    Here are some of our FAQs. If you hace any other questions you'd like answered please feel free to email us.
                </p>
            </div>
            <div className="answers">
                <div className="box-answer active">
                    <div className="title-question">
                        <h3>What is Bookmark?</h3>

                        <div className="arrow">
                            <img src={imgArrow} alt="arrow" />
                        </div>
                    </div>
                    <div className="text-question">
                        <p>
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </p>
                    </div>
                </div>
                <div className="box-answer">
                    <div className="title-question">
                        <h3>How can I request a new browser?</h3>

                        <div className="arrow">
                            <img src={imgArrow} alt="arrow" />
                        </div>
                    </div>
                    <div className="text-question">
                        <p>
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </p>
                    </div>
                </div>
                <div className="box-answer">
                    <div className="title-question">
                        <h3>Is there a mobile app?</h3>

                        <div className="arrow">
                            <img src={imgArrow} alt="arrow" />
                        </div>
                    </div>
                    <div className="text-question">
                        <p>
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </p>
                    </div>
                </div>
                <div className="box-answer">
                    <div className="title-question">
                        <h3>What about other Chromium browser?</h3>

                        <div className="arrow">
                            <img src={imgArrow} alt="arrow" />
                        </div>
                    </div>
                    <div className="text-question">
                        <p>
                            Vivamu luctus eros aliquet convallis
                            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </p>
                    </div>
                </div>
            </div>
            <div className="more-info">
                <Button text='More Info' styleName="blue" />
            </div>
        </section>
    )


}