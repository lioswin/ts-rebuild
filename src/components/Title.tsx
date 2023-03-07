import {Link} from "react-router-dom";


interface TitleProps{
  title: string;
  titleSmall: string;
  titleItallic: string;
  paragraph: string;
}
const Title: React.FC<TitleProps> = ({
  title,
  titleSmall,
  titleItallic,
  paragraph,
}) => {
    return ( 
    <div className="area1">
    <Link to="/">arrow</Link>
    <div>
      <h1>{title}</h1>
    </div>
    <div className="personal">
    <b>{titleSmall}</b> <i className="italic"> {titleItallic}</i>
    </div>
    <div className="paragraph">{paragraph}</div>
   </div> 
   );
}
 
export default Title;