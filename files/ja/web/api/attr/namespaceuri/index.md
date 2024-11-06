---
title: "Attr: namespaceURI プロパティ"
slug: Web/API/Attr/namespaceURI
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`namespaceURI`** は {{domxref("Attr")}} インターフェイスの読み取り専用プロパティで、この属性の名前空間 URI を返し、この要素が名前空間にない場合は `null` を返します。

名前空間 URI は {{domxref("Attr")}} の作成時に設定され、変更することができません。
名前空間付きの属性は、 {{domxref("Element.setAttributeNS()")}} で作成することができます。

> [!NOTE]
> 属性は、装着されている要素から名前空間を継承しません。
> 属性に明示的に名前空間が与えられなかった場合は、名前空間なしになります。

ブラウザーは名前空間の検証そのものは行いませんし、強制もしません。必要な検証を行うのは JavaScript アプリケーションに任されています。また、名前空間接頭辞は一度特定の属性ノードに関連づけられると、変更することができないので注意してください。

## 値

文字列で、この属性の名前空間 URI が入ります。この要素が名前空間にない場合は `null` を返します。

## 例

次の例は、HTML 要素と SVG 要素の場合で、接頭辞つきの属性の結果を示しています。
HTML は名前空間を扱わないので、この場合、常に `null` を返します。
SVG 要素の場合は、 XML の名前空間 URI である `http://www.w3.org/XML/1998/namespace` を返します。

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>&lt;svg&gt; の値を表示</button>
  <button>&lt;label&gt; の値を表示</button>
</p>

<p>
  <code>xml:lang</code> 属性の名前空間 URI:
  <output id="result">なし。</output>
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
    outputEl.value = attribute.namespaceURI;
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

## 関連情報

- {{domxref("Attr.name")}} プロパティはこの属性の修飾名を返し、 {{domxref("Attr.localName")}} プロパティはこの属性の修飾名のローカル名の部分を返し、 {{domxref("Attr.prefix")}} は名前空間接頭辞を返します。
- {{domxref("Element.namespaceURI")}} プロパティは {{domxref("Element")}} について同等のものです。
- {{domxref("Element.setAttributeNS()")}} メソッドは、指定された属性を指定された名前空間で作成します。
