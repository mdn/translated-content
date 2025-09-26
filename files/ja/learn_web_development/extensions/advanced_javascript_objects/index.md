---
title: 高度な JavaScript のオブジェクト志向
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions")}}

JavaScript では、文字列や配列などの JavaScript のコア機能から、JavaScript の最上部に構築されたブラウザー {{Glossary("API")}} まで、ほとんどのものがオブジェクトです。関連する関数や変数を効率的なパッケージにカプセル化して、便利なデータコンテナーとして動作する独自のオブジェクトを作成することもできます。

JavaScript のオブジェクト指向の性質を理解することは、言語に関する知識をさらに深め、より効率的なコードを書く場合に重要です。したがって、このモジュールを用意しました。ここではオブジェクトの理論と構文を詳しく説明し、独自のオブジェクトを作成する方法を見ていきます。

## 前提条件

このモジュールを開始する前に、[JavaScript](/ja/docs/Learn_web_development/Core/Scripting) の基礎、特に [JavaScript オブジェクトの基本](/ja/docs/Learn_web_development/Core/Scripting/Object_basics)を確実に習得しておく必要があります。また、 [HTML](/ja/docs/Learn_web_development/Core/Structuring_content) と [CSS](/ja/docs/Learn_web_development/Core/Styling_basics) に慣れることも役立つでしょう。

> [!NOTE]
> もしあなたが作業しているコンピューター、タブレット、その他の端末で自分でファイルを作れない場合は、[JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) といったようなオンラインコーディングプログラムで (ほとんどの場合) 試すことができます。

## ガイド

- [オブジェクトプロトタイプ](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
  - : プロトタイプは、JavaScript オブジェクトが互いに機能を継承するメカニズムであり、古典的なオブジェクト指向プログラミング言語の継承メカニズムとは異なる働きをします。この記事では、その違いを探り、プロトタイプチェーンの仕組みを説明し、prototype プロパティを使用して既存のコンストラクターにメソッドを追加する方法を見ていきます。
- [オブジェクト指向プログラミング](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)
  - : この記事では、「古典的」オブジェクト指向プログラミングの基本的な原則をいくつか説明し、JavaScript でのプロトタイプモデルとは異なるところを見ていきます。
- [JavaScript でのクラス](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
  - : JavaScriptは、「古典的な」オブジェクト指向プログラムを実装したい人のためにいくつかの機能を提供しています。この記事では、これらの機能を説明します。
- [オブジェクト構築の練習](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice)
  - : これまでの記事では、基本的な JavaScript オブジェクトの理論と構文の詳細をすべて見てもらい、あなたには出発できるしっかりとした基本が与えられました。この記事では実践的なエクササイズを行い、もっと楽しい色とりどりの色付きのボールを作成するカスタム JavaScript オブジェクトを作る練習をしていきます。
- [バウンスボールのデモに機能を追加する](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features) <sup>課題</sup>
  - : この評価では、前の記事のバウンスボールデモを出発点として使用し、新しい興味深い機能を追加する予定です。

## 関連情報

- [Learn JavaScript](https://learnjavascript.online/)
  - : ウェブ開発者を目指す人のための優れたリソース - 短いレッスンとインタラクティブなテスト、自動評価によるガイドで、インタラクティブな環境で JavaScript を学ぶことができます。最初の 40 レッスンは無料で、少額の 1 回払いでこのコースの全容を利用することができます。
