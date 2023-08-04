---
title: 데이터 속성 사용하기
slug: Learn/HTML/Howto/Use_data_attributes
---

{{LearnSidebar}}

[HTML5](/ko/docs/Web/Guide/HTML/HTML5) 특정 요소와 연관되어 있지만 확정된 의미는 갖지 않는 데이터에 대한 확장 가능성을 염두에 두고 디자인되었습니다. [`data-*` 속성](/ko/docs/Web/HTML/Global_attributes#attr-dataset)은 표준이 아닌 속성이나 추가적인 DOM 속성, {{domxref("Node.setUserData()")}}과 같은 다른 조작을 하지 않고도, 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있도록 해줍니다.

## HTML 문법

문법은 간단합니다. 어느 엘리멘트에나 `data-`로 시작하는 속성은 무엇이든 사용할 수 있습니다. 화면에 안 보이게 글이나 추가 정보를 엘리멘트에 담아 놓을 수 있어요. 아래 `data` 사용법이 있습니다:

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  ...
</article>
```

## JavaScript 에서 접근하기

[JavaScript](/ko/docs/Web/JavaScript) 에서 이 속성 값들을 읽는 방법은 너무 간단합니다. 값을 읽기 위한 완전한 HTML 이름과 함께 {{domxref("Element.getAttribute", "getAttribute()")}} 를 사용하면 됩니다. 그러나 표준은 더 간단한 방법을 정의합니다.: {{domxref("DOMStringMap")}} 는 {{domxref("HTMLElement.dataset", "dataset")}} 속성을 통해 읽어낼 수 있습니다.

`dataset` 객체를 통해 `data` 속성을 가져오기 위해서는 속성 이름의 `data-` 뒷 부분을 사용합니다.(대시들은 camelCase로 변환되는 것에 주의하세요.)

```js
var article = document.getElementById("electriccars");

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

각 속성은 문자열이며 읽거나 쓸 수 있습니다. 위의 경우에서 `article.dataset.columns = 5`와 같이 설정하면 해당 속성을 `"5"`로 변경할 것입니다.

## CSS 에서 접근하기

데이터 속성은 순 HTML 속성이기 때문에 [CSS](/ko/docs/Web/CSS)에서도 접근할 수 있다는 것에 주목하세요. 예를 들어, 부모 데이터를 article에서 보여주려면 {{cssxref("attr")}} 함수의 [생성된 content](/ko/docs/Web/CSS/content) 를 사용하면 됩니다.:

```css
article::before {
  content: attr(data-parent);
}
```

CSS의 [속성 선택자](/ko/docs/Web/CSS/Attribute_selectors)도 데이터에 따라 스타일을 바꾸는데 사용할 수 있습니다.:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

[이 JSBin 예시](http://jsbin.com/ujiday/2/edit)에서 이들이 함께 작동하는 것을 볼 수 있습니다.

데이터 속성들은 게임 점수와 같이 계속 변하는 정보도 저장할 수 있습니다. CSS선택자와 자바스크립트 접근을 이용해서 display 규칙을 사용하지 않고도 훌륭한 효과를 만들 수도 있습니다. 생성된 content와 CSS transition의 예시를 보려면 [이 screencast](http://www.youtube.com/watch?v=On_WyUB1gOk) 를 확인하세요. ([JSBin 예시](http://jsbin.com/atawaz/3/edit)).

데이터 값은 문자열입니다. 스타일을 적용하려면 숫자 값은 선택자에 따옴표 안에 써주어야 합니다.

## 문제점

보여야 하고 접근 가능해야하는 내용은 데이터 속성에 저장하지 마세요. 접근 보조 기술이 접근할 수 없기 때문입니다. 또한 검색 크롤러가 데이터 속성의 값을 찾지 못할 것입니다.

고려해야할 주요한 문제는 인터넷 익스플로러의 지원과 성능입니다. 인터넷 익스플로러11+ 은 표준을 지원하지만, 이전 버전들은 [`dataset`을 지원하지 않습니다](http://caniuse.com/#feat=dataset). IE 10 이하를 지원하기 위해서는 대신 {{domxref("Element.getAttribute", "getAttribute()")}}를 통해 데이터 속성을 접근해야 합니다. 또한, JS 데이터 저장소에 저장하는 것과 비교해서 [데이터 속성 읽기의 성능](http://jsperf.com/data-dataset)은 저조합니다.

하지만 이 때문에, 커스텀 요소와 관련된 메타 데이터를 위해서는 훌륭한 해결책입니다.

Firefox 49.0.2(아마도 이전/이후의 버전)에서는,1022 데이터를 초과하는 데이터 속성은 자바스크립트(EcmaScript 4)가 읽지 못할 것입니다.

## 더 알아보기

- This article is adapted from [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Custom attributes are also supported in SVG 2; see {{domxref("SVGElement.dataset")}} and {{SVGAttr("data-*")}} for more information.
- [How to use HTML5 data attributes](http://www.sitepoint.com/use-html5-data-attributes/) (Sitepoint)
