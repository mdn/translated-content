---
title: CSS 로 시작하기
slug: Learn/CSS/First_steps/Getting_started
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

이 글에서는 간단한 HTML 문서를 가져와서 CSS 를 적용하여 언어에 대한 실질적인 내용을 학습합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >
        에 대한 기본 지식 및 HTML 기본 지식 (<a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >
        학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        CSS 문서를 HTML 파일에 연결하는 기본 사항을 이해하고, CSS를 사용하여
        간단한 텍스트 형식을 지정하기
      </td>
    </tr>
  </tbody>
</table>

## HTML 로 시작합니다

시작점은 HTML 문서입니다. 자신의 컴퓨터에서 작업하려는 경우에는 아래에서 코드를 복사할 수 있습니다. 아래 코드를 컴퓨터의 폴더에 `index.html` 로 저장하십시오.

```html
<!doctype html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8" />
    <title>CSS로 시작하기</title>
  </head>

  <body>
    <h1>레벨 1 제목입니다</h1>

    <p>
      이것은 단락입니다. 본문에는 <span>span 요소</span>와
      <a href="http://example.com">링크</a>가 있습니다.
    </p>

    <p>이것은 두 번째 단락입니다. <em>강조된</em> 요소를 포함합니다.</p>

    <ul>
      <li>항목 하나</li>
      <li>항목 둘</li>
      <li>항목 <em>셋</em></li>
    </ul>
  </body>
</html>
```

> **참고:** 파일을 쉽게 만들 수 없는 장치나 환경에서 이 내용을 읽는 경우, 걱정하지 마십시오. 페이지의 바로 여기에 예제 코드를 작성할 수 있도록 라이브 코드 편집기가 제공됩니다.

## 문서에 CSS 추가하기

가장 먼저 해야할 일은 HTML 문서에 사용하려는 CSS 규칙이 있다는 것을 알리는 것입니다. CSS 를 HTML 문서에 적용하는 방법에는 세 가지가 있지만, 지금은 문서의 head 에서 연결하는 가장 일반적이고 유용한 방법을 살펴 보겠습니다.

HTML 문서와 같은 폴더에 파일을 만들고 `styles.css` 로 저장하십시오. `.css` 확장자는 이것이 CSS 파일임을 보여줍니다.

`styles.css` 파일을 `index.html` 에 링크하려면, HTML 문서의 {{htmlelement("head")}} 안에 다음 행을 추가하십시오:

```html
<link rel="stylesheet" href="styles.css" />
```

이 {{htmlelement("link")}} 요소는 `rel` 속성을 사용하는 스타일 시트와 해당 스타일 시트의 위치를 `href` 속성의 값으로 브라우저에게 알려줍니다. `styles.css` 에 규칙을 추가하여 CSS 가 작동하는지 테스트 할 수 있습니다. 코드 편집기를 사용하여 CSS 파일에 다음을 추가하십시오:

```css
h1 {
  color: red;
}
```

HTML 및 CSS 파일을 저장하고 웹 브라우저에서 페이지를 다시 로드 하십시오. 문서 상단의 레벨 1 제목이 이제 빨간색이어야 합니다. 이 경우 축하합니다. 일부 CSS 를 HTML 문서에 성공적으로 적용했습니다. 그렇지 않으면 모든 것을 올바르게 입력했는지 주의 깊게 확인하십시오.

`styles.css` 에서 로컬로 계속 작업하거나, 아래의 대화식 편집기를 사용하여 이 자습서를 계속할 수 있습니다. 대화식 편집기는 위의 문서와 마찬가지로 첫 번째 패널의 CSS가 HTML 문서에 연결된 것처럼 작동합니다.

## HTML 요소 스타일링

제목을 빨간색으로 하여 이미 HTML 요소를 대상으로 스타일을 지정할 수 있음을 보여주었습니다. 이 작업은 요소 선택자 (HTML 요소 이름과 직접 일치하는 선택자) 를 대상으로 수행됩니다. 문서의 모든 단락을 대상으로 하려면 선택자 `p` 를 사용합니다. 모든 단락을 녹색으로 바꾸려면 다음을 사용하십시오.

```css
p {
  color: green;
}
```

선택자를 쉼표로 구분하여 여러 선택자를 한 번에 대상으로 지정할 수 있습니다. 모든 단락과 모든 목록 항목을 녹색으로 만들려면 규칙은 다음과 같습니다.

```css
p,
li {
  color: green;
}
```

아래의 대화식 편집기 (코드 박스 편집) 또는 로컬 CSS 문서에서 이를 시도하십시오.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## 요소 (elements) 의 기본 동작 변경하기

예제와 같이 간단한 HTML 문서를 살펴보면, 기본 스타일을 추가하여 브라우저가 HTML을 읽을 수 있게 만드는 방법을 알 수 있습니다. 제목은 크고 대담하며 목록에는 글머리 기호가 있습니다. 이는 브라우저에서 기본 스타일을 포함하는 내부 스타일 시트가 있기 때문에 기본적으로 모든 페이지에 적용됩니다. 그들 없이는 모든 텍스트가 한 덩어리로 모여서 처음부터 모든 것을 스타일링 해야합니다. 모든 최신 브라우저는 기본적으로 HTML 내용을 거의 같은 방식으로 표시합니다.

그러나, 종종 브라우저에서 선택한 것 이외의 것을 원할 것입니다. 변경하려는 HTML 요소를 선택하고 CSS 규칙을 사용하여 모양을 변경하면 됩니다. 좋은 예는 순서가 없는 목록인 `<ul>` 입니다. 목록 글머리 기호가 있으며, 그 글머리 기호를 원하지 않으면 다음과 같이 제거할 수 있습니다.

```css
li {
  list-style-type: none;
}
```

이것을 CSS 에 추가하십시오.

`list-style-type` 속성은 MDN 에서 지원되는 값을 확인하는 데 유용한 속성입니다. [`list-style-type`](/ko/docs/Web/CSS/list-style-type) 에 대한 페이지를 살펴보면 페이지 상단에 몇 가지 다른 값을 시도하는 대화식 예제가 있으며, 허용 가능한 모든 값이 페이지 아래에 자세히 나와 있습니다.

이 페이지를 보면 목록 글머리 기호를 제거할 뿐만 아니라 목록 글머리 기호를 변경할 수 있음을 알 수 있습니다. `square` 값을 사용하여 정사각형 글머리 기호로 변경하십시오.

## class 추가하기

지금까지 HTML 요소 이름을 기반으로 요소의 스타일을 지정했습니다. 문서에서 해당 유형의 모든 요소가 동일하게 표시되기를 원하는 한 작동합니다. 대부분의 경우에 해당되지 않으므로 다른 요소를 변경하지 않고 요소의 하위 부분을 선택할 수 있는 방법을 찾아야 합니다. 이를 수행하는 가장 일반적인 방법은 HTML 요소에 class 를 추가하고 해당 class 를 대상으로 하는 것입니다.

- HTML 문서에서, 두 번째 목록 항목에 [class 속성](/ko/docs/Web/HTML/Global_attributes/class) 을 추가하십시오. 이제 목록은 다음과 같습니다.

```html
<ul>
  <li>항목 하나</li>
  <li class="special">항목 둘</li>
  <li>항목 <em>셋</em></li>
</ul>
```

- CSS 에서 마침표 문자로 시작하는 선택자를 작성하여 `special` class 를 대상으로 할 수 있습니다. CSS 파일에 다음을 추가하십시오.

```css
.special {
  color: orange;
  font-weight: bold;
}
```

- 저장하고 새로 고침하여 결과를 확인하십시오.

이 목록 항목과 동일한 모양을 원하는 페이지의 모든 요소에 `special` class 를 적용할 수 있습니다. 예를 들어, 단락의 `<span>` 도 주황색과 굵게 표시할 수 있습니다. `special` `class` 를 추가한 다음, 페이지를 새로 고침하여 어떻게 되는지 확인하십시오.

때로는 HTML 요소 선택자 및 class 목록이 포함된 규칙이 표시됩니다.

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

이 구문은 "spacial class 를 가진 모든 `li` 요소를 대상으로 함" 을 의미합니다. 이 작업을 수행하면, 단순히 class 를 추가하기만 하면 더 이상 class 를 `<span>` 또는 다른 요소에 적용할 수 없습니다. 해당 요소를 선택자 목록에 추가해야 합니다.

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

당신이 상상할 수 있듯이, 일부 class 는 많은 요소에 적용될 수 있으며 새로운 스타일을 취해야 할 때마다 CSS 를 계속 편집하지 않아도 됩니다. 따라서 하나의 요소에 대해 특별한 규칙을 만들고 싶거나 다른 요소에 적용되지 않도록 하려는 경우가 아니라면 요소를 무시하고 class 를 참조하는 것이 가장 좋습니다.

## 문서에서의 위치에 따라 스타일 지정하기

문서에서의 위치에 따라 무언가 다르게 보일 때가 있습니다. 여기에 당신을 도울 수 있는 선택자가 많이 있지만, 지금 몇 가지만 살펴 보겠습니다. 이 문서에는 두 개의 `<em>` 요소가 있습니다. 하나는 단락 안에 있고 다른 하나는 목록 항목 안에 있습니다. `<li>` 요소 안에 중첩된 `<em>` 만 선택하려면 **descendant combinator** 라는 선택자를 사용 할 수 있습니다. 이 선택자는 단순히 두 개의 다른 선택자 사이에 공백의 형태를 취합니다.

스타일 시트에 다음 규칙을 추가 하십시오.

```css
li em {
  color: rebeccapurple;
}
```

이 선택자는 `<li>` 의 하위 요소인 `<em>` 요소를 선택합니다. 따라서 예제 문서에서 세 번째 목록 항목의 `<em>` 은 이제 자주색 이지만, 단락 안의 항목은 변경되지 않았음을 알 수 있습니다.

HTML 의 동일한 계층 구조 수준에서 제목 바로 다음에 오는 단락의 스타일을 지정해 볼 수 있습니다. 이렇게 하려면 선택자 사이에 `+` (**adjacent sibling combinator**) 를 배치 하십시오.

이 규칙을 스타일 시트에도 추가하십시오.

```css
h1 + p {
  font-size: 200%;
}
```

아래의 라이브 예제에는 위의 두 규칙이 포함됩니다. 단락 내부에 있는 span 을 빨간색으로 만들려면 규칙을 추가하십시오. 첫 번째 단락의 span 이 빨간색 이므로 올바른 span 이 있는지 알 수 있지만, 첫 번째 목록 항목의 span 은 색이 변경되지 않습니다.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> **참고:** 보시다시피, CSS 는 요소를 대상으로 하는 여러 가지 방법을 제공하며, 지금까지는 표면적인 부분만 살펴봤습니다! 이 과정의 뒷부분에 있는 [CSS 선택자](/ko/docs/Learn/CSS/Building_blocks/Selectors) 관련 문서에서 이러한 모든 선택자와 더 많은 선택자에 대해 자세히 살펴볼 것입니다.

## 상태에 따른 스타일링

이 자습서에서 살펴볼 스타일링의 마지막 유형은 상태에 따라 스타일을 지정할 수 있는 기능입니다. 이에 대한 간단한 예제는 링크 스타일링 입니다. 링크의 스타일을 지정할 때 [`<a>`](/ko/docs/Web/HTML/Element/a) (앵커) 요소를 대상으로 해야합니다. 방문되지 않았는지, 방문 중인지, 마우스 오버인지, 키보드를 통한 포커스 또는 클릭 (활성화) 여부에 따라 상태가 다릅니다. CSS 를 사용하여 이러한 다양한 상태를 대상으로 할 수 있습니다. 아래 CSS 는 방문하지 않은 링크는 분홍색이고 방문한 링크는 녹색입니다.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

사용자가 링크 위로 이동할 때 링크 모양을 변경할 수 있습니다. 예를 들어, 다음 규칙에서 밑줄을 제거합니다.

```css
a:hover {
  text-decoration: none;
}
```

아래 라이브 예제에서는 링크의 다양한 상태에 대해 다른 값으로 표시할 수 있습니다. 위의 규칙을 추가했으며, 이제 핑크 색상이 매우 가볍고 읽기 어렵다는 것을 알고 있습니다. 더 나은 색상으로 바꾸지 않겠습니까? 링크를 굵게 표시할 수 있습니까?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 900)}}

