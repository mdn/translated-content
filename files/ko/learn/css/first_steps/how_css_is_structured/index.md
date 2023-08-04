---
title: CSS 의 구조
slug: Learn/CSS/First_steps/How_CSS_is_structured
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

CSS 가 무엇인지, 그리고 CSS 의 기본 사용법에 대해 여러분은 알고 있습니다. 이제 언어 자체의 구조를 조금 더 깊이 살펴볼 차례입니다. 우리는 이미 여기에서 논의된 많은 개념들을 만났습니다. 나중에 혼란스러워 하는 개념을 발견하면, 이 개념으로 돌아와서 요약할 수 있습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본적인 컴퓨터 활용 능력,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >
        에 대한 기본 지식, HTML 기본 사항 (<a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >
        학습) 및
        <a href="/ko/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works"
          >CSS 작동 방식</a
        >
        이해
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>CSS 의 기본 구문 구조를 자세히 배우기.</td>
    </tr>
  </tbody>
</table>

## HTML 에 CSS 적용하기

가장 먼저 살펴볼 것은 CSS 를 문서에 적용하는 세 가지 방법입니다.

### 외부 스타일 시트

[CSS 시작하기](/ko/docs/Learn/CSS/First_steps/Getting_started) 에서 외부 스타일 시트를 페이지에 연결했습니다. CSS 를 여러 페이지에 연결할 수 있으므로, CSS 를 문서에 첨부하는 가장 일반적이고 유용한 방법이며, 모두 동일한 스타일 시트로 CSS 스타일을 지정할 수 있습니다. 대부분의 경우 사이트의 다른 페이지는 모두 거의 동일하게 보이기 때문에 기본 모양과 느낌에 동일한 규칙을 사용할 수 있습니다.

외부 스타일 시트는 CSS 확장자가 `.css` 인 별도의 파일로 작성되고, HTML `<link>` 요소에서 참조하는 경우입니다:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>나의 CSS 실험</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>헬로우 월드!</h1>
    <p>이것은 나의 첫 번째 CSS 예제입니다</p>
  </body>
</html>
```

CSS 파일은 다음과 같습니다:

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

{{htmlelement("link")}} 요소의 `href` 속성은 여러분의 파일 시스템 파일을 참조해야 합니다.

위의 예에서, CSS 파일은 HTML 문서와 동일한 폴더에 있지만, 다른 곳에 저장 한다면, 지정된 경로를 다음과 같이 조정할 수 있습니다:

```html
<!-- 현재 폴더의 styles 라는 하위 폴더 안에 -->
<link rel="stylesheet" href="styles/style.css" />

<!-- 현재 폴더의 styles 라는 하위 폴더에 있는 general 이라는 하위 폴더 안에 -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- 상위 폴더로 올라간 다음, styles 라는 하위 폴더 내로 이동 -->
<link rel="stylesheet" href="../styles/style.css" />
```

### 내부 스타일 시트

내부 스타일 시트는 외부 CSS 파일이 없는 대신, HTML {{htmlelement("head")}} 안에 포함된 {{htmlelement("style")}} 요소 내부에 CSS 를 배치합니다.

따라서 HTML 은 다음과 같습니다:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>나의 CSS 실험</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>헬로우 월드</h1>
    <p>이것은 나의 첫 번째 CSS 예제입니다</p>
  </body>
</html>
```

이는 일부 상황 (CSS 파일을 직접 수정할 수 없는 콘텐츠 관리 시스템을 사용하는 경우도 있지만) 에서 유용할 수 있지만, CSS 가 필요한 외부 스타일 시트 만큼 효율적이지 않습니다 — 웹 사이트에서, CSS 가 모든 페이지에서 반복되고 변경이 필요한 경우 여러 위치에서 업데이트 됩니다.

### 인라인 스타일

인라인 스타일은 `style` 속성 내에 포함된 한 요소에만 영향을 주는 CSS 선언입니다:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>나의 CSS 실험</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      헬로우 월드!
    </h1>
    <p style="color:red;">이것은 나의 첫 번째 CSS 예제입니다</p>
  </body>
