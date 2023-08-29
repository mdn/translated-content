---
title: "HTMLElement: style プロパティ"
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 2a91ffa06c42d17033ffc3bbc78424e14f025724
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("HTMLElement")}} の読み取り専用プロパティで、要素のインラインスタイルを {{domxref("CSSStyleDeclaration")}} オブジェクトの形で返します。このオブジェクトには、その要素のインラインの [`style` 属性](/ja/docs/Web/HTML/Global_attributes/style)で定義されている属性に値が割り当てられている、その要素のすべてのスタイルプロパティのリストが入っています。

一括指定プロパティは展開されます。`style="border-top: 1px solid black"` と設定すると、個別指定プロパティ ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}) が代わりに設定されます。

このプロパティは読み取り専用であり、{{domxref("CSSStyleDeclaration")}} オブジェクトを割り当てることはできないことを意味しています。それでも、文字列を直接 `style` プロパティに代入することで、インラインスタイルを設定することは可能です。この場合、文字列は {{domxref("CSSStyleDeclaration.cssText")}} に転送されます。この方法で `style` を使用すると、その要素のすべてのインラインスタイルが完全に上書きされます。

したがって、他のスタイル値を変えずに要素に固有のスタイルを追加するには、一般に {{domxref("CSSStyleDeclaration")}} オブジェクトに個々のプロパティを設定することをお勧めします。例えば、`element.style.backgroundColor = "red"` と書くことができます。

スタイル宣言は、`elt.style.color = null` のように、`null` または空文字列を設定することでリセットされます。

> **メモ:** CSS プロパティ名は以下のルールで JavaScript の識別子に変換されます。
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

// We loop through all styles (for…of doesn't work with CSStyleDeclaration)
for (const prop in elementStyle) {
  if (Object.hasOwn(elementStyle, prop)) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("Getting_style_information", "100", "115")}}

なお、`font-weight` は `elementStyle` の値として載っていませんが、これは要素自体の `style` 属性の中で定義されていないからです。また、`style` 属性で定義されている一括指定の {{cssxref("border-top")}} プロパティは、直接載っていないことに注意してください。代わりに、対応する 3 つの個別指定プロパティ ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}) に置き換えられています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("SVGElement.style")}}
