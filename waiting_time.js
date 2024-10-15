
function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let bakiAsa = serialNumber - waitingTimes.length - 1;
    if (bakiAsa <= 0) {
        return 0;
    }
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }
    let averageTime = Math.round(totalTime / waitingTimes.length);
    let waitKortaHoba = bakiAsa * averageTime;
    return waitKortaHoba;
}

