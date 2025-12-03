---
title: SnapEvent
slug: Web/API/SnapEvent
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

**`SnapEvent`** インターフェイスは、 {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベントおよび {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベントのイベントオブジェクトを定義します。それぞれ、ブラウザーが新しいスクロールスナップターゲットが待機状態（現在のスクロール捜査が終了したら選択される）になったとき、および新しいスナップターゲットが選択されたときに[スクロールコンテナー](/ja/docs/Glossary/Scroll_container)で発生します。

これらのイベントは、新しい要素がスナップされた際にコードを実行するために使用できます。 `SnapEvent` は、インライン方向やブロック方向にスナップされた要素への参照を公開します。 `SnapEvent` で利用可能なプロパティ値は、スクロールコンテナーに設定された CSS プロパティ {{cssxref("scroll-snap-type")}} の値に直接対応しています。

- スナップ軸が `block` （または、現在の書字方向で `block` に相当する物理軸値）として指定されている場合、 {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} のみが要素参照を返します。
- スナップ軸が `inline` （または、現在の書字方向で `inline` に相当する物理軸値）として指定されている場合、 {{domxref("SnapEvent.snapTargetInline", "snapTargetInline")}} のみが要素参照を返します。
- スナップ軸が `both` と指定されている場合、`snapTargetBlock` と `snapTargetInline` は要素参照を返します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SnapEvent.SnapEvent", "SnapEvent()")}} {{Experimental_Inline}}
  - : 新しい `SnapEvent` オブジェクトインスタンスを作成します。

## インスタンスプロパティ

_親である {{DOMxRef("Event")}} から継承しているプロパティもあります。_

- {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : イベントが発生したときにブロック方向にスナップされた要素への参照を返します。また、インライン方向のみでスクロールのスナップが発生したため、ブロック方向にスナップされた要素がない場合は `null` を返します。
- {{domxref("SnapEvent.snapTargetInline", "snapTargetInline")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : イベントが発生したときにインライン方向にスナップされた要素への参照を返します。また、スクロールのスナップがブロック方向のみで発生し、インライン方向にスナップされた要素がない場合は `null` を返します。

## 例

### `scrollsnapchanging` の例

以下の `scrollsnapchanging` ハンドラー関数の例では、 {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} の要素の `class` 属性を、 {{domxref("Element.className")}} プロパティを使用して `pending` に設定しています。これは、スナップターゲットが待機状態になった際に、要素のスタイルを変更するために使用できます。

なお、このハンドラーは、ブロック方向のスクロールコンテナー（ページの {{cssxref("writing-mode")}} が横書きに設定されている場合は縦スクロール）に設定されることを意図しているため、複数のイベントの間で `snapTargetBlock` 要素のみが変更されます。 {{domxref("SnapEvent.snapTargetInline")}} は、インライン方向にはスナップが発生しないため、 `null` が返されます。

```js
scrollingElem.addEventListener("scrollsnapchanging", (event) => {
  // 現在の待機状態のスナップターゲットのクラスに "pending" を設定
  event.snapTargetBlock.className = "pending";

  // ブロック方向の新しい待機状態のスナップターゲット要素を出力
  console.log(event.snapTargetBlock);

  // null を出力。インラインスナップは発生しない
  console.log(event.snapTargetInline);
});
```

### `scrollsnapchange` の例

次の `scrollsnapchange` ハンドラー関数の例では、 {{domxref("SnapEvent.snapTargetBlock")}} 要素に選択クラスを設定しています。これは、新たに選択されたスナップターゲットを、選択されているように見せるスタイル（例えば、アニメーションするなど）に使用することができます。

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "selected";
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベント
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベント
- [CSS スクロールスナップモジュール](/ja/docs/Web/CSS/Guides/Scroll_snap)
- [スクロールスナップイベントの使用](/ja/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) (developer.chrome.com, 2024)
