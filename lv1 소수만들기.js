// 나의풀이
function solution(nums) {
  let answer = 0;
  let total = 0;
  let list = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let x = j + 1; x < nums.length; x++) {
        total = nums[i] + nums[j] + nums[x];
        if (prime(total)) answer++;
      }
    }
  }
  function prime(t) {
    for (let i = 2; i <= Math.sqrt(t); i++) {
      if (t % i == 0) return false;
    }
    return true;
  }

  return answer;
}

// 다른사람의 풀이
function test(num, answer) {
  var half = Math.floor(num / 2),
    successful = true;

  for (var i = 2; i <= half; i++) {
    if (num % i == 0) {
      successful = false;
      break;
    }
  }

  return successful ? answer + 1 : answer;
}

function solution(nums) {
  var pn = new Array(3000).fill(0);

  pn[1] = 1;
  pn[0] = 1;

  //에라토스테네스의 체

  for (var i = 2; i <= Math.floor(Math.sqrt(3000)); i++) {
    if (pn[i] == 1) continue;

    for (var j = i * 2; j <= 3000; j += i) {
      pn[j] = 1;
    }
  }
  //완전 탐색

  var len = nums.length;
  var count = 0;

  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      for (var k = j + 1; k < len; k++) {
        var sum = nums[i] + nums[j] + nums[k];
        if (pn[sum] == 0) {
          count++;
        }
      }
    }
  }

  return count;
}
