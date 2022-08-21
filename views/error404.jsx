const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
    <div>
      <img src="/images/cat-pic.jpg" alt="cat pic" />
      <div>
      Photo by <a href="https://unsplash.com/es/@raouldroog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raoul Droog</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
      </Def>
    )
  }

module.exports = error404


  
