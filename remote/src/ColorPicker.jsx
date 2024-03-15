import { useState, useEffect } from "react";


function ColorPicker() {
    const [color, setColor] = useState('#ffffff');
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])

    return (
   <input type="color" value={color} onChange={(e) => setColor(e.target.value) }/>
  );
}

export default ColorPicker;
