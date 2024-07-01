---
title: shadow DOM 사용하기
slug: Web/API/Web_components/Using_shadow_DOM
---

{{DefaultAPISidebar("Web Components")}}

웹 컴포넌트의 중요한 측면은 캡슐화입니다. 캡슐화를 통해 마크업 구조, 스타일, 동작을 숨기고 페이지의 다른 코드로부터의 분리하여 각기 다른 부분들이 충돌하지 않게 하고, 코드가 깔끔하게 유지될 수 있게 합니다. Shadow DOM API는 캡슐화의 핵심 파트이며, 숨겨진 분리된 DOM을 요소에 부착하는 방법을 제공합니다. 이 문서는 Shadow DOM 사용의 기본을 다룹니다.

> **참고:** Shadow DOM은 Firefox (63 이상), Chrome, Opera, Safari에서 기본으로 지원됩니다. 새로운 Chromium 기반의 Edge (79 이상) 또한 Shadow DOM을 지원하나 구버전 Edge는 그렇지 않습니다.

## 중요 내용 보기

이 문서는 여러분이 이미 [DOM (Document Object Model)](/ko/docs/Web/API/Document_Object_Model/Introduction)의 개념에 익숙하다고 가정합니다. DOM이란 마크업 문서에서 나타나는 여러 가지 요소들과 텍스트 문자열을 나타내는 연결된 노드들의 트리같은 구조입니다 (웹 문서의 경우 보통 HTML 문서). 예제로서, 다음의 HTML fragment를 고려해 보세요.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

이 fragment는 다음의 DOM 구조를 생성합니다.

![](dom-screenshot.png)

_Shadow_ DOM은 숨겨진 DOM 트리가 통상적인 DOM 트리에 속한 요소에 부착될 수 있게 합니다. 이 shadow DOM 트리는 shadow root로부터 시작되어 원하는 모든 요소의 안에 부착될 수 있으며, 그 방법은 일반 DOM과 같습니다.

![document, shadow root, shadow host의 상호 작용을 보여주는 SVG 버전의 그림.](shadowdom.svg)
Flattened Tree (for rendering): (렌더링을 위해) 평평해진 트리

알아야 할 조금의 shadow DOM 용어가 있습니다.

- **Shadow host**: shadow DOM이 부착되는 통상적인 DOM 노드.
- **Shadow tree**: shadow DOM 내부의 DOM 트리.
- **Shadow boundary**: shadow DOM이 끝나고, 통상적인 DOM이 시작되는 장소.
- **Shadow root**: shadow 트리의 root 노드.

비(非) shadow 노드와 정확히 같은 방법으로 shadow DOM 내의 노드에 영향을 미칠 수 있습니다. 예를 들자면 children을 append하거나, 특성을 설정하거나, element.style.foo를 사용해 각 노드를 꾸민다거나, {{htmlelement("style")}} 요소 내부에 있는 전체 shadow DOM 트리에 스타일을 추가하는 것이 있습니다. 차이는 shadow DOM 내부의 코드 중 아무 것도 shadow DOM 외부의 모든 것에 영향을 주지 않는다는 점인데, 이는 편리한 캡슐화를 가능케 합니다.

shadow DOM이 어떤 방법으로든 새로운 것이 아니라는 것에 주목하세요. 브라우저들은 이것을 긴 시간동안 사용해오며 요소의 내부 구조를 캡슐화했습니다. 예를 들어 기본 브라우저 컨트롤이 노출된 {{htmlelement("video")}} 요소를 생각해 보세요. DOM에서 보이는 모든 것은 `<video>` 요소지만, 이것은 일련의 버튼들과 다른 컨트롤들을 이것의 shadow DOM 내부에 포함하고 있습니다. shadow DOM 명세서는 잘 만들어져 와서 여러분은 실제로 여러분만의 사용자 정의 요소의 shadow DOM을 조작할 수 있습니다.

## 기본 사용법

{{domxref("Element.attachShadow()")}} 메서드를 사용하여 어떠한 요소에든 shadow root을 부착할 수 있습니다. 이 메서드는 매개변수로 하나의 옵션을 포함하는 옵션 객체를 취합니다. 그 옵션이란 `mode` 이며, `open` 혹은 `closed` 의 값을 가집니다.

```js
let shadow = elementRef.attachShadow({ mode: "open" });
let shadow = elementRef.attachShadow({ mode: "closed" });
```

`open` 은 메인 페이지 맥락에서 작성된 JavaScript를 사용하여 shadow DOM에 접근할 수 있음을 의미합니다. 예를 들자면 {{domxref("Element.shadowRoot")}} 속성을 사용하여 접근할 수 있습니다.

```js
let myShadowDom = myCustomElem.shadowRoot;
```

만약 `mode: closed` 로 사용자 정의 요소에 shadow root을 부착했다면, 외부로부터 shadow DOM에 접근할 수 없을 것입니다. `myCustomElem.shadowRoot` 은 `null` 을 반환합니다. 이것은 `<video>` 와 같이 shadow DOM을 포함하고 있는 내장 요소들의 경우입니다.

> **참고:** [이 블로그 글](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af)이 보여주듯, closed인 shadow DOM을 우회하는 것은 사실 상당히 쉽고, shadow DOM을 완전히 숨기기 위한 귀찮은 일은 종종 그 일의 가치보다 더 큽니다.

