---
title: "Window: pageshow イベント"
short-title: pageshow
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: 76bec44d5e9842f9ce4789303b989c36fd708cb8
---

{{APIRef("HTML DOM")}}

**`pageshow`** イベントは、ブラウザーが新しい文書へナビゲーションによって移動したときに {{domxref("Window")}} へ送られます。

これには以下のようなものがあります。

- 最初にページを読み込んだとき。
- 同じウィンドウまたはタブの中で、他のページからそのページへ移動してきたとき。
- モバイル OS で凍結されたページを復元したとき。
- ブラウザーの「進む」または「戻る」ボタンを使用してページに戻る（{{Glossary("bfcache")}} から復元された場合も含みます）。
- ページを背後のタブで開いたとき。
- ページがアクティブ化前に{{Glossary("Prerender", "事前レンダリング")}}されたとき。

> [!WARNING]
> 名前と異なり、`pageshow` イベントは、ページが実際にユーザーに表示されたときに発生するわけではありません。例えば、ページが背後のタブで開かれたり、事前レンダリングされたりする場合があります。ページがユーザーに表示されたことに応答したい場合は、以下のイベントを使用してください。
>
> - {{domxref("window/pagereveal_event", "pagereveal")}}: ページが初めてレンダリングされた際に送られます。
> - {{domxref("document/visibilitychange_event", "visibilitychange")}}: ページの表示状態が変更されるたびに送られます。
> - {{domxref("document/prerenderingchange_event", "prerenderingchange")}}: 事前レンダリングされたページがアクティブになった際に送られます。

> [!NOTE]
> 最初にページを読み込んでいる間、 `pageshow` イベントは {{domxref("Window/load_event", "load")}} イベントの後で発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("pageshow", (event) => { })

onpageshow = (event) => { }
```

## イベント型

{{domxref("HashChangeEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PageTransitionEvent")}}

## イベントプロパティ

- {{domxref("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : Indicates if the document is loading from a cache.

## イベントハンドラーの別名

`Window` インターフェイスに加え、イベントハンドラープロパティ `onpageshow` は、以下のターゲットでも利用可能です。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

この例は配列 `events` の中に列挙されたイベントのイベントハンドラーを設定します。ハンドラーである `eventLogger()` は、発生したイベントの種類と、 {{domxref("PageTransitionEvent.persisted", "persisted")}} フラグの値を `pageshow` および `pagehide` イベントの場合に含めてコンソールに出力します。

### JavaScript

```js
const events = ["pagehide", "pageshow", "unload", "load"];

const eventLogger = (event) => {
  switch (event.type) {
    case "pagehide":
    case "pageshow": {
      let isPersisted = event.persisted ? "persisted" : "not persisted";
      console.log(`Event: ${event.type} - ${isPersisted}`);
      break;
    }
    default:
      console.log(`Event: ${event.type}`);
      break;
  }
};

events.forEach((eventName) => window.addEventListener(eventName, eventLogger));
```

### HTML

```html
<p>
  コンソールを開き、このページに出入りしたときの出力を見てください。
  このタブに新しいページを読み込んだり、履歴で前後に移動したりして、イベントのログへの出力を見てください。
</p>
```

### 結果

{{EmbedLiveSample("Examples", 640, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.pagehide_event", "pagehide")}}
