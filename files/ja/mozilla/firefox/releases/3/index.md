---
title: Firefox 3 for developers
slug: Mozilla/Firefox/Releases/3
tags:
  - Firefox
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3
---
<p>もしあなたが開発者で、Firefox 3 におけるすべての新機能について情報を得ようとしているなら、ここは理解を深めるのに最も適した場所です。この記事は、Firefox 3 に追加された機能をカバーする新しい記事の一覧を提供します。小さな変更が必ずしもすべてカバーされているわけではありませんが、主要な改善を学ぶ助けにはなるでしょう。</p>

<h2 id="New_developer_features_in_Firefox_3" name="New_developer_features_in_Firefox_3">Firefox 3 の開発者向け新機能</h2>



<h3 id="For_web_site_and_application_developers" name="For_web_site_and_application_developers">Web サイトと Web アプリケーション開発者向け</h3>
<dl>
  <dt><a href="/ja/docs/Updating_web_applications_for_Firefox_3" title="Updating_web_applications_for_Firefox_3">Updating web applications for Firefox 3</a></dt>
  <dd>Firefox 3 における新機能を活用するために Web サイトや Web アプリケーションで必要となるかもしれない変更についての情報を提供します。</dd>
  <dt><a href="/ja/docs/Online_and_offline_events" title="Online_and_offline_events">Online and offline events</a></dt>
  <dd>Firefox 3 は WHATWG のオンライン・オフラインイベントをサポートします。これは、Web アプリケーションや拡張機能から、インターネットに接続しているかどうかや、接続開始・終了のタイミングを検出できるようにします。</dd>
  <dt><a href="/ja/docs/Web-based_protocol_handlers" title="Web-based_protocol_handlers">Web-based protocol handlers</a></dt>
  <dd><code>navigator.registerProtocolHandler()</code> メソッドを利用して、Web アプリケーションをプロトコルハンドラとして登録できるようになりました。</dd>
  <dt><a href="/ja/docs/Drawing_text_using_a_canvas" title="Drawing_text_using_a_canvas">Drawing text using a canvas</a></dt>
  <dd>Firefox 3 でサポートされた標準化されていない API を利用して、Canvas 内にテキストを描画できるようになりました。</dd>
  <dt><a href="/ja/docs/Canvas_tutorial/Transformations#Transforms" title="Canvas_tutorial/Transformations#Transforms">Transform support for canvas</a></dt>
  <dd>Firefox が Canvas の <code>transform()</code> と <code>setTransform()</code> メソッドをサポートするようになりました。</dd>
  <dt><a href="/ja/docs/Using_microformats" title="Using_microformats">Using microformats</a></dt>
  <dd>Firefox に Microformats を扱うための API が実装されました。</dd>
  <dt><a href="/ja/docs/Drag_and_drop_events" title="Drag_and_drop_events">Drag and drop events</a></dt>
  <dd>Firefox 3 は、ドラッグが開始されるときと終了したときにドラッグ操作に対するソースノードへ送られる新しいイベントをサポートします。</dd>
  <dt><a href="/ja/docs/Focus_management_in_HTML" title="Focus_management_in_HTML">Focus management in HTML</a></dt>
  <dd>新しい HTML 5 の <code>activeElement</code> 及び <code>hasFocus</code> 属性がサポートされます。</dd>
  <dt><a href="/ja/docs/Offline_resources_in_Firefox" title="Offline_resources_in_Firefox">Offline resources in Firefox</a></dt>
  <dd>Firefox で、Web アプリケーションがオフラインの間でも使えるようにするキャッシュリソースをリクエストできるようになりました。</dd>
  <dt><a href="/ja/docs/CSS_improvements_in_Firefox_3" title="CSS_improvements_in_Firefox_3">CSS improvements in Firefox 3</a></dt>
  <dd>Firefox 3 は、CSS サポートにおける数々の改善を行っています。</dd>
  <dt><a href="/ja/docs/DOM_improvements_in_Firefox_3" title="DOM_improvements_in_Firefox_3">DOM improvements in Firefox 3</a></dt>
  <dd>Firefox 3 は、DOM 実装において、いくつかの Internet Explorer 独自拡張を含む、多くの新機能を提供します。</dd>
  <dt><a href="/ja/docs/New_in_JavaScript_1.8" title="New_in_JavaScript_1.8">JavaScript 1.8 support</a></dt>
  <dd>Firefox 3 は JavaScript 1.8 をサポートします。</dd>
  <dt><a href="/ja/docs/EXSLT" title="EXSLT">EXSLT support</a></dt>
  <dd>Firefox 3 は、<a href="/ja/docs/XSLT" title="XSLT">XSLT</a> の拡張となる <a href="/ja/docs/EXSLT" title="EXSLT">EXSLT</a> の実質的なサブセットのサポートを提供します。</dd>
  <dt><a href="/ja/docs/SVG_improvements_in_Firefox_3" title="SVG_improvements_in_Firefox_3">SVG improvements in Firefox 3</a></dt>
  <dd>Firefox 3 での SVG サポートは、24 を超える新しいフィルタ、いくつかの新しい要素と属性、そして、その他の改良を含み、大幅に強化されました。</dd>
  <dt><a href="/ja/docs/Animated_PNG_graphics" title="Animated_PNG_graphics">Animated PNG graphics</a></dt>
  <dd>Firefox 3 は、アニメーション PNG (APNG) 画像フォーマットをサポートしています。</dd>
