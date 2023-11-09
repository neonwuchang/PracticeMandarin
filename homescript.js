
    /* Function to open the new webpage with four buttons */
    function openQuizPage() {
        window.open('quizpage.html', '_self');
    }
    function openFCPage() {
        window.open('flashcardpage.html', '_self');
    }
    /*shuffle img on homepage each time*/
    // Array of image IDs
    var imageIds = [
    "1aI5l7efpH18GZ7JDO39DiLQ4RYbonRkG",
    "15_SaT95VKtNUEK7p1XkJJgk9gJT88Omc",
    "14P85jvBGjyglkizREswf-vEOO7E3h_HG",
    "1jW2S1s1kli6truHDXksOuT569ldUhK52",
    "11bs_0IlR-cH11rzgrDSwPbAP6ZOT1POi",
    "1MMRqFP0bn-7rE8giuV62yTyT57VIWSxv",
    "1fNTsfHs8-02ZPXBxBqV_PdJoDavP7TTK",
    "1dq4QcQjjy_40M_cZWSR-LDTTTFslIcZV"
    ];

    // Generate a random index
    var randomIndex = Math.floor(Math.random() * imageIds.length);

    // Get the image element
    var imageElement = document.getElementById("dynamic-image");

    // Set the source of the image to a random image URL
    imageElement.src = "https://drive.google.com/uc?id=" + imageIds[randomIndex];
