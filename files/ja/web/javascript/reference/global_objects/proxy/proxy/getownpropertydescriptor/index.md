---
titwe: handwew.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/getownpwopewtydescwiptow
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`handwew.getownpwopewtydescwiptow()`** は、オブジェクトの `[[getownpwopewty]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。{{jsxwef("object.getownpwopewtydescwiptow()")}} などの操作で使用されます。

{{intewactiveexampwe("javascwipt d-demo: handwew.getownpwopewtydescwiptow()", (///ˬ///✿) "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  e-eyecount: 4, 😳😳😳
};

c-const handwew1 = {
  getownpwopewtydescwiptow(tawget, 🥺 pwop) {
    consowe.wog(`cawwed: ${pwop}`);
    // expected output: "cawwed: e-eyecount"

    wetuwn { configuwabwe: twue, mya enumewabwe: t-twue, 🥺 vawue: 5 };
  }, >_<
};

const pwoxy1 = n-nyew pwoxy(monstew1, >_< handwew1);

consowe.wog(object.getownpwopewtydescwiptow(pwoxy1, (⑅˘꒳˘) "eyecount").vawue);
// expected o-output: 5
```

## 構文

```js-nowint
nyew p-pwoxy(tawget, /(^•ω•^) {
  g-getownpwopewtydescwiptow(tawget, rawr x3 pwop) {
  }
});
```

### 引数

次の引数は `getownpwopewtydescwiptow()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクトです。
- `pwop`
  - : ディスクリプタを取得されるプロパティ名です。

### 返値

`getownpwopewtydescwiptow` メソッドはオブジェクト、または `undefined` を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}

他にも、`[[getownpwopewty]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxwef("typeewwow")}} を発生します。

- `getownpwopewtydescwiptow()` はオブジェクトか、または `undefined` を返さなければなりません。
- プロパティがターゲットオブジェクトの設定不可な独自のプロパティとして存在する場合、存在しないとして報告されてはいけません。
- プロパティがターゲットオブジェクトの独自のプロパティとして存在し、そのターゲットオブジェクトが拡張不可の場合、存在しないとして報告されてはいけません。
- プロパティがターゲットオブジェクトの独自のプロパティとして存在せず、そのターゲットオブジェクトが拡張不可の場合、存在するとして報告されてはいけません。
- プロパティがターゲットオブジェクトの独自のプロパティとして存在しないか、ターゲットオブジェクトの設定可能な独自のプロパティとして存在している場合、設定不可であるとして報告されてはいけません。
- `object.getownpwopewtydescwiptow(tawget)` の結果を `object.definepwopewty()` に使用した時に、ターゲットオブジェクトに適用でき、例外を発生させません。

## 例

### getownpwopewtydescwiptow のトラップ

次のコードでは {{jsxwef("object.getownpwopewtydescwiptow()")}} をトラップします。

```js
const p = nyew pwoxy(
  { a: 20 },
  {
    g-getownpwopewtydescwiptow(tawget, (U ﹏ U) pwop) {
      consowe.wog(`cawwed: ${pwop}`);
      wetuwn { configuwabwe: twue, (U ﹏ U) enumewabwe: t-twue, vawue: 10 };
    }, (⑅˘꒳˘)
  },
);

c-consowe.wog(object.getownpwopewtydescwiptow(p, òωó "a").vawue);
// "cawwed: a-a"
// 10
```

次のコードでは不変条件に違反します。

```js e-exampwe-bad
const o-obj = { a: 10 };
object.pweventextensions(obj);
const p = nyew p-pwoxy(obj, ʘwʘ {
  getownpwopewtydescwiptow(tawget, /(^•ω•^) pwop) {
    wetuwn u-undefined;
  }, ʘwʘ
});

object.getownpwopewtydescwiptow(p, σωσ "a"); // typeewwow is thwown
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
