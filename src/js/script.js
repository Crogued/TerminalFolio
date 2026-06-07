const terminalOutput = document.getElementById("terminal-output");
const commandLine = document.getElementById("command-line");
const terminal = document.getElementById("terminal");
// New scrollable container reference
let terminalBody; 

window.setCommandLine = function(cmd) {
  const input = document.getElementById("command-line");
  if (input) {
    input.value = cmd;
    input.focus();
  }
};

// Configuration variables
let specialCommands = {};
let aboutCommands = {};
let socials = {};
let header = "Welcome to Christian Rodrigues' portfolio.\nType 'help' to see available commands or click 'Tutorial' for a brief walkthrough.\n\nUse mouse scroll to see more content.";
let title = "Christian Rodrigues | PortfolioShell";

// Embed user data directly to avoid CORS issues with local file fetch
const userData = {
    "name": "Christian Rodrigues",
    "email": "christian.rodrigues0211@gmail.com",
    "bio": "AI & Robotics Software Engineer. Robotics and AI student specialized in Artificial Intelligence and Computer Vision. Driven by the development of intelligent, autonomous systems that tackle complex, real-world challenges. From implementing real-time anomaly detection pipelines to architecting AI agents, I thrive at the intersection of deep learning and system engineering. My goal is to leverage these technologies to drive innovation in computational biomedicine and data-driven healthcare.",
    "resume": "https://www.linkedin.com/in/crogued/",
    "socials": {
      "GitHub": {
        "url": "https://github.com/Crogued",
        "text": "Crogued"
      },
      "LinkedIn": {
        "url": "https://www.linkedin.com/in/crogued/",
        "text": "Christian Rodrigues"
      },
      "CV": { 
        "url": "https://drive.google.com/file/d/1WTiB6bAAkwAQtYLaQT_ivuKyr3xmzlRC/view?usp=sharing",
        "text": "Download CV"
      }
    },
    "projects": [
      {
        "name": "Real-Time VMS",
        "description": "Complete Video Management System integrating YOLO architectures, ByteTrack tracking, local VLMs, and MQTT for real-time anomaly detection at Hitachi Rail.",
        "link": "https://github.com/Crogued"
      },
      {
        "name": "Nautilus Lab (Autodrone 2026)",
        "description": "Team Captain leading ENIDH's first-ever international entry into the autonomous surface vehicle competition in Horten, Norway.",
        "link": "https://github.com/Bolofofopt/ProjetUSVautodrone"
      },
      {
        "name": "HumanoidRoboticArm",
        "description": "2-DoF robotic arm with 5-DoF humanoid hand, controlled via real-time computer vision and gesture recognition. Published research.",
        "link": "https://github.com/Crogued/HumanoidRoboticArmVision"
      },
      {
        "name": "VectorNavigation",
        "description": "Autonomous USV control system using vector-based GPS navigation. Core component of a Master's thesis. Validated at REPMUS25/Naval-Rex25.",
        "link": "https://github.com/Crogued/VectorNavigation"
      },
      {
        "name": "BuoyVisionNavigation",
        "description": "Autonomous USV navigation system using computer vision for buoy detection (Raspberry Pi + Arduino).",
        "link": "https://github.com/Crogued/BuoyVisionNavigation"
      },
      {
        "name": "Bluetooth-RC-Car",
        "description": "Bluetooth-controlled RC car with ESP32-CAM video streaming, obstacle avoidance, and omnidirectional movement.",
        "link": "https://github.com/Crogued/Bluetooth-RC-Car"
      }
    ],
    "details": {
      "history": "Born in Venezuela, where I lived until age 13. Then I emigrated with my family to Chile, adapting to a new culture during adolescence. The biggest challenge came at 17: we emigrated to Portugal and I landed in Lisbon in March 2020, just days before the airport closed and the worldwide lockdown began. Far from isolating myself, I used that time to dive deep into code and learn the language, achieving full integration. Today I'm trilingual (Spanish, Portuguese, English) and I call Oeiras home.",
      "resilience": "I've always been an athlete. I started Karate at age 6 and played competitive football from 9 to 17. Upon arriving in Portugal, my talent opened doors: I was selected for trials at CRC Carcavelos and Porto Salvo clubs. However, I faced a challenge of financial independence. I had to make a difficult decision: give up competitive football to work and fund my own university education. I worked at Caseking Iberia (PC assembly & hardware diagnostics) while studying. That athletic discipline now drives my engineering work."
    },
    "experience": [
      {
        "title": "Computer Vision & AI Engineering Intern",
        "company": "Hitachi Rail",
        "location": "Oeiras, Portugal",
        "period": "Feb 2026 – Present",
        "highlights": [
          "Engineered a multi-stage AI anomaly detection cascade pipeline integrating YOLO, ByteTrack, and classical CV (MOG2 & Optical Flow).",
          "Deployed local Vision Language Models (VLMs) for secondary anomaly verification, maintaining strict data privacy.",
          "Built an end-to-end Video Management System (VMS) supporting concurrent RTSP streams.",
          "Configured reverse proxies and developed a low-latency MQTT event-driven communication layer."
        ]
      },
      {
        "title": "R&D Member – Internal Strategic Projects",
        "company": "ENIDH (Escola Superior Náutica Infante D. Henrique)",
        "location": "Oeiras, Portugal",
        "period": "Oct 2024 – Present",
        "highlights": [
          "Pioneered a new R&D division by independently conceptualizing and executing advanced robotics and AI projects.",
          "Co-authored a published scientific paper on vision-controlled robotics.",
          "Established an international AI Agents research collaboration with PUC-Rio (Brazil).",
          "Currently directing a project portfolio: Autodrone 2026 USV, vision-controlled robotic arm, and a full-size humanoid robot."
        ]
      },
      {
        "title": "Operations Assistant Intern",
        "company": "Caseking Iberia",
        "location": "Sintra, Portugal",
        "period": "Apr 2023 – Jul 2023",
        "highlights": [
          "High-performance PC assembly, software installation, hardware diagnostics, and benchmarking.",
          "Stock management, quality control, and logistics coordination."
        ]
      }
    ],
    "education": [
      {
        "degree": "Robotics & AI (EQF Level 5)",
        "institution": "ENIDH – Escola Superior Náutica Infante D. Henrique",
        "period": "Sep 2024 – Present",
        "grade": "18/20 GPA",
        "details": "Key Coursework: Computer Vision, Advanced C++/Python, Machine Learning, Industrial Automation."
      },
      {
        "degree": "Programming & Information Systems Management (EQF Level 4)",
        "institution": "School São João do Estoril",
        "period": "Sep 2020 – Jul 2023",
        "grade": "17/20 GPA (High Distinction)",
        "details": "Core Skills: Systems Analysis, Object-Oriented Programming, Data Structures."
      }
    ],
    "publications": [
      {
        "title": "Vision-Controlled Humanoid Robotic Arm",
        "year": "2026",
        "role": "Co-Author",
        "description": "Scientific paper detailing the engineering and development of a humanoid robotic arm controlled entirely through real-time computer vision and gesture recognition.",
        "link": "https://drive.google.com/file/d/1NeKzmOS-XQdO57JAubXAMUOJMGa5moDJ/view?usp=drive_link"
      },
      {
        "title": "AI Agents Integration",
        "year": "2026",
        "role": "Lead Researcher",
        "description": "Scientific article on AI Agents developed in international collaboration with PUC-Rio (Brazil). In Development."
      }
    ],
    "certifications": [
      {
        "name": "Python Essentials 1",
        "issuer": "Cisco",
        "date": "Jan 2025",
        "link": "https://www.credly.com/badges/b8b51428-fdce-4960-9212-f202f7a4523b/public_url"
      },
      {
        "name": "Introduction to Generative AI",
        "issuer": "Google Cloud",
        "date": "Jan 2024",
        "link": "https://www.coursera.org/account/accomplishments/verify/CG9EQBFRDVTU"
      },
      {
        "name": "3D Printing and Fast Prototyping",
        "issuer": "ENIDH",
        "date": "Jun 2025",
        "link": "https://drive.google.com/file/d/1C6wafzjM6Vdg1OuAXXPnOwM_UGSi2dM_/view?usp=sharing"
      }
    ],
    "awards": [
      {
        "title": "Presidential Commendation – University Open Day",
        "issuer": "ENIDH",
        "date": "May 2026",
        "description": "Formal recognition from the University President for outstanding technical contributions following a public exhibition of a two-year AI and robotics portfolio.",
        "link": "https://drive.google.com/file/d/1GdccctKY9diAzStRr6rKSb-pdARsQ3Ss/view?usp=drive_link"
      },
      {
        "title": "1st Place – Team Building Challenge (NAVAL-REX 25)",
        "issuer": "Marinha – Escola Naval",
        "date": "Sep 2025",
        "description": "1st place in the Team Building Challenge during the REPMUS/Naval-Rex 25 international maritime robotics exercises.",
        "link": "https://drive.google.com/file/d/1i5SGNqI2sLuKa1E5feS8c1766l_jvPBO/view?usp=drive_link"
      },
      {
        "title": "Caixa Mais Mundo Awards",
        "issuer": "Caixa Geral de Depósitos",
        "date": "Apr 2025",
        "description": "University Entrance Merit Scholarship – recognition of academic excellence upon admission to Higher Education.",
        "link": "https://drive.google.com/file/d/1KwD29FPPptovRjT7-rhKLZxhiP7WoL2K/view?usp=drive_link"
      },
      {
        "title": "Cascais 2023 Awards – High School Honors",
        "issuer": "Cascais City Hall",
        "date": "Nov 2023",
        "description": "High School Honors Award for academic excellence.",
        "link": "https://drive.google.com/file/d/1qv7lIrDb-sGe6RgTvnjUZpSyEzUy0r1F/view?usp=drive_link"
      }
    ],
    "volunteering": [
      {
        "role": "Youth Camp Counselor",
        "program": "Jovens em Movimento 2025",
        "organization": "Municipality of Oeiras",
        "period": "Jun 2025 – Aug 2025",
        "text": "Supervision and guidance of youth groups, facilitation of recreational and educational activities, safety management and conflict resolution."
      }
    ],
    "recommendations": [
      {
        "name": "Prof. Dr. Pedro Teodoro",
        "role": "President of the Department of Maritime Engineering at ENIDH",
        "text": "Christian stands out for his proactivity, having developed, with a high degree of autonomy, significant projects in embedded systems, robotics, and computer vision. He is a responsible and collaborative student.",
        "email": "pedroteodoro@enautica.pt",
        "link": "https://drive.google.com/file/d/1TTfw5ujc2-LVvufirLCBgYL_PIMMmrfS/view?usp=drive_link"
      },
      {
        "name": "Prof. Dr. Ricardo Filipe Sereno Póvoa",
        "role": "Coordinator of the Computer Engineering Degree & Researcher at Instituto de Telecomunicações",
        "text": "Highlights top-quartile academic performance in microcontroller programming and proven technical capabilities in leading practical projects, notably autonomous vehicle prototypes and robotic arms with computer vision.",
        "email": "ricardopovoa@enautica.pt",
        "link": "https://drive.google.com/file/d/1bsIrKw29fa6UsUWAKcAR-WEuE3LU3yum/view?usp=drive_link"
      }
    ],
    "skills": [
      "Artificial Intelligence (AI)",
      "Computer Vision",
      "Deep Learning",
      "Python",
      "C++",
      "C",
      "Linux",
      "Git",
      "Arduino IDE",
      "YOLO",
      "OpenCV",
      "MQTT",
      "Raspberry Pi",
      "3D Printing",
      "Project Management",
      "Team Leadership",
      "Problem Solving",
      "Security Management",
      "Decision-Making",
      "Teamwork",
      "Autonomous Vehicles"
    ]
}

