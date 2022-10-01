---
title: HTML 기본
slug: Learn/Getting_started_with_the_web/HTML_basics
original_slug: Learn/Getting_started_with_the_web/HTML_기본
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

HTML(**H**yper**t**ext **M**arkup **L**anguage)은 웹 페이지와 그 내용을 구조화하기 위해 사용하는 코드입니다. 예를 들면, 컨텐트는 여러 개의 문단, 글 머리 목록이 구조화된 것이거나 사진이나 데이터 테이블일 수도 있습니다. 제목과 같이 이 글은 HTML과 그 기능에 대한 기본적인 이해를 제공할 것입니다.

## 그래서 HTML은 무엇일까요?

HTML 은 프로그래밍 언어가 아닙니다; 컨텐츠의 구조를 정의하는 마크업 언어입니다. HTML은 컨텐츠의 서로 다른 부분들을 씌우거나(wrap) 감싸서(enclose) 다른 형식으로 보이게하거나 특정한 방식으로 동작하도록 하는 일련의 **요소({{Glossary("element", "elements")}})**로 이루어져 있습니다. {{Glossary("tag", "tags")}}로 감싸는 것으로 단어나 이미지를 다른 어딘가로 하이퍼링크(hyperlink)하거나 단어들을 이탤릭체로 표시하고 글씨체를 크게 또는 작게 만드는 등의 일을 할 수 있습니다. 예를 들어, 다음과 같은 컨텐츠에 대해:

```
내 고양이는 고약해
```

그 한 줄의 문장이 독립적인 구문이길 원한다면, 문단 태그(paragraph tags)로 둘러쌈으로해서 그것이 하나의 문단임을 명시할 수 있습니다:

```html
<p>내 고양이는 고약해</p>
```

### HTML 요소 분석

이 문단 요소에 대해 조금 더 탐구해봅시다.

