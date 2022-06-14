---
title: Attr.ownerElement
slug: Web/API/Attr/ownerElement
page-type: web-api-instance-property
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Attr.ownerElement
translation_of: Web/API/Attr/ownerElement
---
{{APIRef("DOM")}}

**`ownerElement`** は {{domxref("Attr")}} インターフェイスの読み取り専用プロパティで、この属性が所属する要素 ({{domxref("Element")}}) を返します。

### 値

この属性が所属する要素 ({{domxref("Element")}})、またはこの属性が要素に結びついていない場合は `null` です。

## 例

次の例では、適切なボタンをクリックすると、 2 つの最初の要素の要素の修飾名が表示されます。

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<button>Click me for &lt;svg&gt;…</button>
<button>Click me for &lt;label&gt;…</button>
<br><br>
Qualified name of the owner element of the attribute <code>xml:lang</code>: <output id="result"><i>None.</i></output>
```

### JavaScript コンテンツ

```js
const elements = document.getElementsByClassName("struct");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

function handleEvent(element) {
  return function(e) {
    attribute = element.attributes[0];
    result.value = attribute.ownerElement.tagName.toLowerCase();
  }
}

let i=0;
for (let button of buttons) {
  button.addEventListener('click', handleEvent(elements[i]));
  i++;
}
```

### 結果
{{ EmbedLiveSample('Example','100%',100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
