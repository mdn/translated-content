---
title: "Window: pageshow イベント"
slug: Web/API/Window/pageshow_event
---

{{APIRef("HTML DOM")}}

**`pageshow`** イベントは、操作によってブラウザーがウィンドウの文書を表示したときに {{domxref("Window")}} へ送られます。これには以下のようなものがあります。

- 最初にページを読み込んだとき
- 同じウィンドウまたはタブの中で、他のページからそのページへ移動してきたとき
- モバイル OS で凍結されたページを復元したとき
- ブラウザーの進む、戻るボタンを利用してこのページに戻ったとき

> **メモ:** 最初にページを読み込んでいる間、 `pageshow` イベントは {{domxref("Window/load_event", "load")}} イベントの*後で*発生します。

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
      <td>{{domxref("PageTransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("Window.onpageshow", "onpageshow")}}</td>
    </tr>
  </tbody>
</table>

## 例

この例は配列 `events` の中に列挙されたイベントのイベントハンドラーを設定します。ハンドラーである `eventLogger()` は、発生したイベントの種類と、 {{domxref("PageTransitionEvent.persisted", "persisted")}} フラグの値を `pageshow` および `pagehide` イベントの場合に含めてコンソールに出力します。

### JavaScript

```js
const events = [
  "pagehide", "pageshow",
  "unload", "load"
];

const eventLogger = event => {
  switch (event.type) {
    case "pagehide":
    case "pageshow":
      let isPersisted = event.persisted ? "persisted" : "not persisted";
      console.log('Event:', event.type, '-', isPersisted);
      break;
    default:
      console.log('Event:', event.type);
      break;
  }
};

events.forEach(eventName =>
  window.addEventListener(eventName, eventLogger)
);
```

### HTML

```html
<p>コンソールを開き、このページに出入りしたときの出力を見てください。
このタブに新しいページを読み込んだり、履歴で前後に移動したりして、
イベントのログへの出力を見てください。</p>
```

### 結果

{{EmbedLiveSample("Example", 640, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.pageshow_event")}}

## 関連情報

- {{domxref("Window.onpageshow", "onpageshow")}} イベントハンドラープロパティ
- {{domxref("Window.pagehide_event", "pagehide")}}
