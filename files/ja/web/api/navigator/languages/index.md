---
title: Navigator.languages
slug: Web/API/Navigator/languages
original_slug: Web/API/NavigatorLanguage/languages
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`navigator.languages`** は読み取り専用プロパティで、ユーザーの推奨される言語を表す {{domxref("DOMString")}} の配列を返します。この言語は [BCP 47](http://tools.ietf.org/html/bcp47) 言語タグを使用して記述されています。返された配列の中では、設定で最も推奨される言語が最初に来るように並べられています。

{{domxref("Navigator.language","navigator.language")}} の値は返される配列の最初の要素です。

この値を変更すると、ユーザーの推奨言語が変更され、 {{event("languagechange")}} イベントが {{domxref("Window")}} オブジェクトに発行されます。

ユーザーのブラウザーからのすべての HTTP リクエストにある `Accept-Language` ヘッダーは、 `navigator.languages` プロパティと同じ値ですが、拡張された `qvalues` (quality values) フィールドのみが異なります (例えば `en-US;q=0.8`)。

## 構文

```js
preferredLanguages = globalObj.navigator.languages
```

## 例

```js
navigator.language   //"en-US"
navigator.languages  //["en-US", "zh-CN", "ja-JP"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("navigator.language")}}
- {{domxref("navigator")}}
- {{domxref("Window.onlanguagechange")}}
