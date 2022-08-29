const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main className='text-centering'>
    <h1 className='title'>Welcome to Rest-Rant!</h1>
    <h4 className='subtitle'>The Internet's premier place to Rant and Rave about all things food!</h4>
    <div>
      <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" className='large-images'/>
      <div>
      Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
</main>
        </Def>
    )
}

module.exports = home