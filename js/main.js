// ! IIFE(Immediately-invoked function expression: 즉시 호출되는 함수 표현식
// Pure Javascript에서 사용
// # 사용하는 이유
// # 1. 코드 사이의 충돌 예방: 다른 코드, 변수, 함수명 등이 충돌하지 않도록 예방
// # 2. 전역 변수, 전역 함수가 되지 않도록 방지
// # 3. 변수의 값을 즉시 할당
(function (window, document) {
  'use strict';

  // element를 담는 변수는 앞에 $를 붙이는 경우가 많음
  const $toggles = document.querySelectorAll('.toggle'); // NodeList (유사배열)
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  function toggleElements() {
    // .toggle의 개수가 바뀔 수 있기 때문에 forEach 사용
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      // off toggle element
      offElements();
    }
  });

  function offElements() {
    // .toggle의 개수가 바뀔 수 있기 때문에 forEach 사용
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }

})(window, document);