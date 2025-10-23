---
title: "HTMLCanvasElement: mozOpaque プロパティ"
slug: Web/API/HTMLCanvasElement/mozOpaque
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("Canvas API")}}{{deprecated_header}}{{non-standard_header}}

標準外の **`HTMLCanvasElement.mozOpaque`** プロパティは論理値で、この {{HTMLElement("canvas")}} 要素の [`moz-opaque`](/ja/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) 属性を反映します。これは、半透明の要素があるかどうかをキャンバスに知らせるものです。半透明がないことがキャンバスに伝われば、描画性能を最適化することができます。

> [!NOTE]
> これは、{{domxref("HTMLCanvasElement.getContext()")}} で描画コンテキストを作成する際に、`alpha` オプションを `false` に設定することで標準化されました。`mozOpaque` を使用することは避けてください。Firefox は将来的に対応をやめる予定です。

## 値

論理値です。

## 例

この {{HTMLElement("canvas")}} 要素があったとします。

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

`mozOpaque` プロパティは、取得したり設定したりすることができます。例えば、`mimeType === 'image/jpeg'` などの場合に条件付きで `true` に設定し、半透明が不要なアプリケーションでのパフォーマンスを得ることができます。

```js
const canvas = document.getElementById("canvas");
console.log(canvas.mozOpaque); // true
// deactivate it
canvas.mozOpaque = false;
```

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement")}}: `HTMLCanvasElement.mozOpaque` プロパティを定義するのに使用するインターフェイス
- [`moz-opaque`](/ja/docs/Web/HTML/Reference/Elements/canvas#moz-opaque): {{HTMLElement("canvas")}} 要素の HTML 属性
- [Optimizing your JavaScript game for Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)
