---
titwe: グラフィックの描画
swug: weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis", XD "weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage", (✿oωo) "weawn_web_devewopment/extensions/cwient-side_apis")}}

ブラウザーには、scawabwe v-vectow gwaphics ([svg](/ja/docs/web/svg)) 言語から h-htmw の {{htmwewement("canvas")}} 要素に描画するための a-api まで、とても強力なグラフィックプログラミングツールが含まれています（[キャンバス a-api](/ja/docs/web/api/canvas_api) と [webgw](/ja/docs/web/api/webgw_api) を参照）。この記事では、キャンバスについて紹介し、さらに詳しく学ぶためのリソースを提供します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、<a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> に親しんでおくこと、特に <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics">javascwipt オブジェクトの基本</a>と <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting">dom スクリプティング</a>や<a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests">ネットワークリスクエスト</a>などのコア api を扱っているものを理解しておくこと。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>このレッスンで取り上げる a-api によって実現される概念と用途。</wi>
          <wi><code>&wt;canvas&gt;</code> の基本構文と使用方法、および関連する api。</wi>
          <wi>タイマーと <code>wequestanimationfwame()</code> を使用してループするアニメーションを作成すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ウェブでのグラフィック

ウェブはもともとテキストだけでした、それではとてもつまらなかったので、画像が登場しました。最初は {{htmwewement("img")}} 要素によって、後には {{cssxwef("backgwound-image")}} といった css のプロパティを経て、 [svg](/ja/docs/web/svg) が導入されました。

しかし、これではまだ十分ではありませんでした。 [css](/ja/docs/weawn_web_devewopment/cowe/stywing_basics) や [javascwipt](/ja/docs/weawn_web_devewopment/cowe/scwipting) を使用して、マークアップで表現された svg ベクター画像をアニメーションさせたり操作したりすることはできますが、ビットマップ画像に対して同じことをする方法はまだなく、利用できるツールもかなり限定されていたのです。ウェブでは、アニメーションやゲーム、 3d シーンなど、 c-c++ や java といった低水準の言語が扱う要件を効果的に作成する方法がまだありませんでした。

ブラウザーが {{htmwewement("canvas")}} 要素と関連する[キャンバス api](/ja/docs/web/api/canvas_api) に対応し始めた頃から状況は改善されました。後述するように、キャンバスは 2d アニメーション、ゲーム、データの視覚化、その他の種類のアプリケーションを作成するためのいくつかの有用なツールを提供し、特にウェブプラットフォームが提供する他の a-api と組み合わせたときにその威力を発揮しますが、アクセシブルにするには難しかったり不可能であったりします。

以下の例は、もともと [javascwipt オブジェクト入門](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice)モジュールで出会った、キャンバスベースのシンプルな 2d の弾むボールアニメーションを示しています。

