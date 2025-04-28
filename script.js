document.addEventListener('DOMContentLoaded', function() {
    const storyList = document.querySelector('.story-list');
  
    const userStories = [
      {
        title: 'Shamhat [Completed]',
        status: 'Berlanjut',
        chapter: 'Bab 1',
        img: 'images/Shamhat.jpg' 
      },
      {
        title: 'Chaldea Academy || Fate/Grand Order Fanfiction',
        status: 'Berlanjut',
        chapter: 'Bab 1',
        img: 'images/Chaldea-academy.jpg' 
      }
    ];
  
    userStories.forEach(story => {
      const card = document.createElement('div');
      card.classList.add('story-card');
  
      card.innerHTML = `
        <a href="index2.html">
            <img src="${story.img}" alt="${story.title}">
            <p>${story.status}</p>
            <small>${story.chapter}</small>
        </a>
      `;
  
      card.addEventListener('click', function() {
        console.log('Membuka cerita:', story.title);
      });
  
      storyList.appendChild(card);
    });
  
    const featuredBanner = document.querySelector('.featured-banner');
    featuredBanner.addEventListener('click', function() {
        console.log('Menuju Vidio: Santri Pilihan Bunda S2');
    });

    const categoryList = document.getElementById('categoryList');
    const scrollRight = document.getElementById('scrollRight');

  // Data kategori dummy
    const categories = [
        { name: "Romansa", image: "images/romance.png" },
        { name: "Fiksi Remaja", image: "images/teenfic.png" },
        { name: "Fiksi Penggemar", image: "images/fanfic.png" },
        { name: "Fantasi", image: "images/fantasy.png" },
        { name: "Acak", image: "images/random.png" },
        { name: "Cerita Pendek", image: "images/shortstory.png" },
        { name: "Fiksi Umum", image: "images/urban.png" },
        { name: "ChickLit", image: "images/chicklit.png" },
        { name: "Humor", image: "images/humor.png" },
        { name: "Aksi", image: "images/action.png" }
    ];

    categories.forEach(category => {
        const item = document.createElement('div');
        item.className = 'category-item';
        item.innerHTML = `
        <img src="${category.image}" alt="${category.name}">
        <span>${category.name}</span>
        `;
        item.addEventListener('click', () => {
            console.log('Kategori:', category.name);
        });
        categoryList.appendChild(item);
    });

    scrollRight.addEventListener('click', function() {
        categoryList.scrollBy({ left: 200, behavior: 'smooth' });
    });

    const sections = [
        {
          title: "Pilihan terbaik untukmu",
          logo: "",
          subtitle: "", 
          books: [
            { img: "images/void-of-avalon.jpg", tag: "fateseries" },
            { img: "images/Stormbringer.jpg", tag: "bsd" },
            { img: "images/dear-chuuya.jpg", tag: "fanfic" },
            { img: "images/unforgetable-love.jpg", tag: "japanese" },
            { img: "images/itachi.jpg", tag: "itachi" },
            { img: "images/beast.jpg", tag: "beast" },
            { img: "images/wattys.jpg", tag: "wattys" },
            { img: "images/fiksi.jpg", tag: "fiksi" },
            { img: "images/Chaldea-academy.jpg", tag: "fafiction" },
            { img: "images/remaja.jpg", tag: "remaja" },
          ],
        },
        {
          logo: "images/wattpad-originals.svg", 
          title: "Pelarian instanmu",
          subtitle: "",
          books: [
            { img: "images/book9.jpg", tag: "bestfriend" },
            { img: "images/book10.jpg", tag: "akademisihir" },
            { img: "images/book11.jpg", tag: "romace" },
            { img: "images/book12.jpg", tag: "office" },
            { img: "images/book13.jpg", tag: "akademi" },
          ],
        },
        {
          title: "Completed Stories",
          logo: "",
          subtitle: "Binge from start to finish",
          books: [
            { img: "images/side-a.jpg", tag: "translate" },
            { img: "images/side-b.jpg", tag: "translate" },
            { img: "images/book14.jpg", tag: "completed" },
            { img: "https://img.wattpad.com/cover/148095553-256-k938201.jpg", tag: "fanfiction" },
            { img: "https://img.wattpad.com/cover/115474866-256-k499235.jpg", tag: "completed" },
            { img: "https://img.wattpad.com/cover/219977950-256-k785081.jpg", tag: "completed" },
            { img: "https://img.wattpad.com/cover/342286904-256-k233616.jpg", tag: "completed" },
          ],
        },
        {
          title: "Direkomendasikan untukmu",
          logo: "",
          subtitle: "",
          books: [
            { img: "images/fiksi.jpg", tag: "rekomendasi" },
            { img: "images/remaja.jpg", tag: "rekomendasi" },
            { img: "images/void-of-avalon.jpg", tag: "rekomendasi" },
            { img: "images/Shamhat.jpg", tag: "rekomendasi" },
            { img: "images/book10.jpg", tag: "rekomendasi" },
          ],
        },
    ]; 
      
    const content = document.getElementById("content");

    sections.forEach(section => {
      const sectionEl = document.createElement("section");
      sectionEl.className = "content-section";
    
      const header = document.createElement("div");
      header.className = "section-header";
    
      if (section.logo) {
        const logo = document.createElement("img");
        logo.src = section.logo;
        logo.alt = "logo";
        header.appendChild(logo);
      }
    
      if (section.subtitle) {
        const subtitle = document.createElement("p");
        subtitle.className = "subtitle";
        subtitle.textContent = section.subtitle;
        header.appendChild(subtitle);
      }
    
      const title = document.createElement("h2");
      title.textContent = section.title;
      header.appendChild(title);
    
      sectionEl.appendChild(header);
    
      const bookList = document.createElement("div");
      bookList.className = "book-list";
    
      section.books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";
    
        const img = document.createElement("img");
        img.src = book.img;
        img.alt = book.tag;
    
        const tag = document.createElement("p");
        tag.textContent = book.tag;
    
        bookItem.appendChild(img);
        bookItem.appendChild(tag);
        bookList.appendChild(bookItem);
      });
    
      sectionEl.appendChild(bookList);
      content.appendChild(sectionEl);
    });      
});