function sortCarByYearDescendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];

    // Tulis code-mu disini
    result.sort((carA, carB) => {
        if (carA.year > carB.year) {
            return -1;
        } else {
            return 1;
        }
    });

    // Rubah code ini dengan array hasil sorting secara descending
    return result;
}
