import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';


function App(){
  const [photo, setPhoto] = useState("");
  const[results, setResults] = useState([]);
  const[bookMark,setbookMark] = useState([]);
 const changePhoto = () => {
  axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=49JfnGRI1n9-jPAOgagQSjIW8TEE4um_D_Ne2Qq--DE`)
  .then((response) => {
    setResults(response.data.results);
  })
 }
 const handelBookmark = () => {
  setbookMark([...bookMark]);
}
  return(
    <>
    <div className='conatiner text-center my-3'>
      <input type="text" className='form-control' placeholder='Search Image' onChange={(e) => setPhoto(e.target.value)}/>
      <button type="submit" onClick={changePhoto} className="btn btn-outline-success">Search</button>
    </div>
    <div className='container'>
     <div className='row text-center text-lg-start'>
      {results.map((value) => {
        return (<div className='col-lg-3 col-md-4 col-6'>
        <a href='#' className='d-block mb-4 h-100'>
          <img className='img-fluid img-thumbnail' src={value.urls.small} /> 
          <button className='btn btn-outline-info' onClick={() => handelBookmark(value)}>Bookmark</button>
        </a>
       </div>);
      })}
     </div>
     <div>
      <h2 className='text-center'>BookMark Images</h2>
      {bookMark.map((value) => {
        <img className='img-fluid img-thumbnail' src={value.urls.small} />
      })}
     </div>
      </div>
    </>
  )
}
export default App;