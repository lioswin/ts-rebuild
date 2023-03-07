import Card from "../components/Card";
import Title from "../components/Title";
import imageStaff1 from "../images/team-1.jpg"
import imageStaff2 from "../images/team-2.jpg"

const Contact = () => {
    return ( 
        <section className="contact" id="contact">
        <div className="map">
          </div>
        <div className="sample">
        <Title
        title="Get in touch"
        titleSmall="Welcome to our"
        titleItallic="office"
        paragraph="I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different . But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!"
        />
        {/* some chnages needed here to fit in tags using jsx */}
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
       </section>
     );
}
 
export default Contact;