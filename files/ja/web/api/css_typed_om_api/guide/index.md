---
title: CSS 型付きオブジェクトモデルの使用
slug: Web/API/CSS_Typed_OM_API/Guide
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

**[CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)** は、 CSS 値を型付き JavaScript オブジェクトとして公開し、その値を効率的に操作できるようにします。

[CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)の値の文字列を、意味のある型付けされた JavaScript 表現に変換して戻す（{{domxref("HTMLElement")}} 経由）には大きなパフォーマンスのオーバーヘッドが発生する可能性があります。

CSS 型付きオブジェクトモデルは、（CSSOM の文字列操作ではなく）オブジェクト機能を提供し、型へのアクセス、メソッド、 CSS 値のオブジェクトモデルを提供することで、 CSS 操作をより論理的かつ効率的にします。

この記事では、その主要な機能のすべてを紹介します。

## computedStyleMap()

CSS 型付きオブジェクトモデル APIを使用すると、要素に影響を与えるすべての CSS プロパティと値（カスタムプロパティを含む）にアクセスすることができます。最初の例を作成し、 {{domxref('Element.computedStyleMap()', 'computedStyleMap()')}} を探索し、これがどのように機能するかを見てみましょう。

### すべてのプロパティと値の取得

#### HTML

まず、いくつかの HTML を用意します。リンクのある段落と、すべての CSS プロパティと値のペアを追加する定義リストです。

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

JavaScript を追加してスタイルのないリンクを取得し、`computedStyleMap()` を使ってリンクに影響を与えるすべての既定の CSS プロパティの値の定義リストを返します。

```js
// 要素を取得する
const myElement = document.querySelector("a");

// 注目する <dl> を取得する
const stylesList = document.querySelector("#regurgitation");

// computedStyleMap() ですべてのスタイルの計算値を取得する
const defaultComputedStyles = myElement.computedStyleMap();

// すべてのプロパティと値のマップを繰り返し、それぞれに<dt>と<dd>を追加する。
for (const [prop, val] of defaultComputedStyles) {
  // プロパティ
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // 値
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

`computedStyleMap()` メソッドは {{domxref('StylePropertyMapReadOnly')}} オブジェクトを返し、この [`size`](/ja/docs/Web/API/StylePropertyMapReadOnly/size) プロパティはマップ内にいくつプロパティを持つかを示します。スタイルマップを反復処理し、それぞれのプロパティと値に対して [`<dt>`](/ja/docs/Web/HTML/Element/dt) と [`<dd>`](/ja/docs/Web/HTML/Element/dd) をそれぞれ作成します。

#### 結果

[`computedStyleMap()` に対応しているブラウザー](/ja/docs/Web/API/Element/computedStyleMap#ブラウザーの互換性)では、全ての CSS プロパティと値のリストが表示されます。それ以外のブラウザーでは、リンクが表示されるだけです。

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

リンクの既定の CSS プロパティがいくつもあることが分かりましたか？ JavaScript の 2 行目を更新して、 {{htmlelement("a")}} ではなく {{htmlelement("p")}} を選択するようにしてみてください。 [`margin-top`](/ja/docs/Web/CSS/margin-top) と [`margin-bottom`](/ja/docs/Web/CSS/margin-bottom) の既定の計算値の違いに気が付くでしょう。

### .get() メソッド / カスタムプロパティ

この例では、いくつかのプロパティと値のみを取得するように更新してみましょう。まず、このサンプルに、カスタムプロパティと継承可能なプロパティなど、いくつかの CSS を追加することから始めましょう。

```css
p {
  font-weight: bold;
}

a {
  --color: red;
  color: var(--color);
}
```

すべてのプロパティを取得するのではなく、関心のあるプロパティの配列を作成し、 {{domxref('StylePropertyMapReadOnly.get()')}} メソッドを使用してそれぞれの値を取得しています。

```html hidden
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

