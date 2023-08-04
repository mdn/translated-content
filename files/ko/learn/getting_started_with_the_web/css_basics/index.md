---
title: CSS 기초
slug: Learn/Getting_started_with_the_web/CSS_basics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}

CSS (Cascading Style Sheets)는 웹페이지를 꾸미려고 작성하는 코드입니다. _CSS 기초_ 에서 여러분이 처음 시작하며 필요한 내용을 익히도록 도와드립니다. 저희는 다음과 같은 질문에 관한 답을 드리겠습니다. 어떻게 하면 글자색을 검정이나 빨갛게 할 수 있을까? 어떻게 하면 콘텐츠를 화면의 이런 저런 곳에 보이게 할 수 있을까? 어떻게 하면 배경 이미지와 색상들로 웹페이지를 꾸밀 수 있을까?

## 그래서 CSS가 뭔가요?

HTML와 같이 CSS는 실제로 프로그래밍 언어는 아닙니다. _마크업(markup) 언어_ 도 아닙니다. _Style sheet 언어_ 입니다. HTML 문서에 있는 요소들에 선택적으로 스타일을 적용할 수 있다는 말입니다. 예를 들면, HTML 페이지에서 **모든** 문단 요소들을 선택하고 그 문단 요소들 안에 있는 텍스트를 빨갛게 바꾸려고 한다면 다음과 같이 CSS를 작성할 것입니다.

```css
p {
  color: red;
}
```

한 번 해봅시다. 텍스트 에디터의 새 파일에 위의 CSS 3줄을 복사해 붙여넣으세요. 그다음에 `styles` 디렉토리에 `style.css`로 파일을 저장하세요.

아직 여러분의 HTML 문서에 CSS를 적용하는 것이 남아 있습니다. 그렇지 않으면 CSS 스타일은 그 HTML 문서가 브라우저에 표시될 때 아무 영향도 주지 않을 것입니다. (여러분이 우리 프로젝트를 따라오지 않으셨다면, [파일 다루기](/en-US/Learn/Getting_started_with_the_web/Dealing_with_files)와 [HTML 기본](/ko/Learn/Getting_started_with_the_web/HTML_basics)을 읽고 무엇이 먼저 필요한지를 알아보시기 바랍니다.)

1. `index.html` 파일을 열고 head의 안쪽 어딘가(즉, `<head>`와 `</head>` 태그 사이)에 아래의 코드를 붙여 넣으세요:

   ```html
   <link href="styles/style.css" rel="stylesheet" type="text/css" />
   ```

2. `index.html`을 저장하고 브라우저에서 불러오세요. 여러분은 다음과 같은 것을 보게 되실겁니다:

![A mozilla logo and some paragraphs. The paragraph text has been styled red by our css.](website-screenshot-styled.png)문단의 글자가 빨간색이라면 축하드립니다! 지금 여러분은 첫번째 CSS 를 성공적으로 작성하셨습니다!

### CSS의 ruleset 해부

위의 CSS를 좀 더 자세히 살펴 봅시다:

![](css-declaration-small.png)

전체 구조는 **rule set** 라 불립니다 (하지만 종종 줄여서 "rule"이라고 합니다). 각 부분의 이름에도 주목하세요:

- 선택자(selector)
  - : rule set의 맨 앞에 있는 HTML 요소 이름. 이것은 꾸밀 요소(들)을 선택합니다 (이 예에서는 p 요소). 다른 요소를 꾸미기 위해서는 선택자만 바꿔주세요.
- 선언
  - : `color: red`와 같은 단일 규칙; 여러분이 꾸미기 원하는 요소의 속성을 명시합니다.
- 속성(property)
  - : 주어진 HTML 요소를 꾸밀 수 있는 방법입니다. (이 예에서, `color`는 p 요소의 속성입니다.) CSS에서, rule 내에서 영향을 줄 속성을 선택합니다.
- 속성 값
  - : 속성의 오른쪽에, 콜론 뒤에, 주어진 속성을 위한 많은 가능한 결과중 하나를 선택하기 위해 속성 값을 갖습니다 (`color` 의 값에는 `red` 외에 많은 것이 있습니다).

구문의 다른 중요한 부분들도 주목하세요:

- 각각의 rule set (셀렉터로 구분) 은 반드시 (`{}`) 로 감싸져야 합니다.
- 각각의 선언 안에, 각 속성을 해당 값과 구분하기 위해 콜론 (:)을 사용해야만 합니다.
- 각각의 rule set 안에, 각 선언을 그 다음 선언으로부터 구분하기 위해 세미콜론 (;)을 사용해야만 합니다.