let matrixCanvas = null;
let matrixAnimationFrame = null;
let matrixColumns = [];
let commandHistory = [];
let currentHistoryIndex = 0;

// General commands implementation
const generalCommands = {
  clear: {
    execute: () => {
      clearTerminal();
      return null;
    },
    description: "Clear the terminal screen."
  },

  ls: {
    execute: () => {
      return "about.txt    experience.txt    education.txt    projects.txt\npublications.txt    certifications.txt    awards.txt    skills.txt\nREADME.md    commands.json    index.html    script.js    styles.css";
    },
    description: "List files in the current directory."
  },

  cat: {
    execute: (args) => {
      if (args.length === 0) {
        return "Usage: cat [filename].\nType 'ls' to see available files.";
      }
      
      const filename = args[0].toLowerCase();
      const files = {
        "readme.md": "# Portfolio Terminal\n\nA terminal-style portfolio page for Christian Rodrigues.",
        "about.txt": userData?.bio || "Data not available.",
        "experience.txt": "Use the 'experience' command for a better view.",
        "education.txt": "Use the 'education' command for a better view.",
        "projects.txt": "Use the 'projects' command for a better view.",
        "publications.txt": "Use the 'publications' command for a better view.",
        "certifications.txt": "Use the 'certifications' command for a better view.",
        "awards.txt": "Use the 'awards' command for a better view.",
        "skills.txt": userData?.skills ? userData.skills.join(" | ") : "Data not available.",
        "commands.json": "This file contains the special commands for this terminal."
      };
      
      if (files[filename]) {
        return files[filename];
      } else {
        return `cat: ${filename}: No such file or directory.\nType 'ls' to see available files.`;
      }
    },
    description: "Read file contents (e.g., 'cat about.txt')."
  },
  man: {
    execute: (args) => {
      if (args.length === 0) {
        return "Usage: man [command]";
      }
      
      const command = args[0];
      
      if (generalCommands[command]) {
        return `NAME\n    ${command} - ${generalCommands[command].description}\n\nDESCRIPTION\n    ${getManualDescription(command)}`;
      } else if (specialCommands[command]) {
        return `NAME\n    ${command} - ${specialCommands[command].description}\n\nDESCRIPTION\n    Special portfolio command.`;
      } else {
        return `No manual entry for ${command}`;
      }
    },
    description: "Command manual (e.g., 'man ls')."
  },

  history: {
    execute: () => {
      return commandHistory.join("\n") || "No history yet";
    },
    description: "Recent command history."
  },
  help: {
    execute: () => {
      // 0. How to Interact
      let output = "<div><strong>HOW TO INTERACT:</strong></div>";
      output += "<div>1. Pick a command from the list below.</div>";
      output += "<div>2. Type it and press <span class='command'>ENTER</span>.</div><br>";

      // 1. Pro Tip
      output += "<div><strong>💡 Pro Tip:</strong></div>";
      output += "<div>To see files type <span class='command'>ls</span>.</div>";
      output += "<div>To read them type <span class='command'>'cat [name]'</span>. Example: <span class='command'>cat about.txt</span></div><br>";
      
      // 2. Suggested Commands
      output += "<div><strong>Suggested Commands:</strong> (Click on any command to select it)</div>";
      output += "<table>";
      output += `<tr><td class="available-command" onclick="setCommandLine('about')">about</td><td class="command-description">Who I am – bio, story, and resilience.</td></tr>`;
      output += `<tr><td class="available-command" onclick="setCommandLine('experience')">experience</td><td class="command-description">My professional work experience.</td></tr>`;
      output += `<tr><td class="available-command" onclick="setCommandLine('projects')">projects</td><td class="command-description">Technical projects and competitions.</td></tr>`;
      output += `<tr><td class="available-command" onclick="setCommandLine('education')">education</td><td class="command-description">Academic background and coursework.</td></tr>`;
      output += `<tr><td class="available-command" onclick="setCommandLine('skills')">skills</td><td class="command-description">Technical skills and technologies.</td></tr>`;
      output += "</table><br>";

      // 3. All Commands
      output += "<div><strong>All Commands:</strong></div><table>";
      for (let cmd in generalCommands) {
        if (!generalCommands[cmd].hidden) {
             output += `<tr><td class="available-command" onclick="setCommandLine('${cmd}')">${cmd}</td><td class="command-description">${generalCommands[cmd].description}</td></tr>`;
        }
      }
      for (let cmd in specialCommands) {
        output += `<tr><td class="available-command" onclick="setCommandLine('${cmd}')">${cmd}</td><td class="command-description">${specialCommands[cmd].description}</td></tr>`;
      }
      output += "</table>";
      
      return output;
    },
    description: "List all available commands."
  },
  games: {
    execute: () => {
      return `<strong>AVAILABLE GAMES:</strong> (Type the game name to start)<br>
<span class='command'>rps</span>   - Rock, Paper, Scissors<br>
<span class='command'>ttt</span>   - Tic Tac Toe<br>
<span class='command'>simon</span> - Simon Says (Memory)`;
    },
    description: "Interactive games menu."
  },
  rps: {
    execute: () => {
      return startRPS();
    },
    description: "Play Rock, Paper, Scissors.",
    hidden: true
  },
  ttt: {
    execute: () => {
      return startTTT();
    },
    description: "Play Tic Tac Toe.",
    hidden: true
  },
  simon: {
    execute: () => {
      return startSimon();
    },
    description: "Play Simon Says.",
    hidden: true
  },
  about: {
    execute: () => {
       if (!isUserDataAvailable()) return "Data not available.";
       return `
<strong>WHO I AM:</strong><br>
${userData.bio}<br><br>

<strong>MY STORY:</strong><br>
${userData.details?.history}<br><br>

<strong>RESILIENCE:</strong><br>
${userData.details?.resilience}
       `.trim();
    },
    description: "My full story – bio, journey, and resilience."
  },
  experience: {
    execute: () => {
       if (!userData?.experience || userData.experience.length === 0) return "Data not available.";
       
       let output = "<strong>WORK EXPERIENCE:</strong><br>";
       userData.experience.forEach(exp => {
           output += `<div style="margin-top: 10px; margin-bottom: 20px; padding-left: 10px; border-left: 2px solid var(--green-color);">
<strong>${exp.title}</strong><br>
<em>${exp.company}</em> | ${exp.location}<br>
<span style="color: var(--bright-black-color);">${exp.period}</span><br>`;
           if (exp.highlights) {
               exp.highlights.forEach(h => {
                   output += `<span style="color: var(--white-color);">• ${h}</span><br>`;
               });
           }
           output += `</div>`;
       });
       return output;
    },
    description: "Professional work experience."
  },
  education: {
    execute: () => {
       if (!userData?.education || userData.education.length === 0) return "Data not available.";
       
       let output = "<strong>EDUCATION:</strong><br>";
       userData.education.forEach(edu => {
           output += `<div style="margin-top: 10px; margin-bottom: 20px; padding-left: 10px; border-left: 2px solid var(--blue-color);">
<strong>${edu.degree}</strong><br>
<em>${edu.institution}</em><br>
<span style="color: var(--bright-black-color);">${edu.period}</span> | Grade: <span style="color: var(--green-color);">${edu.grade}</span><br>
<span style="color: var(--white-color);">${edu.details}</span>
</div>`;
       });
       return output;
    },
    description: "Academic background and coursework."
  },
  publications: {
    execute: () => {
       if (!userData?.publications || userData.publications.length === 0) return "Data not available.";
       
       let output = "<strong>PUBLICATIONS:</strong><br>";
       userData.publications.forEach(pub => {
           output += `<div style="margin-top: 10px; margin-bottom: 20px; padding-left: 10px; border-left: 2px solid var(--purple-color);">
<strong>${pub.title}</strong> [${pub.year}]<br>
<em>Role: ${pub.role}</em><br>
<span style="color: var(--white-color);">${pub.description}</span>`;
           if (pub.link) {
               output += `<br><a href="${pub.link}" target="_blank">Read Article</a>`;
           }
           output += `</div>`;
       });
       return output;
    },
    description: "Research publications and papers."
  },
  certifications: {
    execute: () => {
       if (!userData?.certifications || userData.certifications.length === 0) return "Data not available.";
       
       let output = "<strong>CERTIFICATIONS:</strong><br><table>";
       userData.certifications.forEach(cert => {
           output += `<tr><td class="name">${cert.name}</td><td class="description">${cert.issuer}</td><td style="color: var(--bright-black-color); padding: 10px 20px;">${cert.date}</td>`;
           if (cert.link) {
               output += `<td class="link"><a href="${cert.link}" target="_blank">View Certificate</a></td>`;
           } else {
               output += `<td></td>`;
           }
           output += `</tr>`;
       });
       output += "</table>";
       return output;
    },
    description: "Professional certifications."
  },
  awards: {
    execute: () => {
       if (!userData?.awards || userData.awards.length === 0) return "Data not available.";
       
       let output = "<strong>HONORS & AWARDS:</strong><br>";
       userData.awards.forEach(award => {
           output += `<div style="margin-top: 10px; margin-bottom: 20px; padding-left: 10px; border-left: 2px solid var(--yellow-color);">
<strong>${award.title}</strong><br>
<em>${award.issuer}</em> | <span style="color: var(--bright-black-color);">${award.date}</span><br>
<span style="color: var(--white-color);">${award.description}</span>`;
           if (award.link) {
               output += `<br><a href="${award.link}" target="_blank">View Certificate</a>`;
           }
           output += `</div>`;
       });
       return output;
    },
    description: "Honors and awards."
  },
  skills: {
    execute: () => {
       if (!userData?.skills || userData.skills.length === 0) return "Data not available.";
       
       let output = "<strong>TECHNICAL SKILLS:</strong><br><div style='margin-top: 10px; padding-left: 10px;'>";
       userData.skills.forEach(skill => {
           output += `<span style="display: inline-block; background: var(--bright-black-color); color: var(--foreground-color); padding: 4px 12px; margin: 4px; border-radius: 4px; font-size: 0.9em;">${skill}</span>`;
       });
       output += "</div>";
       return output;
    },
    description: "Technical skills and technologies."
  },
  recommendations: {
    execute: () => {
       if (!userData?.recommendations || userData.recommendations.length === 0) return "Data not available.";
       
       let output = "<strong>RECOMMENDATIONS:</strong><br>";
       userData.recommendations.forEach(rec => {
           output += `<div style="margin-top: 10px; margin-bottom: 20px; padding-left: 10px; border-left: 2px solid var(--green-color);">
<strong>${rec.name}</strong> | ${rec.role}<br>
<em>"${rec.text}"</em><br>
Email: <a href="mailto:${rec.email}">${rec.email}</a> | <a href="${rec.link}" target="_blank">View Letter</a>
</div>`;
       });

       // Volunteering
       if (userData.volunteering && userData.volunteering.length > 0) {
           output += "<br><strong>VOLUNTEERING:</strong><br>";
           userData.volunteering.forEach(vol => {
               output += `<div style="margin-top: 10px; margin-bottom: 20px; padding-left: 10px; border-left: 2px solid var(--green-color);">
<strong>${vol.role}</strong> | ${vol.program}<br>
<em>${vol.organization}</em> | <span style="color: var(--bright-black-color);">${vol.period}</span><br>
<span style="color: var(--white-color);">${vol.text}</span>
</div>`;
           });
       }
       
       return output;
    },
    description: "Recommendations and volunteering."
  },
  whoami: {
    execute: () => {
      if (!isUserDataAvailable()) {
        return "Error: User data not found.";
      }
      return `<table>
        <tr><td class="name" style="vertical-align: top; padding-right: 15px;">Name:</td><td class="description" style="padding-left: 0;">${userData.name}</td></tr>
        <tr><td colspan="2"><hr style="border: 0; border-top: 1px solid var(--bright-black-color); margin: 5px 0;"></td></tr>
        <tr><td class="name" style="vertical-align: top; padding-right: 15px;">Email:</td><td class="description" style="padding-left: 0;">${userData.email}</td></tr>
        <tr><td colspan="2"><hr style="border: 0; border-top: 1px solid var(--bright-black-color); margin: 5px 0;"></td></tr>
        <tr><td class="name" style="vertical-align: top; padding-right: 15px;">Bio:</td><td class="description" style="padding-left: 0;">${userData.bio}</td></tr>
      </table>`;
    },
    description: "Basic user info card."
  },
  social: {
    execute: () => {
      if (!isUserDataAvailable("socials")) {
        return "Error: Social links not found.";
      }
      let output = "<table>";
      let socials = userData.socials;
      for (let platform in socials) {
        const item = socials[platform];
        output += `<tr><td class="name">${platform}</td><td class="link"><a href="${item.url}" target="_blank">${item.text}</a></td></tr>`;
      }  
      output += "</table>";
      return output;
    },
    "description": "Social media links and contacts.",
  },
  resume: {
    execute: () => {
      if (userData?.socials?.CV?.url) {
        window.open(userData.socials.CV.url, '_blank');
        return "Opening CV in a new tab...";
      }
      return "CV link not available.";
    },
    description: "Open CV/Resume in a new tab."
  },
  projects: {
    execute: () => {
       if (!userData || !userData.projects) {
        return "Error: Project data not loaded.";
      }
      let output = "Here are some of my projects:\n<table>";
      userData.projects.forEach(project => {
        output += `<tr><td class="name">${project.name}</td><td class="description">${project.description}</td><td class="link"><a href="${project.link}" target="_blank">View</a></td></tr>`;
      });
      output += "</table>";
      return output;
    },
    "description": "Technical projects and competitions."
  }
};

