const languages = [
    {
        no: "38",
        name: "Portuguese",
        native: "Português",
        name_br: "Português",
        code: "pt",
    },
    {
        no: "12",
        name: "English",
        native: "English",
        name_br: "Inglês",
        code: "en",
    },
    {
        no: "1",
        name: "Afrikaans",
        native: "Afrikaans",
        name_br: "Africâner",
        code: "af",
    },
    {
        no: "2",
        name: "Albanian",
        native: "Shqip",
        name_br: "Albanês",
        code: "sq",
    },
    {
        no: "3",
        name: "Arabic",
        native: "العربية",
        name_br: "Árabe",
        code: "ar",
    },
    {
        no: "4",
        name: "Bengali",
        native: "বাংলা",
        name_br: "Bengali",
        code: "bn",
    },
    {
        no: "5",
        name: "Bulgarian",
        native: "Български",
        name_br: "Búlgaro",
        code: "bg",
    },
    {
        no: "6",
        name: "Chinese (Simplified)",
        native: "中文 (简体)",
        name_br: "Chinês (Simplificado)",
        code: "zh",
    },
    {
        no: "7",
        name: "Chinese (Traditional)",
        native: "中文 (繁體)",
        name_br: "Chinês (Tradicional)",
        code: "zh-TW",
    },
    {
        no: "8",
        name: "Croatian",
        native: "Hrvatski",
        name_br: "Croata",
        code: "hr",
    },
    {
        no: "9",
        name: "Czech",
        native: "Čeština",
        name_br: "Tcheco",
        code: "cs",
    },
    {
        no: "10",
        name: "Danish",
        native: "Dansk",
        name_br: "Dinamarquês",
        code: "da",
    },
    {
        no: "11",
        name: "Dutch",
        native: "Nederlands",
        name_br: "Holandês",
        code: "nl",
    },
    {
        no: "13",
        name: "Estonian",
        native: "Eesti",
        name_br: "Estoniano",
        code: "et",
    },
    {
        no: "14",
        name: "Finnish",
        native: "Suomi",
        name_br: "Finlandês",
        code: "fi",
    },
    {
        no: "15",
        name: "French",
        native: "Français",
        name_br: "Francês",
        code: "fr",
    },
    {
        no: "16",
        name: "German",
        native: "Deutsch",
        name_br: "Alemão",
        code: "de",
    },
    {
        no: "17",
        name: "Greek",
        native: "Ελληνικά",
        name_br: "Grego",
        code: "el",
    },
    {
        no: "18",
        name: "Gujarati",
        native: "ગુજરાતી",
        name_br: "Gujarati",
        code: "gu",
    },
    {
        no: "19",
        name: "Hebrew",
        native: "עברית",
        name_br: "Hebraico",
        code: "he",
    },
    {
        no: "20",
        name: "Hindi",
        native: "हिन्दी",
        name_br: "Hindi",
        code: "hi",
    },
    {
        no: "21",
        name: "Hungarian",
        native: "Magyar",
        name_br: "Húngaro",
        code: "hu",
    },
    {
        no: "22",
        name: "Icelandic",
        native: "Íslenska",
        name_br: "Islandês",
        code: "is",
    },
    {
        no: "23",
        name: "Indonesian",
        native: "Bahasa Indonesia",
        name_br: "Indonésio",
        code: "id",
    },
    {
        no: "24",
        name: "Italian",
        native: "Italiano",
        name_br: "Italiano",
        code: "it",
    },
    {
        no: "25",
        name: "Japanese",
        native: "日本語 (Nihongo)",
        name_br: "Japonês",
        code: "ja",
    },
    {
        no: "26",
        name: "Kannada",
        native: "ಕನ್ನಡ",
        name_br: "Kannada",
        code: "kn",
    },
    {
        no: "27",
        name: "Korean",
        native: "한국어 (Hangugeo)",
        name_br: "Coreano",
        code: "ko",
    },
    {
        no: "28",
        name: "Latvian",
        native: "Latviešu",
        name_br: "Letão",
        code: "lv",
    },
    {
        no: "29",
        name: "Lithuanian",
        native: "Lietuvių",
        name_br: "Lituano",
        code: "lt",
    },
    {
        no: "30",
        name: "Malay",
        native: "Bahasa Melayu",
        name_br: "Malaio",
        code: "ms",
    },
    {
        no: "31",
        name: "Malayalam",
        native: "മലയാളം",
        name_br: "Malaiala",
        code: "ml",
    },
    {
        no: "32",
        name: "Marathi",
        native: "मराठी",
        name_br: "Marathi",
        code: "mr",
    },
    {
        no: "33",
        name: "Nepali",
        native: "नेपाली",
        name_br: "Nepali",
        code: "ne",
    },
    {
        no: "34",
        name: "Norwegian",
        native: "Norsk",
        name_br: "Norueguês",
        code: "no",
    },
    {
        no: "35",
        name: "Odia",
        native: "ଓଡ଼ିଆ",
        name_br: "Oriya",
        code: "or",
    },
    {
        no: "36",
        name: "Persian",
        native: "فارسی (Farsi)",
        name_br: "Persa",
        code: "fa",
    },
    {
        no: "37",
        name: "Polish",
        native: "Polski",
        name_br: "Polonês",
        code: "pl",
    },
    {
        no: "39",
        name: "Punjabi",
        native: "ਪੰਜਾਬੀ (Punjabi)",
        name_br: "Punjabi",
        code: "pa",
    },
    {
        no: "40",
        name: "Romanian",
        native: "Română",
        name_br: "Romeno",
        code: "ro",
    },
    {
        no: "41",
        name: "Russian",
        native: "Русский (Russkiy)",
        name_br: "Russo",
        code: "ru",
    },
    {
        no: "42",
        name: "Serbian",
        native: "Српски (Srpski)",
        name_br: "Sérvio",
        code: "sr",
    },
    {
        no: "43",
        name: "Slovak",
        native: "Slovenčina",
        name_br: "Eslovaco",
        code: "sk",
    },
    {
        no: "44",
        name: "Slovenian",
        native: "Slovenščina",
        name_br: "Esloveno",
        code: "sl",
    },
    {
        no: "45",
        name: "Spanish",
        native: "Español",
        name_br: "Espanhol",
        code: "es",
    },
    {
        no: "46",
        name: "Swahili",
        native: "Kiswahili",
        name_br: "Suaíli",
        code: "sw",
    },
    {
        no: "47",
        name: "Swedish",
        native: "Svenska",
        name_br: "Sueco",
        code: "sv",
    },
    {
        no: "48",
        name: "Tamil",
        native: "தமிழ்",
        name_br: "Tâmil",
        code: "ta",
    },
    {
        no: "49",
        name: "Telugu",
        native: "తెలుగు",
        name_br: "Telugu",
        code: "te",
    },
    {
        no: "50",
        name: "Thai",
        native: "ไทย (Thai)",
        name_br: "Tailandês",
        code: "th",
    }
];