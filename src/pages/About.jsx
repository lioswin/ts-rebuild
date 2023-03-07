import Title from "../components/Title";
const About = () => {
    return ( 
        <section className="about" id="about">
        <div className="image2">

        </div>
        <div className="content2">
        <Title
        title="About Us"
        titleSmall="Just awesome"
        titleItallic="template"
        paragraph="I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different . But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!"
        />
            <div className="area2">
              <div className="image-area2"></div>
              <div className="words">
                <h3>Eye catching design</h3>
               <p>Have i gone mad? Im afraid so, but let me tell you something, the best people usualy are.</p> 
              </div>
            </div>
            <div className="area3">
              <div className="image-area3"></div>
              <div className="words">
                <h3>Trendy fonts and colors</h3>
               <p>Why, sometimes I&#39;ve believed as many as six impossible things before breakfast.</p> 
              </div>
            </div>
            <div className="area4">
              <div className="image-area4"></div>
              <div className="words">
                <h3>I never copied</h3>
               <p>I&#39;m afraid I can&#39;t
                t explain myself, sir. Because I am not myself, you see?</p> 
              </div>
            </div>
            <div className="area5">
              <div className="image-area5"></div>
              <div className="words">
                <h3>Its purely my code</h3>
               <p>It`s no use going back to yesterday, because I was a different person then.</p> 
              </div>
            </div>
            <div className="area6 image-area6">
                 <div className="par">
                  <i className="fa fa-quote-left"></i>
                  <p>My dear, here we must run as fast as we can, just to stay in place.
                        And if you wish to go anywhere you must run twice as fast as that.</p>
                      <div className="auth">
                        <div>Lewis Carroll</div>
                        <div>Alice in Wonderland</div>
                      </div>
               </div>
            </div>
        </div>
      </section>
     );
}
 
export default About;