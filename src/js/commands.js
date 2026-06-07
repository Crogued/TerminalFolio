export const generalCommands = {
  clear: {
    execute: () => {
      clearTerminal();
      return null;
    },
    description: "Clear the terminal screen."
  },
  echo: {
    execute: (args) => {
      return args.join(" ");
    },
    description: "Echo your text."
  },
  date: {
    execute: () => {
      return new Date().toString();
    },
    description: "Show date and time."
  },
  ls: {
    execute: () => {
      return "about.txt\nexperience.txt\neducation.txt\nprojects.txt\npublications.txt\ncertifications.txt\nawards.txt\nskills.txt\nREADME.md\ncommands.json\nindex.html\nscript.js\nstyles.css";
    },
    description: "List files in the current directory."
  },
  pwd: {
    execute: () => {
      return "/home/crogued/portfolio";
    },
    description: "Show current directory."
  },
  cat: {
    execute: (args) => {
      if (args.length === 0) {
        return "Usage: cat [filename]";
      }
      
      const filename = args[0].toLowerCase();
      const files = {
        "readme.md": "# Portfolio Terminal\n\nA terminal-style portfolio page for Christian Rodrigues.",
        "about.txt": userData.bio,
        "experience.txt": "Use the 'experience' command for a better view.",
        "education.txt": "Use the 'education' command for a better view.",
        "projects.txt": "Use the 'projects' command for a better view.",
        "publications.txt": "Use the 'publications' command for a better view.",
        "certifications.txt": "Use the 'certifications' command for a better view.",
        "awards.txt": "Use the 'awards' command for a better view.",
        "skills.txt": userData.skills ? userData.skills.join(" | ") : "Data not available.",
        "commands.json": "This file contains the special commands for this terminal."
      };
      
      if (files[filename]) {
        return files[filename];
      } else {
        return `cat: ${filename}: No such file or directory`;
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
  uname: {
    execute: () => {
      return "Linux (Portfolio Edition)";
    },
    description: "System information."
  },
  history: {
    execute: () => {
      return commandHistory.join("\n") || "No history yet";
    },
    description: "Recent command history."
  },
  help: {
    execute: () => {
      let output = "<div><strong>Suggested Commands:</strong></div>";
      output += "<table>";
      output += `<tr><td class="available-command">about</td><td class="command-description">Who I am, my story and resilience.</td></tr>`;
      output += `<tr><td class="available-command">experience</td><td class="command-description">My professional work experience.</td></tr>`;
      output += `<tr><td class="available-command">projects</td><td class="command-description">Technical projects and competitions.</td></tr>`;
      output += `<tr><td class="available-command">education</td><td class="command-description">Academic background and coursework.</td></tr>`;
      output += `<tr><td class="available-command">skills</td><td class="command-description">Technical skills and technologies.</td></tr>`;
      output += "</table><br>";
      
      output += "<div><strong>All Commands:</strong></div><table>";
      for (let cmd in generalCommands) {
        output += `<tr><td class="available-command">${cmd}</td><td class="command-description">${generalCommands[cmd].description}</td></tr>`;
      }
      for (let cmd in specialCommands) {
        output += `<tr><td class="available-command">${cmd}</td><td class="command-description">${specialCommands[cmd].description}</td></tr>`;
      }
      output += "</table>";
      return output;
    },
    description: "List all available commands."
  },
  banner: {
    execute: () => {
      return header;
    },
    description: "Show the welcome banner."
  },
  about: {
    execute: () => {
       if (!isUserDataAvailable()) return "Data not available.";
       return `
<strong>WHO I AM:</strong>
${userData.bio}

<strong>MY STORY:</strong>
${userData.details?.history}

<strong>RESILIENCE:</strong>
${userData.details?.resilience}
       `.trim();
    },
    description: "My full story – bio, journey, and resilience."
  },
  whoami: {
    execute: () => {
      if (!isUserDataAvailable()) {
        return "Error: User data not found.";
      }
      return `    Name: ${userData.name}\n    Email: ${userData.email}\n    Bio: ${userData.bio}`;
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
      for (let social in socials) {
        output += `<tr><td class="name">${social}</td><td class="link"><a href="${socials[social]}" target="_blank">${socials[social]}</a></td></tr>`;
      }  
      output += "</table>";
      return output;
    },
    "description": "Social media links and contacts.",
  },
  projects: {
    execute: () => {
       if (!isUserDataAvailable("projects")) {
        return "Error: Project data not found.";
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

// Helper function for man command
export function getManualDescription(command) {
  const manuals = {
    clear: "Clear the terminal screen.",
    echo: "Display a line of text. Usage: echo [text]",
    date: "Display the current date and time.",
    ls: "List directory contents.",
    pwd: "Print the name of the current working directory.",
    cat: "Read and display file contents. Usage: cat [filename]",
    man: "Display manual page for a command. Usage: man [command]",
    uname: "Print system information.",
    history: "Display the command history list.",
    help: "Display help information about available commands.",
    banner: "Display the welcome banner."
  };
  
  return manuals[command] || "No detailed description available.";
}
