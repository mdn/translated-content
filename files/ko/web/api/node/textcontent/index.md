---
title: Node.textContent
slug: Web/API/Node/textContent
---

{{APIRef("DOM")}}

{{domxref("Node")}} 인터페이스의 **`textContent`** 속성은 노드와 그 자손의 텍스트 콘텐츠를 표현합니다.

> **참고:** `textContent`와 {{domxref("HTMLElement.innerText")}}가 자주 혼동되곤 하지만, 두 속성에는 [몇 가지 중요한 차이점](#innertext와의_차이점)이 있습니다.

## 구문

```js
let text = someNode.textContent;
someOtherNode.textContent = string;
```

### 값

문자열 또는 {{jsxref("null")}}.

## 설명

`textContent`의 값은 상황에 따라 다릅니다.

- 노드가 {{domxref("document")}} 또는 {{glossary("Doctype")}}이면 {{jsxref("null")}}을 반환합니다.

  > **참고:** 전체 문서의 모든 텍스트와 CDATA 데이터를 얻으려면 `document.documentElement.textContent`를 사용하세요.

- 노드가 [CDATA 구획](/ko/docs/Web/API/CDATASection), 주석, [처리 명령](/ko/docs/Web/API/ProcessingInstruction), [텍스트 노드](/ko/docs/Web/API/Text)면 노드 내의 텍스트, 즉 {{domxref("Node.nodeValue")}}를 반환합니다.
- 다른 노드 유형에 대해서는 주석과 처리 명령을 제외한 모든 자식 노드의 `textContent`를 병합한 결과를 반환합니다. 자식이 없는 경우 빈 문자열입니다.

노드의 `textContent`를 설정하면, 노드의 모든 자식을 주어진 문자열로 이루어진 하나의 텍스트 노드로 대치합니다.

### `innerText`와의 차이점

비록 `Node.textContent`와 {{domxref("HTMLElement.innerText")}}의 이름이 유사하긴 하지만, 중요한 차이가 있으므로 헷갈리지 마세요.

- `textContent`는 {{htmlelement("script")}}와 {{htmlelement("style")}} 요소를 포함한 모든 요소의 콘텐츠를 가져옵니다. 반면 `innerText`는 "사람이 읽을 수 있는" 요소만 처리합니다.
- `textContent`는 노드의 모든 요소를 반환합니다. 그에 비해 `innerText`는 스타일링을 고려하며, "숨겨진" 요소의 텍스트는 반환하지 않습니다.

  - 또한, `innerText`의 CSS 고려로 인해, innerText 값을 읽으면 최신 계산값을 반영하기 위해 {{glossary("reflow", "리플로우")}}가 발생합니다. (리플로우 계산은 비싸므로 가능하면 피해야 합니다)

- Internet Explorer 기준, `innerText`를 수정하면 요소의 모든 자식 노드를 제거하고, 모든 자손 텍스트 노드를 영구히 파괴합니다. 이로 인해, 해당 텍스트 노드를 이후에 다른 노드는 물론 같은 노드에 삽입하는 것도 불가능합니다.

### `innerHTML`과의 차이점

{{domxref("Element.innerHTML")}}는 이름 그대로 HTML을 반환합니다. 간혹 innerHTML을 사용해 요소의 텍스트를 가져오거나 쓰는 경우가 있지만, HTML로 분석할 필요가 없다는 점에서 `textContent`의 성능이 더 좋습니다.

이에 더해, `textContent`는 [XSS 공격](/ko/docs/Glossary/Cross-site_scripting)의 위험이 없습니다.

## 예제

다음과 같은 HTML 조각에서...

```html
<div id="divA">This is <span>some</span> text!</div>
```

`textContent`를 사용해 요소의 텍스트 콘텐츠를 가져오거나...

```js
let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
```

텍스트 내용을 설정할 수 있습니다.

```js
document.getElementById("divA").textContent = "This text is different!";
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
```

## 브라우저 호환성

{{Compat}}

## 명세

{{Specifications}}

## 참고

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.innerHTML")}}
