---
title: "Window: scrollsnapchanging イベント"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

**`scrollsnapchanging`** は {{domxref("Window")}} インターフェイスのイベントで、新しいスクロールスナップターゲットが待機中であるとブラウザーが判断した場合に、すなわち現在のスクロールジェスチャーが終わったときに選択される場合に、 `window` で発行されます。

このイベントは、 {{domxref("Element")}} インターフェイスの [`scrollsnapchanging`](/ja/docs/Web/API/Element/scrollsnapchanging_event) イベントとほぼ同じように動作しますが、スクロールスナップコンテナーとして HTML 文書全体を設定する必要がある点が異なります（つまり、 {{cssxref("scroll-snap-type")}} が {{htmlelement("html")}} 要素に設定されている状態です）。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })

onscrollsnapchanging = (event) => { }
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

`<main>` 要素は、 CSS プロパティの組み合わせを使用してスクロール可能なコンテナーにすることができます。例を示します。

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

次に、 {{cssxref("scroll-snap-type")}} プロパティを {{htmlelement("html")}} 要素に指定することで、スクロール対象コンテンツにスクロールスナップ動作を実装することができます。

```css
html {
  scroll-snap-type: block mandatory;
}
```

次の JavaScript スニペットは、`<main>` 要素の子要素が待機中のスナップ対象となった際に、HTML 文書上で `scrollsnapchanging` イベントが発生するようにします。ハンドラー関数では、 {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} プロパティで参照される子要素に `pending` クラスを設定します。これは、イベントが発生したときに、スタイルを変化させるために使用することができます。

```js
window.addEventListener("scrollsnapchanging", (event) => {
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

- {{domxref("Window/scrollsnapchange_event", "scrollsnapchange")}} イベント
- {{DOMxRef("Document/scrollend_event", "scrollend")}} イベント
- {{domxref("SnapEvent")}}
- CSS の {{cssxref("scroll-snap-type")}} プロパティ
- [CSS スクロールスナップモジュール](/ja/docs/Web/CSS/Guides/Scroll_snap)
- [スクロールスナップイベントの使用](/ja/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
