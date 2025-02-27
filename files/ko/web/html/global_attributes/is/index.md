---
title: is
slug: Web/HTML/Global_attributes/is
---

{{HTMLSidebar("Global_attributes")}}

**`is`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 표준 HTML 요소가 사용자 지정 요소처럼 행동하도록 지정합니다. [사용자 지정 요소 사용하기](/ko/docs/Web/API/Web_components/Using_custom_elements)를 방문해 더 자세한 정보를 알아보세요.

이 특성은 주어진 사용자 지정 요소의 이름을 현재 문서에 성공적으로 [정의](/ko/docs/Web/API/CustomElementRegistry/define)했고, `is` 특성을 적용하려는 요소를 확장하는 경우에만 사용할 수 있습니다.

## 예제

다음 코드는 [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) 예제에서 발췌한 것입니다. ([실제 동작 보기](https://mdn.github.io/web-components-examples/word-count-web-component/))

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Constructor contents ommitted for brevity
    ...

  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });
```

```html
<p is="word-count"></p>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
