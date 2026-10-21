# Vanessa Che Ngum | Portfolio Website

A responsive, multi-page personal portfolio for **Vanessa Che Ngum**, a System Development student and aspiring junior software developer based in Johannesburg, South Africa. The site introduces who I am, shows my education and technical skills, explains the services I offer, displays a gallery of my academic and personal projects, and gives visitors a way to contact me. It is built with plain HTML, CSS and JavaScript and supports both a dark (default) and a light theme.



## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Home/Introduction with typing animation, About Me, Skills and development process |
| Services | `services.html` | Skills and the six services I offer |
| Gallery (Projects) | `gallery.html` | Ten project preview cards grouped by category |
| Contact | `contact.html` | Contact details and a message form |
| Education | `education.html` | Profile photo, technical skills, coursework, academic projects, learning goals and strengths |

## Technologies Used

| Technology | How it is used |
| --- | --- |
| **HTML5** | Semantic structure (`header`, `nav`, `main`, `section`, `article`, `footer`), `<meta charset="UTF-8">` and responsive viewport meta tag on every page, ARIA labels on buttons and navigation |
| **CSS3** | Custom properties (colour variables), Flexbox, CSS Grid, media queries for tablet and mobile, keyframe animations, `backdrop-filter` glass effects, light and dark theme styles |
| **JavaScript (vanilla ES6)** | Theme toggle, typing animation, active navigation link, animated progress bars (`IntersectionObserver`), footer year, canvas star field, profile photo handling |
| **Google Fonts** | Syne, DM Sans and Space Mono |
| **Git and GitHub Pages** | Version control and hosting |

No JavaScript libraries or frameworks are used.

## Features

- **Five linked pages** with the same navigation bar, footer, colour palette and fonts.
- **Dark and light theme** switch using the moon icon button in the navigation bar.
- **Typing animation** for the role text on the Home and Education pages.
- **Current page highlighting** in the navigation, applied with JavaScript.
- **Responsive layout** that adapts to desktop, tablet and mobile screens (CSS Grid, Flexbox and media queries).
- **Animated backgrounds**: a moving grid and stars on the Services page and a canvas star field on the Education page.
- **Profile photo** with a glowing, multi-colour gradient frame.
- **Education page** with animated skill progress bars, IT coursework, academic projects, learning goals and professional strengths.
- **Services page** with skill tags and six service cards with hover animations.
- **Gallery page** with ten project preview cards built entirely with HTML and CSS.
- **Contact page** with a full-height photo panel, contact details and a form with required fields and email validation.
- **Downloadable CV** button on the Home page.
- **Footer year** that updates automatically.
- **Accessibility and standards**: UTF-8 character encoding declared on every page (so the special symbols copied from Character Map display correctly), `lang="en"`, descriptive `alt` text, keyboard-friendly controls and a `prefers-reduced-motion` setting that switches animations off.

## Project Structure

```
├── index.html
├── services.html
├── gallery.html
├── contact.html
├── education.html
├── index.css
├── services.css
├── gallery.css
├── contact.css
├── education.css
├── script.js
├── vanessa.jpeg
├── beach.jpg
├── vanessa_cv.pdf
└── README.md
```

## Running the Project Locally

No build step or installation is needed.

1. **Clone the repository.** On the repository page on GitHub, click the green **Code** button, copy the HTTPS link, then run `git clone` followed by a space and the copied link in a terminal:
   ```bash
   git clone <the link you copied>
   ```
   Alternatively, click **Code** and choose **Download ZIP**, then extract the ZIP file.
2. **Open the project folder** (the folder that contains `index.html`).
3. **Open `index.html` in a web browser**, either by double-clicking the file or by right-clicking it and choosing *Open with* your browser.

Optional: in Visual Studio Code, install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server** to get automatic reloading.

An internet connection is needed to load the Google Fonts and the contact page background photo.

## References

### AI tools

| Tool | How it was used |
| --- | --- |
| **Claude (Anthropic)** | Generated the original code for the Education page, based on the content of my CV: the profile photo frame with colourful gradient corners, the typing animation, the animated skill progress bars and the canvas star background (`education.html`, `education.css` and the matching parts of `script.js`). I then edited and extended this code myself. |
| **Claude (Anthropic)** | Reviewed and debugged my HTML, CSS and JavaScript, for example conflicting CSS between inline styles and linked stylesheets, JavaScript errors that stopped `script.js` from running, and the light/dark theme toggle. Also suggested ideas for a consistent navigation bar, layout and responsive behaviour across the pages. |
| **Claude (Anthropic)** | Helped write this README. |
| **ChatGPT (OpenAI)** | Used for coding help and suggestions while building the website. I reviewed, tested and edited everything it produced before using it. |

### External resources

| Resource | How it was used |
| --- | --- |
| [Google Fonts](https://fonts.google.com/) | Syne, DM Sans and Space Mono typefaces loaded through the Google Fonts stylesheet |
| [Unsplash](https://unsplash.com/) | Background photograph on the left panel of the Contact page (photo ID `photo-1507525428034-b723cf961d3e`, loaded from `images.unsplash.com`) |
| Windows Character Map (`charmap.exe`) | Used to find and copy special symbols, such as ● ○ ✦ ✧ ✚ √ ♪ ֎ ۞ ± ÷ × − ₽, which are used as icons and button symbols in the gallery project previews |
| Personal photographs | `vanessa.jpeg` (profile photo) and `beach.jpg` supplied by me |
| My CV | `vanessa_cv.pdf`, and the education, skills and coursework content on the Education page |

## Author

**Vanessa Che Ngum**
GitHub: [github.com/Vanessa02-hub](https://github.com/Vanessa02-hub)
LinkedIn: [linkedin.com/in/vanessa-che-7532b7385](https://www.linkedin.com/in/vanessa-che-7532b7385)

&copy; 2026 Vanessa Che Ngum. All rights reserved.
