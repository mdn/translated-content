---
title: HTML の表の基本
short-title: 表の基本
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

この記事は、 HTML の表を始めるために、行やセルなどとても基本的なところから、見出し、複数列や行のセルの結合、スタイルを適用するために列の中のセルをすべてグループ化する方法などを扱います。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML を理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>表は何のためにあるのか — 表形式のデータを構造化するためです。</li>
          <li>表は、レイアウトや<em>その他何らかの目的</em>のためのものではありません。</li>
          <li>基本的案表の構文 — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, and <code>&lt;td&gt;</code></li>
          <li>表の見出しを <code>&lt;th&gt;</code> で定義すること。</li>
          <li><code>colspan</code> と <code>rowspan</code> で複数の列と行にまたがらせること。</li>
          <li><code>&lt;colgroup&gt;</code> や <code>&lt;col&gt;</code> による列のグループ化。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 表とは何か

表とは、行と列からなる構造化されたデータの集合 (**表形式データ**) です。表を使用すると、さまざまな種類のデータ間のある種の関連性、たとえば人と年齢、1 日または 1 週間、地元のプールの予定時刻などを示す値をすばやく簡単に検索できます。

![何人かの名前と年齢を表示した表の例。Chris 38 歳、Dennis 45 歳、Sarah 29 歳、Karen 47 歳。](numbers-table.png)

![データ表のサンプルを示す水泳のタイムテーブル](swimming-timetable.png)

1800 年のこの米国国勢調査文書で証明されているように、表は人間社会で非常に一般的に使用されており、長い間使用されてきました。

![とても古い羊皮紙文書。データは読み取り可能なものではないが、データ表が使用されていることは明らか。](1800-census.jpg)

したがって、HTML の作成者がウェブ上で表形式データを構造化して表示するための手段を提供したことは不思議ではありません。

### 表はどのように動作するか

表の特徴は、厳密だということです。 情報は、行と列見出しを視覚的に関連付けることによって簡単に解釈されます。例えば下の表を見て、62 個の衛星を持つ木星型巨大ガス惑星を見つけてください。関係する行と列との見出し部分を組み合わせて考えることで答えを見つけることができます。

