import PropTypes from 'prop-types'
import Button from "./Button"
const Header = ({ title }) => {

    const onClick = () => {
        console.log('clicked from header')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Ponies'
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header
