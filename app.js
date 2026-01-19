// Verse library: keep all data in one place for fast loading.
const verses = [
  {
    id: "anxiety-1",
    category: "Anxiety & Worry",
    reference: "Philippians 4:6–7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reflection: "Let your worries become a conversation with God, one breath at a time.",
  },
  {
    id: "anxiety-2",
    category: "Anxiety & Worry",
    reference: "Matthew 6:34",
    text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    reflection: "Today is all you have to carry right now.",
  },
  {
    id: "anxiety-3",
    category: "Anxiety & Worry",
    reference: "1 Peter 5:7",
    text: "Cast all your anxiety on him because he cares for you.",
    reflection: "You are not a burden; you are cared for.",
  },
  {
    id: "anxiety-4",
    category: "Anxiety & Worry",
    reference: "Psalm 94:19",
    text: "When anxiety was great within me, your consolation brought me joy.",
  },
  {
    id: "anxiety-5",
    category: "Anxiety & Worry",
    reference: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God.",
    reflection: "God’s presence is steady even when your thoughts are not.",
  },
  {
    id: "anxiety-6",
    category: "Anxiety & Worry",
    reference: "Psalm 56:3",
    text: "When I am afraid, I put my trust in you.",
  },
  {
    id: "depression-1",
    category: "Depression & Sadness",
    reference: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    reflection: "You are not far from God when you feel low.",
  },
  {
    id: "depression-2",
    category: "Depression & Sadness",
    reference: "Lamentations 3:22–23",
    text: "Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning.",
  },
  {
    id: "depression-3",
    category: "Depression & Sadness",
    reference: "Psalm 42:11",
    text: "Why, my soul, are you downcast? Put your hope in God, for I will yet praise him.",
  },
  {
    id: "depression-4",
    category: "Depression & Sadness",
    reference: "Isaiah 53:4",
    text: "Surely he took up our pain and bore our suffering.",
    reflection: "Jesus knows what pain feels like.",
  },
  {
    id: "depression-5",
    category: "Depression & Sadness",
    reference: "Psalm 30:5",
    text: "Weeping may stay for the night, but rejoicing comes in the morning.",
  },
  {
    id: "depression-6",
    category: "Depression & Sadness",
    reference: "John 16:33",
    text: "In this world you will have trouble. But take heart! I have overcome the world.",
  },
  {
    id: "lonely-1",
    category: "Loneliness",
    reference: "Deuteronomy 31:6",
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
  },
  {
    id: "lonely-2",
    category: "Loneliness",
    reference: "Psalm 68:6",
    text: "God sets the lonely in families.",
    reflection: "You are seen, and you belong.",
  },
  {
    id: "lonely-3",
    category: "Loneliness",
    reference: "Matthew 28:20",
    text: "Surely I am with you always, to the very end of the age.",
  },
  {
    id: "lonely-4",
    category: "Loneliness",
    reference: "Psalm 23:4",
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
  },
  {
    id: "lonely-5",
    category: "Loneliness",
    reference: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you.",
  },
  {
    id: "lonely-6",
    category: "Loneliness",
    reference: "Hebrews 13:5",
    text: "Never will I leave you; never will I forsake you.",
  },
  {
    id: "fear-1",
    category: "Fear",
    reference: "Psalm 27:1",
    text: "The Lord is my light and my salvation—whom shall I fear?",
  },
  {
    id: "fear-2",
    category: "Fear",
    reference: "2 Timothy 1:7",
    text: "For God has not given us a spirit of fear, but of power, love, and a sound mind.",
  },
  {
    id: "fear-3",
    category: "Fear",
    reference: "Joshua 1:9",
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
  },
  {
    id: "fear-4",
    category: "Fear",
    reference: "Psalm 118:6",
    text: "The Lord is with me; I will not be afraid. What can mere mortals do to me?",
  },
  {
    id: "fear-5",
    category: "Fear",
    reference: "Isaiah 41:13",
    text: "For I am the Lord your God who takes hold of your right hand and says to you, Do not fear.",
  },
  {
    id: "fear-6",
    category: "Fear",
    reference: "Psalm 34:4",
    text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
  },
  {
    id: "addiction-1",
    category: "Addiction & Temptation",
    reference: "1 Corinthians 10:13",
    text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear.",
    reflection: "There is always a way through, even when it feels tight.",
  },
  {
    id: "addiction-2",
    category: "Addiction & Temptation",
    reference: "James 4:7",
    text: "Submit yourselves, then, to God. Resist the devil, and he will flee from you.",
  },
  {
    id: "addiction-3",
    category: "Addiction & Temptation",
    reference: "Galatians 5:1",
    text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.",
  },
  {
    id: "addiction-4",
    category: "Addiction & Temptation",
    reference: "Romans 12:2",
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
  },
  {
    id: "addiction-5",
    category: "Addiction & Temptation",
    reference: "Psalm 119:11",
    text: "I have hidden your word in my heart that I might not sin against you.",
  },
  {
    id: "addiction-6",
    category: "Addiction & Temptation",
    reference: "Titus 2:11–12",
    text: "The grace of God has appeared that offers salvation to all people. It teaches us to say 'No' to ungodliness.",
  },
  {
    id: "toxic-1",
    category: "Toxic Relationships",
    reference: "1 Corinthians 15:33",
    text: "Do not be misled: Bad company corrupts good character.",
  },
  {
    id: "toxic-2",
    category: "Toxic Relationships",
    reference: "Proverbs 4:23",
    text: "Above all else, guard your heart, for everything you do flows from it.",
  },
  {
    id: "toxic-3",
    category: "Toxic Relationships",
    reference: "Proverbs 13:20",
    text: "Walk with the wise and become wise, for a companion of fools suffers harm.",
  },
  {
    id: "toxic-4",
    category: "Toxic Relationships",
    reference: "Psalm 1:1",
    text: "Blessed is the one who does not walk in step with the wicked.",
  },
  {
    id: "toxic-5",
    category: "Toxic Relationships",
    reference: "Romans 12:18",
    text: "If it is possible, as far as it depends on you, live at peace with everyone.",
    reflection: "Peace is a goal, but boundaries can still be wise.",
  },
  {
    id: "toxic-6",
    category: "Toxic Relationships",
    reference: "Proverbs 22:24–25",
    text: "Do not make friends with a hot-tempered person. You may learn their ways and get yourself ensnared.",
  },
  {
    id: "heartbreak-1",
    category: "Heartbreak & Betrayal",
    reference: "Psalm 147:3",
    text: "He heals the brokenhearted and binds up their wounds.",
  },
  {
    id: "heartbreak-2",
    category: "Heartbreak & Betrayal",
    reference: "Romans 8:28",
    text: "In all things God works for the good of those who love him.",
  },
  {
    id: "heartbreak-3",
    category: "Heartbreak & Betrayal",
    reference: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
  },
  {
    id: "heartbreak-4",
    category: "Heartbreak & Betrayal",
    reference: "Isaiah 61:1",
    text: "He has sent me to bind up the brokenhearted.",
  },
  {
    id: "heartbreak-5",
    category: "Heartbreak & Betrayal",
    reference: "John 14:27",
    text: "Peace I leave with you; my peace I give you.",
  },
  {
    id: "heartbreak-6",
    category: "Heartbreak & Betrayal",
    reference: "Psalm 73:26",
    text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
  },
  {
    id: "financial-1",
    category: "Financial Stress",
    reference: "Matthew 6:31–33",
    text: "Do not worry, saying, 'What shall we eat?' Seek first his kingdom and his righteousness, and all these things will be given to you as well.",
  },
  {
    id: "financial-2",
    category: "Financial Stress",
    reference: "Philippians 4:19",
    text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
  },
  {
    id: "financial-3",
    category: "Financial Stress",
    reference: "Proverbs 3:5–6",
    text: "Trust in the Lord with all your heart and lean not on your own understanding.",
  },
  {
    id: "financial-4",
    category: "Financial Stress",
    reference: "Psalm 37:25",
    text: "I was young and now I am old, yet I have never seen the righteous forsaken or their children begging bread.",
  },
  {
    id: "financial-5",
    category: "Financial Stress",
    reference: "Luke 12:24",
    text: "Consider the ravens: They do not sow or reap, yet God feeds them. How much more valuable you are than birds!",
  },
  {
    id: "financial-6",
    category: "Financial Stress",
    reference: "Psalm 46:1",
    text: "God is our refuge and strength, an ever-present help in trouble.",
  },
  {
    id: "hope-1",
    category: "Hope & Encouragement",
    reference: "Jeremiah 29:11",
    text: "For I know the plans I have for you, declares the Lord, plans to give you hope and a future.",
  },
  {
    id: "hope-2",
    category: "Hope & Encouragement",
    reference: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him.",
  },
  {
    id: "hope-3",
    category: "Hope & Encouragement",
    reference: "Isaiah 40:31",
    text: "Those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
  },
  {
    id: "hope-4",
    category: "Hope & Encouragement",
    reference: "Psalm 31:24",
    text: "Be strong and take heart, all you who hope in the Lord.",
  },
  {
    id: "hope-5",
    category: "Hope & Encouragement",
    reference: "Hebrews 10:23",
    text: "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
  },
  {
    id: "hope-6",
    category: "Hope & Encouragement",
    reference: "2 Corinthians 4:16",
    text: "Though outwardly we are wasting away, yet inwardly we are being renewed day by day.",
  },
  {
    id: "faith-1",
    category: "Faith When You Feel Weak",
    reference: "2 Corinthians 12:9",
    text: "My grace is sufficient for you, for my power is made perfect in weakness.",
    reflection: "Weakness is not disqualifying; it is where grace meets you.",
  },
  {
    id: "faith-2",
    category: "Faith When You Feel Weak",
    reference: "Psalm 73:26",
    text: "My flesh and my heart may fail, but God is the strength of my heart.",
  },
  {
    id: "faith-3",
    category: "Faith When You Feel Weak",
    reference: "Isaiah 40:29",
    text: "He gives strength to the weary and increases the power of the weak.",
  },
  {
    id: "faith-4",
    category: "Faith When You Feel Weak",
    reference: "Hebrews 4:16",
    text: "Let us then approach God’s throne of grace with confidence, so that we may receive mercy.",
  },
  {
    id: "faith-5",
    category: "Faith When You Feel Weak",
    reference: "Psalm 28:7",
    text: "The Lord is my strength and my shield; my heart trusts in him.",
  },
  {
    id: "faith-6",
    category: "Faith When You Feel Weak",
    reference: "Isaiah 41:10",
    text: "Do not fear, for I am with you; I will strengthen you and help you.",
  },
  {
    id: "peace-1",
    category: "Peace & Rest",
    reference: "Matthew 11:28",
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
  },
  {
    id: "peace-2",
    category: "Peace & Rest",
    reference: "Psalm 4:8",
    text: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
  },
  {
    id: "peace-3",
    category: "Peace & Rest",
    reference: "Isaiah 26:3",
    text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
  },
  {
    id: "peace-4",
    category: "Peace & Rest",
    reference: "John 14:27",
    text: "Peace I leave with you; my peace I give you.",
  },
  {
    id: "peace-5",
    category: "Peace & Rest",
    reference: "Psalm 62:5",
    text: "Yes, my soul, find rest in God; my hope comes from him.",
  },
  {
    id: "peace-6",
    category: "Peace & Rest",
    reference: "Philippians 4:7",
    text: "And the peace of God, which transcends all understanding, will guard your hearts.",
  },
  {
    id: "forgive-1",
    category: "Forgiveness",
    reference: "Ephesians 4:32",
    text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
  },
  {
    id: "forgive-2",
    category: "Forgiveness",
    reference: "Colossians 3:13",
    text: "Bear with each other and forgive one another if any of you has a grievance.",
  },
  {
    id: "forgive-3",
    category: "Forgiveness",
    reference: "1 John 1:9",
    text: "If we confess our sins, he is faithful and just and will forgive us our sins.",
  },
  {
    id: "forgive-4",
    category: "Forgiveness",
    reference: "Psalm 103:12",
    text: "As far as the east is from the west, so far has he removed our transgressions from us.",
  },
  {
    id: "forgive-5",
    category: "Forgiveness",
    reference: "Matthew 6:14",
    text: "For if you forgive other people when they sin against you, your heavenly Father will also forgive you.",
  },
  {
    id: "forgive-6",
    category: "Forgiveness",
    reference: "Micah 7:18",
    text: "You delight to show mercy.",
  },
  {
    id: "strength-1",
    category: "Strength During Hard Times",
    reference: "Psalm 46:1",
    text: "God is our refuge and strength, an ever-present help in trouble.",
  },
  {
    id: "strength-2",
    category: "Strength During Hard Times",
    reference: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you.",
  },
  {
    id: "strength-3",
    category: "Strength During Hard Times",
    reference: "Romans 8:38–39",
    text: "Nothing will be able to separate us from the love of God that is in Christ Jesus our Lord.",
  },
  {
    id: "strength-4",
    category: "Strength During Hard Times",
    reference: "Psalm 55:22",
    text: "Cast your cares on the Lord and he will sustain you.",
  },
  {
    id: "strength-5",
    category: "Strength During Hard Times",
    reference: "Nehemiah 8:10",
    text: "The joy of the Lord is your strength.",
  },
  {
    id: "strength-6",
    category: "Strength During Hard Times",
    reference: "Isaiah 41:13",
    text: "I am the Lord your God who takes hold of your right hand and says, Do not fear.",
  },
];