</dl>




<h3 id="For_XUL_and_extension_developers" name="For_XUL_and_extension_developers">XUL と拡張開発者向け</h3>


<h4 id=".E9.87.8D.E8.A6.81.E3.81.AA.E5.A4.89.E6.9B.B4.E3.81.A8.E6.94.B9.E8.89.AF" name=".E9.87.8D.E8.A6.81.E3.81.AA.E5.A4.89.E6.9B.B4.E3.81.A8.E6.94.B9.E8.89.AF">重要な変更と改良</h4>
<dl>
  <dt><a href="/ja/docs/Updating_extensions_for_Firefox_3" title="Updating_extensions_for_Firefox_3">Updating extensions for Firefox 3</a></dt>
  <dd>拡張機能を Firefox 3 に対応させるにあたって必要となることのガイドを提供します。</dd>
  <dt><a href="/ja/docs/XUL_improvements_in_Firefox_3" title="XUL_improvements_in_Firefox_3">XUL improvements in Firefox 3</a></dt>
  <dd>Firefox 3 は、新しいスライドスケール、日付と時刻の選択ウィジェット、スピンボタンを含む、多くの新しい XUL 要素を提供します。</dd>
  <dt><a href="/ja/docs/Templates_in_Firefox_3" title="Templates_in_Firefox_3">Templates in Firefox 3</a></dt>
  <dd>テンプレートは Firefox 3 で大幅に改善されました。主な改善は、独自のクエリプロセッサを使って、RDF 以外の種類のデータソースも扱えるようになったことです。</dd>
  <dt><a href="/ja/docs/Extension_Versioning,_Update_and_Compatibility#Securing_Updates" title="Extension_Versioning,_Update_and_Compatibility#Securing_Updates">Securing updates</a></dt>
  <dd>ユーザにより安全な更新を提供するため、アドオンの更新をインストールする前に、安全な手段を使って更新情報を取得することが必須となりました。<a href="http://addons.mozilla.org">Firefox Add-ons</a> に登録されているアドオンは、自動でこの手段を提供します。</dd>
  <dt><a href="/ja/docs/Places_migration_guide" title="Places_migration_guide">Places migration guide</a></dt>
  <dd>既存の拡張機能を Places API に対応させる方法についての記事。</dd>
  <dt><a href="/ja/docs/Download_Manager_improvements_in_Firefox_3" title="Download_Manager_improvements_in_Firefox_3">Download Manager improvements in Firefox 3</a></dt>
  <dd>Firefox 3 のダウンロードマネージャには、複数のプログレスリスナーへのサポートを含む、新たな API や改善された API が含まれています。</dd>
  <dt><a href="/ja/docs/Using_nsILoginManager" title="Using_nsILoginManager">Using nsILoginManager</a></dt>
  <dd>パスワードマネージャは、新しいログインマネージャに置き換えられました。</dd>
  <dt><a href="/ja/docs/XBL/XBL_1.0_Reference/Elements#binding" title="XBL/XBL_1.0_Reference/Elements#binding">Embedding XBL bindings</a></dt>
  <dd>XBL バインディングを、別の XML ファイルから読み込む代わりに、Chrome コードから <code>data:</code> URL スキーマを使って直接組み込むことができるようになりました。</dd>
  <dt><a href="/ja/docs/Localizing_extension_descriptions" title="Localizing_extension_descriptions">Localizing extension descriptions</a></dt>
  <dd>Firefox 3 では、アドオンのメタデータをローカライズする新しい方法がサポートされました。これにより、アドオンのダウンロード直後や無効時にローカライズされた詳細説明が表示されるようになりました。</dd>
  <dt><a href="/ja/docs/Localization_and_Plurals" title="Localization_and_Plurals">Localization and Plurals</a></dt>
  <dd>Firefox 3 では、新しい PluralForm モジュールがサポートされました。このモジュールは、複数のローカライゼーションで複数形の単語を正しく扱うためのツールを提供します。</dd>
  <dt><a href="/ja/docs/Theme_changes_in_Firefox_3" title="Theme_changes_in_Firefox_3">Theme changes in Firefox 3</a></dt>
  <dd>Firefox 3 向けのテーマを作成したい方々にとって役立つ注意と情報です。</dd>
