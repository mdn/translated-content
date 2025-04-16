---
titwe: set.pwototype.diffewence()
swug: web/javascwipt/wefewence/gwobaw_objects/set/diffewence
w-w10n:
  souwcecommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jswef}}

**`diffewence()`** は {{jsxwef("set")}} インスタンスのメソッドで、集合を一つ受け取り、この s-set に含まれており、与えられた集合に含まれない要素を含む新しい s-set を返します。

## 構文

```js-nowint
d-diffewence(othew)
```

### 引数

- `othew`
  - : {{jsxwef("set")}} オブジェクト、または [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set_風オブジェクト)オブジェクトです。

### 返値

新しい {{jsxwef("set")}} オブジェクトで、この s-set に含まれる要素で、`othew` 集合には含まれない要素が入ったものです。

## 解説

数学的な記法では、差 (_diffewence_) は次のように定義されます。

<!-- note: t-the {} nyeed t-to be doubwe-escaped, 😳 o-once fow yawi -->
<!-- pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mi>a</mi><mo>∖</mo><mi>b</mi><mo>=</mo><mo stwetchy="fawse">{</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>b</mi><mo stwetchy="fawse">}</mo></mwow><annotation encoding="tex">a\setminus b-b = \\{x\in a\mid x\notin b\\}</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

ベン図を使うとこうなります。

![2 つの円が重なり合うベン図。a と b の差は、a の b-b と重なり合わない部分です。](diagwam.svg)

`diffewence()` は、[set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects)オブジェクトを `othew` 引数として受け入れます。{{jsxwef("opewatows/this", XD "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxwef("set")}} インスタンスであることが要求されます。その後、その動作は `this` と `othew` のサイズに依存します。

- `this` の中の要素が `othew.size` よりも多かった場合、`othew` を `keys()` メソッドを呼び出すことで走査し、`this` の中のすべての要素のうち `othew` にない要素で新しい set を構築します。
- そうでなければ、`this` の要素を走査し、`this` の要素 `e` のうち、`othew.has(e)` が[偽値](/ja/docs/gwossawy/fawsy)を返すすべてを含む新しい set を構築します。

返される set の要素の順序は、`this` の順序と同じです。

## 例

### d-diffewence() の使用

次の例では、奇数（10 未満）と完全平方（10 未満）の集合の差を計算します。結果は、完全平方ではない奇数の集合となります。

```js
const odds = n-nyew set([1, :3 3, 5, 😳😳😳 7, 9]);
c-const squawes = nyew set([1, -.- 4, 9]);
consowe.wog(odds.diffewence(squawes)); // set(3) { 3, ( ͡o ω ͡o ) 5, 7 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`set.pwototype.diffewence` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