그러니까 여러 속성 값들을 한번에 수정하기 위해서는, 세미콜론으로 구분해서 작성해야 합니다, 이렇게요:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### 여러 요소 선택하기

여러분은 요소의 여러 타입을 선택하고 모두에게 하나의 rule set 을 적용할 수도 있습니다. 여러 선택자는 콤마로 구분합니다. 예를 들면:

```css
p,
li,
h1 {
  color: red;
}
```

### 선택자의 여러 종류

선택자는 여러 종류가 있습니다. 위에서, 우리는 주어진 HTML 문서안에 주어진 타입의 모든 요소를 선택하는 **요소 선택자**만 보았습니다. 하지만 이것보다 더 구체적인 선택을 만들 수 있습니다. 이것은 선택자의 일반적인 종류들입니다:

| 선택자 이름                                       | 선택하는 것                                                                                      | 예시                                                                     |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 요소 선택자 (때때로 태그 또는 타입 선택자라 불림) | 특정 타입의 모든 HTML 요소.                                                                      | `p` `<p> 를 선택`                                                        |
| 아이디 선택자                                     | 특정 아이디를 가진 페이지의 요소 (주어진 HTML 페이지에서, 아이디당 딱 하나의 요소만 허용됩니다). | `#my-id` `<p id="my-id">` 또는 `<a id="my-id">` 를 선택                  |
| 클래스 선택자                                     | 특정 클래스를 가진 페이지의 요소 (한 페이지에 클래스가 여러번 나타날 수 있습니다).               | `.my-class` `<p class="my-class">` 와 `<a class="my-class">` 를 선택     |
| 속성 선택자                                       | 특정 속성을 갖는 페이지의 요소.                                                                  | `img[src]` `<img src="myimage.png">` 를 선택하지만 `<img>` 는 선택 안함  |
| 수도(Pseudo) 클래스 선택자                        | 특정 요소이지만 특정 상태에 있을 때만, 예를 들면, hover over 상태일 때.                          | `a:hover` `<a>` 를 선택하지만, 마우스 포인터가 링크위에 있을 때만 선택함 |

탐구할 더 많은 선택자가 있습니다. 더 자세한 목록은 [선택자 가이드](/ko/docs/Web/Guide/CSS/Getting_started/Selectors)에서 찾아보세요.

## 글꼴과 문자

지금까지 약간의 CSS 기본에 대해 살펴보았습니다, 우리의 예제가 멋있게 보이도록 `style.css` 파일에 더 많은 rule 과 정보를 추가해 봅시다. 우선, 글꼴과 문자가 조금 더 나아보이도록 해보죠.

> **참고:** "px" 가 무슨 뜻인지 설명하는 주석을 추가해 두었습니다. CSS 문서의 /\* 와 \*/ 사이에 있는 것은 브라우저가 코드를 표현할 때 무시하는 **CSS 주석**입니다. 여러분이 하고 있는 것에 대한 유용한 메모를 작성하기 위한 공간입니다.

