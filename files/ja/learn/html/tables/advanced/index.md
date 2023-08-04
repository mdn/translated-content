---
title: HTML 表の高度な機能とアクセシビリティ
slug: Learn/HTML/Tables/Advanced
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

このモジュールの 2 番目の記事では、HTML テーブルのより高度な機能 (キャプション/要約、行をテーブルのヘッダー、本文、フッターのセクションにグループ化するなど) や、視覚障碍のあるユーザのためのテーブルのアクセシビリティについて調べます。

| 前提知識: | HTML の基礎 ([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を参照)。 |
| --------- | --------------------------------------------------------------------------- |
| 目標:     | 表のより高度な機能やアクセシビリティについて学ぶ                            |

## \<caption> を用いて表にキャプションを追加する

テーブルにキャプションを付けるには、{{htmlelement("caption")}} 要素内に配置し、それを {{htmlelement("table")}} 要素内にネストします。これは `<table>` 要素の開始タグすぐ下に置くべきです。

```html
<table>
  <caption>
    ジュラ紀の恐竜
  </caption>

  ...
</table>
```

上記の簡単な例から推測できるように、キャプションには表の内容の説明が含まれています。 これは、ページに目を通して表が役に立つかどうかをすぐに把握したい全ての読者にとって便利ですが、特に盲目のユーザにとっては便利です。 スクリーンリーダーに表の内容を知るためだけに多くのセルの内容を読み上げさせるのではなく、キャプションを頼りにして表をより詳細に読み取るかどうかを決定できます。

キャプションは `<table>` タグのすぐ下に配置します。

> **メモ:** [`summary`](/ja/docs/Web/HTML/Element/table#summary) 属性は、`<table>` 要素で説明を提供するためにも使用できます。 これはスクリーンリーダーによっても読み上げられます。 ただし、`summary` は HTML5 仕様では{{glossary("deprecated","推奨されておらず")}}、(ページには表示されないので)晴眼のユーザには読むことができないため、代わりに `<caption>` 要素を使用することをお勧めします。

### アクティブラーニング: キャプションの追加

前の記事で最初に出会った例を再考しながら、これを試してみましょう。

1. [HTML 表の基本](/ja/docs/Learn/HTML/Tables/Basics#Active_learning_colgroup_and_col)の最後から語学教師の学校の時間割を開くか、または [timetable-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html) ファイルのローカルコピーを作成してください。
2. 表に適切なキャプションを追加します。
3. コードを保存してブラウザーで開くと、コードがどのように見えるかがわかります。

> **メモ:** GitHub で私たちのバージョンを見つけることができます — [timetable-caption.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/timetable-caption.html) を見てください([ライブもご覧ください](http://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html))。

## \<thead>、\<tfoot>、\<tbody> を用いて構造を追加する

表の構造がもう少し複雑になったら、それらにもっと構造的な定義を与えることは有用です。 これを行う明確な方法の 1 つは、{{htmlelement("thead")}}、{{htmlelement("tfoot")}}、および {{htmlelement("tbody")}} を使用することです。 これにより、表のヘッダー、フッター、および本体のセクションをマークアップできます。

これらの要素によって表がスクリーンリーダーのユーザにアクセスしやすくなることはなく、また視覚的な機能強化が生じることもありません。 ただし、これらはスタイリングやレイアウトに非常に役立ちます — CSS を表に追加するための便利なフックとして機能します。 いくつか興味深い例を挙げると、長い表の場合、全ての印刷ページで表のヘッダーとフッターを繰り返すようにしたり、表の本体を単一ページに表示して、上下にスクロールして内容を表示したりすることができます。

それらを使用するには、

- `<thead>` 要素は、表のヘッダー部分をラップする必要があります — これは通常、列見出しを含む最初の行になりますが、必ずしもそうとは限りません。 {{htmlelement("col")}} 要素や {{htmlelement("colgroup")}} 要素を使用している場合、表のヘッダーはそれらのすぐ下にくるはずです。
- `<tfoot>` 要素は、表のフッター部分をラップする必要があります — これは、例えば、前の行の項目が合計された最終行になります。 表のフッターは、期待通りに表の一番下に配置することも、表のヘッダーのすぐ下に配置することもできます(ブラウザーはそれを表の一番下に表示します)。
- `<tbody>` 要素は、表のヘッダーまたはフッターではない表のコンテンツの他の部分をラップする必要があります。 どのように構成することにしたかに応じて、表のヘッダーの下に出現するか、時にはフッターの下に出現することがあります (上記の注を参照)。

> **メモ:** `<tbody>` は常に全ての表に含まれていて、コードで指定しない場合は暗黙的に含まれます。 これを確認するには、`<tbody>` を含まない以前の例の 1 つを開き、[ブラウザー開発者ツール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)の HTML コードを調べます — ブラウザーによってこのタグが追加されたことがわかります。 なぜそれを含まないのかと疑問に思うかもしれません — すべき、表の構造とスタイリングがより細かく制御できるためです。

### アクティブラーニング: 表構造の追加

これらの新しい要素を実行してみましょう。

1. まず、新しいフォルダに [spending-record.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/minimal-table.css) のローカルコピーを作成します。
2. ブラウザーでそれを開いてみてください — あなたはそれが問題ないように見えますが、それは改善されることになるかもしれません。 支出額の合計を含む "SUM" 行は間違った場所にあるように思われ、コードから抜けている細部がいくつかあります。
3. 明白なヘッダー行を `<thead>` 要素内に、 "SUM" 行を `<tfoot>` 要素内に、そして残りの内容を `<tbody>` 要素内に配置します。
4. 保存して更新すると、`<tfoot>` 要素を追加すると "SUM" 行が表の一番下に移動していることがわかります。
5. 次に、[`colspan`](/ja/docs/Web/HTML/Element/td#colspan) 属性を追加して "SUM" セルを最初の 4 列にまたがるようにします。そのため、実際の数は "Cost" 列の下部に表示されます。
6. これらの要素が CSS を適用するためにどれほど有用であるかのアイデアをあなたに与えるために、表にいくつかの簡単な追加のスタイリングを追加しましょう。 HTML 文書の `<head>` の中には、空の {{htmlelement("style")}} 要素があります。 この要素内に、次の CSS コード行を追加します。

   ```css
   tbody {
     font-size: 90%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. 保存して更新し、結果を確認します。 `<tbody>` 要素と `<tfoot>` 要素が適切に配置されていない場合は、同じスタイルを適用するためにはるかに複雑なセレクタ/規則を記述する必要があります。

> **メモ:** 現時点で私たちはあなたが CSS を完全に理解しているとは思っていません。 あなたが私たちの CSS モジュールを一通り学ぶとき、これについてより多くを学ぶでしょう([CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)は始めるのに良い場所です。 [スタイリングされた表](/ja/docs/Learn/CSS/Styling_boxes/Styling_tables)に関する具体的な記事もあります)。

完成した表は次のようになります。

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My spending record</title>
    <style>
      html {
        font-family: sans-serif;
      }

      table {
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-size: 0.8rem;
      }

      td,
      th {
        border: 1px solid rgb(190, 190, 190);
        padding: 10px 20px;
      }

      th {
        background-color: rgb(235, 235, 235);
      }

      td {
        text-align: center;
      }

      tr:nth-child(even) td {
        background-color: rgb(250, 250, 250);
      }

      tr:nth-child(odd) td {
        background-color: rgb(245, 245, 245);
      }

      caption {
        padding: 10px;
      }

      tbody {
        font-size: 90%;
        font-style: italic;
      }

      tfoot {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
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
      <tfoot>
        <tr>
          <td colspan="4">SUM</td>
          <td>118</td>
        </tr>
      </tfoot>
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
          <td>Shoeshop</td>
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
    </table>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_example', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

> **メモ:** Github では、それを [spending-record-finished.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record-finished.html) として見つけることもできます([ライブもご覧ください](http://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html))。

## ネストした表

`<table>` 要素を含む完全な構造を含める限り、表を別の表の中にネストすることは可能です。 そのマークアップがスクリーンリーダーのユーザにとって混乱を招きやすく、アクセスしにくくなるため、これは一般的にはあまり推奨されません。 多くの場合、既存の表に追加のセル/行/列を挿入することもできます。 ただし、他のソースからコンテンツを簡単にインポートしたい場合などは、時々必要になります。

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

<table id="table1">
  <tbody>
    <tr>
      <th>title1</th>
      <th>title2</th>
      <th>title3</th>
    </tr>
    <tr>
      <td id="nested">
        <table id="table2">
          <tbody>
            <tr>
              <td>cell1</td>
              <td>cell2</td>
              <td>cell3</td>
            </tr>
          </tbody>
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
  </tbody>
</table>

## 視覚障碍者向けの表

データ表の使用方法について簡単に説明しましょう。 表は、データにすばやくアクセスし、さまざまな値を検索できるようにするための便利なツールです。例えば、昨年 8 月に Gent で販売された指輪 (Rings) の数を確認するには、下の表を見てください。その情報を理解するために、この表内のデータとその列ヘッダーや行ヘッダーとの間の視覚的な関連付けを行います。

<table>
  <caption>
    Items Sold August 2016
  </caption>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <th colspan="3" scope="colgroup">Clothes</th>
      <th colspan="2" scope="colgroup">Accessories</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <th scope="col">Trousers</th>
      <th scope="col">Skirts</th>
      <th scope="col">Dresses</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Rings</th>
    </tr>
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

しかし、あなたがそれらの視覚的な関連付けをすることができないならば、どうですか？ では、どのようにして上記のような表を読むことができますか？ 視覚障碍者は、Web ページの情報を読み上げるスクリーンリーダーをよく使用します。 平文を読んでいるときはこれは問題ありませんが、表を解釈することは視覚障碍者にとっては非常に困難な場合があります。 それでも、適切なマークアップを使用して、視覚的な関連付けをプログラムによる関連付けに置き換えることができます。

> **メモ:** [WHO のデータ](http://www.who.int/mediacentre/factsheets/fs282/en/)によると、2017 年の視覚障碍者は約 253 百万人です。

記事のこのセクションでは、可能な限りアクセス可能な表にするためのその他の手法について説明します。

### 列ヘッダーと行ヘッダーを使用する

スクリーンリーダーは全てのヘッダーを識別し、それらを使用してそれらのヘッダーとそれらが関連するセルとの間のプログラムによる関連付けを行います。 列ヘッダーと行ヘッダーの組み合わせにより、各セル内のデータが識別および解釈されるため、スクリーンリーダーのユーザは、晴眼のユーザの場合と同様に表を解釈できます。

前の記事ですでにヘッダーについて説明しました — [`<th>` 要素によるヘッダーの追加](/ja/docs/Learn/HTML/Tables/Basics#Adding_headers_with_%3Cth%3E_elements)を参照してください。

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

スクリーンリーダーは、このように構成されたマークアップを認識し、例えば、ユーザが列全体または行全体を一度に読み上げることを可能にします。

`scope` には、さらに 2 つの可能な値、`colgroup` と `rowgroup` があります。 これらは、複数列または複数行の上に位置する見出しに使用されます。 このセクションの最初にある "Items Sold August 2016" の表を見ると、"Clothes" セルが "Trousers"、"Skirts"、"Dresses" のセルの上に位置することがわかります。 これらのセルは全てヘッダー(`<th>`)としてマークアップするべきで、 "Clothes" はそれらの上に位置し、他の 3 つの小見出しを定義する見出しです。 従って、"Clothes" は `scope="colgroup"` の属性を得るべきですが、それ以外は `scope="col"` の属性を得ます。

### id 属性と headers 属性

`scope` 属性を使用する代わりに、[`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性と [`headers`](/ja/docs/Web/HTML/Element/td#headers) 属性を使用して、ヘッダーとセル間の関連付けを作成することもできます。 使い方は次のとおりです。

1. 各 `<th>` 要素に一意の `id` を追加します。
2. 各 `<td>` 要素に `headers` 属性を追加します。 各 `headers` 属性には、そのセルのヘッダーとして機能する全ての `<th>` 要素の `id` のリストを、スペースで区切って含める必要があります。

これは HTML の表に、表内の各セルの位置の明示的な定義を与えます。 これは、それが属する各列と各行のヘッダーによって定義されます。 スプレッドシートのようなものです。 それがうまく機能するためには、表は本当に列と行の両方のヘッダーを必要とします。

支出コストの例に戻ると、前の 2 つのコードは次のように書き直すことができます。

```html
<thead>
  <tr>
    <th id="purchase">Purchase</th>
    <th id="location">Location</th>
    <th id="date">Date</th>
    <th id="evaluation">Evaluation</th>
    <th id="cost">Cost (€)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="haircut">Haircut</th>
    <td headers="location haircut">Hairdresser</td>
    <td headers="date haircut">12/09</td>
    <td headers="evaluation haircut">Great idea</td>
    <td headers="cost haircut">30</td>
  </tr>

  ...
</tbody>
```

> **メモ:** この方法では、ヘッダーとデータセルの間に非常に正確な関連付けが作成されますが、マークアップがはるかに多くなり、エラーの余地がありません。 `scope` アプローチは通常ほとんどの表に十分です。

### アクティブラーニング: scope と headers で遊ぶ

1. この最後の演習では、まず [items-sold.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/minimal-table.css) のローカルコピーを新しいディレクトリーに作成してください。
2. この表をより適切にするために適切な `scope` 属性を追加してみてください。
3. 最後に、最初のファイルの別のコピーを作成して、今度は、`id` 属性と `headers` 属性を使用して表にアクセスしやすくします。

> **メモ:** 完成した例と照らし合わせて作業内容を確認できます — [items-sold-scope.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-scope.html)([ライブもご覧ください](http://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html))および [items-sold-headers.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-headers.html)([ライブもご覧ください](http://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html))。

## まとめ

表の HTML について他にも学べることがいくつかありますが、現時点で知っておく必要があることは全てここで説明しました。 この時点で、HTML の表のスタイリングについて学びたいと思うかもしれません — [スタイリングされた表](/ja/docs/Learn/CSS/Styling_boxes/Styling_tables)を参照してください。

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
