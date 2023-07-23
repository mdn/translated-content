---
title: Silly story generator
slug: Learn/JavaScript/First_steps/Silly_story_generator
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

이 모듈에서 배운 지식들을 바탕으로 랜덤하게 꾸며진 이야기(silly stories)가 만들어지는 재미있는 앱을 만들어 볼거에요. 즐겨봅시다!

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행요소:</th>
      <td>
        이 평가에 시도하기 전에 이 모듈에서 배운 항목을 모두 수행해봐야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        변수, 숫자, 연산자, 문자열 및 배열 같은 자바스크립트의 기본항목들에 대한
        전반적인 이해를 테스트합니다.
      </td>
    </tr>
  </tbody>
</table>

## 시작하기

이 평가하기(assements)를 시작하기 전에, 아래와 같은 것을 해야 합니다:

- HTML 예제 파일이 있는 사이트([grab the HTML file](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html))로 이동하여 파일을 복사하여 자기 컴퓨터에 새 디렉토리를 만들고 파일이름 `index.html` 로 저장합니다. 이 안에는 예제를 위한 CSS가 포함되어 있습니다.
- 또 다른 가공 전의 텍스트가 있는 사이트 ([page containing the raw text](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt)) 로 가서 별도의 브라우저 탭으로 열어 놓으세요. 이것은 나중에 필요합니다.

