---
title: "スキルテスト: オブジェクト指向 JavaScript"
slug: Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
l10n:
  sourceCommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{learnsidebar}}

このスキルテストの目的は、[JavaScript でのクラス](/ja/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)の記事を理解できたかどうかを評価することです。

> **メモ:** 下記のインタラクティブエディターで解答を試すことができますが、コードをダウンロードして、[CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/) などのオンラインツールを使用して作業すると便利です。
>
> もし行き詰まった場合は、このページの下にある「評価とさらなる支援」(#評価とさらなる支援)の節を参照して、私たちに支援を要求してください。

> **メモ:** 下記の例では、コードにエラーがある場合、ページ上の結果パネルに出力されるので、答え合わせをするのに役立ちます（ダウンロードした場合には、ブラウザーの JavaScript コンソールに出力されます）。

## OOJS 1

このタスクでは、`Shape` クラスの定義から始めましょう。このクラスには `name`, `sides`, `sideLength` の 3 つのプロパティがあります。このクラスは、正方形や正三角形のように、すべての辺の長さが同じである図形のみをモデルとしています。

次のことをやってください。

- このクラスにコンストラクターを追加しましょう。コンストラクターは `name`, `sides`, `sideLength` プロパティを引数に取り、初期化します。
- このクラスに新しいメソッド `calcPerimeter()` を追加しましょう。このメソッドは、外周の長さ（図形の外縁の長さ）を計算し、その結果をコンソールにログ出力します。
- `Shape` クラスの新しいインスタンス `square` を作成しましょう。名前に `square`、 `side` に `4`、 `sideLength` に `5` を指定しましょう。
- このインスタンスに対して `calcPerimeter()` メソッドを呼び出して、計算結果が期待通りにブラウザーコンソールにログ出力されるかどうかを確認しましょう。
- 新しい `Shape` のインスタンスとして `triangle` を作成しましょう。名前は `triangle`、`side` は `3`、`sideLength` は `3` とします。
- triangle.calcPerimeter()`を呼び出して、問題なく動作することを確認しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> **注目:**
>
> 自分自身でエディターやオンラインエディターで作業する場合は、[この作業の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html)しましょう。

## OOJS 2

次に、`Shape`を継承した `Square` クラスを作成し、正方形の面積を計算する `calcArea()` メソッドを追加しましょう。また、`Square` オブジェクトインスタンスの `name` プロパティには自動的に `square` が設定され、`sides` プロパティには自動的に `4` が設定されるようにコンストラクターを設定しましょう。したがって、コンストラクターを呼び出す際には、`sideLength` プロパティだけを提供すればよいことになります。

適切なプロパティ値を持つ `Square` クラスのインスタンス `square` を作成し、その `calcPerimeter()` と `calcArea()` メソッドを呼び出して、問題なく動作することを示しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> **注目:**
>
> 自分自身でエディターやオンラインエディターで作業する場合は、[この作業の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html)しましょう。

## 評価とさらなる支援

これらの例は、上記のインタラクティブエディターで練習することができます。

自分の作品を評価してほしい、行き詰っているので相談したい方は、次のようにしましょう。

1. 自分の作品を [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) や [Glitch](https://glitch.com/) などのオンラインで共有できるエディターに入れます。
2. [MDN Discourse フォーラムの Learning カテゴリー](https://discourse.mozilla.org/c/mdn/learn/250)に、評価や支援を求める投稿を（英語で）書き込んでください。投稿には次のことを書いてください。

   - "Assessment wanted for OOJS 1 skill test" のような、説明的なタイトル。
   - すでに試したことの詳細と、私たちに何をしてほしいか（例: 行き詰まり、助けが必要な場合、または評価が必要な場合）。
   - 評価やヘルプが必要なサンプルへのリンクを、オンライン共有可能なエディター（上記のステップ 1 で述べたとおり）にて提供します。コードを見ることができなければ、コーディングの問題で誰かを助けることは非常に困難です。
   - 実際の課題または評価ページへのリンクにより、助けを求めている問題を見つけることができます。
