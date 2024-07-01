---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
---

{{DefaultAPISidebar("Web Components")}}

**`CustomElementRegistry`** 인터페이스는 사용자 지정 요소를 등록하고, 기존에 등록한 요소를 가져올 수 있는 메서드를 제공합니다. `CustomElementRegistry`의 인스턴스를 가져오려면 {{domxref("window.customElements")}} 속성을 사용하세요.

## 메서드

- {{domxref("CustomElementRegistry.define()")}}
  - : 새로운 [사용자 정의 요소](/ko/docs/Web/Web_Components/Using_custom_elements)를 정의합니다.
- {{domxref("CustomElementRegistry.get()")}}
  - : 주어진 이름을 붙인 사용자 정의 요소의 생성자를 반환합니다. 해당하는 이름에 정의된 요소가 존재하지 않으면 {{jsxref("undefined")}}를 대신 반환합니다.
- {{domxref("CustomElementRegistry.upgrade()")}}
  - : 사용자 정의 요소를 직접 업그레이드합니다. 요소가 자신의 섀도 루트(shadow root)와 연결되지 않아도 업그레이드할 수 있습니다.
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : 주어진 이름의 사용자 정의 요소가 등록되는 순간 이행하는 빈 {{jsxref("Promise")}}를 반환합니다. 만약 해당하는 이름의 요소가 이미 정의된 경우, 반환하는 프로미스는 즉시 이행합니다.

## 예제

다음 코드는 [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) 예제에서 가져와 주석을 번역한 것입니다([실행 결과 미리보기](https://mdn.github.io/web-components-examples/word-count-web-component/)). 사용자 지정 요소 클래스를 생성한 후, {{domxref("CustomElementRegistry.define()")}} 메서드로 등록하는 과정을 살펴보세요.

```js
// 요소의 클래스 생성
class WordCount extends HTMLParagraphElement {
  constructor() {
    // 생성자에선 항상 제일 먼저 super 호출
    super();

    // 요소 부모의 단어 수 세기
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Words: ${countWords(wcParent)}`;

    // 섀도 루트 생성
    const shadow = this.attachShadow({ mode: "open" });

    // 텍스트 노드 생성 후 단어 수로 채우기
    const text = document.createElement("span");
    text.textContent = count;

    // 텍스트 노드를 섀도 루트에 추가
    shadow.appendChild(text);

    // 요소 콘텐츠가 바뀌면 단어 수 업데이트
    setInterval(function () {
      const count = `Words: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// 새로운 요소 정의
customElements.define("word-count", WordCount, { extends: "p" });
```

> **참고:** `CustomElementRegistry`는 {{domxref("Window.customElements")}} 속성으로 접근할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
