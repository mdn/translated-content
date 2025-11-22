---
title: "HTML 属性: for"
short-title: for
slug: Web/HTML/Reference/Attributes/for
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`for`** 属性は {{htmlelement("label")}} と {{htmlelement("output")}} で利用できる属性です。 `<label>` 要素上で使用された場合、このラベルが説明するフォーム要素を示します。 `<output>` 要素上で使用された場合、その出力欄で使用される値を表す要素間の関係を明示的に示すことができます。

{{InteractiveExample("HTML デモ: for", "tabbed-shorter")}}

```html interactive-example
<p>
  <label>First Name （"for" 属性なし）:</label>
  <input id="first" type="text" value="Jane" />
</p>
<p>
  <label for="last">Last Name （"for" 属性付き）:</label>
  <input id="last" type="text" value="Doe" />
</p>
<p id="result">
  <strong id="result-label">フルネーム:</strong>
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

## 使用方法

`<label>` の属性として使用された場合、 `for` 属性はそのラベルが関連するフォーム要素の `id` 値を保持します。

```html
<label for="username">Your name</label> <input type="text" id="username" />
```

`<output>` の属性として使用された場合、 `for` 属性はその出力を作成するために使用される要素の `id` 値を、空白で区切ったリストである値を保持します。

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## 例

{{htmlelement("label")}} および {{htmlelement("output")}} の要素ページの使用例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
