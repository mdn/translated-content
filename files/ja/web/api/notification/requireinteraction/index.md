---
title: Notification.requireInteraction
slug: Web/API/Notification/requireInteraction
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

**`requireInteraction`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、ユーザーがクリックするか閉じるかするまで、通知が自動的に閉じずに残るべきであることを示す論理値を返します。

> [!NOTE]
> これは最初に、 {{domxref("Notification.Notification()")}} コンストラクターの option オブジェクトの `requireInteraction` が `true` の状態で生成されたときに設定されることがあります。

## 値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
