---
title: "HTMLInputElement: disabled property"
short-title: disabled
slug: Web/API/HTMLInputElement/disabled
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement.disabled`** 속성은 [`disabled`](/ko/docs/Web/HTML/Element/input#disabled) HTML 특성을 반영하는 불리언 값이며 이는 해당 컨트롤이 비활성화되었는지 여부를 나타냅니다. 비활성화된 경우 클릭을 허용하지 않습니다. 비활성화된 요소는 사용할 수 없으며 클릭할 수 없습니다.

## 값

불리언 값입니다.

## 예제

### HTML

```html
<p>
  <label>
    <input id="check-box" name="b" value="1" type="checkbox" disabled /> Check
    this box!
  </label>
</p>
<p>
  <label>
    <input id="toggle-box" name="b" value="2" type="checkbox" /> Enable the
    other checkbox.
  </label>
</p>
```

### JavaScript

```js
const checkBox = document.getElementById("check-box");
const toggleBox = document.getElementById("toggle-box");

toggleBox.addEventListener(
  "change",
  (event) => {
    checkBox.disabled = !event.target.checked;
  },
  false,
);
```

### 결과

{{EmbedLiveSample('Examples')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
