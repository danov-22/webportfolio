/* EDIT YOUR PORTFOLIO CONTENT HERE */

const portfolioContent = {
  en: {
    name: "Daniel Martin",
    role: "Multipotentialite",
    nav: { work: "Work", projects: "Projects", about: "About", timeline: "Timeline", contact: "Contact" },
    hero: {
      eyebrow: "A living archive / 2026",
      headline: "I build, write, learn, and turn ideas into things people can use.",
      supporting: "My work has moved through education, research, sales, writing, web design, and software projects. This is where I keep the things worth showing.",
      current: "Currently building websites, learning software development, and making useful small tools.",
      scroll: "See the work",
    },
    work: {
      label: "Selected work",
      heading: "A few places where the thinking became tangible.",
      items: [
        { title: "Letterfeather", category: "Writing & Personal Archive", description: "A personal collection of writing, thoughts, stories, poems, and experiences.", href: "https://letterfeather.super.site" },
        { title: "Bridgepoint", category: "Web Design", description: "My web design and digital presence work for businesses.", href: "https://bridgepointweb.vercel.app" },
        { title: "Projects", category: "Web Apps & Experiments", description: "Small websites, applications, tools, and coding experiments I have built while learning software development.", href: "#projects" },
      ],
    },
    projects: {
      label: "In the workshop",
      heading: "Small things, built to teach me something.",
      intro: "The best way I know to learn a new layer of the web is to make a small, useful thing with it.",
      items: [
        { title: "Bewlet", type: "Personal Finance Web App", description: "A private, cross-device finance tracker with offline support and records that stay in the user's own Google Drive.", technologies: ["Web App", "Offline Support", "Google Drive Sync"], year: "2026", demo: "https://bewlet.vercel.app" },
        { title: "Blockday", type: "Planning Web App", description: "A private time-blocking planner with flexible themes and schedules that can be shared only when you choose.", technologies: ["Web App", "PWA", "Google Sync"], year: "2026", demo: "https://blockday.vercel.app" },
      ],
    },
    currently: { label: "Right now", items: ["Building Bridgepoint", "Learning software development", "Building small web applications", "Writing occasionally"] },
    about: {
      label: "A little context",
      heading: "A generalist with a bias toward making.",
      copy: "My work has taken a few turns. I studied English Literature and have worked across education, sales, research, writing, and digital work. I tend to learn by making things, so this site is less a traditional résumé and more a record of what I’ve done and what I’m building next.",
      areas: "Areas of work",
      tags: ["Web Design", "Front-End Development", "HTML", "CSS", "JavaScript", "Google Apps Script", "Writing", "Copyediting", "Research", "English Communication", "Teaching", "Client Communication"],
    },
    timeline: {
      label: "Work history",
      heading: "Not a straight line.",
      copy: "Each chapter left a tool behind: listening, explaining, investigating, writing clearly, and making a useful interface.",
      entries: [["2026", "Web design · Software projects · Market Research"], ["2025", "Teaching · Market research"], ["2024", "Telemarketing"], ["2023", "Tutoring · Teaching · Assistant work"], ["2022", "Insurance · English tutoring · Teaching"], ["2021", "Insurance"], ["Earlier", "English Literature · Hospitality · Family business"]],
      linkLabel: "Read the longer version on Letterfeather",
      link: "https://letterfeather.super.site/logs/portfolio",
    },
    contact: {
      label: "Whenever you like",
      heading: "Say hello, if you’d like.",
      copy: "If something here sparks a thought, a project, or just a question, you know where to find me.",
      actions: {
        email: { label: "Email", value: "dany10martin@gmail.com", href: "mailto:dany10martin@gmail.com" },
        instagram: { label: "Instagram", value: "@danovski_", href: "https://instagram.com/danovski_" },
        whatsapp: { label: "WhatsApp", value: "+62 895 0455 6187", href: "https://wa.me/6289504556187" },
      },
    },
    footer: { motto: "Keep learning, keep making, keep growing.", signoff: "Designed and built by me." },
  },
  id: {
    name: "Dany Martin",
    role: "Pembuat lintas disiplin",
    nav: { work: "Karya", projects: "Proyek", about: "Tentang", timeline: "Linimasa", contact: "Kontak" },
    hero: {
      eyebrow: "Arsip yang terus hidup / 2026",
      headline: "Saya membuat, menulis, belajar, dan mengubah ide menjadi sesuatu yang berguna.",
      supporting: "Pekerjaan saya pernah bergerak di pendidikan, riset, sales, menulis, desain web, dan proyek software. Di sini saya menyimpan hal-hal yang layak ditunjukkan.",
      current: "Saat ini membangun website, belajar software development, dan membuat alat-alat kecil yang berguna.",
      scroll: "Lihat karya",
    },
    work: {
      label: "Karya pilihan",
      heading: "Beberapa tempat ketika pemikiran menjadi nyata.",
      items: [
        { title: "Letterfeather", category: "Tulisan & Arsip Personal", description: "Kumpulan tulisan, pemikiran, cerita, puisi, dan pengalaman personal.", href: "https://letterfeather.super.site" },
        { title: "Bridgepoint", category: "Desain Web", description: "Pekerjaan desain web dan kehadiran digital saya untuk bisnis.", href: "https://bridgepointweb.vercel.app" },
        { title: "Projects", category: "Web App & Eksperimen", description: "Website kecil, aplikasi, alat, dan eksperimen coding yang saya buat sambil belajar software development.", href: "#projects" },
      ],
    },
    projects: {
      label: "Di meja kerja",
      heading: "Hal-hal kecil, dibuat untuk mengajari saya sesuatu.",
      intro: "Cara terbaik yang saya tahu untuk mempelajari lapisan baru dari web adalah membuat sesuatu yang kecil dan berguna.",
      finance: { title: "Personal Finance Tracker", type: "Web App", description: "Alat keuangan personal untuk mencatat pengeluaran dan memisahkan berbagai jenis uang.", technologies: ["HTML", "CSS", "JavaScript", "Google Sheets", "Google Apps Script"], year: "2026", demo: "https://script.google.com", source: "https://github.com/raka-pradana/personal-finance-tracker" },
    },
    currently: { label: "Sekarang", items: ["Membangun Bridgepoint", "Belajar software development", "Membangun web application kecil", "Sesekali menulis"] },
    about: {
      label: "Sedikit konteks",
      heading: "Seorang generalis yang suka membuat.",
      copy: "Pekerjaan saya telah mengambil beberapa arah. Saya belajar Sastra Inggris dan pernah bekerja di pendidikan, sales, riset, menulis, dan dunia digital. Saya belajar dengan cara membuat sesuatu, jadi situs ini bukan résumé tradisional, melainkan catatan tentang apa yang telah saya lakukan dan apa yang akan saya bangun.",
      areas: "Bidang kerja",
      tags: ["Desain Web", "Front-End Development", "HTML", "CSS", "JavaScript", "Google Apps Script", "Menulis", "Copyediting", "Riset", "Komunikasi Bahasa Inggris", "Mengajar", "Komunikasi Klien"],
    },
    timeline: {
      label: "Riwayat kerja",
      heading: "Tidak pernah lurus.",
      copy: "Setiap bab meninggalkan satu kemampuan: mendengarkan, menjelaskan, menyelidiki, menulis dengan jelas, dan membuat antarmuka yang berguna.",
      entries: [["2026", "Desain web · Proyek software · Mengajar · Riset"], ["2025", "Mengajar · Riset pasar"], ["2024", "Telemarketing"], ["2023", "Les · Mengajar · Asisten"], ["2022", "Asuransi · Les Bahasa Inggris · Mengajar"], ["2021", "Asuransi"], ["Sebelumnya", "Sastra Inggris · Hospitality · Bisnis keluarga"]],
      linkLabel: "Baca versi lengkap di Letterfeather",
      link: "https://letterfeather.super.site/logs/portfolio",
    },
    contact: {
      label: "Undangan terbuka",
      heading: "Mari bicara.",
      copy: "Punya proyek, peran, kolaborasi, atau ide yang layak dibicarakan? Hubungi saya.",
      actions: {
        email: { label: "Email", value: "dany10martin@gmail.com", href: "mailto:dany10martin@gmail.com" },
        instagram: { label: "Instagram", value: "@danovski_", href: "https://instagram.com/danovski_" },
        whatsapp: { label: "WhatsApp", value: "+62 895 0455 6187", href: "https://wa.me/6289504556187" },
      },
    },
    footer: { signoff: "Dirancang dan dibuat oleh saya." },
  },
};
