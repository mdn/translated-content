---
title: "Request: keepalive プロパティ"
short-title: keepalive
slug: Web/API/Request/keepalive
l10n:
  sourceCommit: 0ffc63a13598470ddb4a4d3281800eeb2bf6ae2b
---

{{APIRef("Fetch API")}}

**`keepalive`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエストの `keepalive` 設定（`true` または `false`）が含まれており、これは、リクエストが完全に完了する前にそのリクエストを開始したページが読み込まれなくなった場合に、関連するリクエストをブラウザーが維持するかどうかを示します。

これにより、例えば、ユーザーがページから離れたり閉じたりした場合でも、 {{domxref('Window.fetch','fetch()')}} リクエストによってセッションの終わりに分析データを送信することができます。
これは、同じ目的で {{domxref("Navigator.sendBeacon()")}} を使用するよりも、 [`POST`](/ja/docs/Web/HTTP/Methods/POST) 以外の HTTP メソッドを使用できる、リクエストプロパティをカスタマイズできる、フェッチのプロミス ({{jsxref("Promise")}}) が履行されるサーバーレスポンスにアクセスできる、といった利点があります。
[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)でも利用できます。

## 値

論理値で、このリクエストの `keepalive` の状態を示します。

## 例

### keepalive のリクエストを作成

次のスニペットでは、新しいリクエストを {{domxref("Request.Request", "Request()")}} コンストラクターで `keepalive` を `true` に設定して作成してから、変数へそのリクエストの `keepalive` の値を保存します。

```js
const options = {
  keepalive: true,
};

const myRequest = new Request("flowers.jpg", options);
let myKeepAlive = myRequest.keepalive; // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
