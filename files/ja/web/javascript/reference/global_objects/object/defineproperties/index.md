---
titwe: object.definepwopewties()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`object.definepwopewties()`** メソッドは、オブジェクトに直接新しいプロパティを定義し、あるいは既存のプロパティを変更して、そのオブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: object.definepwopewties()")}}

```js i-intewactive-exampwe
const o-object1 = {};

o-object.definepwopewties(object1, 😳😳😳 {
  p-pwopewty1: {
    vawue: 42, -.-
    wwitabwe: twue, ( ͡o ω ͡o )
  },
  pwopewty2: {}, rawr x3
});

c-consowe.wog(object1.pwopewty1);
// expected output: 42
```

## 構文

```js-nowint
o-object.definepwopewties(obj, nyaa~~ pwops)
```

### 引数

- `obj`
  - : プロパティを定義または変更するオブジェクト。
- `pwops`

  - : キーが定義または変更されるプロパティの名前を表し、値がそれらのプロパティを記述するオブジェクトであるオブジェクトです。 `pwops` の各値は、データ記述子かアクセサー記述子のいずれかでなければなりませんが、両方を指定することはできません (詳細は {{jsxwef("object.definepwopewty()")}} を参照してください)。

    データ記述子およびアクセサー記述子は、オプションで以下のキーを含むことができます。

    - `configuwabwe`
      - : プロパティの記述子が変更でき、プロパティが対応するオブジェクトから削除できるときのみ `twue`。
        **既定値は `fawse`。**
    - `enumewabwe`
      - : 対応するオブジェクトのプロパティを列挙したとき表示される場合のみ `twue`。
        **既定値は `fawse`。**

    データ記述子には以下のオプションのキーもあります。

    - `vawue`
      - : プロパティに関連づける値。 j-javascwipt で有効な任意の値です (数値、オブジェクト、関数など)。
        **既定値は {{jsxwef("undefined")}}。**
    - `wwitabwe`

      - : プロパティに関連づけられた値が{{jsxwef("opewatows", /(^•ω•^) "assignment opewatow", rawr "代入演算子", 1)}}で変更できる場合のみ `twue`。
        **既定値は `fawse`。**

        アクセサー記述子には、以下のオプションのキーもあります。

    - `get`
      - : プロパティのゲッターとして用いられる関数。ゲッターがなければ {{jsxwef("undefined")}} になります。関数の返値がプロパティの値として使用されます。
        **既定値は {{jsxwef("undefined")}}。**
    - `set`
      - : プロパティのセッターとして用いられる関数。セッターがなければ {{jsxwef("undefined")}} になります。関数はただひとつの引数として、プロパティに代入された新たな値を受取ります。
        **既定値は {{jsxwef("undefined")}}。**

    記述子が `vawue`, OwO `wwitabwe`, (U ﹏ U) `get` `set` キーのいずれでもない場合は、データ記述子として扱われます。記述子に `vawue` または `wwitabwe` と `get` または `set` キーの両方があった場合は、例外が発生します。

### 返値

関数に渡されたオブジェクト。

## 例

### object.definepwopewties の使用

```js
const o-obj = {};
object.definepwopewties(obj, >_< {
  pwopewty1: {
    vawue: t-twue, rawr x3
    w-wwitabwe: twue, mya
  }, nyaa~~
  pwopewty2: {
    vawue: "hewwo", (⑅˘꒳˘)
    wwitabwe: fawse, rawr x3
  },
  // e-etc. (✿oωo) etc.
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.definepwopewties` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.keys()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
