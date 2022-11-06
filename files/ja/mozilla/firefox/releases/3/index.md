---
title: Firefox 3 for developers
slug: Mozilla/Firefox/Releases/3
---

もしあなたが開発者で、Firefox 3 におけるすべての新機能について情報を得ようとしているなら、ここは理解を深めるのに最も適した場所です。この記事は、Firefox 3 に追加された機能をカバーする新しい記事の一覧を提供します。小さな変更が必ずしもすべてカバーされているわけではありませんが、主要な改善を学ぶ助けにはなるでしょう。

## Firefox 3 の開発者向け新機能

### Web サイトと Web アプリケーション開発者向け

- [Updating web applications for Firefox 3](/ja/docs/Updating_web_applications_for_Firefox_3)
  - : Firefox 3 における新機能を活用するために Web サイトや Web アプリケーションで必要となるかもしれない変更についての情報を提供します。
- [Online and offline events](/ja/docs/Online_and_offline_events)
  - : Firefox 3 は WHATWG のオンライン・オフラインイベントをサポートします。これは、Web アプリケーションや拡張機能から、インターネットに接続しているかどうかや、接続開始・終了のタイミングを検出できるようにします。
- [Web-based protocol handlers](/ja/docs/Web-based_protocol_handlers)
  - : `navigator.registerProtocolHandler()` メソッドを利用して、Web アプリケーションをプロトコルハンドラとして登録できるようになりました。
- [Drawing text using a canvas](/ja/docs/Drawing_text_using_a_canvas)
  - : Firefox 3 でサポートされた標準化されていない API を利用して、Canvas 内にテキストを描画できるようになりました。
