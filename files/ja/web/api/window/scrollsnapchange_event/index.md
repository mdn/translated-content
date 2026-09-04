---
title: "Window: scrollsnapchange イベント"
short-title: scrollsnapchange
slug: Web/API/Window/scrollsnapchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

**`scrollsnapchange`** は {{domxref("Window")}} インターフェイスのイベントで、スクロール操作の終わりに、新しいスクロールスナップターゲットが選択されたときに `window` で発行されます。

このイベントは、 {{domxref("Element")}} インターフェイスの [`scrollsnapchange`](/ja/docs/Web/API/Element/scrollsnapchange_event) イベントとほぼ同じように動作しますが、スクロールスナップコンテナーとして HTML 文書全体を設定する必要がある点が異なります（つまり、 {{cssxref("scroll-snap-type")}} が {{htmlelement("html")}} 要素に設定されている状態です）。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("scrollsnapchange", (event) => { })

onscrollsnapchange = (event) => { }
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

次の JavaScript スニペットは、`<main>` 要素の子要素が新たに選択されたスナップ対象となった際に、HTML 文書上で `scrollsnapchange` イベントが発生するようにします。ハンドラー関数では、 {{domxref("SnapEvent.snapTargetBlock")}} プロパティで参照される子要素に `selected` クラスを設定します。これは、イベントが発生したときに、選択されたように見えるようにスタイルを設定するために使用することができます（例えば、アニメーションを使用して）。

```js
window.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window/scrollsnapchanging_event", "scrollsnapchanging")}} イベント
- {{DOMxRef("Document/scrollend_event", "scrollend")}} イベント
- {{domxref("SnapEvent")}}
- CSS の {{cssxref("scroll-snap-type")}} プロパティ
- [CSS スクロールスナップモジュール](/ja/docs/Web/CSS/Guides/Scroll_snap)
- [スクロールスナップイベントの使用](/ja/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
