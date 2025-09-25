---
title: "Window: screenLeft プロパティ"
short-title: screenLeft
slug: Web/API/Window/screenLeft
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef}}

**`Window.screenLeft`** は読み取り専用プロパティで、ユーザーのブラウザーのビューポートの左端から、画面の左端までの水平方向の距離を、 CSS ピクセル単位で返します。

> [!NOTE]
> `screenLeft` は古い {{domxref("Window.screenX")}} プロパティの別名です。`screenLeft` は当初 IE のみが対応していましたが、普及に伴いすべての環境で導入されました。

## 値

ブラウザーのビューポートの左端から画面の左端までの CSS ピクセル数に等しい数値。

## 例

[screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) の例では、円が描画されたキャンバスが表示されます。この例では、`screenLeft`/`screenTop` と {{domxref("Window.requestAnimationFrame()")}} を組み合わせて、ウィンドウの位置が移動しても画面上の物理的な位置を常に同じまま円を再描画しています。

```js
initialLeft = window.screenLeft + canvasElem.offsetLeft;
initialTop = window.screenTop + canvasElem.offsetTop;

function positionElem() {
  let newLeft = window.screenLeft + canvasElem.offsetLeft;
  let newTop = window.screenTop + canvasElem.offsetTop;

  let leftUpdate = initialLeft - newLeft;
  let topUpdate = initialTop - newTop;

  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgb(0 0 255)";
  ctx.beginPath();
  ctx.arc(
    leftUpdate + width / 2,
    topUpdate + height / 2 + 35,
    50,
    degToRad(0),
    degToRad(360),
    false,
  );
  ctx.fill();

  pElem.textContent = `Window.screenLeft: ${window.screenLeft}, Window.screenTop: ${window.screenTop}`;

  window.requestAnimationFrame(positionElem);
}

window.requestAnimationFrame(positionElem);
```

またコード内では、`screenLeft` に対応してかどうかを検出するスニペットもあり、対応していない場合は、`screenLeft`/`screenTop` は {{domxref("Window.screenX")}}/{{domxref("Window.screenY")}} を使用してポリフィルします。

```js
if (!window.screenLeft) {
  window.screenLeft = window.screenX;
  window.screenTop = window.screenY;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.screenTop")}}
- {{domxref("Window.screenX")}}
