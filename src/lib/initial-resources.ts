import type { Resource } from "./types"

const categoryMap: Record<string, string> = {
  "Research Institutes": "Institutos de Pesquisa",
  "Legal Databases": "Bases de Dados Jurídicas",
  "Teaching Materials": "Materiais Didáticos",
  "Treaties and Diplomatic Documents": "Tratados e Documentos Diplomáticos",
  "International Courts and Jurisprudence": "Tribunais Internacionais e Jurisprudência",
  "Academic Journals": "Revistas Acadêmicas",
  "International Organizations": "Organizações Internacionais",
  "History of International Law": "História do Direito Internacional",
  "International Law Foundations": "Fundamentos do Direito Internacional"
}

const typeMap: Record<string, string> = {
  "Library": "Biblioteca",
  "Database": "Base de Dados",
  "Educational Resource": "Recurso Educacional",
  "Treaty Collection": "Coleção de Tratados",
  "Research Institute": "Instituto de Pesquisa",
  "Court": "Tribunal",
  "Journal": "Revista",
  "Organization": "Organização",
  "Digital Archive": "Arquivo Digital"
}

export const INITIAL_RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Peace Palace Library",
    institution: "Peace Palace",
    category: categoryMap["Research Institutes"],
    type: typeMap["Library"],
    description: "Uma das principais bibliotecas do mundo em direito internacional e áreas relacionadas, localizada em Haia.",
    link: "https://www.peacepalacelibrary.nl",
    keywords: ["biblioteca", "pesquisa", "direito internacional", "Haia"]
  },
  {
    id: "2",
    title: "HeinOnline",
    institution: "William S. Hein & Co.",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Base de dados abrangente de periódicos jurídicos, tratados, jurisprudência e documentos jurídicos históricos.",
    link: "https://heinonline.org",
    keywords: ["base de dados", "periódicos", "tratados", "jurisprudência"]
  },
  {
    id: "3",
    title: "UN Audiovisual Library of International Law",
    institution: "United Nations",
    category: categoryMap["Teaching Materials"],
    type: typeMap["Educational Resource"],
    description: "Recurso educacional que oferece palestras, guias de pesquisa e arquivos históricos sobre direito internacional.",
    link: "https://legal.un.org/avl",
    keywords: ["educação", "palestras", "ONU", "treinamento"]
  },
  {
    id: "4",
    title: "United Nations Treaty Collection",
    institution: "United Nations",
    category: categoryMap["Treaties and Diplomatic Documents"],
    type: typeMap["Treaty Collection"],
    description: "Base de dados abrangente de tratados multilaterais depositados junto ao Secretário-Geral da ONU.",
    link: "https://treaties.un.org",
    keywords: ["tratados", "ONU", "multilateral", "convenções"]
  },
  {
    id: "5",
    title: "Max Planck Institute for Comparative Public Law and International Law",
    institution: "Max Planck Society",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituição líder em pesquisa com foco em direito internacional público e direito público comparado.",
    link: "https://www.mpil.de",
    keywords: ["pesquisa", "direito comparado", "Alemanha", "Max Planck"]
  },
  {
    id: "6",
    title: "Hague Academy of International Law",
    institution: "Hague Academy",
    category: categoryMap["Teaching Materials"],
    type: typeMap["Educational Resource"],
    description: "Instituição de excelência para ensino e pesquisa em direito internacional, oferecendo cursos de verão e publicações.",
    link: "https://www.hagueacademy.nl",
    keywords: ["academia", "cursos", "ensino", "Haia"]
  },
  {
    id: "7",
    title: "Lauterpacht Centre for International Law",
    institution: "University of Cambridge",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro de pesquisa em Cambridge dedicado à pesquisa e ensino de direito internacional.",
    link: "https://www.lcil.cam.ac.uk",
    keywords: ["Cambridge", "pesquisa", "bolsa de estudos", "Reino Unido"]
  },
  {
    id: "8",
    title: "International Court of Justice",
    institution: "United Nations",
    category: categoryMap["International Courts and Jurisprudence"],
    type: typeMap["Court"],
    description: "Principal órgão judicial das Nações Unidas, resolvendo disputas legais entre Estados.",
    link: "https://www.icj-cij.org",
    keywords: ["CIJ", "tribunal", "ONU", "disputas", "sentenças"]
  },
  {
    id: "9",
    title: "International Criminal Court",
    institution: "ICC",
    category: categoryMap["International Courts and Jurisprudence"],
    type: typeMap["Court"],
    description: "Tribunal permanente para processar indivíduos por crimes internacionais, incluindo genocídio e crimes de guerra.",
    link: "https://www.icc-cpi.int",
    keywords: ["TPI", "direito penal", "genocídio", "crimes de guerra"]
  },
  {
    id: "10",
    title: "American Journal of International Law",
    institution: "American Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Principal publicação trimestral cobrindo todos os aspectos do direito internacional.",
    link: "https://www.cambridge.org/core/journals/american-journal-of-international-law",
    keywords: ["revista", "AJIL", "pesquisa acadêmica", "trimestral"]
  },
  {
    id: "11",
    title: "European Journal of International Law",
    institution: "European Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista de destaque para análises críticas e sofisticadas de direito internacional.",
    link: "https://academic.oup.com/ejil",
    keywords: ["revista", "EJIL", "Europa", "pesquisa acadêmica"]
  },
  {
    id: "12",
    title: "International Legal Materials",
    institution: "American Society of International Law",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Coleção de documentos de fontes primárias em direito internacional, incluindo tratados e decisões judiciais.",
    link: "https://www.cambridge.org/core/journals/international-legal-materials",
    keywords: ["fontes primárias", "tratados", "decisões judiciais"]
  },
  {
    id: "13",
    title: "World Trade Organization Legal Texts",
    institution: "World Trade Organization",
    category: categoryMap["Treaties and Diplomatic Documents"],
    type: typeMap["Treaty Collection"],
    description: "Coleção completa de acordos e instrumentos jurídicos da OMC que regem o comércio internacional.",
    link: "https://www.wto.org/english/docs_e/legal_e/legal_e.htm",
    keywords: ["OMC", "direito comercial", "acordos"]
  },
  {
    id: "14",
    title: "International Law Commission",
    institution: "United Nations",
    category: categoryMap["International Organizations"],
    type: typeMap["Organization"],
    description: "Órgão da ONU que promove o desenvolvimento progressivo e a codificação do direito internacional.",
    link: "https://legal.un.org/ilc",
    keywords: ["CDI", "ONU", "codificação", "desenvolvimento"]
  },
  {
    id: "15",
    title: "Yearbook of International Law Commission",
    institution: "United Nations",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual documentando o trabalho e relatórios da Comissão de Direito Internacional.",
    link: "https://legal.un.org/ilc/publications/yearbooks.shtml",
    keywords: ["anuário", "CDI", "codificação"]
  },
  {
    id: "16",
    title: "Hugo Grotius in International Law",
    institution: "Oxford Bibliographies",
    category: categoryMap["History of International Law"],
    type: typeMap["Digital Archive"],
    description: "Recurso abrangente sobre Hugo Grotius e suas contribuições fundamentais ao direito internacional.",
    link: "https://www.oxfordbibliographies.com",
    keywords: ["Grotius", "história", "fundamentos", "direito natural"]
  },
  {
    id: "17",
    title: "Leiden Journal of International Law",
    institution: "Cambridge University Press",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista focada em novas abordagens do direito internacional a partir de perspectivas críticas e interdisciplinares.",
    link: "https://www.cambridge.org/core/journals/leiden-journal-of-international-law",
    keywords: ["revista", "Leiden", "teoria crítica"]
  },
  {
    id: "18",
    title: "Oxford Reports on International Law",
    institution: "Oxford University Press",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Plataforma de pesquisa abrangente cobrindo direito internacional em tribunais nacionais e internacionais.",
    link: "https://opil.ouplaw.com/home/oril",
    keywords: ["Oxford", "jurisprudência", "jurisprudência"]
  },
  {
    id: "19",
    title: "Permanent Court of Arbitration",
    institution: "PCA",
    category: categoryMap["International Courts and Jurisprudence"],
    type: typeMap["Court"],
    description: "Organização intergovernamental que oferece serviços de arbitragem para disputas envolvendo Estados e partes.",
    link: "https://pca-cpa.org",
    keywords: ["arbitragem", "CPA", "disputas", "Haia"]
  },
  {
    id: "20",
    title: "Geneva Academy of International Humanitarian Law and Human Rights",
    institution: "Geneva Academy",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro líder em educação, pesquisa e debate em direito internacional humanitário e direitos humanos.",
    link: "https://www.geneva-academy.ch",
    keywords: ["direito humanitário", "direitos humanos", "Genebra"]
  },
  {
    id: "21",
    title: "International Committee of the Red Cross Database",
    institution: "ICRC",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Base de dados abrangente sobre direito internacional humanitário, incluindo tratados e direito costumeiro.",
    link: "https://www.icrc.org/en/war-and-law",
    keywords: ["direito humanitário", "CICV", "Convenções de Genebra"]
  },
  {
    id: "22",
    title: "Vienna Convention on the Law of Treaties",
    institution: "United Nations",
    category: categoryMap["International Law Foundations"],
    type: typeMap["Treaty Collection"],
    description: "Tratado fundamental que estabelece regras fundamentais para o direito internacional dos tratados.",
    link: "https://legal.un.org/ilc/texts/instruments/english/conventions/1_1_1969.pdf",
    keywords: ["Convenção de Viena", "tratados", "fundamentos"]
  },
  {
    id: "23",
    title: "European Court of Human Rights",
    institution: "Council of Europe",
    category: categoryMap["International Courts and Jurisprudence"],
    type: typeMap["Court"],
    description: "Tribunal internacional que julga petições individuais ou estatais alegando violações de direitos humanos.",
    link: "https://www.echr.coe.int",
    keywords: ["TEDH", "direitos humanos", "Europa", "Estrasburgo"]
  },
  {
    id: "24",
    title: "Inter-American Court of Human Rights",
    institution: "Organization of American States",
    type: typeMap["Court"],
    category: categoryMap["International Courts and Jurisprudence"],
    description: "Instituição judicial com jurisdição sobre violações de direitos humanos nas Américas.",
    link: "https://www.corteidh.or.cr",
    keywords: ["Corte IDH", "direitos humanos", "Américas", "OEA"]
  },
  {
    id: "25",
    title: "African Court on Human and Peoples' Rights",
    institution: "African Union",
    category: categoryMap["International Courts and Jurisprudence"],
    type: typeMap["Court"],
    description: "Tribunal continental que garante a proteção dos direitos humanos e dos povos na África.",
    link: "https://www.african-court.org",
    keywords: ["Tribunal Africano", "direitos humanos", "África"]
  },
  {
    id: "26",
    title: "International Tribunal for the Law of the Sea",
    institution: "ITLOS",
    category: categoryMap["International Courts and Jurisprudence"],
    type: typeMap["Court"],
    description: "Órgão judicial independente estabelecido para julgar disputas decorrentes da Convenção do Direito do Mar.",
    link: "https://www.itlos.org",
    keywords: ["TIDM", "direito marítimo", "CNUDM"]
  },
  {
    id: "27",
    title: "UN Charter",
    institution: "United Nations",
    category: categoryMap["International Law Foundations"],
    type: typeMap["Treaty Collection"],
    description: "Tratado fundador das Nações Unidas que estabelece princípios fundamentais das relações internacionais.",
    link: "https://www.un.org/en/about-us/un-charter",
    keywords: ["Carta da ONU", "fundamentos", "relações internacionais"]
  },
  {
    id: "28",
    title: "Geneva Conventions and Additional Protocols",
    institution: "ICRC",
    category: categoryMap["International Law Foundations"],
    type: typeMap["Treaty Collection"],
    description: "Tratados centrais do direito internacional humanitário que protegem vítimas de conflitos armados.",
    link: "https://www.icrc.org/en/doc/war-and-law/treaties-customary-law/geneva-conventions",
    keywords: ["Convenções de Genebra", "direito humanitário", "conflito armado"]
  },
  {
    id: "29",
    title: "Rome Statute of the International Criminal Court",
    institution: "International Criminal Court",
    category: categoryMap["International Law Foundations"],
    type: typeMap["Treaty Collection"],
    description: "Tratado que estabeleceu o Tribunal Penal Internacional e define sua jurisdição.",
    link: "https://www.icc-cpi.int/resource-library/documents/rs-eng.pdf",
    keywords: ["Estatuto de Roma", "TPI", "direito penal"]
  },
  {
    id: "30",
    title: "Recueil des Cours (Collected Courses)",
    institution: "Hague Academy of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Prestigiosa série de publicações contendo palestras ministradas na Academia de Haia.",
    link: "https://www.brill.com/view/serial/HARC",
    keywords: ["Recueil", "palestras", "Academia de Haia"]
  },
  {
    id: "31",
    title: "Max Planck Encyclopedia of Public International Law",
    institution: "Oxford University Press",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Enciclopédia online abrangente cobrindo todos os aspectos do direito internacional público.",
    link: "https://opil.ouplaw.com/home/mpil",
    keywords: ["enciclopédia", "Max Planck", "referência"]
  },
  {
    id: "32",
    title: "British Yearbook of International Law",
    institution: "Oxford University Press",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual contendo artigos acadêmicos e documentos sobre direito internacional.",
    link: "https://academic.oup.com/bybil",
    keywords: ["anuário", "britânico", "pesquisa acadêmica"]
  },
  {
    id: "33",
    title: "International Organizations Law Review",
    institution: "Brill",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista dedicada ao direito e prática de organizações internacionais.",
    link: "https://brill.com/view/journals/iolr/iolr-overview.xml",
    keywords: ["organizações internacionais", "direito institucional"]
  },
  {
    id: "34",
    title: "Dag Hammarskjöld Library",
    institution: "United Nations",
    category: categoryMap["Legal Databases"],
    type: typeMap["Library"],
    description: "Biblioteca da ONU que fornece acesso a documentos, resoluções e materiais jurídicos.",
    link: "https://library.un.org",
    keywords: ["ONU", "biblioteca", "documentos", "resoluções"]
  },
  {
    id: "35",
    title: "International Law Association",
    institution: "ILA",
    category: categoryMap["International Organizations"],
    type: typeMap["Organization"],
    description: "Organização global que estuda, esclarece e desenvolve o direito internacional por meio de comitês e conferências.",
    link: "https://www.ila-hq.org",
    keywords: ["ILA", "pesquisa acadêmica", "desenvolvimento"]
  },
  {
    id: "36",
    title: "American Society of International Law",
    institution: "ASIL",
    category: categoryMap["International Organizations"],
    type: typeMap["Organization"],
    description: "Associação profissional que promove o estudo e uso do direito internacional.",
    link: "https://www.asil.org",
    keywords: ["ASIL", "profissional", "pesquisa acadêmica"]
  },
  {
    id: "37",
    title: "European Society of International Law",
    institution: "ESIL",
    category: categoryMap["International Organizations"],
    type: typeMap["Organization"],
    description: "Associação acadêmica que promove pesquisa e estudo de direito internacional na Europa.",
    link: "https://www.esil-sedi.eu",
    keywords: ["ESIL", "Europa", "acadêmico"]
  },
  {
    id: "38",
    title: "International Law Reports",
    institution: "Cambridge University Press",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Série de longa data relatando decisões de tribunais internacionais e nacionais sobre direito internacional.",
    link: "https://www.cambridge.org/core/series/international-law-reports",
    keywords: ["jurisprudência", "relatórios", "jurisprudência"]
  },
  {
    id: "39",
    title: "Law of the Sea Convention (UNCLOS)",
    institution: "United Nations",
    category: categoryMap["International Law Foundations"],
    type: typeMap["Treaty Collection"],
    description: "Tratado abrangente que estabelece estrutura jurídica para todas as atividades marinhas e marítimas.",
    link: "https://www.un.org/depts/los/convention_agreements/convention_overview_convention.htm",
    keywords: ["CNUDM", "direito marítimo", "direito do mar"]
  },
  {
    id: "40",
    title: "Universal Declaration of Human Rights",
    institution: "United Nations",
    category: categoryMap["International Law Foundations"],
    type: typeMap["Treaty Collection"],
    description: "Documento marco que proclama os direitos inalienáveis de todos os seres humanos.",
    link: "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
    keywords: ["DUDH", "direitos humanos", "fundamentos"]
  },
  {
    id: "41",
    title: "Erik Castrén Institute of International Law and Human Rights",
    institution: "University of Helsinki",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituto de pesquisa focado em direito internacional, direito dos direitos humanos e direito da UE.",
    link: "https://www.helsinki.fi/en/networks/erik-castren-institute",
    keywords: ["Finlândia", "pesquisa", "direitos humanos"]
  },
  {
    id: "42",
    title: "Transnational Law Institute",
    institution: "King's College London",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro de pesquisa que examina fenômenos jurídicos transnacionais e governança global.",
    link: "https://www.kcl.ac.uk/law/research/centres/transnational-law-institute",
    keywords: ["direito transnacional", "governança", "Londres"]
  },
  {
    id: "43",
    title: "International Criminal Tribunal for the Former Yugoslavia Archive",
    institution: "United Nations",
    category: categoryMap["History of International Law"],
    type: typeMap["Digital Archive"],
    description: "Arquivo completo de procedimentos, julgamentos e documentos do TPII.",
    link: "https://www.icty.org",
    keywords: ["TPII", "Iugoslávia", "direito penal", "arquivo"]
  },
  {
    id: "44",
    title: "International Criminal Tribunal for Rwanda Archive",
    institution: "United Nations",
    category: categoryMap["History of International Law"],
    type: typeMap["Digital Archive"],
    description: "Arquivo documentando o trabalho do tribunal no julgamento de genocídio e crimes em Ruanda.",
    link: "https://unictr.irmct.org",
    keywords: ["TPIR", "Ruanda", "genocídio", "arquivo"]
  },
  {
    id: "45",
    title: "Nuremberg Trials Project",
    institution: "Harvard Law School",
    category: categoryMap["History of International Law"],
    type: typeMap["Digital Archive"],
    description: "Coleção digital de documentos, transcrições de julgamentos e evidências dos julgamentos de Nuremberg.",
    link: "http://nuremberg.law.harvard.edu",
    keywords: ["Nuremberg", "crimes de guerra", "história"]
  },
  {
    id: "46",
    title: "Francisco de Vitoria Digital Collection",
    institution: "Universidad de Salamanca",
    category: categoryMap["History of International Law"],
    type: typeMap["Digital Archive"],
    description: "Arquivo digital de obras de Francisco de Vitoria, fundador da teoria do direito internacional.",
    link: "https://www.usal.es",
    keywords: ["Vitoria", "Escola Espanhola", "história", "fundamentos"]
  },
  {
    id: "47",
    title: "World Court Digest",
    institution: "Cambridge University Press",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Compêndio sistemático da jurisprudência da Corte Internacional de Justiça.",
    link: "https://www.cambridge.org/core/series/world-court-digest",
    keywords: ["CIJ", "compêndio", "jurisprudência"]
  },
  {
    id: "48",
    title: "International Humanitarian Law Databases",
    institution: "ICRC",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Bases de dados abrangentes sobre tratados, direito internacional humanitário costumeiro e prática estatal.",
    link: "https://ihl-databases.icrc.org",
    keywords: ["DIH", "direito costumeiro", "CICV"]
  },
  {
    id: "49",
    title: "European Treaty Series",
    institution: "Council of Europe",
    category: categoryMap["Treaties and Diplomatic Documents"],
    type: typeMap["Treaty Collection"],
    description: "Coleção completa de tratados desenvolvidos no âmbito do Conselho da Europa.",
    link: "https://www.coe.int/en/web/conventions/full-list",
    keywords: ["Conselho da Europa", "tratados", "Europa"]
  },
  {
    id: "50",
    title: "Organization of American States Treaty Collection",
    institution: "OAS",
    category: categoryMap["Treaties and Diplomatic Documents"],
    type: typeMap["Treaty Collection"],
    description: "Base de dados de tratados e convenções interamericanos.",
    link: "http://www.oas.org/en/sla/dil/inter_american_treaties.asp",
    keywords: ["OEA", "Américas", "tratados"]
  },
  {
    id: "51",
    title: "African Union Treaties Database",
    institution: "African Union",
    category: categoryMap["Treaties and Diplomatic Documents"],
    type: typeMap["Treaty Collection"],
    description: "Coleção de convenções, protocolos e instrumentos jurídicos da União Africana.",
    link: "https://au.int/en/treaties",
    keywords: ["União Africana", "tratados", "África"]
  },
  {
    id: "52",
    title: "Asian-African Legal Consultative Organization",
    institution: "AALCO",
    category: categoryMap["International Organizations"],
    type: typeMap["Organization"],
    description: "Organização internacional que atua como órgão consultivo para Estados membros em questões de direito internacional.",
    link: "https://www.aalco.int",
    keywords: ["AALCO", "Ásia", "África", "consultivo"]
  },
  {
    id: "53",
    title: "Institute for International Law and Justice",
    institution: "New York University",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro de pesquisa que examina governança global, direito internacional e design institucional.",
    link: "https://www.iilj.org",
    keywords: ["NYU", "governança global", "justiça"]
  },
  {
    id: "54",
    title: "Journal of International Criminal Justice",
    institution: "Oxford University Press",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista líder abordando questões de direito e justiça criminal internacional e nacional.",
    link: "https://academic.oup.com/jicj",
    keywords: ["justiça criminal", "TPI", "tribunais"]
  },
  {
    id: "55",
    title: "Melbourne Journal of International Law",
    institution: "University of Melbourne",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista revisada por pares que publica pesquisa sobre direito internacional a partir de perspectivas diversas.",
    link: "https://law.unimelb.edu.au/centres/cils/research/publications/melbourne-journal-of-international-law",
    keywords: ["Austrália", "revista", "pesquisa acadêmica"]
  },
  {
    id: "56",
    title: "Chinese Journal of International Law",
    institution: "Oxford University Press",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista que promove a compreensão do direito internacional a partir de perspectivas chinesas e asiáticas.",
    link: "https://academic.oup.com/chinesejil",
    keywords: ["China", "Ásia", "perspectiva"]
  },
  {
    id: "57",
    title: "Grotius Centre for International Legal Studies",
    institution: "Leiden University",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro de pesquisa líder cobrindo direito internacional público, direito penal internacional e direitos humanos.",
    link: "https://www.universiteitleiden.nl/en/law/institute-of-public-law/grotius-centre",
    keywords: ["Leiden", "Grotius", "Holanda"]
  },
  {
    id: "58",
    title: "Questions of International Law",
    institution: "Zoom",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista de acesso aberto apresentando debates acadêmicos sobre questões contemporâneas de direito internacional.",
    link: "http://www.qil-qdi.org",
    keywords: ["acesso aberto", "debates", "contemporâneo"]
  },
  {
    id: "59",
    title: "International Law in Domestic Courts Database",
    institution: "Oxford University Press",
    category: categoryMap["Legal Databases"],
    type: typeMap["Database"],
    description: "Base de dados que rastreia como tribunais nacionais ao redor do mundo aplicam o direito internacional.",
    link: "https://opil.ouplaw.com/home/ildc",
    keywords: ["tribunais nacionais", "implementação nacional"]
  },
  {
    id: "60",
    title: "WTO Dispute Settlement",
    institution: "World Trade Organization",
    category: categoryMap["International Courts and Jurisprudence"],
    type: typeMap["Court"],
    description: "Mecanismo central para resolução de disputas comerciais entre membros da OMC.",
    link: "https://www.wto.org/english/tratop_e/dispu_e/dispu_e.htm",
    keywords: ["OMC", "disputas comerciais", "relatórios de painéis"]
  },
  {
    id: "61",
    title: "International Centre for Settlement of Investment Disputes",
    institution: "World Bank",
    category: categoryMap["International Courts and Jurisprudence"],
    type: typeMap["Court"],
    description: "Instituição internacional líder em arbitragem para disputas de investimento.",
    link: "https://icsid.worldbank.org",
    keywords: ["CIADI", "investimento", "arbitragem"]
  },
  {
    id: "62",
    title: "International Law and Politics",
    institution: "New York University",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista editada por estudantes que publica pesquisa de ponta em direito internacional.",
    link: "https://www.nyuilp.org",
    keywords: ["NYU", "revista estudantil", "pesquisa acadêmica"]
  },
  {
    id: "63",
    title: "Teaching International Law",
    institution: "ASIL",
    category: categoryMap["Teaching Materials"],
    type: typeMap["Educational Resource"],
    description: "Centro de recursos fornecendo materiais didáticos, programas de curso e abordagens pedagógicas.",
    link: "https://www.asil.org/resources/teaching-international-law",
    keywords: ["ensino", "pedagogia", "programas"]
  },
  {
    id: "64",
    title: "Jessup Moot Court Competition Resources",
    institution: "ILSA",
    category: categoryMap["Teaching Materials"],
    type: typeMap["Educational Resource"],
    description: "Materiais e recursos para a maior competição de tribunal simulado do mundo em direito internacional.",
    link: "https://www.ilsa.org/jessuphome",
    keywords: ["tribunal simulado", "competição", "estudantes"]
  },
  {
    id: "65",
    title: "International Law Observer",
    institution: "Independent",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação em estilo de blog com comentários oportunos sobre desenvolvimentos em direito internacional.",
    link: "https://www.international-law-observer.eu",
    keywords: ["blog", "comentário", "eventos atuais"]
  },
  {
    id: "66",
    title: "Opinio Juris",
    institution: "Independent",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Principal blog de direito internacional com comentários especializados sobre questões contemporâneas.",
    link: "http://opiniojuris.org",
    keywords: ["blog", "comentário especializado", "debate"]
  },
  {
    id: "67",
    title: "EJIL:Talk!",
    institution: "European Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Blog do European Journal of International Law com discussão acadêmica.",
    link: "https://www.ejiltalk.org",
    keywords: ["blog", "EJIL", "discussão"]
  },
  {
    id: "68",
    title: "International Organizations Research Guide",
    institution: "Peace Palace Library",
    category: categoryMap["Teaching Materials"],
    type: typeMap["Educational Resource"],
    description: "Guia de pesquisa abrangente sobre organizações internacionais e suas estruturas jurídicas.",
    link: "https://www.peacepalacelibrary.nl/research-guides/international-organizations",
    keywords: ["guia de pesquisa", "organizações", "recursos"]
  },
  {
    id: "69",
    title: "Historical Foundations of International Law Collection",
    institution: "Oxford Public International Law",
    category: categoryMap["History of International Law"],
    type: typeMap["Digital Archive"],
    description: "Coleção digital documentando o desenvolvimento histórico do direito internacional.",
    link: "https://opil.ouplaw.com",
    keywords: ["história", "fundamentos", "desenvolvimento"]
  },
  {
    id: "70",
    title: "League of Nations Archives",
    institution: "United Nations",
    category: categoryMap["History of International Law"],
    type: typeMap["Digital Archive"],
    description: "Arquivos históricos da Liga das Nações documentando a cooperação internacional inicial.",
    link: "https://www.unog.ch/80256EDD006B8954/(httpAssets)/C48086271BCF7783C1257AF3004FD8B3/$file/Historical_overview_of_the_League_of_Nations.pdf",
    keywords: ["Liga das Nações", "história", "arquivos"]
  },
  {
    id: "71",
    title: "Brazilian Journal of International Law (Revista Brasileira de Direito Internacional)",
    institution: "Universidade Federal do Paraná",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista acadêmica brasileira líder que publica pesquisas sobre direito internacional em português e inglês.",
    link: "https://revistas.ufpr.br/dint",
    keywords: ["Brasil", "português", "América Latina", "regional"]
  },
  {
    id: "72",
    title: "Mexican Yearbook of International Law (Anuario Mexicano de Derecho Internacional)",
    institution: "UNAM",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Prestigioso anuário que publica pesquisas em direito internacional a partir de perspectivas latino-americanas e globais.",
    link: "https://revistas.juridicas.unam.mx/index.php/derecho-internacional",
    keywords: ["México", "espanhol", "anuário", "América Latina"]
  },
  {
    id: "73",
    title: "Asian Journal of International Law",
    institution: "Asian Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista de destaque para pesquisa em direito internacional de e sobre a Ásia.",
    link: "https://www.cambridge.org/core/journals/asian-journal-of-international-law",
    keywords: ["Ásia", "regional", "perspectivas asiáticas"]
  },
  {
    id: "74",
    title: "African Journal of International and Comparative Law",
    institution: "Edinburgh University Press",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista dedicada ao direito internacional e comparado a partir de perspectivas africanas.",
    link: "https://www.euppublishing.com/loi/ajicl",
    keywords: ["África", "direito comparado", "regional"]
  },
  {
    id: "75",
    title: "Nordic Journal of International Law",
    institution: "Brill",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista cobrindo direito internacional com foco particular em perspectivas nórdicas e europeias.",
    link: "https://brill.com/view/journals/nord/nord-overview.xml",
    keywords: ["nórdico", "Escandinávia", "Europa", "regional"]
  },
  {
    id: "76",
    title: "Indian Journal of International Law",
    institution: "Indian Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação indiana líder sobre direito internacional, política externa e assuntos globais.",
    link: "https://www.isil-aca.org/publications/indian-journal-of-international-law",
    keywords: ["Índia", "Sul da Ásia", "regional"]
  },
  {
    id: "77",
    title: "Japanese Yearbook of International Law",
    institution: "Japan Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual apresentando pesquisa e perspectivas japonesas sobre direito internacional.",
    link: "https://www.cambridge.org/core/journals/japanese-yearbook-of-international-law",
    keywords: ["Japão", "anuário", "Ásia"]
  },
  {
    id: "78",
    title: "Revista Colombiana de Derecho Internacional",
    institution: "Pontificia Universidad Javeriana",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista colombiana que publica pesquisas em direito internacional a partir de perspectivas latino-americanas.",
    link: "https://revistas.javeriana.edu.co/index.php/internationallaw",
    keywords: ["Colômbia", "espanhol", "América Latina"]
  },
  {
    id: "79",
    title: "Argentinian Review of International Law (Anuario Argentino de Derecho Internacional)",
    institution: "Universidad Austral",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação acadêmica focada em direito internacional a partir de perspectivas argentinas e regionais.",
    link: "https://www.austral.edu.ar",
    keywords: ["Argentina", "espanhol", "América Latina"]
  },
  {
    id: "80",
    title: "South African Yearbook of International Law",
    institution: "University of Pretoria",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual examinando direito internacional com ênfase em questões e perspectivas africanas.",
    link: "https://journals.co.za/journal/ju_sayil",
    keywords: ["África do Sul", "África", "anuário"]
  },
  {
    id: "81",
    title: "Turkish Review of International Law",
    institution: "Turkish Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista promovendo perspectivas turcas e do Oriente Médio sobre direito internacional.",
    link: "https://www.tusev.org.tr",
    keywords: ["Turquia", "Oriente Médio", "regional"]
  },
  {
    id: "82",
    title: "Zeitschrift für ausländisches öffentliches Recht und Völkerrecht (Heidelberg Journal of International Law)",
    institution: "Max Planck Institute",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Distinta revista alemã cobrindo direito internacional público e direito público comparado.",
    link: "https://www.zaoerv.de",
    keywords: ["Alemanha", "alemão", "Heidelberg", "direito comparado"]
  },
  {
    id: "83",
    title: "Revue Générale de Droit International Public",
    institution: "Editions A. Pedone",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista francesa histórica que publica pesquisa sobre direito internacional público desde 1894.",
    link: "https://www.pedone.info/revues/rgdip",
    keywords: ["França", "francês", "histórico"]
  },
  {
    id: "84",
    title: "Netherlands International Law Review",
    institution: "T.M.C. Asser Instituut",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista holandesa cobrindo direito internacional, direito europeu e direito comparado.",
    link: "https://www.cambridge.org/core/journals/netherlands-international-law-review",
    keywords: ["Holanda", "holandês", "Europa"]
  },
  {
    id: "85",
    title: "Instituto Brasileiro de Direito Internacional (IBDI)",
    institution: "Brazilian Institute of International Law",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituto brasileiro líder dedicado à promoção do estudo e desenvolvimento do direito internacional.",
    link: "https://www.ibdi-blog.org",
    keywords: ["Brasil", "pesquisa", "português"]
  },
  {
    id: "86",
    title: "Instituto de Investigaciones Jurídicas - UNAM",
    institution: "Universidad Nacional Autónoma de México",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Principal instituto mexicano de pesquisa jurídica com extenso programa em direito internacional.",
    link: "https://www.juridicas.unam.mx",
    keywords: ["México", "pesquisa", "UNAM"]
  },
  {
    id: "87",
    title: "Indian Society of International Law",
    institution: "ISIL",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituição indiana líder promovendo pesquisa, educação e disseminação de direito internacional.",
    link: "https://www.isil-aca.org",
    keywords: ["Índia", "sociedade", "pesquisa"]
  },
  {
    id: "88",
    title: "T.M.C. Asser Instituut",
    institution: "T.M.C. Asser Instituut",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro de pesquisa holandês para direito internacional e europeu com forte foco em abordagens comparativas.",
    link: "https://www.asser.nl",
    keywords: ["Holanda", "Haia", "direito europeu"]
  },
  {
    id: "89",
    title: "China Institute of International Law",
    institution: "Chinese Society of International Law",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituição de pesquisa promovendo perspectivas chinesas sobre o desenvolvimento do direito internacional.",
    link: "https://www.csil.cn",
    keywords: ["China", "pesquisa", "perspectivas asiáticas"]
  },
  {
    id: "90",
    title: "Japanese Society of International Law",
    institution: "JSIL",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Sociedade profissional que promove pesquisa e educação em direito internacional no Japão.",
    link: "https://www.jsil.jp",
    keywords: ["Japão", "sociedade", "pesquisa"]
  },
  {
    id: "91",
    title: "African Society of International Law",
    institution: "AfSIL",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Organização pan-africana promovendo pesquisa em direito internacional a partir de perspectivas africanas.",
    link: "https://afsil.org",
    keywords: ["África", "pan-africano", "sociedade"]
  },
  {
    id: "92",
    title: "Centro de Estudios de Derecho Internacional Humanitario - Colombia",
    institution: "Cruz Roja Colombiana",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro colombiano especializado em pesquisa e educação em direito internacional humanitário.",
    link: "https://www.cruzrojacolombiana.org",
    keywords: ["Colômbia", "direito humanitário", "América Latina"]
  },
  {
    id: "93",
    title: "Instituto Ibero-Americano de La Haya para la Paz, los Derechos Humanos y la Justicia Internacional",
    institution: "IIA La Haya",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituto promovendo o engajamento ibero-americano com o direito internacional com sede em Haia.",
    link: "https://www.iahaya.nl",
    keywords: ["Ibero-América", "Haia", "América Latina", "Espanha"]
  },
  {
    id: "94",
    title: "Australian Centre for International Commercial Arbitration",
    institution: "ACICA",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituição australiana líder em arbitragem comercial internacional.",
    link: "https://acica.org.au",
    keywords: ["Austrália", "arbitragem", "direito comercial"]
  },
  {
    id: "95",
    title: "Korean Journal of International Law",
    institution: "Korean Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista que publica pesquisa em direito internacional a partir de perspectivas coreanas e regionais.",
    link: "https://www.ksil.or.kr",
    keywords: ["Coreia", "Ásia", "regional"]
  },
  {
    id: "96",
    title: "Egyptian Review of International Law",
    institution: "Egyptian Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista examinando direito internacional a partir de perspectivas egípcias e do Oriente Médio.",
    link: "https://www.esil-eg.org",
    keywords: ["Egito", "Oriente Médio", "árabe", "África"]
  },
  {
    id: "97",
    title: "Singapore Year Book of International Law",
    institution: "National University of Singapore",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual apresentando pesquisa em direito internacional a partir de perspectivas do Sudeste Asiático.",
    link: "https://law.nus.edu.sg/sybil",
    keywords: ["Singapura", "Sudeste Asiático", "anuário"]
  },
  {
    id: "98",
    title: "Italian Yearbook of International Law",
    institution: "Istituto di Studi Giuridici Internazionali",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual de pesquisa em direito internacional a partir de perspectivas italianas.",
    link: "https://www.italyil.it",
    keywords: ["Itália", "Europa", "anuário"]
  },
  {
    id: "99",
    title: "Canadian Yearbook of International Law",
    institution: "University of British Columbia",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual examinando direito internacional a partir de perspectivas canadenses.",
    link: "https://www.cambridge.org/core/journals/canadian-yearbook-of-international-law-annuaire-canadien-de-droit-international",
    keywords: ["Canadá", "América do Norte", "anuário", "bilíngue"]
  },
  {
    id: "100",
    title: "Polish Yearbook of International Law",
    institution: "Polish Academy of Sciences",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista anual que publica pesquisa em direito internacional a partir de perspectivas da Europa Central.",
    link: "https://pyil.pl",
    keywords: ["Polônia", "Europa Central", "anuário"]
  },
  {
    id: "101",
    title: "Swiss Review of International and European Law",
    institution: "Swiss Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista multilíngue cobrindo direito internacional e europeu a partir de perspectivas suíças.",
    link: "https://www.svir-ssdi.ch",
    keywords: ["Suíça", "Europa", "multilíngue"]
  },
  {
    id: "102",
    title: "Centro de Derecho Internacional - Universidad de Chile",
    institution: "Universidad de Chile",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro de pesquisa chileno dedicado à pesquisa e educação em direito internacional.",
    link: "https://derecho.uchile.cl",
    keywords: ["Chile", "América Latina", "pesquisa"]
  },
  {
    id: "103",
    title: "South African Institute of International Affairs",
    institution: "SAIIA",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Think tank independente focado em relações internacionais e direito internacional na África.",
    link: "https://www.saiia.org.za",
    keywords: ["África do Sul", "think tank", "política"]
  },
  {
    id: "104",
    title: "Instituto de Relaciones Internacionales - Universidad Nacional de La Plata",
    institution: "Universidad Nacional de La Plata",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituto argentino especializado em relações internacionais e direito internacional.",
    link: "https://www.iri.edu.ar",
    keywords: ["Argentina", "relações internacionais", "América Latina"]
  },
  {
    id: "105",
    title: "New Zealand Yearbook of International Law",
    institution: "University of Canterbury",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual examinando direito internacional a partir de perspectivas da Nova Zelândia e do Pacífico.",
    link: "https://www.canterbury.ac.nz",
    keywords: ["Nova Zelândia", "Pacífico", "anuário"]
  },
  {
    id: "106",
    title: "Israel Yearbook on Human Rights",
    institution: "Tel Aviv University",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista anual focada em direito dos direitos humanos a partir de perspectivas israelenses e do Oriente Médio.",
    link: "https://brill.com/view/serial/IYHR",
    keywords: ["Israel", "direitos humanos", "Oriente Médio", "anuário"]
  },
  {
    id: "107",
    title: "Spanish Yearbook of International Law",
    institution: "Spanish Association of Professors of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual apresentando pesquisa espanhola sobre direito internacional.",
    link: "https://www.aepdiri.org",
    keywords: ["Espanha", "espanhol", "anuário", "Europa"]
  },
  {
    id: "108",
    title: "Ukrainian Yearbook of International Law",
    institution: "Ukrainian Association of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista anual examinando direito internacional a partir de perspectivas ucranianas e da Europa Oriental.",
    link: "https://www.ukrainianyearbook.com",
    keywords: ["Ucrânia", "Europa Oriental", "anuário"]
  },
  {
    id: "109",
    title: "Instituto Brasileiro de Relações Internacionais (IBRI)",
    institution: "IBRI",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituto brasileiro focado em relações internacionais e educação em direito internacional.",
    link: "https://ibri-rbpi.org",
    keywords: ["Brasil", "relações internacionais", "educação"]
  },
  {
    id: "110",
    title: "Vietnamese Journal of International Law",
    institution: "Vietnam Association of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista que publica pesquisa em direito internacional a partir de perspectivas vietnamitas.",
    link: "https://www.vail.org.vn",
    keywords: ["Vietnã", "Sudeste Asiático", "regional"]
  },
  {
    id: "111",
    title: "Institut de Droit International (Institute of International Law)",
    institution: "IDI",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Prestigiosa associação acadêmica dedicada ao desenvolvimento e codificação progressiva do direito internacional desde 1873.",
    link: "https://www.idi-iil.org",
    keywords: ["histórico", "codificação", "associação acadêmica"]
  },
  {
    id: "112",
    title: "Revista de Derecho Internacional y Relaciones Internacionales - Universidad del Rosario",
    institution: "Universidad del Rosario",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista colombiana que publica pesquisa sobre direito internacional e relações internacionais.",
    link: "https://revistas.urosario.edu.co",
    keywords: ["Colômbia", "espanhol", "relações internacionais"]
  },
  {
    id: "113",
    title: "Revista Electrónica de Estudios Internacionales",
    institution: "Asociación Española de Profesores de Derecho Internacional",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista eletrônica espanhola dedicada a estudos de direito internacional e relações internacionais.",
    link: "https://www.reei.org",
    keywords: ["Espanha", "espanhol", "revista eletrônica"]
  },
  {
    id: "114",
    title: "Malaysian Journal of International Law",
    institution: "University of Malaya",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista examinando direito internacional a partir de perspectivas da Malásia e do Sudeste Asiático.",
    link: "https://jil.um.edu.my",
    keywords: ["Malásia", "Sudeste Asiático", "regional"]
  },
  {
    id: "115",
    title: "Thai Yearbook of International Law",
    institution: "Thai Society of International Law",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Publicação anual apresentando pesquisa em direito internacional a partir de perspectivas tailandesas.",
    link: "https://www.tsil.or.th",
    keywords: ["Tailândia", "Sudeste Asiático", "anuário"]
  },
  {
    id: "116",
    title: "Centre for International Law - National University of Singapore",
    institution: "National University of Singapore",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro de pesquisa líder no Sudeste Asiático para direito internacional e resolução de disputas.",
    link: "https://cil.nus.edu.sg",
    keywords: ["Singapura", "Sudeste Asiático", "resolução de disputas"]
  },
  {
    id: "117",
    title: "Nigerian Institute of Advanced Legal Studies",
    institution: "NIALS",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Instituto nigeriano que conduz pesquisas em vários campos do direito, incluindo direito internacional.",
    link: "https://www.nials.edu.ng",
    keywords: ["Nigéria", "África", "pesquisa jurídica"]
  },
  {
    id: "118",
    title: "Centre for International Law Research and Policy - South Africa",
    institution: "University of Johannesburg",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Centro sul-africano focado em direito internacional, política e integração jurídica africana.",
    link: "https://www.uj.ac.za",
    keywords: ["África do Sul", "política", "integração africana"]
  },
  {
    id: "119",
    title: "International Law Section - Philippine Bar Association",
    institution: "Philippine Bar Association",
    category: categoryMap["Research Institutes"],
    type: typeMap["Research Institute"],
    description: "Associação profissional promovendo a prática e pesquisa em direito internacional nas Filipinas.",
    link: "https://www.philbar.org",
    keywords: ["Filipinas", "Sudeste Asiático", "associação profissional"]
  },
  {
    id: "120",
    title: "Pakistan Journal of International Affairs",
    institution: "Institute of Strategic Studies Islamabad",
    category: categoryMap["Academic Journals"],
    type: typeMap["Journal"],
    description: "Revista cobrindo direito internacional e relações a partir de perspectivas paquistanesas e do Sul da Ásia.",
    link: "https://issi.org.pk",
    keywords: ["Paquistão", "Sul da Ásia", "relações internacionais"]
  }
]
