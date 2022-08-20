---
title: Firefox 1.5 for developers
slug: Mozilla/Firefox/Releases/1.5
tags:
  - Add-ons
  - CSS
  - DOM
  - Extensions
  - HTML
  - JavaScript
  - RDF
  - SVG
  - Web Development
  - Web Standards
  - XML
  - XML Web Services
  - XSLT
  - XUL
translation_of: Mozilla/Firefox/Releases/1.5
---
<p>{{FirefoxSidebar}}</p>

<p>Gecko 1.8 エンジンに基づいて、Firefox 1.5 はクラス最高の標準サポートを改善し、次世代の Web アプリケーションを可能にする新しい機能を提供しました。Firefox 1.5 では、CSS2 と CSS3、SVG 1.1 と &lt;canvas&gt;、XForms と XML イベント、さらに多くの DHTML、JavaScript、DOM 拡張を介したスクリプト可能でプログラム可能な 2D グラフィックスの API のサポートが強化されています。</p>

<h2 id=".E9.96.8B.E7.99.BA.E3.83.84.E3.83.BC.E3.83.AB" name=".E9.96.8B.E7.99.BA.E3.83.84.E3.83.BC.E3.83.AB">開発ツール</h2>

<p>Firefox 1.5 をサポートする開発者を助ける、さまざまなツールやブラウザ拡張機能が利用可能です。</p>

<ul>
 <li><a href="/ja/docs/DOM_Inspector">DOM Inspector</a> : 開発者が、文書を直接編集しなくても文書を調査、編集可能なツールです。DOM Inspector は、カスタムインストールにある Firefox 1.5 の開発者ツールの中からインストール可能です。</li>
 <li>JavaScript console : JavaScript コードを、JavaScript と CSS のエラーをみながら作成、試験可能なツールです。</li>
 <li>ページのソースにてシンタックスハイライト、検索機能を利用できます。</li>
 <li><a class="link-https" href="https://addons.mozilla.org/extensions/showlist.php?application=firefox&amp;category=Developer%20Tools">ブラウザ拡張</a> には、<a class="external" href="http://www.joehewitt.com/software/firebug/">FireBug</a>, <a href="/ja/docs/Web_Developer_Extension_(external)">ウェブ開発ツールバー</a>, <a href="/ja/docs/Live_HTTP_Headers_(external)">Live HTTP Headers</a>, <a href="/ja/docs/HTML_Validator_(external)">HTML Validator</a> などさまざまな機能が含まれます。</li>
</ul>

<p><strong>注:</strong> いくつかの拡張機能はいまのところ Firefox 1.5 をサポートしていません。これらは自動的に無効になります。</p>

<h2 id=".E6.A6.82.E8.AA.AC" name=".E6.A6.82.E8.AA.AC">概説</h2>

<p>Firefox 1.5 での新機能のいくつかを紹介します。</p>

<h3 id=".E3.82.A6.E3.82.A7.E3.83.96.E3.82.B5.E3.82.A4.E3.83.88.E3.80.81.E3.82.A6.E3.82.A7.E3.83.96.E3.82.A2.E3.83.97.E3.83.AA.E3.82.B1.E3.83.BC.E3.82.B7.E3.83.A7.E3.83.B3.E9.96.8B.E7.99.BA.E8.80.85.E5.90.91.E3.81.91" name=".E3.82.A6.E3.82.A7.E3.83.96.E3.82.B5.E3.82.A4.E3.83.88.E3.80.81.E3.82.A6.E3.82.A7.E3.83.96.E3.82.A2.E3.83.97.E3.83.AA.E3.82.B1.E3.83.BC.E3.82.B7.E3.83.A7.E3.83.B3.E9.96.8B.E7.99.BA.E8.80.85.E5.90.91.E3.81.91">ウェブサイト、ウェブアプリケーション開発者向け</h3>

