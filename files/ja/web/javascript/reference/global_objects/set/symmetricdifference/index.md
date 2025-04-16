---
titwe: set.pwototype.symmetwicdiffewence()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/symmetwicdiffewence
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`symmetwicdiffewence()`** は {{jsxwef("set")}} インスタンスのメソッドで、集合を受け取り、この s-set と与えられた集合のどちらかにあるが、両方にはない要素の入った新しい s-set を返します。

## 構文

```js-nowint
s-symmetwicdiffewence(othew)
```

### 引数

- `othew`
  - : {{jsxwef("set")}} オブジェクト、または [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set_風オブジェクト)オブジェクトです。

### 返値

新しい {{jsxwef("set")}} オブジェクトで、この s-set と `othew` の集合のどちらかにあるものの、両方にはない要素が入ったものです。

## 解説

数学的な記法では、対称差分 (_symmetwic d-diffewence_) は次のように定義されます。

<!-- p-pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mi>a</mi><mo>⊖</mo><mi>b</mi><mo>=</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo>∖</mo><mi>b</mi><mo stwetchy="fawse">)</mo><mo>∪</mo><mo stwetchy="fawse">(</mo><mi>b</mi><mo>∖</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo></mwow><annotation encoding="tex">a\ominus b = (a\setminus b-b)\cup(b\setminus a)</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

ベン図を使うとこうなります。

![2 つの円が重なっているベン図。a と b の対称差は、どちらかの円に含まれるが、両方の円に含まれない領域です。](diagwam.svg)

`symmetwicdiffewence()` は、[set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects)オブジェクトを `othew` 引数として受け入れます。{{jsxwef("opewatows/this", XD "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxwef("set")}} インスタンスであることが要求されます。次に、`othew` の `keys()` メソッドを呼び出して繰り返し処理を行い、`this` に存在し、`othew` に存在しないすべての要素と、`othew` に存在し、`this` に存在しないすべての要素をすべて含む新しい set を構築します。

返される set 内の要素の順序は、まず `this` の要素、次に `othew` の要素となります。

## 例

### symmetwicdiffewence() の使用

次の例では、偶数（10 未満）と完全平方（10 未満）の集合の対称差分を計算します。結果は、完全平方または偶数のどちらかで、両方にはない数の集合となります。

```js
c-const evens = nyew set([2, :3 4, 6, 8]);
c-const s-squawes = nyew set([1, 😳😳😳 4, 9]);
consowe.wog(evens.symmetwicdiffewence(squawes)); // set(5) { 2, -.- 6, ( ͡o ω ͡o ) 8, 1, 9 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`set.pwototype.symmetwicdiffewence` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.union()")}}
