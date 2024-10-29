from flask import Flask, render_template, request

app = Flask(__name__)

prompt = "Prompt:"
responseA = "Response A:"
responseB = "Response B:"
instructionPrompt = """
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
"""


@app.route("/", methods=["GET", "POST"])
def combine_prompt():
    combined_prompt = ""
    if request.method == "POST":
        input1 = request.form.get("prompt", "")
        input2 = request.form.get("response_a", "")
        input3 = request.form.get("response_b", "")
        # Combine all inputs into a single prompt
        combined_prompt = (prompt + input1 + "\n" + responseA + input2 + "\n" +
                           responseB + input3 + "\n" + instructionPrompt)
    return render_template("index.html", combined_prompt=combined_prompt)


if __name__ == "__main__":
    app.run(debug=True)
