import NavBar from "@/components/elements/NavBar";
import CourseHome from "@/components/sections/course/CourseHome";

const coursePage = () =>{
    return(
        <div style={{minHeight:"100vh",backgroundColor:"#fff"}}>
        <NavBar/>
        <CourseHome/>
        </div>
    )
}

export default coursePage

  