// Check if user data is available
const isUserDataAvailable = (key) => {
  return userData && (key ? userData[key] && Object.keys(userData[key]).length > 0 : Object.keys(userData).length > 0);
};

// Load special commands from JSON file
fetch('src/config/commands.json')
  .then(response => response.json())
  .then(data => {
    // Set title if provided
    if (data.title) {
      title = data.title;
      document.title = title;
    }
    
    // Set description/header if provided
    if (data.description) {
      header = data.description;
    }
    
    // Set special commands
    if (data.specialCommands) {
      specialCommands = data.specialCommands;
      
      // Add special commands to aboutCommands for help display
      for (let cmd in specialCommands) {
        aboutCommands[cmd] = specialCommands[cmd].description;
      }
    }
    
    // Set socials if provided
    if (data.socials) {
      socials = data.socials;
    }
    
    // Display header after loading
    displayOutput(header);
  })
  .catch(error => {
    console.error('Error loading commands.json:', error);
    displayOutput(header);
  });

const themes = {
  default: {
    "--background-color": "#1F2430",
    "--foreground-color": "#FFA759",
    "--red-color": "#FF3333",
    "--green-color": "#BAE67E",
    "--yellow-color": "#FFA759",
    "--blue-color": "#73D0FF",
    "--purple-color": "#D4BFFF",
    "--cyan-color": "#95E6CB",
    "--white-color": "#CBCCC6",
    "--bright-black-color": "#707A8C",
    "--font-family": "JetBrains Mono, monospace"
  },
  dracula: {
    "--background-color": "#282a36",
    "--foreground-color": "#f8f8f2",
    "--red-color": "#ff5555",
    "--green-color": "#50fa7b",
    "--yellow-color": "#f1fa8c",
    "--blue-color": "#6272a4",
    "--purple-color": "#bd93f9",
    "--cyan-color": "#8be9fd",
    "--white-color": "#f8f8f2",
    "--bright-black-color": "#44475a",
    "--font-family": "JetBrains Mono, monospace"
  },
  ayu: {
    "--background-color": "#0f1419",
    "--foreground-color": "#e6e1cf",
    "--red-color": "#ff3333",
    "--green-color": "#b8cc52",
    "--yellow-color": "#e7c547",
    "--blue-color": "#6CA0E6",
    "--purple-color": "#C578DD",
    "--cyan-color": "#80CBC4",
    "--white-color": "#C1C2D3",
    "--bright-black-color": "#7A8298",
    "--font-family": "JetBrains Mono, monospace"
  },
  light: {
    "--background-color": "#ffffff",
    "--foreground-color": "#000000",
    "--red-color": "#ff0000",
    "--green-color": "#00ff00",
    "--yellow-color": "#ffff00",
    "--blue-color": "#0000ff",
    "--purple-color": "#ff00ff",
    "--cyan-color": "#00ffff",
    "--white-color": "#ffffff",
    "--bright-black-color": "#808080",
    "--font-family": "JetBrains Mono, monospace"
  },
  dark: {
    "--background-color": "#000000",
    "--foreground-color": "#ffffff",
    "--red-color": "#ff0000",
    "--green-color": "#00ff00",
    "--yellow-color": "#ffff00",
    "--blue-color": "#0000ff",
    "--purple-color": "#ff00ff",
    "--cyan-color": "#00ffff",
    "--white-color": "#ffffff",
    "--bright-black-color": "#808080",
    "--font-family": "JetBrains Mono, monospace"
  },
  ubuntu: {
    "--background-color": "#300A24", // Ubuntu terminal default
    "--foreground-color": "#EEEEEE", // Light text
    "--red-color": "#E95420", // Ubuntu orange
    "--green-color": "#7CBF42", // Ubuntu green
    "--yellow-color": "#F4BF75", // Ubuntu yellow
    "--blue-color": "#2C78BF", // Ubuntu blue
    "--purple-color": "#76428A", // Ubuntu purple
    "--cyan-color": "#33BAB4", // Ubuntu cyan
    "--white-color": "#D3D7CF", // Soft white
    "--bright-black-color": "#555753", // Ubuntu gray
    "--font-family": "Ubuntu Mono, monospace" // Ubuntu's default terminal font
  },
  powershell: {
    "--background-color": "#012456",
    "--foreground-color": "#ffffff",
    "--red-color": "#0ACF83", // Changed from red to green
    "--green-color": "#0ACF83",
    "--yellow-color": "#F9D448",
    "--blue-color": "#1F9CF0",
    "--purple-color": "#B381F5",
    "--cyan-color": "#00D4FF",
    "--white-color": "#FFFFFF",
    "--bright-black-color": "#5C5C5C",
    "--font-family": "Consolas, monospace" // Added font family
  }
};

