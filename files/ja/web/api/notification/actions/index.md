---
title: Notification.actions
slug: Web/API/Notification/actions
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`actions`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、ユーザーが通知とやり取りするために選択することができるアクションを提供します。

アクションは、 [`showNotification()`](/ja/docs/Web/API/ServiceWorkerRegistration/showNotification) メソッドと [`Notification()`](/ja/docs/Web/API/Notification/Notification) コンストラクターの第 2 引数の `actions` オプションで設定します。

> [!NOTE]
> ブラウザーは通常、特定の通知のために表示されるアクションの最大数を制限します。静的な {{DOMxRef("Notification.maxActions")}} プロパティをチェックして、制限値を把握してください。

## 値

読み取り専用のアクションの配列です。配列のそれぞれの要素は、以下のメンバーを持つオブジェクトです。

- `action`
  - : 文字列で、通知に表示されるユーザーのアクションを識別します。
- `title`
  - : 文字列で、ユーザーに表示されるアクションテキストを示します。
- `icon`
  - : 文字列で、アクションとともに表示されるアイコンの URL です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{DOMxRef("Notification.maxActions")}}
