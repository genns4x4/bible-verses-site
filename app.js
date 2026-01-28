// Verse library: keep all data in one place for fast loading.
const verseCategories = [
  {
    category: "Anxiety / Worry",
    verses: [
      {
        reference: "Philippians 4:6–7",
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        explanation:
          "This verse reminds us that worry doesn’t have to stay trapped in our minds. God invites us to bring every concern to Him, even the small ones. When we do, His peace steps in and protects our hearts.",
      },
      {
        reference: "Matthew 6:34",
        text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
        explanation:
          "God is telling you to stay in today. Tomorrow will come with its own answers. You are not meant to carry everything at once.",
      },
      {
        reference: "1 Peter 5:7",
        text: "Cast all your anxiety on him because he cares for you.",
        explanation:
          "You are not annoying God with your worries. He actually wants to carry them for you because He cares deeply about you.",
      },
      {
        reference: "Psalm 94:19",
        text: "When anxiety was great within me, your consolation brought me joy.",
        explanation:
          "When your thoughts feel overwhelming, God knows how to calm your heart. His comfort can bring peace even in mental chaos.",
      },
      {
        reference: "Isaiah 41:10",
        text: "So do not fear, for I am with you; do not be dismayed, for I am your God.",
        explanation:
          "Fear doesn’t mean you’re alone. God promises to stay with you and strengthen you when you feel weak or unsure.",
      },
      {
        reference: "Psalm 56:3",
        text: "When I am afraid, I put my trust in you.",
        explanation:
          "Fear happens, but trust is a choice. This verse reminds us we can lean on God even while we’re afraid.",
      },
    ],
  },
  {
    category: "Brokenhearted / Depression",
    verses: [
      {
        reference: "Psalm 34:18",
        text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        explanation:
          "Feeling broken does not push God away. It actually draws Him closer. He is near when you feel low.",
      },
      {
        reference: "Lamentations 3:22–23",
        text: "Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning.",
        explanation:
          "Even after hard days, God’s mercy resets each morning. Yesterday doesn’t define today.",
      },
      {
        reference: "Psalm 42:11",
        text: "Why, my soul, are you downcast? Put your hope in God, for I will yet praise him.",
        explanation:
          "It’s okay to admit when your soul feels heavy. This verse encourages you to speak hope to yourself and keep trusting God.",
      },
      {
        reference: "Isaiah 53:4",
        text: "Surely he took up our pain and bore our suffering.",
        explanation:
          "God understands pain personally. Jesus experienced suffering, so your pain is not invisible or misunderstood.",
      },
      {
        reference: "Psalm 30:5",
        text: "Weeping may stay for the night, but rejoicing comes in the morning.",
        explanation:
          "Pain may last, but it is not permanent. Joy has a way of returning, even after long nights.",
      },
      {
        reference: "John 16:33",
        text: "In this world you will have trouble. But take heart! I have overcome the world.",
        explanation:
          "Life will have struggles, but Jesus reminds us that He has already overcome them. You are not fighting alone.",
      },
    ],
  },
  {
    category: "Loneliness / God With You",
    verses: [
      {
        reference: "Psalm 68:6",
        text: "God sets the lonely in families.",
        explanation:
          "Loneliness is not your final destination. God creates connection, belonging, and family in unexpected ways.",
      },
      {
        reference: "Matthew 28:20",
        text: "Surely I am with you always, to the very end of the age.",
        explanation:
          "God’s presence doesn’t expire. He stays with you through every season of life.",
      },
      {
        reference: "Psalm 23:4",
        text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
        explanation:
          "Even in your darkest moments, you are not abandoned. God walks beside you through every valley.",
      },
      {
        reference: "Isaiah 43:2",
        text: "When you pass through the waters, I will be with you.",
        explanation:
          "Hard seasons may come, but they will not destroy you. God promises His presence through them.",
      },
      {
        reference: "Hebrews 13:5",
        text: "Never will I leave you; never will I forsake you.",
        explanation:
          "God does not walk away when life gets messy. His commitment to you is steady and unchanging.",
      },
    ],
  },
  {
    category: "Fear / Courage",
    verses: [
      {
        reference: "Deuteronomy 31:6",
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        explanation:
          "You don’t have to be fearless to move forward. God promises to walk with you wherever life takes you.",
      },
      {
        reference: "Joshua 1:9",
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        explanation:
          "Courage doesn’t come from confidence alone — it comes from knowing God is with you.",
      },
      {
        reference: "2 Timothy 1:7",
        text: "For God has not given us a spirit of fear, but of power, love, and a sound mind.",
        explanation:
          "Fear is not from God. He gives strength, love, and clarity even when anxiety tries to take over.",
      },
      {
        reference: "Psalm 118:6",
        text: "The Lord is with me; I will not be afraid. What can mere mortals do to me?",
        explanation: "When God stands with you, fear doesn’t get the final word.",
      },
      {
        reference: "Isaiah 41:13",
        text: "For I am the Lord your God who takes hold of your right hand and says to you, Do not fear.",
        explanation:
          "God is not distant. He holds your hand and reassures you when fear feels close.",
      },
      {
        reference: "Psalm 34:4",
        text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
        explanation: "God listens. When you seek Him, He helps free you from fear’s grip.",
      },
    ],
  },
  {
    category: "Temptation / Freedom / Growth",
    verses: [
      {
        reference: "1 Corinthians 10:13",
        text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear.",
        explanation:
          "You are never trapped with no way out. God always provides a path forward, even in difficult moments.",
      },
      {
        reference: "James 4:7",
        text: "Submit yourselves, then, to God. Resist the devil, and he will flee from you.",
        explanation:
          "When you turn toward God, harmful influences lose their power over you.",
      },
      {
        reference: "Galatians 5:1",
        text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.",
        explanation: "God wants you free — not weighed down by guilt, fear, or past mistakes.",
      },
      {
        reference: "Romans 12:2",
        text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
        explanation:
          "Change begins in the mind. God helps renew your thinking so you can grow into who you’re meant to be.",
      },
      {
        reference: "Psalm 119:11",
        text: "I have hidden your word in my heart that I might not sin against you.",
        explanation:
          "Keeping God’s word close helps guide your choices and protect your heart.",
      },
      {
        reference: "Titus 2:11–12",
        text: "The grace of God has appeared that offers salvation to all people. It teaches us to say 'No' to ungodliness.",
        explanation: "God’s grace doesn’t just forgive — it teaches and shapes how we live.",
      },
    ],
  },
  {
    category: "Relationships / Boundaries",
    verses: [
      {
        reference: "1 Corinthians 15:33",
        text: "Do not be misled: Bad company corrupts good character.",
        explanation:
          "The people around you influence you. This verse encourages wisdom in choosing close relationships.",
      },
      {
        reference: "Proverbs 4:23",
        text: "Above all else, guard your heart, for everything you do flows from it.",
        explanation: "Your heart matters. Protecting it helps shape your future.",
      },
      {
        reference: "Proverbs 13:20",
        text: "Walk with the wise and become wise, for a companion of fools suffers harm.",
        explanation:
          "Wisdom grows through good company. Who you walk with matters.",
      },
      {
        reference: "Psalm 1:1",
        text: "Blessed is the one who does not walk in step with the wicked.",
        explanation:
          "You don’t have to follow harmful paths to belong. God blesses those who choose wisely.",
      },
      {
        reference: "Romans 12:18",
        text: "If it is possible, as far as it depends on you, live at peace with everyone.",
        explanation: "Peace is valuable, but it’s okay to set boundaries when needed.",
      },
      {
        reference: "Proverbs 22:24–25",
        text: "Do not make friends with a hot-tempered person. You may learn their ways and get yourself ensnared.",
        explanation:
          "Some relationships can pull you into unhealthy patterns. God encourages discernment.",
      },
    ],
  },
  {
    category: "Healing / Hope / Provision",
    verses: [
      {
        reference: "Psalm 147:3",
        text: "He heals the brokenhearted and binds up their wounds.",
        explanation:
          "God doesn’t ignore wounds — He heals them gently and intentionally.",
      },
      {
        reference: "Romans 8:28",
        text: "In all things God works for the good of those who love him.",
        explanation:
          "Even painful experiences can be woven into something meaningful by God.",
      },
      {
        reference: "John 14:27",
        text: "Peace I leave with you; my peace I give you.",
        explanation:
          "God’s peace is different from the world’s peace. It can settle your heart even when life is noisy.",
      },
      {
        reference: "Matthew 6:31–33",
        text: "Do not worry, saying, 'What shall we eat?' Seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        explanation:
          "God knows your needs. When you trust Him first, He takes care of the rest.",
      },
      {
        reference: "Philippians 4:19",
        text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
        explanation: "You are not forgotten. God promises to provide what you truly need.",
      },
      {
        reference: "Proverbs 3:5–6",
        text: "Trust in the Lord with all your heart and lean not on your own understanding.",
        explanation:
          "You don’t have to understand everything. Trusting God leads to clearer paths.",
      },
      {
        reference: "Jeremiah 29:11",
        text: "For I know the plans I have for you, declares the Lord, plans to give you hope and a future.",
        explanation: "Your story still has hope ahead. God’s plans include a future.",
      },
      {
        reference: "Romans 15:13",
        text: "May the God of hope fill you with all joy and peace as you trust in him.",
        explanation:
          "Trusting God brings joy and peace, even in uncertain times.",
      },
      {
        reference: "Isaiah 40:31",
        text: "Those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
        explanation: "Waiting on God renews strength when exhaustion sets in.",
      },
    ],
  },
  {
    category: "Illness & Healing",
    verses: [
      {
        reference: "Isaiah 53:5",
        text: "By his wounds we are healed.",
        explanation:
          "This verse reminds us that healing is close to God’s heart. Whether healing is physical, emotional, or spiritual, God sees your pain and cares deeply about your restoration.",
      },
      {
        reference: "Jeremiah 17:14",
        text: "Heal me, Lord, and I will be healed; save me and I will be saved.",
        explanation:
          "This is a simple and honest prayer. It reminds us that true healing comes from God, and we are allowed to ask Him directly for help.",
      },
      {
        reference: "Psalm 41:3",
        text: "The Lord sustains them on their sickbed and restores them from their bed of illness.",
        explanation:
          "God does not abandon you when your body feels weak. He stays close, giving strength even while you rest and recover.",
      },
      {
        reference: "2 Corinthians 12:9",
        text: "My grace is sufficient for you, for my power is made perfect in weakness.",
        explanation:
          "Feeling weak does not mean you are failing. God’s strength often shows up most clearly when we don’t have any left of our own.",
      },
      {
        reference: "Psalm 103:2–3",
        text: "Praise the Lord, my soul, and forget not all his benefits—who forgives all your sins and heals all your diseases.",
        explanation:
          "This verse reminds us that God is both forgiving and healing. He cares for the whole person, not just one part of your life.",
      },
      {
        reference: "Exodus 15:26",
        text: "I am the Lord, who heals you.",
        explanation:
          "God identifies Himself as a healer. This verse offers reassurance that healing is part of His nature, not an afterthought.",
      },
    ],
  },
  {
    category: "Rest / Calm",
    verses: [
      {
        reference: "Matthew 11:28",
        text: "Come to me, all you who are weary and burdened, and I will give you rest.",
        explanation: "God invites the tired and overwhelmed to rest in Him.",
      },
      {
        reference: "Psalm 4:8",
        text: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
        explanation: "Peaceful rest comes from trusting God’s protection.",
      },
      {
        reference: "Isaiah 26:3",
        text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
        explanation: "Trust anchors the mind and brings deep peace.",
      },
      {
        reference: "Psalm 62:5",
        text: "Yes, my soul, find rest in God; my hope comes from him.",
        explanation: "True rest comes from God, not circumstances.",
      },
      {
        reference: "Philippians 4:7",
        text: "And the peace of God, which transcends all understanding, will guard your hearts.",
        explanation:
          "God’s peace protects your heart beyond what logic can explain.",
      },
    ],
  },
  {
    category: "Forgiveness / Mercy",
    verses: [
      {
        reference: "Ephesians 4:32",
        text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        explanation:
          "Kindness and forgiveness reflect how God treats us.",
      },
      {
        reference: "Colossians 3:13",
        text: "Bear with each other and forgive one another if any of you has a grievance.",
        explanation: "Forgiveness is a process, and God helps us through it.",
      },
      {
        reference: "1 John 1:9",
        text: "If we confess our sins, he is faithful and just and will forgive us our sins.",
        explanation: "Confession leads to cleansing and renewal.",
      },
      {
        reference: "Psalm 103:12",
        text: "As far as the east is from the west, so far has he removed our transgressions from us.",
        explanation: "God removes guilt completely — not halfway.",
      },
      {
        reference: "Micah 7:18",
        text: "You delight to show mercy.",
        explanation: "God delights in mercy more than punishment.",
      },
      {
        reference: "Romans 8:38–39",
        text: "Nothing will be able to separate us from the love of God that is in Christ Jesus our Lord.",
        explanation: "Nothing can separate you from God’s love.",
      },
    ],
  },
];