```js
// 要素を取得する
const myElement = document.querySelector("a");

// 注目する <dl> を取得する
const stylesList = document.querySelector("#regurgitation");

// computedStyleMap() ですべてのスタイルの計算値を取得する
const allComputedStyles = myElement.computedStyleMap();

// 注目するプロパティの配列
const ofInterest = ["font-weight", "border-left-color", "color", "--color"];

// 注目するプロパティを反復処理する
for (const value of ofInterest) {
  // プロパティ
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(value));
  stylesList.appendChild(cssProperty);
  // 値
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(allComputedStyles.get(value)));
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample(".get_method_custom_properties", 120, 300)}}

実験のために {{cssxref('border-left-color')}} を入れましたが、すべてのプロパティを含めた場合、すべての値が既定値の [`currentcolor`](/ja/docs/Web/CSS/color_value) となり（{{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}}, {{cssxref('column-rule-color')}} 等を含む）、 `rgb(255, 0, 0)` を返します。リンクは段落のスタイルから `font-weight: bold;` を継承し、`font-weight: 700` としてリストアップされています。カスタムプロパティは、私たちの `--color: red` のように、プロパティです。そのため、 `get()` でアクセスすることができます。

カスタムプロパティはスタイルシートに書かれている通りの値を保持しますが、計算されたスタイルは計算値として表示されることに注意してください。 {{cssxref('color')}} は [`rgb()`](/ja/docs/Web/CSS/color_value) 値として表示され、 {{cssxref('font-weight')}} は {{cssxref('&lt;color&gt;', 'named color')}} を使用しても `bold` を使用しても `700` と返されます。

### CSSUnitValue と CSSKeywordValue

CSS 型付きオブジェクトモデルの威力は、値が単位から分離されていることです。文字列の値を解釈したり、連結したりすることは、過去のものになるかもしれません。スタイルマップ内のすべての CSS プロパティは値を保有します。値がキーワードの場合、返されるオブジェクトは [`CSSKeywordValue`](/ja/docs/Web/API/CSSKeywordValue) となります。値が数値の場合、 [`CSSUnitValue`](/ja/docs/Web/API/CSSUnitValue) が返されます。

`CSSKeywordValue` は `inherit`, `initial`, `unset` などのキーワードや、 `auto` や `grid` などの引用符のない文字列を定義するためのクラスです。このサブクラスは {{domxref("cssKeywordValue.value")}} を通じて `value` プロパティを提供します。

値が単位の型である場合は `CSSUnitValue` が返されます。これは、 `20px`、`40%`、`200ms`、`7` のような単位を持つ数値を定義するクラスです。これは、 `value` と `unit` という2つのプロパティで返される。この型を使うと、数値 - {{domxref('cssUnitValue.value')}} - とその単位 - {{domxref('cssUnitValue.unit')}} にアクセスすることができます。

プレーンな段落を書き、スタイルを適用せず、単位と数値の表を返して、その CSS プロパティのいくつかを調べてみましょう。

```html
<p>
   これは、いくらかの内容を持つ段落です。この例を Codepen や JSFiddle で開き、いくつかの特徴を変更してみてください。この段落の幅を指定したり、 ofInterest 配列に CSS プロパティを追加するなどして、いくつかの CSS を追加してみてください。
</p>
<table id="regurgitation">
  <thead>
    <tr>
      <th>プロパティ</th>
      <th>値</th>
      <th>単位</th>
    </tr>
</table>
```

注目しているそれぞれのプロパティについて、プロパティの名前をリストアップし、 `.get(propertyName).value` を使用して値を返します。そして、 `get()` が返すオブジェクトが `CSSUnitValue` である場合、 `.get(propertyName).unit` で取得した単位の型をリストアップしています。

```js
// 調べたい要素を得る
const myElement = document.querySelector("p");

// 出力先の表を取得する
const stylesTable = document.querySelector("#regurgitation");

// computedStyleMap() ですべてのスタイルの計算値を取得する
const allComputedStyles = myElement.computedStyleMap();