```html hidden
<table>
  <caption>
    太陽系の惑星のデータ（引用元:
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa の惑星情報シート - メートル法</a
    >）。
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">名前</th>
      <th scope="col">質量 (10<sup>24</sup>kg)</th>
      <th scope="col">直径 (km)</th>
      <th scope="col">密度 (kg/m<sup>3</sup>)</th>
      <th scope="col">重力 (m/s<sup>2</sup>)</th>
      <th scope="col">一日の長さ (hours)</th>
      <th scope="col">太陽からの距離 (10<sup>6</sup>km)</th>
      <th scope="col">平均気温 (°C)</th>
      <th scope="col">月の数</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2" rowspan="4" scope="rowgroup">地球型惑星</th>
      <th scope="row">水星</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>太陽に一番近い</td>
    </tr>
    <tr>
      <th scope="row">金星</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">地球</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>私たちの世界</td>
    </tr>
    <tr>
      <th scope="row">火星</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>赤い惑星</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">木星型惑星</th>
      <th rowspan="2" scope="rowgroup">巨大ガス惑星</th>
      <th scope="row">木星</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>最大の惑星</td>
    </tr>
    <tr>
      <th scope="row">土星</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">巨大氷惑星</th>
      <th scope="row">天王星</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">海王星</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">準惑星</th>
      <th scope="row">冥王星</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        2006 年に惑星として分類されなくなりましたが、これは<a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >物議を醸しています</a
        >。
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample("How_does_a_table_work", 100, 560)}}

正しく実装されていれば、HTML の表はスクリーンリーダーなどのアクセシビリティツールでうまく処理されるため、HTML の表がうまく機能していれば、視覚的なユーザーも視覚障碍ユーザーも使い勝手が向上するはずです。

### 表のスタイル設定

GitHub の[惑星データのライブ例もご覧ください](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)。表がもう少し読みやすくなっているということに気付くでしょう。これは、今までこのページで見てきた表には最小限のスタイルしか施されていないからです。対して、GitHub 版ではより特別な意味を持った CSS が適用されています。

幻想にふけってはいけません。表をウェブ上で効果的に使うには、[CSS](/ja/docs/Learn_web_development/Core/Styling_basics) でスタイル情報を提供し、HTML でしっかりとした構造を提供する必要があります。このモジュールでは、HTML 部分に焦点を合わせています。CSS の部分については、ここを終えた後に[表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)の記事を参照してください。

このモジュールでは CSS に焦点を当てませんが、スタイルを設定しなくてもデフォルトの表より読みやすくなるように、最小限の CSS スタイルシートを使用できます。[スタイルシートはここ](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)で、そしてスタイルシートを適用する [HTML テンプレート](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html)も見つけることができます。これらを一緒にすると、HTML の表を試すための良い出発点になります。

### HTML の表を使用するべきではない場面

HTML の表は表形式のデータ（行と列で扱うのに適した情報）に使用すべきです。これが本来の設計目的です。残念ながら、多くの人が HTML 表をウェブページのレイアウトに使用していました。例えば、1 行でページヘッダーを、各行でコンテンツの列を、1 行でフッターを配置するなどです。この手法が過去に使われたのは、ブラウザー間の CSS 対応がはるかに限定的だったためです。現行ブラウザーは堅牢な CSS 対応が確立しているため、表ベースのレイアウトは必要なくなりました。現在では表レイアウトは極めて稀ですが、ウェブ上の特定の領域ではまだ見かけることがあります。

つまり、表を[CSS レイアウト手法](/ja/docs/Learn_web_development/Core/CSS_layout)の代わりにレイアウトに使用するのは得策ではありません。主な理由は次のとおりです。

1. **レイアウト表は視覚障碍のあるユーザーのアクセシビリティを低下させます**。 視覚障碍者が使用する[スクリーンリーダー](/ja/docs/Learn_web_development/Core/Accessibility/Tooling#スクリーンリーダー)は、HTML ページに存在するタグを解釈し、その内容をユーザーに読み上げます。表はレイアウトに適したツールではなく、マークアップは CSS のレイアウト手法よりも複雑であるため、スクリーンリーダーの出力はユーザーにとってわかりにくいものになります。
2. **表はタグスープを生成します**。 前述のように、表レイアウトは通常、適切なレイアウト手法よりも複雑なマークアップ構造を含みます。これにより、コードの記述、保守、およびデバッグが困難になる可能性があります。
3. **表は自動的にはレスポンシブになりません**。 適切なレイアウトコンテナー ({{htmlelement("header")}}、{{htmlelement("section")}}、{{htmlelement("article")}}、{{htmlelement("div")}} など) を使用する場合、その幅は既定で親要素の 100％になります。一方、表は既定では内容に応じてサイズが設定されているため、さまざまなデバイスで効果的に機能するように表レイアウトのスタイルを変更するには、追加の対策が必要です。

## 初めての表の作成

表の理論については十分に説明したので、表の理論については十分説明したので、実際の例に掘り下げ、単純な表を作成してみましょう。

1. まず最初に、ローカルマシンの新しいディレクトリーに、[blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) のローカルコピーを作成しましょう。この HTML テンプレートには、CSS を HTML に適用するための `<link>` 要素が既に含まれているため、その点については心配する必要はありません。
2. すべての表の内容は、**[`<table></table>`](/ja/docs/Web/HTML/Reference/Elements/table)** という 2 つのタグで囲まれています。HTML の本体の中にこれらを追加してください。
3. 表内の最小のコンテナーは、**[`<td>`](/ja/docs/Web/HTML/Reference/Elements/td)** 要素によって作成される表セルです（"td" は "table data" を表します）。表タグ内に次のコードを追加します。

   ```html
   <td>やあ、これは最初のセルです。</td>
   ```

4. 4 行のセルが必要な場合は、これらのタグを 3 回コピーする必要があります。表の内容を次のように更新します。

   ```html
   <td>やあ、これは最初のセルです。</td>
   <td>これは 2 番目のセルです。</td>
   <td>これは 3 番目のセルです。</td>
   <td>これは 4 番目のセルです。</td>
   ```

お分かりのように、セルは互いの下に配置されているのではなく、同じ行に配置されています。 各 `<td>` 要素は単一のセルを作成し、それらが一緒になって最初の行を構成します。 追加するセルごとに行が長くなります。

この行が大きくなるのを防ぎ、後続のセルを 2 行目に配置するには、**[`<tr>`](/ja/docs/Web/HTML/Reference/Elements/tr)** 要素を使用する必要があります ('tr' は 'table row' を表します)。今これを調査しましょう。

1. 以下のように、既に作成した 4 つのセルを `<tr>` タグ内に配置します。

   ```html
   <tr>
     <td>やあ、これは最初のセルです。</td>
     <td>これは 2 番目のセルです。</td>
     <td>これは 3 番目のセルです。</td>
     <td>これは 4 番目のセルです。</td>
   </tr>
   ```

2. 1 行作成したら、あと 1、2 行作成してみましょう。各行は追加の `<tr>` 要素で囲み、各セルを `<td>` に含める必要があります。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<table>
  <tr>
    <td>やあ、これは最初のセルです。</td>
    <td>これは 2 番目のセルです。</td>
    <td>これは 3 番目のセルです。</td>
    <td>これは 4 番目のセルです。</td>
  </tr>

  <tr>
    <td>2 行目、最初のセルです。</td>
    <td>2 番目のセルです。</td>
    <td>3 番目のセルです。</td>
    <td>4 番目のセルです。</td>
  </tr>
</table>
```

