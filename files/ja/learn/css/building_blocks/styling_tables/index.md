---
title: 表のスタイリング
slug: Learn/CSS/Building_blocks/Styling_tables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

HTML の表を装飾することは、世界で最も魅力的な仕事ではありませんが、時にはそれをしなければならないこともあります。 この記事では、これまでに説明した機能のいくつかとともに、HTML の表を見栄え良くするためのガイドを提供します。

| 前提条件: | HTML の基本 ([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)) と [HTML の表](/ja/docs/Learn/HTML/Tables)に関する知識、 CSS の動作に関する理解 (CSS の第一歩)。 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | HTML の表を効果的に装飾する方法を学ぶ。                                                                                                                              |

## 典型的な HTML の表

典型的な HTML の表を見ることから始めましょう。 まあ、私もよく言いますが、ほとんどの HTML の表の例は、靴、天気、あるいは従業員に関するものです。 私たちはイギリスの有名なパンクバンドについてそれを作ることで、もっと面白くすることにしました。 マークアップはこのような感じです。

```html
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>

    ... 簡潔にするためにいくつかの行を削除

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

[`scope`](/ja/docs/Web/HTML/Element/th#scope)、{{htmlelement("caption")}}、{{htmlelement("thead")}}、{{htmlelement("tbody")}} などの機能のおかげで、表はうまくマークアップされ、簡単に装飾を整えられ、アクセスしやすくなりました。 残念なことに、画面に表示したときは見栄えがよくありません ([punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html) でライブを見る)。

![](table-unstyled.png)

ブラウザーの既定のスタイリングでは、窮屈で、読みにくく、つまらなく見えます。これを修正するためには CSS を使用する必要があります。

## 表のスタイリング

表の例を一緒にスタイリングしてみましょう。

1. まず始めに、[サンプルマークアップ](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-unstyled.html)のローカルコピーを作成し、[noise](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/noise.png) と [leopardskin](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/leopardskin.jpg) の両方の画像をダウンロードして、3 つのファイルをローカルコンピュータのどこかの作業ディレクトリーに配置します。
2. 次に、`style.css` という名前の新しいファイルを作成し、他のファイルと同じディレクトリーに保存します。
3. {{htmlelement("head")}} の内側に次の HTML 行を配置して、CSS を HTML にリンクします。

   ```html
   <link href="style.css" rel="stylesheet" type="text/css" />
   ```

### スペーシングとレイアウト

最初にすべきことは、スペーシングやレイアウトを整理することです — 既定のの表の装飾はとても窮屈です！ これを行うには、`style.css` ファイルに次の CSS を追加します。

```css
/* spacing */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}
```

注意すべき最も重要な部分は次のとおりです。

- {{cssxref("table-layout")}} の値を `fixed` に設定すると、既定で表の動作が多少予測しやすくなるため、通常は表に設定することをお勧めします。 通常、表の列は、含まれるコンテンツの量に応じてサイズが変更される傾向があり、これは奇妙な結果を生むことがあります。 `table-layout: fixed` を使うと、見出しの幅に応じてカラムのサイズを調整し、その内容を適切に処理することができます。そのために、`thead th:nth-child(n)` ({{cssxref(":nth-child")}}) セレクター ({{htmlelement("thead")}} 要素の中の {{htmlelement("th")}} 要素で、シーケンス中の _n_ 番目の子を選択する) で 4 つの異なる見出しを選択し、それらに設定されたパーセント値の幅を与えています。列全体の幅はその見出しの幅に従うので、表の列のサイズを変更するのに適した方法です。 Chris Coyier は、このテクニックを [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/) でさらに詳しく説明しています。

  これは 100% の {{cssxref("width")}} と結合されています。 つまり、表は入れられているコンテナーをすべて満たし、とてもレスポンシブになります (しかし、狭い画面幅で見栄えを良くするにはまだ作業が必要です)。

- {{cssxref("border-collapse")}} の `collapse` の値は、あらゆる表の装飾の取り組みにおける標準的なベストプラクティスです。 既定では、下の画像に示すように、表要素に境界線を設定すると、境界線の間に間隔が空くことになります。![](no-border-collapse.png) これはあまり見栄えがよくありません (あなたが望む外観かもしれませんが、誰にも分かりません)。 `border-collapse: collapse;` を設定すると、境界線は 1 つに折りたたまれ、次のようにずっと良く見えます。![](border-collapse.png)
- 表全体を囲むように {{cssxref("border")}} を付けています。 これは、後で表のヘッダーとフッターに境界線を付けるために必要です — 表の外側全体に境界線がなく、ギャップで終わる場合、それは本当に奇妙でまとまりのないものに見えます。
- {{htmlelement("th")}} 要素と {{htmlelement("td")}} 要素に {{cssxref("padding")}} を設定しました。 これにより、データ項目に余裕を持たせることができ、表がもっと見やすくなります。

この時点で、表はすでにずっと良く見えています。

![](table-with-spacing.png)

### 簡単なタイポグラフィ

それでは、テキストを少し整理しましょう。

まず第一に、パンクバンドについての表にふさわしいフォントを [Google Fonts](https://www.google.com/fonts) で見つけてあります。 望むならそこに行って、別なものを探すことができます。私たちが提供する {{htmlelement("link")}} 要素とカスタムの {{cssxref("font-family")}} 宣言を Google Fonts が与えるものと置き換えるだけです。

まず、HTML `head` の既存の {{htmlelement("link")}} 要素のすぐ上に、次の `<link>` 要素を追加します。

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

そして、`style.css` ファイルの以前の追加の下に、次の CSS を追加します。

```css
/* typography */

