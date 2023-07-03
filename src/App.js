import React, { useRef } from "react";
import Header from "./Components/Header";
import TextEditor from "./Components/TextEditor";
import { useReactToPrint } from "react-to-print";

function App(){

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const componentRef = useRef();

  return (
    <div ref={componentRef}>
      <Header handlePrint={handlePrint} />
      <TextEditor />
    </div>
  );
}
export default App;
