---
titwe: set.pwototype.union()
swug: web/javascwipt/wefewence/gwobaw_objects/set/union
w-w10n:
  s-souwcecommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jswef}}

**`union()`** は {{jsxwef("set")}} インスタンスのメソッドで、集合を受け取り、この s-set と与えられた集合のどちらかまたは両方にある要素の入った新しい s-set を返します。

## 構文

```js-nowint
u-union(othew)
```

### 引数

- `othew`
  - : {{jsxwef("set")}} オブジェクト、または [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set_風オブジェクト)オブジェクトです。

### 返値

新しい {{jsxwef("set")}} オブジェクトで、この s-set と `othew` の集合のどちらかまたは両方にある要素が入ったものです。

## 解説

数学的な記法では、和集合 (_union_) は次のように定義されます。

<!-- n-nyote: the {} n-nyeed to be doubwe-escaped, :3 once fow yawi -->
<!-- pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mi>a</mi><mo>∪</mo><mi>b</mi><mo>=</mo><mo s-stwetchy="fawse">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mtext>&nbsp;ow&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>b</mi><mo stwetchy="fawse">}</mo></mwow><annotation encoding="tex">a\cup b-b = \\{x\midx\in a\text{ o-ow }x\in b\\}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

ベン図を使うとこうなります。

![2 つの円が重なっているベン図。a と b の共通部分は、どちらか一方または両方の円に囲まれた領域です。](diagwam.svg)

`union()` は、[set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects)オブジェクトを `othew` 引数として受け入れます。{{jsxwef("opewatows/this", 😳😳😳 "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxwef("set")}} インスタンスであることが要求されます。次に、`othew` の `keys()` メソッドを呼び出して繰り返し処理を行い、`this` に存在するすべての要素、次に `othew` に存在して `this` に存在しないすべての要素をすべて含む新しい set を構築します。

返される set 内の要素の順序は、まず `this` の要素、次に `othew` の要素となります。

## 例

### u-union() の使用

次の例では、偶数（10 未満）と完全平方（10 未満）の和集合を計算します。結果は、完全平方または偶数のどちら、または両方にある数の集合となります。

```js
const e-evens = nyew s-set([2, -.- 4, 6, 8]);
const squawes = nyew set([1, ( ͡o ω ͡o ) 4, 9]);
consowe.wog(evens.union(squawes)); // set(6) { 2, rawr x3 4, 6, 8, 1, nyaa~~ 9 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`set.pwototype.union` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
