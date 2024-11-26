---
title: HTML 表の高度な機能とアクセシビリティ
slug: Learn/HTML/Tables/Advanced
l10n:
  sourceCommit: 8badc6cef8a77fbf1ba8054555097565d0a7dbc9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

このモジュールの 2 番目の記事では、HTML テーブルのより高度な機能 (キャプション/要約、行をテーブルのヘッダー、本文、フッターのセクションにグループ化するなど) や、視覚障碍のあるユーザーのためのテーブルのアクセシビリティについて調べます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基礎（
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >を参照）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        表のより高度な機能やアクセシビリティについて学びます。
      </td>
    </tr>
  </tbody>
</table>

## \<caption> を用いて表にキャプションを追加する

テーブルにキャプションを付けるには、{{htmlelement("caption")}} 要素内に配置し、それを {{htmlelement("table")}} 要素内に入れます。これは `<table>` 要素の開始タグすぐ下に置くべきです。

```html
<table>
  <caption>
    ジュラ紀の恐竜
  </caption>

  …
</table>
```

上記の簡単な例から推測できるように、キャプションには表の内容の説明が含まれています。 これは、ページに目を通して表が役に立つかどうかをすぐに把握したい全ての読者にとって便利ですが、特に盲目のユーザーにとっては便利です。 スクリーンリーダーに表の内容を知るためだけに多くのセルの内容を読み上げさせるのではなく、キャプションを頼りにして表をより詳細に読み取るかどうかを決定できます。

キャプションは `<table>` タグのすぐ下に配置します。