// Display order for categories on the homepage.
const categoryOrder = [
  "Anxiety & Worry",
  "Depression & Sadness",
  "Loneliness",
  "Fear",
  "Addiction & Temptation",
  "Toxic Relationships",
  "Heartbreak & Betrayal",
  "Financial Stress",
  "Hope & Encouragement",
  "Faith When You Feel Weak",
  "Peace & Rest",
  "Forgiveness",
  "Strength During Hard Times",
];

// Short, comforting descriptions for each category.
const categoryDescriptions = {
  "Anxiety & Worry": "Steady breaths and gentle reminders that God hears every anxious thought.",
  "Depression & Sadness": "Verses that sit with your sadness while offering light for the next step.",
  Loneliness: "Promises that you are not forgotten, even in quiet seasons.",
  Fear: "Assurance that God’s presence is bigger than what frightens you.",
  "Addiction & Temptation": "Words of strength for every moment you choose freedom again.",
  "Toxic Relationships": "Wisdom for setting healthy boundaries and protecting your peace.",
  "Heartbreak & Betrayal": "Comfort for the hurt, and hope for healing over time.",
  "Financial Stress": "Gentle encouragement to trust God’s provision day by day.",
  "Hope & Encouragement": "Promises that remind you brighter days are still ahead.",
  "Faith When You Feel Weak": "Grace-filled verses for when faith feels fragile.",
  "Peace & Rest": "Invitations to lay down burdens and receive calm.",
  Forgiveness: "Mercy for you, and a soft path toward forgiving others.",
  "Strength During Hard Times": "Support for enduring seasons, with God close beside you.",
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
  "Anxiety & Worry": "anxiety",
  "Depression & Sadness": "depression",
  Loneliness: "loneliness",
  Fear: "anxiety",
  "Addiction & Temptation": "toxic",
  "Toxic Relationships": "toxic",
  "Heartbreak & Betrayal": "depression",
  "Financial Stress": "finance",
  "Hope & Encouragement": "faith",
  "Faith When You Feel Weak": "faith",
  "Peace & Rest": "faith",
  Forgiveness: "faith",
  "Strength During Hard Times": "faith",
};

