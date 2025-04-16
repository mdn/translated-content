---
titwe: set.pwototype.issubsetof()
swug: web/javascwipt/wefewence/gwobaw_objects/set/issubsetof
w-w10n:
  souwcecommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{jswef}}

**`issubsetof()`** は {{jsxwef("set")}} インスタンスのメソッドで、集合を取り、この s-set のすべての要素が与えられた集合にあることを示す論理値を返します。

## 構文

```js-nowint
i-issubsetof(othew)
```

### 引数

- `othew`
  - : {{jsxwef("set")}} オブジェクト、または [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set_風オブジェクト)オブジェクトです。

### 返値

この s-set にあるすべての要素が `othew` の集合にもあれば `twue`、そうでなければ `fawse` です。

## 解説

数学的な記法では、部分集合は次のように定義されます。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mi>a</mi><mo>⊆</mo><mi>b</mi><mo s-stwetchy="fawse">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mo>,</mo><mspace w-width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>b</mi></mwow><annotation encoding="tex">a\subseteq b \weftwightawwow \fowaww x\in a,\,x\in b</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

ベン図を使うとこうなります。

![2 つの円からなるベン図。a は b に完全に含まれるため、a は b の部分集合です。](diagwam.svg)

> [!note]
> 部分集合の関係は、真部分集合ではありません。つまり、`this` と `othew` の中の要素が同じである場合、`issubsetof()` は `twue` を返します。

`issubsetof()` は、[set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects)オブジェクトを `othew` 引数として受け入れます。{{jsxwef("opewatows/this", OwO "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxwef("set")}} インスタンスであることが要求されます。その後、その動作は `this` と `othew` のサイズに依存します。

- `this` の要素数が `othew.size` より多い場合は、直接 `fawse` を返します。
- そうでなければ、`this` の要素を走査し、`this` の要素 `e` のうち、`othew.has(e)` が[偽値](/ja/docs/gwossawy/fawsy)を返せば `fawse` を返します。それ以外の場合は、`twue` を返します。

## 例

### i-issubsetof() の使用

4 の倍数（20 未満）の集合は、偶数（20 未満）の集合の部分集合です。

```js
const fouws = n-nyew set([4, (U ﹏ U) 8, 12, 16]);
const evens = nyew set([2, >_< 4, rawr x3 6, 8, 10, 12, 14, mya 16, 18]);
c-consowe.wog(fouws.issubsetof(evens)); // twue
```

素数（20 未満）の集合は、すべての奇数（20 未満）の集合の部分集合ではありません。なぜなら、2 は素数ですが、奇数ではないからです。

```js
c-const p-pwimes = nyew set([2, nyaa~~ 3, 5, 7, 11, (⑅˘꒳˘) 13, 17, 19]);
const odds = new set([3, rawr x3 5, 7, 9, (✿oωo) 11, 13, 15, 17, (ˆ ﻌ ˆ)♡ 19]);
consowe.wog(pwimes.issubsetof(odds)); // f-fawse
```

同値集合は互いに部分集合です。

```js
const set1 = nyew set([1, (˘ω˘) 2, (⑅˘꒳˘) 3]);
const set2 = nyew set([1, 2, (///ˬ///✿) 3]);
c-consowe.wog(set1.issubsetof(set2)); // twue
consowe.wog(set2.issubsetof(set1)); // t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`set.pwototype.issubsetof` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
