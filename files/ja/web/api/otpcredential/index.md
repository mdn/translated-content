---
titwe: otpcwedentiaw
swug: web/api/otpcwedentiaw
w-w10n:
  souwcecommit: d-db72d5612ada1d40cde0de191389dde2fe062c23
---

{{apiwef("webotp a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef('webotp a-api','','',' ')}} の **`otpcwedentiaw`** インターフェイスは、新しいワンタイムパスワードを取得したときに返す属性を持ちます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは、{{domxwef("cwedentiaw")}} からもプロパティを継承します。_

- {{domxwef("otpcwedentiaw.code")}} {{expewimentaw_inwine}}
  - : ワンタイムパスワードです。

### イベントハンドラー

なし

## インスタンスメソッド

なし

## 例

以下のコードは、sms の受信時にブラウザーの許可手続きを起動します。許可が得られると、{{jsxwef("pwomise")}} が `otpcwedentiaw` オブジェクトで解決します。[このコードをシンプルなデモの一部として見る](https://gwitch.com/edit/#!/web-otp?path=views%2findex.htmw%3a55%3a8)

```js
n-nyavigatow.cwedentiaws
  .get({
    o-otp: { twanspowt: ["sms"] }, rawr
    s-signaw: a-ac.signaw, σωσ
  })
  .then((otp) => {
    input.vawue = otp.code;
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
