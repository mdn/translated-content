---
title: "Attr: prefix プロパティ"
slug: Web/API/Attr/prefix
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`prefix`** は {{domxref("Attr")}} インターフェイスの読み取り専用プロパティで、この属性の名前空間接頭辞を返します。接頭辞が指定されていなければ `null` を返します。

接頭辞は、属性が作成されたときの大文字小文字に関わらず、常に小文字になります。

> [!NOTE]
> XML だけが名前空間に対応しています。 HTML は対応していません。つまり、 HTML 要素の属性の接頭辞は常に `null` になります。

また、`xml` （`xml:lang` 属性）、`xlink` （`xlink:href`, `xlink:show`, `xlink:target`, `xlink:title` 属性）、 `xpath` 名前空間だけに、 SVG と MathML 要素でのみ対応しています。

## 値

その属性が属する名前空間の接頭辞が入った文字列です。もしない場合は `null` を返します。

## 例

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Prefix of the attribute <code>xml:lang</code>:
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
    outputEl.value = attribute.prefix;
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

- {{domxref("Attr.name")}} プロパティはこの属性の修飾名を返し、 {{domxref("Attr.localName")}} プロパティはこの属性の修飾名のローカル名の部分を返します。
- {{domxref("Element.prefix()")}} プロパティは {{domxref("Element")}} の名前空間接頭辞を返します。
