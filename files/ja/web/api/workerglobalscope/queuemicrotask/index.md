---
title: "WorkerGlobalScope: queueMicrotask() メソッド"
short-title: queueMicrotask()
slug: Web/API/WorkerGlobalScope/queueMicrotask
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

**`queueMicrotask()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、ブラウザーのイベントループへ制御が戻る前の安全なタイミングで実行されるマイクロタスクをキューに入れます。

マイクロタスク (microtask) とは、現在のタスクが完了し実行コンテキストの制御がブラウザーのイベントループへ戻る前、他に保留中のコードがなくなった時点で走る短い関数です。

これを利用すると他の（優先度が高いであろう）保留中のコードへ干渉することなく、ブラウザーが実行コンテキストの制御を取り戻す前に完了させたい処理を走らせることができます。マイクロタスクの使い方や使う理由については[マイクロタスクのガイド](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)で詳しく学ぶことができます。

マイクロタスクの重要性はタスクを非同期かつ指定の順序で実行することです。詳しくは[JavaScript で `queueMicrotask()` によるマイクロタスクの使用](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)をご覧ください。

マイクロタスクはライブラリーやフレームワークで必要なクリーンアップなど、描画直前のタスクに特に有用です。

## 構文

```js-nolint
queueMicrotask(callback)
```

### 引数

- `callback`
  - : コードを呼んでも安全だとブラウザーエンジンが判断したときに実行される {{jsxref("function", "関数")}} 。キューに入れられたマイクロタスクは全ての保留中のタスクが完了した後、制御をブラウザーのイベントループへ渡す前に実行されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
queueMicrotask(() => {
  // ここに関数の内容
});
```

[queueMicrotask の仕様書](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing)より

```js
MyElement.prototype.loadData = function (url) {
  if (this._cache[url]) {
    queueMicrotask(() => {
      this._setData(this._cache[url]);
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        this._cache[url] = data;
        this._setData(data);
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.queueMicrotask()")}}
- [`queueMicrotask` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#queuemicrotask)
- [JavaScript で queueMicrotask() によるマイクロタスクの使用](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [非同期 JavaScript](/ja/docs/Learn_web_development/Extensions/Async_JS)
- [queueMicrotask explainer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) by Jake Archibald
