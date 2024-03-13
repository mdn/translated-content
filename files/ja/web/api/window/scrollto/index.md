---
title: window.scrollTo
slug: Web/API/Window/scrollTo
---

{{APIRef}}

**`Window.scrollTo()`** は文書内の特定の組み合わせの座標までスクロールします。

## 構文

```
window.scrollTo(x-coord, y-coord)
window.scrollTo(options)
```

### 引数

- `x-coord` は、左上に表示されたい文書の水平軸上のピクセルです。
- `y-coord` は、左上に表示されたい文書の垂直軸上のピクセルです。

\- または -

- `options` は {{domxref("ScrollToOptions")}} 辞書です。

## 例

```js
window.scrollTo(0, 1000);
```

`options` の使用例:

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 注

{{domxref("Window.scroll()")}} はこのメソッドとほぼ同じです。相対スクロールについては、 {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}}, {{domxref("Window.scrollByPages()")}} を参照してください。

要素をスクロールするには、 {{domxref("Element.scrollTop")}} および {{domxref("Element.scrollLeft")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