html {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}
```

ここに表に固有のものは何もありません。 読みやすくするために、次のようにフォントの装飾を調整しています。

- グローバルなサンセリフのフォントスタックを設定しました。 これは純粋に装飾的な選択です。 また、素敵に汚れた、パンクな外観のために {{htmlelement("thead")}} 要素内の見出しと {{htmlelement("tfoot")}} 要素内の見出しにもカスタムフォントを設定しました。
- 読みやすくするために、見出しとセルに {{cssxref("letter-spacing")}} を設定しています。 繰り返しますが、主に装飾的な選択です。
- {{htmlelement("tbody")}} 内の表セル内のテキストを見出しと揃えるように中央揃えにしました。 既定では、セルは {{cssxref("text-align")}} に `left` の値が与えられ、見出しは `center` の値が与えられますが、一般的には、両方の揃えを同じに設定する方が見栄えがよくなります。 見出しフォントの既定の太字は、見た目を区別するのに十分です。
- {{htmlelement("tfoot")}} 内の見出しは、データと視覚的に関連付けやすくなるように右揃えしています。

結果は少しきれいに見えます。

![](table-with-typography.png)

### グラフィックスと色

今度はグラフィックと色です。表はパンクとその態度でいっぱいですので、それに合わせていくつかの明るい印象的な装飾を与える必要があります。 心配しないで、表をそんなに騒々しくする必要はありません — もっと微妙で上品な何かを選ぶことができます。

次の CSS を `style.css` ファイルの一番下に再び追加してください。

```css
/* グラフィックと色 */

