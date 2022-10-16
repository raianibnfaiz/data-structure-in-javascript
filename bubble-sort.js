function bubbleSort(arr) {

    for (const i in arr) {
        console.log(i)
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                console.log(arr[j], "-", arr[j + 1]);
            }


        }
        console.log(arr)

    }
    console.log(arr);
}
bubbleSort([5, 2, 7, 9, 4]);
