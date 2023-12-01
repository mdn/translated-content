---
title: syntax
slug: Web/CSS/@property/syntax
---

{{CSSRef}}{{SeeCompatTable}}

**`syntax`** は [CSS](/ja/docs/Web/CSS) の記述子で、 {{cssxref("@property")}} [アットルール](/ja/docs/Web/CSS/At-rule)を使用する上で必要であり、そのプロパティで許可される構文を記述します。

## 構文

以下のものはすべて、有効な構文の文字列です。

```css
syntax: "<color>"; /* 色を受け入れる */

syntax: "<length> | <percentage>"; /* 長さまたはパーセント値を受け入れるが、両者を組み合わせた calc 式は受け入れない */

syntax: "small | medium | large"; /* カスタム識別子で設定されたこれらの値の何れかを受け入れる */

syntax: "*"; /* 常に有効なトークン */
```

## 値

仕様で定義されている対応する構文を持つ文字列。対応する構文は [CSS 型](/ja/docs/Web/CSS/CSS_Types)のサブセットです。これらは一緒に使うこともできますし、いくつかの型を組み合わせて使うこともできます。

- `"<length>"`
  - : あらゆる有効な {{cssxref("&lt;length&gt;")}} の値です。
- `"<number>"`
  - : あらゆる有効な {{cssxref("&lt;number&gt;")}} の値です。
- `"<percentage>"`
  - : あらゆる有効な {{cssxref("&lt;percentage&gt;")}} の値です。
- `"<length-percentage>"`
  - : あらゆる有効な {{cssxref("&lt;length-percentage&gt;")}} の値です。
- `"<color>"`
  - : あらゆる有効な {{cssxref("&lt;color&gt;")}} の値です。
- `"<image>"`
  - : あらゆる有効な {{cssxref("&lt;image&gt;")}} の値です。
- `"<url>"`
  - : あらゆる有効な {{cssxref("url()","url()")}} の値です。
- `"<integer>"`
  - : あらゆる有効な {{cssxref("&lt;integer&gt;")}} の値です。
- `"<angle>"`
  - : あらゆる有効な {{cssxref("&lt;angle&gt;")}} の値です。
- `"<time>"`
  - : あらゆる有効な {{cssxref("&lt;time&gt;")}} の値です。
- `"<resolution>"`
  - : あらゆる有効な {{cssxref("&lt;resolution&gt;")}} の値です。
- `"<transform-function>"`
  - : あらゆる有効な {{cssxref("&lt;transform-function&gt;")}} の値です。
- `"<custom-ident>"`
  - : あらゆる有効な {{cssxref("&lt;custom-ident&gt;")}} の値です。
- `"<transform-list>"`
  - : 有効な {{cssxref("&lt;transform-function&gt;")}} の値のリストです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

`--my-color` {{cssxref('--*', 'カスタムプロパティ')}}に、 `<color>` の構文を使用して型チェックを追加します。

[CSS](/ja/docs/Web/CSS) の {{cssxref('@property')}} [アットルール](/ja/docs/Web/CSS/At-rule)を使用すると次のようになります。

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

[JavaScript](/ja/docs/Web/JavaScript) の {{domxref('CSS.registerProperty')}} を使用すると次のようになります。

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
- [CSS Houdini](/ja/docs/Web/Guide/Houdini)
