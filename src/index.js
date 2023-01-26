import { render } from 'react-dom';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Programs from './components/Programs.js';
import Root from './components/Root.js';
import Gallery from './components/Gallery.js';
import About from './components/About.js';
import Strategies from './components/Strategies.js';

const App = () => (
    <BrowserRouter>
        <Root>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path={"programs"} element={<Programs />} />
                    <Route path={"gallery"} element={<Gallery />} />
                    <Route path={"about-us"} element={<About />} />
                    <Route path={"strategies"} element={<Strategies />} />
                </Route>
                <Route path="*" element={<Home />} />
            </Routes>
        </Root>
    </BrowserRouter>
);

render(<App />, document.getElementById('root'));
