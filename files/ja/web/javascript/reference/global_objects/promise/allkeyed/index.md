---
title: Promise.allKeyed()
short-title: allKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allKeyed
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

{{SeeCompatTable}}

**`Promise.allKeyed()`** は静的メソッドは、{{jsxref("Promise.all()")}} と同様に動作しますが、入力や出力として配列や反復可能オブジェクトではなく、オブジェクトを使用するという点が異なります。それぞれのキーがプロミスに関連付けられたオブジェクトを受け取り、単一の {{jsxref("Promise")}} を返します。この返されたプロミスは、入力されたプロミスがすべて履行された時点でオブジェクトで履行され、そのオブジェクトには、それぞれのプロミスの履行値が同じキーに割り当てられます。入力したプロミスのいずれかが拒否された場合は、その最初の拒否理由とともに拒否されます。

{{jsxref("Promise.all()")}} と比較して、`Promise.allKeyed()` を使用すると、保守が困難になりがちな任意の配列の順序ではなく、意味的に意味のあるキーを結果に関連付けることができます。

## 構文

```js-nolint
Promise.allKeyed(object)
```

### 引数

- `object`
  - : オブジェクト。そのすべての[自身の列挙可能なプロパティ](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)は、キーが文字列であるかシンボルであるかを問わず、{{jsxref("Promise")}} の値を持つ必要があります。これらの値は [await](/ja/docs/Web/JavaScript/Reference/Operators/await) されるため、それ以外の [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) も解決されますが、thenable でないものはそのまま返されます。

### 結果

次のような {{jsxref("Promise")}} です。

- 渡された `object` に自身の列挙可能なプロパティがない場合は、**履行済み**になります。
- 指定された `object` 内のすべてのプロミスが履行された場合は、**非同期に履行**されます。履行値は、それぞれの履行値が完了順序にかかわらず、指定された `object` と同じキーを同じ順序で持つオブジェクトです。渡された `object` が空ではないものの、待機中のプロミスを含まない場合でも、返されるプロミスは同期的ではなく非同期的に解決されます。
- 指定された `object` 内のいずれかのプロミスが拒否された場合は、**非同期に拒否**されます。拒否理由は、最初に拒否されたプロミスの拒否理由となります。

## 解説

`Promise.allKeyed()` メソッドは、[プロミス並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency)に関連するメソッドの一つです。これは {{jsxref("Promise.all()")}} と同様の処理を行います。しかし、多くの時点では、最初から Promise の配列を持っているわけではなく、その場その場で操作をまとめて実行したいだけなので、それらを配列に入れてからすぐに構造分解を行います。

```js
const [resultA, resultB, resultC] = await Promise.all([getA(), getB(), getC()]);
```

これの問題点は、両側で順序の一貫性を保つ必要があることです。誤って `[resultA, resultC, resultB]` と記述してしまうと、コードが動作しなくなってしまいます。

keyed メソッドは、それぞれの非同期操作に意味づけされたキーを関連付けることで、この問題を軽減します。

```js
const {
  a: resultA,
  b: resultB,
  c: resultC,
} = await Promise.allKeyed({
  a: getA(),
  b: getB(),
  c: getC(),
});
```

この方法で、順序はできなくなりました。名前の不一致も局所的になるため、うっかり `b: resultC` と書いてしまうようなミスも、以前よりずっと見つけやすくなりました。

## 例

### Promise.allKeyed() の使用

`Promise.allKeyed()` メソッドは、オブジェクトを受け取り、そのオブジェクトの自分自身で列挙可能なプロパティをすべて処理します。

```js
function delayed(value, timeout) {
  return new Promise((res) => setTimeout(() => res(value), timeout));
}

const sym = Symbol("example");

const promises = {
  a: delayed("a", 500),
  // シンボルのプロパティは処理される
  [sym]: delayed("symbol", 300),
  // 入れ子になったプロパティは処理されず、このオブジェクト全体が
  // すでに解決値として扱われ、そのまま返される
  nested: {
    b: delayed("b", 100),
  },
};

const result = await Promise.allKeyed(promises);
console.log(result);
// {
//   a: "a",
//   [sym]: "symbol",
//   nested: {
//     b: <Promise>,
//   },
// }
```

`Promise.all()` および `Promise.allKeyed()` に共通する並行処理の挙動に関するその他の例については、{{jsxref("Promise.all()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise.allKeyed` のポリフィル (`core-js`)](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims による `Promise.allKeyed` のポリフィル](https://www.npmjs.com/package/promise.allkeyed)
- {{jsxref("Promise")}}
- {{jsxref("Promise.allSettledKeyed()")}}
- {{jsxref("Promise.all()")}}
