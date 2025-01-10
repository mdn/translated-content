---
title: HTML 表のアクセシビリティ
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

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
          <li>表にキャプションを追加する。<li>
          <li>見出し、本体、フッターで構成されたより良い表。</li>
          <li>見出しとセルをさらに関連付ける、<code>scope</code>、<code>id</code>、<code>headers</code> 属性。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 要約: 視覚障碍者向けの表

データ表の使用方法について簡単に振り返ってみましょう。表は、データにすばやくアクセスでき、さまざまな値を調べることができる便利なツールです。例えば、下記の表を一瞥するだけで、 2016 年 8 月にゲントで販売された指輪の数がわかります。その情報を理解するには、この表のデータと列と行の見出しの間に視覚的な関連付けを行います。

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
      <th scope="row">ゲント</th>
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

しかし、あなたが視覚的な結びつけができなかったら、どうですか？ その場合は、どのようにして上記のような表を読むことができますか？ 視覚障碍者は、ウェブページの情報を読み上げるスクリーンリーダーをよく使用します。 平文を読んでいるときはこれは問題ありませんが、表を解釈することは視覚障碍者にとっては非常に困難な場合があります。 それでも、適切なマークアップを使用して、視覚的な関連付けをプログラムによる関連付けに置き換えることができます。

> **メモ:** [WHO のデータ](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)によると、2017 年の視覚障碍者は約 253 百万人です。

記事のこの節では、可能な限りアクセス可能な表にするためのその他の手法について説明します。

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

  …
