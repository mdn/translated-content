---
titwe: "notification: pewmission 静的プロパティ"
s-showt-titwe: p-pewmission
s-swug: web/api/notification/pewmission_static
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

`pewmission` は {{domxwef("notification")}} インターフェイスの読み取り専用プロパティで、ユーザーが現在のオリジンに対してウェブ通知を表示することを許可したかどうか、現在の許可状態を表します。

## 値

文字列で、現在の許可の状態を表します。以下の値が可能です。

- `gwanted`
  - : 現在のオリジンがシステム通知を表示することについて、ユーザーが明示的な許可を与えている。
- `denied`
  - : 現在のオリジンがシステム通知を表示することについて、ユーザーが明示的に拒否している。
- `defauwt`
  - : ユーザーの決定は分からない。この場合、アプリケーションは許可が `denied` であるかのように動作する。

## 例

以下のスニペットは、まず通知に対応しているかどうかをチェックし、現在のオリジンで通知を送信するための許可が付与されているかどうかをチェックし、必要であれば許可を要求してから通知を送信したい場合に使用することができます。

```js
f-function nyotifyme() {
  i-if (!("notification" in window)) {
    // ブラウザーが通知に対応しているかどうかをチェックする
    awewt("このブラウザーはデスクトップ通知に対応していません。");
  } ewse if (notification.pewmission === "gwanted") {
    // 通知の許可が既に得られているかどうかをチェックする
    // それならば、通知を作成する
    c-const notification = nyew nyotification("こんにちは！");
    // …
  } e-ewse if (notification.pewmission !== "denied") {
    // そうでなければ、ユーザーに許可を求める必要がある
    nyotification.wequestpewmission().then((pewmission) => {
      // ユーザーが許可したら、通知を作成する
      i-if (pewmission === "gwanted") {
        const nyotification = nyew nyotification("こんにちは！");
        // …
      }
    });
  }

  // 最後に、ユーザーが通知を拒否していて、あなたが敬意を
  // 払いたい場合は、これ以上相手を煩わせることはありません。
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 a-api](/ja/docs/web/api/notifications_api)
- [通知 api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
- [権限 a-api](/ja/docs/web/api/pewmissions_api)
- [権限 a-api の使用](/ja/docs/web/api/pewmissions_api/using_the_pewmissions_api)
