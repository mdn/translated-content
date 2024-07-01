---
title: 사용자 정의 요소 사용하기
slug: Web/API/Web_components/Using_custom_elements
---

{{DefaultAPISidebar("Web Components")}}

웹 컴포넌트 표준의 주요 기능 중 하나는 사용자 정의 페이지 기능을 제공하는 길고 중첩된 요소들의 묶음으로 만족하는 것보다는, HTML 페이지에서 기능을 캡슐화하는 사용자 정의 요소를 생성하는 능력입니다. 이 문서는 Custom Elements API의 사용을 소개합니다.

## 중요 내용 보기

웹 document의 사용자 정의 요소의 컨트롤러는 {{domxref("CustomElementRegistry")}} 객체입니다. 이 객체는 페이지에 사용자 정의 요소를 등록할 수 있게 하고, 어떤 사용자 정의 요소가 등록되었는지 등에 대한 정보를 반환합니다.

페이지에 사용자 정의 요소를 등록하는 방법은 {{domxref("CustomElementRegistry.define()")}} 메서드를 사용하는 것입니다. 이 메서드는 인자로 다음을 취합니다.

- {{domxref("DOMString")}}은 요소에 주는 이름을 나타냅니다. 사용자 정의 요소의 이름은 [대시가 사용되는 것을 요구](https://html.spec.whatwg.org/#valid-custom-element-name)한다는 것에 주의하세요 (kebab-case). 이름은 하나의 단어일 수 없습니다.
- 요소의 동작을 정의하는 [class](/ko/docs/Web/JavaScript/Reference/Classes) 객체.
- {{optional_inline}} `extends` 속성을 포함하는 옵션 객체인데, 이는 이 요소가 상속받는 내장 요소가 있다면, 그 내장 요소를 명시합니다 (오직 사용자 정의된 내장 요소에만 관계있습니다. 아래의 정의를 보세요).

예를 들어, 사용자 정의 [단어 카운트 요소](https://mdn.github.io/web-components-examples/word-count-web-component/)를 다음과 같이 정의할 수 있습니다.

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

이 요소는 `word-count` 라고 불리며, 이것의 클래스 객체는 `WordCount` 이고, 이것은 {{htmlelement("p")}}요소를 확장합니다.

사용자 정의 요소의 클래스 객체는 표준 ES 2015 class 구문을 사용하여 작성됩니다. 에를 들어, `WordCount` 는 다음과 같이 구조화될 수 있습니다.

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    // 항상 super를 생성자에서 먼저 호출합니다
    super();

    // 요소 기능은 여기 작성됩니다

    ...
  }
}
```

이것은 단순히 간단한 예제이지만, 여기서 할 수 있는 더 많은 것이 있습니다. 클래스 내부에서 특정한 생명 주기 콜백을 정의할 수 있는데, 이 콜백은 요소의 생명 주기의 특정한 지점에서 실행됩니다. 예를 들어, `connectedCallback` 은 사용자 정의 요소가 문서에 연결된 요소에 추가될 때마다 호출되는 반면, `attributeChangedCallback` 은 사용자 정의 요소의 특성 중 하나가 추가되거나, 제거되거나, 변경될 때 호출됩니다.

아래의 [생명 주기 콜백 사용하기](#생명_주기_콜백_사용하기) 섹션에서 더 많은 것을 배울 수 있습니다.

두 종류의 사용자 정의 요소가 있습니다.

- **독립적인 사용자 정의 요소**는 독립적입니다. 이 유형의 요소는 표준 HTML 요소를 상속받지 않습니다. 이러한 요소는 페이지에서 말 그대로 HTML 요소로 작성됨으로써 사용됩니다. 예를 들어 `<popup-info>`, 혹은 `document.createElement("popup-info")`.
- **사용자 정의된 내장 요소**는 기본 HTML 요소를 상속받습니다. 이러한 요소를 생성하기 위해서는, (위의 예제에서 암시되었듯이) 어떤 요소를 이것이 확장하는지 명시해야 하며, 이러한 요소는 기본 요소를 작성함으로써 사용되나 [`is`](/ko/docs/Web/HTML/Global_attributes#is) 특성 (혹은 속성) 에 사용자 정의 요소의 이름을 명시해야 합니다. 예를 들어 `<p is="word-count">`, 혹은 `document.createElement("p", { is: "word-count" })`.

## 몇 가지 간단한 예제 살펴보기

이 지점에서, 어떻게 사용자 정의 요소가 생성되는지를 자세히 보여주는 몇 가지 간단한 예제를 살펴봅시다.

### 독립적인 사용자 정의 요소

독립적인 사용자 정의 요소의 예제를 살펴봅시다. [`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) ([작동 예제](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)도 볼 수 있습니다). 이것은 이미지 아이콘과 텍스트 문자열을 취하고, 아이콘을 페이지에 넣습니다. 아이콘이 포커스되었을 때, 이것은 텍스트를 팝업 정보 박스에 표시하여 추가적인 맥락 내 정보를 제공합니다.

