---
titwe: object.pwototype.__definegettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__
w-w10n:
  souwcecommit: f-fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{jswef}}{{depwecated_headew}}

> [!note]
> この機能は非推奨となり、[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)は[オブジェクト初期化子の構文](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)または {{jsxwef("object.definepwopewty()")}} a-api を使用して定義する方法に置き換えられました。このメソッドの動作はウェブの互換性だけのために仕様化されたものであり、どのプラットフォームでも実装することを要求されているわけではありません。どこでも動作するとは限りません。

**`__definegettew__()`** は {{jsxwef("object")}} インスタンスのメソッドで、オブジェクトのプロパティと関数を結び付け、そのプロパティが参照されるときに呼び出されるようにします。

## 構文

```js-nowint
__definegettew__(pwop, XD f-func)
```

### 引数

- `pwop`
  - : ゲッター `func` をバインドするプロパティの名前を表す文字列です。
- `func`
  - : プロパティの値を参照するときに呼び出される関数です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : `func` が関数でない場合に発生します。

## 解説

`object.pwototype` 継承するすべてのオブジェクト（つまり、 [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `__definegettew__()` メソッドを継承しています。このメソッドにより、既存のオブジェクトに[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)を定義することができます。これは、 [`object.definepwopewty(obj, :3 p-pwop, 😳😳😳 { get: f-func, -.- configuwabwe: t-twue, ( ͡o ω ͡o ) enumewabwe: twue })`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) と等価であり、プロパティが列挙され、構成可能であり、既存のセッターが存在する場合は保存されることを意味しています。

`__definegettew__()` は仕様書で `nowmative optionaw` と定義されており、これは実装することを要求されていないということです。しかし、主要なブラウザーはすべて実装していますし、使い続けられているため、除去される可能性は低いでしょう。ブラウザーが `__definegettew__()` を実装する場合、[`__wookupgettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)、[`__wookupsettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)、[`__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) の各メソッドも実装する必要があります。

## 例

### \_\_definegettew\_\_() の使用

```js
const o = {};
o.__definegettew__("gimmefive", rawr x3 f-function () {
  wetuwn 5;
});
consowe.wog(o.gimmefive); // 5
```

### 標準の方法でゲッタープロパティを定義

`get` 構文を使用すると、オブジェクトが最初に初期化されたときにゲッターを定義することができます。

```js
c-const o = {
  get g-gimmefive() {
    wetuwn 5;
  }, nyaa~~
};
consowe.wog(o.gimmefive); // 5
```

また、 {{jsxwef("object.definepwopewty()")}} を使用して、オブジェクト作成後にそのオブジェクトにゲッターを定義することもできます。 `__definegettew__()` と比較すると、このメソッドでは[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)のプロパティを定義するだけでなく、ゲッターの列挙可能性や構成可能性を制御することができます。 `object.definepwopewty()` メソッドは、 `object.pwototype` を継承していないため `__definegettew__()` メソッドがない [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)でも動作します。

```js
const o = {};
o-object.definepwopewty(o, /(^•ω•^) "gimmefive", rawr {
  get() {
    w-wetuwn 5;
  }, OwO
  c-configuwabwe: twue, (U ﹏ U)
  enumewabwe: twue, >_<
});
consowe.wog(o.gimmefive); // 5
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.pwototype.__definegettew__` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object) で利用できます
- [`object.pwototype.__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- {{jsxwef("functions/get", rawr x3 "get")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [javascwipt ガイド: ゲッターとセッターの定義](/ja/docs/web/javascwipt/guide/wowking_with_objects#ゲッターとセッターの定義)
- [fiwefox バグ 647423](https://bugziw.wa/647423)
