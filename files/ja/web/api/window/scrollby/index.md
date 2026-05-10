---
title: "Window: scrollBy() メソッド"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

**`Window.scrollBy()`** メソッドは、ウィンドウ内の文書を指定された量だけスクロールさせます。

## 構文

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### 引数

- `xCoord`
  - : スクロールさせたい水平方向のピクセル数です。
- `yCoord`
  - : スクロールさせたい垂直方向のピクセル数です。
- `options`
  - : 以下のプロパティを持つオブジェクトです。
    - `top`
      - : ウィンドウまたは要素をスクロールする Y 軸方向のピクセル数を指定します。
    - `left`
      - : ウィンドウまたは要素をスクロールする X 軸方向のピクセル数を指定します。
    - `behavior`
      - : スクロールを滑らかにアニメーションさせるか (`smooth`)、瞬時に一回のジャンプで行うか (`instant`)、あるいはブラウザーに選択させるか (`auto`, デフォルト値) を指定することができます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

1 ページ分下スクロールさせるには、次のようにします。

```js
window.scrollBy(0, window.innerHeight);
```

上スクロールさせるには、次のようにします。

```js
window.scrollBy(0, -window.innerHeight);
```

`options` を使用します。

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## メモ

`window.scrollBy()` は特定の量だけスクロールしますが、 {{domxref("window.scroll()")}} は文書内の絶対位置までスクロールします。 {{domxref("window.scrollByLines()")}} および {{domxref("window.scrollByPages()")}} も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