만약 shadow DOM을 사용자 정의 요소에 사용자 정의 요소 생성자의 일부로써 부착한다면 (단연코 shadow DOM의 가장 유용한 적용), 다음과 같이 할 것입니다.

```js
let shadow = this.attachShadow({ mode: "open" });
```

shadow DOM을 요소에 부착했을 때, shadow DOM을 조작하는 것은 단지 통상적인 DOM 조작에 사용되는 것과 같은 DOM API를 사용하는 것의 문제입니다.

```js
let para = document.createElement("p");
shadow.appendChild(para);
// 등등
```

## 간단한 예제 살펴보기

이제 사용자 정의 요소 내부에서 작동하는 shadow DOM을 시연하기 위한 간단한 예제 속으로 들어가 봅시다. [`<popup-info>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) ([작동 예제](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)도 볼 수 있습니다). 이것은 이미지 아이콘과 텍스트 문자열을 취하고, 아이콘을 페이지에 넣습니다. 아이콘이 포커스되었을 때, 이것은 텍스트를 팝업 정보 박스에 표시하여 추가적인 맥락 내 정보를 제공합니다. 우선, JavaScript 파일에서 `PopUpInfo` 라는 클래스를 정의하는데, 이 클래스는 `HTMLElement` 를 확장합니다.

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

클래스 정의 내부에서 요소의 생성자를 정의하는데, 이는 이 클래스의 인스턴스가 인스턴스화되었을 때 요소가 가질 모든 기능을 정의합니다.

### shadow root 생성하기

첫번째로 shadow root을 사용자 정의 요소에 부착합니다.

```js
// shadow root을 생성합니다
let shadow = this.attachShadow({ mode: "open" });
```

### shadow DOM 구조를 생성합니다

다음으로, 몇 가지 DOM 조작을 사용하여 요소의 내부 shadow DOM 구조를 생성합니다.

```js
// span들을 생성합니다
let wrapper = document.createElement("span");
wrapper.setAttribute("class", "wrapper");
let icon = document.createElement("span");
icon.setAttribute("class", "icon");
icon.setAttribute("tabindex", 0);
let info = document.createElement("span");
info.setAttribute("class", "info");

// 특성의 내용을 취하고 그것을 info span 내부에 넣습니다
let text = this.getAttribute("data-text");
info.textContent = text;

// 아이콘을 삽입합니다
let imgUrl;
if (this.hasAttribute("img")) {
  imgUrl = this.getAttribute("img");
} else {
  imgUrl = "img/default.png";
}
let img = document.createElement("img");
img.src = imgUrl;
icon.appendChild(img);
```

### shadow DOM 꾸미기

이후에 {{htmlelement("style")}} 요소를 생성하고 shadow DOM을 꾸미기 위한 몇 가지 CSS로 style 요소를 채웁니다.

```js
// shadow DOM에 적용할 몇 가지 CSS를 생성합니다
let style = document.createElement("style");

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}`;
```

### shadow DOM을 shadow root에 부착하기

마지막 단계는 생성된 모든 요소를 shadow root에 부착하는 것입니다.

```js
// 생성된 요소들을 shadow dom에 부착합니다
shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

### 사용자 정의 요소 사용하기

한 번 클래스가 정의되고 나면, 요소를 사용하는 것은 요소를 정의하는 것과 페이지에 요소를 추가하는 것만큼이나 간단합니다. (페이지에 요소를 추가하는 것은 [사용자 정의 요소 사용하기](/ko/docs/Web/Web_Components/Using_custom_elements)에서 설명되었습니다).

```js
// 새로운 요소를 정의합니다
customElements.define("popup-info", PopUpInfo);
```

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC) is an extra
                                    security feature — it is the last 3 or 4
                                    numbers on the back of your card."></popup-info>
```

### 내부 스타일 대 외부 스타일

위의 예제에서는 {{htmlelement("style")}} 요소를 사용하여 Shadow DOM에 스타일을 적용했지만, 대신 {{htmlelement("link")}} 요소로부터 외부 스타일시트를 참조함으로써 스타일을 적용하는 것도 완벽히 가능합니다.

예를 들어, [popup-info-box-external-stylesheet](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/) 예제 ([소스 코드](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js)도 볼 수 있습니다) 의 코드를 확인해 보세요.

```js
// 외부 스타일을 shadow dom에 적용합니다
const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", "style.css");

// 생성된 요소를 shadow dom에 적용합니다
shadow.appendChild(linkElem);
```

{{htmlelement("link")}} 요소는 shadow root의 페인트를 막지 않아, 스타일시트가 로딩되는 동안 스타일되지 않은 내용의 번쩍임 (FOUC, flash of unstyled content) 이 있을 수 있다는 것에 주의하세요.

많은 모던 브라우저들은 공통 노드로부터 복제되었거나 동일한 텍스트를 가지고 있는 {{htmlelement("style")}} 태그에 대한 최적화를 구현하여 스타일 태그가 하나의 백업 스타일시트를 공유할 수 있게 합니다. 이 최적화로 인해 외부 스타일과 내부 스타일의 성능은 비슷할 것입니다.

## 같이 보기

- [사용자 정의 요소 사용하기](/ko/docs/Web/Web_Components/Using_custom_elements)
- [template와 slot 사용하기](/ko/docs/Web/Web_Components/Using_templates_and_slots)
