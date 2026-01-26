---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

**`@property`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、 API の [CSS Houdini](/ja/docs/Web/API/Houdini_APIs) の傘下にあるものです。開発者が明示的に [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) を定義し、プロパティ型のチェック、デフォルト値の設定、プロパティが値を継承するかどうかの定義ができるようになっています。

`@property` ルールは、 JavaScript を実行することなく、スタイルシートの中で直接カスタムプロパティの登録を表します。有効な `@property` ルールは、あたかも {{domxref('CSS.registerProperty_static', 'registerProperty()')}} が同等の引数で呼び出されたかのように、登録されたカスタムプロパティを生成します。

## 構文

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

カスタムプロパティの名前は {{cssxref("dashed-ident")}} であり、 `--` で始まって、そのあとに有効なユーザー定義の識別子が来ます。大文字小文字の区別があります。

### 記述子

- {{cssxref("@property/syntax","syntax")}}
  - : 登録済みカスタムプロパティで許可される値の型を記述する文字列。
    データ型名（`<color>`、`<length>`、`<number>`、など）と、量化子（`+`、`#`）、結合子 (`|`)、その他のカスタム識別子を取ることができます。
    詳しくは [syntax](/ja/docs/Web/CSS/Reference/At-rules/@property/syntax) 記述子のページを参照してください。
- {{cssxref("@property/inherits","inherits")}}
  - : `@property` で指定されたカスタムプロパティの登録がデフォルトで継承されるかどうかを制御する論理値です。
- {{cssxref("@property/initial-value","initial-value")}}
  - : プロパティの開始値を設定する値です。

## 解説

`@property` ルールが有効であるためには、次の条件を満たす必要があります。

- `@property` ルールには {{cssxref("@property/syntax","syntax")}} および {{cssxref("@property/inherits","inherits")}} 記述子を含める必要があります。
  どちらかがない場合は、 `@property` ルール全体が無効となり、無視されます。
- {{cssxref("@property/initial-value","initial-value")}} 記述子は、`syntax` 記述子の値が全称構文定義（すなわち、 `syntax: "*"`）である場合のみ省略可能です。
  `initial-value` 記述子が必須である場合にこれが省略されると、ルール全体が無効となって無視されます。
- `syntax` 記述子の値が全称構文定義でない場合、{{cssxref("@property/initial-value","initial-value")}} 記述子は[計算上独立した](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent)値でなければなりません。
  これは、値が CSS に依存しない「グローバル」定義を除き、他の値に依存せずに計算値に変換することが可能というということです。
  例えば、`10px` は計算上独立しており、計算値に変換されても変化しません。`2in` も有効です。`1in` は常に `96px` と等価だからです。しかし、`3em` は無効です。なぜなら `em` の値は親要素の {{cssxref("font-size")}} に依存するからです。
- 未知の記述子は無効であり無視されますが、`@property` ルールが無効化することはありません。

## 形式文法

{{csssyntax}}

## 例

### `@property` を使用してカスタムプロパティを登録して使用

この例では、 `--item-size` と `--item-color` という 2 つのカスタムプロパティを定義し、以下の 3 つのアイテムのサイズ（幅と高さ）と背景色を定義します。

```html
<div class="container">
  <div class="item one">アイテム one</div>
  <div class="item two">アイテム two</div>
  <div class="item three">アイテム three</div>
</div>
```

以下のコードは CSS の `@property` アットルールを使用して、 `--item-size` という名前のカスタムプロパティを定義します。このプロパティは初期値を `40%` に設定し、有効な値をパーセント値 ({{cssxref("percentage")}}) のみに制限します。つまり、アイテムのサイズの値として使用する場合、そのサイズは常に親のサイズからの相対値となります。このプロパティは継承可能です。

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

