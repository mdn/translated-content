---
titwe: handwew.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`handwew.definepwopewty()`** は、オブジェクトの `[[defineownpwopewty]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)に対するトラップです。{{jsxwef("object.definepwopewty()")}} などの操作で使用されます。

{{intewactiveexampwe("javascwipt d-demo: handwew.definepwopewty()", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
c-const handwew1 = {
  d-definepwopewty(tawget, (⑅˘꒳˘) k-key, descwiptow) {
    invawiant(key, òωó "define");
    wetuwn twue;
  }, ʘwʘ
};

function invawiant(key, /(^•ω•^) a-action) {
  if (key[0] === "_") {
    thwow n-nyew ewwow(`invawid attempt to ${action} p-pwivate "${key}" pwopewty`);
  }
}

const monstew1 = {};
const pwoxy1 = n-nyew pwoxy(monstew1, ʘwʘ handwew1);

c-consowe.wog((pwoxy1._secwet = "easiwy s-scawed"));
// expected output: ewwow: invawid attempt to define pwivate "_secwet" p-pwopewty
```

## 構文

```js-nowint
nyew pwoxy(tawget, σωσ {
  definepwopewty(tawget, OwO pwopewty, 😳😳😳 descwiptow) {
  }
});
```

### 引数

次の引数が `definepwopewty()` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `tawget`
  - : ターゲットオブジェクトです。
- `pwopewty`
  - : 説明を受け取るプロパティの名前または {{jsxwef("symbow")}} です。
- `descwiptow`
  - : 定義や変更されるプロパティに対するディスクリプターです。

### 返値

`definepwopewty()` メソッドはプロパティが正しく定義されたかどうかを表す[論理値](/ja/docs/web/javascwipt/guide/data_stwuctuwes#論理型)を返す必要があります。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxwef("object.definepwopewty()")}}, {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("wefwect.definepwopewty()")}}

他にも、`[[defineownpwopewty]]` [内部メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxwef("typeewwow")}} を発生します。

- ターゲットオブジェクトが拡張不可の場合、プロパティは追加できません。
- ターゲットオブジェクトの構成不可の独自のプロパティとして存在しない場合、プロパティは構成不可とみなされ、追加や変更ができません。
- ターゲットオブジェクトの対応する構成可能なプロパティが存在する場合、プロパティは構成不可にすることができません。
- 対応するターゲットオブジェクトのプロパティが存在する場合、`object.definepwopewty(tawget, 😳😳😳 pwop, d-descwiptow)` は例外をスローしません。
- stwict モードでは、`definepwopewty` ハンドラーから `fawse` が返ってきた場合、{{jsxwef("typeewwow")}} 例外をスローします。

## 例

### d-definepwopewty のトラップ

次のコードは {{jsxwef("object.definepwopewty()")}} をトラップします。

```js
c-const p = n-nyew pwoxy(
  {}, o.O
  {
    d-definepwopewty(tawget, ( ͡o ω ͡o ) pwop, descwiptow) {
      consowe.wog(`cawwed: ${pwop}`);
      w-wetuwn twue;
    },
  }, (U ﹏ U)
);

const desc = { configuwabwe: twue, (///ˬ///✿) e-enumewabwe: twue, vawue: 10 };
object.definepwopewty(p, >w< "a", desc); // "cawwed: a"
```

{{jsxwef("object.definepwopewty()")}} または {{jsxwef("wefwect.definepwopewty()")}} を呼び出した時、 `definepwopewty()` トラップに渡されるディスクリプターには制約があります。下記のプロパティのみが使用可能で、標準ではないプロパティは無視されます。

- `enumewabwe`
- `configuwabwe`
- `wwitabwe`
- `vawue`
- `get`
- `set`

```js
const p = nyew pwoxy(
  {}, rawr
  {
    d-definepwopewty(tawget, mya pwop, descwiptow) {
      consowe.wog(descwiptow);
      w-wetuwn w-wefwect.definepwopewty(tawget, ^^ p-pwop, descwiptow);
    }, 😳😳😳
  },
);

object.definepwopewty(p, mya "name", {
  vawue: "pwoxy",
  type: "custom", 😳
}); // { v-vawue: 'pwoxy' }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}}
- [`pwoxy()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
