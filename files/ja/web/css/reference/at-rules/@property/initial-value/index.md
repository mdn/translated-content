---
title: initial-value
slug: Web/CSS/Reference/At-rules/@property/initial-value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`initial-value`** は {{cssxref("@property")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)の記述子で、登録された [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)の初期値を指定します。
{{cssxref("@property/syntax", "syntax")}} 記述子の値が全称構文 (`*`) でない限り、必須の記述子です。
必須であるにもかかわらず欠落しているか不正な場合、`@property` ルール全体が無効となり無視されます。

## 構文

```css
/* Set initial color value */
initial-value: rebeccapurple;

/* Set initial length value */
initial-value: 16px;
```

### 値

{{cssxref("@property/syntax", "syntax")}} 記述子で指定された型に一致する値です。
例えば、`syntax` が `<color>` の場合、`initial-value` は有効な {{cssxref("color")}} 値でなければなりません。

`syntax` 記述子の値が全称構文定義でない場合、`initial-value` 記述子は[計算上独立した](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent)値でなければなりません。これは、CSS に依存しない「グローバル」定義を除き、それ以外にも他の値に依存せずに計算値に変換可能であるということです。例えば`10px` は計算上独立しており、計算値に変換されても変化しません。`2in` も同時に有効です。`1in` は常に `96px` と等価だからです。しかし `3em` は無効です。`em` の値は親要素の {{cssxref("font-size")}} に依存するためです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カスタムプロパティに初期値を設定

この例は、初期色値を `#c0ffee` とするカスタムプロパティ `--my-color` の定義方法を示しています。この初期値は、プロパティが継承されない場合 (`inherits: false`) かつ要素に他の値が設定されていない場合に使用されます。

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

- 他の {{cssxref("@property")}} 記述子: {{cssxref("@property/inherits","inherits")}} および {{cssxref("@property/syntax","syntax")}}
- [CSS プロパティと値 API](/ja/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 型付きオブジェクトモデル](/ja/docs/Web/API/CSS_Typed_OM_API)
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
