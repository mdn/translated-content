---
title: "スキルテスト: オブジェクトの基本"
slug: Learn/JavaScript/Objects/Test_your_skills:_Object_basics
---

{{learnsidebar}}

このスキルテストの目的は、[JavaScript オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)の理解度をテストすることです。

> **メモ:** 以下のインタラクティブなエディターでソリューションを試すこともできますが、コードをダウンロードし、[CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/)や[Glitch](https://glitch.com/)のようなオンラインツールを使用してタスクを実行すると役立つ場合があります。
>
> 行き詰まった場合は、助けを求めてください — このページの下部にある評価またはさらなる支援セクションを参照してください。

> **メモ:** 以下の例では、コードにエラーがある場合、ページの結果パネルに出力され、答えを見つけ出すのに役立ちます（ダウンロード可能なバージョンの場合は、ブラウザーの JavaScript コンソールに）

## オブジェクトの基本 1

このタスクでは、オブジェクトリテラルが与えられます。あなたのタスクは下記です。

- `catName`変数に、**角括弧記法**を用いて、`name`プロパティの値を保存する
- **ドット記法**を用いて、`greeting()`メソッドを使う
- `color`プロパティを`black`に変更する

以下のライブコードを更新して、完成した例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> **メモ:** [このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/object-basics/object-basics1-download.html)して、お好きなエディターまたはオンライン・エディターで作業してください。

## オブジェクトの基本 2

次のタスクでは、お気に入りのバンドの 1 つを表す、自分だけのオブジェクトリテラルを作成してみましょう。必要な要素は次のとおりです。

- `name`: バンドの名前を表す文字列
- `nationality`: バンドの出身国を表す文字列
- `genre`: バンドが演奏する音楽の種類
- `members`: バンドのメンバー数を表す数字
- `formed`: バンドが結成した年を表す数字
- `split`: バンドが解散した年を表す数字、まだ活動している場合は`false`
- `albums`: そのバンドによってリリースされたアルバムを表す配列。それぞれの配列の要素は、下記の要素を含んだオブジェクトであること

  - `name`: アルバムの名前を表す文字列
  - `released`: リリースされた年を表す数字

`albums` 配列には、少なくとも 2 つのアルバムを含めること。

これが終わったら、変数`bandInfo`に、名前、国籍、活動年数、スタイル、最初のアルバムのタイトルと発売日などの少しの詳細を書き込みます。

以下のライブコードを更新して、完成した例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> **メモ:** [このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/object-basics/object-basics1-download.html)して、お好きなエディターまたはオンライン・エディターで作業してください。

## オブジェクトの基本 3

最後に、「オブジェクトの基本」のまとめとして、タスク＃1 の`cat`オブジェクトリテラルに戻りましょう。 「`Hello, said Bertie the Cymric.`」と記録されるように、`greeting（）`メソッドを書き直してください。 ブラウザーの DevTools のコンソールにアクセスしますが、名前や品種に関係なく、同じ構造のすべての`cat`オブジェクトで機能します。

完了したら、`cat2`という独自のオブジェクトを作成します。このオブジェクトは、同じ構造、まったく同じ`greeting（）`メソッドを持ちますが、名前、品種、色が異なります。

両方の`greeting（）`メソッドを呼び出して、適切なあいさつ（greeting）がコンソールに記録されることを確認します。

コードはあまり[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)ではありません（それぞれは 1 回だけ定義すること）—たとえば、同じメソッドを 2 回定義しています。 どうすればもっと DRY にすることができますか？ よくわからない場合でも、心配しないでください。これは、シリーズの今後の記事で取り上げる予定です。

以下のライブコードを更新して、完成した例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> **メモ:** [このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/object-basics/object-basics1-download.html)して、お好きなエディターまたはオンライン・エディターで作業してください。

## まとめとヘルプ

自分のコードの評価が欲しい、または行き詰まって助けを求めたい場合：

1. CodePen、jsFiddle、Glitch などのオンライン共有可能なエディターで作業をします。コードを自分で作成することも、上記のセクションでリンクされているスターティングポイントファイルを使用することもできます。
2. [MDNDiscourse フォーラムの学習カテゴリ](https://discourse.mozilla.org/c/mdn/learn/250)で評価や支援を求める投稿を書いてください。投稿には次のものを含める必要があります。

- 「オブジェクトの基本 1 の スキルテスト を行ったので評価して欲しい」などの説明的なタイトル。
- あなたがすでに試したことの詳細、そしてあなたが私たちに何をしてほしいか、例えば行き詰まって助けが必要な場合、または評価が必要な場合。
- オンラインの共有可能なエディターで、評価したい、または支援が必要な例へのリンク（上記のステップ 1 で説明）。これは入門するのに良い習慣です—あなたが彼らのコードを見ることができないならば、コーディング問題で誰かを助けることは非常に難しいです。
- 実際のタスクまたは評価ページへのリンク。サポートが必要な質問を見つけることができます。
