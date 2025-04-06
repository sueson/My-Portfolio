import { Code, Mail,  User, Briefcase, FileCode, Send, Award, Book, Clock, Coffee, Globe, Heart } from 'lucide-react';
import { IoLogoGithub } from "react-icons/io";
import { FiLinkedin } from "react-icons/fi";





export default function Home() {
    const projects = [
        {
          title: "E-Commerce Platform",
          description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
          technologies: ["React", "Node.js", "MongoDB", "Redux"],
          githubUrl: "#",
          liveUrl: "#"
        },
        {
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
          technologies: ["React", "Firebase", "Tailwind CSS"],
          githubUrl: "#",
          liveUrl: "#"
        },
        {
          title: "Social Media Dashboard",
          description: "Analytics dashboard for social media management",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
          technologies: ["TypeScript", "Next.js", "Chart.js"],
          githubUrl: "#",
          liveUrl: "#"
        }
      ];

      const stats = [
        { icon: Coffee, label: "Coffee Consumed", value: "1,234+" },
        { icon: Clock, label: "Hours Coded", value: "5,000+" },
        { icon: Heart, label: "Happy Clients", value: "100+" },
        { icon: Globe, label: "Countries Reached", value: "25+" },
      ];

      const testimonials = [
        {
          name: "Sarah Johnson",
          role: "CEO at TechStart",
          content: "An exceptional developer who consistently delivers outstanding results.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
        },
        {
          name: "Michael Chen",
          role: "Product Manager",
          content: "Incredible attention to detail and amazing problem-solving skills.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
        },
        {
          name: "Emily Davis",
          role: "Tech Lead",
          content: "A true professional who brings innovation to every project.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
        }
      ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5">
            <div className="text-center">
                <div className="mb-6 inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white transform hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8" />
                </div>
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Full Stack Developer
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    I build exceptional and scalable web applications with modern technologies
                </p>

                <div className="flex justify-center gap-4">
                    <a
                    href="#contact"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </a>
                    <a
                    href="#projects"
                    className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
                    >
                        <Briefcase className="w-5 h-5" />
                        View Projects
                    </a>
                </div>
                <div className="mt-12 flex justify-center gap-6">
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                        <IoLogoGithub className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                        <FiLinkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>

        
    </div>
  );
}
