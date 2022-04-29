// 나의 풀이

function solution(board, moves) {
  let box = [];
  let answer = 0;
  moves.forEach((item) => {
    for (let i = 0; i < board.length; i++) {
      let choice = board[i][item - 1];
      if (choice === 0) continue;
      if (box[box.length - 1] === choice) {
        box.pop();
        answer += 2;
      } else {
        box.push(choice);
      }
      board[i][item - 1] = 0;
      break;
    }
  });
  return answer;
}

//다른 사람의 풀이

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

//다른 사람의 풀이

function solution(board, moves) {
  var count = 0;
  var stack = [];

  for (var i = 0; i < moves.length; i++) {
    var now = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  console.log(stack);
  return count;
}
