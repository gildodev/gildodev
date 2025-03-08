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
      'Criador de Soluções Inovadoras'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Language Code Simulation
  const skillCards = document.querySelectorAll('.skill-card');
  const codeShowcase = document.getElementById('code-showcase');

  const languageCodes = {
    php: `<?php
  class Developer {
    public function createSolution() {
      echo "Solução inovadora criada!";
    }
  }
  $dev = new Developer();
  $dev->createSolution();
?>`,
    java: `public class SoftwareDev {
  public static void main(String[] args) {
    System.out.println("Desenvolvendo 
    soluções de ponta!");
  }
}`,
    python: `def desenvolver_solucao():
    return "Automação e 
    inteligência artificial"

resultado = desenvolver_solucao()
print(resultado)`,
    dart: `void main() {
  print('Desenvolvimento 
  multiplataforma com Flutter');
}`
  };

  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      const lang = card.dataset.lang;
      codeShowcase.innerHTML = `
        <pre><code class="language-${lang}">${languageCodes[lang]}</code></pre>
      `;
    });
  });

  // Chatbot Functionality
  const chatbot = document.getElementById('chatbot');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');

  const botResponses = {
    'oi': 'Olá! Sou o assistente do Gildo. Como posso ajudar?',
    'quem é você': 'Sou um assistente virtual criado para apresentar o portfólio do Desenvolvedor Gildo.',
    'tecnologias': 'Trabalho com PHP, Java, Python, Dart, Flutter, React, Laravel, Django e muito mais!',
    'projetos': 'Desenvolvemos APKs, plataformas online, sistemas empresariais e soluções personalizadas.'
  };

  chatbotSend.addEventListener('click', sendMessage);
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const message = chatbotInput.value.trim().toLowerCase();
    if (message) {
      addMessage('Você', message, 'user');
      const response = botResponses[message] || 'Desculpe, não entendi. Pode reformular?';
      setTimeout(() => addMessage('Assistente', response, 'bot'), 500);
      chatbotInput.value = '';
    }
  }

  function addMessage(sender, text, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
});