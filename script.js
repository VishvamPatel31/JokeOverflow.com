// Ideally we would want to store secrets, enpoints in a seperate file but for the sake of this project
// we will store them as global constants.
const baseURL = "https://v2.jokeapi.dev";
const categories = ["Programming"];
const params = [
  "blacklistFlags=nsfw,religious,racist,political,sexist,explicit",
  "idRange=0-100",
];
const API_KEY = "AIzaSyDLjS95nZl4lIf1visVBKXeIT9T9CwD4nU";

//Languages avialable for translation
const languages = [
  { code: "en", name: "English" },
  { code: "af", name: "Afrikaans" },
  { code: "sq", name: "Albanian" },
  { code: "am", name: "Amharic" },
  { code: "ar", name: "Arabic" },
  { code: "hy", name: "Armenian" },
  { code: "as", name: "Assamese" },
  { code: "ay", name: "Aymara" },
  { code: "az", name: "Azerbaijani" },
  { code: "bm", name: "Bambara" },
  { code: "eu", name: "Basque" },
  { code: "be", name: "Belarusian" },
  { code: "bn", name: "Bengali" },
  { code: "bho", name: "Bhojpuri" },
  { code: "bs", name: "Bosnian" },
  { code: "bg", name: "Bulgarian" },
  { code: "ca", name: "Catalan" },
  { code: "ceb", name: "Cebuano" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "zh-TW", name: "Chinese (Traditional)" },
  { code: "co", name: "Corsican" },
  { code: "hr", name: "Croatian" },
  { code: "cs", name: "Czech" },
  { code: "da", name: "Danish" },
  { code: "dv", name: "Dhivehi" },
  { code: "doi", name: "Dogri" },
  { code: "nl", name: "Dutch" },
  { code: "eo", name: "Esperanto" },
  { code: "et", name: "Estonian" },
  { code: "ee", name: "Ewe" },
  { code: "fil", name: "Filipino (Tagalog)" },
  { code: "fi", name: "Finnish" },
  { code: "fr", name: "French" },
  { code: "fy", name: "Frisian" },
  { code: "gl", name: "Galician" },
  { code: "ka", name: "Georgian" },
  { code: "de", name: "German" },
  { code: "el", name: "Greek" },
  { code: "gn", name: "Guarani" },
  { code: "gu", name: "Gujarati" },
  { code: "ht", name: "Haitian Creole" },
  { code: "ha", name: "Hausa" },
  { code: "haw", name: "Hawaiian" },
  { code: "he", name: "Hebrew" },
  { code: "hi", name: "Hindi" },
  { code: "hmn", name: "Hmong" },
  { code: "hu", name: "Hungarian" },
  { code: "is", name: "Icelandic" },
  { code: "ig", name: "Igbo" },
  { code: "ilo", name: "Ilocano" },
  { code: "id", name: "Indonesian" },
  { code: "ga", name: "Irish" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "jv", name: "Javanese" },
  { code: "kn", name: "Kannada" },
  { code: "kk", name: "Kazakh" },
  { code: "km", name: "Khmer" },
  { code: "rw", name: "Kinyarwanda" },
  { code: "gom", name: "Konkani" },
  { code: "ko", name: "Korean" },
  { code: "kri", name: "Krio" },
  { code: "ku", name: "Kurdish" },
  { code: "ckb", name: "Kurdish (Sorani)" },
  { code: "ky", name: "Kyrgyz" },
  { code: "lo", name: "Lao" },
  { code: "la", name: "Latin" },
  { code: "lv", name: "Latvian" },
  { code: "ln", name: "Lingala" },
  { code: "lt", name: "Lithuanian" },
  { code: "lg", name: "Luganda" },
  { code: "lb", name: "Luxembourgish" },
  { code: "mk", name: "Macedonian" },
  { code: "mai", name: "Maithili" },
  { code: "mg", name: "Malagasy" },
  { code: "ms", name: "Malay" },
  { code: "ml", name: "Malayalam" },
  { code: "mt", name: "Maltese" },
  { code: "mi", name: "Maori" },
  { code: "mr", name: "Marathi" },
  { code: "mni-Mtei", name: "Meiteilon (Manipuri)" },
  { code: "lus", name: "Mizo" },
  { code: "mn", name: "Mongolian" },
  { code: "my", name: "Myanmar (Burmese)" },
  { code: "ne", name: "Nepali" },
  { code: "no", name: "Norwegian" },
  { code: "ny", name: "Nyanja (Chichewa)" },
  { code: "or", name: "Odia (Oriya)" },
  { code: "om", name: "Oromo" },
  { code: "ps", name: "Pashto" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "pt", name: "Portuguese (Portugal, Brazil)" },
  { code: "pa", name: "Punjabi" },
  { code: "qu", name: "Quechua" },
  { code: "ro", name: "Romanian" },
  { code: "ru", name: "Russian" },
  { code: "sm", name: "Samoan" },
  { code: "sa", name: "Sanskrit" },
  { code: "gd", name: "Scots Gaelic" },
  { code: "nso", name: "Sepedi" },
  { code: "sr", name: "Serbian" },
  { code: "st", name: "Sesotho" },
  { code: "sn", name: "Shona" },
  { code: "sd", name: "Sindhi" },
  { code: "si", name: "Sinhala (Sinhalese)" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "so", name: "Somali" },
  { code: "es", name: "Spanish" },
  { code: "su", name: "Sundanese" },
  { code: "sw", name: "Swahili" },
  { code: "sv", name: "Swedish" },
  { code: "tl", name: "Tagalog (Filipino)" },
  { code: "tg", name: "Tajik" },
  { code: "ta", name: "Tamil" },
  { code: "tt", name: "Tatar" },
  { code: "te", name: "Telugu" },
  { code: "th", name: "Thai" },
  { code: "ti", name: "Tigrinya" },
  { code: "ts", name: "Tsonga" },
  { code: "tr", name: "Turkish" },
  { code: "tk", name: "Turkmen" },
  { code: "ak", name: "Twi (Akan)" },
  { code: "uk", name: "Ukrainian" },
  { code: "ur", name: "Urdu" },
  { code: "ug", name: "Uyghur" },
  { code: "uz", name: "Uzbek" },
  { code: "vi", name: "Vietnamese" },
  { code: "cy", name: "Welsh" },
  { code: "xh", name: "Xhosa" },
  { code: "yi", name: "Yiddish" },
  { code: "yo", name: "Yoruba" },
  { code: "zu", name: "Zulu" },
];
//global variable to track previous language
var previouslanguage = "en";

