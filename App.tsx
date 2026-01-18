
import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, BookOpen, Cpu, Twitter } from 'lucide-react';
import NetworkBackground from './components/NetworkBackground';
import { PROFILE, EDUCATION, EXPERIENCE, SELECTED_PUBLICATIONS } from './constants';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-8 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-accent/20 blur-sm opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-32 h-32 bg-zinc-900 border border-zinc-800 overflow-hidden rounded-sm shadow-2xl">
               <img src={PROFILE.avatarUrl} alt="Zewen Chi" className="w-full h-full object-cover opacity-90 transition-all duration-700" />
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-2 font-mono">
              Zewen Chi
            </h1>
            <p className="text-xl font-mono text-accent">
              Researcher @ Microsoft Research
            </p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
             <div className="h-12 w-1.5 bg-accent shrink-0 mt-1"></div>
             <div className="space-y-4">
               <p className="text-2xl font-mono text-white tracking-tight leading-relaxed">
                 {PROFILE.missionStatements[0]}
               </p>
               <p className="text-zinc-400 text-lg leading-relaxed font-sans max-w-3xl">
                 {PROFILE.bio}
               </p>
               <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-mono text-zinc-400 pt-3 border-t border-zinc-900">
                <a href={PROFILE.socials.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Twitter className="w-4 h-4"/> Twitter</a>
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Linkedin className="w-4 h-4"/> LinkedIn</a>
                <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Github className="w-4 h-4"/> GitHub</a>
                <a href={`mailto:chizewen@outlook.com`} className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4"/> Email</a>
              </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title }: { title: string }) => (
  <div className="mb-6 space-y-3">
    <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.3em] font-bold">{title}</h3>
    <div className="h-px bg-zinc-800 w-full"></div>
  </div>
);

const TimelineExperience = () => (
  <section className="py-8 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Experience" />
      <div className="space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 group">
            <div className="text-zinc-500 font-mono text-xs pt-1.5 uppercase tracking-wider">{exp.period}</div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{exp.company}</h3>
              <p className="text-zinc-400 text-sm font-mono mb-2">{exp.role} · {exp.advisor}</p>
              <ul className="space-y-1 opacity-80">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-zinc-400 text-sm flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-8 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Education" />
      <div className="space-y-8">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
            <div className="text-zinc-500 font-mono text-xs pt-1.5 uppercase tracking-wider">{edu.period}</div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
              <p className="text-zinc-400 text-sm font-mono">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PublicationItem = ({ pub }: { pub: any }) => {
  const hasVideo = 'videoUrl' in pub && pub.videoUrl;

  return (
    <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-sm overflow-hidden hover:border-zinc-700 transition-all group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-4 aspect-video bg-zinc-950 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-800 relative group/media overflow-hidden">
          {/* <img 
            src={`https://images.unsplash.com/photo-1620712943543-bcc4628c6757?auto=format&fit=crop&q=80&w=800`} 
            className="w-full h-full object-cover grayscale opacity-50 group-hover/media:scale-105 transition-transform duration-700" 
            alt="Research Visual"
          /> */}
          {hasVideo ? (
               <video 
                 src={pub.videoUrl}
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
               />
             ) : (
               <img 
                 src={pub.coverImage} 
                 alt={pub.title}
                 className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
               />
             )}
          {/* <img src={pub.coverImage} alt={pub.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" /> */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-opacity z-10 bg-black/40 backdrop-blur-sm">
             <span className="font-mono text-[10px] text-white border border-white/20 px-3 py-1">VIEW POST</span>
          </div>
        </div>
        
        <div className="lg:col-span-8 p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start gap-4 mb-1">
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors leading-tight">{pub.title}</h3>
              <a href={pub.link} className="shrink-0 text-zinc-500 hover:text-white"><ExternalLink className="w-4 h-4"/></a>
            </div>
            {/* <p className="text-zinc-500 text-xs font-mono mb-3">{pub.authors}</p> */}
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-sans">
              {pub.description}
            </p>

          </div>
          
          <div className="pt-3 border-t border-zinc-800/50 flex justify-between items-center">
            <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em]">{pub.venue}</span>
            <span className="text-[10px] font-mono text-zinc-700">REF_ID: 2025_0{Math.floor(Math.random()*9)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedWork = () => (
  <section className="py-8 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Selected Research" />
      <div className="space-y-6">
        {SELECTED_PUBLICATIONS.map((pub, idx) => (
          <PublicationItem key={idx} pub={pub} />
        ))}
      </div>
    </div>
  </section>
);

const Honors = () => (
  <section className="py-8 px-6 pb-24">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Honors & Awards" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
        {[
          "CIPS Doctoral Dissertation Award (2025)",
          "MSRA Fellowship Nomination (2022)",
          "Gold Medal, China Collegiate Programming Contest",
          "Silver Medal, ACM-ICPC Regional Contest",
          "ICKG 2020 Best Student Paper Award",
          "NLPCC 2019 Best Student Paper Award"
        ].map((award, idx) => (
          <div key={idx} className="flex items-start gap-4 group">
            <div className="mt-1.5 h-1.5 w-1.5 bg-accent/40 group-hover:bg-accent transition-colors shrink-0"></div>
            <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-100 transition-colors leading-relaxed">{award}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen bg-background text-white selection:bg-accent selection:text-black font-sans">
    <NetworkBackground />
    <header className="fixed top-0 left-0 w-full z-40 bg-background/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Cpu className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform" />
          <span className="font-mono text-xs font-bold tracking-widest text-zinc-400 uppercase">ZEWEN.CHI</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">STATUS: CONNECTED</span>
        </div>
      </div>
    </header>
    <main className="relative z-10">{children}</main>
    <footer className="relative z-10 py-12 border-t border-zinc-900/50 bg-black/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-10 opacity-40 hover:opacity-100 transition-opacity">
           <a href={PROFILE.socials.scholar} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer"><BookOpen className="w-4 h-4"/></a>
           <a href={PROFILE.socials.github} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4"/></a>
           <a href={PROFILE.socials.linkedin} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4"/></a>
           <a href={PROFILE.socials.twitter} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer"><Twitter className="w-4 h-4"/></a>
        </div>
        <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.4em]">ENJOY // 2026</p>
      </div>
    </footer>
  </div>
);

const App = () => (
  <Layout>
    <Hero />
    <TimelineExperience />
    <Education />
    <SelectedWork />
    <Honors />
  </Layout>
);

export default App;
