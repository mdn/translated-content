---
title: メディアクエリーの基本
short-title: メディアクエリー
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

**CSS メディアクエリー** (CSS Media Query) を使用すると、例えば、「ビューポートは 480 ピクセルよりも広い」というような、ブラウザーとデバイスの環境が指定したルールに一致する場合にのみ CSS を適用できます。 メディアクエリーは、ビューポートのサイズに応じて異なるレイアウトを作成できるため、[レスポンシブウェブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)の重要な部分ですが、例えば、ユーザーはマウスではなくタッチパネルを使用しているというような、サイトが実行されている環境に関する他のものを検出するためにも使用できます。

このレッスンでは、最初にメディアクエリーで使用される構文について学習し、次に単純なデザインでどのようにレスポンシブにするかを示す実際の例で使用してみます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML によるコンテンツの構造化</a
        >、
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>、
        <a href="/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals">基本的なテキストとフォントのスタイル設定</a>、
        <a href="/ja/docs/Learn_web_development/Core/CSS_layout/Introduction">CSS レイアウトの基本概念</a>の基礎知識。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>メディアクエリーの構文。</li>
          <li>メディアクエリーのよくある種別。</li>
          <li><code>width</code> や <code>height</code> メディアクエリーを使用した、レスポンシブなレイアウトの作成。</li>
          <li>ブレークポイントの選択。</li>
          <li>メディアクエリーを使用したモバイルファーストデザインの実装。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## メディアクエリーの基本

最も単純なメディアクエリーの構文は次のようになります。

```css
@media media-type and (media-feature-rule) {
  /* CSS ルールをここに */
}
```

これは、次のもので構成されます。

- メディア種別 (media type)。 このコードがどのようなメディア（印刷または画面）のためのものであるかをブラウザーに伝えます。
- メディア式。 ルール (rule) または、含まれている CSS を適用するために合格する必要があるテストです。
- CSS ルールのセット。 テストに合格し、メディア種別が正しい場合に適用されます。

### メディア種別

指定できるメディアの種類は次のとおりです。

- `all`（すべて）
- `print`（印刷）
- `screen`（画面）

次のメディアクエリーは、ページが印刷される場合にのみ `body` を `12pt` に設定します。 ページがブラウザーに読み込まれるときは適用されません。

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> ここでのメディア種別は、いわゆる {{glossary("MIME type","MIME タイプ")}}とは異なります。
> レベル 3 のメディアクエリー仕様には、他にも多くのメディア種別が定義されています。 これらは非推奨であり、避けるべきです。
> メディア種別はオプションです。 メディアクエリーでメディア種別を指定しない場合、メディアクエリーは既定ですべてのメディア種別用になります。

### メディア特性のルール

種別を指定したら、ルールを使用してメディア特性 (media feature) を対象にできます。
以下の例では、さまざまなメディアクエリーを使用する方法を示しています。
画面の`width`を変更するには、ブラウザーのサイズを変更するか、携帯端末を回転させるかしてください。

> [!NOTE]
> あるいは、ブラウザーの開発者ツールのサイズ変更機能（Firefox の[レスポンシブデザインモード](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/)など）を使用して、さまざまな端末の幅をシミュレートすることもできます。

#### 幅と高さ

レスポンシブデザインを作成するために最も頻繁に検出される特性（そして広範なブラウザーサポートを備えた特性）は、ビューポートの幅で、ビューポートが特定の幅よりも上または下にある（または正確な幅の）場合に、CSS を適用できます。 これには `width` メディア特性を、必要に応じて `min-` または `max-` の接頭辞を付けて使用します。

これらの特性は、さまざまな画面サイズに対応するレイアウトを作成するために使用されます。 例えば、ビューポートが正確に 600 ピクセルの場合に `body` のテキストの色を赤に変更するには、次のメディアクエリーを使用します。

