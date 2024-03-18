import Proptypes from 'prop-types';
import Feature from '../Feature/Feature';

const Price = ({option}) => {
    const {name,price, features} = option;
    return (
        <div className='mx-10 flex flex-col mt-10 bg-blue-600 rounded-xl p-4 text-white'>
           <h2>
              <span className='text-5xl'>{price}</span>
              <span className='text-xl'>/mon</span>
           </h2>
           <h4 className='text-3xl text-center'>{name}</h4>
           <div className='mt-10 flex-grow'>
           {
            features.map((feture, idx)=> <Feature key={idx} feture={feture}></Feature>)
           }
           </div>
           <button className="btn btn-success w-full mt-4">Bay Now</button>
        </div>
    );
};
Price.propTypes = {
    option: Proptypes.object
}

export default Price;