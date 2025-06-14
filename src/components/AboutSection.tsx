// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowDown, Briefcase, GraduationCap, Calendar } from 'lucide-react';
// import { Separator } from '@/components/ui/separator';
// import { Card } from '@/components/ui/card';

// const AboutSection: React.FC = () => {
//   return (
//     <section id="about" className="py-20 bg-secondary/30">
//       <div className="section-container">
//         <h2 className="section-title">About Me</h2>
        
//         <div className="grid md:grid-cols-2 gap-10 items-start mt-8">
//           <div>
//             <p className="text-lg mb-6">
//               Hello! I'm Amine Mharzi, a passionate AI and Data Science practitioner currently pursuing a Master’s in Intelligent Processing Systems at Mohammed V University, Rabat.
//               I specialize in developing smart, data-driven applications across domains like healthcare, tourism, and enterprise systems.
//             </p>
//             <p className="text-lg mb-6">
//               I’ve built real-time data pipelines with Apache Airflow and Kafka, fine-tuned NLP models for chatbots, and delivered full-stack solutions for mobile and web platforms.
//               I'm driven by the goal of solving real-world problems with innovative and scalable technology.
//             </p>
//             <p className="text-lg mb-6">
//               When I’m not coding or building ML pipelines, I love exploring new AI tools, reading about cutting-edge research, and collaborating on exciting tech projects.
//             </p>
            
//             <div className="mt-8">
//               <Button asChild className="flex items-center" size="lg">
//                 <a href="/Amine_MHARZI_English_resume.pdf" download>
//                   Download Resume <ArrowDown className="ml-2 h-4 w-4" />
//                 </a>
//               </Button>
//             </div>
//           </div>
          
//           <div className="space-y-10">
//             {/* Education Timeline */}
//             <div className="bg-background rounded-lg p-6 shadow-sm">
//               <div className="flex items-center mb-6">
//                 <GraduationCap className="h-6 w-6 text-primary mr-3" />
//                 <h3 className="font-bold text-xl">Education</h3>
//               </div>
              
//               <div className="space-y-8">
//                 <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-0 last:pb-0">
//                   <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
//                   <div className="mb-1 flex items-center gap-2">
//                     <h4 className="font-medium text-lg">Master in Intelligent Processing Systems</h4>
//                   </div>
//                   <div className="flex items-center text-muted-foreground mb-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>2023 - 2025</span>
//                   </div>
//                   <p className="text-muted-foreground">Mohammed V University - Rabat</p>
//                 </div>

//                 <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
//                   <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
//                   <div className="mb-1 flex items-center gap-2">
//                     <h4 className="font-medium text-lg">Professional License in Big Data and AI</h4>
//                   </div>
//                   <div className="flex items-center text-muted-foreground mb-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>2022 - 2023</span>
//                   </div>
//                   <p className="text-muted-foreground">Mohammed V University - Rabat</p>
//                 </div>

//                 <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
//                   <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
//                   <div className="mb-1 flex items-center gap-2">
//                     <h4 className="font-medium text-lg">DUT in Business Intelligence</h4>
//                   </div>
//                   <div className="flex items-center text-muted-foreground mb-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>2020 - 2022</span>
//                   </div>
//                   <p className="text-muted-foreground">Higher School of Technology - Fez</p>
//                 </div>

//                 <div className="relative pl-8 border-l-2 border-primary/30">
//                   <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
//                   <div className="mb-1 flex items-center gap-2">
//                     <h4 className="font-medium text-lg">Baccalaureate in Physical Sciences</h4>
//                   </div>
//                   <div className="flex items-center text-muted-foreground mb-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>2020</span>
//                   </div>
//                   <p className="text-muted-foreground">AbdelKarim Daoudi High School - Fez</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Experience Timeline */}
//             <div className="bg-background rounded-lg p-6 shadow-sm">
//               <div className="flex items-center mb-6">
//                 <Briefcase className="h-6 w-6 text-primary mr-3" />
//                 <h3 className="font-bold text-xl">Experience</h3>
//               </div>
              
//               <div className="space-y-8">
//                 <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-0 last:pb-0">
//                   <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
//                   <div className="mb-1">
//                     <h4 className="font-medium text-lg">Data Science Intern</h4>
//                     <p className="font-medium">PLENITUDE GROUP</p>
//                   </div>
//                   <div className="flex items-center text-muted-foreground mb-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>Apr 2023 - Jun 2023</span>
//                   </div>
//                   <p className="mt-2">
//                     Developed a recommendation engine for doctors using ML and NLP, optimized spatial queries with PostgreSQL/PostGIS.
//                   </p>
//                 </div>

//                 <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-0 last:pb-0">
//                   <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
//                   <div className="mb-1">
//                     <h4 className="font-medium text-lg">Mobile Development Intern</h4>
//                     <p className="font-medium">MOBIARCHITECTS</p>
//                   </div>
//                   <div className="flex items-center text-muted-foreground mb-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>Apr 2022 - Jun 2022</span>
//                   </div>
//                   <p className="mt-2">
//                     Built an E-Tourism app using Flutter and ASP.NET, with interactive booking and tourist info features.
//                   </p>
//                 </div>