위 방법 대신에, 여러분은 테스트에 [JSBin](http://jsbin.com/) 또는 [Glitch](https://glitch.com/) 같은 사이트를 이용할 수 있습니다. 이 온라인 에디터들 내부에 HTML, CSS 그리고 JavaScript를 붙여넣을 수 있습니다. 만약 당신이 사용하는 온라인 에디터가 Javascript 패널(또는 탭)을 갖고 있지 않다면, 자유롭게 HTML 페이지 내부에 `<script>` 엘리멘트를 넣을 수 있습니다.

<div class="note"><p><strong>Note</strong>: 만약 평가가 막힌다면, 우리에게 도움을 요청하세요— 이 페이지 밑에 [Assessment or further help](#assessment_or_further_help) 섹션을 보세요.</p></div>

## 프로젝트에 대한 간략한 설명

이제 프로젝트 시작을 위해 가공하지 않은 HTML/CSS 그리고 몇몇 텍스트를 만들고 확인했습니다. 이제 아래와 같은 기능을 하는 프로그램을 만들기 위해 JavaScript를 코딩해야 합니다.

- "랜덤한 이야기 만들기('Generate random story') 버튼를 누를 때 마다 꾸며진 이야기(silly stories)를 만들어야 합니다.
- "Enter custome name" 필드에 값이 입력되어있지 않을 경우 기본 이름을 Bob으로 지정합니다. "랜덤한 이야기 만들기('Generate random story')" 버튼을 클릭 하면 아래 사진에서 "Chris saw the \~.." 로 시작하는 문장이 "Bob saw the \~.."로 표시되게 합니다.
- "랜덤한 이야기 만들기('Generate random story')" 을 클릭하면 프로그램이 "US", "UK" 라디오 체크버튼을 확인하여 각 국가에 맞는 온도, 수량, 무게 등 단위를 설정하세요. 아래 사진의 예를 들면 "\~ weights 300 pounds, and \~" 부분이 해당됩니다.
- "랜덤한 이야기 만들기('Generate random story')" 을 누르면 꾸며진 이야기('silly stories')가 랜덤하게 계속 만들어지게 하세요.

이 스크린샷은 프로그램 출력의 예시 입니다:

![](screen_shot_2018-09-19_at_10.01.38_am.png)

더 많은 아이디어를 얻으려면, 완성된 예([have a look at the finished example](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) )를 참고하세요(소스코드는 엿보기 없기!)

## 완료하기

이번 섹션에선 프로젝트를 어떻게 진행해야 하는지 자세하게 설명합니다.

기본 설정:

1. `index.html` 파일과 같은 디렉토리에 `main.js` 라는 이름의 파일을 새로 만듭니다.

2. HTML 파일(`index.html`)에 [\<script>](/ko/docs/Web/HTML/Element/script) 엘리먼트를 삽입하여 `main.js` 를 참조하도록 외부 자바스크립트 파일(`main.js`)을 적용합니다. `</body>` 태그 바로 앞에 배치하세요.

초기 변수와 함수:

1. 가공 전의 텍스트 파일에서, "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" 바로 밑의 코드를 모두 복사해서 `main.js` 파일의 맨 위에 붙여넣습니다. 이 내용은 세 개의 변수 제공하는데, `customName` 변수는 "Enter custom name" 텍스트 필드 값을 저장하고, `randomize` 변수에는 "Generate random story" 버튼 오브젝트를 저장하고, HTML 바디에 끝에 있는 클래스가 `story`인 [\<p>](/ko/docs/Web/HTML/Element/p) 엘리먼트는 story 변수에 저장하며 해당 엘리먼트에는 랜덤한 이야기가 복사됩니다. 또한, randomValueFromArray() 함수는 배열을 가져와서 배열이 가진 항목 중 하나를 랜덤하게 반환합니다.
2. 가공전 텍스트 파일의 두번째 섹션 "2. RAW TEXT STRINGS"에는 프로그램에 자동으로 입력되어 랜덤 이야기 엘리먼트에 출력하는 문자열이 포함되어 있습니다. `main.js` 에 아래 설명대로 변수를 만듭니다:

   1. 먼저 `storyText`변수에 가장 긴 문자열("It was 94 fahrenheit outside, so \~\~" 로 시작하는 문장)을 저장합니다.
   2. `insertX` 배열에 세 개의 문자열 집단의 첫번째(Willy the Goblin, Big Daddy, Father Christmas)를 저장합니다.
   3. `insertY` 배열에 세 개의 문자열 집단의 두번째(the soup kitchen, Disneyland, the White House)을 저장합니다.
   4. `insertZ` 배열에 세 개의 문자열 집단의 세번째(spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away)를 저장합니다.

이벤트 핸들러와 완성되지 않은 함수 정리:

1. 가공전 텍스트 파일("raw text file")로 돌아가자.
2. "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" 밑의 코드를 복사하고, `main.js` 파일의 맨 밑에다 붙여 넣으세요:

   - `randomize` 변수에 클릭 이벤트 리스너를 추가하세요. 그러면 버튼이 클릭되었을 때, `result()` 함수가 실행됩니다.
   - 코드에 부분적으로 완료된 `result()` 함수를 추가하세요. 이 평가의 뒤 부분에서 함수가 완성되고 정상적으로 동작하도록 내용을 추가할 것입니다.

`result()` 함수 완성하기:

1. `newStory`라 불리는 새 변수를 만들고, 이것의 값(value)를 `storyText` 와 똑같이 설정하세요. 이것은 버튼을 누르고 함수가 수행(run)될 때 마다 새 이야기('story')가 랜덤하게 만들어 질 수 있게 합니다. `storyText`를 직접 변경했다면, 새로운 이야기('story')를 한번만 만들 수 있습니다(함수를 통해서 하지 않으면 정적인 값만 유지한다는 의미).
2. 세 개의 새로운 변수 `xItem`, `yItem`, 와 `zItem` 를 만들고 이 세 개의 변수는 `randomValueFromArray()` 를 반환 결과인 세개의 배열과 같도록 만듭니다(각 경우의 호출 결과는 각 배열에 임의의 아이템). 예를 들어 `randomValueFromArray(insertX)`함수를 호출하면 `insertX` 에서 문자열의 하나를 랜덤하게 가질 수 있다.
3. 그 다음으로 `newStory` 문자열에 있는 세 개의 placeholders— `:insertx:`, `:inserty:`, `:insertz:` —저장된 `xItem`, `yItem`와 `zItem` 문자열을 이용하여 로 변환하세요. 여기서 특정 문자열 함수가 도움될 것입니다. 이 함수는 각 경우에 `newStory`와 같게되며(대입), 호출 시 마다 `newStory` 의 원래 값과 동일하지만 대체 될 수 있습니다(랜덤으로 값이 변경되는 것을 표현하는 것으로 추정됨) 그러므로 버튼이 눌러질때마다, 이 placeholder는 꾸며진('silly') 문자열로 랜덤하게 교체되게 됩니다. 추가적인 힌트로, 이 문제의 함수는 하위 문자열에서 찾아진 첫번째 인스턴스만 변경되므로, 아마도 두번 이상 이 함수를 호출해야 할 수도 있습니다.
4. 첫번째 `if` 블록에서, `newStory` 의 'Bob'이라는 이름을 `name` 변수를 사용하여 변환하는 함수를 추가하세요. 이 블록에서 말하는 내용은 "만약 `customName` 텍스트 입력에 값이 들어가 있다면, 이야기속의 Bob을 사용자가 정의한 이름으로 바꾸세요" 라는 의미입니다.
5. 두번째 `if` 블록에서는 `uk` 라디오 버튼이 선택되었는지 확인합시다. `uk` 라디오 버튼이 눌려졌다면, 이야기('story') 상의 무게('weight')와 온도('temperature') 값 들인 파운드('pounds')와 화씨온도(Fahrenheit) 를 'stones'과 섭씨온도('centigrade')를 바꾸어야 합니다. 필요한 것은 아래와 같습니다:

   1. 파운드(pound)를 stone, 화씨온도(Fahrenheit) 를 섭씨온도(centigrade)로 변환하는 공식을 참조하라.
   2. `weight` 변수를 정의하는 라인에서는, 300를 300 파운드를 stones 변환하라. 변환 결과값을 `Math.round()` 를 실행한 결과값 끝에 `' stone'` 을 결합한다(문자열 더하기 연산 또는 concat())
   3. `temperature` 변수를 정의하는 라인에서는, 94를 화씨(Fahrenheit) 94도를 섭씨온도(centigrade)로 변환하라. 변환 결과값을 `Math.round()` 를 실행한 결과값 끝에 `' centigrade'`을 결합한다(문자열 더하기 연산 또는 concat())
   4. 두 변수 정의 바로 밑에, '94 화씨온도('farenheit')로 `temperature` 변수의 내용을 변환하는 것과, '300 pounds'을 `weight` 변수의 내용을 바꾸는 두줄의 문자열 변환라인을 추가한다 .

6. 마지막으로, 함수의 끝 두 줄에 `story` 변수의 `textContent` 속성(property)을 `newStory`와 같게 만드세요.

## 힌트와 팁

- JavaScript 내용 외에는 HTML을 수정할 필요가 없습니다.
- 만약 JavaScript가 정상적으로 HTML에 적용되었는지 의심스럽다면, 일시적으로 JavaScript의 내용을 지우고, 단순하고 짧은 효과가 명확한 내용을 추가해서, 저장하고 새로고침을 해보세요. 아래 예제는 {{htmlelement("html")}} 의 배경을 빨강색으로 바꿉니다 — 정상적으로 JavaScript가 적용되었다면 브라우저 전체 윈도우가 빨강색으로 바뀌게 될겁니다:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [Math.round()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/round) 는 가장 가까운 정수로 단순하게 반올림한 결과를 반환하는 JavaScript 내장함수 입니다.
- 변환이 필요한 세 개의 문장이 문제 있습니다. 아마도 `replace()` 함수를 반복적으로 실행 하거나 정규 표현식을 사용할 수 있습니다. 예를 들어 `var text = 'I am the biggest lover, I love my love'; text.replace(/love/g,'like');` 를 실행하면 인스턴스의 'love' 는 'like' 로 모두 바뀌게 될겁니다. 기억하세요, 문자열은 변하지 않습니다!(문자열은 새 변경할 수 없으며, 새 문자열이 생성되고 그 생성된 결과를 인스턴스가 갖게됨을 표현한 것으로 추정)

## 평가 또는 추가 도움

만약 작업을 평가하길 원하거나 풀이가 막혀서 도움을 원하면:

1. 온라인 공유가 가능한 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/) 같은 에디터에 작업한 것을 올려 두세요.
2. 평가 또는 도움을 요청을 [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn) 에 포스트를 쓰세요. 당신의 글은 아래를 포함해야 합니다:

   - "Assessment wanted for Silly story generator"와 같은 서술적인 제목.
   - 이미 시도해본 것에 대한 상세내용과 우리가 어떻게 하길 원하는 지.
     예. 만약 당신이 풀이가 막히고 도움이 필요하다거나, 평가를 원한다는 것을.
   - 평가를 받고 싶거나 도움이 필요한 예제를 갖고 있는 공유가능한 온라인 에디터 링크. (위에 1단계에서 언급한 것). 이것은 좋은 습관입니다. 그들의 코드를 보지못한다면 도움을 주기는 굉장히 어렵습니다.
   - 실제 작업 또는 평가 페이지 링크, 그래야 우리가 당신이 도움받길 원하는 것을 찾을 수 있어요.

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
