---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{jsSidebar}}

**JavaScript** (**JS**) は軽量でインタープリター型（あるいは[実行時](https://ja.wikipedia.org/wiki/実行時コンパイラ)コンパイルされる）{{Glossary("First-class Function", "第一級関数")}}を備えたプログラミング言語です。ウェブページでよく使用されるスクリプト言語として知られ、[多くのブラウザー以外の環境](https://ja.wikipedia.org/wiki/JavaScript#その他の環境での利用)、例えば {{Glossary("Node.js")}} や [Apache CouchDB](https://couchdb.apache.org/) や [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/) などでも使用されています。 JavaScript は[プロトタイプベース](/ja/docs/Glossary/Prototype-based_programming)で、マルチパラダイムで、[シングルスレッド](/ja/docs/Glossary/Thread)で、[動的](/ja/docs/Glossary/Dynamic_typing)な言語であり、オブジェクト指向、命令型、宣言型（関数プログラミングなど）といったスタイルに対応しています。

JavaScript の動的な機能には、ランタイムオブジェクトの構築、可変引数リスト、関数変数、動的スクリプトの作成（[`eval`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) で）、オブジェクトの内包（[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) と [`Object` ユーティリティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#静的メソッド)で）、ソースコードの復元（JavaScript 関数はそのソーステキストを格納し [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) で復元可能）が含まれます。

この章では JavaScript 言語自体について、すなわちウェブページや他のホスト環境に限定されないコアの部分に限定して解説しています。ウェブページ特有の {{Glossary("API")}} 群の情報を得たい場合は [Web API](/ja/docs/Web/API) と {{Glossary("DOM")}} を参照してください。

JavaScript の規格書は [ECMAScript Language Specification](https://tc39.es/ecma262/) および [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402) です。私たちは、あるブラウザーが機能を実装するとすぐに、それを文書化するように努めています。このことは、 [ECMAScript の新しい機能に関するいくつかの提案](https://github.com/tc39/proposals)がすでにブラウザーに実装されている場合、MDN の記事の文書や例ではそれらの新しい機能のいくつかを使用する可能性があることを示しています。ほとんどの場合、これは[ステージ](https://tc39.es/process-document/) 3 と 4 の間で起こることで、通常は仕様が正式に公開される前です。

JavaScript を[プログラミング言語 Java](https://ja.wikipedia.org/wiki/Java) と混同しないでください。 **JavaScript は「インタープリター版の Java」では _ありません_**。 "Java" と "JavaScript" は両方ともアメリカやその他の国においてオラクルの商標または登録商標です。しかし、この 2 つのプログラミング言語は構文、セマンティック、利用形態が大きく異なります。

コア言語機能の JavaScript ドキュメントは（多くの部分は純粋な [ECMAScript](/ja/docs/Web/JavaScript/JavaScript_technologies_overview)）、以下のものがあります。

- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)
- [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)

JavaScript 仕様と関連技術に関する詳細は、 [JavaScript 技術概要](/ja/docs/Web/JavaScript/JavaScript_technologies_overview)を参照してください。

## チュートリアル

ガイドやチュートリアルを使って JavaScript をプログラムする方法を学びましょう。

### 完全な初心者向け

JavaScript について学びたいと思っているが、JavaScript あるいはプログラミングについて過去に経験がないのであれば、 [JavaScript 学習エリアのトピック](/ja/docs/Learn/JavaScript)に向かいましょう。以下のモジュールが利用可能です。

- [JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)
  - : 変数、文字列、数値、配列のような JavaScript の基本機能の解説に加え、「JavaScript とは何か」「何に似ているか」「何ができるか」といった基本的な質問に答えます。
- [JavaScript の構成要素](/ja/docs/Learn/JavaScript/Building_blocks)
  - : 引き続き JavaScript の基本機能について、条件分岐、ループ、関数、イベントなどのよく目にするタイプのコードブロックに注意を向けつつ説明します。
- [JavaScript のオブジェクトの紹介](/ja/docs/Learn/JavaScript/Objects)
  - : 言語に関する知識をさらに深め、より効率的なコードを書きたいのであれば、JavaScript のオブジェクト指向の性質を理解することは重要です。このため、私たちが提供するこのモジュールが役立つでしょう。
- [非同期 JavaScript](/ja/docs/Learn/JavaScript/Asynchronous)
  - : 非同期 JavaScript について、なぜ重要なのか、どのように使用してサーバーからのリソースの読み取りなどのブロックが発生する可能性がある操作を効果的に扱うことができるのかを説明します。
- [クライアント側ウェブ API](/ja/docs/Learn/JavaScript/Client-side_web_APIs)
  - : API とは何か、開発作業でよく見かける、最も一般的な API の一部の使い方を説明します。

### JavaScript ガイド

- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)
  - : JavaScript や他の言語でのプログラミング経験がある方を対象とした、より詳細な JavaScript 言語のガイドです。

### 中級者向け

- [クライアント側の JavaScript フレームワークの理解](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript フレームワークは、最新のフロントエンドウェブ開発に欠かせないもので、拡張性のある双方向のウェブアプリケーションを構築するための、試行錯誤されたツールを開発者に提供します。幾つかの有名なツールについて取り扱うチュートリアルに移動する前に、クライアントサイドのフレームワークがどのように動作するのか、自分のツールセットにどのように適合させるか、についての基本的な背景知識を提供します。
- [JavaScript 言語概要](/ja/docs/Web/JavaScript/Language_overview)
  - : 他のプログラミング言語から来た人がスピードアップするために、 JavaScript の基本的な構文と意味づけの概要を説明します。
- [JavaScript のデータ構造](/ja/docs/Web/JavaScript/Data_structures)
  - : JavaScript で利用可能なデータ構造の概要です。
- [等値比較と同一性](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript には 3 つの異なる値の比較演算子があります。 `===` を用いる厳格な等値性比較、 `==` を用いる緩い等値性比較、そして {{jsxref("Object.is()")}} メソッドです。
- [プロパティの列挙と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : オブジェクトプロパティのグループを1つずつ訪問する様々なメソッドが、プロパティの列挙可能性と所有権をどのように処理するかです。
- [クロージャ](/ja/docs/Web/JavaScript/Closures)
  - : クロージャとは、関数とその関数が宣言された字句環境の組み合わせのことです。

### 上級者向け

- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : よく誤解されたり過小評価されたりしているプロトタイプベースの継承に対する説明です。
- [メモリー管理](/ja/docs/Web/JavaScript/Memory_management)
  - : JavaScript におけるメモリーのライフサイクルとガベージコレクションです。
- [イベントループ](/ja/docs/Web/JavaScript/Event_loop)
  - : JavaScript は「イベントループ」に基づく実行時モデルを持っています。

## リファレンス

完全な [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)ドキュメントをご覧ください。

- [標準オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects)
  - : 標準組み込みオブジェクトである {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} などについて理解しましょう。
- [式と演算子](/ja/docs/Web/JavaScript/Reference/Operators)
  - : JavaScript の演算子である {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}} などの挙動、そして[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)などについて学びましょう。
- [文と宣言](/ja/docs/Web/JavaScript/Reference/Statements)
  - : {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} などの JavaScript の文やキーワードがどのように機能するか学びましょう。
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
  - : JavaScript の関数を使ってアプリケーションを開発する方法を学びましょう。
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript のクラスはオブジェクト指向プログラミングを行う上で最適な方法です。
