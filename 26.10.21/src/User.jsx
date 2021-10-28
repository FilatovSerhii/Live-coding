import React, { Component } from 'react';

class User extends React.Component {
   state = {
      avatarUrl: null,
      userName: null,
      userLication: null,
   };

   componentDidMount() {
      console.log('componentDidMount was called');
      console.log(this.props.match);

     this.updateUserData(this.props.match.params.userId);
   }

   componentDidUpdate(prevProps, prevState) {
      // input: prevProps, prevState, snapshot;
      // output: undefined;
      // debugger:
      console.log('componentDidUpdate was called');
      console.log(prevProps);
      console.log(prevState);
      
      const currentUserId = this.props.match.params.userId;
        if (currentUserId !== this.props.match.params.userId) {
           this.updateUserData(currentUserId);
        }
   }


updateUserData = () => {
  //i - 
  //o - 
fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
   .then(res => res.json())
   .then(userData => {
      console.log(userData);
      this.setState({
         avatarUrl: userData.avatar_url,
         userName: userData.name,
         userLication: userData.location,
      });
   });
};

   render() {
      // debugger:
      console.log('render was called');

      const { avatarUrl, userName, userLication } = this.state;

      if (!avatarUrl || !userName || !userLication) {
         return null;
      }

      return (
         <div className="user">
            <img
               alt="User Avatar"
               src="https://avatars1.githubusercontent.com/u/9919?v=4"
               className="user__avatar"
            />
            <div className="user__info">
               <span className="user__name">GitHub</span>
               <span className="user__location">San Francisco,CA</span>
            </div>
         </div>
      );
   }
}

export default User;
