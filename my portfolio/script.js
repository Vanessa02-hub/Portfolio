document.addEventListener("DOMContentLoaded", () => {

    // PROFILE PHOTO
    const frame = document.getElementById("frame");
    const photo = document.getElementById("photo");
    const file = document.getElementById("file");

    if (frame && photo && file) {
        const markLoaded = () => frame.classList.add("has-photo");

        photo.addEventListener("load", markLoaded);
        photo.addEventListener("error", () => {
            photo.removeAttribute("src");
        });

        if (photo.complete && photo.naturalWidth) {
            markLoaded();
        }

        frame.addEventListener("click", () => file.click());

        frame.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                file.click();
            }
        });

        file.addEventListener("change", () => {
            const selectedFile = file.files[0];

            if (selectedFile) {
                photo.src = URL.createObjectURL(selectedFile);
            }
        });
    }

    // TYPING ANIMATIONS
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    function startTyping(element, roles) {
        if (!element) return;

        if (reduceMotion) {
            element.textContent = roles[0];
            return;
        }

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {
            const currentRole = roles[roleIndex];

            if (!deleting) {
                charIndex++;
                element.textContent = currentRole.substring(0, charIndex);

                if (charIndex === currentRole.length) {
                    deleting = true;
                    setTimeout(typeEffect, 1800);
                    return;
                }
            } else {
                charIndex--;
                element.textContent = currentRole.substring(0, charIndex);

                if (charIndex === 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }

            setTimeout(typeEffect, deleting ? 45 : 75);
        }

        typeEffect();
    }

    // Education page animation
    startTyping(document.getElementById("typed"), [
        "Junior Software Developer",
        "Web Developer",
        "Database Management"
    ]);

    // Home page animation, if that element exists
    startTyping(document.getElementById("animated-role"), [
        "I turn ideas into digital experiences",
        "I am a web developer",
        "I build responsive websites",
        "I create functional web applications",
        "I bring ideas to life with code",
        "I am always learning and building"
    ]);

    // NSC RESULTS
    const subjectsBox = document.getElementById("subjects");

    if (subjectsBox) {
        const subjects = [
            ["Programming Fundamentals", 65],
            ["Database Management", 70],
            ["Web Development", 85],
            ["System Analysis", 50],
            ["Software Design", 60],

        ].sort((a, b) => b[1] - a[1]);

        subjectsBox.replaceChildren();

        subjects.forEach(([name, percentage]) => {
            const row = document.createElement("div");
            row.className = "subj-row";

            const subjectName = document.createElement("span");
            subjectName.textContent = name;

            const mark = document.createElement("span");
            mark.className = "pct";
            mark.textContent = percentage + "%";

            const bar = document.createElement("div");
            bar.className = "bar";

            const fill = document.createElement("i");
            fill.dataset.w = percentage;

            bar.appendChild(fill);
            row.append(subjectName, mark, bar);
            subjectsBox.appendChild(row);
        });

        const fillBars = () => {
            subjectsBox.querySelectorAll(".bar i").forEach(bar => {
                bar.style.width = bar.dataset.w + "%";
            });
        };

        if (
            !reduceMotion &&
            "IntersectionObserver" in window
        ) {
            const resultsObserver = new IntersectionObserver(
                entries => {
                    if (entries.some(entry => entry.isIntersecting)) {
                        fillBars();
                        resultsObserver.disconnect();
                    }
                },
                { threshold: 0.1 }
            );

            resultsObserver.observe(subjectsBox);
        } else {
            fillBars();
        }
    }

    // FOOTER YEAR
    const year = document.getElementById("yr");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ACTIVE NAVIGATION LINK
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // TEXT REVEAL ANIMATION
    const textElements = document.querySelectorAll(".reveal");

    if (
        !reduceMotion &&
        "IntersectionObserver" in window
    ) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        textElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        textElements.forEach(element => {
            element.classList.add("show");
        });
    }

    // STAR BACKGROUND
    const canvas = document.getElementById("stars");

    if (canvas) {
        const context = canvas.getContext("2d");

        if (context) {
            let width;
            let height;
            let stars = [];

            function resizeCanvas() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;

                stars = Array.from(
                    {
                        length: Math.min(
                            140,
                            Math.floor(width * height / 11000)
                        )
                    },
                    () => ({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        radius: Math.random() * 1.3 + 0.2,
                        speed: Math.random() * 0.25 + 0.05,
                        color: Math.random() < 0.25
                            ? "0,229,255"
                            : "200,220,255"
                    })
                );
            }

            function drawStars() {
                context.clearRect(0, 0, width, height);

                stars.forEach(star => {
                    context.fillStyle =
                        `rgba(${star.color},0.55)`;

                    context.beginPath();
                    context.arc(
                        star.x,
                        star.y,
                        star.radius,
                        0,
                        Math.PI * 2
                    );
                    context.fill();

                    if (!reduceMotion) {
                        star.y += star.speed;

                        if (star.y > height) {
                            star.y = 0;
                            star.x = Math.random() * width;
                        }
                    }
                });

                if (!reduceMotion) {
                    requestAnimationFrame(drawStars);
                }
            }

            window.addEventListener("resize", resizeCanvas);
            resizeCanvas();
            drawStars();
        }
    }
    // CELESTIAL THEME TOGGLE
  // CELESTIAL THEME TOGGLE
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        const updateThemeButton = () => {
            const isLight =
                document.body.classList.contains("light-mode");

            themeToggle.textContent = isLight ? "☾" : "☼";

            themeToggle.setAttribute(
                "aria-label",
                isLight ? "Switch to dark theme" : "Switch to light theme"
            );

            themeToggle.title = isLight
                ? "Switch to dark theme"
                : "Switch to light theme";
        };

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            updateThemeButton();
        });

        updateThemeButton();
    }


}
);
