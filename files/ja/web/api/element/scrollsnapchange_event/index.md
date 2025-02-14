---
title: "Element: scrollsnapchange イベント"
short-title: scrollsnapchange
slug: Web/API/Element/scrollsnapchange_event
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef}}{{SeeCompatTable}}

**`scrollsnapchange`** は {{domxref("Element")}} インターフェイスのイベントで、スクロール操作の終わりに、新しいスクロールスナップターゲットが選択されたときに、対応する {{domxref("Element/scrollend_event", "scrollend")}} イベントが発生する直前に、[スクロールコンテナー](/ja/docs/Glossary/Scroll_container)内で発行されます。

スクロール操作は、ユーザーがスクロールコンテナー内でスクロールを完了した時点で終わります。例えば、タッチジェスチャーを使用したり、スクロールバー上でマウスポインターをドラッグしたりして、そのジェスチャーを解除したりしたときです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scrollsnapchange", (event) => {});

onscrollsnapchange = (event) => {};
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

次の短い JavaScript のコードスニペットは、その子要素の 1 つが新たに選択されたスナップターゲットになったときに、 `<main>` 要素で `scrollsnapchange` が発生するようにします。ハンドラー関数では、 {{domxref("SnapEvent.snapTargetBlock")}} プロパティで参照される子要素に `selected` クラスを設定します。これは、イベントが発生したときに、選択されたように見えるようにスタイルを設定するために使用することができます（例えば、アニメーションを使用して）。

```js
const scrollingElem = document.querySelector("main");

scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベント
- {{DOMxRef("Document/scrollend_event", "scrollend")}} イベント
- {{domxref("SnapEvent")}}
- CSS の {{cssxref("scroll-snap-type")}} プロパティ
- [CSS スクロールスナップモジュール](/ja/docs/Web/CSS/CSS_scroll_snap)
- [スクロールスナップイベントの使用](/ja/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
