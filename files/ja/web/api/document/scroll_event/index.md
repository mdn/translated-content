---
title: "Document: scroll イベント"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

**`scroll`** イベントは、文書のビューまたは要素がスクロールされたときに発生します。
スクロールが完了したことを検出するには、 {{domxref("Document/scrollend_event", "Document: scrollend イベント")}}を参照してください。
要素のスクロールには、 {{domxref("Element/scroll_event", "Element: scroll イベント")}}を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### スクロールイベントの間引き

`scroll` イベントは高い確率で生じることができるため、イベントハンドラーは DOM の変更といった計算上の処理コストの高い操作を実行すべきではありません。その代わり、次のように {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}、{{DOMxRef("setTimeout()")}}、{{DOMxRef("CustomEvent")}} などを使ってイベントを間引くことをお勧めします。

ただし、入力イベントやアニメーションフレームは同じような割合で発生するため、そのため下記のような最適化は不要の場合が多いことに注意してください。 この例では `requestAnimationFrame` の `scroll` イベントを最適化しています。

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // 子のスクロール位置で何かを行う
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Document: `scrollend` イベント](/ja/docs/Web/API/Document/scrollend_event)
- [Element: `scroll` イベント](/ja/docs/Web/API/Element/scroll_event)
- [Element: `scrollend` イベント](/ja/docs/Web/API/Element/scrollend_event)
