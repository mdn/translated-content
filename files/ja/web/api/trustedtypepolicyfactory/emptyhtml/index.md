---
title: "TrustedTypePolicyFactory: emptyHTML プロパティ"
short-title: emptyHTML
slug: Web/API/TrustedTypePolicyFactory/emptyHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`emptyHTML`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスの読み取り専用プロパティで、空文字列の入った {{domxref("TrustedHTML")}} オブジェクトを返します。

このオブジェクトは、アプリケーションが注入先に空の文字列を挿入する必要がある場合に使用できます。

## 値

{{domxref("TrustedHTML")}} オブジェクトです。

## 例

以下の例では、要素に空の文字列を挿入します。したがってポリシーを作成する必要はなく、`emptyHTML` プロパティを使用することで、信頼型オブジェクトが期待される場合に空の要素を挿入できます。

```js
el.innerHTML = trustedTypes.emptyHTML;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
