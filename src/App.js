import React from 'react';
import Review from './Review';
import { VscGithub } from 'react-icons/vsc'
function App() {
  return (<main >
    <section className='container'>

      <div className='title'>
        <h2>Our reviews</h2>
        <div className='underline' />
      </div>
      <Review />
    </section>
  </main>)
}

export default App;
