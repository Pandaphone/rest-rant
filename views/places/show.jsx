const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='tophalf'>
            <img src={data.place.pic} alt="" />
            <div className='sidebar'>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Not Rated.</p>
            <h2>Description</h2>
            <p>Located in {data.place.city}, {data.place.state}</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>      
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>       
            <h2>Comments</h2>
            <p>No comments yet.</p>
            </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show