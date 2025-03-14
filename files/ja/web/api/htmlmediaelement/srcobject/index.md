---
title: "HTMLMediaElement: srcObject プロパティ"
short-title: srcObject
slug: Web/API/HTMLMediaElement/srcObject
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("HTML DOM")}}

**`srcObject`** は {{domxref("HTMLMediaElement")}} インターフェイスのプロパティで、 {{domxref("HTMLMediaElement")}} に関連付けられたメディアソースを提供するオブジェクトを設定または取得します。

このオブジェクトは {{domxref("MediaStream")}}、{{domxref("MediaSource")}}、{{domxref("Blob")}} や（Blob から派生している） {{domxref("File")}} です。

> [!NOTE]
> 2020 年 3 月現在、 Safari のみが `srcObject` に対して完全に、すなわち `MediaSource`、`MediaStream`、`Blob`、`File` のオブジェクトを値にすることに対応しています。他のブラウザーは `MediaStream` に対応しています。他のブラウザーが追いつくまで、代替として {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} を使用して URL を作成し、それを {{domxref("HTMLMediaElement.src")}} に代入するようにしてください（以下の例を参照してください）。さらに、バージョン 108 の Chromium は、専用ワーカーの `MediaSource` オブジェクトを、そのオブジェクトの（ワーカーから転送された） {{domxref("MediaSourceHandle")}} インスタンスを `srcObject` に割り当てることで装着することに対応しています。

## 値

{{domxref('MediaStream')}}、{{domxref('MediaSource')}}、{{domxref('Blob')}}、{{domxref('File')}} オブジェクト。（実際に何が対応されているのかは互換性一覧表を確認してください。）

## 使用上の注意

メディアソース仕様書の古いバージョンでは、オブジェクト URL を作成するために {{domxref("URL/createObjectURL_static", "createObjectURL()")}} を使用してから、その URL を {{domxref("HTMLMediaElement.src", "src")}} に設定する必要がありました。 現在は、{{domxref("MediaStream")}} を `srcObject` に直接設定できます。

## 例

### 基本的な例

この例では、メディアソースを新しく作成した {{HTMLElement("video")}} 要素に割り当てています。

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
video.srcObject = mediaStream;
```

この例では、新しい {{domxref('MediaSource')}} が新しく作成された {{HTMLElement("video")}} に割り当てられます。

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
video.srcObject = mediaSource;
```

### src プロパティへの代替の対応

以下の例では、 `srcObject` に対応していない場合、オブジェクト URL を作成して `src` に代入する必要がある古いバージョンのブラウザーに対応しています。

最初に、カメラから取得した {{domxref("MediaStream")}} を新しく生成した {{HTMLElement("video")}} 要素に、古いブラウザーへの代替手段つきで割り当てます。

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
if ("srcObject" in video) {
  video.srcObject = mediaStream;
} else {
  // この機能はなくなる予定であるため、新しいブラウザーでは使用を避けてください。
  video.src = URL.createObjectURL(mediaStream);
}
```

次に、新しく作成された {{HTMLElement("video")}} 要素に、古いブラウザーや {{domxref('MediaSource')}} の割り当てにまだ対応していないブラウザーのための代替手段を直接割り当てます。

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
// 古いブラウザーの場合、srcObject がない場合があります。
if ("srcObject" in video) {
  try {
    video.srcObject = mediaSource;
  } catch (err) {
    if (err.name !== "TypeError") {
      throw err;
    }
    // 対応していても、 MediaStream にしか対応していない場合があります。
    video.src = URL.createObjectURL(mediaSource);
  }
} else {
  video.src = URL.createObjectURL(mediaSource);
}
```

### ワーカーで `MediaSource` を構築し、それをメインスレッドに渡して再生する

専用ワーカー内部で {{domxref("MediaSource.handle")}} プロパティにアクセスでき、結果として {{domxref("MediaSourceHandle")}} オブジェクトが {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} コールによりワーカーを作成したスレッド（この場合はメインスレッド）に転送されます。

```js
// 専用ワーカー内
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// ワーカーを作成したコンテキストでハンドルを処理する
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // MediaSource で sourceopen を待ってから、SourceBuffer を作成し、
  // 取得したメディアを投入してください。MediaSource は、
  // HTMLMediaElement に接続され、その readyState が "open" になるまで
  // SourceBuffer の作成を受け入れません。
});
```

メインスレッドでは、{{domxref("Worker.message_event", "message")}} イベントハンドラーからハンドルを受け取り、 {{htmlelement("video")}} に {{domxref("HTMLMediaElement.srcObject")}} プロパティを通してそれを追加し、{{domxref("HTMLMediaElement.play()", "play")}} ビデオ追加しています。

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **メモ:** {{domxref("MediaSourceHandle")}} は、共有ワーカーまたはサービスワーカーへの、または共有ワーカーを介した移譲は正常にはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
