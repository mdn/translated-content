---
title: Silly story generator
slug: Learn/JavaScript/First_steps/Silly_story_generator
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

이 모듈에서 배운 지식들을 바탕으로 랜덤하게 꾸며진 이야기(silly stories)가 만들어지는 재미있는 앱을 만들어 볼거에요. 즐겨봅시다!

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        이 평가에 시도하기 전에 이 모듈에서 배운 항목을 모두 수행해봐야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        변수, 숫자, 연산자, 문자열 및 배열 같은 자바스크립트의 기본 항목에 대한
        전반적인 이해를 테스트합니다.
      </td>
    </tr>
  </tbody>
</table>

## 시작하기

이 평가를 시작하기 전에, 아래와 같은 것을 해야 합니다.

- [HTML 예제 파일이 있는 사이트](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html)로 이동하여 파일을 복사하여 자기 컴퓨터에 새 디렉토리를 만들고 파일이름 `index.html` 로 저장합니다. 이 안에는 예제를 위한 CSS가 포함되어 있습니다.
- 또 다른 [가공 전의 텍스트가 있는 사이트](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt) 로 가서 별도의 브라우저 탭으로 열어 놓으세요. 이것은 나중에 필요합니다.

위 방법 대신에, 여러분은 테스트에 [JSBin](http://jsbin.com/) 또는 [Glitch](https://glitch.com/) 같은 사이트를 이용할 수 있습니다. 이 온라인 에디터들 내부에 HTML, CSS 그리고 JavaScript를 붙여넣을 수 있습니다. 만약 당신이 사용하는 온라인 에디터가 Javascript 패널(또는 탭)을 갖고 있지 않다면, 자유롭게 HTML 페이지 내부에 `<script>` 엘리멘트를 넣을 수 있습니다.

> **참고:** 문제가 해결되지 않으면 이 페이지 하단의 [평가 또는 추가 도움말](#assessment_or_further_help) 섹션을 참조해 도움을 요청하세요.

## 프로젝트에 대한 간략한 설명

이제 프로젝트 시작을 위해 가공하지 않은 HTML/CSS 그리고 몇몇 텍스트를 만들고 확인했습니다. 이제 아래와 같은 기능을 하는 프로그램을 만들기 위해 JavaScript를 코딩해야 합니다.

- "Generate random story" 버튼를 누를 때 마다 꾸며진 이야기를 만들어야 합니다.
- 생성 버튼을 누르기 전에 "사용자 지정 이름 입력" 텍스트 필드에 사용자 지정 이름을 입력한 경우에만 스토리의 기본 이름인 "Bob"을 사용자 지정 이름으로 바꿉니다.
- 생성 버튼을 누르기 전에 영국 라디오 버튼을 선택한 경우 스토리의 기본 미국 무게 및 온도 수량과 단위를 영국 단위로 변환합니다.
- 버튼을 누를 때마다 새로운 꾸며진 스토리를 무작위로 생성합니다.

다음 스크린샷은 완성된 프로그램이 출력해야 하는 내용의 예를 보여줍니다.

![바보 같은 스토리 생성기 앱은 텍스트 필드, 라디오 버튼 2개, 무작위 스토리를 생성하는 버튼으로 구성되어 있습니다.](screen_shot_2018-09-19_at_10.01.38_am.png)

더 많은 아이디어를 얻으려면 [완성된 예제](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/)를 살펴보세요. 하지만 소스 코드를 들여다보지 마세요!

## 완료하기

이번 섹션에선 프로젝트를 어떻게 진행해야 하는지 자세하게 설명합니다.

기본 설정:

1. `index.html` 파일과 같은 디렉토리에 `main.js` 라는 이름의 파일을 새로 만듭니다.
2. `main.js`를 참조하는 HTML에 {{htmlelement("script")}} 요소를 삽입하여 외부 JavaScript 파일을 HTML에 적용합니다. 닫는 `</body>` 태그 바로 앞에 넣습니다.

초기 변수와 함수:

1. 가공 전의 텍스트 파일에서, "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" 바로 밑의 코드를 모두 복사해서 `main.js` 파일의 맨 위에 붙여넣습니다. 이 내용은 세 개의 변수 제공하는데, `customName` 변수는 "Enter custom name" 텍스트 필드 값을 저장하고, `randomize` 변수에는 "Generate random story" 버튼 객체를 저장하고, HTML 바디에 끝에 있는 클래스가 `story`인 {{htmlelement("p")}} 요소는 story 변수에 저장하며 해당 요소에는 랜덤한 이야기가 복사됩니다. 또한, `randomValueFromArray()` 함수는 배열을 가져와서 배열이 가진 항목 중 하나를 랜덤하게 반환합니다.
2. 가공전 텍스트 파일의 두번째 섹션 "2. RAW TEXT STRINGS"에는 프로그램에 자동으로 입력되어 랜덤 이야기 요소에 출력하는 문자열이 포함되어 있습니다. `main.js` 에 아래 설명대로 변수를 만듭니다:

   1. 먼저 `storyText`변수에 굉장히 긴 가장 첫 번째 문자열을 저장합니다.
   2. `insertX` 배열에 세 개의 문자열 집단의 첫 번째를 저장합니다.
   3. `insertY` 배열에 세 개의 문자열 집단의 두 번째을 저장합니다.
   4. `insertZ` 배열에 세 개의 문자열 집단의 세 번째를 저장합니다.

이벤트 핸들러와 완성되지 않은 함수 배치:

1. 가공되지 않은 텍스트 파일로 돌아갑니다.
2. "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" 밑의 코드를 복사하고, `main.js` 파일의 맨 밑에다 붙여 넣으세요.
   - `randomize` 변수에 클릭 이벤트 리스너를 추가하세요. 그러면 버튼이 클릭되었을 때, `result()` 함수가 실행됩니다.
   - 코드에 부분적으로 완료된 `result()` 함수를 추가하세요. 이 평가의 뒤 부분에서 함수가 완성되고 정상적으로 동작하도록 내용을 추가할 것입니다.

`result()` 함수 완성하기:

1. `newStory`라는 새 변수를 생성하고 그 값을 `storyText`와 동일하게 설정합니다. 버튼을 누르고 함수를 실행할 때마다 새로운 랜덤 스토리를 생성하기 위해 이 변수가 필요합니다. `storyText`를 직접 변경하면 새 스토리를 한 번만 생성할 수 있습니다.
2. `xItem`, `yItem`, `zItem`이라는 세 개의 새 변수를 생성하고 세 개의 배열에서 `randomValueFromArray()`를 호출한 결과와 동일하게 만듭니다. 각 경우의 결과는 호출된 각 배열에서 임의의 항목이 됩니다. 예를 들어 함수를 호출하고 `randomValueFromArray(insertX)`를 작성하여 `insertX`에서 임의의 문자열 하나를 반환하도록 할 수 있습니다.
3. 다음으로 newStory 문자열의 세 개의 자리 표시자인 `:insertx:`, `:inserty:`, `:insertz:` 를 `xItem`, `yItem`, `zItem`에 저장된 문자열로 바꾸고자 합니다. 여기서 도움이 될 수 있는 두 가지 문자열 메서드가 있는데, 각각의 경우 메서드를 호출할 때마다 `newStory`와 동일하게 만들어서 호출할 때마다 `newStory`는 그 자체와 동일하게 만들어지지만 치환이 이루어집니다. 따라서 버튼을 누를 때마다 이 자리 표시자는 각각 임의의 문자열로 대체됩니다. 추가 힌트로, 선택한 방법에 따라 호출 중 하나를 두 번 호출해야 할 수도 있습니다.
4. 첫 번째 `if` 블록 안에 다른 문자열 대체 메서드 호출을 추가하여 `newStory` 문자열에 있는 'Bob'이라는 이름을 `name` 변수로 대체합니다. 이 블록에서는 "`customName` 텍스트 입력에 값이 입력된 경우 스토리의 Bob을 해당 사용자 지정 이름으로 바꿉니다."라고 말합니다.
5. 두 번째 `if` 블록에서는 `uk` 라디오 버튼이 선택되었는지 확인합니다. 그렇다면 스토리의 무게와 온도 값을 파운드와 화씨에서 돌과 섭씨로 변환하고 싶습니다. 해야 할 일은 다음과 같습니다.

   1. 파운드를 돌로, 화씨를 섭씨로 변환하는 공식을 찾아보세요.
   2. `weight` 변수를 정의하는 줄에서 300을 300 파운드에서 돌로 변환하는 계산으로 바꿉니다. 전체 `Math.round()` 호출의 결과 끝에 `' stone'`을 연결합니다.
   3. `temperature` 변수를 정의하는 줄에서 94를 화씨 94를 섭씨로 변환하는 계산으로 바꿉니다. 전체 `Math.round()` 호출의 결과 끝에 `' centigrade'`를 연결합니다.
   4. 두 변수 정의 바로 아래에 '94 fahrenheit'를 `temperature` 변수의 내용으로, '300 pounds'를 `weight` 변수의 내용으로 대체하는 문자열 대체 줄을 두 개 더 추가합니다.

6. 마지막으로 함수의 두 번째 줄에서 마지막 줄에 단락을 참조하는 `story` 변수의 `textContent` 속성을 `newStory`와 동일하게 설정합니다.

## 힌트와 팁

- JavaScript 내용 외에는 HTML을 수정할 필요가 없습니다.
- 만약 JavaScript가 정상적으로 HTML에 적용되었는지 의심스럽다면, 일시적으로 JavaScript의 내용을 지우고, 단순하고 짧은 효과가 명확한 내용을 추가해서, 저장하고 새로고침을 해보세요. 예를 들어 다음은 {{htmlelement("html")}} 요소의 배경을 빨간색으로 바꾸므로 자바스크립트가 제대로 적용되었다면 브라우저 창 전체가 빨간색으로 바뀌어야 합니다.

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [Math.round()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/round) 는 가장 가까운 정수로 단순하게 반올림한 결과를 반환하는 JavaScript 내장함수 입니다.
- 바꾸어야 하는 문자열에는 세 가지 인스턴스가 있습니다. `replace()` 메서드를 여러 번 반복하거나 `replaceAll()`을 사용할 수 있습니다. 문자열은 불변이라는 점을 기억하세요!

## 평가 또는 추가 도움말

작업 평가를 받고 싶거나 막혀서 도움을 요청하고 싶은 경우.

1. 온라인 공유가 가능한 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/) 같은 에디터에 작업한 것을 올려 두세요.
2. 평가 또는 도움을 요청을 [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn) 에 게시글을 쓰세요. 게시글에는 다음이 포함되어야 합니다.

   - "Assessment wanted for Silly story generator"와 같은 서술적인 제목이 필요합니다.
   - 이미 시도한 작업의 세부 사항과 트위터에 바라는 사항을 알려주세요. 예를 들어 문제가 발생하여 도움이 필요하거나 평가를 원하는 경우가 있습니다.
   - 평가 받거나 도움이 필요한 예제에 대한 온라인 공유 가능 편집기 링크(위 1단계에서 설명한 대로)가 필요합니다. 코드를 볼 수 없다면 코딩 문제가 있는 사람을 도와주기가 매우 어렵기 때문에 이 방법을 사용하는 것이 좋습니다.
   - 실제 과제 또는 평가 페이지로 연결되는 링크로, 도움을 받고자 하는 문제를 찾을 수 있습니다.

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
