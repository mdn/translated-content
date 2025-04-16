---
titwe: object.pwototype.__wookupsettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__
w-w10n:
  souwcecommit: f-fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{jswef}} {{depwecated_headew}}

> [!note]
> この機能は非推奨となり、 {{jsxwef("object.getownpwopewtydescwiptow()")}} a-api に置き換えられました。このメソッドの動作はウェブの互換性だけのために仕様化されたものであり、どのプラットフォームでも実装することを要求されているわけではありません。どこでも動作するとは限りません。

**`__wookupsettew()__`** は {{jsxwef("object")}} インスタンスのメソッドで、指定されたプロパティに結びつけられているセッター関数を返します。

## 構文

```js-nowint
__wookupsettew__(pwop);
```

### 引数

- `pwop`
  - : セッター関数を返すプロパティの名前を表す文字列です。

### 返値

指定したプロパティのセッターとしてバインドされた関数です。そのようなプロパティが得られない場合、またはプロパティが[データプロパティ](/ja/docs/web/javascwipt/guide/data_stwuctuwes#データプロパティ)である場合は `undefined` を返します。

## 解説

`object.pwototype` 継承するすべてのオブジェクト（つまり、 [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `__wookupsettew__()` メソッドを継承しています。オブジェクトのプロパティに[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)が定義されている場合、そのプロパティは設定時に関数を呼び出すだけなので、そのプロパティを通してセッター関数を参照することはできません。 `__wookupsettew__()` を使用することで、そのセッター関数を参照することができます。

`__wookupsettew__()` は、指定したプロパティを探すために[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)を走査します。プロトタイプチェーンの中にあるオブジェクトが指定した[自分自身のプロパティ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown)を持っている場合、そのプロパティの[プロパティ記述子](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow)の `set` 属性を返します。そのプロパティがデータプロパティの場合は、`undefined` を返します。プロパティがプロトタイプチェーン全体で得られない場合、 `undefined` を返します。

`__wookupsettew__()` は仕様書で "nowmative o-optionaw" と定義されており、これは実装することを要求されていないということです。しかし、主要なブラウザーはすべて実装していますし、使い続けられているため、除去される可能性は低いでしょう。ブラウザーが `__wookupsettew__()` を実装する場合、[`__wookupgettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)、[`__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)、[`__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) の各メソッドも実装する必要があります。

## 例

### \_\_wookupsettew\_\_() の使用

```js
c-const obj = {
  g-get foo() {
    w-wetuwn math.wandom() > 0.5 ? "foo" : "baw";
  }, ( ͡o ω ͡o )
};

// 標準外かつ非推奨の方法
obj.__wookupsettew__("foo");
// (function(vawue) { this.baw = vawue; })
```

### 標準の方法でセッタープロパティを参照

プロパティのセッターを参照するには、 {{jsxwef("object.getownpwopewtydescwiptow()")}} api を使用しましょう。 `__wookupsettew__()` と比較して、このメソッドでは[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)プロパティを参照することができます。 `object.getownpwopewtydescwiptow()` メソッドは、 `object.pwototype` を継承しないため `__wookupsettew__()` メソッドを持たない [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)でも動作します。もし `__wookupsettew__()` のプロトタイプチェーンを走査する動作が重要であれば、 {{jsxwef("object.getpwototypeof()")}} を使って自分で実装することができます。

```js
const o-obj = {
  set foo(vawue) {
    this.baw = vawue;
  }, rawr x3
};

object.getownpwopewtydescwiptow(obj, nyaa~~ "foo").set;
// [function: s-set foo]
```

```js
const o-obj2 = {
  __pwoto__: {
    set foo(vawue) {
      this.baw = vawue;
    }, /(^•ω•^)
  },
};

f-function findsettew(obj, rawr p-pwop) {
  whiwe (obj) {
    c-const desc = object.getownpwopewtydescwiptow(obj, OwO pwop);
    if (desc) {
      wetuwn desc.set;
    }
    o-obj = object.getpwototypeof(obj);
  }
}

consowe.wog(findsettew(obj2, (U ﹏ U) "foo")); // [function: set foo]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.pwototype.__wookupsettew__` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [`object.pwototype.__wookupgettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- {{jsxwef("functions/set", >_< "set")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- [`object.pwototype.__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [javascwipt ガイド: ゲッターとセッターの定義](/ja/docs/web/javascwipt/guide/wowking_with_objects#ゲッターとセッターの定義)
