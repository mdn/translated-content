---
title: Attr.namespaceURI
slug: Web/API/Attr/namespaceURI
page-type: web-api-instance-property
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Attr.namespaceURI
translation_of: Web/API/Attr/namespaceURI
---
{{APIRef("DOM")}}

**`namespaceURI`** は {{domxref("Attr")}} インターフェイスの読み取り専用プロパティで、この属性の名前空間 URI を返し、この要素が名前空間にない場合は `null` を返します。

名前空間 URI は {{domxref("Attr")}} の作成時に設定され、変更することができません。
名前空間付きの属性は、 {{domxref("Element.setAttributeNS()")}} で作成することができます。

> **Note:** 属性は、装着されている要素から名前空間を継承しません。
> 属性に明示的に名前空間が与えられなかった場合は、名前空間なしになります。

ブラウザーは名前空間の検証そのものは行いませんし、強制もしません。必要な検証を行うのは JavaScript アプリケーションに任されています。また、名前空間接頭辞は一度特定の属性ノードに関連づけられると、変更することができないので注意してください。

## 値

文字列で、この属性の名前空間 URI をが入ります。この要素が名前空間にない場合は `null` を返します。

## 例

次の例は、 HTML 要素と SVG 要素の場合で、接頭辞つきの属性の結果を示しています。
HTML は名前空間を扱わないので、この場合、常に `null` を返します。
SVG 要素の場合は、 XML の名前空間 URI である `http://www.w3.org/XML/1998/namespace` を返します。

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<button>Click me for &lt;svg&gt;…</button>
<button>Click me for &lt;label&gt;…</button>
<br><br>
URI of the attribute <code>xml:lang</code> namespace: <output id="result"><i>None.</i></output>
```

### JavaScript コンテンツ

```js
const elements = document.getElementsByClassName("struct");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

function handleEvent(element) {
  return function(e) {
    attribute = element.attributes[0];
    result.value = attribute.namespaceURI;
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

- {{domxref("Attr.name")}} プロパティはこの属性の修飾名を返し、 {{domxref("Attr.localName")}} プロパティはこの属性の修飾名のローカル名の部分を返し、 {{domxref("Attr.prefix")}} は名前空間接頭辞を返します。
- {{domxref("Element.namespaceURI")}} プロパティは {{domxref("Element")}} について同等のものです。
- {{domxref("Element.setAttributeNS()")}} メソッドは、指定された属性を指定された名前空間で作成します。
