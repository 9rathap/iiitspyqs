const semesters = [
  {
    id: "1",
    name: "Semester 1",
    subjects: [
      { title: "Computer Programming", code: "CP" },
      { title: "Discrete Structures and Matrix Algebra", code: "DSMA" },
      { title: "Overview of Computer Workshop", code: "OCW" },
      { title: "Digital Logic Design", code: "DLD" },
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
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/computer programming/mid/CP_Mid.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem1/computer programming/mid/cp.pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem1/computer programming/mid/cpmid2024.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/computer programming/end/cpend2024.pdf"
      }
    ],
    "quiz": []
  },
  "1|DSMA": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/DSMA Mid-Sem 2025.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/dsma.pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem1/discrete structures and matrix algebra/mid/dsmamid2024.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/discrete structures and matrix algebra/end/DSMA_End_Sem_1.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem1/discrete structures and matrix algebra/end/DSMAend.pdf"
      }
    ],
    "quiz": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/discrete structures and matrix algebra/quiz/DSMA.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem1/discrete structures and matrix algebra/quiz/DSMAquiz.pdf"
      }
    ]
  },
  "1|OCW": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/overview of computer workshop/mid/ocwmid.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/overview of computer workshop/end/ocw_2023.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem1/overview of computer workshop/end/OCW_End_Sem-1.pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem1/overview of computer workshop/end/ocwend2024.pdf"
      }
    ],
    "quiz": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/overview of computer workshop/quiz/OCW SEM1 QUIZ.pdf"
      }
    ]
  },
  "1|DLD": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem1/digital logic design/mid/dld_2023.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem1/digital logic design/mid/dldmid.pdf"
      }
    ],
    "end": [],
    "quiz": []
  },
  "2|PS": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem2/probability and statistics/mid/psmid.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem2/probability and statistics/mid/psmid2023.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem2/probability and statistics/end/PS_END_SEM.pdf"
      }
    ],
    "quiz": []
  },
  "2|DSA": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem2/data structures and algorithms/mid/dsamid.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem2/data structures and algorithms/mid/dsamis2023.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem2/data structures and algorithms/end/DSA_S2023_ENDSEM_Q_PPR_with_Solutions.pdf"
      }
    ],
    "quiz": []
  },
  "2|S&S": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem2/signals and systems/mid/ssmid.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem2/signals and systems/mid/ssmid2023.pdf"
      }
    ],
    "end": [],
    "quiz": []
  },
  "2|CA": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem2/computer architecture/mid/Answer_Key_-_CA_-_Mid_Term_1_QP.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem2/computer architecture/mid/Answer_Key_-_CA_-_Mid_Term_2_QP.pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem2/computer architecture/mid/Answer_Key_-_CA_Term_Exam_III.pdf"
      },
      {
        "label": "PYQ 4",
        "path": "pyqdata/sem2/computer architecture/mid/CA_MID_1_SEM_2.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem2/computer architecture/end/CA_End_Exam.docx.pdf"
      }
    ],
    "quiz": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem2/computer architecture/quiz/Answer_Key_-_CA_SCHEDULED_QUIZ_1.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem2/computer architecture/quiz/Answer_Key_-_CA_SCHEDULED_QUIZ_2.pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem2/computer architecture/quiz/Answer_Key_-_CA_SCHEDULED_QUIZ_3.pdf"
      }
    ]
  },
  "3|RANAC": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/mid/ranacmid1.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/end/RANAC_END_QP (2).pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/end/Ranac EndSem.pdf"
      }
    ],
    "quiz": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/quiz/RANAC_QUIZ_2 (S1).pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/quiz/RANAC_Quiz_1 (S1).pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem3/Real Analysis, Numerical Analysis and Calculus/quiz/ranacsq3.pdf"
      }
    ]
  },
  "3|OOP": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Object Oriented Programming/mid/OOP Midsem1 AnswerKey.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Object Oriented Programming/mid/OOPS MID2 ANSWER KEY.pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem3/Object Oriented Programming/mid/oopmid1.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Object Oriented Programming/end/Answerkey of OOP EndTerm Question paper final.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Object Oriented Programming/end/OOP ENDSEM.pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem3/Object Oriented Programming/end/OOPS End S2021.pdf"
      }
    ],
    "quiz": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Object Oriented Programming/quiz/OOP_SQ1 with Answers.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Object Oriented Programming/quiz/oopsq3.pdf"
      }
    ]
  },
  "3|ADSA": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/mid/ADSA_MID2(2024).pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/mid/ADSA_MID_1_QuestionPaper&AnswerKey.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/end/ADSA End S2021.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/end/Adsa_Term3 (1).pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/end/End-Term- ADSA - M2023 (1).docx.pdf"
      },
      {
        "label": "PYQ 4",
        "path": "pyqdata/sem3/Advanced Data Structures and Algorithms/end/M2025_ADSA_End Term_Solutions.pdf"
      }
    ],
    "quiz": []
  },
  "3|OS": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Operating Systems/mid/osmid1.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Operating Systems/end/OS_EndSem_QuestionPaperWithAnswers.pdf"
      }
    ],
    "quiz": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Operating Systems/quiz/OOPS SQ2 ANSWER KEY.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Operating Systems/quiz/OS_SQ1 with Answers.pdf"
      },
      {
        "label": "PYQ 3",
        "path": "pyqdata/sem3/Operating Systems/quiz/OS_Schedule Quiz3_M2024_key.pdf"
      }
    ]
  },
  "3|DBMS": {
    "mid": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Database Management Systems/mid/dbms mid.pdf"
      }
    ],
    "end": [
      {
        "label": "PYQ 1",
        "path": "pyqdata/sem3/Database Management Systems/end/DBMS End S2021.pdf"
      },
      {
        "label": "PYQ 2",
        "path": "pyqdata/sem3/Database Management Systems/end/End-Sem Answers.pdf"
      }
    ],
    "quiz": []
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
    const option = document.createElement("option");
    option.value = value;
    option.textContent = `Semester ${value}`;
    semesterSelect.appendChild(option);
  });

  // Semester only. Branch/year removed for simplicity.
};

