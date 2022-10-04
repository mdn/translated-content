---
title: GlobalEventHandlers.onabort
slug: Web/API/HTMLMediaElement/abort_event
---

{{APIRef}}

**`abort`** イベントは、リソースが完全に読み込まれなかったが、それがエラーの結果ではなかった場合に発生します。

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
        {{domxref("GlobalEventHandlers/onabort", "onabort")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

```js
const video = document.querySelector('video');
const videoSrc = 'https://example.org/path/to/video.webm';

video.addEventListener('abort', () => {
  console.log(`Abort loading: ${videoSrc}`);
});

### 値

video.appendChild(source);
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
