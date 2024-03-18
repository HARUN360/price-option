import Proptypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-red-500"> 
        <a href={route.path}> {route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: Proptypes.object,
}

export default Link;