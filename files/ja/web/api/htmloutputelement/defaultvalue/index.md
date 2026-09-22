---
title: "HTMLOutputElement: defaultValue プロパティ"
short-title: defaultValue
slug: Web/API/HTMLOutputElement/defaultValue
l10n:
  sourceCommit: 4c8b7533087b60fb75e98de28ac6bccc4139e735
---

{{ APIRef("HTML DOM") }}

**`defaultValue`** は {{DOMxRef("HTMLOutputElement")}} インターフェイスのプロパティで、この {{htmlelement("output")}} 要素のデフォルト値を表します。この値の取得および設定は、{{htmlelement("output")}} における {{domxref("Node.textContent", "textContent")}} の取得および設定と同等です。

## 値

文字列です。

## 例

下記の例では、`defaultValue` は HTML に当初記述されていた値を返します。{{domxref("HTMLOutputElement.value", "value")}} への変更は、DOM 内の `defaultValue` やその `textContent` には影響しません。

```html
<fieldset>
  <legend>2 つの数値の加算</legend>
  <p>
    <input type="number" id="operand1" value="5" aria-label="First number" />
    +
    <input type="number" id="operand2" value="7" aria-label="Second number" />
    =
    <output
      id="result"
      for="operand1 operand2"
      aria-live="polite"
      aria-controls="output"
      >12</output
    >
  </p>
</fieldset>
<pre id="logs" aria-live="polite"></pre>
```

```js
const logs = document.getElementById("logs");
const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const result = document.getElementById("result");

function updateResult() {
  result.value = operand1.valueAsNumber + operand2.valueAsNumber;
  logs.innerText = `result.defaultValue: ${result.defaultValue}\nresult.value: ${result.value}`;
}

operand1.addEventListener("input", updateResult);
operand2.addEventListener("input", updateResult);
updateResult();
```

{{EmbedLiveSample("examples", "", "150")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("output")}}
- {{DOMXref("HTMLOutputElement.value")}}
