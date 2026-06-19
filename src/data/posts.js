export const currentUser = {
  username: "voce",
  name: "Você",
  avatar: "/pfp.jpg",
};

export const posts = [
  {
    id: 1,
    user: {
      username: "dev.weekly",
      name: "Dev Weekly",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    caption: "5 ferramentas que todo dev deveria conhecer em 2025. link na bio 👨‍💻",
    likes: 12400,
    liked: false,
    saved: true,
    time: "1 hora atrás",
    comments: [
      { id: 1, username: "react.dev", text: "a #3 mudou meu workflow completamente" },
      { id: 2, username: "lua.codes", text: "salvando esse post" },
      { id: 3, username: "voce", text: "qual é a #1?" },
    ],
  },
  {
    id: 2,
    user: {
      username: "react.dev",
      name: "React Dev",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    caption: "hooks > class components. sempre foi assim, sempre será. ⚛️",
    likes: 8920,
    liked: true,
    saved: false,
    time: "4 horas atrás",
    comments: [
      { id: 1, username: "kernel.log", text: "discordo mas respeito" },
      { id: 2, username: "git.commit", text: "useEffect com array vazio salva vidas" },
    ],
  },
  {
    id: 3,
    user: {
      username: "lua.codes",
      name: "Lua Codes",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    caption: "setup novo, produtividade infinita (até o próximo bug). teclado mecânico aprovado ✅",
    likes: 3150,
    liked: false,
    saved: false,
    time: "8 horas atrás",
    comments: [
      { id: 1, username: "dev.weekly", text: "qual switch você usa?" },
      { id: 2, username: "voce", text: "setup limpo demais" },
    ],
  },
  {
    id: 4,
    user: {
      username: "kernel.log",
      name: "Kernel Log",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    caption: "debugging às 2am hits different. o bug era um ponto e vírgula. claro que era.",
    likes: 6780,
    liked: false,
    saved: false,
    time: "12 horas atrás",
    comments: [
      { id: 1, username: "git.commit", text: "já vivi isso ontem" },
      { id: 2, username: "react.dev", text: "console.log é meu melhor amigo" },
      { id: 3, username: "stackflow.br", text: "copiei a solução do stack overflow e funcionou" },
    ],
  },
  {
    id: 5,
    user: {
      username: "git.commit",
      name: "Git Commit",
      avatar: "https://i.pravatar.cc/150?img=53",
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    caption: "fix: fixed the fix that broke the fix. push direto pra main, sem medo 😎",
    likes: 9410,
    liked: true,
    saved: true,
    time: "1 dia atrás",
    comments: [
      { id: 1, username: "kernel.log", text: "coragem ou loucura?" },
      { id: 2, username: "lua.codes", text: "git push --force incoming" },
      { id: 3, username: "dev.weekly", text: "nunca faça isso em prod..." },
      { id: 4, username: "voce", text: "classic" },
    ],
  },
  {
    id: 6,
    user: {
      username: "stackflow.br",
      name: "Stackflow BR",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    caption: "hackathon 48h. café: 12 xícaras. bugs: infinitos. time: imbatível. 🏆",
    likes: 5200,
    liked: false,
    saved: false,
    time: "2 dias atrás",
    comments: [
      { id: 1, username: "react.dev", text: "qual foi o projeto de vocês?" },
      { id: 2, username: "git.commit", text: "sono é opcional nessas horas" },
    ],
  },
];

export const suggestions = [
  { username: "typescript.br", name: "TypeScript BR", avatar: "https://i.pravatar.cc/150?img=60", reason: "Seguido por react.dev" },
  { username: "css.tricks", name: "CSS Tricks", avatar: "https://i.pravatar.cc/150?img=44", reason: "Seguido por dev.weekly" },
  { username: "node.br", name: "Node BR", avatar: "https://i.pravatar.cc/150?img=15", reason: "Novo no Instagram" },
  { username: "api.rest", name: "API REST", avatar: "https://i.pravatar.cc/150?img=38", reason: "Seguido por kernel.log" },
  { username: "docker.daily", name: "Docker Daily", avatar: "https://i.pravatar.cc/150?img=57", reason: "Seguido por git.commit" },
];

export const stories = [
  { username: "dev.weekly", avatar: "https://i.pravatar.cc/150?img=11", seen: false },
  { username: "react.dev", avatar: "https://i.pravatar.cc/150?img=32", seen: false },
  { username: "lua.codes", avatar: "https://i.pravatar.cc/150?img=47", seen: true },
  { username: "kernel.log", avatar: "https://i.pravatar.cc/150?img=68", seen: false },
  { username: "git.commit", avatar: "https://i.pravatar.cc/150?img=53", seen: true },
  { username: "stackflow.br", avatar: "https://i.pravatar.cc/150?img=25", seen: false },
  { username: "typescript.br", avatar: "https://i.pravatar.cc/150?img=60", seen: false },
];
