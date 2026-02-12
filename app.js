const semesters = [
  {
    id: "1",
    name: "Semester 1",
    subjects: [
      { title: "Computer Programming", code: "CP" },
      { title: "Discrete Structures and Matrix Algebra", code: "DSMA" },
      { title: "Overview of Computer Workshop", code: "OCW" },
      { title: "Digital Logic Design", code: "DLD" },
      { title: "Foundation in Human Values and Ethics", code: "FHVE" },
      { title: "Essential English", code: "EE" },
    ],
  },
  {
    id: "2",
    name: "Semester 2",
    subjects: [
      { title: "Probability and Statistics", code: "PS" },
      { title: "Data Structures and Algorithms", code: "DSA" },
      { title: "Signals and Systems", code: "S&S" },
      { title: "Computer Architecture", code: "CA" },
    ],
  },
  {
    id: "3",
    name: "Semester 3",
    subjects: [
      { title: "Real Analysis, Numerical Analysis and Calculus", code: "RANAC" },
      { title: "Object Oriented Programming", code: "OOP" },
      { title: "Advanced Data Structures and Algorithms", code: "ADSA" },
      { title: "Operating Systems", code: "OS" },
      { title: "Database Management Systems", code: "DBMS" },
    ],
  },
  {
    id: "4",
    name: "Semester 4",
    subjects: [
      { title: "Computer and Communication Networks", code: "CCN" },
      { title: "Fundamentals of Full Stack Development", code: "FFSD" },
      { title: "Theory of Computation", code: "TOC" },
      { title: "Artificial Intelligence", code: "AI" },
    ],
  },
  {
    id: "5",
    name: "Semester 5",
    subjects: [
      { title: "Framework Driven Front-End Development", code: "FDFED" },
      { title: "Program Elective - 1", code: "PE-1" },
      { title: "Program Elective - 2", code: "PE-2" },
      { title: "Program Elective - 3", code: "PE-3" },
      { title: "Program Elective - 4", code: "PE-4" },
    ],
  },
  {
    id: "6",
    name: "Semester 6",
    subjects: [
      { title: "Web Services and Backend Development", code: "WBD" },
      { title: "Program Elective - 5", code: "PE-5" },
      { title: "Program Elective - 6", code: "PE-6" },
      { title: "Program Elective - 7", code: "PE-7" },
      { title: "Institute Elective - 1", code: "IE-1" },
    ],
  },
  {
    id: "7",
    name: "Semester 7",
    subjects: [
      { title: "Program Elective - 8", code: "PE-8" },
      { title: "Institute Elective - 2", code: "IE-2" },
    ],
  },
  {
    id: "8",
    name: "Semester 8",
    subjects: [
      { title: "Program Elective - 9", code: "PE-9" },
      { title: "Institute Elective - 3", code: "IE-3" },
    ],
  },
];

const examTypes = [
  { id: "mid", label: "Mid Sem" },
  { id: "quiz", label: "Quiz" },
  { id: "end", label: "End Sem" },
];

