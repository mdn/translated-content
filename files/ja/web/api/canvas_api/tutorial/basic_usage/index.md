---
title: キャンバスの基本的な使い方
slug: Web/API/Canvas_API/Tutorial/Basic_usage
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

このチュートリアルを、 {{HTMLElement("canvas")}} という {{Glossary("HTML")}} の要素を見てみることから始めましょう。このページの最後では、ブラウザーでキャンバス 2D コンテキストの設定し、最初の例を描画する方法を学びます。

## `<canvas>` 要素

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

一見すると、 {{HTMLElement("canvas")}} は {{HTMLElement("img")}} 要素と似ていますが、 `src` 属性と `alt` 属性がない点が明確に異なります。一方、 `<canvas>` には [`width`](/ja/docs/Web/HTML/Element/canvas#width) と [`height`](/ja/docs/Web/HTML/Element/canvas#height) の 2 つの属性のみがあります。これらはどちらもオプションで、 {{Glossary("DOM")}} [プロパティ](/ja/docs/Web/API/HTMLCanvasElement)を用いて設定することもできます。を利用できます。 `width` 属性と `height` 属性が指定されていない場合、キャンバスは幅 **300 ピクセル**、高さ **150 ピクセル**で初期化されます。要素の大きさは {{Glossary("CSS")}} で変更できますが、画像を描画される際にはそのレイアウト上の大きさに合わせて拡縮されます。 CSS での大きさは初期のキャンバスの比率を考慮しないため、歪んで表示されることになります。

> **メモ:** 画像が歪んでいると感じた時は、 CSS を使用するのではなく、 `width` および `height` 属性を `<canvas>` の属性に明示的に指定してください。

[`id`](/ja/docs/Web/HTML/Global_attributes/id) は `<canvas>` 要素に固有の属性ではありませんが、[HTML のグローバル属性](/ja/docs/Web/HTML/Global_attributes)の一つで、（[`class`](/ja/docs/Web/HTML/Global_attributes/class) のように）すべての HTML 要素に適用することができます。常に `id` を設定するようにすると、スクリプトから要素を特定しやすくなります。

`<canvas>` 要素は通常の画像と同じようにスタイル付けすることができます（{{cssxref("margin")}}、{{cssxref("border")}}、{{cssxref("background")}} など）。しかし、これらのルールは、実際にキャンバス上に描画されるものには影響しません。これをどう扱うかについては、このチュートリアルの[専用の章](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)で紹介します。スタイルのルールが何も適用されていない場合、キャンバスは完全に透明なものとして描画されます。

### 代替コンテンツ

`<canvas>` 要素は {{HTMLElement("img")}} タグとは異なり、 {{HTMLElement("video")}}、{{HTMLElement("audio")}}、{{HTMLElement("picture")}} 要素のように、未対応の古いブラウザー（Internet Explorer 9 以前など）やテキストのブラウザーで表示される代替コンテンツを設定するのは簡単です。これらのブラウザーで表示される代替コンテンツを常に設定してください。

代替コンテンツを提供する方法はとても直観的です。代替コンテンツを `<canvas>` の中に入れるだけです。 `<canvas>` に対応していないブラウザーはこのコンテナーを無視し、内部の代替コンテンツを表示します。 `<canvas>` に対応しているブラウザーは、ふつうコンテナー内のコンテンツを無視し、通常通りキャンバスを描画します。

例えば、キャンバスの内容を説明するテキストを提供したり、動的に描画されるコンテンツの静的な画像を提供したりすることができます。次のようになります。

```html
<canvas id="stockGraph" width="150" height="150">
  現在の株価: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```

キャンバスに対応した別なブラウザーを使用するようにユーザーに指示することは、例えばキャンバスを見ることができないユーザーにとって助けになりません。有用な代替テキストやサブ DOM を提供することは、キャンバスのアクセシビリティを向上させます。

### `</canvas>` タグが必要

代替コンテンツを内部に持つ関係上、 {{HTMLElement("img")}} 要素と異なって {{HTMLElement("canvas")}} 要素は閉じタグ (`</canvas>`) が**必須**です。タグを閉じなかった場合は、残りのページ全てが代替コンテンツと見なされ、結果として表示されなくなります。

代替コンテンツが必要でない場合は、単に `<canvas id="foo" ...></canvas>` とすれば対応するブラウザーですべて利用することができます。

## 描画コンテキスト

{{HTMLElement("canvas")}} は固定された大きさの描画可能領域を作成できます。この領域は、1 つ以上の**描画コンテキスト**として表現され、そのコンテキストを通じて描画領域を操作します。このチュートリアルでは、二次元グラフィックスを描画するためのコンテキストについてのみ解説しますが、これ以外の描画コンテキストも存在します。例えば [WebGL](/ja/docs/Web/API/WebGL_API) は [OpenGL ES](https://www.khronos.org/opengles/) に基づいて、三次元グラフィックを扱います。

初期状態ではキャンバスは空です。何かを表示するには、まずスクリプトで描画コンテキストを取得する必要があります。 {{HTMLElement("canvas")}} 要素には {{domxref("HTMLCanvasElement.getContext", "getContext()")}} というメソッドがあり、描画コンテキストを取得したり描画機能を呼び出したりするのに使います。 `getContext()` には 1 つの引数があり、コンテキストの種類を指定します。このチュートリアルで扱っているような二次元のグラフィックでは、 `"2d"` を指定すると {{domxref("CanvasRenderingContext2D")}} を取得することができます。

```js
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```

スクリプトの最初の行では、 DOM 内から {{HTMLElement("canvas")}} 要素を表すノードを取得するために {{domxref("document.getElementById()")}} メソッドを呼び出しています。要素のノードを取得したら、 `getContext()` メソッドを使用して描画コンテキストにアクセスすることができます。

## 対応しているかどうかの確認

{{HTMLElement("canvas")}} 要素に対応していないブラウザーでは、代替コンテンツが表示されます。スクリプトからは、 `getContext()` メソッドの有無を調べることで、ブラウザーが対応しているかどうかを確認することができます。確認するためのコードは以下のようになります。

```js
var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // 描画するコードをここに
} else {
  // キャンバスに未対応の場合のコードをここに
}
```

## スケルトンテンプレート

ここでは、この後の例で開始点として使用する、最小限のテンプレートを紹介します。

> **メモ:** スクリプトを HTML に埋め込むのは、よいやり方ではありません。この例では分かりやすさのために、仕方なく埋め込んでいます。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Canvas tutorial</title>
    <script>
      function draw() {
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
        }
      }
    </script>
    <style>
      canvas { border: 1px solid black; }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

スクリプトには `draw()` という関数が含まれており、ページの読み込みが完了したときに一度実行されます。これは文書で {{domxref("Window/load_event", "load")}} イベントを待ち受けすることで実現できます。この関数、または同様の関数は、{{domxref("setTimeout()")}}、{{domxref("setInterval()")}}、その他のイベントハンドラーを使用した場合でも、ページが最初に読み込まれたときに限り、呼び出すことができます。

ここでは、テンプレートが実際にどのように見えるかを説明します。このように、最初は白紙の状態です。

{{EmbedLiveSample("A_skeleton_template", 160, 160)}}

## 単純な描画

まず始めに、交差する 2 つの矩形を描き、そのうちの 1 つにアルファ透過をさせる簡単な例を見てみましょう。これがどのように機能するかは、後の例でさらに詳しく見ていきましょう。

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
      }
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

この例は次のように動作します。

{{EmbedLiveSample("A_simple_example", 160, 160, "canvas_ex1.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
