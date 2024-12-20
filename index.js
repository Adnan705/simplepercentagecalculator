document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const percentageDisplay = document.createElement('div');
    document.body.appendChild(percentageDisplay);

    const subjectInputs = document.querySelectorAll('#computer, #math, #english, #physics, #chemistry, #urdu');
    const obtainMarksInput = document.getElementById('obtainmarks');
    const totalMarks = 600; // Since each subject has 100 marks and there are 6 subjects

    subjectInputs.forEach(input => {
        input.addEventListener('input', updateObtainMarks);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const obtainMarks = parseFloat(obtainMarksInput.value) || 0;
        const percentage = (obtainMarks / totalMarks) * 100;
        percentageDisplay.textContent = `Your Percentage: ${percentage.toFixed(2)}%`;
    });

    function updateObtainMarks() {
        let totalObtainedMarks = 0;
        subjectInputs.forEach(input => {
            totalObtainedMarks += parseFloat(input.value) || 0;
        });
        obtainMarksInput.value = totalObtainedMarks;
    }
});