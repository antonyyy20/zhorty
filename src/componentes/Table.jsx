import React from 'react'
import Main from './Main'
import CopyToClipboard from 'react-copy-to-clipboard'
import "./Main.css"
const Table = ({data}) => {

    
  return (
    <div className="container1">
    <table className="table">
      <thead>
        <tr>
          <th>Short Link</th>
          <th className="tabmobile">Original Link</th>
          <th className="tabmobile">Clicks</th>
          <th className="tabmobile">Date</th>
        </tr>
      </thead>
    { data.map(urlObject => (

<tbody>
        
<tr>
  {urlObject.shortUrl != null ? <td>{urlObject.shortUrl}</td> : <td>{urlObject.customUrl}</td> }
  <td className="tabmobile">{urlObject.originalUrl}</td>
  <td className="tabmobile">{urlObject.counter}</td>
  <td className="tabmobile">{urlObject.createdAt}</td>
</tr>
</tbody>

    ))
    
    }
    </table>
    </div>
  )
}

export default Table