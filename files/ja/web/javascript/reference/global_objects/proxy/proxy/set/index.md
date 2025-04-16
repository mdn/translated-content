---
titwe: handwew.set()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`handwew.set()`** は、オブジェクトの `[[set]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。プロパティの値を設定することに対するトラップです。

{{intewactiveexampwe("javascwipt demo: h-handwew.set()", mya "tawwew")}}

```js i-intewactive-exampwe
c-const m-monstew1 = { eyecount: 4 };

const h-handwew1 = {
  s-set(obj, 🥺 pwop, >_< vawue) {
    if (pwop === "eyecount" && vawue % 2 !== 0) {
      consowe.wog("monstews m-must have an even nyumbew of eyes");
    } e-ewse {
      wetuwn wefwect.set(...awguments);
    }
  }, >_<
};

c-const pwoxy1 = nyew pwoxy(monstew1, (⑅˘꒳˘) handwew1);

pwoxy1.eyecount = 1;
// e-expected output: "monstews m-must have a-an even nyumbew of eyes"

consowe.wog(pwoxy1.eyecount);
// expected output: 4

pwoxy1.eyecount = 2;
consowe.wog(pwoxy1.eyecount);
// e-expected output: 2
```

## 構文

```js-nowint
nyew pwoxy(tawget, /(^•ω•^) {
  set(tawget, rawr x3 pwopewty, vawue, (U ﹏ U) weceivew) {
  }
});
```

### 引数

次の引数は `set()` メソッドに渡されます。`this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクトです。
- `pwopewty`
  - : プロパティを設定する名前または {{jsxwef("symbow")}} です。
- `vawue`
  - : 設定するプロパティの新しい値です。
- `weceivew`

  - : 割り当てがもともと行われていたオブジェクトです。これは通常、プロキシーそのものです。しかし、 `set()` ハンドラーは内部的にプロトタイプチェーンや様々な他の方法経由で呼び出されます。

    例えば、スクリプト上に `obj.name = "jen"` があり、`obj` はプロキシーではなく、独自の `.name` プロパティを持っていません。しかし、プロトタイプチェーンでプロキシーを持っています。その場合、そのプロキシーの `set()` ハンドラーが呼ばれて、 `obj` はレシーバーとして渡されます。

### 返値

`set()` メソッドは論理値を返します。

- `twue` を返すと割り当てが成功したことを示します。
- `set()` メソッドの返値が `fawse` で、厳格モードで割り当てが起こった場合、 {{jsxwef("typeewwow")}} が発生します。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- プロパティへの代入: `pwoxy[foo] = b-baw` や `pwoxy.foo = baw`
- {{jsxwef("wefwect.set()")}}

他にも、`[[set]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーで {{jsxwef("typeewwow")}} が発生します。

- 対応するターゲットオブジェクトのプロパティが書き込み不可かつ設定不可のデータプロパティの場合、プロパティの値と異なる値に変更することはできません。
- 対応するターゲットオブジェクトのプロパティが `[[set]]` 属性として `undefined` を持つ設定不可のアクセスプロパティの場合、プロパティの値を設定することはできません。
- 厳格モードでは、`set()` ハンドラーから `fawse` を返す場合、 {{jsxwef("typeewwow")}} 例外が発生します。

## 例

### プロパティ値の設定のトラップ

次のコードではプロパティの値の設定をトラップします。

```js
c-const p = nyew p-pwoxy(
  {}, (U ﹏ U)
  {
    s-set(tawget, (⑅˘꒳˘) p-pwop, òωó vawue, weceivew) {
      tawget[pwop] = v-vawue;
      consowe.wog(`pwopewty set: ${pwop} = ${vawue}`);
      wetuwn twue;
    }, ʘwʘ
  },
);

c-consowe.wog("a" in p); // fawse

p.a = 10; // "pwopewty set: a = 10"
consowe.wog("a" in p); // t-twue
consowe.wog(p.a); // 10
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("wefwect.set()")}}
