---
title: "評価: 太陽系の惑星のデータを構造化する"
slug: Learn/HTML/Tables/Structuring_planet_data
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

テーブルの評価では、太陽系の惑星に関するいくつかのデータを提供し、それを HTML テーブルに構造化しましょう。

| 前提知識: | この評価を行う前に、このモジュールのすべての記事について学んでいるべきです。 |
| --------- | ---------------------------------------------------------------------------- |
| 目標:     | HTML の表やそれに付随する機能に関する理解を確認する。                        |

## はじめに

この評価を開始するには、ローカルコンピュータの新しいディレクトリーに、[blank-template.html](https://github.com/mdn/learning-area/blob/master/html/tables/assessment-start/blank-template.html)、[minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/assessment-start/minimal-table.css)、および [planets-data.txt](https://github.com/mdn/learning-area/blob/master/html/tables/assessment-start/planets-data.txt) のローカルコピーを作成します。

> **メモ:** 代わりとして、[JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) のようなサイトを使って評価することもできます。HTML、CSS、および JavaScript をこれらのオンラインエディタのいずれかに貼り付けることができます。使用しているオンラインエディタに個別の JavaScript/CSS パネルがない場合は、それらを HTML ページ内に `<script>`/`<style>` 要素をインラインで配置してください。

## やることの概要

あなたは学校で働いています。現在生徒たちは私たちの太陽系の惑星を研究しています、そしてあなたは彼らに惑星についての事実と数字を調べるために分かりやすいデータのセットを提供したいです。HTML データテーブルが理想的です — 利用可能な生データを取得し、それをテーブルに変換する必要があります。以下の手順に従ってください。

完成した表は次のような外観を備えているはずです:

![](assessment-table.png)

また、[ここに掲載されている例を見る](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)こともできます (ソースコードを見ないでください — チートしないでください)。

## 手順

次の手順では、表の例を完成させるために必要な作業について説明します。必要なすべてのデータは `planets-data.txt` ファイルに含まれています。データをうまく視覚化できない場合は、上記の実際の例を見てみるか、図を描いてみてください。

1. `blank-template.html` のコピーを開き、外部コンテナ、テーブルヘッダー、およびテーブル本体を指定してテーブルを作成します。この例ではテーブルフッターは必要ありません。
2. 提供されたキャプションを自分のテーブルに追加します。
3. すべての列ヘッダーを含む行をテーブルヘッダーに追加します。
4. すべての行見出しを意味的に見出しにすることを忘れずに、テーブル本体内にすべてのコンテンツ行を作成します。
5. すべてのコンテンツが正しいセルに挿入されていることを確認してください — 生データでは、惑星データの各行が関連する惑星の隣に表示されます。
6. 行ヘッダーと列ヘッダーを、それらが見出しとして機能する行、列、または行グループと明確に関連付けられるように属性を追加します。
7. すべての惑星名行ヘッダーを含む列のすぐ周りに黒い枠線を追加します。

## ヒントと TIPS

- ヘッダー行の最初のセルは空白で、2 列にまたがる必要があります。
- 惑星名の行見出し (例: _土星_) の左側にあるグループの行見出し (例: _木星型惑星_) は、整理するのが少し面倒です。それぞれが正しい行数と列数にまたがるようにする必要があります。
- ヘッダーを行/列に関連付ける 1 つの方法は、他の方法よりもはるかに簡単です。

## 評価

あなたが組織的コースの一環としてこの評価に従っている場合、採点のために作品を教師/メンターに渡すことができるはずです。もし自己学習しているのであれば、[この練習問題についてのディスカッションスレッド](https://discourse.mozilla.org/t/structuring-planet-data-assessment/24680)、または [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで尋ねることで、非常に簡単にマーキングガイドを入手することができます。最初にエクササイズをしてみてください。不正をすることによって得られるものは何もありません！

{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
