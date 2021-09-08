import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';
import React from 'react';
function App() {
  return (
    <>
  <Navbar/>
    <div className= "container" >
      <h1 className="text-primary">Olá men </h1>
      <DataTable/>
     </div>
    <Footer/>
      </>
  );
}

export default App;
