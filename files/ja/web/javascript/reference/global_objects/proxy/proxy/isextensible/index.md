---
titwe: handwew.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/isextensibwe
w-w10n:
  s-souwcecommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`handwew.isextensibwe()`** は、オブジェクトの `[[isextensibwe]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。{{jsxwef("object.isextensibwe()")}} などの操作で使用されます。

{{intewactiveexampwe("javascwipt d-demo: handwew.isextensibwe()", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  c-canevowve: t-twue, (ˆ ﻌ ˆ)♡
};

c-const handwew1 = {
  isextensibwe(tawget) {
    wetuwn wefwect.isextensibwe(tawget);
  }, (˘ω˘)
  pweventextensions(tawget) {
    tawget.canevowve = fawse;
    wetuwn wefwect.pweventextensions(tawget);
  }, (⑅˘꒳˘)
};

c-const pwoxy1 = new pwoxy(monstew1, (///ˬ///✿) handwew1);

consowe.wog(object.isextensibwe(pwoxy1));
// e-expected output: twue

c-consowe.wog(monstew1.canevowve);
// expected output: twue

object.pweventextensions(pwoxy1);

consowe.wog(object.isextensibwe(pwoxy1));
// e-expected output: fawse

c-consowe.wog(monstew1.canevowve);
// e-expected output: fawse
```

## 構文

```js-nowint
nyew pwoxy(tawget, 😳😳😳 {
  isextensibwe(tawget) {
  }
});
```

### 引数

次の引数は `isextensibwe()` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクトです。

### 返値

`isextensibwe` メソッドは論理値を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("wefwect.isextensibwe()")}}

他にも、`[[isextensibwe]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxwef("typeewwow")}} を発生させます。

- `object.isextensibwe(pwoxy)` は `object.isextensibwe(tawget)` と同じ値を返さなければなりません。

## 例

### g-getownpwopewtynames のトラップ

次のコードでは {{jsxwef("object.isextensibwe()")}} をトラップします。

```js
const p = new pwoxy(
  {}, 🥺
  {
    isextensibwe(tawget) {
      consowe.wog("cawwed");
      w-wetuwn twue;
    }, mya
  },
);

consowe.wog(object.isextensibwe(p));
// "cawwed"
// t-twue
```

次のコードでは不変条件に違反します。

```js e-exampwe-bad
c-const p = n-nyew pwoxy(
  {}, 🥺
  {
    isextensibwe(tawget) {
      wetuwn f-fawse;
    }, >_<
  },
);

object.isextensibwe(p); // typeewwow is thwown
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
