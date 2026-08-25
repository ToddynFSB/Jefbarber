// Dados reais da JEF BARBER'S: perfil do Google Maps + sistema oficial de
// agendamento (BestBarbers). Nada aqui é inventado.
export const JEF = {
  name: "JEF BARBER'S",
  category: "Barbearia",
  city: "Itabirito",
  state: "MG",
  address: "Av. Manoel Salvador de Oliveira, 623 — Itabirito, MG, 35450-114",
  phoneDisplay: "(31) 98506-1203",
  phoneRaw: "+5531985061203",
  whatsapp:
    "https://wa.me/5531985061203?text=" +
    encodeURIComponent("Olá! Vim pelo site e gostaria de agendar um horário na JEF BARBER'S."),
  instagram: "https://www.instagram.com/jefbarbers/",
  booking: "https://agendamentos.bestbarbers.app/barbershop/jefbarbers",
  maps: "https://www.google.com/maps/place/Barbearia+em+Itabirito+-+JEF+BARBER'S/@-20.2523914,-43.7991956,17z/data=!4m6!3m5!1s0xa6a993a28f0c55:0xeba9a2d6fc9761c7!8m2!3d-20.2523723!4d-43.7989462!16s%2Fg%2F11y_yjwgfs",
  embed:
    "https://www.google.com/maps?q=Av.+Manoel+Salvador+de+Oliveira,+623,+Itabirito,+MG,+35450-114&output=embed",
  rating: "5,0",
  reviewCount: 43,
  photoCount: 56,
  tagline: "A sua barbearia!",
} as const;

// Serviços, durações e preços publicados no sistema oficial de agendamento.
export const services = [
  { name: "Corte de cabelo", minutes: 30, price: 50 },
  { name: "Barba", minutes: 30, price: 45 },
  { name: "Pezinho", minutes: 15, price: 25 },
  { name: "Sobrancelha", minutes: 10, price: 15 },
  { name: "Camuflagem", minutes: 30, price: 45 },
  { name: "Hidratação", minutes: 15, price: 30 },
  { name: "Relaxamento", minutes: 30, price: 60 },
  { name: "Tintura", minutes: 30, price: 60 },
  { name: "Selagem", minutes: 60, price: 100 },
  { name: "Raspagem", minutes: 15, price: 30 },
  { name: "Depilação de nariz e orelha", minutes: 15, price: 25 },
] as const;

// Horário de funcionamento publicado no sistema de agendamento.
export const hours = [
  { day: "Segunda a sexta", time: "09:00 — 20:00" },
  { day: "Sábado", time: "08:00 — 17:00" },
  { day: "Domingo", time: "Fechado" },
] as const;

export const reviews = [
  {
    name: "Thalys Kuster",
    when: "há 5 meses",
    text: "Ambiente familiar, climatizado, com estilo retrô. Colaboradores profissionais e com escuta ativa. Recomendo.",
  },
  {
    name: "Tulio Dias",
    when: "há 5 meses",
    text: "Experiência impecável! O ambiente é extremamente agradável e moderno, mas o diferencial é o atendimento: equipe atenciosa e técnica de alta qualidade. Recomendo de olhos fechados!",
  },
  {
    name: "Dayvson Patrick",
    when: "há 5 meses",
    text: "Muito boa, atendimento excelente. Serviços: corte de cabelo, manutenção.",
  },
] as const;

export const highlights = [
  "Top demais, corte muito bem feito e tratamento de spa.",
  "Excelente atendimento, localização e profissionais especializados.",
  "Ambiente familiar, climatizado, com estilo retrô.",
] as const;
