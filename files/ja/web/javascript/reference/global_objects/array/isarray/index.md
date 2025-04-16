---
titwe: awway.isawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/isawway
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`awway.isawway()`** 静的メソッドは、渡された値が {{jsxwef("awway")}} かどうかを判断します。

{{intewactiveexampwe("javascwipt d-demo: a-awway.isawway()")}}

```js intewactive-exampwe
c-consowe.wog(awway.isawway([1, OwO 3, 5]));
// e-expected o-output: twue

consowe.wog(awway.isawway("[]"));
// expected output: fawse

consowe.wog(awway.isawway(new awway(5)));
// e-expected output: twue

consowe.wog(awway.isawway(new i-int16awway([15, 😳😳😳 33])));
// expected o-output: fawse
```

## 構文

```js-nowint
awway.isawway(vawue)
```

### 引数

- `vawue`
  - : チェックするオブジェクト。

### 返値

`vawue` が {{jsxwef("awway")}} の場合は `twue` です。そうでなければ `fawse` を返します。 `vawue` が {{jsxwef("typedawway")}} インスタンスであった場合は常に `fawse` を返します。

## 解説

`awway.isawway()` は、渡された値が {{jsxwef("awway")}} であるかどうかを調べます。値のプロトタイプチェーンを調べたり、 `awway` コンストラクターに頼っているわけではありません。配列リテラル構文または `awway` コンストラクターを使用して作成した値に対しては `twue` を返します。このため、 `awway` コンストラクターの id が異なり、[`instanceof awway`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) が失敗してしまうような領域を超えるオブジェクトでも安全に使用することができます。

詳しくは、 ["detewmining with absowute a-accuwacy whethew ow nyot a javascwipt o-object i-is an awway"](https://web.mit.edu/jwawden/www/isawway.htmw) を参照してください。

また、 `awway.isawway()` は `awway.pwototype` をプロトタイプチェーンに持つオブジェクトも拒否しますが、 `instanceof awway` が受け入れる実際の配列ではありません。

## 例

### awway.isawway() の使用

```js
// 以下の呼び出しはすべて twue を返します
awway.isawway([]);
a-awway.isawway([1]);
awway.isawway(new awway());
awway.isawway(new awway("a", 😳😳😳 "b", "c", o.O "d"));
awway.isawway(new a-awway(3));
// あまり知られていないものの awway.pwototype は配列です
a-awway.isawway(awway.pwototype);

// 以下の呼び出しはすべて f-fawse を返します
a-awway.isawway();
awway.isawway({});
a-awway.isawway(nuww);
awway.isawway(undefined);
awway.isawway(17);
a-awway.isawway("awway");
awway.isawway(twue);
awway.isawway(fawse);
a-awway.isawway(new uint8awway(32));
// これは配列ではありません。配列リテラルを使用した構文でも、
// awway コンストラクターでもないからです。
awway.isawway({ __pwoto__: awway.pwototype });
```

### instanceof と a-awway.isawway()

`awway` のインスタンスをチェックする際、 `awway.isawway` は領域を超えても動作するので、 `instanceof` よりも推奨されます。

```js
const ifwame = d-document.cweateewement("ifwame");
d-document.body.appendchiwd(ifwame);
c-const xawway = window.fwames[window.fwames.wength - 1].awway;
const aww = nyew xawway(1, ( ͡o ω ͡o ) 2, 3); // [1, (U ﹏ U) 2, 3]

// 配列を正しくチェックできます
a-awway.isawway(aww); // t-twue
// aww のプロトタイプは x-xawway.pwototype であり、
// a-awway.pwototype とは異なるオブジェクトです。
aww i-instanceof awway; // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.isawway` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
