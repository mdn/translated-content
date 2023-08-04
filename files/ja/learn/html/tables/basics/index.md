---
title: HTML の表の基本
slug: Learn/HTML/Tables/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

この記事は、 HTML の表を始めるために、行やセルなどとても基本的なところから、見出し、複数列や行のセルの結合、スタイルを適用するためにセルの列をすべてグループ化する方法などを扱います。

| 前提条件: | HTML の基本 ([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を参照)。 |
| --------- | --------------------------------------------------------------------------- |
| 目標:     | 基本的に HTML 表に親しむこと。                                              |

## テーブルとは何か

テーブルとは、行と列からなる構造化されたデータの集合 (**表形式データ**) です。テーブルを使用すると、さまざまな種類のデータ間のある種の関連性、たとえば人と年齢、1 日または 1 週間、地元のプールの予定時刻などを示す値をすばやく簡単に検索できます。

![A sample table showing names and ages of some people - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![A swimming timetable showing a sample data table](swimming-timetable.png)

1800 年以降のこの米国国勢調査文書で証明されているように、テーブルは人間社会で非常に一般的に使用されており、長い間使用されてきました。

![A very old parchment document; the data is not easily readable, but it clearly shows a data table being used.](1800-census.jpg)

したがって、HTML の作成者が Web 上で表形式データを構造化して表示するための手段を提供したことは不思議ではありません。

### テーブルはどのように動作するか

テーブルの特徴は、厳密だということです。 情報は、行と列ヘッダーを視覚的に関連付けることによって簡単に解釈されます。例えば下の表を見て、62 個の衛星を持つ巨大ガス惑星である木星を見つけてください。関係する行と列との見出し部分を組み合わせて考えることで答えを見つけることができます。

<table>
  <caption>
    太陽系の惑星のデータ (<span class="tlid-translation translation" lang="ja"
      ><span title=""
        >惑星の事実は「<a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/"
          >Nasa の惑星情報シート - メートル法</a
        >」から引用</span
      ></span
    >)
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
      <th colspan="2" scope="rowgroup">
        矮星
      </th>
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
        2006年に惑星として分類されなくなりましたが、これは<a
          href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >物議を醸しています</a
        >。
      </td>
    </tr>
  </tbody>
</table>

正しく行われれば、盲目の人でも HTML テーブルの表形式データを解釈できます。HTML テーブルが成功すれば、晴眼者でも視覚障害者でも同様にユーザエクスペリエンスが向上するはずです。

### 表のスタイル付け

GitHub の[ライブサンプルもご覧ください](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)。テーブルがもう少し読みやすくなっているということに気付くでしょう。これは、今までこのページで見てきたテーブルには最小限のスタイルしか施されていないからです。対して、GitHub バージョンではより特別な意味を持った CSS が適用されています。

幻想にふけってはいけません。テーブルを Web 上で効果的に使うには、[CSS](/ja/docs/Learn/CSS) でスタイル情報を提供し、HTML でしっかりとした構造を提供する必要があります。このモジュールでは、HTML 部分に焦点を合わせています。CSS の部分については、ここを終えた後に[表のスタイリング](/ja/docs/Learn/CSS/Styling_boxes/Styling_tables)の記事を参照してください。

このモジュールでは CSS に焦点を当てませんが、スタイルを設定しなくてもデフォルトのテーブルより読みやすくなるように、最小限の CSS スタイルシートを使用できます。[スタイルシートはここ](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css)で、そしてスタイルシートを適用する [HTML テンプレート](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html)も見つけることができます。これらを一緒にすると、HTML テーブルを試すための良い出発点になります。

### HTML の表を使用するべきではない場面

HTML テーブルは表形式のデータに使用する必要があります - そのために設計されているのです。残念ながら、HTML テーブルを使用して Web ページをレイアウトする人が多くいました。ヘッダーを含む 1 行、コンテンツ列を含む 1 行、フッターを含む 1 行などです。[アクセシビリティ学習モジュール](/ja/docs/Learn/Accessibility)の[ページレイアウト](/ja/docs/Learn/Accessibility/HTML#Page_layouts)でより多くの詳細と例を見つけることができます。これは一般的に使用されていました。ブラウザー間での CSS サポートがひどいものだったからです。テーブルレイアウトは、現在ではあまり一般的ではありませんが、Web の一部の場所ではまだ見られることがあります。

つまり、[CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout)手法ではなく、テーブルをレイアウトに使用するのは得策ではありません。主な理由は次のとおりです。

1. **レイアウトテーブルは視覚障害のあるユーザのアクセシビリティを低下させます。** 視覚障害者が使用する[スクリーンリーダー](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders)は、HTML ページに存在するタグを解釈し、その内容をユーザに読み上げます。テーブルはレイアウトに適したツールではなく、マークアップは CSS のレイアウト手法よりも複雑であるため、スクリーンリーダーの出力はユーザにとってわかりにくいものになります。
2. **テーブルはタグスープを生成します。** 前述のように、テーブルレイアウトは通常、適切なレイアウト手法よりも複雑なマークアップ構造を含みます。これにより、コードの記述、保守、およびデバッグが困難になる可能性があります。
3. **テーブルは自動的には応答しません。** 適切なレイアウトコンテナ ({{htmlelement("header")}}、{{htmlelement("section")}}、{{htmlelement("article")}}、{{htmlelement("div")}}など) を使用する場合、その幅はデフォルトで親要素の 100％になります。一方、テーブルはデフォルトでは内容に応じてサイズが設定されているため、さまざまなデバイスで効果的に機能するようにテーブルレイアウトのスタイルを変更するには、追加の対策が必要です。

## アクティブラーニング: 最初の表の作成

テーブル理論については十分に説明したので、実用的な例に飛び込み、簡単なテーブルを作成しましょう。

1. まず最初に、ローカルマシンの新しいディレクトリーに、[blank-template.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) のローカルコピーを作成します。
2. すべてのテーブルの内容は、**[`<table></table>`](/ja/docs/Web/HTML/Element/table)** という 2 つのタグで囲まれています。HTML のボディの中にこれらを追加してください。
3. テーブル内の最小のコンテナは、**[`<td>`](/ja/docs/Web/HTML/Element/td)** 要素によって作成されるテーブルセルです ('td' は 'table data' を表します)。テーブルタグ内に次のコードを追加します。

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. 4 行のセルが必要な場合は、これらのタグを 3 回コピーする必要があります。テーブルの内容を次のように更新します。

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

お分かりのように、セルは互いの下に配置されているのではなく、同じ行に配置されています。 各 `<td>` 要素は単一のセルを作成し、それらが一緒になって最初の行を構成します。 追加するセルごとに行が長くなります。

この行が大きくなるのを防ぎ、後続のセルを 2 行目に配置するには、**[`<tr>`](/ja/docs/Web/HTML/Element/tr)** 要素を使用する必要があります ('tr' は 'table row' を表します)。今これを調査しましょう。

1. 以下のように、既に作成した 4 つのセルを `<tr>` タグ内に配置します。

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. 1 行作成したら、あと 1、2 行作成してみましょう。各行は追加の `<tr>` 要素で囲み、各セルを `<td>` に含める必要があります。

これにより、テーブルは次のようになります。

| Hi, I'm your first cell. | I'm your second cell. | I'm your third cell. | I'm your fourth cell. |
| ------------------------ | --------------------- | -------------------- | --------------------- |
| Second row, first cell.  | Cell 2.               | Cell 3.              | Cell 4.               |

> **メモ:** GitHub では [simple-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/simple-table.html) としても見つけることができます ([こちらも参照してください](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html))。

## \<th> 要素による見出しの追加

それでは表の見出し、つまり行または列の先頭に配置され、その行または列に含まれるデータの種類を定義する特別なセルに注目しましょう(例として、この記事の最初の例の「Person」セルと「Age」セルを参照してください)。それらがなぜ有用であるかを説明するために、次の表の例を見てください。まずはソースコードから：

```html
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

実際にレンダリングされたテーブルは次のとおりです。

|               | Knocky                    | Flor            | Ella         | Juan                      |
| ------------- | ------------------------- | --------------- | ------------ | ------------------------- |
| Breed         | Jack Russell              | Poodle          | Streetdog    | Cocker Spaniel            |
| Age           | 16                        | 9               | 10           | 5                         |
| Owner         | Mother-in-law             | Me              | Me           | Sister-in-law             |
| Eating Habits | Eats everyone's leftovers | Nibbles at food | Hearty eater | Will eat till he explodes |

ここで問題は、何が起こっているかを知ることはできますが、データを相互参照することができるほど簡単ではないことです。列と行の見出しが何らかの形で目立つ場合は、その方がはるかに良いでしょう。

### アクティブラーニング: 表の見出し

このテーブルを改良してみましょう。

1. まず、あなたのローカルマシンの新しいディレクトリーに [dogs-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table.html) と [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) ファイルのローカルコピーを作ります。HTML には、上で見たのと同じ Dogs の例が含まれています。
2. テーブルのヘッダを視覚的にも意味的にもヘッダとして認識させるには、**[`<th>`](/ja/docs/Web/HTML/Element/th)** 要素を使用します ('th' は 'table header' を表します)。これは `<td>` とまったく同じように機能しますが、通常のセルではなくヘッダーを表す点が異なります。HTML を開き、テーブルのヘッダを囲む全ての `<td>` 要素を `<th>` 要素に変更してください。
3. HTML を保存してブラウザーにロードすると、ヘッダーがヘッダーらしく見えます。

> **メモ:** 完成した例は GitHub の [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table-fixed.html) にあります ([こちらもご覧ください](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html))。

### なぜ見出しは便利なのか

私たちはすでにこの質問に部分的に答えました — ヘッダーがはっきり目立つときには探しているデータを見つけやすく、デザインは一般的に見栄えがよくなります。

> **メモ:** テーブルの見出しにはデフォルトのスタイルがいくつかあります。テーブルに独自のスタイルを追加しなくても、目立つように太字で中央に配置されています。

テーブルヘッダには、`scope` 属性 (次の記事で学ぶことになります) とともに、追加の利点もあります。それらを使用すると、各ヘッダーを同じ行または列のすべてのデータに関連付けることで、テーブルをよりアクセスしやすくすることができます。これにより、スクリーンリーダーはデータの行全体または列全体を一度に読み取ることができます。これは非常に便利です。

## セルを複数の行や列で結合できるようにする

セルを複数の行または列にまたがるようにしたい場合があるかもしれません。次の簡単な例を見てください。これは一般的な動物の名前を示しています。場合によっては、動物の名前の横にオスとメスの名前を表示したいことがあります。そうでない場合もあるでしょう。そのような場合は、動物の名前を表全体に広げたいだけです。

最初のマークアップは次のようになります。

```html
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

しかし、出力結果は私たちが望むものではありません。

| Animals      |      |
| ------------ | ---- |
| Hippopotamus |      |
| Horse        | Mare |
| Stallion     |      |
| Crocodile    |      |
| Chicken      | Hen  |
| Rooster      |      |

"Animals"、"Hippopotamus"、および "Crocodile" が 2 列にまたがり、"Horse" と "Chicken" が 2 行にまたがるようにする方法が必要です。幸いなことに、テーブルのヘッダーとセルには `colspan` 属性と `rowspan` 属性があり、それを使って実行できます。どちらも単位なしの数値を受け入れます。これはスパンする行数または列数と同じです。たとえば、`colspan="2"` を指定すると、セルは 2 列にまたがります。

このテーブルを改善するために `colspan` と `rowspan` を使用しましょう。

1. まず、ご使用のローカルマシンの新しいディレクトリーに、[animals-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table.html) ファイルと [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) ファイルのローカルコピーを作成します。HTML には、上記と同じ動物の例が含まれています。
2. 次に、`colspan` を使用して "Animals"、"Hippopotamus"、および "Crocodile" を 2 列にまたがって作成します。
3. 最後に、`rowspan` を使用して "Horse" と "Chicken" を 2 行にまたがるようにします。
4. 改善を確認するには、ブラウザーでコードを保存して開きます。

> **メモ:** 完成した例は GitHub の [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table-fixed.html) にあります ([こちらもご覧ください](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html))。

## 列への共通のスタイル付け

先に進む前に、この記事で最後に紹介する機能があります。
HTML では、データの列全体のスタイル情報を 1 か所にまとめて定義することができます — **[`<col>`](/ja/docs/Web/HTML/Element/col)** 要素と **[`<colgroup>`](/ja/docs/Web/HTML/Element/colgroup)** 要素です。列にスタイルを指定するのは少々面倒で非効率的な場合があるためです。列内の `<td>` や `<th>` ごとにスタイル情報を指定するか、{{cssxref(":nth-child()")}} などの複雑なセレクタを使用する必要があります。

次の簡単な例を見てください。

```html
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```

これにより、次のような出力結果が得られます。

| Data 1   | Data 2 |
| -------- | ------ |
| Calcutta | Orange |
| Robots   | Jazz   |

列内の 3 つすべてのセルにわたってスタイル情報を繰り返す必要があるため、これは理想的ではありません (実際のプロジェクトでは 3 つすべてに `class` を設定し、別のスタイルシートでスタイルを指定することになります)。これを行う代わりに、`<col>` 要素で情報を 1 回指定できます。`<col>` 要素は、開始 `<table>` タグのすぐ下の `<colgroup>` コンテナ内で指定されます。次のようにテーブルを指定することで、上と同じ効果を生み出すことができます。

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

事実上、2 つの "スタイル列" を定義しています。1 つは各列のスタイル情報を指定しています。最初の列にはスタイルを設定していませんが、空白の `<col>` 要素を含める必要があります。そうでない場合、スタイルは最初の列にも適用されます。

両方の列にスタイル情報を適用する場合は、次のように span 属性を持つ 1 つの `<col>` 要素を含めるだけで済みます。

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

`colspan` や `rowspan` と同じように、`span` はスタイルを適用したい列の数を指定する単位なしの数値を取ります。

### アクティブラーニング: colgroup と col

今こそ自分でやってみるべき時です。

以下に言語教師のタイムテーブルを見ることができます。金曜日に、彼女は一日中オランダ語を教える新しいクラスを持っていますが、彼女はまた火曜日と木曜日に数期間ドイツ語を教えています。彼女は教えている日を含むコラムをハイライトしたいと思います。

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 320)}}

