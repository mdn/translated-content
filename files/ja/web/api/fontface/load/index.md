---
title: "FontFace: load() メソッド"
short-title: load()
slug: Web/API/FontFace/load
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`load()`** は {{domxref("FontFace")}} インターフェイスのメソッドで、 `source` が URL で指定されたフォントをリクエストして読み込みます。このメソッドは、現在の `FontFace` オブジェクトで解決される {{jsxref('Promise')}} を返します。

フォントフェイスの `source` がバイナリーデータを指定されていた場合、またはフォントフェイスのフォント {{domxref("FontFace/status", "status")}} プロパティが `unloaded` 以外であった場合、このメソッドは何も行いません。

## 構文

```js-nolint
load()
```

### 引数

なし。

### 返値

{{jsxref('Promise')}} で、フォントが読み込まれたときは現在の `FontFace` オブジェクトへの参照で解決し、読み込みに失敗したときは `NetworkError` {{domxref("DOMException")}} で拒否されます。

### 例外

- `NetworkError` {{domxref("DOMException")}}
  - : フォントを読み込もうとして失敗したことを示します。

## 例

この単純な例では、フォントを読み込んで、それを使用してキャンバス要素（`js-canvas` の ID を持つ）にテキストを表示します。

```html hidden
<canvas id="js-canvas"></canvas>
```

```js
const canvas = document.getElementById("js-canvas");

// Google フォントから "Bitter" フォントを読み込み
const fontFile = new FontFace(
  "FontFamily Style Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(fontFile);

fontFile.load().then(
  () => {
    // フォントを正常に読み込めた
    canvas.width = 650;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");

    ctx.font = '36px "FontFamily Style Bitter"';
    ctx.fillText("Bitter font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
