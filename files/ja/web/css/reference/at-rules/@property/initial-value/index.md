---
title: initial-value
slug: Web/CSS/Reference/At-rules/@property/initial-value
original_slug: Web/CSS/@property/initial-value
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

**`initial-value`** は [CSS](/ja/docs/Web/CSS) の記述子で、構文があらゆる有効なトークンストリームを受け入れない限り {{cssxref("@property")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を使用する上で必須です。そのプロパティの初期値を設定します。

`initial-value` として選択された値は、構文の定義に従って正しく解釈しなければなりません。したがって、もし構文が `<color>` であれば、初期値は有効な {{cssxref("color")}} 値でなければなりません。

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

選択された `syntax` に対して正しい値を持つ文字列です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

`--my-color` {{cssxref('--*', 'カスタムプロパティ')}}に、有効な色となる初期値を色として型チェックを追加します。

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
