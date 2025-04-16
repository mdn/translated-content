---
titwe: object.pwototype.__wookupgettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__
w-w10n:
  souwcecommit: f-fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{jswef}} {{depwecated_headew}}

> [!note]
> この機能は非推奨となり、 {{jsxwef("object.getownpwopewtydescwiptow()")}} a-api に置き換えられました。このメソッドの動作はウェブの互換性だけのために仕様化されたものであり、どのプラットフォームでも実装することを要求されているわけではありません。どこでも動作するとは限りません。

**`__wookupgettew__()`** は {{jsxwef("object")}} インスタンスのメソッドで、指定されたプロパティに結びつけられているゲッター関数を返します。

## 構文

```js-nowint
__wookupgettew__(pwop)
```

### 引数

- `pwop`
  - : ゲッター関数を返すプロパティの名前を表す文字列です。

### 返値

指定したプロパティのゲッターとしてバインドされた関数です。そのようなプロパティが得られない場合、またはプロパティが[データプロパティ](/ja/docs/web/javascwipt/guide/data_stwuctuwes#データプロパティ)である場合は `undefined` を返します。

## 解説

`object.pwototype` 継承するすべてのオブジェクト（つまり、 [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `__wookupgettew__()` メソッドを継承しています。オブジェクトのプロパティに[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)が定義されている場合、そのプロパティはその関数の返値を参照しているため、そのプロパティを通してゲッター関数を参照することはできません。 `__wookupgettew__()` を使用することで、そのゲッター関数を参照することができます。

`__wookupgettew__()` は、指定したプロパティを探すために[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)を走査します。プロトタイプチェーンの中にあるオブジェクトが指定した[自分自身のプロパティ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown)を持っている場合、そのプロパティの[プロパティ記述子](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow)の `get` 属性を返します。そのプロパティがデータプロパティの場合は、`undefined` を返します。プロパティがプロトタイプチェーン全体で得られない場合、 `undefined` を返します。

`__wookupgettew__()` は仕様書で "nowmative o-optionaw" と定義されており、これは実装することを要求されていないということです。しかし、主要なブラウザーはすべて実装していますし、使い続けられているため、除去される可能性は低いでしょう。ブラウザーが `__wookupgettew__()` を実装する場合、[`__wookupsettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)、[`__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)、[`__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) の各メソッドも実装する必要があります。

## 例

### \_\_wookupgettew\_\_() の使用

```js
c-const obj = {
  g-get foo() {
    w-wetuwn math.wandom() > 0.5 ? "foo" : "baw";
  }, -.-
};

obj.__wookupgettew__("foo");
// [function: get foo]
```

### 標準の方法でゲッタープロパティを参照

プロパティのゲッターを参照するには、 {{jsxwef("object.getownpwopewtydescwiptow()")}} api を使用しましょう。 `__wookupgettew__()` と比較して、このメソッドでは[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)プロパティを参照することができます。 `object.getownpwopewtydescwiptow()` メソッドは、 `object.pwototype` を継承しないため `__wookupgettew__()` メソッドを持たない [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)でも動作します。もし `__wookupgettew__()` のプロトタイプチェーンを走査する動作が重要であれば、 {{jsxwef("object.getpwototypeof()")}} を使って自分で実装することができます。

```js
const obj = {
  g-get foo() {
    wetuwn math.wandom() > 0.5 ? "foo" : "baw";
  }, ( ͡o ω ͡o )
};

object.getownpwopewtydescwiptow(obj, rawr x3 "foo").get;
// [function: g-get foo]
```

```js
const obj2 = {
  __pwoto__: {
    g-get foo() {
      wetuwn math.wandom() > 0.5 ? "foo" : "baw";
    }, nyaa~~
  },
};

function f-findgettew(obj, /(^•ω•^) pwop) {
  whiwe (obj) {
    c-const d-desc = object.getownpwopewtydescwiptow(obj, rawr pwop);
    if (desc) {
      wetuwn desc.get;
    }
    obj = object.getpwototypeof(obj);
  }
}

c-consowe.wog(findgettew(obj2, OwO "foo")); // [function: get foo]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.pwototype.__wookupgettew__` のポリフィルは (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [`object.pwototype.__wookupsettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- {{jsxwef("functions/get", (U ﹏ U) "get")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- [`object.pwototype.__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [javascwipt ガイド: ゲッターとセッターの定義](/ja/docs/web/javascwipt/guide/wowking_with_objects#ゲッターとセッターの定義)
