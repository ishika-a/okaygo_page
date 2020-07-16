import React from 'react';
import ReactDOM from 'react-dom';
import './home.css'
import logo from './logo.png'


class HOME extends React.Component {
    
    render() {
      return (
        <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="line"><hr/></div>
        <div >
          <h2 className="heading1">Worker View</h2>
        </div>

        {/* <div>
          <p> <div className="search"> Search by phone no.</div>
          <div className="search1">  Search by name</div>
          </p>
        </div> */}


        <div className="space">
        <div className="details" >
        <table className="t02">
            <tr>
              <td className="name">Sameer Sharma (9987204729)</td>
              <td className="det">Current Status: App installed</td>
            </tr>
            <tr>
              <td className="det1"><b>Prep Chef at Sushi Junction <span class="dot"></span> Fresher <span class="dot"></span> Gurgaon </b> </td>
              <td className="det">Worker ID: 1213412</td>
            </tr>
            <tr>
              <td className="det2"><div className="tab">
                <button className="tablink" href="#">Download CV</button> <span class="sp2"></span>
                </div>
              </td>
              <td className="det">
              <b>Last Activity: 21/06/2020</b>
              </td>
            </tr>
          </table>
            
         
        

          <div className="too">
            <table id="t001" >
            <tr>
              <th className="y">Matched</th>
              <th>Shortlisted</th>
              <th>Interviews Scheduled</th>
              <th>Interviews Appeared</th>
              <th>Selected</th>
              <th>Joinings</th>
              <th className="z"> Rejected</th>
            </tr>
            <tr>
              <td className="y">16</td>
              <td>16</td>
              <td>16</td>
              <td>16</td>
              <td>16</td>
              <td>16</td>
              <td className="z">16</td>
            </tr>
            </table>
            <br/>
          </div>
          </div>
          </div>



          <div className="end">
            <br/><br/>
            <button className="selected" id="defaultOpen">Applied Jobs </button>
            <span>
            <button class="tablink1"  >Matched Jobs</button></span>
            <span><button class="tablink1"  >Other Jobs</button></span>
            <div className="ending">
            <div className="ending1">
              
            <table id="t01">
            <tr>
              <th className="yp">Job ID</th>
              <th>Company</th>
              <th>Job Role </th>
              <th>Job Type</th>
              <th>Matched By</th>
              <th>Recruiter</th>
              <th>Call Status</th>
              <th>Application Stage</th>
              <th>Application Date</th>
              <th>Approval Status</th>
              <th>Interview Status</th>
              <th>Preferred Interview Date</th>
              <th>Interview Date</th>
              <th>OTP</th>
              <th>Interview Follow Up</th>
              <th>Final Feedback </th>
              <th>Selection Date</th>
              <th>Worker Response</th>
              <th>Joining Date</th>
              <th>Offered Salary</th>
              <th>Joining Status</th>
              <th className="py">Remarks</th>
            </tr>

            <tr >
              <td><b>143231</b></td>
              <td>Swirl Cake</td>
              <td>CDP Chef</td>
              <td>Full time</td>
              <td>Admin - Sagar</td>
              <td><select id="Recruiter" name="Recruiter"><option value="select">Select</option><option value="">Amit Shah</option></select></td>
              <td><select id="cs" name="cs"><option value="Interested">Interested</option><option value="Not Interested">Not Interested</option></select></td>
              <td> Approved <br/><br/><div className="first">
                <button className="tablinkff" href="#">Event History</button> 
                </div></td>


              <td>01/04/2020</td>
              <td><select id="js" name="js"><option value="ap">Approved</option><option value="Not ">Rejected</option></select><br/><br/>
              <button className="tablinkf" href="#">Share Status</button> </td>

              <td className="col">Select Slot<br/><br/>
              <button className="tablinkf" href="#">Share Link</button> </td>
              <td></td>
              <td></td>
              <td>422123</td>
              <td><select id="go" name="go"><option value="go">Going</option><option value="go">Not Going</option></select></td>
              <td><select id="js" name="js"><option value="ap">Selected</option><option value="Not ">Rounds Pending</option></select><br/><br/>
              <button className="tablinkf" href="#">Share Feedback</button> </td>
              <td><select id="dt" name="dt"><option value="date">23/04/2020</option><option value="date">27/04/2020</option></select></td>
              <td><select id="dt" name="dt"><option value="date">23/04/2020</option><option value="date">27/04/2020</option></select></td>
              <td><select id="js" name="js"><option value="Joining">Joining</option><option value="Not Joining">Not Joining</option></select></td>
              <td>Rs 14000/m</td>
              <td><select id="js" name="js"><option value="Joined">Joined</option><option value="Not Joined">Not Joined</option></select></td>
              <td></td>
            </tr>

            <tr>
              <td><b>232423</b></td>
              <td>Theobroma</td>
              <td>Sous Chef</td>
              <td>Part time</td>
              <td>Self</td>
              <td>Amit Shah</td>
              <td><select id="cs" name="cs"><option value="Interested">Interested</option><option value="Not Interested">Not Interested</option></select></td>
              <td> Interviewing <br/><br/><div className="first">
                <button className="tablinkff" href="#">Event History</button> 
                </div></td>

              <td>21/03/2020</td>
              <td><select id="js" name="js"><option value="ap">Approved</option><option value="Not ">Rejected</option></select>
              <br/><br/>
              <button className="tablinkf" href="#">Share Status</button> </td>

              <td className="colour">Reschedule<br/><br/>
              <button className="tablinkft" href="#">Share Link</button> </td>
              <td>23/04/2020<br/>10:00 am-12:00 pm<br/><br/>
              <button className="tablinkf" href="#">Share Interview Details</button> </td>
              <td>23/04/2020<br/>10:00 am-12:00 pm<br/><br/>
              <button className="tablinkf" href="#">Share Interview Details</button> </td>
              
              <td>422123</td>
              <td><select id="go" name="go"><option value="go">Not Going</option><option value="go">Going</option></select></td>
              <td><select id="js" name="js"><option value="ap">Rounds Pending</option><option value="Not ">Selected</option></select><br/><br/>
              <button className="tablinkf" href="#">Share Feedback</button></td>
              <td><select id="dt" name="dt"><option value="date">23/04/2020</option><option value="date">27/04/2020</option></select></td>
              <td><select id="dt" name="dt"><option value="date">23/04/2020</option><option value="date">27/04/2020</option></select></td>
              <td><select id="js" name="js"><option value="Joining">Joining</option><option value="Not Joining">Not Joining</option></select></td>
              <td >Rs 14000/m </td>
              <td></td>
              <td></td>
            </tr>



            </table>
            </div>
            
            </div>
          </div>
           








      </div>
      );
    }
  }
  
  ReactDOM.render(<HOME />, document.getElementById('root'));
  
