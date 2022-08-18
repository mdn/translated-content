---
title: HTML 表の高度な機能とアクセシビリティ
slug: Learn/HTML/Tables/Advanced
tags:
  - Accessibility
  - Advanced
  - Article
  - Beginner
  - CodingScripting
  - HTML
  - Headers
  - Learn
  - caption
  - scope
  - sumary
  - table
  - tbody
  - tfoot
  - thead
translation_of: Learn/HTML/Tables/Advanced
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}</div>

<p class="summary">このモジュールの2番目の記事では、HTML テーブルのより高度な機能 (キャプション/要約、行をテーブルのヘッダー、本文、フッターのセクションにグループ化するなど) や、視覚障碍のあるユーザのためのテーブルのアクセシビリティについて調べます。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基礎 (<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を参照)。</td>
  </tr>
  <tr>
   <th scope="row">目標:</th>
   <td>表のより高度な機能やアクセシビリティについて学ぶ</td>
  </tr>
 </tbody>
</table>

<h2 id="Adding_a_caption_to_your_table_with_&lt;caption>" name="Adding_a_caption_to_your_table_with_&lt;caption>">&lt;caption&gt; を用いて表にキャプションを追加する</h2>

<p>テーブルにキャプションを付けるには、{{htmlelement("caption")}} 要素内に配置し、それを {{htmlelement("table")}} 要素内にネストします。これは <code>&lt;table&gt;</code> 要素の開始タグすぐ下に置くべきです。</p>

<pre class="brush: html">&lt;table&gt;
  &lt;caption&gt;ジュラ紀の恐竜&lt;/caption&gt;

  ...
&lt;/table&gt;</pre>

<p>上記の簡単な例から推測できるように、キャプションには表の内容の説明が含まれています。 これは、ページに目を通して表が役に立つかどうかをすぐに把握したい全ての読者にとって便利ですが、特に盲目のユーザにとっては便利です。 スクリーンリーダーに表の内容を知るためだけに多くのセルの内容を読み上げさせるのではなく、キャプションを頼りにして表をより詳細に読み取るかどうかを決定できます。</p>

<p>キャプションは <code>&lt;table&gt;</code> タグのすぐ下に配置します。</p>

<div class="note">
<p><strong>注</strong>: {{htmlattrxref("summary","table")}} 属性は、<code>&lt;table&gt;</code> 要素で説明を提供するためにも使用できます。 これはスクリーンリーダーによっても読み上げられます。 ただし、<code>summary</code> は HTML5 仕様では{{glossary("deprecated","推奨されておらず")}}、(ページには表示されないので)晴眼のユーザには読むことができないため、代わりに <code>&lt;caption&gt;</code> 要素を使用することをお勧めします。</p>
</div>

<h3 id="Active_learning_Adding_a_caption" name="Active_learning_Adding_a_caption">アクティブラーニング: キャプションの追加</h3>

<p>前の記事で最初に出会った例を再考しながら、これを試してみましょう。</p>

<ol>
 <li><a href="/ja/docs/Learn/HTML/Tables/Basics#Active_learning_colgroup_and_col">HTML 表の基本</a>の最後から語学教師の学校の時間割を開くか、または <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html">timetable-fixed.html</a> ファイルのローカルコピーを作成してください。</li>
 <li>表に適切なキャプションを追加します。</li>
 <li>コードを保存してブラウザで開くと、コードがどのように見えるかがわかります。</li>
</ol>

<div class="note">
<p><strong>注</strong>: GitHub で私たちのバージョンを見つけることができます —  <a href="https://github.com/mdn/learning-area/blob/master/html/tables/advanced/timetable-caption.html">timetable-caption.html</a> を見てください(<a href="http://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html">ライブもご覧ください</a>)。</p>
</div>

