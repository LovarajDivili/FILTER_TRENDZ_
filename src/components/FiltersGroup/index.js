import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {onChangeSearchInput, onClickClearSearch, searchInput} = props

  const onChangeSearch = event => {
    onChangeSearchInput(event.target.value)
  }

  const onClickClearButton = () => {
    onClickClearSearch()
  }

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {setCategoryName, activeCategoryId} = props
      const onChangeCategoryName = () => {
        setCategoryName(eachCategory.categoryId)
      }
      const isActive = eachCategory.id === activeCategoryId

      const textStyling = isActive ? 'styled-category-text' : 'category-text'
      return (
        <p
          className={textStyling}
          onClick={onChangeCategoryName}
          key={eachCategory.categoryId}
        >
          {eachCategory.name}
        </p>
      )
    })
  }

  const renderRatingsList = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {setRating, activeRatingId} = props
      const onClickRatingItem = () => {
        setRating(eachRating.ratingId)
      }

      const isActive = eachRating.ratingId === activeRatingId

      const activeUpText = isActive ? 'active-up-text' : 'up-text'

      return (
        <li
          className="image-text"
          onClick={onClickRatingItem}
          key={eachRating.ratingId}
        >
          <img
            src={eachRating.imageUrl}
            className="ratings-image"
            alt={`rating ${eachRating.ratingId}`}
          />
          <p className={activeUpText}>&up</p>
        </li>
      )
    })
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          className="search-element"
          onChange={onChangeSearch}
          placeholder="Search"
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="heading">Category</h1>
      <div className="category-list">{renderCategoryList()}</div>
      <h1 className="heading">Ratings</h1>
      <ul className="ratings-list">{renderRatingsList()}</ul>
      <button
        type="button"
        className="clear-button"
        onClick={onClickClearButton}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
