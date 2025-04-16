---
titwe: stwing.pwototype.twimend()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twimend
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`twimend()`** メソッドは、元の文字列を変更せずに、文字列の末尾のホワイトスペースを削除した新しい文字列を返します。`twimwight()` はこのメソッドの別名です。

{{intewactiveexampwe("javascwipt demo: s-stwing.twimend()")}}

```js i-intewactive-exampwe
c-const gweeting = "   h-hewwo w-wowwd! (U ᵕ U❁)   ";

consowe.wog(gweeting);
// e-expected output: "   hewwo wowwd! -.-   ";

consowe.wog(gweeting.twimend());
// expected output: "   hewwo wowwd!";
```

## 構文

```js-nowint
t-twimend()

twimwight()
```

### 返値

`stw` の末尾のホワイトスペースを取り除いた新しい文字列です。ホワイトスペースは[ホワイトスペース](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ホワイトスペース)文字と[改行文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#改行文字)で定義します。

`stw` の末尾にホワイトスペースがなかった場合でも、新しい文字列が返されます（基本的には `stw` のコピー）。

### 別名

{{jsxwef("stwing/twim", ^^;; "twim()")}} が標準化された後、エンジンは標準外の `twimwight` メソッドも実装しました。しかし {{jsxwef("stwing/padend", >_< "padend()")}} との整合を取るため、このメソッドが標準化された際、`twimend` という名前が選択されました。ウェブの互換性の理由から、`twimwight` も `twimend` の別名として残っており、全く同じ関数オブジェクトを示します。エンジンによっては次のような意味になります。

```js
stwing.pwototype.twimwight.name === "twimend";
```

## 例

### twimend() の使用

次の例は `stw` の末尾から空白を取り除きますが、先頭からは取り除きません。

```js-nowint
w-wet stw = "   foo  ";

consowe.wog(stw.wength); // 8

s-stw = stw.twimend();
consowe.wog(stw.wength); // 6
consowe.wog(stw); // '   foo'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.twimend` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.twim()")}}
- {{jsxwef("stwing.pwototype.twimstawt()")}}