<h2 id="Adding_structure_with_&lt;thead>_&lt;tfoot>_and_&lt;tbody>" name="Adding_structure_with_&lt;thead>_&lt;tfoot>_and_&lt;tbody>">&lt;thead&gt;、&lt;tfoot&gt;、&lt;tbody&gt; を用いて構造を追加する</h2>

<p>表の構造がもう少し複雑になったら、それらにもっと構造的な定義を与えることは有用です。 これを行う明確な方法の1つは、{{htmlelement("thead")}}、{{htmlelement("tfoot")}}、および {{htmlelement("tbody")}} を使用することです。 これにより、表のヘッダー、フッター、および本体のセクションをマークアップできます。</p>

<p>これらの要素によって表がスクリーンリーダーのユーザにアクセスしやすくなることはなく、また視覚的な機能強化が生じることもありません。 ただし、これらはスタイリングやレイアウトに非常に役立ちます — CSS を表に追加するための便利なフックとして機能します。 いくつか興味深い例を挙げると、長い表の場合、全ての印刷ページで表のヘッダーとフッターを繰り返すようにしたり、表の本体を単一ページに表示して、上下にスクロールして内容を表示したりすることができます。</p>

<p>それらを使用するには、</p>

<ul>
 <li><code>&lt;thead&gt;</code> 要素は、表のヘッダー部分をラップする必要があります — これは通常、列見出しを含む最初の行になりますが、必ずしもそうとは限りません。 {{htmlelement("col")}} 要素や {{htmlelement("colgroup")}} 要素を使用している場合、表のヘッダーはそれらのすぐ下にくるはずです。</li>
 <li><code>&lt;tfoot&gt;</code> 要素は、表のフッター部分をラップする必要があります — これは、例えば、前の行の項目が合計された最終行になります。 表のフッターは、期待通りに表の一番下に配置することも、表のヘッダーのすぐ下に配置することもできます(ブラウザはそれを表の一番下に表示します)。</li>
 <li><code>&lt;tbody&gt;</code> 要素は、表のヘッダーまたはフッターではない表のコンテンツの他の部分をラップする必要があります。 どのように構成することにしたかに応じて、表のヘッダーの下に出現するか、時にはフッターの下に出現することがあります (上記の注を参照)。</li>
</ul>

<div class="note">
<p><strong>注</strong>: <code>&lt;tbody&gt;</code> は常に全ての表に含まれていて、コードで指定しない場合は暗黙的に含まれます。 これを確認するには、<code>&lt;tbody&gt;</code> を含まない以前の例の1つを開き、<a href="/ja/docs/Learn/Common_questions/What_are_browser_developer_tools">ブラウザ開発者ツール</a>の HTML コードを調べます — ブラウザによってこのタグが追加されたことがわかります。 なぜそれを含まないのかと疑問に思うかもしれません — すべき、表の構造とスタイリングがより細かく制御できるためです。</p>
</div>

<h3 id="Active_learning_Adding_table_structure" name="Active_learning_Adding_table_structure">アクティブラーニング: 表構造の追加</h3>

<p>これらの新しい要素を実行してみましょう。</p>

<ol>
 <li>まず、新しいフォルダに <a href="https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record.html">spending-record.html</a> と <a href="https://github.com/mdn/learning-area/blob/master/html/tables/advanced/minimal-table.css">minimal-table.css</a> のローカルコピーを作成します。</li>
 <li>ブラウザでそれを開いてみてください — あなたはそれが問題ないように見えますが、それは改善されることになるかもしれません。 支出額の合計を含む "SUM" 行は間違った場所にあるように思われ、コードから抜けている細部がいくつかあります。</li>
 <li>明白なヘッダー行を <code>&lt;thead&gt;</code> 要素内に、 "SUM" 行を <code>&lt;tfoot&gt;</code> 要素内に、そして残りの内容を <code>&lt;tbody&gt;</code> 要素内に配置します。</li>
 <li>保存して更新すると、<code>&lt;tfoot&gt;</code> 要素を追加すると "SUM" 行が表の一番下に移動していることがわかります。</li>
 <li>次に、{{htmlattrxref("colspan","td")}} 属性を追加して "SUM" セルを最初の4列にまたがるようにします。そのため、実際の数は "Cost" 列の下部に表示されます。</li>
 <li>これらの要素が CSS を適用するためにどれほど有用であるかのアイデアをあなたに与えるために、表にいくつかの簡単な追加のスタイリングを追加しましょう。 HTML 文書の <code>&lt;head&gt;</code> の中には、空の {{htmlelement("style")}} 要素があります。 この要素内に、次の CSS コード行を追加します。
  <pre class="brush: css">tbody {
  font-size: 90%;
  font-style: italic;
}

