---
title: "Window: screenX プロパティ"
short-title: screenX
slug: Web/API/Window/screenX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

**`Window.screenX`** は読み取り専用のプロパティで、ユーザーのブラウザーのビューポートから画面の左端までの水平距離を CSS ピクセル数で返します。

> [!NOTE]
> `screenX` の別名である {{domxref("Window.screenLeft")}} が、最近は新しいブラウザー間で実装されていました。これはもともと IE のみが対応していましたが、有名であるためあらゆる場所で導入されています。

## 値

ブラウザーのビューポートの左端から画面の左端までの CSS ピクセル数に等しい数値です。

## 例

[screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) ([ソースコード](https://github.com/mdn/dom-examples/blob/master/screenleft-screentop/index.html)) の例では、円が描かれたキャンバスを見ることができます。この例では、 {{domxref("Window.screenLeft")}}/{{domxref("Window.screenTop")}} に加えて {{domxref("Window.requestAnimationFrame()")}} を使用することで、ウィンドウの位置を移動しても画面上の一定の物理的な位置に円を描き続けます。

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

これは `screenX`/`screenY` でもまったく同じように動作します。

また、このコードでは `screenLeft` に対応しているかどうかを検出するスニペットが入っており、対応していない場合は `screenLeft`/`screenTop` を
`screenX`/`screenY` で代替するようになっています。

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

- {{domxref("window.screenLeft")}}
- {{domxref("Window.screenY")}}