</table>
```

上記の簡単な例から推測できるように、キャプションには表の内容の説明が含まれています。 これは、ページに目を通して表が役に立つかどうかをすぐに把握したい全ての読者にとって便利ですが、特に盲目のユーザーにとっては便利です。 スクリーンリーダーに表の内容を知るためだけに多くのセルの内容を読み上げさせるのではなく、キャプションを頼りにして表をより詳細に読み取るかどうかを決定できます。

キャプションは `<table>` タグのすぐ下に配置します。

> **メモ:** [`summary`](/ja/docs/Web/HTML/Element/table#summary) 属性は、`<table>` 要素で説明を提供するためにも使用できます。 これはスクリーンリーダーによっても読み上げられます。しかし、`<caption>`要素を使用することをお勧めします。なぜなら、`summary` は非推奨であり、視覚ユーザーには読めないからです（ページに現れません）。

### アクティブラーニング: キャプションの追加

前の記事で最初に出会った例を再考しながら、これを試してみましょう。

1. [HTML 表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#アクティブラーニング_colgroup_と_col)の最後から語学教師の学校の時間割を開くか、または [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) ファイルのローカルコピーを作成してください。
2. 表に適切なキャプションを追加します。
3. コードを保存してブラウザーで開くと、コードがどのように見えるかがわかります。

> [!NOTE]
> GitHub で私たちのバージョンを見ることができます。 [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) を見てください（[ライブもご覧ください](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)）。

## \<thead>、\<tbody>、\<tfoot> を用いて構造を追加

表の構造がもう少し複雑になったら、それらにもっと構造的な定義を与えることは有用です。 これを行う明確な方法の 1 つは、{{htmlelement("thead")}}、{{htmlelement("tbody")}}、{{htmlelement("tfoot")}} を使用することです。 これにより、表のヘッダー、フッター、および本体のセクションをマークアップできます。

これらの要素によって表がスクリーンリーダーのユーザーにアクセスしやすくなることはなく、また視覚的な機能強化が生じることもありません。 ただし、これらはスタイル設定やレイアウトに非常に役立ちます — CSS を表に追加するための便利なフックとして機能します。 いくつか興味深い例を挙げると、長い表の場合、全ての印刷ページで表のヘッダーとフッターを繰り返すようにしたり、表の本体を単一ページに表示して、上下にスクロールして内容を表示したりすることができます。

使用するためには、以下の順番で記載してください。

- `<thead>` 要素は、表のヘッダー部分を囲む必要があります — これは通常、列見出しを含む最初の行になりますが、必ずしもそうとは限りません。 {{htmlelement("col")}} 要素や {{htmlelement("colgroup")}} 要素を使用している場合、表のヘッダーはそれらのすぐ下にくるはずです。
- `<tbody>` 要素は、表のヘッダーまたはフッターではない表のコンテンツの他の部分を囲む必要があります。
- `<tfoot>` 要素は、表のフッター部分を囲む必要があります。これは、例えば、前の行の項目が合計された最終行になります。

> **メモ:** `<tbody>` は常に全ての表に含まれていて、コードで指定しない場合にも暗黙的に含まれます。 これを確認するには、`<tbody>` を含まない以前の例の 1 つを開き、[ブラウザー開発者ツール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)の HTML コードを調べます — ブラウザーによってこのタグが追加されたことがわかります。 なぜそれを含まないのかと疑問に思うかもしれません — すべき、表の構造とスタイリングがより細かく制御できるためです。

### アクティブラーニング: 表構造の追加

これらの新しい要素を実行してみましょう。

1. まず、新しいフォルダーに [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) のローカルコピーを作成します。
2. 明白なヘッダー行を `<thead>` 要素内に、 "SUM" 行を `<tfoot>` 要素内に、そして残りの内容を `<tbody>` 要素内に配置します。
3. 次に、[`colspan`](/ja/docs/Web/HTML/Element/td#colspan) 属性を追加して "SUM" セルを最初の 4 列にまたがるようにします。そのため、実際の数は "Cost" 列の下部に表示されます。
4. これらの要素が CSS を適用するためにどれほど有用であるかのアイデアをあなたに与えるために、表にいくつかの簡単な追加のスタイリングを追加しましょう。 HTML 文書の `<head>` の中には、空の {{htmlelement("style")}} 要素があります。 この要素内に、次の CSS コード行を追加します。

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. 保存して更新し、結果を確認します。 `<tbody>` 要素と `<tfoot>` 要素が適切に配置されていない場合は、同じスタイルを適用するためにはるかに複雑なセレクター/規則を記述する必要があります。

> [!NOTE]
> 現時点で私たちはあなたが CSS を完全に理解しているとは思っていません。 あなたが私たちの CSS モジュールを一通り学ぶとき、これについてより多くを学ぶでしょう（[CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)は始めるのに良い場所です。 [表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)に関する具体的な記事もあります）。

最終的な表は、次のようになるでしょう。

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> GitHub で [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) として見ることもできます。

### `scope` 属性

この記事の新しい話題は [`scope`](/ja/docs/Web/HTML/Element/th#scope) 属性です。 これは `<th>` 要素に追加して、見出しがどのセルの見出しであるかをスクリーンリーダーに正確に伝えることができます — 例えば、それが入っているのは行の見出しなのか、それとも列の見出しなのか？ 先ほどの支出記録の例を振り返ると、次のように列見出しを列見出しとして明確に定義できます。

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

### id 属性と headers 属性

`scope` 属性を使用する代わりに、[`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性と [`headers`](/ja/docs/Web/HTML/Element/td#headers) 属性を使用して、見出しとセル間の関連付けを作成することもできます。

`headers` 属性は空白区切りの{{Glossary("string", "文字列")}}の順不同リストを取ります。それぞれが、データセル（`<td>` 要素）または別の見出しセル（`<th>` 要素）の見出しを提供する `<th>` 要素の一意の `id` に対応します。

これは HTML の表において、表の中の各セルの位置を、表計算ソフトのように、所属する行と列のそれぞれの見出しによって定義します。これがうまく動作するためには、表の列と行の両方の見出しがどうしても必要です。

「2016 年 8 月に販売された商品」の例に戻ると、以下のように `id` 属性と `headers` 属性を使用することができます：

1. 表のそれぞれの `<th>` 要素に固有の `id` を追加します。
2. `headers` 属性をそれぞれの小見出しとして機能する、つまり上に見出し要素がある、それぞれの `<th>` 要素に追加します。値は最上部に位置し、小見出しを定義する見出しの `id` で、例えばこの例では列の見出しは `"clothes"`、行の見出しは `"belgium"` となります。
3. それぞれの `<td>` 要素に `headers` 属性を追加し、そこに関連する `<th>` 要素の `id` の空白区切りのリストの形で追加します。スプレッドシートと同じように作業を進めることができます。データセルを探し、対応する行と列の見出しを探します。指定する `id` の順番は重要ではありませんが、整理しておくために一貫性を持たせておく必要があります。

```html
<thead>
  <tr>
    <th id="clothes" colspan="3">服</th>
  </tr>
  <tr>
    <th id="trousers" headers="clothes">ズボン</th>
    <th id="skirts" headers="clothes">スカート</th>
    <th id="dresses" headers="clothes">ドレス</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="belgium" rowspan="3">ベルギー</th>
    <th id="antwerp" headers="belgium">アントワープ</th>
    <td headers="antwerp belgium clothes trousers">56</td>
    <td headers="antwerp belgium clothes skirts">22</td>
    <td headers="antwerp belgium clothes dresses">43</td>
  </tr>
</tbody>
```

> [!NOTE]
> この方法では、見出しとデータセルの間に非常に正確な関連付けが作成されますが、マークアップがはるかに多くなり、エラーの余地がありません。通常はほとんどの表では `scope` のアプローチで十分です。

### アクティブラーニング: scope と headers で遊ぶ

1. この最後の演習では、まず [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) のローカルコピーを新しいディレクトリーに作成してください。
2. この表をより適切にするために適切な `scope` 属性を追加してみてください。
3. 最後に、最初のファイルの別のコピーを作成して、今度は、`id` 属性と `headers` 属性を使用して表にアクセスしやすくします。

> [!NOTE]
> 完成した例と照らし合わせて作業内容を確認できます — [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html)([ライブもご覧ください](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html))および [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html)([ライブもご覧ください](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html))。

## まとめ

HTML の表について他にもいくつか学ぶべきことはありますが、これで当面必要なことはすべてです。次に、指定された HTML 表の課題で自己検査をしてみましょう。楽しんでください。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
