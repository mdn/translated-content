---
title: "Window: pagehide イベント"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("HTML DOM")}}

**`pagehide`** イベントは、ブラウザーがセッションの履歴から他のページを表示する過程において、現在のページを非表示にしたときに {{domxref("Window")}} へ送られます。

例えば、ユーザーがブラウザーの戻るボタンをクリックしたとき、現在のページはひとつ前のページが表示される前に `pagehide` イベントを受け取ります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("pagehide", (event) => { })

onpagehide = (event) => { }
```

## イベント型

{{domxref("PageTransitionEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PageTransitionEvent")}}

## イベントプロパティ

- {{domxref("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : この文書がキャッシュから読み込まれていることを示します。

## イベントハンドラーの別名

`Window` インターフェイスに加え、イベントハンドラープロパティ `onpagehide` は、以下のターゲットでも利用可能です。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 使用上の注意

[`unload`](/ja/docs/Web/API/Window/unload_event) や [`beforeunload`](/ja/docs/Web/API/Window/beforeunload_event) イベントと同様に、このイベントはブラウザーによって確実に発生するとは限りません。特にモバイル端末ではその傾向が顕著です。例えば、次のような状況では、`pagehide` イベントはまったく発生しません。

1. モバイルユーザーがページにアクセスします。
2. その後、ユーザーが別のアプリに切り替えます。
3. その後、ユーザーがアプリマネージャーからブラウザーを閉じます。

ただし、`unload` や `beforeunload` イベントとは異なり、このイベントは[バックフォワードキャッシュ](https://web.dev/articles/bfcache) (bfcache) と互換性があるため、このイベントにリスナーを追加しても、ページが bfcache に含まれるのを防ぐことはできません。

ユーザーのセッション終了を通知するのに最適なイベントは、[`visibilitychange`](/ja/docs/Web/API/Document/visibilitychange_event) イベントです。`visibilitychange` を対応していないブラウザーでは、`pagehide` イベントが次善の選択肢となります。

特に、ページのアンロードイベントを検知したい場合は、`pagehide` イベントが最適です。

このイベントがページライフサイクル内の他のイベントとどのように関連しているかについては、[Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) のガイドをご覧ください。

## 例

この例では、イベントハンドラーが `pagehide` イベントを監視するために確立され、ページが再利用できるように保存されようとするときに特殊な扱いを行います。

```js
window.addEventListener("pagehide", (event) => {
  if (event.persisted) {
    /* このページは破棄されないので、後で再利用することができます */
  }
});
```

これは `onpagehide` イベントハンドラープロパティを {{domxref("Window")}} 上で利用することで書くこともできます。

```js
window.onpagehide = (event) => {
  if (event.persisted) {
    /* このページは破棄されないので、後で再利用することができます */
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.pageshow_event", "pageshow")}} イベント
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state)<sup>（英語）</sup> では、ウェブアプリケーションにおけるページのライフサイクル動作の処理に関する最善の手法を紹介しています。
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): ページのライフサイクル動作におけるブラウザー間の不整合に対処する JavaScript ライブラリーです。
- [Back/forward cache](https://web.dev/articles/bfcache)<sup>（英語）</sup> では、バックフォワードキャッシュとは何か、およびページのライフサイクルにおけるさまざまなイベントに対するその影響について解説しています。
