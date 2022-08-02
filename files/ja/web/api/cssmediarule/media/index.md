---
title: CSSMediaRule.media
slug: Web/API/CSSMediaRule/media
tags:
  - API
  - CSSOM
  - CSSMediaRule
  - プロパティ
  - リファレンス
browser-compat: api.CSSMediaRule.media
translation_of: Web/API/CSSMediaRule/media
---
{{ APIRef("CSSOM") }}

**`media`** は {{domxref("CSSMediaRule")}} インターフェイスの読み取り専用プロパティで、 {{domxref("MediaList")}} でスタイル情報の出力先メディアを表します。

## 値

{{domxref("MediaList")}} です。

## 例

この CSS には、単一のスタイルルールを持つメディアクエリーが含まれています。これは `document.styleSheets[0].cssRules` が返す最初の {{domxref("CSSRule")}}  になります。
したがって、 `myRules[0].media` を呼び出すと、メディアクエリーを表す {{domxref("MediaList")}} オブジェクトを返します。

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); // a MediaList
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