- [Transform support for canvas](/ja/docs/Canvas_tutorial/Transformations#Transforms)
  - : Firefox が Canvas の `transform()` と `setTransform()` メソッドをサポートするようになりました。
- [Using microformats](/ja/docs/Using_microformats)
  - : Firefox に Microformats を扱うための API が実装されました。
- [Drag and drop events](/ja/docs/Drag_and_drop_events)
  - : Firefox 3 は、ドラッグが開始されるときと終了したときにドラッグ操作に対するソースノードへ送られる新しいイベントをサポートします。
- [Focus management in HTML](/ja/docs/Focus_management_in_HTML)
  - : 新しい HTML 5 の `activeElement` 及び `hasFocus` 属性がサポートされます。
- [Offline resources in Firefox](/ja/docs/Offline_resources_in_Firefox)
  - : Firefox で、Web アプリケーションがオフラインの間でも使えるようにするキャッシュリソースをリクエストできるようになりました。
- [CSS improvements in Firefox 3](/ja/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 は、CSS サポートにおける数々の改善を行っています。
- [DOM improvements in Firefox 3](/ja/docs/DOM_improvements_in_Firefox_3)
  - : Firefox 3 は、DOM 実装において、いくつかの Internet Explorer 独自拡張を含む、多くの新機能を提供します。
- [JavaScript 1.8 support](/ja/docs/New_in_JavaScript_1.8)
  - : Firefox 3 は JavaScript 1.8 をサポートします。
- [EXSLT support](/ja/docs/EXSLT)
  - : Firefox 3 は、[XSLT](/ja/docs/XSLT) の拡張となる [EXSLT](/ja/docs/EXSLT) の実質的なサブセットのサポートを提供します。
- [SVG improvements in Firefox 3](/ja/docs/SVG_improvements_in_Firefox_3)
  - : Firefox 3 での SVG サポートは、24 を超える新しいフィルタ、いくつかの新しい要素と属性、そして、その他の改良を含み、大幅に強化されました。
- [Animated PNG graphics](/ja/docs/Animated_PNG_graphics)
  - : Firefox 3 は、アニメーション PNG (APNG) 画像フォーマットをサポートしています。

### XUL と拡張開発者向け

#### 重要な変更と改良

- [Updating extensions for Firefox 3](/ja/docs/Updating_extensions_for_Firefox_3)
  - : 拡張機能を Firefox 3 に対応させるにあたって必要となることのガイドを提供します。
- [XUL improvements in Firefox 3](/ja/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 は、新しいスライドスケール、日付と時刻の選択ウィジェット、スピンボタンを含む、多くの新しい XUL 要素を提供します。
- [Templates in Firefox 3](/ja/docs/Templates_in_Firefox_3)
  - : テンプレートは Firefox 3 で大幅に改善されました。主な改善は、独自のクエリプロセッサを使って、RDF 以外の種類のデータソースも扱えるようになったことです。
- [Securing updates](/ja/docs/Extension_Versioning,_Update_and_Compatibility#Securing_Updates)
  - : ユーザにより安全な更新を提供するため、アドオンの更新をインストールする前に、安全な手段を使って更新情報を取得することが必須となりました。[Firefox Add-ons](http://addons.mozilla.org) に登録されているアドオンは、自動でこの手段を提供します。
- [Places migration guide](/ja/docs/Places_migration_guide)
  - : 既存の拡張機能を Places API に対応させる方法についての記事。
- [Download Manager improvements in Firefox 3](/ja/docs/Download_Manager_improvements_in_Firefox_3)
  - : Firefox 3 のダウンロードマネージャには、複数のプログレスリスナーへのサポートを含む、新たな API や改善された API が含まれています。
- [Using nsILoginManager](/ja/docs/Using_nsILoginManager)
  - : パスワードマネージャは、新しいログインマネージャに置き換えられました。
- [Embedding XBL bindings](/ja/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : XBL バインディングを、別の XML ファイルから読み込む代わりに、Chrome コードから `data:` URL スキーマを使って直接組み込むことができるようになりました。
- [Localizing extension descriptions](/ja/docs/Localizing_extension_descriptions)
  - : Firefox 3 では、アドオンのメタデータをローカライズする新しい方法がサポートされました。これにより、アドオンのダウンロード直後や無効時にローカライズされた詳細説明が表示されるようになりました。
- [Localization and Plurals](/ja/docs/Localization_and_Plurals)
  - : Firefox 3 では、新しい PluralForm モジュールがサポートされました。このモジュールは、複数のローカライゼーションで複数形の単語を正しく扱うためのツールを提供します。
- [Theme changes in Firefox 3](/ja/docs/Theme_changes_in_Firefox_3)
  - : Firefox 3 向けのテーマを作成したい方々にとって役立つ注意と情報です。

#### 新しいコンポーネントと機能

- [FUEL Library](/ja/docs/FUEL)
  - : FUEL は、XPCOM の形式的な部分を少なくし、いくつかの "モダンな" JavaScript のアイデアを追加することによって、拡張機能の開発をより生産的にします。
- [Places](/ja/docs/Places)
  - : 履歴とブックマークの API は、新しい [Places](/ja/docs/Places) API で完全に置き換えられます。
- [Idle service](/ja/docs/nsIIdleService)
  - : Firefox 3 では、ユーザが最後にキーを入力、もしくは、マウスを動かしてからどのくらいの時間が経過しているかを拡張機能が測定できるようにする、新しい `nsIIdleService` インタフェースが追加されました。
- [ZIP writer](/ja/docs/nsIZipWriter)
  - : 新しい `nsIZipWriter` インタフェースによって拡張機能は ZIP アーカイブを作れるようになります。
- [Full page zoom](/ja/docs/Full_page_zoom)
  - : Firefox 3 では、テキストのみのズームに加えて、フルページズームが追加されたことで、ユーザ体験が改善されています。
- [Interfacing with the XPCOM cycle collector](/ja/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM コードが、使われていないメモリをリークする代わりに解放させるようにする「サイクルコレクタ」を活用できるようになりました。
- [The Thread Manager](/ja/docs/The_Thread_Manager)
  - : Firefox 3 は、自作コードの中でスレッドを作成、管理する際に役立つ便利な方法を提供する、スレッドとスレッドイベント関連の新しいインタフェースとともに、新たな `nsIThreadManager` インタフェースを提供します。
- [JavaScript modules](/ja/docs/JavaScript_modules)
  - : Firefox 3 は、共有ライブラリのように、拡張機能や Web アプリケーションから読み込んで利用できる JavaScript モジュールを簡単に作成できるようにする、新たな共有コードモジュール機構を提供します。
- [The `nsIJSON` interface](/ja/docs/nsIJSON)
  - : Firefox 3 は、[JSON](/ja/docs/JSON) 文字列の高パフォーマンスなエンコードとデコードを提供する、新しい `nsIJSON` インタフェースを提供します。
- [The nsIParentalControlsService interface](/ja/docs/NsIParentalControlsService)
  - : Firefox 3 では、Microsoft Windows Vista の保護者による制限機能がサポートされ、その機能とやり取りするためのコードが使用できるようになります。
- [Using content preferences](/ja/docs/Using_content_preferences)
  - : Firefox 3 には、拡張機能およびコアコードが各サイト用のユーザ設定を保存するために利用できる、任意のサイトごとの設定を取得または設定する新しいサービスが含まれています。
- [Plug-in Monitoring](/ja/docs/Monitoring_plugins)
  - : プラグインシステムの新しいコンポーネントとして、プラグイン（例えば、Macromedia Flash) がどのくらい実行されているかを調べることができるコンポーネントが利用可能になりました。

#### 修正されたバグ

- [Notable bugs fixed in Firefox 3](/ja/docs/Notable_bugs_fixed_in_Firefox_3)
  - : この記事は、Firefox 3 で修正されたバグについての情報を提供します。

## エンドユーザ向け新機能

### ユーザ体験

- **より簡単なパスワード管理** - コンテンツ上部に表示される情報バーを使って、ログインが成功した後にパスワードを保存できるようになりました。
- **簡素化されたアドオンのインストール** - アドオンダウンロードサイトのホワイトリストが削除されたおかげで、サードパーティのダウンロードサイトからも、より少ないクリック回数で拡張機能をインストールできるようになりました。
- **新しいダウンロードマネージャ** - ダウンロードしたファイルを見つけやすくなりました。
- **再開可能なダウンロード** - ブラウザの再起動後や、ネットワーク接続をリセットした後、ダウンロードを再開できるようになりました。
- **フルページズーム** - {{mediawiki.external('表示')}} メニューから、あるいはキーボードショートカットを使って、ページのコンテンツ全体を拡大・縮小できるようになりました。文字だけでなく、レイアウト全体や画像も併せて拡大・縮小できます。
- **タブのスクロールとクイックメニュー** - 新しいタブのスクロールとクイックメニュー機能で、目的のタブをより簡単に探せるようになりました。
- **作業の保存と復元** - Firefox 3 は、終了時に開いているタブの状態を保存するかどうか尋ねるダイアログを表示します。
- **タブを開く動作の最適化** - ブックマークフォルダをタブに開く際、既存のタブを置き換える代わりに、新しいタブを追加するようになりました。
- **ロケーションバーと検索バーのサイズ調整** - ロケーションバーと検索バーの幅を、間にある小さなリサイズハンドルを使って簡単に変えられるようになりました。
- **文字列選択の改良** - Ctrl キー (Mac では Command キー) を使って、複数の文字列範囲を選択できるようになりました。また、文字列をダブルクリックした後にドラッグを開始すると、単語ごとに選択範囲が拡大・縮小されます。トリプルクリックした場合は段落全体が選択されます。
- **ページ内検索バー** - ページ内検索が、現在の選択範囲から開始されるようになりました。
- **プラグイン管理** - アドオンマネージャでプラグインを個別に無効化できるようになりました。
- **Windows Vista との統合** - Firefox のメニューが Vista のネイティブテーマで表示されるようになりました。
- **Mac OS X との統合** - ダウンロード完了や更新の通知に [Growl](http://growl.info/) をサポートしました。
- **スターボタン** - ロケーションバーに表示される新しいスターボタンを使って、ワンクリックでブックマークを追加できるようになりました。もう一度クリックすると、その新しいブックマークを指定の場所に保存したり、タグを付けることができます。
- **タグ** - ブックマークにタグを関連付けて、トピックごとに簡単に分類できるようになりました。
- **ロケーションバーの自動補完** - ロケーションバーにページのタイトルやタグを入力するだけで、履歴やブックマークから目的のページをすばやく探し出せるようになりました。お気に入りアイコン、ブックマーク、タグも併せて表示されるので、それぞれの項目がどこから検索されたのかが分かりやすくなっています。
- **スマートブックマークフォルダ** -　 Firefox の新しい「スマートブックマークフォルダ」から、最近ブックマークしたりタグを付けたページ、あるいはよく訪れるページにすばやくアクセスできます。
- **ブックマークと履歴の整理** - 統合された新しいブックマークと履歴の管理画面では、複数の表示形式や、よく使う検索語を保存できるスマートフォルダを使って、履歴やブックマークを簡単に検索できます。
- **Web ベースのプロトコルハンドラ** - ページ上の `mailto:` リンクを開く際、デスクトップアプリケーションの代わりに、お気に入りの Web メールサービスなど、Web アプリケーションを使えるようになりました。他のプロトコルについても同様のサポートが提供されます。(なお、Web アプリケーションを連携させるには、最初にそれらを Firefox に登録する必要があります)
- **より便利になったダウンロードアクション** - 新しい「アプリケーション」設定画面は、様々なファイル形式やプロトコルスキーマの処理方法を設定するための、改良されたユーザインタフェースを提供します。
- **ルック＆フィールの改善** - グラフィックとフォント処理が改良され、Web ページが画面上でより美しく表示されるようになりました。例えば、テキストの描画がよりシャープになり、リガチャや複雑な筆記体活字を含むフォントのサポートも改善されています。さらに、Mac と Linux (Gnome) では、新たなネイティブテーマが採用されたことで、Firefox の見た目がかつてなくネイティブアプリケーションに近づきました。
- **カラーマネジメントのサポート** - `{{mediawiki.external('about:config')}}` 画面で `gfx.color_management.enabled` を設定すると、画像に埋め込まれたカラープロファイルを使って、コンピュータの画面に適したカラー調節が行われます。
- **オフラインサポート** - Web アプリケーションが、インターネットに接続していないときでも利用できるようにした新機能を活用できるようになりました。

### プライバシーとセキュリティ

- **サイト情報をワンクリックで表示** - 訪れたサイトに関する詳しい情報を知りたいときは、ロケーションバーに表示されるサイトアイコンをクリックすれば、サイトの所有者を確認することができます。識別情報がはっきりと表示され、前より分かりやすくなりました。
- **悪意のあるソフトウェアからの保護** - ウイルス、スパイウェア、トロイの木馬などの危険なソフトウェア (総称してマルウェア＝悪意のあるソフトウェアと呼ばれます) をインストールさせようとすることが知られているサイトを訪れてしまった場合、Firefox 3 は警告を表示します。どのような形で警告が表示されるかは、[このテスト用ページ](https://www.mozilla.com/firefox/its-an-attack.html) で確認できます。
- **フィッシング詐欺サイトからの保護の改良** - フィッシング詐欺 (偽装) サイトと思われるページを開いてしまった場合、ページの内容とともに警告が表示されるのではなく、特別なページが表示されるようになりました。どのような形で警告が表示されるかは、[このテスト用ページ](https://www.mozilla.com/firefox/its-a-trap.html) で確認できます。
- **より分かりやすくなった SSL エラー** - 不正な SSL 証明書に遭遇したときに表示されるエラーの内容がより明確になり、どのような問題が起きているのか分かりやすくなりました。
- **古いアドオンからの保護** - Firefox 3 は、アドオンやプラグインのバージョンを自動的に確認し、古い安全でないバージョンを無効化します。
- **安全なアドオンの更新** - 安全でない更新方法を用いているアドオンのインストールを禁止することで、アドオンの更新を行う際の安全性が向上しました。
- **ウイルス対策ソフトの統合** - Firefox 3 は、実行可能ファイルをダウンロードした際、ウイルス対策ソフトに通知を行い、即座にスキャンを開始できるようにします。
- **Windows Vista の保護者による制限機能のサポート** - Firefox 3 は、ファイルダウンロードの無効化に、Vista のシステム全体の保護者による制限 (ペアレンタルコントロール) 設定をサポートしました。

### パフォーマンス

- **信頼性** - Firefox 3 は、ブックマーク、履歴、Cookie、個人設定をトランザクション上安全なデータベース形式で保存します。つまり、システムがクラッシュした場合も、プロファイルデータが失われずに済みます。
- **高速化** - Firefox 3 では、画面上の描画処理と、ページレイアウトの処理を行う部分を完全に書き換えることで、パフォーマンスが劇的に向上しました。
- **メモリ使用量の削減** - Firefox 3 では、300 以上のメモリ「リーク」バグの修正に加えて、リークしたメモリブロックを自動的に特定、処理する新機能によって、メモリ効率が大幅に向上しました。

## 関連記事

- [Updating extensions for Firefox 3](/ja/docs/Updating_extensions_for_Firefox_3)
- [Updating web applications for Firefox 3](/ja/docs/Updating_web_applications_for_Firefox_3)

{{Firefox_for_developers('2')}}