/*
  Generates the html dropdown element with available languages for dropdown.
  @param: 
    preSelectedLanguage: current language selected for translation. 
    If no value provided "" is used. 
*/
function generateLanguageDropdown(preSelectedLanguage = "") {
  const languageDropdown = document.createElement("select");
  languageDropdown.id = "language-dropdown";
  languageDropdown.className = "language-dropdown";

  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language.code;
    option.textContent = language.name;
    if (language.code === preSelectedLanguage) {
      option.selected = true;
    }
    languageDropdown.appendChild(option);
  });



  const languageContainer = document.createElement("div");
  languageContainer.id = "language-container";

  const languageInfo = document.createElement("div");
  languageInfo.id = "language-info";
  languageInfo.textContent = "Select language to translate to:";

  languageContainer.appendChild(languageInfo);
  languageContainer.appendChild(languageDropdown);

  return languageContainer;
}

// To use the function and add the HTML to the DOM, instead of hardcoding in index.html. This avoids dropdown code dupliation
const containerElement = document.getElementById("language-box");
const languageDropdownHTML = generateLanguageDropdown("");
containerElement.appendChild(languageDropdownHTML);

/*
  Translates the given text into targetLanguage using the Google Translate API.
  @param: text, targetLanguage
*/
async function translate(text, targetLanguage) {
  try {
    let res = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ q: text, target: targetLanguage }),
      }
    );
    let data = await res.json();
    let translation = data.data.translations[0].translatedText;
    return translation;
  } catch (error) {
    console.error("Translation failed:", error);
    return text; // Return the original text if translation fails
  }
}

/*
  Gets the current selected language from the dropdown element. 
  If none found, then we use previousLanguage as selected language.
*/
function getSelectedLanguage() {
  var languageDropdown = document.getElementById("language-dropdown");
  if (!languageDropdown) {
    console.log("previous language not found");
    return previouslanguage;
  } else {
    return languageDropdown.value;
  }
}

/*
  Changes displayed translated text based on the language selected.
  @param:
    jokeText: joke text to translate.
*/
async function getAndSetTranslatedJoke(jokeText) {
  var selectedLanguage = getSelectedLanguage();
  var translatedText = await translate(jokeText, selectedLanguage);
  var jokeTextBox = document.querySelector(".translated-joke-text");
  jokeTextBox.innerHTML =
    "<p><strong>Translated Joke (" +
    selectedLanguage +
    "):</strong> " +
    translatedText +
    "</p>";
  previouslanguage = selectedLanguage;
}

/*
  Fetchs a new joke and translates it to selected langauge.
*/
async function fetchJoke() {
  var selectedLanguage = getSelectedLanguage();

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    baseURL + "/joke/" + categories.join(",") + "?" + params.join("&")
  );

  xhr.onreadystatechange = async function () {
    if (xhr.readyState == 4 && xhr.status < 300) {
      var randomJoke = JSON.parse(xhr.responseText);

      var contentDiv = document.getElementById("content");

      if (randomJoke.type == "single") {
        contentDiv.innerHTML =
          "<div class='joke-box'><p id='joke-text'>" +
          randomJoke.joke +
          "</p></div>";
      } else {
        contentDiv.innerHTML =
          "<div class='joke-box'><p id='joke-text'>" +
          randomJoke.setup +
          " " +
          randomJoke.delivery;
        ("</p></div>");
      }

      var jokeBox = document.querySelector(".joke-box");
      jokeBox.innerHTML += "<div class='translated-joke-text'></div>";

      var refreshButton = document.createElement("button");
      refreshButton.id = "refresh-btn";
      refreshButton.className = "btn-ref";
      refreshButton.textContent = "New Joke";

      // Add event listener to the refresh button
      refreshButton.addEventListener("click", fetchJoke);
      contentDiv.appendChild(refreshButton);

      const languageDropdownHTML = generateLanguageDropdown(selectedLanguage);
      contentDiv.appendChild(languageDropdownHTML);

      document
        .getElementById("language-dropdown")
        .addEventListener("change", function () {
          var jokeText = document.querySelector("#joke-text").textContent;
          getAndSetTranslatedJoke(jokeText);
        });

      // Translate the joke if selected language is not English
      if (selectedLanguage != "en") {
        var jokeText =
          randomJoke.type == "single"
            ? randomJoke.joke
            : randomJoke.setup + " " + randomJoke.delivery;
        getAndSetTranslatedJoke(jokeText);
      }
    } else if (xhr.readyState == 4) {
      alert(
        "Error while requesting joke.\n\nStatus code: " +
          xhr.status +
          "\nServer response: " +
          xhr.responseText
      );
    }
  };
  xhr.send();
}

document.getElementById("btn").addEventListener("click", fetchJoke);
