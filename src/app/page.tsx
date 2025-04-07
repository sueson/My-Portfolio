import { Code, Mail, Briefcase, Smartphone, Brain, Send, Globe } from 'lucide-react';
import { IoLogoGithub } from "react-icons/io";
import { FiLinkedin } from "react-icons/fi";
import { Section } from '@/components/sections';
import { ProjectsCard } from '@/components/projects-card';



export default function Home() {
    const projects = [
        {
          title: "Slack Clone",
          description: "A Slack clone built with real-time messaging, authentication, and server management features.",
          image: "/slack-clone.png",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Convex", "Auth.js"],
          githubUrl: "https://github.com/sueson/slack-clone",
          liveUrl: "https://slack-clone-six-beta.vercel.app/"
        },
        {
          title: "AI Music Generator",
          description: "A mobile app that generates songs from user-written stories or lyrics using OpenAI, Suno APIs, and Genius APIs.",
          image: "/ai-music-generator.png",
          technologies: ["React Native", "Expo", "OpenAI API", "Suno AI", "NativeWind", "Clerk"],
          githubUrl: "https://github.com/sueson/AI-song-generator-app",
        },
        {
          title: "Banking System Management",
          description: "A command-line based banking system developed using Python, supporting functionalities like account creation, deposits, withdrawals, and balance checks.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
          technologies: ["Python"],
          githubUrl: "https://github.com/sueson/Banking-System",
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
                    Sueson | Junior Software Developer
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
                    <a href="https://github.com/sueson" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                        <IoLogoGithub className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/sueson-i/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                        <FiLinkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About Me">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Who am I?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            I&apos;m a passionate Junior Full Stack Developer with a Master&apos;s in Computer Science 
                            and a strong foundation in both frontend and backend technologies. I enjoy crafting seamless 
                            user experiences while building robust and scalable backend systems. I love turning ideas into 
                            impactful digital experiences, and I&apos;m currently seeking an opportunity to grow as a developer 
                            and contribute to innovative teams.   
                        </p>
                    </div>
                    <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4">
                        {['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Django', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker'].map((skill) => (
                        <div
                            key={skill}
                            className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition-transform hover:shadow-lg"
                        >
                            <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{skill}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </Section>

        {/* Services Section */}
        <Section id="services" title="What I Do">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                    {
                        icon: Globe,
                        title: "Web Development",
                        description: "Building responsive and performant web applications with modern frameworks"
                    },
                    {
                        icon: Brain,
                        title: "AI & API Integration",
                        description: "Integrating AI services and third-party APIs to build intelligent and feature-rich applications."
                    },
                    {
                        icon: Smartphone,
                        title: "Mobile App Development",
                        description: "Creating cross-platform mobile apps with smooth performance and modern UI using React Native and Expo."
                    }
                    ].map(({ icon: Icon, title, description }) => (
                    <div key={title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="My Projects">
            <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                <ProjectsCard key={project.title} {...project} />
                ))}
            </div>
            </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get in Touch">
            <div className="max-w-2xl mx-auto px-4">
                <form className="space-y-6 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    ></textarea>
                    </div>
                    <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                    >
                    <Send className="w-5 h-5" />
                        Send Message
                    </button>
                </form>
            </div>
        </Section>
    </div>
  );
}
