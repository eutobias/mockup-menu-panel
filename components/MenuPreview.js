import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context'

const MenuPreview = props => {
  const { state, dispatch } = useContext(DataContext)

  const editCategory = (item, index) => {
    const payload = {
      data: item,
      firstIndex: index,
      secondIndex: -1,
    }
    dispatch({ type: 'EDIT_CATEGORY', payload })
  }

  const editSubCategory = (item, index1, index2) => {
    const payload = {
      data: item,
      firstIndex: index1,
      secondIndex: index2
    }
    dispatch({ type: 'EDIT_SUBCATEGORY', payload })
  }

  return (
    <div className='menu-preview'>
      <ul className="list-category">
        {state.menu.map((v, i) => {
          return (
            <li key={i}>
              <div className='list-item'>
                <span className='category-label'>{v.label}</span>
                <ul className="list-options">
                  <li>
                    <a
                      className='button'
                      onClick={editCategory.bind(this, v, i)}
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className='button remove'>Remove</a>
                  </li>
                </ul>
              </div>
              <ul className='children-list'>
                {v.children.map((_v, _i) => {
                  let style = {
                    fontWeight: _v.bold ? 'bold' : 'normal',
                    fontStyle: _v.italic ? 'italic' : 'none' 
                  }
                  return (
                    <li key={_i} {..._v}>
                      <div className='list-item'>
                        <span className='category-label'>{_v.label}</span>
                        <ul className="list-options">
                          <li>
                            <a
                              className='button'
                              onClick={editSubCategory.bind(this, _v, i, _i)}
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a className='button remove'>Remove</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuPreview
