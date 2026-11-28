---
title: 拡張機能の中身
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

拡張機能は、配布とインストールのためにパッケージ化されたファイル一式で構成されます。この記事では、拡張機能に含まれることのあるファイルについて説明します。

## manifest.json

これはすべての拡張機能に必要な唯一のファイルです。名前、バージョン、必要なパーミッションなど、基本的なメタデータを含みます。

また、マニフェストには次の種類のファイルへの参照を含めることができます。

- [バックグラウンドスクリプト](#バックグラウンドスクリプト)
  - : ブラウザーイベントに応答するスクリプトです。
- アイコン
  - : 拡張機能とそれが定義するボタンのアイコン。
- [サイドバー、ポップアップ、オプションページ](#サイドバー、ポップアップ、オプションページ)
  - : さまざまなユーザーインターフェイスコンポーネントのコンテンツを提供する HTML 文書です。
- [コンテンツスクリプト](#コンテンツスクリプト)
  - : 拡張機能に含まれ、拡張機能がウェブページに差し込む JavaScript です。
- [ウェブでアクセス可能なリソース](#ウェブでアクセス可能なリソース)
  - : ウェブページやコンテンツスクリプトからアクセスできるようにした、パッケージ化済みのコンテンツです。

![拡張機能の構成要素。manifest.json はすべての拡張機能に必要です。これは、バックグラウンドページ、コンテンツスクリプト、ブラウザーアクション、ページアクション、オプションページ、ウェブアクセス可能なリソースへの参照を提供します。バックグラウンドページは HTML と JavaScript で記述されます。コンテンツスクリプトは JavaScript と CSS で記述されます。ユーザーがアイコンをクリックするとブラウザーアクションやページアクションが実行され、HTML、CSS、JavaScript で構成されるポップアップが表示されることがあります。オプションページは HTML、CSS、JavaScript で構成されます。](webextension-anatomy.png)

詳細は [`manifest.json`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) のリファレンスを参照してください。

マニフェストに記載されたものに加え、拡張機能には追加の[拡張機能ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)や補助ファイルを含めることもできます。

## バックグラウンドスクリプト

拡張機能には、特定のウェブページやブラウザーウィンドウの寿命とは無関係に、長期的な状態を維持したり、長期的な処理を実行したりする必要があることがよくあります。そのためのものがバックグラウンドスクリプトです。

バックグラウンドスクリプトには、永続的なものと永続的でないものがあります。

- 永続的なバックグラウンドスクリプトは、拡張機能が読み込まれるとすぐに読み込まれ、拡張機能が無効化またはアンインストールされるまで読み込まれたままです。永続的なバックグラウンドスクリプトを使えるのは Manifest V2 の拡張機能だけです。
- 永続的でないバックグラウンドスクリプトは、イベントへの応答が必要なときに読み込まれ、アイドル状態になるとアンロードされます。Manifest V3 の拡張機能で使えるのは永続的でないバックグラウンドスクリプトのみです。Manifest V2 の拡張機能では、この動作を選択できます。

スクリプトでは、必要な[パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を要求していれば、任意の [WebExtensions API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) を使えます。

詳しくは[バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)の記事をご覧ください。

## サイドバー、ポップアップ、オプションページ

拡張機能には、HTML 文書で定義するユーザーインターフェイスコンポーネントを含めることができます。

- [サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : ウェブページの横、ブラウザーウィンドウの左側に表示されるペインです。
- [ポップアップ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : ユーザーが[ツールバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)や[アドレスバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)をクリックしたときに表示されるダイアログです。
- [オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : ユーザーがブラウザーネイティブのアドオンマネージャー内でアドオン設定にアクセスする時に表示するページです。

各コンポーネント用に、HTML ファイルと、それを指定する [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) の特定プロパティを作成します。HTML ファイルには、通常のウェブページと同様に、CSS と JavaScript ファイルを入れる事ができます。

これらはいずれも[拡張機能ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)です。通常のウェブページとは異なり、拡張機能の JavaScript はバックグラウンドスクリプトと同じ特権付き WebExtensions API を使用できます。

## 拡張機能ページ

拡張機能には、あらかじめ定義されたユーザーインターフェイスコンポーネントに属さない HTML 文書を含めることもできます。サイドバー、ポップアップ、オプションページ用の文書とは異なり、これらの文書は `manifest.json` にエントリーを持ちません。ただし、バックグラウンドスクリプトと同じ特権付き WebExtensions API にアクセスできます。

典型的には {{WebExtAPIRef("windows.create()")}} か {{WebExtAPIRef("tabs.create()")}} を使ってページを読み込みます。

詳しくは[拡張機能ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)を見てください。

## コンテンツスクリプト

コンテンツスクリプトを使うと、ウェブページにアクセスして操作できます。コンテンツスクリプトはウェブページに読み込まれ、そのページのコンテキストで実行されます。

コンテンツスクリプトは拡張機能が提供するスクリプトで、ウェブページのコンテキスト内で実行されます。この点で、ページ自身が読み込むスクリプトとは異なります。ページ内の {{HTMLElement("script")}} 要素で提供されるスクリプトもその一例です。

ページが読み込んだ他のスクリプトと同様に、コンテンツスクリプトもページの DOM にアクセスして操作できます。ただし、通常のページスクリプトとは異なり、次のことができます。

- [WebExtensions API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) の一部を利用できる
- [バックグラウンドスクリプトとメッセージを交換し](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts)、WebExtensions API を使った処理をバックグラウンドスクリプトに依頼できる

コンテンツスクリプトから通常のページスクリプトに直接アクセスすることはできませんが、標準の [`window.postMessage()`](/ja/docs/Web/API/Window/postMessage) API を使って、スクリプト間でメッセージを交換できます。

コンテンツスクリプトの説明では主に JavaScript を取り上げていますが、同じ仕組みを使ってウェブページに CSS を差し込むこともできます。

詳しくは [コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)の記事を参照してください。

## ウェブでアクセス可能なリソース

ウェブでアクセス可能なリソースとは、拡張機能に含め、コンテンツスクリプトやページスクリプトからアクセスできるようにするリソースです。画像、HTML、CSS、JavaScript などがあります。ウェブアクセス可能にしたリソースは、特殊な URI スキームを使ってページスクリプトやコンテンツスクリプトから参照できます。

例えば、コンテンツスクリプトからウェブページに画像を挿入する場合、画像を拡張機能に含めてウェブアクセス可能にします。そのうえで、コンテンツスクリプトが画像を `src` 属性で参照する [`img`](/ja/docs/Web/HTML/Reference/Elements/img) タグを作成し、ウェブページに追加します。

詳しくは、`manifest.json` の [`"web_accessible_resources"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) キーのドキュメントを参照してください。
