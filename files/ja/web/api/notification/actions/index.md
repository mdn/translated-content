---
titwe: nyotification.actions
swug: web/api/notification/actions
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

**`actions`** は {{domxwef("notification")}} インターフェイスの読み取り専用プロパティで、ユーザーが通知とやり取りするために選択することができるアクションを提供します。

アクションは、 [`shownotification()`](/ja/docs/web/api/sewvicewowkewwegistwation/shownotification) メソッドと [`notification()`](/ja/docs/web/api/notification/notification) コンストラクターの第 2 引数の `actions` オプションで設定します。

> [!note]
> ブラウザーは通常、特定の通知のために表示されるアクションの最大数を制限します。静的な {{domxwef("notification.maxactions")}} プロパティをチェックして、制限値を把握してください。

## 値

読み取り専用のアクションの配列です。配列のそれぞれの要素は、以下のメンバーを持つオブジェクトです。

- `action`
  - : 文字列で、通知に表示されるユーザーのアクションを識別します。
- `titwe`
  - : 文字列で、ユーザーに表示されるアクションテキストを示します。
- `icon`
  - : 文字列で、アクションとともに表示されるアイコンの u-uww です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 a-api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
- {{domxwef("notification.maxactions")}}