<dl>
 <dt><a href="/ja/docs/SVG_In_HTML_Introduction">XHTML の中での SVG についての導入</a></dt>
 <dd>SVG を XHTML ページの中でどのように利用し、JavaScript と CSS を通常の XHTML でのスクリプトと同様な方法で画像を操作する方法について学習します。<a href="/ja/docs/SVG_in_Firefox">SVG in Firefox</a> も読み、 Firefox における SVG 実装の問題点と現状について学習してください。</dd>
 <dt><a href="/ja/docs/Drawing_Graphics_with_Canvas">Canvas での画像の描き方</a></dt>
 <dd>新しい <code>&lt;canvas&gt;</code> タグについて、Firefox においてどのようにグラフやその他のオブジェクトを描くかについて学習します。</dd>
 <dt><a href="/ja/docs/CSS3_Columns">CSS3 Columns</a></dt>
 <dd>CSS3 に提案されている自動マルチカラムテキストレイアウトの新規サポートについて学習します。</dd>
 <dt><a href="/ja/docs/Using_Firefox_1.5_caching">Firefox 1.5 のキャッシュを利用する</a></dt>
 <dd><code>bfcache</code> と、進む・戻る機能をどのように高速化したかについて学習します。</dd>
</dl>

<h3 id="XUL_.E3.81.A8.E6.8B.A1.E5.BC.B5.E6.A9.9F.E8.83.BD.E9.96.8B.E7.99.BA.E8.80.85.E5.90.91.E3.81.91" name="XUL_.E3.81.A8.E6.8B.A1.E5.BC.B5.E6.A9.9F.E8.83.BD.E9.96.8B.E7.99.BA.E8.80.85.E5.90.91.E3.81.91">XUL と拡張機能開発者向け</h3>

<dl>
 <dt><a href="/ja/docs/Building_an_Extension">拡張機能の作成方法</a></dt>
 <dd>このチュートリアルでは、Firefox の最も基礎的な拡張機能を作成するために必要な段階を通して説明します。新しい拡張機能の作成をより簡単にする、Firefox 1.5 での拡張機能マネージャーの新機能のデモを行う <a class="external" href="http://kb.mozillazine.org/Getting_started_with_extension_development">MozillaZine ナレッジベースのほかのチュートリアル</a> も参考にしてください。</dd>
 <dt><a href="/ja/docs/XPCNativeWrapper">XPCNativeWrapper</a></dt>
 <dd><code>XPCNativeWrapper</code> は、<a href="/ja/docs/Safely_accessing_content_DOM_from_chrome">特権コードから安全にアクセスする</a> ためにオブジェクトを包む方法です。すべての Firefox バージョンで利用可能ですが、Firefox 1.5 (Gecko 1.8) から動作が変更されました。</dd>
 <dt><a href="/ja/docs/Preferences_System">設定機能</a></dt>
 <dd>より少ない JavaScript コードでより簡単にオプションウィンドウを作成可能な新しいウィジェットについて学習します。</dd>
 <dt><a href="/ja/docs/International_characters_in_XUL_JavaScript">XUL JavaScript 内部文字コード</a></dt>
 <dd>XUL JavaScript ファイルに、ASCII でない文字を含むことができるようになりました。</dd>
 <dt><a href="/ja/docs/Tree_Widget_Changes">Tree API の変更</a></dt>
 <dd>XUL <code>&lt;tree&gt;</code> エレメントへのアクセスのインターフェースが変更されました。</dd>
 <dt><a href="/ja/docs/XUL_Changes_for_Firefox_1.5">Firefox 1.5 での XUL の変更</a></dt>
 <dd>XUL についての変更のまとめです。<a href="/ja/docs/Adapting_XUL_Applications_for_Firefox_1.5">XUL アプリケーションを Firefox 1.5 に対応させる</a> も参考にしてください。</dd>
 <dt>ネットワーク関係の変更</dt>
</dl>

