function cari( angka ) {
    if (angka <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt( angka); i++) {
        if (angka % i === 0) {
            return false;

        }
    }
return true;
}

function Prima() {
    const angkaprima = [];
    for (let i = 1; i <= 1000; i++) {
        if (cari(i)) {
            angkaprima.push(i);
        }
    }
    console.log(angkaprima);
}
Prima();
