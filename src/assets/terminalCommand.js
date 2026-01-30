const terminalCommands = {
  help: {
    description: 'Available commands',
    fn: () => {
      return `
Available Commands:
------------------
about       - Know more about me
skills      - View my technical skills
education   - My educational background
experience  - My work experience
projects    - View my projects
contact     - Get my contact information
github      - Open my GitHub profile
resume      - Download my resume
clear       - Clear the terminal
      `
    }
  },

  about: {
    description: 'About Samarth Varshney',
    fn: () => {
      return `
╔═══════════════════════════════════════════════════════════════╗
║                    SAMARTH VARSHNEY                           ║
║              MERN Stack Developer & ECE Student               ║
╚═══════════════════════════════════════════════════════════════╝

I'm a highly motivated third-year Electronics Engineering student 
at AMU with a passion for full-stack development and innovation.

🎓 Currently pursuing BTech in ECE (CGPA: 9.46/10.0)
💻 Intermediate-level MERN stack developer
🔧 Skilled in Python, C++, and Data Structures & Algorithms
⚡ Exploring the intersection of software and hardware
🚀 Building impactful web applications and IoT solutions

Type 'skills' to see my technical expertise!
      `
    }
  },

  skills: {
    description: 'Technical skills',
    fn: () => {
      return `
╔═══════════════════════════════════════════════════════════════╗
║                     TECHNICAL SKILLS                          ║
╚═══════════════════════════════════════════════════════════════╝

📌 Languages:
   • C/C++ (86%)
   • JavaScript (70%)
   • Python (80%)
   • C (80%)

📌 Web Technologies:
   • React.js (70%)
   • Node.js
   • Express.js
   • HTML/CSS

📌 Databases:
   • MongoDB (65%)
   • MySQL (65%)

📌 Tools & Frameworks:
   • Git/GitHub
   • VS Code
   • React.js

📌 Core Competencies:
   • Data Structures & Algorithms (60%)
   • Object-Oriented Programming
   • Operating Systems
   • Analog Circuit Design

📌 Soft Skills:
   • Problem Solving
   • Self-learning
   • Team Collaboration
   • Adaptability
      `
    }
  },

  education: {
    description: 'Educational background',
    fn: () => {
      return `
╔═══════════════════════════════════════════════════════════════╗
║                        EDUCATION                              ║
╚═══════════════════════════════════════════════════════════════╝

🎓 BTech in Electronics Engineering (2022-2026)
   Zakir Husain College of Engineering & Technology, AMU
   CGPA: 9.46/10.0
   
   Focusing on both hardware and software, blending technology 
   and innovation to solve real-world problems.

🎓 Senior Secondary (Class 12) - PCM (2021-2022)
   Percentage: 94.6%

🎓 High School (Class 10) (2019-2020)
   Percentage: 93.4%
      `
    }
  },

  experience: {
    description: 'Work experience',
    fn: () => {
      return `
╔═══════════════════════════════════════════════════════════════╗
║                      WORK EXPERIENCE                          ║
╚═══════════════════════════════════════════════════════════════╝

💼 Software Development Intern (June 2025 - July 2025)
   CDIS, IIT Kanpur
   • Developing full-stack web applications
   • Working on AI-based projects
   • Enhancing UX through machine learning algorithms

💼 Full Stack Web-Development Intern (Dec 2024 - Jan 2025)
   Coderone
   • Developed and deployed 2 full-stack web applications
   • Worked with React, Node.js, MongoDB
   • API integration and database management
   • Optimized application performance

💼 Analog Design and Circuits Intern (June 2024 - Dec 2024)
   AMU
   • Designed and analyzed analog circuits
   • Circuit simulations using LTSpice and Cadence
   • Performance optimizations
      `
    }
  },

  projects: {
    description: 'View my projects',
    fn: () => {
      return `
╔═══════════════════════════════════════════════════════════════╗
║                         PROJECTS                              ║
╚═══════════════════════════════════════════════════════════════╝

🚀 Wanderlust - Airbnb Clone (Full Stack)
   Tech: Node.js, Express.js, MongoDB, EJS, Passport.js
   A complete travel booking platform with authentication

🚀 ChatApp - Real-time Messaging (Full Stack)
   Tech: React.js, Node.js, Socket.io, MongoDB
   Real-time chat with group messaging and file sharing

🚀 Sketch.io - Figma Clone
   Tech: HTML5, SCSS, JavaScript, Canvas API
   Collaborative design tool with drawing features

🚀 Media-Finder
   Tech: React.js, Redux, Tailwind CSS
   Media search and management application

🚀 Productivity-Dashboard
   Tech: HTML5, CSS3, JavaScript
   Task management with pomodoro timer

🚀 Blackjack-AI-game
   Tech: JavaScript, HTML5, CSS3
   Interactive card game with AI opponent

Type 'github' to see all projects on GitHub!
      `
    }
  },

  contact: {
    description: 'Contact information',
    fn: () => {
      return `
╔═══════════════════════════════════════════════════════════════╗
║                    CONTACT INFORMATION                        ║
╚═══════════════════════════════════════════════════════════════╝

📧 Email:     gn2471@myamu.ac.in
🐙 GitHub:    github.com/Samarth0802
💼 LinkedIn:  linkedin.com/in/samarth-varshney-90b064254
🎂 Birth:     08 Feb 2005
📍 Location:  Firozabad, India

Feel free to reach out for collaborations or opportunities!
      `
    }
  },

  github: {
    description: 'Open GitHub profile',
    fn: () => {
      window.open('https://github.com/Samarth0802', '_blank')
      return 'Opening GitHub profile in new tab...'
    }
  },

  resume: {
    description: 'Download resume',
    fn: () => {
      window.open('https://drive.google.com/file/d/1t_eMshlhX2tZ9b9Vr0MJHAHUCl-W2TlN/view', '_blank')
      return 'Opening resume in new tab...'
    }
  },

  linkedin: {
    description: 'Open LinkedIn profile',
    fn: () => {
      window.open('http://linkedin.com/in/samarth-varshney-90b064254/', '_blank')
      return 'Opening LinkedIn profile in new tab...'
    }
  },

  clear: {
    description: 'Clear terminal',
    fn: () => {
      return ''
    }
  },

  whoami: {
    description: 'Current user',
    fn: () => {
      return 'Samarth Varshney - MERN Developer & ECE Student'
    }
  },

  date: {
    description: 'Current date and time',
    fn: () => {
      return new Date().toString()
    }
  },

  echo: {
    description: 'Echo a message',
    fn: (...args) => {
      return args.join(' ')
    }
  },

  banner: {
    description: 'Display welcome banner',
    fn: () => {
      return `

                                                               
              Welcome to Samarth's Portfolio Terminal          
                    MERN Developer | ECE @ AMU                 
                                                               


Type 'help' to see available commands.
Type 'about' to know more about me.
      `
    }
  }
}

export default terminalCommands