---
title: "HTMLOutputElement: HTMLOutputElement() コンストラクター"
short-title: HTMLOutputElement()
slug: Web/API/HTMLOutputElement/HTMLOutputElement
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`HTMLOutputElement()`** コンストラクターは、新しい {{domxref("HTMLOutputElement")}} オブジェクトを生成します。

> [!NOTE]
> 現在、このコンストラクターを実装しているのは Safari のみであるため、より幅広い互換性を確保するには、{{domxref("Document.createElement()")}} を使用することをお勧めします。詳細は、[下記の例](#プログラムで_output_要素を生成)を参照してください。

## 構文

```js-nolint
new HTMLOutputElement()
```

### 引数

なし。

### 返値

新しい {{domxref("HTMLOutputElement")}} オブジェクト。

### 例外

- {{jsxref("TypeError")}}
  - : このコンストラクターに対応していないブラウザーでは、`"Illegal constructor"` というメッセージと共に発生します。

## 例

### プログラムで output 要素を生成

> [!NOTE]
> 実際に {{htmlelement("output")}} 要素を作成するには、このコンストラクターの代わりに {{domxref("Document.createElement()")}} を使用するのが一般的です。これは、`createElement()` がすべてのブラウザーで対応しているためです。

この例では、{{htmlelement("output")}} 要素を `HTMLOutputElement()` コンストラクターを用いて作成し、2 つの数値を足し合わせるフォームに挿入します。

```html
<form id="my-form">
  <label>
    数値 1
    <input type="number" id="a" value="5" />
  </label>
  +
  <label>
    数値 2
    <input type="number" id="b" value="3" />
  </label>
  =
  <span id="output-container"></span>
</form>
<p id="warning" hidden>
  ⚠️ このブラウザーは
  <code>HTMLOutputElement()</code> コンストラクターに対応していません。
</p>
```

```css hidden
body {
  font-family: system-ui;
}

input {
  width: 3rem;
  font-size: inherit;
}

p {
  padding: 0.25rem;
  background-color: #fff2cc;
}
```

```js
try {
  new HTMLOutputElement();
} catch {
  document.getElementById("warning").hidden = false;
}

const output = new HTMLOutputElement();
output.id = "result";
output.setAttribute("for", "a b");
document.getElementById("output-container").appendChild(output);

function updateResult() {
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  output.value = a.valueAsNumber + b.valueAsNumber;
}

document.getElementById("my-form").addEventListener("input", updateResult);
updateResult();
```

{{EmbedLiveSample("creating_an_output_element_programmatically", "", "150")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLOutputElement")}}
- {{HTMLElement("output")}}
- {{domxref("Document.createElement()")}}