// Display order for categories on the homepage.
const categoryOrder = verseCategories.map((entry) => entry.category);

// Short, comforting descriptions for each category.
const categoryDescriptions = {
  "Anxiety / Worry": "Steady breaths and gentle reminders that God hears every anxious thought.",
  "Brokenhearted / Depression":
    "Verses that sit with your sadness while offering light for the next step.",
  "Loneliness / God With You": "Promises that you are not forgotten, even in quiet seasons.",
  "Fear / Courage": "Assurance that God’s presence is bigger than what frightens you.",
  "Temptation / Freedom / Growth":
    "Words of strength for every moment you choose freedom again.",
  "Relationships / Boundaries":
    "Wisdom for setting healthy boundaries and protecting your peace.",
  "Healing / Hope / Provision":
    "Comfort for the hurt, and hope for healing over time.",
  "Illness & Healing":
    "Promises of God’s steady presence and care through sickness and recovery.",
  "Rest / Calm": "Invitations to lay down burdens and receive calm.",
  "Forgiveness / Mercy": "Mercy for you, and a soft path toward forgiving others.",
};

const moodColors = {
  anxiety: "#dbeafe",
  depression: "#e9d5ff",
  loneliness: "#fde2e4",
  finance: "#dcfce7",
  toxic: "#fee2e2",
  faith: "#fef9c3",
};

