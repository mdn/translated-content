---
title: WorkerNavigator.userAgentData
slug: Web/API/WorkerNavigator/userAgentData
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

**`userAgentData`** は {{domxref("WorkerNavigator")}} インターフェイスの読み取り専用プロパティで、 {{domxref("NavigatorUAData")}} オブジェクトを返します。これを使用して、{{domxref("User-Agent Client Hints API", "ユーザーエージェントクライアントヒント API", "", 1)}} へアクセスすることができます。

## 値

{{domxref("NavigatorUAData")}} オブジェクトです。

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

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/)
