
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCourseData } from '@/hooks/useCourseData';

const InstructorSection = () => {
  const { course } = useCourseData();
  const { instructor } = course;

  return (
    <div className="container-course py-10">
      <h2 className="text-2xl font-bold mb-6">Instructor</h2>
      
      <div className="mb-6">
        <a href="#instructor-profile" className="text-xl text-udemy-primary font-bold hover:underline">
          {instructor.name}
        </a>
        <p className="text-gray-500 mt-1">{instructor.title}</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-32 h-32 flex-shrink-0">
          <img 
            src={instructor.avatar || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} 
            alt={instructor.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-wrap gap-y-2 gap-x-8 mb-4">
            <div className="flex items-center gap-2">
              <span className="material-icons text-udemy-dark">star</span>
              <span>{instructor.rating} Instructor Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-udemy-dark">reviews</span>
              <span>{instructor.reviewsCount} Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-udemy-dark">groups</span>
              <span>{instructor.studentsCount} Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-udemy-dark">play_circle</span>
              <span>{instructor.coursesCount} Courses</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">
            {instructor.bio}
          </p>
          
          <Button variant="outline" className="border-udemy-dark text-udemy-dark hover:bg-gray-100">
            View profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
