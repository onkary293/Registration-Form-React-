import {React,useState} from 'react'
function Forms ()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const clickHandler = (e) =>
    {
        e.preventDefault();
        const newEntry = {email: email, password: password}
        setAllEntry([...allEntry, newEntry])
        console.log(allEntry)
        setEmail("");
        setPassword("");
       
    }
    return (
      <div className="Formcss">
        <h1>Login</h1>
        <div className="form-style">
          <form action="" className="formcss" onSubmit={clickHandler}>
          
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Enter Your Email"
                required
              />
              <input
             
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                placeholder="Enter Your Password"
                required
              />
              <button type="submit">Sign In</button>
          
          </form>
        </div>
        <div>
          <h2>Users Submitted Form List :</h2>
          {allEntry.map((curElem) => {
            return (
              <div className="List">
                <p>
                  Email: {curElem.email} Password: {curElem.password}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Forms;