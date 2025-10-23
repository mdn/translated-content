---
title: "スキルテスト: オブジェクト指向 JavaScript"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript
original_slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills:_Object-oriented_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、[JavaScript でのクラス](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)の記事を理解できたかどうかを評価することです。

> [!NOTE]
> このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
> コードにエラーがあった場合は、このページの結果パネルまたは JavaScript コンソールの中に結果がログ出力されます。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## OOJS 1

このタスクでは、`Shape` クラスの定義から始めましょう。このクラスには `name`, `sides`, `sideLength` の 3 つのプロパティがあります。このクラスは、正方形や正三角形のように、すべての辺の長さが同じである図形のみをモデルとしています。

次のことをやってください。

- このクラスにコンストラクターを追加しましょう。コンストラクターは `name`, `sides`, `sideLength` プロパティを引数に取り、初期化します。
- このクラスに新しいメソッド `calcPerimeter()` を追加しましょう。このメソッドは、外周の長さ（図形の外縁の長さ）を計算し、その結果をコンソールにログ出力します。
- `Shape` クラスの新しいインスタンス `square` を作成しましょう。名前に `square`、 `sides` に `4`、 `sideLength` に `5` を指定しましょう。
- このインスタンスに対して `calcPerimeter()` メソッドを呼び出して、計算結果が期待通りにブラウザーコンソールにログ出力されるかどうかを確認しましょう。
- 新しい `Shape` のインスタンスとして `triangle` を作成しましょう。名前は `triangle`、`sides` は `3`、`sideLength` は `3` とします。
- triangle.calcPerimeter()`を呼び出して、問題なく動作することを確認しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> [!CALLOUT]
>
> 自分自身でエディターやオンラインエディターで作業する場合は、[この作業の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html)しましょう。

## OOJS 2

次に、`Shape`を継承した `Square` クラスを作成し、正方形の面積を計算する `calcArea()` メソッドを追加しましょう。また、`Square` オブジェクトインスタンスの `name` プロパティには自動的に `square` が設定され、`sides` プロパティには自動的に `4` が設定されるようにコンストラクターを設定しましょう。したがって、コンストラクターを呼び出す際には、`sideLength` プロパティだけを提供すればよいことになります。

適切なプロパティ値を持つ `Square` クラスのインスタンス `square` を作成し、その `calcPerimeter()` と `calcArea()` メソッドを呼び出して、問題なく動作することを示しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> [!CALLOUT]
>
> 自分自身でエディターやオンラインエディターで作業する場合は、[この作業の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html)しましょう。
