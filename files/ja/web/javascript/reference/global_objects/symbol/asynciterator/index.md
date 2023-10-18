---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
---

{{JSRef}}

**`Symbol.asyncIterator`** は、オブジェクトのデフォルトの AsyncIterator を指定します。このプロパティがオブジェクトに設定されている場合、それは非同期反復可能項目であり、[`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループで使用できます。

## 説明

`Symbol.asyncIterator` シンボルは、オブジェクトの `@@asyncIterator` メソッドにアクセスするための組み込みシンボルです。オブジェクトを非同期で反復可能にするには、`Symbol.asyncIterator` キーが必要です。

{{js_property_attributes(0,0,0)}}

## 例

### ユーザー定義の非同期反復可能項目

オブジェクトに `[Symbol.asyncIterator]` プロパティを設定することで、独自の非同期イテレータを定義することができます。

```js
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
    // 期待される出力:
    // "hello"
    // "async"
    // "iteration!"
  }
})();
```

API を作成するとき、非同期反復可能項目はデータのストリームやリストのような、*反復可能*なものを表すために設計されたものであり、ほとんどの状況でコールバックやイベントを完全に置き換えるものではないことに注意してください。

### 組み込みの非同期反復処理

現在のところ、デフォルトで `[Symbol.asyncIterator]` キーが設定されている組み込み JavaScript オブジェクトはありません。しかし、WHATWG Streams は非同期反復可能な最初の組み込みオブジェクトになるように設定されており、最近 `[Symbol.asyncIterator]` が仕様に組み込まれました。

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{compat("javascript.builtins.Symbol.asyncIterator")}}

## 関連情報

- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await... of](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of)
