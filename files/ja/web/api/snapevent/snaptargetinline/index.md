---
title: "SnapEvent: snapTargetInline プロパティ"
short-title: snapTargetInline
slug: Web/API/SnapEvent/snapTargetInline
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

**`snapTargetInline`** は {{domxref("SnapEvent")}} インターフェイスの読み取り専用プロパティで、このイベントが発行されたときに、インライン方向にスナップされた要素への参照を返します。

具体的には、次のようになります。

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベントの場合、これは待機中のインライン方向のスナップターゲット（つまり、現在のスクロール捜査が終了したときに選択されるもの）を参照します。
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベントの場合、これは新しく選択されたインライン方向のスナップターゲットを参照します。

`SnapEvent` で利用可能なプロパティ値は、スクロールコンテナ－に設定された {{cssxref("scroll-snap-type")}} プロパティの値に直接対応します。 `snapTargetInline` は、スナップ軸が `inline` （または、現在の書字方向で `inline` に相当する物理軸値の場合）または `both` と指定されている場合、要素参照のみを返します。

## 値

スナップする要素を表す {{domxref("Node")}}、またはスクロールスナップがブロック方向でしか発生せず、インライン方向にスナップされる要素がない場合は `null` です。

スナップされた要素が擬似要素であった場合、返される `Node` はその擬似要素を所有する要素です。

## 例

短い例については {{domxref("SnapEvent")}} のメインページを、完全な例と説明については[スクロールスナップイベントの使用](/ja/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)ガイドを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベント
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベント
- [CSS スクロールスナップモジュール](/ja/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) (developer.chrome.com, 2024)
