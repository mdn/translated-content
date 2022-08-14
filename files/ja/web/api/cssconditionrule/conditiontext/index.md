---
title: CSSConditionRule.conditionText
slug: Web/API/CSSConditionRule/conditionText
tags:
  - API
  - CSSOM
  - CSSConditionRule
  - プロパティ
  - リファレンス
browser-compat: api.CSSConditionRule.conditionText
translation_of: Web/API/CSSConditionRule/conditionText
---
{{ APIRef("CSSOM") }}

**`conditionText`** は {{domxref("CSSConditionRule")}} インターフェイスのプロパティで、この CSS ルールのテキストを返したり設定したりします。

## 値

{{domxref('CSSOMString')}} です。

## 例

次の例は、 `conditionText` の値を {{domxref("CSSMediaRule")}} インターフェイスを実装した {{domxref("CSSConditionRule")}} で取得・設定するデモを行います。

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let text = myRules[0].conditionText;
console.log(text); // "(min-width: 500px)"
text = "(min-width: 400px)";
console.log(text);  // "(min-width: 400px)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動的なスタイル情報の使用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
