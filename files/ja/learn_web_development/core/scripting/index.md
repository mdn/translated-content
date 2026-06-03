---
title: JavaScript による動的スクリプティング
short-title: JavaScript
slug: Learn_web_development/Core/Scripting
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

{{NextMenu("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core")}}

JavaScript は巨大な分野であり、学ぶべき機能やスタイル、テクニックは多岐にわたり、その上に構築された API やツールも数多く存在します。このモジュールでは、言語の中核となる基本要素に加え、関連する重要なトピックに焦点を当てています。これらのトピックを学ぶことで、しっかりとした基礎を築くことができます。

## 前提条件

このモジュールを始めるにあたって、JavaScript の事前知識は必要ありませんが、このコースの前のモジュールを終えている必要があります。少なくとも [HTML](/ja/docs/Learn_web_development/Core/Structuring_content) や [CSS の基礎](/ja/docs/Learn_web_development/Core/Styling_basics)はやっておくべきです。

> [!NOTE]
> もしファイルを作成できないコンピューター、タブレット、その他の端末で作業している場合は、[CodePen](https://codepen.io/) や [JSFiddle](https://jsfiddle.net/) などのオンラインエディターでコードを実行してみることができます。

## チュートリアルと課題

- [JavaScript とは](/ja/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
  - : MDN の初心者向け JavaScript コースへようこそ！この最初の記事では JavaScript を高い視点から見ていき、「それは何ですか？」「それで何ができますか？」などの質問に答え、 JavaScript の目的があなたに受け入れられるものであるかを確認します。
- [JavaScript の最初の一歩](/ja/docs/Learn_web_development/Core/Scripting/A_first_splash)
  - : これで JavaScript の理論や、 JavaScript で何ができるかを学んだと思いますが、完全に実践的なチュートリアルを通して、 JavaScript の基本的な機能を学ぶことができます。ここでは単純な「数字当てゲーム」を順を追って作っていきます。
- [何が間違っている？ JavaScript のトラブルシューティング](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong)
  - : 前回の記事で「数字当てゲーム」を組み上げたとき、うまく動作しないことがあったかもしれません。心配しないでください。この記事は、 JavaScript プログラムでエラーを見つけて修正する単純なヒントを提供することで、このような問題で髪をかきむしらなくて済むようにすることを目的としています。
- [必要な情報を保管する — 変数](/ja/docs/Learn_web_development/Core/Scripting/Variables)
  - : 前の記事を読んで、JavaScript とは何か、JavaScript を使用することで何ができるのか、JavaScript を他のウェブ技術と並べたときにどのように使用するのか、JavaScript の主な機能がどのようなものなのかを理解できたと思います。この記事では、JavaScript の最も基本的な構成要素である変数を使ってどのように作業するのか、本当の基本に迫ります。
- [JavaScript での基本演算 — 数値と演算子](/ja/docs/Learn_web_development/Core/Scripting/Math)
  - : ここで、JavaScript における数学について論じます。指示に従ってうまく数値を操作するために、演算子やその他の機能を組み合わる方法を説明します。
- [テキストの扱い — JavaScript での文字列](/ja/docs/Learn_web_development/Core/Scripting/Strings)
  - : 次に、文字列に注目します ― プログラミングではテキストのことをこう呼びます。この記事では、文字列の作成、文字列の引用符のエスケープ、およびそれらの結合など、JavaScript を学習するにあたって本当に知っておくべき、文字列についてのすべての一般的な事柄を見ていきます。
- [便利な文字列メソッド](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods)
  - : 文字列の基本について見てきましたが、文字列の長さの取得、文字列の結合と分割、文字列内の文字の置換、その他の文字列の置換など、組込みメソッドを使用して文字列に対して実行できる便利な操作について考えてみましょう。
- [配列](/ja/docs/Learn_web_development/Core/Scripting/Arrays)
  - : このモジュールの最後の記事では、配列を見ていきます — 単一の変数名の下に複数のデータ項目のリストを保存するのに適した方法です。ここでは、なぜこれが便利なのかを確認してから、配列の作成方法、配列に格納された項目の取り出し、追加、削除などの方法を学びます。
- [課題: バカ話ジェネレーター](/ja/docs/Learn_web_development/Core/Scripting/Silly_story_generator) <sup>課題</sup>
  - : この課題では、これまでのモジュールで学んだ知識を活かして、ランダムに面白いおかしな話を生成する楽しいアプリを作成します。その過程で、変数、数学、文字列、配列に関する知識が試されます。
- [コードでの意思決定 — 条件文](/ja/docs/Learn_web_development/Core/Scripting/Conditionals)
  - : どんなプログラミング言語でも、コードは異なる入力に応じて決定を下し、それに応じてアクションを実行する必要があります。例えば、ゲームではもしプレイヤーのライフが 0 だった場合、ゲームオーバーになります。お天気アプリでは、朝に見た場合には朝日の画像を表示し、夜に見た場合には星と月を表示します。この記事では、条件の構造が JavaScript でどのように機能するかを説明します。
- [ループするコード](/ja/docs/Learn_web_development/Core/Scripting/Loops)
  - : 場合によっては、一度にタスクを複数回実行しなければならないことがあります。 例えば名前のリスト全体を調べる場合です。プログラミング時に、ループはこのような処理を非常にうまく実行します。ここでは JavaScript のループ構造を見ていきます。
- [関数 — 再利用可能なコードブロック](/ja/docs/Learn_web_development/Core/Scripting/Functions)
  - : コーディングのもう一つの重要な概念は**関数**です。関数を使用すると、定義されたブロック内に単一のタスクを実行するコードを格納し、同じコードを複数回入力するのではなく、単一の短いコマンドを使用して必要となる時にコードを呼び出すことができます。この記事では、基本的な構文、関数、スコープ、引数を呼び出す方法と定義する方法など、関数の背後にある基本的な概念について説明します。
- [独自の関数を作る](/ja/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
  - : 前の記事で扱った必須の理論の多くを用いて、この記事では実用的な体験を提供しています。ここでは、独自のカスタム関数を構築するための練習をします。 また進むにつれ、関数を扱うためのさらに便利な詳細についても説明します。
- [関数の返値](/ja/docs/Learn_web_development/Core/Scripting/Return_values)
  - : 関数について知っておくべき必須の概念の最後は返値です。関数によっては完了後に意味のある値を返しませんが、それ以外の関数は返します。値が何であるか、コードでそれらを使用する方法、独自のカスタム関数で有用な値を返す方法を理解することが重要です。
- [イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
  - : イベントとは、プログラミング中のシステムで発生するアクションまたは事象のことで、システムによって通知され、必要に応じて何らかの方法で応答できるようにするものです。例えば、ユーザーがウェブページ上のボタンをクリックすると、情報ボックスを表示することでそのアクションに応答することができます。この最後の記事では、イベントを取り巻くいくつかの重要な概念について説明し、それらがブラウザーでどのように機能するかを見ていきます。
- [イベントのバブリング](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)
  - : この記事では、イベントのバブリング、イベントのキャプチャ、イベントの移譲という概念を紹介します。これらはすべて、別の要素を含む要素にリスナーを追加し、その要素にイベントが発生した場合に何が起こるかというものです。
- [課題: イメージギャラリー](/ja/docs/Learn_web_development/Core/Scripting/Image_gallery) <sup>課題</sup>
  - : JavaScript の基本的な構成要素を見てきましたので、JavaScript で動く画像ギャラリーという、多くのウェブサイトで見ることができるかなり一般的なアイテムを構築することで、ループ、関数、条件文、イベントに関する知識をテストします。
- [オブジェクトの基本](/ja/docs/Learn_web_development/Core/Scripting/Object_basics)
  - : この記事では、基本的な JavaScript オブジェクトの構文を学び、このコースで以前に見た一部の JavaScript の機能を復習し、すでに提供された多くの機能がオブジェクトであるという事実を再確認します。
- [DOM スクリプティング入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)
  - : ウェブページやアプリを書くとき、最もよく行うことのひとつが、何らかの方法で文書内の構造を操作することでしょう。これは通常、ドキュメントオブジェクトモデル (DOM) を使用して行われます。これは HTML とスタイル情報を制御するための API の集合です。この記事では **DOM スクリプティング**にご案内します。
- [ネットワークリクエストを JavaScript で作成](/ja/docs/Learn_web_development/Core/Scripting/Network_requests)
  - : 現代のウェブサイトやアプリケーションでとても一般的なもう一つのタスクは、新しいページ全体を読み込むことなくウェブページの一部を更新するために、サーバーから個々のデータ項目を取得することです。この一見小さなことが、サイトのパフォーマンスや動作に大きな影響を与えてきました。そこでこの記事では、この概念を説明し、これを可能にする技術を見ていきます。
- [JSON の操作](/ja/docs/Learn_web_development/Core/Scripting/JSON)
  - : JavaScript Object Notation (JSON) は、構造化データを表現するための標準のテキストベースの形式で、 JavaScript のオブジェクト構文に基づいています。ウェブアプリケーションでデータを転送する場合によく使われます（例えば、複数のデータをサーバーからクライアントへ送信して、ウェブページ上に表示する場合などで、その逆もあります）。頻繁に見かけるデータ形式ですので、この記事では JavaScript を使用して JSON を扱うのに必要なすべてのこと、例えば JSON を解釈してその中のデータにアクセスしたり、 JSON を作成したりする方法を説明します。
- [課題: 家のデータの UI の構築](/ja/docs/Learn_web_development/Core/Scripting/House_data_UI) <sup>課題</sup>
  - : この課題では、不動産サイトの物件検索ページ向けに JavaScript を記述していただきます。具体的には、JSON データの取得、フォームコントロールの入力値に基づいたデータのフィルタリング、そしてそのデータを UI に表示する処理を行います。その過程で、条件分岐、ループ、配列や配列メソッドなどの知識も確認していきます。
- [JavaScript のデバッグとエラー処理](/ja/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)
  - : このレッスンでは、JavaScript のデバッグ（「[何が間違っている?](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong)」で最初に見た内容）に戻ります。ここでは、エラーを特定するためのテクニックをさらに深く掘り下げていきますが、同時に、問題に直面する前に避けるために、防御的にコードを作成し、コード内のエラーを処理する方法も見ていきます。

## スキルテスト

チュートリアルの各記事の間に、「スキルテスト」の記事が配置されており、次のステップに進む前に、重要な情報をしっかりと理解できているかを確認することができます。これらすべての記事を一斉に確認したい場合は、[スキルテスト: JavaScript](/ja/docs/Learn_web_development/Core/Scripting/Test_your_skills) に一覧が掲載されています。

## 関連情報

- [Scrimba: Learn JavaScript](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#外部リンクと埋め込み)</sup>
  - : [Scrimba](https://scrimba.com/?via=mdn) の _Learn JavaScript_ コースでは、 140 以上のインタラクティブなコーディング課題を解きながら、ゲーム、ブラウザー拡張機能、モバイルアプリまで、自分のプロジェクトを構築しながら JavaScript を学んでいきます。 Scrimba は、知識豊富な講師陣による楽しいインタラクティブなレッスン機能を備えています。
- [Learn JavaScript](https://learnjavascript.online/)
  - : ウェブ開発者を目指す人のための優れたリソース - 短いレッスンとインタラクティブなテスト、自動評価によるガイドで、インタラクティブな環境で JavaScript を学ぶことができます。最初の 40 レッスンは無料で、少額の一回払いでこのコースのすべてを利用することができます。

{{NextMenu("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core")}}
