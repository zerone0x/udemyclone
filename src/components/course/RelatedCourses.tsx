import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const RelatedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Ethereum: La guida completa per principianti",
      instructor: "Marco Rossi",
      rating: 4.7,
      reviewsCount: 3210,
      price: 19.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    },
    {
      id: 2,
      title: "Blockchain: Fondamenti e applicazioni",
      instructor: "Laura Bianchi",
      rating: 4.9,
      reviewsCount: 1870,
      price: 24.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
    },
    {
      id: 3,
      title: "DeFi: Finanza Decentralizzata Spiegata",
      instructor: "Giovanni Verdi",
      rating: 4.8,
      reviewsCount: 2430,
      price: 29.99,
      originalPrice: 119.99,
      image:
        "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container-course py-10">
      <h2 className="text-2xl font-bold mb-6">Students also bought</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium mb-1 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{course.instructor}</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-500 font-medium">
                  {course.rating.toFixed(1)}
                </span>
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.round(course.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                </div>
                <span className="text-xs text-gray-500">
                  ({course.reviewsCount})
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-bold">${course.price}</span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${course.originalPrice}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
