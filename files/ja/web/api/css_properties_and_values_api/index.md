---
title: CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API
---

CSS Properties and Values API（[CSS Houdini](/ja/docs/Web/Houdini) API の傘の一部）を使用すると、開発者は {{cssxref('--*', 'CSS カスタムプロパティ')}}を明示的に定義して、プロパティ型のチェック、デフォルト値、および値を継承するまたは継承しないプロパティを許可できます。

## インターフェイス

- {{domxref('CSS.registerProperty')}}
  - : ブラウザーが {{cssxref('--*', 'CSS カスタムプロパティ')}}を解析する方法を定義します。 JavaScript の {{domxref('CSS.registerProperty')}} を介してこのインターフェイスにアクセスします。
- {{cssxref('@property')}}
  - : ブラウザーが {{cssxref('--*', 'CSS カスタムプロパティ')}}を解析する方法を定義します。 CSS の {{cssxref('@property')}} を介してこのインターフェイスにアクセスします。

<!---->

## 例

次の例では、JavaScript で {{domxref('CSS.registerProperty')}} を使用して、{{cssxref('--*', 'CSS カスタムプロパティ')}} `--my-color` を色とし、デフォルト値を指定し、値を継承できないようにします。

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

次の {{cssxref('@property')}} を使用して、CSS で同じ登録を行うことができます。

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

個々のインターフェイスを参照

## 関連情報

- [CSS properties and values API の使用](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [CSS Painting API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/ja/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/ja/docs/Web/Houdini)
