---
title: 'HTMLMediaElement: error イベント'
slug: Web/API/HTMLMediaElement/error_event
tags:
  - API
  - Error
  - Event
  - HTMLMediaElement
  - Reference
  - Web
translation_of: Web/API/HTMLMediaElement/error_event
browser-compat: api.HTMLMediaElement.error_event
---
{{APIRef}}
\*\*\`error\`\*\* イベントは、リソースがエラーのために読み込めなかったときに発生します（例えば、ネットワーク接続の問題など）。

| バブリング                   | なし                                                                     |
| ---------------------------- | ------------------------------------------------------------------------ |
| キャンセル                   | 不可                                                                     |
| インターフェイス             | {{domxref("Event")}}                                             |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onerror", "onerror")}} |

\## 例
\`\`\`js
const video = document.querySelector('video');
const videoSrc = 'https\://path/to/video.webm';
video.addEventListener('error', () => {
console.error(\`Error loading: ${videoSrc}\`);
});
video.setAttribute('src', videoSrc);
\`\`\`
\## 仕様書
{{Specifications}}
\## ブラウザーの互換性
{{Compat}}
\## 関連情報
\- {{domxref("HTMLAudioElement")}}
\- {{domxref("HTMLVideoElement")}}
\- {{HTMLElement("audio")}}
\- {{HTMLElement("video")}}
