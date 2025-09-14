// Dark/Light Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Lazy loading gambar
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img.lazy');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
  }
});

// Scroll animation
function scrollAnimation() {
  const elements = document.querySelectorAll('.scroll-animation');

  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach(el => {
    const elementTop = el.offsetTop + 100;

    if (windowBottom > elementTop) {
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);

// Filter Project
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        setTimeout(() => card.classList.add('show'), 50);
      } else {
        card.style.display = 'none';
        card.classList.remove('show');
      }
    });
  });
});

// Modal Project Detail
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.close-btn');
const detailButtons = document.querySelectorAll('.btn-details');

const projectDetails = {
  1: {
    title: 'Website Portfolio',
    description: 'Ini adalah portfolio pribadi dengan desain modern, animasi, dan integrasi sosial media.'
  },
  2: {
    title: 'Aplikasi Discord',
    description: 'Aplikasi manajemen tugas harian interaktif yang dibuat dengan React dan fitur responsif.'
  },
  3: {
    title: 'Game Server',
    description: 'create an attractive game server with abundant featuresi.'
  }
};

detailButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.project;
    modalTitle.textContent = projectDetails[id].title;
    modalDescription.textContent = projectDetails[id].description;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testi, i) => {
    testi.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 7000);

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
