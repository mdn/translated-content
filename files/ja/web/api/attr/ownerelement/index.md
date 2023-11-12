---
title: "Attr: ownerElement プロパティ"
slug: Web/API/Attr/ownerElement
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`ownerElement`** は {{domxref("Attr")}} インターフェイスの読み取り専用プロパティで、この属性が所属する要素 ({{domxref("Element")}}) を返します。

## 値

この属性が所属する要素 ({{domxref("Element")}})、またはこの属性が要素に結びついていない場合は `null` です。

## 例

次の例では、適切なボタンをクリックすると、 2 つの最初の要素の要素の修飾名が表示されます。

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Qualified name of the owner element of the attribute <code>xml:lang</code>:
  <output id="result">None.</output>
</p>
```

### JavaScript コンテンツ

```js
const elements = document.querySelectorAll(".struct");
const buttons = document.querySelectorAll("button");
const outputEl = document.querySelector("#result");

let i = 0;
for (const button of buttons) {
  const element = elements[i];
  button.addEventListener("click", () => {
    const attribute = element.attributes[0];
    outputEl.value = attribute.ownerElement.tagName.toLowerCase();
  });
  i++;
}
```

### 結果

{{ EmbedLiveSample('Example','100%',100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
