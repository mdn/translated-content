---
title: "HTMLElement: style プロパティ"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 2a91ffa06c42d17033ffc3bbc78424e14f025724
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("HTMLElement")}} の読み取り専用プロパティで、要素のインラインスタイルを、動的な {{domxref("CSSStyleDeclaration")}} オブジェクトの形で返します。このオブジェクトはその要素のすべてのスタイルプロパティの一覧を含み、要素のインラインの [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性で定義されている属性にのみ値が割り当てられています。

一括指定プロパティは展開されます。`style="border-top: 1px solid black"` と設定すると、代わりに個別指定プロパティ ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}) が設定されます。

このプロパティは読み取り専用であり、{{domxref("CSSStyleDeclaration")}} オブジェクトを代入することはできません。とはいえ、`style` プロパティに文字列を直接代入してインラインスタイルを設定することは可能です。この場合、文字列は {{domxref("CSSStyleDeclaration.cssText")}} に転送されます。この方法で `style` を使用すると、要素上のすべてのインラインスタイルが完全に上書きされます。

したがって、他のスタイル値を変えずに要素に固有のスタイルを追加するには、一般に {{domxref("CSSStyleDeclaration")}} オブジェクトに個々のプロパティを設定することをお勧めします。例えば、`element.style.backgroundColor = "red"` と書くことができます。

スタイル宣言は、`null`または空文字列に設定することでリセットされます。例えば `elt.style.color = null` のようにします。

> [!NOTE]
> CSS プロパティ名は以下のルールで JavaScript の識別子に変換されます。
>
> - プロパティが 1 語で構成されている場合は、そのままの形になります。`height` はそのまま（小文字で）残ります。`float` は JavaScript で予約語であるため、このプロパティ名は過去には `cssFloat` に変換されていました。現行のブラウザーではすべて、JavaScript で `float` を直接使用して CSS の `float` プロパティにアクセスすることに対応していますが、古いブラウザーでは `cssFloat` が使用されており、現在でも別名として対応しています。
> - プロパティがダッシュ区切りで複数の単語から構成されている場合は、ダッシュが削除されて{{Glossary("camel_case", "キャメルケース")}}へと変換されます。`background-attachment` は `backgroundAttachment` となります。
>
> `style` プロパティは、CSS カスケードにおいて、`style` 属性で設定されたインラインスタイル宣言と同じ優先順位を持ちます。

## 値

動的な {{domxref("CSSStyleDeclaration")}} オブジェクトです。

## 例

### スタイル情報の取得

次のコードスニペットは、要素の `style` プロパティで取得した値と、HTML 属性で設定された一連のスタイルの関係を示します。

```html
<!doctype html>
<html lang="en-US">
  <body style="font-weight:bold">
    <div style="border-top: 1px solid blue; color:red" id="elt">
      An example div
    </div>
    <pre id="out"></pre>
  </body>
</html>
```

```js
const element = document.getElementById("elt");
const out = document.getElementById("out");
const elementStyle = element.style;

// すべての要素のスタイルを、 `for...in` を使用して走査
for (const prop in elementStyle) {
  // プロパティが CSSStyleDeclaration インスタンスに属しているか確認する
  // また、プロパティが（インラインスタイルを示す）数値インデックスであることを確認する
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

なお、`font-weight` は `elementStyle` の値として載っていませんが、これは要素自体の `style` 属性の中で定義されていないからです。また、`style` 属性で定義されている一括指定の {{cssxref("border-top")}} プロパティは、直接載っていないことに注意してください。代わりに、対応する 3 つの個別指定プロパティ ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}) に置き換えられています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("SVGElement.style")}}
- {{domxref("MathMLElement.style")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- HTML の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性
