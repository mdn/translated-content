---
title: Attr.name
slug: Web/API/Attr/name
page-type: web-api-instance-property
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Attr.name
translation_of: Web/API/Attr/name
---
{{APIRef("DOM")}}

**`name`** は {{domxref("Attr")}} インターフェイスの読み取り専用プロパティで、属性の*修飾名*、すなわち属性名に、名前空間接頭辞があればそれが前に付いたものが返されます。例えば、ローカル名が `lang` で名前空間接頭辞が `xml` であった場合、返される修飾名は `xml:lang` になります。

修飾名は、属性が作成されたときの大文字小文字に関わらず、常に小文字になります。

### 値

この属性の修飾名を表す文字列です。

## 例

次の例では、適切なボタンをクリックすると、 2 つの最初の要素の最初の属性の修飾名が表示されます。

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<button>Click me for &lt;svg&gt;…</button>
<button>Click me for &lt;label&gt;…</button>
<br><br>
Qualified name of the attribute <code>xml:lang</code>: <output id="result"><i>None.</i></output>
```

### JavaScript コンテンツ

```js
const elements = document.getElementsByClassName("struct");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

function handleEvent(element) {
  return function(e) {
    attribute = element.attributes[0];
    result.value = attribute.name;
  }
}

let i=0;
for (let button of buttons) {
  button.addEventListener('click', handleEvent(elements[i]));
  i++;
}
```

{{ EmbedLiveSample('Example','100%',100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Attr.localName")}} プロパティはこの属性の修飾名のローカル名の部分を返し、 {{domxref("Attr.prefix")}} は名前空間接頭辞を返します。
- {{domxref("Element.tagName()")}} プロパティは {{domxref("Element")}} の修飾名を返します。
