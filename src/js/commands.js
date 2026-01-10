export const generalCommands = {
  clear: {
    execute: () => {
      clearTerminal();
      return null;
    },
    description: "Limpar o terminal. 🧹 Mantenha-o arrumado! 😊"
  },
  echo: {
    execute: (args) => {
      return args.join(" ");
    },
    description: "Ecoar o seu texto. 🔊 Como gritar num desfiladeiro! 🏔️"
  },
  date: {
    execute: () => {
      return new Date().toString();
    },
    description: "Mostrar data e hora. ⏰ O tempo voa! ⏱️"
  },
  ls: {
    execute: () => {
      return "bio.txt\nhistoria.txt\nresiliencia.txt\nmerito.txt\nmetas.txt\nprojetos.txt\ncommands.json\nindex.html\nREADME.md\nscript.js\nstyles.css\n";
    },
    description: "Listar ficheiros. 📁 O que há aqui? 🔍"
  },
  pwd: {
    execute: () => {
      return "/home/visitor/oeiras_valley";
    },
    description: "Mostrar diretório atual. 📍 Onde estou? 🗺️"
  },
  cat: {
    execute: (args) => {
      if (args.length === 0) {
        return "Uso: cat [nome_do_ficheiro]";
      }
      
      const filename = args[0].toLowerCase();
      // Access userData globally assuming it's available
      const files = {
        "readme.md": "# Portfólio Terminal\n\nUma página de portfólio estilo terminal para Christian Rodrigues.",
        "bio.txt": userData.bio,
        "historia.txt": userData.details?.history || "História não disponível.",
        "resiliencia.txt": userData.details?.resilience || "Info de resiliência não disponível.",
        "merito.txt": userData.details?.merit || "Info de mérito não disponível.",
        "metas.txt": userData.details?.goals || "Metas não disponíveis.",
        "projetos.txt": "Use o comando 'projetos' para uma melhor visualização.",
        "commands.json": "Este ficheiro contém os comandos especiais para este terminal."
      };
      
      if (files[filename]) {
        return files[filename];
      } else {
        return `cat: ${filename}: Ficheiro ou diretório inexistente`;
      }
    },
    description: "Mostrar conteúdo de ficheiros. 📄 O que está dentro? 👀"
  },
  man: {
    execute: (args) => {
      if (args.length === 0) {
        return "Que manual quer ver? Tente 'man [comando]'";
      }
      
      const command = args[0];
      
      if (generalCommands[command]) {
        return `NOME\n    ${command} - ${generalCommands[command].description}\n\nDESCRIÇÃO\n    ${getManualDescription(command)}`;
      } else if (specialCommands[command]) {
        return `NOME\n    ${command} - ${specialCommands[command].description}\n\nDESCRIÇÃO\n    Comando especial do portfólio.`;
      } else {
        return `Sem entrada manual para ${command}`;
      }
    },
    description: "Manual do comando. 📚 Precisa de ajuda? 🆘"
  },
  uname: {
    execute: () => {
      return "Linux (Oeiras Valley Edition)";
    },
    description: "Informação do sistema. 💻 Onde estou a correr? 🖥️"
  },
  history: {
    execute: () => {
      return commandHistory.join("\n") || "Ainda sem histórico";
    },
    description: "Histórico de comandos. 📜 O que escrevi antes? 🔍"
  },
  help: {
    execute: () => {
      let output = "<div><strong>Comandos Sugeridos:</strong></div>";
      output += "<table>";
      output += `<tr><td class="available-command">sobre</td><td class="command-description">Quem sou, a minha história e resiliência.</td></tr>`;
      output += `<tr><td class="available-command">projetos</td><td class="command-description">Os meus projetos técnicos e competições.</td></tr>`;
      output += `<tr><td class="available-command">metas</td><td class="command-description">Objetivos para a Bolsa de Mérito e futuro.</td></tr>`;
      output += `<tr><td class="available-command">merito</td><td class="command-description">Envolvimento comunitário e voluntariado.</td></tr>`;
      output += "</table><br>";
      
      output += "<div><strong>Todos os Comandos:</strong></div><table>";
      // Add general commands
      for (let cmd in generalCommands) {
        output += `<tr><td class="available-command">${cmd}</td><td class="command-description">${generalCommands[cmd].description}</td></tr>`;
      }
      // Add special commands
      for (let cmd in specialCommands) {
        output += `<tr><td class="available-command">${cmd}</td><td class="command-description">${specialCommands[cmd].description}</td></tr>`;
      }
      output += "</table>";
      return output;
    },
    description: "Lista de comandos. ❓ Pistas e ajuda! 😏"
  },
  ajuda: {
    execute: () => {
      return generalCommands.help.execute();
    },
    description: "O mesmo que 'help'. 🇵🇹"
  },
  banner: {
    execute: () => {
      return header;
    },
    description: "Mostrar o banner de boas-vindas. 👋 Olá de novo! 🎉"
  },
  sobre: {
    execute: () => {
       if (!isUserDataAvailable()) return "Dados não disponíveis.";
       return `
<strong>QUEM SOU:</strong>
${userData.bio}

<strong>A MINHA HISTÓRIA:</strong>
${userData.details?.history}

<strong>SACRIFÍCIO E RESILIÊNCIA:</strong>
${userData.details?.resilience}
       `.trim();
    },
    description: "A minha história completa. 📖 Ler tudo sobre mim."
  },
  merito: {
    execute: () => {
       if (!isUserDataAvailable("details")) return "Dados não disponíveis.";
       return `<strong>MÉRITO SOCIAL:</strong>\n${userData.details.merit}`;
    },
    description: "Atividades de mérito social. 🤝"
  },
  metas: {
    execute: () => {
       if (!isUserDataAvailable("details")) return "Dados não disponíveis.";
       return `<strong>AS MINHAS METAS:</strong>\n${userData.details.goals}`;
    },
    description: "Objetivos e metas futuras. 🎯"
  },
  whois : {
    execute: () => {
      if (!isUserDataAvailable()) {
        return "🚨 ALERTA! 🚨\nDados do utilizador não encontrados! 🌌👀";
      }
      return `    Nome: ${userData.name}\n    Email: ${userData.email}\n    Bio: ${userData.bio}`;
    },
    description: "Info do utilizador. 🙋 Quem sou eu? 🤔"
  },
  social : {
    execute: () => {
      if (!isUserDataAvailable("socials")) {
        return "😱 OH NÃO! \nLinks sociais perdidos! 🌀🔮";
      }
      let output = "<table>";
      let socials = userData.socials;
      for (let social in socials) {
        output += `<tr><td class="name">${social}</td><td class="link"><a href="${socials[social]}" target="_blank">${socials[social]}</a></td></tr>`;
      }  
      output += "</table>";
      return output;
    },
    "description": "Redes sociais. 🌐 Vamos conectar-nos! 🤝",
  },
  projects : {
    execute: () => {
       if (!isUserDataAvailable("projects")) {
        return "🛠️ Em Construção! 🏗️\nProjetos não encontrados! 🚶💨";
      }
      let output = "Aqui estão alguns dos meus projetos:\n<table>";
      userData.projects.forEach(project => {
        output += `<tr><td class="name">${project.name}</td><td class="description">${project.description}</td><td class="link"><a href="${project.link}" target="_blank">Ver</a></td></tr>`;
      });
      output += "</table>";
      return output;
    },
    "description": "Ver projetos. 💻 Prepare-se para se surpreender! ✨"
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
    cat: "Concatenate and display file contents. Usage: cat [filename]",
    man: "Display manual page for a command. Usage: man [command]",
    uname: "Print system information.",
    history: "Display the command history list.",
    help: "Display help information about available commands.",
    banner: "Display the welcome banner."
  };
  
  return manuals[command] || "No detailed description available.";
}
