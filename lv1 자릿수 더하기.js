//나의 풀이
function solution(n) {
  var answer = "" + n;
  let list = [];
  let number = 0;
  for (let x of answer) {
    list.push(x);
  }
  list.forEach((item) => {
    number += parseInt(item);
  });
  return number;
}

//문자열을 숫자형으로 만드는 3가지 방법
// 1. parseInt() 함수 사용
// 2. parseFloat() 함수 사용
// 3. +, * 연산자 사용

//다른 사람의 풀이
function solution(n) {
  // 쉬운방법
  return n + "".split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
console.log(solution(123));
