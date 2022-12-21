import React from 'react'
// import './App.css';  

const Navbar = () => {
  return (
    <>
    <div style={{color: "grey"}}></div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <h3>Result</h3>

 
      <>
        <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
        &nbsp; <label htmlFor="html">react</label>
        <br />
        &nbsp; <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
        &nbsp; <label htmlFor="css">react-native</label>
        <br />
        &nbsp;{" "}
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          defaultValue="JavaScript"
        />
        &nbsp; <label htmlFor="javascript">react i8Next</label>
        <br />
        <input
          type="radio"
          id="........."
          name="fav_language"
          defaultValue="JavaScript"
        />
        &nbsp; <label htmlFor="javascript">.......</label>
      </>



      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          why is this your fav
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={""}
        />

      </div>
      <input className="btn btn-primary" type="submit" defaultValue="Submit" />
    <p className='colour'  style={{color: "blue"}}>
    On submit - validate if user actually selected a package from radio list and
    also filled 'why' also make sure same package is already not in the list
  </p>
  </>
  



  )
}

export default Navbar