以下の手順に従ってテーブルを再作成してください。

1. まず、[timetable.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable.html) ファイルのローカルコピーをあなたのローカルマシンの新しいディレクトリーに作成してください。HTML には、上で見たのと同じ表から、列のスタイル情報を除いたものが含まれています。
2. `<col>` 要素を追加することができる `<table>` タグのすぐ下のテーブルの上部に `<colgroup>` 要素を追加します (以下の残りの手順を参照)。
3. 最初の 2 つの列はスタイルなしのままにする必要があります。
4. 3 列目に背景色を追加します。`style` 属性の値は`background-color:#97DB9A;` です。
5. 4 列目に別の幅を設定します。`style` 属性の値は `width: 42px;` です。
6. 5 列目に背景色を追加します。`style` 属性の値は `background-color: #97DB9A;` です。
7. これは特別な日であり、彼女は新しいクラスを教えていることを示すために、6 番目の列に異なる背景色と境界線を追加します。`style` 属性の値は `background-color:#DCC48E; border:4px solid #C1437A;` です。
8. The last two days are free days, so just set them to no background color but a set width; the value for the `style` attribute is `width: 42px;`
   最後の 2 日間は空き日なので、背景色を設定せずに幅を設定します。`style` 属性の値は `width: 42px;` です。

例でどのようにして上手くいくかを見てください。どうしていいか分からなくなったり、作業をチェックしたい場合は、[timetable-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html) として GitHub に私たちのバージョンを見つけることができます ([それもライブを見てください](https://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html))。

## まとめ

HTML テーブルの基本はこれで終わりです。次の記事では、もう少し高度なテーブルの機能を見て、視覚障害者にとってそれらがどれほどアクセシブルであるかを考えます。

{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
