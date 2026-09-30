import Navbar from"./components/Navbar";
import Hero from "./components/Hero";
import Course from "./components/Course";
import CourseList from "./components/CourseList";


function App() {
  return (
    
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <CourseList />
    
    </div>
  );
}

export default App;