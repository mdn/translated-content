---
title: "@property"
slug: Web/CSS/@property
---

{{CSSRef}}{{SeeCompatTable}}

**`@property`** は [CSS](/ja/docs/Web/CSS) の{{cssxref("at-rule", "アットルール", "", 1)}}で、 API の [CSS Houdini](/ja/docs/Web/Guide/Houdini) の傘下にあるものです。開発者が明示的に {{cssxref('--*', 'CSS custom properties')}} を定義し、プロパティ型のチェック、既定値の設定、プロパティが値を継承するかどうかの定義ができるようになっています。

`property` ルールは、 JS を実行することなく、スタイルシートの中で直接カスタムプロパティの登録を表します。有効な `@property` ルールは、あたかも {{domxref('CSS.registerProperty')}} が同等のパラメータで呼び出されたかのように、登録されたカスタムプロパティを生成します。

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
  - : プロパティに許容される構文を記述します。
- {{cssxref("@property/inherits","inherits")}}
  - : `property` で指定されたカスタムプロパティの登録を既定で継承するかどうかを制御します。
- {{cssxref("@property/initial-value","initial-value")}}
  - : プロパティの初期値を設定します。

有効な `@property` ルールはカスタムプロパティの登録を表し、プロパティ名はこのルールに先行するものをシリアライズしたものです。

`@property` ルールは {{cssxref("@property/syntax","syntax")}} および {{cssxref("@property/inherits","inherits")}} 記述子を必要とします。どちらかがない場合は、ルール全体が無効となり、無視されます。 {{cssxref("@property/initial-value","initial-value")}} 記述子は構文が<a href="https://drafts.css-houdini.org/css-properties-values-api/#universal-syntax-definition">全称構文定義</a>である場合のみ省略可能で、それ以外の場合は必須です。その場合、存在しないとルール全体が無効となり、無視されます。

未知の記述子は無効で無視されますが、 `@property` ルールは無効になりません。

## 例

`--my-color` {{cssxref('--*', 'カスタムプロパティ')}}に色としての型チェックと、既定値、さらに値が継承されないことを追加します。

[CSS](/ja/docs/Web/CSS) の {{cssxref('@property')}} [アットルール]](/ja/docs/Web/CSS/At-rule)を使用する場合は次のようになります。

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

[JavaScript](/ja/docs/Web/JavaScript) の {{domxref('CSS.registerProperty')}} を使用する場合は次のようになります。

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## 形式文法

{{csssyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS Properties and Values API](/ja/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/ja/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/ja/docs/Web/Guide/Houdini)
