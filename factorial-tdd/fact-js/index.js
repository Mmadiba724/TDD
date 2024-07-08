function facto(n) {
    total = 1;
    for (let i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}

module.exports = {
    facto,
};
