---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{CSSRef}}

**`@property`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、 API の [CSS Houdini](/ja/docs/Web/API/Houdini_APIs) の傘下にあるものです。開発者が明示的に {{cssxref('--*', 'CSS カスタムプロパティ')}}を定義し、プロパティ型のチェック、既定値の設定、プロパティが値を継承するかどうかの定義ができるようになっています。

`@property` ルールは、 JS を実行することなく、スタイルシートの中で直接カスタムプロパティの登録を表します。有効な `@property` ルールは、あたかも {{domxref('CSS.registerProperty_static', 'registerProperty()')}} が同等の引数で呼び出されたかのように、登録されたカスタムプロパティを生成します。

## 構文

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

### 記述子

- {{cssxref("@property/syntax","syntax")}}

  - : プロパティに許容される構文を記述します。 `<length>`, `<number>`, `<percentage>`, `<length-percentage>`, `<color>`, `<image>`, `<url>`, `<integer>`, `<angle>`, `<time>`, `<resolution>`, `<transform-function>`, `<custom-ident>` のいずれか、またはデータ型とキーワード値のリストです。

    `+` （スペース区切り）と `#` （カンマ区切り）の量化子は、値のリストが期待されることを示します。例えば、 `<color>#` は `<color>` 値のカンマ区切りのリストが期待される構文であることを意味しています。

    垂直線 (`|`) は期待された条件の「論理和」を表します。例えば `<length> | auto` は `<length>` または `auto` を受け入れ、 `<color># | <integer>#` はカンマで区切られた `<color>` 値のリスト、またはカンマで区切られた `<integer>` 値のリストを受け入れます。

- {{cssxref("@property/inherits","inherits")}}
  - : `@property` で指定されたカスタムプロパティの登録を既定で継承するかどうかを制御します。
- {{cssxref("@property/initial-value","initial-value")}}
  - : プロパティの初期値を設定します。

`@property` ルールには {{cssxref("@property/syntax","syntax")}} および {{cssxref("@property/inherits","inherits")}} 記述子を含める必要があります。どちらかがない場合は、 `@property` ルール全体が無効となり、無視されます。
{{cssxref("@property/initial-value","initial-value")}} 記述子は構文が [`*` 全称構文定義](https://drafts.css-houdini.org/css-properties-values-api/#universal-syntax-definition)（例えば `syntax: "*"`）である場合のみ省略可能で、それ以外の場合は必須です。
`initial-vaue` 記述子が必須である場合にこれが省略されると、ルール全体が無効となって無視されます。

未知の記述子は無効で無視されますが、 `@property` ルールは無効になりません。

## 形式文法

{{csssyntax}}

## 例

この例では、 `--item-size` と `--item-color` という 2 つのカスタムプロパティを定義し、以下の 3 つのアイテムのサイズ（幅と高さ）と背景色を定義します。

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

以下のコードは CSS の `@property` アットルールを使用して、 `--item-size` という名前のカスタムプロパティを定義します。このプロパティは初期値を `40%` に設定し、有効な値をパーセント値 ([`<percentage>`](/ja/docs/Web/CSS/percentage)) のみに制限します。つまり、アイテムのサイズの値として使用する場合、そのサイズは常に親のサイズからの相対値となります。このプロパティは継承可能です。

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

第 2 のカスタムプロパティである `--item-color` は、 CSS の代わりに [JavaScript](/ja/docs/Web/JavaScript) を使用して定義します。 JavaScript の {{domxref('CSS.registerProperty_static', 'registerProperty()')}} メソッドは、 `@property` アットルールと同等です。このプロパティは初期値が `aqua` で、[`<color>`](/ja/docs/Web/CSS/color_value) の値のみを受け入れるように定義されており、継承されません。

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

{{ EmbedLiveSample('examples', '100%', '250px') }}

2 つのカスタムプロパティ `--item-size: 20%` と `--item-color: orange;` が `container` の親に設定され、これがカスタムプロパティを定義したときに設定された `40%` と `aqua` の既定値を上書きします。サイズは継承できるように設定されていますが、色は継承できません。

アイテム one では、これらのカスタムプロパティはいずれも設定されていません。 `--item-size` は継承可能なので、親プロパティ `container` に設定されている値 `20%` が使用されます。他にも、 `--item-color` プロパティは継承できないので、親に設定されている値 `orange` は考慮されません。代わりに既定値の初期値 `aqua` が使用されます。

アイテム two については、両方のカスタムプロパティに CSS のグローバルキーワードが設定されています。これは、すべての値タイプで有効な値であるため、`syntax` 記述子の値に関係なく有効です。 `item-size` は `initial` に設定し、 `initial-value： 40%;` は `@property` 宣言で設定します。 `initial` 値はプロパティの `initialValue` 値が使用されることを意味しています。 `item-color` は `inherit` に設定されており、たとえカスタムプロパティが継承されないように設定されていても、明示的に親から `orange` 値を継承します。これがアイテム two がオレンジ色である理由です。

アイテム three では、 `--item-size` の値は `1000px` に設定されます。 `1000px` は {{cssxref("length")}} の値ですが、 `@property` 宣言では `<percentage>` であることが要求されているため、この宣言は無効であり無視され、すなわち親に設定されている継承可能な `20%` が使用されます。 `xyz` の値も不正な値です。 `registerProperty()` は `--item-color` を継承しないように設定したので、親の `orange` 値ではなく、既定値の `aqua` が使用されます。

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
- [CSS カスタムプロパティ（変数）の使用](/ja/docs/Web/CSS/Using_CSS_custom_properties)ガイド
- [カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/CSS_cascading_variables)モジュール