window.addEventListener("load", (event) => {
  setTheme(localStorage.getItem("terminal_theme") ?? "default");
  
  // Initialize terminal body reference
  terminalBody = document.getElementById("terminal-body");

  // Tutorial Modal Logic
  const modal = document.getElementById("tutorial-modal");
  const btn = document.getElementById("tutorial-btn");
  const span = document.getElementsByClassName("close-modal")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
    // Stop video when closing
    const iframe = modal.querySelector('iframe');
    const tempSrc = iframe.src;
    iframe.src = tempSrc; 
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      const iframe = modal.querySelector('iframe');
      const tempSrc = iframe.src;
      iframe.src = tempSrc;
    }
  }
});

// Header is now displayed after loading commands.json
commandLine.focus();

// No longer forcing focus on terminal clicks to prevent scroll-to-bottom and selection hijack issues.

commandLine.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandLine.value;
    const output = processCommand(command.toLowerCase().trim());
    if (output) {
      displayCommand(command);
      displayOutput(output);
    }
    // Add command to history
    const trimmedCommand = command.trim();
    if (trimmedCommand) {
      commandHistory.push(trimmedCommand);
      currentHistoryIndex = commandHistory.length;
      currentHistoryIndex = commandHistory.length;
    }
    commandLine.value = "";
    scrollToBottom();
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (commandHistory.length === 0) return;

    if (currentHistoryIndex > 0) {
      currentHistoryIndex--;
      commandLine.value = commandHistory[currentHistoryIndex];
    }
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    if (commandHistory.length === 0) return;

    if (currentHistoryIndex < commandHistory.length) {
      currentHistoryIndex++;
    }

    commandLine.value = currentHistoryIndex < commandHistory.length 
      ? commandHistory[currentHistoryIndex] 
      : '';
  }
});