const matchesFilter = (item) => {
  const semester = semesterSelect.value;
  const query = searchInput.value.trim().toLowerCase();

  const matchSemester = semester === "all" || item.semester === semester;
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
              .map(
                (entry, idx) =>
                  `<a href="${entry.path}" target="_blank" rel="noopener">PYQ ${idx + 1}</a>`
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



  // Typewriter Logic
  const typewriterText = "Experience seamless access\nto previous year questions.";
  const typewriterEl = document.getElementById("typewriter");
  const launchBtn = document.getElementById("launchBtn");
  const exitBtn = document.getElementById("exitBtn");
  const splash = document.getElementById("splash");
  const appContainer = document.getElementById("app-container");

  let charIndex = 0;
  function type() {
    if (charIndex < typewriterText.length) {
      typewriterEl.textContent += typewriterText.charAt(charIndex);
      charIndex++;
      setTimeout(type, 50); // Speed: 50ms per char
    } else {
      // Show action buttons after typing is done
      if (launchBtn) launchBtn.classList.remove("hidden");
      if (exitBtn) exitBtn.classList.remove("hidden");
    }
  }

  // Start typewriter
  if (typewriterEl) {
    setTimeout(type, 500); // Small initial delay
  }

  // Evasive Exit Button Logic
  if (exitBtn) {
    let baseX, baseY;

    function updateBasePosition() {
      const rect = exitBtn.getBoundingClientRect();
      // We calculate the base center relative to current scroll + transform
      // But since it's on a splash overlay that doesn't scroll yet, 
      // simple rect.left + rect.width/2 is fine. 
      // We subtract current transform to get the true '0,0' center.
      const style = window.getComputedStyle(exitBtn);
      const matrix = new WebKitCSSMatrix(style.transform);
      baseX = rect.left + rect.width / 2 - matrix.m41;
      baseY = rect.top + rect.height / 2 - matrix.m42;
    }

    // Initial capture (wait for a frame to ensure layout)
    requestAnimationFrame(updateBasePosition);
    window.addEventListener('resize', updateBasePosition);

    let mouseX = 0, mouseY = 0;
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function loop() {
      if (!baseX || !baseY) {
        requestAnimationFrame(loop);
        return;
      }

      const distanceX = mouseX - baseX;
      const distanceY = mouseY - baseY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const repelRadius = 150;
      if (distance < repelRadius) {
        const angle = Math.atan2(distanceY, distanceX);
        const force = (repelRadius - distance) / repelRadius;
        const moveX = Math.cos(angle + Math.PI) * force * 100;
        const moveY = Math.sin(angle + Math.PI) * force * 100;
        exitBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        exitBtn.style.transform = `translate(0, 0)`;
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // Just in case they somehow click it (mobile pulse or fast tap)
    exitBtn.addEventListener("click", () => {
      alert("Nice try! But you're here to study. 😉");
    });
  }

  // Launch Archive Logic
  if (launchBtn) {
    launchBtn.addEventListener("click", () => {
      splash.classList.add("splash-out");
      appContainer.classList.remove("hidden");

      // Delay removal to allow transition to finish
      setTimeout(() => {
        splash.style.display = "none";
      }, 1200);
    });
  }

  document.getElementById("heroBrowse").addEventListener("click", (e) => {
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

    document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
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
      html += `<div class="calendar-day ${isToday}">${i}</div>`;
    }

    html += `</div>`;
    container.innerHTML = html;
  }

  initCalendar();

  function initClock() {
    const clockEl = document.getElementById("header-clock");
    if (!clockEl) return;

    function update() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");

      clockEl.innerHTML = `
        <span class="clock-h">${h}</span>
        <span class="clock-sep">:</span>
        <span class="clock-m">${m}</span>
        <span class="clock-sep">:</span>
        <span class="clock-s">${s}</span>
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
