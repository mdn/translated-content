---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: 8318078e0cf65cd4d56e80376c03019dcb292dc1
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

**WebOTP API** は、特別な形式の SMS メッセージの受信時にワンタイムパスワードを生成することで、電話番号がユーザーのものであることを検証する方法を提供します。

## 概念と使用法

電話番号はアプリケーションがユーザーを識別する方法としてよく使用され、番号がユーザーのものであることを検証するため、SMS がよく使用されます。通常のシナリオでは、ユーザーにワンタイムパスワードを含むメッセージが送信されます。そして、ユーザーはこのパスワードを、番号がユーザーのものであることを検証するフォームにコピペしなければならないでしょう。

WebOTP API は、アプリケーションがパスワードをコピペなしで自動で受信して検証することを可能にし、この手続きで生じるイライラを解消します。

## インターフェイス

- {{domxref("OTPCredential")}}
  - : {{domxref("Credential")}} を継承し、新しいワンタイムパスワードが生成されたときに返す属性を持ちます。

## 例

この例では、SMS メッセージを受信し、ユーザーが許可すると、ワンタイムパスワードを含む {{domxref("OTPCredential")}} オブジェクトが返ります。そして、このパスワードがフォームに入力され、フォームが送信されます。

[電話機を使用してデモを体験する](https://glitch.com/edit/#!/web-otp?path=views%2Findex.html%3A55%3A8).

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric" />
```

```js
if ("OTPCredential" in window) {
  window.addEventListener("DOMContentLoaded", (e) => {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;
    const ac = new AbortController();
    const form = input.closest("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        ac.abort();
      });
    }
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
  });
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [Verify phone numbers on the web with WebOTP](https://web.dev/web-otp/)
- [Fill OTP forms within cross-origin iframes with WebOTP API](https://web.dev/web-otp-iframe/)