GitHub の [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) にもあります ([ライブ実行でも見られます](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html))。

</details>

## \<th> 要素による見出しの追加

それでは表の見出し、つまり行または列の先頭に配置され、その行または列に含まれるデータの種類を定義する特別なセルに注目しましょう（例として、この記事の最初の例の「Person」セルと「Age」セルを参照してください）。それらがなぜ有用であるかを説明するために、次の表の例を見てください。まずはソースコードからです。

```html live-sample___table-headers
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

```css hidden live-sample___table-headers
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

実際にレンダリングされた表は次のとおりです。

{{EmbedLiveSample("table-headers", "", "250")}}

ここで問題は、何が起こっているかを知ることはできますが、データを相互参照することができるほど簡単ではないことです。列と行の見出しが何らかの形で目立つ場合は、その方がはるかに良いでしょう。

### 犬の表に見出しを追加

これで犬のテーブルの例を改善して、見出しを追加してみましょう。

1. まず、あなたのローカルマシンの新しいディレクトリーに [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) ファイルのローカルコピーを作ります。
2. 表の見出しを視覚的にも意味的にも見出しとして認識させるには、**[`<th>`](/ja/docs/Web/HTML/Reference/Elements/th)** 要素を使用します ("th" は "table header" を表します)。これは `<td>` とまったく同じように機能しますが、通常のセルではなく見出しを表す点が異なります。HTML を開き、表の見出しを囲む全ての `<td>` 要素を `<th>` 要素に変更してください。
3. HTML を保存してブラウザーにロードすると、見出しが見出しらしく見えます。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <th>Knocky</th>
    <th>Flor</th>
    <th>Ella</th>
    <th>Juan</th>
  </tr>
  <tr>
    <th>Breed</th>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <th>Owner</th>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <th>Eating Habits</th>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

完成した例は GitHub の [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) にあります ([ライブ実行でも見られます](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html))。

</details>

### なぜ見出しは有用なのか

すでにこの質問には部分的に答えました。見出しがはっきり目立つと、探しているデータを見つけやすく、デザインは一般的に見栄えがよくなります。