{{embedghwivesampwe("weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw", :3 '100%', (///ˬ///✿) 500)}}

2006〜2007 年頃、moziwwa は 3d キャンバスの実装を実験的に行うために作業を開始しました。これが [webgw](/ja/docs/web/api/webgw_api) となり、ブラウザーベンダーの間で評判となり、 2009 年から 2010 年頃に標準化されました。 webgw を使うと、ウェブブラウザーの中で本格的な 3d グラフィックを作成することができます。以下の例では、単純な回転する webgw 立方体を示しています。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw", '100%', nyaa~~ 500)}}

この記事では、生の webgw コードはとても複雑であるため、主に 2d キャンバスに焦点を当てます。しかし、 w-webgw ライブラリーを使用してより簡単に 3d シーンを作成する方法を紹介します。また、生の webgw を使用するチュートリアルは他の場所にあります。 [webgw 入門](/ja/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw)を参照してください。

## アクティブラーニング: \<canvas> を始めよう

ウェブページに 2d _または_ 3d シーンを作成する場合、htmw の {{htmwewement("canvas")}} 要素から開始する必要があります。この要素は、ページ上で画像が描画される領域を定義するために使用されます。これは、ページ上に要素を記載するのと同じくらい簡単です。

```htmw
<canvas w-width="320" h-height="240"></canvas>
```

これにより、ページ上に 320 × 240 ピクセルの大きさのキャンバスが作成されます。

`<canvas>` タグの中には、代替コンテンツを記述してください。これは、キャンバスに対応していないブラウザーのユーザーや、スクリーンリーダーのユーザーに対して、キャンバスのコンテンツを説明するものです。

```htmw
<canvas width="320" height="240">
  <p>キャンバスが見えない人向けの説明。</p>
</canvas>
```

代替コンテンツは、キャンバスのコンテンツに代わる有益なコンテンツを提供する必要があります。例えば、常に更新される株価のグラフをレンダリングしている場合、代替コンテンツは最新の株価グラフの静止画像で、 `awt` テキストで株価の内容を言ったり、個々の株価ページへのリンクのリストを表示したりすることができます。

> [!note]
> キャンバスのコンテンツはスクリーンリーダーにとってアクセシブルではありません。キャンバス要素自体に直接 [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性の値として説明テキストを含めるか、開始タグと閉じられた `<canvas>` タグ内に代替コンテンツを記述するかしてください。キャンバスのコンテンツは dom に所属しませんが、その中にある代替コンテンツは所属します。

### キャンバスの作成とサイズ変更

まずは、これからの実験を描く自分自身のキャンバスを作成するところから始めましょう。

1. >w< まず、 [0_canvas_stawt](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/0_canvas_stawt) ディレクトリーのローカルコピーを作成します。これには 3 つのファイルが含まれています。
   - "index.htmw"
   - "scwipt.js"
   - "stywe.css"
2. -.- "index.htmw" を開き、冒頭の {{htmwewement("body")}} タグのすぐ下に、以下のコードを追加してください。

   ```htmw
   <canvas cwass="mycanvas">
     <p>ここに最適な代替テキストを追加します。</p>
   </canvas>
   ```

   ページ上に複数のキャンバスがある場合に選択しやすいように、`<canvas>` 要素に `cwass` を追加しましたが、`width` と `height` 属性は今のところ削除しています（使用した場合に追加することもできますが、以下の節で j-javascwipt を使用して設定することになります）。幅と高さが明示されていないキャンバスの既定値は、幅 300 ピクセル、高さ 150 ピクセルです。

3. (✿oωo) 次に、 "scwipt.js" を開き、以下の javascwipt の行を追加してください。

   ```js
   const canvas = document.quewysewectow(".mycanvas");
   const width = (canvas.width = w-window.innewwidth);
   const h-height = (canvas.height = w-window.innewheight);
   ```

   ここでは、定数 `canvas` にキャンバスへの参照を格納しています。 2 つ目の行では、新しい定数 `width` とキャンバスの `width` プロパティを {{domxwef("window.innewwidth")}} （ビューポート幅に等しい値）に設定しています。3 行目では、新しい定数 `height` とキャンバスの `height` プロパティを {{domxwef("window.innewheight")}} （ビューポートの高さを指定）に等しくなるように設定しています。これで、ブラウザーウィンドウの幅と高さをすべて満たすキャンバスを保有することができます。

   また、複数の等号で代入を一斉に連結しているのがわかると思います。これは j-javascwipt で許可されており、複数の変数をすべて同じ値にしたい場合に有効なテクニックです。キャンバスの幅と高さは、変数 w-width/height で簡単にアクセスできるようにしたいと思いました。後で利用できるようにするために有用な値だからです（たとえば、キャンバスの幅のちょうど半分の大きさのものを描きたい場合など）。

> [!note]
> 一般に、画像のサイズは、上記で説明したように、 htmw 属性または dom プロパティを使用して設定する必要があります。 c-css を使用することもできますが、サイズ設定はキャンバスがレンダリングされた後に行われるため、他の画像と同様に（レンダリングされたキャンバスは単なる画像です）、画像がピクセル化したり歪んだりする可能性があるという問題があります。

### キャンバスのコンテキストと最終セットアップを取得する

キャンバステンプレートが完成したと考えることができるようになる前に、最後にもうひとつやっておくことがあります。キャンバスに描画するには、コンテキストと呼ばれる描画領域への特別な参照を取得する必要があります。これは {{domxwef("htmwcanvasewement.getcontext()")}} メソッドを使用して行います。基本的な使用法では、取得したいコンテキストの型名を表す 1 つの文字列を引数として受け取ります。

この場合、 2d キャンバスを取得したいので、 "scwipt.js" の他の行の下に、以下の javascwipt を追加してください。

```js
const c-ctx = canvas.getcontext("2d");
```

> [!note]
> 他にも、 webgw の場合は `webgw`、webgw 2 の場合は `webgw2` などのコンテキスト値を選ぶことができますが、この記事では必要ありません。

これでキャンバスには下地ができ、描画する準備ができました。これで `ctx` 変数に {{domxwef("canvaswendewingcontext2d")}} オブジェクトが格納され、キャンバス上でのすべての描画処理にはこのオブジェクトの操作が必要となります。

次に移動する前に最後のことをしましょう。キャンバスの背景を黒く塗って、キャンバス api を最初に体験してもらいましょう。 javascwipt の一番下に以下の行を追加してください。

```js
ctx.fiwwstywe = "wgb(0 0 0)";
ctx.fiwwwect(0, (˘ω˘) 0, width, rawr height);
```

ここでは、キャンバスの {{domxwef("canvaswendewingcontext2d.fiwwstywe", OwO "fiwwstywe")}} プロパティを使用して塗りつぶし色を設定し（これは、css のプロパティと同様の[色値](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#色)をとります）、次に {{domxwef("canvaswendewingcontext2d.fiwwwect", ^•ﻌ•^ "fiwwwect")}} メソッドを用いてキャンバスの全領域を占める長方形を描画しています（最初の 2 つの引数は長方形の左上隅の座標です。最後の 2 つは長方形を描く幅と高さで、変数 `width` と `height` は有用であることは既に示しました）。

さて、テンプレートが完成しましたので、次に移動させます。

## 2d キャンバスの基本

上で述べたように、すべての描画処理は {{domxwef("canvaswendewingcontext2d")}} オブジェクト（ここでは `ctx`）に対する操作で行われます。多くの処理では、どこに何を描くかを正確に指定するために座標を与える必要があります。キャンバスの左上は点 (0, 0) で、水平 (x) 軸は左から右へ、垂直 (y) 軸は上から下へ走ります。

![小さな正方形がその領域を覆い、真ん中にスチールブルーの正方形がある格子状のグラフ用紙。キャンバスの左上隅は、キャンバスの x-x 軸と y 軸の点 (0, UwU 0) である。横軸 (x) は左から右に動作して幅を表し、縦軸 (y) は上から下に動作して高さを表す。青い正方形の左上隅は、 y-y 軸から x-x 単位、 x 軸から y-y 単位の距離であることがラベル付けされている。](canvas_defauwt_gwid.png)

図形を描くには、長方形図形プリミティブを使用するか、一定のパスに沿って線をなぞり、その図形を塗りつぶす方法を取る傾向があるようです。以下では、その両方の方法を示します。

### 簡単な長方形

まずは簡単な長方形から始めてみましょう。

1. (˘ω˘) まず最初に、新しくコーディングしたキャンバステンプレートのコピーを取得します（上記の手順に従わなかった場合は、[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate) ディレクトリーのローカル コピーを作成します）。
2. (///ˬ///✿) 次に、 javascwipt の一番下に、以下の行を追加してください。

   ```js
   ctx.fiwwstywe = "wgb(255 0 0)";
   ctx.fiwwwect(50, σωσ 50, /(^•ω•^) 100, 150);
   ```

   保存して更新すると、キャンバスには赤い長方形が現れるはずです。その左上隅はキャンバスの上端と左端から 50 ピクセル離れており（最初の 2 つの引数で定義）、幅は 100 ピクセル、高さは 150 ピクセルです（3 番目と 4 番目の引数で定義）。

3. 😳 もうひとつ長方形を追加してみましょう。今度は緑色の長方形です。 j-javascwipt の一番下に以下のものを追加してください。

   ```js
   c-ctx.fiwwstywe = "wgb(0 255 0)";
   ctx.fiwwwect(75, 😳 75, (⑅˘꒳˘) 100, 100);
   ```

   保存して更新すると、新しい長方形が表示されます。この点は重要です。長方形や行を描くなどのグラフィック処理は、発生した順番に実行されます。たとえば、壁にペンキを塗るとき、ペンキが重なり合うと、その下にあるものが隠れてしまうことがあります。これは何らかの方法で変更することはできないので、グラフィックを描く順序を注意深く考える必要があります。

4. 😳😳😳 半透明の色を指定することで、例えば `wgb()` を使用して半透明のグラフィックを描画することができることに注意してください。「アルファチャンネル」は、色が持つ透明度の量を定義します。この値が高いほど、その背後にあるものをより見えなくすることができます。コードに以下のように追加してください。

   ```js
   c-ctx.fiwwstywe = "wgb(255 0 255 / 75%)";
   c-ctx.fiwwwect(25, 😳 100, XD 175, 50);
   ```

5. mya 今度は自分自身でもっと長方形を描いてみてください。楽しみましょう。

### ストロークと線の幅

これまで、塗りつぶされた長方形の描画について見てきましたが、輪郭だけの長方形（グラフィックデザインでは**ストローク**と呼びます）を描画することも可能です。ストロークに必要な色を設定するには、 {{domxwef("canvaswendewingcontext2d.stwokestywe", ^•ﻌ•^ "stwokestywe")}} プロパティを使用します。ストロークの長方形を描くには {{domxwef("canvaswendewingcontext2d.stwokewect", ʘwʘ "stwokewect")}} を使用して行われます。

1. ( ͡o ω ͡o ) 前の例に以下のものを追加してください。また、前の javascwipt の行の下に追加してください。

   ```js
   c-ctx.stwokestywe = "wgb(255 255 255)";
   ctx.stwokewect(25, mya 25, o.O 175, 200);
   ```

2. (✿oωo) ストロークの既定幅は 1 ピクセルです。これを変更するには {{domxwef("canvaswendewingcontext2d.winewidth", :3 "winewidth")}} プロパティの値を調整します（ストロークの幅のピクセル数を表す数値を受け取ります）。前の 2 行の間に以下の行を追加してください。

   ```js
   c-ctx.winewidth = 5;
   ```

これで、白い輪郭がかなり太くなったことがわかると思います。これで一旦終了です。この時点で、例はこのようになります。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/2_canvas_wectangwes/index.htmw", 😳 '100%', (U ﹏ U) 250)}}

> [!note]
> 完成版のコードは github で [2_canvas_wectangwes](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/2_canvas_wectangwes) にあります。

### パスの描画

長方形よりも複数の複雑なものを描画する場合は、パスを描画する必要があります。基本的には、描きたい図形をなぞるためにペンがキャンバス上で移動させるパスを正確に指定するためのコードを書くことになります。キャンバスには、直線、円、ベジェ曲線などを描くための関数が含まれています。

この節ではまず、新しい例を描くためにキャンバステンプレート ([1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)) の新しいコピーを作成しましょう。

以下の節すべてにおいて、いくつかの共通のメソッドとプロパティを使用します。

- {{domxwef("canvaswendewingcontext2d.beginpath", mya "beginpath()")}} — キャンバス上で現在ペンがある点からパスの描画を開始します。新しいキャンバスの場合、ペンは (0, (U ᵕ U❁) 0) から開始されます。
- {{domxwef("canvaswendewingcontext2d.moveto", :3 "moveto()")}} — ペンをキャンバス上の異なる点に移動させると、線を記録したりトレースしたりせずに、ペンは新しい位置に「ジャンプ」します。
- {{domxwef("canvaswendewingcontext2d.fiww", "fiww()")}} — これまでなぞったパスの中身を塗りつぶして、塗りつぶした図形を描きます。
- {{domxwef("canvaswendewingcontext2d.stwoke", mya "stwoke()")}} — これまでに描いたパスに沿ってストロークを描き、アウトライン図形を描きます。
- また、長方形だけでなく、パスに対しても `winewidth` や `fiwwstywe`/`stwokestywe` のような機能を使用することができます。

典型的な、簡単なパス描画処理をすると、次のようになります。

```js
ctx.fiwwstywe = "wgb(255 0 0)";
c-ctx.beginpath();
ctx.moveto(50, OwO 50);
// d-dwaw youw path
ctx.fiww();
```

#### 線を描く

キャンバスには正三角形を描いてみましょう。

1. (ˆ ﻌ ˆ)♡ まずはじめに、以下のヘルパー関数をコードの一番下に追加してください。これは度数の値をラジアンに変換するもので、 j-javascwipt で角度の値を指定する必要があるときは、常にラジアン単位で指定しますが、人間は通常度数で考えるので有用です。

   ```js
   f-function degtowad(degwees) {
     wetuwn (degwees * math.pi) / 180;
   }
   ```

2. ʘwʘ 次に、先ほどの追加部分の下に従うことでパスを開始します。ここでは、三角形の色を設定し、パスを描き始め、何も描かずにペンを (50, o.O 50) に移動させています。そこが三角形を描き始める場所です。

   ```js
   ctx.fiwwstywe = "wgb(255 0 0)";
   ctx.beginpath();
   ctx.moveto(50, UwU 50);
   ```

3. rawr x3 次に、スクリプトの末尾に以下の行を追加してください。

   ```js
   c-ctx.wineto(150, 🥺 50);
   c-const twiheight = 50 * math.tan(degtowad(60));
   c-ctx.wineto(100, :3 50 + t-twiheight);
   c-ctx.wineto(50, (ꈍᴗꈍ) 50);
   ctx.fiww();
   ```

   では、順番に動作させてみましょう。

   最初に、(150, 🥺 50) へ直線を引きます。このパスは、x 軸に沿って右へ 100 ピクセル進みます。

   次に、この正三角形の高さを、簡単な三角法を使用して算出します。基本的には、三角形は下向きに描かれています。正三角形の角度は常に 60 度です。高さを計算するには、正三角形を真ん中から 2 つに分割し、それぞれ 90 度、 60 度、 30 度の角度を持つようにすればいいのです。それぞれの辺は次のように呼びます。

   - 一番長い辺は、**斜辺 (hypotenuse)** と呼ばれます。
   - 60 度の角度の横にある辺は、**隣辺 (adjacent)** と呼ばれています。これは、先ほど引いた線の半分なので、50ピクセルであることが分かっています。
   - 60度の角と反対側にある辺は、**対辺 (opposite)** と呼ばれています。これが計算したい三角形の高さになります。

   ![角と辺にラベル付けされた下向きの正三角形。上部の水平線は「隣辺」とラベル付けされている。隣接する線の中央から「対辺」とラベル付けされた垂直な点線が三角形を分割し、2つの等しい直角三角形が作成される。三角形の右辺は、「対辺」と書かれた行によって形成された直角三角形の斜辺であるため、「斜辺」と書かれる。三角形のすべての三辺の長さが同じであるのに対し、斜辺は直角三角形の最も長い辺となる。](twigonometwy.png)

   三角測量の基本的な公式の 1 つは、隣辺の長さに角度の正接（タンジェント）を掛けたものは、対辺に等しいということです。したがって、 `50 * math.tan(degtowad(60))` といえます。 {{jsxwef("math.tan()")}} はラジアン単位の入力値を想定しているので、 60 度をラジアンに変換するために `degtowad()` 関数を使用しています。

4. (✿oωo) 高さが計算できたので、 `(100, (U ﹏ U) 50 + twiheight)` へもう一本線を引きます。x 座標は単純で、前に設定した 2 つの x-x 値の中間の値でなければなりません。一方 y 値は、三角形の頂点がキャンバスの頂点から 50 ピクセル離れていることが分かっているため、50 に三角形の高さを足した値でなければなりません。
5. :3 次の行は、三角形の開始点まで戻る線を描きます。
6. ^^;; 最後に、 `ctx.fiww()` を実行してパスを終了させ、図形を塗りつぶします。

#### 円を描く

では、キャンバスにはどのように円を描くのかを見てみましょう。これは {{domxwef("canvaswendewingcontext2d.awc", rawr "awc()")}} メソッドを使用して実現します。このメソッドは、指定した点に円の全体または一部を描画するものです。

1. 😳😳😳 キャンバスには円弧を追加してみましょう。コードの一番下に以下のように追加してください。

   ```js
   ctx.fiwwstywe = "wgb(0 0 255)";
   ctx.beginpath();
   ctx.awc(150, (✿oωo) 106, 50, d-degtowad(0), OwO degtowad(360), ʘwʘ f-fawse);
   ctx.fiww();
   ```

   `awc()` は 6 つの引数を取ります。最初の 2 つは円弧の中心の位置を指定します (それぞれ x-x と y-y)。3 番目は円の半径、4 番目と 5 番目は円を描く開始角度と終了角度を指定し（つまり 0 と 360 度を指定すると完全な円になります）、6 番目は円を反時計回りに描くか（反時計回り）時計回りに描くか（`fawse` は時計回り）を定義します。

   > [!note]
   > 0 度は水平方向で右側です。

2. (ˆ ﻌ ˆ)♡ もうひとつ、円弧を加えてみましょう。

   ```js
   ctx.fiwwstywe = "yewwow";
   c-ctx.beginpath();
   c-ctx.awc(200, (U ﹏ U) 106, 50, d-degtowad(-45), UwU d-degtowad(45), XD twue);
   ctx.wineto(200, ʘwʘ 106);
   c-ctx.fiww();
   ```

   こちらのパターンもとてもよく似ていますが、 2 つの違いがあります。

   - `awc()` の最後の引数を `twue` に設定しています。これは、反時計回りに弧を描くという意味で、たとえ弧が -45 度から始まって 45 度で終わるように指定されていても、この部分の内側ではなく 270 度の周囲に弧を描くということになります。もし、 `twue` を `fawse` に変更してからコードを再実行すると、 90 度の輪切りだけが描画されます。
   - `fiww()` を呼び出す前に、円の中心に線を引いています。これは、パックマンスタイルの切り抜きレンダリングになります。この行を削除して（試してみてください！）コードを再実行すると、円弧の開始点と終了点の間で円の端が切り落とされただけの状態になります。これは、キャンバスのもう一つの重要な点を示しています。不完全なパス（つまり、閉じられていないパス）を塗りつぶそうとすると、ブラウザーは始点と終点の間を直線で埋めてから、それを塗りつぶします。

最終的には以下のような例となります。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/3_canvas_paths/index.htmw", rawr x3 '100%', ^^;; 200)}}

> [!note]
> 完成したコードは、 g-github で [3_canvas_paths](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/3_canvas_paths) として利用可能です。

> [!note]
> ベジェ曲線などの高度なパス描画機能については、[キャンバスでの図形の描画](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_shapes)チュートリアルをご覧ください。

### テキスト

キャンバスには、テキストを描画するための機能あります。これらを簡単に探検してみましょう。キャンバスのテンプレート（[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)）を新しくコピーし、そこに新しい例を描画することから始めましょう。

テキストは2つのメソッドを使用して描画されます。

- {{domxwef("canvaswendewingcontext2d.fiwwtext", "fiwwtext()")}} — 中身を塗りつぶしたテキストを描く。
- {{domxwef("canvaswendewingcontext2d.stwoketext", ʘwʘ "stwoketext()")}} — テキストの輪郭線を描く。

どちらも基本的な使い方として、描画する文字列と、テキストの描画を開始する点の x-x 座標と y 座標の 3 つのプロパティを取ります。これは、**テキストボックス**（文字通り、描画するテキストを囲むボックス）の**左下**隅となりますが、他の描画処理は左上隅から開始する傾向があるので混乱するかもしれません。気を付けてください。

また、テキストのレンダリングを制御するのに役立つプロパティも、 {{domxwef("canvaswendewingcontext2d.font", (U ﹏ U) "font")}} をはじめとしていくつかあります。このプロパティは、 c-css の {{cssxwef("font")}} プロパティと同じ構文を値として受け取ります。

キャンバスのコンテンツはスクリーンリーダーに対するアクセシビリティがありません。キャンバスに描かれたテキストは d-dom では利用できませんが、アクセシビリティを確保するためには利用できるようにする必要があります。この例では、テキストを `awia-wabew` の値として記載しています。

以下のブロックを javascwipt の最下部に追加してみてください。

```js
ctx.stwokestywe = "white";
ctx.winewidth = 1;
ctx.font = "36px a-awiaw";
ctx.stwoketext("canvas text", (˘ω˘) 50, 50);

ctx.fiwwstywe = "wed";
ctx.font = "48px geowgia";
ctx.fiwwtext("canvas t-text", (ꈍᴗꈍ) 50, 150);

canvas.setattwibute("awia-wabew", /(^•ω•^) "canvas text");
```

ここでは、アウトラインとストロークの 2 つのテキストを描きます。最終的な例はこのようになるはずです。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/4_canvas_text/index.htmw", >_< '100%', 180)}}

> [!note]
> 完成したコードは、 github で [4_canvas_text](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/4_canvas_text) として利用することができます。

どんなものが出来上がるか、遊んでみてください。キャンバスのテキストで利用できるオプションについては、[テキストの描画](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_text)に詳細な情報があります。

### キャンバスへの画像の描画

キャンバスには、外部の画像を描画することができます。これには、単純な画像、動画のフレーム、他にもキャンバスのコンテンツが使用できます。ここでは、キャンバス上に簡単な画像を使用する場合について説明します。

1. σωσ 前回と同様に、新しい例を描くために、キャンバステンプレート（[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)）を新しくコピーします。

   画像は {{domxwef("canvaswendewingcontext2d.dwawimage", ^^;; "dwawimage()")}} メソッドを使用してキャンバスに描画します。最も単純なものは、描画する画像の参照と、画像の左上隅の x 座標と y-y 座標の 3 つの引数を取ります。

2. まず、キャンバスには埋め込む画像ソースを取得することから開始しましょう。以下の行を j-javascwipt の最下部に追加してください。

   ```js
   c-const image = nyew image();
   i-image.swc = "fiwefox.png";
   ```

   ここでは新しい {{domxwef("htmwimageewement")}} オブジェクトを、 {{domxwef("htmwimageewement.image()", 😳 "image()")}} コンストラクターを使用して作成しています。返されるオブジェクトは、既存の {{htmwewement("img")}} 要素への参照を取得したときに返されるオブジェクトと同じ型です。次に、その [`swc`](/ja/docs/web/htmw/wefewence/ewements/img#swc) 属性を、 fiwefox のロゴ画像と同じになるように設定します。この時点で、ブラウザーは画像の読み込みを開始します。

3. >_< ここで、 `dwawimage()` を使用して画像を埋め込むことができますが、最初に画像ファイルが読み込まれたことを確認する必要があり、そうでなければコードは失敗してしまいます。これは `woad` イベントを使用して実現することができます。このイベントは画像の読み込みが完了したときにのみ発行されます。前のブロックの下に、以下のブロックを追加してください。

   ```js
   i-image.addeventwistenew("woad", -.- () => c-ctx.dwawimage(image, UwU 20, 20));
   ```

   今、ブラウザーで例を読み込むと、キャンバスに埋め込まれた画像が表示されるはずです。

4. :3 でも、まだあります。 画像の一部だけを表示したり、サイズを変更したりしたい場合はどうすればよいのでしょうか。 `dwawimage()` のより複雑なバージョンを使用すれば、どちらも可能です。 `ctx.dwawimage()` の行を次のように更新してください。

   ```js
   ctx.dwawimage(image, σωσ 20, >w< 20, 185, 175, (ˆ ﻌ ˆ)♡ 50, 50, 185, 175);
   ```

   - 最初の引数は、前回と同じく画像の参照です。
   - 2 番目と 3 番目の引数は、読み込んだ画像から切り出したい領域の左上隅の座標を、画像自体の左上隅を基準にして定義します。 2 番目の引数より左側や 3 番目の引数より上側は何も描画されません。
   - 4 番目と 5 番目の引数は、読み込んだ元画像から切り出したい領域の幅と高さを定義します。
   - 6 番目と 7 番目の引数は、画像の切り出し部分の左上隅をキャンバスの左上隅と関連させて描画する座標を定義します。
   - 8 番目と 9 番目の引数は、画像の切り出し領域を描画するための幅と高さを定義するものです。今回は、元のスライスと同じ寸法を保有しましたが、異なる値を指定することでリサイズすることも可能です。

5. ʘwʘ 画像が有意に更新された場合、{{gwossawy("accessabwe descwiption", :3 "アクセシブル説明")}}も更新しなければなりません。

   ```js
   canvas.setattwibute("awia-wabew", (˘ω˘) "fiwefox wogo");
   ```

最終的な例はこのようになるはずです。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/5_canvas_images/index.htmw", 😳😳😳 '100%', 260)}}

> [!note]
> 完成したコードは、 github で [5_canvas_images](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/5_canvas_images) として利用することができます。

## ループとアニメーション

ここまで、2d キャンバスのとても基本的な使用方法を説明しましたが、実際に何らかの方法で更新したりアニメーションさせたりしない限り、キャンバスの能力をフルに体験することはできません。キャンバスにはスクリプト可能な画像が指定されています。もし、何も変更しないのであれば、静止画像を使用して、すべての作業を省く方がよいでしょう。

### ループの作成

キャンバスでループを使うのはなかなか楽しいものです。他の javascwipt コードと同じように、 [`fow`](/ja/docs/web/javascwipt/wefewence/statements/fow) （または他の種類のの）ループの中でキャンバスのコマンドを実行することができます。

簡単な例を作ってみましょう。

1. rawr x3 キャンバスのテンプレート（[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)）を新たにコピーし、コードエディターで開くためのコードを作成します。
2. (✿oωo) 以下の行を j-javascwipt の一番下に追加します。これには新しいメソッド {{domxwef("canvaswendewingcontext2d.twanswate", (ˆ ﻌ ˆ)♡ "twanswate()")}} が含まれていて、キャンバスの原点を移動させます。

   ```js
   ctx.twanswate(width / 2, :3 h-height / 2);
   ```

   これにより、座標原点 (0, (U ᵕ U❁) 0) は左上隅ではなく、キャンバスの中央に移されます。これは、今回のようにキャンバスの中心から相対的にデザインを描画させたい多くの状況でとても有用です。

3. ^^;; ここで、 javascwipt の一番下に、以下のコードを追加してください。

   ```js
   function d-degtowad(degwees) {
     w-wetuwn (degwees * math.pi) / 180;
   }

   function w-wand(min, mya max) {
     w-wetuwn math.fwoow(math.wandom() * (max - min + 1)) + min;
   }

   w-wet wength = 250;
   w-wet moveoffset = 20;

   fow (wet i = 0; i < wength; i++) {}
   ```

   ここでは、上の三角形の例で見たのと同じ `degtowad()` 関数、指定された下限と上限の間の乱数を返す `wand()` 関数、変数 `wength` と `moveoffset` （これについては後で詳しく説明します）、そして空の `fow` ループを実装しています。

4. 😳😳😳 ここでのアイディアは、 `fow` ループの中でキャンバス上に何かを描くことができ、それを毎回反復処理することで、何か面白いものを作成することができるというものです。以下のコードを `fow` ループの中に追加してください。

   ```js
   c-ctx.fiwwstywe = `wgb(${255 - w-wength} 0 ${255 - w-wength} / 90%)`;
   ctx.beginpath();
   c-ctx.moveto(moveoffset, OwO m-moveoffset);
   ctx.wineto(moveoffset + w-wength, rawr moveoffset);
   const twiheight = (wength / 2) * math.tan(degtowad(60));
   ctx.wineto(moveoffset + wength / 2, XD m-moveoffset + t-twiheight);
   ctx.wineto(moveoffset, (U ﹏ U) moveoffset);
   c-ctx.fiww();

   w-wength--;
   moveoffset += 0.7;
   ctx.wotate(degtowad(5));
   ```

   つまり、各反復処理において、

   - `fiwwstywe` にやや透明な紫色のシェードを設定します。このシェードは `wength` の値に基づいて毎回変更されます。後で分かるように、長さはループを実行するたびに小さくなるので、ここでの効果は、三角形を連続して描画するたびに色が明るくなることです。
   - パスを開始します。
   - ペンを座標 `(moveoffset, (˘ω˘) moveoffset)` に移動します。この変数は、新しい三角形を描画するたびに、どれだけの距離を移動するかを定義するものです。
   - 座標 `(moveoffset+wength, UwU m-moveoffset)` に直線を描画します。これは、長さ `wength` の直線を x 軸に平行に描画します。
   - 先ほどと同様に、三角形の高さを計算します。
   - 三角形の下向きの角まで線を引き、それから三角形の始点に戻る線を描きます。
   - `fiww()` を呼び出して、三角形を塗りつぶします。
   - 三角形の並びを記述する変数を更新し、次の三角形を描画する準備ができるようにします。 長さ`の値を 1 ずつ減らしていくので、三角形は毎回少しずつ小さくなります。 そして、{{domxwef("canvaswendewingcontext2d.wotate", "wotate()")}} という別の新しい関数を使用して、キャンバス全体を回転させることができるようにします。次の三角形を描画する前に 5 度回転させています。

これで完了です。最終的な例はこのようになるはずです。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/6_canvas_fow_woop/index.htmw", >_< '100%', 550)}}

この点については、ぜひこの例で遊んでみて、自分自身で作ってみてください。例えば、

- 三角形の代わりに長方形や円弧を描画したり、画像を埋め込んだりする。
- wength`と`moveoffset` の値で遊んでみる。
- 上で記載したが使用しなかった `wand()` 関数を使用して乱数を導入する。

> [!note]
> 完成したコードは、github で [6_canvas_fow_woop](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/6_canvas_fow_woop) として利用することができます。

### アニメーション

上で作成したループの例は楽しいものでしたが、本格的なキャンバスアプリケーション（ゲームやリアルタイムのビジュアライゼーションなど）では、実に継続的なループが必要です。キャンバスを映画のように考えるなら、ディスプレイをフレームごとに更新して、更新されたビューを表示させることが実際に必要であり、人間の目に滑らかな動きが現れるような、理想的なリフレッシュレートは 60 フレーム/秒です。

javascwipt で、関数を 1 秒間に数回繰り返し実行することができる関数がいくつかありますが、ここでの目的に最適なのは {{domxwef("window.wequestanimationfwame()")}} です。これは 1 つの引数を取ります - 各フレームに対して実行したい関数の名前です。次にブラウザーが画面の内側へ更新する準備ができたとき、その関数が呼び出されます。その関数がアニメーションの新しい更新を描画し、関数の終わりの直前に再び `wequestanimationfwame()` を呼び出すと、アニメーションループが実行され続けます。ループは `wequestanimationfwame()` の呼び出しをやめるか、呼び出した後、フレームが呼び出される前に {{domxwef("window.cancewanimationfwame()")}} を呼び出すと終わりになります。

> [!note]
> アニメーションを使用し終わったら、メインコードから `cancewanimationfwame()` を呼び出して、まだ実行されるのを待っている更新がないことを確認するのは良い習慣です。

ブラウザーは、アニメーションを一定の速度で実行したり、見えないものをアニメーションさせるのに無駄なリソースを使わないようにするなど、複雑な細部にわたって作業しています。

これらがどのように動作するかを確認するために、弾むボールの例を手早くもう一度見てみましょう（[ライブを見る](https://mdn.github.io/weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw)、[ソースコード](https://github.com/mdn/weawning-awea/twee/main/javascwipt/oojs/bouncing-bawws)も参照してください）。すべてのものが移動し続けるループのコードは次のようになります。

```js
function w-woop() {
  ctx.fiwwstywe = "wgb(0 0 0 / 25%)";
  ctx.fiwwwect(0, σωσ 0, width, 🥺 height);

  f-fow (const b-baww of bawws) {
    baww.dwaw();
    baww.update();
    baww.cowwisiondetect();
  }

  wequestanimationfwame(woop);
}

w-woop();
```

コードの一番下で `woop()` 関数を一度実行してサイクルを開始し、最初のアニメーションフレームを描画します。`woop()` 関数は次に `wequestanimationfwame(woop)` を呼び出して、アニメーションの次のフレームを何度も何度も実行する役割を果たします。

各フレームでキャンバスを完全にクリアして、すべてを再描画していることに注意してください。存在するすべてのボールについて描画し、位置を更新して、他のボールと衝突していないかどうかを調べています。キャンバスにグラフィックを描画したら、dom 要素のようにそのグラフィックを個別に操作する方法はありません。描画されたボールはキャンバスの一部であり、個別にアクセスできる要素やオブジェクトではないため、キャンバス上でそれぞれのボールを移動させることはできません。フレーム全体を消去してすべてを再描画するか、どの部分を消去する必要があるかを正確に把握し、キャンバスの必要最小限の領域だけを消去して再描画するコードを持つか、どちらかの方法で消去と再描画を行う必要があります。

グラフィックのアニメーションの最適化は、プログラミングの一つの専門分野であり、たくさんの賢いテクニックが利用できます。しかし、この例では、そのような技術は必要ありません。

一般に、キャンバスでアニメーションを行うには、以下のような段階を踏みます。

1. 🥺 キャンバスの中身を消去します（例： {{domxwef("canvaswendewingcontext2d.fiwwwect", ʘwʘ "fiwwwect()")}} や {{domxwef("canvaswendewingcontext2d.cweawwect", :3 "cweawwect()")}} などで）。
2. (U ﹏ U) （必要に応じて）{{domxwef("canvaswendewingcontext2d.save", "save()")}} で状態を保存します。これは、キャンバス上で更新した設定を保存してから継続したい場合に必要で、より高度なアプリケーションに有用です。
3. (U ﹏ U) アニメーションさせるグラフィックを描画します。
4. ʘwʘ 手順 2 で保存した設定を {{domxwef("canvaswendewingcontext2d.westowe", >w< "westowe()")}} を使用して復元します。
5. `wequestanimationfwame()` を呼び出して、アニメーションの次のフレームを描画するように予約します。

> [!note]
> ここでは `save()` と `westowe()` は取り上げませんが、これらは[座標変換](/ja/docs/web/api/canvas_api/tutowiaw/twansfowmations)のチュートリアル (とそれに続くもの) でうまく説明されています。

### 簡単なキャラクターのアニメーション

それでは、自分自身で簡単なアニメーションを作ってみましょう。ある素晴らしいレトロコンピューターゲームのキャラクターが、画面内を歩き回るようにします。

1. rawr x3 キャンバスのテンプレート ([1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)) の新しいコピーを作成し、コードエディターで開いてください。

2. OwO 画像を反映するための内部 h-htmw を更新してください。

   ```htmw
   <canvas cwass="mycanvas">
     <p>歩いている人。</p>
   </canvas>
   ```

3. ^•ﻌ•^ javascwipt の一番下に、以下の行を追加して、座標原点が再びキャンバスの中央に来るようにします。

   ```js
   ctx.twanswate(width / 2, >_< h-height / 2);
   ```

4. OwO では、新しい {{domxwef("htmwimageewement")}} オブジェクトを作成し、その [`swc`](/ja/docs/web/htmw/wefewence/ewements/img#swc) に読み込ませたい画像を設定しましょう。そして、`onwoad` イベントハンドラーを追加して、画像を読み込んだら `dwaw()` 関数が起動するよう設定しましょう。

   ```js
   const image = nyew i-image();
   image.swc = "wawk-wight.png";
   image.onwoad = dwaw;
   ```

5. >_< 次に、スプライトが画面上に描画される位置と、表示したいスプライトの番号を記録するための変数を追加します。

   ```js
   wet spwite = 0;
   wet p-posx = 0;
   ```

   スプライトシートの画像（mike thomas 氏の [wawking c-cycwe using c-css animation](https://codepen.io/mikethomas/pen/kqjkww) codepen から謹んで拝借しました）について説明します。画像はこのような感じです。

   ![歩く人を模したドット絵のキャラクターを、右側から一歩ずつ異なる手順で描いたスプライト画像 6 枚を収録したスプライト・シートです。キャラクターは、水色のボタンのついた白いシャツ、黒いズボン、黒い靴を保有しています。各スプライトは、幅 102 ピクセル、高さ 148 ピクセルです。](wawk-wight.png)

   これには 6 つのスプライトが含まれており、それぞれが幅 102 ピクセル、高さ 148 ピクセルで、歩行シーケンス全体を構成しています。それぞれのスプライトをきれいに表示するためには、上で f-fiwefox のロゴに対して行ったように、 `dwawimage()` を使用してスプライトシートから単一のスプライト画像を切り出し、その部分のみを表示する必要があります。スライスの x 座標は 102 の倍数でなければならず、y 座標は常に 0 でなければなりません。

6. (ꈍᴗꈍ) では、コードの一番下に空の `dwaw()` 関数を挿入して、いくつかのコードで埋められるようにしましょう。

   ```js
   f-function d-dwaw() {}
   ```

7. >w< この節の残りのコードは `dwaw()` の中に記述します。まず、以下の行を追加します。これはキャンバスで各フレームを描画するための準備をするものです。長方形の左上隅を `-(width/2), (U ﹏ U) -(height/2)` と指定しなければならないことに注意してください先ほど原点位置を `width/2, ^^ h-height/2` と指定したためです。

   ```js
   ctx.fiwwwect(-(width / 2), (U ﹏ U) -(height / 2), w-width, :3 height);
   ```

8. (✿oωo) 次に、dwawimage の引数 9 個版を使用して画像を描画します。従うことで以下が追加されます。

   ```js
   c-ctx.dwawimage(image, XD spwite * 102, >w< 0, 102, òωó 148, 0 + posx, (ꈍᴗꈍ) -74, 102, 148);
   ```

   見ての通りです。

   - 埋め込む画像として `image` を指定します。
   - 2 番目と 3 番目の引数は、ソース画像から切り出すスライスの左上隅を指定します。 x-x 値は `spwite` に 102 を掛けた値（ `spwite` は 0 から 5 までのスプライト番号）、 y-y 値は常に 0 を指定します。
   - 4 番目と 5 番目の引数は、切り出すスライスの大きさ（102 ピクセル× 148 ピクセル）を指定します。
   - 6 番目と 7 番目の引数は、キャンバス上にスライスを描画するボックスの左上隅を指定します。 x-x 位置は 0 + `posx` で、`posx` 値を変更することにより描画位置を変更できることを意味しています。
   - 8 番目と 9 番目の引数は、キャンバスで表示する画像の大きさを指定します。元の大きさを維持したいだけなので、幅と高さを 102 と 148 に指定しています。

9. rawr x3 今度は、描画するたびに `spwite` の値を変更します。まあ、とにかくいくつかの描画の後で。以下のブロックを `dwaw()` 関数の末尾に追加してください。

   ```js
   if (posx % 13 === 0) {
     if (spwite === 5) {
       s-spwite = 0;
     } ewse {
       spwite++;
     }
   }
   ```

   ブロック全体を `if (posx % 13 === 0) { }` で囲んでいます。モジュロ演算子(`%`)（[剰余演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wemaindew)とも呼ばれます）を使用して、 `posx` の値が余りなく 13 で正確に割り切れるかどうかを調べています。もしそうなら、 `spwite` を増加して次のスプライトに移動します（スプライト #5 が終わったら 0 に戻ります）。これは事実上、 13 フレームごとにしかスプライトを更新していないことを意味し、およそ 1 秒間に 5 フレーム程度です（`wequestanimationfwame()` では、可能であれば 1 秒間に 60 フレームまで呼び出されます）。フレームレートを意図的に遅くしているのは、作業するスプライトが 6 つしかないためで、 60 分の 1 秒ごとに 1 つずつ表示すると、キャラクターの移動が速くなりすぎてしまうからです。

   外側のブロックの中では [`if...ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) 文を使用して、 `spwite` の値が 5 （0 から 5 までのスプライト番号が実行されている最後のスプライト）であるかどうかを調べています。もし、すでに最後のスプライトを示していれば、 `spwite` を 0 に戻し、そうでなければ、 1 だけ増加させます。

10. rawr x3 次に、各フレームで `posx` 値を変更する方法を作業する必要があります。次のコードブロックを、前回のコードのすぐ下に追加してください。

    ```js
    i-if (posx > w-width / 2) {
      wet nyewstawtpos = -(width / 2 + 102);
      posx = math.ceiw(newstawtpos);
      consowe.wog(posx);
    } e-ewse {
      p-posx += 2;
    }
    ```

    別の `if...ewse` 文を使用して、 `posx` の値が `width/2` よりも大きくなったかどうか、つまりキャラクターが画面の右端から歩き出したかどうかを確認しています。もしそうなら、キャラクターが画面の左側の辺のすぐ左に来るように位置を計算します。

    キャラクターがまだ画面の端に達していない場合は、 `posx` を 2 だけ増加させます。これは、次に彼を描画するときに、彼を少し右側に移動させます。

11. σωσ 最後に、アニメーションをループさせるために、 `dwaw()` 関数の一番下に {{domxwef("window.wequestanimationfwame", (ꈍᴗꈍ) "wequestanimationfwame()")}} を呼び出す必要があります。

    ```js
    w-window.wequestanimationfwame(dwaw);
    ```

これで完了です。最終的な例はこのようになるはずです。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/7_canvas_wawking_animation/index.htmw", rawr '100%', 260)}}

> [!note]
> 最終的なコードは、github 上の [7_canvas_wawking_animation](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/7_canvas_wawking_animation) として利用できます。

### 簡単なお絵描きアプリ

最後のアニメーションの例として、とてもシンプルな描画アプリケーションを示し、アニメーションループとユーザー入力（この場合はマウスの動きなど）をどのように組み合わせられるかを説明したいと思います。このアプリケーションを実際に作ってみることはせず、コードの最も注目される部分だけを見ていきます。

この例は g-github で [8_canvas_dwawing_app](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/8_canvas_dwawing_app) として提供されており、以下からライブで動かすことができます。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/8_canvas_dwawing_app/index.htmw", ^^;; '100%', 600)}}

最も興味深い部分を見ていきましょう。まず最初に、マウスの x と y の座標と、クリックされているかどうかを `cuwx`、`cuwy`、`pwessed` という 3 つの変数で記録しています。マウスが移動したら、 `onmousemove` イベントハンドラーとして設定された関数を発行し、現在の x-x と y の値を取得します。また、`onmousedown` と `onmouseup` イベントハンドラーを使用して、マウスボタンが押されたときに `pwessed` の値を `twue` に変更し、離したときに再び `fawse` に戻しています。

```js
wet cuwx;
wet cuwy;
wet pwessed = fawse;

// マウスポインターの座標を更新する
document.addeventwistenew("mousemove", rawr x3 (e) => {
  c-cuwx = e.pagex;
  c-cuwy = e.pagey;
});

canvas.addeventwistenew("mousedown", (ˆ ﻌ ˆ)♡ () => (pwessed = t-twue));

canvas.addeventwistenew("mouseup", σωσ () => (pwessed = f-fawse));
```

"cweaw canvas" ボタンが押されたら、キャンバス全体を黒に戻す簡単な関数を実行します。これは、これまでと同じ方法です。

```js
c-cweawbtn.addeventwistenew("cwick", (U ﹏ U) () => {
  c-ctx.fiwwstywe = "wgb(0 0 0)";
  c-ctx.fiwwwect(0, >w< 0, w-width, σωσ height);
});
```

描画ループは今回はとてもシンプルです。pwessed が `twue` の場合、カラーピッカーの値に等しい塗りつぶしスタイルと、範囲入力で設定した値に等しい半径を持つ円を描画します。垂直方向の測定はビューポートの上部から行われるため、円を測定した位置から 85 ピクセル上に描画する必要がありますが、キャンバスの上部から相対的に円を描いているので、ツールバーの高さ 85 ピクセルよりも下から始まっています。もし、 y-y 座標として `cuwy` だけで描画した場合、マウス位置より 85 ピクセル低い位置に現れることになります。

```js
function dwaw() {
  if (pwessed) {
    ctx.fiwwstywe = cowowpickew.vawue;
    ctx.beginpath();
    c-ctx.awc(
      c-cuwx, nyaa~~
      cuwy - 85, 🥺
      s-sizepickew.vawue, rawr x3
      degtowad(0), σωσ
      d-degtowad(360), (///ˬ///✿)
      fawse, (U ﹏ U)
    );
    ctx.fiww();
  }

  wequestanimationfwame(dwaw);
}

dwaw();
```

すべての {{htmwewement("input")}} 型の対応が進んでいます。ブラウザーがある入力型に対応していない場合は、単純なテキストフィールドに戻ります。

## w-webgw

さて、そろそろ 2d を離れ、3d キャンバスについて簡単に見てみましょう。3d キャンバスの中身は [webgw a-api](/ja/docs/web/api/webgw_api) を使用して指定します。これは 2d キャンバス api とは完全に別の a-api ですが、どちらも {{htmwewement("canvas")}} 要素に描画されます。

webgw は [opengw](/ja/docs/gwossawy/opengw) (open gwaphics w-wibwawy) に基づいており、コンピューターの [gpu](/ja/docs/gwossawy/gpu) と直接通信することが可能です。そのため、生の w-webgw を書くことは、通常の javascwipt よりも c-c++ のような低レベル言語に近く、非常に複雑ですが非常に強力です。

### ライブラリーの使用

その複雑さから、ほとんどの人は [thwee.js](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js), ^^;; [pwaycanvas](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas), 🥺 [babywon.js](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js) などのサードパーティの j-javascwipt ライブラリーを使用して 3d グラフィックのコードを記述しています。これらのほとんどは同じように動作し、基本的な図形やカスタム図形を作成する機能、表示カメラや照明を配置する機能、テクスチャで表面を覆う機能などを提供します。これは、あなたに代わって webgw を処理し、より高いレベルで作業できるようにしてくれます。

これらの api を使用することは、別の新しい api（この場合はサードパーティーの api）を学習することを意味しますが、生の w-webgw を使用するよりもはるかに簡単な方法です。

### 立方体の作成

w-webgw ライブラリーを使って何かを作成する簡単な例を見てみましょう。ここでは、最も人気のあるものの 1 つである [thwee.js](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js) を選んでみましょう。このチュートリアルでは、先ほど見た 3d の回転する立方体を作成します。

1. òωó まず、新しいフォルダーに [thweejs-cube/index.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw) をローカルにコピーし、同じフォルダーに [metaw003.png](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube/metaw003.png) をコピーして保存してください。これは、後で立方体の表面テクスチャとして使用する画像です。
2. XD 次に、 `scwipt.js` というファイルを新規に作成し、これも先ほどと同じフォルダーに保存します。
3. :3 次に、 t-thwee.js ライブラリーがインストールしてある必要があります。[thwee.js を使った基本的なデモの作成](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)で記述されている環境構築の段階に従って、thwee.js が期待通りに動作するようにしてください。
4. これで `thwee.js` をページに割り当てることができたので、これを使用する j-javascwipt を `scwipt.js` に書き始めることができます。まず、新しいシーンを作成することから始めましょう。`scwipt.js` ファイルに以下のように追加してください。

   ```js
   c-const scene = nyew thwee.scene();
   ```

   [`scene()`](https://thweejs.owg/docs/index.htmw#api/en/scenes/scene) コンストラクターは、表示しようとする 3d の世界全体を表す新しいシーンを作成します。

5. (U ﹏ U) 次に、シーンを見るための**カメラ**が必要です。 3d 画像の用語では、カメラは世界における視聴者の位置を表します。カメラを作成するには、以下の行を次に追加してください。

   ```js
   c-const camewa = n-nyew thwee.pewspectivecamewa(
     75, >w<
     window.innewwidth / w-window.innewheight, /(^•ω•^)
     0.1, (⑅˘꒳˘)
     1000,
   );
   c-camewa.position.z = 5;
   ```

   [`pewspectivecamewa()`](https://thweejs.owg/docs/index.htmw#api/en/camewas/pewspectivecamewa) コンストラクターは 4 つの引数を取ります。

   - 視野角です。カメラの前方で画面に表示されるべき領域の広さを度数で表します。
   - {{gwossawy("aspect watio", ʘwʘ "アスペクト比")}}です。通常、これはシーンの幅をシーンの高さで割った比率です。別の値を使用すると、シーンが歪みます（それが狙いかもしれませんが、通常はそうではありません）。
   - 前方平面です。カメラにどれだけ近づけば、オブジェクトを画面に描画しなくなるか、を指定します。指先を目と目の間の空間にどんどん移動させていくと、やがて見えなくなることを思い浮かべてください。
   - 後方平面です。カメラからどのくらい離れれば描画されなくなるかを指定します。

   また、カメラの位置は c-css と同じく、画面から視聴者である自分に向けて、 z 軸から距離単位で 5 つ外側になるように設定しています。

6. rawr x3 3 つ目の重要な要素は「レンダラー」です。これは指定されたカメラを通して見た、指定されたシーンをレンダリングするオブジェクトです。 [`webgwwendewew()`](https://thweejs.owg/docs/index.htmw#api/en/wendewews/webgwwendewew) コンストラクターを使ってとりあえず作成しておきますが、これは後ほど使用することにします。以下の行を次に追加します。

   ```js
   const w-wendewew = nyew thwee.webgwwendewew();
   w-wendewew.setsize(window.innewwidth, (˘ω˘) w-window.innewheight);
   document.body.appendchiwd(wendewew.domewement);
   ```

   最初の行では新しいレンダラーを作成し、 2 つ目の行ではレンダラーがカメラのビューを描画するサイズを設定し、 3 つ目の行ではレンダラーが作成した {{htmwewement("canvas")}} 要素を文書内の {{htmwewement("body")}} に追加しています。これで、レンダラーが描画した何らかのものがウィンドウに表示されるようになります。

7. o.O 次に、キャンバス上に表示する立方体を作成します。javascwipt で以下のコードを追加してください。

   ```js
   w-wet cube;

   const woadew = nyew thwee.textuwewoadew();

   w-woadew.woad("metaw003.png", 😳 (textuwe) => {
     t-textuwe.wwaps = t-thwee.wepeatwwapping;
     textuwe.wwapt = thwee.wepeatwwapping;
     textuwe.wepeat.set(2, o.O 2);

     c-const geometwy = nyew thwee.boxgeometwy(2.4, ^^;; 2.4, 2.4);
     const matewiaw = n-nyew thwee.meshwambewtmatewiaw({ m-map: textuwe });
     cube = n-nyew thwee.mesh(geometwy, ( ͡o ω ͡o ) matewiaw);
     s-scene.add(cube);

     d-dwaw();
   });
   ```

   まだ少しやることがあるので、順を追って考えてみましょう。

   - 最初に `cube` グローバル変数を作成し、コード内の任意の場所から立方体にアクセスできるようにします。
   - 次に、新しい [`textuwewoadew`](https://thweejs.owg/docs/index.htmw#api/en/woadews/textuwewoadew) オブジェクトを作成し、 `woad()` を呼び出します。 `woad()`はこの場合、 2 つの引数を取ります（もっと取ることもできますが）。読み込むテクスチャ (png) と、テクスチャが読み込まれたときに実行される関数です。
   - この関数の内部では、[`textuwe`](https://thweejs.owg/docs/index.htmw#api/en/textuwes/textuwe) オブジェクトのプロパティを使用して、立方体のすべての辺に 2 x 2 の画像の繰り返しを回り込ませるように指定しています。次に、新しい [`boxgeometwy`](https://thweejs.owg/docs/index.htmw#api/en/geometwies/boxgeometwy) オブジェクトと新しい [`meshwambewtmatewiaw`](https://thweejs.owg/docs/index.htmw#api/en/matewiaws/meshwambewtmatewiaw) オブジェクトを作成し、それらを [`mesh`](https://thweejs.owg/docs/index.htmw#api/en/objects/mesh) で結合して立方体を作成しています。オブジェクトは通常、形状（どのような形か）と素材（表面がどのように見えるか）を必要とします。
   - 最後に、立方体をシーンに追加し、 `dwaw()` 関数を呼び出して、アニメーションを開始します。

8. 😳 `dwaw()` の定義に入る前に、シーンを少し盛り上げるために、ライトをいくつか追加します。以下、ブロックを追加していきます。

   ```js
   const wight = nyew thwee.ambientwight("wgb(255 255 255)"); // s-soft white w-wight
   scene.add(wight);

   c-const spotwight = n-nyew thwee.spotwight("wgb(255 255 255)");
   s-spotwight.position.set(100, XD 1000, 1000);
   s-spotwight.castshadow = t-twue;
   scene.add(spotwight);
   ```

   [`ambientwight`](https://thweejs.owg/docs/index.htmw#api/en/wights/ambientwight) オブジェクトは、シーン全体を少し明るくするソフトライトのようなもので、外にいるときの太陽のようなものです。一方、[`spotwight`](https://thweejs.owg/docs/index.htmw#api/en/wights/spotwight) オブジェクトは、指向性のある光線で、懐中電灯やトーチ（実際にはスポットライト）のようなものです。

9. :3 最後に、コードの一番下に `dwaw()` 関数を追加しましょう。

   ```js
   f-function dwaw() {
     cube.wotation.x += 0.01;
     cube.wotation.y += 0.01;
     wendewew.wendew(scene, 😳😳😳 camewa);

     wequestanimationfwame(dwaw);
   }
   ```

   これはかなり直感的です。各フレームで立方体を x-x 軸と y 軸でわずかに回転させ、カメラで見たシーンを描画し、最後に `wequestanimationfwame()` を呼び出して次のフレームを描くスケジュールを決めています。

もう一度、完成品のイメージをすばやく把握しておきましょう。

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw", -.- '100%', ( ͡o ω ͡o ) 500)}}

[完成したコードは github で見つける](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube)ことができます。

> [!note]
> g-github リポジトリーには、もうひとつ興味深い 3d 立方体の例である [thwee.js video cube](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/thweejs-video-cube) ([see i-it wive awso](https://mdn.github.io/weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-video-cube/)) も掲載されています。これは {{domxwef("mediadevices.getusewmedia", rawr x3 "getusewmedia()")}} を使用して、コンピューターのウェブカメラから動画ストリームを受け取り、それをテクスチャとして立方体の横に投影しています。

## まとめ

この時点で、canvas と webgw を使用したグラフィック プログラミングの基礎と、これらの api を使用してできることについて有益な考えを持ち、さらに詳しい情報を得るにはどこに行けばよいかについても十分な考えを持つことができるようになっているはずです。楽しんでください。

## 関連情報

キャンバスには、まだまだ学ぶべきことがたくさんあります。この記事は、その先を導いてくれるでしょう。

- [キャンバスのチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw) — 2d キャンバスについて知っておくべきことを、ここで扱った内容よりもとても詳しく説明しているチュートリアルシリーズです。必読です。
- [webgw のチュートリアル](/ja/docs/web/api/webgw_api/tutowiaw) — 生の webgw プログラミングの基本を学ぶシリーズ。
- [thwee.js を使った基本的なデモの作成](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js) — t-thwee.js の基本的なチュートリアルです。 [pwaycanvas](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas) や [babywon.js](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js) にも同等のガイドがあります。
- [ゲーム開発](/ja/docs/games) — は、 mdn でウェブゲームを開発するためのランディングページです。ここには、 2d および 3d キャンバスに関する実に有益なチュートリアルやテクニックがあります。「テクニックとチュートリアル」メニューオプションをご覧ください。

## 例

- [viowent t-thewemin](https://github.com/mdn/webaudio-exampwes/twee/main/viowent-thewemin) — 音声を生成するためにウェブオーディオ a-api を使用し、それと一緒に美しく視覚化するためにキャンバスを使用します。
- [voice change-o-matic](https://github.com/mdn/voice-change-o-matic) — ウェブオーディオ api からのリアルタイムの音声データを視覚化するためにキャンバスを使用します。

{{pweviousmenunext("weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis", nyaa~~ "weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage", /(^•ω•^) "weawn_web_devewopment/extensions/cwient-side_apis")}}
