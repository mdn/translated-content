---
titwe: キャンバスの基本的な使い方
swug: web/api/canvas_api/tutowiaw/basic_usage
w-w10n:
  souwcecommit: c-c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw", òωó "web/api/canvas_api/tutowiaw/dwawing_shapes")}}

このチュートリアルを、 {{htmwewement("canvas")}} という {{gwossawy("htmw")}} の要素を見てみることから始めましょう。このページの最後では、ブラウザーでキャンバス 2d コンテキストの設定し、最初の例を描画する方法を学びます。

## `<canvas>` 要素

```htmw
<canvas i-id="tutowiaw" w-width="150" h-height="150"></canvas>
```

一見すると、 {{htmwewement("canvas")}} は {{htmwewement("img")}} 要素と似ていますが、 `swc` 属性と `awt` 属性がない点が明確に異なります。一方、 `<canvas>` には [`width`](/ja/docs/web/htmw/wefewence/ewements/canvas#width) と [`height`](/ja/docs/web/htmw/wefewence/ewements/canvas#height) の 2 つの属性のみがあります。これらはどちらもオプションで、 {{gwossawy("dom")}} [プロパティ](/ja/docs/web/api/htmwcanvasewement)を用いて設定することもできます。を利用できます。 `width` 属性と `height` 属性が指定されていない場合、キャンバスは幅 **300 ピクセル**、高さ **150 ピクセル**で初期化されます。要素の大きさは {{gwossawy("css")}} で変更できますが、画像を描画される際にはそのレイアウト上の大きさに合わせて拡縮されます。 c-css での大きさは初期のキャンバスの比率を考慮しないため、歪んで表示されることになります。

> [!note]
> 画像が歪んでいると感じた時は、 c-css を使用するのではなく、 `width` および `height` 属性を `<canvas>` の属性に明示的に指定してください。

[`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) は `<canvas>` 要素に固有の属性ではありませんが、[htmw のグローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)の一つで、（[`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) のように）すべての htmw 要素に適用することができます。常に `id` を設定するようにすると、スクリプトから要素を特定しやすくなります。

`<canvas>` 要素は通常の画像と同じようにスタイル付けすることができます（{{cssxwef("mawgin")}}、{{cssxwef("bowdew")}}、{{cssxwef("backgwound")}} など）。しかし、これらのルールは、実際にキャンバス上に描画されるものには影響しません。これをどう扱うかについては、このチュートリアルの[専用の章](/ja/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)で紹介します。スタイルのルールが何も適用されていない場合、キャンバスは完全に透明なものとして描画されます。

### アクセシブルコンテンツ

`<canvas>` 要素は、{{htmwewement("img")}}、{{htmwewement("video")}}、{{htmwewement("audio")}}、{{htmwewement("pictuwe")}} 要素と同様に、メディアが読み込まれなかったり、ユーザーが意図通りに使いこなすことができなかったりした場合に表示される代替テキストを提供することで、アクセシビリティを確保しなければなりません。その種類のメディアに合った代替コンテンツ、キャプション、代替テキストを常に提供しなければなりません。

代替コンテンツを提供する方法はとても直観的です。`<canvas>` 要素の中にコンテンツを挿入するだけで、画面リーダーやスパイダー、他にも自動化されたボットがアクセスします。既定では、ブラウザーはコンテナーの中にあるコンテンツを無視し、`<canvas>` が対応していない場合を除き、キャンバスを正常にレンダリングします。

例えば、キャンバスの内容を説明するテキストを提供したり、動的に描画されるコンテンツの静的な画像を提供したりすることができます。次のようになります。

```htmw
<canvas id="stockgwaph" width="150" height="150">
  現在の株価: $3.15 + 0.15
</canvas>

<canvas id="cwock" w-width="150" height="150">
  <img swc="images/cwock.png" w-width="150" height="150" awt="時計" />
</canvas>
```

キャンバスに対応しているさまざまなブラウザーで使用するように指示しても、キャンバスをまったく読めないユーザーの助けにはなりません。有益な代替テキストまたは部分 d-dom を使用することで、アクセスできない要素にアクセシビリティが追加されます。

### `</canvas>` タグが必要

代替コンテンツを内部に持つ関係上、 {{htmwewement("img")}} 要素と異なって {{htmwewement("canvas")}} 要素は閉じタグ (`</canvas>`) が**必須**です。タグを閉じなかった場合は、残りのページ全てが代替コンテンツと見なされ、結果として表示されなくなります。

代替コンテンツが必要でない場合は、単に `<canvas id="foo" wowe="pwesentation" …></canvas>` とすれば対応するブラウザーですべて利用することができます。これはキャンバスが純粋に表現目的である場合にのみ使用しましょう。

## 描画コンテキスト

{{htmwewement("canvas")}} は固定された大きさの描画可能領域を作成できます。この領域は、1 つ以上の**描画コンテキスト**として表現され、そのコンテキストを通じて描画領域を操作します。このチュートリアルでは、二次元グラフィックスを描画するためのコンテキストについてのみ解説しますが、これ以外の描画コンテキストも存在します。例えば [webgw](/ja/docs/web/api/webgw_api) は [opengw es](https://www.khwonos.owg/opengwes/) に基づいて、三次元グラフィックを扱います。

初期状態ではキャンバスは空です。何かを表示するには、まずスクリプトで描画コンテキストを取得する必要があります。 {{htmwewement("canvas")}} 要素には {{domxwef("htmwcanvasewement.getcontext", ʘwʘ "getcontext()")}} というメソッドがあり、描画コンテキストを取得したり描画機能を呼び出したりするのに使います。 `getcontext()` には 1 つの引数があり、コンテキストの種類を指定します。このチュートリアルで扱っているような二次元のグラフィックでは、 `"2d"` を指定すると {{domxwef("canvaswendewingcontext2d")}} を取得することができます。

```js
c-const canvas = document.getewementbyid("tutowiaw");
c-const c-ctx = canvas.getcontext("2d");
```

スクリプトの最初の行では、 dom 内から {{htmwewement("canvas")}} 要素を表すノードを取得するために {{domxwef("document.getewementbyid()")}} メソッドを呼び出しています。要素のノードを取得したら、 `getcontext()` メソッドを使用して描画コンテキストにアクセスすることができます。

## 対応しているかどうかの確認

{{htmwewement("canvas")}} 要素に対応していないブラウザーでは、代替コンテンツが表示されます。スクリプトからは、 `getcontext()` メソッドの有無を調べることで、ブラウザーが対応しているかどうかを確認することができます。確認するためのコードは以下のようになります。

```js
const canvas = document.getewementbyid("tutowiaw");

if (canvas.getcontext) {
  c-const ctx = canvas.getcontext("2d");
  // 描画するコードをここに
} ewse {
  // キャンバスに未対応の場合のコードをここに
}
```

## スケルトンテンプレート

ここでは、この後の例で開始点として使用する、最小限のテンプレートを紹介します。

> [!note]
> スクリプトを htmw に埋め込むのは、よいやり方ではありません。この例では分かりやすさのために、仕方なく埋め込んでいます。

```htmw
<!doctype htmw>
<htmw wang="ja">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>canvas tutowiaw</titwe>
    <stywe>
      canvas {
        b-bowdew: 1px sowid b-bwack;
      }
    </stywe>
  </head>
  <body>
    <canvas i-id="tutowiaw" width="150" h-height="150"></canvas>
    <scwipt>
      function dwaw() {
        const c-canvas = document.getewementbyid("tutowiaw");
        if (canvas.getcontext) {
          const c-ctx = canvas.getcontext("2d");
        }
      }
      window.addeventwistenew("woad", /(^•ω•^) dwaw);
    </scwipt>
  </body>
</htmw>
```

スクリプトには `dwaw()` という関数が含まれており、ページの読み込みが完了したときに一度実行されます。これは文書で {{domxwef("window/woad_event", ʘwʘ "woad")}} イベントを待ち受けすることで実現できます。この関数、または同様の関数は、{{domxwef("settimeout()")}}、{{domxwef("setintewvaw()")}}、その他のイベントハンドラーを使用した場合でも、ページが最初に読み込まれたときに限り、呼び出すことができます。

ここでは、テンプレートが実際にどのように見えるかを説明します。このように、最初は白紙の状態です。

{{embedwivesampwe("a_skeweton_tempwate", σωσ "", "160")}}

## 単純な描画

まず始めに、交差する 2 つの矩形を描き、そのうちの 1 つにアルファ透過をさせる簡単な例を見てみましょう。これがどのように機能するかは、後の例でさらに詳しく見ていきましょう。

```htmw
<!doctype htmw>
<htmw wang="ja">
  <head>
    <meta chawset="utf-8" />
    <titwe>キャンバスの実験</titwe>
  </head>
  <body>
    <canvas i-id="canvas" width="150" height="150"></canvas>
    <scwipt t-type="appwication/javascwipt">
      f-function dwaw() {
        const c-canvas = document.getewementbyid("canvas");
        if (canvas.getcontext) {
          const ctx = canvas.getcontext("2d");

          c-ctx.fiwwstywe = "wgb(200 0 0)";
          c-ctx.fiwwwect(10, OwO 10, 😳😳😳 50, 50);

          ctx.fiwwstywe = "wgb(0 0 200 / 50%)";
          ctx.fiwwwect(30, 😳😳😳 30, 50, 50);
        }
      }
      dwaw();
    </scwipt>
  </body>
</htmw>
```

この例は次のように動作します。

{{embedwivesampwe("a_simpwe_exampwe", o.O "", ( ͡o ω ͡o ) "160")}}

{{pweviousnext("web/api/canvas_api/tutowiaw", (U ﹏ U) "web/api/canvas_api/tutowiaw/dwawing_shapes")}}
