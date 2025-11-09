---
title: CSSKeyframesRule
slug: Web/API/CSSKeyframesRule
l10n:
  sourceCommit: 4da6c30730190b55e9b405711fedf6cdc755972d
---

{{APIRef("CSSOM")}}

**`CSSKeyframesRule`** インターフェイスは、 CSS アニメーションにおけるキーフレームの完全なセットを表すオブジェクトを記述します。これは {{cssxref("@keyframes")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)全体の内容に対応します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

- {{domxref("CSSKeyframesRule.name")}}
  - : キーフレームの名前を表します。 {{cssxref("animation-name")}} プロパティで使用されます。
- {{domxref("CSSKeyframesRule.cssRules")}} {{ReadOnlyInline}}
  - : リスト内のキーフレームの {{domxref("CSSRuleList")}} を返します。

## インスタンスメソッド

_祖先である {{domxref("CSSRule")}} からメソッドを継承しています。_

- {{domxref("CSSKeyframesRule.appendRule()")}}
  - : 現在の CSSKeyframesRule の中に新しいキーフレームを挿入します。引数は文字列で、{{cssxref("@keyframes")}} アットルールの項目と同じ書式でキーフレームを指定します。複数のキーフレームのルールが含まれていた場合は、 {{domxref("DOMException")}} が `SYNTAX_ERR` で発生します。
- {{domxref("CSSKeyframesRule.deleteRule()")}}
  - : 現在の CSSKeyframesRule からキーフレームのルールを削除します。引数は削除するキーフレームの見出しで、`0%` から `100%` までの間に解決する値を表す文字列です。
- {{domxref("CSSKeyframesRule.findRule()")}}
  - : 指定されたキーに対応するキーフレームのルールを返します。このキーは文字列で、返却するキーフレームの見出しを指定し、`0%` から `100%` までのパーセント値に解決するものです。そのキーフレームが存在しない場合は、 `findRule` は `null` を返します。

## 例

この CSS には keyframes アットルールがあります。これは `document.styleSheets[0].cssRules` で返される最初の {{domxref("CSSRule")}} になります。
`myRules[0]` は `CSSKeyframesRule` オブジェクト 1 つを返します。

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // CSSKeyframesRule
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyFrameRule")}}
