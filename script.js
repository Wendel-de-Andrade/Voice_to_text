document.addEventListener('DOMContentLoaded', () => {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    const languageSelect = document.getElementById('language');
    const resultContainer = document.querySelector('.result p.resultText');
    const startListeningButton = document.querySelector('.btn.record');
    const recordButtonText = document.querySelector('.btn.record p');
    const clearButton = document.querySelector('.btn.clear');
    const downloadButton = document.querySelector('.btn.download');

    let recognizing = false;

    languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.text = language.name_br;
        languageSelect.add(option);
    });

    recognition.continuos = true;
    recognition.interimResults = true;
    recognition.lang = languageSelect.value;

    languageSelect.addEventListener('change', () => {
        recognition.lang = languageSelect.value;
    });

    startListeningButton.addEventListener('click', toggleSpeechRecognition);

    clearButton.addEventListener('click', clearResults);

    downloadButton.disabled = true;
})