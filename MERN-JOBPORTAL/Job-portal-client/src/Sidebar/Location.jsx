import React from 'react';
import InputField from '../components/InputField';

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" value="" onChange={handleChange} />
          <span className='checkmark'></span>All
        </label>

        <InputField handleChange={handleChange} value="delhi" title="Delhi" name="test" />
        <InputField handleChange={handleChange} value="gujrat" title="Gujrat" name="test" />
        <InputField handleChange={handleChange} value="hydrabad" title="Hydrabad" name="test" />
        <InputField handleChange={handleChange} value="bangalore" title="Bangalore" name="test" />
      </div>
    </div>
  );
};

export default Location;