![](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

이 요소의 주요 부분은 이렇습니다:

1. **여는 태그(opening tag)**: 이것은 요소의 이름으로 구성되고 (여기에서는 p), 여닫는 꺾쇠괄호로 감싸집니다. 이것은 요소가 시작되는 곳, 또는 효과를 시작하는 곳임을 나타냅니다 — 이 예제에서는 문단이 시작되는 위치를 나타냅니다.
2. **닫는 태그(closing tag)**: 이것은 여는 태그와 같지만, 요소의 이름 앞에 전방향 슬래시가 포함된다는 점이 다릅니다. 이것은 요소의 끝을 나타냅니다 — 이 예제에서는 문단이 끝나는 위치를 나타냅니다. 초보자가 가장 흔히 범하는 오류 중 하나가 닫는 태그를 쓰지 않는 것으로 이상한 결과가 표시됩니다.
3. **컨텐츠(content)**: 이것은 요소의 내용(content)으로 이 예제에서는 그냥 텍스트입니다.
4. **요소(element)**: 요소는 여는 태그와 닫는 태그, 그리고 컨텐츠로 이루어집니다.

요소는 속성도 가질 수 있는데, 다음과 같이 사용합니다:

![](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)

속성은 실제 컨텐츠로 표시되길 원하지 않는 추가적인 정보를 담고 있습니다. 이 예제에서, class 속성을 이용해 나중에 해당 요소를 특정해 스타일이나 다른 정보를 설정할 때 사용할 수 있는 식별자를 지정할 수 있습니다.

속성이 항상 가져야 하는 것:

1. 요소 이름 (또는 요소가 하나 이상 속성을 이미 가지고 있다면 이전 속성)과 속성 사이에 공백이 있어야 합니다.
2. 속성 이름 뒤에는 등호(=)가 와야 합니다.
3. 속성 값의 앞 뒤에 열고 닫는 인용부호(" 또는 ')가 있어야 합니다.

### 요소 중첩

여러분은 요소를 다른 요소의 안에 놓을 수 있습니다 — 이것을 **중첩(nesting)**이라고 부릅니다. 우리 고양이는 **아주** 고약하다라고 표시하길 원한다면, 단어를 강조하는 용도로 사용하는{{htmlelement("strong")}} 요소로 "아주"를 감싸면 됩니다:

```html
<p>내 고양이는 <strong>아주</strong> 고약해.</p>
```

하지만 요소가 적절히 중첩되었는지 확인할 필요가 있습니다: 위의 예제에서 우리는 \<p> 요소를 먼저 열었고, 그 다음 strong을 열었기 때문에 strong 요소를 먼저 닫고, 다음으로 p를 닫아야 합니다. 다음은 잘못된 예제 입니다:

```html
<p>내 고양이는 <strong>아주 고약해.</p></strong>
```

요소들이 적절히 열고 닫혀야 서로가 깔끔하게 안쪽이나 바깥쪽에 있게 됩니다. 만약 이렇게 겹치게 되면, 웹 브라우저는 여러분이 무엇을 표현하려고 했었는지 추측을 해서 화면에 보여주겠지만, 여러분이 의도한 것과 다르게 보여질 수 있습니다. 그러니까 이렇게 하지 마세요!

### 빈 요소

어떤 요소들은 내용을 갖지 않습니다, 그리고 이것을 **빈 요소(empty elements)**라고 합니다. {{htmlelement("img")}} 요소는 이미 우리 HTML 코드에 있습니다.

```html
<img src="images/firefox-icon.png" alt="My test image">
```

이 요소는 두 개의 속성을 포함하고 있으나 닫는 \</img> 태그가 없습니다. 이미지 요소는 효과를 주기 위해 컨텐츠를 감싸지 않기 때문입니다. 이 요소의 목적은 HTML 페이지에서 이미지가 나타날 위치에 이미지를 끼워 넣는 것입니다.

### HTML 문서 해부

각 HTML 요소의 기본적인 내용들은 살펴봤지만, 그것만으로는 별로 유용하지 않습니다. 이제 각 요소들이 어떻게 전체 HTML 페이지를 구성하는지 살펴볼 차례입니다. `index.html` 예제([파일들 다루기](/en-US/Learn/Getting_started_with_the_web/Dealing_with_files) 편에서 처음 봤던)에 넣은 코드를 다시 살펴봅시다:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
</html>
```

살펴볼 것들:

- `<!DOCTYPE html>` — doctype. 아주 오래전 HTML 이 막 나왔을 때 (1991년 2월쯤), doctype은 (자동 오류 확인이나 다른 유용한 것을 의미하는) good HTML로 인정받기 위해 HTML 페이지가 따라야 할 일련의 규칙으로의 연결통로로써 작동하는 것을 의미하였습니다. 하지만, 최근에는 아무도 그런 것들에 대해 신경쓰지 않으며 그저 모든 것이 올바르게 동작하게 하기 위해 포함되어야 할 역사적인 유물일 뿐입니다. 지금은, 그게 알아야 할 전부 입니다.
- `<html></html>` — {{htmlelement("html")}} 요소. 이 요소는 페이지 전체의 컨텐츠를 감싸며, 루트(root) 요소라고도 합니다.
- `<head></head>` — {{htmlelement("head")}} 요소. 이 요소는 HTML 페이지에 포함되어 있는 모든 것들(여러분의 페이지를 조회하는 사람들에게 보여주지 않을 컨텐츠)의 컨테이너 역할을 합니다. 여기에는 {{Glossary("keyword", "keywords")}}와 검색 결과에 표시되길 원하는 페이지 설명, 컨텐츠를 꾸미기 위한 CSS, 문자 집합 선언 등과 같은 것들이 포함됩니다.
- `<body></body>` — {{htmlelement("body")}} 요소. 이것은 페이지에 방문한 모든 웹 사용자들에게 보여주길 원하는 _모든_ 컨텐트를 담고 있으며, 그것이 텍스트일 수도, 이미지, 비디오, 게임, 플레이할 수 있는 오디오 트랙이나 다른 무엇이든 될 수 있습니다.
- `<meta charset="utf-8">` — 이 요소는 문서가 사용해야 할 문자 집합을 utf-8으로 설정합니다(utf-8 문자 집합에는 인간의 방대한 주류 기록언어에 있는 대부분의 문자가 포함되어 있습니다). 본질적으로 여러분이 사용할 수 있는 어떠한 문자 컨텐트도 다룰 수 있습니다. 이 문자 집합을 설정하지 않을 이유가 없으며, 그렇게 설정하면 나중에 발생할 수 있는 일부 문제를 피할 수 있습니다.
- `<title></title>` — {{htmlelement("title")}} 요소. 이 요소는 페이지의 제목을 설정하는 것으로 페이지가 로드되는 브라우저의 탭에 이 제목이 표시됩니다. 이 요소는 북마크나 즐겨찾기에서 페이지를 설명하는 것으로도 사용됩니다.

## 이미지

{{htmlelement("img")}} 요소를 다시 살펴보도록 합시다:

```html
<img src="images/firefox-icon.png" alt="My test image">
```

앞에서 설명한 것처럼 이 요소는 이미지가 나타나야 할 위치에 이미지를 끼워 넣습니다. 이미지 파일의 경로를 포함하는 `src` (source) 속성을 통해 이러한 일을 합니다.

`alt` (alternative) 속성도 존재합니다. — 이 속성에는 다음과 같은 이유로 이미지를 볼 수 없는 사용자들을 위한 설명문(descriptive text)을 지정할 수 있습니다.:

1. 시각 장애자인 경우. 시각 장애가 심한 사용자들은 alt 텍스트(대체 텍스트)를 읽어주는 스크린 리더라는 도구를 자주 사용합니다.
2. 무언가 잘못되어서 이미지를 표시할 수 없는 경우. 예를 들면, `src` 속성 안의 경로를 일부러 틀리게 변경해보세요. 저장한 후에 페이지를 다시 열면, 이미지가 표시되어야할 위치에 다음과 같은 것을 보게 될 것입니다.

![](https://mdn.mozillademos.org/files/9349/alt-text-example.png)

alt 텍스트에서 핵심 단어는 "설명적인 문자(descriptive text)" 입니다. 여러분이 작성하는 alt 텍스트는 독자에게 이미지가 전달하는 어떤 것에 대해 좋은 아이디어를 가지기에 충분한 정보를 제공해야 합니다. 이 예제에서 "My test image"라는 현재의 텍스트는 전혀 좋지 않습니다. Firefox 로고에 대해서는 "파이어폭스 로고: 지구를 둘러싼 타오르는 여우"가 훨씬 나은 대안이될 수 있습니다.

지금 여러분의 이미지를 위한 더 나은 alt 텍스트를 만들어보세요.

> **참고:** **노트**: 접근성에 대한 더 많은 것은 [MDN의 페이지 접근성 시작하기](/ko/docs/Web/Accessibility)에서 찾아보세요.

## 문자 나타내기

여기에서는 문자를 나타내기 위해 사용하는 몇 개의 기본적인 HTML 엘리먼트를 다룰 것입니다.

### 제목

제목 요소는 여러분이 내용의 특정 부분이 제목 또는 내용의 하위 제목임을 구체화 할 수 있게 해줍니다. 책에 중심 제목이 있고 그 다음 각각의 장에 제목을 가지고, 그리고 그 안에 부제가 있는 것과 같은 방식으로 HTML 문서도 제목들을 갖습니다. HTML 은 여섯 단계의 제목을 갖고, {{htmlelement("h1")}}–{{htmlelement("h6")}} 여러분은 아마 3-4 만을 주로 사용하게 될겁니다:

```html
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

지금 한번 해보세요, 여러분의 HTML 페이지에 있는 {{htmlelement("img")}} 요소 위에 적당한 제목을 추가합시다.

### 문단

위에서 설명했듯이, {{htmlelement("p")}} 요소는 문자의 문단을 포함하기 위한 것입니다; 일반적인 문자 내용을 나타낼 때 많이 사용하게 될 것입니다:

```html
<p>This is a single paragraph</p>
```

**간단한 문자 ([_웹사이트의 외관은 어떻게 할까요?_](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like) 에서 보셨을겁니다)를 하나 또는 몇 개의 문단에 추가하고, \<img> 요소 바로 아래 둡시다.**

### 목록

많은 웹의 내용은 목록이기 때문에, HTML은 이것을 위한 특별한 요소를 가지고 있습니다. 목록을 나타내는 것은 항상 최소 두 개의 요소로 구성됩니다. 가장 일반적인 목록의 종류는 순서가 있는 것과 순서 없는 것이 있습니다.

1. **순서 없는 목록은** 쇼핑 목록과 같이 항목의 순서에 관계가 없는 목록을 위한 것입니다. {{htmlelement("ul")}} 요소로 둘러 쌓여 있습니다.
2. **순서 있는 리스트**는 조리법처럼 항목의 순서가 중요한 목록을 위한 것입니다. {{htmlelement("ol")}} 요소로 둘러 쌓여 있습니다.

목록의 각 항목은 {{htmlelement("li")}} (목록 항목) 요소 안에 놓여야 합니다.

그러니까 예를 들면, 만약 아래 문단의 한 부분을 목록으로 분리하길 원한다면:

```html
<p>At Mozilla, we’re a global community of technologists, thinkers, and builders working together ... </p>
```

이렇게 해볼 수 있습니다:

```html
<p>At Mozilla, we’re a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together ... </p>
```

**여러분의 예시 페이지에서 순서 있는 목록과 순서 없는 목록을 추가해보세요.**

## 연결

연결은 아주 중요합니다 — 이것은 웹을 웹으로 만들어줍니다. 연결을 하기 위해, 간단한 요소를 사용할 필요가 있습니다 — {{htmlelement("a")}} — _a_ 는 "anchor" 의 약자입니다. 문장 안의 어떤 단어를 링크로 만들기 위해, 아래의 순서를 따르시면 됩니다:

1. 어떤 단어를 선택하세요. "Mozilla Manifesto" 를 선택하겠습니다.
2. 문자를 \<a> 요소로 감쌉니다, 이렇게요:

    ```html
    <a>Mozilla Manifesto</a>
    ```

3. \<a> 요소에 href 속성을 줍니다, 이렇게요:

    ```html
    <a href="">Mozilla Manifesto</a>
    ```

4. 이 속성의 값에 여러분이 연결하길 원하는 웹 주소를 채웁니다.:

    ```html
    <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>
    ```

만약 웹 주소의 시작부분에 *프로토콜*이라 불리는 https\:// 또는 http\:// 부분을 빼먹으셨다면 예상하지 못한 결과를 얻을 것입니다. 이렇게 링크를 만든 후에, 원하는 곳으로 이동하는지 클릭해보세요.

> **참고:** `처음에는 href` 라는 속성 이름이 꽤 어렵게 보일수도 있습니다. 만약 기억하기가 어려우시다면, 이것은 _**h**ypertext **ref**erence_(하이퍼 텍스트 참조)를 나타낸다는 것을 기억하세요.

**아직 여러분의 페이지에 링크를 추가하지 않으셨다면, 지금 추가해보세요.**

## 마무리

이 글의 모든 설명을 따라오셨다면, 이와 같이 보이는 페이지가 될 겁니다. ([여기서](http://mdn.github.io/beginner-html-site/)도 볼 수 있습니다):

![A web page screenshot showing a firefox logo, a heading saying mozilla is cool, and two paragraphs of filler text](https://mdn.mozillademos.org/files/9351/finished-test-page-small.png)

잘 안 된다면, 여러분의 코드를 Github에 있는 [예제 코드](https://github.com/mdn/beginner-html-site/blob/gh-pages/index.html)를 비교해 볼 수 있습니다.

여기서, 우리는 HTML의 겉을 살짝 맛봤습니다. 더 알아보기 위해, [HTML 배우기](/en-US/Learn/HTML) 페이지로 가보세요.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

## 이번 모듈에서는

- [기본 소프트웨어 설치하기](/ko/Learn/Getting_started_with_the_web/Installing_basic_software)
- [여러분의 웹사이트는 어떤 모습일까요?](/ko/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [파일 다루기](/ko/Learn/Getting_started_with_the_web/Dealing_with_files)
- [HTML 기본 사항](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS 기본 사항](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript 기본 사항](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics)
- [웹 사이트 출판](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Publishing_your_website)
- [웹 작동 방식](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/How_the_Web_works)
