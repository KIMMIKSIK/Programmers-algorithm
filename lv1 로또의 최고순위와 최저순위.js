//나의풀이(에러처리포함)
function solution(lottos, win_nums) {
  try {
    if (
      lottos.filter((item) => item >= 0 && item <= 45).length < 6 ||
      win_nums.filter((item) => item > 0 && item <= 45).length < 6
    ) {
      throw new Error("lottos는 0~45, win_nums는 1~45값을 입력하세요");
    }
  } catch (e) {
    console.log(e.message);
  }
  let zeroCount = lottos.filter((s) => s == 0).length;
  let rankObject = {};
  var answer = [];
  let test = [];
  for (let i = 0; i < 6; i++) {
    test.push(Number(lottos.filter((item) => item === win_nums[i]).join()));
  }
  rankObject = {
    0: test.filter((item) => item != "").length + zeroCount,
    1: test.filter((item) => item != "").length,
  };
  for (let i = 0; i < 2; i++) {
    switch (rankObject[i]) {
      case 2:
        answer.push(5);
        break;
      case 3:
        answer.push(4);
        break;
      case 4:
        answer.push(3);
        break;
      case 5:
        answer.push(2);
        break;
      case 6:
        answer.push(1);
        break;
      default:
        answer.push(6);
        break;
    }
  }
  return answer;
}

//다른사람 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

//다른 사람 풀이
function solution(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const max = lottos.filter((n) => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}
