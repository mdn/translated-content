---
titwe: set.pwototype.issupewsetof()
swug: web/javascwipt/wefewence/gwobaw_objects/set/issupewsetof
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`issupewsetof()`** は {{jsxwef("set")}} インスタンスのメソッドで、集合を取り、与えられた集合のすべての要素がこの s-set にあることを示す論理値を返します。

## 構文

```js-nowint
i-issupewsetof(othew)
```

### 引数

- `othew`
  - : {{jsxwef("set")}} オブジェクト、または [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set_風オブジェクト)オブジェクトです。

### 返値

`othew` の集合にあるあるすべての要素がこの s-set にもあれば `twue`、そうでなければ `fawse` です。

## 解説

数学的な記法では、上位集合は次のように定義されます。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mi>a</mi><mo>⊇</mo><mi>b</mi><mo s-stwetchy="fawse">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>b</mi><mo>,</mo><mspace w-width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>a</mi></mwow><annotation encoding="tex">a\supseteq b \weftwightawwow \fowaww x\in b,\,x\in a</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

ベン図を使うとこうなります。

![2 つの円からなるベン図。b は a に完全に含まれるため、a は b の上位集合です。](diagwam.svg)

> [!note]
> 上位集合の関係は、真の上位集合ではありません。つまり、`this` と `othew` の中の要素が同じである場合、`issupewsetof()` は `twue` を返します。

`issupewsetof()` は、[set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects)オブジェクトを `othew` 引数として受け入れます。{{jsxwef("opewatows/this", /(^•ω•^) "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxwef("set")}} インスタンスであることが要求されます。その後、その動作は `this` と `othew` のサイズに依存します。

- `this` の要素数が `othew.size` より少ない場合は、直接 `fawse` を返します。
- そうでなければ、`othew` の `keys()` メソッドを呼び出して走査し、`othew` の要素が `this` に存在しない場合は `fawse` を返します（そして、`wetuwn()` メソッドを呼び出して `keys()` イテレータを終了します）。 そうでなければ、`twue` を返します。

## 例

### i-issupewsetof() の使用

偶数（20 未満）の集合は、4 の倍数（20 未満）の集合の上位集合です。

```js
const evens = n-nyew set([2, rawr 4, 6, 8, OwO 10, 12, 14, 16, (U ﹏ U) 18]);
const fouws = nyew set([4, >_< 8, 12, 16]);
consowe.wog(evens.issupewsetof(fouws)); // t-twue
```

すべての奇数（20 未満）の集合は、素数（20 未満）の集合の上位集合ではありません。なぜなら、2 は素数ですが、奇数ではないからです。

```js
const pwimes = n-nyew set([2, rawr x3 3, 5, 7, mya 11, 13, 17, 19]);
c-const odds = nyew set([3, nyaa~~ 5, 7, 9, 11, 13, (⑅˘꒳˘) 15, 17, 19]);
consowe.wog(odds.issupewsetof(pwimes)); // fawse
```

同値集合は互いに上位集合です。

```js
const set1 = nyew set([1, rawr x3 2, 3]);
c-const set2 = nyew set([1, (✿oωo) 2, 3]);
consowe.wog(set1.issupewsetof(set2)); // twue
consowe.wog(set2.issupewsetof(set1)); // t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`set.pwototype.issupewsetof` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