const categoryMoodMap = {
  "Anxiety / Worry": "anxiety",
  "Brokenhearted / Depression": "depression",
  "Loneliness / God With You": "loneliness",
  "Fear / Courage": "anxiety",
  "Temptation / Freedom / Growth": "toxic",
  "Relationships / Boundaries": "toxic",
  "Healing / Hope / Provision": "faith",
  "Illness & Healing": "custom",
  "Rest / Calm": "faith",
  "Forgiveness / Mercy": "faith",
};

const customCategoryStyles = {
  "Illness & Healing": {
    backgroundColor: "#4CAF50",
    textColor: "#000000",
    glow: "rgba(76, 175, 80, 0.35)",
  },
};

const getVersesForCategory = (category) => {
  const entry = verseCategories.find((item) => item.category === category);
  return entry ? entry.verses : [];
};

const getAllVerses = () =>
  verseCategories.flatMap((entry) =>
    entry.verses.map((verse) => ({ ...verse, category: entry.category }))
  );

const categoryGrid = document.getElementById("category-grid");
const categoryTitle = document.getElementById("category-title");
const categoryDescription = document.getElementById("category-description");
const versesSection = document.getElementById("verses-section");
const versesTitle = document.getElementById("verses-title");
const verseList = document.getElementById("verses-container");
const status = document.getElementById("status");
const backButton = document.getElementById("back-to-categories");
const scrollTopButton = document.getElementById("scroll-top");
const checkinForm = document.getElementById("checkin-form");
const checkinText = document.getElementById("checkin-text");
const checkinList = document.getElementById("checkin-list");
const checkinConfirmation = document.getElementById("checkin-confirmation");
const musicSection = document.getElementById("music-section");
const musicTabs = document.querySelectorAll(".music-tab");
const musicPanels = document.querySelectorAll(".music-panel");
const CHECKIN_KEY = "anonymousCheckins";

