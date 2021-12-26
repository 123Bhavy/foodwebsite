console.log('tutorial');
function getmedian(arr1, arr2, n, m) {

    // two arrays with n and m elements
    let i = 0;//iteration in starting of array1
    let j = 0;//iteration in starting of array2
    let num;
    let m1 = -1, m2 = -1;
    if ((m + n) % 2 == 1) {
        for (num = 0; num <= (n + m) / 2; num++) {
            if (i != n && j != m) {
                m1 = (arr1[i] > arr2[j]) ? arr2[j++] : arr1[i++];
            }
            else if (i < n) {
                m1 = arr1[i++];
            }
            else {    // when j<m
                m1 = arr2[j++];
            }
        }
        return m1;
    }
    else {

        for (num = 0; num <= (n + m) / 2; num++) {
        }
        m2 = m1;
        if (i != n && j != m) {
            m1 = (arr1[i] > arr2[j]) ? arr2[j++] : arr1[i++];
        }
        else if (i < n) {
            m1 = arr1[i++];
        }
        else {
            m1 = arr2[j++];
        }


    }
        return (m1 + m2) / 2;
    }

//code for printing output
let arr1 = [2, 3, 4, 5,];
let arr2 = [8, 23, 42, 56, 78];
let n1 = arr1.length;
let n2 = arr2.length;

console.log(getmedian(arr1, arr2, n1, n2));