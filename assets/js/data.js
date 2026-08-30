/* ============================================================================
   Sahrdaya Silver Jubilee — site content
   ----------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE WEBSITE.
   No build step, no npm install. Edit, save, refresh the browser.

   To add a flyer / poster:
     1. Drop the image into  assets/flyers/
     2. Add an entry to the SITE.flyers array at the bottom of this file.
   ========================================================================== */

const SITE = {
  /* ---- Identity ------------------------------------------------------- */
  college: "Sahrdaya College of Engineering & Technology",
  shortName: "Sahrdaya",
  status: "Autonomous",
  jubileeName: "Silver Jubilee",
  years: "September 2026 — August 2027",
  motto: "One Legacy. One Family. One Future.",
  tagline: "Honouring our legacy. Inspiring our future.",
  foundedYear: 2002,

  /* Grand Inauguration — the countdown target (IST) */
  inauguration: {
    iso: "2026-09-26T10:00:00+05:30",
    day: "Saturday",
    date: "26 September 2026",
    time: "10:00 AM",
    venue: "Sahrdaya Campus, Kodakara, Thrissur",
  },

  contact: {
    address: "Kodakara P.O., Thrissur District, Kerala, India — 680684",
    phone: "0480 272 6650",
    phoneHref: "+914802726650",
    email: "info@sahrdaya.ac.in",
    website: "https://www.sahrdaya.ac.in",
  },

  /* ---- Pillars shown under the hero ----------------------------------- */
  pillars: [
    { icon: "pillar", title: "Honouring", sub: "Our Roots" },
    { icon: "book", title: "Celebrating", sub: "Our Journey" },
    { icon: "community", title: "Empowering", sub: "Our Community" },
    { icon: "cap", title: "Inspiring", sub: "Our Students" },
    { icon: "spark", title: "Shaping", sub: "Our Future" },
  ],

  /* ---- Numbers ribbon -------------------------------------------------- */
  stats: [
    { value: 25, suffix: "", label: "Years of Excellence" },
    { value: 25, suffix: "+", label: "Acre Green Campus" },
    { value: 90, suffix: "%+", label: "Placement Record" },
    { value: 12, suffix: "", label: "Months of Celebration" },
  ],

  /* ---- Inauguration day highlights ------------------------------------ */
  highlights: [
    { title: "Grand Inauguration", text: "A ceremonial opening in the presence of prominent and eminent personalities." },
    { title: "Unveiling of the SSJ Identity", text: "The official Silver Jubilee name, logo, theme song and promo video revealed to the world." },
    { title: "Souvenir & Master Calendar", text: "Release of the Silver Jubilee Souvenir and the Master Events Calendar for the entire jubilee year." },
    { title: "Launch of the IEDC Summit", text: "The IEDC Summit is launched as a flagship part of the celebrations." },
    { title: "Five Flagship Programmes", text: "Five flagship jubilee programmes launched simultaneously on inauguration day." },
    { title: "CelerSCET Goes Live", text: "Sahrdaya's own ERP platform is switched on for the whole institution." },
    { title: "New Academic Programmes", text: "Announcement of exciting new academic programmes for the coming years." },
    { title: "Global Alumni Live Connect", text: "A live link-up with alumni chapters across India and abroad." },
    { title: "Smart Kerala Hackathon", text: "A state-level hackathon launched as a flagship SSJ initiative." },
    { title: "Silver Spectrum Honours", text: "Announcement of the Silver Spectrum Honours & Awards." },
    { title: "Memorial Installations", text: "Silver Jubilee memorial installations unveiled across the campus." },
  ],

  /* ---- Programmes. scope: "Institution" | "Department" ----------------- */
  programmes: [
    { title: "SSJ Marathon", scope: "Institution", category: "Flagship", featured: true, text: "A community 5K run open to students, staff, alumni, parents and the public." },
    { title: "IEDC Summit", scope: "Institution", category: "Flagship", featured: true, text: "The prestigious SSJ – KSUM – IEDC Summit, expected to bring 5,000+ students from across Kerala to campus." },
    { title: "Smart Kerala Hackathon", scope: "Institution", category: "Flagship", featured: true, text: "An IEDC-initiated state-level flagship initiative with state partners." },
    { title: "Silver Spectrum TechFest", scope: "Institution", category: "Flagship", featured: true, text: "A national-level technical festival, planned for Q1 2027." },
    { title: "Silver Spectrum Honours & Awards", scope: "Institution", category: "Awards", featured: true, text: "Recognising distinguished alumni, outstanding faculty, best departments, academic excellence and unsung changemakers." },
    { title: "Public VR / AR Experience Centre", scope: "Institution", category: "Innovation", featured: true, text: "An immersive technology centre open to school students and the wider community." },
    { title: "Sports Complex Upgradation", scope: "Institution", category: "Campus", featured: true, text: "Upgraded facilities including a modern swimming pool as a Silver Jubilee legacy asset." },
    { title: "Centre for Continuing Education", scope: "Institution", category: "Academic", featured: false, text: "New industry-collaborative certificate courses and community skill programmes." },
    { title: "Smart Campus Expansion", scope: "Institution", category: "Campus", featured: false, text: "IoT-enabled smart classrooms, GPS bus tracking, solar power and more." },
    { title: "Carbon-Neutral Biodiversity Campus", scope: "Institution", category: "Campus", featured: false, text: "Green walkways, medicinal garden expansion, plastic-free zones and rainwater harvesting." },
    { title: "Institutional Repository & e-Library", scope: "Institution", category: "Academic", featured: false, text: "A centralised digital archive with IFLA Green Library adoption." },
    { title: "Sahrdaya YouTube Channel", scope: "Institution", category: "Community", featured: false, text: "A structured weekly content programme recording all our events and lectures." },
    { title: "Global Alumni Reunion Series", scope: "Institution", category: "Alumni", featured: false, text: "A worldwide series of alumni meets and reunions through the jubilee year." },
    { title: "Alumni Reels & Brand Ambassadors", scope: "Institution", category: "Alumni", featured: false, text: "Our distinguished alumni featured as the face of the celebrations." },
    { title: "Innovation Park & Incubation Hub", scope: "Institution", category: "Innovation", featured: false, text: "New startups launched through the Technology Business Incubator." },

    { title: "Departmental Exhibition Wall", scope: "Department", category: "Showcase", featured: false, text: "A permanent exhibition space in every department showcasing its work, projects and history." },
    { title: "Alumni Wall of Fame", scope: "Department", category: "Alumni", featured: false, text: "Honouring department alumni with a wall of fame and recorded testimonials." },
    { title: "25 Workshops per Department", scope: "Department", category: "Academic", featured: false, text: "Twenty-five workshops, lectures and alumni webinars per department through the jubilee year." },
    { title: "Career Progression Plans", scope: "Department", category: "Career", featured: false, text: "LinkedIn Professional Drive, alumni-student mentorship, departmental research clubs and more." },
    { title: "School Adoption Programme", scope: "Department", category: "Outreach", featured: false, text: "STEM outreach and career guidance for adopted schools across the region." },
    { title: "Sahrdaya Cares Camps", scope: "Department", category: "Community", featured: false, text: "Medical, agriculture and wellness camps run by every department." },
    { title: "Gram Vista — Village Adoption", scope: "Department", category: "Community", featured: false, text: "Village adoption under Unnat Bharat Abhiyan." },
    { title: "Department Alumni Reunions", scope: "Department", category: "Alumni", featured: false, text: "Every department hosts its own alumni reunion during the jubilee year." },
    { title: "MOUs & International Collaborations", scope: "Department", category: "Academic", featured: false, text: "Partnerships with premier Indian and foreign institutions." },
    { title: "Industry-Funded Research", scope: "Department", category: "Research", featured: false, text: "Industry-funded research and consultancy projects driven by each department." },
    { title: "Centres of Excellence", scope: "Department", category: "Research", featured: false, text: "Department-level Centres of Excellence established as jubilee legacy assets." },
  ],

  /* ---- The year at a glance ------------------------------------------- */
  timeline: [
    { label: "26 Sep 2026", title: "Grand Inauguration", text: "The Silver Jubilee year opens with a grand ceremony, unveilings and simultaneous programme launches." },
    { label: "Sep 2026 – Aug 2027", title: "A Year-Long Movement", text: "Institution-level and department-level programmes run continuously through the academic year." },
    { label: "Q1 2027", title: "Silver Spectrum TechFest", text: "The national-level technical festival of the Silver Jubilee year." },
    { label: "Aug 2027", title: "Grand Culmination", text: "Three days — the Curriculum Innovation Summit, the Industry Conclave and the Closing Ceremony." },
    { label: "Aug 2027", title: "Vision 2050 Launch", text: "Sahrdaya's 25-year forward-looking roadmap — our gift to the next generation." },
  ],

  /* ---- Three-day culmination ------------------------------------------ */
  culmination: [
    { day: "Day 1", title: "Curriculum Innovation Summit", text: "A national education summit on the future of higher education." },
    { day: "Day 2", title: "Industry Conclave", text: "Talks, round tables, high-value MoUs, CoE inaugurations and industry-academia partnerships." },
    { day: "Day 3", title: "Closing Ceremony", text: "National dignitaries, the Silver Spectrum Awards, the Vision 2050 launch and cultural shows." },
  ],

  /* ======================================================================
     FLYERS & POSTERS
     ----------------------------------------------------------------------
     Add a new poster in two steps:
       1. Save the image into  assets/flyers/   (JPG, PNG or WEBP)
       2. Copy one block below, change the fields, and save this file.

     Fields:
       src      - path to the image (required)
       title    - headline shown under the poster
       date     - small line above the title (any text)
       tag      - pill label, e.g. "Announcement" / "Event" / "Poster"
       featured - true puts it in the large slot on the home page
     ====================================================================== */
  flyers: [
    {
      src: "assets/flyers/silver-jubilee-poster.jpg",
      title: "Sahrdaya Silver Jubilee — 25 Years of Excellence",
      date: "September 2026 – August 2027",
      tag: "Announcement",
      featured: true,
    },
    // {
    //   src: "assets/flyers/inauguration.jpg",
    //   title: "Grand Inauguration — 26 September 2026",
    //   date: "26 Sep 2026",
    //   tag: "Event",
    //   featured: false,
    // },
  ],
};