// 注目するプロパティの配列
const ofInterest = [
  "padding-top",
  "margin-bottom",
  "font-size",
  "font-stretch",
  "animation-duration",
  "animation-iteration-count",
  "width",
  "height",
];
// 注目するプロパティを反復処理
for (const value of ofInterest) {
  // create a row
  const row = document.createElement("tr");

  // プロパティ名を追加
  const cssProperty = document.createElement("td");
  cssProperty.appendChild(document.createTextNode(value));
  row.appendChild(cssProperty);

  // 単位のない値
  const cssValue = document.createElement("td");
  // 長い小数値は小数点以下第 1 位に縮小
  let propVal = allComputedStyles.get(value).value;
  propVal = propVal % 1 ? propVal.toFixed(1) : propVal;
  cssValue.appendChild(document.createTextNode(propVal));
  row.appendChild(cssValue);

  // 単位の種類
  const cssUnit = document.createElement("td");
  cssUnit.appendChild(
    document.createTextNode(allComputedStyles.get(value).unit),
  );
  row.appendChild(cssUnit);

  // 表に行を追加
  stylesTable.appendChild(row);
}
```

{{EmbedLiveSample("CSSUnitValue_and_CSSKeywordValue", 120, 300)}}

未対応のブラウザーをお使いの向けに、上記の出力結果を示しておきます。

| プロパティ                               | 値   | 単位        |
| ---------------------------------------- | ---- | ----------- |
| {{cssxref("padding-top")}}               | 0    | `px`        |
| {{cssxref("margin-bottom")}}             | 16   | `px`        |
| {{cssxref("font-size")}}                 | 16   | `px`        |
| {{cssxref("font-stretch")}}              | 100  | `%`         |
| {{cssxref("animation-duration")}}        | 0    | `px`        |
| {{cssxref("animation-iteration-count")}} | 1    | _number_    |
| {{cssxref("width")}}                     | auto | _undefined_ |
| {{cssxref("height")}}                    | auto | _undefined_ |

返される {{cssxref('&lt;length&gt;')}} の単位は `px` で、{{cssxref('&lt;percentage&gt;')}} の単位は `percent` で、{{cssxref('&lt;time&gt;')}} の単位は `s` （秒）、単位なしの {{cssxref('&lt;number&gt;')}} の単位は `number` となっていることが分かると思います。

段落の {{cssxref('width')}} や {{cssxref('height')}} は既定の `auto` なので、 [`CSSUnitValue`](/ja/docs/Web/API/CSSUnitValue) ではなく [`CSSKeywordValue`](/ja/docs/Web/API/CSSKeywordValue) として返されます。 `CSSKeywordValue` は unit プロパティを持たないので、このような場合には `get().unit` は `undefined` を返します。

もし `width` や `height` が `<length>` や `<percent>` で定義されていた場合は、 [`CSSUnitValue`](/ja/docs/Web/API/CSSUnitValue) の単位はそれぞれ `px` や `percent` となるはずです。

他にも型があります。

- [`<image>`](/ja/docs/Web/CSS/image) は {{domxref('CSSImageValue')}} を返します。
- [`<color>`](/ja/docs/Web/CSS/color_value) は {{domxref('CSSStyleValue')}} を返します。
- {{cssxref('transform')}} は `CSSTransformValue` を返します。
- [カスタムプロパティ](/ja/docs/Web/CSS/--*)は {{domxref('CSSUnparsedValue')}} を返します。

`CSSUnitValue` や `CSSKeywordValue` を使って、他のオブジェクトを作成することもできます。

## CSSStyleValue

`CSSStyleValue` は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model#css_typed_object_model) のインターフェイスで、型付きオブジェクトモデル API を通してアクセスできる全ての CSS 値、例えば、 {{domxref('CSSImageValue')}}, {{domxref('CSSKeywordValue')}}, {{domxref('CSSNumericValue')}}, {{domxref('CSSPositionValue')}}, {{domxref('CSSTransformValue')}}, {{domxref('CSSUnparsedValue')}} の基底クラスです。

2 つのメソッドがあります。

- {{domxref("CSSStyleValue.parse()")}}
- {{domxref("CSSStyleValue.parseAll()")}}

前述の通り、 `StylePropertyMapReadOnly.get('-customProperty')`は {{domxref('CSSUnparsedValue')}} を返します。CSSUnparsedValue` オブジェクトのインスタンスは、継承された {{domxref('CSSStyleValue.parse()')}} と {{domxref('CSSStyleValue.parseAll()')}} メソッドで解釈することが可能です。

いくつかのカスタムプロパティ、座標変換、`calc()`、その他の機能を持つ CSS の例を見てみましょう。ここでは、 {{domxref('console.log()')}} に出力される短い JavaScript スニペットを用いて、それらの型が何であるかを見ていきます。

```css
:root {
  --mainColor: hsl(198, 43%, 42%);
  --black: hsl(0, 0%, 16%);
  --white: hsl(0, 0%, 97%);
  --unit: 1.2rem;
}

button {
  --mainColor: hsl(198, 100%, 66%);
  display: inline-block;
  padding: var(--unit) calc(var(--unit) * 2);
  width: calc(30% + 20px);
  background: no-repeat 5% center url(magicwand.png) var(--mainColor);
  border: 4px solid var(--mainColor);
  border-radius: 2px;
  font-size: calc(var(--unit) * 2);
  color: var(--white);
  cursor: pointer;
  transform: scale(0.95);
}
```

ボタン（何もしないボタン）にクラスを追加してみましょう。

```html
<button>Styled Button</button>
```

```js hidden
// get the element
const button = document.querySelector("button");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();

// CSSMathSum Example
let btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'

// CSSTransformValue
let transform = allComputedStyles.get("transform");

console.log(transform); // CSSTransformValue {0: CSSScale, 1: CSSTranslate, length: 2, is2D: true}
console.log(transform.length); // 1
console.log(transform[0]); // CSSScale {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, is2D: true}
console.log(transform[0].x); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].y); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].z); // CSSUnitValue {value: 1, unit: "number"}
console.log(transform.is2D); // true

// CSSImageValue
let bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magicwand.png")

// CSSUnparsedValue
let unit = allComputedStyles.get("--unit");

console.log(unit);

let parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit);
console.log(parsedUnit.unit);
console.log(parsedUnit.value);
```