</dl>
<h4 id=".E6.96.B0.E3.81.97.E3.81.84.E3.82.B3.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.8D.E3.83.B3.E3.83.88.E3.81.A8.E6.A9.9F.E8.83.BD" name=".E6.96.B0.E3.81.97.E3.81.84.E3.82.B3.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.8D.E3.83.B3.E3.83.88.E3.81.A8.E6.A9.9F.E8.83.BD">新しいコンポーネントと機能</h4>
<dl>
  <dt><a href="/ja/docs/FUEL" title="FUEL">FUEL Library</a></dt>
  <dd>FUEL は、XPCOM の形式的な部分を少なくし、いくつかの "モダンな" JavaScript のアイデアを追加することによって、拡張機能の開発をより生産的にします。</dd>
  <dt><a href="/ja/docs/Places" title="Places">Places</a></dt>
  <dd>履歴とブックマークの API は、新しい <a href="/ja/docs/Places" title="Places">Places</a> API で完全に置き換えられます。</dd>
  <dt><a href="/ja/docs/nsIIdleService" title="nsIIdleService">Idle service</a></dt>
  <dd>Firefox 3 では、ユーザが最後にキーを入力、もしくは、マウスを動かしてからどのくらいの時間が経過しているかを拡張機能が測定できるようにする、新しい <code>nsIIdleService</code> インタフェースが追加されました。</dd>
  <dt><a href="/ja/docs/nsIZipWriter" title="nsIZipWriter">ZIP writer</a></dt>
  <dd>新しい <code>nsIZipWriter</code> インタフェースによって拡張機能は ZIP アーカイブを作れるようになります。</dd>
  <dt><a href="/ja/docs/Full_page_zoom" title="Full_page_zoom">Full page zoom</a></dt>
  <dd>Firefox 3 では、テキストのみのズームに加えて、フルページズームが追加されたことで、ユーザ体験が改善されています。</dd>
  <dt><a href="/ja/docs/Interfacing_with_the_XPCOM_cycle_collector" title="Interfacing_with_the_XPCOM_cycle_collector">Interfacing with the XPCOM cycle collector</a></dt>
  <dd>XPCOM コードが、使われていないメモリをリークする代わりに解放させるようにする「サイクルコレクタ」を活用できるようになりました。</dd>
  <dt><a href="/ja/docs/The_Thread_Manager" title="The_Thread_Manager">The Thread Manager</a></dt>
  <dd>Firefox 3 は、自作コードの中でスレッドを作成、管理する際に役立つ便利な方法を提供する、スレッドとスレッドイベント関連の新しいインタフェースとともに、新たな <code>nsIThreadManager</code> インタフェースを提供します。</dd>
  <dt><a href="/ja/docs/JavaScript_modules" title="JavaScript_modules">JavaScript modules</a></dt>
  <dd>Firefox 3 は、共有ライブラリのように、拡張機能や Web アプリケーションから読み込んで利用できる JavaScript モジュールを簡単に作成できるようにする、新たな共有コードモジュール機構を提供します。</dd>
  <dt><a href="/ja/docs/nsIJSON" title="nsIJSON">The <code>nsIJSON</code> interface</a></dt>
  <dd>Firefox 3 は、<a href="/ja/docs/JSON" title="JSON">JSON</a> 文字列の高パフォーマンスなエンコードとデコードを提供する、新しい <code>nsIJSON</code> インタフェースを提供します。</dd>
  <dt><a href="/ja/docs/NsIParentalControlsService" title="NsIParentalControlsService">The nsIParentalControlsService interface</a></dt>
  <dd>Firefox 3 では、Microsoft Windows Vista の保護者による制限機能がサポートされ、その機能とやり取りするためのコードが使用できるようになります。</dd>
  <dt><a href="/ja/docs/Using_content_preferences" title="Using_content_preferences">Using content preferences</a></dt>
  <dd>Firefox 3 には、拡張機能およびコアコードが各サイト用のユーザ設定を保存するために利用できる、任意のサイトごとの設定を取得または設定する新しいサービスが含まれています。</dd>
  <dt><a href="/ja/docs/Monitoring_plugins" title="Monitoring_plugins">Plug-in Monitoring</a></dt>
  <dd>プラグインシステムの新しいコンポーネントとして、プラグイン（例えば、Macromedia Flash) がどのくらい実行されているかを調べることができるコンポーネントが利用可能になりました。</dd>
