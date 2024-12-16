import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Code2, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredCourses = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description: 'Master modern web development from front-end to back-end',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    category: 'Web Development',
    level: 'Intermediate',
    students: 2547,
    modules: 24,
    progress: 0,
  },
  {
    id: 2,
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile apps with React Native',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    category: 'Mobile Development',
    level: 'Advanced',
    students: 1832,
    modules: 18,
    progress: 45,
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    description: 'Learn the basics of data science and analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Data Science',
    level: 'Beginner',
    students: 3241,
    modules: 16,
    progress: 78,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Transform Your Career with Expert-Led Online Courses
            </h1>
            <p className="mb-8 text-xl opacity-90">
              Learn from industry experts and get certified in Web Development,
              Mobile Development, Data Science, and more.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" className="text-white">
                View Learning Path
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <BookOpen className="h-8 w-8" />,
              stat: '200+',
              label: 'Online Courses',
            },
            {
              icon: <Users className="h-8 w-8" />,
              stat: '50,000+',
              label: 'Active Students',
            },
            {
              icon: <Code2 className="h-8 w-8" />,
              stat: '100+',
              label: 'Expert Instructors',
            },
            {
              icon: <Trophy className="h-8 w-8" />,
              stat: '95%',
              label: 'Success Rate',
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="mx-auto mb-4 inline-block rounded-full bg-primary/10 p-3 text-primary">
                {item.icon}
              </div>
              <h3 className="mb-2 text-3xl font-bold">{item.stat}</h3>
              <p className="text-muted-foreground">{item.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Featured Courses</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Badge>{course.category}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()} students
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.modules} modules
                    </span>
                  </div>
                  {course.progress > 0 && (
                    <div className="mt-4">
                      <Progress value={course.progress} className="h-2" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        {course.progress}% Complete
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}