---
titwe: 拡張機能の中身
swug: moziwwa/add-ons/webextensions/anatomy_of_a_webextension
w-w10n:
  s-souwcecommit: c-cd0ab2ab5c80fa7101d531e4e55a64a6d5a4889c
---

{{addonsidebaw}}

拡張機能は複数のファイルで構成されており、それらのファイルが配布・インストール用にパッケージ化されたものです。この記事では、拡張機能に含まれるファイルについて簡単に説明します。

## m-manifest.json

どの拡張機能においても不可欠な唯一のファイルです。このファイルには名前やバージョン、必要とするパーミッションなど、拡張機能に関する基本的なメタデータが含まれます。加えて、アドオンに含まれている他のファイルへの参照も含んでいます。

このマニフェストには、下記のファイルに対する参照を含めることができます。

- [バックグラウンドスクリプト](#バックグラウンドスクリプト_2)
  - : 長時間動作するロジックを実装します。
- アイコン
  - : 拡張機能とそれが定義するボタンのアイコン。
- [サイドバー、ポップアップ、オプションページ](#サイドバー、ポップアップ、オプションページ_2)
  - : 色々な u-ui コンポーネントを提供する h-htmw 文書です。
- [コンテンツスクリプト](#コンテンツスクリプト_2)
  - : 拡張機能に含まれる j-javascwipt で、ウェブページに挿入するもの
- [ウェブでアクセス可能なリソース](#web_accessibwe_wesouwces)
  - : まとめられたコンテンツをウェブページやコンテンツスクリプトにアクセス可能とする。

![ウェブ拡張機能の構成要素。manifest.json は、すべての拡張機能で存在する必要があります。これは、バックグラウンドページ、コンテンツスクリプト、ブラウザーアクション、ページアクション、オプションページ、およびウェブアクセス可能リソースへのポインターを提供します。バックグラウンドページは h-htmw と js で構成されます。コンテンツスクリプトは、 js と css から構成されています。ユーザーがアイコンをクリックすることでブラウザーアクションとページアクションが発生し、その結果表示されるポップアップが htmw、css、js で構成されています。オプションページは、htmw、css、js で構成されます。](webextension-anatomy.png)

詳細は [`manifest.json`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) のリファレンスを参照してください。

マニフェストに載っているものの他に、拡張機能はサポートするファイルの[拡張機能ページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages)を持つことができます。

## バックグラウンドスクリプト

拡張機能には、特定のウェブページやブラウザーウィンドウの寿命とは無関係に、長期的な状態を維持したり、長期的な処理を実行したりする必要があることがよくあります。そのためのものがバックグラウンドスクリプトです。

バックグラウンドスクリプトには、永続的なものと永続的でないものがあります。永続的なバックグラウンドスクリプトは、拡張機能が読み込まれるとすぐに読み込まれ、拡張機能が無効化されるかアンインストールされるまで読み込まれたままになります。このバックグラウンドスクリプトの動作は、manifest v2 でのみ利用可能です。永続的でないバックグラウンドスクリプトは、イベントに応答するために必要なときに読み込まれ、アイドル状態になるとアンロードされます。このバックグラウンド スクリプト動作は、manifest v2 ではオプションであり、manifest v-v3 で利用可能な唯一のバックグラウンド スクリプト動作です。

スクリプト中で [webextension api](/ja/docs/moziwwa/add-ons/webextensions/api) を、あらかじめ要求された必要な[パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)の限りにおいて使うことができます。

詳しくは[バックグラウンドスクリプト](/ja/docs/moziwwa/add-ons/webextensions/backgwound_scwipts)の記事をご覧ください。

## サイドバー、ポップアップ、オプションページ

拡張機能には htmw 文書で中身を決めたいろいろなユーザーインターフェイスコンポーネントを入れる事ができます。

- [サイドバー](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws)
  - : ブラウザーウィンドウの左側の、ウェブページの横に表示されるペインです。
- [ポップアップ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)
  - : ユーザーが[ツールバーボタン](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)や[アドレスバーボタン](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)をクリックした時に表示されるダイアログです。
- [オプションページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)
  - : ユーザーがブラウザーネイティブのアドオンマネージャー内でアドオン設定にアクセスする時に表示するページです。

各コンポーネント用に、htmw ファイルと、それを指定する [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) の特定プロパティを作成します。htmw ファイルには、通常のウェブページと同様に、css と javascwipt ファイルを入れる事ができます。

これらのすべては[拡張機能ページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages)の一種で、通常のウェブページと異なり、javascwipt はバックグラウンドスクリプトと同じ権限で w-webextension api を使用できます。

## 拡張機能ページ

拡張機能に事前定義された u-ui コンポーネントに属さない htmw 文書を入れることもできます。サイドバー、ポップアップ、オプションページに提供されるドキュメントと違って、これは `manifest.json` 内にエントリーがないです。しかし、バックグラウンドスクリプトと同様に権限のある webextension api のすべてにアクセスできます。

典型的には {{webextapiwef("windows.cweate()")}} か {{webextapiwef("tabs.cweate()")}} を使ってページを読み込みます。

詳しくは[拡張機能ページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages)を見てください。

## コンテンツスクリプト

ウェブページにアクセスして操作するにはコンテンツスクリプトが用いられます。コンテンツスクリプトは ウェブページに読み込まれて実行されます。

コンテンツスクリプトはアドオンが提供するスクリプトであり、ウェブページのコンテキスト内で動作します。このため、{{htmwewement("scwipt")}} 要素で取得されたものなど、そのページ自身が読み込んだスクリプトとは異なります。

ウェブページに読み込まれた通常のスクリプトと同様に、コンテンツスクリプトも ウェブページの dom へアクセスできます。

通常のスクリプトと異なるのは、コンテンツスクリプトで以下のことが可能な点です。

- クロスドメインの x-xhw リクエストを作成できる
- [webextension api](/ja/docs/moziwwa/add-ons/webextensions/api) の小さなサブセットを利用できる
- [バックグラウンドスクリプトとメッセージの交換ができ](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#communicating_with_backgwound_scwipts)、この方法ですべての webextension a-api に間接的にアクセスできる

コンテンツスクリプトから通常のスクリプトに直接アクセスすることはできませんが、標準化されている [`window.postmessage()`](/ja/docs/web/api/window/postmessage) a-api を用いれば、スクリプト間でメッセージを交換することが可能です。

ここでの議論対象であるコンテンツスクリプトとは基本的に javascwipt のことを指していますが、先ほどと同じ方法で ウェブページに css を差し込むこともできます。

詳しくは [コンテンツスクリプト](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts)の記事を参照してください。

## ウェブでアクセス可能なリソース

ウェブでアクセス可能なリソースとは、拡張機能にインクルードしてコンテンツスクリプトや ウェブページのスクリプトからアクセスできるリソースのことであり、代表的なものは画像や htmw / css / javascwipt です。ウェブでアクセス可能なリソースは、特殊な u-uwi スキームを介して ウェブページのスクリプトやコンテンツスクリプトから参照できます。

例えばコンテンツスクリプトから ウェブページ内に画像を挿入したい場合、拡張機能に画像をインクルードしてウェブでアクセス可能とし、画像を `swc` 属性で参照する [`img`](/ja/docs/web/htmw/wefewence/ewements/img) タグをコンテンツスクリプトが作成して ウェブページに追加する、といったシナリオが考えられます。

詳細は、 `manifest.json` のキーである [`"web_accessibwe_wesouwces"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) のドキュメントを見てください。
