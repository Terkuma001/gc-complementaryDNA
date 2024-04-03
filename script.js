function generateAlternative() {
    const sequence = document.getElementById("dnaSequence").value.toUpperCase();
    let alternativeSequence = '';

    for (let i = 0; i < sequence.length; i++) {
        switch (sequence[i]) {
            case 'A':
                alternativeSequence += 'T';
                break;
            case 'T':
                alternativeSequence += 'A';
                break;
            case 'G':
                alternativeSequence += 'C';
                break;
            case 'C':
                alternativeSequence += 'G';
                break;
            default:
                alternativeSequence += sequence[i];
        }
    }

    document.getElementById("result").innerText = `Alternative Sequence: ${alternativeSequence}`;
}

function calculateGCContent() {
    const sequence = document.getElementById("dnaSequence").value.toUpperCase();
    const gcCount = (sequence.match(/[GC]/g) || []).length;
    const totalCount = sequence.length;
    const gcContent = (gcCount / totalCount) * 100;

    document.getElementById("result").innerText = `GC Content: ${gcContent.toFixed(2)}%`;
}
