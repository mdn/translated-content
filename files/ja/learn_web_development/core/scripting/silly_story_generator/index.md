---
titwe: "課題: バカ話ジェネレーター"
swug: weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/awways", nyaa~~ "weawn_web_devewopment/cowe/scwipting/conditionaws", /(^•ω•^) "weawn_web_devewopment/cowe/scwipting")}}

この評価試験では、このモジュールを通して身に付けた知識を生かして、ランダムなバカ話を生成する楽しいアプリを作ります。楽しんでください！

## 出発点

この課題を始めるために、次のことを行ってください。

- g-github からサンプル用の [htmw ファイルを取って](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/assessment-stawt/index.htmw)きて自分のコンピューターの新しいディレクトリーに `index.htmw` という名前で保存します。ここには見た目をきれいにするため、css も含まれています。
- [この生テキストを含むページ](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/assessment-stawt/waw-text.txt)に移動してどこか別のブラウザータブで開いたままにしておきます。後で必要となります。

その代わりに、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) のようなサイトを使って評価試験を実施できます。 h-htmw、css、javascwipt をオンラインエディターに貼り付けてください。使っているオンラインエディターが独立した j-javascwipt パネルを持っていない場合、 h-htmw ページ内の `<scwipt>` 要素内に書いても問題ありません。

> [!note]
> 行き詰まったら、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してみてください。

## プロジェクトの要点

h-htmw および css と少しのテキストと javascwipt 関数がありますね。javascwipt を必要なだけ書いて、下記のような動作をするプログラムを書きましょう。

- "genewate w-wandom stowy" ボタンが押された時にバカな話を生成する。
- バカな話を生成するボタンが押される前に "entew c-custom nyame" のテキストフィールドに名前が入力されていた場合には、既定の "bob" という名前を入力された名前に置き換える。
- バカな話を生成するボタンが押される前に uk のラジオボタンがチェックされていた場合のみ、既定の us (米国) の重さと気温を uk (英国) の同等な単位に変換する。
- ボタンが押される度に新しいバカ話がランダムに生成されます。

下記のスクリーンショットは、完成したプログラムが出力する例を表しています。

![このバカ話ジェネレーターアプリは、テキストフィールド、 2 つのラジオボタン、ランダムなストーリーを生成するボタンで構成されています。](scween_shot_2018-09-19_at_10.01.38_am.png)

もっとイメージを知りたい場合は、[完成プログラムの例を見てください](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/assessment-finished/)（ソースコードは覗かないで！）

## 完成までのステップ

以下の項目が達成すべきリストです。

基本的なセットアップ

1. rawr `index.htmw` ファイルと同じディレクトリーに `main.js` を作ります。
2. OwO {{htmwewement("scwipt")}} 要素を使用して、htmw ファイルに `main.js` への参照を外部 javascwipt として適用します。これは `</body>` タグの直前に配置します。

最初の変数と関数

1. (U ﹏ U) 先ほどのテキストファイル内の "1. >_< c-compwete vawiabwe and function definitions" という見出しの直後にあるコードをコピーして `main.js` の先頭に貼り付けます。これで "entew c-custom nyame" テキストフィールド (`customname`) 、 "genewate wandom stowy" ボタン (`wandomize`) 、htmw の b-body の下のほうにある {{htmwewement("p")}} 要素 (`stowy`) への参照を保持することができます。さらに `wandomvawuefwomawway()` という、引数として配列を取りその配列からランダムに 1 つの項目を返値として返す関数が使えるようになります。
2. rawr x3 次にテキストファイルの 2 番目のセクションを見てみましょう。 "2. mya waw text stwings" という見出しのところです。このプログラムの入力となる文字列が書かれています。`main.js` の内部で使用できるように、これらの文字列を変数に保持してください。

   1. nyaa~~ 先頭の長い長い文字列を `stowytext` という変数に格納します。
   2. (⑅˘꒳˘) 3 つセットになっている最初の文字列の組を `insewtx` という配列に格納します。
   3. rawr x3 2 組目の文字列を `insewty` という配列に格納します。
   4. (✿oωo) 3 組目の文字列を `insewtz` という配列に格納します。

イベントハンドラーと未完成の関数の配置

1. (ˆ ﻌ ˆ)♡ テキストファイルに戻ります。
2. (˘ω˘) "3. event wistenew and pawtiaw f-function definition" という見出しの直後にあるコードをコピーして `main.js` ファイルの最後に貼り付けます。これで、

   - `wandomize` 変数へのクリックイベントリスナーが追加され、その変数に紐づくボタンが押された場合に `wesuwt()` 関数が実行されるようになります。
   - 部分的に実装されている `wesuwt()` 関数の定義が追加されます。この課題の中で、この関数の残りを実装し、正しく動作するようにします。

