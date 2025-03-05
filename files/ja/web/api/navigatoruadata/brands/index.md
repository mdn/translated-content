---
title: "NavigatorUAData: brands プロパティ"
short-title: brands
slug: Web/API/NavigatorUAData/brands
l10n:
  sourceCommit: 8ccdd482e4723b5393278bba686adc24d1769d0f
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`brands`** は {{domxref("NavigatorUAData")}} インターフェイスの読み取り専用プロパティで、ブランド情報の配列を返します。

## 値

各ブランドの以下の情報を含む配列です。

- `brand`
  - : ブランドの文字列です。例えば `"Google Chrome"` です。
- `version`
  - : バージョンの文字列です。例えば `"91"` です。

## 例

以下の例は、 {{domxref("NavigatorUAData.brands")}} の値をコンソールに表示するものです。

```js
console.log(navigator.userAgentData.brands);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Sec-CH-UA")}} ヘッダー（[低エントロピークライアントヒント](/ja/docs/Web/HTTP/Client_hints#低エントロピーヒント)）が同じ情報を保持しています。
