---
title: inherits
slug: Web/CSS/Reference/At-rules/@property/inherits
original_slug: Web/CSS/@property/inherits
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

**`inherits`** は [CSS](/ja/docs/Web/CSS) の記述子で、 {{cssxref("@property")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を使用するときには必要であり、 `@property` で指定されたカスタムプロパティの登録を既定で継承するかどうかを制御します。

## 構文

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}

@property --property-name {
  syntax: "<color>";
  inherits: true;
  initial-value: #c0ffee;
}
```

## 値

- `true`
  - : このプロパティは既定で継承されます。
- `false`
  - : このプロパティは既定で継承されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

`--my-color` {{cssxref('--*', 'カスタムプロパティ')}}に色としての型チェックと、既定値、そして値が継承されないことを追加します。

[CSS](/ja/docs/Web/CSS) の {{cssxref('@property')}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を使用すると次のようになります。

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

- [CSS プロパティと値 API](/ja/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 型付きオブジェクトモデル](/ja/docs/Web/API/CSS_Typed_OM_API)
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