//                 <div className="relative pl-8 border-l-2 border-primary/30">
//                   <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
//                   <div className="mb-1">
//                     <h4 className="font-medium text-lg">Web Development Intern</h4>
//                     <p className="font-medium">OCTOBOT-CONSULTING</p>
//                   </div>
//                   <div className="flex items-center text-muted-foreground mb-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>May 2021 - Jun 2021</span>
//                   </div>
//                   <p className="mt-2">
//                     Developed hotel management system features using PHP and Bootstrap, including client tracking and invoice automation.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, GraduationCap, Calendar, User, Award, Target } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
const BASE_URL = import.meta.env.BASE_URL;


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-primary mr-3" />
              <h3 className="font-bold text-xl">Who I Am</h3>
            </div>
            <p className="text-lg mb-6">
              Hello! I'm Amine Mharzi, a passionate AI and Data Science practitioner currently pursuing a Master's in Intelligent Processing Systems at Mohammed V University, Rabat.
              I specialize in developing smart, data-driven applications across domains like healthcare, tourism, and enterprise systems.
            </p>
            <p className="text-lg mb-6">
              I've built real-time data pipelines with Apache Airflow and Kafka, fine-tuned NLP models for chatbots, and delivered full-stack solutions for mobile and web platforms.
              I'm driven by the goal of solving real-world problems with innovative and scalable technology.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-primary mr-3" />
              <h3 className="font-bold text-xl">What I Do</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-sm">Develop intelligent systems using Machine Learning and AI</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-sm">Build scalable data pipelines and real-time processing systems</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-sm">Create full-stack web and mobile applications</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-sm">Optimize databases and implement spatial data solutions</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild className="flex items-center w-full justify-center" size="lg">
                <a href="./Amine_MHARZI_English_resume.pdf" download>
                  Download Resume <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Education and Experience Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Timeline */}
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="font-bold text-xl">Education</h3>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-0 last:pb-0">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <div className="mb-1 flex items-center gap-2">
                  <h4 className="font-medium text-lg">Master in Intelligent Processing Systems</h4>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2023 - 2025</span>
                </div>
                <p className="text-muted-foreground">Mohammed V University - Rabat</p>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <div className="mb-1 flex items-center gap-2">
                  <h4 className="font-medium text-lg">Professional License in Big Data and AI</h4>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2022 - 2023</span>
                </div>
                <p className="text-muted-foreground">Mohammed V University - Rabat</p>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <div className="mb-1 flex items-center gap-2">
                  <h4 className="font-medium text-lg">DUT in Business Intelligence</h4>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2020 - 2022</span>
                </div>
                <p className="text-muted-foreground">Higher School of Technology - Fez</p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <div className="mb-1 flex items-center gap-2">
                  <h4 className="font-medium text-lg">Baccalaureate in Physical Sciences</h4>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>2020</span>
                </div>
                <p className="text-muted-foreground">AbdelKarim Daoudi High School - Fez</p>
              </div>
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h3 className="font-bold text-xl">Experience</h3>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-0 last:pb-0">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <div className="mb-1">
                  <h4 className="font-medium text-lg">Data Science Intern</h4>
                  <p className="font-medium text-primary">PLENITUDE GROUP</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Apr 2023 - Jun 2023</span>
                </div>
                <p className="text-sm mt-2">
                  Developed a recommendation engine for doctors using ML and NLP, optimized spatial queries with PostgreSQL/PostGIS.
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Machine Learning</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">NLP</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PostgreSQL</span>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-0 last:pb-0">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <div className="mb-1">
                  <h4 className="font-medium text-lg">Mobile Development Intern</h4>
                  <p className="font-medium text-primary">MOBIARCHITECTS</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Apr 2022 - Jun 2022</span>
                </div>
                <p className="text-sm mt-2">
                  Built an E-Tourism app using Flutter and ASP.NET, with interactive booking and tourist info features.
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Flutter</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">ASP.NET</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Mobile App</span>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <div className="mb-1">
                  <h4 className="font-medium text-lg">Web Development Intern</h4>
                  <p className="font-medium text-primary">OCTOBOT-CONSULTING</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>May 2021 - Jun 2021</span>
                </div>
                <p className="text-sm mt-2">
                  Developed hotel management system features using PHP and Bootstrap, including client tracking and invoice automation.
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PHP</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Bootstrap</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Web Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests Section */}
        <div className="mt-16">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="font-bold text-xl">Beyond Work</h3>
            </div>
            <p className="text-muted-foreground">
              When I'm not coding or building ML pipelines, I love exploring new AI tools, reading about cutting-edge research, and collaborating on exciting tech projects. 
              I'm always eager to learn about emerging technologies and contribute to innovative solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;