---
title: "HTMLElement: style プロパティ"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 6ec00da93f656e1386f27507291bc6431540d97a
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("HTMLElement")}} の読み取り専用プロパティで、要素のインライン [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) を、ライブな {{domxref("CSSStyleProperties")}} オブジェクトの形で返します。
このオブジェクトを使用すると、要素のインラインスタイルを取得および設定することができます。

## 値

動的な {{domxref("CSSStyleProperties")}} オブジェクトです。

> [!NOTE]
> 以前のバージョンの仕様書では、{{domxref("CSSStyleDeclaration")}}（{{domxref("CSSStyleProperties")}} はここから派生しています）が返されていました。
> ブラウザーの対応状況については、[ブラウザーの互換性](#ブラウザーの互換性)の表をご覧ください。

`style` プロパティ自体は、`CSSStyleProperties` オブジェクトを置き換えることができないという意味で読み取り専用ですが、`style` プロパティに直接値を代入することは可能です。これは、その {{domxref("CSSStyleDeclaration/cssText", "cssText")}} プロパティに値を代入することと同等です。同時に、{{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} および {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} メソッドを使用して、`CSSStyleProperties` オブジェクトを変更することもできます。

## 解説

要素の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性で設定されたインラインスタイルの値は、返される {{domxref("CSSStyleProperties")}} オブジェクトの対応するプロパティに反映されます。

> [!NOTE]
> {{domxref("CSSStyleProperties")}} には、ブラウザーが対応している**すべての** [CSS プロパティ](/ja/docs/Web/CSS/Reference/Properties)について、ダッシュ付きの名前と、それに対応する{{Glossary("camel_case", "キャメルケース")}}形式の名前を持つプロパティが用意されています（インラインスタイルを持つプロパティだけではありません）。
> 対応するインラインスタイルを持たないプロパティは、`""` に設定されます。

要素の一括指定プロパティは、対応する個別指定プロパティに展開されます。
例えば、スタイルが `"border-top: 1px solid black"` である要素は、返されるオブジェクト内で、名前が {{cssxref("border-top")}} のプロパティおよび `borderTop`、および対応する個別指定プロパティ {{cssxref("border-top-color")}} および `borderTopColor`、 {{cssxref("border-top-style")}} および `borderTopStyle`、{{cssxref("border-top-width")}} および `borderTopWidth` として表されます。

他のスタイル値を変更せずに要素に特定のスタイルを追加するには、できれば、{{domxref("CSSStyleProperties")}} オブジェクトに対して個々のプロパティを設定した方がいいでしょう。
例えば、`element.style.backgroundColor = "red"` と記述できます。
スタイル宣言は、`null` または空文字列（例：`element.style.color = null`）に設定することでリセットされます。

`style` プロパティは、CSS カスケードにおいて、`style` 属性を通じて設定されるインラインスタイル宣言と同じ優先順位を持ちます。

## 例

### 基本的な使い方

このコード例は、要素のインラインスタイルを読み取る方法を示しています。
それぞれの場合、{{DOMxRef("CSSStyleDeclaration/getPropertyPriority", "getPropertyValue()")}} を使用してダッシュで区切られた名前付きのスタイルプロパティを読み取り、ドット演算子を使用してキャメルケースのプロパティを取得しています。

#### HTML

まず、{{htmlelement("div")}} 要素と、その中に含まれた要素を定義し、それぞれに一括指定と個別指定の両方を使用して異なるインラインスタイルを指定します。

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">div の例</div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

次のコードは、内部要素を取得し、そのスタイルを読み取り、ダッシュ名前付きおよびキャメルケース名付きの CSS スタイルプロパティをログ出力します。

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// 個別指定スタイル
log(`"border-top" = '${elementStyle.getPropertyValue("border-top")}'`);
log(`"borderTop" = '${elementStyle.borderTop}'`);

// 展開した個別指定スタイル
log(
  `"border-top-width" = '${elementStyle.getPropertyValue("border-top-width")}'`,
);
log(`"borderTopWidth" = '${elementStyle.borderTopWidth}'`);

log(
  `"border-top-style" = '${elementStyle.getPropertyValue("border-top-style")}'`,
);
log(`"borderTopStyle" = '${elementStyle.borderTopStyle}'`);

log(
  `"border-top-color" = '${elementStyle.getPropertyValue("border-top-color")}'`,
);
log(`"borderTopColor" = '${elementStyle.borderTopColor}'`);

// 元の一括指定スタイル
log(`"color" = '${elementStyle.getPropertyValue("color")}'`);
log(`"color" = '${elementStyle.color}'`);

// 親で定義
log(`"font-weight" = '${elementStyle.getPropertyValue("font-weight")}'`);
log(`"fontWeight" = '${elementStyle.fontWeight}'`);
```

#### 結果

結果は下記に示します。
それぞれの場合で、ダッシュ付きおよびキャメルケースの名前付きプロパティを使用して読み込まれたスタイルが同じであることがわかります。
同時に、要素の `style` 属性に対応する {{cssxref("border-top")}} プロパティが存在し、その各部分について個別指定プロパティが定義されていることも確認できます（{{cssxref("border-top-color")}}、 {{cssxref("border-top-style")}}、および {{cssxref("border-top-width")}} が定義されていることがわかります）。

{{EmbedLiveSample("Basic usage", "100", "280")}}

なお、`font-weight` は `CSSStyleProperties` 上で定義されています（他のすべての CSS プロパティも同様ですが、ここではそれらを記載していません）。
ただし、これはネストされた要素に対するインラインスタイルではないため、その値は空文字列（`""`）に設定されます。

### スタイル情報の列挙

この例では、{{domxref("CSSStyleProperties")}} のダッシュ名付きのプロパティを列挙する方法を示しています。

#### HTML

まず、{{htmlelement("div")}} 要素と、その中に入れ子になった要素を定義し、それぞれに一括指定と個別指定の両方のインラインスタイルを指定します。
これは前回の例と同じ HTML です。

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">div の例</div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

以下のコードは、`CSSStyleProperties` の反復可能なプロパティを反復処理し、その結果をログ出力します。

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// すべての要素のスタイルを、 `for...in` を使用して走査
for (const prop in elementStyle) {
  // プロパティが CSSStyleDeclaration インスタンスに属しているか確認する
  // また、プロパティが（インラインスタイルを示す）数値インデックスであることを確認する
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop, 10))
  ) {
    log(
      `${
        elementStyle[prop]
      } = '${elementStyle.getPropertyValue(elementStyle[prop])}`,
    );
  }
}
```

#### 結果

結果を下に示します。
なお、要素の個別指定 CSS プロパティのみが列挙値となっているので（インラインの一括指定プロパティは列挙値ではありません）、この点にご注意ください。

{{EmbedLiveSample("Enumerating style information", "100", "180")}}

### 境界スタイルを更新

```html
<div id="box"></div>