우리는 hover 링크에서 밑줄을 제거했습니다. 링크의 모든 상태에서 밑줄을 제거할 수 있습니다. 그러나 실제 사이트에서는 링크임을 방문자에게 알리고자 합니다. 밑줄을 제자리에 두면, 단락 내의 일부 텍스트를 클릭할 수 있다는 사실을 사람들이 인식할 수 있는 중요한 단서가 될 수 있습니다. CSS 의 모든 항목과 마찬가지로 변경 사항으로 인해 문서에 대한 접근성을 떨어뜨릴 수 있는 가능성이 있습니다. 적절한 장소에서 발생할 수 있는 잠재적 위험을 강조하는 것이 목표입니다.

> **참고:** 이러한 교육 과정과 MDN 전반에 걸쳐 [접근성](/ko/docs/Learn/Accessibility) 에 대한 언급이 자주 있을 것입니다. 접근성에 대해 이야기할 때 웹 페이지를 모든 사용자가 이해하고 사용할 수 있어야 한다는 요구 사항을 언급하고 있습니다.
>
> 방문자는 마우스나 trackpad 또는 터치스크린이 있는 스마트폰에 있을 수 있습니다. 또는 문서의 내용을 읽어내는 스크린 리더를 사용하거나 훨씬 큰 텍스트를 사용하거나 키보드만 사용하여 사이트를 탐색해야 할 수도 있습니다.
>
> 일반 HTML 문서는 일반적으로 모든 사용자가 접근할 수 있습니다. 해당 문서의 스타일을 지정하기 시작하면 접근성이 저하되지 않도록 하는 것이 중요합니다.

