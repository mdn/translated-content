---
title: CSSKeyframesRule.findRule()
slug: Web/API/CSSKeyframesRule/findRule
tags:
  - API
  - CSSOM
  - CSSKeyframesRule
  - CSS アニメーション
  - メソッド
  - リファレンス
browser-compat: api.CSSKeyframesRule.findRule
translation_of: Web/API/CSSKeyframesRule/findRule
---
{{APIRef("CSSOM") }}

**`findRule()`** は {{domxref("CSSKeyframeRule")}} インターフェイスのメソッドで、して市荒れたキーフレームセレクターに一致する {{domxref("CSSKeyFrameRule")}} を検索します。

## 構文

```js
CSSKeyframesRule.findRule(select);
```

### 引数

- `select`

  - : {{domxref("CSSOMString")}} で、見つけるルールのキーフレームセレクターを指定します。次のどちらかになります。

    - 0% から 100% までのパーセント値をカンマで区切ったリスト
    - または `from` か `to` のキーワード

    なお、指定するキーフレームセレクターの値の数と順序は、対象となるキーフレームルールのものと一致していなければなりません。ホワイトスペースは無視されます。

### 返値

最後にルールに一致した {{domxref("CSSKeyframeRule")}} を返します。ルールが見つからなかった場合は、何も返されません。

## 例

この CSS には keyframes アットルールがあります。これは `document.styleSheets[0].cssRules` で返される最初の {{domxref("CSSRule")}} になります。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクト 1 つを返します。 findRule("to") を呼び出すと、 2 番目のルールを表す {{domxref("CSSKeyframeRule")}} が返されます。

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
console.log(keyframes.findRule('to'));  // CSSKeyframeRule オブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
