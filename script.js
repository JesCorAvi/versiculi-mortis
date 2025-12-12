// Particle System
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"

    // Random position
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"

    // Random animation delay and duration
    particle.style.animationDelay = Math.random() * 10 + "s"
    particle.style.animationDuration = Math.random() * 10 + 10 + "s"

    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1

    particlesContainer.appendChild(particle)
  }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll(".feature-card, .character-card, .world-item")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Character card interactions
function initCharacterCards() {
  const characterCards = document.querySelectorAll(".character-card")

  characterCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const charName = this.querySelector("h3").textContent
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Glitch effect on title
function initGlitchEffect() {
  const glitchText = document.querySelector(".glitch-text")

  if (glitchText) {
    const dataText = glitchText.getAttribute("data-text")

    setInterval(() => {
      if (Math.random() > 0.95) {
        glitchText.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff3e6e,
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #3eff7f,
                    0 0 20px var(--shadow-glow)
                `

        // Brief text flicker effect
        if (dataText && Math.random() > 0.7) {
          const originalText = glitchText.textContent
          glitchText.textContent = dataText
          setTimeout(() => {
            glitchText.textContent = originalText
          }, 50)
        }

        setTimeout(() => {
          glitchText.style.textShadow = "0 0 20px var(--shadow-glow)"
        }, 100)
      }
    }, 2000)
  }
}

// Navbar background on scroll
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(10, 10, 15, 0.95)"
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)"
    } else {
      navbar.style.background = "rgba(10, 10, 15, 0.9)"
      navbar.style.boxShadow = "none"
    }
  })
}

// Cursor trail effect
function initCursorTrail() {
  let mouseX = 0
  let mouseY = 0
  const trails = []

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Create trail element occasionally
    if (Math.random() > 0.9) {
      const trail = document.createElement("div")
      trail.style.position = "fixed"
      trail.style.left = mouseX + "px"
      trail.style.top = mouseY + "px"
      trail.style.width = "4px"
      trail.style.height = "4px"
      trail.style.background = "var(--accent-green)"
      trail.style.borderRadius = "50%"
      trail.style.pointerEvents = "none"
      trail.style.opacity = "0.6"
      trail.style.zIndex = "9999"
      trail.style.transition = "all 0.5s ease"

      document.body.appendChild(trail)

      setTimeout(() => {
        trail.style.opacity = "0"
        trail.style.transform = "scale(0)"
      }, 10)

      setTimeout(() => {
        trail.remove()
      }, 600)
    }
  })
}

// Internationalization System
const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.story": "Historia",
    "nav.characters": "Personajes",
    "nav.world": "Mundo",
    "hero.subtitle": "Una novela interactiva basada en el mundo de Anima: Beyond Fantasy",
    "hero.tagline": '"La vida y la muerte son conceptos vagos de la misma moneda"',
    "hero.play": "Jugar Ahora",
    "hero.discover": "Descubrir Más",
    "synopsis.title": "Una Historia de Sombras",
    "synopsis.lead":
      "En el mundo de Gaïa, la humanidad vive en un olvido forzado. La historia fue purgada, la magia declarada herejía, y el conocimiento prohibido.",
    "synopsis.p1":
      "Emma Bianchi era una niña brillante con un futuro prometedor. Hasta la noche en que todo se tiñó de rojo.",
    "synopsis.p2":
      "Cuando la muerte le arrebató todo lo que amaba, Emma descubrió un poder prohibido: la nigromancia. Ahora debe decidir entre aceptar el orden natural... o lanzar la moneda al aire.",
    "synopsis.warning.title": "Advertencia:",
    "synopsis.warning.text": "Esta historia interactiva contiene temas oscuros, violencia y muerte.",
    "features.branching.title": "Historia Ramificada",
    "features.branching.desc":
      "Tus decisiones moldean el destino de Emma y definen su camino entre la luz y la oscuridad",
    "features.dark.title": "Fantasía Oscura",
    "features.dark.desc": "Explora un mundo de magia prohibida, secretos ancestrales y poderes que desafían la muerte",
    "features.endings.title": "Múltiples Finales",
    "features.endings.desc": "Cada elección cuenta. Descubre los diferentes destinos que aguardan a Emma Bianchi",
    "characters.title": "Personajes",
    "characters.emma.role": "Protagonista",
    "characters.emma.desc":
      "Una niña brillante cuyo mundo se derrumbó en una sola noche. Ahora debe elegir entre aceptar la muerte... o desafiarla.",
    "characters.lorenzo.role": "Hermano Mayor",
    "characters.lorenzo.desc":
      "Carismático y protector, Lorenzo era el pilar de confianza de Emma. Su destino cambió todo.",
    "characters.balthassar.role": "El Mentor",
    "characters.balthassar.desc": "Una figura misteriosa en armadura. Científico, mentor... ¿o algo más oscuro?",
    "characters.voice.name": "La Voz",
    "characters.voice.role": "Narrador Enigmático",
    "characters.voice.desc":
      "Antigua y familiar, la voz que guía tu viaje a través de la oscuridad. ¿Quién es realmente?",
    "world.title": "El Mundo de Gaïa",
    "world.forgotten.title": "Un Mundo en Olvido",
    "world.forgotten.desc":
      "Gaïa es un mundo atrapado en la ignorancia. Un terrible conflicto del pasado borró la memoria de la humanidad, y el Imperio declaró que todo conocimiento oculto es herejía.",
    "world.magic.title": "Magia Prohibida",
    "world.magic.desc":
      "Tres formas de poder sobreviven en las sombras: la manipulación de la realidad por conocimiento, el control de la energía vital y los poderes de la mente. Todos perseguidos por la Inquisición.",
    "world.necromancy.title": "La Nigromancia",
    "world.necromancy.desc":
      "El poder más temido de todos. La capacidad de desafiar la muerte misma y manipular la frontera entre la vida y el más allá.",
    "footer.title": "Versiculi Mortis",
    "footer.subtitle": "Una historia interactiva de fantasía oscura",
    "footer.content": "Contenido",
    "footer.play.title": "Juega Ahora",
    "footer.play.available": "Disponible gratuitamente en itch.io",
    "footer.play.button": "Jugar en itch.io",
    "footer.warning.title": "Advertencia:",
    "footer.warning.text": "Contiene temas maduros incluyendo violencia, muerte y contenido oscuro.",
    "footer.copyright":
      '&copy; 2025 Versiculi Mortis - Desarrollado por <a href="https://github.com/JesCorAvi" target="_blank" rel="noopener noreferrer" style="color: var(--accent-green); text-decoration: none;">JesCorAvi</a>',
  },
  en: {
    "nav.home": "Home",
    "nav.story": "Story",
    "nav.characters": "Characters",
    "nav.world": "World",
    "hero.subtitle": "An interactive novel based on the world of Anima: Beyond Fantasy",
    "hero.tagline": '"Life and death are vague concepts of the same coin"',
    "hero.play": "Play Now",
    "hero.discover": "Discover More",
    "synopsis.title": "A Tale of Shadows",
    "synopsis.lead":
      "In the world of Gaïa, humanity lives in forced oblivion. History was purged, magic declared heresy, and knowledge forbidden.",
    "synopsis.p1": "Emma Bianchi was a brilliant girl with a promising future. Until the night everything turned red.",
    "synopsis.p2":
      "When death took everything she loved, Emma discovered a forbidden power: necromancy. Now she must decide between accepting the natural order... or flipping the coin.",
    "synopsis.warning.title": "Warning:",
    "synopsis.warning.text": "This interactive story contains dark themes, violence, and death.",
    "features.branching.title": "Branching Story",
    "features.branching.desc": "Your choices shape Emma's destiny and define her path between light and darkness",
    "features.dark.title": "Dark Fantasy",
    "features.dark.desc": "Explore a world of forbidden magic, ancient secrets, and powers that defy death",
    "features.endings.title": "Multiple Endings",
    "features.endings.desc": "Every choice matters. Discover the different fates that await Emma Bianchi",
    "characters.title": "Characters",
    "characters.emma.role": "Protagonist",
    "characters.emma.desc":
      "A brilliant girl whose world crumbled in a single night. Now she must choose between accepting death... or defying it.",
    "characters.lorenzo.role": "Older Brother",
    "characters.lorenzo.desc":
      "Charismatic and protective, Lorenzo was Emma's pillar of trust. His fate changed everything.",
    "characters.balthassar.role": "The Mentor",
    "characters.balthassar.desc": "A mysterious figure in armor. Scientist, mentor... or something darker?",
    "characters.voice.name": "The Voice",
    "characters.voice.role": "Enigmatic Narrator",
    "characters.voice.desc":
      "Ancient and familiar, the voice that guides your journey through darkness. Who is it really?",
    "world.title": "The World of Gaïa",
    "world.forgotten.title": "A World in Oblivion",
    "world.forgotten.desc":
      "Gaïa is a world trapped in ignorance. A terrible conflict of the past erased humanity's memory, and the Empire declared all occult knowledge as heresy.",
    "world.magic.title": "Forbidden Magic",
    "world.magic.desc":
      "Three forms of power survive in the shadows: reality manipulation through knowledge, control of vital energy, and powers of the mind. All hunted by the Inquisition.",
    "world.necromancy.title": "Necromancy",
    "world.necromancy.desc":
      "The most feared power of all. The ability to defy death itself and manipulate the boundary between life and beyond.",
    "footer.title": "Versiculi Mortis",
    "footer.subtitle": "An interactive dark fantasy story",
    "footer.content": "Content",
    "footer.play.title": "Play Now",
    "footer.play.available": "Available for free on itch.io",
    "footer.play.button": "Play on itch.io",
    "footer.warning.title": "Warning:",
    "footer.warning.text": "Contains mature themes including violence, death, and dark content.",
    "footer.copyright":
      '&copy; 2025 Versiculi Mortis - Developed by <a href="https://github.com/JesCorAvi" target="_blank" rel="noopener noreferrer" style="color: var(--accent-green); text-decoration: none;">JesCorAvi</a>',
  },
}

// Get saved language or default to Spanish
let currentLang = localStorage.getItem("language") || "es"

function changeLanguage(lang) {
  const contentWrapper = document.querySelector(".content-wrapper")

  // Fade out content
  contentWrapper.classList.add("fading")

  // Wait for fade out animation to complete
  setTimeout(() => {
    currentLang = lang
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang

    // Update all translatable elements
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n")
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key]
      }
    })

    // Update active button
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active")
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active")
      }
    })

    // Fade in content
    contentWrapper.classList.remove("fading")
  }, 300) // Match the CSS transition duration
}

// Initialize language selector
function initLanguageSelector() {
  const langButtons = document.querySelectorAll(".lang-btn")
  const languageSelector = document.querySelector(".language-selector")

  langButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang")

      if (lang === "en") {
        languageSelector.classList.add("en-active")
      } else {
        languageSelector.classList.remove("en-active")
      }

      changeLanguage(lang)

      // Add a subtle click effect
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = ""
      }, 100)
    })
  })

  // Apply saved language on load
  changeLanguage(currentLang)

  if (currentLang === "en") {
    languageSelector.classList.add("en-active")
  } else {
    languageSelector.classList.remove("en-active")
  }
}

// Initialize all functions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createParticles()
  initSmoothScroll()
  initScrollAnimations()
  initCharacterCards()
  initGlitchEffect()
  initNavbarScroll()
  initCursorTrail()
  initLanguageSelector()

  console.log("Versiculi Mortis - Web initialized")
})

// Easter egg: Konami code
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]
let konamiIndex = 0

document.addEventListener("keydown", (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++
    if (konamiIndex === konamiCode.length) {
      document.body.style.filter = "hue-rotate(180deg)"
      setTimeout(() => {
        document.body.style.filter = "none"
      }, 3000)
      konamiIndex = 0
    }
  } else {
    konamiIndex = 0
  }
})