우선, JavaScript 파일에서 `PopUpInfo` 라는 클래스를 정의하는데, 이 클래스는 포괄적인 {{domxref("HTMLElement")}} 클래스를 확장합니다.

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // 항상 super를 생성자에서 먼저 호출합니다
    super();

    // 요소 기능을 여기 작성합니다

    ...
  }
}
```

앞선 코드 스니펫은 클래스에 대한 [`constructor()`](/ko/docs/Web/JavaScript/Reference/Classes/constructor) 정의를 포함하고 있는데, 이는 항상 [`super()`](/ko/docs/Web/JavaScript/Reference/Operators/super)를 호출함으로써 시작하여 올바른 프로토타입 체인이 확립되도록 합니다.

생성자 내부에서, 클래스의 인스턴스가 인스턴스화되었을 때 요소가 가질 모든 기능을 정의합니다. 이 경우 우리는 shadow root을 사용자 정의 요소에 부착하고, 몇 가지 DOM 조작을 사용하여 요소의 내부 shadow DOM 구조를 생성하는데, 이는 그리고서 shadow root에 부착됩니다. 그리고 마지막으로 몇 가지 CSS를 shadow root에 부착하여 shadow DOM을 꾸밉니다.

```js
// shadow root을 생성합니다
this.attachShadow({ mode: "open" }); // 'this.shadowRoot'을 설정하고 반환합니다

// (중첩된) span 요소들을 생성합니다
const wrapper = document.createElement("span");
wrapper.setAttribute("class", "wrapper");
const icon = wrapper.appendChild(document.createElement("span"));
icon.setAttribute("class", "icon");
icon.setAttribute("tabindex", 0);
// 정의된 특성으로부터의 아이콘 혹은 기본 아이콘을 삽입합니다
const img = icon.appendChild(document.createElement("img"));
img.src = this.hasAttribute("src")
  ? this.getAttribute("src")
  : "img/default.png";

const info = wrapper.appendChild(document.createElement("span"));
info.setAttribute("class", "info");
// 특성의 내용을 취하고 그것을 info span 내부에 넣습니다
info.textContent = this.getAttribute("data-text");

// shadow dom에 적용할 몇 가지 CSS를 생성합니다
const style = document.createElement("style");
style.textContent =
  ".wrapper {" +
  // 간결함을 위해 CSS 생략됨

  // 생성된 요소들을 shadow DOM에 부착합니다
  this.shadowRoot.append(style, wrapper);
```

마지막으로, `CustomElementRegistry` 에 사용자 정의 요소를 앞에서 언급된 `define()` 메서드를 사용해 등록합니다. 매개변수에서 요소의 이름과, 그리고 나서 요소의 기능을 정의하는 클래스명을 명시합니다.

```js
customElements.define("popup-info", PopUpInfo);
```

이 요소는 이제 페이지에서 사용 가능합니다. HTML 전체에서, 요소를 다음과 같이 사용합니다.

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

> **참고:** [전체 JavaScript 소스 코드](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js)를 여기서 확인할 수 있습니다.

### 내부 스타일 대 외부 스타일

상기의 예제에서 {{htmlelement("style")}} 요소가 사용되어 Shadow DOM에 스타일을 적용했으나, 대신 {{htmlelement("link")}} 요소로부터 외부 스타일시트를 참조함으로써 스타일을 적용하는 것도 완벽히 가능합니다.

예를 들자면, [popup-info-box-external-stylesheet](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/) 예제에서 이 코드를 확인해 보세요 ([소스 코드](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js)도 볼 수 있습니다).

```js
// 외부 스타일을 shadow dom에 적용하기
const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", "style.css");

