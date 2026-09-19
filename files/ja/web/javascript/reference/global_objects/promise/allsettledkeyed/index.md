---
title: Promise.allSettledKeyed()
short-title: allSettledKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettledKeyed
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

{{SeeCompatTable}}

**`Promise.allSettledKeyed()`** 静的メソッドは {{jsxref("Promise.allSettled()")}} と同様ですが、入力や出力として配列や反復可能オブジェクトではなく、オブジェクトを使用するという点が異なります。それぞれのキーがプロミスに関連付けられたオブジェクトを受け取り、単一の {{jsxref("Promise")}} を返します。この返されたプロミスは、入力されたプロミスがすべて決定された時点でオブジェクトで履行され、そのオブジェクトは、それぞれのプロミスの結果を同じキーで示します。

{{jsxref("Promise.allSettled()")}} と比較して、`Promise.allSettledKeyed()` を使用すると、保守が困難になりがちな任意の配列の順序ではなく、意味的に意味のあるキーを結果に関連付けることができます。

## 構文

```js-nolint
Promise.allSettledKeyed(object)
```

### 引数

- `object`
  - : オブジェクト。そのすべての[自身の列挙可能なプロパティ](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)は、キーが文字列であるかシンボルであるかを問わず、{{jsxref("Promise")}} の値を持つ必要があります。これらの値は [await](/ja/docs/Web/JavaScript/Reference/Operators/await) されるため、それ以外の [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) も解決されますが、thenable でないものはそのまま返されます。

### 結果

次のような {{jsxref("Promise")}} です。

- 渡された `object` に自身の列挙可能なプロパティがない場合は、**履行済み**になります。
- 指定された `object` 内のすべてのプロミスが決定（履行または拒否）された場合は、**非同期に履行**されます。履行値はオブジェクトであり、指定された `object` と同じキーを同じ順序で持ち、それぞれのプロパティの値は、完了順序に関係なく、`object` 内の対応するプロミスの結果を表します。それぞれの結果オブジェクトには、以下のプロパティがあります。
  - `status`
    - : プロミスの最終的な状態を示す文字列で、`"fulfilled"` または `"rejected"` のどちらかです。
  - `value`
    - : `status` が `"fulfilled"` の場合にのみ存在します。プロミスの履行値です。
  - `reason`
    - : `status` が `"rejected"` の場合にのみ存在します。プロミスが拒否された理由です。。

  渡された `object` が空ではないものの、待機中のプロミスが含まれていない場合でも、返されるプロミスは同期的ではなく、非同期で履行されます。

## 解説

`Promise.allSettledKeyed()` メソッドは、[プロミス並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency)に関連するメソッドの一つです。これは {{jsxref("Promise.allSettled()")}} と同様の処理を行います。`Promise.allSettledKeyed()` は、プロミスの配列をまだ持っていない場合や、結果を直ちに構造分解したい場合にお勧めです。詳細については、{{jsxref("Promise.allKeyed()")}} を参照してください。

## 例

### Promise.allSettledKeyed() の使用

`Promise.allSettledKeyed()` メソッドは、オブジェクトを受け取り、そのオブジェクトの自分自身で列挙可能なプロパティをすべて処理します。

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

const result = await Promise.allSettledKeyed(promises);
console.log(result);
// {
//   a: { status: "fulfilled", value: "a" },
//   [sym]: { status: "fulfilled", value: "symbol" },
//   nested: { status: "fulfilled", value: { b: <Promise> } },
// }
```

`Promise.allSettled()` および `Promise.allSettledKeyed()` に共通する並行処理の挙動に関するその他の例については、{{jsxref("Promise.allSettled()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise.allSettledKeyed` のポリフィル (`core-js`)](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims による `Promise.allSettledKeyed` のポリフィル](https://www.npmjs.com/package/promise.allsettledkeyed)
- {{jsxref("Promise")}}
- {{jsxref("Promise.allKeyed()")}}
- {{jsxref("Promise.allSettled()")}}
