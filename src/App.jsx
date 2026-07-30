import React, { useState } from 'react';

const VolleyballMontreal = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('fr');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  // Team members - Board and Staff
  const teamMembers = {
    board: [
      {
        id: 1,
        name: 'Vincent Turcotte',
        role: 'Président',
        image: '👨‍💼',
        email: 'vincent@volleyballmontreal.com'
      },
      {
        id: 2,
        name: 'Ianis Tesa',
        role: 'Vice-président',
        image: '👨‍💼',
        email: 'ianis@volleyballmontreal.com'
      },
      {
        id: 3,
        name: 'Emma Lu',
        role: 'Trésorière',
        image: '👩‍💼',
        email: 'emma@volleyballmontreal.com'
      },
      {
        id: 4,
        name: 'Lucie Dorenlot',
        role: 'Secrétaire',
        image: '👩‍💼',
        email: 'lucie@volleyballmontreal.com'
      }
    ],
    staff: [
      {
        id: 1,
        name: 'Ivan Reka',
        role: 'Administrateur',
        image: '👨‍💻',
        email: 'ivan@volleyballmontreal.com'
      },
      {
        id: 2,
        name: 'Alexandra Lojen',
        role: 'Administratrice',
        image: '👩‍💻',
        email: 'alexandra@volleyballmontreal.com'
      },
      {
        id: 3,
        name: 'Alain Proust',
        role: 'Administrateur',
        image: '👨‍💻',
        email: 'alain@volleyballmontreal.com'
      },
      {
        id: 4,
        name: 'Xinyue Shao',
        role: 'Coordonnatrice de programme',
        image: '👩‍💻',
        email: 'xinyue@volleyballmontreal.com'
      }
    ]
  };

  const faqData = [
    {
      id: 1,
      question: 'Comment je peux rejoindre une ligue? / How do I join a league?',
      answer: 'Pour rejoindre une ligue Volleyball Montréal, vous devez d\'abord trouver un club affilié. Consultez notre page "Nos Affiliés" pour voir tous les clubs de la région. Contactez le club directement pour vous inscrire. Vous devrez aussi être affilié à Volleyball Québec (VBQ). / To join a Volleyball Montreal league, find an affiliated club on our "Nos Affiliés" page. Contact the club directly to register. You\'ll also need to affiliate with Volleyball Quebec (VBQ).'
    },
    {
      id: 2,
      question: 'Quel est l\'âge minimum pour jouer? / What\'s the minimum age?',
      answer: 'Notre Ligue féminine U21/25 est réservée aux joueuses de 21 ans ou moins (l\'âge est calculé au 31 décembre de la saison). La Ligue Estivale accepte les joueuses de 17 ans et plus. / Our Women\'s U21/25 League is for players 21 years or younger (age calculated December 31 of season). Summer League accepts players 17 and older.'
    },
    {
      id: 3,
      question: 'Combien ça coûte de jouer? / How much does it cost?',
      answer: 'Les frais varient selon la ligue. La Ligue Estivale 2026 coûte 20$ pour tout l\'été (7 semaines). Les autres ligues facturent selon frais administratifs et frais d\'arbitrage. Contactez-nous pour les tarifs actuels. / Fees vary by league. Summer League 2026 is $20 for entire summer (7 weeks). Other leagues charge based on admin and arbitration fees. Contact us for current rates.'
    },
    {
      id: 4,
      question: 'Je dois être affilié à Volleyball Québec? / Do I need to affiliate with VBQ?',
      answer: 'Oui. Toutes les joueuses, entraîneurs et entraîneuses doivent être affiliés à Volleyball Québec (VBQ) et Volleyball Montréal (VBM) pour participer officiellement. C\'est une exigence de notre organisation régionale. / Yes. All players, coaches and assistants must affiliate with Volleyball Quebec (VBQ) and Volleyball Montreal (VBM) to participate officially. This is a requirement of our regional organization.'
    },
    {
      id: 5,
      question: 'Quelle est la différence entre récréatif et compétitif? / Recreational vs. competitive?',
      answer: 'Récréatif: pour joueurs qui aiment s\'amuser et développer leurs habiletés dans une ambiance relaxe. Compétitif: pour joueurs qui veulent une compétition structurée et sérieuse avec résultats et classements officiels. / Recreational: for players who want fun and skill development in relaxed atmosphere. Competitive: for players wanting structured competition with official standings and rankings.'
    },
    {
      id: 6,
      question: 'Puis-je changer de club pendant la saison? / Can I switch teams mid-season?',
      answer: 'Les transferts de joueuses entre clubs sont permis une (1) seule fois durant la saison, pour un maximum de deux (2) joueuses par équipe. Vous devez demander l\'approbation de Volleyball Montréal. / Player transfers between clubs are allowed only once per season, maximum of 2 players per team. You must request approval from Volleyball Montreal.'
    },
    {
      id: 7,
      question: 'J\'ai plus de 21 ans, peux-je jouer? / I\'m over 21, can I still play?',
      answer: 'Pour la Ligue U21/25: une exception est possible si vous êtes entraîneur(se) ou entraîneur(se) adjoint(e) et que vous avez entre 22-24 ans. Pour la Ligue Estivale: oui, elle est ouverte à tous les âges! / For U21/25 League: exception possible if you\'re a coach/assistant coach aged 22-24. For Summer League: yes, it\'s open to all ages!'
    },
    {
      id: 8,
      question: 'Comment marche le système de points? / How does the point system work?',
      answer: 'Chaque set remporté = 1 point au classement. Résultat 4-0: 4 points pour l\'équipe gagnante, 0 pour perdante. Résultat 3-1: 3 points vs 1 point. En cas d\'égalité au classement, le dossier disciplinaire (cartons jaunes/rouges) détermine le classement. / Each set won = 1 point in standings. 4-0 result: 4 points to winner, 0 to loser. 3-1 result: 3 vs 1. If standings tied, disciplinary record (yellow/red cards) determines ranking.'
    },
    {
      id: 9,
      question: 'Y a-t-il des restrictions sur les joueuses jeunes? / Any restrictions for younger players?',
      answer: 'Maximum 2 joueuses de moins de 17 ans (U17) permis sur l\'alignement d\'une équipe en saison régulière. En cas de blessures ou absences multiples, une équipe peut en aligner plus avec l\'accord de l\'équipe adverse. / Maximum 2 players under 17 (U17) allowed on team roster during regular season. For injuries/absences, more allowed with opposing team agreement.'
    },
    {
      id: 10,
      question: 'Comment puis-je trouver un club près de moi? / How do I find a club near me?',
      answer: 'Visitez notre page "Nos Affiliés" avec la carte interactive! Filtrez par région (Montréal, Laval, Lanaudière, Laurentides, Lac-St-Louis). Chaque club affiche adresse, téléphone, personne contact, et liens sociaux. Vous pouvez aussi nous contacter: +1 (438) 930-5668 ou coordo@volleyballmontreal.com / Visit our "Nos Affiliés" page with interactive map! Filter by region. Each club shows address, phone, contact person, and social links. Or contact us: +1 (438) 930-5668 or coordo@volleyballmontreal.com'
    }
  ];

  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        leagues: 'Ligues',
        team: 'Notre Équipe',
        faq: 'FAQ'
      },
      faq: {
        title: 'Questions fréquentes',
        subtitle: 'Trouvez les réponses à vos questions',
        clickToExpand: 'Cliquez pour voir la réponse'
      },
      leagues: {
        title: 'Nos Ligues',
        subtitle: 'Du volleyball dynamique, fun et pour tous les niveaux',
        summer: 'Ligue Estivale 2026',
        summerTagline: 'Dynamique, fun et 100% estivale!',
        ageGroup: 'Priorité: 17-25 ans',
        allAges: 'Pour tout âge',
        dates: 'Dates',
        schedule: 'Horaire',
        location: 'Lieu',
        cost: 'Coût',
        registration: 'Inscription',
        finale: 'Finale',
        signup: 'Écris-nous pour réserver ta place',
        playerVoices: 'Voix des joueuses',
        whatPlayersAreEating: 'Ce que disent nos joueuses',
        noTestimonials: 'Les témoignages des joueuses apparaîtront ici bientôt!',
        addTestimonials: 'Collecte des témoignages en cours...',
      }
    },
    en: {
      nav: {
        home: 'Home',
        leagues: 'Leagues',
        team: 'Team',
        faq: 'FAQ'
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to your questions',
        clickToExpand: 'Click to see answer'
      },
      leagues: {
        title: 'Our Leagues',
        subtitle: 'Dynamic, fun volleyball for all levels',
        summer: 'Summer League 2026',
        summerTagline: 'Dynamic, fun and 100% summer!',
        ageGroup: 'Priority: 17-25 years old',
        allAges: 'For all ages',
        dates: 'Dates',
        schedule: 'Schedule',
        location: 'Location',
        cost: 'Cost',
        registration: 'Registration',
        finale: 'Finals',
        signup: 'Email us to reserve your spot',
        playerVoices: 'Player voices',
        whatPlayersAreEating: 'What our players are saying',
        noTestimonials: 'Player testimonials coming soon!',
        addTestimonials: 'Testimonial collection in progress...',
      }
    }
  };

  const t = translations[language];

  // Player testimonials - ready for you to populate
  const playerTestimonials = [
    {
      id: 1,
      name: 'Sarah Dubois',
      quote: 'C\'était tellement fun! L\'ambiance est incroyable et les filles sont très accueillantes. Je reviens l\'année prochaine!',
      image: '😊',
      role: 'Joueuse, 21 ans'
    },
    {
      id: 2,
      name: 'Marie Léveillé',
      quote: 'Super ligue bien organisée. Bonne compétition et super amusant. Merci Volleyball Montréal!',
      image: '⭐',
      role: 'Joueuse, 19 ans'
    },
    {
      id: 3,
      name: 'Jessica Chen',
      quote: 'J\'ai adoré rencontrer d\'autres joueuses. La communauté est dope et l\'équipe s\'occupe vraiment de nous.',
      image: '🔥',
      role: 'Joueuse, 23 ans'
    },
    {
      id: 4,
      name: 'Sophie Martin',
      quote: 'C\'est le fun de jouer en été au CEPSUM avec une belle ambiance. Définitivement je reviens!',
      image: '💪',
      role: 'Joueuse, 25 ans'
    }
  ];

  // Page Components
  const LeaguesPage = () => (
    <main style={styles.main}>
      <h1 style={styles.pageTitle}>{t.leagues.title}</h1>
      <p style={{...styles.p, marginBottom: '3rem', textAlign: 'center', fontSize: '18px', color: '#E63946', fontWeight: '600'}}>
        {t.leagues.subtitle}
      </p>

      {/* SUMMER LEAGUE 2026 */}
      <section style={styles.leagueSection}>
        <div style={styles.summerLeagueHero}>
          <div style={styles.summerLeagueContent}>
            <h2 style={{...styles.h2, color: 'white', marginTop: 0}}>🌞 {t.leagues.summer} 2026</h2>
            <p style={{...styles.p, color: 'white', opacity: 0.95, marginBottom: '1rem'}}>
              {t.leagues.summerTagline}
            </p>
            <div style={styles.badgeContainer}>
              <span style={styles.badge}>{t.leagues.ageGroup}</span>
              <span style={styles.badge}>{t.leagues.allAges}</span>
            </div>
          </div>
          
          <div style={styles.posterPreview}>
            <div style={styles.posterPlaceholder}>
              🎨 POSTER<br/>
              <span style={{fontSize: '12px', opacity: 0.8}}>Affiche été 2026</span>
            </div>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div style={styles.detailsGrid}>
          <div style={styles.detailCard}>
            <div style={styles.detailIcon}>📅</div>
            <h3 style={styles.h3}>{t.leagues.dates}</h3>
            <p style={styles.p}>
              13, 20, 27 juin<br/>
              11, 18, 25 juillet<br/>
              <strong>Finale: 1er août</strong>
            </p>
          </div>

          <div style={styles.detailCard}>
            <div style={styles.detailIcon}>🕐</div>
            <h3 style={styles.h3}>{t.leagues.schedule}</h3>
            <p style={styles.p}>
              Tous les samedis<br/>
              <strong>11h00 - 15h00</strong><br/>
              <small>(Finale: 11h-18h)</small>
            </p>
          </div>

          <div style={styles.detailCard}>
            <div style={styles.detailIcon}>📍</div>
            <h3 style={styles.h3}>{t.leagues.location}</h3>
            <p style={styles.p}>
              CEPSUM<br/>
              2100 Bd Édouard-Montpetit<br/>
              H3T 1J4
            </p>
          </div>

          <div style={styles.detailCard}>
            <div style={styles.detailIcon}>💰</div>
            <h3 style={styles.h3}>{t.leagues.cost}</h3>
            <p style={styles.p}>
              <strong>20$ pour tout l'été</strong><br/>
              <small>7 semaines de jeu</small>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={styles.ctaSection}>
          <h3 style={styles.h3}>Prête à te joindre?</h3>
          <p style={styles.p}>
            Une ligue dynamique, fun et 100% estivale! Des joueuses de tous les niveaux bienvenues.
          </p>
          <button style={styles.btnPrimary}>
            {t.leagues.signup}
          </button>
        </div>
      </section>

      {/* PLAYER TESTIMONIALS SECTION */}
      <section style={styles.testimonialSection}>
        <h2 style={styles.sectionTitle}>{t.leagues.playerVoices}</h2>
        <p style={{...styles.p, textAlign: 'center', marginBottom: '2rem'}}>
          {t.leagues.whatPlayersAreEating}
        </p>

        <div style={styles.testimonialCarousel}>
          {playerTestimonials.length > 0 ? (
            <div style={styles.testimonialCard}>
              <div style={styles.testimonialAvatar}>
                {playerTestimonials[testimonialIndex].image}
              </div>
              <div style={styles.testimonialContent}>
                <p style={{...styles.p, fontSize: '16px', lineHeight: 1.8, fontStyle: 'italic', margin: '1rem 0'}}>
                  "{playerTestimonials[testimonialIndex].quote}"
                </p>
                <p style={{...styles.p, fontWeight: '700', color: '#E63946', margin: 0}}>
                  — {playerTestimonials[testimonialIndex].name}
                </p>
                <p style={{...styles.p, fontSize: '12px', color: '#999', margin: '4px 0 0'}}>
                  {playerTestimonials[testimonialIndex].role}
                </p>
              </div>
            </div>
          ) : (
            <div style={{...styles.testimonialCard, textAlign: 'center', padding: '3rem'}}>
              <p style={{...styles.p, color: '#999'}}>
                {t.leagues.noTestimonials}
              </p>
              <p style={{...styles.p, fontSize: '13px', color: '#999', marginTop: '1rem'}}>
                {t.leagues.addTestimonials}
              </p>
            </div>
          )}

          {/* Navigation */}
          {playerTestimonials.length > 1 && (
            <div style={styles.testimonialNav}>
              <button 
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + playerTestimonials.length) % playerTestimonials.length)}
                style={styles.navButton}
              >
                ← Précédent
              </button>
              <span style={{fontSize: '13px', color: '#999'}}>
                {testimonialIndex + 1} / {playerTestimonials.length}
              </span>
              <button 
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % playerTestimonials.length)}
                style={styles.navButton}
              >
                Suivant →
              </button>
            </div>
          )}
        </div>

        {/* Instructions for testimonials */}
        <div style={styles.testimonialNote}>
          <p style={{...styles.p, fontSize: '13px', color: '#666'}}>
            <strong>💡 Comment ajouter des témoignages:</strong> Collectez des citations de vos joueuses et ajoutez-les à l'array `playerTestimonials` ci-dessus avec leur nom, photo/emoji, et rôle.
          </p>
        </div>
      </section>

      {/* WHY JOIN SECTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Pourquoi se joindre?</h2>
        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>🏐</div>
            <h3 style={styles.h3}>Jouer en été</h3>
            <p style={styles.p}>Profite du beau temps et de nos terrains extérieurs.</p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>👯</div>
            <h3 style={styles.h3}>Nouvelle communauté</h3>
            <p style={styles.p}>Rencontre des joueuses passionnées de Montréal.</p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>⚡</div>
            <h3 style={styles.h3}>Compétition fun</h3>
            <p style={styles.p}>Des matchs compétitifs dans une ambiance détendue.</p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>🎉</div>
            <h3 style={styles.h3}>Finale épique</h3>
            <p style={styles.p}>Culminez avec notre tournoi final le 1er août!</p>
          </div>
        </div>
      </section>
    </main>
  );

  const HomePage = () => (
    <>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.h1}>Volleyball Montréal</h1>
          <div style={styles.subtitle}>Où le volleyball, l'esprit d'équipe et le plaisir se rencontrent</div>
          <p style={styles.heroDesc}>L'Association régionale Volleyball Montréal regroupe les meilleurs clubs et ligues de la région. Que vous soyez débutant ou compétiteur, trouvez votre place sur nos terrains!</p>
          <div style={styles.heroButtons}>
            <button style={styles.btnPrimary} onClick={() => setCurrentPage('leagues')}>
              Explorez les ligues
            </button>
            <button style={styles.btnSecondary}>Devenir membre</button>
          </div>
        </div>
      </div>

      <main style={styles.main}>
        <div style={styles.mission}>
          <h2 style={styles.h2}>Notre mission</h2>
          <p style={styles.p}>Être le point de référence pour la communauté du volleyball à Montréal. Nous créons un guichet unique où les joueurs, clubs et ligues trouvent facilement l'information, les ressources et les opportunités pour se développer et exceller dans leur passion.</p>
        </div>

        <div style={styles.visionSection}>
          <h2 style={{...styles.sectionTitle, marginBottom: '2rem'}}>Pourquoi Volleyball Montréal?</h2>
          <div style={styles.visionGrid}>
            <div style={styles.visionCard}>
              <div style={styles.visionIcon}>🎯</div>
              <h3 style={styles.h3}>Ce que nous sommes</h3>
              <p style={styles.p}>Volleyball Montréal est l'Association régionale officielle reconnue par Volleyball Québec et Volleyball Canada. Nous regroupons plus de 50 clubs, 2,300+ joueurs et 15+ terrains. Notre mission est de créer une infrastructure sportive structurée, professionnelle et accueillante pour tous les niveaux et tous les âges.</p>
            </div>

            <div style={styles.visionCard}>
              <div style={styles.visionIcon}>🌍</div>
              <h3 style={styles.h3}>Notre vision</h3>
              <p style={styles.p}>Unifier la communauté du volleyball sur les îles de Montréal. Nous rêvons d'une région où chaque club collabore, où chaque ligue se complète, et où chaque joueur trouve sa place. Ensemble, nous créons un écosystème volleyball fort où les athlètes peuvent se développer du niveau récréatif jusqu'aux élites, tout en restant connectés à leur communauté locale.</p>
            </div>

            <div style={styles.visionCard}>
              <div style={styles.visionIcon}>❤️</div>
              <h3 style={styles.h3}>Pourquoi nous rejoindre</h3>
              <p style={styles.p}>Chaque personne compte. Joueur ou joueuse, entraîneur ou entraîneure, bénévole ou parent - votre contribution façonne notre communauté. En rejoignant Volleyball Montréal, vous ne rejoignez pas juste une association. Vous devenez part d'un mouvement collectif pour grandir le volleyball à Montréal et inspirer la prochaine génération. Votre voix, votre énergie, vos rêves - tous importent.</p>
            </div>
          </div>
        </div>

        <div style={styles.stats}>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>47+</div>
            <div style={styles.statLabel}>Événements/semaine</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>2,300+</div>
            <div style={styles.statLabel}>Joueurs actifs</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Clubs affiliés</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>15+</div>
            <div style={styles.statLabel}>Terrains</div>
          </div>
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Se connecter selon votre profil</h2>
          <div style={styles.portals}>
            <div style={styles.portalCard}>
              <div style={styles.portalIcon}>🎯</div>
              <h3 style={styles.h3}>Pour les joueurs</h3>
              <p style={styles.p}>Trouvez une ligue, inscrivez-vous aux événements et connectez-vous avec d'autres joueurs passionnés.</p>
              <button style={styles.btnPortal} onClick={() => setCurrentPage('leagues')}>
                Voir les ligues
              </button>
            </div>
            <div style={styles.portalCard}>
              <div style={styles.portalIcon}>🏢</div>
              <h3 style={styles.h3}>Pour les clubs</h3>
              <p style={styles.p}>Gérez votre club, accédez aux ressources et collaborez avec les autres clubs affiliés.</p>
              <button style={styles.btnPortal}>Accès clubs</button>
            </div>
            <div style={styles.portalCard}>
              <div style={styles.portalIcon}>🏆</div>
              <h3 style={styles.h3}>Pour les ligues</h3>
              <p style={styles.p}>Administrez vos ligues, créez des calendriers et suivez les performances en direct.</p>
              <button style={styles.btnPortal}>Accès ligues</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );

  const TeamPage = () => (
    <main style={styles.main}>
      <h1 style={styles.pageTitle}>Notre Équipe</h1>
      <p style={{...styles.p, marginBottom: '3rem', textAlign: 'center', fontSize: '18px', color: '#E63946', fontWeight: '600'}}>
        Rencontrez les personnes derrière Volleyball Montréal
      </p>

      {/* BOARD MEMBERS */}
      <section style={{marginBottom: '4rem'}}>
        <h2 style={{...styles.sectionTitle, marginBottom: '2rem'}}>Conseil d'Administration</h2>
        <div style={styles.teamGrid}>
          {teamMembers.board.map((member) => (
            <div key={member.id} style={styles.teamCard}>
              <div style={styles.teamAvatar}>{member.image}</div>
              <h3 style={{...styles.h3, margin: '1rem 0 8px'}}>{member.name}</h3>
              <p style={{...styles.p, fontSize: '14px', color: '#E63946', fontWeight: '600', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                {member.role}
              </p>
              <a href={`mailto:${member.email}`} style={{...styles.p, color: '#E63946', textDecoration: 'none', fontSize: '13px'}}>
                ✉️ {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* STAFF MEMBERS */}
      <section style={{marginBottom: '4rem'}}>
        <h2 style={{...styles.sectionTitle, marginBottom: '2rem'}}>Équipe</h2>
        <div style={styles.teamGrid}>
          {teamMembers.staff.map((member) => (
            <div key={member.id} style={styles.teamCard}>
              <div style={styles.teamAvatar}>{member.image}</div>
              <h3 style={{...styles.h3, margin: '1rem 0 8px'}}>{member.name}</h3>
              <p style={{...styles.p, fontSize: '14px', color: '#E63946', fontWeight: '600', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                {member.role}
              </p>
              <a href={`mailto:${member.email}`} style={{...styles.p, color: '#E63946', textDecoration: 'none', fontSize: '13px'}}>
                ✉️ {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN THE TEAM */}
      <section style={{...styles.ctaSection, maxWidth: '900px', margin: '0 auto'}}>
        <h3 style={styles.h3}>Intéressé(e) à nous rejoindre?</h3>
        <p style={styles.p}>
          Volleyball Montréal cherche toujours des bénévoles passionnés et des collaborateurs. Que vous ayez des talents en communication, gestion, événements ou coaching - nous avons besoin de vous!
        </p>
        <p style={{...styles.p, fontSize: '13px', color: '#E63946', fontWeight: '600'}}>
          📧 Contactez-nous: coordo@volleyballmontreal.com
        </p>
      </section>
    </main>
  );

  const FaqPage = () => (
    <main style={styles.main}>
      <h1 style={styles.pageTitle}>{t.faq.title}</h1>
      <p style={{...styles.p, marginBottom: '3rem', textAlign: 'center', fontSize: '18px', color: '#E63946', fontWeight: '600'}}>
        {t.faq.subtitle}
      </p>

      <section style={{maxWidth: '900px', margin: '0 auto'}}>
        {faqData.map((item, index) => (
          <div key={item.id} style={styles.faqItem}>
            <button
              style={{...styles.faqButton, borderTop: index === 0 ? '2px solid #E63946' : 'none'}}
              onClick={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
            >
              <span style={styles.faqQuestion}>{item.question}</span>
              <span style={{...styles.faqToggle, transform: expandedFaqIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                ▼
              </span>
            </button>
            {expandedFaqIndex === index && (
              <div style={styles.faqAnswer}>
                <p style={styles.p}>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <div style={styles.faqFooter}>
        <h3 style={styles.h3}>Vous n'avez pas trouvé la réponse?</h3>
        <p style={styles.p}>Contactez-nous directement!</p>
        <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div>
            <p style={{...styles.p, fontWeight: '600', color: '#E63946', margin: '0 0 8px'}}>📞 Téléphone</p>
            <p style={{...styles.p, margin: 0}}>+1 (438) 930-5668</p>
          </div>
          <div>
            <p style={{...styles.p, fontWeight: '600', color: '#E63946', margin: '0 0 8px'}}>📧 Email</p>
            <p style={{...styles.p, margin: 0}}>coordo@volleyballmontreal.com</p>
          </div>
        </div>
      </div>
    </main>
  );

  const pages = {
    home: <HomePage />,
    leagues: <LeaguesPage />,
    team: <TeamPage />,
    faq: <FaqPage />,
  };

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      color: '#1a1a1a',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      backgroundColor: 'white',
      borderBottom: '3px solid #E63946',
      padding: '0.75rem 1.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    headerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '18px',
      fontWeight: '700',
      color: '#E63946'
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      flex: 1,
      marginLeft: '3rem'
    },
    navLink: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#1a1a1a',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '0.5rem 0',
      transition: 'color 0.2s'
    },
    langSwitch: {
      display: 'flex',
      gap: '8px'
    },
    langBtn: {
      background: 'none',
      border: 'none',
      fontSize: '12px',
      fontWeight: '600',
      color: '#666',
      cursor: 'pointer',
      padding: '4px 8px'
    },
    langBtnActive: {
      color: '#E63946',
      borderBottom: '2px solid #E63946'
    },
    hero: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      padding: '4rem 1.5rem',
      textAlign: 'center',
      color: 'white'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    h1: {
      fontSize: '42px',
      fontWeight: '700',
      marginBottom: '12px'
    },
    h2: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#1a1a1a'
    },
    h3: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '12px'
    },
    subtitle: {
      fontSize: '20px',
      color: '#E63946',
      marginBottom: '1.5rem',
      fontWeight: '600'
    },
    heroDesc: {
      fontSize: '16px',
      marginBottom: '2rem',
      opacity: 0.95,
      lineHeight: 1.8,
      maxWidth: '700px',
      margin: '0 auto 2rem'
    },
    heroButtons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    btnPrimary: {
      padding: '13px 32px',
      borderRadius: '4px',
      border: 'none',
      fontSize: '15px',
      fontWeight: '700',
      cursor: 'pointer',
      backgroundColor: '#E63946',
      color: 'white',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      transition: 'all 0.2s'
    },
    btnSecondary: {
      padding: '13px 32px',
      borderRadius: '4px',
      border: '2px solid white',
      fontSize: '15px',
      fontWeight: '700',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      color: 'white',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      transition: 'all 0.2s'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 1.5rem',
      flex: 1,
      width: '100%'
    },
    pageTitle: {
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '2rem',
      color: '#1a1a1a'
    },
    mission: {
      backgroundColor: 'white',
      borderLeft: '5px solid #E63946',
      padding: '2rem',
      borderRadius: '4px',
      marginBottom: '3rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    },
    visionSection: {
      marginBottom: '3rem'
    },
    visionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '3rem'
    },
    visionCard: {
      backgroundColor: 'white',
      border: '2px solid #f0f0f0',
      borderRadius: '8px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      transition: 'all 0.3s',
      borderTop: '4px solid #E63946'
    },
    visionIcon: {
      fontSize: '48px',
      marginBottom: '16px'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '20px',
      marginBottom: '3rem'
    },
    teamCard: {
      backgroundColor: 'white',
      border: '2px solid #f0f0f0',
      borderRadius: '8px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      borderTop: '4px solid #E63946',
      transition: 'all 0.3s'
    },
    teamAvatar: {
      fontSize: '64px',
      marginBottom: '1rem'
    },
    ctaSection: {
      backgroundColor: '#f9f9f9',
      border: '2px solid #E63946',
      borderRadius: '8px',
      padding: '3rem',
      textAlign: 'center'
    },
    p: {
      fontSize: '15px',
      color: '#555',
      lineHeight: 1.8
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '16px',
      marginBottom: '3rem'
    },
    statBox: {
      backgroundColor: 'white',
      border: '2px solid #E63946',
      borderRadius: '4px',
      padding: '1.5rem',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(230, 57, 70, 0.08)'
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#E63946'
    },
    statLabel: {
      fontSize: '12px',
      color: '#666',
      marginTop: '8px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    section: {
      marginBottom: '3rem'
    },
    sectionTitle: {
      fontSize: '26px',
      fontWeight: '700',
      marginBottom: '2rem',
      color: '#1a1a1a'
    },
    portals: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '3rem'
    },
    portalCard: {
      backgroundColor: 'white',
      border: '2px solid #f0f0f0',
      borderRadius: '4px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s'
    },
    portalIcon: {
      fontSize: '48px',
      marginBottom: '16px'
    },
    btnPortal: {
      backgroundColor: '#E63946',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '4px',
      border: 'none',
      fontWeight: '700',
      cursor: 'pointer',
      width: '100%',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontSize: '13px',
      marginTop: '12px'
    },

    // LEAGUES PAGE STYLES
    leagueSection: {
      marginBottom: '4rem'
    },
    summerLeagueHero: {
      background: 'linear-gradient(135deg, #E63946 0%, #c91f35 100%)',
      borderRadius: '8px',
      padding: '3rem',
      marginBottom: '3rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      alignItems: 'center',
      color: 'white',
      boxShadow: '0 4px 16px rgba(230, 57, 70, 0.2)'
    },
    summerLeagueContent: {
      color: 'white'
    },
    badgeContainer: {
      display: 'flex',
      gap: '12px',
      marginTop: '1.5rem'
    },
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(255,255,255,0.2)',
      border: '1px solid rgba(255,255,255,0.5)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    posterPreview: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    posterPlaceholder: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      border: '2px dashed rgba(255,255,255,0.5)',
      borderRadius: '8px',
      padding: '3rem 2rem',
      textAlign: 'center',
      color: 'white',
      fontSize: '14px',
      fontWeight: '600'
    },
    detailsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px',
      marginBottom: '3rem'
    },
    detailCard: {
      backgroundColor: 'white',
      border: '2px solid #f0f0f0',
      borderRadius: '8px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      transition: 'all 0.3s'
    },
    detailIcon: {
      fontSize: '32px',
      marginBottom: '12px'
    },
    testimonialSection: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '3rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      marginBottom: '3rem'
    },
    testimonialCarousel: {
      maxWidth: '700px',
      margin: '0 auto'
    },
    testimonialCard: {
      backgroundColor: 'white',
      border: '2px solid #f0f0f0',
      borderRadius: '8px',
      padding: '2.5rem',
      textAlign: 'center',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      marginBottom: '2rem'
    },
    testimonialAvatar: {
      fontSize: '56px',
      marginBottom: '1.5rem'
    },
    testimonialContent: {
      textAlign: 'center'
    },
    testimonialNav: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      marginTop: '2rem'
    },
    navButton: {
      backgroundColor: 'white',
      border: '2px solid #E63946',
      color: '#E63946',
      padding: '10px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '13px',
      transition: 'all 0.2s'
    },
    testimonialNote: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #E63946',
      borderRadius: '8px',
      padding: '1.5rem',
      marginTop: '2rem'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px'
    },
    benefitCard: {
      backgroundColor: 'white',
      border: '2px solid #f0f0f0',
      borderRadius: '8px',
      padding: '2rem',
      textAlign: 'center',
      borderTop: '4px solid #E63946'
    },
    benefitIcon: {
      fontSize: '40px',
      marginBottom: '12px'
    },
    faqItem: {
      borderBottom: '1px solid #f0f0f0',
      marginBottom: 0
    },
    faqButton: {
      width: '100%',
      padding: '1.5rem',
      backgroundColor: 'white',
      border: 'none',
      borderBottom: '1px solid #f0f0f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: '15px'
    },
    faqQuestion: {
      textAlign: 'left',
      fontWeight: '600',
      color: '#1a1a1a',
      flex: 1
    },
    faqToggle: {
      color: '#E63946',
      fontSize: '12px',
      fontWeight: '700',
      transition: 'transform 0.3s',
      marginLeft: '1rem',
      flexShrink: 0
    },
    faqAnswer: {
      backgroundColor: '#f9f9f9',
      padding: '2rem 1.5rem',
      borderBottom: '2px solid #E63946'
    },
    faqFooter: {
      backgroundColor: 'white',
      border: '2px solid #E63946',
      borderRadius: '8px',
      padding: '3rem',
      textAlign: 'center',
      marginTop: '3rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    },
    footer: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '2.5rem 1.5rem 2rem',
      marginTop: '4rem'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '2.5rem',
      marginBottom: '2.5rem'
    },
    footerTitle: {
      fontSize: '13px',
      fontWeight: '700',
      marginBottom: '16px',
      color: '#E63946',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    footerLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      marginBottom: '10px',
      display: 'block',
      fontSize: '13px'
    },
    footerBottom: {
      textAlign: 'center',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.6)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoSection}>
            🏐 Volleyball Montréal
          </div>
          <nav style={styles.nav}>
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                style={styles.navLink}
                onClick={() => {
                  setCurrentPage(key);
                  window.scrollTo(0, 0);
                }}
              >
                {label}
              </button>
            ))}
          </nav>
          <div style={styles.langSwitch}>
            <button
              style={{...styles.langBtn, ...(language === 'fr' ? styles.langBtnActive : {})}}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
            <span style={{color: '#ccc'}}>|</span>
            <button
              style={{...styles.langBtn, ...(language === 'en' ? styles.langBtnActive : {})}}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Pages */}
      {pages[currentPage]}

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div>
            <div style={styles.footerTitle}>À propos</div>
            <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Accueil</button>
            <button onClick={() => { setCurrentPage('team'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Notre équipe</button>
            <button onClick={() => { setCurrentPage('faq'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Questions</button>
          </div>
          <div>
            <div style={styles.footerTitle}>Ressources</div>
            <button onClick={() => { setCurrentPage('leagues'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Nos Ligues</button>
            <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Vision</button>
            <button onClick={() => { setCurrentPage('faq'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Règlements</button>
          </div>
          <div>
            <div style={styles.footerTitle}>Se connecter</div>
            <button onClick={() => { setCurrentPage('leagues'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Pour les joueurs</button>
            <button onClick={() => { setCurrentPage('leagues'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Pour les clubs</button>
            <button onClick={() => { setCurrentPage('leagues'); window.scrollTo(0, 0); }} style={{...styles.footerLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Pour les ligues</button>
          </div>
          <div>
            <div style={styles.footerTitle}>Nous joindre</div>
            <a href="tel:+14389305668" style={styles.footerLink}>+1 (438) 930-5668</a>
            <a href="mailto:coordo@volleyballmontreal.com" style={styles.footerLink}>coordo@volleyballmontreal.com</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          © 2026 Association régionale Volleyball Montréal. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default VolleyballMontreal;
