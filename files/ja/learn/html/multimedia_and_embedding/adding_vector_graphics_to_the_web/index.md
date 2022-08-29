---
title: ウェブにベクターグラフィックスを追加する
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
tags:
  - Beginner
  - Graphics
  - Guide
  - HTML
  - Images
  - Learn
  - Raster
  - SVG
  - Vector
  - iframe
  - img
  - ガイド
  - グラフィックス
  - ベクター
  - ラスター
  - 初心者
  - 学習
  - 画像
translation_of: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

ベクターグラフィックは多くの状況でとても便利です。 — ファイルサイズは小さく、スケーラビリティが高いため、ズームイン (拡大表示) したり、大きなサイズに拡大したりしてもモザイクになりません。この記事では、ウェブページにそれを組み込む方法を説明します。

| 前提条件: | [HTML の基本](/ja/docs/Learn/HTML/Introduction_to_HTML)と、[画像を文書に挿入する](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)方法を理解しておく必要があります。 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | SVG (ベクター) 画像をウェブページに埋め込む方法を学びます。                                                                                                                      |

> **Note:** この記事は SVG を教えるためのものではありません。 SVG が何であるかと、ウェブページに追加する方法について説明します。

## ベクターグラフィックとは何か？

ウェブ上では、ラスター画像とベクター画像の 2 種類の画像を扱います。

- ラスター画像は、ピクセルのグリッド (格子) を使用して定義されます。 — ラスター画像ファイルには、各ピクセルの配置場所を正確に示す情報と、その色を正確に示す情報が含まれています。一般的なウェブのラスター形式には、ビットマップ (`.bmp`)、 PNG (`.png`)、 JPEG (`.jpg`)、 GIF (`.gif`) などがあります。
- ベクター画像はアルゴリズムを使用して定義されます。 — ベクター画像ファイルにはシェイプ (形状) とパス (経路) の定義が含まれており、画面に描画されるときに画像がどのような外見になるかを、コンピューターが理解するために利用することができます。 {{Glossary("SVG")}} 形式では、ウェブ上で使用するための強力なベクターグラフィックを作成することができます。

両者の違いを知るために、例を見てみましょう。この例は、 Github のリポジトリで [vector-versus-raster.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) として公開されています。 — これは、2 つの一見同一の黒い影付きの赤い星の画像を並べて表示しています。違いは、左のものが PNG 画像であり、右のものが SVG 画像であるということです。

この違いは、ページをズームインすると明らかになります。 PNG 画像には、各ピクセルの位置（と色）に関する情報が含まれているため、ズームインするとピクセル化されます。 ズームインすると、各ピクセルのサイズが単純に拡大され、画面上の複数のピクセルが塗りつぶされるので、画像がギザギサに見えるようになります。 しかし、ベクター画像は大きさにかかわらず、アルゴリズムが画像内のシェイプを処理するために使用され、値が大きくなるにつれて単純に縮尺が変更されるため、きれいにくっきりと見えます。

![2つの星の画像](raster-vector-default-size.png)

![2つの星の画像が拡大表示され、1つがくっきりになり、他の画像がギザギサになる](raster-vector-zoomed.png)

> **Note:** 上の画像は実際には全て PNG です — いずれの場合も、左の星はラスター画像を表し、右の星はベクター画像を表します。 実際の例については、[vector-versus-raster.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) デモを参照してください！

さらに、ベクター画像ファイルは、画像内のすべてのピクセルの情報ではなく、一握りのアルゴリズムを保持するだけで済むので、ラスター同等物よりもはるかに軽くなります。

## SVG とは何か？

[SVG](/ja/docs/Web/SVG) は、ベクター画像を記述するための {{glossary("XML")}} ベースの言語です。これは基本的に HTML のようなマークアップですが、画像に表示するシェイプを定義するためのさまざまな要素と、それらのシェイプに適用する効果があります。 SVG は、コンテンツではなくグラフィックをマークアップするためのものです。最も単純なものとしては、 {{svgelement("circle")}} や {{svgelement("rect")}} のような単純なシェイプを作成するための要素があります。 {{svgelement("feColorMatrix")}} (変換行列を使用して色を変換)、 {{svgelement("animate")}} (ベクターグラフィックの一部をアニメーション化)、 {{svgelement("mask")}} (画像の上にマスクを適用する) など、より高度な SVG の機能もあります。

簡単な例として、次のコードは円形と長方形を作成します。

