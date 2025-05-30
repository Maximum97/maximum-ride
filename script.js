// HTML에서 'luckyButton' ID를 가진 버튼 요소를 찾습니다.
const luckyButton = document.getElementById('luckyButton');

// HTML에서 'luckyMessage' ID를 가진 문단 요소를 찾습니다.
const luckyMessage = document.getElementById('luckyMessage');

// 버튼에 'click' 이벤트 리스너를 추가합니다.
// 즉, 버튼이 클릭되면 특정 함수를 실행하라는 의미입니다.
luckyButton.addEventListener('click', function() {
// 1. 버튼을 숨깁니다.
// luckyButton 요소에 'hidden' 클래스를 추가합니다.
// CSS에서 .hidden 클래스가 display: none;으로 설정되어 있기 때문에 버튼이 사라집니다.
luckyButton.classList.add('hidden');

// 2. 메시지를 표시합니다.
// luckyMessage 요소에서 'hidden' 클래스를 제거합니다.
// CSS에서 .hidden 클래스가 제거되면 메시지가 나타나게 됩니다.
luckyMessage.classList.remove('hidden');

// (선택 사항) 메시지가 잠시 나타났다가 사라지게 하려면 아래 주석을 해제하세요.

setTimeout(function() {
luckyMessage.classList.add('hidden');
luckyButton.classList.remove('hidden'); // 버튼 다시 보이게 하려면
}, 3000); // 3초 후에 다시 숨김 (밀리초 단위)

});