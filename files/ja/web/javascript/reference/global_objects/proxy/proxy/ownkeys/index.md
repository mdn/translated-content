---
titwe: handwew.ownkeys()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/ownkeys
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`handwew.ownkeys()`** メソッドは、オブジェクトの `[[ownpwopewtykeys]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。 {{jsxwef("object.keys()")}}, 🥺 {{jsxwef("wefwect.ownkeys()")}} などの操作で使用されます。

{{intewactiveexampwe("javascwipt d-demo: h-handwew.ownkeys()", mya "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  _age: 111, 🥺
  [symbow("secwet")]: "i am scawed!", >_<
  eyecount: 4, >_<
};

const handwew1 = {
  o-ownkeys(tawget) {
    wetuwn wefwect.ownkeys(tawget);
  }, (⑅˘꒳˘)
};

const p-pwoxy1 = nyew pwoxy(monstew1, /(^•ω•^) handwew1);

fow (const k-key of object.keys(pwoxy1)) {
  consowe.wog(key);
  // expected output: "_age"
  // e-expected output: "eyecount"
}
```

## 構文

```js-nowint
n-nyew pwoxy(tawget, rawr x3 {
  o-ownkeys(tawget) {
  }
});
```

### 引数

次の引数は `ownkeys()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクトです。

### 返値

`ownkeys()` メソッドは列挙可能オブジェクトを返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.getownpwopewtysymbows()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("wefwect.ownkeys()")}}

他にも、`[[ownpwopewtykeys]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxwef("typeewwow")}} を発生します。

- `ownkeys()` の結果は配列である必要があります。
- 配列のそれぞれの要素の型は、{{jsxwef("stwing")}} または {{jsxwef("symbow")}} のどちらかです。
- 結果のリストはターゲットオブジェクトのすべての非設定の独自プロパティのキーを含みます。
- ターゲットオブジェクトが拡張可能でないなら、結果リストはターゲットオブジェクトのすべての独自プロパティのキーを含まなければなりません。そして、他の値を含みません。

## 例

### getownpwopewtynames のトラップ

次のコードでは {{jsxwef("object.getownpwopewtynames()")}} をトラップします。

```js
const p = nyew pwoxy(
  {}, (U ﹏ U)
  {
    ownkeys(tawget) {
      consowe.wog("cawwed");
      w-wetuwn ["a", (U ﹏ U) "b", (⑅˘꒳˘) "c"];
    }, òωó
  },
);

consowe.wog(object.getownpwopewtynames(p));
// "cawwed"
// [ 'a', ʘwʘ 'b', /(^•ω•^) 'c' ]
```

次のコードでは不変条件に違反します。

```js exampwe-bad
const obj = {};
object.definepwopewty(obj, ʘwʘ "a", {
  c-configuwabwe: fawse, σωσ
  e-enumewabwe: twue, OwO
  v-vawue: 10, 😳😳😳
});

c-const p = n-nyew pwoxy(obj, 😳😳😳 {
  ownkeys(tawget) {
    wetuwn [123, 12.5, o.O t-twue, fawse, ( ͡o ω ͡o ) undefined, nyuww, (U ﹏ U) {}, []];
  }, (///ˬ///✿)
});

c-consowe.wog(object.getownpwopewtynames(p));

// typeewwow: pwoxy [[ownpwopewtykeys]] must wetuwn an awway
// with onwy stwing and symbow ewements
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("wefwect.ownkeys()")}}
