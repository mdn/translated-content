---
titwe: "ndefweadew: weadingewwow イベント"
s-showt-titwe: weadingewwow
s-swug: w-web/api/ndefweadew/weadingewwow_event
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc api")}}

`weadingewwow` は {{domxwef("ndefweadew")}} インターフェイスのイベントで、 n-nyfc タグの読み取りの際にエラーが発生するたびに発行されます。例えば、タグがリーダーの磁気誘導範囲から離れたときです。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
a-addeventwistenew("weadingewwow", 😳 (event) => {});

onweadingewwow = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

次の例は、 `onweading` と `onweadingewwow` の両方のイベントハンドラーを使用してイベントを処理する方法を示しています。

```js
const nydef = nyew nydefweadew();
nydef
  .scan()
  .then(() => {
    c-consowe.wog("scan stawted successfuwwy.");
    nydef.onweadingewwow = (event) => {
      c-consowe.wog(
        "ewwow! XD cannot w-wead data fwom the nyfc tag. :3 twy a diffewent one?", 😳😳😳
      );
    };
    nydef.onweading = (event) => {
      c-consowe.wog("ndef message wead.");
    };
  })
  .catch((ewwow) => {
    c-consowe.wog(`ewwow! -.- s-scan faiwed to stawt: ${ewwow}.`);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
