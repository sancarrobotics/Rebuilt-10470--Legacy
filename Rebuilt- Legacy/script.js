document.addEventListener('DOMContentLoaded', () => {

    const gameData = {
        tr: {
            title: "Project 10470: Rebuilt",
            levelPrefix: "Seviye",
            nextBtn: "Sonraki Seviye",
            howToTitle: "Nasıl Oynanır?",
            howToText: "Dağınık haldeki yapboz parçalarını sürükleyerek sağ taraftaki ızgaraya bırakın ve tarihi yapıları yeniden inşa edin. Yanlış koyduğunuz parçayı geri atabilirsiniz. Bol şans!",
            startBtn: "Oyuna Başla",
            finalHuge: "TEBRİKLER!",
            finalSub: "Tarihi yeniden inşa ettin ve Rebuilt görevini tamamladın!",
            restartBtn: "Yeniden Oyna"
        },
        en: {
            title: "Project 10470: Rebuilt",
            levelPrefix: "Level",
            nextBtn: "Next Level",
            howToTitle: "How to Play?",
            howToText: "Drag the scattered puzzle pieces and drop them onto the grid on the right to rebuild the historical structures. You can throw back any piece you placed incorrectly. Good luck!",
            startBtn: "Start Game",
            finalHuge: "CONGRATULATIONS!",
            finalSub: "You rebuilt history and completed the Rebuilt mission!",
            restartBtn: "Play Again"
        }
    };

    const levels = [
        { 
            gridSize: 2, 
            image: "efes.jpg", 
            tr: { 
                name: "Efes Celsus Kütüphanesi", 
                infoTitle: "Antik dünyanın en görkemli yapılarından biri...", 
                infoText: "MS 110-135 yılları arasında inşa edilen bu devasa yapı, sadece bir kütüphane değil, aynı zamanda Roma Valisi Celsus için yapılmış bir anıt mezardır. Zamanında 12.000 parşömene ev sahipliği yapıyordu. 'Rebuilt' süreci bitti, bilgiye erişim açıldı! Sen de şimdi bu tarihi dokunun bir parçası oldun!" 
            }, 
            en: { 
                name: "Library of Celsus", 
                infoTitle: "One of the most magnificent structures of the ancient world...", 
                infoText: "Built between 110-135 AD, this massive structure was not only a library but also a mausoleum for the Roman Governor Celsus. It once housed 12,000 scrolls. The 'Rebuilt' process is complete, access to knowledge is open! You are now part of this historical texture!" 
            } 
        },
        { 
            gridSize: 2, 
            image: "kapadokya.jpg", 
            tr: { 
                name: "Kapadokya Peribacaları", 
                infoTitle: "Doğanın sabrını ve insan zekasını birleştirdin!", 
                infoText: "Milyonlarca yıl süren rüzgar ve yağmur aşındırmasıyla oluşan bu doğal sanat eserleri, insan eliyle oyularak devasa yeraltı şehirlerine dönüştürüldü. Doğanın inşa ettiğini sen tamamladın! Rebuilt felsefesi burada vücut buluyor." 
            }, 
            en: { 
                name: "Cappadocia", 
                infoTitle: "You combined nature's patience with human intelligence!", 
                infoText: "Formed by millions of years of wind and rain erosion, these natural artworks were carved by human hands into massive underground cities. You completed what nature built! The Rebuilt philosophy comes to life here." 
            } 
        },
        { 
            gridSize: 3, 
            image: "sumela.jpg", 
            tr: { 
                name: "Sümela Manastırı", 
                infoTitle: "İmkansız görülen bir mimariyi tamamladın!", 
                infoText: "Trabzon’da deniz seviyesinden tam 1.150 metre yüksekteki sarp kayalıklara inşa edilmiştir. Sarp kayalıklara bu yapıyı inşa etmek, o dönemin şartlarında sınırları zorlayan bir mühendislik harikasıydı. Sen de bugün bu sınırları zorlayarak mirası birleştirdin!" 
            }, 
            en: { 
                name: "Sumela Monastery", 
                infoTitle: "You completed an architecture deemed impossible!", 
                infoText: "Built on steep cliffs exactly 1,150 meters above sea level in Trabzon. Constructing this structure on steep rocks was an engineering marvel that pushed boundaries in those conditions. Today, you pushed those boundaries and united the legacy!" 
            } 
        },
        { 
            gridSize: 3, 
            image: "yerebatan.jpg", 
            tr: { 
                name: "Yerebatan Sarnıcı", 
                infoTitle: "İstanbul’un 'Yeraltı Sarayı'nı karanlıktan çıkardın!", 
                infoText: "İstanbul'un su ihtiyacını karşılamak için 532 yılında inşa edilen bu dev sarnıçta tam 336 görkemli mermer sütun bulunur. Suyun altındaki gizemi 'Rebuilt' ederek gün yüzüne çıkardın ve bin yıllık dansı bugünlere ulaştırdın." 
            }, 
            en: { 
                name: "Basilica Cistern", 
                infoTitle: "You brought Istanbul's 'Underground Palace' out of the dark!", 
                infoText: "Built in 532 to meet Istanbul's water needs, this giant cistern contains exactly 336 magnificent marble columns. You brought the underwater mystery to light by 'Rebuilding' it and carried a thousand-year-old dance to the present day." 
            } 
        },
        { 
            gridSize: 4, 
            image: "gobeklitepe.jpg", 
            tr: { 
                name: "Göbeklitepe (Final)", 
                infoTitle: "Tarihin 'sıfır noktasından' yeniden inşa ederek oyunu bitirdin!", 
                infoText: "12.000 yıllık geçmişiyle bilinen en eski tapınak! Henüz tekerleğin ve metal aletlerin olmadığı bir dönemde inşa edilen bu devasa yapı, tarih kitaplarını baştan yazdırdı. İnsanlık tarihini yeniden inşa ettin! Geleceği inşa etmek için, önce geçmişi anlamak gerekir!" 
            }, 
            en: { 
                name: "Göbeklitepe (Final)", 
                infoTitle: "You finished the game by rebuilding from the 'zero point' of history!", 
                infoText: "The oldest known temple with a 12,000-year history! Built in an era before the wheel and metal tools, this massive structure rewrote history books. You rebuilt human history! To build the future, one must first understand the past!" 
            } 
        }
    ];

    let currentLevel = 0;
    let currentLang = "tr";
    const boardSize = 400;

    // DOM Elementleri
    const langToggleBtn = document.getElementById("lang-toggle");
    const introScreen = document.getElementById("intro-screen");
    const gameMain = document.getElementById("game-main");
    const introTitle = document.getElementById("intro-title");
    const howToTitle = document.getElementById("how-to-title");
    const howToText = document.getElementById("how-to-text");
    const startGameBtn = document.getElementById("start-game-btn");

    const headerTitle = document.getElementById("header-title");
    const levelTitle = document.getElementById("level-title");
    const piecesContainer = document.getElementById("pieces-container");
    const boardContainer = document.getElementById("board-container");

    const infoModal = document.getElementById("info-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const nextLevelBtn = document.getElementById("next-level-btn");

    const finalScreen = document.getElementById("final-screen");
    const finalHugeText = document.getElementById("final-huge-text");
    const finalSubText = document.getElementById("final-sub-text");
    const finalRestartBtn = document.getElementById("final-restart-btn");
    const victoryMusic = document.getElementById("victory-music");

    // Dil Değiştirme
    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "tr" ? "en" : "tr";
        langToggleBtn.textContent = currentLang === "tr" ? "🇬🇧 EN" : "🇹🇷 TR";
        updateTexts();
    });

    function updateTexts() {
        const levelData = levels[currentLevel];
        const ui = gameData[currentLang];

        introTitle.textContent = ui.title;
        howToTitle.textContent = ui.howToTitle;
        howToText.textContent = ui.howToText;
        startGameBtn.textContent = ui.startBtn;

        headerTitle.textContent = ui.title;
        levelTitle.textContent = `${currentLevel + 1}. ${ui.levelPrefix}: ${levelData[currentLang].name}`;

        finalHugeText.textContent = ui.finalHuge;
        finalSubText.textContent = ui.finalSub;
        finalRestartBtn.textContent = ui.restartBtn;

        if (!infoModal.classList.contains("hidden")) {
            modalTitle.textContent = levelData[currentLang].infoTitle;
            modalText.textContent = levelData[currentLang].infoText;
            nextLevelBtn.textContent = ui.nextBtn;
        }
    }

    // Oyunu Başlat
    startGameBtn.addEventListener("click", () => {
        introScreen.classList.add("hidden");
        gameMain.classList.remove("hidden");
        initGame();
    });

    function initGame() {
        updateTexts();
        piecesContainer.innerHTML = "";
        boardContainer.innerHTML = "";
        infoModal.classList.add("hidden");
        finalScreen.classList.add("hidden");

        const levelData = levels[currentLevel];
        const size = levelData.gridSize;
        const pieceSize = boardSize / size;

        boardContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        boardContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        let pieces = [];

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const index = row * size + col;

                // Hedef Kutusu
                const dropZone = document.createElement("div");
                dropZone.classList.add("drop-zone");
                dropZone.dataset.index = index;
                dropZone.addEventListener("dragover", e => e.preventDefault());
                dropZone.addEventListener("drop", handleDropToBoard);
                boardContainer.appendChild(dropZone);

                // Yapboz Parçası
                const piece = document.createElement("div");
                piece.classList.add("puzzle-piece");
                piece.id = `piece-${index}`;
                piece.draggable = true;
                piece.dataset.index = index;
                piece.style.width = `${pieceSize}px`;
                piece.style.height = `${pieceSize}px`;
                piece.style.backgroundImage = `url('${levelData.image}')`;
                piece.style.backgroundPosition = `${-(col * pieceSize)}px ${-(row * pieceSize)}px`;

                piece.addEventListener("dragstart", handleDragStart);
                pieces.push(piece);
            }
        }

        // Karıştır ve Ekle
        pieces.sort(() => Math.random() - 0.5);
        pieces.forEach(p => {
            piecesContainer.appendChild(p);
            scatterPiece(p, pieceSize);
        });
    }

    function scatterPiece(piece, pieceSize) {
        piece.style.position = "absolute";
        const maxPos = boardSize - pieceSize;
        piece.style.left = `${Math.floor(Math.random() * maxPos)}px`;
        piece.style.top = `${Math.floor(Math.random() * maxPos)}px`;
        piece.style.transform = `rotate(${Math.floor(Math.random() * 60) - 30}deg)`;
    }

    function handleDragStart(e) { e.dataTransfer.setData("text/plain", e.target.id); }

    function handleDropToBoard(e) {
        e.preventDefault();
        const piece = document.getElementById(e.dataTransfer.getData("text/plain"));
        const dropZone = e.currentTarget;
        
        if (piece && dropZone.children.length === 0) {
            dropZone.appendChild(piece);
            piece.style.position = "static";
            piece.style.transform = "rotate(0deg)";
            checkWin();
        }
    }

    // Geri atma
    piecesContainer.addEventListener("dragover", e => e.preventDefault());
    piecesContainer.addEventListener("drop", e => {
        e.preventDefault();
        const piece = document.getElementById(e.dataTransfer.getData("text/plain"));
        if(piece) {
            piecesContainer.appendChild(piece);
            scatterPiece(piece, boardSize / levels[currentLevel].gridSize);
            checkWin();
        }
    });

    function checkWin() {
        const dropZones = document.querySelectorAll(".drop-zone");
        let isWin = true;
        let placedCount = 0;

        dropZones.forEach(z => {
            if (z.firstChild) {
                placedCount++;
                if (z.firstChild.dataset.index !== z.dataset.index) isWin = false;
            } else isWin = false;
        });

        if (isWin && placedCount === levels[currentLevel].gridSize ** 2) {
            if (currentLevel === levels.length - 1) showFinalScreen();
            else showModal();
        }
    }

    function showModal() {
        const levelData = levels[currentLevel][currentLang];
        
        // Önce yazıları seviyeye ve dile göre yerleştir
        modalTitle.textContent = levelData.infoTitle;
        modalText.textContent = levelData.infoText;
        
        // Sonra paneli görünür yap
        infoModal.classList.remove("hidden");
    }

    nextLevelBtn.addEventListener("click", () => {
        currentLevel++;
        initGame();
    });

    function showFinalScreen() {
        gameMain.classList.add("hidden");
        finalScreen.classList.remove("hidden");

        if(victoryMusic) {
            victoryMusic.currentTime = 0;
            victoryMusic.play().catch(() => {});
        }

        const end = Date.now() + 3000;
        (function frame() {
            if (typeof confetti === "function") {
                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#e94560', '#0f3460', '#ffffff'] });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#e94560', '#0f3460', '#ffffff'] });
            }
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }

    finalRestartBtn.addEventListener("click", () => {
        finalScreen.classList.add("hidden");
        if(victoryMusic) victoryMusic.pause();
        currentLevel = 0;
        introScreen.classList.remove("hidden");
        updateTexts();
    });

    updateTexts(); // İlk yüklemede dilleri ayarla
});