---
title: "NavigatorUAData: mobile プロパティ"
short-title: mobile
slug: Web/API/NavigatorUAData/mobile
l10n:
  sourceCommit: ea68d8f5b27af9c11247dc7d8115c0cfa6bffd1b
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`mobile`** は {{domxref("NavigatorUAData")}} インターフェイスの読み取り専用プロパティで、この端末がモバイル端末であるかどうかを示す値を返します。

## 値

論理値です。モバイル端末なら `true` です。

## 例

以下の例では、 `mobile` の値をコンソールに表示します。

```js
console.log(navigator.userAgentData.mobile);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Sec-CH-UA-Mobile")}} ヘッダー（[低エントロピークライアントヒント](/ja/docs/Web/HTTP/Client_hints#低エントロピーヒント)）が同じ情報を保持しています。
