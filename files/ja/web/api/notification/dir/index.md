---
title: Notification.dir
slug: Web/API/Notification/dir
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

`dir` は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの `dir` オプションで指定されたテキストの書字方向を示します。

## 値

文字列で、書字方向を指定します。取りうる値は次の通りです。

- `auto`
  - : ブラウザーの言語設定の動作に合わせます（既定値）。
- `ltr`
  - : 左書き。
- `rtl`
  - : 右書き。

> [!NOTE]
> 多くのブラウザーは明示的な ltr や rtl の設定を無視し、ブラウザー全体の設定どおりに実行するようです。

## 例

次のスニペットは通知を発行するためのものです。単純な `options` オブジェクトが生成され、通知が `Notification()` コンストラクターを使用して発行されます。

```js
const options = {
  body: "Do you like my body?",
  dir: "rtl",
};

const n = new Notification("Test notification", options);

console.log(n.dir); // should return 'rtl'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
