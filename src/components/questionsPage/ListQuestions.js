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
    category: "science",
    question: "Qual é o nome da unidade de medida de energia?",
    options: [
      { answer: "Joule", isCorrect: true },
      { answer: "Ampere", isCorrect: false },
      { answer: "Volt", isCorrect: false },
      { answer: "Watt", isCorrect: false }
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
    question: "Qual foi o nome do período histórico que ocorreu logo após a Idade Média, caracterizado pela retomada dos estudos da cultura greco-romana e pela valorização do racionalismo?",
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
  {
    category: "history",
    question: "Qual foi a primeira civilização a desenvolver a escrita?",
    options: [
      { answer: "Suméria", isCorrect: true },
      { answer: "Egípcia", isCorrect: false },
      { answer: "Babilônica", isCorrect: false },
      { answer: "Assíria", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual foi o principal fator que motivou a Revolução Francesa?",
    options: [
      { answer: "A independência dos Estados Unidos", isCorrect: false },
      { answer: "A crise econômica e a fome", isCorrect: true },
      { answer: "A ascensão do Iluminismo", isCorrect: false },
      { answer: "A desigualdade social", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual é o nome do gás presente em maior quantidade na atmosfera terrestre?",
    options: [
      { answer: "Oxigênio", isCorrect: false },
      { answer: "Hélio", isCorrect: false },
      { answer: "Dióxido de carbono", isCorrect: false },
      { answer: "Nitrogênio", isCorrect: true }
    ],
  },
  {
    category: "art",
    question: "Qual é a técnica de escultura em que o artista retira material de uma pedra ou bloco para criar a obra?",
    options: [
      { answer: "Cerâmica", isCorrect: false },
      { answer: "Modelagem", isCorrect: false },
      { answer: "Relevo", isCorrect: false },
      { answer: "Cinzelagem", isCorrect: true }
    ],
  },
  {
    category: "history",
    question: "Em que ano o Brasil se tornou independente de Portugal?",
    options: [
      { answer: "1808", isCorrect: false },
      { answer: "1822", isCorrect: true },
      { answer: "1889", isCorrect: false },
      { answer: "1922", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual é o processo em que o calor é transferido por meio da agitação das partículas?",
    options: [
      { answer: "Convecção", isCorrect: false },
      { answer: "Condução", isCorrect: true },
      { answer: "Radiação", isCorrect: false },
      { answer: "Fusão", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual o nome do pintor que criou a famosa obra 'A Noite Estrelada'?",
    options: [
      { answer: "Vincent van Gogh", isCorrect: true },
      { answer: "Claude Monet", isCorrect: false },
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Salvador Dali", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual o nome do famoso escultor italiano que criou a escultura 'David'?",
    options: [
      { answer: "Leonardo da Vinci", isCorrect: false },
      { answer: "Donatello", isCorrect: false },
      { answer: "Michelangelo", isCorrect: true },
      { answer: "Rafael Sanzio", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual o nome da filosofia que surgiu na Grécia Antiga e pregava a busca pelo autoconhecimento?",
    options: [
      { answer: "Existencialismo", isCorrect: false },
      { answer: "Helenismo", isCorrect: false },
      { answer: "Stoicismo", isCorrect: true },
      { answer: "Ceticismo", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual a corrente elétrica que é alternada, mudando de sentido constantemente?",
    options: [
      { answer: "Corrente contínua", isCorrect: false },
      { answer: "Corrente elétrica induzida", isCorrect: false },
      { answer: "Corrente elétrica parcial", isCorrect: false },
      { answer: "Corrente alternada", isCorrect: true }
    ],
  }, {
    category: "history",
    question: "Em que ano foi descoberto o Brasil pelos portugueses?",
    options: [
      { answer: "1500", isCorrect: true },
      { answer: "1492", isCorrect: false },
      { answer: "1808", isCorrect: false },
      { answer: "1822", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Quem foi o primeiro presidente do Brasil?",
    options: [
      { answer: "Getúlio Vargas", isCorrect: false },
      { answer: "Juscelino Kubitschek", isCorrect: false },
      { answer: "Deodoro da Fonseca", isCorrect: true },
      { answer: "Itamar Franco", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual é o planeta mais próximo do Sol?",
    options: [
      { answer: "Mercúrio", isCorrect: true },
      { answer: "Vênus", isCorrect: false },
      { answer: "Marte", isCorrect: false },
      { answer: "Saturno", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual é a unidade de medida de resistência elétrica?",
    options: [
      { answer: "Volt", isCorrect: false },
      { answer: "Ampere", isCorrect: false },
      { answer: "Ohm", isCorrect: true },
      { answer: "Watt", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual artista é conhecido por suas pinturas de latas de sopa Campbell?",
    options: [
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Vincent van Gogh", isCorrect: false },
      { answer: "Roy Lichtenstein", isCorrect: false },
      { answer: "Andy Warhol", isCorrect: true }
    ],
  },
  {
    category: "art",
    question: "Qual é a arte de fazer esculturas em argila?",
    options: [
      { answer: "Pintura", isCorrect: false },
      { answer: "Artesanato", isCorrect: false },
      { answer: "Escultura", isCorrect: false },
      { answer: "Cerâmica", isCorrect: true }
    ],
  }, {
    category: "science",
    question: "Qual é o nome dado à substância que retarda a velocidade de uma reação química?",
    options: [
      { answer: "Inibidor", isCorrect: true },
      { answer: "Catalisador", isCorrect: false },
      { answer: "Ácido", isCorrect: false },
      { answer: "Base", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual é o nome do processo de transferência de calor que ocorre entre dois objetos em contato direto?",
    options: [
      { answer: "Condução", isCorrect: true },
      { answer: "Convecção", isCorrect: false },
      { answer: "Radiação", isCorrect: false },
      { answer: "Transmissão", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual é o nome dado à quantidade de matéria de um objeto?",
    options: [
      { answer: "Massa", isCorrect: true },
      { answer: "Peso", isCorrect: false },
      { answer: "Densidade", isCorrect: false },
      { answer: "Volume", isCorrect: false }
    ],
  }, {
    category: "history",
    question: "Em que ano ocorreu a Revolução Francesa?",
    options: [
      { answer: "1789", isCorrect: true },
      { answer: "1791", isCorrect: false },
      { answer: "1804", isCorrect: false },
      { answer: "1815", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual foi a dinastia que governou a China por mais tempo na história?",
    options: [
      { answer: "Dinastia Zhou", isCorrect: false },
      { answer: "Dinastia Han", isCorrect: true },
      { answer: "Dinastia Tang", isCorrect: false },
      { answer: "Dinastia Song", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual foi a primeira dinastia a governar o Egito?",
    options: [
      { answer: "Dinastia Ptolemaica", isCorrect: false },
      { answer: "Dinastia Hicsa", isCorrect: false },
      { answer: "Dinastia Menés", isCorrect: true },
      { answer: "Dinastia Aksumita", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Quem foi o autor do famoso quadro 'A Noite Estrelada'?",
    options: [
      { answer: "Leonardo da Vinci", isCorrect: false },
      { answer: "Vincent van Gogh", isCorrect: true },
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Claude Monet", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Quem foi o principal representante do movimento artístico chamado cubismo?",
    options: [
      { answer: "Vincent van Gogh", isCorrect: false },
      { answer: "Pablo Picasso", isCorrect: true },
      { answer: "Salvador Dalí", isCorrect: false },
      { answer: "Expressionismo", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual é o nome do artista que produziu a famosa obra de arte chamada Mona Lisa?",
    options: [
      { answer: "Vincent van Gogh", isCorrect: false },
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Leonardo da Vinci", isCorrect: true },
      { answer: "Michelangelo", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Quem foi o líder político responsável pela independência do Brasil?",
    options: [
      { answer: "Pedro Álvares Cabral", isCorrect: false },
      { answer: "Dom Pedro II", isCorrect: false },
      { answer: "José Bonifácio", isCorrect: false },
      { answer: "Dom Pedro I", isCorrect: true }
    ],
  },
  {
    category: "science",
    question: "Qual é a unidade básica de vida dos seres vivos?",
    options: [
      { answer: "Proteína", isCorrect: false },
      { answer: "Átomo", isCorrect: false },
      { answer: "Célula", isCorrect: true },
      { answer: "DNA", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual país anexou a Crimeia em 2014, dando início ao conflito na Ucrânia?",
    options: [
      { answer: "Rússia", isCorrect: true },
      { answer: "China", isCorrect: false },
      { answer: "Estados Unidos", isCorrect: false },
      { answer: "Alemanha", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Quem criou o sistema de coordenadas cartesianas?",
    options: [
      { answer: "Euclides", isCorrect: false },
      { answer: "Isaac Newton", isCorrect: false },
      { answer: "René Descartes", isCorrect: true },
      { answer: "Blaise Pascal", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Quem é considerado o pai da matemática moderna?",
    options: [
      { answer: "Euclides", isCorrect: false },
      { answer: "Isaac Newton", isCorrect: false },
      { answer: "René Descartes", isCorrect: true },
      { answer: "Blaise Pascal", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Quem é considerado o pai da matemática moderna?",
    options: [
      { answer: "Euclides", isCorrect: false },
      { answer: "Isaac Newton", isCorrect: false },
      { answer: "René Descartes", isCorrect: true },
      { answer: "Blaise Pascal", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Quem é considerado o pai da música eletrônica?",
    options: [
      { answer: "Kraftwerk", isCorrect: false },
      { answer: "Brian Eno", isCorrect: false },
      { answer: "Jean-Michel Jarre", isCorrect: false },
      { answer: "Karlheinz Stockhausen", isCorrect: true }
    ],
  },
  {
    category: "art",
    question: "Qual o estilo de música eletrônica que surgiu na década de 1980 em Detroit e é caracterizado por batidas repetitivas, sintetizadores e baixos graves?",
    options: [
      { answer: "House", isCorrect: false },
      { answer: "Techno", isCorrect: true },
      { answer: "Trance", isCorrect: false },
      { answer: "Dubstep", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual o nome do estilo de música eletrônica que surgiu na Inglaterra nos anos 90, caracterizado por batidas rápidas, samples de vocais e breakbeats?",
    options: [
      { answer: "Drum and Bass", isCorrect: true },
      { answer: "Hardcore", isCorrect: false },
      { answer: "Gabber", isCorrect: false },
      { answer: "Trip Hop", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual das seguintes obras é uma composição barroca do compositor alemão Johann Sebastian Bach?",
    options: [
      { answer: "Sinfonia nº 5", isCorrect: false },
      { answer: "Fur Elise", isCorrect: false },
      { answer: "Suite para Orquestra nº 3", isCorrect: true },
      { answer: "Marcha Fúnebre", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual instrumento musical é considerado uma das principais características da música barroca?",
    options: [
      { answer: "Guitarra", isCorrect: false },
      { answer: "Piano", isCorrect: false },
      { answer: "Órgão", isCorrect: true },
      { answer: "Bateria", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual foi o álbum lançado em 2011 pela cantora Lady Gaga que se inspirou na música e na cultura da Índia?",
    options: [
      { answer: "The Fame", isCorrect: false },
      { answer: "Born This Way", isCorrect: false },
      { answer: "Artpop", isCorrect: false },
      { answer: "ARTPOP", isCorrect: true }
    ]
  },
  {
    category: "science",
    question: "Qual é a classificação dos cachorros de acordo com a FCI (Fédération Cynologique Internationale)?",
    options: [
      { answer: "Grupo 1 - Cães de Pastor e Boieiros", isCorrect: false },
      { answer: "Grupo 6 - Cães de Levante e Corso e Raças Semelhantes", isCorrect: false },
      { answer: "Grupo 8 - Cães de Companhia", isCorrect: false },
      { answer: "Grupo 9 - Cães de Companhia e Toy", isCorrect: true }
    ],
  },
  {
    category: "history",
    question: "Qual batalha da Primeira Guerra Mundial ficou conhecida como a 'Guerra das Trincheiras'?",
    options: [
      { answer: "Batalha de Somme", isCorrect: false },
      { answer: "Batalha de Passchendaele", isCorrect: false },
      { answer: "Batalha de Verdun", isCorrect: true },
      { answer: "Batalha de Jutlândia", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual foi a principal batalha naval da Primeira Guerra Mundial?",
    options: [
      { answer: "Batalha de Tsushima", isCorrect: false },
      { answer: "Batalha de Jutlândia", isCorrect: true },
      { answer: "Batalha de Tannenberg", isCorrect: false },
      { answer: "Batalha do Rio da Prata", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual o inseto que é considerado o animal que mais mata seres humanos no mundo?",
    options: [
      { answer: "Moscas", isCorrect: false },
      { answer: "Formigas", isCorrect: false },
      { answer: "Abelhas", isCorrect: false },
      { answer: "Mosquitos", isCorrect: true }
    ],
  },
  {
    category: "science",
    question: "Qual é a principal forma de prevenção contra o COVID-19?",
    options: [
      { answer: "Usar máscara somente em locais fechados", isCorrect: false },
      { answer: "Lavar as mãos frequentemente", isCorrect: true },
      { answer: "Ficar longe de pessoas idosas", isCorrect: false },
      { answer: "Tomar antibióticos preventivamente", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual é o subgênero da música eletrônica que se originou em Detroit, Estados Unidos, nos anos 1980, e é conhecido por suas batidas rítmicas e repetitivas?",
    options: [
      { answer: "House", isCorrect: false },
      { answer: "Techno", isCorrect: true },
      { answer: "Trance", isCorrect: false },
      { answer: "Drum and Bass", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual é o subgênero da música eletrônica que se caracteriza por suas batidas lentas, influência do R&B e soul, e uso de sintetizadores e samples vocais?",
    options: [
      { answer: "Deep House", isCorrect: true },
      { answer: "Techno", isCorrect: false },
      { answer: "Trance", isCorrect: false },
      { answer: "Drum and Bass", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Em que filme Leonardo DiCaprio ganhou o Oscar de Melhor Ator em 2016?",
    options: [
      { answer: "O Lobo de Wall Street", isCorrect: false },
      { answer: "Os Infiltrados", isCorrect: false },
      { answer: "Django Livre", isCorrect: false },
      { answer: "O Regresso", isCorrect: true }
    ],
  },
  {
    category: "history",
    question: "Qual foi a principal mudança que ocorreu na sociedade japonesa durante o período medieval?",
    options: [
      { answer: "A abolição do sistema de classes sociais", isCorrect: false },
      { answer: "O fortalecimento do poder dos samurais", isCorrect: true },
      { answer: "A introdução do cristianismo", isCorrect: false },
      { answer: "O aumento da influência chinesa", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual foi o nome dado ao período em que o Japão ficou isolado do resto do mundo?",
    options: [
      { answer: "Período Kamakura", isCorrect: false },
      { answer: "Período Heian", isCorrect: false },
      { answer: "Período Edo", isCorrect: false },
      { answer: "Período Sakoku", isCorrect: true }
    ],
  },
  {
    category: "history",
    question: "Qual foi a principal arma utilizada pelos samurais durante o período medieval no Japão?",
    options: [
      { answer: "Katana", isCorrect: true },
      { answer: "Naginata", isCorrect: false },
      { answer: "Yumi (arco)", isCorrect: false },
      { answer: "Tachi", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual é o nome do estilo de rock que é caracterizado pela utilização de guitarras distorcidas, bateria pesada e vocais gritados?",
    options: [
      { answer: "Grunge", isCorrect: false },
      { answer: "Punk Rock", isCorrect: false },
      { answer: "Heavy Metal", isCorrect: true },
      { answer: "Indie Rock", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual é o nome da banda conhecida por ser pioneira no gênero de heavy metal?",
    options: [
      { answer: "AC/DC", isCorrect: false },
      { answer: "Led Zeppelin", isCorrect: false },
      { answer: "Black Sabbath", isCorrect: true },
      { answer: "Deep Purple", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual é o nome do movimento musical que se originou no Reino Unido no final da década de 1970, caracterizado por letras politizadas e instrumentação simples?",
    options: [
      { answer: "Rock Alternativo", isCorrect: false },
      { answer: "Grunge", isCorrect: false },
      { answer: "Punk Rock", isCorrect: true },
      { answer: "Heavy Metal", isCorrect: false }
    ],
  },
  {
    category: "science",
    question: "Qual era o objetivo principal da alquimia?",
    options: [
      { answer: "Descobrir a cura para doenças", isCorrect: false },
      { answer: "Transformar metais em ouro", isCorrect: true },
      { answer: "Desenvolver a física moderna", isCorrect: false },
      { answer: "Estudar a astrologia", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual é o nome do compositor responsável pela icônica trilha sonora de Star Wars?",
    options: [
      { answer: "John Williams", isCorrect: true },
      { answer: "Hans Zimmer", isCorrect: false },
      { answer: "Ennio Morricone", isCorrect: false },
      { answer: "Howard Shore", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual é o nome do diretor responsável pelo episódio IV de Star Wars, lançado em 1977?",
    options: [
      { answer: "Steven Spielberg", isCorrect: false },
      { answer: "Ridley Scott", isCorrect: false },
      { answer: "George Lucas", isCorrect: true },
      { answer: "James Cameron", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual o estilista que é considerado o 'pai' da moda minimalista?",
    options: [
      { answer: "Giorgio Armani", isCorrect: false },
      { answer: "Ralph Lauren", isCorrect: false },
      { answer: "Calvin Klein", isCorrect: true },
      { answer: "Tom Ford", isCorrect: false }
    ],
  },
  {
    category: "art",
    question: "Qual o nome do estilista italiano famoso por criar sapatos com solas vermelhas?",
    options: [
      { answer: "Manolo Blahnik", isCorrect: false },
      { answer: "Christian Louboutin", isCorrect: true },
      { answer: "Jimmy Choo", isCorrect: false },
      { answer: "Salvatore Ferragamo", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Qual foi o primeiro jornal brasileiro dedicado exclusivamente à divulgação científica?",
    options: [
      { answer: "Revista Ciência e Vida", isCorrect: false },
      { answer: "Revista Brasileira de Ciência", isCorrect: false },
      { answer: "Ciência Hoje", isCorrect: false },
      { answer: "Ciência e Cultura", isCorrect: true }
    ],
  },
  {
    category: "history",
    question: "Qual foi o primeiro jornal publicado no Brasil e em que ano ele foi lançado?",
    options: [
      { answer: "Gazeta do Rio de Janeiro, 1808", isCorrect: true },
      { answer: "Correio Braziliense, 1808", isCorrect: false },
      { answer: "Diário do Rio de Janeiro, 1821", isCorrect: false },
      { answer: "Jornal do Commercio, 1827", isCorrect: false }
    ],
  },
  {
    category: "history",
    question: "Em que ano a Áustria foi anexada pela Alemanha nazista?",
    options: [
      { answer: "1936", isCorrect: false },
      { answer: "1938", isCorrect: true },
      { answer: "1940", isCorrect: false },
      { answer: "1942", isCorrect: false }
    ],
  },

  //divisao de tema
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
  {
    question: "Qual é o personagem principal do jogo de plataforma Super Mario Bros?",
    options: [
      { answer: "Mario", isCorrect: true },
      { answer: "Luigi", isCorrect: false },
      { answer: "Peach", isCorrect: false },
      { answer: "Toad", isCorrect: false }
    ],
    category: "games"
  },
  {
    question: "Em qual cidade fictícia se passa o jogo Grand Theft Auto V?",
    options: [
      { answer: "Vice City", isCorrect: false },
      { answer: "San Andreas", isCorrect: false },
      { answer: "Los Santos", isCorrect: true },
      { answer: "Liberty City", isCorrect: false }
    ],
    category: "games"
  },
  {
    question: "Em que ano foi lançado o jogo de estratégia Warcraft III: Reign of Chaos?",
    options: [
      { answer: "2000", isCorrect: false },
      { answer: "2002", isCorrect: true },
      { answer: "2004", isCorrect: false },
      { answer: "2006", isCorrect: false }
    ],
    category: "games"
  },
  {
    question: "Qual é o nome do robô azul protagonista da série de jogos Mega Man?",
    options: [
      { answer: "Mega Man", isCorrect: true },
      { answer: "Proto Man", isCorrect: false },
      { answer: "Bass", isCorrect: false },
      { answer: "Roll", isCorrect: false }
    ],
    category: "games"
  },
  {
    question: "Qual foi o ano de lançamento do jogo The Sims?",
    options: [
      { answer: "2000", isCorrect: true },
      { answer: "2004", isCorrect: false },
      { answer: "2008", isCorrect: false },
      { answer: "2012", isCorrect: false }
    ],
    category: "games"
  },
  {
    question: "Em The Sims, qual é a carreira que permite que o jogador controle um hospital?",
    options: [
      { answer: "Médico", isCorrect: true },
      { answer: "Advogado", isCorrect: false },
      { answer: "Engenheiro", isCorrect: false },
      { answer: "Professor", isCorrect: false }
    ],
    category: "games"
  },
  {
    question: "Qual é a primeira expansão de The Sims?",
    options: [
      { answer: "The Sims: Férias", isCorrect: false },
      { answer: "The Sims: Encontro Marcado", isCorrect: false },
      { answer: "The Sims: Num Passe de Mágica", isCorrect: false },
      { answer: "The Sims: O Bicho Vai Pegar", isCorrect: true }
    ],
    category: "games"
  },
  {
    question: 'Qual é o nome do personagem principal do filme "Watchmen"?',
    options: [
      { answer: "Rorschach", isCorrect: true },
      { answer: "Dr. Manhattan", isCorrect: false },
      { answer: "Ozymandias", isCorrect: false },
      { answer: "Espectral", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Quem dirigiu o filme "Watchmen" lançado em 2009?',
    options: [
      { answer: "Christopher Nolan", isCorrect: false },
      { answer: "Zack Snyder", isCorrect: true },
      { answer: "Tim Burton", isCorrect: false },
      { answer: "James Cameron", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual é o nome do grupo de super-heróis que os personagens de "Watchmen" faziam parte?',
    options: [
      { answer: "X-Men", isCorrect: false },
      { answer: "The Avengers", isCorrect: false },
      { answer: "The Comedian", isCorrect: false },
      { answer: "The Watchmen", isCorrect: true }
    ],
    category: "movies"
  },
  {
    question: "Qual é o nome do apartamento onde os personagens de Friends moram?",
    options: [
      { answer: "Central Perk", isCorrect: false },
      { answer: "Café do Pete", isCorrect: false },
      { answer: "Apartamento da Mônica", isCorrect: true },
      { answer: "Casa de Joey", isCorrect: false }
    ],
    category: "movies",
  },
  {
    question: 'Qual é o nome do café onde os personagens de Friends sempre se encontram?',
    options: [
      { answer: "Central Perk", isCorrect: true },
      { answer: "The Coffee House", isCorrect: false },
      { answer: "The Daily Grind", isCorrect: false },
      { answer: "The Bean Scene", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual é o nome do pai de Ross e Monica?',
    options: [
      { answer: "Jack", isCorrect: true },
      { answer: "Bob", isCorrect: false },
      { answer: "Ben", isCorrect: false },
      { answer: "Frank", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual personagem de Friends tem um macaco como animal de estimação?',
    options: [
      { answer: "Joey", isCorrect: false },
      { answer: "Ross", isCorrect: true },
      { answer: "Chandler", isCorrect: false },
      { answer: "Phoebe", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual é a profissão de Chandler Bing em Friends?',
    options: [
      { answer: "Contador", isCorrect: false },
      { answer: "Ator", isCorrect: false },
      { answer: "Publicitário", isCorrect: true },
      { answer: "Médico", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual personagem de Friends canta "Smelly Cat" em um café?',
    options: [
      { answer: "Phoebe", isCorrect: true },
      { answer: "Monica", isCorrect: false },
      { answer: "Rachel", isCorrect: false },
      { answer: "Janice", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual é o nome da irmã gêmea de Phoebe em Friends?',
    options: [
      { answer: "Ursula", isCorrect: true },
      { answer: "Janice", isCorrect: false },
      { answer: "Judy", isCorrect: false },
      { answer: "Carol", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual personagem de Friends é alérgico a gatos?',
    options: [
      { answer: "Chandler", isCorrect: true },
      { answer: "Ross", isCorrect: false },
      { answer: "Joey", isCorrect: false },
      { answer: "Monica", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual é o nome do apartamento onde os personagens de Friends moram?',
    options: [
      { answer: "Central Perk", isCorrect: false },
      { answer: "Café do Pete", isCorrect: false },
      { answer: "Apartamento da Mônica", isCorrect: true },
      { answer: "Casa de Joey", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual é o nome da banda de rock que lançou a música "Stairway to Heaven"?',
    options: [
      { answer: "The Rolling Stones", isCorrect: false },
      { answer: "Led Zeppelin", isCorrect: true },
      { answer: "Pink Floyd", isCorrect: false },
      { answer: "The Beatles", isCorrect: false }
    ],
    category: "music"
  },
  {
    question: 'Qual é o nome da música do Queen que começa com "Is this the real life? Is this just fantasy?"?',
    options: [
      { answer: "Bohemian Rhapsody", isCorrect: true },
      { answer: "We Will Rock You", isCorrect: false },
      { answer: "We Are the Champions", isCorrect: false },
      { answer: "Somebody to Love", isCorrect: false }
    ],
    category: "music"
  },
  {
    question: 'Qual é o nome do álbum do Pink Floyd que ficou 741 semanas nas paradas de sucesso nos Estados Unidos?',
    options: [
      { answer: "Wish You Were Here", isCorrect: false },
      { answer: "The Wall", isCorrect: true },
      { answer: "Dark Side of the Moon", isCorrect: false },
      { answer: "Animals", isCorrect: false }
    ],
    category: "music"
  },
  {
    question: 'Qual é o estilo de música popular na década de 1970, que tem como principais características a guitarra elétrica e a bateria forte?',
    options: [
      { answer: "Jazz", isCorrect: false },
      { answer: "Pop", isCorrect: false },
      { answer: "Rock", isCorrect: true },
      { answer: "Funk", isCorrect: false }
    ],
    category: "music"
  },
  {
    question: 'Qual é o estilo musical que se originou nos Estados Unidos na década de 1950 e tem como características principais a guitarra elétrica e o ritmo acelerado?',
    options: [
      { answer: "Rockabilly", isCorrect: true },
      { answer: "Soul", isCorrect: false },
      { answer: "Blues", isCorrect: false },
      { answer: "Country", isCorrect: false }
    ],
    category: "music"
  },
  {
    question: 'Qual é o nome do músico e produtor americano conhecido como o "Rei do Pop"?',
    options: [
      { answer: "Prince", isCorrect: false },
      { answer: "Michael Jackson", isCorrect: true },
      { answer: "James Brown", isCorrect: false },
      { answer: "Stevie Wonder", isCorrect: false }
    ],
    category: "music"
  },
  {
    question: 'Qual é o nome da música do Michael Jackson que ficou 7 semanas consecutivas em primeiro lugar nas paradas de sucesso dos Estados Unidos em 1983?',
    options: [
      { answer: "Billie Jean", isCorrect: true },
      { answer: "Thriller", isCorrect: false },
      { answer: "Beat It", isCorrect: false },
      { answer: "The Way You Make Me Feel", isCorrect: false }
    ],
    category: "music"
  },
  {
    question: 'Qual é o nome do famoso festival de música que ocorreu em 1969?',
    options: [
      { answer: "Woodstock", isCorrect: true },
      { answer: "Isle of Wight Festival", isCorrect: false },
      { answer: "Monterey Pop Festival", isCorrect: false },
      { answer: "Live Aid", isCorrect: false }
    ],
    category: "music"
  },
  {
    question: 'Qual é o nome do álbum de Michael Jackson que incluiu sucessos como "Thriller" e "Beat It"?',
    options: [
      { answer: "Off the Wall", isCorrect: false },
      { answer: "Bad", isCorrect: false },
      { answer: "Dangerous", isCorrect: false },
      { answer: "Thriller", isCorrect: true }
    ],
    category: "music"
  },
  {
    question: 'Qual é o nome do herói que é considerado o símbolo do jogo Dota 2?',
    options: [
      { answer: 'Lina', isCorrect: false },
      { answer: 'Juggernaut', isCorrect: false },
      { answer: 'Invoker', isCorrect: false },
      { answer: 'Pudge', isCorrect: true }
    ],
    category: 'games'
  },
  {
    question: 'Qual é o nome do herói que tem o poder de transformar inimigos em galinhas no jogo Dota 2?',
    options: [
      { answer: 'Shadow Shaman', isCorrect: false },
      { answer: 'Visage', isCorrect: false },
      { answer: 'Bane', isCorrect: false },
      { answer: 'Lion', isCorrect: true }
    ],
    category: 'games'
  },
  {
    question: 'Qual é o nome do herói que tem o poder de se teleportar para qualquer lugar do mapa no jogo Dota 2?',
    options: [
      { answer: 'Anti-Mage', isCorrect: false },
      { answer: 'Storm Spirit', isCorrect: true },
      { answer: 'Ember Spirit', isCorrect: false },
      { answer: 'Earth Spirit', isCorrect: false }
    ],
    category: 'games'
  },
  {
    question: 'Qual é o nome do personagem principal interpretado por Will Smith no filme "Eu Sou a Lenda"?',
    options: [
      { answer: "Robert Neville", isCorrect: true },
      { answer: "Ethan Hunt", isCorrect: false },
      { answer: "John McClane", isCorrect: false },
      { answer: "Jack Sparrow", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual é a principal ameaça do personagem de Will Smith no filme "Eu Sou a Lenda"?',
    options: [
      { answer: "Vírus", isCorrect: true },
      { answer: "Zumbis", isCorrect: false },
      { answer: "Robôs", isCorrect: false },
      { answer: "Monstros", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'O filme "Eu Sou a Lenda" é baseado em qual livro?',
    options: [
      { answer: "1984", isCorrect: false },
      { answer: "Admirável Mundo Novo", isCorrect: false },
      { answer: "Eu Sou a Lenda", isCorrect: true },
      { answer: "O Jogador Número 1", isCorrect: false }
    ],
    category: "movies"
  },
  {
    question: 'Qual o ano de lançamento do filme "V de Vingança"?',
    options: [
    { answer: '2006', isCorrect: true },
    { answer: '2005', isCorrect: false },
    { answer: '2007', isCorrect: false },
    { answer: '2008', isCorrect: false }
    ],
    category: 'movies'
    },
    {
    question: 'Quem dirigiu o filme "V de Vingança"?',
    options: [
    { answer: 'Lana Wachowski', isCorrect: false },
    { answer: 'Tom Tykwer', isCorrect: false },
    { answer: 'Lilly Wachowski', isCorrect: false },
    { answer: 'James McTeigue', isCorrect: true }
    ],
    category: 'movies'
    },
  
];

export default questionsList;