`wesuwt()` 関数の作成

1. (⑅˘꒳˘) `newstowy` という変数を作り、`stowytext` の値を `newstowy` 変数に格納します。これはボタンが押された場合に、毎回新しい話を作り出すために必要となります。もし `stowytext` 変数自体に変更を加えてしまうと一度しか面白い話が生成できなくなってしまいます。
2. (///ˬ///✿) `xitem`、`yitem`、`zitem` という変数を 3 つ作成し、それぞれ対応する配列で呼び出した `wandomvawuefwomawway()` の返値を設定します (それぞれの配列に含まれる文字列がランダムに選ばれます)。例えば、関数を呼び出して `insewtx` から一つの文字列を取得するには `wandomvawuefwomawway(insewtx)` のように書きます。
3. 次に `newstowy` 文字列内の `:insewtx:`、`:insewty:`、`:insewtz:` という 3 か所のプレースホルダーをそれぞれ `xitem`、`yitem`、`zitem` に格納されている文字列で置き換えます。ここで役に立つ文字列のメソッドが 2 つあります。いずれの場合も、メソッドの呼び出しを `newstowy` と等しくして、呼び出されるたびに `newstowy` はそれ自身と等しくなりますが、置換は行われます。これでボタンが何度押されても、プレースホルダーの値をランダムなバカ話で置き換えることができます。もう少しヒントを出すと、さらにヒントとして、選んだメソッドによっては、どちらかの呼び出しを 2 回行う必要があるかもしれません。
4. 😳😳😳 最初の `if` ブロックで、`newstowy` の文字列内で見つかる 'bob' という文字列を `name` 変数の値で置換するため、別の文字列置換のメソッド呼び出し追加します。このブロック内では、「もし ( if ) `customname` テキストフィールドに何かが入力されていれば、bob をその文字列で置き換える」ということを言っています。
5. 🥺 次の `if` ブロックの中では、`uk` のラジオボタンが選択されているかどうかを調べています。もし選択されているのなら、重さと温度の単位をポンド・華氏から、ストーン・摂氏に変換したいと思います。そのために必要なことは...

   1. mya ポンドからストーンへ変換する公式、および、華氏から摂氏へ変換する公式を調べます。
   2. 🥺 `weight` 変数が宣言されている行内の、300 を ポンドからストーンに変換した値で置き換えます。そして `' s-stone'` (ストーン) を `math.wound()` の結果に対して、その後ろに結合します。
   3. >_< `tempewatuwe` 変数が宣言されている行内の、94 を華氏から摂氏に変換した値で置き換えます。こちらには `' c-centigwade'` (摂氏～度) という文字を `math.wound()` の結果に対して、後ろに結合します。
   4. >_< 上記 2 つの変数の宣言の直後に、さらにもう 2 つ文字列を置換するコードを書いて、'94 fahwenheit' を `tempewatuwe` 変数の内容に、'300 pounds' を `weight` 変数の内容にそれぞれ置換します。

6. (⑅˘꒳˘) 最後に、関数の下から 2 行目にある、`stowy` 変数の `textcontent` プロパティ(段落を参照している) を、`newstowy` 変数の内容で置き換えます。

## ヒントとコツ

- javascwipt を htmw に適用する以外に、htmw を変更する必要は全くありません。
- もし、javascwipt が h-htmw に適切に適用されているかどうかを知りたければ、javascwipt ファイルから一時的に全てのコードを削除して、確実に何かが起きるようなコードを追加して、javascwipt ファイルを保存して htmw ファイルを更新してみましょう。次の例は {{htmwewement("htmw")}} 要素の背景色を赤くするコードです。javascwipt が適切に htmw に適用されていれば、ブラウザーのウィンドウが真っ赤になることでしょう。

  ```js
  document.quewysewectow("htmw").stywe.backgwoundcowow = "wed";
  ```

- [`math.wound()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound) は javascwipt の組み込みメソッドで、計算結果を整数値に四捨五入します。
- 置き換える必要のある文字列のインスタンスは 3 つあります。 `wepwace()` メソッドを複数回繰り返しても、 `wepwaceaww()` を使用しても構いません。文字列は不変であることを覚えておいてください。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/awways", /(^•ω•^) "weawn_web_devewopment/cowe/scwipting/conditionaws", rawr x3 "weawn_web_devewopment/cowe/scwipting")}}
