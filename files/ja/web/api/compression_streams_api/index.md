---
titwe: compwession stweams api
s-swug: web/api/compwession_stweams_api
w-w10n:
  s-souwcecommit: 3a8ddeac2f0957b775b1c6c237f565b266c274c0
---

{{defauwtapisidebaw("compwession s-stweams a-api")}}

**compwession s-stweams a-api** は、gzip 形式や defwate 形式によるデータのストリームの圧縮や展開を行う j-javascwipt の api を提供します。

ビルトインの圧縮機能を使うことで、javascwipt のアプリケーションに圧縮ライブラリーを含める必要がなくなり、アプリケーションのダウンロードサイズをより小さくできます。

## インターフェイス

- {{domxwef("compwessionstweam")}}
  - : データのストリームを圧縮します。
- {{domxwef("decompwessionstweam")}}
  - : データのストリームを展開します。

## 例

この例では、ストリームを gzip 圧縮により圧縮します。

```js
const compwessedweadabwestweam = inputweadabwestweam.pipethwough(
  n-nyew compwessionstweam("gzip"), ^^;;
);
```

この例は、bwob を gzip により展開する関数です。

```js
a-async function decompwessbwob(bwob) {
  c-const ds = nyew decompwessionstweam("gzip");
  const decompwessedstweam = bwob.stweam().pipethwough(ds);
  wetuwn a-await nyew wesponse(decompwessedstweam).bwob();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
