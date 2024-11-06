---
title: キャンバスの基本的な使い方
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

このチュートリアルを、 {{HTMLElement("canvas")}} という {{Glossary("HTML")}} の要素を見てみることから始めましょう。このページの最後では、ブラウザーでキャンバス 2D コンテキストの設定し、最初の例を描画する方法を学びます。

## `<canvas>` 要素

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

一見すると、 {{HTMLElement("canvas")}} は {{HTMLElement("img")}} 要素と似ていますが、 `src` 属性と `alt` 属性がない点が明確に異なります。一方、 `<canvas>` には [`width`](/ja/docs/Web/HTML/Element/canvas#width) と [`height`](/ja/docs/Web/HTML/Element/canvas#height) の 2 つの属性のみがあります。これらはどちらもオプションで、 {{Glossary("DOM")}} [プロパティ](/ja/docs/Web/API/HTMLCanvasElement)を用いて設定することもできます。を利用できます。 `width` 属性と `height` 属性が指定されていない場合、キャンバスは幅 **300 ピクセル**、高さ **150 ピクセル**で初期化されます。要素の大きさは {{Glossary("CSS")}} で変更できますが、画像を描画される際にはそのレイアウト上の大きさに合わせて拡縮されます。 CSS での大きさは初期のキャンバスの比率を考慮しないため、歪んで表示されることになります。

> [!NOTE]
> 画像が歪んでいると感じた時は、 CSS を使用するのではなく、 `width` および `height` 属性を `<canvas>` の属性に明示的に指定してください。

[`id`](/ja/docs/Web/HTML/Global_attributes/id) は `<canvas>` 要素に固有の属性ではありませんが、[HTML のグローバル属性](/ja/docs/Web/HTML/Global_attributes)の一つで、（[`class`](/ja/docs/Web/HTML/Global_attributes/class) のように）すべての HTML 要素に適用することができます。常に `id` を設定するようにすると、スクリプトから要素を特定しやすくなります。

`<canvas>` 要素は通常の画像と同じようにスタイル付けすることができます（{{cssxref("margin")}}、{{cssxref("border")}}、{{cssxref("background")}} など）。しかし、これらのルールは、実際にキャンバス上に描画されるものには影響しません。これをどう扱うかについては、このチュートリアルの[専用の章](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)で紹介します。スタイルのルールが何も適用されていない場合、キャンバスは完全に透明なものとして描画されます。

### アクセシブルコンテンツ

`<canvas>` 要素は、{{HTMLElement("img")}}、{{HTMLElement("video")}}、{{HTMLElement("audio")}}、{{HTMLElement("picture")}} 要素と同様に、メディアが読み込まれなかったり、ユーザーが意図通りに使いこなすことができなかったりした場合に表示される代替テキストを提供することで、アクセシビリティを確保しなければなりません。その種類のメディアに合った代替コンテンツ、キャプション、代替テキストを常に提供しなければなりません。

代替コンテンツを提供する方法はとても直観的です。`<canvas>` 要素の中にコンテンツを挿入するだけで、画面リーダーやスパイダー、他にも自動化されたボットがアクセスします。既定では、ブラウザーはコンテナーの中にあるコンテンツを無視し、`<canvas>` が対応していない場合を除き、キャンバスを正常にレンダリングします。

例えば、キャンバスの内容を説明するテキストを提供したり、動的に描画されるコンテンツの静的な画像を提供したりすることができます。次のようになります。

```html
<canvas id="stockGraph" width="150" height="150">
  現在の株価: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="時計" />
</canvas>
```

キャンバスに対応しているさまざまなブラウザーで使用するように指示しても、キャンバスをまったく読めないユーザーの助けにはなりません。有益な代替テキストまたは部分 DOM を使用することで、アクセスできない要素にアクセシビリティが追加されます。

### `</canvas>` タグが必要

代替コンテンツを内部に持つ関係上、 {{HTMLElement("img")}} 要素と異なって {{HTMLElement("canvas")}} 要素は閉じタグ (`</canvas>`) が**必須**です。タグを閉じなかった場合は、残りのページ全てが代替コンテンツと見なされ、結果として表示されなくなります。

代替コンテンツが必要でない場合は、単に `<canvas id="foo" role="presentation" …></canvas>` とすれば対応するブラウザーですべて利用することができます。これはキャンバスが純粋に表現目的である場合にのみ使用しましょう。

## 描画コンテキスト

{{HTMLElement("canvas")}} は固定された大きさの描画可能領域を作成できます。この領域は、1 つ以上の**描画コンテキスト**として表現され、そのコンテキストを通じて描画領域を操作します。このチュートリアルでは、二次元グラフィックスを描画するためのコンテキストについてのみ解説しますが、これ以外の描画コンテキストも存在します。例えば [WebGL](/ja/docs/Web/API/WebGL_API) は [OpenGL ES](https://www.khronos.org/opengles/) に基づいて、三次元グラフィックを扱います。

初期状態ではキャンバスは空です。何かを表示するには、まずスクリプトで描画コンテキストを取得する必要があります。 {{HTMLElement("canvas")}} 要素には {{domxref("HTMLCanvasElement.getContext", "getContext()")}} というメソッドがあり、描画コンテキストを取得したり描画機能を呼び出したりするのに使います。 `getContext()` には 1 つの引数があり、コンテキストの種類を指定します。このチュートリアルで扱っているような二次元のグラフィックでは、 `"2d"` を指定すると {{domxref("CanvasRenderingContext2D")}} を取得することができます。

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

スクリプトの最初の行では、 DOM 内から {{HTMLElement("canvas")}} 要素を表すノードを取得するために {{domxref("document.getElementById()")}} メソッドを呼び出しています。要素のノードを取得したら、 `getContext()` メソッドを使用して描画コンテキストにアクセスすることができます。

## 対応しているかどうかの確認

{{HTMLElement("canvas")}} 要素に対応していないブラウザーでは、代替コンテンツが表示されます。スクリプトからは、 `getContext()` メソッドの有無を調べることで、ブラウザーが対応しているかどうかを確認することができます。確認するためのコードは以下のようになります。

```js
const canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // 描画するコードをここに
} else {
  // キャンバスに未対応の場合のコードをここに
}
```

## スケルトンテンプレート

ここでは、この後の例で開始点として使用する、最小限のテンプレートを紹介します。

> [!NOTE]
> スクリプトを HTML に埋め込むのは、よいやり方ではありません。この例では分かりやすさのために、仕方なく埋め込んでいます。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Canvas tutorial</title>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <canvas id="tutorial" width="150" height="150"></canvas>
    <script>
      function draw() {
        const canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
        }
      }
      window.addEventListener("load", draw);
    </script>
  </body>
</html>
```

スクリプトには `draw()` という関数が含まれており、ページの読み込みが完了したときに一度実行されます。これは文書で {{domxref("Window/load_event", "load")}} イベントを待ち受けすることで実現できます。この関数、または同様の関数は、{{domxref("setTimeout()")}}、{{domxref("setInterval()")}}、その他のイベントハンドラーを使用した場合でも、ページが最初に読み込まれたときに限り、呼び出すことができます。

ここでは、テンプレートが実際にどのように見えるかを説明します。このように、最初は白紙の状態です。

{{EmbedLiveSample("A_skeleton_template", "", "160")}}

## 単純な描画

まず始めに、交差する 2 つの矩形を描き、そのうちの 1 つにアルファ透過をさせる簡単な例を見てみましょう。これがどのように機能するかは、後の例でさらに詳しく見ていきましょう。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>キャンバスの実験</title>
  </head>
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
    <script type="application/javascript">
      function draw() {
        const canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200 0 0)";
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = "rgb(0 0 200 / 50%)";
          ctx.fillRect(30, 30, 50, 50);
        }
      }
      draw();
    </script>
  </body>
</html>
```

この例は次のように動作します。

{{EmbedLiveSample("A_simple_example", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
