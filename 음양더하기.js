//나의 풀이
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    let part = absolutes[i] * (signs[i] ? 1 : -1);
    answer += part;
  }
  return answer;
}

// 다른 사람의 풀이1
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

//다른 사람의 풀이2
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((v, i) => {
    if (signs[i]) {
      answer += v;
    } else {
      answer -= v;
    }
  });
  return answer;
}
