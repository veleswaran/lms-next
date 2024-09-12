import CourseDetails from '@/components/sections/course/CourseDetails';


// The component that fetches data and renders it
export default async function CoursePage({ params }: { params: { id: string } }) {
  console.log(params.id)

  return (
    <div>
      <CourseDetails id={params.id}/>
    </div>
  );
}