<button id="btn1">境界を 20px 幅にする</button>
<button id="btn2">境界を 5px 幅にする</button>
```

```css
#box {
  border: 5px solid green;
  width: 100px;
  height: 100px;
}
```

```js
function setBorderWidth(width) {
  document.getElementById("box").style.borderWidth = `${width}px`;
}

document.getElementById("btn1").addEventListener("click", () => {
  setBorderWidth(20);
});
document.getElementById("btn2").addEventListener("click", () => {
  setBorderWidth(5);
});
```

{{EmbedLiveSample("Updating border style", "", "200")}}

### スタイルの操作

この例では、HTML の段落要素の基本的なスタイルプロパティに、その要素の style オブジェクトおよびそのオブジェクトの CSS スタイルプロパティを使用してアクセスしています。これらは DOM から取得・設定が可能です。この場合、個々のスタイルを直接操作しています。また、{{domxref("document.styleSheets", "styleSheets")}} とそのルールを使用して、文書全体のスタイルを変更することもできます。

```html
<p id="pid">いくらかのテキスト</p>
<p><button type="button">テキストを変更</button></p>
```

```js
function changeText() {
  const p = document.getElementById("pid");

  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", () => {
  changeText();
});
```

{{EmbedLiveSample("Manipulating styles", "", "200")}}

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
