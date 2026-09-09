---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
l10n:
  sourceCommit: 703f1c68d3f3428ad2e5e442bfbae0eb88bcc201
---

{{APIRef("CSSOM")}}

**`CSSStyleProperties`** は [CSS オブジェクトモデル (CSSOM)](/ja/docs/Web/API/CSS_Object_Model) のインターフェイスで、要素で利用できるインラインスタイルや計算済みスタイル、あるいは CSS スタイルルールに関連付けられたスタイルを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("CSSStyleDeclaration")}} から継承したプロパティもあります。_

- 名前付きプロパティ
  - : ブラウザーが対応しているすべての CSS プロパティについての、ダッシュ区切り名付きプロパティおよびキャメルケース名のプロパティです。
- {{DOMxRef("CSSStyleProperties.cssFloat", "CSSStyleProperties.cssFloat")}}
  - : CSS の {{CSSxRef("float")}} プロパティの特別な別名です。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("CSSStyleDeclaration")}} から継承したメソッドがあります。_

## 解説

この型のオブジェクトには、ブラウザーが対応している**すべての** [CSSプロパティ](/ja/docs/Web/CSS/Reference/Properties)に対するダッシュ付きのプロパティがあります。これには、[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)および個別指定プロパティ、それに `-moz` や `-webkit` という接頭辞が付いたプロパティも含まれます。
これらには、{{DOMxRef("CSSStyleDeclaration")}} 基底クラスから継承されたメソッド（{{DOMxRef("CSSStyleDeclaration/getPropertyValue", "getPropertyValue()")}} や {{DOMxRef("CSSStyleDeclaration/setProperty", "setProperty()")}} など）を使用してアクセスできます。

さらに、ダッシュ区切りのプロパティにはそれぞれ、対応する{{glossary("camel case", "キャメルケース")}}形式の名前付きプロパティがあます。名前からダッシュを除去し、先頭の単語以降の各単語の頭文字を大文字にすることで生成されます。
これにより、例えば、CSS の `margin-top` プロパティには `style.marginTop` という構文でアクセスでき（ここで `style` は `CSSStyleProperties` です）、
より煩雑な `style.getPropertyValue("margin-top")` や `style["margin-top"]` を使用する必要はありません。
CSS プロパティ `float` は、JavaScript の予約キーワードであるため、`cssFloat` プロパティによって表されます。

要素の一括指定プロパティは、対応する個別指定プロパティに展開されます。
例えば、スタイルが `"border-top: 1px solid black"` である要素は、返されるオブジェクト内で、{{cssxref("border-top")}} および `borderTop` という名前のプロパティ、および対応する個別指定プロパティである {{cssxref("border-top-color")}} および `borderTopColor`、 {{cssxref("border-top-style")}} と `borderTopStyle`、および {{cssxref("border-top-width")}} と `borderTopWidth` として表されます。

値が定義されていないプロパティや属性は、デフォルトで空文字列 (`""`) となります。
インラインスタイル宣言（計算済みスタイルではない）を表すオブジェクトの場合、これは宣言ブロック内で定義されていませんすべてのスタイルを指します。

`CSSStyleProperties` オブジェクトのインスタンスは、以下の API を通じて公開されています。

- {{DOMxRef("HTMLElement.style")}}、{{domxref("SVGElement.style")}}、{{domxref("MathMLElement.style")}}: 単一の要素（例: `<div style="…">`）のインラインスタイルを取得または設定するために使用します。
- {{DOMxRef("Window.getComputedStyle()")}}: 要素の（読み取り専用の）計算済みスタイルを取得するために使用されます。これには、インラインスタイルと外部スタイルの両方の効果が含まれます。
- {{DOMxRef("CSSStyleRule.style")}}: スタイルルール ({{DOMxRef("CSSStyleRule")}}) のスタイルを取得および設定するために使用されます。

## 例

### 基本的な使い方

この例では、キャメルケースとダッシュ付きのプロパティの両方を使用して、要素のローカルスタイルおよび計算済みスタイルを取得・設定する方法を示しています。

#### HTML

HTML は、いくつかのスタイルが設定された {{htmlelement("div")}} を定義し、その中に、`font-weight` を `bold` に設定した別の要素を含んでいます。

```html
<div style="font-weight: bold;">
  <div style="border-top: 3px solid blue; color: red;margin:5px;" id="elt">
    div のコンテンツ。
    <br />
    内部: "border-top: 3px solid blue; color: red;margin:5px;".
    <br />
    外部: "font-weight: bold;"
  </div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 140px;
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

まず、ID が `"elt"` の要素のローカルスタイルと計算済みスタイルを取得します。

```js
const element = document.querySelector("#elt");
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element);
```

次に、ローカルスタイルと計算済みスタイルの両方について、ドット記法を使用して `CSSStyleProperties` の `borderTop` 一括指定プロパティを取得します。
キャメルケースのプロパティ名に対してドット記法を使用するのが、あらゆるプロパティにアクセスする最も簡単な方法です。

```js
// ドット記法を使用してスタイルを取得
const elemBorderTop = elementStyle.borderTop;
const compBorderTop = computedStyle.borderTop;

