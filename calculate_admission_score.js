


function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }
    if (testScore > 50 || schoolGrade > 30 || testScore < 0 || schoolGrade < 0) {
        return "Invalid Input";
    }
    let total = testScore + schoolGrade;
    if (isFFamily) {
        total += 20;
    }
    return total >= 80;
}
