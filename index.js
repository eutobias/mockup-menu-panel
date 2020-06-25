import React from 'react'
import ReactDOM from 'react-dom'
import { DataProvider } from './Context'
import MenuPreview from './components/MenuPreview'
import FormCategory from './components/FormCategory'
import FormSubCategory from './components/FormSubCategory'
import ExportBar from './components/ExportBar'

const App = props => {
  return (
    <DataProvider>
      <ExportBar />
      <MenuPreview />
      <FormCategory />
      <FormSubCategory />
    </DataProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))