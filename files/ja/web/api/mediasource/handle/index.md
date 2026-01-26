---
title: "MediaSource: handle プロパティ"
short-title: handle
slug: Web/API/MediaSource/handle
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`handle`** は {{domxref("MediaSource")}} インターフェイスの読み取り専用プロパティで、 {{domxref("MediaSourceHandle")}} オブジェクトを返します。このオブジェクトは `MediaSource` のプロキシーであり、専用ワーカーからメインスレッドに戻り、{{domxref("HTMLMediaElement.srcObject")}} プロパティを介してメディア要素に結び付けられます。

> [!NOTE]
> `handle` は専用ワーカー内の {{domxref("MediaSource")}} インスタンスでのみ表示されます。

専用ワーカー内で作成された `MediaSource` オブジェクトは、それぞれ自分自身で個別の `MediaSourceHandle` を保有します。 `handle` ゲッターは常に、関連する専用ワーカー `MediaSource` インスタンス固有の `MediaSourceHandle` インスタンスを返します。ハンドルが既に {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} を使用してメインスレッドに移譲されている場合、ワーカー内のハンドルインスタンスは技術的に切り離され、再度移譲することはできません。

## 値

{{domxref("MediaSourceHandle")}} オブジェクトインスタンスです。

## 例

`handle` プロパティは専用ワーカーの内部でアクセスすることができ、結果 {{domxref("MediaSourceHandle")}} オブジェクトは {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} 呼び付けによってワーカーを作成したスレッド (この場合はメインスレッド) に移譲されます。

```js
// Inside dedicated worker
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Transfer the handle to the context that created the worker
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // Await sourceopen on MediaSource before creating SourceBuffers
  // and populating them with fetched media — MediaSource won't
  // accept creation of SourceBuffers until it is attached to the
  // HTMLMediaElement and its readyState is "open"
});
```

メインスレッドでは、{{domxref("Worker.message_event", "message")}} イベント ハンドラーを介してハンドルを受け取り、 {{domxref("HTMLMediaElement.srcObject")}} プロパティを介して {{htmlelement("video")}} に取り付け、{{domxref("HTMLMediaElement.play()", "再生")}} 動画を再生します。

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> [!NOTE]
> {{domxref("MediaSourceHandle")}}は、共有ワーカーまたはサービスワーカーからは正常に移譲できません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSE-in-Workers Demo by Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- {{domxref("Media Source Extensions API", "メディアソース拡張 API", "", "nocode")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
