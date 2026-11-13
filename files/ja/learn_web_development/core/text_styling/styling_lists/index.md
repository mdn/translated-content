---
title: リストのスタイル設定
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[リスト](/ja/docs/Learn_web_development/Core/Structuring_content/Lists)は他のテキストとほとんど同じようにふるまいますが、知っておくべきリスト固有の CSS プロパティと、考慮すべき最善の手法がいくつかあります。この記事はすべてを説明しています。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML によるコンテンツの構造化</a
        >、および <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>で学習）。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>リストアイテムの間隔、例えばマージンや行の高さ。</li>
          <li><code>list-style</code> プロパティの使用方法。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 基本的なリストの例

基本的なリストの例を見てみましょう。この記事を通して、順序なしリスト、順序付きリスト、そして説明リストを見ていきます。これらはどれも似たようなスタイル設定を機能持っていますが、リストの種類に特有のものもあります。

そのリストの例の HTML はこんな感じです。

```html live-sample___unstyled live-sample___initial-style live-sample___finished-style
<h2>買い物リスト（順序なし）</h2>

<p>
  参考のための段落、参考のための段落、参考のための段落、参考のための段落、参考のための段落、参考のための段落。
</p>

<ul>
  <li>フムス</li>
  <li>ピタパン</li>
  <li>グリーンサラダ</li>
  <li>ハロウミチーズ</li>
</ul>

<h2>レシピリスト（順序付き）</h2>

<p>
  参考のための段落、参考のための段落、参考のための段落、参考のための段落、参考のための段落、参考のための段落。
</p>

<ol>
  <li>ピタパンをトーストし、冷ましてから、縁に沿ってスライスします。</li>
  <li>
    浅めのテフロン加工のフライパンで、ハロウミチーズを両面がきつね色になるまで焼きます。
  </li>
  <li>サラダを洗って、刻んでください。</li>
  <li>ピタパンにサラダ、フムス、揚げたハロウミチーズをつけて詰めます。</li>
</ol>

<h2>原材料の説明リスト</h2>

<p>
  参考のための段落、参考のための段落、参考のための段落、参考のための段落、参考のための段落、参考のための段落。
</p>

<dl>
  <dt>フムス</dt>
  <dd>
    ひよこ豆をタヒニ、レモン汁、塩、ニンニク、それ以外にも材料をつけて作る、濃厚なディップ／ソース。
  </dd>
  <dt>ピタパン</dt>
  <dd>柔らかく、ほんのり発酵させたフラットブレッド。</dd>
  <dt>ハロウミチーズ</dt>
  <dd>
    通常より融点が高く、半硬質で熟成させていない塩水漬けのチーズ。通常、山羊や羊の乳から作られる。
  </dd>
  <dt>グリーンサラダ</dt>
  <dd>ケバブの飾りとして使用することが多い、あの緑色のヘルシーな食材。</dd>
</dl>
```

何もスタイル設定しない場合、これは次のように表示されます。

{{embedlivesample("unstyled", "100%", 400)}}

ここで実際の例に行き、[ブラウザーの開発者ツール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)を使用してリスト要素を調べると、次のようないくつかのデフォルトのスタイル設定に気付くでしょう。

- {{htmlelement("ul")}} 要素と {{htmlelement("ol")}} 要素の上下の {{cssxref("margin")}} は `16px` (`1em`)、{{cssxref("padding-left")}} は `40px` (`2.5em`) です。書字方向属性の [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir) が右書き (`rtl`) に設定されている場合、 `ul` および `ol` 要素では、 {{cssxref("padding-right")}} が効果を発揮し、そのデフォルト値は `40px` (`2.5em`) です。
- リストアイテム ({{htmlelement("li")}} 要素) には、間隔の設定に関するデフォルトはありません。
- {{htmlelement("dl")}} 要素の上下の {{cssxref("margin")}} は `16px` (`1em`) ですが、パディングの設定はありません。
- {{htmlelement("dd")}} 要素の {{cssxref("margin-left")}} は `40px` (`2.5em`) です。
- 参照用に含めた {{htmlelement("p")}} 要素には、さまざまな種類のリストと同じ `16px` (`1em`) の上下の {{cssxref("margin")}} があります。

