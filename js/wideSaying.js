const wideSaying = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "- 키케로"
    },
    {
        quote: "서두르지 말되\n멈추지 말라",
        author: "- 괴테"
    },
    {
        quote: "성공의 비결은 단 한 가지\n잘할 수 있는 일에 광적으로 집중하는 것이다",
        author: "- 톰 모나건"
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다",
        author: "- 나폴레옹"
    },
    {
        quote: "사랑 받고 싶다면 사랑하라\n그리고 사랑스럽게 행동하라",
        author: "- 벤자민 프랭클린"
    },
    {
        quote: "사랑은 무엇보다도 자신을 위한 선물이다",
        author: "- 장 아누이"
    },
    {
        quote: "가장 끔찍한 빈곤은 외로움과\n사랑 받지 못한다는 느낌이다",
        author: "- 마더 테레사"
    },
    {
        quote: "성공으로 가는 엘리베이터는 고장입니다\n당신은 계단을 이용해야만 합니다\n한계단 한계단씩",
        author: "– 조 지라드"
    },
    {
        quote: "이미 끝나버린 일을 후회하기 보다는\n하고 싶었던 일들을 하지못한 것을 후회하라",
        author: "– 탈무드"
    },
    {
        quote: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은\n일에 몰두하는 것이다",
        author: "- 베토벤"
    },
    {
        quote: "도중에 포기하지 말라\n망설이지 말라\n최후의 성공을 거둘 때까지 밀고 나가자",
        author: "- 헨리포드"
    },
];

const quote = document.querySelector("#wise_Saying span:first-child");
const author = document.querySelector("#wise_Saying span:last-child");

const randomSaying = wideSaying[Math.floor(Math.random() * wideSaying.length)];

quote.innerText = randomSaying.quote;
author.innerText = randomSaying.author;