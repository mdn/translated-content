---
title: "HTMLElement: translate 속성"
short-title: translate
slug: Web/API/HTMLElement/translate
l10n:
  sourceCommit: 1442377111a1649dfce278eac688e06efce34b83
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement")}} 인터페이스의 **`translate`** 속성은 페이지가 현지화될 때 요소의 특성 값과 자식 {{domxref("Text")}} 노드의 값을 번역할지 아니면 변경하지 않고 둘지 여부를 나타냅니다.

이 속성은 [`translate`](/ko/docs/Web/HTML/Reference/Global_attributes/translate) HTML 전역 특성의 값을 반영합니다.

## 값

페이지가 현지화될 때 요소의 특성 값과 자식 {{domxref("Text")}} 노드의 값이 번역되어야 하면 `true`,
그렇지 않으면 `false`인 불리언 값.

## 예제

다음 예제는 스크립트를 통해 번역을 활성화하거나 비활성화하는 방법을 보여줍니다.

```html
<div>
  <span>The content may always be translated: </span>
  <span translate="yes">El contenido será traducido</div>
</div>
<div>
  <span id="translate-label">The content may be translated:</span>
  <span id="translate-element" translate="no">El contenido puede ser traducido.</div>
</div>
<input id="translate-controller" type="checkbox" /> Enable translation
```

```js
const label = document.getElementById("translate-label");
const element = document.getElementById("translate-element");
const controller = document.getElementById("translate-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.translate = true;
    label.innerText = "The content may be translated:";
  } else {
    element.translate = false;
    label.innerText = "The content may not be translated:";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`translate`](/ko/docs/Web/HTML/Reference/Global_attributes#translate) HTML 전역 특성
