
    // ========================
    // 30 MADEUP FACTS (exactly as provided)
    // ========================
    const allFacts = [
        "People who dance in the rain live a bit longer",
        "When you miss someone, go to the highest point and scream the person's name, the universe will bring the person to you",
        "Guys with soft bumbum live longer",
        "Leprechauns exist...but at the end of a long tunnel holding a pot of gold while wearing a tutu",
        "People with tiny eyes have greater vision",
        "Your alter ego is who you're meant to be but too scared to be.",
        "Kisses and cuddles have been scientifically proven to increase your lifespan",
        "Make fun of your problems and it won't bother you anymore",
        "If you want your hair to grow longer, stop shouting",
        "Pressing breasts (yours or someone else's) can bring you riches especially if you like them/you. Press a breast today.",
        "Everytime you step out in a fire fit, Apollo and Aphrodite nod in approval and grant your desires for the day. That's why you need Aurastyling",
        "Biting someone you love gently increases your love for the person. Don't go biting just anyone",
        "When you sit in the deepest part of a pool and close your eyes, you can hear the sirens singing",
        "Always pop out with a bit of color. It makes Iris happy. When she's happy, she makes your life as bright as a rainbow",
        "When you speak to your inner child every day(with love) , life gets better for you",
        "Rome was built in a day (by Aliens). Don't let them lie to you",
        "The Pyramids of Gaza is an otherworldly headquarters",
        "When you die, your soul gets sucked into a tube/vaccum and the soul of a loved one greets you on the other side Source : Journey of souls",
        "Girls with big beautiful breasts deserve will go to Al janah",
        "Reading increases your mental capacity and stretches your imagination",
        "Being whimsical is the only way to live a good life",
        "Babies can see beyond the veil",
        "People who can switch between two languages fluently have insane aura",
        "King Commodus was such a hated king, that the WC was named after him.... Waste Commodus",
        "People born with two eyes colours are that way, because, they were supposed to be mythical creatures i.e.dragons, fairest, mermaids etc. But they changed their minds",
        "If you look up at the sky long enough, you'll see a dragon fly",
        "Fairies are born when a baby first laughs",
        "If you love someone say it, or the words will haunt you in your dreams as monkeys",
        "When you have vivid dreams of places or people you've never been to or seen, you're probably seeing the future, your past life, or an alternate universe.",
        "If you meditate well enough, you'll be able to speak to your spirit guide and ask for anything",
        "Love yourself hard so you can transcend the highest spiritual level"
    ];

    // verify count = 30
    console.assert(allFacts.length === 30, "Exactly 30 facts needed");

    // pagination settings: 5 facts per page
    const FACTS_PER_PAGE = 5;
    const totalPages = Math.ceil(allFacts.length / FACTS_PER_PAGE); // 6 pages

    let currentPage = 1;

    // DOM elements
    const introOverlay = document.getElementById('introOverlay');
    const mainBook = document.getElementById('mainBook');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const factsContainer = document.getElementById('factsContainer');
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    const birthdayMsgDiv = document.getElementById('birthdayMessageContainer');

    // helper: assign whimsical icons per fact (just for fun)
    function getIconForFact(index) {
        const icons = [
            "fas fa-cloud-rain", "fas fa-cloud-moon", "fas fa-smile-wink", "fas fa-hat-wizard", "fas fa-eye",
            "fas fa-user-astronaut", "fas fa-heart", "fas fa-laugh-squint", "fas fa-leaf", "fas fa-hand-peace",
            "fas fa-fire", "fas fa-kiss", "fas fa-water", "fas fa-palette", "fas fa-child",
            "fas fa-landmark", "fas fa-pyramid", "fas fa-spa", "fas fa-female", "fas fa-book",
            "fas fa-feather-alt", "fas fa-baby-carriage", "fas fa-language", "fas fa-toilet", "fas fa-dragon",
            "fas fa-dove", "fas fa-fairy", "fas fa-comment-dots", "fas fa-moon", "fas fa-hands-helping",
            "fas fa-star-of-life"
        ];
        return icons[index % icons.length];
    }

    // Render facts for current page and handle birthday message visibility on last page
    function renderPage() {
        if (!factsContainer) return;
        const startIdx = (currentPage - 1) * FACTS_PER_PAGE;
        const endIdx = Math.min(startIdx + FACTS_PER_PAGE, allFacts.length);
        const pageFacts = allFacts.slice(startIdx, endIdx);
        
        // generate facts HTML
        let factsHtml = '';
        pageFacts.forEach((fact, idx) => {
            const globalFactIndex = startIdx + idx;
            const iconClass = getIconForFact(globalFactIndex);
            factsHtml += `
                <div class="fact-card">
                    <div class="fact-icon"><i class="${iconClass}"></i></div>
                    <div class="fact-text">✨ ${fact}</div>
                </div>
            `;
        });
        factsContainer.innerHTML = factsHtml;
        
        // Update page indicator text
        pageIndicator.innerText = `Page ${currentPage} / ${totalPages}`;
        
        // Enable/disable buttons based on boundaries
        prevPageBtn.disabled = (currentPage === 1);
        nextPageBtn.disabled = (currentPage === totalPages);
        
        // ***** WHIMSICAL BIRTHDAY MESSAGE LOGIC *****
        // Show the "Happy Birthday Micheal" message ONLY on the last page (page 6)
        // and hide on all other pages (as per "empty space on the last page")
        if (birthdayMsgDiv) {
            if (currentPage === totalPages) {
                birthdayMsgDiv.style.display = "block";
                // Add a little extra whimsical animation each time the last page appears
                birthdayMsgDiv.style.animation = "sparklePulse 1.8s infinite ease";
                // tiny extra spark: add a floating birthday emoji effect
            } else {
                birthdayMsgDiv.style.display = "none";
            }
        }
    }
    
    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage();
            // smooth scroll to top of facts area for better reading
            factsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            renderPage();
            factsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // attach event listeners for pagination
    if (nextPageBtn) nextPageBtn.addEventListener('click', nextPage);
    if (prevPageBtn) prevPageBtn.addEventListener('click', prevPage);
    
    // ---- INTRO LOGIC ----
    // YES : hide intro overlay, show the whimsical book, initial page render
    function onYes() {
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.classList.add('hide');
            mainBook.classList.remove('hide');
            // reset to page 1 when opening book
            currentPage = 1;
            renderPage();
            // tiny extra magic: fade book in
            mainBook.style.animation = 'fadeInUp 0.6s ease';
        }, 300);
    }
    
    // NO : page goes completely blank (body empty, remove everything, true blank)
    function onNo() {
        // According to spec: the page goes blank with no content
        document.body.innerHTML = '';
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.height = '100vh';
        document.body.style.display = 'block';
        // no text, no elements, pure blank canvas
        // Additionally remove any residual style that might show something
        document.body.style.background = '#ffffff';
        // ensure no pseudo-elements appear
    }
    
    // attach yes/no events
    if (yesBtn) yesBtn.addEventListener('click', onYes);
    if (noBtn) noBtn.addEventListener('click', onNo);
    
    // Add fade-in animation keyframe
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .fact-card .fact-icon i {
            filter: drop-shadow(1px 1px 0 #f0bc7a);
        }
        /* extra whimsical flair for birthday message on last page */
        .birthday-message h2::before {
            content: "🎂 ";
            font-size: 2rem;
            background: none;
            color: #e68a2e;
        }
        .birthday-message h2::after {
            content: " 🎈";
            font-size: 2rem;
            background: none;
            color: #e68a2e;
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Ensure birthday message is properly hidden at start (book not visible yet)
    // Also if someone resizes, no issue
    window.addEventListener('load', () => {
        // pre-hide birthday container if book hidden
        if (birthdayMsgDiv) birthdayMsgDiv.style.display = "none";
        // initial state ready
    });