```html
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

これにより、次の出力が生成されます。

{{ EmbedLiveSample('What_is_SVG', 300, 200, "", "", "hide-codepen-jsfiddle") }}

上記の例から、 SVG が手作業で簡単に書けるという印象を受けるかもしれません。実際、単純な SVG ならばテキストエディターで手作業で記述することはできますが、複雑な画像では、すぐにとても困難になり始めます。 SVG 画像を作成するには、ほとんどの人が [Inkscape](https://inkscape.org/en/) や [Illustrator](https://ja.wikipedia.org/wiki/Adobe_Illustrator) のようなベクターグラフィックエディターを使用します。これらのパッケージでは、さまざまなグラフィックツールを使用してさまざまなイラストを作成したり、写真に近似したもの (たとえば、 Inkscape のトレースビットマップ機能) を作成したりすることができます。

SVG にはこれまで説明したもの以外にも、いくつかの長所があります。

- ベクター画像のテキストはアクセス可能です。 ({{glossary("SEO")}} にも役立ちます)。
- SVG はスタイリングやスクリプティングに適しています。 これは、画像の各コンポーネントが、 CSS を使用してスタイルを設定したり、JavaScript を使用してスクリプトを作成できるためです。

では、なぜ誰もが SVG よりもラスターグラフィックを使いたがるのでしょうか？実際、SVG にはいくつかの短所があります。

- SVG はとてもあっさりと複雑になり、ファイルサイズが大きくなる可能性があります。複雑な SVG もブラウザーでかなりの処理時間を要する可能性があります。
- SVG は、作成しようとしている画像の種類によっては、ラスター画像よりも作成するのが難しい場合があります。
- SVG は古いブラウザーが対応していないため、ウェブサイトで旧バージョンの Internet Explorer をサポートする必要がある場合に、適切でない可能性があります (SVG は IE9 から対応しています)。

ラスターグラフィックは、前述の理由から、写真などの複雑な高精度画像に対しては、ほぼ間違いなく優れています。

> **Note:** メモ: Inkscape では、スペースを節約するためにファイルを Plain SVG として保存します。 また、[ウェブ用の SVG を作成する方法について説明しているこの記事](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html) (英語) を参照してください。

## ページへの SVG の追加

この節では、SVG ベクターグラフィックをウェブページに追加するさまざまな方法を説明します。

### 簡単な方法: {{htmlelement("img")}}

{{htmlelement("img")}} 要素を介して SVG を埋め込むには、予想通り、 `src` 属性で参照する必要があります。 `height` 属性または `width` 属性 (または SVG に固有のアスペクト比がない場合は両方) が必要です。まだ[HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)を終了していない人は、こちらをお読みください。

```html
<img
    src="equilateral.svg"
    alt="3辺がすべて等しい三角形"
    height="87px"
    width="100px" />
```

#### 長所

- 手早く、画像と同様の構文で、 `alt` 属性により同等のテキストを内蔵させることができる。
- `<img>` を {{htmlelement("a")}} 要素内に入れることで、画像を簡単にハイパーリンクにすることができる。

#### 短所

- JavaScript で画像を操作することはできません。
- CSS で SVG コンテンツを制御する場合は、SVG コードにインライン CSS スタイルを含める必要があります。 (SVG ファイルから呼び出された外部スタイルシートは効果がありません。)
- CSS の擬似クラス (`:focus` など) で画像のスタイルを変更することはできません。

### トラブルシューティングとクロスブラウザーの対応

SVG に対応していないブラウザー (IE 8 以前、Android 2.3 以前) では、 `src` 属性から PNG または JPG を参照し、 SVG を参照するために {{htmlattrxref("srcset", "img")}} 属性 (最近のブラウザーのみが認識する) を使用することができます。 この場合、対応しているブラウザーのみが SVG を読み込みます。 — 古いブラウザーは代わりに PNG を読み込みます。

```html
<img src="equilateral.png" alt="辺が等しい三角形" srcset="equilateral.svg">
```

以下に示すように、 SVG を CSS の背景画像として使用することもできます。 以下のコードでは、古いブラウザーでは理解できる PNG を使用しますが、新しいブラウザーでは SVG を読み込みます。

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

上記の `<img>` 方式と同様に、 CSS 背景画像を使用して SVG を挿入すると、 SVG を JavaScript で操作することができず、同じ CSS の制限が適用されます。

SVG がまったく表示されない場合は、サーバーが正しく設定されていない可能性があります。 それが問題なら、[この記事が正しい方向を指しています](/ja/docs/Web/SVG/Tutorial/Getting_Started#A_Word_on_Webservers)。

### HTML の中に SVG コードを組み込む方法

テキストエディターで SVG ファイルを開き、 SVG コードをコピーして HTML 文書に貼り付けることもできます。 これは、**SVG をインラインにする**、または **SVG をインライン化する**とも呼ばれます。 SVG コードスニペットは、{{svgelement("svg")}} タグで始まり、 [`<svg></svg>`](/ja/docs/Web/SVG/Element/svg) タグで終わることを確認してください (これら以外のものは含めないでください)。文書に貼り付けることのできる簡単な例を次に示します。

```html
<svg width="300" height="200">
    <rect width="100%" height="100%" fill="green" />
