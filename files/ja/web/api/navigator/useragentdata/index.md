---
title: Navigator.userAgentData
slug: Web/API/Navigator/userAgentData
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{securecontext_header}}{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

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