## 선택자와 결합자를 결합

여러 선택자와 결합자를 함께 결합할 수 있습니다. 예를 들면 다음과 같습니다.

```css
/* <article> 내부의 <p> 안에 있는 모든 <span> 을 선택합니다  */
article p span { ... }

/* <h1> 바로 뒤에 오는 <ul> 바로 뒤의 모든 <p> 를 선택합니다  */
h1 + ul + p { ... }
```

여러 유형을 함께 결합 할 수도 있습니다. 코드에 다음을 추가 하십시오.

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

이것은 `<body>` 안에 있는 `<h1>` 바로 뒤에 오는 `<p>` 안에 있는 `special` class 를 가진 요소를 스타일링 합니다. 아이고 복잡해라!

우리가 제공한 원본 HTML 에서 스타일이 지정된 유일한 요소는 `<span class="special">` 입니다.

현재 이것이 복잡해 보인다고 걱정하지 마십시오. CSS 를 더 많이 작성할수록 곧 요령을 터득하기 시작할 것입니다.

## 마무리

이 자습서에서는, CSS 를 사용하여 문서의 스타일을 지정할 수 있는 여러 가지 방법을 살펴 보았습니다. 우리는 나머지 수업을 진행 하면서 이 지식을 개발할 것입니다. 그러나 이제 텍스트 스타일을 지정하고 문서의 요소를 대상으로 하는 다양한 방법을 기반으로 CSS 를 적용하고 MDN 설명서에서 속성과 값을 검색할 수 있을 정도로 이미 알고 있습니다.

다음 수업에서는 [CSS의 구조](/ko/docs/Learn/CSS/First_steps/How_CSS_is_structured)에 대해 살펴 볼 것입니다.

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
