
    /* Function to open the new webpage with four buttons */
    function openQuizPage() {
        window.open('quizpage.html', '_self');
    }
    function openFCPage() {
        window.open('flashcardpage.html', '_self');
    }
    /*shuffle img on homepage each time*/
    // Array of image IDs
    var charImages = [
    "https://raw.githubusercontent.com/neonwuchang/PracticeMandarin/main/images/char1.png",
    "https://raw.githubusercontent.com/neonwuchang/PracticeMandarin/main/images/char2.png",
    "https://raw.githubusercontent.com/neonwuchang/PracticeMandarin/main/images/char3.png",
    "https://raw.githubusercontent.com/neonwuchang/PracticeMandarin/main/images/char4.png",
    "https://raw.githubusercontent.com/neonwuchang/PracticeMandarin/main/images/char5.png",
    "https://raw.githubusercontent.com/neonwuchang/PracticeMandarin/main/images/char6.png",
    "https://raw.githubusercontent.com/neonwuchang/PracticeMandarin/main/images/char7.png",
    "https://raw.githubusercontent.com/neonwuchang/PracticeMandarin/main/images/char8.png"
    ];

    // Generate a random index
    var randomIndex = Math.floor(Math.random() * charImages.length);

    // Get the image element
    var imageElement = document.getElementById("dynamic-image");

    // Set the source of the image to a random image URL
    imageElement.src = charImages[randomIndex];
