import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
