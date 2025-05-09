---
title: "Element: scrollsnapchanging イベント"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef}}{{SeeCompatTable}}

**`scrollsnapchanging`** は {{domxref("Element")}} インターフェイスのイベントで、新しいスクロールスナップターゲットが待機中であるとブラウザーが判断した場合に、すなわち現在のスクロールジェスチャーが終わったときに選択される場合に、[スクロールコンテナー](/ja/docs/Glossary/Scroll_container)内で発行されます。

仕様上、このイベントはスクロールジェスチャー中に発生します。ユーザーが新しいスナップターゲット候補の上に移動するたびに発生します。例えば、ユーザーはタッチ画面端末で指をドラッグしてゆっくりとスクロールしたり、スクロールバーのマウスボタンを押したままマウスを移動させたりすることができます。そのため、 `scrollsnapchanging` は、各スクロールジェスチャーに対して複数回発行される可能性があります。

ただし、複数のスナップ対象にスクロールジェスチャーが移される可能性がある場合、すべてに対して発行されるわけではありません。 むしろ、スナップが潜在的に最後に落ち着く対象に対してのみ発行されます。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドでイベント名を使用するか、イベントハンドラープロパティを設定します。

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## イベント型

{{domxref("SnapEvent")}} です。一般的な {{domxref("Event")}} 型を継承しています。

## 例

### 基本的な使用

例えば、スクロールが発生するような重要なコンテンツを含む {{htmlelement("main")}} 要素があったとします。

```html
<main>
  <!-- 重要なコンテンツ -->
</main>
```

CSS の {{cssxref("scroll-snap-type")}} プロパティと他のプロパティを組み合わせて使用することで、 `<main>` 要素のスクロール時に子要素にスナップするスクロールコンテナーにすることができます。例を示します。

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

次の JavaScript のコードは、その子要素の 1 つが保留中のスナップターゲットになったときに、 `<main>` 要素で `scrollsnapchanging` イベントを発行します。ハンドラー関数では、snapTargetBlock プロパティで参照される子要素に保留中のクラスを設定します。このクラスは、イベントが発行されたときに、その子要素を異なるスタイルで表示するために使用することができます。

```js
scrollingElem.addEventListener("scrollsnapchanging", (event) => {
  // 以前設定されていた "pending" クラスを除去
  const pendingElems = document.querySelectorAll(".pending");
  pendingElems.forEach((elem) => {
    elem.classList.remove("pending");
  });

  // 現在の待機中のスナップターゲットのクラスに "pending" を設定
  event.snapTargetBlock.classList.add("pending");
});
```

関数の先頭で、前回 `pending` クラスが存在していたすべての要素を選択し、それを除去するようにします。これにより、最新の待機中のスナップ対象のみがスタイル設定されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベント
- {{DOMxRef("Document/scrollend_event", "scrollend")}} イベント
- {{domxref("SnapEvent")}}
- CSS の {{cssxref("scroll-snap-type")}} プロパティ
- [CSS スクロールスナップモジュール](/ja/docs/Web/CSS/CSS_scroll_snap)
- [スクロールスナップイベントの使用](/ja/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
