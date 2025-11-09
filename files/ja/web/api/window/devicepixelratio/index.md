---
title: "Window: devicePixelRatio プロパティ"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: ca9bb43c4a253d0bba3d355a7d243e1f2b6fe8ef
---

{{APIRef}}

**`devicePixelRatio`** は {{domxref("Window")}} インターフェイスのプロパティで、現在のディスプレイ機器における CSS ピクセルの解像度と物理ピクセルの解像度の比を返します。

これは 1 物理ピクセルの大きさに対する 1 CSS ピクセルの大きさの比率と考えることもできます。もっと簡単に言うと、 1 つの CSS ピクセルが実際にはいくつの物理ピクセルで表示されるかという値です。

これは一般的なディスプレイと、HiDPI (高 DPI) や Retina のように同じ大きさのオブジェクトを描画するのにより多くのピクセルを使って鮮明さを得ているディスプレイとの差異を扱うのに便利です。

{{domxref("Window.matchMedia", "window.matchMedia()")}} を使うと、`devicePixelRatio` の値の変化（例えば、ユーザーが異なるピクセル解像度の画面へウィンドウをドラッグした時など）を検知することができます。[後述の例](#画面解像度や拡大率の変化の監視)を参照して下さい。

### 値

倍精度浮動小数点の値であり、 CSS ピクセル解像度に対するディスプレイの物理的なピクセル解像度の比率を表します。この値が 1 であることは、それが伝統的な 96 DPI (プラットフォームによっては 76 DPI) であることを意味し、2 であることは、HiDPI や Retina のディスプレイであると考えられます。

他の値が返される場合もあります。解像度が異常に低い画面の場合もあるし、標準である 96DPI の 2 倍よりも高いピクセル密度を持つ画面の場合に返される値が多いかもしれません。現行のモバイル端末の画面は、物理的なサイズが小さくても解像度が高いため、多くの場合 `devicePixelRatio` の値は 2 より大きくなります。

## 例

### `<canvas>` の解像度の補正

Retina 画面では {{htmlelement("canvas")}} がぼやけて見えることがあるでしょう。 `window.devicePixelRatio` を使うことで、鮮明に表示するために必要なピクセル密度を調べます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 表示サイズを設定（CSS におけるピクセル数です）。
const size = 200;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

// メモリー上における実際のサイズを設定（ピクセル密度の分だけ倍増させます）。
const scale = window.devicePixelRatio; // Retina でこの値を 1 にするとぼやけた canvas になります
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

// CSS 上のピクセル数を前提としているシステムに合わせます。
ctx.scale(scale, scale);

ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "#ffffff";
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

const x = size / 2;
const y = size / 2;

const textString = "I love MDN";
ctx.fillText(textString, x, y);
```

[![この画像は、Retina ディスプレイにおける異なる値の影響を表すものです。](devicepixelratio_diff.png)](devicepixelratio_diff.png)

### 画面解像度や拡大率の変化の監視

この例では、メディアクエリーを設定し、端末の解像度が変わったときに新しい解像度をログ出力するように監視します。

#### HTML

```html
<div id="container">
  <p>
    この例により、ページをズームインまたはズームアウトすること
    (または異なる表示倍率の画面にページを移動させること) の
    <code>devicePixelRatio</code> プロパティに与える影響がわかります。
    どのようなことが起こるか、試してみましょう！
  </p>
</div>
<div id="output"></div>
```

#### CSS

```css
body {
  font:
    22px arial,
    sans-serif;
}

#container {
  border: 2px solid #22d;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #a9f;
}
```

#### JavaScript

文字列 `mqString` には、現在のディスプレイ解像度が `px` あたりの機器のドット数に一致するかどうかを調べるメディアクエリーが設定されます。

`media` 変数は {{domxref("MediaQueryList")}} オブジェクトで、メディアクエリー文字列で初期化されます。文書に対して `mqString` を実行した結果が変更されると、`media` オブジェクトの `change` イベントが発生し、新しい解像度がログ出力されます。

解決方法が変更されるたびに、例えば新しい解決方法に基づいて新しいメディアクエリーを作成し、新しい `MediaQueryList` インスタンスを作成しなければならないことに注意してください。

```js
let remove = null;
const output = document.querySelector("#output");

const updatePixelRatio = () => {
  if (remove != null) {
    remove();
  }
  const mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
  const media = matchMedia(mqString);
  media.addEventListener("change", updatePixelRatio);
  remove = () => {
    media.removeEventListener("change", updatePixelRatio);
  };

  output.textContent = `devicePixelRatio: ${window.devicePixelRatio}`;
};

updatePixelRatio();
```

#### 結果

この例をテストするために、ページを拡大したり縮小したりしてみて、`devicePixelRatio`のログ出力する値の違いに注意してください。

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [CSS の `resolution` メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media/resolution)
- {{cssxref("image-resolution")}} プロパティ