const pdfCatalog = {
  "1|CP": {
    "mid": [
      { "label": "2022-5", "path": "pyqdata/sem1/computer programming/mid/2022-5.pdf" },
      { "label": "2022-6", "path": "pyqdata/sem1/computer programming/mid/2022-6.pdf" },
      { "label": "2023-2", "path": "pyqdata/sem1/computer programming/mid/2023-2.pdf" },
      { "label": "2024", "path": "pyqdata/sem1/computer programming/mid/2024.pdf" },
      { "label": "2025", "path": "pyqdata/sem1/computer programming/mid/2025.pdf" }
    ],
    "end": [
      { "label": "2024", "path": "pyqdata/sem1/computer programming/end/2024.pdf" }
    ],
    "quiz": []
  },
  "1|DSMA": {
    "mid": [
      { "label": "2022-1", "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/2022-1.pdf" },
      { "label": "2022-2", "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/2022-2.pdf" },
      { "label": "2022-3", "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/2022-3.pdf" },
      { "label": "2023", "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/2023.pdf" },
      { "label": "2024-1", "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/2024-1.pdf" },
      { "label": "2025", "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/2025.pdf" }
    ],
    "end": [
      { "label": "2023", "path": "pyqdata/sem1/discrete structures and matrix algebra/end/2023.pdf" },
      { "label": "2025", "path": "pyqdata/sem1/discrete structures and matrix algebra/end/2025.pdf" }
    ],
    "quiz": [
      { "label": "2024", "path": "pyqdata/sem1/discrete structures and matrix algebra/quiz/2024.pdf" },
      { "label": "2025", "path": "pyqdata/sem1/discrete structures and matrix algebra/quiz/2025.pdf" }
    ]
  },
  "1|OCW": {
    "mid": [
      { "label": "2023", "path": "pyqdata/sem1/overview of computer workshop/mid/2023.pdf" }
    ],
    "end": [
      { "label": "2023", "path": "pyqdata/sem1/overview of computer workshop/end/2023.pdf" },
      { "label": "2023-1", "path": "pyqdata/sem1/overview of computer workshop/end/2023-1.pdf" },
      { "label": "2024", "path": "pyqdata/sem1/overview of computer workshop/end/2024.pdf" }
    ],
    "quiz": [
      { "label": "2025", "path": "pyqdata/sem1/overview of computer workshop/quiz/2025.pdf" }
    ]
  },
  "1|DLD": {
    "mid": [
      { "label": "2022-1", "path": "pyqdata/sem1/digital logic design/mid/2022-1.pdf" },
      { "label": "2022-2", "path": "pyqdata/sem1/digital logic design/mid/2022-2.pdf" },
      { "label": "2022-3", "path": "pyqdata/sem1/digital logic design/mid/2022-3.pdf" },
      { "label": "2023-1", "path": "pyqdata/sem1/digital logic design/mid/2023-1.pdf" },
      { "label": "2023-2", "path": "pyqdata/sem1/digital logic design/mid/2023-2.pdf" }
    ],
    "end": [],
    "quiz": []
  },
  "1|FHVE": {
    "mid": [],
    "end": [
      { "label": "2023", "path": "pyqdata/sem1/foundation in human values and ethics/end/2023.pdf" }
    ],
    "quiz": [
      { "label": "2025", "path": "pyqdata/sem1/foundation in human values and ethics/quiz/2025.pdf" }
    ]
  },
  "1|EE": {
    "mid": [
      { "label": "2022-1", "path": "pyqdata/sem1/essential english/mid/2022-1.pdf" },
      { "label": "2022-2", "path": "pyqdata/sem1/essential english/mid/2022-2.pdf" },
      { "label": "2022-3", "path": "pyqdata/sem1/essential english/mid/2022-3.pdf" },
      { "label": "2022-4", "path": "pyqdata/sem1/essential english/mid/2022-4.pdf" }
    ],
    "end": [
      { "label": "Set1", "path": "pyqdata/sem1/essential english/end/Set1.pdf" },
      { "label": "Set2", "path": "pyqdata/sem1/essential english/end/Set2.pdf" }
    ],
    "quiz": []
  },
  "2|PS": {
    "mid": [
      { "label": "2023-1", "path": "pyqdata/sem2/probability and statistics/mid/2023-1.pdf" },
      { "label": "2023-2", "path": "pyqdata/sem2/probability and statistics/mid/2023-2.pdf" }
    ],
    "end": [
      { "label": "2023", "path": "pyqdata/sem2/probability and statistics/end/2023.pdf" }
    ],
    "quiz": []
  },
  "2|DSA": {
    "mid": [
      { "label": "2023", "path": "pyqdata/sem2/data structures and algorithms/mid/2023.pdf" },
      { "label": "2024", "path": "pyqdata/sem2/data structures and algorithms/mid/2024.pdf" }
    ],
    "end": [
      { "label": "2023", "path": "pyqdata/sem2/data structures and algorithms/end/2023.pdf" }
    ],
    "quiz": []
  },
  "2|S&S": {
    "mid": [
      { "label": "2023-1", "path": "pyqdata/sem2/signals and systems/mid/2023-1.pdf" },
      { "label": "2023-2", "path": "pyqdata/sem2/signals and systems/mid/2023-2.pdf" }
    ],
    "end": [
      { "label": "2022", "path": "pyqdata/sem2/signals and systems/end/2022.pdf" }
    ],
    "quiz": []
  },
  "2|CA": {
    "mid": [
      { "label": "2023-1", "path": "pyqdata/sem2/computer architecture/mid/2023-1.pdf" },
      { "label": "2023-2", "path": "pyqdata/sem2/computer architecture/mid/2023-2.pdf" },
      { "label": "2024-1", "path": "pyqdata/sem2/computer architecture/mid/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem2/computer architecture/mid/2024-2.pdf" },
      { "label": "2024-3", "path": "pyqdata/sem2/computer architecture/mid/2024-3.pdf" }
    ],
    "end": [
      { "label": "2023", "path": "pyqdata/sem2/computer architecture/end/2023.pdf" }
    ],
    "quiz": [
      { "label": "2024-1", "path": "pyqdata/sem2/computer architecture/quiz/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem2/computer architecture/quiz/2024-2.pdf" },
      { "label": "2024-3", "path": "pyqdata/sem2/computer architecture/quiz/2024-3.pdf" }
    ]
  },
  "3|RANAC": {
    "mid": [
      { "label": "ranacmid1", "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/mid/ranacmid1.pdf" }
    ],
    "end": [
      { "label": "2024", "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/end/2024.pdf" },
      { "label": "2025", "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/end/2025.pdf" }
    ],
    "quiz": [
      { "label": "2023", "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/quiz/2023.pdf" },
      { "label": "2025-1", "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/quiz/2025-1.pdf" },
      { "label": "2025-2", "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/quiz/2025-2.pdf" }
    ]
  },
  "3|OOP": {
    "mid": [
      { "label": "2023", "path": "pyqdata/sem3/Object Oriented Programming/mid/2023.pdf" },
      { "label": "2024-1", "path": "pyqdata/sem3/Object Oriented Programming/mid/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem3/Object Oriented Programming/mid/2024-2.pdf" },
      { "label": "2024-3", "path": "pyqdata/sem3/Object Oriented Programming/mid/2024-3.pdf" }
    ],
    "end": [
      { "label": "2021", "path": "pyqdata/sem3/Object Oriented Programming/end/2021.pdf" },
      { "label": "2025", "path": "pyqdata/sem3/Object Oriented Programming/end/2025.pdf" }
    ],
    "quiz": [
      { "label": "2023", "path": "pyqdata/sem3/Object Oriented Programming/quiz/2023.pdf" },
      { "label": "2024", "path": "pyqdata/sem3/Object Oriented Programming/quiz/2024.pdf" }
    ]
  },
  "3|ADSA": {
    "mid": [
      { "label": "2024-1", "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/mid/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/mid/2024-2.pdf" },
      { "label": "2024-3", "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/mid/2024-3.pdf" }
    ],
    "end": [
      { "label": "2021", "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/end/2021.pdf" },
      { "label": "2023", "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/end/2023.pdf" },
      { "label": "2025", "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/end/2025.pdf" }
    ],
    "quiz": []
  },
  "3|OS": {
    "mid": [
      { "label": "2024", "path": "pyqdata/sem3/Operating Systems/mid/2024.pdf" }
    ],
    "end": [
      { "label": "2024", "path": "pyqdata/sem3/Operating Systems/end/2024.pdf" }
    ],
    "quiz": [
      { "label": "2024-1", "path": "pyqdata/sem3/Operating Systems/quiz/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem3/Operating Systems/quiz/2024-2.pdf" },
      { "label": "2024-3", "path": "pyqdata/sem3/Operating Systems/quiz/2024-3.pdf" }
    ]
  },
  "3|DBMS": {
    "mid": [
      { "label": "2024", "path": "pyqdata/sem3/Database Management Systems/mid/2024.pdf" }
    ],
    "end": [
      { "label": "2021", "path": "pyqdata/sem3/Database Management Systems/end/2021.pdf" },
      { "label": "2025", "path": "pyqdata/sem3/Database Management Systems/end/2025.pdf" }
    ],
    "quiz": []
  },
  "4|CCN": {
    "mid": [
      { "label": "2023-1", "path": "pyqdata/sem4/Computer and Communication Networks/mid/2023-1.pdf" },
      { "label": "2023-2", "path": "pyqdata/sem4/Computer and Communication Networks/mid/2023-2.pdf" },
      { "label": "2023-3", "path": "pyqdata/sem4/Computer and Communication Networks/mid/2023-3.pdf" },
      { "label": "2024", "path": "pyqdata/sem4/Computer and Communication Networks/mid/2024.pdf" }
    ],
    "end": [],
    "quiz": []
  },
  "4|TOC": {
    "mid": [
      { "label": "2023-1", "path": "pyqdata/sem4/Theory of Computation /mid/2023-1.pdf" },
      { "label": "2023-2", "path": "pyqdata/sem4/Theory of Computation /mid/2023-2.pdf" },
      { "label": "2024-1", "path": "pyqdata/sem4/Theory of Computation /mid/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem4/Theory of Computation /mid/2024-2.pdf" }
    ],
    "end": [
      { "label": "2023", "path": "pyqdata/sem4/Theory of Computation /end/2023.pdf" }
    ],
    "quiz": [
      { "label": "2024-1", "path": "pyqdata/sem4/Theory of Computation /quiz/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem4/Theory of Computation /quiz/2024-2.pdf" }
    ]
  },
  "4|AI": {
    "mid": [
      { "label": "2023-1", "path": "pyqdata/sem4/Artificial Intelligence /mid/2023-1.pdf" },
      { "label": "2023-2", "path": "pyqdata/sem4/Artificial Intelligence /mid/2023-2.pdf" },
      { "label": "2024-1", "path": "pyqdata/sem4/Artificial Intelligence /mid/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem4/Artificial Intelligence /mid/2024-2.pdf" },
      { "label": "2024-3", "path": "pyqdata/sem4/Artificial Intelligence /mid/2024-3.pdf" }
    ],
    "end": [
      { "label": "AI_End", "path": "pyqdata/sem4/Artificial Intelligence /end/AI_End.pdf" }
    ],
    "quiz": [
      { "label": "2024-1", "path": "pyqdata/sem4/Artificial Intelligence /quiz/2024-1.pdf" },
      { "label": "2024-2", "path": "pyqdata/sem4/Artificial Intelligence /quiz/2024-2.pdf" }
    ]
  }
}
  ;

