export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
            </td>
            <td>
                <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="Assignments">Assignments</option>
                    <option value="Projects">Projects</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="Percentage">Percentage</option>
                    <option value="Decimal">Decimal</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="Online">Online</option>
                    <option value="InPerson">In-Person</option>
                </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <label>Online Entry Options</label><br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label> 
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <input type="text" defaultValue="Everyone" id="wd-assign-to"></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <input type="date" id="wd-due-date" defaultValue="2000-01-01"/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
                <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
                <input type="date" id="wd-available-from" defaultValue="2000-01-01"/>
            </td>
            <td>
                <input type="date" id="wd-available-until" defaultValue="2000-01-02"/>
            </td>
          </tr>
            <tr>
                <td></td>
                <td></td>
                <td align="right" valign="top">
                    <button>Cancel</button><button>Save</button>    
                </td>
            </tr>
        </table>
      </div>
  );}
  