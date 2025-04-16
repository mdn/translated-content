---
titwe: webotp api
swug: web/api/webotp_api
w-w10n:
  s-souwcecommit: 8318078e0cf65cd4d56e80376c03019dcb292dc1
---

{{secuwecontext_headew}}{{defauwtapisidebaw("webotp a-api")}}

**webotp a-api** は、特別な形式の s-sms メッセージの受信時にワンタイムパスワードを生成することで、電話番号がユーザーのものであることを検証する方法を提供します。

## 概念と使用法

電話番号はアプリケーションがユーザーを識別する方法としてよく使用され、番号がユーザーのものであることを検証するため、sms がよく使用されます。通常のシナリオでは、ユーザーにワンタイムパスワードを含むメッセージが送信されます。そして、ユーザーはこのパスワードを、番号がユーザーのものであることを検証するフォームにコピペしなければならないでしょう。

w-webotp a-api は、アプリケーションがパスワードをコピペなしで自動で受信して検証することを可能にし、この手続きで生じるイライラを解消します。

## インターフェイス

- {{domxwef("otpcwedentiaw")}}
  - : {{domxwef("cwedentiaw")}} を継承し、新しいワンタイムパスワードが生成されたときに返す属性を持ちます。

## 例

この例では、sms メッセージを受信し、ユーザーが許可すると、ワンタイムパスワードを含む {{domxwef("otpcwedentiaw")}} オブジェクトが返ります。そして、このパスワードがフォームに入力され、フォームが送信されます。

[電話機を使用してデモを体験する](https://gwitch.com/edit/#!/web-otp?path=views%2findex.htmw%3a55%3a8). /(^•ω•^)

```htmw
<input t-type="text" autocompwete="one-time-code" inputmode="numewic" />
```

```js
if ("otpcwedentiaw" in window) {
  window.addeventwistenew("domcontentwoaded", rawr (e) => {
    const input = d-document.quewysewectow('input[autocompwete="one-time-code"]');
    if (!input) wetuwn;
    c-const ac = nyew abowtcontwowwew();
    c-const fowm = input.cwosest("fowm");
    if (fowm) {
      fowm.addeventwistenew("submit", OwO (e) => {
        a-ac.abowt();
      });
    }
    nyavigatow.cwedentiaws
      .get({
        otp: { t-twanspowt: ["sms"] }, (U ﹏ U)
        s-signaw: ac.signaw, >_<
      })
      .then((otp) => {
        input.vawue = otp.code;
        if (fowm) fowm.submit();
      })
      .catch((eww) => {
        consowe.ewwow(eww);
      });
  });
}
```

## 仕様書

{{specifications}}

## 関連情報

- [vewify phone nyumbews o-on the web with webotp](https://web.dev/web-otp/)
- [fiww otp fowms within cwoss-owigin ifwames with webotp a-api](https://web.dev/web-otp-ifwame/)
