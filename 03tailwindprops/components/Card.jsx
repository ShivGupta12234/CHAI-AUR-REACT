import React from 'react'

function Card({username, btnText}) {
    console.log(username);
    return (
        
<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
        <div className="pt-6 m-5 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quis doloremque dolorem natus ullam similique autem ex deleniti, suscipit ab. tetur adipisicing elit. Qui, non.
            </p>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia.
              </div>
            </figcaption>
            
          </blockquote>
          <button className='mt-2 inline-flex bg-teal-200 cursor-pointer items-center text-sm font-semibold text-white'>
            {btnText }
          </button>
        </div>
      </figure>    )
}

export default Card
