---
title: バカ話ジェネレーター
slug: Learn/JavaScript/First_steps/Silly_story_generator
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

この評価試験では、このモジュールを通して身に付けた知識を生かして、ランダムなバカ話を生成する楽しいアプリを作ります。楽しんでください！

| 前提条件: | この評価試験を試す前に、このモジュール内のすべての記事を一通り作業しておくべきです。 |
| --------- | ------------------------------------------------------------------------------------ |
| 目的:     | JavaScript の基礎である、変数、数値、演算子、文字列、配列などの理解をテストする。    |

## 開始地点

評価試験を開始するには...

- GitHub からサンプル用の [HTML ファイルを取って](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html)きて自分のコンピュータの新しいディレクトリーに `index.html` という名前で保存します。ここには見た目をきれいにするため、CSS も含まれています。
- [この生テキストを含むページ](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt)に移動してどこか別のブラウザータブで開いたままにしておきます。後で必要となります。

> **メモ:** 上記の手順に代わって、[JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) のようなサイトを使って評価試験を実施できます。HTML、CSS、JavaScript をオンラインエディターにペーストできます。使っているオンラインエディターが独立した JavaScript パネルを持たない場合、HTML ページ内の `<script>` 要素内に書いても問題ありません。

## プロジェクトの要点

HTML および CSS と少しのテキストと JavaScript 関数がありますね。JavaScript を必要なだけ書いて、下記のような動作をするプログラムを書きましょう。

- "Generate random story" ボタンが押された時にバカな話を生成する。
- バカな話を生成するボタンが押される前に "Enter custom name" のテキストフィールドに名前が入力されていた場合には、既定の "Bob" という名前を入力された名前に置き換える。
- バカな話を生成するボタンが押される前に UK のラジオボタンがチェックされていた場合のみ、既定の US (米国) の重さと気温を UK (英国) の同等な単位に変換する。
- ボタンが再度 (何度でも) 押されたら、別のランダムなバカ話を生成する。

下記のスクリーンショットは完成したプログラムが出力する例を表しています:

![](assessment-1.png)