let selectedCategory = null;
let hasAnimatedCards = false;

const allCategories = new Set(categoryOrder);

const getCategoryFromHash = () => {
  if (!location.hash) return null;
  const params = new URLSearchParams(location.hash.slice(1));
  const cat = params.get("category");
  if (cat && allCategories.has(cat)) {
    return cat;
  }
  return null;
};

const updateHash = (category) => {
  if (!category) {
    history.replaceState(null, "", location.pathname + location.search);
    return;
  }
  const params = new URLSearchParams();
  params.set("category", category);
  location.hash = params.toString();
};

const setCategory = (category, { updateUrl = true } = {}) => {
  selectedCategory = category;
  if (updateUrl) {
    updateHash(category);
  }
  renderCategories();
  renderVerses();
  updateDetail();
  setVersesHeading(selectedCategory);
};

const updateDetail = () => {
  if (selectedCategory) {
    categoryTitle.textContent = selectedCategory;
    categoryDescription.textContent = categoryDescriptions[selectedCategory] || "";
  } else {
    categoryTitle.textContent = "All Verses";
    categoryDescription.textContent = "Browse every category and let each verse meet you where you are.";
  }
};

const setVersesHeading = (label) => {
  if (!versesTitle) return;
  versesTitle.textContent = label ? `Verses — ${label}` : "Verses";
};