<ul>
 <li>証明書のプロンプトは、チャネルごとに上書き可能になりました。これは、<a href="/ja/docs/NsIChannel">nsIChannel</a> の notificationCallbacks へインターフェースリクエスタとして設定し、<a href="/ja/docs/NsIBadCertListener">nsIBadCertListener</a> へインターフェースを設定することで動作します。</li>
 <li>nsIWebBrowserPersist のリスナは、<a href="/ja/docs/NsIInterfaceRequestor">nsIInterfaceRequestor</a>::GetInterface を実装し、<a href="/ja/docs/NsIProgressEventSink">nsIProgressEventSink</a> (<a href="/ja/docs/NsIWebProgressListener">nsIWebProgressListener</a> と重複し、そう使い勝手がいいわけではありません) を含む問い合わせがくる可能性のあるチャネルのすべてのインターフェースを提供する機会をもちました。これには、<a href="/ja/docs/NsIChannelEventSink">nsIChannelEventSink</a> と <a href="/ja/docs/NsIBadCertListener">nsIBadCertListener</a> も含みます。</li>
 <li>XMLHttpRequest を含む、拡張機能や他の necko 利用側は、cookie ヘッダを明示的に設定でき、necko はそれを置き換えません。保存された cookie は、明示的に設定されたヘッダと組み合わされ、保存された cookie を上書きします。</li>
</ul>

<h2 id=".E6.96.B0.E3.81.97.E3.81.84.E3.82.A8.E3.83.B3.E3.83.89.E3.83.A6.E3.83.BC.E3.82.B6.E5.90.91.E3.81.91.E6.A9.9F.E8.83.BD" name=".E6.96.B0.E3.81.97.E3.81.84.E3.82.A8.E3.83.B3.E3.83.89.E3.83.A6.E3.83.BC.E3.82.B6.E5.90.91.E3.81.91.E6.A9.9F.E8.83.BD">新しいエンドユーザ向け機能</h2>

<h3 id=".E3.83.A6.E3.83.BC.E3.82.B6.E4.BD.93.E9.A8.93" name=".E3.83.A6.E3.83.BC.E3.82.B6.E4.BD.93.E9.A8.93">ユーザ体験</h3>

<ul>
 <li><strong>より早いブラウザナビゲーション</strong> 戻る・進むボタンのパフォーマンス改善</li>
 <li><strong>ブラウザタブのドラッグ・ドロップによる再配列</strong></li>
 <li><strong>検索エンジンリストへの Answers.com の追加</strong> (辞書検索)</li>
 <li><strong>製品利便性の向上</strong> エラーページの記述の改善、オプションメニューの再配置、RSS 検出、"セーフモード"について</li>
 <li><strong>よりよいアクセシビリティーのサポート</strong> DHTML のアクセシビリティーを含む</li>
 <li><strong>壊れたウェブサイトのレポートのウイザード</strong> により、Firefox で動作しないウェブサイトの報告が行えます。</li>
 <li><strong>Mac OS X 環境のよりよいサポート</strong> (10.2 かそれ以上)、Safari や Mac Internet Explorer からのプロファイル移行を含む。</li>
</ul>

<h3 id=".E3.82.BB.E3.82.AD.E3.83.A5.E3.83.AA.E3.83.86.E3.82.A3.E3.83.BC.E3.81.A8.E3.83.97.E3.83.A9.E3.82.A4.E3.83.90.E3.82.B7.E3.83.BC" name=".E3.82.BB.E3.82.AD.E3.83.A5.E3.83.AA.E3.83.86.E3.82.A3.E3.83.BC.E3.81.A8.E3.83.97.E3.83.A9.E3.82.A4.E3.83.90.E3.82.B7.E3.83.BC">セキュリティーとプライバシー</h3>

<ul>
 <li><strong>自動更新</strong> による、能率化された製品アップグレード。アップグレードの通知は、より目立つようになり、Firefox のアップデートも 0.5MB かそれ以下になりました。拡張機能のアップデートも改良されました。</li>
 <li><strong>ポップアップブロックの改良</strong></li>
 <li><strong>プライバシーデータの消去</strong> 機能により、より簡単に、メニューやキーボードショートカットから個人データの消去が高速に行えるようになりました。</li>
</ul>

<h3 id=".E3.82.AA.E3.83.BC.E3.83.97.E3.83.B3.E3.81.AA.E3.82.A6.E3.82.A7.E3.83.96.E6.A8.99.E6.BA.96.E3.81.AE.E3.82.B5.E3.83.9D.E3.83.BC.E3.83.88" name=".E3.82.AA.E3.83.BC.E3.83.97.E3.83.B3.E3.81.AA.E3.82.A6.E3.82.A7.E3.83.96.E6.A8.99.E6.BA.96.E3.81.AE.E3.82.B5.E3.83.9D.E3.83.BC.E3.83.88">オープンなウェブ標準のサポート</h3>