## リストの間隔の扱い

リストのスタイル設定を行う際は、周囲の要素（段落や画像など。これは「垂直リズム」と呼ばれることもあります）と同じ垂直方向の間隔を保ち、リスト同士の間隔も均一になるようにスタイルを調整する必要があります。典型的な CSS のスタイル設定や文字の間隔の例は、次のようなものになります。

```css live-sample___initial-style live-sample___list-style-type live-sample___list-style-position live-sample___custom-bullets live-sample___finished-style
/* General styles */

html {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Description list styles */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

- 1 番目のルールはサイト全体のフォントと 10px の基準フォントサイズを設定します。 これらはページ上のすべてのものに継承されます。
- 2 番目と 3 番目のルールでは、見出し、さまざまなリストの種類 (リスト要素の子はこれらを継承) 、および段落に相対フォントサイズを設定します。 つまり、各段落とリストのフォントサイズ、上下の間隔は同じになり、バーティカルリズムを一定に保つのに役立ちます。
- 4 番目では、段落とリストアイテムに同じ {{cssxref("line-height")}} を設定しているため、段落と各個々のリストアイテムのラインの間隔は同じになります。 これは、バーティカルリズムを一定に保つのにも役立ちます。
- 説明リストには 5 番目と 6 番目のルールが適用されます。 説明リストの用語と説明には、段落とリストアイテムの場合と同じ `line-height` を設定します。 繰り返しますが、一貫性があることは良いことです！ また、説明する用語は太字にして、視覚的に目立つようにしています。>

先ほど示した HTML にこのコードを適用すると、次のように表示されます。

{{embedlivesample("initial-style", "100%", 400)}}

## リスト固有のスタイル設定

リストの一般的な間隔調整テクニックを見てきました。 次に、リスト固有のプロパティを調べてみましょう。 最初に知っておくべき 3 つのプロパティがあり、それらは {{htmlelement("ul")}} や {{htmlelement("ol")}} 要素に設定できます。

- {{cssxref("list-style-type")}}: リストに使用する行頭記号の種類を設定します。 例えば、順序なしリストの場合は正方形や丸の行頭記号、順序付きリストの場合は数字、文字、ローマ数字などです。
- {{cssxref("list-style-position")}}: 行頭記号をリストアイテムの内側に表示するか、その外側の各項目の先頭より前に表示するかを設定します。
- {{cssxref("list-style-image")}}: 行頭記号に基本的な正方形や円ではなく、カスタム画像を使うことができます。

### 行頭記号のスタイル設定

前述のように、{{cssxref("list-style-type")}} プロパティを使用して、行頭記号 (bullet point) に使用する行頭記号 (bullet) の種類を設定できます。 この例では、順序付きリストで大文字のローマ数字を使用するように設定してみます。

```html hidden live-sample___list-style-type live-sample___list-style-position
<ol>
  <li>ピタパンをトーストし、冷ましてから、縁に沿ってスライスします。</li>
  <li>
    浅めのテフロン加工のフライパンで、ハロウミチーズを両面がきつね色になるまで焼きます。
  </li>
  <li>サラダを洗って、刻んでください。</li>
  <li>ピタパンにサラダ、フムス、揚げたハロウミチーズをつけて詰めます。</li>
</ol>
```

```css live-sample___list-style-type
ol {
  list-style-type: upper-roman;
}
```

これにより、次のようになります。

{{embedlivesample("list-style-type", "100%", 120)}}

それ以外のオプションを見るには、 {{cssxref("list-style-type")}} のリファレンスページを参照してください。

### 行頭記号の位置

{{cssxref("list-style-position")}} プロパティは、行頭記号をリストアイテムの内側に表示するか、その外側の各項目の先頭より前に表示するかを設定します。 デフォルト値は `outside` です。 これは、上で見たように、行頭記号をリストアイテムの外側に配置します。

値を `inside` に設定すると、行頭記号を行の内側に配置します。

```css live-sample___list-style-position live-sample___finished-style
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

