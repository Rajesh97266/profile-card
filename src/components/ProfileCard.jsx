/* eslint-disable react/prop-types */
function Profile(props) {
  console.log(props);
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "Online" : "Offline"}
      </span>
      <img src={props.profile} className="img" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.designation}</p>
      <div className="buttons">
        <button className="primary">
          <span className="transition"></span>
          <span className="gradient"></span>
          <span className="label">Button</span>
        </button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const ProfileCard = () => {
  return <Profile />;
};

export default Profile;
