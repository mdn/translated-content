---
title: "PushSubscription: options プロパティ"
short-title: options
slug: Web/API/PushSubscription/options
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

**`options`** は {{domxref("PushSubscription")}} インターフェイスの読み取り専用プロパティで、サブスクリプションを作成するために用いられたオプションが入ったオブジェクトです｡

## 値

以下の値が入った読み取り専用の {{domxref("PushSubscriptionOptions")}} オブジェクトです。

- `userVisibleOnly`
  - : 論理値で、プッシュサブスクリプションがユーザーに見える効果を持つメッセージのみに使われるかどうかを表します。
- `applicationServerKey`
  - : プッシュサーバーがプッシュサーバーを通じてクライアントアプリケーションにメッセージを送信するのに用いる公開鍵です。この値は、アプリケーションサーバーで生成された署名用鍵ペアの一部であり、P-256 曲線上での楕円曲線デジタル署名 (ECDSA) で利用可能です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