// 생성된 요소를 shadow dom에 부착하기
shadow.appendChild(linkElem);
```

{{htmlelement("link")}} 요소는 shadow root의 페인트를 막지 않아, 스타일시트가 로딩되는 동안 스타일되지 않은 내용의 번쩍임 (FOUC, flash of unstyled content) 이 있을 수 있다는 점에 주의하세요.

많은 모던 브라우저들은 공통 노드로부터 복제되었거나 동일한 텍스트를 가지고 있는 {{htmlelement("style")}} 태그에 대한 최적화를 구현하여 스타일 태그가 하나의 백업 스타일시트를 공유할 수 있게 합니다. 이 최적화로 인해 외부 스타일과 내부 스타일의 성능은 비슷할 것입니다.

### 사용자 정의된 내장 요소

이제 사용자 정의된 요소 예제를 살펴봅시다. [expanding-list](https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component) ([작동 예제](https://mdn.github.io/web-components-examples/expanding-list-web-component/)도 확인해 보세요). 이것은 정렬되지 않은 리스트를 확장/축소 메뉴로 바꿔 줍니다.

우선, 요소의 클래스를 이전과 같은 방식으로 정의합니다.

```js
class ExpandingList extends HTMLUListElement {
  constructor() {
    // 항상 super를 생성자에서 먼저 호출합니다
    super();

    // 요소 기능을 여기 작성합니다

    ...
  }
}
```

요소 기능을 여기서는 자세히 설명하지 않을 것이지만, 소스 코드를 확인해서 어떻게 작동하는지 발견할 수 있을 것입니다. 여기서의 차이는 이 요소가 {{domxref("HTMLElement")}}가 아니라, {{domxref("HTMLUListElement")}} 인터페이스를 확장한다는 것입니다. 그래서 이 요소는 독립된 요소이기보다는 {{htmlelement("ul")}} 요소의 모든 특성을 가지고 있으며 그 위에 우리가 정의한 기능 또한 가지고 있습니다. 이것이 이 요소를 독립적인 요소보다는 사용자 정의된 내장 요소로 만들어주는 것입니다.

다음으로, 전과 같이 `define()` 메서드를 사용하여 요소를 등록하나, 이번엔 이 사용자 정의 요소가 어떤 요소를 상속받는지를 나타내는 옵션 객체를 포함합니다.

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

웹 document에서 이 내장 요소를 사용하는 것은 또한 어느 정도 다르게 보입니다.

```html
<ul is="expanding-list">
  ...
</ul>
```

`<ul>` 요소를 평범하게 사용하나, `is` 특성 내부에 사용자 정의 요소의 이름을 명시합니다.

> **참고:** [전체 JavaScript 소스 코드](https://github.com/mdn/web-components-examples/blob/master/expanding-list-web-component/main.js)를 확인해볼 수 있습니다.

## 생명 주기 콜백 사용하기

몇 가지 다른 콜백을 사용자 정의 요소의 클래스 정의 내부에 정의할 수 있는데, 이 콜백들은 요소의 생명 주기의 각기 다른 지점에서 발생됩니다.

- `connectedCallback`: 사용자 정의 요소가 문서에 연결된 요소에 추가될 때마다 호출됩니다. 이것은 노드가 이동될 때마다 발생할 것이며, 요소의 내용이 완전히 해석되기 전에 발생할 지도 모릅니다.

  > **참고:** `connectedCallback` 은 요소가 더 이상 연결되지 않았을 때 호출될 수도 있으므로, 확실하게 하기 위해선 {{domxref("Node.isConnected")}}를 사용하세요.

- `disconnectedCallback`: 사용자 정의 요소가 document의 DOM에서 연결 해제되었을 때마다 호출됩니다.
- `adoptedCallback`: 사용자 정의 요소가 새로운 document로 이동되었을 때마다 호출됩니다.
- `attributeChangedCallback`: 사용자 정의 요소의 특성들 중 하나가 추가되거나, 제거되거나, 변경될 때마다 호출됩니다. 어떤 특성이 변경에 대해 알릴지는 static get `observedAttributes` 메서드에서 명시됩니다.

이것들의 사용례를 봅시다. 아래의 코드는 [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) 예제에서 취해졌습니다 ([작동 예제](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)도 볼 수 있습니다). 이것은 페이지에 고정된 크기의 색이 칠해진 사각형을 생성하는 작은 예제입니다. 사용자 정의 요소는 다음과 같이 생겼습니다.

```html
<custom-square l="100" c="red"></custom-square>
```

클래스 생성자는 정말로 간단합니다. shadow DOM을 요소에 부착하고, 빈 {{htmlelement("div")}} 와 {{htmlelement("style")}} 요소를 shadow root에 부착합니다.

```js
const shadow = this.attachShadow({ mode: "open" });

