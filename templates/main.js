const prompt = "Prompt:";
const responseA = "Response A:";
const responseB = "Response B:";
const instructionPrompt = `
response grading scale: {Amazing, Good, Okay, Bad, Horrible}
also give me answer for Rationale for Rating for each student with 1 sentence { }

2. Compare between Student A and B to select options from {
1 - A MUCH BETTER than B,
2 - A BETTER than B,
3 - A SLIGHTLY BETTER than B,
4 - A SAME AS B,
5 -B SLIGHTLY BETTER than A,
6 - B BETTER than A,
7 - B MUCH BETTER than A
}
also give me Rationale like comparing between A and B
`;

function combinePrompt() {
    const input1 = document.getElementById('prompt').value;
    const input2 = document.getElementById('response_a').value;
    const input3 = document.getElementById('response_b').value;

    const combinedPrompt = `${prompt} ${input1}\n${responseA} ${input2}\n${responseB} ${input3}\n${instructionPrompt}`;
    document.getElementById('combinedPrompt').textContent = combinedPrompt;
}

function copyCombinedPrompt() {
    const combinedPrompt = document.getElementById('combinedPrompt').textContent;
    navigator.clipboard.writeText(combinedPrompt).then(() => {
        alert('Combined prompt copied to clipboard!');
    });
}