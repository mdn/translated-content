---
title: OTPCredential
slug: Web/API/OTPCredential
l10n:
  sourceCommit: db72d5612ada1d40cde0de191389dde2fe062c23
---

{{APIRef("WebOTP API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref('WebOTP API','','',' ')}} の **`OTPCredential`** インターフェイスは、新しいワンタイムパスワードを取得したときに返す属性を持ちます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは、{{domxref("Credential")}} からもプロパティを継承します。_

- {{domxref("OTPCredential.code")}} {{Experimental_Inline}}
  - : ワンタイムパスワードです。

### イベントハンドラー

なし

## インスタンスメソッド

なし

## 例

以下のコードは、SMS の受信時にブラウザーの許可手続きを起動します。許可が得られると、{{jsxref("Promise")}} が `OTPCredential` オブジェクトで解決します。[このコードをシンプルなデモの一部として見る](https://glitch.com/edit/#!/web-otp?path=views%2Findex.html%3A55%3A8)

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
