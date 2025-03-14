---
title: Firefox 77 for developers
slug: Mozilla/Firefox/Releases/77
---

{{FirefoxSidebar}}

この記事では、開発者に影響する Firefox 77 の変更点をまとめています。 Firefox 77 は、[2020 年 6 月 2 日](https://wiki.mozilla.org/RapidRelease/Calendar) にリリースされました。

**付随する hacks ブログの記事「[New in Firefox 77: DevTool improvements and web platform updates](https://hacks.mozilla.org/2020/06/new-in-firefox-77-devtool-improvements-and-web-platform-updates/)」もご覧ください。**

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- Firefox Developer Edition のインスペクターで、ページで使用している CSS プロパティをサポートするブラウザーを表示する [互換性パネル](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#compatibility-view) を提供します ([Firefox バグ 1625134](https://bugzil.la/1625134))。
- デバッガーの [ツールバーに設定メニュー](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#toolbar) を追加しました。メニューの項目は (まだ) **JavaScript を無効化** だけです ([Firefox バグ 1630957](https://bugzil.la/1630957))。
- [ネットワークモニターのツールバー](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html) に、ログデータを管理する **アクション** メニューを追加しました ([Firefox バグ 1459175](https://bugzil.la/1459175))。

  - **永続ログ**
  - **HAR ファイルのインポート**
  - **HAR 形式ですべて保存**
  - **HAR 形式ですべてコピー**

- ネットワークモニターの [要求ブロックパネル](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) に、すべての要求ブロック項目を有効化・無効化・削除するコンテキストメニューを追加しました ([Firefox バグ 1588076](https://bugzil.la/1588076))。
- デバッガーの [コールスタック](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) にあるフレーム内をクリックして選択行を変更した場合に、**ステップオーバー** (`F10`) をクリックすると、デバッガーが新たに選択した行に達するまで実行するようになりました (デバッガーがもともと停止していた行は無視します) ([Firefox バグ 1630642](https://bugzil.la/1630642))。
- 値の取得 ("get") や設定 ("set") と同様に、値を [取得または設定 ("get または set")](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint) したときに実行停止するウォッチポイントを設定できるようになりました ([Firefox バグ 1580585](https://bugzil.la/1580585))。

### HTML

- {{HTMLElement("option")}} 要素の内容物が空であるときに、[label 属性の値](/ja/docs/Web/HTML/Element/option#browser_compatibility) を表示するようになりました ([Firefox バグ 40545](https://bugzil.la/40545))。

### SVG

- {{SVGAttr("transform-origin")}} プレゼンテーション属性に対応しました ([Firefox バグ 1581691](https://bugzil.la/1581691))。

### JavaScript

- {{JSxRef("String.prototype.replaceAll()")}} に対応しました ([Firefox バグ 1608168](https://bugzil.la/1608168))。

### API

#### IndexedDB

- {{DOMxRef("IDBCursor.request")}} プロパティを実装しました ([Firefox バグ 1536540](https://bugzil.la/1536540))。

### WebDriver への適合性 (Marionette)

- ウィンドウをクリックして閉じるなど、現在選択中の最上位の閲覧コンテキストが削除されたとき、いくつかのコマンドが Marionette をハングアップさせていた問題を修正しました ([Firefox バグ 1619481](https://bugzil.la/1619481))。
- 既知の問題: Firefox 77 での変更により、現在のページから移動する際に、開いているユーザープロンプトが早く閉じられる場合があります。この問題は Firefox 78 で修正する予定です ([Firefox バグ 1631362](https://bugzil.la/1631362))。

## アドオン開発者向けの変更点

### API の変更点

- {{WebExtAPIRef("tabs.goBack")}} および {{WebExtAPIRef("tabs.goForward")}} に対応しました ([Firefox バグ 1603796](https://bugzil.la/1603796))。
- `serviceWorkers` および `indexedDB` タイプの {{WebExtAPIRef("browsingData.remove")}} で、ホスト名による削除に対応しました ([Firefox バグ 1632990](https://bugzil.la/1632990) および [Firefox バグ 1551301](https://bugzil.la/1551301))。
- {{WebExtAPIRef("tabs.duplicate")}} API で `duplicateProperties` に対応しました。複製したタブの位置やアクティブ状態を指定できます ([Firefox バグ 1560218](https://bugzil.la/1560218))。
- {{WebExtAPIRef("permissions")}} API の {{WebExtAPIRef("permissions.onAdded")}} および {{WebExtAPIRef("permissions.onRemoved")}} イベントに対応しました ([Firefox バグ 1444294](https://bugzil.la/1444294))。
- {{WebExtAPIRef("webRequest.onHeadersReceived")}} で複数の `Content-Security-Policy` ヘッダーを変更する要求が統合されるようになりました ([Firefox バグ 1462989](https://bugzil.la/1462989))。
- {{WebExtAPIRef("webRequest")}} イベントは `data:` URL URL では発行されなくなります。 ([Firefox バグ 1631933](https://bugzil.la/1631933))

### マニフェストの変更点

- 以下のパーミッションが要求可能になりました。これらは [`optional_permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) マニフェストキーで指定可能であり、{{WebExtAPIRef("permissions")}} API の `browsingData` ([Firefox バグ 1630417](https://bugzil.la/1630417))、`pkcs11` ([Firefox バグ 1630418](https://bugzil.la/1630418))、`proxy` ([Firefox バグ 1548011](https://bugzil.la/1548011))、`sessions` ([Firefox バグ 1630414](https://bugzil.la/1630414)) を使用して要求できます、。

### その他

- `unlimitedStorage` パーミッションを使用することを、拡張機能のインストールや更新の際に表示しないようになりました。詳しくは [Requesting the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) をご覧ください ([Firefox バグ 1630413](https://bugzil.la/1630413))。
- [SameSite cookie](/ja/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) に関する変更により、拡張機能のページのホスト向けのトラッキング防止機能をバイパスする [host パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) を設定するときに、フルドメインまたはワイルドカードをつけて指定しなければなりません。ただし Content スクリプトのトラッキング防止は、フルドメインで指定したホストに限りバイパスできます。

## 過去のバージョン

{{Firefox_for_developers(76)}}