const handleCategorySelection = (card) => {
  hideMusicSection();
  const categoryKey = card.dataset.category || card.dataset.mood;
  if (!categoryKey) return;

  if (typeof renderVersesForCategory === "function") {
    renderVersesForCategory(categoryKey);
  } else if (typeof showCategory === "function") {
    showCategory(categoryKey);
  } else if (typeof setCategory === "function") {
    setCategory(categoryKey);
  }

  const label = card.querySelector("span")?.textContent?.trim() || card.textContent.trim();
  setVersesHeading(label);

  if (versesSection) {
    versesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Render tappable category cards from data.
const renderCategories = () => {
  categoryGrid.innerHTML = "";
  categoryOrder.forEach((category) => {
    const count = getVersesForCategory(category).length;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "category-card";
    card.dataset.category = category;
    card.dataset.mood = categoryMoodMap[category] || "faith";
    if (customCategoryStyles[category]) {
      card.dataset.customStyle = "true";
      card.classList.add("category-card--custom");
    }
    if (selectedCategory === category) {
      card.classList.add("active");
      card.setAttribute("aria-pressed", "true");
    } else {
      card.setAttribute("aria-pressed", "false");
    }
    card.innerHTML = `
      <span>${category}</span>
      <small>${count} verses</small>
    `;
    card.addEventListener("click", () => handleCategorySelection(card));
    categoryGrid.appendChild(card);
  });
  const musicCard = document.createElement("button");
  musicCard.type = "button";
  musicCard.className = "category-card category-card--music";
  musicCard.id = "music-card";
  musicCard.innerHTML = `
    <span>🎵 Music</span>
    <small>3 calming tabs</small>
  `;
  musicCard.addEventListener("click", () => showMusicSection());
  categoryGrid.appendChild(musicCard);
  hydrateCategoryCards();
  if (hasAnimatedCards) {
    document.querySelectorAll(".category-card").forEach((card) => {
      card.classList.add("show");
    });
  } else {
    animateCategoryCards();
    hasAnimatedCards = true;
  }
};

const buildVerseCard = (verse) => {
  const card = document.createElement("article");
  card.className = "verse-card";

  const text = document.createElement("p");
  text.className = "verse-text";
  text.textContent = `“${verse.text}”`;

  const reference = document.createElement("p");
  reference.className = "verse-ref";
  reference.textContent = verse.reference;

  const explanation = verse.explanation
    ? (() => {
        const note = document.createElement("p");
        note.className = "verse-explanation";
        note.textContent = verse.explanation;
        return note;
      })()
    : null;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "btn ghost";
  copyButton.textContent = "Copy";
  copyButton.addEventListener("click", () => copyVerse(verse));

  const shareButton = document.createElement("button");
  shareButton.type = "button";
  shareButton.className = "btn secondary";
  shareButton.textContent = "Share";
  shareButton.addEventListener("click", () => shareVerse(verse));

  actions.append(copyButton, shareButton);

  card.append(text, reference);
  if (explanation) {
    card.appendChild(explanation);
  }
  card.appendChild(actions);

  return card;
};

// Render verse cards based on selected category.
const renderVerses = () => {
  const filtered = selectedCategory ? getVersesForCategory(selectedCategory) : getAllVerses();

  verseList.innerHTML = "";
  filtered.forEach((verse) => {
    verseList.appendChild(buildVerseCard(verse));
  });

};

// Clipboard helper with graceful fallback.
const copyToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const success = document.execCommand("copy");
  textarea.remove();
  return success;
};

// Copy verse text and reference to clipboard.
const copyVerse = async (verse) => {
  const message = `“${verse.text}” — ${verse.reference}\nExplanation: ${verse.explanation}`;
  try {
    const success = await copyToClipboard(message);
    status.textContent = success ? "Verse copied to clipboard." : "Copy not supported on this device.";
  } catch (error) {
    status.textContent = "Unable to copy verse right now.";
  }
};

// Share via Web Share API or fallback to copy.
const shareVerse = async (verse) => {
  const message = `“${verse.text}” — ${verse.reference}\nExplanation: ${verse.explanation}`;
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Bible Verse",
        text: message,
        url: location.href,
      });
      status.textContent = "Thanks for sharing.";
    } catch (error) {
      status.textContent = "Sharing cancelled.";
    }
    return;
  }

  await copyVerse(verse);
  status.textContent = "Sharing not supported; verse copied instead.";
};

