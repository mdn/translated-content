---
title: HTML 表のアクセシビリティ
short-title: 表のアクセシビリティ
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

前回は、視覚障碍者が HTML テーブルにアクセシビリティを持たせるための最も重要な機能の 1 つである、 {{htmlelement("th")}} 要素について取り上げました。今回は、その続きとして、 HTML テーブルのアクセシビリティ機能についてさらに詳しく見ていきます。具体的には、キャプション/要約、テーブルの見出し、本体、フッターの各節への行のグループ化、列と行の数などです。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>表に関連付けられたアクセシビリティの課題を理解する。<li>
          <li>表にキャプションを追加する。</li>
          <li>見出し、本体、フッターで構成されたより良い表。</li>
          <li>見出しとセルをさらに関連付ける、<code>scope</code>、<code>id</code>、<code>headers</code> 属性。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 要約: 視覚障碍者向けの表

データ表の使用方法について簡単に振り返ってみましょう。表は、データにすばやくアクセスでき、さまざまな値を調べることができる便利なツールです。例えば、下記の表を一瞥するだけで、 2016 年 8 月にヘントで販売された指輪の数がわかります。その情報を理解するには、この表のデータと列と行の見出しの間に視覚的な関連付けを行います。

<table>
  <caption>2016 年 8 月に販売された商品</caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">服</th>
      <th colspan="2" scope="colgroup">アクセサリー</th>
    </tr>
    <tr>
      <th scope="col">ズボン</th>
      <th scope="col">スカート</th>
      <th scope="col">ドレス</th>
      <th scope="col">ブレスレット</th>
      <th scope="col">指輪</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" scope="rowgroup">ベルギー</th>
      <th scope="row">アントワープ</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">ヘント</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">ブリュッセル</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">オランダ</th>
      <th scope="row">アムステルダム</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">ユトレヒト</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>

しかし、あなたが視覚的な結びつけができなかったら、どうですか？ その場合は、どのようにして上記のような表を読むことができますか？ 視覚障碍者は、ウェブページの情報を読み上げる[スクリーンリーダー](/ja/docs/Glossary/Screen_reader)をよく使用します。 平文を読んでいるときはこれは問題ありませんが、表を解釈することは視覚障碍者にとっては非常に困難な場合があります。 それでも、適切なマークアップを使用して、視覚的な関連付けをプログラムによる関連付けに置き換えることができます。

> [!NOTE]
> [WHO のデータ](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)によると、2017 年の視覚障碍者は約 253 百万人です。

### 列見出しと行見出しを使用する

スクリーンリーダーは全ての見出しを識別し、それらを使用してそれらの見出しとそれらが関連するセルとの間のプログラムによる関連付けを行います。 列見出しと行見出しの組み合わせにより、各セル内のデータが識別および解釈されるため、スクリーンリーダーのユーザーは、晴眼のユーザーの場合と同様に表を解釈できます。

