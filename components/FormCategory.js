import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'

const FormCategory = props => {
  const { state, dispatch } = useContext(DataContext)
  const [input, setInput] = useState()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (state.selected) {
      if (state.selected.secondIndex === -1) {
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
      firstIndex: state.selected.firstIndex
    }
    dispatch({ type: 'SAVE_EDIT_CATEGORY', payload })
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
          <span>Background Image URL</span>
          <input
            type='text'
            autoComplete='off'
            value={input.image}
            name='image'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Title</span>
          <input
            type='text'
            autoComplete='off'
            value={input.image_title}
            name='image_title'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Text</span>
          <input
            type='text'
            autoComplete='off'
            value={input.image_description}
            name='image_description'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Text Button 1</span>
          <input
            type='text'
            autoComplete='off'
            value={input.buttons_1_label}
            name='buttons_1_label'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Link Button 1</span>
          <input
            type='text'
            autoComplete='off'
            value={input.buttons_1_link}
            name='buttons_1_link'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Text Button 2</span>
          <input
            type='text'
            autoComplete='off'
            value={input.buttons_2_label}
            name='buttons_2_label'
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Link Button 2</span>
          <input
            type='text'
            autoComplete='off'
            value={input.buttons_2_link}
            name='buttons_2_link'
            onChange={handleInputChange}
          />
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

export default FormCategory
