---
title: syntax
slug: Web/CSS/Reference/At-rules/@property/syntax
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`syntax`** は {{cssxref("@property")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules) の記述子で、登録された [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)に利用できる値を定義します。
これは、プロパティの指定値がどのように処理されて[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)が導出されるかを制御します。
必須の記述子です。欠落または無効な場合、`@property` ルール全体が不正となり無視されます。

## 構文

```css
/* データ型名 */
syntax: "<color>";

/* '|' 結合子で複数のデータ型を結合 */
syntax: "<length> | <percentage>";

/* 値の空白区切りのリスト */
syntax: "<color>+";

/* 値のカンマ区切りのリスト */
syntax: "<length>#";

/* キーワード */
syntax: "small | medium | large";

/* データ型とキーワードの組み合わせ */
syntax: "<length> | auto";

/* 全称構文値 */
syntax: "*";
```

### 値

許可される値を定義する文字列です（構文文字列と呼ばれています）。
次のいずれかです。

- 1 つ以上の構文成分文字列であり、次のいずれかにになります。
  - データ型名（山括弧で囲み、`<color>` または `<length>` のように書きます）
  - キーワード（山かっこなしで、`auto` や `none` のように書きます）
- 全称構文 `*`、これは任意の CSS 値を受け入れます。
  量化子を指定したり、他の構文成分と組み合わせたりすることはできません。

ｃ構文成分の名前は単独で使用することも、様々な方法で量化や結合を行うこともできます：

- `+` （スペース区切り）と `#` （カンマ区切り）の量化子は、値のリストが期待されることを示します。
  例えば、 `<color>#` は `<color>` 値のカンマ区切りのリストが期待される構文であることを意味しています。

- 垂直線 (`|`) は期待された条件の「論理和」を表します。
  例えば `<length> | auto` は `<length>` または `auto` を受け入れ、 `<color># | <integer>#` はカンマで区切られた `<color>` 値のリスト、またはカンマで区切られた `<integer>` 値のリストを受け入れます。

次の構文成分の名前に対応しています。

- `"<angle>"`
  - : あらゆる有効な {{cssxref("angle")}} の値です。
- `"<color>"`
  - : あらゆる有効な {{cssxref("&lt;color&gt;")}} の値です。
- `"<custom-ident>"`
  - : あらゆる有効な {{cssxref("&lt;custom-ident&gt;")}} の値です。
- `"<image>"`
  - : あらゆる有効な {{cssxref("image")}} の値です。
- `"<integer>"`
  - : あらゆる有効な {{cssxref("&lt;integer&gt;")}} の値です。
- `"<length>"`
  - : あらゆる有効な {{cssxref("&lt;length&gt;")}} の値です。
- `"<length-percentage>"`
  - : あらゆる有効な {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の値、および `<length>` と `<percentage>` を組み合わせた有効な {{cssxref("calc()")}} 式です。
- `"<number>"`
  - : あらゆる有効な {{cssxref("&lt;number&gt;")}} の値です。
- `"<percentage>"`
  - : あらゆる有効な {{cssxref("&lt;percentage&gt;")}} の値です。
- `"<resolution>"`
  - : あらゆる有効な {{cssxref("resolution")}} の値です。
- `"<string>"`
  - : あらゆる有効な {{cssxref("&lt;string&gt;")}} の値です。
- `"<time>"`
  - : あらゆる有効な {{cssxref("&lt;time&gt;")}} の値です。
- `"<transform-function>"`
  - : あらゆる有効な {{cssxref("&lt;transform-function&gt;")}} の値です。
- `"<transform-list>"`
  - : 有効な {{cssxref("&lt;transform-function&gt;")}} の値のリストです。
    これは `"<transform-function>+"` と等価です。
- `"<url>"`
  - : あらゆる有効な {{cssxref("url_value", "&lt;url&gt;")}} の値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 型チェック付きのカスタムプロパティの登録

この例は、`<color>` 値のみを許可するカスタムプロパティ `--my-color` を定義する方法を示しています。

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

[JavaScript](/ja/docs/Web/JavaScript) の {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}} を使用すると次のようになります。

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の {{cssxref("@property")}} 記述子: {{cssxref("@property/inherits","inherits")}} および {{cssxref("@property/initial-value","initial-value")}}
- [CSS プロパティと値 API](/ja/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 型付きオブジェクトモデル](/ja/docs/Web/API/CSS_Typed_OM_API)
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
