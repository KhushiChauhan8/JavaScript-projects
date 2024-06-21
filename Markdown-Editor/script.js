// Initialize markdown-it
const md = window.markdownit({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {}
        }
        return ''; // use external default escaping
    }
});

// Get references to the input and preview elements
const markdownInput = document.getElementById('markdown-input');
const htmlPreview = document.getElementById('html-preview');

// Function to convert markdown to HTML and update the preview
function updatePreview() {
    const markdownText = markdownInput.value;
    const htmlContent = md.render(markdownText);
    htmlPreview.innerHTML = htmlContent;
}

// Event listener for input changes
markdownInput.addEventListener('input', updatePreview);

// Initial preview update
updatePreview();

// Functions to format markdown text
function formatMarkdown(type) {
    const start = markdownInput.selectionStart;
    const end = markdownInput.selectionEnd;
    const selectedText = markdownInput.value.substring(start, end);
    let formattedText;

    switch (type) {
        case 'bold':
            formattedText = `**${selectedText}**`;
            break;
        case 'italic':
            formattedText = `*${selectedText}*`;
            break;
        case 'heading':
            formattedText = `# ${selectedText}`;
            break;
        default:
            formattedText = selectedText;
    }

    markdownInput.setRangeText(formattedText, start, end, 'end');
    updatePreview();
}

// Function to save the markdown to a file
function saveFile() {
    const blob = new Blob([markdownInput.value], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to load a markdown file
function loadFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        markdownInput.value = e.target.result;
        updatePreview();
    };

    reader.readAsText(file);
}