次の JavaScript で `StylePropertyMapReadOnly` を取得します。

```js
const allComputedStyles = document.querySelector("button").computedStyleMap();
```

以下の例では、 `allComputedStyles` を参照しています。

### CSSUnparsedValue

{{domxref('CSSUnparsedValue')}} は[カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)を表しています。

```js
// CSSUnparsedValue
const unit = allComputedStyles.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"
```

`get()` を呼び出すと、 `CSSUnparsedValue` 型でカスタムプロパティが返されます。 `1.2rem` の前にスペースがあることに注意してください。単位と値を取得するには、 `CSSUnitValue` が必要です。これは `CSSStyleValue.parse()` メソッドを使って `CSSUnparsedValue` を取得できます。

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

[`<button>`](/ja/docs/Web/HTML/Element/button) 要素は既定ではインライン要素ですが、サイズ調整を可能にするために [`display: inline-block;`](/ja/docs/Web/CSS/CSS_Display) を追加しています。 CSS では、`width: calc(30% + 20px);` を指定していますが、これは [`calc()`](/ja/docs/Web/CSS/calc) という関数で幅を定義しています。

この `width` を `get()` すると、[`CSSMathSum`](/ja/docs/Web/API/CSSMathSum) が返されます。 {{domxref('CSSMathSum.values')}} は {{domxref('CSSNumericArray')}} で、 2 つの `CSSUnitValues` があります。

{{domxref('CSSMathValue.operator')}} の値は `sum` です。

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue に CSSScale を付ける

また、 [`display: inline-block;`](/ja/docs/Web/CSS/CSS_Display) により座標変換もできるようになります。私たちの CSS では、 `transform: scale(0.95);` が {{cssxref('transform')}} 関数です。

```js
const transform = allComputedStyles.get("transform");

console.log(transform); // CSSTransformValue {0: CSSScale, 1: CSSTranslate, length: 2, is2D: true}
console.log(transform.length); // 1
console.log(transform[0]); // CSSScale {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, is2D: true}
console.log(transform[0].x); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].y); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].z); // CSSUnitValue {value: 1, unit: "number"}
console.log(transform.is2D); // true
```

`transform` プロパティを `get()` すると、 {{domxref('CSSTransformValue')}} を取得します。 `length` プロパティで座標変換関数の長さ（数）を問い合わせることができます。

長さが `1` であることから、 1 つの座標変換関数を表し、最初のオブジェクトを出力して `CSSScale` オブジェクトを取得します。 `x`、`y`、`z` の拡大率を問い合わせると、`CSSUnitValues` を取得できます。このシナリオでは、読み取り専用の `CSSScale.is2D` プロパティが `true` になっています。

もし、 `translate()`, `skew()`, `rotate()` の座標変換関数を追加すれば、長さは `4` になり、それぞれが `x`, `y`, `z` の値を持ち、 `.is2D` プロパティを持ったものになるでしょう。例えば、`transform: translate3d(1px, 1px, 3px)` が含まれていた場合、 `.get('transform')` は `CSSTranslate` を返し、その `CSSUnitValues` には `x`, `y`, `z` があり、読み取り専用の `.is2D` 属性は `false` になるでしょう。

### CSSImageValue

ボタンの背景画像は、魔法の杖の 1 種類です。

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magicwand.png")
```

`'background-image'` を `get()` すると、 {{domxref('CSSImageValue')}} が返されます。 CSS の {{cssxref('background')}} 一括指定プロパティを使っていますが、継承された {{domxref('Object.prototype.toString()')}} メソッドは、画像 `'url("magicwand.png")'` のみを返していることが分かります。

元の `url()` が相対パスであったとしても、返される値は画像への絶対パスであることに注意してください。背景画像がグラデーションや複数の背景画像でった場合、 `.get('background-image')` は `CSSStyleValue` を返すでしょう。 `CSSImageValue` は、単一の画像が存在し、その単一の画像宣言が URL である場合にのみ返されます。

### まとめ

これで、 CSS 型付きオブジェクトモデルを理解することができるはずです。さらに学ぶために[CSS 型付きオブジェクトモデル](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)の全てのインターフェイスを見てみてください。

## 関連情報

- [CSS 描画 API の使用](/ja/docs/Web/API/CSS_Painting_API/Guide)
