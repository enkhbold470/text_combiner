const prompt = "Prompt:";
const responseA = "Response A:";
const responseB = "Response B:";
const instructionPrompt = `
response grading scale: {Amazing, Good, Okay, Bad, Horrible}
also give me answer for Rationale for Rating for each student with 1 sentence { }
also give me Rationale like comparing between A and B
remember to answer with sentence made out of keywords like:

2. Compare between Student A and B to select options from {
1 - A MUCH BETTER than B,
2 - A BETTER than B,
3 - A SLIGHTLY BETTER than B,
4 - A SAME AS B,
5 -B SLIGHTLY BETTER than A,
6 - B BETTER than A,
7 - B MUCH BETTER than A
}


### Summary: [Phase 2] SxS Rating Collection - Instructions for Linguists

**Objective**: Collect quality ratings for two responses (Response A and B) to the same prompt, with three replications for accuracy. This data will support building a high-quality Platinum test set.

### Task Requirements

1. **Individual Response Ratings**:
   - Assign **Overall Quality Rating** (Amazing, Pretty Good, Okay, Pretty Bad, Horrible) for both Response A and B.
   - Provide **Rationale** for each rating, focusing on:
     - Writing Style
     - Verbosity
     - Instruction Following
     - Truthfulness
     - Harmlessness/Safety
     - Core Content Quality
     - Response Structure

2. **Side-by-Side (SxS) Comparison**:
   - Compare responses on a **7-point Likert Scale**:
     - 1: A is much better than B
     - 4: A and B are about the same
     - 7: B is much better than A
   - Provide a **Rationale** for the SxS rating, explaining the comparative strengths and weaknesses.

3. **Criteria Details**:
   - **Truthfulness**: Fact-check primary claims if factual data is present, up to 15 minutes across both responses.
   - **Harmlessness/Safety**: Ensure responses are free of unsafe or toxic language.
   - **Response Structure**: Confirm correct format adherence if requested in the prompt.

### Important Guidelines
   - Models should not use first-person unless directed and should avoid personal claims.
   - Mark **"Not Applicable"** for Truthfulness if factuality cannot be assessed reasonably.
   - **Examples** demonstrate ideal responses and typical errors (e.g., instruction following or truthfulness issues).

This framework ensures consistency and depth in evaluating and comparing the overall quality of AI responses for varied prompts.




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