const categoryGrid = document.getElementById("category-grid");
const categoryTitle = document.getElementById("category-title");
const categoryDescription = document.getElementById("category-description");
const versesSection = document.getElementById("verses-section");
const versesTitle = document.getElementById("verses-title");
const verseList = document.getElementById("verses-container");
const searchInput = document.getElementById("search");
const resultsCount = document.getElementById("results-count");
const status = document.getElementById("status");
const showAllButton = document.getElementById("show-all");
const backButton = document.getElementById("back-to-categories");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const THEME_KEY = "theme";

const getStoredTheme = () => localStorage.getItem(THEME_KEY);

const getPreferredTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const applyTheme = (mode) => {
  document.body.dataset.theme = mode;
  if (darkModeToggle) {
    darkModeToggle.setAttribute("aria-pressed", mode === "dark");
    darkModeToggle.textContent = mode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
};

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
    categoryDescription.textContent = "Browse every category or refine the list with the search box.";
  }
};

const setVersesHeading = (label) => {
  if (!versesTitle) return;
  versesTitle.textContent = label ? `Verses — ${label}` : "Verses";
};

const handleCategorySelection = (card) => {
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
    const count = verses.filter((verse) => verse.category === category).length;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "category-card";
    card.dataset.category = category;
    card.dataset.mood = categoryMoodMap[category] || "faith";
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

  const reflection = verse.reflection
    ? (() => {
        const note = document.createElement("p");
        note.className = "reflection";
        note.textContent = verse.reflection;
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
  if (reflection) {
    card.appendChild(reflection);
  }
  card.appendChild(actions);

  return card;
};

// Render verse cards based on selected category + search query.
const renderVerses = () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = verses.filter((verse) => {
    const matchesCategory = selectedCategory ? verse.category === selectedCategory : true;
    const matchesQuery = query
      ? verse.text.toLowerCase().includes(query) || verse.reference.toLowerCase().includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });

  verseList.innerHTML = "";
  filtered.forEach((verse) => {
    verseList.appendChild(buildVerseCard(verse));
  });

  const categoryLabel = selectedCategory ? selectedCategory : "all categories";
  resultsCount.textContent = `${filtered.length} verses shown for ${categoryLabel}.`;
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
  const message = `“${verse.text}” — ${verse.reference}`;
  try {
    const success = await copyToClipboard(message);
    status.textContent = success ? "Verse copied to clipboard." : "Copy not supported on this device.";
  } catch (error) {
    status.textContent = "Unable to copy verse right now.";
  }
};

// Share via Web Share API or fallback to copy.
const shareVerse = async (verse) => {
  const message = `“${verse.text}” — ${verse.reference}`;
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

document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = getStoredTheme();
  const initialTheme = storedTheme || getPreferredTheme();
  applyTheme(initialTheme);

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
    });
  }

  searchInput.addEventListener("input", () => renderVerses());
  showAllButton.addEventListener("click", () => setCategory(null));
  backButton.addEventListener("click", () => {
    document.querySelector(".categories").scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("hashchange", () => {
    const category = getCategoryFromHash();
    setCategory(category, { updateUrl: false });
  });

  const initialCategory = getCategoryFromHash();
  setCategory(initialCategory, { updateUrl: false });
});
