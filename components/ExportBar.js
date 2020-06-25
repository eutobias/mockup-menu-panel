import React, { useContext, useEffect } from 'react'

const ExportBar = props => {

  const save = () => {
    alert('Salva la puerra toda!')
  }

  return (
    <div class="export-bar">
      <a class="button" onClick={save}>Save All Changes</a>
    </div>
  )
}

export default ExportBar