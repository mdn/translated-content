---
title: 表のスタイル設定
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 56ccb15b023cb11234cd044a68d6d3a93e752326
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}

HTML の表をスタイル設定することは、世界で最も魅力的な仕事ではありませんが、時にはそれをしなければならないこともあります。 この記事では、これまでに説明した機能のいくつかとともに、HTML の表を見栄え良くするためのガイドを提供します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >、<a href="/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >HTML の表</a
        >、 CSS の<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units">値と単位</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Sizing">サイズ設定</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>表の中の余白の扱い、境界線の統合も含みます。</li>
          <li>見出し、キャプション、ヘッダー、本体、フッターなど、表のさまざまな領域を明確に強調表示すること。</li>
          <li>縞模様を実装する方法、そしてそれがなぜ有益なのか。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 典型的な HTML の表

典型的な HTML の表を見ることから始めましょう。 まあ、私もよく言いますが、ほとんどの HTML の表の例は、靴、天気、あるいは従業員に関するものです。 私たちはイギリスの有名なパンクバンドについてそれを作ることで、もっと面白くすることにしました。 マークアップはこのような感じです。

```html live-sample___unstyled live-sample___punk-style live-sample___best-practice-style
<table>
  <caption>
    英国を代表するパンク・バンドの概要
  </caption>
  <thead>
    <tr>
      <th scope="col">バンド名</th>
      <th scope="col">結成年</th>
      <th scope="col">アルバム数</th>
      <th scope="col">もっとも有名な歌</th>
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
    <tr>
      <th scope="row">The Damned</th>
      <td>1976</td>
      <td>10</td>
      <td>Smash it up</td>
    </tr>
    <tr>
      <th scope="row">Sex Pistols</th>
      <td>1975</td>
      <td>1</td>
      <td>Anarchy in the UK</td>
    </tr>
    <tr>
      <th scope="row">Sham 69</th>
      <td>1976</td>
      <td>13</td>
      <td>If The Kids Are United</td>
    </tr>
    <tr>
      <th scope="row">Siouxsie and the Banshees</th>
      <td>1976</td>
      <td>11</td>
      <td>Hong Kong Garden</td>
    </tr>
    <tr>
      <th scope="row">Stiff Little Fingers</th>
      <td>1977</td>
      <td>10</td>
      <td>Suspect Device</td>
    </tr>
    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">アルバム数合計</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

[`scope`](/ja/docs/Web/HTML/Reference/Elements/th#scope)、{{htmlelement("caption")}}、{{htmlelement("thead")}}、{{htmlelement("tbody")}} などの機能のおかげで、表はうまくマークアップされ、簡単に装飾を整えられ、アクセスしやすくなりました。残念ながら、あまり見栄えが良くありません。デフォルトのブラウザーのスタイル設定だけだと、画面が窮屈で、読みづらく、少し退屈な印象を受けます。

{{embedlivesample("unstyled", "", "200")}}

これを修正するには、CSS を使用する必要があります。CSS を使えば、テーブルを好きなようにデザインすることができます。例えば、このような、かなり「パンク」なデザインの表を作成しました。

```css hidden live-sample___punk-style
/* フォントインポート */
@import "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap";

/* 余白 */
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th {
  line-height: 1.5;
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

/* 書体 */
html {
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
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

/* graphics */
thead,
tfoot {
  background: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/leopardskin.jpg");
  color: white;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 0.1), rgb(0 0 0 / 0.5));
  border: 3px solid purple;
  text-shadow: 1px 1px 1px black;
}

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/noise.png");
}

table {
  background-color: #ff33cc;
}

/* caption */
caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666666;
  text-align: right;
  letter-spacing: 1px;
}
```

{{embedlivesample("punk-style", "", "500")}}

しかし、このデザインは少々派手すぎます。この記事では、[Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) で概説されている、表デザインの最善の手法を使用し、この表を修正していきましょう。

## 表のスタイル設定の手始め

表の例を一緒にスタイル設定してみましょう。

1. まず、[先ほど示した](#典型的な_html_の表)サンプルマークアップのローカルコピーを作成し、ローカルコンピューター上のある作業ディレクトリーに保存してください。
2. 次に、`style.css` という名前の新しいファイルを作成し、他のファイルと同じディレクトリーに保存します。
3. CSS を HTML にリンクするために、{{htmlelement("head")}} の中に次の HTML 行を配置します。

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

ブラウザーに HTML を読み込んで、デフォルトで表示を確認してください。

## フォントの更新

これは些細な点であり、厳密には表のスタイル設定とは関係ありませんが、パンクバンドに関する表では、デフォルトのフォントが少し堅苦しく感じられたためです。CSS の作成を始めるにあたり、まず次のルールを追加してください。

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

## 余白

まず最初に、表の余白を調整を行う必要があります。デフォルトの表のスタイル設定は、あまりにも窮屈です。これをやるには、`style.css` ファイルの最後に以下の CSS を追加してください。

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
}

th,
td {
  padding: 0.6em;
}
```

注意すべき最も重要な部分は次のとおりです。

- 表において {{cssxref("table-layout")}} の値を `fixed` に設定するのは一般的に良い事です。表の動作が多少予測しやすくなるためです。 通常、表の列は、含まれるコンテンツの量に応じてサイズが変更される傾向があり、これは奇妙な結果を生むことがあります。 `table-layout: fixed` を使うと、見出しの幅に応じてカラムのサイズを調整し、その内容を適切に処理することができます。Chris Coyier は、このテクニックを [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/) でさらに詳しく説明しています。

- fixed レイアウトに、{{cssxref("width")}} を `90%`、{{cssxref("margin")}} を `10px auto` に設定しました。この設定により、テーブルはビューポートの大部分を埋め、水平方向に中央揃えになります。

- {{cssxref("border-collapse")}} の `collapse` の値は、あらゆる表の装飾の取り組みにおける標準的なベストプラクティスです。 既定では、下の画像に示すように、表要素に境界線を設定すると、境界線の間に間隔が空くことになります。![既定では枠線間の余白が表示され、枠線が折りたたまれていない 2×2 の表](no-border-collapse.png) これはあまり見栄えがよくありません (あなたが望む外観かもしれませんが、誰にも分かりません)。 `border-collapse: collapse;` を設定すると、境界線は 1 つに折りたたまれ、次のようにずっと良く見えます。![border-collapse プロパティを collapseに設定した 2 x 2 表では、境界線が 1 つに折りたたまれます。](border-collapse.png)
- {{cssxref("padding")}} を {{htmlelement("th")}} 要素と {{htmlelement("td")}} 要素に設定しました。 これにより、データ項目に余裕を持たせることができ、表がもっと見やすくなります。

コードを保存し、ブラウザーを更新して結果を確認してください。

## 配置

次に、セル内のさまざまな形式のデータの配置について説明します。最善の手法として、テキストは左揃え、数値は右揃えにするのが一般的です。以下の CSS でそれを実現できますので、これで CSS ファイルの末尾に追加してください。

```css
tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
  width: 15%;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
  width: 35%;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}
```

ここでは、{{cssxref(":nth-child")}} 擬似クラスを使用しています。これは、要素の特定番号の子要素や、特定の順序にある要素を選択することができる有益なセレクターです。ここでは、<th> 要素内の特定の `<td>` 要素を選択するために使用しています。

同時に、表の行に特定の幅を設定している点にも注目してください。テキストが含まれる行は、数値が含まれる行よりもはるかに広く設定されています。これはよい考えです。コンテンツが多い行ほど、その内容をできるだけ1行に収めるために、より多くの空間が必要となるからです。コンテンツが少ない行は、データを表示させるためにそれほど多くの空間が必要ではありません。実際、余白を多く取ると、データが余白に埋もれてしまい、読みづらくなってしまいます。