> **メモ:** [`summary`](/ja/docs/Web/HTML/Element/table#summary) 属性は、`<table>` 要素で説明を提供するためにも使用できます。 これはスクリーンリーダーによっても読み上げられます。しかし、`<caption>`要素を使用することをお勧めします。なぜなら、`summary` は非推奨であり、視覚ユーザーには読めないからです（ページに現れません）。

### アクティブラーニング: キャプションの追加

前の記事で最初に出会った例を再考しながら、これを試してみましょう。

1. [HTML 表の基本](/ja/docs/Learn/HTML/Tables/Basics#アクティブラーニング_colgroup_と_col)の最後から語学教師の学校の時間割を開くか、または [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) ファイルのローカルコピーを作成してください。
2. 表に適切なキャプションを追加します。
3. コードを保存してブラウザーで開くと、コードがどのように見えるかがわかります。

> [!NOTE]
> GitHub で私たちのバージョンを見ることができます。 [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) を見てください（[ライブもご覧ください](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)）。

## \<thead>、\<tbody>、\<tfoot> を用いて構造を追加

表の構造がもう少し複雑になったら、それらにもっと構造的な定義を与えることは有用です。 これを行う明確な方法の 1 つは、{{htmlelement("thead")}}、{{htmlelement("tbody")}}、{{htmlelement("tfoot")}} を使用することです。 これにより、表のヘッダー、フッター、および本体のセクションをマークアップできます。

これらの要素によって表がスクリーンリーダーのユーザーにアクセスしやすくなることはなく、また視覚的な機能強化が生じることもありません。 ただし、これらはスタイリングやレイアウトに非常に役立ちます — CSS を表に追加するための便利なフックとして機能します。 いくつか興味深い例を挙げると、長い表の場合、全ての印刷ページで表のヘッダーとフッターを繰り返すようにしたり、表の本体を単一ページに表示して、上下にスクロールして内容を表示したりすることができます。

使用するためには、以下の順番で記載してください。

- `<thead>` 要素は、表のヘッダー部分を囲む必要があります — これは通常、列見出しを含む最初の行になりますが、必ずしもそうとは限りません。 {{htmlelement("col")}} 要素や {{htmlelement("colgroup")}} 要素を使用している場合、表のヘッダーはそれらのすぐ下にくるはずです。
- `<tbody>` 要素は、表のヘッダーまたはフッターではない表のコンテンツの他の部分を囲む必要があります。
- `<tfoot>` 要素は、表のフッター部分を囲む必要があります。これは、例えば、前の行の項目が合計された最終行になります。

> **メモ:** `<tbody>` は常に全ての表に含まれていて、コードで指定しない場合にも暗黙的に含まれます。 これを確認するには、`<tbody>` を含まない以前の例の 1 つを開き、[ブラウザー開発者ツール](/ja/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)の HTML コードを調べます — ブラウザーによってこのタグが追加されたことがわかります。 なぜそれを含まないのかと疑問に思うかもしれません — すべき、表の構造とスタイリングがより細かく制御できるためです。

### アクティブラーニング: 表構造の追加

これらの新しい要素を実行してみましょう。

1. まず、新しいフォルダーに [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) のローカルコピーを作成します。
2. ブラウザーでそれを開いてみてください。あなたはそれが問題ないように見えますが、それは改善されることになるかもしれません。 支出額の合計を含む "SUM" 行は間違った場所にあるように思われ、コードから抜けている細部がいくつかあります。
3. 明白なヘッダー行を `<thead>` 要素内に、 "SUM" 行を `<tfoot>` 要素内に、そして残りの内容を `<tbody>` 要素内に配置します。
4. 保存して更新すると、`<tfoot>` 要素を追加すると "SUM" 行が表の一番下に移動していることがわかります。
5. 次に、[`colspan`](/ja/docs/Web/HTML/Element/td#colspan) 属性を追加して "SUM" セルを最初の 4 列にまたがるようにします。そのため、実際の数は "Cost" 列の下部に表示されます。
6. これらの要素が CSS を適用するためにどれほど有用であるかのアイデアをあなたに与えるために、表にいくつかの簡単な追加のスタイリングを追加しましょう。 HTML 文書の `<head>` の中には、空の {{htmlelement("style")}} 要素があります。 この要素内に、次の CSS コード行を追加します。

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. 保存して更新し、結果を確認します。 `<tbody>` 要素と `<tfoot>` 要素が適切に配置されていない場合は、同じスタイルを適用するためにはるかに複雑なセレクター/規則を記述する必要があります。

> [!NOTE]
> 現時点で私たちはあなたが CSS を完全に理解しているとは思っていません。 あなたが私たちの CSS モジュールを一通り学ぶとき、これについてより多くを学ぶでしょう（[CSS 入門](/ja/docs/Learn/CSS/First_steps)は始めるのに良い場所です。 [スタイル設定された表](/ja/docs/Learn/CSS/Building_blocks/Styling_tables)に関する具体的な記事もあります）。

最終的な表は、次のようになるでしょう。

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> GitHub で [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) として見ることもできます。

## ネストした表

`<table>` 要素を含む完全な構造を含める限り、表を別の表の中にネストすることは可能です。 そのマークアップがスクリーンリーダーのユーザーにとって混乱を招きやすく、アクセスしにくくなるため、これは一般的にはあまり推奨されません。 多くの場合、既存の表に追加のセル/行/列を挿入することもできます。 ただし、他のソースからコンテンツを簡単にインポートしたい場合などは、時々必要になります。

次のマークアップは、単純なネストした表を示しています。

```html
<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>
```

その出力は次のようになります。

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

{{EmbedLiveSample("Nesting_Tables")}}

## 視覚障碍者向けの表

データ表の使用方法について簡単に説明しましょう。 表は、データにすばやくアクセスし、さまざまな値を検索できるようにするための便利なツールです。例えば、昨年 8 月に Gent で販売された指輪 (Rings) の数を確認するには、下の表を見てください。その情報を理解するために、この表内のデータとその列ヘッダーや行ヘッダーとの間の視覚的な関連付けを行います。

<table>
  <caption>Items Sold August 2016</caption>
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
      <th scope="row">Gent</th>
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

しかし、あなたがそれらの視覚的な関連付けをすることができないならば、どうですか？ では、どのようにして上記のような表を読むことができますか？ 視覚障碍者は、ウェブページの情報を読み上げるスクリーンリーダーをよく使用します。 平文を読んでいるときはこれは問題ありませんが、表を解釈することは視覚障碍者にとっては非常に困難な場合があります。 それでも、適切なマークアップを使用して、視覚的な関連付けをプログラムによる関連付けに置き換えることができます。

> **メモ:** [WHO のデータ](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)によると、2017 年の視覚障碍者は約 253 百万人です。

記事のこの節では、可能な限りアクセス可能な表にするためのその他の手法について説明します。

### 列ヘッダーと行ヘッダーを使用する

スクリーンリーダーは全てのヘッダーを識別し、それらを使用してそれらのヘッダーとそれらが関連するセルとの間のプログラムによる関連付けを行います。 列ヘッダーと行ヘッダーの組み合わせにより、各セル内のデータが識別および解釈されるため、スクリーンリーダーのユーザーは、晴眼のユーザーの場合と同様に表を解釈できます。

前の記事ですでにヘッダーについて説明しました。 [\<th> 要素によるヘッダーの追加](/ja/docs/Learn/HTML/Tables/Basics#th_要素による見出しの追加)を参照してください。

### scope 属性

この記事の新しい話題は [`scope`](/ja/docs/Web/HTML/Element/th#scope) 属性です。 これは `<th>` 要素に追加して、ヘッダーがどのセルのヘッダーであるかをスクリーンリーダーに正確に伝えることができます — 例えば、それが入っているのは行のヘッダーなのか、それとも列のヘッダーなのか？ 先ほどの支出記録の例を振り返ると、次のように列ヘッダーを列ヘッダーとして明確に定義できます。

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

そして各行は次のように定義されたヘッダーを持つことができます(列ヘッダーと同様に行ヘッダーを追加した場合)。

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

`scope` には、さらに 2 つの可能な値、`colgroup` と `rowgroup` があります。 これらは、複数列または複数行の上に位置する見出しに使用されます。 このセクションの最初にある "Items Sold August 2016" の表を見ると、"Clothes" セルが "Trousers"、"Skirts"、"Dresses" のセルの上に位置することがわかります。 これらのセルは全てヘッダー(`<th>`)としてマークアップするべきで、 "Clothes" はそれらの上に位置し、他の 3 つの小見出しを定義する見出しです。 従って、"Clothes" は `scope="colgroup"` の属性を得るべきですが、それ以外は `scope="col"` の属性を得ます。

```html
<thead>
  <tr>
    <th colspan="3" scope="colgroup">Clothes</th>
  </tr>
  <tr>
    <th scope="col">Trousers</th>
    <th scope="col">Skirts</th>
    <th scope="col">Dresses</th>
  </tr>
</thead>
```

グループ化された複数の行のヘッダーも同様です。今度は "Items Sold August 2016" の表を、"Amsterdam" と "Utrecht" のヘッダー (`<th>`) を持つ行に注目して見てみましょう。 "The Netherlands" のヘッダーも `<th>` 要素としてマークアップされ、他の2種類の小見出しの見出しとして、両方の行にまたがっていることに気づくでしょう。したがって、`scope="rowgroup"` をこの見出しセルに指定して、スクリーンリーダーが正しい関連付けを作成するようにしてください。

```html
<tr>
  <th rowspan="2" scope="rowgroup">The Netherlands</th>
  <th scope="row">Amsterdam</th>
  <td>89</td>
  <td>34</td>
  <td>69</td>
</tr>
<tr>
  <th scope="row">Utrecht</th>
  <td>80</td>
  <td>12</td>
  <td>43</td>
</tr>
```

### id 属性と headers 属性

`scope` 属性を使用する代わりに、[`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性と [`headers`](/ja/docs/Web/HTML/Element/td#headers) 属性を使用して、ヘッダーとセル間の関連付けを作成することもできます。

`headers` 属性はスペース区切りの{{Glossary("string", "文字列")}}の順不同リストを取ります。それぞれが、データセル（`<td>` 要素）または別のヘッダーセル（`<th>` 要素）の見出しを提供する `<th>` 要素の一意の `id` に対応します。

これは HTML の表において、表の中の各セルの位置を、表計算ソフトのように、所属する行と列のそれぞれのヘッダーによって定義します。これがうまく動作するためには、表の列と行の両方のヘッダーがどうしても必要です。

"Items Sold August 2016" の例に戻ると、以下のように `id` 属性と `headers` 属性を使用することができます：

1. 表のそれぞれの `<th>` 要素に固有の `id` を追加します。
2. `headers` 属性をそれぞれの小見出しとして機能する、つまり上にヘッダー要素がある、それぞれの `<th>` 要素に追加します。値は最上部に位置し、小見出しを定義する見出しの `id` で、例えばこの例では列のヘッダーは `"clothes"`、行のヘッダーは `"belgium"` となります。
3. それぞれの `<td>` 要素に `headers` 属性を追加し、そこに関連する `<th>` 要素の `id` のスペース区切りのリストの形で追加します。スプレッドシートと同じように作業を進めることができます。データセルを探し、対応する行と列の見出しを探します。指定する `id` の順番は重要ではありませんが、整理しておくために一貫性を持たせておく必要があります。

```html
<thead>
  <tr>
    <th id="clothes" colspan="3">Clothes</th>
  </tr>
  <tr>
    <th id="trousers" headers="clothes">Trousers</th>
    <th id="skirts" headers="clothes">Skirts</th>
    <th id="dresses" headers="clothes">Dresses</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="belgium" rowspan="3">Belgium</th>
    <th id="antwerp" headers="belgium">Antwerp</th>
    <td headers="antwerp belgium clothes trousers">56</td>
    <td headers="antwerp belgium clothes skirts">22</td>
    <td headers="antwerp belgium clothes dresses">43</td>
  </tr>
</tbody>
```

> [!NOTE]
> この方法では、ヘッダーとデータセルの間に非常に正確な関連付けが作成されますが、マークアップがはるかに多くなり、エラーの余地がありません。 `scope` アプローチは通常ほとんどの表に十分です。

### アクティブラーニング: scope と headers で遊ぶ

1. この最後の演習では、まず [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) のローカルコピーを新しいディレクトリーに作成してください。
2. この表をより適切にするために適切な `scope` 属性を追加してみてください。
3. 最後に、最初のファイルの別のコピーを作成して、今度は、`id` 属性と `headers` 属性を使用して表にアクセスしやすくします。

> [!NOTE]
> 完成した例と照らし合わせて作業内容を確認できます — [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html)([ライブもご覧ください](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html))および [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html)([ライブもご覧ください](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html))。

## まとめ

HTML の表について学ぶことは他にもいくつかありますが、知っておく必要があるものはこれですべてです。次に、[HTML 表の評価試験](/ja/docs/Learn/HTML/Tables/Structuring_planet_data)で自分自身を試してみることができます。楽しんでください！

すでに CSS を学んでいて、評価試験がうまくいったなら、移動して HTML 表のスタイル設定について学びましょう。[表のスタイル設定](/ja/docs/Learn/CSS/Building_blocks/Styling_tables)を参照してください。

CSS の学習を始めたい場合は、[CSS 学習領域](/ja/docs/Learn/CSS)を調べてください。

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
