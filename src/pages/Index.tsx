
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CourseHeader from '@/components/course/CourseHeader';
import CourseHero from '@/components/course/CourseHero';
import InstructorSection from '@/components/course/InstructorSection';
import ReviewsSection from '@/components/course/ReviewsSection';
import RelatedCourses from '@/components/course/RelatedCourses';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <CourseHeader />
        <CourseHero />
        <div className="border-t border-gray-200">
          <InstructorSection />
        </div>
        <div className="border-t border-gray-200">
          <ReviewsSection />
        </div>
        <div className="border-t border-gray-200">
          <RelatedCourses />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
