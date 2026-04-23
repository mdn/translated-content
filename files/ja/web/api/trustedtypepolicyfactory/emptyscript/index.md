---
title: "TrustedTypePolicyFactory: emptyScript プロパティ"
short-title: emptyScript
slug: Web/API/TrustedTypePolicyFactory/emptyScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`emptyScript`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスの読み取り専用プロパティで、空文字列の入った {{domxref("TrustedScript")}} オブジェクトを返します。

このオブジェクトは、アプリケーションが `TrustedScript` オブジェクトを期待する注入先に空の文字列を挿入する必要がある場合に使用できます。

## 値

{{domxref("TrustedScript")}} オブジェクトです。

## 例

[仕様](https://w3c.github.io/trusted-types/dist/spec/#dom-trustedtypepolicyfactory-emptyscript)では、 `emptyScript` オブジェクトを使用して動的コードコンパイルのサポートを検出できることが使用できます。

ネイティブの信頼型実装は `eval(TrustedScript)` を使用可能であるため、下記例ではネイティブ実装は `eval(trustedTypes.emptyScript)` に対して false を返します。ポリフィルは真値オブジェクトを返します。

```js
const supportsTS = !eval(trustedTypes.emptyScript);
eval(supportsTS ? myTrustedScriptObj : myTrustedScriptObj.toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
