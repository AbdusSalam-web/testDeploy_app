import { UseAuth } from "../store/UseAuth";

const About = () => {
  const { currentUser } = UseAuth();
  if (!currentUser) {
    return <p>Loading...</p>;
  } 
    const { userName, ...data } = currentUser;
 

  return (
    <>
      <p>Welcome to my blog: {userName && userName}</p>
      <p>Welcome to my blog: {data?.email}</p>
    </>
  );
};

export default About;