function displayCommand(command) {
  const commandElement = document.createElement("p");
  commandElement.innerHTML = `<span id="prompt">crogued@portfolio:~ $</span> <span class="command">${command}</span>`;
  terminalOutput.appendChild(commandElement);
}

function displayOutput(output) {
  if (output instanceof Promise) {
    output
      .then((data) => {
        const outputElement = document.createElement("pre");
        outputElement.classList.add("output");
        outputElement.textContent = data;
        terminalOutput.appendChild(outputElement);
        scrollToBottom();
      })
      .catch((error) => {
        console.error("Error displaying output:", error);
      });
  } else {
    const outputElement = document.createElement("p");
    outputElement.classList.add("output");
    outputElement.innerHTML = output;
    terminalOutput.appendChild(outputElement);
    scrollToBottom();
  }
}

function processCommand(commandInput) {
  if (commandInput === "") return "<hr hidden />";
  
  // Parse command and arguments
  const parts = commandInput.split(" ");
  const command = parts[0];
  const args = parts.slice(1);
  
  // Check if it's a general command
  if (generalCommands.hasOwnProperty(command)) {
    return generalCommands[command].execute(args);
  } 
  // Check if it's a special command
  else if (specialCommands.hasOwnProperty(command)) {
    const specialCmd = specialCommands[command];
    
    // Handle function-based special commands
    if (specialCmd.isFunction) {
      switch (specialCmd.output) {
        case "social":
          let output = "<table>";
          for (let social in socials) {
            output += `<tr><td class="name">${social}</td><td class="link">${socials[social]}</td></tr>`;
          }
          output += "</table>";
          return output;
        case "joke":
          return fetchJoke();
        case "fact":
          return fetchFact();
        case "quote":
          return fetchQuote();
        case "advice":
          return fetchAdvice();
        case "trivia":
          return fetchTrivia();
        case "osinfo":
          return getOSInfo();
        case "theme":
          if (args.length === 0) {
            let availableThemesMsg = "Available themes: ";
            availableThemesMsg += Object.keys(themes).join(", ");
            availableThemesMsg += '. Type "theme THEME" to change theme to THEME.';
            return availableThemesMsg;
          } else {
            return setTheme(args[0]);
          }
        case "matrix":
          if (!matrixCanvas) {
            createMatrixEffect();
            return 'Matrix effect activated. Click × or press ESC to exit. 🌐';
          }
          return 'Effect already running! Click × or press ESC to exit';
        case "rps":
          return handleRPS(args);
        default:
          return `Error: Function ${specialCmd.output} not implemented`;
      }
    } 
    // Return static output for non-function special commands
    else {
      return specialCmd.output;
    }
  } 
  // Handle unknown commands
  else {
    return `${command}: command not found`;
  }
}

function clearTerminal() {
  terminalOutput.innerHTML = "";
  displayOutput(header);
}

function scrollToBottom() {
  if (terminalBody) {
    requestAnimationFrame(() => {
        terminalBody.scrollTop = terminalBody.scrollHeight;
    });
  }
}

async function fetchJoke() {
  try {
    displayLoader(true);
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Failed to fetch joke. 😕";
  } finally {
    displayLoader(false);
  }
}

async function fetchFact() {
  try {
    displayLoader(true);
    const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error fetching fact:", error);
    return "Failed to fetch fact. 😕";
  } finally {
    displayLoader(false);
  }
}

async function fetchQuote() {
  const fallbackQuotes = [
    `"The only way to do great work is to love what you do." - Steve Jobs`,
    `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
    `"Your time is limited, so don't waste it living someone else's life." - Steve Jobs`,
    `"Do what you can, with what you have, where you are." - Theodore Roosevelt`,
    `"Don't watch the clock; do what it does. Keep going." - Sam Levenson`,
    `"Opportunities don't happen, you create them." - Chris Grosser`,
    `"Hardships often prepare ordinary people for an extraordinary destiny." - C.S. Lewis`,
    `"It does not matter how slowly you go as long as you do not stop." - Confucius`,
    `"Believe you can and you're halfway there." - Theodore Roosevelt`,
    `"Act as if what you do makes a difference. It does." - William James`,
    `"The best way to predict the future is to create it." - Peter Drucker`,
    `"Strive not to be a success, but rather to be of value." - Albert Einstein`,
    `"Courage is resistance to fear, mastery of fear—not absence of fear." - Mark Twain`,
    `"Dream big and dare to fail." - Norman Vaughan`,
    `"Your limitation—it's only your imagination." - Unknown`
  ];
  
  try {
    displayLoader(true);
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return `"${data.content}" - ${data.author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);

    // Fallback: Return a random predefined quote
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
  } finally {
    displayLoader(false);
  }
}



