---
title: "Performance: timeOrigin プロパティ"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`timeOrigin`** は {{domxref("Performance")}} インターフェイスの読み取り専用プロパティで、パフォーマンス関連のタイムスタンプのベースラインとして使用する高解像度のタイムスタンプを返します。

ウィンドウコンテキストでは、この値がナビゲーションを開始した時刻を表します。 {{domxref("Worker")}} および {{domxref("ServiceWorker")}} コンテキストでは、この値はワーカーが実行された時刻を表します。このプロパティを使用して、コンテキスト間で時刻の原点を同期することができます (下記例を参照)。

> [!NOTE]
> `performance.timeOrigin` の値は、その時刻で実行された {{jsxref("Date.now()")}} が返す値と異なる場合があります。これは、 `Date.now()` がシステムやユーザーのクロック調整、クロックスキューなどの影響を受けることがあるからです。 `timeOrigin` プロパティは [monotonic clock](https://w3c.github.io/hr-time/#dfn-monotonic-clock) であり、現在の時刻が減少することはなく、これらの調整の影響を受けません。

## 値

現在の文書のライフタイムの始まりとみなされる高解像度のタイムスタンプ。このように計算されます。

- スクリプトの{{Glossary("global object", "グローバルオブジェクト")}}が{{domxref("Window", "ウィンドウ")}}の場合、時刻の原点は以下のように決定されます。
  - 現在の {{domxref("Document")}} が `Window` 内で最初に読み込まれたものである場合、時刻の原点は閲覧コンテキストが作成された時刻になります。
  - ウィンドウ内の前回読み込んだ文書をアンロードする過程で、前のページから離れるかどうかをユーザーに確認させるための確認ダイアログが表示された場合、時刻の原点は、ユーザーが新しいページに移動することが受け入れられるかどうかを確認した時刻 `:` となります。
  - もし上記のどちらも時刻の原点を決定しない場合、時刻の原点はウィンドウの現在の `Document` を作成するナビゲーションが配置された時刻になります。

- スクリプトのグローバルオブジェクトが {{domxref("WorkerGlobalScope")}} の場合（つまり、スクリプトがウェブワーカーとして実行されている場合）、時刻の原点はワーカーが作成された時点になります。
- 他のすべての場合、時刻の原点は不定です。

## 例

### コンテキスト間で時刻を同期

ウィンドウとワーカーのコンテキストで異なる時刻の原点を考慮するために、 `timeOrigin` プロパティの助けによりワーカースクリプトから来るタイムスタンプを変換することができます。

worker.js では

```js
self.addEventListener("connect", (event) => {
  const port = event.ports[0];

  port.onmessage = function (event) {
    const workerTaskStart = performance.now();
    // doSomeWork()
    const workerTaskEnd = performance.now();
  };

  // ワーカー相対のタイムスタンプを絶対タイムスタンプに変換し、ウィンドウに送信します。
  port.postMessage({
    startTime: workerTaskStart + performance.timeOrigin,
    endTime: workerTaskEnd + performance.timeOrigin,
  });
});
```

main.js では

```js
const worker = new SharedWorker("worker.js");
worker.port.addEventListener("message", (event) => {
  // 絶対タイムスタンプをウィンドウ相対タイムスタンプに変換
  const workerTaskStart = event.data.startTime - performance.timeOrigin;
  const workerTaskEnd = event.data.endTime - performance.timeOrigin;

  console.log("ワーカータスクの開始: ", workerTaskStart);
  console.log("ワーカータスクの終了: ", workerTaskEnd);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
