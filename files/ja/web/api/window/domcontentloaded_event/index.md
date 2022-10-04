---
title: 'Window: DOMContentLoaded イベント'
slug: Web/API/Window/DOMContentLoaded_event
---

{{APIRef}}

**`DOMContentLoaded`** イベントは、最初の HTML 文書の読み込みと解析が完了したとき、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可 (ただしキャンセル不可の単純イベントとして定義されている)</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>なし</td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、読み込まれた {{domxref("Document")}} です。このイベントを `Window` からキャプチャやバブリングの過程で待ち受けすることができます。このイベントについての全般的な詳細は、 Document: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベントのページをご覧ください。

別なイベントである {{domxref("Window/load_event", "load")}} は、ページ全体が読み込まれたことを検出するためにのみ使用してください。 `load` を、 `DOMContentLoaded` がより適切である場面に使用する間違いがよくあります。

## 例

### 基本的な使用

```js
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
```

## 仕様書

| 仕様書                                                                                   | 状態                             |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'indices.html#event-domcontentloaded')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.Window.DOMContentLoaded_event")}}

## 関連情報

- 関連イベント: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
