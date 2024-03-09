import compileToSnippet from './src/converter';

document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyButton');
  const copyText = "test copy";

  copyButton.addEventListener('click', function() {
    // Create a temporary textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = copyText;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    // Execute the copy command
    // Function is Depricated
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Give some feedback to the user
    alert('Text copied to clipboard: ' + copyText);
  });
});

document.getElementById('editor').addEventListener('input',()=>{
    console.log(compileToSnippet(null,null,document.getElementById('editor').innerText))
});