```css live-sample___width
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

```html-nolint live-sample___width
<p>
  1782 年 11 月のある夜、 2 人の兄弟がフランスの小さな町アノネーで冬の暖炉の火を囲み、暖炉から立ち上る灰色の煙が広い煙突を登っていくのを見ながら、話を実行したという話があります。彼らの名前はステファンとジョセフ・モンゴルフィエで、紙職人でした。また、思慮深い頭脳を持ち、科学的な知識と新しい発見すべてに深い関心を持っていることで知られていました。
</p>
```

{{EmbedLiveSample("width")}}

ブラウザーウィンドウの幅を調整して、上記のデモがちょうど `600px` の幅になり、テキストが赤になる最適なポイントを探してみてください。

`width`（および `height`）のメディア特性は範囲として使用でき、`min-` または `max-` を前に付けて、指定された値が最小または最大であることを示します。 例えば、ビューポートが 600 ピクセルより狭い場合に色を青にするには、次のように `max-width` を使用します。

```css live-sample___max-width
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

```html-nolint hidden live-sample___max-width
<p>
  1782 年 11 月のある夜、 2 人の兄弟がフランスの小さな町アノネーで冬の暖炉の火を囲み、暖炉から立ち上る灰色の煙が広い煙突を登っていくのを見ながら、話を実行したという話があります。彼らの名前はステファンとジョセフ・モンゴルフィエで、紙職人でした。また、思慮深い頭脳を持ち、科学的な知識と新しい発見すべてに深い関心を持っていることで知られていました。
</p>
```

{{EmbedLiveSample("max-width")}}

上のテキストが青色に変わるまで、ウィンドウを狭めてみてください。

実際には、レスポンシブデザインでは最小値または最大値を使用する方がはるかに便利であるため、`width` または `height` を単独で使用することはほとんどありません。

