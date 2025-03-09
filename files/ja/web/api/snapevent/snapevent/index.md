---
title: "SnapEvent: SnapEvent() コンストラクター"
short-title: SnapEvent()
slug: Web/API/SnapEvent/SnapEvent
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

**`SnapEvent()`** コンストラクターは、新しい {{domxref("SnapEvent")}} オブジェクトインスタンスを作成します。

## 構文

```js-nolint
new SnapEvent(type, init)
```

### 引数

- `type`
  - : イベントの型を表す文字列。 {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベントの場合は、これは `scrollsnapchanging` です。 {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベントの場合は、これは `scrollsnapchange` です。
- `init`
  - : 以下のプロパティを持つオブジェクトです。
    - `snapTargetBlock` {{optional_inline}}
      - : イベントが発行されたときに、ブロック方向にスナップされた要素への参照を返します。また、インライン方向でのみスクロールスナップが発生し、ブロック方向にスナップされる要素がない場合は `null` を返します。
    - `snapTargetInline` {{optional_inline}}
      - : イベントが発行されたときに、インライン方向にスナップされた、要素への参照を返します。また、ブロック方向でのみスクロールスナップが発生し、インライン方向にスナップされる要素がない場合は `null` を返します。

## 例

開発者は、このコンストラクターを手動で使うべきではありません。新しい `SnapEvent` オブジェクトは、 {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベントまたは {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベントが発行された結果としてハンドラーが呼び出されたときに構築されます。

例えば、

```js
mainElem.addEventListener("scrollsnapchange", (event) => {
  // ...

  // コンソールに SnapEvent オブジェクトのインスタンスを出力
  console.log(event);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベント
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベント
- [CSS スクロールスナップモジュール](/ja/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) (developer.chrome.com, 2024)
