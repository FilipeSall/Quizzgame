const questionsList = [
  {
    question: "Qual foi a civilização que construiu as pirâmides de Gizé?",
    options: [
      { answer: "Civilização Maia", isCorrect: false },
      { answer: "Civilização Asteca", isCorrect: false },
      { answer: "Civilização Egípcia", isCorrect: true },
      { answer: "Civilização Grega", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Quem foi o imperador romano que governou durante a construção do Coliseu?",
    options: [
      { answer: "Júlio César", isCorrect: false },
      { answer: "Augusto", isCorrect: false },
      { answer: "Nero", isCorrect: true },
      { answer: "Trajano", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Qual foi a primeira dinastia chinesa?",
    options: [
      { answer: "Dinastia Zhou", isCorrect: false },
      { answer: "Dinastia Qin", isCorrect: true },
      { answer: "Dinastia Han", isCorrect: false },
      { answer: "Dinastia Tang", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Qual é a unidade básica da vida?",
    options: [
      { answer: "Átomo", isCorrect: false },
      { answer: "Molécula", isCorrect: false },
      { answer: "Célula", isCorrect: true },
      { answer: "Organelas", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Qual é o nome do famoso quadro de Leonardo da Vinci que retrata uma mulher com um sorriso enigmático?",
    options: [
      { answer: "Mona Lisa", isCorrect: true },
      { answer: "A Última Ceia", isCorrect: false },
      { answer: "A Criação de Adão", isCorrect: false },
      { answer: "O Nascimento de Vênus", isCorrect: false },
    ],
    category: 'art',
  },
  {
    question: "Qual é o estilo artístico que Salvador Dalí é mais conhecido por representar?",
    options: [
      { answer: "Impressionismo", isCorrect: false },
      { answer: "Cubismo", isCorrect: false },
      { answer: "Surrealismo", isCorrect: true },
      { answer: "Expressionismo", isCorrect: false },
    ],
    category: 'art',
  },
  {
    question: "Qual é o nome do famoso arquiteto espanhol que projetou a Basílica da Sagrada Família em Barcelona?",
    options: [
      { answer: "Antoni Gaudí", isCorrect: true },
      { answer: "Frank Lloyd Wright", isCorrect: false },
      { answer: "Le Corbusier", isCorrect: false },
      { answer: "Mies van der Rohe", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Qual foi o evento que marcou o início da Primeira Guerra Mundial?",
    options: [
      { answer: "Assassinato do Arquiduque Franz Ferdinand", isCorrect: true },
      { answer: "Invasão da Polônia", isCorrect: false },
      { answer: "Ataque a Pearl Harbor", isCorrect: false },
      { answer: "Revolução Russa", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Qual país iniciou a Revolução Industrial no século XVIII?",
    options: [
      { answer: "França", isCorrect: false },
      { answer: "Estados Unidos", isCorrect: false },
      { answer: "Reino Unido", isCorrect: true },
      { answer: "Alemanha", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Qual imperador romano dividiu o império em duas partes, o Império Romano do Ocidente e o Império Romano do Oriente?",
    options: [
      { answer: "Augusto", isCorrect: false },
      { answer: "Constantino", isCorrect: false },
      { answer: "Diocleciano", isCorrect: true },
      { answer: "Júlio César", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Quem foi o primeiro presidente dos Estados Unidos?",
    options: [
      { answer: "Thomas Jefferson", isCorrect: false },
      { answer: "Abraham Lincoln", isCorrect: false },
      { answer: "George Washington", isCorrect: true },
      { answer: "John Adams", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Qual evento histórico marcou o início da Idade Moderna?",
    options: [
      { answer: "Revolução Industrial", isCorrect: false },
      { answer: "Queda do Império Romano", isCorrect: false },
      { answer: "Tomada da Bastilha", isCorrect: false },
      { answer: "Queda de Constantinopla", isCorrect: true },
    ],
    category: 'history',
  },
  {
    question: "Qual foi o tratado que encerrou oficialmente a Primeira Guerra Mundial?",
    options: [
      { answer: "Tratado de Versalhes", isCorrect: true },
      { answer: "Tratado de Tordesilhas", isCorrect: false },
      { answer: "Tratado de Paris", isCorrect: false },
      { answer: "Tratado de Yalta", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Qual é a fórmula química da água?",
    options: [
      { answer: "H2O", isCorrect: true },
      { answer: "CO2", isCorrect: false },
      { answer: "O2", isCorrect: false },
      { answer: "H2O2", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
    options: [
      { answer: "Vênus", isCorrect: false },
      { answer: "Marte", isCorrect: true },
      { answer: "Júpiter", isCorrect: false },
      { answer: "Saturno", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Qual é o maior órgão do corpo humano?",
    options: [
      { answer: "Fígado", isCorrect: false },
      { answer: "Cérebro", isCorrect: false },
      { answer: "Pele", isCorrect: true },
      { answer: "Coração", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Qual é a tabela periódica que lista todos os elementos químicos?",
    options: [
      { answer: "Tabela de Mendeleev", isCorrect: true },
      { answer: "Tabela de Newton", isCorrect: false },
      { answer: "Tabela de Dalton", isCorrect: false },
      { answer: "Tabela de Rutherford", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Quem foi o primeiro imperador do Brasil?",
    options: [
      { answer: "Pedro II", isCorrect: false },
      { answer: "Pedro I", isCorrect: true },
      { answer: "D. João VI", isCorrect: false },
      { answer: "Getúlio Vargas", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "Qual foi o resultado da Batalha de Waterloo?",
    options: [
      { answer: "Vitória de Napoleão", isCorrect: false },
      { answer: "Vitória da Prússia", isCorrect: false },
      { answer: "Vitória dos Aliados e exílio de Napoleão", isCorrect: true },
      { answer: "Vitória da Rússia", isCorrect: false },
    ],
    category: 'history',
  },
  {
    question: "O que é um neurônio?",
    options: [
      { answer: "Uma célula muscular", isCorrect: false },
      { answer: "Uma célula do sistema nervoso", isCorrect: true },
      { answer: "Uma célula do sistema imunológico", isCorrect: false },
      { answer: "Uma célula do sistema circulatório", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Qual é o maior osso do corpo humano?",
    options: [
      { answer: "Úmero", isCorrect: false },
      { answer: "Tíbia", isCorrect: false },
      { answer: "Fêmur", isCorrect: true },
      { answer: "Fíbula", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Qual desses elementos é um gás nobre?",
    options: [
      { answer: "Hidrogênio", isCorrect: false },
      { answer: "Oxigênio", isCorrect: false },
      { answer: "Neônio", isCorrect: true },
      { answer: "Cloro", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Qual é a força que mantém os planetas em órbita ao redor do Sol?",
    options: [
      { answer: "Força centrífuga", isCorrect: false },
      { answer: "Força de atrito", isCorrect: false },
      { answer: "Força eletromagnética", isCorrect: false },
      { answer: "Força gravitacional", isCorrect: true },
    ],
    category: 'science',
  },
  {
    question: "Qual é a camada mais externa da Terra?",
    options: [
      { answer: "Núcleo", isCorrect: false },
      { answer: "Manto", isCorrect: false },
      { answer: "Crosta", isCorrect: true },
      { answer: "Astenosfera", isCorrect: false },
    ],
    category: 'science',
  },
  {
    question: "Qual é o elemento químico mais abundante no universo?",
    category: "science",
    options: [
      { answer: "Hidrogênio", isCorrect: true },
      { answer: "Oxigênio", isCorrect: false },
      { answer: "Hélio", isCorrect: false },
      { answer: "Carbono", isCorrect: false },
    ],
  },
  {
    question: "Quantos planetas no nosso sistema solar têm anéis?",
    category: "science",
    options: [
      { answer: "2", isCorrect: false },
      { answer: "4", isCorrect: true },
      { answer: "6", isCorrect: false },
      { answer: "8", isCorrect: false },
    ],
  },
  {
    category: "science",
    question: "Qual é o maior planeta do nosso sistema solar?",
    options: [
      { answer: "Saturno", isCorrect: false },
      { answer: "Netuno", isCorrect: false },
      { answer: "Urano", isCorrect: false },
      { answer: "Júpiter", isCorrect: true },
    ],
  },
  {
    category: "science",
    question: "Qual elemento químico possui o símbolo 'H'?",
    options: [
      { answer: "Hélio", isCorrect: false },
      { answer: "Hidrogênio", isCorrect: true },
      { answer: "Hafnio", isCorrect: false },
      { answer: "Holmio", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Qual famoso pintor holandês cortou parte de sua própria orelha?",
    options: [
      { answer: "Rembrandt", isCorrect: false },
      { answer: "Johannes Vermeer", isCorrect: false },
      { answer: "Vincent van Gogh", isCorrect: true },
      { answer: "Piet Mondrian", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Em qual cidade está localizada a famosa escultura do Cristo Redentor?",
    options: [
      { answer: "São Paulo", isCorrect: false },
      { answer: "Rio de Janeiro", isCorrect: true },
      { answer: "Salvador", isCorrect: false },
      { answer: "Brasília", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Quem é o autor da obra 'O Grito'?",
    options: [
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Edvard Munch", isCorrect: true },
      { answer: "Vincent van Gogh", isCorrect: false },
      { answer: "Claude Monet", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Qual famoso pintor é conhecido por suas pinturas de bailarinas?",
    options: [
      { answer: "Edgar Degas", isCorrect: true },
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Vincent van Gogh", isCorrect: false },
      { answer: "Claude Monet", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Qual movimento artístico foi liderado por Salvador Dalí?",
    options: [
      { answer: "Surrealismo", isCorrect: true },
      { answer: "Cubismo", isCorrect: false },
      { answer: "Impressionismo", isCorrect: false },
      { answer: "Expressionismo", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Em qual país o Renascimento começou?",
    options: [
      { answer: "França", isCorrect: false },
      { answer: "Espanha", isCorrect: false },
      { answer: "Itália", isCorrect: true },
      { answer: "Alemanha", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Qual é o nome da famosa escultura de mármore de Michelangelo?",
    options: [
      { answer: "O Pensador", isCorrect: false },
      { answer: "Moisés", isCorrect: false },
      { answer: "David", isCorrect: true },
      { answer: "O Beijo", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Qual pintora mexicana é famosa por seus autorretratos e obras inspiradas na natureza e na cultura do México?",
    options: [
      { answer: "Frida Kahlo", isCorrect: true },
      { answer: "Georgia O'Keeffe", isCorrect: false },
      { answer: "Mary Cassatt", isCorrect: false },
      { answer: "Tamara de Lempicka", isCorrect: false },
    ],
  },
  {
    category: "science",
    question: "Qual é o processo pelo qual as plantas produzem energia?",
    options: [
      { answer: "Fotossíntese", isCorrect: true },
      { answer: "Respiração celular", isCorrect: false },
      { answer: "Osmose", isCorrect: false },
      { answer: "Mitose", isCorrect: false },
    ],
  },
  {
    category: "science",
    question: "O que é um ácido?",
    options: [
      { answer: "Uma substância que doa um próton (H+)", isCorrect: true },
      { answer: "Uma substância que aceita um próton (H+)", isCorrect: false },
      { answer: "Uma substância que contém mais hidrogênio do que oxigênio", isCorrect: false },
      { answer: "Uma substância com pH maior do que 7", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Qual o nome do pintor holandês que se destacou no século XVII com suas obras de naturezas-mortas e cenas do cotidiano, como o quadro 'A Ronda Noturna'?",
    options: [
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Johannes Vermeer", isCorrect: false },
      { answer: "Rembrandt", isCorrect: true },
      { answer: "Vincent van Gogh", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual o nome da técnica de pintura que utiliza a aplicação de várias camadas finas de tinta, geralmente óleo, para criar profundidade e luminosidade na obra?",
    options: [
      { answer: "Aquarela", isCorrect: false },
      { answer: "Fresco", isCorrect: false },
      { answer: "Têmpera", isCorrect: false },
      { answer: "Glacis", isCorrect: true }
    ],
  },
  {
    category: "art",
    question: "Qual o nome da técnica de escultura em que o artista remove material da peça em vez de adicioná-lo?",
    options: [
      { answer: "Entalhe", isCorrect: true },
      { answer: "Modelagem", isCorrect: false },
      { answer: "Fundição", isCorrect: false },
      { answer: "Serragem", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual o nome dado à técnica de impressão em que a imagem é transferida para o papel através de uma matriz plana gravada em relevo?",
    options: [
      { answer: "Litografia", isCorrect: false },
      { answer: "Serigrafia", isCorrect: false },
      { answer: "Xilogravura", isCorrect: true },
      { answer: "Gravura em metal", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Quem foi o líder da Revolução Russa de 1917?",
    options: [
      { answer: "Joseph Stalin", isCorrect: false },
      { answer: "Vladimir Lenin", isCorrect: true },
      { answer: "Leon Trotsky", isCorrect: false },
      { answer: "Nikolai Bukharin", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Quem foi o primeiro imperador romano?",
    options: [
      { answer: "Júlio César", isCorrect: false },
      { answer: "Augusto", isCorrect: true },
      { answer: "Nero", isCorrect: false },
      { answer: "Trajano", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual foi o líder nazista responsável pelo extermínio de cerca de seis milhões de judeus durante a Segunda Guerra Mundial?",
    options: [
      { answer: "Adolf Hitler", isCorrect: false },
      { answer: "Joseph Goebbels", isCorrect: false },
      { answer: "Heinrich Himmler", isCorrect: true },
      { answer: "Hermann Göring", isCorrect: false },
    ],
  },
  {
    category: "art",
    question: "Qual é o nome do movimento artístico que se originou na França em 1874, caracterizado por uma abordagem mais impressionista da pintura ao ar livre e a valorização de efeitos visuais momentâneos?",
    options: [
      { answer: "Realismo", isCorrect: false },
      { answer: "Cubismo", isCorrect: false },
      { answer: "Expressionismo", isCorrect: false },
      { answer: "Impressionismo", isCorrect: true }
    ],
  },
  {
    category: "history",
    question: "Qual foi o nome do período histórico que ocorreu logo após a Idade Média, caracterizado pela retomada dos estudos da cultura greco-romana e pela valorização do racionalismo e da razão humana?",
    options: [
      { answer: "Renascimento", isCorrect: true },
      { answer: "Barroco", isCorrect: false },
      { answer: "Idade Moderna", isCorrect: false },
      { answer: "Iluminismo", isCorrect: false }
    ]
  },
  {
    category: "science",
    question: "Qual é o nome da substância que dá às folhas verdes sua cor característica e que é essencial para a fotossíntese?",
    options: [
      { answer: "Clorofórmio", isCorrect: false },
      { answer: "Caroteno", isCorrect: false },
      { answer: "Melatonina", isCorrect: false },
      { answer: "Clorofila", isCorrect: true },
    ],
  },
];

export default questionsList;