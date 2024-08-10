import React from 'react'
import Main from './Main'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import copy from "../copy-solid.svg"
import copy2 from "../copy.png"
import "./Main.css"
const Table = ({data}) => {

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Texto copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
    }
  }
    
  return (
    <div className="container1">
    <table className="table">
      <thead>
        <tr>
          <th>Short Link</th>
          <th className="tabmobile">Original Link</th>
        </tr>
      </thead>
    { data.map(urlObject => (

<tbody>
        
<tr>
  {urlObject.shortUrl != null ? 
  <td className='fila-container'>
    <p>{urlObject.shortUrl}</p> 
  <button onClick={() => copyToClipboard(urlObject.shortUrl)} className='button-copy' ><img src={copy2} className='button-image'/></button></td> : <td className='fila-container'><p>{urlObject.customUrl}</p><button onClick={() => copyToClipboard(urlObject.shortUrl)} className='button-copy' ><img src={copy2} className='button-image'/></button></td> }
  <td className="tabmobile"><p>{urlObject.originalUrl}</p></td>
</tr>
</tbody>

    ))
    
    }
    </table>
    </div>
  )
}

export default Table