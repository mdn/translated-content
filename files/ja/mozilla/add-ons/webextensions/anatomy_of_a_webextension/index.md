---
title: 拡張機能の中身
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---

{{AddonSidebar}}

拡張機能は複数のファイルで構成されており、それらのファイルが配布・インストール用にパッケージ化されたものです。この記事では、拡張機能に含まれるファイルについて簡単に説明します。

## manifest.json

どの拡張機能においても不可欠な唯一のファイルです。このファイルには名前やバージョン、必要とするパーミッションなど、拡張機能に関する基本的なメタデータが含まれます。加えて、アドオンに含まれている他のファイルへの参照も含んでいます。

このマニフェストには、下記のファイルに対する参照を含めることができます。

- [バックグラウンドスクリプト](#background_scripts)
  - : 長時間動作するロジックを実装します。
- アイコン
  - : 拡張機能とそれが定義するボタンのアイコン。
- [サイドバー、ポップアップ、オプションページ](#sidebars_popups_and_options_pages)
  - : 色々な UI コンポーネントを提供する HTML 文書です。
- [コンテンツスクリプト](#content_scripts)
  - : 拡張機能に含まれる JavaScript で、ウェブページに挿入するもの
- [ウェブでアクセス可能なリソース](#web_accessible_resources)
  - : まとめられたコンテンツをウェブページやコンテンツスクリプトにアクセス可能とする。

![](webextension-anatomy.png)

詳細は [`manifest.json`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) のリファレンスを参照してください。

マニフェストに載っているものの他に、拡張機能はサポートするファイルの[拡張機能ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)を持つことができます。

## バックグラウンドスクリプト

拡張機能には、特定のウェブページやブラウザーウィンドウの寿命とは無関係に、長期的な状態を維持したり、長期的な処理を実行したりする必要があることがよくあります。そのためのものがバックグラウンドスクリプトです。

バックグラウンドスクリプトは拡張機能が読み込まれると同時にロードされ、拡張機能が無効にされるかアンインストールされるまでロードされた状態を維持します。あらかじめ要求された必要な[パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)の限りにおいて、スクリプト中で [WebExtention API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) を使うことができます。

### バックグラウンドスクリプトを定義する

`manifest.json` の中に `"background"` キーを用いることでバックグラウンドスクリプトをインクルードできます。

```json
// manifest.json

"background": {
  "scripts": ["background-script.js"]
}
```

複数のバックグラウンドスクリプトを指定することもできます。その場合は、 1 つのウェブページに複数のスクリプトが読み込まれた場合と同じように、同じコンテキストで実行されます。

バックグラウンドスクリプトを指定する代わりに、ES6 モジュールをサポートするバックグラウンドページを指定することもできます。

- **manifest.json**

  - :&#x20;

    ```json
    // manifest.json

    "background": {
      "page": "background-page.html"
    }
    ```

- **background-page.html**

  - :&#x20;

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <script type="module" src="background-script.js"></script>
      </head>
    </html>
    ```

### バックグラウンドスクリプトの実行環境

#### DOM API

バックグラウンドスクリプトは、バックグラウンドページと呼ばれる特殊なページのコンテキストで実行されます。ここでは [`window`](/ja/docs/Web/API/Window) というグローバルオブジェクトが利用でき、そのオブジェクトによってすべての DOM API 標準が利用できます。

> **警告:** Firefox では、バックグラウンドページでは[`alert()`](/ja/docs/Web/API/Window/alert)、[`confirm()`](/ja/docs/Web/API/Window/confirm)、[`prompt()`](/ja/docs/Web/API/Window/prompt)の使用はサポートされません。

#### WebExtension API

バックグラウンドスクリプトは、その拡張機能が持つ[パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)の範囲で [WebExtension API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) にアクセスできます。

#### オリジン間アクセス

バックグラウンドスクリプトは、拡張機能が持つ [host パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)に一致するホストに XHR リクエストを送信することができます。

#### ウェブコンテンツ

バックグラウンドスクリプトからウェブページに直接アクセスすることができません。しかし、ウェブページに[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)を読み込ませれば、[メッセージを渡す API を使ってコンテンツスクリプトと通信](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts)をすることができます。

#### コンテンツセキュリティポリシー

バックグラウンドスクリプトは Content Security Policy による制約を受けており、 [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) のように危険な処理は実行できません。

詳細は [Content Security Policy](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) を参照してください。

## サイドバー、ポップアップ、オプションページ

拡張機能には HTML 文書で中身を決めたいろいろなユーザーインターフェイスコンポーネントを入れる事ができます。

- [サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : ブラウザーウィンドウの左側の、ウェブページの横に表示されるペインです。
- [ポップアップ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : ユーザーが[ツールバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)や[アドレスバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)をクリックした時に表示されるダイアログです。
- [オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : ユーザーがブラウザーネイティブのアドオンマネージャー内でアドオン設定にアクセスする時に表示するページです。

各コンポーネント用に、HTML ファイルと、それを指定する [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) の特定プロパティを作成します。HTML ファイルには、通常のウェブページと同様に、CSS と JavaScript ファイルを入れる事ができます。

これらのすべては[拡張機能ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)の一種で、通常のウェブページと異なり、JavaScript はバックグラウンドスクリプトと同じ権限で WebExtension API を使用できます。

## 拡張機能ページ

拡張機能に事前定義された UI コンポーネントに属さない HTML 文書を入れることもできます。サイドバー、ポップアップ、オプションページに提供されるドキュメントと違って、これは `manifest.json` 内にエントリーがないです。しかし、バックグラウンドスクリプトと同様に権限のある WebExtension API のすべてにアクセスできます。

典型的には {{WebExtAPIRef("windows.create()")}} か {{WebExtAPIRef("tabs.create()")}} を使ってページを読み込みます。

詳しくは[拡張機能ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)を見てください。

## コンテンツスクリプト

ウェブページにアクセスして操作するにはコンテンツスクリプトが用いられます。コンテンツスクリプトは ウェブページに読み込まれて実行されます。

コンテンツスクリプトはアドオンが提供するスクリプトであり、ウェブページのコンテキスト内で動作します。このため、{{HTMLElement("script")}} 要素で取得されたものなど、そのページ自身が読み込んだスクリプトとは異なります。

ウェブページに読み込まれた通常のスクリプトと同様に、コンテンツスクリプトも ウェブページの DOM へアクセスできます。

通常のスクリプトと異なるのは、コンテンツスクリプトで以下のことが可能な点です。

- クロスドメインの XHR リクエストを作成できる
- [WebExtension API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) の小さなサブセットを利用できる
- [バックグラウンドスクリプトとメッセージの交換ができ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts)、この方法ですべての WebExtension API に間接的にアクセスできる

コンテンツスクリプトから通常のスクリプトに直接アクセスすることはできませんが、標準化されている [`window.postMessage()`](/ja/docs/Web/API/Window/postMessage) API を用いれば、スクリプト間でメッセージを交換することが可能です。

ここでの議論対象であるコンテンツスクリプトとは基本的に JavaScript のことを指していますが、先ほどと同じ方法で ウェブページに CSS を差し込むこともできます。

詳しくは [コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)の記事を参照してください。

## Web accessible resources

Web accessible resources とは、拡張機能にインクルードしてコンテンツスクリプトや ウェブページのスクリプトからアクセスできるリソースのことであり、代表的なものは画像や HTML / CSS / JavaScript です。web-accessible なリソースは、特殊な URI スキームを介して ウェブページのスクリプトやコンテンツスクリプトから参照できます。

例えばコンテンツスクリプトから ウェブページ内に画像を挿入したい場合、拡張機能に画像をインクルードして web-accessible とし、画像を `src` 属性で参照する [`img`](/ja/docs/Web/HTML/Element/img) タグをコンテンツスクリプトが作成して ウェブページに追加する、といったシナリオが考えられます。

詳細は、 `manifest.json` のキーである [web_accessible_resources](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) のドキュメントを見てください。