> [!NOTE]
> 表の見出しには既定のスタイルがいくつかあります。表に独自のスタイルを追加しなくても、目立つように太字で中央に配置されています。

表見出しには、`scope` 属性 (次の記事で学ぶことになります) とともに、追加の利点もあります。それらを使用すると、各見出しを同じ行または列のすべてのデータに関連付けることで、表をよりアクセスしやすくすることができます。これにより、スクリーンリーダーはデータの行全体または列全体を一度に読み取ることができます。これは非常に便利です。

## セルを複数の行や列で結合できるようにする

セルを複数の行または列にまたがるようにしたい場合があるかもしれません。次の簡単な例を見てください。これは一般的な動物の名前を示しています。場合によっては、動物の名前の横にオスとメスの名前を表示したいことがあります。そうでない場合もあるでしょう。そのような場合は、動物の名前を表全体に広げたいだけです。

最初のマークアップは次のようになります。

```html live-sample___multiple-rows-columns
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

```css hidden live-sample___multiple-rows-columns
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

しかし、出力結果は私たちが望むものではありません。

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### `rowspan` と `colspan` によるレイアウトの修正

"Animals"、"Hippopotamus"、および "Crocodile" が 2 列にまたがり、"Horse" と "Chicken" が 2 行にまたがるようにする方法が必要です。幸いなことに、表の見出しとセルには `colspan` 属性と `rowspan` 属性があり、それを使って実行できます。どちらも単位なしの数値を受け入れます。これはスパンする行数または列数と同じです。たとえば、`colspan="2"` を指定すると、セルは 2 列にまたがります。

この表を `colspan` と `rowspan` を使用して改善しましょう。

1. まず、ご使用のローカルマシンの新しいディレクトリーに、[animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) ファイルと [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) ファイルのローカルコピーを作成します。HTML には、上記と同じ動物の例が含まれています。
2. 次に、`colspan` を使用して "Animals"、"Hippopotamus"、および "Crocodile" を 2 列にまたがって作成します。
3. 最後に、`rowspan` を使用して "Horse" と "Chicken" を 2 行にまたがるようにします。
4. 改善を確認するには、ブラウザーでコードを保存して開きます。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<table>
  <tr>
    <th colspan="2">Animals</th>
  </tr>
  <tr>
    <th colspan="2">Hippopotamus</th>
  </tr>
  <tr>
    <th rowspan="2">Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th colspan="2">Crocodile</th>
  </tr>
  <tr>
    <th rowspan="2">Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

完成した例は GitHub の [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) にあります ([ライブ実行でも見られます](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html))。

</details>

## `<colgroup>` と `<col>` による列のグループ化

表のすべての列を単一の要素として対象とする方法があります。例えば、表にスタイルを適用する場合などです（これについては後ほど[表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)で学びます）。HTML 表の作成に慣れてくると、例えば単一の列の全セルに色を適用する作業が想像以上に難しいことに気づくでしょう。この問題を解決するのが {{htmlelement("colgroup")}} と {{htmlelement("col")}} 要素です。

`<colgroup>` 要素は、表の開始タグ `<table>` の直後に子要素として含める必要があります。`<colgroup>` 要素内には、列のグループを表す `<col>` 要素を 1 つ以上含めることができます。`<col>` 要素には、そのグループ内の列数を示す `span` 属性を指定することができます。同時に、`style`（グループをインラインスタイルで指定する場合）や `class`（クラス名を使用して CSS や JavaScript でグループを指定する場合）などのグローバル属性を設定することも可能です。`<col>` 要素は、列の開始位置（例えば英語などの左書きの言語で記述された表の左端）から始まる表の列を表します。

具体例を見ていきましょう。次の表は学校の時間割を示しています。

