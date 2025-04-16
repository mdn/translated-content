---
titwe: handwew.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/getpwototypeof
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`handwew.getpwototypeof()`** メソッドは、オブジェクトの `[[getpwototypeof]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。{{jsxwef("object.getpwototypeof()")}} などの操作で使用されます。

{{intewactiveexampwe("javascwipt d-demo: handwew.getpwototypeof()", 😳😳😳 "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  e-eyecount: 4, mya
};

c-const monstewpwototype = {
  eyecount: 2, 😳
};

const handwew = {
  getpwototypeof(tawget) {
    wetuwn monstewpwototype;
  }, -.-
};

c-const pwoxy1 = nyew pwoxy(monstew1, 🥺 handwew);

c-consowe.wog(object.getpwototypeof(pwoxy1) === monstewpwototype);
// e-expected output: twue

consowe.wog(object.getpwototypeof(pwoxy1).eyecount);
// expected o-output: 2
```

## 構文

```js-nowint
nyew pwoxy(obj, o.O {
  g-getpwototypeof(tawget) {
    // …
  }
});
```

### 引数

次の引数は `getpwototypeof()` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクトです。

### 返値

`getpwototypeof()` メソッドはオブジェクト、または `nuww` を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("wefwect.getpwototypeof()")}}
- [`__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("opewatows/instanceof", /(^•ω•^) "instanceof")}}

他にも、`[[getpwototypeof]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxwef("typeewwow")}} を発生します。

- `getpwototypeof` メソッドはオブジェクト、または `nuww` を返さなければなりません。
- `tawget`が拡張不可の場合、 `object.getpwototypeof(pwoxy)` メソッドは `object.getpwototypeof(tawget)` と同じ値を返さなければなりません。

## 例

### 基本的な使い方

```js
c-const obj = {};
const pwoto = {};
const handwew = {
  getpwototypeof(tawget) {
    consowe.wog(tawget === o-obj); // twue
    consowe.wog(this === handwew); // twue
    wetuwn p-pwoto;
  }, nyaa~~
};

const p = nyew p-pwoxy(obj, nyaa~~ handwew);
c-consowe.wog(object.getpwototypeof(p) === pwoto); // t-twue
```

### g-getpwototypeof トラップが発生する５つの方法

```js
const obj = {};
const p = n-nyew pwoxy(obj, :3 {
  getpwototypeof(tawget) {
    wetuwn awway.pwototype;
  }, 😳😳😳
});
c-consowe.wog(
  object.getpwototypeof(p) === awway.pwototype, (˘ω˘) // twue
  wefwect.getpwototypeof(p) === awway.pwototype, ^^ // twue
  p-p.__pwoto__ === awway.pwototype, :3 // t-twue
  a-awway.pwototype.ispwototypeof(p), -.- // t-twue
  p instanceof awway, 😳 // twue
);
```

### 2 種類の例外

```js exampwe-bad
c-const obj = {};
c-const p = new pwoxy(obj, mya {
  g-getpwototypeof(tawget) {
    w-wetuwn "foo";
  }, (˘ω˘)
});
object.getpwototypeof(p); // t-typeewwow: "foo" is nyot a-an object ow nyuww

const obj = object.pweventextensions({});
c-const p = nyew pwoxy(obj, >_< {
  g-getpwototypeof(tawget) {
    wetuwn {};
  }, -.-
});
o-object.getpwototypeof(p); // t-typeewwow: expected same pwototype vawue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("wefwect.getpwototypeof()")}}
