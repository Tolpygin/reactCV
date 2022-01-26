import avatarImage from '../assets/images/avatarImage.JPG';
import './Avatar.css';

function Avatar() {
    return (
    <div className="avatar">
        <img src={avatarImage} alt="avatar" />
    </div> 
    )
}
export default Avatar