テストできるメディア特性は他にも多数ありますが、メディアクエリー仕様のレベル 4 および 5 で導入された新しい特性の一部は、ブラウザーの対応が限定的です。各特性は、ブラウザー対応情報とともに MDN で文書化されていて、完全なリストは、[メディアクエリーの使用: 構文](/ja/docs/Web/CSS/Guides/Media_queries/Using#構文)で見ることができます。

#### 画面の方向

対応が進んでいるメディア特性の 1 つは `orientation` 、縦長 (portrait) または横長 (landscape) モードであるかどうかを検査できます。端末が横長 (landscape) の場合に本文の色を変更するには、次のメディアクエリーを使用します。

```css live-sample___orientation
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

```html-nolint hidden live-sample___orientation
<p>
  1782 年 11 月のある夜、 2 人の兄弟がフランスの小さな町アノネーで冬の暖炉の火を囲み、暖炉から立ち上る灰色の煙が広い煙突を登っていくのを見ながら、話を実行したという話があります。彼らの名前はステファンとジョセフ・モンゴルフィエで、紙職人でした。また、思慮深い頭脳を持ち、科学的な知識と新しい発見すべてに深い関心を持っていることで知られていました。
</p>
```

{{EmbedLiveSample("orientation")}}

上記の例はページ内でテストするのがかなり困難です。動作を確認するには、上記のコードをローカルの HTML ファイルにコピーし、別のタブで開くことをお勧めします。

標準のデスクトップ表示は横長であり、この方向ではうまくいくデザインも、携帯電話やタブレットの縦長表示ではうまく動作しないことがあります。方向を検査することで、縦長モードの端末に最適化したレイアウトを作成することができます。

#### ポインティングデバイスの使用

レベル 4 仕様の一部として、ホバー (`hover`) メディア特性が導入されました。 この特性は、ユーザーが要素の上にポインターを乗せることができるかどうかをテストできることを意味します。 つまり、本質的に何らかのポインティングデバイスを使用していることを意味します。タッチ画面とキーボード操作はホバーがありません。

```css live-sample___hover-example
@media screen and (hover: hover) {
  body:hover {
    color: white;
    background: black;
  }
}
```

```html-nolint hidden live-sample___hover-example
<p>
  1782 年 11 月のある夜、 2 人の兄弟がフランスの小さな町アノネーで冬の暖炉の火を囲み、暖炉から立ち上る灰色の煙が広い煙突を登っていくのを見ながら、話を実行したという話があります。彼らの名前はステファンとジョセフ・モンゴルフィエで、紙職人でした。また、思慮深い頭脳を持ち、科学的な知識と新しい発見すべてに深い関心を持っていることで知られていました。
</p>
```

{{EmbedLiveSample("hover-example")}}

上記の例は、端末でホバー操作ができる場合、ホバー時に黒地に白文字に変化します。ユーザーがホバーを使用できないことが分かっている場合、既定ではいくつかの対話機能を表示できます。ホバーが可能なユーザーに対しては、リンクにポインターを当てたときに利用できるようにする、という選択肢もあります。

レベル 4 には、ポインター (`pointer`) メディア特性もあります。 これには、`none`（なし）、`fine`（細かい）、`coarse`（粗い）の 3 つの値があります。 `fine` ポインターは、マウスやトラックパッドのようなものです。 これにより、ユーザーは狭い領域を正確に対象にすることができます。 `coarse` ポインターは、タッチ画面上の指です。 値 `none` は、ユーザーにポインティングデバイスがないことを意味し、おそらく、キーボードのみ、または音声コマンドでナビゲートしています。

`pointer` を使用すると、ユーザーが画面に対して行っている操作の種類に対応する、より優れたインターフェイスを設計できます。 例えば、ユーザーがタッチ画面で端末を操作していることがわかっている場合、より大きなヒット領域を作成するようにすることができます。

#### 範囲付き構文の使用

よくあるケースは、ビューポートの幅が 2 つの値の間にあるかどうかを調べることです。

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

読みやすさを向上させたい場合は、「範囲」構文を使用することができます。

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

この場合、ビューポートの幅が `30em` から `50em` の間にあるときにスタイル設定が適用されます。

## より複雑なメディアクエリー

考えられるさまざまなメディアクエリーのすべてを使用して、それらを組み合わせたり、いずれにも一致する可能性があるクエリーのリストを作成したりすることができます。

これまでと同様に、この節の例をブラウザーの幅を調整して試してみてください。

### メディアクエリーの "and" 論理

メディア特性を組み合わせるには、上記で `and` を使用してメディア種別とメディア特性を組み合わせるのとほぼ同じ方法で `and` を使用できます。 例えば、`width` と `orientation` を検査する場合があります。 ビューポートの幅が少なくとも 600 ピクセルで、端末が横長モードの場合にのみ `body` のテキストは青色になります。

```css live-sample___and
@media screen and (width >= 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

```html-nolint hidden live-sample___and
<p>
  1782 年 11 月のある夜、 2 人の兄弟がフランスの小さな町アノネーで冬の暖炉の火を囲み、暖炉から立ち上る灰色の煙が広い煙突を登っていくのを見ながら、話を実行したという話があります。彼らの名前はステファンとジョセフ・モンゴルフィエで、紙職人でした。また、思慮深い頭脳を持ち、科学的な知識と新しい発見すべてに深い関心を持っていることで知られていました。
</p>
```

{{EmbedLiveSample("and")}}

### メディアクエリーの "or" 論理

クエリーのセットがあり、そのいずれかが一致する場合、これらのクエリーをカンマで区切ることができます。 次の例では、ビューポートの幅が少なくとも 600 ピクセルの場合、**または**端末が横長の場合、テキストは青になります。 これらのいずれかが当てはまる場合、クエリーは一致します。

```css live-sample___or
@media screen and (width >= 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

```html-nolint hidden live-sample___or
<p>
  1782 年 11 月のある夜、 2 人の兄弟がフランスの小さな町アノネーで冬の暖炉の火を囲み、暖炉から立ち上る灰色の煙が広い煙突を登っていくのを見ながら、話を実行したという話があります。彼らの名前はステファンとジョセフ・モンゴルフィエで、紙職人でした。また、思慮深い頭脳を持ち、科学的な知識と新しい発見すべてに深い関心を持っていることで知られていました。
</p>
```

{{EmbedLiveSample("or")}}

### メディアクエリーの "not" 論理

`not` 演算子を使用して、メディアクエリー全体を否定することができます。 これにより、メディアクエリー全体の意味が逆になります。 したがって、次の例では、画面の方向が縦長であり、ビューポートの幅が 600 ピクセル以上でないの場合にのみテキストが青になります。

```css live-sample___not
@media not (width >= 600px) {
  body {
    color: blue;
  }
}
```

```html-nolint hidden live-sample___not
<p>
  1782 年 11 月のある夜、 2 人の兄弟がフランスの小さな町アノネーで冬の暖炉の火を囲み、暖炉から立ち上る灰色の煙が広い煙突を登っていくのを見ながら、話を実行したという話があります。彼らの名前はステファンとジョセフ・モンゴルフィエで、紙職人でした。また、思慮深い頭脳を持ち、科学的な知識と新しい発見すべてに深い関心を持っていることで知られていました。
</p>
```

{{EmbedLiveSample("not")}}

また、 `not` を使って特定の式を否定することもできます。

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

これは、ビューポートの幅が 600 ピクセルから 1000 ピクセルの場合にスタイル設定を適用します。これは、 `(600px <= width <= 1000px)` と同等です。

## ブレークポイントの選択方法

レスポンシブデザインの初期には、多くのデザイナーがとても具体的な画面サイズを対象にしようとしました。 人気のある携帯電話やタブレットの画面のサイズのリストは、それらのビューポートにきちんと一致するデザインを作成できるように公開されています。

現在、非常に多様なサイズの端末が多すぎて、実現できません。 つまり、すべてのデザインにおいて特定のサイズを対象にするのではなく、コンテンツが何らかの方法で壊れ始める (starts to break) サイズでデザインを変更することをお勧めします。 おそらく、行の長さが非常に長くなるか、枠で囲まれたサイドバーが押しつぶされて読みにくくなります。 これが、メディアクエリーを使用して、使用可能なスペースに合わせてデザインをより良いものに変更するポイントです。 このアプローチは、使用されている端末の正確な寸法は問題ではなく、あらゆる範囲に対応できることを意味します。 メディアクエリーが導入されるポイントは、**ブレークポイント** (breakpoints) と呼ばれます。

Firefox 開発者ツールの[レスポンシブデザインモード](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)では、これらのブレークポイントがどこに行くべきかを判断するのにとても便利です。 メディアクエリーを追加してデザインを微調整しながら、ビューポートを小さくしたり大きくしたりして、コンテンツが改善される場所を簡単に確認できます。

![Firefox 開発者ツールのモバイルビューのレイアウトのスクリーンショット。](rwd-mode.png)

## モバイルファーストレスポンシブデザイン

レスポンシブデザインには、大きく分けて 2 つのアプローチがあります。 デスクトップまたは最も広いビューから始めて、ビューポートが小さくなるにつれて並べ替えるためのブレークポイントを追加するか、最小のビューから始めて、ビューポートが大きくなるにつれてレイアウトを追加することができます。 この 2 番目のアプローチは、**モバイルファースト** レスポンシブデザインと呼ばれ、多くの場合、従うべき最善のアプローチです。

非常に小さな端末のビューは、通常フローで見られるように、多くの場合、コンテンツの単純な 1 列です。 これは、小さな端末に対して多くのレイアウトを行う必要がほとんどないことを意味します。ソースを適切な順序にすれば、既定で読みやすいレイアウトになります。

## 独自のモバイルファーストデザインの作成

さあ、次はあなたの番です。このチュートリアルの節では、モバイルファーストのレスポンシブデザインの基本を自分自身で構築していきます。本番サイトではメディアクエリー内で調整すべきことが増える可能性がありますが、その手法はまったく同じです。

### はじめに

出発点は、レイアウトのさまざまな部分に背景色を追加するために CSS を適用した HTML 文書です。

まず、下記ブロックから HTML コードをコピーし、エディターに貼り付けます。それを HTML ファイルとしてコンピューターに保存し、ブラウザーで開いてください。

```html live-sample___walkthrough
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>メディアクエリー: 簡単なモバイルファーストデザイン、第 1 弾</title>
  <style>
    /* Add styles here */
  </style>
</head>
<div class="wrapper">
  <header>
    <nav>
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Meet the team</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <div class="content">
        <h1>Veggies!</h1>
        <p>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </p>

        <p>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
          courgette tatsoi pea sprouts fava bean collard greens dandelion okra
          wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </p>

        <p>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress. Corn amaranth
          salsify bunya nuts nori azuki bean chickweed potato bell pepper
          artichoke.
        </p>

        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant
          winter purslane fennel azuki bean earthnut pea sierra leone bologi
          leek soko chicory celtuce parsley jícama salsify.
        </p>
      </div>
      <aside class="related">
        <p>
          All these veggies are brought to you by the
          <a href="https://veggieipsum.com/">Veggie Ipsum generator</a>.
        </p>
      </aside>
    </article>
    <aside class="sidebar">
      <h2>External vegetable-based links</h2>
      <ul>
        <li>
          <a
            href="https://www.thekitchn.com/how-to-cook-broccoli-5-ways-167323">
            How to cook broccoli
          </a>
        </li>
        <li>
          <a href="https://www.bbcgoodfood.com/glossary/swiss-chard">
            Swiss Chard
          </a>
        </li>
        <li>
          <a
            href="https://www.bbcgoodfood.com/recipes/collection/christmas-parsnip">
            Christmas Parsnip Recipes
          </a>
        </li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024</p>
  </footer>
</div>
```

文書のソースは、コンテンツが読みやすいように並べられています。 これは重要な最初のステップであり、コンテンツがスクリーンリーダーで読み上げられる場合に理解できるようにするものです。

この例の初期スタイルは次の通りです。これを HTML ファイル内の `<style></style>` タグ内にコピーし、`/* ここにスタイルを追加 */` のコメントを置き換えてください。

```css live-sample___walkthrough
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 2em auto;
  font:
    1em/1.3 "Helvetica",
    "Arial",
    sans-serif;
}

a:link,
a:visited {
  color: #333333;
}

nav ul,
aside ul {
  list-style: none;
  padding: 0;
}

nav a:link,
nav a:visited {
  background-color: rgb(207 232 220 / 20%);
  border: 2px solid rgb(79 185 227);
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #333333;
  font-weight: bold;
}

nav a:hover {
  background-color: rgb(207 232 220 / 70%);
}

.related {
  background-color: rgb(79 185 227 / 30%);
  border: 1px solid rgb(79 185 227);
  padding: 10px;
}

.sidebar {
  background-color: rgb(207 232 220 / 50%);
  padding: 10px;
}

article {
  margin-bottom: 1em;
}
```

開発者ツールでレスポンシブデザインモードでレイアウトを確認したり、ブラウザーウィンドウをモバイル端末のような幅に縮小したりすると、サイトのシンプルなモバイルビューとしてかなりうまく機能していることがわかります。

{{EmbedLiveSample("walkthrough", "", "600px")}}

### 中ぐらいの幅向けの 2 列レイアウトの作成

ウィンドウを横にドラッグして広げ、行の長さがかなり長くなるまで拡大してください。この時点で、ナビゲーションを水平に表示できる空間が確保されます。ここにまず最初のメディアクエリーを追加します。`em` 単位を使用します。これにより、ユーザーが文字サイズを拡大している場合、文字サイズが小さいユーザーと比べて、同様の行長でより広いビューポートにおいてブレークポイントが発生するようになります。

次のものを CSS の最下部に追加してください。

```css
@media screen and (width >= 40em) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    flex: 1;
  }
}
```

この CSS は、記事 (`<article>`) 内の 2 列のレイアウトで、記事のコンテンツ (`content`) および余談 (`<aside>`) 要素の関連情報を提供します。 また、フレックスボックスを使用してナビゲーションを 1 行に配置します。

### 広い画面向けの 3 列目の追加

サイドバー (`sidebar`) が新しい列を形成するのに十分なスペースがあると感じるまで、幅を拡張し続けます。 メディアクエリー内で、主要な (`main`) 要素を 2 列のグリッドにします。 次に、2 つのサイドバーが互いに揃うように `article` の {{cssxref("margin-bottom")}} を削除する必要があります。 フッター (`footer`) の上部に {{cssxref("border")}} を追加します。 通常、これらの小さな調整は、各ブレークポイントでデザインをきれいに見せるために行うことです。

スタイルに以下の CSS を追加してください。

```css
@media screen and (width >= 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #cccccc;
    margin-top: 2em;
  }
}
```

これでこの例は完了です。さまざまな幅で最後の例を見ると、デザインがどのように反応し、利用可能な幅に応じて 1 列、2 列、または 3 列として機能するかを確認できます。 これは、モバイルファーストレスポンシブデザインの基本的な例です。

### meta viewport

例えば次の例の HTML ソースを見ると、文書の見出しに以下の要素が記載されています。

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

これは [`viewport`](/ja/docs/Web/HTML/Reference/Elements/meta/name/viewport) メタタグです。モバイルブラウザーがコンテンツをレンダリングする方法を制御し、メディアクエリーを適切に反映させるために存在します。上記のタグはモバイルブラウザーに「980ピクセルのビューポートでコンテンツをレンダリングしないでください。代わりに実際の端末幅を使用してレンダリングし、一貫性を高めるためデフォルトで初期拡大率を設定してください」と指示します。これによりメディアクエリーが期待通りに機能します。

これが必要な理由の詳細の情報については、前の記事の[ビューポートメタタグ](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#ビューポートメタタグ)のを参照してください。

## メディアクエリーが本当に必要か

フレックスボックスや CSS グリッドにより、メディアクエリーなしで柔軟かつレスポンシブな要素を作成できます。メディアクエリーが本当に必要かどうかは常に検討する価値があります。例えば、幅が少なくとも 200 ピクセルであるカード群を、本文のカラムの幅に関わらず、可能な限り多くのカードを横に並べて配置したい場合などが挙げられます。

これは CSS グリッドを使用することで、メディアクエリーをまったく使用せずに実現できます。

```html live-sample___grid
<ul class="grid">
  <li>
    <h2>カード 1</h2>
    <p>…</p>
  </li>
  <li>
    <h2>カード 2</h2>
    <p>…</p>
  </li>
  <li>
    <h2>カード 3</h2>
    <p>…</p>
  </li>
  <li>
    <h2>カード 4</h2>
    <p>…</p>
  </li>
  <li>
    <h2>カード 5</h2>
    <p>…</p>
  </li>