const semesterSelect = document.getElementById("semester");
const searchInput = document.getElementById("search");
const grid = document.getElementById("pyqGrid");


const buildExamDefaults = () =>
  examTypes.reduce((acc, exam) => {
    acc[exam.id] = [];
    return acc;
  }, {});

const flattenSubjects = () => {
  const items = [];
  semesters.forEach((semester) => {
    semester.subjects.forEach((subject) => {
      const key = `${semester.id}|${subject.code}`;
      const catalog = pdfCatalog[key] || {};
      const pdfs = buildExamDefaults();
      Object.entries(catalog).forEach(([examId, entries]) => {
        if (pdfs[examId]) {
          pdfs[examId] = entries;
        }
      });

      items.push({
        semester: semester.id,
        semesterName: semester.name,
        subject: subject.title,
        code: subject.code,
        pdfs,
      });
    });
  });
  return items;
};

const subjects = flattenSubjects();

const unique = (items) => [...new Set(items)].sort((a, b) => a.localeCompare(b));

const buildOptions = () => {
  unique(subjects.map((item) => item.semester)).forEach((value) => {
    const semNum = parseInt(value);
    const option = document.createElement("option");
    option.value = value;
    if (semNum >= 5) {
      option.textContent = `Semester ${value} (Coming soon)`;
      option.disabled = true;
    } else {
      option.textContent = `Semester ${value}`;
    }
    semesterSelect.appendChild(option);
  });
};

