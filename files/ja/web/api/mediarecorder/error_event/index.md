---
title: 'MediaRecorder: error イベント'
slug: Web/API/MediaRecorder/error_event
---

{{APIRef}}

{{domxref("MediaRecorder")}} インターフェイスの `error` イベントは、エラーが発生したときに発生します。 例えば、記録が許可されていない、またはサポートされていないコーデックを使用して試みられたなどです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブル</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("MediaRecorderErrorEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラプロパティ</th>
      <td>
        <code
          ><a href="/ja/docs/Web/API/MediaRecorder/onerror">onerror</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

考えられるすべてのエラーの詳細については、イベントハンドラプロパティ [`onerror`](/ja/docs/Web/API/MediaRecorder/onerror) のドキュメントを参照してください。

## 例

[`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を使って `error` イベントを監視します。

```js
async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    const recorder = new MediaRecorder(stream);
    recorder.addEventListener('error', (event) => {
        console.error(`error recording stream: ${event.error.name}`)
    });
    recorder.start();
}

record();
```

上と同じですが、`onerror` イベントハンドラプロパティを使用します。

```js
async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    const recorder = new MediaRecorder(stream);
    recorder.onerror = (event) => {
        console.error(`error recording stream: ${event.error.name}`)
    };
    recorder.start();
}

record();
```

## 仕様

| 仕様                                                                             | 状態                                         |
| -------------------------------------------------------------------------------- | -------------------------------------------- |
| {{SpecName('MediaStream Recording', '#errorevent-section')}} | {{Spec2('MediaStream Recording')}} |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.error_event")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
