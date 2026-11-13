---
title: "HTML attribute: for"
short-title: for
slug: Web/HTML/Reference/Attributes/for
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`for`** 특성은 {{htmlelement("label")}}과 {{htmlelement("output")}}에 적용 가능한 특성입니다. `<label>` 요소에 적용하는 경우 라벨이 설명하고 있는 양식 요소를 나타냅니다. `<output>` 요소에 적용하는 경우 출력에 사용되는 값을 표시하는 요소 간의 명시적인 관계를 표현합니다.

{{InteractiveExample("HTML Demo: for", "tabbed-shorter")}}

```html interactive-example
<p>
  <label>First Name (no "for" attribute):</label>
  <input id="first" type="text" value="Jane" />
</p>
<p>
  <label for="last">Last Name (w/ "for" attribute):</label>
  <input id="last" type="text" value="Doe" />
</p>
<p id="result">
  <strong id="result-label">Full Name:</strong>
  <output for="first last" aria-labelledby="result-label" id="output"></output>
</p>
```

```css interactive-example
label[for="paragraph"] {
  color: rebeccapurple;
}

#result {
  text-align: center;
}

#result-label {
  font-size: 16pt;
}

#result-label,
#output {
  display: block;
}
```

```js interactive-example
const firstNameEl = document.getElementById("first");
const lastNameEl = document.getElementById("last");
const outputEl = document.getElementById("output");

function updateOutput() {
  const value = `${firstNameEl.value} ${lastNameEl.value}`;
  outputEl.innerText = value;
}

updateOutput();
firstNameEl.addEventListener("input", updateOutput);
lastNameEl.addEventListener("input", updateOutput);
```

## 사용

`<label>`에서 사용하는 경우, `for` 특성의 값은 연결된 양식 요소의 `id` 값입니다.

```html
<label for="username">Your name</label> <input type="text" id="username" />
```

`<output>`에서 사용하는 경우, `for` 특성의 값은 출력 값을 생성하기 위한 요소의 `id` 값을 공백으로 구분하여 나열한 목록입니다.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## 예제

사용 예제는 {{htmlelement("label")}}과 {{htmlelement("output")}} 요소의 페이지에서 확인해주세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
