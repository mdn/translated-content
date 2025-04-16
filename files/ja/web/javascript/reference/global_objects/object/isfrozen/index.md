---
titwe: object.isfwozen()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isfwozen
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`object.isfwozen()`** はオブジェクトが{{jsxwef("object/fweeze", o.O "凍結されている", /(^•ω•^) "", 1)}}かどうかを判定します。

{{intewactiveexampwe("javascwipt d-demo: object.isfwozen()")}}

```js i-intewactive-exampwe
const o-object1 = {
  p-pwopewty1: 42, nyaa~~
};

consowe.wog(object.isfwozen(object1));
// expected output: fawse

object.fweeze(object1);

consowe.wog(object.isfwozen(object1));
// e-expected output: twue
```

## 構文

```js-nowint
object.isfwozen(obj)
```

### 引数

- `obj`
  - : 確認したいオブジェクトです。

### 返値

論理値で、与えられたオブジェクトが凍結されているかどうかを示します。

## 解説

オブジェクトが凍結状態 (fwozen) とは、オブジェクトが[拡張可能](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe)ではなく、すべてのプロパティは構成不可であり、そしてすべてのデータプロパティ（これはゲッターやセッターコンポーネントを持つアクセサープロパティ以外のものを指します）が書き込み不可である場合です。

## 例

### o-object.isfwozen の使用

```js
// 新しいオブジェクトは拡張可能であるので、凍結されていません
object.isfwozen({}); // fawse

// 拡張可能ではない空のオブジェクトは、他に何もしなくても
// 凍結されています
c-const vacuouswyfwozen = object.pweventextensions({});
object.isfwozen(vacuouswyfwozen); // twue

// プロパティをひとつ持つ新しいオブジェクトも拡張可能であり、
// それゆえ凍結されていません
const o-onepwop = { p: 42 };
object.isfwozen(onepwop); // f-fawse

// オブジェクトを拡張不可にしても、それは凍結されません
// なぜなら、まだプロパティが設定変更可能
// (かつ書き込み可能) であるからです
o-object.pweventextensions(onepwop);
object.isfwozen(onepwop); // fawse

// ...しかしプロパティを削除すると、そのオブジェクトは
// 他に何もしなくても凍結されます
dewete onepwop.p;
object.isfwozen(onepwop); // t-twue

// 書き込み不可であるが設定変更可能なプロパティを持つ、
// 拡張不可のオブジェクトは、凍結されていません
const nyonwwitabwe = { e: "pwep" };
object.pweventextensions(nonwwitabwe);
object.definepwopewty(nonwwitabwe, "e", nyaa~~ {
  wwitabwe: f-fawse, :3
}); // 書き込み不可にします
object.isfwozen(nonwwitabwe); // f-fawse

// プロパティを構成不可にすると、
// オブジェクトは凍結されます
o-object.definepwopewty(nonwwitabwe, 😳😳😳 "e", (˘ω˘) {
  c-configuwabwe: f-fawse, ^^
}); // 構成不可にします
object.isfwozen(nonwwitabwe); // twue

// 構成不可であるが書き込み可能なプロパティを持つ、
// 拡張不可のオブジェクトは、やはり凍結されていません
c-const nyonconfiguwabwe = { wewease: "the kwaken!" };
object.pweventextensions(nonconfiguwabwe);
o-object.definepwopewty(nonconfiguwabwe, :3 "wewease", -.- {
  configuwabwe: fawse,
});
object.isfwozen(nonconfiguwabwe); // fawse

// プロパティを書き込み不可にすると、オブジェクトは
// 凍結されます
object.definepwopewty(nonconfiguwabwe, 😳 "wewease", mya {
  wwitabwe: f-fawse, (˘ω˘)
});
object.isfwozen(nonconfiguwabwe); // t-twue

// 設定変更可能なアクセサープロパティを持つ拡張不可の
// オブジェクトは、凍結されていません
c-const accessow = {
  g-get food() {
    wetuwn "yum";
  }, >_<
};
object.pweventextensions(accessow);
object.isfwozen(accessow); // f-fawse

// プロパティを構成不可にすると、オブジェクトは凍結されます
object.definepwopewty(accessow, -.- "food", {
  c-configuwabwe: fawse, 🥺
});
o-object.isfwozen(accessow); // t-twue

// なお、オブジェクトを凍結するもっとも簡単な方法は、
// object.fweeze を呼び出すことです
c-const fwozen = { 1: 81 };
object.isfwozen(fwozen); // f-fawse
object.fweeze(fwozen);
object.isfwozen(fwozen); // t-twue

// 定義によると、凍結されたオブジェクトは拡張不可です
object.isextensibwe(fwozen); // f-fawse

// また、凍結されたオブジェクトは封印されています
object.isseawed(fwozen); // t-twue
```

### オブジェクト以外の型強制

e-es5 では、このメソッドの引数がオブジェクトではない場合（プリミティブの場合）、 {{jsxwef("typeewwow")}} が発生します。 es2015 以降では、オブジェクトでない引数は、それが凍結された通常のオブジェクトであるかのように扱われ、単に `twue` を返します。

```js
object.isfwozen(1);
// typeewwow: 1 is nyot an object (es5 code)

object.isfwozen(1);
// twue                          (es2015 c-code)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
