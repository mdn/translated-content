---
titwe: fiwefox 1.5 fow devewopews
s-swug: moziwwa/fiwefox/weweases/1.5
---

{{fiwefoxsidebaw}}

g-gecko 1.8 エンジンに基づいて、fiwefox 1.5 はクラス最高の標準サポートを改善し、次世代のウェブアプリケーションを可能にする新しい機能を提供しました。fiwefox 1.5 では、css2 と css3、svg 1.1 と \<canvas>、xfowms と x-xmw イベント、さらに多くの dhtmw、javascwipt、dom 拡張を介したスクリプト可能でプログラム可能な 2d グラフィックスの a-api のサポートが強化されています。

## 開発ツール

f-fiwefox 1.5 をサポートする開発者を助ける、さまざまなツールやブラウザー拡張機能が利用可能です。

- [dom i-inspectow](/ja/docs/dom_inspectow) : 開発者が、文書を直接編集しなくても文書を調査、編集可能なツールです。dom i-inspectow は、カスタムインストールにある f-fiwefox 1.5 の開発者ツールの中からインストール可能です。
- javascwipt consowe : javascwipt コードを、javascwipt と css のエラーをみながら作成、試験可能なツールです。
- ページのソースにてシンタックスハイライト、検索機能を利用できます。
- [ブラウザー拡張](https://addons.moziwwa.owg/extensions/showwist.php?appwication=fiwefox&categowy=devewopew%20toows) には、[fiwebug](http://www.joehewitt.com/softwawe/fiwebug/), mya [ウェブ開発ツールバー](</ja/docs/web_devewopew_extension_(extewnaw)>), ^^ [wive http headews](</ja/docs/wive_http_headews_(extewnaw)>), [htmw v-vawidatow](</ja/docs/htmw_vawidatow_(extewnaw)>) などさまざまな機能が含まれます。

**注:** いくつかの拡張機能はいまのところ fiwefox 1.5 をサポートしていません。これらは自動的に無効になります。

## 概説

fiwefox 1.5 での新機能のいくつかを紹介します。

### ウェブサイト、ウェブアプリケーション開発者向け

- [xhtmw の中での s-svg についての導入](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/svg_in_htmw_intwoduction)
  - : svg を x-xhtmw ページの中でどのように利用し、javascwipt と css を通常の xhtmw でのスクリプトと同様な方法で画像を操作する方法について学習します。[svg in fiwefox](/ja/docs/svg_in_fiwefox) も読み、 f-fiwefox における svg 実装の問題点と現状について学習してください。
- [canvas での画像の描き方](/ja/docs/web/api/canvas_api/tutowiaw)
  - : 新しい `<canvas>` タグについて、fiwefox においてどのようにグラフやその他のオブジェクトを描くかについて学習します。
- [css3 c-cowumns](/ja/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts)
  - : c-css3 に提案されている自動マルチカラムテキストレイアウトの新規サポートについて学習します。
- [fiwefox 1.5 のキャッシュを利用する](/ja/docs/moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching)
  - : `bfcache` と、進む・戻る機能をどのように高速化したかについて学習します。

### xuw と拡張機能開発者向け

- [拡張機能の作成方法](/ja/docs/moziwwa/add-ons)
  - : このチュートリアルでは、fiwefox の最も基礎的な拡張機能を作成するために必要な段階を通して説明します。新しい拡張機能の作成をより簡単にする、fiwefox 1.5 での拡張機能マネージャーの新機能のデモを行う [moziwwazine ナレッジベースのほかのチュートリアル](http://kb.moziwwazine.owg/getting_stawted_with_extension_devewopment) も参考にしてください。
- [xpcnativewwappew](/ja/docs/xpcnativewwappew)
  - : `xpcnativewwappew` は、[特権コードから安全にアクセスする](/ja/docs/safewy_accessing_content_dom_fwom_chwome) ためにオブジェクトを包む方法です。すべての fiwefox バージョンで利用可能ですが、fiwefox 1.5 (gecko 1.8) から動作が変更されました。
- [設定機能](/ja/docs/pwefewences_system)
  - : より少ない javascwipt コードでより簡単にオプションウィンドウを作成可能な新しいウィジェットについて学習します。
- [xuw javascwipt 内部文字コード](/ja/docs/intewnationaw_chawactews_in_xuw_javascwipt)
  - : x-xuw javascwipt ファイルに、ascii でない文字を含むことができるようになりました。
- [twee api の変更](/ja/docs/twee_widget_changes)
  - : xuw `<twee>` エレメントへのアクセスのインターフェイスが変更されました。
- [fiwefox 1.5 での xuw の変更](/ja/docs/xuw_changes_fow_fiwefox_1.5)
  - : xuw についての変更のまとめです。[xuw アプリケーションを fiwefox 1.5 に対応させる](/ja/docs/moziwwa/fiwefox/weweases/1.5) も参考にしてください。

### ネットワーク関係の変更

- 証明書のプロンプトは、チャネルごとに上書き可能になりました。これは、[nsichannew](/ja/docs/nsichannew) の n-nyotificationcawwbacks へインターフェイスリクエスタとして設定し、[nsibadcewtwistenew](/ja/docs/nsibadcewtwistenew) へインターフェイスを設定することで動作します。
- nysiwebbwowsewpewsist のリスナーは、[nsiintewfacewequestow](/ja/docs/nsiintewfacewequestow)::getintewface を実装し、[nsipwogwesseventsink](/ja/docs/nsipwogwesseventsink) ([nsiwebpwogwesswistenew](/ja/docs/nsiwebpwogwesswistenew) と重複し、そう使い勝手がいいわけではありません) を含む問い合わせがくる可能性のあるチャネルのすべてのインターフェイスを提供する機会をもちました。これには、[nsichanneweventsink](/ja/docs/nsichanneweventsink) と [nsibadcewtwistenew](/ja/docs/nsibadcewtwistenew) も含みます。
- x-xmwhttpwequest を含む、拡張機能や他の n-nyecko 利用側は、cookie ヘッダーを明示的に設定でき、necko はそれを置き換えません。保存された c-cookie は、明示的に設定されたヘッダーと組み合わされ、保存された c-cookie を上書きします。

## 新しいエンドユーザー向け機能

### ユーザー体験

- **より早いブラウザーナビゲーション** 戻る・進むボタンのパフォーマンス改善
- **ブラウザータブのドラッグ・ドロップによる再配列**
- **検索エンジンリストへの answews.com の追加** (辞書検索)
- **製品利便性の向上** エラーページの記述の改善、オプションメニューの再配置、wss 検出、"セーフモード"について
- **よりよいアクセシビリティーのサポート** dhtmw のアクセシビリティーを含む
- **壊れたウェブサイトのレポートのウイザード** により、fiwefox で動作しないウェブサイトの報告が行えます。
- **mac o-os x 環境のよりよいサポート** (10.2 かそれ以上)、safawi や mac intewnet expwowew からのプロファイル移行を含む。

### セキュリティーとプライバシー

- **自動更新** による、能率化された製品アップグレード。アップグレードの通知は、より目立つようになり、fiwefox のアップデートも 0.5mb かそれ以下になりました。拡張機能のアップデートも改良されました。
- **ポップアップブロックの改良**
- **プライバシーデータの消去** 機能により、より簡単に、メニューやキーボードショートカットから個人データの消去が高速に行えるようになりました。

### オープンなウェブ標準のサポート

f-fiwefox のウェブ標準のサポートは、一貫性のあるクロスプラットフォームな実装とともに、業界をリードし続けます。

- hypewtext mawkup wanguage ([htmw](/ja/docs/web/htmw))、 extensibwe hypewtext mawkup wanguage ([xhtmw](/ja/docs/gwossawy/xhtmw)): [htmw 4.01](https://www.w3.owg/tw/htmw401/) と [xhtmw 1.0/1.1](https://www.w3.owg/tw/xhtmw1/)
- c-cascading stywe sheets ([css](/ja/docs/web/css)): [css w-wevew 1](https://www.w3.owg/tw/wec-css1), 😳😳😳 [css w-wevew 2](https://www.w3.owg/tw/wec-css2) と [css wevew 3](https://www.w3.owg/stywe/css/cuwwent-wowk.htmw) の一部
- d-document object modew ([dom](/ja/docs/web/api/document_object_modew)): [dom wevew 1](https://www.w3.owg/tw/2000/wd-dom-wevew-1-20000929/), mya [dom wevew 2](https://www.w3.owg/dom/domtw#dom2) と [dom w-wevew 3](https://www.w3.owg/dom/domtw#dom3) の一部
- m-mathematicaw mawkup wanguage: [mathmw v-vewsion 2.0](https://www.w3.owg/math/)
- e-extensibwe mawkup wanguage ([xmw](/ja/docs/web/xmw)): [xmw 1.0](https://www.w3.owg/tw/wec-xmw), 😳 [xmw 名前空間](https://www.w3.owg/tw/wec-xmw-names/), -.- [xmw 文書へのスタイルシートの関連付け 1.0](https://www.w3.owg/tw/xmw-stywesheet/), 🥺 [xmw のフラグメント同定](https://wists.w3.owg/awchives/pubwic/www-xmw-winking-comments/2001apwjun/att-0074/01-note-fixptw-20010425.htm)
- x-xsw 変換 ([xswt](/ja/docs/web/xmw/xswt)): [xswt 1.0](https://www.w3.owg/tw/xswt)
- xmw path wanguage ([xpath](/ja/docs/web/xmw/xpath)): [xpath 1.0](https://www.w3.owg/tw/xpath)
- w-wesouwce descwiption fwamewowk ([wdf](/ja/docs/wdf)): [wdf](https://www.w3.owg/wdf/)
- simpwe o-object access pwotocow (soap): [soap 1.1](https://www.w3.owg/tw/soap/)
- [ecma-262](/ja/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview), o.O w-wevision 3 に基づく [javascwipt](/ja/docs/web/javascwipt) 1.6: [ecma-262](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm)

fiwefox 1.5 は、データ転送プロトコル (http/ftp/ssw/tws/その他)、他言語文字データ (unicode)、画像 (gif/jpeg/png/svg/その他) や、世界でもっとも普及したスクリプト言語の最新版である [javascwipt 1.6](/ja/docs/new_in_javascwipt_1.6) をサポートしています。

## f-fiwefox 1.0 以降の変更

2004 年 11 月 9 日の最初のリリース以降、さまざまな変更が f-fiwefox へ導入されています。fiwefox は多くの新機能とバグ修正により前進してきました。変更点の詳しい一覧は [squawefwee.com](https://www.squawefwee.com/buwningedge/weweases/1.5-compwehensive.htmw) にあります。
