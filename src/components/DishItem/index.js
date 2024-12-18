import './index.css'

const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvilability,
  } = dishDetails

  const onIncremetQunatity = () => addItemToCart(dishDetails)
  const onDecrementQunatity = () => removeItemFromCart(dishDetails)

  const getQunatity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderedControllerButton = () => (
    <div className="controller-container d-flex align-items-center bg-success">
      <button className="button" type="button" onClick={onDecrementQunatity}>
        -
      </button>
      <p className="quantity">{getQunatity()}</p>
      <button className="button" type="button" onClick={onIncremetQunatity}>
        +
      </button>
    </div>
  )

  return (
    <li className="mb-3 p-3 dish-item-container d-flex">
      <div
        className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''} me-3`}
      >
        <div className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`} />
      </div>
      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-currency-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvilability && renderedControllerButton()}
        {!dishAvilability && (
          <p className="not-avaialable-text text-danger">Not available</p>
        )}
        {addonCat.length !== 0 && (
          <p className="addon-availability-text">Customizations available</p>
        )}
      </div>
      <p className="dish-calories text-warning">{dishCalories} calories</p>
      <img className="dis-image" src={dishImage} alt={dishName} />
    </li>
  )
}

export default DishItem