</html>
```

**당신이 정말로 필요하지 않는 한, 이것을 사용하지 마십시오!** 유지 관리가 실제로 좋지 않으며 (문서당 동일한 정보를 여러번 업데이트 해야할 수도 있음), 프리젠테이션 CSS 정보와 HTML 구조 정보를 혼합하여 코드를 읽고 이해하기 어렵게 만듭니다. 다른 유형의 코드를 분리하여 유지하면 코드 작업을 하는 모든 사람이 훨씬 쉽게 작업할 수 있습니다.

인라인 스타일이 더 일반적이거나 권장되는 곳이 몇 군데 있습니다. 작업 환경이 실제로 제한적인 경우 (CMS 로 HTML 본문만 편집할 수 있음), 이를 사용하는 것이 좋습니다. 또한 가능한 많은 전자 메일 클라이언트와 호환되도록 HTML 전자 메일에 많이 사용된 것을 볼 수 있습니다.

## 이 기사에서 CSS 로 실습

이 기사에는 많은 CSS 가 있습니다. 이렇게 하려면, 컴퓨터에 새 디렉토리/폴더 를 작성하고 그 안에 다음 두 파일의 복사본을 작성하는 것이 좋습니다:

**index.html:**

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>나의 CSS 실험</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>여기에 테스트용 HTML 을 작성하십시오</p>
  </body>
</html>
```

**styles.css:**

```css
/* 여기에 테스트용 CSS 를 작성하십시오 */

p {
  color: red;
}
```

그런 다음, 실험하려는 CSS 를 발견하면, HTML `<body>` 콘텐츠를 스타일을 지정할 HTML 로 바꾸고 CSS 를 추가하여 CSS 파일 내에서 스타일을 지정하십시오.

파일을 쉽게 만들 수 있는 시스템을 사용하지 않는 경우, 아래의 대화식 편집기를 사용하여 실험해 보십시오.

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

읽고, 재미있게 보내십시오!

## 선택자 (Selectors)

선택자를 만나지 않고 CSS 에 대해 이야기할 수 없으며, [CSS 시작하기](/ko/docs/Learn/CSS/First_steps/Getting_started) 자습서에서 이미 여러 가지 유형을 발견했습니다. 선택자는 스타일을 적용하기 위해 HTML 문서에서 무언가를 대상으로 하는 방법입니다. 스타일이 적용되지 않으면 선택자가 일치해야 하는 것과 동일하지 않을 수 있습니다.

각 CSS 규칙은 선택자 또는 선택자 목록으로 시작하여 규칙을 적용해야 하는 요소 또는 요소 규칙을 브라우저에게 알려줍니다. 다음은 모두 유효한 선택자 또는 선택자 목록의 예입니다.

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

**위의 선택자를 사용하는 CSS 규칙과 스타일을 적용할 일부 HTML 을 만들어 보십시오. 위 구문 중 일부가 무엇을 의미하는지 모르는 경우, MDN 에서 검색해 보십시오!**

> **참고:** 다음 과목의 [CSS 선택자](/ko/docs/Learn/CSS/Building_blocks/Selectors) 자습서에서, 선택자에 대해 자세히 학습합니다.

### 우선 순위 (Specificity)

두 선택자가 동일한 HTML 요소를 선택할 수 있는 경우가 종종 있습니다. 단락을 파란색으로 설정하는 `p` 선택자 및 선택한 요소를 빨간색으로 설정하는 class 가 있는 아래 스타일 시트를 고려하십시오.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

HTML 문서에 `special` class 가 있는 단락이 있다고 가정해 봅시다. 두 규칙이 모두 적용될 수 있으므로 어느 쪽이 이길까요? 우리의 문단은 어떤 색이 될 것이라고 생각합니까?

```html
<p class="special">나는 무슨 색입니까?</p>
```

CSS 언어에는 충돌시 어떤 규칙이 이기는지 제어하는 규칙이 있습니다 — 이러한 규칙을 **계단식(cascade)** 및 **우선 순위(specificity)** 라고 합니다. 아래 코드 블록에서 `p` 선택자에 대해 두 가지 규칙을 정의했지만, 단락이 파란색으로 표시됩니다. 파란색으로 설정한 선언은 스타일 시트에서 나중에 나타나고 이후 스타일은 이전 스타일을 재정의 하기 때문입니다. 이것은 실제의 계단식 (cascade) 입니다.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