</dl>



<h4 id=".E4.BF.AE.E6.AD.A3.E3.81.95.E3.82.8C.E3.81.9F.E3.83.90.E3.82.B0" name=".E4.BF.AE.E6.AD.A3.E3.81.95.E3.82.8C.E3.81.9F.E3.83.90.E3.82.B0">修正されたバグ</h4>
<dl>
  <dt><a href="/ja/docs/Notable_bugs_fixed_in_Firefox_3" title="Notable_bugs_fixed_in_Firefox_3">Notable bugs fixed in Firefox 3</a></dt>
  <dd>この記事は、Firefox 3 で修正されたバグについての情報を提供します。</dd>
</dl>





<h2 id="New_features_for_end_users" name="New_features_for_end_users">エンドユーザ向け新機能</h2>




<h3 id="User_experience" name="User_experience">ユーザ体験</h3>
<ul>
  <li><strong>より簡単なパスワード管理</strong> - コンテンツ上部に表示される情報バーを使って、ログインが成功した後にパスワードを保存できるようになりました。</li>
  <li><strong>簡素化されたアドオンのインストール</strong> - アドオンダウンロードサイトのホワイトリストが削除されたおかげで、サードパーティのダウンロードサイトからも、より少ないクリック回数で拡張機能をインストールできるようになりました。</li>
  <li><strong>新しいダウンロードマネージャ</strong> - ダウンロードしたファイルを見つけやすくなりました。</li>
  <li><strong>再開可能なダウンロード</strong> - ブラウザの再起動後や、ネットワーク接続をリセットした後、ダウンロードを再開できるようになりました。</li>
  <li><strong>フルページズーム</strong> - {{mediawiki.external('表示')}} メニューから、あるいはキーボードショートカットを使って、ページのコンテンツ全体を拡大・縮小できるようになりました。文字だけでなく、レイアウト全体や画像も併せて拡大・縮小できます。</li>
  <li><strong>タブのスクロールとクイックメニュー</strong> - 新しいタブのスクロールとクイックメニュー機能で、目的のタブをより簡単に探せるようになりました。</li>
  <li><strong>作業の保存と復元</strong> - Firefox 3 は、終了時に開いているタブの状態を保存するかどうか尋ねるダイアログを表示します。</li>
  <li><strong>タブを開く動作の最適化</strong> - ブックマークフォルダをタブに開く際、既存のタブを置き換える代わりに、新しいタブを追加するようになりました。</li>
  <li><strong>ロケーションバーと検索バーのサイズ調整</strong> - ロケーションバーと検索バーの幅を、間にある小さなリサイズハンドルを使って簡単に変えられるようになりました。</li>
  <li><strong>文字列選択の改良</strong> - Ctrl キー (Mac では Command キー) を使って、複数の文字列範囲を選択できるようになりました。また、文字列をダブルクリックした後にドラッグを開始すると、単語ごとに選択範囲が拡大・縮小されます。トリプルクリックした場合は段落全体が選択されます。</li>
  <li><strong>ページ内検索バー</strong> - ページ内検索が、現在の選択範囲から開始されるようになりました。</li>
  <li><strong>プラグイン管理</strong> - アドオンマネージャでプラグインを個別に無効化できるようになりました。</li>
  <li><strong>Windows Vista との統合</strong> - Firefox のメニューが Vista のネイティブテーマで表示されるようになりました。</li>
  <li><strong>Mac OS X との統合</strong> - ダウンロード完了や更新の通知に <a href="http://growl.info/">Growl</a> をサポートしました。</li>
  <li><strong>スターボタン</strong> - ロケーションバーに表示される新しいスターボタンを使って、ワンクリックでブックマークを追加できるようになりました。もう一度クリックすると、その新しいブックマークを指定の場所に保存したり、タグを付けることができます。</li>
  <li><strong>タグ</strong> - ブックマークにタグを関連付けて、トピックごとに簡単に分類できるようになりました。</li>
  <li><strong>ロケーションバーの自動補完</strong> - ロケーションバーにページのタイトルやタグを入力するだけで、履歴やブックマークから目的のページをすばやく探し出せるようになりました。お気に入りアイコン、ブックマーク、タグも併せて表示されるので、それぞれの項目がどこから検索されたのかが分かりやすくなっています。</li>
  <li><strong>スマートブックマークフォルダ</strong> -　Firefox の新しい「スマートブックマークフォルダ」から、最近ブックマークしたりタグを付けたページ、あるいはよく訪れるページにすばやくアクセスできます。</li>
  <li><strong>ブックマークと履歴の整理</strong> - 統合された新しいブックマークと履歴の管理画面では、複数の表示形式や、よく使う検索語を保存できるスマートフォルダを使って、履歴やブックマークを簡単に検索できます。</li>
  <li><strong>Web ベースのプロトコルハンドラ</strong> - ページ上の <code>mailto:</code> リンクを開く際、デスクトップアプリケーションの代わりに、お気に入りの Web メールサービスなど、Web アプリケーションを使えるようになりました。他のプロトコルについても同様のサポートが提供されます。(なお、Web アプリケーションを連携させるには、最初にそれらを Firefox に登録する必要があります)</li>
  <li><strong>より便利になったダウンロードアクション</strong> - 新しい「アプリケーション」設定画面は、様々なファイル形式やプロトコルスキーマの処理方法を設定するための、改良されたユーザインタフェースを提供します。</li>
  <li><strong>ルック＆フィールの改善</strong> - グラフィックとフォント処理が改良され、Web ページが画面上でより美しく表示されるようになりました。例えば、テキストの描画がよりシャープになり、リガチャや複雑な筆記体活字を含むフォントのサポートも改善されています。さらに、Mac と Linux (Gnome) では、新たなネイティブテーマが採用されたことで、Firefox の見た目がかつてなくネイティブアプリケーションに近づきました。</li>
  <li><strong>カラーマネジメントのサポート</strong> - <code>{{mediawiki.external('about:config')}}</code> 画面で <code>gfx.color_management.enabled</code> を設定すると、画像に埋め込まれたカラープロファイルを使って、コンピュータの画面に適したカラー調節が行われます。</li>
  <li><strong>オフラインサポート</strong> - Web アプリケーションが、インターネットに接続していないときでも利用できるようにした新機能を活用できるようになりました。</li>
