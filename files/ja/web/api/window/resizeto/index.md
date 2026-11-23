---
title: "Window: resizeTo() メソッド"
short-title: resizeTo()
slug: Web/API/Window/resizeTo
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

**`Window.resizeTo()`** メソッドは、ウィンドウのサイズを動的に変更します。

## 構文

```js-nolint
resizeTo(width, height)
```

### 引数

- `width`
  - : 整数で、新しい {{domxref("window.outerWidth","outerWidth")}} （スクロールバーやタイトルバーなどを含む大きさ）をピクセル数で表します。
- `height`
  - : 整数で、新しい {{domxref("window.outerHeight","outerHeight")}} （スクロールバーやタイトルバーなどを含む大きさ）をピクセル数で表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この関数は、利用可能な画面の 1/4 を占めるようにウィンドウをリサイズします。
{{domxref("Screen.availWidth")}} および {{domxref("Screen.availHeight")}} プロパティを参照してください。

```js
function quarter() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

メモ: **`window.open()`** によって作成されていないウィンドウまたはタブのサイズは変更できません。
また、ウィンドウに複数のタブがある場合は、サイズを変更できません。

> [!NOTE]
> この関数によってウィンドウが同期的にリサイズされるとは限りません。
> モバイルなどの一部の環境では、ウィンドウがリサイズされない場合があります。
> ウィンドウがリサイズされたか、リサイズされた時期を確認するには、{{domxref("Window/resize_event", "resize")}} イベントを待ち受けることができます。

## 関連情報

- {{domxref("window.resizeBy()")}}
