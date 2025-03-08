document.addEventListener('DOMContentLoaded', () => {
 
  // Three.js 3D Background
  function create3DBackground() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('home-3d-background').appendChild(renderer.domElement);

    // Create floating code cubes
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xFFD700, wireframe: true });
    
    const cubes = [];
    for (let i = 0; i < 50; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * -100
      );
      scene.add(cube);
      cubes.push(cube);
    }

    camera.position.z = 50;

    function animate() {
      requestAnimationFrame(animate);
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.z += 0.5;
        
        if (cube.position.z > 50) {
          cube.position.z = -100;
        }
      });
      renderer.render(scene, camera);
    }
    animate();
  }

  create3DBackground();

  // Typed.js for home section
  new Typed('#typed-output', {
    strings: [
      'Desenvolvedor de Software', 
      'Especialista em Múltiplas Linguagens', 
      'Criador de Soluções Inovadoras',
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Language Code Simulation
  const skillCards = document.querySelectorAll('.skill-card');
  const codeShowcase = document.getElementById('code-showcase');

  const languageCodes = {
    php: `<?php \n
      class Developer { \n
        public function createSolution() { \n
          echo "Solução inovadora criada!"; \n
        } \n
      } \n
      $dev = new Developer(); \n
      $dev->createSolution(); \n
      Solução inovadora criada! \n
    ?>`,
    java: `public class SoftwareDev { \n
      public static void main(String[] args) { \n
        System.out.println("Desenvolvendo soluções de ponta!"); \n
      } \n
    }\n
    Desenvolvendo soluções de ponta!`,
    python: `def desenvolver_solucao(): \n
      return "Automação e inteligência artificial" \n

      resultado = desenvolver_solucao() \n
      print(resultado) \n
      Automação e inteligência artificial`,
    dart: `void main() { \n
      print('Desenvolvimento multiplataforma com Flutter'); \n
    } \n Desenvolvimento multiplataforma com Flutter`
  };

  skillCards.forEach(card => {
    
    card.addEventListener('click', () => {
      codeShowcase.innerHTML="";
      const lang = card.dataset.lang;
      new Typed(codeShowcase, {
        strings: [
          `${languageCodes[lang]}`, 
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: false
      });
      
    });
  });

  // Enhanced Chatbot Functionality
  const chatbot = document.getElementById('chatbot');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');

  const botResponses = {
    'oi': 'Olá! Sou o assistente virtual especialista em criar chatbots inteligentes. Como posso ajudar você hoje?',
    'chatbot': 'Nossos assistentes virtuais são personalizados para atender às necessidades específicas do seu negócio. Podemos criar soluções de IA para atendimento, suporte, vendas e muito mais!',
    'preço': 'Os preços variam de acordo com a complexidade do projeto. Que tal agendarmos uma consulta para entender suas necessidades?',
    'tecnologias': 'Trabalhamos com processamento de linguagem natural (NLP), inteligência artificial, machine learning e várias tecnologias de ponta para criar assistentes virtuais incríveis!',
    'exemplo': 'Já desenvolvemos chatbots para empresas de e-commerce, suporte técnico, agendamento de serviços e muito mais. Cada solução é única e personalizada.'
  };

  function addMessage(sender, text, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Blinking effect for bot messages
    if (type === 'bot') {
      messageElement.classList.add('animate__animated', 'animate__fadeIn');
    }
  }

  function sendMessage() {
    const message = chatbotInput.value.trim().toLowerCase();
    if (message) {
      addMessage('Você', message, 'user');
      
      const response = botResponses[message] || 
        'Interessante! Estou sempre aprendendo. Poderia me contar mais sobre o que busca em um assistente virtual?';
      
      setTimeout(() => {
        addMessage('Assistente de IA', response, 'bot');
      }, 500);
      
      chatbotInput.value = '';
    }
  }

  chatbotSend.addEventListener('click', sendMessage);
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });


  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 15}px`;
    cursor.style.top = `${e.clientY - 15}px`;
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
  });
});