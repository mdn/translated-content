---
title: Attr.prefix
slug: Web/API/Attr/prefix
page-type: web-api-instance-property
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Attr.prefix
translation_of: Web/API/Attr/prefix
---
{{APIRef("DOM")}}

**`prefix`** は {{domxref("Attr")}} インターフェイスの読み取り専用プロパティで、この属性の名前空間接頭辞を返します。接頭辞が指定されていなければ `null` を返します。

接頭辞は、属性が作成されたときの大文字小文字に関わらず、常に小文字になります。

> **Note:** XML だけが名前空間に対応しています。 HTML は対応していません。つまり、 HTML 要素の属性の接頭辞は常に `null` になります。

また、`xml` （`xml:lang` 属性）、`xlink` （`xlink:href`, `xlink:show`, `xlink:target`, `xlink:title` 属性）、 `xpath` 名前空間だけに、 SVG と MathML 要素でのみ対応しています。

## 値

その属性が属する名前空間の接頭辞が入った文字列です。もしない場合は `null` を返します。

## 例

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<button>Click me for &lt;svg&gt;…</button>
<button>Click me for &lt;label&gt;…</button>
<br><br>
Prefix of the attribute <code>xml:lang</code>: <output id="result"><i>None.</i></output>
```

### JavaScript コンテンツ

```js
const elements = document.getElementsByClassName("struct");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

function handleEvent(element) {
  return function(e) {
    attribute = element.attributes[0];
    result.value = attribute.prefix;
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

- {{domxref("Attr.name")}} プロパティはこの属性の修飾名を返し、 {{domxref("Attr.localName")}} プロパティはこの属性の修飾名のローカル名の部分を返します。
- {{domxref("Element.prefix()")}} プロパティは {{domxref("Element")}} の名前空間接頭辞を返します。
