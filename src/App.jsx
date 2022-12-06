import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './Pages';



function App() {
  return (
<>


<BrowserRouter>
    <Routes>

      <Route path='/' element={ <Pages.Home /> } />
      <Route path='/login' element={ <Pages.Login /> } />
      <Route path='/categorias' element={ <Pages.Categorias /> } />
      <Route path='/pedidos' element={ <Pages.Pedidos /> } />
      <Route path='/produtos' element={ <Pages.Produtos /> } />
      <Route path='/sobre' element={ <Pages.Sobre /> } />
      <Route path='/lingerie' element={ <Pages.Lingerie /> } />
      <Route path='/sexshop' element={ <Pages.Sexshop /> } />

    </Routes>

</BrowserRouter>

</>
  );
}

export default App;