1. 먼저, 돌아가서 여러분이 안전한 어딘가에 저장해 두었던 [구글 글꼴의 결과물](/ko/docs/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like#Font)을 찾으세요. `index.html` 의 head 안 어딘가에 `<link>` 요소를 추가하세요 (다시 말해서, `<head>` 와 `</head>` 태그 사이 어디에나). 이런식이 될 겁니다:

   ```html
   <link
     href="http://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet"
     type="text/css" />
   ```

2. 다음으로, `style.css` 파일에 이미 존재하는 rule 을 지우세요. 좋은 테스트였지만, 빨간색의 글자가 정말 좋아 보이지는 않습니다.
3. 아래의 코드를 해당 위치에 추가하고, 구글 폰트로부터 얻은 `font-family` 코드를 placeholder 줄에 덮어쓰세요. (`font-family` 는 여러분이 글자를 위해 사용하길 원하는 글꼴을 의미합니다.) 이 rule 은 먼저 전체 페이지의 글자 크기와 기본 글꼴을 설정합니다. (`html`이 전체 페이지의 부모 요소일 때, 이 안의 모든 요소는 같은 `font-size` 와 `font-family` 를 물려 받습니다):

   ```css
   html {
     font-size: 10px; /* px 은 'pixels' 를 의미합니다: 기본 글자 크기는 현재 10 pixels 높이입니다. */
     font-family: placeholder: 구글 폰트로부터 여러분이 얻은 마지막 결과가 있어야합니다.
   }
   ```

4. 이제 HTML body 안에 문자를 포함하는 요소 `h1`, `li` 및 `p` 를 위해 글자 크기를 설정할 것입니다. 또한 조금 더 읽기 좋게 하기 위해 body 콘텐츠의 제목을 가운데 정렬하고 줄의 높이(line-height)와 자간(lettet-spacing)도 설정할 것입니다:

   ```css
   h1 {
     font-size: 60px;
     text-align: center;
   }

   p,
   li {
     font-size: 16px;
     line-height: 2;
     letter-spacing: 1px;
   }
   ```

`px(픽셀)` 값들은 여러분이 원하는대로 조정할 수 있지만, 여러분이 원하는 디자인을 얻도록, 여러분의 디자인은 이런식으로 보여야 합니다:

![a mozilla logo and some paragraphs. a sans-serif font has been set, the font sizes, line height and letter spacing are adjusted, and the main page heading has been centered](website-screenshot-font-small.png)

## 박스, 박스, 박스의 모든 것

CSS 작성에서 여러분이 알게 될 한 가지는 많은 것들이 박스에 관한 것이라는 겁니다 — 그들의 크기, 색상, 위치 등을 설정하는 것. 여러분의 페이지에 있는 대부분의 HTML 요소들은 서로의 위에 놓여있는 박스로 생각해볼 수 있습니다.

![a big stack of boxes or crates sat on top of one another](boxes.jpg)

놀랍지 않게도, CSS 레이아웃은 _박스모델_ 을 주 기반으로 하고 있습니다. 여러분의 페이지의 공간을 차지하고 있는 각각의 블록들은 이와 같은 속성들을 가집니다:

- `padding`, 컨텐트 주위의 공간 (예, 문단 글자의 주위)
- `border`, padding 의 바깥쪽에 놓인 실선
- `margin`, 요소의 바깥쪽을 둘러싼 공간

![three boxes sat inside one another. From outside to in they are labelled margin, border and padding](box-model.png)

여기서 이런 것도 사용합니다:

- `width` (한 요소의 너비)
- `background-color`, 요소의 콘텐츠와 padding 의 배경 색
- `color`, 한 요소의 콘텐츠 색 (일반적으로 글자색)
- `text-shadow`: 한 요소 안의 글자에 그림자를 적용
- `display`: 요소의 표시 형식을 설정합니다 (이것에 대해선 아직 걱정하지마세요)

그럼, 우리의 페이지에 더 많은 CSS를 추가해봅시다! 페이지의 아래에 이러한 새로운 rule 을 계속 추가하세요, 그리고 값을 바꾸는 실험을 통해 이것이 어떤 결과가 나타나는지 보는것을 두려워하지 마세요.

### 페이지 색 바꾸기

```css
html {
  background-color: #00539f;
}
```

이 rule 은 전체 페이지를 위한 배경색을 설정합니다. 위의 색상 코드를 [여러분의 사이트를 계획할 때 선택했던](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like#Theme_color) 색으로 변경하세요.

### body 외부 정렬하기

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

이제는 body 요소를 위한 것입니다. 여기 적지 않은 선언들이 있습니다. 하나 하나 모두 살펴 봅시다:

- `width: 600px;` — 이것은 body가 항상 600 pixels 의 너비를 갖도록 강제합니다.
- `margin: 0 auto;` — 여러분이 `margin` 또는 `padding` 처럼 한 속성에 두개의 값을 설정할 때, 첫 번째 값은 요소의 상단과 하단 (이 예시에서는 0입니다) 에 영향을 주고, 두 번째 값은 좌측 **과** 우측 (여기서, `auto` 는 가능한 수평공간의 왼쪽과 오른쪽을 같게 나눠주는 특별한 값입니다) 에 영향을 줍니다. 여러분은 또한 하나, 셋, 또는 네개의 값을 사용할 수도 있습니다. [여기](/ko/docs/Web/CSS/margin#Values)에 문서화 되어 있습니다.
- `background-color: #FF9500;` — 전과 같이, 이것은 요소의 배경색을 설정합니다. `html` 요소를 위한 짙은 파란색에 반대되도록 body 에는 붉은 빛을 띄는 오렌지색 같은 것을 사용했었습니다. 한번 시험해보세요. 흰색이나 여러분이 원하는 어떤 색이든 편하게 사용해보세요.
- `padding: 0 20px 20px 20px;` — padding 에는 콘텐츠의 주위에 약간의 공간을 주기 위한 네 개의 값이 있습니다. 이번엔 body의 상단에 no padding, 그리고 왼쪽, 아래 그리고 오른쪽에 20 pixels 을 설정하고 있습니다. 상단, 우측, 하단, 좌측 순서로 값을 설정합니다.(12시부터 시계방향)
- `border: 5px solid black;` — 이것은 간단하게 body 모든 면의 border 를 5 pixels 두깨의 실선으로 설정합니다.

### 메인 페이지 제목 배치하고 꾸미기

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

여러분은 바디의 상단에 끔찍한 틈이 있다는 것을 알아차리셨을 겁니다. 브라우저가 `h1` 요소에 (다른 것들 사이에서) 어떤 **초기 스타일링**을 적용하기 때문에 발생합니다, 심지어 여러분이 아무런 CSS 를 적용하지 않았을 때도요! 안좋은 아이디어로 들릴수도 있지만, 우리는 꾸며지지 않은 웹사이트일지라도 기본적인 가독성을 갖기를 원합니다. `margin: 0;`.설정에 의해 초기 스타일링을 덮어쓰는 것으로 그 틈을 제거할 수 있습니다.

다음으로, 제목의 상단과 하단 padding 을 20 pixels로 설정하고, 제목 글자 색을 html 배경색과 같게 만들었습니다.

여기서 사용했던 꽤 흥미로운 속성 하나는 `text-shadow` 문자로, 요소의 문자 콘텐츠에 그림자를 적용해줍니다. 네 개의 값들은 다음과 같습니다:

- 첫 번째 pixel 값은 그림자의 **수평 오프셋**을 설정합니다 — 얼마나 옆으로 이동시킬 것인지.
- 두 번째 pixel 값은 그림자의 **수직 오프셋**을 설정합니다 — 얼마나 아래로 이동시킬 것인지.
- 세 번째 pixel 값은 그림자의 **흐림 반경**을 설정합니다 — 큰 값은 더 흐릿한 그림자를 의미합니다.
- 네 번째 pixel 값은 그림자의 기본 색상을 설정합니다.

다시, 여러분이 무엇을 확인해 볼 수 있는지 다른 값으로 실험을 해보세요.

### 이미지 가운데 정렬

```css
img {
  display: block;
  margin: 0 auto;
}
```

마지막으로, 이미지를 더 나아보이도록 가운데로 둘 것입니다. 전에 body 에서 했듯이 다시 `margin: 0 auto` 트릭을 사용해 볼 수 있지만, 무언가 더 해야할 필요가 있습니다. `body` 요소는 **block level** 입니다. 이것은 페이지의 공간을 차지하고, margin 과 여기에 적용된 다른 여백값을 가질 수 있다는 것을 의미합니다. 반면에 이미지는 **inline** 요소 입니다. 이것은 그렇지 못함을 의미합니다. 따라서 이미지에 margin 을 적용하기 위해서는, `display: block;` 을 사용해 이미지에 block-level 성질을 주어야 합니다.

> **참고:** 노트: 위의 지침에서는 body에 설정된 너비(600 픽셀) 보다 작은 이미지를 사용한다고 가정합니다. 이미지가 더 크면 body가 넘쳐 페이지의 나머지 부분으로 유출됩니다. 이 문제를 해결하려면 1) [그래픽 편집기](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9E%98%ED%94%BD_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)를 사용하여 이미지의 너비를 줄이거나 2) 더 작은 값(예: `400px`) 으로 `<img>` 요소에 width 속성을 설정하고 CSS를 사용하여 이미지 크기를 조정할 수 있습니다.

> **참고:** 아직 `display: block;` 과 block-level/inline 차이를 이해하지 못하였더라도 걱정하시마세요. CSS 를 더 깊게 공부하면 이해하실 수 있을것입니다. display 의 여러 값들에 대한 더 많은 정보는 [display 참조](/ko/docs/Web/CSS/display) 페이지에서 찾아보세요.

## 마무리

이 글의 모든 설명을 따라오셨다면, 이와 같이 보이는 페이지가 되실 겁니다. ([여기서](http://mdn.github.io/beginner-html-site-styled/) 확인하실 수도 있습니다):

![a mozilla logo, centered, and a header and paragraphs. It now looks nicely styled, with a blue background for the whole page and orange background for the centered main content strip.](website-screenshot-final.png)

혹시 막히셨다면, 여러분의 코드와 Github에 있는 우리의 [예제 코드](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css)와 항상 비교해보세요.

여기서, 우리는 CSS의 겉만 살짝 맛봤습니다. 더 많은 것이 알고 싶으시면 [CSS 배우기](/en-US/Learn/CSS) 페이지로 가보세요.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}
