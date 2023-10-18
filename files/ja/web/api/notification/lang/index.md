---
title: Notification.lang
slug: Web/API/Notification/lang
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`lang`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの `lang` オプションで指定された通知の言語を示します。

言語自体は文字列で{{RFC(5646, "言語識別タグ (BCP 47)")}} を表します。簡単なリファレンスとしては、 Sitepoint の [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) ページを見てください。

## 値

文字列で、言語タグを指定します。

## 例

次のスニペットは通知を発行するためのものです。単純な `options` オブジェクトが生成され、通知が `Notification()` コンストラクターを使用して発行されます。

```js
const options = {
  body: "Do you like my body?",
  lang: "en-US",
};

const n = new Notification("Test notification", options);

console.log(n.lang); // should return 'en-US'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
