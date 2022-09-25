import "./style.css"

const Section = ({title, body, extraHeaderContent}) => (
<section className="list">
            <section className="list__header">
                <h2 className="list__headerText">{title}</h2>
                {extraHeaderContent}
            </section>
            <div className="row-section__item">
                {body}
            </div>
        </section>);

export default Section;