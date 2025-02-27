---
title: CSS プロパティと値 API
slug: Web/API/CSS_Properties_and_Values_API
l10n:
  sourceCommit: d74e7839bc166b9d652abc9cdcfe99de448efb2a
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

**CSS プロパティと値 API**（[CSS Houdini](/ja/docs/Web/API/Houdini_APIs) API の傘下）により、 {{cssxref('--*', 'CSS カスタムプロパティ')}}の登録において、開発者は明示的に、プロパティの型チェック、既定値、プロパティの値を継承の有無の登録を行うことができます。

## インターフェイス

- {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}}
  - : ブラウザーが {{cssxref('--*', 'CSS カスタムプロパティ')}}を構文解析する方法を定義します。 [JavaScript](/ja/docs/Web/JavaScript) の {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} を介してこのインターフェイスにアクセスします。
- {{cssxref('@property')}}
  - : ブラウザーが {{cssxref('--*', 'CSS カスタムプロパティ')}}を構文解析する方法を定義します。 [CSS](/ja/docs/Web/CSS) の {{cssxref('@property')}} [アットルール](/ja/docs/Web/CSS/At-rule)を介してこのインターフェイスにアクセスします。

## 例

次の例では、 {{cssxref('--*', 'CSS カスタムプロパティ')}} として `--my-prop` を {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} によって登録します。 `--my-prop` は CSS 色構文を使用し、既定値として `#c0ffee` があり、値を継承しないようにします。

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

[CSS](/ja/docs/Web/CSS) では次の {{cssxref('@property')}} [アットルール](/ja/docs/Web/CSS/At-rule)を使用して、同じ登録を行うことができます。

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS プロパティと値 API の使用](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 型付きオブジェクトモデル](/ja/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/ja/docs/Web/API/Houdini_APIs)