これ以上のアイデアを与えるには[完成プログラムの例を見てください](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (ソースコードは覗かないで！)

## 完成させるステップ

以下の項目が達成すべきリストです。

基本的なセットアップ

1. `index.html` ファイルと同じディレクトリーに `main.js` を作ります。
2. {{htmlelement("script")}} 要素を使用して、HTML ファイルに `main.js` への参照を外部 JavaScript として適用します。{{htmlelement("script")}} 要素は `</body>` タグの直前に配置します。

最初の変数と関数

1. 先ほどのテキストファイル内の "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" という見出しの直後にあるコードをコピーして `main.js` の先頭に貼り付けます。これで "Enter custom name" テキストフィールド (`customName`) 、"Generate random story" ボタン (`randomize`) 、HTML の body の下のほうにある {{htmlelement("p")}} 要素 (`story`) への参照を保持することができます。さらに `randomValueFromArray()` という、引数として配列を取りその配列からランダムに 1 つの項目を戻り値として返す関数が使えるようになります。
2. 次にテキストファイルの 2 番目のセクションを見てみましょう。"2. RAW TEXT STRINGS" という見出しのところです。このプログラムの入力となる文字列が書かれています。`main.js` の内部で使用できるように、これらの文字列を変数に保持してください。

   1. 先頭の長い長い文字列を `storyText` という変数に格納します。
   2. 3 つセットになっている最初の文字列の組を `insertX` という配列に格納します。
   3. 2 組目の文字列を `insertY` という配列に格納します。
   4. 3 組目の文字列を `insertZ` という配列に格納します。

イベントハンドラーと未完成の関数の配置:

1. テキストファイルに戻ります。
2. "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" という見出しの直後にあるコードをコピーして `main.js` ファイルの最後に貼り付けます。これで、

   - `randomize` 変数へのクリックイベントリスナーが追加され、その変数に紐づくボタンが押された場合に `result()` 関数が実行されるようになります。
   - 部分的に実装されている `result()` 関数の定義が追加されます。この課題の中で、この関数の残りを実装し、正しく動作するようにします。

`result()` 関数の作成

1. `newStory` という変数を作り、`storyText` の値を `newStory` 変数に格納します。これはボタンが押された場合に、毎回新しい話を作り出すために必要となります。もし `storyText` 変数自体に変更を加えてしまうと一度しか面白い話が生成できなくなってしまいます。
2. `xItem`、`yItem`、`zItem` という変数を 3 つ作成し、それぞれ対応する配列で呼び出した `randomValueFromArray()` の戻り値を設定します (それぞれの配列に含まれる文字列がランダムに選ばれます)。例えば、関数を呼び出して `insertX` から一つの文字列を取得するには `randomValueFromArray(insertX)` のように書きます。
3. 次に `newStory` 文字列内の `:insertx:`、`:inserty:`、`:insertz:` という 3 か所のプレースホルダーをそれぞれ `xItem`、`yItem`、`zItem` に格納されている文字列で置き換えます。ここでは適切なメソッドを使用して、`newStory` に対して何度メソッドを呼び出しても `newStory` 自体の値を変えずに置換された文字列が手に入るようにしてください。これでボタンが何度押されても、プレースホルダーの値をランダムなバカ話で置き換えることができます。もう少しヒントを出すと、そのメソッドは見つけた最初の部分文字列だけを置き換えるため、同じ部分文字列を置換するためには 2 回メソッドを呼び出す必要があるでしょう。
4. 最初の `if` ブロックで、`newStory` の文字列内で見つかる 'Bob' という文字列を `name` 変数の値で置換するため、別の文字列置換のメソッド呼び出し追加します。このブロック内では、「もし ( if ) `customName` テキストフィールドに何かが入力されていれば、Bob をその文字列で置き換える」ということを言っています。
5. 次の `if` ブロックの中では、`uk` のラジオボタンが選択されているかどうかを調べています。もし選択されているのなら、重さと温度の単位をポンド・華氏から、ストーン・摂氏に変換したいと思います。そのために必要なことは...

   1. ポンドからストーンへ変換する公式、および、華氏から摂氏へ変換する公式を調べます。
   2. `weight` 変数が宣言されている行内の、300 を ポンドからストーンに変換した値で置き換えます。そして `' stone'` (ストーン) を `Math.round()` の結果に対して、その後ろに結合します。
   3. `temperature` 変数が宣言されている行内の、94 を華氏から摂氏に変換した値で置き換えます。こちらには `' centigrade'` (摂氏～度) という文字を `Math.round()` の結果に対して、後ろに結合します。
   4. 上記 2 つの変数の宣言の直後に、さらにもう 2 つ文字列を置換するコードを書いて、'94 farenheit' を `temperature` 変数の内容に、'300 pounds' を `weight` 変数の内容にそれぞれ置換します。

6. 最後に、関数の下から 2 行目にある、`story` 変数の `textContent` プロパティ(段落を参照している) を、`newStory` 変数の内容で置き換えます。

## ヒントと tips

- JavaScript を HTML に適用する以外に、HTML を変更する必要は全くありません。
- もし、JavaScript が HTML に適切に適用されているかどうかを知りたければ、JavaScript ファイルから一時的に全てのコードを削除して、確実に何かが起きるようなコードを追加して、JavaScript ファイルを保存して HTML ファイルを更新してみましょう。次の例は {{htmlelement("html")}} 要素の背景色を赤くするコードです。JavaScript が適切に HTML に適用されていれば、ブラウザーのウィンドウが真っ赤になることでしょう。

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [Math.round()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round) は JavaScript の組み込みメソッドで、計算結果を整数値に四捨五入します。
- 置き換えなければならない文字列のインスタンスが３つあります。 `replace()` メソッドを複数回繰り返すか、正規表現を使用するかします。具体的には、 `var text = 'I am the biggest lover, I love my love'; text.replace(/love/g,'like');` とするとすべての 'love' のインスタンスを 'like' に置き換えます。なお、 String は変化しないことに注意してください。

## 評価

もし特定の組織の元でこのコースを受けているのなら、先生やメンターに出来たものを見せて、評価をお願いしてみましょう。もし自分だけでやっているのなら、[この評価試験のスレッド](https://discourse.mozilla.org/t/silly-story-generator-assessment/24686)や、[Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルに評価をお願いしてみましょう。まずはやってみましょう。カンニングしても得られるものはないですよ！

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
