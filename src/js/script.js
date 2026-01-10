const terminalOutput = document.getElementById("terminal-output");
const commandLine = document.getElementById("command-line");
const terminal = document.getElementById("terminal");

// Configuration variables
let specialCommands = {};
let aboutCommands = {};
let socials = {};
let header = "Bem-vindo ao terminal de Christian Rodrigues,\nDigite 'help' para ver os comandos disponíveis.";
let title = "Christian Rodrigues | PorfolioShell";

// Embed user data directly to avoid CORS issues with local file fetch
const userData = {
    "name": "Christian Rodrigues",
    "email": "christian.rodrigues0211@gmail.com",
    "bio": "Sou o Christian Rodrigues, um estudante de Robótica e IA com média de 17 valores na ENIDH. O meu perfil combina engenharia pura (C++, Linux, Python) com uma forte resiliência pessoal. Defino-me como um solucionador de problemas que procura especializar-se em Biomedicina Computacional para unir tecnologia e saúde.",
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
        "url": "https://drive.google.com/file/d/1DW-puFjLr49Y0WNBVvx0s56sXMV2tTZt/view?usp=drive_link",
        "text": "Christian Rodrigues"
      }
    },
    "projects": [
      {
        "name": "Naval-Rex 2025",
        "description": "1.º Lugar no desafio da Escola Naval. Construção de barco com materiais recicláveis, focado em Team Building e resolução de problemas. <br><a href='https://sapo.pt/artigo/escola-nautica-reforca-presenca-portuguesa-no-maior-exercicio-mundial-de-robotica-maritima-68c435dc0e9d7127e2de960f' target='_blank'>Ler Artigo no SAPO</a>",
        "link": "https://drive.google.com/file/d/1i5SGNqI2sLuKa1E5feS8c1766l_jvPBO/view?usp=drive_link"
      },
      {
        "name": "VisionNavigation",
        "description": "Sistema autónomo de USV para navegação por bóias usando Visão por Computador (Raspberry Pi + Arduino).",
        "link": "https://github.com/Crogued/BuoyVisionNavigation"
      },
      {
        "name": "ProjetUSVautodrone",
        "description": "Participação na competição Autodrone 2026. Veículo de superfície não tripulado.",
        "link": "https://github.com/Bolofofopt/ProjetUSVautodrone"
      },
      {
        "name": "VectorNavigation",
        "description": "Sistema de controlo autónomo de USV usando Navegação Vetorial e coordenadas GPS. Powered by Arduino Mega.",
        "link": "https://github.com/Crogued/VectorNavigation"
      },
      {
        "name": "HumanoidRoboticArm",
        "description": "Braço robótico de 2DoF com mão humanóide de 5 DoF que imita comportamento humano por visão.",
        "link": "https://github.com/Bolofofopt/HumanoidRoboticArmVision"
      },
      {
        "name": "Bluetooth-RC-Car",
        "description": "Carro RC controlado por Bluetooth com stream de vídeo ESP32-CAM, desvio de obstáculos e movimento omnidirecional.",
        "link": "https://github.com/Crogued/Bluetooth-RC-Car"
      }
    ],
    "details": {
      "history": "Nasci na Venezuela, onde vivi até aos 13 anos. Depois emigrei com a minha família para o Chile, adaptando-me a uma nova cultura durante a adolescência. A maior prova chegou aos meus 17 anos: emigrámos para Portugal e aterrei em Lisboa em março de 2020, apenas uns dias antes de o aeroporto fechar e começar o confinamento mundial. Longe de me isolar, aproveitei esse tempo para mergulhar no código e aprender a língua, conseguindo uma adaptação total. Hoje sou trilingue (Espanhol, Português, Inglês) e considero Oeiras a minha casa.",
      "resilience": "Sempre fui desportista. Comecei no Karaté aos 6 anos e futebol federado dos 9 aos 17. Ao chegar a Portugal, o meu talento abriu portas: fui selecionado para provas nos clubes CRC Carcavelos e Porto Salvo. No entanto, enfrentei um desafio de independência financeira. Os meus pais decidiram que eu deveria custear os meus próprios estudos universitários, por isso tive de tomar uma decisão difícil: renunciar ao futebol de competição para trabalhar e pagar as propinas. Trabalhei na Caseking Iberia (montagem de PCs) e na restauração (Hamburgueria do Bairro) enquanto estudava. Essa disciplina desportiva aplico-a agora na minha engenharia.",
      "merit": "",
      "goals": "O FUNDAMENTAL: A Bolsa de Mérito servirá para pagar as propinas da minha Licenciatura em Biomedicina Computacional e Inteligência Artificial na Universidade Lusófona. Este é o meu grande objetivo.\n\nInvestimentos Secundários (com o remanescente):\n1. Hardware: GPUs e sensores para os meus projetos de robótica em casa.\n2. Certificações: Formação extra em Data Science."
    },
    "volunteering": [
      {
        "role": "Monitor",
        "program": "Jovens em Movimento 2025",
        "organization": "Câmara Municipal de Oeiras",
        "text": "Acredito em devolver valor à comunidade. Supervisionei grupos de jovens e geri dinâmicas de grupo, o que me ajudou a desenvolver inteligência emocional e liderança. Sou considerado um membro ativo e relevante na minha comunidade académica.",
        "link": "https://drive.google.com/file/d/1hjWy75A1Qptb1Z6U-g5BHEc2a6YzgN-E/view?usp=drive_link"
      }
    ],
    "recommendations": [
      {
        "name": "Pedro Teodoro",
        "role": "Presidente do Departamento de Engenharia Marítima da ENIDH",
        "text": "O Christian distingue-se pela sua proatividade, tendo desenvolvido, com elevado grau de autonomia, projetos de relevo em sistemas embebidos, robótica e visão artificial. [...] Trata-se de um aluno responsável e colaborativo.",
        "email": "pedroteodoro@enautica.pt",
        "link": "https://drive.google.com/file/d/1TTfw5ujc2-LVvufirLCBgYL_PIMMmrfS/view?usp=drive_link"
      },
      {
        "name": "Nome do Professor 2",
        "role": "Cargo",
        "text": "Texto da recomendação...",
        "email": "email@exemplo.com",
        "link": "#"
      }
    ]
};

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
    description: "Limpar o terminal. Manter a organizacao."
  },
  echo: {
    execute: (args) => {
      return args.join(" ");
    },
    description: "Ecoar o seu texto."
  },
  date: {
    execute: () => {
      return new Date().toString();
    },
    description: "Mostrar data e hora atual."
  },
  ls: {
    execute: () => {
      return "bio.txt\nhistoria.txt\nresiliencia.txt\nmerito.txt\nmetas.txt\nprojetos.txt\ncommands.json\nindex.html\nREADME.md\nscript.js\nstyles.css";
    },
    description: "Listar ficheiros no diretorio atual."
  },
  pwd: {
    execute: () => {
      return "/home/oeiras-valley/bolsa-merito";
    },
    description: "Mostrar diretorio de trabalho atual."
  },
  cat: {
    execute: (args) => {
      if (args.length === 0) {
        return "Uso: cat [nome_do_ficheiro].\nDigite 'ls' para ver os ficheiros disponíveis.";
      }
      
      const filename = args[0].toLowerCase();
      // Ensure userData is loaded
      const files = {
        "readme.md": "# Portfolio Terminal\n\nUma pagina de portfolio estilo terminal para Christian Rodrigues.",
        "bio.txt": userData?.bio || "Dados nao disponiveis.",
        "historia.txt": userData?.details?.history || "Historia nao disponivel.",
        "resiliencia.txt": userData?.details?.resilience || "Info de resiliencia nao disponivel.",
        "merito.txt": userData?.details?.merit || "Info de merito nao disponivel.",
        "metas.txt": userData?.details?.goals || "Metas nao disponiveis.",
        "projetos.txt": "Use o comando 'projetos' para uma melhor visualizacao.",
        "commands.json": "Este ficheiro contem os comandos especiais para este terminal.",
        "certificacoes.txt": "Cisco Python Essentials, Google Generative AI."
      };
      
      if (files[filename]) {
        return files[filename];
      } else {
        return `cat: ${filename}: Ficheiro ou diretorio inexistente.\nDigite 'ls' para ver os ficheiros disponíveis.`;
      }
    },
    description: "Ler ficheiros (Ex: 'cat bio.txt')."
  },
  man: {
    execute: (args) => {
      if (args.length === 0) {
        return "Que manual quer ver? Tente 'man [comando]'";
      }
      
      const command = args[0];
      
      if (generalCommands[command]) {
        return `NOME\n    ${command} - ${generalCommands[command].description}\n\nDESCRICAO\n    ${getManualDescription(command)}`;
      } else if (specialCommands[command]) {
        return `NOME\n    ${command} - ${specialCommands[command].description}\n\nDESCRICAO\n    Comando especial do portfolio.`;
      } else {
        return `Sem entrada manual para ${command}`;
      }
    },
    description: "Manual do comando."
  },
  uname: {
    execute: () => {
      return "Linux (Oeiras Valley Edition)";
    },
    description: "Informacao do sistema."
  },
  history: {
    execute: () => {
      return commandHistory.join("\n") || "Ainda sem historico";
    },
    description: "Historico de comandos recentes."
  },
  help: {
    execute: () => {
      // 0. Como Interagir (New)
      let output = "<div><strong>COMO INTERAGIR:</strong></div>";
      output += "<div>1. Escolha um comando da lista abaixo.</div>";
      output += "<div>2. Escreva-o e pressione <span class='command'>ENTER</span>.</div><br>";

      // 1. Dica Pro
      output += "<div><strong>💡 Dica Pro:</strong></div>";
      output += "<div>Para ler ficheiros individuais, use o comando <code>cat</code>.</div>";
      output += "<div>Exemplo: <span class='command'>cat bio.txt</span> ou <span class='command'>cat metas.txt</span></div><br>";
      
      // 2. Todos os Comandos
      output += "<div><strong>Todos os Comandos:</strong></div><table>";
      // Add general commands
      for (let cmd in generalCommands) {
        output += `<tr><td class="available-command">${cmd}</td><td class="command-description">${generalCommands[cmd].description}</td></tr>`;
      }
      // Add special commands
      for (let cmd in specialCommands) {
        output += `<tr><td class="available-command">${cmd}</td><td class="command-description">${specialCommands[cmd].description}</td></tr>`;
      }
      output += "</table><br>";

      // 3. Comandos Sugeridos
      output += "<div><strong>Comandos Sugeridos:</strong></div>";
      output += "<table>";
      output += `<tr><td class="available-command">sobre</td><td class="command-description">Quem sou, a minha história e resiliência.</td></tr>`;
      output += `<tr><td class="available-command">projetos</td><td class="command-description">Os meus projetos técnicos e competições.</td></tr>`;
      output += `<tr><td class="available-command">metas</td><td class="command-description">Objetivos para a Bolsa de Mérito e futuro.</td></tr>`;
      output += `<tr><td class="available-command">merito</td><td class="command-description">Envolvimento comunitário e cartas de recomendação.</td></tr>`;
      output += "</table>";
      
      return output;
    },
    description: "Lista de comandos disponíveis."
  },
  banner: {
    execute: () => {
      return header;
    },
    description: "Mostrar o banner de boas-vindas."
  },
  sobre: {
    execute: () => {
       if (!isUserDataAvailable()) return "Dados nao disponiveis.";
       return `
<strong>QUEM SOU:</strong><br>
${userData.bio}<br><br>

<strong>A MINHA HISTORIA:</strong><br>
${userData.details?.history}<br><br>

<strong>SACRIFICIO E RESILIENCIA:</strong><br>
${userData.details?.resilience}
       `.trim();
    },
    description: "A minha historia completa (Bio, Historia, Resiliencia)."
  },
  merito: {
    execute: () => {
       if (!isUserDataAvailable("details")) return "Dados nao disponiveis.";
       
       let output = "";
       
       // Volunteering Section
       if (userData.volunteering && userData.volunteering.length > 0) {
           output += "<strong>MERITO SOCIAL (Voluntariado):</strong><br>";
           userData.volunteering.forEach(vol => {
               output += `<div style="margin-top: 10px; margin-bottom: 20px; padding-left: 10px; border-left: 2px solid var(--green-color);">
<strong>${vol.role}</strong> | ${vol.program}<br>
<em>${vol.organization}</em><br>
<p>${vol.text}</p>
<a href="${vol.link}" target="_blank">Ver Documento de Verificação</a>
</div>`;
           });
       }

       // Recommendations Section
       if (userData.recommendations && userData.recommendations.length > 0) {
           output += "<strong>CARTAS DE RECOMENDACAO:</strong><br>";
           userData.recommendations.forEach(rec => {
               output += `<div style="margin-top: 10px; margin-bottom: 20px; padding-left: 10px; border-left: 2px solid var(--green-color);">
<strong>${rec.name}</strong> | ${rec.role}<br>
<em>"${rec.text}"</em><br>
Email: <a href="mailto:${rec.email}">${rec.email}</a> | <a href="${rec.link}" target="_blank">Ver Carta Oficial</a>
</div>`;
           });
       }
       
       return output;
    },
    description: "Atividades de merito social e cartas de recomendacao."
  },
  metas: {
    execute: () => {
       if (!isUserDataAvailable("details")) return "Dados nao disponiveis.";
       return `<strong>AS MINHAS METAS:</strong><br>${userData.details.goals.replace(/\n/g, '<br>')}`;
    },
    description: "Objetivos para a Bolsa de Merito e futuro."
  },
  quem : {
    execute: () => {
      if (!isUserDataAvailable()) {
        return "ALERTA: Dados do utilizador nao encontrados.";
      }
      return `    Nome: ${userData.name}\n    Email: ${userData.email}\n    Bio: ${userData.bio}`;
    },
    description: "Informacao basica do utilizador."
  },
  redes : {
    execute: () => {
      if (!isUserDataAvailable("socials")) {
        return "Erro: Links sociais nao encontrados.";
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
    "description": "Links para redes sociais e contactos.",
  },
  projetos : {
    execute: () => {
       // Debug logic: Check if userData exists and has projects
       if (!userData || !userData.projects) {
        return "Erro: Dados de projetos nao carregados ou vazios.";
      }
      let output = "Aqui estao alguns dos meus projetos:\n<table>";
      userData.projects.forEach(project => {
        output += `<tr><td class="name">${project.name}</td><td class="description">${project.description}</td><td class="link"><a href="${project.link}" target="_blank">Ver</a></td></tr>`;
      });
      output += "</table>";
      return output;
    },
    "description": "Lista de projetos tecnicos e competicoes."
  }
};

// Check if user data is available
const isUserDataAvailable = (key) => {
  return userData && (key ? userData[key] && Object.keys(userData[key]).length > 0 : Object.keys(userData).length > 0);
};

// Load special commands from JSON file
fetch('commands.json')
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

terminal.addEventListener("click", function () {
  commandLine.focus();
});

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
    }
    commandLine.value = "";
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
  commandElement.innerHTML = `<span id="prompt">oeiras-valley@shell:~/bolsa-merito $</span> <span class="command">${command}</span>`;
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
  terminal.scrollTop = terminal.scrollHeight;
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
    "sobre": "Exibe a biografia completa, historia de vida e resiliencia de Christian Rodrigues.",
    "merito": "Mostra os detalhes de envolvimento comunitario, voluntariado e cartas de recomendacao.",
    "metas": "Lista os objetivos academicos e profissionais, incluindo o uso planeado da Bolsa de Merito.",
    "projetos": "Apresenta uma lista detalhada dos projetos tecnicos, com links para GitHub e documentacao.",
    "ls": "Lista todos os ficheiros virtuais disponiveis no diretorio atual. Use 'cat' para ler o conteudo.",
    "cat": "Le o conteudo de um ficheiro especifico. Exemplo: 'cat bio.txt' ira mostrar a biografia.",
    "help": "Mostra a lista de comandos e instrucoes de interacao.",
    "clear": "Limpa todo o texto visivel no terminal.",
    "date": "Mostra a data e hora atuais do sistema.",
    "pwd": "Mostra o caminho absoluto do diretorio atual.",
    "man": "Mostra o manual de utilizacao de um comando. Ex: 'man ls'.",
    "uname": "Mostra informacoes sobre o sistema operativo simulado.",
    "history": "Mostra a lista dos ultimos comandos executados.",
    "banner": "Repete a mensagem de boas-vindas do terminal."
  };
  return manuals[command] || "Sem descricao detalhada disponivel.";
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