async function fetchAdvice() {
  try {
    displayLoader(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data.slip.advice;
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Failed to fetch advice. 😕";
  } finally {
    displayLoader(false);
  }
}

async function fetchTrivia() {
  try {
    displayLoader(true);
    const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    const data = await response.json();
    return `Trivia: ${data.results[0].question}`;
  } catch (error) {
    console.error("Error fetching trivia:", error);
    return "Failed to fetch trivia. 😕";
  } finally {
    displayLoader(false);
  }
}

//loader function
function displayLoader(show) {
  const loaderElement = document.getElementById("loader");
  if (show) {
    let dotCount = 0;
    function updateLoader() {
        loaderElement.textContent = `Loading${'.'.repeat(dotCount)}`;
        dotCount = (dotCount + 1) % 5; 
    }
  
    setInterval(updateLoader, 1500);

    loaderElement.style.display = "block";
  } else {
    loaderElement.style.display = "none";
  }
}

function getOSInfo() {
  let os = "Unknown OS";
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) os = "Windows";
  else if (userAgent.includes("mac")) os = "MacOS";
  else if (userAgent.includes("linux")) os = "Linux";
  else if (userAgent.includes("android")) os = "Android";
  else if (userAgent.includes("iphone") || userAgent.includes("ipad")) os = "iOS";

  return `Operating System: ${os}`;
}



function setTheme(theme) {
  const selectedTheme = themes[theme];
  if (selectedTheme) {
    for (const [property, value] of Object.entries(selectedTheme)) {
      document.documentElement.style.setProperty(property, value);
    }
    if (theme !== "default") localStorage.setItem("terminal_theme", theme);
    else localStorage.removeItem("terminal_theme");
    return `Theme set to ${theme}.`;
  } else {
    return `Theme ${theme} not found.`;
  }
}

function getManualDescription(command) {
  const manuals = {
    "about": "Displays the full biography, life story, and resilience of Christian Rodrigues.",
    "experience": "Shows professional work experience with highlights and details.",
    "education": "Displays academic background, grades, and coursework.",
    "projects": "Lists technical projects with descriptions and GitHub links.",
    "publications": "Shows research publications and papers.",
    "certifications": "Lists professional certifications and credentials.",
    "awards": "Displays honors, awards, and recognitions.",
    "skills": "Shows technical skills and technologies.",
    "recommendations": "Displays recommendation letters and volunteering activities.",
    "ls": "Lists all virtual files available in the current directory. Use 'cat' to read their contents.",
    "cat": "Reads a specific file's contents. Example: 'cat about.txt' will show the bio.",
    "help": "Shows the list of commands and interaction instructions.",
    "clear": "Clears all visible text in the terminal.",
    "man": "Shows the usage manual for a command. Ex: 'man ls'.",
    "history": "Shows the list of recently executed commands.",
    "social": "Displays links to social media profiles and contacts.",
    "whoami": "Shows basic user identification card.",
    "resume": "Opens the CV/Resume document in a new browser tab.",
    "games": "Shows the menu of available interactive games."
  };
  return manuals[command] || "No detailed description available.";
}

function createMatrixEffect() {
    // Create canvas
    matrixCanvas = document.createElement('canvas');
    const ctx = matrixCanvas.getContext('2d');
    const container = document.getElementById('terminal');
    
    // Create control panel
    const controls = document.createElement('div');
    // Style elements
    matrixCanvas.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 1;
        border-radius: 10px;
        border: 2px solid var(--foreground-color);
        top: 0;
        left: 0;
    `;

    controls.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
        display: flex;
        gap: 8px;
    `;

    controls.innerHTML = `
      <span style="color: var(--green-color); cursor: default; user-select: none;">MATRIX</span>
      <span style="color: var(--red-color); cursor: pointer; padding: 0 5px; user-select: none;" 
            id="matrix-close">×</span>
    `;
  
    // Set canvas size
    let fontSize = 14;
    let columns;
    
    function resizeCanvas() {
      const rect = container.getBoundingClientRect();
      matrixCanvas.width = rect.width;
      matrixCanvas.height = rect.height;
      columns = Math.floor(matrixCanvas.width / fontSize);
      matrixColumns = Array(columns).fill(0);
    }
  
    // Matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  
    // Rain effect
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--green-color');
      ctx.font = `${fontSize}px ${getComputedStyle(document.documentElement).getPropertyValue('--font-family')}`;
  
      matrixColumns.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        ctx.fillText(char, x, y);
        
        if (y > matrixCanvas.height && Math.random() > 0.975) {
          matrixColumns[i] = 0;
        }
        matrixColumns[i] += fontSize;
      });
  
      matrixAnimationFrame = requestAnimationFrame(draw);
    }
  
    // Event handlers
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') stopMatrixEffect();
    };
  
    const stopMatrixEffect = () => {
      cancelAnimationFrame(matrixAnimationFrame);
      container.removeChild(controls);
      container.removeChild(matrixCanvas);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('keydown', handleKeyPress);
      matrixCanvas = null;
      displayOutput('Matrix effect deactivated');
    };
  
    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('keydown', handleKeyPress);
    
    // Add elements to DOM first
    container.appendChild(controls);
    container.appendChild(matrixCanvas);
    
    // Then add click listener
    controls.querySelector('#matrix-close').addEventListener('click', stopMatrixEffect);
  
    // Start animation
    draw();
}

function handleRPS(args) {
  if (args.length === 0) {
    return 'Usage: rps [rock|paper|scissors]';
  }

  const userChoice = args[0].toLowerCase();
  const validChoices = ['rock', 'paper', 'scissors'];
  
  if (!validChoices.includes(userChoice)) {
    return `Invalid choice: ${userChoice}. Please choose rock, paper, or scissors.`;
  }

  const terminalChoice = validChoices[Math.floor(Math.random() * 3)];
  const result = determineWinner(userChoice, terminalChoice);

  const emojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
  };

  return `You chose ${emojis[userChoice]} ${userChoice}\nTerminal chose ${emojis[terminalChoice]} ${terminalChoice}\nResult: ${result}`;
}

function determineWinner(user, terminal) {
  if (user === terminal) return 'It\'s a tie! 🤝';
  if ((user === 'rock' && terminal === 'scissors') ||
      (user === 'paper' && terminal === 'rock') ||
      (user === 'scissors' && terminal === 'paper')) {
    return 'You win! 🎉';
  }
  return 'Terminal wins! 💻';
}

/* --- GAMES LOGIC --- */

