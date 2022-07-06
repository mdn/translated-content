---
title: CSSKeyframesRule.deleteRule()
slug: Web/API/CSSKeyframesRule/deleteRule
tags:
  - API
  - CSSOM
  - CSSKeyframesRule
  - CSS アニメーション
  - メソッド
  - リファレンス
browser-compat: api.CSSKeyframesRule.deleteRule
translation_of: Web/API/CSSKeyframesRule/deleteRule
---
{{APIRef("CSSOM") }}

**`deleteRule()`** は {{domxref("CSSKeyframeRule")}} インターフェイスのメソッドで、指定されたキーフレームセレクターに一致する {{domxref("CSSKeyFrameRule")}} を削除します。

## 構文

```js
CSSKeyframesRule.deleteRule(select);
```

### 引数

- `select`

  - : {{domxref("CSSOMString")}} で、削除するルールのキーフレームセレクターを指定します。次のうちのいずれかを指令します。

    - 0% から 100% までのパーセント値をカンマで区切ったリスト
    - または `from` か `to` のキーワード

    なお、指定するキーフレームセレクターの値の数と順序は、対象となるキーフレームルールのものと一致していなければなりません。ホワイトスペースは無視されます。

### 返値

None.

## 例

この CSS には keyframes アットルールがあります。これは `document.styleSheets[0].cssRules` で返される最初の {{domxref("CSSRule")}} になります。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返します。 `cssRules` プロパティは
 2 つのルールを持った {{domxref("CSSRuleList")}} を返します。

`deleteRule()` でルールを 1 つ削除した後は、 `cssRules` プロパティはルールを 1 つ持った {{domxref("CSSRuleList")}} を返します。

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
keyframes.deleteRule('to');
console.log(keyframes.cssRules); // 1 つのルールを持った CSSRuleList を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