// Apply mood colors and animation base class to category cards.
const hydrateCategoryCards = () => {
  const cards = document.querySelectorAll(".category-card");
  cards.forEach((card) => {
    if (card.dataset.customStyle === "true") {
      const styles = customCategoryStyles[card.dataset.category];
      if (styles) {
        card.style.backgroundColor = styles.backgroundColor;
        card.style.color = styles.textColor;
        card.style.boxShadow = `0 16px 36px ${styles.glow}`;
      }
      return;
    }
    const mood = card.dataset.mood;
    if (mood && moodColors[mood]) {
      card.style.backgroundColor = moodColors[mood];
    }
    card.classList.add("card-animate");
  });
};

// Animate category cards in with a gentle stagger.
const animateCategoryCards = () => {
  const cards = document.querySelectorAll(".category-card");
  cards.forEach((card, index) => {
    card.classList.remove("show");
    setTimeout(() => {
      card.classList.add("show");
    }, 80 * index);
  });
};

const resetMusicEmbeds = (panelsToReset) => {
  panelsToReset.forEach((panel) => {
    const iframes = panel.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      const src = iframe.dataset.src || iframe.getAttribute("src");
      if (!src) return;
      iframe.dataset.src = src;
      iframe.setAttribute("src", "");
      requestAnimationFrame(() => {
        iframe.setAttribute("src", src);
      });
    });
  });
};

const setActiveMusicTab = (tabId) => {
  if (!musicSection) return;
  musicTabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabId;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  musicPanels.forEach((panel) => {
    const isActive = panel.id === `music-panel-${tabId}`;
    panel.classList.toggle("active", isActive);
  });
  const inactivePanels = Array.from(musicPanels).filter(
    (panel) => !panel.classList.contains("active")
  );
  resetMusicEmbeds(inactivePanels);
};

const showMusicSection = () => {
  if (!musicSection) return;
  musicSection.classList.remove("is-hidden");
  if (!musicTabs.length) return;
  const defaultTab = Array.from(musicTabs).find((tab) => tab.dataset.tab === "worship");
  if (defaultTab && !defaultTab.classList.contains("active")) {
    setActiveMusicTab("worship");
  }
  musicSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

const hideMusicSection = () => {
  if (!musicSection) return;
  musicSection.classList.add("is-hidden");
};

const getStoredCheckins = () => {
  if (!localStorage.getItem(CHECKIN_KEY)) {
    return [];
  }
  try {
    const parsed = JSON.parse(localStorage.getItem(CHECKIN_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return "Just now";
  }
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const renderCheckins = () => {
  if (!checkinList) return;
  const checkins = getStoredCheckins();
  const recent = checkins.slice(-5).reverse();
  checkinList.innerHTML = "";
  if (recent.length === 0) {
    const emptyItem = document.createElement("li");
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "checkin-message";
    emptyMessage.textContent = "No check-ins yet. Be the first to share.";
    emptyItem.appendChild(emptyMessage);
    checkinList.appendChild(emptyItem);
    return;
  }
  recent.forEach((entry) => {
    const item = document.createElement("li");
    const message = document.createElement("p");
    message.className = "checkin-message";
    message.textContent = entry.text;
    const time = document.createElement("span");
    time.className = "checkin-time";
    time.textContent = formatTimestamp(entry.timestamp);
    message.appendChild(time);
    item.appendChild(message);
    checkinList.appendChild(item);
  });
};

const handleCheckinSubmit = (event) => {
  event.preventDefault();
  const message = checkinText.value.trim();
  if (!message) return;
  const checkins = getStoredCheckins();
  checkins.push({
    text: message,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem(CHECKIN_KEY, JSON.stringify(checkins));
  checkinText.value = "";
  if (checkinConfirmation) {
    checkinConfirmation.textContent = "Thank you. You’re not alone.";
  }
  renderCheckins();
};

const toggleScrollTopButton = () => {
  if (!scrollTopButton) return;
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  backButton.addEventListener("click", () => {
    document.querySelector(".categories").scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("hashchange", () => {
    const category = getCategoryFromHash();
    setCategory(category, { updateUrl: false });
  });

  const initialCategory = getCategoryFromHash();
  setCategory(initialCategory, { updateUrl: false });
  renderCheckins();
  toggleScrollTopButton();

  if (musicTabs.length) {
    setActiveMusicTab("worship");
    musicTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        if (target) {
          setActiveMusicTab(target);
        }
      });
    });
  }

  if (checkinForm) {
    checkinForm.addEventListener("submit", handleCheckinSubmit);
  }

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", toggleScrollTopButton);
});
