import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'

const FormSubCategory = props => {
  const { state, dispatch } = useContext(DataContext)
  const [input, setInput] = useState()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (state.selected) {
      if (state.selected.secondIndex > -1) {
        setInput(state.selected.data)
        setShowForm(true)
      }
    } else {
      setShowForm(false)
    }
  }, [state])

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })

  const handleSubmit = e => {
    e.preventDefault()
    const payload = {
      data: input,
      firstIndex: state.selected.firstIndex,
      secondIndex: state.selected.secondIndex
    }
    dispatch({ type: 'SAVE_EDIT_SUBCATEGORY', payload })
  }

  const cancel = () => {
    dispatch({ type: 'CANCEL_EDIT' })
  }

  return showForm ? (
    <div className='form-overlay'>
      <form onSubmit={handleSubmit} className='form form-category'>
        <label>
          <span>Label</span>
          <input
            type='text'
            autoComplete='off'
            value={input.label}
            name='label'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Link</span>
          <input
            type='text'
            autoComplete='off'
            value={input.link}
            name='link'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Column</span>
          <input
            type='text'
            autoComplete='off'
            value={input.column}
            name='column'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Row</span>
          <input
            type='text'
            autoComplete='off'
            value={input.line}
            name='line'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Bold</span>
          <select value={input.bold} name='bold' onChange={handleInputChange}>
            <option></option>
            <option>false</option>
            <option>true</option>
          </select>
        </label>
        <label>
          <span>Italic</span>
          <select
            value={input.italic}
            name='italic'
            onChange={handleInputChange}
          >
            <option></option>
            <option>false</option>
            <option>true</option>
          </select>
        </label>
        <label>
          <span>Color</span>
          <input
            type='text'
            autoComplete='off'
            value={input.color}
            name='color'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Text Decoration</span>
          <select
            value={input.text_decoration}
            name='text_decoration'
            onChange={handleInputChange}
          >
            <option>none</option>
            <option>underline</option>
            <option>line-through</option>
          </select>
        </label>
        <div className='buttons-wrapper'>
          <input
            type='submit'
            className='button'
            onClick={handleSubmit}
            value='Save'
          />
          <a className='button' onClick={cancel}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  ) : (
    <div />
  )
}

export default FormSubCategory
