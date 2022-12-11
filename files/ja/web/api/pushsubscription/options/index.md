---
title: PushSubscription.options
slug: Web/API/PushSubscription/options
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Push API")}}

{{domxref("PushSubscription")}} インターフェイスの **`options`** 読み取り専用プロパティは、サブスクリプションを作成するために用いられたオプションが入ったオブジェクトです｡

## 値

以下の値が入った読み取り専用の {{domxref("PushSubscriptionOptions")}} オブジェクトです。

- `userVisibleOnly`
  - : プッシュサブスクリプションがユーザーに見える効果を持つメッセージのみに使われるかどうかを表す {{jsxref("boolean")}} 値です。
- `applicationServerKey`
  - : プッシュサーバーがプッシュサーバーを通じてクライアントアプリケーションにメッセージを送信するのに用いる公開鍵です。この値は、アプリケーションサーバーで生成された署名用鍵ペアの一部であり、P-256 曲線上での楕円曲線デジタル署名 (ECDSA) で利用可能です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
