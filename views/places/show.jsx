const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main className='container'>
            <div className='row'>
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>

              <div className='col-sm-6'>
                <h1>{ data.place.name }</h1>
                <h2>Rating</h2>
                <p>Not Rated.</p>
                <h2>Description</h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                  Edit
                </a>      
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>       
                <h2>Comments</h2>
                {comments}
              </div>
            </div>

            
            <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="form-group">
                  <label htmlFor="author">Author:</label>
                  <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                  <label htmlFor="content"></label>
                  <textarea id="content" name="content" placeholder="Type your review here!" rows="4" cols="50" />
                </div>
                <div className="form-group">
                  <label htmlFor="stars">Star Rating</label>
                  <input className="form-control" type="number" id="stars" name="stars"  step={0.5} />
                </div>
                <div className="form-group">
                  <label htmlFor="rant">Rave?</label>
                  <input className="form-control" type="checkbox" id="rant" name="rant" required />
                  <button type="submit" className="btn btn-danger"></button>
                </div>
              </form>
          </main>
        </Def>
    )
}

module.exports = show

