import React from 'react';

class UsersList extends React.Component {
  render() {
    return <div>{/* finish this method */}</div>;
  }
}

<div>
  <!-- pagination -->
  <div className="pagination">
    <button className="btn">←</button>
    <span className="pagination__page">1</span>
    <button className="btn">→</button>
  </div>
  
  <ul className="users">
    <li className="user">
      <span className="user__name">Bob</span>
      <span className="user__age">21</span>
    </li>
    ...
    <li className="user">
      <span className="user__name">Sam</span>
      <span className="user__age">45</span>
    </li>
  </ul>
</div>



export default UsersList;
