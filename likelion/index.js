const que = ["어릴 적 친구들과 자주 했던 놀이는 무엇인가요?", "어릴 시절 제일 행복했던 경험은 무엇인가요?", "요새 취미는 무엇인가요?", "살면서 해본 경험 중, 내 자녀가 꼭 해봤으면 하는 경험은 무엇인가요?", "인생에서 가장 중요하게 생각하는 가치는 무엇인가요?", "오늘은 어떤 하루를 보내셨나요?", "자녀에게 해주고 싶은 인생 조언이 있다면 무엇인가요?", "어릴 적 꿈은 무엇이었나요?"];

const randomQue = document.querySelector("h4")
const button = document.querySelector("button");

function handleRandomQue() {
      const randomIndex = Math.floor(Math.random() * que.length);
    randomQue.innerText = que[randomIndex];
}

button.addEventListener("click", handleRandomQue)