export default function Modules() {
    return (
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select name="dropdown">
            <option value="option1">Publish All</option>
        </select>
        <button>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Reading</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer Ch1</li>
                  <li className="wd-content-item">Full Stack Developer Ch2</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Slides</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Dev</li>
                  <li className="wd-content-item">Creating HTTP server</li>
                  <li className="wd-content-item">Creating React App</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn HTML</li>
                  <li className="wd-content-item">Deploy to Netlify</li>
                </ul>
              </li>
            </ul>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Slides</span>
                <ul className="wd-content">
                  <li className="wd-content-item">HTML and DOM</li>
                  <li className="wd-content-item">Web content</li>
                  <li className="wd-content-item">Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  