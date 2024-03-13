---
title: OTPCredential.code
slug: Web/API/OTPCredential/code
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{SecureContext_Header}}{{APIRef("WebOTP API")}}{{SeeCompatTable}}

{{domxref("OTPCredential")}} インターフェイスの **`code`** プロパティは、ワンタイムパスワードを返します。

## 値

ワンタイムパスワードを表す文字列です。

## 例

以下のコードは、`code` の値で入力フォームの要素を埋めます。[シンプルなデモの一部としてこのコードを見る](https://glitch.com/edit/#!/web-otp?path=views%2Findex.html%3A55%3A8)

```js
navigator.credentials
  .get({
    otp: { transport: ["sms"] },
    signal: ac.signal,
  })
  .then((otp) => {
    input.value = otp.code;
    if (form) form.submit();
  })
  .catch((err) => {
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