// RPS
function startRPS() {
    setTimeout(() => {
        const id = "rps-" + Date.now();
        const container = document.createElement("div");
        container.className = "rps-container";
        container.id = id;
        container.innerHTML = `
            <button class="rps-btn" onclick="playRPS('${id}', 'rock')">Rock</button>
            <button class="rps-btn" onclick="playRPS('${id}', 'paper')">Paper</button>
            <button class="rps-btn" onclick="playRPS('${id}', 'scissors')">Scissors</button>
            <span class="rps-result" style="margin-left: 10px; align-self: center;"></span>
        `;
        terminalOutput.appendChild(container);
        scrollToBottom();
    }, 100);
    return "Choose your move:";
}

window.playRPS = function(id, playerMove) {
    const container = document.getElementById(id);
    if(!container) return;
    const resultSpan = container.querySelector(".rps-result");
    const moves = ['rock', 'paper', 'scissors'];
    const aiMove = moves[Math.floor(Math.random() * 3)];
    
    // Disable buttons
    const btns = container.querySelectorAll(".rps-btn");
    btns.forEach(b => b.disabled = true);

    const translations = {
        'rock': 'Rock',
        'paper': 'Paper',
        'scissors': 'Scissors'
    };

    let result = "";
    if (playerMove === aiMove) result = "It's a tie!";
    else if (
        (playerMove === 'rock' && aiMove === 'scissors') ||
        (playerMove === 'paper' && aiMove === 'rock') ||
        (playerMove === 'scissors' && aiMove === 'paper')
    ) result = "You win!";
    else result = "You lose! AI chose " + translations[aiMove];

    resultSpan.innerHTML = `You: ${translations[playerMove]} | AI: ${translations[aiMove]} -> <strong>${result}</strong>`;
}

// Tic Tac Toe
window.startTTT = function() {
     setTimeout(() => {
        const id = "ttt-" + Date.now();
        const container = document.createElement("div");
        container.className = "ttt-board";
        container.id = id;
        for(let i=0; i<9; i++) {
            const cell = document.createElement("div");
            cell.className = "ttt-cell";
            cell.dataset.index = i;
            cell.onclick = () => playTTT(id, i);
            container.appendChild(cell);
        }
        terminalOutput.appendChild(container);
        scrollToBottom();
        
        // Init state
        container.dataset.board = JSON.stringify(Array(9).fill(null));
        container.dataset.turn = 'X';
        container.dataset.active = 'true';
    }, 100);
    return "Tic Tac Toe started! You are X.";
}

window.playTTT = function(id, index) {
    const container = document.getElementById(id);
    if(container.dataset.active === 'false') return;
    
    let board = JSON.parse(container.dataset.board);
    if(board[index]) return; // Occupied

    // Player Move
    board[index] = 'X';
    updateTTTBoard(container, board);
    
    if(checkTTTWin(board, 'X')) { endGameTTT(container, "You win!"); return; }
    if(!board.includes(null)) { endGameTTT(container, "It's a tie!"); return; }

    // AI Move (Minimax)
    setTimeout(() => {
        if(container.dataset.active === 'false') return;
        
        let bestScore = -Infinity;
        let move;
        
        
        // Difficulty: 30% chance to error (Random move), 70% Perfect (Minimax)
        if (Math.random() < 0.3) {
             let emptyIndices = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
             move = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        } else {
             // Find best move
            for(let i=0; i<9; i++) {
                if(board[i] === null) {
                    board[i] = 'O';
                    let score = minimax(board, 0, false);
                    board[i] = null;
                    if(score > bestScore) {
                        bestScore = score;
                        move = i;
                    }
                }
            }
        }
        
        board[move] = 'O';
        updateTTTBoard(container, board);
        container.dataset.board = JSON.stringify(board);

        if(checkTTTWin(board, 'O')) { endGameTTT(container, "You lose!"); return; }
        if(!board.includes(null)) { endGameTTT(container, "It's a tie!"); return; }
    }, 500);
    
    container.dataset.board = JSON.stringify(board);
}

