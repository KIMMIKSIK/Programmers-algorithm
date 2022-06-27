// 나의 풀이(반복문을 최소화하고 검색,추가,삭제가 아닌 읽기만을 사용하면서 효율성을 끌어올려야했다.)
function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
}

//다른 사람의 풀이

var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );

//다른 사람의 풀이

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
//다른 사람의 풀이
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