const div = document.createElement("div");
const style = document.createElement("style");
shadow.appendChild(style);
shadow.appendChild(div);
```

이 예제에서의 핵심 함수는 `updateStyle()` 입니다. 이 함수는 요소를 취하고, 요소의 shadow root을 얻고, shadow root의 `<style>` 요소를 찾고, {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}를 스타일에 추가합니다.

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("l")}px;
      height: ${elem.getAttribute("l")}px;
      background-color: ${elem.getAttribute("c")};
    }
  `;
}
```

실제 갱신은 모두 생명 주기 콜백에 의해 다뤄지는데, 이 콜백들은 클래스 정의 내부에 메서드로 위치합니다. `connectedCallback()` 은 요소가 DOM에 추가될 때마다 실행됩니다. 여기서 `updateStyle()` 함수가 실행되어 사각형이 이것의 특성에 정의된 대로 꾸며지도록 합니다.

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}
```

`disconnectedCallback()` 과 `adoptedCallback()` 콜백은 콘솔에 간단한 메시지를 로그하여 언제 요소가 DOM에서 제거되었는지, 혹은 다른 페이지로 이동되었는지를 알립니다.

```js
disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}
```

`attributeChangedCallback()` 은 요소의 특성 중 하나가 어떠한 방식으로 변경될 때마다 실행됩니다. 이 콜백의 매개변수에서 볼 수 있다시피, 특성의 이름, 이전 값, 새로운 값을 보고 특성의 변경 사항에 개별적으로 대응하는 게 가능합니다. 그러나, 이번 경우에는 개별적으로 대응하지 않고, 사각형의 스타일이 새로운 값에 따라 갱신될 수 있도록 단순히 `updateStyle()` 함수를 다시 호출합니다.

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

`attributeChangedCallback()` 콜백이 특성이 변경되었을 때 발생되기 하기 위해서는, 해당 특성을 관찰해야만 합니다. 이 작업은 `static get observedAttributes()` 메서드를 사용자 정의 요소 클래스 내부에 명시함으로써 이루어집니다. 이 메서드는 관찰하기를 원하는 특성들의 이름을 포함하는 배열을 `return` 해야 합니다.

```js
static get observedAttributes() { return ['c', 'l']; }
```

이 예제에서 이 메서드는 생성자의 바로 위에 위치해 있습니다.

> **참고:** [전체 JavaScript 소스 코드](https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js)를 확인해 보세요.

## 트랜스파일러 대 클래스

ES2015 class는 레거시 브라우저를 목표로 하는 Babel 6 또는 TypeScript 에서 신뢰할만하게 트랜스파일될 수 없다는 점에 주의하세요. Babel 7을 사용하거나 Babel 6에 대해서 [babel-plugin-transform-builtin-classes](https://www.npmjs.com/package/babel-plugin-transform-builtin-classes)를 사용할 수 있고, 레거시 대신에 TypeScript의 ES2015를 목표로 할 수 있습니다.

## 라이브러리

사용자 정의 요소를 생성할 때 추상화의 단계를 올리는 것을 목표로 하는 웹 컴포넌트를 기반으로 하는 몇 가지의 라이브러리들이 있습니다. 이러한 라이브러리에는 [FASTElement](https://www.fast.design/docs/fast-element/getting-started), [snuggsi](https://github.com/devpunks/snuggsi), [X-Tag](https://x-tag.github.io/), [Slim.js](https://slimjs.com/), [Lit](https://lit.dev/), [Smart](https://www.htmlelements.com/), [Stencil](https://stenciljs.com), [hyperHTML-Element](https://github.com/WebReflection/hyperHTML-Element), [DataFormsJS](https://www.dataformsjs.com/), [Custom-Element-Builder](https://tmorin.github.io/ceb/)가 있습니다.