function minimax(board, depth, isMaximizing) {
    if (checkTTTWin(board, 'O')) return 10 - depth;
    if (checkTTTWin(board, 'X')) return depth - 10;
    if (!board.includes(null)) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function updateTTTBoard(container, board) {
    const cells = container.querySelectorAll(".ttt-cell");
    board.forEach((val, i) => {
        cells[i].innerText = val || "";
        cells[i].style.color = val === 'X' ? 'var(--cyan-color)' : 'var(--red-color)';
    });
}

function checkTTTWin(board, player) {
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return wins.some(combo => combo.every(i => board[i] === player));
}

function endGameTTT(container, msg) {
    container.dataset.active = 'false';
    const msgDiv = document.createElement("div");
    msgDiv.innerHTML = `<strong>${msg}</strong>`;
    msgDiv.style.marginTop = "10px";
    msgDiv.style.paddingLeft = "1rem";
    container.parentNode.insertBefore(msgDiv, container.nextSibling);
    scrollToBottom();
}

// Simon Says
let simonSequence = [];
let playerSequence = [];
let simonLevel = 0;
let isSimonPlaying = false;

window.startSimon = function() {
    simonLevel = 0;
    simonSequence = [];
    isSimonPlaying = true;
    
    setTimeout(() => {
        const id = "simon-" + Date.now();
        const container = document.createElement("div");
        container.className = "simon-board";
        container.id = id;
        
        ['green', 'red', 'yellow', 'blue'].forEach(color => {
            const btn = document.createElement("div");
            btn.className = `simon-btn simon-${color}`;
            btn.dataset.color = color;
            btn.onclick = () => handleSimonInput(id, color);
            container.appendChild(btn);
        });
        
        terminalOutput.appendChild(container);
        scrollToBottom();
        
        nextSimonRound(id);
    }, 100);
    return "Simon Says started! Pay attention to the sequence.";
}

function nextSimonRound(id) {
    simonLevel++;
    playerSequence = [];
    const colors = ['green', 'red', 'yellow', 'blue'];
    simonSequence.push(colors[Math.floor(Math.random() * 4)]);
    
    const container = document.getElementById(id);
    if(!container) return;

    // Show sequence
    let i = 0;
    const interval = setInterval(() => {
        flashSimonBtn(container, simonSequence[i]);
        i++;
        if(i >= simonSequence.length) {
            clearInterval(interval);
        }
    }, 800);
}

function flashSimonBtn(container, color) {
    const btn = container.querySelector(`.simon-${color}`);
    btn.classList.add("active");
    setTimeout(() => btn.classList.remove("active"), 400);
}

window.handleSimonInput = function(id, color) {
    const container = document.getElementById(id);
    // Visual feedback
    flashSimonBtn(container, color);
    
    playerSequence.push(color);
    
    // Check input
    const idx = playerSequence.length - 1;
    if(playerSequence[idx] !== simonSequence[idx]) {
        endSimonGame(container, `Game Over! You reached level ${simonLevel}.`);
        return;
    }
    
    if(playerSequence.length === simonSequence.length) {
        setTimeout(() => nextSimonRound(id), 1000);
    }
}

function endSimonGame(container, msg) {
    const msgDiv = document.createElement("div");
    msgDiv.innerHTML = `<strong>${msg}</strong>`;
    msgDiv.style.marginTop = "10px";
    msgDiv.style.paddingLeft = "1rem";
    container.parentNode.insertBefore(msgDiv, container.nextSibling);
    container.style.pointerEvents = 'none'; // Disable input
    scrollToBottom();
}

/* --- WATER DROPLET MOUSE INTERACTION PHYSICS --- */
(function() {
    const wrappers = document.querySelectorAll('.bubble-wrapper');
    if (!wrappers.length) return;

    let mouseX = -9999;
    let mouseY = -9999;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    document.addEventListener('mouseleave', function() {
        mouseX = -9999;
        mouseY = -9999;
    });

    // Physics helper
    function lerp(a, b, t) { return a + (b - a) * t; }

    // Per-bubble state
    var drops = [];
    wrappers.forEach(function(wrapper) {
        drops.push({
            wrapper: wrapper,
            bubble: wrapper.querySelector('.glass-bubble'),
            icon: wrapper.querySelector('.bubble-icon'),
            // smoothed values
            pushX: 0, pushY: 0,
            iconOffX: 0, iconOffY: 0,
            // 8 border-radius values: [TL-h, TL-v, TR-h, TR-v, BR-h, BR-v, BL-h, BL-v]
            br: [50,50,50,50,50,50,50,50],
            // track if CSS animation is currently paused
            animPaused: false
        });
    });

    // Corner angles (direction from center toward each corner)
    var CORNER_ANGLES = [
        Math.atan2(-1, -1),  // TL: -135°
        Math.atan2(-1,  1),  // TR:  -45°
        Math.atan2( 1,  1),  // BR:   45°
        Math.atan2( 1, -1)   // BL:  135°
    ];

    function angleDist(a, b) {
        var d = a - b;
        while (d > Math.PI)  d -= 2 * Math.PI;
        while (d < -Math.PI) d += 2 * Math.PI;
        return Math.abs(d);
    }

    function tick() {
        for (var d = 0; d < drops.length; d++) {
            var drop = drops[d];
            var rect = drop.wrapper.getBoundingClientRect();
            var cx = rect.left + rect.width * 0.5;
            var cy = rect.top  + rect.height * 0.5;
            var r  = Math.max(rect.width, rect.height) * 0.5;

            // Dynamically scale parameters based on bubble radius
            var influenceRadius = r * 1.4; // px beyond edge, proportional to size
            var indentMax = 45;            // max % indent on border-radius (concave dent)
            var bulgeMax = 20;             // max % bulge on opposite corners
            var pushMax = r * 0.22;        // max px the bubble pushes away (proportional to size)
            var iconDodgeMax = r * 0.15;   // max px the icon dodges inside

            var dx = mouseX - cx;
            var dy = mouseY - cy;
            var dist = Math.sqrt(dx * dx + dy * dy);

            // Normalized direction from center to mouse
            var ndx = dist > 0.01 ? dx / dist : 0;
            var ndy = dist > 0.01 ? dy / dist : 0;

            // Influence falls off from bubble edge to influenceRadius beyond
            var influence = Math.max(0, 1 - Math.max(0, dist - r * 0.3) / (r * 0.7 + influenceRadius));
            // Extra factor when cursor is inside the bubble
            var inside = Math.max(0, 1 - dist / r);

            var smoothIn  = 0.12;  // how fast deformation ramps up
            var smoothOut = 0.04;  // how slow it recovers (elastic/jiggly)

            if (influence > 0.01) {
                // Remove CSS morph animation name so our inline style wins with absolute priority
                if (!drop.animPaused) {
                    drop.bubble.style.animationName = 'none';
                    drop.animPaused = true;
                }

                // --- Push away ---
                var tPushX = -ndx * pushMax * influence;
                var tPushY = -ndy * pushMax * influence;
                drop.pushX = lerp(drop.pushX, tPushX, smoothIn);
                drop.pushY = lerp(drop.pushY, tPushY, smoothIn);

                // --- Icon dodge ---
                var tIconX = -ndx * iconDodgeMax * influence;
                var tIconY = -ndy * iconDodgeMax * influence;
                drop.iconOffX = lerp(drop.iconOffX, tIconX, smoothIn);
                drop.iconOffY = lerp(drop.iconOffY, tIconY, smoothIn);

                // --- Border-radius splitting ---
                var mouseAngle = Math.atan2(dy, dx);
                // Combined deformation intensity: stronger when inside
                var intensity = influence * (0.4 + inside * 0.6);

                for (var c = 0; c < 4; c++) {
                    var aDist = angleDist(CORNER_ANGLES[c], mouseAngle);
                    // closeness: 1.0 when corner faces the mouse, 0 when opposite
                    var closeness = Math.max(0, 1 - aDist / (Math.PI * 0.6));
                    // opposite-ness: corners far from mouse bulge out
                    var farness = Math.max(0, aDist / Math.PI - 0.3) / 0.7;

                    var indent = indentMax * closeness * intensity;
                    var bulge  = bulgeMax  * farness   * intensity;

                    var targetH = 50 - indent + bulge;
                    var targetV = 50 - indent * 0.8 + bulge * 0.6;

                    // Clamp to sane range
                    targetH = Math.max(10, Math.min(90, targetH));
                    targetV = Math.max(10, Math.min(90, targetV));

                    drop.br[c * 2]     = lerp(drop.br[c * 2],     targetH, smoothIn);
                    drop.br[c * 2 + 1] = lerp(drop.br[c * 2 + 1], targetV, smoothIn);
                }
            } else {
                // Return to neutral with slow elastic recovery
                drop.pushX   = lerp(drop.pushX,   0, smoothOut);
                drop.pushY   = lerp(drop.pushY,   0, smoothOut);
                drop.iconOffX = lerp(drop.iconOffX, 0, smoothOut);
                drop.iconOffY = lerp(drop.iconOffY, 0, smoothOut);

                for (var c = 0; c < 8; c++) {
                    drop.br[c] = lerp(drop.br[c], 50, smoothOut);
                }

                // Resume CSS animation once values are near neutral
                var totalDrift = Math.abs(drop.pushX) + Math.abs(drop.pushY);
                for (var c = 0; c < 8; c++) totalDrift += Math.abs(drop.br[c] - 50);
                if (drop.animPaused && totalDrift < 1) {
                    drop.bubble.style.animationName = '';
                    drop.bubble.style.borderRadius = '';
                    drop.animPaused = false;
                }
            }

            // --- Apply push ---
            drop.wrapper.style.setProperty('--mouse-tx', drop.pushX + 'px');
            drop.wrapper.style.setProperty('--mouse-ty', drop.pushY + 'px');

            // --- Apply border-radius deformation ---
            if (drop.animPaused) {
                var b = drop.br;
                drop.bubble.style.borderRadius =
                    b[0]+'% '+b[2]+'% '+b[4]+'% '+b[6]+'% / '+
                    b[1]+'% '+b[3]+'% '+b[5]+'% '+b[7]+'%';
            }

            // --- Apply icon dodge ---
            if (drop.icon) {
                var iTotal = Math.abs(drop.iconOffX) + Math.abs(drop.iconOffY);
                if (iTotal > 0.3) {
                    drop.icon.style.transform = 'translate('+drop.iconOffX+'px,'+drop.iconOffY+'px)';
                } else {
                    drop.icon.style.transform = '';
                }
            }
        }

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
})();