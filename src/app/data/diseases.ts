import type { Disease } from "../types";

export const diseases: Disease[] = [
  // Doenças mais comuns
  {
    name: "Gripe",
    symptoms: ["febre", "dor de cabeça", "dor no corpo", "tosse", "fadiga"],
    description: "Infecção viral comum que afeta o sistema respiratório.",
  },
  {
    name: "Resfriado",
    symptoms: ["coriza", "espirros", "dor de garganta", "tosse leve", "congestão nasal"],
    description: "Infecção viral leve do trato respiratório superior.",
  },
  {
    name: "COVID-19",
    symptoms: ["febre", "tosse seca", "cansaço", "perda de paladar ou olfato", "dificuldade para respirar"],
    description: "Doença infecciosa causada pelo coronavírus SARS-CoV-2.",
  },
  {
    name: "Alergia",
    symptoms: ["espirros", "coceira nos olhos", "coriza", "congestão nasal", "tosse"],
    description: "Reação exagerada do sistema imunológico a substâncias geralmente inofensivas.",
  },
  {
    name: "Sinusite",
    symptoms: ["congestão nasal", "dor facial", "dor de cabeça", "tosse"],
    description: "Inflamação dos seios nasais que causa dor e congestão.",
  },
  {
    name: "Rinite Alérgica",
    symptoms: ["espirros", "coceira no nariz", "congestão nasal", "coriza"],
    description: "Reação alérgica que causa inflamação das vias nasais.",
  },
  {
    name: "Bronquite",
    symptoms: ["tosse com catarro", "falta de ar", "chiado no peito", "fadiga"],
    description: "Inflamação dos brônquios que leva à produção excessiva de muco e tosse.",
  },
  {
    name: "Asma",
    symptoms: ["falta de ar", "chiado no peito", "tosse", "aperto no peito"],
    description: "Doença inflamatória crônica das vias aéreas que causa dificuldade para respirar.",
  },
  {
    name: "Pneumonia",
    symptoms: ["febre alta", "tosse com catarro", "dor no peito", "falta de ar"],
    description: "Infecção que inflama os sacos de ar em um ou ambos os pulmões.",
  },
  {
    name: "Gastrite",
    symptoms: ["dor no estômago", "náusea", "vômito", "indigestão"],
    description: "Inflamação do revestimento do estômago que pode causar dor e desconforto.",
  },
  {
    name: "Diabetes",
    symptoms: ["sede excessiva", "vontade frequente de urinar", "fadiga", "visão turva"],
    description: "Doença crônica que afeta a forma como o corpo processa o açúcar no sangue.",
  },
  {
    name: "Hipertensão",
    symptoms: ["dor de cabeça", "tontura", "visão turva", "falta de ar"],
    description: "Pressão arterial elevada, que pode levar a complicações cardiovasculares.",
  },
  {
    name: "Enxaqueca",
    symptoms: ["dor de cabeça intensa", "sensibilidade à luz", "náusea", "vômito", "visão turva"],
    description: "Tipo de dor de cabeça recorrente que pode causar dor intensa e outros sintomas.",
  },
  {
    name: "Ansiedade",
    symptoms: ["nervosismo", "preocupação excessiva", "taquicardia", "sudorese"],
    description: "Transtorno de ansiedade caracterizado por preocupação excessiva e medo.",
  },
  {
    name: "Depressão",
    symptoms: ["tristeza persistente", "perda de interesse", "fadiga", "dificuldade de concentração"],
    description: "Transtorno de humor que causa sentimentos persistentes de tristeza e perda de interesse.",
  },
  {
    name: "Anemia",
    symptoms: ["fadiga", "fraqueza", "palidez", "falta de ar"],
    description: "Condição em que há uma redução na quantidade de glóbulos vermelhos ou hemoglobina no sangue.",
  },
  {
    name: "Insuficiência Cardíaca",
    symptoms: ["falta de ar", "inchaço nas pernas", "fadiga", "batimentos cardíacos irregulares"],
    description: "Condição em que o coração não consegue bombear sangue de forma eficiente.",
  },
  {
    name: "Infarto Agudo do Miocárdio",
    symptoms: ["dor no peito", "falta de ar", "suor frio", "náusea"],
    description: "Bloqueio do fluxo sanguíneo para o coração, causando danos ao músculo cardíaco.",
  },
  {
    name: "AVC (Acidente Vascular Cerebral)",
    symptoms: ["dificuldade para falar", "fraqueza em um lado do corpo", "perda de visão", "dor de cabeça intensa"],
    description: "Interrupção do fluxo sanguíneo para o cérebro, causando danos neurológicos.",
  },
  {
    name: "Hepatite",
    symptoms: ["fadiga", "icterícia", "dor abdominal", "náusea"],
    description: "Inflamação do fígado, geralmente causada por uma infecção viral.",
  },
  {
    name: "Dengue",
    symptoms: ["febre alta", "dor muscular", "dor nas articulações", "erupções cutâneas"],
    description: "Doença viral transmitida por mosquitos que causa sintomas semelhantes aos da gripe.",
  },
  {
    name: "Zika",
    symptoms: ["febre leve", "erupções cutâneas", "dor nas articulações", "conjuntivite"],
    description: "Doença viral transmitida por mosquitos que pode causar complicações em grávidas.",
  },
  {
    name: "Chikungunya",
    symptoms: ["febre", "dor intensa nas articulações", "erupções cutâneas", "fadiga"],
    description: "Doença viral transmitida por mosquitos que causa dor articular severa.",
  },
  {
    name: "Malária",
    symptoms: ["febre alta", "calafrios", "sudorese", "dor de cabeça"],
    description: "Doença parasitária transmitida por mosquitos que causa sintomas graves.",
  },
  {
    name: "Tuberculose",
    symptoms: ["tosse persistente", "febre", "suor noturno", "perda de peso"],
    description: "Doença infecciosa que afeta principalmente os pulmões.",
  },
  {
    name: "Artrite Reumatoide",
    symptoms: ["dor nas articulações", "inchaço nas articulações", "rigidez matinal", "fadiga"],
    description: "Doença autoimune que causa inflamação crônica das articulações.",
  },
  {
    name: "Lúpus",
    symptoms: ["fadiga", "erupções cutâneas", "dor nas articulações", "febre"],
    description: "Doença autoimune que pode afetar múltiplos órgãos e tecidos.",
  },
  {
    name: "Fibromialgia",
    symptoms: ["dor muscular generalizada", "fadiga", "distúrbios do sono", "dificuldade de concentração"],
    description: "Condição crônica que causa dor generalizada e sensibilidade muscular.",
  },
  {
    name: "Osteoporose",
    symptoms: ["fraturas frequentes", "dor nas costas", "perda de altura", "postura curvada"],
    description: "Condição em que os ossos se tornam frágeis e quebradiços.",
  },
  {
    name: "Câncer de Pulmão",
    symptoms: ["tosse persistente", "dor no peito", "falta de ar", "perda de peso inexplicável"],
    description: "Tipo de câncer que começa nos pulmões e pode se espalhar para outras partes do corpo.",
  },
  {
    name: "Câncer de Mama",
    symptoms: ["nódulo na mama", "mudanças na pele da mama", "dor na mama", "secreção mamilar"],
    description: "Tipo de câncer que se forma nas células da mama.",
  },
  {
    name: "Câncer de Próstata",
    symptoms: ["dificuldade para urinar", "sangue na urina", "dor pélvica", "disfunção erétil"],
    description: "Tipo de câncer que afeta a próstata, uma glândula do sistema reprodutor masculino.",
  },
  {
    name: "HIV/AIDS",
    symptoms: ["febre", "fadiga", "perda de peso", "erupções cutâneas"],
    description: "Doença viral que afeta o sistema imunológico, levando à imunodeficiência.",
  },
  {
    name: "Hipotireoidismo",
    symptoms: ["fadiga", "ganho de peso", "sensibilidade ao frio", "constipação"],
    description: "Condição em que a glândula tireoide não produz hormônios suficientes.",
  },
  {
    name: "Hipertireoidismo",
    symptoms: ["perda de peso", "taquicardia", "nervosismo", "sudorese excessiva"],
    description: "Condição em que a glândula tireoide produz hormônios em excesso.",
  },
  {
    name: "Doença de Parkinson",
    symptoms: ["tremores", "rigidez muscular", "lentidão de movimentos", "dificuldade de equilíbrio"],
    description: "Doença neurodegenerativa que afeta o movimento.",
  },
  {
    name: "Alzheimer",
    symptoms: ["perda de memória", "dificuldade de raciocínio", "confusão mental", "mudanças de personalidade"],
    description: "Doença neurodegenerativa que causa perda progressiva de memória e função cognitiva.",
  },
  {
    name: "Esclerose Múltipla",
    symptoms: ["fadiga", "dificuldade para andar", "fraqueza muscular", "visão turva"],
    description: "Doença autoimune que afeta o sistema nervoso central.",
  },
  {
    name: "Epilepsia",
    symptoms: ["convulsões", "perda de consciência", "confusão mental", "movimentos involuntários"],
    description: "Transtorno neurológico caracterizado por convulsões recorrentes.",
  },
  {
    name: "Doença de Crohn",
    symptoms: ["dor abdominal", "diarreia", "fadiga", "perda de peso"],
    description: "Doença inflamatória intestinal que afeta o trato gastrointestinal.",
  },
  {
    name: "Colite Ulcerativa",
    symptoms: ["diarreia com sangue", "dor abdominal", "fadiga", "perda de peso"],
    description: "Doença inflamatória intestinal que afeta o cólon e o reto.",
  },
  {
    name: "Doença Celíaca",
    symptoms: ["diarreia", "inchaço abdominal", "fadiga", "perda de peso"],
    description: "Doença autoimune desencadeada pela ingestão de glúten.",
  },
  {
    name: "Doença de Lyme",
    symptoms: ["erupção cutânea", "febre", "fadiga", "dor nas articulações"],
    description: "Doença bacteriana transmitida por carrapatos.",
  },
  {
    name: "Doença de Chagas",
    symptoms: ["febre", "fadiga", "inchaço no local da picada", "dor no corpo"],
    description: "Doença parasitária transmitida por insetos.",
  },
  {
    name: "Leucemia",
    symptoms: ["fadiga", "febre", "perda de peso", "sangramento fácil"],
    description: "Tipo de câncer que afeta as células sanguíneas.",
  },
  {
    name: "Linfoma",
    symptoms: ["inchaço dos gânglios linfáticos", "fadiga", "perda de peso", "suor noturno"],
    description: "Tipo de câncer que afeta o sistema linfático.",
  },
  {
    name: "Melanoma",
    symptoms: ["mudanças na pele", "nódulos na pele", "feridas que não cicatrizam", "coceira"],
    description: "Tipo de câncer de pele que se origina nos melanócitos.",
  },
  {
    name: "Psoríase",
    symptoms: ["placas vermelhas na pele", "descamação", "coceira", "dor nas articulações"],
    description: "Doença autoimune que causa inflamação e descamação da pele.",
  },
  {
    name: "Eczema",
    symptoms: ["coceira", "vermelhidão na pele", "descamação", "inflamação"],
    description: "Condição inflamatória da pele que causa coceira e irritação.",
  },
  {
    name: "Doença Renal Crônica",
    symptoms: ["fadiga", "inchaço nas pernas", "falta de ar", "náusea"],
    description: "Condição em que os rins perdem gradualmente sua função.",
  },
  {
    name: "Pedras nos Rins",
    symptoms: ["dor intensa no abdômen", "sangue na urina", "náusea", "vômito"],
    description: "Formação de cristais sólidos nos rins que podem causar dor intensa.",
  },
  {
    name: "Gota",
    symptoms: ["dor intensa nas articulações", "inchaço", "vermelhidão", "calor na articulação"],
    description: "Tipo de artrite causada pelo acúmulo de ácido úrico nas articulações.",
  },
  {
    name: "Doença de Paget",
    symptoms: ["dor óssea", "deformidades ósseas", "fraturas", "perda de audição"],
    description: "Doença que afeta a remodelação óssea, levando a deformidades e fraturas.",
  },
  {
    name: "Doença de Huntington",
    symptoms: ["movimentos involuntários", "dificuldade de raciocínio", "mudanças de personalidade", "depressão"],
    description: "Doença neurodegenerativa que causa movimentos involuntários e declínio cognitivo.",
  },
  {
    name: "Doença de Graves",
    symptoms: ["perda de peso", "taquicardia", "nervosismo", "olhos saltados"],
    description: "Doença autoimune que causa hipertireoidismo.",
  },
  {
    name: "Doença de Addison",
    symptoms: ["fadiga", "perda de peso", "escurecimento da pele", "hipotensão"],
    description: "Condição em que as glândulas adrenais não produzem hormônios suficientes.",
  },
  {
    name: "Doença de Cushing",
    symptoms: ["ganho de peso", "rosto arredondado", "estrias na pele", "hipertensão"],
    description: "Condição causada pelo excesso de cortisol no corpo.",
  },
  {
    name: "Doença de Wilson",
    symptoms: ["fadiga", "icterícia", "tremores", "dificuldade de deglutição"],
    description: "Doença genética que causa acúmulo de cobre no corpo.",
  },
  {
    name: "Doença de Kawasaki",
    symptoms: ["febre alta", "erupções cutâneas", "inchaço das mãos e pés", "vermelhidão nos olhos"],
    description: "Doença que causa inflamação dos vasos sanguíneos, principalmente em crianças.",
  },
  {
    name: "Doença de Behçet",
    symptoms: ["úlceras na boca", "úlceras genitais", "inflamação ocular", "erupções cutâneas"],
    description: "Doença rara que causa inflamação dos vasos sanguíneos.",
  },
  {
    name: "Doença de Raynaud",
    symptoms: ["dedos das mãos e pés frios", "mudança de cor nas extremidades", "dor", "formigamento"],
    description: "Condição que afeta o fluxo sanguíneo para as extremidades.",
  },
  {
    name: "Doença de Menière",
    symptoms: ["vertigem", "zumbido no ouvido", "perda auditiva", "náusea"],
    description: "Doença que afeta o ouvido interno, causando vertigem e perda auditiva.",
  },
];