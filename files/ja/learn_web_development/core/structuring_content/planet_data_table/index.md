---
title: "課題: 惑星データの構造化"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

テーブルの評価では、太陽系の惑星に関するいくつかのデータを提供し、それを HTML テーブルに構造化しましょう。

## 出発点

この評価を開始するには、ローカルコンピューターの新しいディレクトリーに、[blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html)、[minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css)、および [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) のローカルコピーを作成します。

> [!NOTE]
> 代わりとして、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/) や [Glitch](https://glitch.com/) のようなサイトを使って評価することもできます。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## プロジェクト概要

あなたは学校で働いています。現在生徒たちは私たちの太陽系の惑星を研究しています、そしてあなたは彼らに惑星についての事実と数字を調べるために分かりやすいデータのセットを提供したいです。HTML データテーブルが理想的です — 利用可能な生データを取得し、それをテーブルに変換する必要があります。以下の手順に従ってください。

## 手順

次の手順では、表の例を完成させるために必要な作業について説明します。必要なすべてのデータは `planets-data.txt` ファイルに含まれています。データをうまく視覚化できない場合は、上記の実際の例を見てみるか、図を描いてみてください。

1. `blank-template.html` のコピーを開き、外部コンテナー、テーブルヘッダー、およびテーブル本体を指定してテーブルを作成します。この例ではテーブルフッターは必要ありません。
2. 提供されたキャプションを自分のテーブルに追加します。
3. すべての列ヘッダーを含む行をテーブルヘッダーに追加します。
4. すべての行見出しを意味的に見出しにすることを忘れずに、テーブル本体内にすべてのコンテンツ行を作成します。
5. すべてのコンテンツが正しいセルに挿入されていることを確認してください — 生データでは、惑星データの各行が関連する惑星の隣に表示されます。
6. 行ヘッダーと列ヘッダーを、それらが見出しとして機能する行、列、または行グループと明確に関連付けられるように属性を追加します。
7. すべての惑星名行ヘッダーを含む列のすぐ周りに黒い枠線を追加します。

## ヒントとコツ

- ヘッダー行の最初のセルは空白で、2 列にまたがる必要があります。
- 惑星名の行見出し (例: _土星_) の左側にあるグループの行見出し (例: _木星型惑星_) は、整理するのが少し面倒です。それぞれが正しい行数と列数にまたがるようにする必要があります。
- ヘッダーを行/列に関連付ける 1 つの方法は、他の方法よりもはるかに簡単です。

## 例

完成した表は次のような外観になるはずです。

![複雑な表にはその上にキャプションがあります。一番上の段のセルは列ヘッダーです。ヘッダーは3段組みあります。最初の 2 つの列はセルが結合され、3 つ目の列は各行の個別のヘッダーです。テキストはすべて中央揃えです。ヘッダーと他にも背景色があります。](assessment-table.png)

また、[ここに掲載されている例を見る](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)こともできます（ソースコードを見ないでください — チートしないでください）。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
