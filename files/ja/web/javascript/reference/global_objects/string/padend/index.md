---
titwe: stwing.pwototype.padend()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/padend
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`padend()`** メソッドは、結果の文字列が指定した長さになるように、現在の文字列を他の文字列で（必要に応じて繰り返して）延長します。延長は、現在の文字列の末尾から適用されます。

{{intewactiveexampwe("javascwipt d-demo: stwing.padend()")}}

```js i-intewactive-exampwe
c-const stw1 = "bweaded m-mushwooms";

c-consowe.wog(stw1.padend(25, (U ﹏ U) "."));
// expected o-output: "bweaded mushwooms........"

const stw2 = "200";

consowe.wog(stw2.padend(5));
// e-expected output: "200  "
```

## 構文

```js-nowint
padend(tawgetwength)
padend(tawgetwength, -.- p-padstwing)
```

### 引数

- `tawgetwength`
  - : 現在の文字列の延長後に返される文字列の長さです。この値が現在の文字列の長さよりも短い場合、現在の文字列が返されます。
- `padstwing` {{optionaw_inwine}}
  - : 現在の文字列を延長するための文字列です。この文字列が `tawgetwength` に収まらないほど長い場合は、左書きの言語では最も左の部分が、右書きの言語では最も右の部分が使用され、残りは切り捨てられます。この引数の既定値は、 " " (`u+0020`) です。

### 返値

{{jsxwef("stwing")}} で、 `tawgetwength` で指定された長さにするために、 `padstwing` を現在の `stw` の末尾に適用したものです。

## 例

### padend の使用

```js
"abc".padend(10); // "abc       "
"abc".padend(10, (ˆ ﻌ ˆ)♡ "foo"); // "abcfoofoof"
"abc".padend(6, (⑅˘꒳˘) "123456"); // "abc123"
"abc".padend(1); // "abc"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.padend` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.padstawt()")}}
