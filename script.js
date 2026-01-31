function updateProgress(btn) {
    const card = btn.parentElement;
    const progress = card.querySelector("progress");
    const label = card.querySelector("span");

    if (progress.value < 100) {
        progress.value += 10;
        label.textContent = `${progress.value}% Completed`;
    }

    if (progress.value >= 100) {
        btn.disabled = true;
        btn.textContent = "Course Completed ✔";
    }
}
