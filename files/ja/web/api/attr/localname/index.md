---
title: Attr.localName
slug: Web/API/Attr/localName
page-type: web-api-instance-property
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Attr.localName
translation_of: Web/API/Attr/localName
---
{{APIRef("DOM")}}

**`localName`** は {{domxref("Attr")}} インターフェイスのプロパティで、属性の*修飾名*の*ローカル部分*、すなわち属性の名前からその前の名前空間を外したものを返します。例えば、修飾名が `xml:lang` であった場合、要素が名前空間に対応していればローカル名は `lang` となります。

ローカル名は、属性の作成時に大文字であっても小文字であっても、常に小文字になります。

> **Note:** HTML は SVG と MathML の要素に対して、固定された一連の名前空間のみに対応しています。これらは `xml` （`xml:lang` 属性）、 `xlink` （`xlink:href`, `xlink:show`, `xlink:target`, `xlink:title` 属性）、`xpath` です。
>
> つまり、 HTML 要素の属性のローカル名は常にその修飾名と等しくなります。コロンは通常の文字として扱われます。 XML では、 SVG や MathML のように、コロンは接頭辞の終わりを表し、それ以前は名前空間となります。ローカル名は、修飾名と異なる場合があります。

### 値

属性の修飾名のローカル部分を表す文字列です。

## 例

次の例では、適切なボタンをクリックすると、 2 つの最初の要素の最初の属性のローカル名が表示されます。 {{SVGElement("svg")}} 要素は XML であり、名前空間に対応しているので、ローカル名 (`lang`) は修飾名 `xml:lang` と異なるものになります。 {{HTMLElement("label")}} 要素は HTML で、名前空間に対応していないため、ローカル名と修飾名が共に `xml:lang` となります。

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<button>Click me for &lt;svg&gt;…</button>
<button>Click me for &lt;label&gt;…</button>
<br><br>
Local part of the attribute <code>xml:lang</code>: <output id="result"><i>None.</i></output>
```

### JavaScript コンテンツ

```js
const elements = document.getElementsByClassName("struct");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

function handleEvent(element) {
  return function(e) {
    attribute = element.attributes[0];
    result.value = attribute.localName;
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

## 関連情報

- {{domxref("Attr.name")}} プロパティはこの属性の修飾名を返し、 {{domxref("Attr.prefix")}} は名前空間接頭辞を返します。
- {{domxref("Element.localName()")}} プロパティは {{domxref("Element")}} のローカル名を返します。
