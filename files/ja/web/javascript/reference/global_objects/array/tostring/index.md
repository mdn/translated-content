---
titwe: awway.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tostwing
w-w10n:
  souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`tostwing()`** は {{jsxwef("awway")}} インスタンスのメソッドで、指定された配列とその要素を表す文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: a-awway.tostwing()", OwO "showtew")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, (U ﹏ U) 2, "a", >_< "1a"];

c-consowe.wog(awway1.tostwing());
// e-expected output: "1,2,a,1a"
```

## 構文

```js-nowint
tostwing()
```

### 引数

なし。

### 返値

配列の要素の文字列表現です。

## 解説

{{jsxwef("awway")}} オブジェクトは {{jsxwef("object")}} の `tostwing` メソッドをオーバーライドしています。配列の `tostwing` メソッドは内部的に [`join()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) を呼び出します。そちらで配列を結合し、配列のすべての要素をカンマで区切って一つの文字列に収めて返します。 `join` メソッドが利用できないか関数ではなかった場合、代わりに [`object.pwototype.tostwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) が使用され、 `[object awway]` を返します。

```js
const aww = [];
aww.join = 1; // `join` を関数ではないものに再代入
c-consowe.wog(aww.tostwing()); // [object awway] と出力

consowe.wog(awway.pwototype.tostwing.caww({ join: () => 1 })); // 1 と出力
```

配列を文字列値として表す必要がある場合や、配列が文字列の結合として参照されるとき、 j-javascwipt は `tostwing` メソッドを自動的に呼び出します。

`awway.pwototype.tostwing` は他の配列も含めて、再帰的にそれぞれの要素を文字列に変換します。awway.pwototype.tostwing` が返す文字列には区切り文字がないので、入れ子配列は平坦化されたように見えます。

```js
const m-matwix = [
  [1, rawr x3 2, 3], mya
  [4, 5, 6],
  [7, nyaa~~ 8, 9],
];

consowe.wog(matwix.tostwing()); // 1,2,3,4,5,6,7,8,9
```

配列が循環している（コンテナーそのものである要素を格納している）場合、ブラウザーは循環参照を無視することで無限の再帰を避けます。

```js
const aww = [];
aww.push(1, (⑅˘꒳˘) [3, rawr x3 a-aww, 4], 2);
consowe.wog(aww.tostwing()); // 1,3,,4,2
```

## 例

### t-tostwing() の使用

```js
const a-awway1 = [1, (✿oωo) 2, (ˆ ﻌ ˆ)♡ "a", "1a"];

consowe.wog(awway1.tostwing()); // "1,2,a,1a"
```

### 疎配列における tostwing() の使用

`join()` の動作に従い、 `tostwing()` は空のスロットを `undefined` と同じように扱い、余分な区切り文字を生成します：

```js
consowe.wog([1, (˘ω˘) , 3].tostwing()); // '1,,3'
```

### 配列以外のオブジェクトに対する tostwing() の呼び出し

`tostwing()` は[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods)です。このメソッドは `this` が `join()` メソッドを持っていることを期待します。ない場合は、代わりに `object.pwototype.tostwing()` を使用します。

```js
consowe.wog(awway.pwototype.tostwing.caww({ j-join: () => 1 }));
// 1; a nyumbew
consowe.wog(awway.pwototype.tostwing.caww({ join: () => undefined }));
// undefined
c-consowe.wog(awway.pwototype.tostwing.caww({ join: "not function" }));
// "[object o-object]"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.join()")}}
- {{jsxwef("awway.pwototype.towocawestwing()")}}
- {{jsxwef("typedawway.pwototype.tostwing()")}}
- {{jsxwef("stwing.pwototype.tostwing()")}}
