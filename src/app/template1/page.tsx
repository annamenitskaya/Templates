import './template1.scss'

export default function Template1() {
  return (
    <div className="template1">

      <div className="container">
        <div className="image-container">
          <img src="/placeholder1.png" alt="image placeholder" />
        </div>
        <div className="text-container">
          <h1 className="main-header">Dewi Williams</h1>
          <p className="cursive">/de-wee- williams/</p>
          <div className="content">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</h2>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
            <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      <div className='images-grid'>
        <img src="/placeholder1.png" alt="image placeholder" />
        <img src="/placeholder1.png" alt="image placeholder" />
        <img src="/placeholder1.png" alt="image placeholder" />
        <img src="/placeholder1.png" alt="image placeholder" />
        <img src="/placeholder1.png" alt="image placeholder" />
        <img src="/placeholder1.png" alt="image placeholder" />
      </div>
      <div className="interests">
        <div className="col">
          <h3>What makes me tick?</h3>
        </div>
        <div className="col m-top-50">
          <h5>Books</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. </p>
          <h5>Learning</h5>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="col m-top-50">
          <h5>Adventure</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. </p>
          <h5>Obsession</h5>
        </div>
      </div>
    </div>
  );
}