그러나, class 선택자 및 요소 선택자가 있는 이전 블록의 경우, class 가 이기고 단락이 빨간색으로 표시됩니다 — class 는 요소 선택자 보다 더 구체적이거나 더 우선 순위가 높은 것으로 설명되므로 이깁니다.

**위 실험을 직접해 보십시오 — 실험에 HTML 을 추가한 다음, 스타일 시트에 두 개의 `p { ... }` 규칙을 추가하십시오. 그런 다음 첫 번째 `p` 선택자를 `.special` 로 변경하여 스타일이 어떻게 되는지 확인하십시오.**

우선 순위 규칙과 계단식은 처음에는 약간 복잡해 보일 수 있으며 CSS 지식을 더 많이 쌓으면 이해하기 쉽습니다. 다음 과목에서 다룰 [계단식 및 상속](/ko/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) 기사에서, 우선 순위를 계산하는 방법을 포함하여 자세히 설명하겠습니다. 현재로서는 이것이 존재하며, 스타일 시트의 다른 요소가 더 높은 우선 순위를 가지기 때문에 CSS 가 예상한 대로 적용되지 않을 수도 있음을 기억하십시오. 하나 이상의 규칙이 요소에 적용될 수 있음을 식별하는 것이 이러한 문제를 해결하는 첫 번째 단계입니다.

## 속성 및 값

가장 기본적인 수준에서, CSS 는 두 가지 요소로 구성됩니다:

- **속성 (Properties)**: 변경할 스타일 기능 (예: [`font-size`](/ko/docs/Web/CSS/font-size), [`width`](/ko/docs/Web/CSS/width), [`background-color`](/ko/docs/Web/CSS/background-color)) 을 나타내는 식별자입니다.
- **값 (Values)**: 지정된 각 속성에는 값이 지정되어 있으며, 이는 해당 스타일 기능을 변경하는 방법 (예: 글꼴, 너비 또는 배경색을 변경하려는 항목) 을 나타냅니다.

아래 이미지는 단일 속성과 값을 강조 표시합니다. 속성 이름은 `color` 이고 값은 `blue` 입니다.

![A declaration highlighted in the CSS](declaration.png)

값 과 쌍을 이루는 속성을 _CSS **선언 (declaration)**_ 이라고 합니다. CSS 선언은 _CSS **선언 블록**_ 안에 있습니다. 다음 이미지는 선언 블록이 강조 표시된 CSS 를 보여줍니다.

![A highlighted declaration block](declaration-block.png)

마지막으로, CSS 선언 블록은 _선택자_ 와 쌍을 이루어 _CSS Rulesets_ (또는 **CSS 규칙**) 를 생성합니다. 이미지에는 `h1` 선택자 및 `p` 선택자의 두 가지 규칙이 있습니다. `h1` 의 규칙이 강조 표시됩니다.

![The rule for h1 highlighted](rules.png)

CSS 속성을 특정 값으로 설정하는 것은 CSS 언어의 핵심 기능입니다. CSS 엔진은 페이지의 모든 단일 요소에 적용할 선언을 계산하여 적절하게 배치하고 스타일을 지정합니다. 기억해야 할 것은 CSS 에서 속성과 값이 모두 대소문자를 구분한다는 것입니다. 각 쌍의 속성 과 값은 콜론 (`:`) 으로 구분됩니다.

**다음 속성의 다른 값을 찾아 다른 HTML 요소에 적용하는 CSS 규칙을 작성하십시오:**

- **{{cssxref("font-size")}}**
- **{{cssxref("width")}}**
- **{{cssxref("background-color")}}**
- **{{cssxref("color")}}**
- **{{cssxref("border")}}**

> **경고:** **중요**: 속성을 알 수 없거나 지정된 속성에 대해 값이 유효하지 않은 경우, 선언이 유효하지 않은 것으로 간주되어 브라우저의 CSS 엔진에서 완전히 무시됩니다.

> **경고:** **중요**: CSS (및 기타 웹 표준) 에서, 언어의 불확실성이 발생하는 경우, 미국 맞춤법이 표준으로 합의 되었습니다. 예를 들어, `color` 는 _항상_ `color` 여야 합니다. `colour` 는 작동하지 않습니다.

### 함수 (function)

대부분의 값은 비교적 간단한 키워드 또는 숫자 값이지만, 함수의 형태를 취하는 몇 가지 가능한 값이 있습니다. `calc()` 함수를 예로 들 수 있습니다. 이 함수를 사용하면 CSS 내에서 간단한 계산을 수행할 수 있습니다. 예를 들면 다음과 같습니다:

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

