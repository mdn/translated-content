---
title: "SVGElement: style プロパティ"
short-title: style
slug: Web/API/SVGElement/style
l10n:
  sourceCommit: 929deef03eea02ae356a2b4c3952daa55ef14000
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("SVGElement")}} の読み取り専用プロパティで、その要素のインラインスタイルを {{domxref("CSSStyleDeclaration")}} オブジェクトの形で返します。これはその要素のすべてのスタイルプロパティのうち、この要素のインラインの [`style`](/ja/docs/Web/HTML/Global_attributes/style) 属性で定義されたプロパティに値が割り当てられているもののみが含まれます。

一括指定プロパティは展開されます。もし `style="border-top: 1px solid black"` が設定されると、代わりに個別指定プロパティ（{{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}）が設定されます。

このプロパティは読み取り専用ですので、 {{domxref("CSSStyleDeclaration")}} オブジェクトを代入することはできません。ただし、文字列を直接 `style` プロパティに代入することで、インラインスタイルを設定することは可能です。この場合、文字列は {{domxref("CSSStyleDeclaration.cssText")}} に転送されます。この方法で `style` を使用すると、要素上のすべてのインラインスタイルが完全に上書きされます。

したがって、他のスタイル値を変更することなく要素に特定のスタイルを追加するには、 {{domxref("CSSStyleDeclaration")}} オブジェクトに個々のプロパティを設定することをお勧めします。例えば、 `element.style.backgroundColor = "red"` と書くことができます。

スタイル宣言は、 `elt.style.color = null` のように、 `null` または空の文字列に設定することでリセットされます。

> **メモ:** CSS プロパティ名は、以下のルールで JavaScript の識別子に変換されます。
>
> - プロパティが 1 つの単語で構成されている場合、その単語はそのまま残ります `height` はそのまま（小文字のまま）です。
> - プロパティがダッシュで区切られた複数の単語で構成されている場合、ダッシュは削除され、{{Glossary("camel_case", "キャメルケース")}}に変換されます。 `background-attachment` は `backgroundAttachment` になります。
> - プロパティ `float` は JavaScript の予約語であるため、 `cssFloat` に変換されます。
>
> `style` プロパティは CSS のカスケードにおいて、 `style` 属性で設定されたインラインスタイル宣言と同じ優先順位を持ちます。

## 値

生きた {{domxref("CSSStyleDeclaration")}} オブジェクトです。

## 例

### スタイル情報の取得

次のコードスニペットは、 `style` 属性が {{domxref("CSSStyleDeclaration")}} の項目のリストに変換される方法を示しています。

```html
<svg
  width="50"
  height="50"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 250 250"
  width="250"
  height="250">
  <circle
    cx="100"
    cy="100"
    r="50"
    id="circle"
    style="fill: red; stroke: black; stroke-width: 2px;" />
</svg>
<pre id="out"></pre>
```

```js
const element = document.querySelector("circle");
const out = document.getElementById("out");
const elementStyle = element.style;

// We loop through all the element's styles using `for...in`
for (const prop in elementStyle) {
  // We check if the property belongs to the CSSStyleDeclaration instance
  // We also ensure that the property is a numeric index (indicating an inline style)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop))
  ) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("Getting_style_information", "100", "130")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("HTMLElement.style")}}
