---
title: PageTransitionEvent
slug: Web/API/PageTransitionEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

**`PageTransitionEvent`** イベントオブジェクトは、文書が読み込まれるか、または終了する際に発行される [`pageshow`](/ja/docs/Web/API/Window/pageshow_event) および [`pagehide`](/ja/docs/Web/API/Window/pagehide_event) イベントのハンドラー内で使用できます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PageTransitionEvent.PageTransitionEvent", "PageTransitionEvent()")}}
  - : 新しい `PageTransitionEvent` オブジェクトを生成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : キャッシュから読み込んでいる文書であるかどうかを示します。

## 例

### HTML

```html
<!doctype html>
<html lang="ja">
  <body></body>
</html>
```

### JavaScript

```js
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    alert("このページはブラウザーがキャッシュしたものです");
  } else {
    alert("このページはブラウザーがキャッシュしたものではありません");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`pageshow`](/ja/docs/Web/API/Window/pageshow_event) イベント
- [`pagehide`](/ja/docs/Web/API/Window/pagehide_event) イベント