{{embedlivesample("list-style-position", "100%", 120)}}

### 独自の行頭記号画像の使用

{{cssxref("list-style-image")}} プロパティを使用すると、行頭記号に独自の画像を使用することができます。構文は次のようなものです。

```css
ul {
  list-style-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
}
```

ただし、このプロパティは、行頭記号の位置、サイズなどを制御するという点では少し制限があります。 {{cssxref("background")}} プロパティファミリーを使用するほうが得策です。 これについては、[背景と境界線](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)モジュールで詳しく説明します。とりあえず、その例をご紹介しましょう。

完成した例では、 (既に上で見たものの上に) 次のように順序なしリストを設定しました。

```html hidden live-sample___custom-bullets
<ul>
  <li>フムス</li>
  <li>ピタパン</li>
  <li>グリーンサラダ</li>
  <li>ハロウミチーズ</li>
</ul>
```

```css live-sample___custom-bullets live-sample___finished-style
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

ここでは次のことを行いました。

- {{htmlelement("ul")}} の {{cssxref("padding-left")}} をデフォルトの `40px` から `20px` に減らし、リストアイテムにも同じ量を設定します。 これにより、リストアイテムは全体的にはまだ順序リストアイテムや説明リストの説明文が並んでいますが、リストアイテムには背景画像が入るように多少のパディングが入っています。これをしないと、背景画像がリストアイテムのテキストと重なってしまい、見た目がごちゃごちゃしてしまいます。
- デフォルトで行頭記号が表示されないように、{{cssxref("list-style-type")}} を `none` に設定します。 代わりに、行頭記号を処理するために {{cssxref("background")}} プロパティを使用します。
- 各順序なしリストアイテムに行頭記号を挿入しました。 関連するプロパティは次のとおりです。
  - {{cssxref("background-image")}}: 行頭記号として使用する画像ファイルへのパスを参照します。
  - {{cssxref("background-position")}}: これは選択した要素の背景のどこに画像を表示するかを定義します。 この場合は `0 0` としています。 つまり、各リストアイテムの左上に行頭記号が表示されます。
  - {{cssxref("background-size")}}: 背景画像のサイズを設定します。 行頭記号のサイズをリストアイテムと同じサイズ (または、ごくわずかに大きいか小さい) にすることをお勧めします。 サイズは `1.6rem` (`16px`) を使用しています。 これは、行頭記号を内部に配置できる `20px` のパディングに非常によく合っています — 行頭記号とリストアイテムのテキストの間に 16px + 4px のスペースがあるとうまくいきます。
  - {{cssxref("background-repeat")}}: デフォルトでは、背景画像は利用可能な背景スペースを埋めつくすまで繰り返します。 それぞれの場合に画像のコピーを 1 つだけ挿入したいので、これを `no-repeat` の値に設定します。

これにより、次のような結果が得られます。

{{embedlivesample("custom-bullets", "100%", 120)}}

### list-style 一括指定

上記の 3 つのプロパティはすべて、単一の一括指定プロパティ {{cssxref("list-style")}} を使用して設定できます。 例えば、次の CSS を、

```css
ul {
  list-style-type: square;
  list-style-image: url("example.png");
  list-style-position: inside;
}
```

これに置き換えることができます。

```css
ul {
  list-style: square url("example.png") inside;
}
```

値は任意の順序でリストすることができ、1 つ、2 つ、または 3 つすべてを使用できます (含まれていないプロパティーに使用されるデフォルト値は `disc`、`none`、`outside` です) 。 `type` と `image` の両方が指定されている場合、画像が何らかの理由でロードできない場合に、`type` を代替として使用します。

## 完全な例

これまでの数節で、リストの個々の機能の効果について示しました。これらすべてを最初の HTML リストに適用すると、次のような結果になります。

{{embedlivesample("finished-style", "100%", 400)}}

## リストの数え方の制御

場合によっては、順序付きリストで異なる方法で数えたいことがあります — 例えば 1 以外の数から始めたり、逆方向に数えたり、1 以上のステップで数えたりです。 HTML と CSS には、ここで役立つツールがいくつかあります。

### start

[`start`](/ja/docs/Web/HTML/Reference/Elements/ol#start) 属性を使用すると、1 以外の数からリストを数え始めます。次の例では、

```html live-sample___counting-control
<ol start="4">
  <li>ピタパンをトーストし、冷ましてから、縁に沿ってスライスします。</li>
  <li>
    浅めのテフロン加工のフライパンで、ハロウミチーズを両面がきつね色になるまで焼きます。
  </li>
  <li>サラダを洗って、刻んでください。</li>
  <li>ピタパンにサラダ、フムス、揚げたハロウミチーズをつけて詰めます。</li>