```html live-sample___colgroup-col
<h1>School language timetable</h1>

<table>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>
  <tr>
    <td>&nbsp;</td>
    <th>Mon</th>
    <th>Tues</th>
    <th>Wed</th>
    <th>Thurs</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>1st period</th>
    <td>English</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>2nd period</th>
    <td>English</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>3rd period</th>
    <td>&nbsp;</td>
    <td>German</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>4th period</th>
    <td>&nbsp;</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>English</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```

この表には 8 つの列があります。`<colgroup>` と `<col>` の構造がどのように影響するかを詳しく見ていきましょう。

```html
<colgroup>
  <col span="2" />
  <col class="column-background" />
  <col class="column-fixed-width" />
  <col class="column-background" />
  <col class="column-background-border" />
  <col span="2" class="column-fixed-width" />
</colgroup>
```

`<col>` 要素を見てみましょう。

- 最初の要素には `span="2"` が設定されているため、テーブルの左から最初、かつ 2 つ目となる列を表します。これらの列自体にはスタイルを適用しませんが、後続の列を指定できるように記載する必要があります。
- 2 つ目と 4 つ目の要素には `span` 属性が設定されていないため、単一の列（この場合 3 つ目と 5 つ目の列）を表します。これらは `class` 属性に `column-background` が適用されています。
- 3 つ目の要素には `span` 属性が設定されておらず、`class` 属性として `column-fixed-width` が適用されています。これは 4 つ目の列を表します。
- 5 つ目の要素には `span` 属性が設定されておらず、`class` 属性に `column-background-border` が適用されています。これは 6 つ目の列を表します。
- 6 つ目の要素には `span="2"` が設定され、`class` 属性に `column-fixed-width` が適用されています。これは 7 つ目と 8 つ目の列を表します。

この例では CSS の大半を非表示にしていますが、`column-background`、`column-fixed-width`、`column-background-border` クラスが設定された `<col>` 要素にスタイルを適用するルールを以下に示します。

```css hidden live-sample___colgroup-col
html {
  font-family: sans-serif;
}

body {
  margin: 0 20px;
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

td {
  text-align: center;
}
```

```css live-sample___colgroup-col
.column-background {
  background-color: #97db9a;
}

.column-fixed-width {
  width: 40px;
}

.column-background-border {
  background-color: #dcc48e;
  border: 4px solid #c1437a;
}
```

- `column-background` クラスの付いた `<col>` 要素には、単一の背景色が設定されています。
- `column-fixed-width` クラスの付いた `<col>` 要素には、細い固定した幅が設定されています。
- `column-background-border` クラスの付いた `<col>` 要素には、塗りつぶしの背景色と太い境界が設定されています。

今のところ CSS の仕組みについて心配する必要はありません。詳細は後ほど [CSS スタイル設定の基礎](/ja/docs/Learn_web_development/Core/Styling_basics)モジュールで学びます。

以上の上のコードがどのように描画されるか見てみましょう。

{{embedlivesample("colgroup-col", "100%", 400)}}

それぞれの列がクラスで指定されたスタイルを受け取っている点に注目してください。

> [!NOTE]
> `<colgroup>` と `<col>` はスタイル設定を主に目的としていますが、これらは HTML の機能であるため、CSS モジュールではなくここで網羅しています。同時に、これらは限定的な機能であるとも言えるでしょう。[`<colgroup>` リファレンスページ](/ja/docs/Web/HTML/Reference/Elements/colgroup#usage_notes)で示されているように、`<col>` 要素に適用できるスタイルは限定されたサブセットのみであり、歴史的に利用できるその他の設定の大半は非推奨（削除済み、または削除予定）となっています。

<!--
## テーブル概念の対話的な復習

次のScrimba<sup>[_MDNラーニングパートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>からの埋め込みコンテンツは、この記事で網羅したテクニックの大半をまとめたインタラクティブなレッスンを提供します。重要なポイントの復習や追加練習のために、ぜひご覧ください。

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="HTML tables"></scrim-inline>
-->

## まとめ

以上で HTML 表の基本は終わりです。次の記事では、視覚障碍者が HTML 表をよりアクセスしやすくするために使用できる機能について見ていきます。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
