---
title: "MathMLElement: style プロパティ"
short-title: style
slug: Web/API/MathMLElement/style
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("MathMLElement")}} インターフェイスの読み取り専用プロパティで、要素のインラインスタイルを生きた {{domxref("CSSStyleDeclaration")}} オブジェクトの形で返します。これには、要素のインラインの [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性で定義されている属性にのみ値が割り当てられている、その要素のすべてのスタイルプロパティのリストが含まれます。

一括指定プロパティは展開されます。`border-top: 1px solid black` を設定すると、個別指定プロパティ ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}) が代わりに設定されます。

このプロパティは読み取り専用のプロパティであり、つまり {{domxref("CSSStyleDeclaration")}} オブジェクトを代入することはできません。とはいえ、文字列を直接 `style` プロパティに代入することで、インラインスタイルを設定することは可能です。この場合、文字列は {{domxref("CSSStyleDeclaration.cssText")}} に変換されます。この方法で `style` を使用すると、要素上のすべてのインラインスタイルが完全に上書きされます。

したがって、他のスタイル値を変更することなく要素に固有のスタイルを追加するには、一般的には {{domxref("CSSStyleDeclaration")}} オブジェクトに個々のプロパティを設定する方が望ましいでしょう。例えば、`element.style.backgroundColor = "red"` と書くことができます。

スタイル宣言は、`elt.style.color = null`のように、`null`または空文字列に設定することでリセットされます。

> [!NOTE]
> CSS プロパティ名は、次のルールで JavaScript の識別子に変換されます。
>
> - プロパティが 1 つの単語で構成されている場合、その単語はそのまま残ります。`height` はそのままです（小文字）。
> - プロパティがダッシュで区切られた複数の単語で構成されている場合、ダッシュは除去され、{{Glossary("camel_case", "キャメルケース")}}に変換されます。`background-attachment` は `backgroundAttachment` になります。
> - プロパティ `float` は JavaScript の予約キーワードであるため、`cssFloat` に変換されます。
>
> `style` プロパティは CSS カスケードにおいて、`style` 属性で設定するインラインスタイル宣言と同じ優先順位になります。

## 値

生きた {{domxref("CSSStyleDeclaration")}} オブジェクトです。

## 例

### スタイル情報の取得

以下は `style` 属性が {{domxref("CSSStyleDeclaration")}} の項目リストにどのように対応させられるかを示すコードです。

```html
<math>
  <mrow>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi class="parameter" style="color: red; border-bottom: 1px solid">x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>x</mi>
  </mrow>
</math>
<pre id="out"></pre>
```

```js
const element = document.querySelector(".parameter");
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

- [動的スタイル情報](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("HTMLElement.style")}}
- {{domxref("SVGElement.style")}}
- {{domxref("MathMLElement.attributeStyleMap")}}