</ul>



<h3 id="Security_and_privacy" name="Security_and_privacy">プライバシーとセキュリティ</h3>
<ul>
  <li><strong>サイト情報をワンクリックで表示</strong> - 訪れたサイトに関する詳しい情報を知りたいときは、ロケーションバーに表示されるサイトアイコンをクリックすれば、サイトの所有者を確認することができます。識別情報がはっきりと表示され、前より分かりやすくなりました。</li>
  <li><strong>悪意のあるソフトウェアからの保護</strong> - ウイルス、スパイウェア、トロイの木馬などの危険なソフトウェア (総称してマルウェア＝悪意のあるソフトウェアと呼ばれます) をインストールさせようとすることが知られているサイトを訪れてしまった場合、Firefox 3 は警告を表示します。どのような形で警告が表示されるかは、<a class="link-https" href="https://www.mozilla.com/firefox/its-an-attack.html">このテスト用ページ</a> で確認できます。</li>
  <li><strong>フィッシング詐欺サイトからの保護の改良</strong> - フィッシング詐欺 (偽装) サイトと思われるページを開いてしまった場合、ページの内容とともに警告が表示されるのではなく、特別なページが表示されるようになりました。どのような形で警告が表示されるかは、<a class="link-https" href="https://www.mozilla.com/firefox/its-a-trap.html">このテスト用ページ</a> で確認できます。</li>
  <li><strong>より分かりやすくなった SSL エラー</strong> - 不正な SSL 証明書に遭遇したときに表示されるエラーの内容がより明確になり、どのような問題が起きているのか分かりやすくなりました。</li>
  <li><strong>古いアドオンからの保護</strong> - Firefox 3 は、アドオンやプラグインのバージョンを自動的に確認し、古い安全でないバージョンを無効化します。</li>
  <li><strong>安全なアドオンの更新</strong> - 安全でない更新方法を用いているアドオンのインストールを禁止することで、アドオンの更新を行う際の安全性が向上しました。</li>
  <li><strong>ウイルス対策ソフトの統合</strong> - Firefox 3 は、実行可能ファイルをダウンロードした際、ウイルス対策ソフトに通知を行い、即座にスキャンを開始できるようにします。</li>
  <li><strong>Windows Vista の保護者による制限機能のサポート</strong> - Firefox 3 は、ファイルダウンロードの無効化に、Vista のシステム全体の保護者による制限 (ペアレンタルコントロール) 設定をサポートしました。</li>
