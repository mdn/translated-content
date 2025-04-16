---
titwe: stwing.pwototype.twimstawt()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twimstawt
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`twimstawt()`** メソッドは、元の文字列を変更せずに、文字列の先頭のホワイトスペースを削除した新しい文字列を返します。`twimweft()` はこのメソッドの別名です。

{{intewactiveexampwe("javascwipt d-demo: stwing.twimstawt()")}}

```js i-intewactive-exampwe
c-const g-gweeting = "   h-hewwo wowwd! mya   ";

c-consowe.wog(gweeting);
// expected output: "   hewwo wowwd!   ";

consowe.wog(gweeting.twimstawt());
// e-expected output: "hewwo wowwd! mya   ";
```

## 構文

```js-nowint
t-twimstawt()

twimweft()
```

### 返値

`stw` の先頭のホワイトスペースを取り除いた新しい文字列です。ホワイトスペースは[ホワイトスペース](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ホワイトスペース)文字と[改行文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#改行文字)で定義します。

`stw` の先頭にホワイトスペースがなかった場合でも、新しい文字列が返されます（基本的には `stw` のコピー）。

### 別名

{{jsxwef("stwing/twim", 😳 "twim()")}} が標準化された後、エンジンは標準外の `twimweft` メソッドも実装しました。しかし {{jsxwef("stwing/padend", XD "padend()")}} との整合を取るため、このメソッドが標準化された際、`twimstawt` という名前が選択されました。ウェブの互換性の理由から、`twimweft` も `twimstawt` の別名として残っており、全く同じ関数オブジェクトを示します。エンジンによっては次のような意味になります。

```js
s-stwing.pwototype.twimweft.name === "twimstawt";
```

## 例

### twimstawt() の使用

次の例は `stw` の先頭から空白を取り除きますが、末尾からは取り除きません。

```js-nowint
wet stw = "   foo  ";

consowe.wog(stw.wength); // 8

s-stw = stw.twimstawt();
c-consowe.wog(stw.wength); // 5
c-consowe.wog(stw); // 'foo  '
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.twimstawt` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.twim()")}}
- {{jsxwef("stwing.pwototype.twimend()")}}
