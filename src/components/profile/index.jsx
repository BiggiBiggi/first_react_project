function Profile(props) {
  return (
    <>
      <h1>{props.isLoged && props.user.name} </h1>
      <img
        className="avatar"
        src={props.user.imageUrl}
        alt={"Photo de " + props.user.name}
        style={{
          width: props.user.imageSize,
          height: props.user.imageSize,
        }}
      />
    </>
  );
}

export default Profile;
