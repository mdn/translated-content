---
title: Firefox 2 for developers
slug: Mozilla/Firefox/Releases/2
---

## 開発者のための Firefox 2 の新機能

Firefox 2 ではたくさんの新機能と能力を導入します。この記事は新機能を取り上げている記事へのリンクを提供します。

### ウェブサイトとウェブアプリケーション開発者向け

- [マイクロサマリ](https://wiki.mozilla.org/Microsummaries)
  - : マイクロサマリ (Microsummaries)とはウェブページの最も重要な情報の、定期的に更新される要約です。ウェブサイトだけではなく第三者の開発者もマイクロサマリを提供することができます。 ユーザーがマイクロサマリの提供されたページをブックマークすると、通常の変化しないタイトルの代わりにマイクロサマリを表示させるかどうか選択できます。
- [マイクロサマリの作成](/ja/docs/Creating_a_Microsummary)
  - : マイクロサマリジェネレーター (microsummary generator)の作り方のチュートリアル
- [マイクロサマリ XML 文法リファレンス](/ja/docs/Microsummary_XML_grammar_reference)
  - : マイクロサマリジェネレーターで使われる XML 文法のリファレンスガイド
- [Firefox 用 OpenSearch プラグインの作成](/ja/docs/Web/XML/Guides/OpenSearch)
  - : Firefox 2 は OpenSearch 検索エンジンフォーマットをサポートします。
- [MozSearch プラグインの作成](/ja/docs/Creating_MozSearch_plugins)
  - : Firefox 2 は OpenSearch を元にした検索プラグインフォーマットの MozSearch をサポートしますが、しかし内部利用目的のみのものです。
- [検索プラグインでの検索サジェスト機能のサポート](/ja/docs/Supporting_search_suggestions_in_search_plugins)
  - : 検索バーで入力中にドロップダウンリストが現れる検索サジェスト機能 (search suggestions)をサポートした MozSearch プラグインの作り方。
- [New in JavaScript 1.7](/ja/docs/New_in_JavaScript_1.7)
  - : Firefox 2 は JavaScript 1.7 をサポートします。JavaScript 1.7 には `let` や、構造分解 (destructuring assignment)、ジェネレーター (generator)とイテレーター (iterators)、配列内包 (array comprehensions)などの新機能が含まれます。
- [WHATWG のクライアントサイドのセッション及び永続ストレージ (DOM ストレージ)](/ja/docs/Web/API/Web_Storage_API)
  - : クライアントサイドのセッション及び永続ストレージにより、ウェブアプリケーションは構造化されたデータをクライアントサイドに保存できるようになります。
- [SVG in Firefox](/ja/docs/SVG_in_Firefox)
  - : Firefox 2 はスケーラブルベクタグラフィックス (SVG) のサポートを改善します。`<textPath>` 要素と以前にサポートされていなかったいくつかの属性を実装しました。
- [HTML フォームのスペルチェックを制御する](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Firefox 2 ではテキストエリアとテキストフィールドでのインラインスペルチェックがサポートされます。この記事は個々のフォーム要素についてスペルチェックを有効、無効にする HTML の書きかたを説明します。

### XUL と拡張機能の開発者向け

- [拡張機能を Firefox 2 用に更新する方法](/ja/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : 既存の拡張機能を Firefox 2 で動くようにする方法を取り上げます。
- [セッションストア API](/ja/docs/Session_store_API)
  - : Firefox のセッション全体を保存し復帰するための項目を提供します。
- [フィードコンテンツへアクセスする API](/ja/docs/orphaned/Feed_content_access_API)
  - : 開発者が RSS および Atom フィードをアクセスおよびパースできる API。
- [SAX サポート](/ja/docs/SAX)
  - : イベントベースの XML パーサー API.
- [ウェブページから検索エンジンを追加する](/ja/docs/Web/XML/Guides/OpenSearch)
  - : JavaScript コードは Firefox に新しい検索プラグインをインストールするように命令することができます。OpenSearch か Sherlock フォーマットのどちらかを利用して検索プラグインを書くことができます。
- [XUL でのスペルチェック](/ja/docs/Using_spell_checking_in_XUL)
  - : コードから単語のスペルをチェックしたり、スペルの候補リストを得る方法。
- [フィッシング保護データプロバイダの追加](/ja/docs/Adding_phishing_protection_data_providers)
  - : 安全なブラウジングシステムのためにさらなるデータプロバイダを追加することで Firefox のフィッシング保護機能を改善することができます。
- [Firefox へのフィードリーダーの追加](/ja/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Firefox には、ウェブベースかアプリケーションベースかに関わらず、フィードリーダーを新しく追加できます。
- [ストレージ](/ja/docs/Storage)
  - : Firefox 2 は sqlite を基にしたデータベースアーキテクチャである mozStorage を導入します。
- [Firefox 2 のテーマ変更](/ja/docs/Theme_changes_in_Firefox_2)
  - : 既存のテーマを更新して Firefox 2 で動作させるために必要な変更についての説明。
- Textbox の改良 (Firefox 2.0.0.1 以降のみ)
  - : `<textbox>` に、テキストボックスの値を既定値にリセットする `reset()` メソッドが追加されました。テキストボックスの既定値を取得および変更するには `defaultValue` プロパティを使用してください ([Firefox バグ 312867](https://bugzil.la/312867))。

    テキストフィールド内部の [nsIEditor](/ja/docs/NsIEditor) を取得するための `editor` プロパティがサポートされました ([Firefox バグ 312867](https://bugzil.la/312867))。

## 利用者向けの新機能

Firefox 2.0 は前のバージョンと同じクリーンなインターフェイスの強化版に加え、より安全でこれまで以上に便利なオンライン体験のための改良されたセキュリティ機能を提供します。

### ユーザー体験

- **テキストエリアのインラインスペルチェック** はあなたにウェブフォームで自信をもって編集させてくれます。
- **マイクロサマリ** は自動的に更新され、参照するサイトから引っ張てきた情報を表示するブックマークを作る方法を提供します。株式のティッカーやオークションの監視などに最適です。
- **拡張機能マネージャのユーザーインターフェイス**が改善されました。
- **検索エンジンマネージャ**は検索バーに示されたサーチエンジンを再配列し取り除かせてくれます。
- **タブブラウザーの強化** にはそれぞれのタブに閉じるボタンの追加、タブを閉じたときにどのタブに移動するかを Firefox が判断する方法を調整、単純化されたタブの設定が含まれています。
- **検索エンジンの自動検出**は Firefox の検索バー用のプラグインを提供する検索エンジンにプラグインをインストールすることを可能にします。
- **検索サジェスト**は検索エンジンはあなたが検索バーに途中まで入力した語句に基づいてサジェストされた検索語句を提案します。

### セキュリティとプライバシー

- **フィッシング保護**はあなたが見ているウェブサイトが偽造されているように見える時にユーザーに警告します。

## 参考資料

{{Firefox_for_developers('1.5')}}
