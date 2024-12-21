//======== Example 1  :
// function TotalSum(a,b,...numbers) {
//     let sum =0;
//     for (let i of numbers) {
//         sum += i;
//     }
//     console.log("The Sum Numbers Is" = "+sum);
// }
// TotalSum(65,58);

//======== Example 2  :

function Test(...args) {
    console.log(args[6]);
}
Test(70,20,50,40,"A", "B", "C", "D", "E", "F");