</ol>
```

この結果が得られます。

{{ EmbedLiveSample('counting-control', '100%', 150) }}

### reversed

[`reversed`](/ja/docs/Web/HTML/Reference/Elements/ol#reversed) 属性はリストのカウントアップではなくカウントダウンを開始します。 次の例では、

```html live-sample___counting-control-reversed
<ol start="4" reversed>
  <li>ピタパンをトーストし、冷ましてから、縁に沿ってスライスします。</li>
  <li>
    浅めのテフロン加工のフライパンで、ハロウミチーズを両面がきつね色になるまで焼きます。
  </li>
  <li>サラダを洗って、刻んでください。</li>
  <li>ピタパンにサラダ、フムス、揚げたハロウミチーズをつけて詰めます。</li>
</ol>
```

この出力が得られます。

{{ EmbedLiveSample('counting-control-reversed', '100%', 150) }}

> [!NOTE]
> 逆方向のリストに `start` 属性の値より多くのリストアイテムがある場合、カウントは引き続きゼロになり、その後負の値になります。

### 値

[`value`](/ja/docs/Web/HTML/Reference/Elements/li#value) 属性を使用すると、リストアイテムを特定の数値に設定できます。 次の例では、

```html counting-control-values
<ol>
  <li value="2">
    ピタパンをトーストし、冷ましてから、縁に沿ってスライスします。
  </li>
  <li value="4">
    浅めのテフロン加工のフライパンで、ハロウミチーズを両面がきつね色になるまで焼きます。
  </li>
  <li value="6">サラダを洗って、刻んでください。</li>
  <li value="8">
    ピタパンにサラダ、フムス、揚げたハロウミチーズをつけて詰めます。
  </li>
</ol>
```

この出力が得られます。

{{ EmbedLiveSample('counting-control-values', '100%', 150) }}

> [!NOTE]
> 数値以外の {{cssxref("list-style-type")}} を使用している場合でも、`value` 属性に同等の数値を使用する必要があります。

## 実習: 入れ子になったリストのスタイル設定

さて、また新しい課題をこなす時が来ました。今回は、以上学んだことを活かして、入れ子になったリストのスタイル設定に挑戦してみてください。

1. 下記コードブロック内の **"Play"** をクリックして、MDN Playground で例を編集してください。
2. 順序なしリストに正方形の行頭記号をスタイル設定します。
3. 順序なしリストのアイテムと順序付きリストのアイテムに、`font-size` の `1.5` 倍の `line-height` を設定します。
4. 順序付きリストに小文字のアルファベットの行頭記号を設定します。
5. リストの例を、箇条書きの種類や間隔など、お好きなように自由に試してみてください。

間違えてしまった場合は、MDN Playground の「リセット」ボタンをクリックすると、作業内容をリセットできます。どうしても解決できない場合は、出力例の下記にある解答を参照してください。

```html live-sample___styling_lists
<ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>
    Finally, place the three magic items in the box, in this exact order, to
    complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul>
```

```css live-sample___styling_lists

```

{{ EmbedLiveSample('styling_lists', "100%", 160) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した CSS は、次のようになるはずです。

```css
ul {
  list-style-type: square;
}

li {
  line-height: 1.5;
}

ol {
  list-style-type: lower-alpha;
}
```

</details>

## まとめ

リストは、関連付けられた基本原則と特定のプロパティをいくつか知れば、スタイル設定のコツをつかむのは比較的簡単です。次の記事では、リンクのスタイル設定のテクニックについて説明します。

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
