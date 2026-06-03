---
title: Symbol.asyncIterator
short-title: asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`Symbol.asyncIterator`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.asyncIterator` を表します。[非同期反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)は、オブジェクトの非同期反復子を返すメソッドをこのシンボルで探します。オブジェクトが非同期反復可能であるためには、`[Symbol.asyncIterator]` キーを持つ必要があります。

{{InteractiveExample("JavaScript デモ: Symbol.asyncIterator", "taller")}}

```js interactive-example
const delayedResponses = {
  delays: [500, 1300, 3500],

  wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  },

  async *[Symbol.asyncIterator]() {
    for (const delay of this.delays) {
      await this.wait(delay);
      yield `${delay} ミリ秒の遅延レスポンス`;
    }
  },
};

(async () => {
  for await (const response of delayedResponses) {
    console.log(response);
  }
})();

// 予想される結果: "500 ミリ秒の遅延レスポンス"
// 予想される結果: "1300 ミリ秒の遅延レスポンス"
// 予想される結果: "3500 ミリ秒の遅延レスポンス"
```

## 値

ウェルノウンシンボル `Symbol.asyncIterator` です。

{{js_property_attributes(0, 0, 0)}}

## 例

### ユーザー定義の非同期反復可能項目

オブジェクトに `[Symbol.asyncIterator]()` プロパティを設定することで、独自の非同期イテレーターを定義することができます。

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
  }
})();
// 期待される出力:
// "hello"
// "async"
// "iteration!"
```

API を作成するとき、非同期反復可能項目はデータのストリームやリストのような、*反復可能*なものを表すために設計されたものであり、ほとんどの状況でコールバックやイベントを完全に置き換えるものではないことに注意してください。

### 組み込みの非同期反復可能オブジェクト

コア JavaScript 言語に非同期反復可能オブジェクトはありません。一部の Web API、例えば {{domxref("ReadableStream")}} は既定で `Symbol.asyncIterator` メソッドが設定されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await...of](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of)
