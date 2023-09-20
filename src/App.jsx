import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {ContextProvider, useStateContext} from "./context/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Line,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
} from "./pages";

const App = ()  => {
  const {activeMenu, currentMode,themeSettings,currentColor, setThemeSettings} = useStateContext();

  return (
    <div className= { currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
       <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <div title="Settings">
              <TooltipComponent content= 'Settings' position="Top">
              <button
                className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray text-ellipsis pink__color"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
              </TooltipComponent>
            </div>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar/></div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>
          <div>
           {themeSettings &&  <ThemeSettings />}
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce/>} />
              <Route path="/ecommerce" element={<Ecommerce/>} />

              {/* Pages */}
              <Route path="/orders" element={<Orders/>}/>
              <Route path="/employees" element={<Employees/>}/>
              <Route path="/customers" element={<Customers/>}/>

              {/* Apps */}

              <Route path="/kanban" element={<Kanban/>}/>
              <Route path="/calender" element={<Calendar/>}/>
              <Route path="/color-picker" element={<ColorPicker/>}/>

              {/* Charts */}
              <Route path="/line" element={<Line/>}/>
              <Route path="/area" element={<Area/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path = "/color-mapping" element = { <ColorMapping/> } />
              <Route path="/financial" element={<Financial/>}/>
              <Route path="/pyramid" element={<Pyramid/>}/>
            </Routes>
            </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;