</svg>
```

#### 長所

- SVG をインラインで配置すると、 HTTP リクエストが節約されるので、読み込み時間が短縮されます。
- `class` と `id` を SVG 要素に割り当て、 SVG 内または HTML 文書の CSS スタイル規則を置く場所で、CSS でスタイルを設定することができます。 実際には、任意の [SVG プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#Presentation_attributes)を CSS プロパティとして使用できます。
- SVG のインライン化は、CSS の相互作用（`:focus` など）と CSS アニメーションを（通常のスタイルシートでも）SVG 画像に使用できる唯一のアプローチです。
- SVG マークアップを {{htmlelement("a")}} 要素でラップすることでハイパーリンクにすることができます。

#### 短所

- この方法は、SVG を 1 か所だけで使用している場合にのみ適しています。 複製はリソースを集中的に使用するメンテナンスを引き起こします。
- 余分な SVG コードは HTML ファイルのサイズを増加させます。
- ブラウザーは、通常の画像をキャッシュするようにインライン SVG をキャッシュすることはできません。
- {{svgelement("foreignObject")}} 要素に代替を含めることはできますが、SVG をサポートするブラウザーでは代替画像が引き続きダウンロードされます。 余分なオーバーヘッドが本当に価値があるかどうかは、陳腐化したブラウザーをサポートするかどうかで判断する必要があります。

<!---->

### {{htmlelement("iframe")}} で SVG を埋め込む方法

SVG 画像は、ウェブページのようにブラウザーで開くことができます。 したがって、SVG 文書を `<iframe>` に埋め込むことは、[\<object> から \<iframe> へ — その他の埋め込み技術](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)で学んだように行われます。

ここで簡単なレビューです。

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
    <img src="triangle.png" alt="3つの不等辺の三角形" />
</iframe>
```

これは間違いなく選択するには最良の方法ではありません。

#### 短所

- ご覧のとおり、`iframe` には代替メカニズムがありますが、 `iframe` に完全に対応していない場合にのみ、ブラウザーに代替が表示されます。
- さらに、 SVG と現在のウェブページが同じ{{glossary('origin',"オリジン")}}を持っていない限り、メインウェブページで JavaScript を使用して SVG を操作することはできません。

## アクティブラーニング: SVG で遊ぶ

このアクティブラーニングの節では、 SVG をとても楽しく遊ぶことができます。 下の入力セクションでは、始めるためのサンプルをすでに提供していることがわかります。 また、[SVG 要素のリファレンス](/ja/docs/Web/SVG/Element)にアクセスして、SVG で使用できる他のおもちゃの詳細を調べて、それらを試してみることもできます。 このセクションでは、あなたの研究スキルを鍛え、楽しく学びましょう。

コードが機能しなくなった場合は、\[Reset] ボタンを使用していつでもリセットすることができます。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana" font-size="55"
          fill="white" stroke="black" stroke-width="2">
            Hello!
    </text>
  </svg>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution" disabled>
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

var htmlSolution = '';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 500, "", "", "hide-codepen-jsfiddle") }}

## まとめ

この記事では、ベクターグラフィックと SVG の概要、それらをなぜ知っておくと便利なのか、そして SVG をウェブページに組み込む方法について簡単に説明しました。 SVG を学ぶ上での完全なガイドとなることは決して考えられていませんでしたが、ウェブ上の旅行でそれに会っていれば、SVG が何であるかを知ることができます。 あなたがまだ SVG のエキスパートではないと感じたら心配しないでください。 もしそれがどう動くかについて詳しく知りたいなら助けになる以下のリンクを参考にしてください。

このモジュールの最後の記事では、レスポンシブ画像を詳細に調査し、さまざまなデバイス間で画像をより良く動作させるための HTML ツールについて説明します。

## 関連項目

- MDN の [SVG チュートリアル](/ja/docs/Web/SVG/Tutorial/Getting_Started)
- [レスポンシブ SVG のちょっとした助言](http://thenewcode.com/744/Making-SVG-Responsive) (英語)
- [Sara Soueidan のレスポンシブ SVG 画像に関するチュートリアル](http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/) (英語)
- [SVG のアクセシビリティ上の長所](http://www.w3.org/TR/SVG-access/) (英語)
- [SVG を縮尺変更する方法](https://css-tricks.com/scale-svg/) (ラスターグラフィックほど簡単ではありません！) (英語)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

## このモジュール内の文書

- [HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [\<object> から \<iframe> へ — その他の埋め込み技術](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [ウェブにベクターグラフィックを追加する](/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Mozilla のスプラッシュページ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
