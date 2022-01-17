import PropTypes from 'prop-types'

const Button = ({onClick}) => {

    return (
        <div>
            <button 
            className='btn'
            onClick={onClick}
            >
                Add
            </button>
        </div>
    )
}

Button.defaultProps = {

}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