이것은 다음과 같이 렌더링 됩니다:

{{EmbedLiveSample('calc_example', '100%', 200)}}

함수는 함수 이름과 해당 함수에 허용된 값이 배치되는 괄호들로 구성됩니다. 위의 `calc()` 예제의 경우, 이 박스의 너비는 블록 너비의 90% 에서 30 px 을 뺀 값을 요구합니다. 이것은 90%가 무엇인지 알지 못하기 때문에 미리 계산하고 CSS 에 값을 입력할 수 있는 것이 아닙니다. 모든 값과 마찬가지로 MDN 의 관련 페이지에 사용법 예제가 있으므로 기능의 작동 방식을 확인할 수 있습니다.

또 다른 예는 `rotate()` 와 같은 {{cssxref("transform")}} 에 대한 다양한 값입니다.

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

위 코드의 결과는 다음과 같습니다:

{{EmbedLiveSample('transform_example', '100%', 200)}}

**다음 속성의 다른 값을 찾아 다른 HTML 요소에 적용하는 CSS 규칙을 작성 하십시오:**

- **{{cssxref("transform")}}**
- **{{cssxref("background-image")}}, in particular gradient values**
- **{{cssxref("color")}}, in particular rgb/rgba/hsl/hsla values**

## @rules

아직, 우리는 [`@rules`](/ko/docs/Web/CSS/At-rule) ("at-rules" 로 발음) 가 발생하지 않았습니다. 이것들은 CSS 에 행동 방법에 대한 지침을 제공하는 특수 규칙입니다. 일부 `@rules` 는 규칙 이름과 값으로 단순합니다. 예를 들어, 추가 스타일 시트를 기본 CSS 스타일 시트로 가져오려면 `@import` 를 사용할 수 있습니다:

```css
@import "styles2.css";
```

접하게 될 가장 일반적인 `@rules` 중 하나는 `@media` 입니다. 이는 특정 조건이 참일 때만 (예: 화면 해상도가 일정 폭 이상이거나 화면이 일정 폭 보다 넓을 때) CSS 를 적용할 수 있는 [미디어 쿼리](/ko/docs/Web/CSS/Media_Queries) 를 사용할 수 있습니다.

아래 CSS 에는, `<body>` 요소에 분홍색 배경색을 주는 스타일 시트가 있습니다. 그러나, `@media` 를 사용하여 30em 보다 넓은 viewport 가 있는 브라우저에만 적용되는 스타일 시트 섹션을 만듭니다. 브라우저가 30em 보다 넓은 경우 배경색이 파란색이 됩니다.

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

이 자습서를 통해 다른 `@rules` 를 접하게 될 것입니다.

**viewport 너비에 따라 스타일을 변경하는 미디어 쿼리를 CSS 에 추가할 수 있는지 확인 하십시오. 결과를 보려면 브라우저 창의 너비를 변경하십시오.**

## 속기 (shorthands)