tfoot {
  font-weight: bold;
}
</pre>
 </li>
 <li>保存して更新し、結果を確認します。 <code>&lt;tbody&gt;</code> 要素と <code>&lt;tfoot&gt;</code> 要素が適切に配置されていない場合は、同じスタイルを適用するためにはるかに複雑なセレクタ/規則を記述する必要があります。</li>
</ol>

<div class="note">
<p><strong>注</strong>: 現時点で私たちはあなたが CSS を完全に理解しているとは思っていません。 あなたが私たちの CSS モジュールを一通り学ぶとき、これについてより多くを学ぶでしょう(<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>は始めるのに良い場所です。 <a href="/ja/docs/Learn/CSS/Styling_boxes/Styling_tables">スタイリングされた表</a>に関する具体的な記事もあります)。</p>
</div>

<p>完成した表は次のようになります。</p>

<div class="hidden">
<h6 id="Hidden_example" name="Hidden_example">Hidden example</h6>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My spending record&lt;/title&gt;
    &lt;style&gt;

        html {
          font-family: sans-serif;
        }

          table {
          border-collapse: collapse;
          border: 2px solid rgb(200,200,200);
          letter-spacing: 1px;
          font-size: 0.8rem;
        }

        td, th {
          border: 1px solid rgb(190,190,190);
          padding: 10px 20px;
        }

        th {
          background-color: rgb(235,235,235);
        }

        td {
          text-align: center;
        }

        tr:nth-child(even) td {
          background-color: rgb(250,250,250);
        }

        tr:nth-child(odd) td {
          background-color: rgb(245,245,245);
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
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
      &lt;table&gt;
        &lt;caption&gt;How I chose to spend my money&lt;/caption&gt;
        &lt;thead&gt;
          &lt;tr&gt;
            &lt;th&gt;Purchase&lt;/th&gt;
            &lt;th&gt;Location&lt;/th&gt;
            &lt;th&gt;Date&lt;/th&gt;
            &lt;th&gt;Evaluation&lt;/th&gt;
            &lt;th&gt;Cost (€)&lt;/th&gt;
          &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tfoot&gt;
          &lt;tr&gt;
            &lt;td colspan="4"&gt;SUM&lt;/td&gt;
            &lt;td&gt;118&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/tfoot&gt;
        &lt;tbody&gt;
          &lt;tr&gt;
            &lt;td&gt;Haircut&lt;/td&gt;
            &lt;td&gt;Hairdresser&lt;/td&gt;
            &lt;td&gt;12/09&lt;/td&gt;
            &lt;td&gt;Great idea&lt;/td&gt;
            &lt;td&gt;30&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr&gt;
            &lt;td&gt;Lasagna&lt;/td&gt;
            &lt;td&gt;Restaurant&lt;/td&gt;
            &lt;td&gt;12/09&lt;/td&gt;
            &lt;td&gt;Regrets&lt;/td&gt;
            &lt;td&gt;18&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr&gt;
            &lt;td&gt;Shoes&lt;/td&gt;
            &lt;td&gt;Shoeshop&lt;/td&gt;
            &lt;td&gt;13/09&lt;/td&gt;
            &lt;td&gt;Big regrets&lt;/td&gt;
            &lt;td&gt;65&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr&gt;
            &lt;td&gt;Toothpaste&lt;/td&gt;
            &lt;td&gt;Supermarket&lt;/td&gt;
            &lt;td&gt;13/09&lt;/td&gt;
            &lt;td&gt;Good&lt;/td&gt;
            &lt;td&gt;5&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

  &lt;/body&gt;
&lt;/html&gt;</pre>
</div>

<p>{{ EmbedLiveSample('Hidden_example', '100%', 300, "", "", "hide-codepen-jsfiddle") }}</p>

<div class="note">
<p><strong>注</strong>: Github では、それを <a href="https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record-finished.html">spending-record-finished.html</a> として見つけることもできます(<a href="http://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html">ライブもご覧ください</a>)。</p>
</div>

<h2 id="Nesting_Tables" name="Nesting_Tables">ネストした表</h2>

<p><code>&lt;table&gt;</code> 要素を含む完全な構造を含める限り、表を別の表の中にネストすることは可能です。 そのマークアップがスクリーンリーダーのユーザにとって混乱を招きやすく、アクセスしにくくなるため、これは一般的にはあまり推奨されません。 多くの場合、既存の表に追加のセル/行/列を挿入することもできます。 ただし、他のソースからコンテンツを簡単にインポートしたい場合などは、時々必要になります。</p>

<p>次のマークアップは、単純なネストした表を示しています。</p>

<pre class="brush: html">&lt;table id="table1"&gt;
  &lt;tr&gt;
    &lt;th&gt;title1&lt;/th&gt;
    &lt;th&gt;title2&lt;/th&gt;
    &lt;th&gt;title3&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td id="nested"&gt;
      &lt;table id="table2"&gt;
        &lt;tr&gt;
          &lt;td&gt;cell1&lt;/td&gt;
          &lt;td&gt;cell2&lt;/td&gt;
          &lt;td&gt;cell3&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/table&gt;
    &lt;/td&gt;
    &lt;td&gt;cell2&lt;/td&gt;
    &lt;td&gt;cell3&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;cell4&lt;/td&gt;
    &lt;td&gt;cell5&lt;/td&gt;
    &lt;td&gt;cell6&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<p>その出力は次のようになります。</p>

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

<h2 id="Tables_for_visually_impaired_users" name="Tables_for_visually_impaired_users">視覚障碍者向けの表</h2>

<p>データ表の使用方法について簡単に説明しましょう。 表は、データにすばやくアクセスし、さまざまな値を検索できるようにするための便利なツールです。例えば、昨年8月に Gent で販売された指輪 (Rings) の数を確認するには、下の表を見てください。その情報を理解するために、この表内のデータとその列ヘッダーや行ヘッダーとの間の視覚的な関連付けを行います。</p>

<table>
 <caption>Items Sold August 2016</caption>
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

<p>しかし、あなたがそれらの視覚的な関連付けをすることができないならば、どうですか？ では、どのようにして上記のような表を読むことができますか？ 視覚障碍者は、Webページの情報を読み上げるスクリーンリーダーをよく使用します。 平文を読んでいるときはこれは問題ありませんが、表を解釈することは視覚障碍者にとっては非常に困難な場合があります。 それでも、適切なマークアップを使用して、視覚的な関連付けをプログラムによる関連付けに置き換えることができます。</p>

<div class="note">
<p><strong>注</strong>: <a href="http://www.who.int/mediacentre/factsheets/fs282/en/">WHO のデータ</a>によると、2017年の視覚障碍者は約253百万人です。</p>
</div>

<p>記事のこのセクションでは、可能な限りアクセス可能な表にするためのその他の手法について説明します。</p>

<h3 class="attTitle" id="Using_column_and_row_headers" name="Using_column_and_row_headers">列ヘッダーと行ヘッダーを使用する</h3>

<p>スクリーンリーダーは全てのヘッダーを識別し、それらを使用してそれらのヘッダーとそれらが関連するセルとの間のプログラムによる関連付けを行います。 列ヘッダーと行ヘッダーの組み合わせにより、各セル内のデータが識別および解釈されるため、スクリーンリーダーのユーザは、晴眼のユーザの場合と同様に表を解釈できます。</p>

<p>前の記事ですでにヘッダーについて説明しました — <a href="/ja/docs/Learn/HTML/Tables/Basics#Adding_headers_with_%3Cth%3E_elements"><code>&lt;th&gt;</code> 要素によるヘッダーの追加</a>を参照してください。</p>

<h3 class="attTitle" id="The_scope_attribute" name="The_scope_attribute">scope 属性</h3>

<p>この記事の新しい話題は {{htmlattrxref("scope","th")}} 属性です。 これは <code>&lt;th&gt;</code> 要素に追加して、ヘッダーがどのセルのヘッダーであるかをスクリーンリーダーに正確に伝えることができます — 例えば、それが入っているのは行のヘッダーなのか、それとも列のヘッダーなのか？ 先ほどの支出記録の例を振り返ると、次のように列ヘッダーを列ヘッダーとして明確に定義できます。</p>

<pre class="brush: html">&lt;thead&gt;
  &lt;tr&gt;
    &lt;th scope="col"&gt;Purchase&lt;/th&gt;
    &lt;th scope="col"&gt;Location&lt;/th&gt;
    &lt;th scope="col"&gt;Date&lt;/th&gt;
    &lt;th scope="col"&gt;Evaluation&lt;/th&gt;
    &lt;th scope="col"&gt;Cost (€)&lt;/th&gt;
  &lt;/tr&gt;
&lt;/thead&gt;</pre>

<p>そして各行は次のように定義されたヘッダーを持つことができます(列ヘッダーと同様に行ヘッダーを追加した場合)。</p>

<pre class="brush: html">&lt;tr&gt;
  &lt;th scope="row"&gt;Haircut&lt;/th&gt;
  &lt;td&gt;Hairdresser&lt;/td&gt;
  &lt;td&gt;12/09&lt;/td&gt;
  &lt;td&gt;Great idea&lt;/td&gt;
  &lt;td&gt;30&lt;/td&gt;
&lt;/tr&gt;</pre>

<p>スクリーンリーダーは、このように構成されたマークアップを認識し、例えば、ユーザが列全体または行全体を一度に読み上げることを可能にします。</p>

<p><code>scope</code> には、さらに2つの可能な値、<code>colgroup</code> と <code>rowgroup</code> があります。 これらは、複数列または複数行の上に位置する見出しに使用されます。 このセクションの最初にある "Items Sold August 2016" の表を見ると、"Clothes" セルが "Trousers"、"Skirts"、"Dresses" のセルの上に位置することがわかります。 これらのセルは全てヘッダー(<code>&lt;th&gt;</code>)としてマークアップするべきで、 "Clothes" はそれらの上に位置し、他の3つの小見出しを定義する見出しです。 従って、"Clothes" は <code>scope="colgroup"</code> の属性を得るべきですが、それ以外は <code>scope="col"</code> の属性を得ます。</p>

<h3 class="attTitle" id="The_id_and_headers_attributes" name="The_id_and_headers_attributes">id 属性と headers 属性</h3>

<p><code>scope</code> 属性を使用する代わりに、{{htmlattrxref("id")}} 属性と {{htmlattrxref("headers", "td")}} 属性を使用して、ヘッダーとセル間の関連付けを作成することもできます。 使い方は次のとおりです。</p>

<ol>
 <li>各 <code>&lt;th&gt;</code> 要素に一意の <code>id</code> を追加します。</li>
 <li>各 <code>&lt;td&gt;</code> 要素に <code>headers</code> 属性を追加します。 各 <code>headers</code> 属性には、そのセルのヘッダーとして機能する全ての <code>&lt;th&gt;</code> 要素の <code>id</code> のリストを、スペースで区切って含める必要があります。</li>
</ol>

<p>これは HTML の表に、表内の各セルの位置の明示的な定義を与えます。 これは、それが属する各列と各行のヘッダーによって定義されます。 スプレッドシートのようなものです。 それがうまく機能するためには、表は本当に列と行の両方のヘッダーを必要とします。</p>

<p>支出コストの例に戻ると、前の2つのコードは次のように書き直すことができます。</p>

<pre class="brush: html">&lt;thead&gt;
  &lt;tr&gt;
    &lt;th id="purchase"&gt;Purchase&lt;/th&gt;
    &lt;th id="location"&gt;Location&lt;/th&gt;
    &lt;th id="date"&gt;Date&lt;/th&gt;
    &lt;th id="evaluation"&gt;Evaluation&lt;/th&gt;
    &lt;th id="cost"&gt;Cost (€)&lt;/th&gt;
  &lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
  &lt;th id="haircut"&gt;Haircut&lt;/th&gt;
  &lt;td headers="location haircut"&gt;Hairdresser&lt;/td&gt;
  &lt;td headers="date haircut"&gt;12/09&lt;/td&gt;
  &lt;td headers="evaluation haircut"&gt;Great idea&lt;/td&gt;
  &lt;td headers="cost haircut"&gt;30&lt;/td&gt;
&lt;/tr&gt;

  ...

&lt;/tbody&gt;</pre>

<div class="note">
<p><strong>注</strong>: この方法では、ヘッダーとデータセルの間に非常に正確な関連付けが作成されますが、マークアップがはるかに多くなり、エラーの余地がありません。 <code>scope</code> アプローチは通常ほとんどの表に十分です。</p>
</div>

<h3 id="Active_learning_playing_with_scope_and_headers" name="Active_learning_playing_with_scope_and_headers">アクティブラーニング: scope と headers で遊ぶ</h3>

<ol>
 <li>この最後の演習では、まず <a href="https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold.html">items-sold.html</a> と <a href="https://github.com/mdn/learning-area/blob/master/html/tables/advanced/minimal-table.css">minimal-table.css</a> のローカルコピーを新しいディレクトリに作成してください。</li>
 <li>この表をより適切にするために適切な <code>scope</code> 属性を追加してみてください。</li>
 <li>最後に、最初のファイルの別のコピーを作成して、今度は、<code>id</code> 属性と <code>headers</code> 属性を使用して表にアクセスしやすくします。</li>
</ol>

<div class="note">
<p><strong>注</strong>: 完成した例と照らし合わせて作業内容を確認できます — <a href="https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-scope.html">items-sold-scope.html</a>(<a href="http://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html">ライブもご覧ください</a>)および <a href="https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-headers.html">items-sold-headers.html</a>(<a href="http://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html">ライブもご覧ください</a>)。</p>
</div>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>表の HTML について他にも学べることがいくつかありますが、現時点で知っておく必要があることは全てここで説明しました。 この時点で、HTML の表のスタイリングについて学びたいと思うかもしれません — <a href="/ja/docs/Learn/CSS/Styling_boxes/Styling_tables">スタイリングされた表</a>を参照してください。</p>

<div>{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}</div>

<div>
<h2 id="このモジュール">このモジュール</h2>

<ul>
 <li><a href="/ja/docs/Learn/HTML/Tables/Basics">HTML の表の基本</a></li>
 <li><a href="/ja/docs/Learn/HTML/Tables/Advanced">HTML 表の高度な機能とアクセシビリティ</a></li>
 <li><a href="/ja/docs/Learn/HTML/Tables/Structuring_planet_data">評価: 太陽系の惑星のデータを構造化する</a></li>
</ul>
</div>
