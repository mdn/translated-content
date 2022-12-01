---
title: HTMLMediaElement.srcObject
slug: Web/API/HTMLMediaElement/srcObject
---

{{APIRef("HTML DOM")}}

**`srcObject`** は {{domxref("HTMLMediaElement")}} インターフェイスのプロパティで、 {{domxref("HTMLMediaElement")}} に関連付けられたメディアソースを提供するオブジェクトを設定または取得します。

このオブジェクトは {{domxref("MediaStream")}}、{{domxref("MediaSource")}}、{{domxref("Blob")}} や（Blob から派生している） {{domxref("File")}} です。

> **メモ:** 2020 年 3 月現在、 Safari のみが `MediaStream` 以外のオブジェクトを設定することに対応しています。他のブラウザーが追いつくまで、 `MediaSource`、`Blob`、および `File` の場合は、{{domxref("URL.createObjectURL()")}} を使用して URL を作成し、それを {{domxref("HTMLMediaElement.src")}} に割り当てる必要があります。以下の例を参照してください。

## 値

{{domxref('MediaStream')}}、{{domxref('MediaSource')}}、{{domxref('Blob')}}、{{domxref('File')}} オブジェクト。（実際に何が対応されているのかは互換性一覧表を確認してください。)

## 使用上の注意

メディアソース仕様書の古いバージョンでは、オブジェクト URL を作成するために {{domxref("URL.createObjectURL", "createObjectURL()")}} を使用してから、その URL を {{domxref("HTMLMediaElement.src", "src")}} に設定する必要がありました。 現在は、{{domxref("MediaStream")}} を `srcObject` に直接設定できます。

## 例

### 基本的な例

この例では、メディアソースを新しく作成した {{HTMLElement("video")}} 要素に割り当てています。

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
const video = document.createElement('video');
video.srcObject = mediaStream;
```

この例では、新しい {{domxref('MediaSource')}} が新しく作成された {{HTMLElement("video")}} に割り当てられます。

```js
const mediaSource = new MediaSource();
const video = document.createElement('video');
video.srcObject = mediaSource;
```

### src プロパティへの代替の対応

以下の例では、 `srcObject` に対応していない場合、オブジェクト URL を作成して `src` に代入する必要がある古いバージョンのブラウザーに対応しています。

最初に、カメラから取得した {{domxref("MediaStream")}} を新しく生成した {{HTMLElement("video")}} 要素に、古いブラウザーへの代替手段つきで割り当てます。

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
const video = document.createElement('video');
if ('srcObject' in video) {
  video.srcObject = mediaStream;
} else {
  // この機能はなくなる予定であるため、新しいブラウザーでは使用を避けてください。
  video.src = URL.createObjectURL(mediaStream);
}
```

次に、新しく作成された {{HTMLElement("video")}} 要素に、古いブラウザーや {{domxref('MediaSource')}} の割り当てにまだ対応していないブラウザーのための代替手段を直接割り当てます。

```js
const mediaSource = new MediaSource();
const video = document.createElement('video');
// 古いブラウザーの場合、srcObject がない場合があります。
if ('srcObject' in video) {
  try {
    video.srcObject = mediaSource;
  } catch (err) {
    if (err.name != "TypeError") {
      throw err;
    }
    // 対応していても、 MediaStream にしか対応していない場合があります。
    video.src = URL.createObjectURL(mediaSource);
  }
} else {
  video.src = URL.createObjectURL(mediaSource);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
