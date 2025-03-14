import React,{useState} from 'react';
import './App.css'

function App() {
  const [backgroundColor,setBackgroundColor] = useState('#ffffff');
  const colors=['#ff0000','#008000','#000000','#00ffff','#FFC0CB','#4B0082','#ffff00'];
  const handleColorChange=(color) =>{
    setBackgroundColor(color);
  };
  return (
    <div className='App' style={{backgroundColor}}>
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {colors.map((color, index) => (
          <div
          key={index}
          className='color-box'
          style={{backgroundColor: color}}
          onClick={() => handleColorChange(color)}
          ></div>
        ))}
     </div>
     <div className='custom-color-picker'>
      <input type='color'
             value={backgroundColor}
            onChange={(e) => handleColorChange(e.target.value)}></input>

     </div>
    </div>
  );
}

export default App
