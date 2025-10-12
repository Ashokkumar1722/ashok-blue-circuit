const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-border-glow inline-block border-b-2 border-primary pb-2">
          About Me
        </h2>
        <div className="space-y-6 animate-fade-in">
          <div className="bg-card p-6 rounded-lg border border-primary/30 shadow-neon">
            <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
            <p className="text-foreground/90 text-lg">
              <span className="font-bold">B.Tech in Electronics and Communication Engineering</span>
              <br />
              Kalasalingam Academy of Research and Education
              <br />
              <span className="text-muted-foreground">2022–2026</span>
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-primary/30 shadow-neon">
            <h3 className="text-2xl font-semibold text-primary mb-4">Who I Am</h3>
            <p className="text-foreground/90 text-lg leading-relaxed">
              Enthusiastic ECE engineer skilled in Python, IoT, and embedded system design. 
              Passionate about connecting hardware with software logic to create innovative solutions 
              that bridge the digital and physical worlds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
