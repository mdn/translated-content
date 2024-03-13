---
title: JavaScript オブジェクト入門
slug: Learn/JavaScript/Objects
l10n:
  sourceCommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{LearnSidebar}}

JavaScript では、文字列や配列などの JavaScript のコア機能から、JavaScript の最上部に構築されたブラウザー API まで、ほとんどのものがオブジェクトです。関連する関数や変数を効率的なパッケージにカプセル化して、便利なデータコンテナーとして動作する独自のオブジェクトを作成することもできます。JavaScript のオブジェクト指向の性質を理解することは、言語に関する知識をさらに深め、より効率的なコードを書く場合に重要です。したがって、このモジュールを用意しました。ここではオブジェクトの理論と構文を詳しく説明し、独自のオブジェクトを作成する方法を見ていきます。

> **注目:**
>
> #### フロントエンドのウェブ開発者になりたい方へ
>
> 目標に向かって取り組むために必要な情報をすべて盛り込んだコースを用意しました。
>
> [**始めましょう**](/ja/docs/Learn/Front-end_web_developer)

## 前提条件

このモジュールを始める前に、{{Glossary("HTML")}} と {{Glossary("CSS")}} にいくらか精通している必要があります。JavaScript を始める前に [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)と [CSS 入門](/ja/docs/Learn/CSS/First_steps)をひととおり学習することをオススメします。

また、JavaScript オブジェクトを詳細に調べる前に、JavaScript の基本についていくらか精通している必要があります。このモジュールを試す前に、[JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps) と [JavaScript の構成要素](/ja/docs/Learn/JavaScript/Building_blocks)を通して学習してください。

> **メモ:** もしあなたが作業しているコンピューター、タブレット、その他の端末で自分でファイルを作れない場合は、[JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) といったようなオンラインコーディングプログラムで (ほとんどの場合) 試すことができます。

## ガイド

- [オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)
  - : JavaScript オブジェクトについて記載している最初の記事では、基本的な JavaScript オブジェクト構文を見てみます。コースの初期段階で既に見た JavaScript の機能を再び見てみたり、すでに扱っている機能の多くは実際にオブジェクトであるという事実を繰り返し述べています。
- [オブジェクトプロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)
  - : プロトタイプは、JavaScript オブジェクトが互いに機能を継承するメカニズムであり、古典的なオブジェクト指向プログラミング言語の継承メカニズムとは異なる働きをします。この記事では、その違いを探り、プロトタイプチェーンの仕組みを説明し、prototype プロパティを使用して既存のコンストラクタにメソッドを追加する方法を見ていきます。
- [オブジェクト指向プログラミング](/ja/docs/Learn/JavaScript/Objects/Object-oriented_programming)
  - : この記事では、「古典的」オブジェクト指向プログラミングの基本的な原則をいくつか説明し、JavaScript でのプロトタイプモデルとは異なるところを見ていきます。
- [JavaScript でのクラス](/ja/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
  - : JavaScriptは、「古典的な」オブジェクト指向プログラムを実装したい人のためにいくつかの機能を提供しています。この記事では、これらの機能を説明します。
- [JSON データの操作](/ja/docs/Learn/JavaScript/Objects/JSON)
  - : JavaScript Object Notation (JSON) は、JavaScript オブジェクト構文に基づいて構造化されたデータを表現するための標準のテキストベースのフォーマットであり、ウェブサイト上でデータを表現し、送信するために一般的に使用されます (すなわち、サーバーからクライアントへデータを送信して、その結果ウェブページ上に表示することができます)。これはとても良く見るものなので、この記事では、JSON を解析してその中のデータ項目にアクセスしたり、独自の JSON を記述したりするなど、JavaScript を使用して JSON を操作するために必要なことをすべて説明します。
- [オブジェクト構築の練習](/ja/docs/Learn/JavaScript/Objects/Object_building_practice)
  - : これまでの記事では、基本的な JavaScript オブジェクトの理論と構文の詳細をすべて見てもらい、あなたには出発できるしっかりとした基本が与えられました。この記事では実践的なエクササイズを行い、もっと楽しい色とりどりの色付きのボールを作成するカスタム JavaScript オブジェクトを作る練習をしていきます。

## 評価

- [バウンスボールのデモに機能を追加する](/ja/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
  - : この評価では、前の記事のバウンスボールデモを出発点として使用し、新しい興味深い機能を追加する予定です。

## 関連情報

- [Learn JavaScript](https://learnjavascript.online/)
  - : ウェブ開発者を目指す人のための優れたリソース - 短いレッスンとインタラクティブなテスト、自動評価によるガイドで、インタラクティブな環境で JavaScript を学ぶことができます。最初の 40 レッスンは無料で、少額の 1 回払いでこのコースの全容を利用することができます。
