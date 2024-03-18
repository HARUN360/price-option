import { TiTickOutline } from "react-icons/ti";
import Proptypes from 'prop-types'
const Feature = ({feture}) => {
    return (
        <div>
            <p className="flex items-center gap-2"> <TiTickOutline />{feture}</p>
        </div>
    );
};
Feature.propTypes = {
  feture: Proptypes.object,
}
export default Feature;