</ul>
```

```css live-sample___grid
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
  border: 1px solid #666666;
  padding: 10px;
}
```

{{EmbedLiveSample("grid", "", "350px")}}

ブラウザーウィンドウを広くしたり狭くしたりして、列トラックの数値が変わる様子を確認してみてください。

この手法の優れた点は、グリッドがビューポートの幅ではなく、この要素に利用できる幅を参照する点です。メディアクエリーに関する章の締めくくりとして「そもそもメディアクエリーが不要かも」と提案するのは奇妙に思えるかもしれません！しかし実際には、メディアクエリーで強化された最新のレイアウト手法を適切に活用することで、最良の結果が得られることに気づくでしょう。

## まとめ

このレッスンでは、メディアクエリーについて学び、実際にそれらを使用してモバイルファースト レスポンシブデザインを作成する方法もみいだしました。

私たちが作成した出発点を使用して、さらに多くのメディアクエリーを検査することができます。例えば、来訪者が粗いポインターを保有していることを検知した場合、メディア特性 `pointer` を使用してナビゲーションのサイズを変更できるかもしれません。

また、さまざまなコンポーネントを追加して、メディアクエリーを追加したり、フレックスボックスやグリッドなどのレイアウト方式を使用したりすることが、レスポンシブにするのに最も適切な方法であるかどうかを試してみることもできます。正しい方法や間違った方法があるわけではなく、実験や業務で、デザインやコンテンツに最適な方法を見極めることが重要です。

さて、このモジュールもほぼ終わりに近づきました。次の記事では、前回の記事で提供したレスポンシブウェブデザインとメディアクエリーに関する知識を、どれだけ理解し定着させられたかを確認できるテストをいくつかご紹介します。

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
