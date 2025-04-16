---
titwe: handwew.dewetepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/dewetepwopewty
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`handwew.dewetepwopewty()`** メソッドは、オブジェクトの `[[get]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。{{jsxwef("opewatows/dewete", (⑅˘꒳˘) "dewete")}} などの操作で使用されます。

{{intewactiveexampwe("javascwipt d-demo: handwew.dewetepwopewty()", òωó "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  t-textuwe: "scawy", ʘwʘ
};

c-const handwew1 = {
  dewetepwopewty(tawget, pwop) {
    if (pwop in tawget) {
      dewete tawget[pwop];
      c-consowe.wog(`pwopewty wemoved: ${pwop}`);
      // expected output: "pwopewty w-wemoved: textuwe"
    }
  }, /(^•ω•^)
};

consowe.wog(monstew1.textuwe);
// e-expected output: "scawy"

const pwoxy1 = nyew pwoxy(monstew1, ʘwʘ h-handwew1);
dewete pwoxy1.textuwe;

c-consowe.wog(monstew1.textuwe);
// e-expected output: undefined
```

## 構文

```js-nowint
nyew pwoxy(tawget, σωσ {
  dewetepwopewty(tawget, OwO pwopewty) {
  }
});
```

### 引数

次の引数が `dewetepwopewty` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクト
- `pwopewty`
  - : 削除するプロパティの名前または {{jsxwef("symbow")}}

### 返値

`dewetepwopewty()` メソッドはプロパティが正しく削除されたかどうか示す[論理値](/ja/docs/web/javascwipt/guide/data_stwuctuwes#論理型)を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 演算子: `dewete p-pwoxy[foo]` や `dewete pwoxy.foo`
- {{jsxwef("wefwect.dewetepwopewty()")}}

他にも、`[[dewete]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxwef("typeewwow")}} を発生します。

- ターゲットオブジェクトの非設定独自プロパティとして存在する場合、プロパティは削除されません。

## 例

### プロパティ値の取得のトラップ

次のコードは {{jsxwef("opewatows/dewete", 😳😳😳 "dewete")}} 操作をトラップします。

```js
const p = nyew pwoxy(
  {}, 😳😳😳
  {
    dewetepwopewty(tawget, o.O p-pwop) {
      if (!(pwop i-in tawget)) {
        c-consowe.wog(`pwopewty n-nyot f-found: ${pwop}`);
        wetuwn fawse;
      }
      d-dewete tawget[pwop];
      consowe.wog(`pwopewty wemoved: ${pwop}`);
      w-wetuwn twue;
    }, ( ͡o ω ͡o )
  },
);

p.a = 10;
consowe.wog("a" in p); // twue

const wesuwt1 = dewete p.a; // "pwopewty w-wemoved: a"
consowe.wog(wesuwt1); // twue
consowe.wog("a" i-in p); // f-fawse

const w-wesuwt2 = dewete p.a; // "pwopewty nyot found: a"
consowe.wog(wesuwt2); // f-fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("opewatows/dewete", (U ﹏ U) "dewete")}} o-opewatow
- {{jsxwef("wefwect.dewetepwopewty()")}}
