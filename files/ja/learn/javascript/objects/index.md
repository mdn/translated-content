---
title: JavaScript オブジェクト入門
slug: Learn/JavaScript/Objects
---

{{LearnSidebar}}

JavaScript では、文字列や配列などの JavaScript のコア機能から、JavaScript の最上部に構築されたブラウザー API まで、ほとんどのものがオブジェクトです。関連する関数や変数を効率的なパッケージにカプセル化して、便利なデータコンテナーとして動作する独自のオブジェクトを作成することもできます。JavaScript のオブジェクトベースの性質を理解することは、言語に関する知識をさらに深め、より効率的なコードを書く場合に重要です。したがって、この役立つモジュールを用意しました。ここではオブジェクトの理論と構文を詳しく説明し、独自のオブジェクトを作成する方法を見ていきます。

## 前提条件

このモジュールを始める前に、 HTML と CSS にいくらか精通している必要があります。JavaScript を始める前に [HTML 入門](/ja/docs/Web/Guide/HTML/Introduction)と [CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)をひととおり学習することをオススメします。

また、JavaScript オブジェクトを詳細に調べる前に、JavaScript の基本についていくらか精通している必要があります。このモジュールを試す前に、[JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps) と [JavaScript の構成要素](/ja/docs/Learn/JavaScript/Building_blocks)を通して学習してください。

> **メモ:** もしあなたが作業しているコンピューター・タブレットやその他のデバイスで自分でファイルを作れない場合は、[JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) といったようなオンラインコーディングプログラムで (ほとんどの場合) 試すことができます。

## ガイド

- [オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)
  - : JavaScript オブジェクトについて記載している最初の記事では、基本的な JavaScript オブジェクト構文を見てみます。コースの初期段階で既に見た JavaScript の機能を再び見てみたり、すでに扱っている機能の多くは実際にオブジェクトであるという事実を繰り返し述べています。
- [初心者のためのオブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS)
  - : まずオブジェクト指向 JavaScript (OOJS) に焦点を当てます — この記事では、オブジェクト指向プログラミング (OOP) 理論の基本ビューを示し、次に JavaScript がコンストラクタ関数を介してオブジェクトクラスをエミュレートする方法と、オブジェクトインスタンスを作成する方法について説明します。
- [オブジェクトプロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)
  - : プロトタイプは、JavaScript オブジェクトが互いに機能を継承するメカニズムであり、古典的なオブジェクト指向プログラミング言語の継承メカニズムとは異なる働きをします。この記事では、その違いを探り、プロトタイプチェーンの仕組みを説明し、prototype プロパティを使用して既存のコンストラクタにメソッドを追加する方法を見ていきます。
- [JavaScript での継承](/ja/docs/Learn/JavaScript/Objects/Inheritance)
  - : OOJS の大部分の詳細がこれまで説明されているため、この記事では、「親」クラスから機能を継承する「子」オブジェクトクラス (のコンストラクタ) を作成する方法を示します。また OOJS をいつどこで使用するかについてのアドバイスも提供しています。
- [JSON データの操作](/ja/docs/Learn/JavaScript/Objects/JSON)
  - : JavaScript Object Notation (JSON) は、JavaScript オブジェクト構文に基づいて構造化されたデータを表現するための標準のテキストベースのフォーマットであり、ウェブサイト上でデータを表現し、送信するために一般的に使用されます (すなわち、サーバーからクライアントへデータを送信して、その結果ウェブページ上に表示することができます)。これはとても良く見るものなので、この記事では、JSON を解析してその中のデータ項目にアクセスしたり、独自の JSON を記述したりするなど、JavaScript を使用して JSON を操作するために必要なことをすべて説明します。
- [オブジェクト構築の練習](/ja/docs/Learn/JavaScript/Objects/Object_building_practice)
  - : これまでの記事では、基本的な JavaScript オブジェクトの理論と構文の詳細をすべて見てもらい、あなたには出発できるしっかりとした基本が与えられました。この記事では実践的なエクササイズを行い、もっと楽しい色とりどりの色付きのボールを作成するカスタム JavaScript オブジェクトを作る練習をしていきます。

## 評価

- [バウンスボールのデモに機能を追加する](/ja/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
  - : この評価では、前の記事のバウンスボールデモを出発点として使用し、新しい興味深い機能を追加する予定です。
