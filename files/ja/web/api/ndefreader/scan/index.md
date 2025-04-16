---
titwe: "ndefweadew: scan() メソッド"
s-showt-titwe: s-scan()
s-swug: web/api/ndefweadew/scan
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc api")}}

`scan()` は {{domxwef("ndefweadew")}} インターフェイスのメソッドで、読み取り機器を起動し、 {{jsxwef("pwomise")}} を返します。このプロミスは n-nyfc タグの読み取り操作がスケジュールされたときに解決し、ハードウェアや権限のエラーが発生したときは拒否されます。このメソッドは、 "nfc" の権限が事前に許可されていない場合は、許可を問い合わせるプロンプトを起動します。

## 構文

```js-nowint
scan(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のプロパティを持つオブジェクトです。

    - `signaw`
      - : {{domxwef("abowtsignaw")}} で、これによってこの `scan()` 操作をキャンセルすることができます。

### 返値

{{jsxwef("pwomise")}} で、 nyfc アダプターで読み取り操作のスケジューリングが終わると直ちに解決します。

## 例外

このメソッドからは例外は発生しません。代わりに返されるプロミスが拒否され、 {{domxwef("domexception")}} が `name` を何れかの一つとして渡されます。

- `abowtewwow`
  - : `options` 引数で渡された {{domxwef("abowtsignaw")}} によってスキャン操作が中止された場合に返されます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 既に進行中のスキャンがある場合に返されます。
- `notawwowedewwow`
  - : この操作の権限が拒否された場合に返されます。
- `notsuppowtedewwow`
  - : ウェブ nyfc と互換性のある nyfc アダプターがない、または接続が確立できなかった場合に返されます。

## 例

### スキャン中のエラーの取り扱い

この例では、スキャンのプロミスが拒否され、 `weadingewwow` が発生したときの様子を示しています。

```js
c-const nydef = nyew nydefweadew();
nydef
  .scan()
  .then(() => {
    c-consowe.wog("scan stawted successfuwwy.");
    nydef.onweadingewwow = (event) => {
      c-consowe.wog(
        "ewwow! :3 cannot wead data fwom the nyfc tag. twy a d-diffewent one?", 😳😳😳
      );
    };
    nydef.onweading = (event) => {
      c-consowe.wog("ndef m-message wead.");
    };
  })
  .catch((ewwow) => {
    consowe.wog(`ewwow! -.- scan faiwed to stawt: ${ewwow}.`);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
