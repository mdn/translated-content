---
title: "CSSKeyframesRule: findRule() メソッド"
slug: Web/API/CSSKeyframesRule/findRule
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

**`findRule()`** は {{domxref("CSSKeyframeRule")}} インターフェイスのメソッドで、指定されたキーフレームセレクターに一致する {{domxref("CSSKeyFrameRule")}} を検索します。

## 構文

```js-nolint
findRule(select)
```

### 引数

- `select`

  - : 見つけるルールのキーフレームセレクターの入った文字列です。次のどちらかになります。

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
console.log(keyframes.findRule("to")); // CSSKeyframeRule オブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
