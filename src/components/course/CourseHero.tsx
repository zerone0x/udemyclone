
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCourseData } from '@/hooks/useCourseData';
import { Clock, Award, Monitor, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CourseHero = () => {
  const { course } = useCourseData();
  const { toast } = useToast();

  const handleEnroll = () => {
    toast({
      title: "Course added to cart!",
      description: `${course.title} has been added to your cart.`
    });
  };

  return (
    <div className="relative z-10 -mt-20 mb-16">
      <div className="container-course">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-video relative rounded-md overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Course preview" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      Preview Course
                    </Button>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {course.whatYoullLearn.map((item, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-4">Course content</h2>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span>{course.sectionsCount} sections • {course.lecturesCount} lectures • {course.totalLength}</span>
                    <Button variant="link" className="p-0 text-udemy-primary">Expand all sections</Button>
                  </div>

                  {course.sections.slice(0, 3).map((section, index) => (
                    <div key={index} className="border rounded-md mb-2">
                      <div className="flex justify-between items-center p-3 bg-gray-50">
                        <h3 className="font-medium">{section.title}</h3>
                        <span className="text-sm text-gray-500">{section.length}</span>
                      </div>
                      <div className="p-3">
                        <div className="text-sm text-gray-600">
                          {section.lectures.slice(0, 1).map((lecture, idx) => (
                            <div key={idx} className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                <span>{lecture.title}</span>
                              </div>
                              <span className="text-xs">{lecture.length}</span>
                            </div>
                          ))}
                          {section.lectures.length > 1 && (
                            <div className="text-sm text-gray-500 mt-1">+ {section.lectures.length - 1} more lectures</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {course.sections.length > 3 && (
                    <div className="text-center mt-4">
                      <Button variant="outline" className="text-udemy-primary">Show all sections</Button>
                    </div>
                  )}
                </div>

                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 mb-6">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="mb-1">{requirement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-6 bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">${course.discountPrice}</span>
                  {course.originalPrice !== course.discountPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">${course.originalPrice}</span>
                  )}
                  {course.originalPrice !== course.discountPrice && (
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded ml-2">
                      {Math.round((1 - course.discountPrice / course.originalPrice) * 100)}% off
                    </span>
                  )}
                </div>

                <div className="text-sm text-center text-red-600 mb-4">
                  <span>Sale ends in 6 days, 23 hours</span>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full bg-udemy-primary hover:bg-purple-700" size="lg" onClick={handleEnroll}>
                    Add to cart
                  </Button>
                  <Button variant="outline" className="w-full border-black text-black hover:bg-gray-100" size="lg">
                    Buy now
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-500 mb-6">
                  30-Day Money-Back Guarantee
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">This course includes:</h3>
                  <div className="flex items-center text-sm">
                    <Monitor size={18} className="mr-2" />
                    <span>{course.hoursOfVideo} hours on-demand video</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FileText size={18} className="mr-2" />
                    <span>{course.articles} articles</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FileText size={18} className="mr-2" />
                    <span>{course.downloadableResources} downloadable resources</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock size={18} className="mr-2" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Award size={18} className="mr-2" />
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
