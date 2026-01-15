---
title: Firefox 1.5 for developers
slug: Mozilla/Firefox/Releases/1.5
---

Gecko 1.8 エンジンに基づいて、Firefox 1.5 はクラス最高の標準サポートを改善し、次世代のウェブアプリケーションを可能にする新しい機能を提供しました。Firefox 1.5 では、CSS2 と CSS3、SVG 1.1 と \<canvas>、XForms と XML イベント、さらに多くの DHTML、JavaScript、DOM 拡張を介したスクリプト可能でプログラム可能な 2D グラフィックスの API のサポートが強化されています。

## 開発ツール

Firefox 1.5 をサポートする開発者を助ける、さまざまなツールやブラウザー拡張機能が利用可能です。

- [DOM Inspector](/ja/docs/DOM_Inspector) : 開発者が、文書を直接編集しなくても文書を調査、編集可能なツールです。DOM Inspector は、カスタムインストールにある Firefox 1.5 の開発者ツールの中からインストール可能です。
- JavaScript console : JavaScript コードを、JavaScript と CSS のエラーをみながら作成、試験可能なツールです。
- ページのソースにてシンタックスハイライト、検索機能を利用できます。
- [ブラウザー拡張](https://addons.mozilla.org/extensions/showlist.php?application=firefox&category=Developer%20Tools) には、[FireBug](http://www.joehewitt.com/software/firebug/), [ウェブ開発ツールバー](</ja/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</ja/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</ja/docs/HTML_Validator_(external)>) などさまざまな機能が含まれます。

**注:** いくつかの拡張機能はいまのところ Firefox 1.5 をサポートしていません。これらは自動的に無効になります。

## 概説

Firefox 1.5 での新機能のいくつかを紹介します。

### ウェブサイト、ウェブアプリケーション開発者向け

- [XHTML の中での SVG についての導入](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_In_HTML_Introduction)
  - : SVG を XHTML ページの中でどのように利用し、JavaScript と CSS を通常の XHTML でのスクリプトと同様な方法で画像を操作する方法について学習します。[SVG in Firefox](/ja/docs/SVG_in_Firefox) も読み、 Firefox における SVG 実装の問題点と現状について学習してください。
- [Canvas での画像の描き方](/ja/docs/Web/API/Canvas_API/Tutorial)
  - : 新しい `<canvas>` タグについて、Firefox においてどのようにグラフやその他のオブジェクトを描くかについて学習します。
- [CSS3 Columns](/ja/docs/Web/CSS/Guides/Multicol_layout/Using)
  - : CSS3 に提案されている自動マルチカラムテキストレイアウトの新規サポートについて学習します。
- [Firefox 1.5 のキャッシュを利用する](/ja/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : `bfcache` と、進む・戻る機能をどのように高速化したかについて学習します。

### XUL と拡張機能開発者向け

- [拡張機能の作成方法](/ja/docs/Mozilla/Add-ons)
  - : このチュートリアルでは、Firefox の最も基礎的な拡張機能を作成するために必要な段階を通して説明します。新しい拡張機能の作成をより簡単にする、Firefox 1.5 での拡張機能マネージャーの新機能のデモを行う [MozillaZine ナレッジベースのほかのチュートリアル](http://kb.mozillazine.org/Getting_started_with_extension_development) も参考にしてください。
- [XPCNativeWrapper](/ja/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` は、[特権コードから安全にアクセスする](/ja/docs/Safely_accessing_content_DOM_from_chrome) ためにオブジェクトを包む方法です。すべての Firefox バージョンで利用可能ですが、Firefox 1.5 (Gecko 1.8) から動作が変更されました。
- [設定機能](/ja/docs/Preferences_System)
  - : より少ない JavaScript コードでより簡単にオプションウィンドウを作成可能な新しいウィジェットについて学習します。
- [XUL JavaScript 内部文字コード](/ja/docs/International_characters_in_XUL_JavaScript)
  - : XUL JavaScript ファイルに、ASCII でない文字を含むことができるようになりました。
- [Tree API の変更](/ja/docs/Tree_Widget_Changes)
  - : XUL `<tree>` エレメントへのアクセスのインターフェイスが変更されました。
- [Firefox 1.5 での XUL の変更](/ja/docs/XUL_Changes_for_Firefox_1.5)
  - : XUL についての変更のまとめです。[XUL アプリケーションを Firefox 1.5 に対応させる](/ja/docs/Mozilla/Firefox/Releases/1.5) も参考にしてください。

### ネットワーク関係の変更

- 証明書のプロンプトは、チャネルごとに上書き可能になりました。これは、[nsIChannel](/ja/docs/NsIChannel) の notificationCallbacks へインターフェイスリクエスタとして設定し、[nsIBadCertListener](/ja/docs/NsIBadCertListener) へインターフェイスを設定することで動作します。
- nsIWebBrowserPersist のリスナーは、[nsIInterfaceRequestor](/ja/docs/NsIInterfaceRequestor)::GetInterface を実装し、[nsIProgressEventSink](/ja/docs/NsIProgressEventSink) ([nsIWebProgressListener](/ja/docs/NsIWebProgressListener) と重複し、そう使い勝手がいいわけではありません) を含む問い合わせがくる可能性のあるチャネルのすべてのインターフェイスを提供する機会をもちました。これには、[nsIChannelEventSink](/ja/docs/NsIChannelEventSink) と [nsIBadCertListener](/ja/docs/NsIBadCertListener) も含みます。
- XMLHttpRequest を含む、拡張機能や他の necko 利用側は、cookie ヘッダーを明示的に設定でき、necko はそれを置き換えません。保存された cookie は、明示的に設定されたヘッダーと組み合わされ、保存された cookie を上書きします。

## 新しいエンドユーザー向け機能

### ユーザー体験

- **より早いブラウザーナビゲーション** 戻る・進むボタンのパフォーマンス改善
- **ブラウザータブのドラッグ・ドロップによる再配列**
- **検索エンジンリストへの Answers.com の追加** (辞書検索)
- **製品利便性の向上** エラーページの記述の改善、オプションメニューの再配置、RSS 検出、"セーフモード"について
- **よりよいアクセシビリティーのサポート** DHTML のアクセシビリティーを含む
- **壊れたウェブサイトのレポートのウイザード** により、Firefox で動作しないウェブサイトの報告が行えます。
- **Mac OS X 環境のよりよいサポート** (10.2 かそれ以上)、Safari や Mac Internet Explorer からのプロファイル移行を含む。

### セキュリティーとプライバシー

- **自動更新** による、能率化された製品アップグレード。アップグレードの通知は、より目立つようになり、Firefox のアップデートも 0.5MB かそれ以下になりました。拡張機能のアップデートも改良されました。
- **ポップアップブロックの改良**
- **プライバシーデータの消去** 機能により、より簡単に、メニューやキーボードショートカットから個人データの消去が高速に行えるようになりました。

### オープンなウェブ標準のサポート

Firefox のウェブ標準のサポートは、一貫性のあるクロスプラットフォームな実装とともに、業界をリードし続けます。

- Hypertext Markup Language ([HTML](/ja/docs/Web/HTML))、 Extensible Hypertext Markup Language ([XHTML](/ja/docs/Glossary/XHTML)): [HTML 4.01](https://www.w3.org/TR/html401/) と [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/ja/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/REC-CSS1), [CSS Level 2](https://www.w3.org/TR/REC-CSS2) と [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html) の一部
- Document Object Model ([DOM](/ja/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) と [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3) の一部
- Mathematical Markup Language: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/ja/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/REC-xml), [XML 名前空間](https://www.w3.org/TR/REC-xml-names/), [XML 文書へのスタイルシートの関連付け 1.0](https://www.w3.org/TR/xml-stylesheet/), [XML のフラグメント同定](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/01-NOTE-FIXptr-20010425.htm)
- XSL 変換 ([XSLT](/ja/docs/Web/XML/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt)
- XML Path Language ([XPath](/ja/docs/Web/XML/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath)
- Resource Description Framework ([RDF](/ja/docs/RDF)): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/SOAP/)
- [ECMA-262](/ja/docs/Web/JavaScript/Reference/JavaScript_technologies_overview), revision 3 に基づく [JavaScript](/ja/docs/Web/JavaScript) 1.6: [ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

Firefox 1.5 は、データ転送プロトコル (HTTP/FTP/SSL/TLS/その他)、他言語文字データ (Unicode)、画像 (GIF/JPEG/PNG/SVG/その他) や、世界でもっとも普及したスクリプト言語の最新版である [JavaScript 1.6](/ja/docs/New_in_JavaScript_1.6) をサポートしています。

## Firefox 1.0 以降の変更

2004 年 11 月 9 日の最初のリリース以降、さまざまな変更が Firefox へ導入されています。Firefox は多くの新機能とバグ修正により前進してきました。変更点の詳しい一覧は [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) にあります。