log('Format: Style = "Element" / "Computed"');
log(`"borderTop" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

同時に、{{DOMxRef("CSSStyleDeclaration/getPropertyPriority", "getPropertyValue()")}} メソッドやブラケット記法を使用しても、同じプロパティを取得できます。

```js
// ダッシュ区切り名のプロパティ値を使用してスタイルを取得
const elemBorderTop = elementStyle.getPropertyValue("border-top");
const compBorderTop = computedStyle.getPropertyValue("border-top");
log(`"border-top" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

以下のコードは、分かりやすいようにドット記法を使用することで、一括指定プロパティ `border-top` に対応するそれぞれの個別指定プロパティを取得します。

```js
// ドット記法で一括指定プロパティを取得する
const elemBorderTopWidth = elementStyle.borderTopWidth;
const compBorderTopWidth = computedStyle.borderTopWidth;
log(`"borderTopWidth" = "${elemBorderTopWidth}" / "${compBorderTopWidth}"'`);

const elemBorderTopColor = elementStyle.borderTopColor;
const compBorderTopColor = computedStyle.borderTopColor;
log(`"borderTopColor" = "${elemBorderTopColor}" / "${compBorderTopColor}"'`);

const elemBorderTopStyle = elementStyle.borderTopStyle;
const compBorderTopStyle = computedStyle.borderTopStyle;
log(`"borderTopStyle" = "${elemBorderTopStyle}" / "${compBorderTopStyle}"'`);

const elemFontWeight = elementStyle.fontWeight;
const compFontWeight = computedStyle.fontWeight;
log(`"fontWeight" = "${elemFontWeight}" / "${compFontWeight}"'`);
```

最後に、ドット記法を用いてプロパティの値を設定する方法を示します。
次の結果セクションでは、要素の下側の境界線が緑色の実線になっていることがわかります。

```js
// ドット記法で下側の境界線のスタイルを使用する
elementStyle.borderBottom = "5px solid green";
```

#### 結果

結果は下記の通りです。
対応するキャメルケース (`borderTop`) とダッシュ区切り名 (`border-top`) のプロパティの値が同じである点に注目してください。
個別指定プロパティのローカル値と計算済み値も、多くの場合同じですが、計算済みプロパティでは色の指定に `rgb()` 構文が使用されるほか、`font-weight` など、親要素 `<div>` に設定されたスタイルも追加で記載される点が異なります。

{{EmbedLiveSample("基本的な使い方", "100", "250")}}

### ダッシュ区切り名スタイルプロパティを列挙する

この例では、要素のダッシュ区切り名プロパティの値を、インラインスタイルと計算済みスタイルの両方について列挙する方法を示しています。

#### HTML

この HTML では、いくつかのスタイルが設定された {{htmlelement("div")}} を定義しており、その中に `font-weight` を設定する別の要素が入れ子になっています。
同時に、その要素のインラインスタイルや計算済みスタイルを取得するためのボタンも用意されています（さらに、リセットボタンやログ出力用の非表示コードも含まれています）。

```html-nolint
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    div の例
  </div>
</div>
<button id="inline_style" type="button">インラインスタイル</button>
<button id="computed_style" type="button">計算済みスタイル</button>
```

```html hidden
<button id="reset" type="button">リセット</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 300px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

function clearLog(text) {
  logElement.innerText = "";
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  clearLog();
});
```

#### JavaScript

このコードではまず、ID が `elt` の要素のプロパティを列挙するために使用する関数を定義します。
ここでは、{{domxref("CSSStyleDeclaration.getPropertyValue()")}} を使用して、数値インデックスを持つオブジェクトが持つ、ダッシュ区切り名のそれぞれのプロパティの値を取得します。

```js
function getPopulatedProperties(elementStyles) {
  for (const prop in elementStyles) {
    if (
      // プロパティが CSSStyleProperties インスタンスに属しているかどうかを調べる
      // プロパティに数値インデックスがあるかどうか調べる（インラインスタイル／ダッシュ区切り名）
      Object.hasOwn(elementStyles, prop) &&
      !Number.isNaN(Number.parseInt(prop, 10))
    ) {
      log(
        `${elementStyles[prop]} = '${elementStyles.getPropertyValue(
          elementStyles[prop],
        )}'`,
      );
    }
  }
}
```

次のコードは、`CSSStyleProperties` が定義されているかどうかを調べ、その結果をログに出力します。
定義されている場合は、要素のインラインスタイルや計算済みスタイルを取得するためのボタンイベントハンドラーを作成し、それらの名前と値をログに出力します。

```js
if (typeof window.CSSStyleProperties === "undefined") {
  log("このブラウザーは CSSStyleProperties に対応していません。");
} else {
  const element = document.querySelector("#elt");

  const inlineStyle = document.querySelector("#inline_style");
  inlineStyle.addEventListener("click", () => {
    clearLog();
    const elementStyle = element.style;
    getPopulatedProperties(elementStyle);
  });

  const computedStyle = document.querySelector("#computed_style");
  computedStyle.addEventListener("click", () => {
    clearLog();
    const compStyles = window.getComputedStyle(element);
    getPopulatedProperties(compStyles);
  });
}
```

#### 結果

ボタンを押すと、要素のインラインスタイルおよび計算済みスタイルについて、ダッシュで区切られたプロパティ名とその値が表示されます。
なお、インラインスタイルには、その要素自体で定義されたスタイルのみが記載されます。その他のプロパティはすべて値が `""` となり、表示されません。
計算済みスタイルには、親要素で定義された `font-weight` や、その他多くの計算済みスタイルも記載されます。

{{EmbedLiveSample("Enumerate dash-named style properties", "100", "400")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
