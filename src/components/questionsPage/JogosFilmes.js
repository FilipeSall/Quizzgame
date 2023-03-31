const funQuestionList = [
    {
        question: "Qual é o nome do álbum mais vendido de todos os tempos, lançado pelo cantor Michael Jackson em 1982?",
        options: [
          { answer: "Bad", isCorrect: false },
          { answer: "Thriller", isCorrect: true },
          { answer: "Off the Wall", isCorrect: false },
          { answer: "Dangerous", isCorrect: false }
        ],
        category: 'music'
      },
      {
        question: "Qual é a música mais famosa da banda britânica Queen, lançada em 1975?",
        options: [
          { answer: "Bohemian Rhapsody", isCorrect: true },
          { answer: "We Will Rock You", isCorrect: false },
          { answer: "Somebody to Love", isCorrect: false },
          { answer: "Don't Stop Me Now", isCorrect: false }
        ],
        category: 'music'
      },
      {
        question: "Qual foi o primeiro filme da saga 'Star Wars' lançado em 1977?",
        options: [
          { answer: "Star Wars: A New Hope", isCorrect: true },
          { answer: "The Empire Strikes Back", isCorrect: false },
          { answer: "Return of the Jedi", isCorrect: false },
          { answer: "The Force Awakens", isCorrect: false }
        ],
        category: "movies"
      },
      {
        question: "Qual é o jogo de videogame mais vendido de todos os tempos?",
        options: [
          { answer: "Minecraft", isCorrect: false },
          { answer: "Tetris", isCorrect: true },
          { answer: "Grand Theft Auto V", isCorrect: false },
          { answer: "Wii Sports", isCorrect: false }
        ],
        category: "games"
      },
      {
        question: "Quem é o principal vilão em 'The Legend of Zelda: Ocarina of Time'?",
        options: [
          { answer: "Ganondorf", isCorrect: true },
          { answer: "Ganon", isCorrect: false },
          { answer: "Zant", isCorrect: false },
          { answer: "Vaati", isCorrect: false }
        ],
        category: "games"
      },
      {
        question: "Qual é o nome do protagonista de 'Assassin's Creed'?",
        options: [
          { answer: "Ezio Auditore", isCorrect: false },
          { answer: "Altaïr Ibn-La'Ahad", isCorrect: false },
          { answer: "Connor Kenway", isCorrect: false },
          { answer: "Desmond Miles", isCorrect: true }
        ],
        category: "games"
      },
      {
        question: "Qual é o primeiro jogo da série 'Final Fantasy'?",
        options: [
          { answer: "Final Fantasy VI", isCorrect: false },
          { answer: "Final Fantasy V", isCorrect: false },
          { answer: "Final Fantasy I", isCorrect: true },
          { answer: "Final Fantasy IV", isCorrect: false }
        ],
        category: "games"
      },
      {
        question: "Em 'League of Legends', qual é o nome do campeão que é um yordle de cor rosa e que é conhecido por ser o piloto de um mecha gigante?",
        options: [
          { answer: "Lulu", isCorrect: false },
          { answer: "Poppy", isCorrect: true },
          { answer: "Ziggs", isCorrect: false },
          { answer: "Teemo", isCorrect: false }
        ],
        category: "games"
      },
      {
        question: "Qual é o campeão de League of Legends mais popular atualmente?",
        options: [
          { answer: "Yone", isCorrect: false },
          { answer: "Senna", isCorrect: false },
          { answer: "Samira", isCorrect: false },
          { answer: "Seraphine", isCorrect: true }
        ],
        category: "games"
      },
      {
        question: "Qual é o nome da liga profissional de League of Legends na América do Norte?",
        options: [
          { answer: "LPL", isCorrect: false },
          { answer: "LEC", isCorrect: false },
          { answer: "LCK", isCorrect: false },
          { answer: "LCS", isCorrect: true }
        ],
        category: "games"
      },
      {
        question: "Qual é o objetivo principal do jogo League of Legends?",
        options: [
          { answer: "Destruir a base do time adversário", isCorrect: true },
          { answer: "Matar o máximo de inimigos possível", isCorrect: false },
          { answer: "Capturar torres inimigas", isCorrect: false },
          { answer: "Coletar recursos para o time", isCorrect: false }
        ],
        category: "games"
      },
      {
        question: "Qual é o nome do famoso festival de música eletrônica que acontece anualmente em Las Vegas?",
        options: [
          { answer: "EDC", isCorrect: true },
          { answer: "Ultra Music Festival", isCorrect: false },
          { answer: "Tomorrowland", isCorrect: false },
          { answer: "Sensation", isCorrect: false }
        ],
        category: "music"
      },
      {
        question: "Quem é o artista sueco que fez sucesso mundial com a música 'Levels'?",
        options: [
          { answer: "Swedish House Mafia", isCorrect: false },
          { answer: "Axwell", isCorrect: false },
          { answer: "Alesso", isCorrect: false },
          { answer: "Avicii", isCorrect: true }
        ],
        category: "music"
      },
      {
        question: "Que termo é usado para se referir a uma batida constante e repetitiva na música eletrônica?",
        options: [
          { answer: "Melodia", isCorrect: false },
          { answer: "Drop", isCorrect: false },
          { answer: "Chorus", isCorrect: false },
          { answer: "Beat", isCorrect: true }
        ],
        category: "music"
      },
      {
        question: "Qual é o nome do protagonista de Arcane?",
        options: [
          { answer: "Vi", isCorrect: false },
          { answer: "Jinx", isCorrect: false },
          { answer: "Powder", isCorrect: true },
          { answer: "Silco", isCorrect: false }
        ],
        category: "movies"
      },
      {
        question: "Qual é a cidade onde se passa a história de Arcane?",
        options: [
          { answer: "Piltover", isCorrect: true },
          { answer: "Zaun", isCorrect: false },
          { answer: "Demacia", isCorrect: false },
          { answer: "Noxus", isCorrect: false }
        ],
        category: "movies"
      },
      {
        question: "Qual é o filme de maior bilheteria de 2021 até o momento?",
        options: [
          { answer: "Shang-Chi e a Lenda dos Dez Anéis", isCorrect: true },
          { answer: "Velozes e Furiosos 9", isCorrect: false },
          { answer: "Viúva Negra", isCorrect: false },
          { answer: "Godzilla vs. Kong", isCorrect: false }
        ],
        category: "movies"
      },
      {
        question: "Qual filme de 2020 arrecadou mais dinheiro nas bilheterias mundiais?",
        options: [
          { answer: "Sonic - O Filme", isCorrect: false },
          { answer: "Tenet", isCorrect: true },
          { answer: "Mulan", isCorrect: false },
          { answer: "O Homem Invisível", isCorrect: false }
        ],
        category: "movies"
      },
      {
        question: "Qual filme de comédia romântica foi sucesso de bilheteria em 2021?",
        options: [
          { answer: "Era Uma Vez um Sonho", isCorrect: false },
          { answer: "Resgate do Coração", isCorrect: false },
          { answer: "Cruella", isCorrect: false },
          { answer: "Sim Senhoras", isCorrect: true }
        ],
        category: "movies"
      },
    
]

export default funQuestionList;