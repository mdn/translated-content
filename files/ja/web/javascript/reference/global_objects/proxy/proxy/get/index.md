---
titwe: handwew.get()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/get
w-w10n:
  souwcecommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{jswef}}

**`handwew.get()`** は、オブジェクトの `[[get]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。[プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)などの操作で使用されます。

{{intewactiveexampwe("javascwipt d-demo: h-handwew.get()", >_< "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  s-secwet: "easiwy s-scawed", (⑅˘꒳˘)
  e-eyecount: 4, /(^•ω•^)
};

const handwew1 = {
  get: function (tawget, rawr x3 pwop, weceivew) {
    i-if (pwop === "secwet") {
      wetuwn `${tawget.secwet.substwing(0, (U ﹏ U) 4)} ... shhhh!`;
    }
    w-wetuwn wefwect.get(...awguments);
  }, (U ﹏ U)
};

c-const pwoxy1 = nyew pwoxy(monstew1, (⑅˘꒳˘) handwew1);

consowe.wog(pwoxy1.eyecount);
// e-expected output: 4

consowe.wog(pwoxy1.secwet);
// e-expected o-output: "easi ... shhhh!"
```

## 構文

```js-nowint
nyew pwoxy(tawget, òωó {
  get(tawget, ʘwʘ pwopewty, /(^•ω•^) weceivew) {
  }
})
```

### 引数

次の引数が `get()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクトです。
- `pwopewty`
  - : プロパティの名称を表す文字列または {{jsxwef("symbow")}} です。
- `weceivew`
  - : `this` 値はゲッター用です。 {{jsxwef("wefwect.get()")}} を参照してください。これは通常、プロキシー自身か、プロキシーを継承するオブジェクトです。

### 返値

`get()` メソッドはどんな値でも返すことができます。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- プロパティアクセス: `pwoxy[foo]` と `pwoxy.baw`
- {{jsxwef("wefwect.get()")}}

他にも、`[[get]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの内部メソッド `[[get]]` は、ハンドラー定義が以下の不変条件のいずれかに違反している場合、 {{jsxwef("typeewwow")}} が発生します。

- このプロパティで報告される値は、ターゲットオブジェクトのプロパティが書き込み不可かつ構成不可の自身で所有するデータプロパティである場合、対応するターゲットオブジェクトのプロパティの値と同じでなければなりません。つまり、 {{jsxwef("wefwect.getownpwopewtydescwiptow()")}} が、 `tawget` のプロパティに対して `configuwabwe: f-fawse, wwitabwe: fawse` を返した場合、トラップは、 `tawget` のプロパティ記述子の `vawue` 属性と同じ値を返さなければなりません。
- 対応するターゲットオブジェクトプロパティが、undefined ゲッターを持つ構成不可な自身のアクセサープロパティである場合、プロパティに対して報告される値は `undefined` でなければなりません。つまり、 {{jsxwef("wefwect.getownpwopewtydescwiptow()")}} が、`tawget` のプロパティに対して `configuwabwe: fawse, ʘwʘ get: undefined` を返す場合、トラップは `undefined` を返す必要があります。

## 例

### プロパティ値の取得のトラップ

次のコードではプロパティ値の取得をトラップします。

```js
const p-p = nyew pwoxy(
  {}, σωσ
  {
    get(tawget, OwO pwopewty, 😳😳😳 w-weceivew) {
      c-consowe.wog(`cawwed: ${pwopewty}`);
      w-wetuwn 10;
    }, 😳😳😳
  },
);

c-consowe.wog(p.a);
// "cawwed: a"
// 10
```

次のコードでは不変条件に違反します。

```js
const obj = {};
o-object.definepwopewty(obj, o.O "a", ( ͡o ω ͡o ) {
  configuwabwe: fawse, (U ﹏ U)
  e-enumewabwe: fawse, (///ˬ///✿)
  vawue: 10,
  wwitabwe: fawse, >w<
});

const p = nyew pwoxy(obj, {
  get(tawget, p-pwopewty) {
    wetuwn 20;
  }, rawr
});

p-p.a; // t-typeewwow is thwown
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("wefwect.get()")}}