const matchesFilter = (item) => {
  const semester = semesterSelect.value;
  const query = searchInput.value.trim().toLowerCase();

  const matchSemester = item.semester === semester;
  const matchQuery =
    !query || `${item.subject} ${item.code}`.toLowerCase().includes(query);

  return matchSemester && matchQuery;
};

const renderCards = () => {
  const filtered = subjects.filter(matchesFilter);
  grid.innerHTML = "";

  filtered.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "pyq-card reveal";
    card.style.transitionDelay = `${index * 20}ms`;

    // Spotlight effect tracking
    let spotlightRaf = null;
    card.onmousemove = (e) => {
      if (spotlightRaf) return;
      spotlightRaf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        spotlightRaf = null;
      });
    };

    // Material Design Ripple Effect on click
    card.onclick = (e) => {
      if (e.target.closest(".exam-row")) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      card.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    // Material elevation on hover
    card.onmouseenter = () => {
      card.classList.add('elevated');
    };

    card.onmouseleave = () => {
      card.classList.remove('elevated');
      if (spotlightRaf) {
        cancelAnimationFrame(spotlightRaf);
        spotlightRaf = null;
      }
      card.style.setProperty("--x", "50%");
      card.style.setProperty("--y", "50%");
    };

    const examsMarkup = examTypes
      .map((exam) => {
        const entries = item.pdfs[exam.id] || [];
        let links = `<button class="ghost" type="button" disabled>Coming soon</button>`;

        if (entries.length > 0) {
          links = `
            <div class="year-dropdown">
              <span class="year-trigger">${entries.length} PYQs available</span>
              <div class="year-menu">
                ${entries
              .sort((a, b) => b.label.localeCompare(a.label, undefined, { numeric: true, sensitivity: 'base' }))
              .map(
                (entry, idx) =>
                  `<a href="${entry.path}" target="_blank" rel="noopener">${entry.label}</a>`
              )
              .join("")}
              </div>
            </div>
          `;
        }
        const countLabel = entries.length
          ? `${entries.length} file${entries.length > 1 ? "s" : ""}`
          : "0 files";

        return `
          <div class="exam-row">
            <div>
              <p class="exam-label">${exam.label}</p>
              <p class="exam-meta">PDF · ${item.semesterName}</p>
            </div>
            <div class="exam-links">
              ${links}
            </div>
          </div>
        `;
      })
      .join("");

    card.innerHTML = `
      <div>
        <span class="tag">Sem ${item.semester}</span>
      </div>
      <h3>${item.subject}</h3>
      <div class="pyq-meta">
        <span>${item.code}</span>
        <span>•</span>
        <span>${item.semesterName}</span>
      </div>
      <div class="exam-list">
        ${examsMarkup}
      </div>
    `;

    grid.appendChild(card);
  });


  observeReveals();
};

