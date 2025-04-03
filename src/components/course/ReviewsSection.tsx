
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Star } from 'lucide-react';
import { useCourseData } from '@/hooks/useCourseData';

const ReviewsSection = () => {
  const { course } = useCourseData();
  
  const reviews = [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      date: "2 months ago",
      content: "This course was exactly what I needed to understand Bitcoin and Coinbase. The instructor explained everything clearly and the steps were easy to follow. Highly recommend!",
    },
    {
      id: 2,
      user: "Maria L.",
      rating: 4,
      date: "1 month ago",
      content: "Great introduction to cryptocurrency. I was hesitant at first but the course made everything simple to understand. The section on security was particularly helpful.",
    },
    {
      id: 3,
      user: "Alessandro B.",
      rating: 5,
      date: "2 weeks ago",
      content: "Perfetto per principianti! Il corso spiega tutto in modo chiaro e semplice. Ora mi sento più sicuro nell'utilizzo di Coinbase.",
    }
  ];
  
  // Rating distribution
  const ratingDistribution = [
    { stars: 5, percentage: 72 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="container-course py-10">
      <h2 className="text-2xl font-bold mb-6">Student feedback</h2>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">{course.rating.toFixed(1)}</div>
          <div className="flex items-center my-2">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                size={20} 
                className={`${i < Math.round(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <div className="text-sm text-gray-500">Course Rating</div>
        </div>
        
        <div className="w-full md:w-2/3">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1 w-20">
                <span>{item.stars}</span>
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>
              <Progress value={item.percentage} className="h-2 flex-grow" />
              <div className="w-12 text-sm text-right">{item.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Reviews</h3>
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-udemy-primary text-white flex items-center justify-center font-semibold mr-3">
                  {review.user.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{review.user}</div>
                  <div className="flex items-center">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
