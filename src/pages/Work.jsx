import Title from "../components/Title";
import Card from "../components/Card";
import imageStaff1 from "../images/team-1.jpg"
import imageStaff2 from "../images/team-2.jpg"

const Work = () => {
    return (  
        <section className="work" id="work">
        <div className="sample">
        <Title
        title="Our Work"
        titleSmall="Team and latest"
        titleItallic=" projects"
        paragraph="Be what you would seem to be - or, if you`d like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise."
        />
        <div className="wrapper-img">
            <Card
            image={imageStaff1}
            title="will finish"
            title2="work role"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere massa."
            />
            <Card
            image={imageStaff2}
             title="will finish"
             title2="work role"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere massa."
            />
        </div>
        </div>
        <div className="staff">
        <div className="staff1"></div>
        <div className="staff2"></div>
        <div className="staff3"></div>
        <div className="staff4"></div>
        </div>
        </section>
    );
}
 
export default Work;