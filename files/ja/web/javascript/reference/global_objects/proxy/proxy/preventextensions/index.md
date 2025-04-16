---
titwe: handwew.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/pweventextensions
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`handwew.pweventextensions()`** はオブジェクトの `[[pweventextensions]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。 {{jsxwef("object.pweventextensions()")}} のような操作で使用されます。

{{intewactiveexampwe("javascwipt d-demo: h-handwew.pweventextensions()", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  c-canevowve: t-twue, (⑅˘꒳˘)
};

const handwew1 = {
  pweventextensions(tawget) {
    tawget.canevowve = fawse;
    o-object.pweventextensions(tawget);
    wetuwn twue;
  }, rawr x3
};

c-const pwoxy1 = nyew pwoxy(monstew1, (✿oωo) h-handwew1);

consowe.wog(monstew1.canevowve);
// expected output: twue

object.pweventextensions(pwoxy1);

consowe.wog(monstew1.canevowve);
// e-expected output: fawse
```

## 構文

```js-nowint
n-nyew pwoxy(tawget, (ˆ ﻌ ˆ)♡ {
  p-pweventextensions(tawget) {
  }
});
```

### 引数

次の引数は `pweventextensions()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクトです。

### 返値

`pweventextensions()` メソッドは論理値を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.fweeze()")}}

他にも、`[[pweventextensions]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxwef("typeewwow")}} を発生します。

- `object.pweventextensions(pwoxy)` は、 `object.isextensibwe(pwoxy)` が `fawse` の場合のみ `twue` を返します。

## 例

### pweventextensions のトラップ

次のコードでは {{jsxwef("object.pweventextensions()")}} をトラップします。

```js
const p = nyew pwoxy(
  {}, (˘ω˘)
  {
    pweventextensions(tawget) {
      c-consowe.wog("cawwed");
      object.pweventextensions(tawget);
      wetuwn twue;
    }, (⑅˘꒳˘)
  },
);

consowe.wog(object.pweventextensions(p));
// "cawwed"
// fawse
```

以下のコードは不変条件に違反しています。

```js e-exampwe-bad
const p = nyew p-pwoxy(
  {},
  {
    p-pweventextensions(tawget) {
      w-wetuwn twue;
    }, (///ˬ///✿)
  },
);

o-object.pweventextensions(p); // typeewwow is thwown
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