{{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} 및 {{cssxref("margin")}} 등의 일부 속성은 **속기 속성** 이라고 불립니다 — 이는 여러 줄의 속성 값을 한 줄로 설정하여 시간을 절약하고 작업에서 코드를 깔끔하게 만들 수 있기 때문입니다.

예를 들어, 다음 행은:

```css
/* 패딩 및 마진과 같은 4-값 속기에서는 위, 오른쪽, 아래, 왼쪽 (위에서 부터 시계방향) 순서로 값이 적용됩니다.
   위, 아래에 패딩 / 마진을 설정하고 왼쪽 / 오른쪽에 패딩 / 마진을 설정하는 다른 shorthand 유형 (예: 2-값 shorthands)도 있습니다. */
padding: 10px 15px 15px 5px;
```

이것들은 모두 이것과 똑같습니까?

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

다음 행은:

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

이 모든 것들과 같은 작업을 수행합니다:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

우리는 지금 이것들을 철저하게 가르치려고 하지 않을 것입니다 — 당신은 이 과정 후반에 많은 예제들을 보게 될 것입니다. 그리고 더 많은 정보를 얻기 위해, [CSS 참조](/ko/docs/Web/CSS/Reference) 에서 속기 속성 이름을 찾아 보는 것이 좋습니다.

**위의 선언을 CSS 에 추가하여 HTML 스타일에 어떤 영향을 미치는지 확인 하십시오. 다른 값으로 실험해 보십시오.**

> **경고:** 속기는 종종 값을 놓칠 수 있지만, 포함하지 않은 값을 초기 값으로 재설정합니다. 이를 통해 합리적인 값 세트가 사용됩니다. 그러나, 속기에서 전달한 값만 변경하려는 경우에는 혼동 될 수 있습니다.

## 주석 (comments)

HTML 과 마찬가지로 CSS 에 주석을 달아 몇 달 후에 코드가 다시 작동 할 때, 코드 작동 방식을 이해하고 코드를 사용하는 다른 사람들이 이해하도록 도와주는 것이 좋습니다.

CSS 의 주석은 `/*` 로 시작하고 `*/` 로 끝납니다. 아래 코드 블록에서 주석을 사용하여 다른 고유 코드 섹션의 시작을 표시했습니다. 코드가 커질수록 코드를 탐색하는 데 유용합니다 — 코드 편집기에서 주석을 검색할 수 있습니다.

```css
/* 기본 요소 스타일링 처리 */
/* -------------------------------------------------------------------------------------------- */
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* 전역 글꼴 크기의 특수한 경우를 봅시다.
큰 화면이나 창에서 가독성을 높이기 위해,
글꼴 크기를 늘립니다. */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* DOM 에 중첩된 특정 요소 처리  */
/* -------------------------------------------------------------------------------------------- */
div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

주석은 테스트 목적으로 코드의 특정 부분을 일시적으로 _주석 처리_ 하는 경우에도 유용합니다. 예를 들어, 코드의 어느 부분에서 오류가 발생했는지 확인하려는 경우. 다음 예제에서는 `.special` 선택자에 대한 규칙을 주석 처리 했습니다.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

**CSS 에 주석을 추가하여 사용에 익숙해 지십시오.**

## 공백 (whitespace)

공백은 실제 공간, 탭 및 줄 바꿈을 의미합니다. HTML 과 같은 방식으로 브라우저는 CSS 내부의 많은 공백을 무시하는 경향이 있습니다. 가독성을 돕기위해 많은 공백이 있습니다.

아래 첫 번째 예에서는 각 선언 (및 규칙 시작/종료) 이 각 라인에 있습니다 — 이는 CSS 를 유지 관리하고 이해하기 쉽기 때문에 CSS 를 작성하는 좋은 방법입니다:

```css
body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}You could write exactly the same CSS like so, with most of the whitespace removed — this is functionally identical to the first example, but I'm sure you'll agree that it is somewhat harder to read:
```

```css
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}
@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}
div p {
  margin: 0;
  padding: 1em;
}
div p + p {
  padding-top: 0;
}
```

대부분의 공백을 제거한 상태에서 정확히 동일한 CSS 를 작성할 수 있습니다. 이것은 첫 번째 예제와 기능적으로 동일하지만 읽기가 다소 어렵다는 데 동의합니다.

> **경고:** CSS 에서 속성 과 값 사이의 공백은 주의해야 합니다.

예를 들어, 다음 선언은 유효한 CSS 입니다:

```css
margin: 0 auto;
padding-left: 10px;
```

그러나 다음은 유효하지 않습니다:

```css
margin: 0auto;
padding- left: 10px;
```

> **경고:** `0auto` 는 `margin` 속성 (`0` 과 `auto` 는 두 개의 개별 값임)에 유효한 값으로 인식되지 않으며, 브라우저는 `padding-` 을 유효한 속성으로 인식하지 않습니다. 따라서 항상 공백으로 구분된 값을 구분해야 하지만 속성 이름과 속성 값을 하나의 끊김 없는 문자열로 유지해야 합니다.

**CSS 내부에서 공백을 사용하여 문제를 해결하고 그렇지 않은 것을 확인하십시오.**

## 다음은 뭐죠?

브라우저가 HTML 과 CSS 를 가져와서 웹 페이지로 전환하는 방법에 대해 약간 이해하는 것이 유용합니다. 따라서 다음 기사 — [CSS 작동 방식](/ko/docs/Learn/CSS/First_steps/How_CSS_works) — 에서 해당 작업을 살펴 보겠습니다.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
