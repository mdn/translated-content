---
title: 'HTMLMediaElement: error イベント'
slug: Web/API/HTMLMediaElement/error_event
---

{{APIRef}}

**`error`** イベントは、リソースがエラーのために読み込めなかったときに発生します（例えば、ネットワーク接続の問題など）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onerror", "onerror")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

```js
const video = document.querySelector('video');
const videoSrc = 'https://path/to/video.webm';

video.addEventListener('error', () => {
  console.error(`Error loading: ${videoSrc}`);
});

video.setAttribute('src', videoSrc);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
