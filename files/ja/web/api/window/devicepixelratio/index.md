---
title: Window.devicePixelRatio
slug: Web/API/Window/devicePixelRatio
---

{{APIRef}}

**`devicePixelRatio`** は {{domxref("Window")}} インターフェイスのプロパティで、現在のディスプレイ機器における CSS 解像度と物理解像度の比を返します。

これは 1 物理ピクセルの大きさに対する 1 CSS ピクセルの大きさの比率と考えることもできます。もっと簡単に言うと、 1 つの CSS ピクセルが実際にはいくつの物理ピクセルで表示されるかという値です。

これは一般的なディスプレイと、HiDPI (高 DPI) や Retina のように同じ大きさのオブジェクトを描画するのにより多くのピクセルを使って鮮明さを得ているディスプレイとの差異を扱うのに便利です。

{{domxref("Window.matchMedia", "window.matchMedia()")}} を使うと、`devicePixelRatio` の値の変化（例えば、ユーザーが異なるピクセル解像度の画面へウィンドウをドラッグした時など）を検知することができます。[後述の例](#画面解像度や拡大率の変化の監視)を参照して下さい。

### 値

倍精度浮動小数点の値であり、 CSS ピクセル解像度に対するディスプレイの物理的なピクセル解像度の比率を表します。この値が 1 であることは、それが伝統的な 96 DPI (プラットフォームによっては 76 DPI) であることを意味し、2 であることは、HiDPI や Retina のディスプレイであると考えられます。それ以外の値が返されることもあり、それは一般的でない低解像度のディスプレイの場合や、より考えられるのはスクリーンが標準的な 96 または 76 DPI の解像度の単純な 2 倍よりも高いピクセル密度を持つ場合です。

## 例

### `<canvas>` の解像度の補正

Retina 画面では {{htmlelement("canvas")}} がぼやけて見えることがあるでしょう。 `window.devicePixelRatio` を使うことで、鮮明に表示するために必要なピクセル密度を調べます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 表示サイズを設定（CSS におけるピクセル数です）。
const size = 200;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

// メモリ上における実際のサイズを設定（ピクセル密度の分だけ倍増させます）。
const scale = window.devicePixelRatio;  // Retina でこの値を 1 にするとぼやけた canvas になります
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

// CSS 上のピクセル数を前提としているシステムに合わせます。
ctx.scale(scale, scale);

ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "#ffffff";
ctx.font = '18px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

const x = size / 2;
const y = size / 2;

const textString = "I love MDN";
ctx.fillText(textString, x, y);
```

[![この画像は、Retina ディスプレイにおける異なる値の影響を表すものです。](devicepixelration_diff.jpg)](devicepixelration_diff.jpg)

### 画面解像度や拡大率の変化の監視

この例では、`devicePixelRatio` の値をチェックして必要な変化に対処できるよう、メディアクエリーを設定して機器の解像度がいつ変化するかを監視します。

#### JavaScript

この JavaScript のコードは、機器の解像度を監視するメディアクエリーを作り、`devicePixelRatio` の値が変化したときはいつでもそれをチェックします。

```js
let pixelRatioBox = document.querySelector(".pixel-ratio");

const updatePixelRatio = () => {
  let pr = window.devicePixelRatio;
  let prString = (pr * 100).toFixed(0);
  pixelRatioBox.innerText = `${prString}% (${pr.toFixed(2)})`;
  matchMedia(`(resolution: ${pr}dppx)`).addEventListener("change", updatePixelRatio, { once: true })
}

updatePixelRatio();
```

文字列 `mqString` は、メディアクエリーそのものになるように作ります。このメディアクエリーは、`(resolution: 1dppx)` (標準的なディスプレイの場合)、または `(resolution: 2dppx)` (HiDPI / Retina ディスプレイの場合) のような内容で始まり、現在のディスプレイ解像度のピクセルあたりのドット数が特定の数であるかをチェックします。

関数 `updatePixelRatio()` は、現在の `devicePixelRatio` の値を取得し、`pixelRatioBox` 要素の {{domxref("HTMLElement.innerText", "innerText")}} に、その比率をパーセント値と小数第 2 位までの未加工の 10 進数の値の両方で表示する文字列を設定します。

そして、 `updatePixelRatio()` 関数が一度呼び出されて開始値を表示した後、 {{domxref("Window.matchMedia", "matchMedia()")}} を用いてメディアクエリーを作成し、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} が呼び出されて `updatePixelRatio()` が `change` イベントに対するハンドラーとして設定されます。

#### HTML

この HTML は、説明文を含むボックスと、現在のピクセル比率情報を表示する `pixel-ratio` ボックスを作成します。

```html
<div class="container">
  <div class="inner-container">
    <p>この使用例により、ページをズームまたはズームアウトすること
       (または異なる表示倍率の画面にページを移動させること) の
       <code>Window.devicePixelRatio</code> プロパティに与える影響がわかります。
       どのようなことが起こるか、試してみましょう！</p>
  </div>
    <div class="pixel-ratio"></div>
</div>
```

#### CSS

```css
body {
  font: 22px arial, sans-serif;
}

.container {
  top: 2em;
  width: 22em;
  height: 14em;
  border: 2px solid #22d;
  margin: 0 auto;
  padding: 0;
  background-color: #a9f;
}

.inner-container {
  padding: 1em 2em;
  text-align: justify;
  text-justify: auto;
}

.pixel-ratio {
  position: relative;
  margin: auto;
  height: 1.2em;
  text-align: right;
  bottom: 0;
  right: 1em;
  font-weight: bold;
}
```

#### 結果

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries)
- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [CSS の `resolution` メディア特性](/ja/docs/Web/CSS/@media/resolution)
- {{cssxref("image-resolution")}} プロパティ
