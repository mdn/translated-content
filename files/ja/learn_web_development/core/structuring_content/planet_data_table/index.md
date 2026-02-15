---
title: "課題: 惑星データの構造化"
short-title: "課題: 惑星データ表"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: ee677b2c4d4a226fe4aedf05b2b156cae8a2bb95
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

表の評価では、太陽系の惑星に関するいくつかのデータを提供し、それを HTML 表に構造化しましょう。

## 出発点

1. コンピューターの適当な場所に、`planet-data-table` という名前の新しいフォルダーを作成してください（またはオンラインエディターを開き、新しいプロジェクトを作成するための必要な手順を実行してください）。
2. 次の HTML リストを、フォルダー内の `index.html` というファイルに保存してください（またはオンラインエディターの HTML ペインに貼り付けてください）。

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Planet data table</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
     </head>
     <body>
       <h1>Planet data table</h1>
     </body>
   </html>
   ```

3. 以下の CSS リストを、フォルダー内の `style.css` というファイルに保存してください（またはオンラインエディターの CSS ペインに貼り付けてください）。

   ```css live-sample___planet-data-table
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

   .column-border {
     border: 2px solid black;
   }
   ```

4. 次のデータをすぐに使えるように準備しておいてください。このデータを HTML 内の HTML データ表に変換する必要があります。

   ```plain
   Rows

   Terrestrial planets

   Mercury 0.330 4,879 5427 3.7 4222.6 57.9 167 0 Closest to the Sun
   Venus 4.87 12,104 5243 8.9 2802.0 108.2 464 0
   Earth 5.97 12,756 5514 9.8 24.0 149.6 15 1 Our world
   Mars 0.642 6,792 3933 3.7 24.7 227.9 -65 2 The red planet

   Jovian planets

   Gas giants

   Jupiter 1898 142,984 1326 23.1 9.9 778.6 -110 67 The largest planet
   Saturn 568 120,536 687 9.0 10.7 1433.5 -140 62

   Ice giants

   Uranus 86.8 51,118 1271 8.7 17.2 2872.5 -195 27
   Neptune 102 49,528 1638 11.0 16.1 4495.1 -200 14

   Dwarf planets*

   Pluto 0.0146 2,370 2095 0.7 153.3 5906.4 -225 5 Declassified as a planet in 2006, but this <a href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/">remains controversial</a>.

   Columns

   Name
   Mass (10<sup>24</sup>kg)
   Diameter (km)
   Density (kg/m<sup>3</sup>)
   Gravity (m/s<sup>2</sup>)
   Length of day (hours)
   Distance from Sun (10<sup>6</sup>km)
   Mean temperature (°C)
   Number of moons
   Notes

   Caption

   Data about the planets of our solar system (Planetary facts taken from <a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/">Nasa's Planetary Fact Sheet - Metric</a>).
   ```

## プロジェクト概要

あなたは学校で働いています。現在生徒たちは私たちの太陽系の惑星を研究しています、そしてあなたは彼らに惑星についての事実と数字を調べるために分かりやすいデータのセットを提供したいです。HTML データ表が理想的です — 利用可能な生データを取得し、それを表に変換する必要があります。以下の手順に従ってください。

必要なデータはすべて指定されたデータ一覧に含まれています。データの見え方に問題がある場合は、下記のライブサンプルを参照するか、図を描いてみてください。

1. 外部コンテナー、表ヘッダー、および表本体を指定して表を作成します。この例では表フッターは必要ありません。
2. 提供されたキャプションを表に追加します。
3. すべての列見出しを含む行を表ヘッダーに追加します。
4. すべての行見出しを意味的に見出しにすることを忘れずに、表本体内にすべてのコンテンツ行を作成します。
5. すべてのコンテンツが正しいセルに挿入されていることを確認してください — 生データでは、惑星データの各行が関連する惑星の隣に表示されます。
6. 行見出しと列見出しを、それらが見出しとして機能する行、列、または行グループと明確に関連付けられるように属性を追加します。
7. 惑星名の行見出しをすべて含む列の周囲にのみ、黒い [border](/ja/docs/Web/CSS/Reference/Properties/border) を追加してください。適切な `<colgroup>`/`<col>` 構造と、CSS で指定された `.column-border` クラスのスタイルを使用してこれを行ってください。

## ヒントとコツ

- ヘッダー行の最初のセルは空白で、2 列にまたがる必要があります。
- 惑星名の行見出し (例: 土星) の左側にあるグループの行見出し (例: 木星型惑星) は、整理するのが少し面倒です。それぞれが正しい行数と列数にまたがるようにする必要があります。
- ヘッダーを行/列に関連付ける 1 つの方法は、他の方法よりもはるかに簡単です。

## 例

正しくマークアップされた後、表は次のようになります。行き詰まった場合は、ライブサンプルの下記にある解決策を調べてください。

{{embedlivesample("planet-data-table", "100%", 650)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な HTML は、次のようになるはずです。

```html live-sample___planet-data-table
<h1>Planet data table</h1>

<table>
  <caption>
    Data about the planets of our solar system (Planetary facts taken from
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa's Planetary Fact Sheet - Metric</a
    >).
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-border" />
    <col span="9" />
  </colgroup>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Name</th>
      <th scope="col">Mass (10<sup>24</sup>kg)</th>
      <th scope="col">Diameter (km)</th>
      <th scope="col">Density (kg/m<sup>3</sup>)</th>
      <th scope="col">Gravity (m/s<sup>2</sup>)</th>
      <th scope="col">Length of day (hours)</th>
      <th scope="col">Distance from Sun (10<sup>6</sup>km)</th>
      <th scope="col">Mean temperature (°C)</th>
      <th scope="col">Number of moons</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="4" colspan="2" scope="rowgroup">Terrestrial planets</th>
      <th scope="row">Mercury</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>Closest to the Sun</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
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
      <th scope="row">Earth</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>Our world</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>The red planet</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Jovian planets</th>
      <th rowspan="2" scope="rowgroup">Gas giants</th>
      <th scope="row">Jupiter</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>The largest planet</td>
    </tr>
    <tr>
      <th scope="row">Saturn</th>
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
      <th rowspan="2" scope="rowgroup">Ice giants</th>
      <th scope="row">Uranus</th>
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
      <th scope="row">Neptune</th>
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
      <th colspan="2" scope="rowgroup">Dwarf planets</th>
      <th scope="row">Pluto</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Declassified as a planet in 2006, but this
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >remains controversial</a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