前の記事ですでに見出しについて説明しました。 [\<th> 要素による見出しの追加](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#th_要素による見出しの追加)を参照してください。

## \<caption> を用いて表にキャプションを追加する

テーブルにキャプションを付けるには、{{htmlelement("caption")}} 要素内に配置し、それを {{htmlelement("table")}} 要素内に入れます。これは `<table>` 要素の開始タグすぐ下に置くべきです。

```html
<table>
  <caption>
    ジュラ紀の恐竜
  </caption>
  <!-- … -->
</table>
```

上記の簡単な例から推測できるように、キャプションには表の内容の説明が含まれています。 これは、ページに目を通して表が役に立つかどうかをすぐに把握したい全ての読者にとって便利ですが、特に盲目のユーザーにとっては便利です。 スクリーンリーダーに表の内容を知るためだけに多くのセルの内容を読み上げさせるのではなく、キャプションを頼りにして表をより詳細に読み取るかどうかを決定できます。

キャプションは `<table>` タグのすぐ下に配置します。

> [!NOTE]
> [`summary`](/ja/docs/Web/HTML/Reference/Elements/table#summary) 属性は、`<table>` 要素で説明を提供するためにも使用できます。 これはスクリーンリーダーによっても読み上げられます。しかし、`<caption>`要素を使用することをお勧めします。なぜなら、`summary` は非推奨であり、視覚ユーザーには読めないからです（ページに現れません）。

### 表のキャプションの練習

ここで、前回の記事で扱った学校の時間割を使用して、HTML の表にキャプションを追加する方法を試していただきます。

1. [`<colgroup>` と `<col>` による列のグループ化](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#colgroup_と_col_による列のグループ化)の最初の HTML ブロックを、自分のコンピューターの HTML ファイル、または [CodePen](https://codepen.io/) や [JSBin](https://jsbin.com/) のようなオンラインエディターにコピーしてください。
2. 表に適切なキャプションを追加してください。
3. コードを保存して、どのようになるか確認してください。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な HTML は、次のようになるはずです。

```html
<table>
  <caption>
    St. Winnifred's weekly language lesson timetable
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>

  <!-- 残りのコードは簡略化のため省略 -->
</table>
```

</details>

## \<thead>、\<tbody>、\<tfoot> を用いて構造を追加

表の構造がもう少し複雑になったら、それらにもっと構造的な定義を与えることは有用です。 これを行う明確な方法の 1 つは、{{htmlelement("thead")}}、{{htmlelement("tbody")}}、{{htmlelement("tfoot")}} を使用することです。 これにより、表のヘッダー、フッター、および本体のセクションをマークアップできます。

これらの要素によって表がスクリーンリーダーのユーザーにアクセスしやすくなることはなく、また視覚的な機能強化が生じることもありません。 ただし、これらはスタイル設定やレイアウトに非常に役立ちます — CSS を表に追加するための便利なフックとして機能します。 いくつか興味深い例を挙げると、長い表の場合、全ての印刷ページで表のヘッダーとフッターを繰り返すようにしたり、表の本体を単一ページに表示して、上下にスクロールして内容を表示したりすることができます。

使用するためには、以下の順番で記載してください。

- `<thead>` 要素は、表のヘッダー部分を囲む必要があります — これは通常、列見出しを含む最初の行になりますが、必ずしもそうとは限りません。 {{htmlelement("col")}} 要素や {{htmlelement("colgroup")}} 要素を使用している場合、表のヘッダーはそれらのすぐ下にくるはずです。
- `<tbody>` 要素は、表のヘッダーまたはフッターではない表のコンテンツの他の部分を囲む必要があり、`<thead>` の後に来るべきです。
- `<tfoot>` 要素は、表のフッター部分を囲む必要があります。これは、例えば、前の行の項目が合計された最終行になります。`<tfoot>` は `<tbody>` の後に来るべきです。

> [!NOTE]
> `<tbody>` はコードで指定していない場合にも、常に暗黙的に全ての表に含まれています。 これを確認するには、`<tbody>` を含まない以前の例の 1 つを開き、[ブラウザー開発者ツール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)の HTML コードを調べてみてください。ブラウザーによってこのタグが追加されたことがわかります。なぜわざわざそれを含む必要があるのか疑問に思うことがあります。含めるべきです。それによってテーブルの構造やスタイル設定をより細かく制御できるからです。

### 支出記録表への構造の追加

これらの新しい要素を実践に移しましょう。

1. まず最初に、`spending-record.html` という名前の新しい HTML ファイルを作成し、次の HTML を `<body>` 内に貼り付けてください。

   ```html
   <h1>My spending record</h1>

   <table>
     <caption>
       How I chose to spend my money
     </caption>
     <tr>
       <th>Purchase</th>
       <th>Location</th>
       <th>Date</th>
       <th>Evaluation</th>
       <th>Cost (€)</th>
     </tr>
     <tr>
       <td>Haircut</td>
       <td>Hairdresser</td>
       <td>12/09</td>
       <td>Great idea</td>
       <td>30</td>
     </tr>
     <tr>
       <td>Lasagna</td>
       <td>Restaurant</td>
       <td>12/09</td>
       <td>Regrets</td>
       <td>18</td>
     </tr>
     <tr>
       <td>Shoes</td>
       <td>Shoe shop</td>
       <td>13/09</td>
       <td>Big regrets</td>
       <td>65</td>
     </tr>
     <tr>
       <td>Toothpaste</td>
       <td>Supermarket</td>
       <td>13/09</td>
       <td>Good</td>
       <td>5</td>
     </tr>
     <tr>
       <td>SUM</td>
       <td>118</td>
     </tr>
   </table>
   ```

2. 次に、HTML ファイルと同じディレクトリーに `minimal-table.css` という CSS ファイルを作成し、以下のコンテンツを入力します。

   ```css live-sample___finished-table-structure
   html {
     font-family: sans-serif;
   }

   table {
     border-collapse: collapse;
     border: 2px solid rgb(200 200 200);
     letter-spacing: 1px;
     font-size: 0.8rem;
   }

   td,
   th {
     border: 1px solid rgb(190 190 190);
     padding: 10px 20px;
   }

   th {
     background-color: rgb(235 235 235);
   }

   td {
     text-align: center;
   }

   tr:nth-child(even) td {
     background-color: rgb(250 250 250);
   }

   tr:nth-child(odd) td {
     background-color: rgb(245 245 245);
   }

   caption {
     padding: 10px;
   }
   ```

3. `<link>` 要素を HTML の `<head>` 内に追加して、CSS を HTML に適用します（詳細については [HTML への CSS と JavaScript の適用](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#applying_css_and_javascript_to_html)を参照してください）。

4. 明白なヘッダー行を `<thead>` 要素内に、 "SUM" 行を `<tfoot>` 要素内に、そして残りの内容を `<tbody>` 要素内に配置します。
5. 次に、[`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を追加して "SUM" セルを最初の 4 列にまたがるようにします。そのため、実際の数は "Cost" 列の下部に表示されます。
6. 表に単純な追加スタイルを設定してみましょう。これにより、CSS を適用する際にこれらの要素がどれほど有益かがわかります。CSS ファイルに次の内容を追加してください。

   ```css live-sample___finished-table-structure
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

   > [!NOTE]
   > 現時点で CSS を完全に理解する必要はありません。CSS モジュールを学ぶ過程で、さらに詳しく学んでいきます。（[CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)は始めるのに良い場所です。 [表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)に関する具体的な記事もあります）。

7. 保存して更新し、結果を確認します。 `<tbody>` 要素と `<tfoot>` 要素が適切に配置されていない場合は、同じスタイルを適用するためにはるかに複雑なセレクター/ルールを記述する必要があります。

最終的な表は、次のようになるでしょう。

{{embedlivesample("finished-table-structure", "100%", "300")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な HTML は、次のようになるはずです。

```html live-sample___finished-table-structure
<table>
  <caption>
    How I chose to spend my money
  </caption>
  <thead>
    <tr>
      <th>Purchase</th>
      <th>Location</th>
      <th>Date</th>
      <th>Evaluation</th>
      <th>Cost (€)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Haircut</td>
      <td>Hairdresser</td>
      <td>12/09</td>
      <td>Great idea</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Lasagna</td>
      <td>Restaurant</td>
      <td>12/09</td>
      <td>Regrets</td>
      <td>18</td>
    </tr>
    <tr>
      <td>Shoes</td>
      <td>Shoe shop</td>
      <td>13/09</td>
      <td>Big regrets</td>
      <td>65</td>
    </tr>
    <tr>
      <td>Toothpaste</td>
      <td>Supermarket</td>
      <td>13/09</td>
      <td>Good</td>
      <td>5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">SUM</td>
      <td>118</td>
    </tr>
  </tfoot>
</table>
```

</details>

## `scope` 属性

[`scope`](/ja/docs/Web/HTML/Reference/Elements/th#scope) 属性は `<th>` 要素に追加して、見出しがどのセルの見出しであるかをスクリーンリーダーに正確に伝えることができます。例えば、それが入っているのは行の見出しなのか、それとも列の見出しなのか？ 先ほどの支出記録の例を振り返ると、次のように列見出しを列見出しとして明確に定義できます。

```html
<thead>
  <tr>
    <th scope="col">Purchase</th>
    <th scope="col">Location</th>
    <th scope="col">Date</th>
    <th scope="col">Evaluation</th>
    <th scope="col">Cost (€)</th>
  </tr>
</thead>
```

そして各行は次のように定義された見出しを持つことができます（列見出しと同様に行見出しを追加した場合）。

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

スクリーンリーダーは、このように構成されたマークアップを認識し、例えば、ユーザーが列全体または行全体を一度に読み上げることを可能にします。

`scope` には、さらに 2 つの可能な値、`colgroup` と `rowgroup` があります。 これらは、複数列または複数行の上に位置する見出しに使用されます。 この節の最初にある「2016 年 8 月に販売された商品」の表を見ると、「服」のセルが「ズボン」、「スカート」、「ドレス」のセルの上に位置することがわかります。 これらのセルは全て見出し(`<th>`)としてマークアップするべきで、「服」はそれらの上に位置し、他の 3 つの小見出しを定義する見出しです。 従って、「服」には `scope="colgroup"` の属性を設定するべきですが、それ以外は `scope="col"` の属性を設定します。

```html
<thead>
  <tr>
    <th colspan="3" scope="colgroup">服</th>
  </tr>
  <tr>
    <th scope="col">ズボン</th>
    <th scope="col">スカート</th>
    <th scope="col">ドレス</th>
  </tr>
</thead>
```

グループ化された複数の行の見出しも同様です。今度は「2016 年 8 月に販売された商品」の表を、「アムステルダム」と 「ユトレヒト」 の見出し (`<th>`) を持つ行に注目して見てみましょう。「オランダ」の見出しも `<th>` 要素としてマークアップされ、他の2種類の小見出しの見出しとして、両方の行にまたがっていることに気づくでしょう。したがって、`scope="rowgroup"` をこの見出しセルに指定して、スクリーンリーダーが正しい関連付けを作成するようにしてください。

```html
<tr>
  <th rowspan="2" scope="rowgroup">オランダ</th>
  <th scope="row">アムステルダム</th>
  <td>89</td>
  <td>34</td>
  <td>69</td>
</tr>
<tr>
  <th scope="row">ユトレヒト</th>
  <td>80</td>
  <td>12</td>
  <td>43</td>
</tr>
```

## `id` 属性と `headers` 属性

`scope` 属性を使用する代わりに、[`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性と [`headers`](/ja/docs/Web/HTML/Reference/Elements/td#headers) 属性を使用して、データセルと見出しセルの間の関連付けを作成することもできます。

`<th>` 要素は、データセル (`<td>`) の見出しとして、あるいはより複雑な表では他の見出しセル (`<th>`) の見出しとして提供することができます。これにより、複数の見出しを説明する階層的またはグループ化された見出しを作成することができます。

`headers` 属性は、セル（`<td>` または `<th>`）を 1 つ以上の見出しセルに関連付けるために使用されます。空白区切りの空白区切りの{{Glossary("string", "文字列")}}の順不同リストを指定します。文字列の順序は関係ありません。それぞれの文字列は、セルが関連付けられた `<th>` 要素の一意の `id` と一致する必要があります。

この方法では、HTML 表のそれぞれのセルの位置を、スプレッドシートのように、そのセルが属する列と行の見出しに基づいてより明確に定義します。これを適切に機能させるには、表に列見出しと行見出しの両方を記載する必要があります。

「2016 年 8 月に販売された商品」の例の該当部分を見て、`id` 属性と `headers` 属性の使用方法を確認しましょう。

1. 表のそれぞれの `<th>` 要素に固有の `id` を追加します。
2. 見出しセルについて：小見出しとして機能するそれぞれの `<th>` 要素に `headers` 属性を追加してください。つまり、その上に別の見出しがある見出しセルです。値は上位の見出しの `id` です。この例では、列見出しには `"clothes"`、行見出しには `"belgium"` となります。
3. データセルについて：`headers` 属性をそれぞれの `<td>` 要素に追加し、関連付けられた `<th>` 要素の `id` を空白区切りでリストとして指定します。スプレッドシートと同様の手順で進められます。データセルを見つけ、それを記述する行見出しと列見出しを特定します。指定する `id` の順序は重要ではありませんが、一貫性を保つことでコードの整理整頓と可読性が改善します。

```html
<thead>
  <tr>
    <th></th>
    <th></th>
    <th id="clothes" colspan="3">服</th>
  </tr>
  <tr>
    <th></th>
    <th></th>
    <th id="trousers" headers="clothes">ズボン</th>
    <th id="skirts" headers="clothes">スカート</th>
    <th id="dresses" headers="clothes">ドレス</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="belgium" rowspan="3">ベルギー</th>
    <th id="antwerp" headers="belgium">アントワープ</th>
    <td headers="belgium antwerp clothes trousers">56</td>
    <td headers="belgium antwerp clothes skirts">22</td>
    <td headers="belgium antwerp clothes dresses">43</td>
  </tr>
  <tr>
    <th id="ghent" headers="belgium">ヘント</th>
    <td headers="belgium ghent clothes trousers">41</td>
    <td headers="belgium ghent clothes skirts">17</td>
    <td headers="belgium ghent clothes dresses">35</td>
  </tr>
</tbody>
```

この例では次のことを扱います。

- `"ベルギー"` の `<th>` は、`rowspan="2"` を使用して `"アントワープ"` と `"ヘント"` の両方をまたがらせます。
- 都市見出しセル（`"アントワープ"` および `『Ghent』`）は、`"ヘント"` 属性を使用して `"belgium"` を参照し、ベルギーグループに属することを示しています。
- それぞれの `<td>` には、 `headers` 属性に国 (`belgium`)、都市 (`antwerp` または `ghent`)、グループ (`clothes`)、および具体的な衣料品 (`trousers`、`skirts`、`dresses`) が記載されています。

> [!NOTE]
> この方法では、見出しとデータセルの間に非常に正確な関連付けが作成されますが、マークアップがはるかに**多く**なり、エラーの余地がありません。通常はほとんどの表では `scope` のアプローチで十分です。

### scope と headers で遊ぶ

この最後の演習では、前述のサンプル表に対してスコープと見出しを使用する練習をしていただきます。

1. まず [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) のローカルコピーを新しいディレクトリーに作成してください。
2. この表をよりアクセシブルにするために適切な `scope` 属性を追加してみてください。
3. 開始用ファイルの別のコピーをもう一つのローカルディレクトリに作成してください。
4. 今度は、`id` 属性と `headers` 属性を使用して表をアクセシブルにします。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な HTML は、次のようになるはずです。

```html
<table>
  <caption>
    Items Sold August 2016
  </caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Clothes</th>
      <th colspan="2" scope="colgroup">Accessories</th>
    </tr>
    <tr>
      <th scope="col">Trousers</th>
      <th scope="col">Skirts</th>
      <th scope="col">Dresses</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Rings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" scope="rowgroup">Belgium</th>
      <th scope="row">Antwerp</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Ghent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brussels</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">The Netherlands</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>
```

2 つ目は次のようになります。

```html
<table>
  <caption>
    Items Sold August 2016
  </caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" id="clothes">Clothes</th>
      <th colspan="2" id="accessories">Accessories</th>
    </tr>
    <tr>
      <th id="trousers" headers="clothes">Trousers</th>
      <th id="skirts" headers="clothes">Skirts</th>
      <th id="dresses" headers="clothes">Dresses</th>
      <th id="bracelets" headers="accessories">Bracelets</th>
      <th id="rings" headers="accessories">Rings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" id="belgium">Belgium</th>
      <th id="antwerp" headers="belgium">Antwerp</th>
      <td headers="antwerp belgium clothes trousers">56</td>
      <td headers="antwerp belgium clothes skirts">22</td>
      <td headers="antwerp belgium clothes dresses">43</td>
      <td headers="antwerp belgium accessories bracelets">72</td>
      <td headers="antwerp belgium accessories rings">23</td>
    </tr>
    <tr>
      <th id="ghent" headers="belgium">Ghent</th>
      <td headers="ghent belgium clothes trousers">46</td>
      <td headers="ghent belgium clothes skirts">18</td>
      <td headers="ghent belgium clothes dresses">50</td>
      <td headers="ghent belgium accessories bracelets">61</td>
      <td headers="ghent belgium accessories rings">15</td>
    </tr>
    <tr>
      <th id="brussels" headers="belgium">Brussels</th>
      <td headers="brussels belgium clothes trousers">51</td>
      <td headers="brussels belgium clothes skirts">27</td>
      <td headers="brussels belgium clothes dresses">38</td>
      <td headers="brussels belgium accessories bracelets">69</td>
      <td headers="brussels belgium accessories rings">28</td>
    </tr>
    <tr>
      <th rowspan="2" id="netherlands">The Netherlands</th>
      <th id="amsterdam" headers="netherlands">Amsterdam</th>
      <td headers="amsterdam netherlands clothes trousers">89</td>
      <td headers="amsterdam netherlands clothes skirts">34</td>
      <td headers="amsterdam netherlands clothes dresses">69</td>
      <td headers="amsterdam netherlands accessories bracelets">85</td>
      <td headers="amsterdam netherlands accessories rings">38</td>
    </tr>
    <tr>
      <th id="utrecht" headers="netherlands">Utrecht</th>
      <td headers="utrecht netherlands clothes trousers">80</td>
      <td headers="utrecht netherlands clothes skirts">12</td>
      <td headers="utrecht netherlands clothes dresses">43</td>
      <td headers="utrecht netherlands accessories bracelets">36</td>
      <td headers="utrecht netherlands accessories rings">19</td>
    </tr>
  </tbody>
</table>
```

最終的な例は GitHub で確認することもこともできます。

- 最初の例は [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) で確認できます（[ライブ実行でも確認できます](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)）。
- 2 つ目の例は [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) で確認できます（[ライブ実行でも確認できます](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)）。

</details>

## まとめ

HTML の表について他にもいくつか学ぶべきことはありますが、これで当面必要なことはすべてです。次に、指定された HTML 表の課題で自己検査をしてみましょう。楽しんでください。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
