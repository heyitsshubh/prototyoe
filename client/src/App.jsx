import { useState } from "react";
import Scene from "./viewer/Scene";
import MaterialControls from "./viewer/MaterialControls";
import ChatPanel from "./chat/ChatPanel";
import { PRODUCTS } from "./config/products";

export default function App(){
  const product = PRODUCTS.jacket1;
  const [color,setColor]=useState(product.defaultColor);
  const [material,setMaterial]=useState("cotton");

  return(
    <div style={{display:"flex",gap:20}}>
      <div style={{width:"70vw",height:"95vh"}}>
        <Scene product={product} color={color} material={material}/>
        <MaterialControls setColor={setColor} setMaterial={setMaterial}/>
      </div>
      <ChatPanel productId={product.id}/>
    </div>
  );
}
