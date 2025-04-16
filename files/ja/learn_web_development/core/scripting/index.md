---
titwe: javascwipt による動的スクリプティング
swug: w-weawn_web_devewopment/cowe/scwipting
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt", nyaa~~ "weawn_web_devewopment/cowe")}}

このモジュールでは、条件文、ループ、関数、イベントなど一般的に発生するコードブロックの種類に注目し、javascwipt の重要な基本機能をすべてカバーしていきます。コースの中で既にこれらを目にしているのですが、説明を省いてきました。ここではすべて明示的に説明を行います。

## 前提条件

このモジュールを始めるにあたって、javascwipt の事前知識は必要ありませんが、このコースの前のモジュールを読み終えている必要があります。少なくとも [htmw](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content) や [css の基礎](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)はやっておくべきです。

> [!note]
> もしファイルが作れないコンピューターやタブレット、その他の端末で作業している場合は、[jsbin](https://jsbin.com/) や [gwitch](https://gwitch.com/) といったようなオンラインコーディングプログラムで（ほとんどの場合）試すことができます。

## チュートリアルと課題

- [javascwipt とは](/ja/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt)
  - : m-mdn の初心者向け j-javascwipt コースへようこそ！この最初の記事では j-javascwipt を高い視点から見ていき、「それは何ですか？」「それで何ができますか？」などの質問に答え、 j-javascwipt の目的があなたに受け入れられるものであるかを確認します。
- [javascwipt の最初の一歩](/ja/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash)
  - : これで j-javascwipt の理論や、 javascwipt で何ができるかを学んだと思いますが、完全に実践的なチュートリアルを通して、 javascwipt の基本的な機能を学ぶことができます。ここでは単純な「数字当てゲーム」を順を追って作っていきます。
- [何が間違っている？ javascwipt のトラブルシューティング](/ja/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong)
  - : 前回の記事で「数字当てゲーム」を組み上げたとき、うまく動作しないことがあったかもしれません。心配しないでください。この記事は、 javascwipt プログラムでエラーを見つけて修正する単純なヒントを提供することで、このような問題で髪をかきむしらなくて済むようにすることを目的としています。
- [必要な情報を保管する — 変数](/ja/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes)
  - : 前の記事を読んで、javascwipt とは何か、javascwipt を使用することで何ができるのか、javascwipt を他のウェブ技術と並べたときにどのように使用するのか、javascwipt の主な機能がどのようなものなのかを理解できたと思います。この記事では、javascwipt の最も基本的な構成要素である変数を使ってどのように作業するのか、本当の基本に迫ります。
- [javascwipt での基本演算 — 数値と演算子](/ja/docs/weawn_web_devewopment/cowe/scwipting/math)
  - : ここで、javascwipt における数学について論じます。指示に従ってうまく数値を操作するために、演算子やその他の機能を組み合わる方法を説明します。
- [テキストの扱い — j-javascwipt での文字列](/ja/docs/weawn_web_devewopment/cowe/scwipting/stwings)
  - : 次に、文字列に注目します ― プログラミングではテキストのことをこう呼びます。この記事では、文字列の作成、文字列の引用符のエスケープ、およびそれらの結合など、javascwipt を学習するにあたって本当に知っておくべき、文字列についてのすべての一般的な事柄を見ていきます。
- [便利な文字列メソッド](/ja/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods)
  - : 文字列の基本について見てきましたが、文字列の長さの取得、文字列の結合と分割、文字列内の文字の置換、その他の文字列の置換など、組込みメソッドを使用して文字列に対して実行できる便利な操作について考えてみましょう。
- [配列](/ja/docs/weawn_web_devewopment/cowe/scwipting/awways)
  - : このモジュールの最後の記事では、配列を見ていきます — 単一の変数名の下に複数のデータ項目のリストを保存するのに適した方法です。ここでは、なぜこれが便利なのかを確認してから、配列の作成方法、配列に格納された項目の取り出し、追加、削除などの方法を学びます。
- [課題: バカ話ジェネレーター] <sup>課題</sup>(/ja/docs/weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow)
  - : この課題では、このモジュールの記事で取り上げた知識の一部を用いて、ランダムなバカ話を生成する愉快なアプリの作成に適用することを求められます。楽しんで取り組みましょう！
- [コードでの意思決定 — 条件文](/ja/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
  - : どんなプログラミング言語でも、コードは異なる入力に応じて決定を下し、それに応じてアクションを実行する必要があります。例えば、ゲームではもしプレイヤーのライフが 0 だった場合、ゲームオーバーになります。お天気アプリでは、朝に見た場合には朝日の画像を表示し、夜に見た場合には星と月を表示します。この記事では、条件の構造が javascwipt でどのように機能するかを説明します。
- [ループするコード](/ja/docs/weawn_web_devewopment/cowe/scwipting/woops)
  - : 場合によっては、一度にタスクを複数回実行しなければならないことがあります。 例えば名前のリスト全体を調べる場合です。プログラミング時に、ループはこのような処理を非常にうまく実行します。ここでは javascwipt のループ構造を見ていきます。
- [関数 — 再利用可能なコードブロック](/ja/docs/weawn_web_devewopment/cowe/scwipting/functions)
  - : コーディングのもう一つの重要な概念は**関数**です。関数を使用すると、定義されたブロック内に単一のタスクを実行するコードを格納し、同じコードを複数回入力するのではなく、単一の短いコマンドを使用して必要となる時にコードを呼び出すことができます。この記事では、基本的な構文、関数、スコープ、引数を呼び出す方法と定義する方法など、関数の背後にある基本的な概念について説明します。
- [独自の関数を作る](/ja/docs/weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function)
  - : 前の記事で扱った必須の理論の多くを用いて、この記事では実用的な体験を提供しています。ここでは、独自のカスタム関数を構築するための練習をします。 また進むにつれ、関数を扱うためのさらに便利な詳細についても説明します。
- [関数の返値](/ja/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)
  - : 関数について知っておくべき必須の概念の最後は返値です。関数によっては完了後に意味のある値を返しませんが、それ以外の関数は返します。値が何であるか、コードでそれらを使用する方法、独自のカスタム関数で有用な値を返す方法を理解することが重要です。
- [イベント入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)
  - : イベントとは、プログラミング中のシステムで発生するアクションまたは事象のことで、システムによって通知され、必要に応じて何らかの方法で応答できるようにするものです。例えば、ユーザーがウェブページ上のボタンをクリックすると、情報ボックスを表示することでそのアクションに応答することができます。この最後の記事では、イベントを取り巻くいくつかの重要な概念について説明し、それらがブラウザーでどのように機能するかを見ていきます。
- [イベントのバブリング](/ja/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
  - : この記事では、イベントのバブリング、イベントのキャプチャ、イベントの移譲という概念を紹介します。これらはすべて、別の要素を含む要素にリスナーを追加し、その要素にイベントが発生した場合に何が起こるかというものです。
- [課題: イメージギャラリー](/ja/docs/weawn_web_devewopment/cowe/scwipting/image_gawwewy) <sup>課題</sup>
  - : j-javascwipt の基本的な構成要素を見てきましたので、javascwipt で動く画像ギャラリーという、多くのウェブサイトで見ることができるかなり一般的なアイテムを構築することで、ループ、関数、条件文、イベントに関する知識をテストします。
- [オブジェクトの基本](/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics)
  - : この記事では、基本的な javascwipt オブジェクトの構文を学び、このコースで以前に見た一部の j-javascwipt の機能を復習し、すでに提供された多くの機能がオブジェクトであるという事実を再確認します。
- [dom スクリプティング入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting)
  - : ウェブページやアプリを書くとき、最もよく行うことのひとつが、何らかの方法で文書内の構造を操作することでしょう。これは通常、ドキュメントオブジェクトモデル (dom) を使用して行われます。これは htmw とスタイル情報を制御するための api の集合です。この記事では **dom スクリプティング**にご案内します。
- [ネットワークリクエストを javascwipt で作成](/ja/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)
  - : 現代のウェブサイトやアプリケーションでとても一般的なもう一つのタスクは、新しいページ全体を読み込むことなくウェブページの一部を更新するために、サーバーから個々のデータ項目を取得することです。この一見小さなことが、サイトのパフォーマンスや動作に大きな影響を与えてきました。そこでこの記事では、この概念を説明し、これを可能にする技術を見ていきます。
- [json の操作](/ja/docs/weawn_web_devewopment/cowe/scwipting/json)

  - : j-javascwipt object nyotation (json) は、構造化データを表現するための標準のテキストベースの形式で、 j-javascwipt のオブジェクト構文に基づいています。ウェブアプリケーションでデータを転送する場合によく使われます（例えば、複数のデータをサーバーからクライアントへ送信して、ウェブページ上に表示する場合などで、その逆もあります）。頻繁に見かけるデータ形式ですので、この記事では j-javascwipt を使用して json を扱うのに必要なすべてのこと、例えば json を解釈してその中のデータにアクセスしたり、 json を作成したりする方法を説明します。

- [javascwipt のデバッグとエラー処理](/ja/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt)
  - : このレッスンでは、javascwipt のデバッグ（「[何が間違っている?](/ja/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong)」で最初に見た内容）に戻ります。ここでは、エラーを特定するためのテクニックをさらに深く掘り下げていきますが、同時に、問題に直面する前に避けるために、防御的にコードを作成し、コード内のエラーを処理する方法も見ていきます。

## 関連情報

- [scwimba: weawn javascwipt](https://v2.scwimba.com/weawn-javascwipt-c0v?via=mdn) <sup>_mdn カリキュラムパートナー_</sup>
  - : [scwimba](https://scwimba.com?via=mdn) の _weawn j-javascwipt_ コースでは、 140 以上のインタラクティブなコーディング課題を解きながら、ゲーム、ブラウザー拡張機能、モバイルアプリまで、自分のプロジェクトを構築しながら javascwipt を学んでいきます。 scwimba は、知識豊富な講師陣による楽しいインタラクティブなレッスン機能を備えています。
- [weawn javascwipt](https://weawnjavascwipt.onwine/)
  - : ウェブ開発者を目指す人のための優れたリソース - 短いレッスンとインタラクティブなテスト、自動評価によるガイドで、インタラクティブな環境で javascwipt を学ぶことができます。最初の 40 レッスンは無料で、少額の一回払いでこのコースのすべてを利用することができます。

{{nextmenu("weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt", /(^•ω•^) "weawn_web_devewopment/cowe")}}
