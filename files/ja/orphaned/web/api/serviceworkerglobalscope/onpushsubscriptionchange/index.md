---
title: ServiceWorkerGlobalScope.onpushsubscriptionchange
slug: orphaned/Web/API/ServiceWorkerGlobalScope/onpushsubscriptionchange
original_slug: Web/API/ServiceWorkerGlobalScope/onpushsubscriptionchange
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`ServiceWorkerGlobalScope.onpushsubscriptionchange`** イベントは、アプリケーションのコントロールの外側で発生したプッシュサブスクリプションの変更を示すために発火されます。例えば、ブラウザーがプッシュサブスクリプションをリフレッシュしたときなどです。

以前は、プッシュサブスクリプションが無効化された時（または無効になろうとしている時）に発火されるイベントインターフェイスとして定義されていました。もし望むなら、これはプッシュメッセージの取得を継続するために、再講読する機会を提供します。たとえば、これはプッシュサービスがサブスクリプションに有効期限を設定した場合に発生します。

## 構文

```
ServiceWorkerGlobalScope.onpushsubscriptionchange = function() { ... }
self.addEventListener('pushsubscriptionchange', function() { ... })
```

## 例

```js
self.addEventListener('pushsubscriptionchange', function() {
  // 何かを実行する。一般的には、XHR や Fetch を通して
  // サーバーに新しいサブスクリプションの詳細を送ることで
  // 再サブスクライブする。
});
```

## 仕様

| 仕様                                                                                                                                                 | 状態                         | コメント                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Push API', '#widl-ServiceWorkerGlobalScope-onpushsubscriptionchange', 'onpushsubscriptionchange')}} | {{Spec2('Push API')}} | 初期定義（ノート： このイベントは Push API で仕様化されていますが、{{domxref("ServiceWorkerGlobalScope")}} を介してアクセスします）。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.onpushsubscriptionchange")}}

## 関連情報

- [Push API](/ja/docs/Web/API/Push_API)