const observeReveals = () => {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((item) => observer.observe(item));
};

const attachEvents = () => {
  [semesterSelect, searchInput].forEach((el) => {
    el.addEventListener("input", renderCards);
  });

  // PDF Dropdown Toggle for Touch/Click (Mobile only)
  grid.addEventListener("click", (e) => {
    if (window.innerWidth > 1200) return; // Use hover on desktop

    const row = e.target.closest(".exam-row");
    // If click is on a PDF link itself, let it open normally
    if (e.target.closest(".year-menu a")) return;

    if (row) {
      const dropdown = row.querySelector(".year-dropdown");
      if (dropdown) {
        e.stopPropagation();
        const isActive = dropdown.classList.contains("active");

        // Close all other dropdowns
        document.querySelectorAll(".year-dropdown.active").forEach(d => {
          d.classList.remove("active");
        });

        if (!isActive) {
          dropdown.classList.add("active");
        }
      }
    }
  });

  // Close dropdowns when clicking outside
  window.addEventListener("click", () => {
    document.querySelectorAll(".year-dropdown.active").forEach(d => {
      d.classList.remove("active");
    });
  });



  // Typewriter Logic
  const noticeText = "This archive contains all currently available Previous Year Question Papers.\nQuestion papers from Semester 5 onwards are still being collected and will be added progressively.\n\nThis is a community-driven initiative.\nIf you have PYQs that are missing, contributing them through our Discord server will help improve this archive for everyone.";
  const taglineText = "experience seamless access\nto previous year questions.";

  const noticeEl = document.getElementById("notice-typewriter");
  const taglineEl = document.getElementById("typewriter");
  const splashBrand = document.getElementById("splashBrand");
  const launchBtn = document.getElementById("launchBtn");
  const splash = document.getElementById("splash");
  const appContainer = document.getElementById("app-container");

  // Check if splash has been shown in this session
  if (sessionStorage.getItem('splashShown')) {
    if (splash) splash.style.display = "none";
    if (appContainer) appContainer.classList.remove("hidden");
  } else {
    function typeLine(element, text, speed, callback) {
      if (!element) {
        if (callback) callback();
        return;
      }

      let i = 0;

      function step() {
        if (i === 0) element.classList.add('typing');

        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(step, speed);
        } else {
          element.classList.remove('typing');
          if (callback) callback();
        }
      }
      step();
    }

    // Start sequence
    // Start sequence
    setTimeout(() => {
      // 1. Fade in Notice text immediately
      if (noticeEl) {
        noticeEl.textContent = noticeText;
        noticeEl.classList.add('visible');
      }

      // 2. Animate Tagline: Words forming
      if (taglineEl) {
        // Split text into words (handling newline)
        // Split text into words to keep structure
        const words = taglineText.split(/(\s+)/);
        taglineEl.innerHTML = '';

        const charElements = [];

        words.forEach(wordChunk => {
          if (wordChunk.match(/\s/)) {
            if (wordChunk.includes('\n')) {
              taglineEl.appendChild(document.createElement('br'));
            }
          } else {
            const wordWrapper = document.createElement('span');
            wordWrapper.className = 'word-wrapper';

            const chars = wordChunk.split('');
            chars.forEach(char => {
              const charSpan = document.createElement('span');
              charSpan.textContent = char;
              charSpan.className = 'char';
              wordWrapper.appendChild(charSpan);
              charElements.push(charSpan);
            });

            taglineEl.appendChild(wordWrapper);
          }
        });

        // Animate characters sequentially
        // Animate characters quickly (Forming Effect)
        let delay = 0;
        charElements.forEach((charSpan, index) => {
          setTimeout(() => {
            charSpan.classList.add('visible');
            // 3. Reveal Brand/Button after LAST character
            if (index === charElements.length - 1) {
              setTimeout(() => {
                if (splashBrand) splashBrand.classList.remove("hidden");
                if (launchBtn) launchBtn.classList.remove("hidden");
              }, 100);
            }
          }, delay);
          delay += 15; // Very fast ripple (almost at once)
        });
      }
    }, 300);
  }


  // Launch Archive Logic
  if (launchBtn) {
    launchBtn.addEventListener("click", () => {
      sessionStorage.setItem('splashShown', 'true');
      splash.classList.add("splash-out");
      appContainer.classList.remove("hidden");

      // Delay removal to allow transition to finish
      setTimeout(() => {
        splash.style.display = "none";
      }, 1200);
    });
  }

  const browseButton = document.getElementById("heroBrowse");

  browseButton.addEventListener("click", (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    // Blur the button to remove hover state
    setTimeout(() => button.blur(), 50);

    document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
  });

  // Handle touch devices specifically to prevent hover state persistence
  browseButton.addEventListener("touchend", (e) => {
    const button = e.currentTarget;
    // Force remove any stuck pseudo-states on mobile
    setTimeout(() => {
      button.blur();
      // Force a style recalculation to clear any stuck states
      button.style.transform = '';
      void button.offsetWidth; // Trigger reflow
    }, 100);
  });

  function initCalendar() {
    const container = document.getElementById('calendar-container');
    if (!container) return;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = `
      <div class="calendar-header">
        <span class="calendar-month">${monthNames[month]} ${year}</span>
      </div>
      <div class="calendar-grid">
        <div class="calendar-day-label">M</div>
        <div class="calendar-day-label">T</div>
        <div class="calendar-day-label">W</div>
        <div class="calendar-day-label">T</div>
        <div class="calendar-day-label">F</div>
        <div class="calendar-day-label">S</div>
        <div class="calendar-day-label">S</div>
    `;

    // Adjust for Monday start (0=Sun -> 6, 1=Mon -> 0)
    let adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < adjustedFirstDay; i++) {
      html += `<div class="calendar-day other-month"></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === today ? 'today' : '';
      let isExam = '';
      if (month === 1 && i >= 20 && i <= 26) {
        isExam = 'exam-date';
      }
      html += `<div class="calendar-day ${isToday} ${isExam}">${i}</div>`;
    }

    html += `</div>`;
    if (month === 1) {
      html += `
        <div class="calendar-info">
          <div class="exam-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
            <span>Midsem: Feb 20-26</span>
          </div>
        </div>
      `;
    }
    container.innerHTML = html;
  }

  initCalendar();

  function initClock() {
    const clockEl = document.getElementById("header-clock");
    if (!clockEl) return;

    function update() {
      const now = new Date();
      let h = now.getHours();
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");

      // Convert to 12-hour format
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12;
      h = h ? h : 12; // hour '0' should be '12'
      const hStr = String(h).padStart(2, "0");

      clockEl.innerHTML = `
        <span class="clock-h">${hStr}</span>
        <span class="clock-sep">:</span>
        <span class="clock-m">${m}</span>
        <span class="clock-sep">:</span>
        <span class="clock-s">${s}</span>
        <span class="clock-ampm">${ampm}</span>
      `;
    }

    update();
    setInterval(update, 1000);
  }



  function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', (e) => {
      const isDark = body.classList.contains('dark-mode');
      const nextTheme = isDark ? 'light' : 'dark';

      // Fallback for browsers that don't support View Transitions
      if (!document.startViewTransition) {
        toggleTheme(nextTheme);
        return;
      }

      // Flashy circular reveal transition
      const x = e.clientX;
      const y = e.clientY;
      const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      );

      document.body.classList.add('transition-theme');

      const transition = document.startViewTransition(() => {
        toggleTheme(nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        ).onfinish = () => {
          document.body.classList.remove('transition-theme');
        };
      });
    });

    function toggleTheme(theme) {
      if (theme === 'dark') {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
      localStorage.setItem('theme', theme);
    }
  }

  initClock();
  initTheme();

};

buildOptions();
semesterSelect.value = "1";
renderCards();
attachEvents();
