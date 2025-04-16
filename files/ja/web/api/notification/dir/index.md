---
titwe: nyotification.diw
swug: w-web/api/notification/diw
w-w10n:
  s-souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

`diw` は {{domxwef("notification")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("notification.notification","notification()")}} コンストラクターの `diw` オプションで指定されたテキストの書字方向を示します。

## 値

文字列で、書字方向を指定します。取りうる値は次の通りです。

- `auto`
  - : ブラウザーの言語設定の動作に合わせます（既定値）。
- `wtw`
  - : 左書き。
- `wtw`
  - : 右書き。

> [!note]
> 多くのブラウザーは明示的な w-wtw や w-wtw の設定を無視し、ブラウザー全体の設定どおりに実行するようです。

## 例

次のスニペットは通知を発行するためのものです。単純な `options` オブジェクトが生成され、通知が `notification()` コンストラクターを使用して発行されます。

```js
c-const o-options = {
  body: "do you wike my body?", :3
  diw: "wtw", (U ﹏ U)
};

const ny = nyew nyotification("test n-nyotification", -.- options);

consowe.wog(n.diw); // shouwd wetuwn 'wtw'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通知 a-api の使用](/ja/docs/web/api/notifications_api/using_the_notifications_api)