</ul>

<h3 id="Performance" name="Performance">パフォーマンス</h3>
<ul>
  <li><strong>信頼性</strong> - Firefox 3 は、ブックマーク、履歴、Cookie、個人設定をトランザクション上安全なデータベース形式で保存します。つまり、システムがクラッシュした場合も、プロファイルデータが失われずに済みます。</li>
  <li><strong>高速化</strong> - Firefox 3 では、画面上の描画処理と、ページレイアウトの処理を行う部分を完全に書き換えることで、パフォーマンスが劇的に向上しました。</li>
  <li><strong>メモリ使用量の削減</strong> - Firefox 3 では、300 以上のメモリ「リーク」バグの修正に加えて、リークしたメモリブロックを自動的に特定、処理する新機能によって、メモリ効率が大幅に向上しました。</li>
</ul>


<h2 id="See_also" name="See_also">関連記事</h2>
<ul>
  <li><a href="/ja/docs/Updating_extensions_for_Firefox_3" title="Updating_extensions_for_Firefox_3">Updating extensions for Firefox 3</a></li>
  <li><a href="/ja/docs/Updating_web_applications_for_Firefox_3" title="Updating_web_applications_for_Firefox_3">Updating web applications for Firefox 3</a></li>
</ul>

<div>{{Firefox_for_developers('2')}}</div>
