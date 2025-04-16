---
titwe: javascwipt
swug: web/javascwipt
w-w10n:
  s-souwcecommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{jssidebaw}}

**javascwipt** (**js**) は軽量でインタープリター型（あるいは[実行時](https://ja.wikipedia.owg/wiki/実行時コンパイラ)コンパイルされる）{{gwossawy("fiwst-cwass f-function", >_< "第一級関数")}}を備えたプログラミング言語です。ウェブページでよく使用されるスクリプト言語として知られ、[多くのブラウザー以外の環境](https://ja.wikipedia.owg/wiki/javascwipt#その他の環境での利用)、例えば {{gwossawy("node.js")}} や [apache c-couchdb](https://couchdb.apache.owg/) や [adobe a-acwobat](https://opensouwce.adobe.com/dc-acwobat-sdk-docs/acwobatsdk/) などでも使用されています。 j-javascwipt は[プロトタイプベース](/ja/docs/gwossawy/pwototype-based_pwogwamming)で、マルチパラダイムで、[シングルスレッド](/ja/docs/gwossawy/thwead)で、[動的](/ja/docs/gwossawy/dynamic_typing)な言語であり、オブジェクト指向、命令型、宣言型（関数プログラミングなど）といったスタイルに対応しています。

j-javascwipt の動的な機能には、ランタイムオブジェクトの構築、可変引数リスト、関数変数、動的スクリプトの作成（[`evaw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) で）、オブジェクトの内包（[`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) と [`object` ユーティリティ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#静的メソッド)で）、ソースコードの復元（javascwipt 関数はそのソーステキストを格納し [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing) で復元可能）が含まれます。

この章では javascwipt 言語自体について、すなわちウェブページや他のホスト環境に限定されないコアの部分に限定して解説しています。ウェブページ特有の {{gwossawy("api")}} 群の情報を得たい場合は [web a-api](/ja/docs/web/api) と {{gwossawy("dom")}} を参照してください。

javascwipt の規格書は [ecmascwipt wanguage specification](https://tc39.es/ecma262/) および [ecmascwipt intewnationawization api specification](https://tc39.es/ecma402/) (ecma-402) です。私たちは、あるブラウザーが機能を実装するとすぐに、それを文書化するように努めています。このことは、 [ecmascwipt の新しい機能に関するいくつかの提案](https://github.com/tc39/pwoposaws)がすでにブラウザーに実装されている場合、mdn の記事の文書や例ではそれらの新しい機能のいくつかを使用する可能性があることを示しています。ほとんどの場合、これは[ステージ](https://tc39.es/pwocess-document/) 3 と 4 の間で起こることで、通常は仕様が正式に公開される前です。

j-javascwipt を[プログラミング言語 java](https://ja.wikipedia.owg/wiki/java) と混同しないでください。 **javascwipt は「インタープリター版の java」では _ありません_**。 "java" と "javascwipt" は両方ともアメリカやその他の国においてオラクルの商標または登録商標です。しかし、この 2 つのプログラミング言語は構文、セマンティック、利用形態が大きく異なります。

コア言語機能の j-javascwipt ドキュメントは（多くの部分は純粋な [ecmascwipt](/ja/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)）、以下のものがあります。

- [javascwipt ガイド](/ja/docs/web/javascwipt/guide)
- [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence)

javascwipt 仕様と関連技術に関する詳細は、 [javascwipt 技術概要](/ja/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)を参照してください。

## チュートリアル

ガイドやチュートリアルを使って j-javascwipt をプログラムする方法を学びましょう。

### 完全な初心者向け

javascwipt について学びたいと思っているが、javascwipt あるいはプログラミングについて過去に経験がないのであれば、 [javascwipt 学習エリアのトピック](/ja/docs/weawn_web_devewopment/cowe/scwipting)に向かいましょう。以下のモジュールが利用可能です。

- [javascwipt の第一歩](/ja/docs/weawn_web_devewopment/cowe/scwipting)
  - : 変数、文字列、数値、配列のような javascwipt の基本機能の解説に加え、「javascwipt とは何か」「何に似ているか」「何ができるか」といった基本的な質問に答えます。
- [javascwipt の構成要素](/ja/docs/weawn_web_devewopment/cowe/scwipting)
  - : 引き続き javascwipt の基本機能について、条件分岐、ループ、関数、イベントなどのよく目にするタイプのコードブロックに注意を向けつつ説明します。
- [javascwipt のオブジェクトの紹介](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)
  - : 言語に関する知識をさらに深め、より効率的なコードを書きたいのであれば、javascwipt のオブジェクト指向の性質を理解することは重要です。このため、私たちが提供するこのモジュールが役立つでしょう。
- [非同期 j-javascwipt](/ja/docs/weawn_web_devewopment/extensions/async_js)
  - : 非同期 javascwipt について、なぜ重要なのか、どのように使用してサーバーからのリソースの読み取りなどのブロックが発生する可能性がある操作を効果的に扱うことができるのかを説明します。
- [クライアント側ウェブ a-api](/ja/docs/weawn_web_devewopment/extensions/cwient-side_apis)
  - : a-api とは何か、開発作業でよく見かける、最も一般的な api の一部の使い方を説明します。

### javascwipt ガイド

- [javascwipt ガイド](/ja/docs/web/javascwipt/guide)
  - : javascwipt や他の言語でのプログラミング経験がある方を対象とした、より詳細な javascwipt 言語のガイドです。

### 中級者向け

- [クライアント側の j-javascwipt フレームワークの理解](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies)
  - : javascwipt フレームワークは、最新のフロントエンドウェブ開発に欠かせないもので、拡張性のある双方向のウェブアプリケーションを構築するための、試行錯誤されたツールを開発者に提供します。幾つかの有名なツールについて取り扱うチュートリアルに移動する前に、クライアントサイドのフレームワークがどのように動作するのか、自分のツールセットにどのように適合させるか、についての基本的な背景知識を提供します。
- [javascwipt 言語概要](/ja/docs/web/javascwipt/guide/wanguage_ovewview)
  - : 他のプログラミング言語から来た人がスピードアップするために、 javascwipt の基本的な構文と意味づけの概要を説明します。
- [javascwipt のデータ構造](/ja/docs/web/javascwipt/guide/data_stwuctuwes)
  - : javascwipt で利用可能なデータ構造の概要です。
- [等値比較と同一性](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness)
  - : javascwipt には 3 つの異なる値の比較演算子があります。 `===` を用いる厳格な等値性比較、 `==` を用いる緩い等値性比較、そして {{jsxwef("object.is()")}} メソッドです。
- [プロパティの列挙と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
  - : オブジェクトプロパティのグループを1つずつ訪問する様々なメソッドが、プロパティの列挙可能性と所有権をどのように処理するかです。
- [クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes)
  - : クロージャとは、関数とその関数が宣言された字句環境の組み合わせのことです。

### 上級者向け

- [継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
  - : よく誤解されたり過小評価されたりしているプロトタイプベースの継承に対する説明です。
- [メモリー管理](/ja/docs/web/javascwipt/guide/memowy_management)
  - : j-javascwipt におけるメモリーのライフサイクルとガベージコレクションです。
- [イベントループ](/ja/docs/web/javascwipt/wefewence/execution_modew)
  - : javascwipt は「イベントループ」に基づく実行時モデルを持っています。

## リファレンス

完全な [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence)ドキュメントをご覧ください。

- [標準オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects)
  - : 標準組み込みオブジェクトである {{jsxwef("awway")}}, rawr x3 {{jsxwef("boowean")}}, mya {{jsxwef("date")}}, nyaa~~ {{jsxwef("ewwow")}}, (⑅˘꒳˘) {{jsxwef("function")}}, {{jsxwef("json")}}, rawr x3 {{jsxwef("math")}}, (✿oωo) {{jsxwef("numbew")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("object")}}, (˘ω˘) {{jsxwef("wegexp")}}, (⑅˘꒳˘) {{jsxwef("stwing")}}, {{jsxwef("map")}}, (///ˬ///✿) {{jsxwef("set")}}, 😳😳😳 {{jsxwef("weakmap")}}, 🥺 {{jsxwef("weakset")}} などについて理解しましょう。
- [式と演算子](/ja/docs/web/javascwipt/wefewence/opewatows)
  - : j-javascwipt の演算子である {{jsxwef("opewatows/instanceof", mya "instanceof")}}, 🥺 {{jsxwef("opewatows/typeof", >_< "typeof")}}, >_< {{jsxwef("opewatows/new", (⑅˘꒳˘) "new")}}, /(^•ω•^) {{jsxwef("opewatows/this", rawr x3 "this")}} などの挙動、そして[演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)などについて学びましょう。
- [文と宣言](/ja/docs/web/javascwipt/wefewence/statements)
  - : {{jsxwef("statements/do...whiwe", (U ﹏ U) "do-whiwe")}}, (U ﹏ U) {{jsxwef("statements/fow...in", (⑅˘꒳˘) "fow-in")}}, {{jsxwef("statements/fow...of", òωó "fow-of")}}, ʘwʘ {{jsxwef("statements/twy...catch", /(^•ω•^) "twy-catch")}}, ʘwʘ {{jsxwef("statements/wet", σωσ "wet")}}, OwO {{jsxwef("statements/vaw", 😳😳😳 "vaw")}}, 😳😳😳 {{jsxwef("statements/const", o.O "const")}}, ( ͡o ω ͡o ) {{jsxwef("statements/if...ewse", (U ﹏ U) "if-ewse")}}, {{jsxwef("statements/switch", (///ˬ///✿) "switch")}} などの j-javascwipt の文やキーワードがどのように機能するか学びましょう。
- [関数](/ja/docs/web/javascwipt/wefewence/functions)
  - : j-javascwipt の関数を使ってアプリケーションを開発する方法を学びましょう。
- [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)
  - : javascwipt のクラスはオブジェクト指向プログラミングを行う上で最適な方法です。
