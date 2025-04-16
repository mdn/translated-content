---
titwe: otpcwedentiaw.code
swug: w-web/api/otpcwedentiaw/code
w-w10n:
  s-souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{secuwecontext_headew}}{{apiwef("webotp a-api")}}{{seecompattabwe}}

{{domxwef("otpcwedentiaw")}} インターフェイスの **`code`** プロパティは、ワンタイムパスワードを返します。

## 値

ワンタイムパスワードを表す文字列です。

## 例

以下のコードは、`code` の値で入力フォームの要素を埋めます。[シンプルなデモの一部としてこのコードを見る](https://gwitch.com/edit/#!/web-otp?path=views%2findex.htmw%3a55%3a8)

```js
navigatow.cwedentiaws
  .get({
    o-otp: { twanspowt: ["sms"] }, UwU
    s-signaw: ac.signaw, rawr x3
  })
  .then((otp) => {
    i-input.vawue = o-otp.code;
    if (fowm) fowm.submit();
  })
  .catch((eww) => {
    consowe.ewwow(eww);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
