function combinePrompt() {
    const userPrompt = document.getElementById('userPrompt').value;
    const formattingConstraints = document.getElementById('formattingConstraints').value;
    const modelResponse = document.getElementById('modelResponse').value;
    const formattingNotFollowed = document.getElementById('formattingNotFollowed').value;
    const instructionPrompt = document.getElementById('instructionPrompt').value;

    const combinedPrompt = `USER: Prompt\n${userPrompt}\n\nMODEL: Formatting Constraints\n${formattingConstraints}\n\nMODEL: Response\n${modelResponse}\n\nMODEL: Formatting Not Followed Reason\n${formattingNotFollowed}\n\nInstruction\n${instructionPrompt}`;
    document.getElementById('combinedPrompt').textContent = combinedPrompt;
}

function copyCombinedPrompt() {
    const combinedPrompt = document.getElementById('combinedPrompt').textContent;
    navigator.clipboard.writeText(combinedPrompt).then(() => {
        alert('Combined prompt copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy text.');
    });
}