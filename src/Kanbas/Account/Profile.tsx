import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Welcome to Web Dev Landing  and Profile Page</h1> <br/>
      <h2>Jiajie He - SEC 01</h2>
      <a id="wd-github" target="_blank" href="https://github.com/jannunzi/kanbas-react-web-app-cs5610-fa24">click here </a>
      to go to relevant source code repositories
      <br/><br/><br/><br/>

      <h1>Profile</h1>
      <input id="wd-username" value="Jiajie He" placeholder="username" className="form-control mb-2"/>
      <input id="wd-password" value="123" placeholder="password"
             type="password" className="form-control mb-2"/>
      <input id="wd-firstname" value="Jiajie" placeholder="First Name" className="form-control mb-2"/>
      <input id="wd-lastname" value="He" placeholder="Last Name" className="form-control mb-2"/>
      <input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2"/>
      <input id="wd-email" value="web@dev" type="email" className="form-control mb-2"/>
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signout-btn" to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
    </div>
);}
