import { useState } from "react";

export const useCourseData = () => {
  const [course] = useState({
    id: "bitcoin-coinbase-tutorial",
    title: "Come comprare Bitcoin con Coinbase: tutorial completo",
    subtitle:
      "Impara tutto su come comprare, vendere e utilizzare Bitcoin attraverso la piattaforma Coinbase",
    description:
      "Questo corso è progettato per aiutarti a comprendere e navigare nel mondo delle criptovalute, specificamente attraverso l'uso della piattaforma Coinbase. Imparerai tutto ciò che devi sapere, dalla creazione di un account alla sicurezza dei tuoi investimenti.",
    rating: 4.8,
    reviewsCount: 641,
    studentsCount: 5243,
    language: "Italiano",
    lastUpdated: "September 2023",
    subtitles: ["Italiano", "English"],
    hoursOfVideo: 4.5,
    articles: 6,
    downloadableResources: 3,
    originalPrice: 89.99,
    discountPrice: 24.99,
    sectionsCount: 5,
    lecturesCount: 32,
    totalLength: "4h 30m",
    whatYoullLearn: [
      "Creare e proteggere un account Coinbase",
      "Acquistare e vendere Bitcoin in modo sicuro",
      "Implementare misure di sicurezza per proteggere i tuoi investimenti",
      "Comprendere le basi della tecnologia blockchain",
      "Navigare nell'interfaccia di Coinbase con sicurezza",
      "Trasferire criptovalute tra diversi wallet",
      "Utilizzare metodi di pagamento diversi su Coinbase",
      "Interpretare grafici e tendenze di mercato per le criptovalute",
    ],
    requirements: [
      "Nessuna conoscenza precedente di criptovalute richiesta",
      "Un computer con connessione internet",
      "Un indirizzo email valido per registrarsi a Coinbase",
      "Un documento d'identità per la verifica dell'account",
    ],
    sections: [
      {
        title: "Introduzione a Coinbase e alle criptovalute",
        length: "45 min",
        lectures: [
          { title: "Benvenuti al corso", length: "5:22" },
          { title: "Cosa sono le criptovalute", length: "10:15" },
          { title: "Perché Coinbase e come funziona", length: "12:48" },
          {
            title: "Rischi e opportunità degli investimenti in crypto",
            length: "15:33",
          },
        ],
      },
      {
        title: "Creazione e sicurezza dell'account",
        length: "1h 5m",
        lectures: [
          { title: "Registrazione su Coinbase", length: "8:14" },
          { title: "Verifica dell'identità", length: "12:36" },
          {
            title: "Configurazione dell'autenticazione a due fattori",
            length: "10:42",
          },
          { title: "Proteggere il tuo account da hacker", length: "15:20" },
          {
            title: "Gestione delle password e best practices",
            length: "18:25",
          },
        ],
      },
      {
        title: "Acquistare e vendere Bitcoin",
        length: "1h 15m",
        lectures: [
          { title: "Configurare un metodo di pagamento", length: "10:18" },
          { title: "Il tuo primo acquisto di Bitcoin", length: "15:42" },
          { title: "Capire le commissioni di Coinbase", length: "12:35" },
          { title: "Vendere Bitcoin e prelevare fondi", length: "14:30" },
          { title: "Strategie di acquisto: lump sum vs. DCA", length: "22:05" },
        ],
      },
    ],
    instructor: {
      name: "Alessandro Rossi",
      title: "Crypto Expert & Financial Educator",
      bio: "Esperto di criptovalute con 7+ anni di esperienza nel settore. Ho aiutato più di 15.000 studenti a navigare nel mondo delle criptovalute, dalla teoria agli aspetti pratici. Sono un appassionato di tecnologia blockchain e di educazione finanziaria.",
      rating: 4.9,
      reviewsCount: 2841,
      studentsCount: 15432,
      coursesCount: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
  });

  return { course };
};
