---
title: "URL: hash プロパティ"
short-title: hash
slug: Web/API/URL/hash
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("URL API") }}

**`hash`** は {{domxref("URL")}} インターフェイスのプロパティで、`'#'` の後に URL のフラグメント識別子が続く文字列を返します。

フラグメントは[パーセントデコード](https://ja.wikipedia.org/wiki/パーセントエンコーディング)されていません。 URL にフラグメント識別子がない場合、このプロパティには空文字列 (`""`) が入ります。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/href#Examples",
);
console.log(url.hash); // '#Examples' をログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