<p>Firefox のウェブ標準のサポートは、一貫性のあるクロスプラットフォームな実装とともに、業界をリードし続けます。</p>

<ul>
 <li>Hypertext Markup Language (<a href="/ja/docs/HTML">HTML</a>)、 Extensible Hypertext Markup Language (<a href="/ja/docs/XHTML">XHTML</a>): <a class="external" href="http://www.w3.org/TR/html401/">HTML 4.01</a> と <a class="external" href="http://www.w3.org/TR/xhtml1/">XHTML 1.0/1.1</a></li>
 <li>Cascading Style Sheets (<a href="/ja/docs/CSS">CSS</a>): <a class="external" href="http://www.w3.org/TR/REC-CSS1">CSS Level 1</a>, <a class="external" href="http://www.w3.org/TR/REC-CSS2">CSS Level 2</a> と <a class="external" href="http://www.w3.org/Style/CSS/current-work.html">CSS Level 3</a> の一部</li>
 <li>Document Object Model (<a href="/ja/docs/DOM">DOM</a>): <a class="external" href="http://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/">DOM Level 1</a>, <a class="external" href="http://www.w3.org/DOM/DOMTR#dom2">DOM Level 2</a> と <a class="external" href="http://www.w3.org/DOM/DOMTR#dom3">DOM Level 3</a> の一部</li>
 <li>Mathematical Markup Language: <a class="external" href="http://www.w3.org/Math/">MathML Version 2.0</a></li>
 <li>Extensible Markup Language (<a href="/ja/docs/XML">XML</a>): <a class="external" href="http://www.w3.org/TR/REC-xml">XML 1.0</a>, <a class="external" href="http://www.w3.org/TR/REC-xml-names/">XML 名前空間</a>, <a class="external" href="http://www.w3.org/TR/xml-stylesheet/">XML 文書へのスタイルシートの関連付け 1.0</a>, <a class="external" href="http://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/01-NOTE-FIXptr-20010425.htm">XML のフラグメント同定</a></li>
 <li>XSL 変換 (<a href="/ja/docs/XSLT">XSLT</a>): <a class="external" href="http://www.w3.org/TR/xslt">XSLT 1.0</a></li>
 <li>XML Path Language (<a href="/ja/docs/XPath">XPath</a>): <a class="external" href="http://www.w3.org/TR/xpath">XPath 1.0</a></li>
 <li>Resource Description Framework (<a href="/ja/docs/RDF">RDF</a>): <a class="external" href="http://www.w3.org/RDF/">RDF</a></li>
 <li>Simple Object Access Protocol (SOAP): <a class="external" href="http://www.w3.org/TR/SOAP/">SOAP 1.1</a></li>
 <li><a href="/ja/docs/ECMA-262">ECMA-262</a>, revision 3 に基づく <a href="/ja/docs/JavaScript">JavaScript</a> 1.6: <a class="external" href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMA-262</a></li>
</ul>

<p>Firefox 1.5 は、データ転送プロトコル (HTTP/FTP/SSL/TLS/その他)、他言語文字データ (Unicode)、画像 (GIF/JPEG/PNG/SVG/その他) や、世界でもっとも普及したスクリプト言語の最新版である <a href="/ja/docs/New_in_JavaScript_1.6">JavaScript 1.6</a> をサポートしています。</p>

<h2 id="Firefox_1.0_.E4.BB.A5.E9.99.8D.E3.81.AE.E5.A4.89.E6.9B.B4" name="Firefox_1.0_.E4.BB.A5.E9.99.8D.E3.81.AE.E5.A4.89.E6.9B.B4">Firefox 1.0 以降の変更</h2>

<p>2004 年 11 月 9 日の最初のリリース以降、さまざまな変更が Firefox へ導入されています。Firefox は多くの新機能とバグ修正により前進してきました。変更点の詳しい一覧は <a class="external" href="http://www.squarefree.com/burningedge/releases/1.5-comprehensive.html">squarefree.com</a> にあります。</p>