同時に、データアイテムをセルの中央ではなく、上部に配置するようにする必要があります。これを行うには、{{cssxref("vertical-align")}} プロパティを使用しましょう。既存の `th, td` ルールを次のように更新してください。

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

ここでも、最新の CSS の変更の効果を見るには、保存してページを更新してください。

## 境界線の追加

表の見栄えはすでにかなり良くなりましたが、表の `<caption>`、データ、そして下部の合計行を視覚的に区別するために、境界線を追加しましょう。そのためには、CSS に以下のルールを追加してください。

```css
tfoot {
  border-top: 1px solid #999999;
}
```

次に、既存の `table` ルールを次のように更新してください。

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
```

保存して更新してください。これで、表がかなり読みやすくなっているはずです。

## 縞模様

**縞模様** (zebra stripes) を実装する方法を示すために別のセクションを捧げたいと思います — 表のさまざまなデータ行を解析して読みやすくするために、行の色を交互に並べます。 `style.css` ファイルの一番下に次の CSS を追加します。

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

先ほど、{{cssxref(":nth-child")}} セレクターが特定の子要素を選択するために使われていたのを見ました。 式を引数として指定することもできるので、一連の要素を選択します。 式 `2n+1` はすべての奇数番号の子（1、3、5 など）を選択し、式 `2n` はすべての偶数番号の子（2、4、6 など）を選択します。 上のコードでは `odd` と `even` のキーワードを使っていますが、それは前述の式とまったく同じです。 この場合、奇数行と偶数行に異なる（けばけばしい）色を付けます。

再度、結果を表示するには、保存してページを更新することをお忘れなく。

## キャプションのスタイル設定

表でやるべきことがもう一つあります。キャプションのスタイル設定です。 これを行うには、`style.css` ファイルの一番下に次のコードを追加します。

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

ここには特筆すべき点はありませんが、{{cssxref("caption-side")}} プロパティに `bottom` という値が指定されている点が例外です。これにより、キャプションは表の下部に位置指定されます。

## 最終的な表

完了した表のデザインは、次のようになるはずです。

```css hidden live-sample___best-practice-style
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
  width: 15%;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
  width: 35%;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}

tfoot {
  border-top: 1px solid #999999;
}

tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}

caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

{{embedlivesample("best-practice-style", "", "520")}}

## 表の装飾のちょっとした助言

先に進む前に、上に示した最も有用なポイントの簡単なリストをお送りします。

- 表のマークアップをできる限り単純にし、物事を柔軟に保ちます。
- {{cssxref("table-layout", "table-layout: fixed")}} を使用すると、 {{cssxref("width")}} を見出し ({{htmlelement("th")}}) に設定して列幅を簡単に設定でき、より予測可能な表レイアウトを作成できます。
- {{cssxref("border-collapse", "border-collapse: collapse")}} を使用して、表要素の境界線を互いに折りたたみ、見た目をよりきれいにして制御しやすくします。
- {{htmlelement("thead")}}、{{htmlelement("tbody")}}、{{htmlelement("tfoot")}} を使用して表を論理的なまとまりに分割し、CSS を適用するための特別な場所を提供することで、必要に応じてスタイルを重ねることが容易になります。
- 行を読みやすくするために、縞模様を使用します。
- {{cssxref("text-align")}} を使用して、{{htmlelement("th")}} と {{htmlelement("td")}} のテキストを揃えることで、きれいにして見やすくします。

## まとめ

表のスタイル設定も終わりに近づいてきたので、他にも何か時間を割くものが必要になってきました。次の記事では、 CSS をデバッグする方法を探ります。レイアウトが思うように見えない、プロパティが適用されないなどの問題を解決する方法です。これには、ブラウザーの開発者ツールを使用して、問題を解決する方法についての情報も含まれています。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}