第 2 のカスタムプロパティである `--item-color` は、 CSS の代わりに [JavaScript](/ja/docs/Web/JavaScript) を使用して定義します。 JavaScript の {{domxref('CSS.registerProperty_static', 'registerProperty()')}} メソッドは、 `@property` アットルールと同等です。このプロパティは初期値が `aqua` で、{{cssxref("&lt;color&gt;")}} の値のみを受け入れるように定義されており、継承されません。

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

アイテムのスタイル設定には、 2 つのカスタムプロパティを使用します。

```css
.container {
  display: flex;
  height: 200px;
  border: 1px dashed black;

  /* 親にカスタムプロパティの値を設定 */
  --item-size: 20%;
  --item-color: orange;
}

/* カスタムプロパティを使用して、アイテムのサイズと背景色を設定 */
.item {
  width: var(--item-size);
  height: var(--item-size);
  background-color: var(--item-color);
}

/* 要素自体にカスタムプロパティ値を設定 */
.two {
  --item-size: initial;
  --item-color: inherit;
}

.three {
  /* 無効な値 */
  --item-size: 1000px;
  --item-color: xyz;
}
```

{{ EmbedLiveSample('Using `@property` to register and use a custom property', '100%', '250px') }}

2 つのカスタムプロパティ `--item-size: 20%` と `--item-color: orange;` が `container` の親に設定され、これがカスタムプロパティを定義したときに設定された `40%` と `aqua` の既定値を上書きします。サイズは継承できるように設定されていますが、色は継承できません。

アイテム one では、これらのカスタムプロパティはいずれも設定されていません。 `--item-size` は継承可能なので、親プロパティ `container` に設定されている値 `20%` が使用されます。他にも、 `--item-color` プロパティは継承できないので、親に設定されている値 `orange` は考慮されません。代わりに既定値の初期値 `aqua` が使用されます。

アイテム two については、両方のカスタムプロパティに CSS のグローバルキーワードが設定されています。これは、すべての値タイプで有効な値であるため、`syntax` 記述子の値に関係なく有効です。 `item-size` は `initial` に設定し、 `initial-value: 40%;` は `@property` 宣言で設定します。 `initial` 値はプロパティの `initialValue` 値が使用されることを意味しています。 `item-color` は `inherit` に設定されており、たとえカスタムプロパティが継承されないように設定されていても、明示的に親から `orange` 値を継承します。これがアイテム two がオレンジ色である理由です。

アイテム three では、 `--item-size` の値は `1000px` に設定されます。 `1000px` は {{cssxref("length")}} の値ですが、 `@property` 宣言では `<percentage>` であることが要求されているため、この宣言は無効であり無視され、すなわち親に設定されている継承可能な `20%` が使用されます。 `xyz` の値も不正な値です。 `registerProperty()` は `--item-color` を継承しないように設定したので、親の `orange` 値ではなく、既定値の `aqua` が使用されます。

### カスタムプロパティ値のアニメーション

この例では、 `--progress` というカスタムプロパティを `@property` を使用して定義します。これはパーセント値 ({{cssxref("percentage")}}) を受け付け、初期値は `25%` です。`--progress` を使用して、{{cssxref("gradient/linear-gradient")}} 内の色経由点の位置値を定義し、緑色が終わり黒色が始まる位置を指定します。その後、`--progress` の値を 2.5 秒かけて `100%` までアニメーションさせ、進捗バーをアニメーションさせる効果を実現します。

```html
<div class="bar"></div>
```

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 25%;
}

.bar {
  display: inline-block;
  --progress: 25%;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #00d230 var(--progress),
    black var(--progress)
  );
  animation: progressAnimation 2.5s ease infinite;
}

@keyframes progressAnimation {
  to {
    --progress: 100%;
  }
}
```

{{ EmbedLiveSample('Animating a custom property value', '100%', '60px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("var")}}
- [CSS プロパティと値 API](/ja/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 型付きオブジェクトモデル](/ja/docs/Web/API/CSS_Typed_OM_API)
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
- [CSS カスタムプロパティ（変数）の使用](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)ガイド
- [カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)モジュール
