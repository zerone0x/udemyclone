
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useCourseData } from '@/hooks/useCourseData';

const CourseHeader = () => {
  const { course } = useCourseData();

  return (
    <div className="bg-udemy-dark py-8">
      <div className="container-course text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-xl mb-4">{course.subtitle}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                size={18} 
                className={`${i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
              />
            ))}
          </div>
          <span className="text-yellow-400 font-medium">{course.rating.toFixed(1)}</span>
          <span className="text-sm">({course.reviewsCount} reviews)</span>
          <span className="text-sm">{course.studentsCount} students</span>
        </div>
        
        <div className="mb-4">
          <span className="text-sm">
            Created by <a href="#instructor" className="underline">{course.instructor.name}</a>
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-sm mb-4">
          <div className="flex items-center gap-1">
            <span className="material-icons text-sm">update</span>
            <span>Last updated {course.lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons text-sm">language</span>
            <span>{course.language}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons text-sm">closed_caption</span>
            <span>{course.subtitles.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
