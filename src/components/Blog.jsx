import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      description: "Learn the best practices for building large-scale React applications with proper architecture and state management.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Best Practices"],
      url: "https://medium.com/@example",
      platform: "Medium"
    },
    {
      title: "Microservices with Node.js",
      description: "A comprehensive guide to implementing microservices architecture using Node.js and Docker containers.",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      tags: ["Node.js", "Microservices", "Docker"],
      url: "https://dev.to/example",
      platform: "Dev.to"
    },
    {
      title: "Database Optimization Techniques",
      description: "Exploring advanced database optimization strategies for improving application performance and scalability.",
      date: "Nov 10, 2024",
      readTime: "10 min read",
      tags: ["Database", "Performance", "SQL"],
      url: "https://hashnode.com/example",
      platform: "Hashnode"
    },
    {
      title: "Modern CSS Techniques",
      description: "Discover the latest CSS features and techniques for creating stunning user interfaces and animations.",
      date: "Oct 22, 2024",
      readTime: "6 min read",
      tags: ["CSS", "UI/UX", "Animations"],
      url: "https://medium.com/@example",
      platform: "Medium"
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Latest Blog Posts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="glass-card group hover:scale-105 transition-all duration-500"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="glass">
                    {post.platform}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <CardTitle className="text-xl gradient-text group-hover:text-shadow transition-all duration-300">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="glass">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                  
                  <Button variant="hero" size="sm" className="glow-button">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;