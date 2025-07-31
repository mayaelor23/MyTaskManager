    import React from "react"

    interface IUserNameWithCircle {
      name: string;
    }

    const UserCircleComponent: React.FC<IUserNameWithCircle> = ({ name }) => {
        const [firstName, lastName] = name.split(" "); 

    return (
    <div>
      <h2>
        {firstName}
        <br />
        {lastName}
      </h2>
    </div>
  );
    };

    export default UserCircleComponent;