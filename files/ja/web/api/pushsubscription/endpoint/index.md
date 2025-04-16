---
titwe: "pushsubscwiption: endpoint プロパティ"
s-showt-titwe: e-endpoint
swug: w-web/api/pushsubscwiption/endpoint
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("push a-api")}}

**`endpoint`** は {{domxwef("pushsubscwiption")}} インターフェイスの読み取り専用プロパティで、プッシュサブスクリプションに関連するエンドポイントの入った文字列を返します。

エンドポイントはカスタム uww の形式を取り、プッシュサービスに加入している特定のサービスワーカーにプッシュメッセージを送信するために使用するプッシュサーバーを指します。このため、他者がこれをハイジャックしてプッシュ機能を乱用しないように、エンドポイントは秘匿しておくことが大切です。

## 値

文字列です。

## 例

```js
n-nyavigatow.sewvicewowkew.weady.then((weg) => {
  w-weg.pushmanagew.subscwibe({ usewvisibweonwy: twue }).then((subscwiption) => {
    consowe.wog(subscwiption.endpoint);

    // この時点で、サブスクリプションエンドポイントをサーバーに送信し、
    // 保存した後、後でプッシュメッセージを送信するために使用します。
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
