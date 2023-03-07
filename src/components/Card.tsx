interface CardProps {
  image: string;
  title: string;
  title2: string;
  description: string;
}
function Card({image,title,title2,description}: CardProps){
    return ( 
        <div className="areastaff">
              <div className="image-staff1">
                <img src={image} alt="staff"/>
              </div>
              <div className="staffcontent">
                  <h3>{title}</h3>
                  <h5>{title2}</h5>
                <p>{description}</p>
            </div>
            </div>
     );
}
 
export default Card;