---
title: "NavigatorUAData: platform プロパティ"
short-title: platform
slug: Web/API/NavigatorUAData/platform
l10n:
  sourceCommit: ea68d8f5b27af9c11247dc7d8115c0cfa6bffd1b
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`platform`** は {{domxref("NavigatorUAData")}} インターフェイスの読み取り専用プロパティで、プラットフォームのブランド情報を返します。

## 値

プラットフォームのブランドを格納した文字列。
例えば `"Windows"` です。

## 例

以下の例は、 `platform` の値をコンソールに表示するものです。

```js
console.log(navigator.userAgentData.platform);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Sec-CH-UA-Platform")}} ヘッダー（[低エントロピークライアントヒント](/ja/docs/Web/HTTP/Client_hints#低エントロピーヒント)）が同じ情報を保持しています。