thead,
tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
  border: 3px solid purple;
}
```

繰り返しますが、ここでは表に何も特徴がありませんが、いくつか注意することは価値があります。

{{htmlelement("thead")}} と {{htmlelement("tfoot")}} に {{cssxref("background-image")}} を追加し、ヘッダー内とフッター内のすべてのテキストの {{cssxref("color")}} を白に変更して（そして {{cssxref("text-shadow")}} を指定して）読みやすくしています。 読みやすいように、テキストが背景と比べてコントラストがあるようにしてください。

また、ヘッダー内とフッター内の {{htmlelement("th")}} 要素と {{htmlelement("td")}} 要素に線形グラデーションを追加して、テクスチャをきれいにし、それらの要素に明るい紫色の境界線を付けました。 複数のネストした要素を使用できるようにしておくと、スタイルを重ね合わせることができます。 はい、複数の背景画像を使用して {{htmlelement("thead")}} 要素と {{htmlelement("tfoot")}} 要素に背景画像と線形グラデーションの両方を配置することもできましたが、複数の背景画像や線形グラデーションをサポートしない古いブラウザーの利点のために別々に行うことにしました。

#### ゼブラストライピング

**ゼブラストライプ** (zebra stripes) を実装する方法を示すために別のセクションを捧げたいと思います — 表のさまざまなデータ行を解析して読みやすくするために、行の色を交互に並べます。 `style.css` ファイルの一番下に次の CSS を追加します。

```css
/* 縞模様 */

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}
```

- 先ほど、{{cssxref(":nth-child")}} セレクターが特定の子要素を選択するために使われていたのを見ました。 式をパラメータとして指定することもできるので、一連の要素を選択します。 式 `2n-1` はすべての奇数番号の子（1、3、5 など）を選択し、式 `2n` はすべての偶数番号の子（2、4、6 など）を選択します。 上のコードでは `odd` と `even` のキーワードを使っていますが、それは前述の式とまったく同じです。 この場合、奇数行と偶数行に異なる（けばけばしい）色を付けます。
- また、すべての本体行に繰り返しの背景タイルを追加しました。 これは、テクスチャを提供するためのわずかなノイズです（視覚的な歪みが少しある半透明の `.png`）。
- 最後に、`:nth-child` セレクターをサポートしていないブラウザーでも本体行に背景があるように、表全体の背景色を単色にしました。

この色の爆発により、以下のような見た目になります。

![](table-with-color.png)

さて、これはあなたの好みではなく、少々限度を超えているかもしれませんが、ここで主張しようとしているのは、表が退屈で学術的である必要はないということです。

### キャプションの装飾

表でやるべきことがもう一つあります — キャプションの装飾です。 これを行うには、`style.css` ファイルの一番下に次のコードを追加します。

```css
/* caption */

caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}
```

{{cssxref("caption-side")}} プロパティに、`bottom` の値が与えられている以外に、ここで注目に値するものは何もありません。 これにより、キャプションは表の下に配置され、他の宣言と共にこの最終的な外観が得られます（[punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) でライブで見る）。

![](table-with-caption.png)

## 表の装飾のちょっとした助言

先に進む前に、上に示した最も有用なポイントの簡単なリストをお送りします。

- 表のマークアップをできる限り単純にし、物事を柔軟に保ちます。 例えば、パーセントを使用することによって、デザインはよりレスポンシブになります。
- {{cssxref("table-layout")}}`: fixed` を使用すると、見出し（{{htmlelement("th")}}）の {{cssxref("width")}} を設定して列幅を簡単に設定でき、より予測可能な表レイアウトを作成できます。
- {{cssxref("border-collapse")}}`: collapse` を使用して、表要素の境界線を互いに折りたたみ、見た目をよりきれいにして制御しやすくします。
- {{htmlelement("thead")}}、{{htmlelement("tbody")}}、{{htmlelement("tfoot")}} を使用して表を論理的なまとまりに分割し、CSS を適用するための特別な場所を提供することで、必要に応じてスタイルを重ねることが容易になります。
- 行を読みやすくするために、ゼブラストライピングを使用します。
- {{cssxref("text-align")}} を使用して、{{htmlelement("th")}} と {{htmlelement("td")}} のテキストを揃えることで、きれいにして見やすくします。

## スキルをテストしましょう

この記事では多くの情報を取り上げましたが、最も重要な情報を覚えていますか？先に進む前に、この情報を保持しているかどうかを確認するためのテストをいくつか見つけることができます。[Test your skills: tables](/ja/docs/Learn/CSS/Building_blocks/Tables_tasks) を参照してください。

## まとめ

表のスタイリングも終わりに近づいてきたので、他にも何か時間を割くものが必要になってきました。次の記事では、CSS をデバッグする方法を探ります。レイアウトが思うように見えない、プロパティが適用されないなどの問題を解決する方法です。これには、ブラウザーの DevTools を使用して問題を解決する方法についての情報も含まれています。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
