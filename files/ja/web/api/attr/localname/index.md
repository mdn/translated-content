---
title: "Attr: localName プロパティ"
slug: Web/API/Attr/localName
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`localName`** は {{domxref("Attr")}} インターフェイスのプロパティで、属性の*修飾名*の*ローカル部分*、すなわち属性の名前からその前の名前空間を外したものを返します。例えば、修飾名が `xml:lang` であった場合、要素が名前空間に対応していればローカル名は `lang` となります。

ローカル名は、属性の作成時に大文字であっても小文字であっても、常に小文字になります。

> [!NOTE]
> HTML は SVG と MathML の要素に対して、固定された一連の名前空間のみに対応しています。これらは `xml` （`xml:lang` 属性）、 `xlink` （`xlink:href`, `xlink:show`, `xlink:target`, `xlink:title` 属性）、`xpath` です。
>
> つまり、 HTML 要素の属性のローカル名は常にその修飾名と等しくなります。コロンは通常の文字として扱われます。 XML では、 SVG や MathML のように、コロンは接頭辞の終わりを表し、それ以前は名前空間となります。ローカル名は、修飾名と異なる場合があります。

## 値

属性の修飾名のローカル部分を表す文字列です。

## 例

次の例では、適切なボタンをクリックすると、 2 つの最初の要素の最初の属性のローカル名が表示されます。 {{SVGElement("svg")}} 要素は XML であり、名前空間に対応しているので、ローカル名 (`lang`) は修飾名 `xml:lang` と異なるものになります。 {{HTMLElement("label")}} 要素は HTML であり、名前空間に対応していないため、ローカル名と修飾名が共に `xml:lang` となります。

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>&lt;svg&gt; の場合の値を表示</button>
  <button>&lt;label&gt; の場合の値を表示</button>
</p>

<p>
  <code>xml:lang</code> 属性のローカル部分:
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
    outputEl.value = attribute.localName;
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

- {{domxref("Attr.name")}} プロパティはこの属性の修飾名を返し、 {{domxref("Attr.prefix")}} は名前空間接頭辞を返します。
- {{domxref("Element.localName()")}} プロパティは {{domxref("Element")}} のローカル名を返します。
