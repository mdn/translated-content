---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
tags:
  - API
  - CSSOM View
  - メソッド
  - リファレンス
browser-compat: api.Window.scrollBy
translation_of: Web/API/Window/scrollBy
---
{{ APIRef() }}

**`Window.scrollBy()`** メソッドは、ウィンドウ内の文書を指定された量だけスクロールさせます。

## 構文

```js
scrollBy(x-coord, y-coord)
scrollBy(options)
```

### 引数

- `x-coord` はスクロールさせたい水平方向のピクセル数です。
- `y-coord` はスクロールさせたい垂直方向のピクセル数です。

\- または -

- `options`
  - : 以下の引数を含む辞書です。
    - `top`
      - : ウィンドウまたは要素をスクロールする Y 軸方向のピクセル数を指定します。
    - `left`
      - : ウィンドウまたは要素をスクロールする X 軸方向のピクセル数を指定します。
    - `behavior`
      - : スクロールを滑らかにアニメーションさせるか (`smooth`)、瞬時に一回のジャンプで行うか (`instant`)、あるいはブラウザーに選択させるか (`auto`, 既定値) を指定することができます。

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
  behavior: 'smooth'
});
```

## メモ

`window.scrollBy()` は特定の量だけスクロールしますが、 {{domxref("window.scroll()")}} は文書内の絶対位置までスクロールします。 {{domxref("window.scrollByLines()")}} および {{domxref("window.scrollByPages()")}} も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
