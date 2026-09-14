---
title: "SVGElement: style プロパティ"
short-title: style
slug: Web/API/SVGElement/style
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("SVGElement")}} の読み取り専用プロパティで、要素のインラインスタイルを、動的な {{domxref("CSSStyleDeclaration")}} オブジェクトの形で返します。このオブジェクトはその要素のすべてのスタイルプロパティの一覧を含み、要素のインラインの [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性で定義されている属性にのみ値が割り当てられています。

一括指定プロパティは展開されます。`style="border-top: 1px solid black"` と設定すると、代わりに個別指定プロパティ ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}) が設定されます。

このプロパティは読み取り専用であり、{{domxref("CSSStyleDeclaration")}} オブジェクトを代入することはできません。とはいえ、`style` プロパティに文字列を直接代入してインラインスタイルを設定することは可能です。この場合、文字列は {{domxref("CSSStyleDeclaration.cssText")}} に転送されます。この方法で `style` を使用すると、要素上のすべてのインラインスタイルが完全に上書きされます。

したがって、他のスタイル値を変更することなく要素に特定のスタイルを追加するには、一般に {{domxref("CSSStyleDeclaration")}} オブジェクトに個々のプロパティを設定する方が望ましいでしょう。例えば、`element.style.backgroundColor = "red"` と書くことができます。

スタイル宣言は、`null`または空文字列に設定することでリセットされます。例えば `elt.style.color = null` のようにします。

> [!NOTE]
> CSS プロパティ名は以下のルールで JavaScript の識別子に変換されます。
>
> - プロパティが 1 語で構成されている場合は、そのままの形になります。`height` はそのまま（小文字で）残ります。
> - プロパティがダッシュ区切りで複数の単語から構成されている場合は、ダッシュが削除されて _キャメルケース_ へと変換されます。`background-attachment` は `backgroundAttachment` となります。
> - プロパティ `float` は JavaScript の予約語なので、 `cssFloat` に変換されます。
>
> `style` プロパティは、CSS カスケードにおいて、`style` 属性で設定されたインラインスタイル宣言と同じ優先順位を持ちます。

## 値

動的な {{domxref("CSSStyleDeclaration")}} オブジェクトです。

## 例

### スタイル情報の取得

次のコードは `style` 属性が {{domxref("CSSStyleDeclaration")}} の項目リストにどのように変換されるかを示しています。

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
- {{domxref("MathMLElement.style")}}
- {{domxref("SVGElement.attributeStyleMap")}}
