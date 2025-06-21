---
title: "WorkerGlobalScope: crypto プロパティ"
short-title: crypto
slug: Web/API/WorkerGlobalScope/crypto
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("Web Crypto API")}}

**`crypto`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、このワーカーの {{domxref("Crypto")}} オブジェクトを返します。このオブジェクトは、ウェブページが暗号に関連したサービスにアクセスできるようにします。

このプロパティ自体は読み取り専用ですが、そのメソッドすべて（加えて子オブジェクトのメソッドと {{domxref("SubtleCrypto")}}）は読み取り専用ではありません。そのため{{glossary("polyfill", "ポリフィル")}}による攻撃には脆弱です。

`crypto` はすべてのウィンドウで使用できますが、返される `Crypto` オブジェクトは保護されていないコンテキストで使用できる機能は 1 つしかありません。 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} メソッドです。一般的に、この API は保護されたコンテキストでのみ使用する必要があります。

## 値

{{domxref("Crypto")}} インターフェイスのインスタンスで、一般用途の暗号技術と強力な乱数生成器を提供します。

## 例

{{domxref("Window.crypto")}} のページの例を参照してください。ここでは `crypto` プロパティを使用して {{domxref("Crypto.getRandomValues", "getRandomValues()")}} メソッドにアクセスしています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Crypto")}} インターフェイス
- {{domxref("Window.crypto")}}
