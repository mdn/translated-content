---
title: Firefox 74 for developers
slug: Mozilla/Firefox/Releases/74
---

{{FirefoxSidebar}}

Firefox 74 は、米国時間 2020 年 3 月 10 日にリリースされました。このページでは、開発者に影響する Firefox 74 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### ウェブコンソール

- `$x()` [ウェブコンソールヘルパー](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) の第 3 引数 (結果の型) が、[`XPathResult` 定数](/ja/docs/Web/API/XPathResult#constants) と同様に単純な文字列値を受け入れるようになりました ([Firefox バグ 1602591](https://bugzil.la/1602591))。
- コンソールのオートコンプリートでも使用可能な、optional chaining 演算子 "?." を新たにサポートしました ([Firefox バグ 1594009](https://bugzil.la/1594009))。
- デバッガーで [入れ子の worker](/ja/docs/Web/API/Web_Workers_API/Using_web_workers) を調査およびデバッグできるようになりました ([Firefox バグ 1590766](https://bugzil.la/1590766))。

### HTML

_変更なし。_

### CSS

- [`text-underline-position`](/ja/docs/Web/CSS/text-underline-position) をデフォルトで有効にしました ([Firefox バグ 1606997](https://bugzil.la/1606997))。
- [`text-underline-offset`](/ja/docs/Web/CSS/text-underline-offset) および [`text-decoration-thickness`](/ja/docs/Web/CSS/text-decoration-thickness) プロパティがパーセンテージの値を受け入れるようになりました ([Firefox バグ 1607534](https://bugzil.la/1607534))。
- {{cssxref("outline-style")}} プロパティの値 `auto` をデフォルトで有効にしました ([Firefox バグ 1031664](https://bugzil.la/1031664))。

#### 廃止

- `-moz-` 接頭辞がついた [マルチカラムレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) 関連のプロパティを削除しました ([Firefox バグ 1308636](https://bugzil.la/1308636))。詳しくは [Firefox サイト互換性情報をご覧ください](https://www.fxsitecompat.dev/docs/2020/prefixed-css-multi-column-properties-have-been-removed/)。

### SVG

_変更なし。_

### JavaScript

- [Optional chaining operator](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining) を実装しました ([Firefox バグ 1566143](https://bugzil.la/1566143))。
- JavaScript URL (`javascript:`) を評価した結果が文字列であるとき、この文字列は HTML 文書を生成するように解析され、そして表示されます。以前は文書の URL (例えば [`document.location`](/ja/docs/Web/API/Document/location) プロパティで報告されます) が元々の `javascript:` URL でした。これが `javascript:` URL を評価した結果の、文書の URL を正しく表すようになりました ([Firefox バグ 836567](https://bugzil.la/836567))。

#### 廃止

- {{jsxref("Object.toSource()")}} メソッドおよび {{jsxref("uneval()")}} グローバル関数が、ウェブコンテンツや拡張機能で使用できなくなりました ([Firefox バグ 1565170](https://bugzil.la/1565170))。

### API

#### DOM

- {{domxref("IDBTransaction.commit()")}} メソッドを実装しました ([Firefox バグ 1497007](https://bugzil.la/1497007))。

#### DOM イベント

- Firefox 74 で {{domxref("WorkerGlobalScope.languagechange_event", "languagechange_event")}} イベントと、対応するイベントハンドラープロパティの {{domxref("WorkerGlobalScope.onlanguagechange", "onlanguagechange")}} をサポートしました。これはユーザーが希望する言語を変更したときに発生します ([Firefox バグ 1154779](https://bugzil.la/1154779))。これは過去に Firefox 3.5 からサポートしていると [互換性データベース](https://github.com/mdn/browser-compat-data) に記載されていましたが、誤っていました。

#### Canvas と WebGL

- {{domxref("TextMetrics")}} インターフェイスを、実際のバウンディングボックスを測定する 4 つのプロパティ ([`actualBoundingBoxLeft`](/ja/docs/Web/API/TextMetrics/actualBoundingBoxLeft)、[`actualBoundingBoxRight`](/ja/docs/Web/API/TextMetrics/actualBoundingBoxRight)、[`actualBoundingBoxAscent`](/ja/docs/Web/API/TextMetrics/actualBoundingBoxAscent)、[`actualBoundingBoxDescent`](/ja/docs/Web/API/TextMetrics/actualBoundingBoxDescent)) を持つように拡張しました。テキストメトリクスは {{domxref("CanvasRenderingContext2D.measureText()")}} メソッドを使用して取得できます ([Firefox バグ 1102584](https://bugzil.la/1102584))。

#### 廃止

- `IDBDatabase.createMutableFile()` メソッド (非標準) が支持されているため、同じく非標準の `IDBDatabase.mozCreateFileHandle()` メソッドを削除しました ([Firefox バグ 1024312](https://bugzil.la/1024312))。
- 非標準の `IDBMutableFile.getFile()` メソッドを削除しました ([Firefox バグ 1607791](https://bugzil.la/1607791))。
- {{domxref("HTMLCanvasElement")}} の非標準メソッドである {{domxref("HTMLCanvasElement.mozGetAsFile", "mozGetAsFile()")}} を削除しました。これは数年前から非推奨でした ([Firefox バグ 1588980](https://bugzil.la/1588980))。
- {{domxref("FetchEvent")}} の {{domxref("FetchEvent.isReload", "isReload")}} プロパティを、Firefox および仕様書から削除しました ([Firefox バグ 1264175](https://bugzil.la/1264175))。

### HTTP

- Feature Policy をデフォルトで有効にしました! フレームの許可を設定するには {{HTMLElement("iframe")}} 要素の [`allow`](/ja/docs/Web/HTML/Element/iframe#allow) 属性 (および {{domxref("HTMLIFrameElement")}} の {{domxref("HTMLIFrameElement.allow", "allow")}} プロパティ) を使用してください ([Firefox バグ 1617219](https://bugzil.la/1617219))。
- [`Cross-Origin-Resource-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) ヘッダーをデフォルトで有効にしました ([Firefox バグ 1602363](https://bugzil.la/1602363))。

### セキュリティ

- TLS 1.0 および 1.1 のサポートを Firefox から削除しました。今後はサーバーで TLS 1.2 または 1.3 をサポートすることが必要です。今後は古いバージョンの TLS を使用するサーバーに接続すると、[Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) エラーが発生します ([Firefox バグ 1606734](https://bugzil.la/1606734))。
- Firefox 74 から、サイトが [`allow`](/ja/docs/Web/HTML/Element/iframe#allow) 属性を使用して {{HTMLElement("iframe")}} 内の埋め込みコンテンツにリソースへのアクセス許可を与えて、埋め込まれたページがそのリソースの使用許可を要求したとき、埋め込まれたドメインにリソースの使用許可や共有許可を与えるかを、外側のページと内側のページの両方が許可を確認するのではなく、親ページがユーザーへ確認するようになりました。外側のぺーが `allow` 属性で要求された許可を得ていない場合は、`<iframe>` がユーザーへ確認することなく直ちにアクセスを拒否されます ([Firefox バグ 1483631](https://bugzil.la/1483631))。

### プラグイン

_変更なし。_

### WebDriver conformance (Marionette)

- カレントページを PDF 文書として印刷する `WebDriver:Print` を追加しました ([Firefox バグ 1604506](https://bugzil.la/1604506))。
- `Webdriver:TakeScreenshot` が、キャプチャーする要素が指定されていない場合に現在選択されている閲覧コンテキストではなく、常にトップレベルの閲覧コンテキストをキャプチャーするようになりました ([Firefox バグ 1398087](https://bugzil.la/1398087), [Firefox バグ 1606794](https://bugzil.la/1606794))。
- `Webdriver:TakeScreenshot` の `full` 引数を使用すると、ページ全体をキャプチャーします ([Firefox バグ 1571424](https://bugzil.la/1571424))。

## アドオン開発者向けの変更点

### API の変更点

- {{WebExtAPIRef("Commands.update")}} の `shortcut` に空文字列を渡すと、ショートカットキーを未割り当てにできるようになりました ([Firefox バグ 1475043](https://bugzil.la/1475043))。
- {{WebExtAPIRef("webrequest")}} のそれぞれのイベントで、`details` の一部として `urlclassification` が返るようになりました。これは、要求がフィンガープリンティングやトラッキングに分類されるかの情報を提供します ([Firefox バグ 1589494](https://bugzil.la/1589494))。

### マニフェストの変更点

_変更なし。_

## 関連情報

- Hacks ブログの記事: [Security means more with Firefox 74](https://hacks.mozilla.org/2020/03/security-means-more-with-firefox-74-2/)

## 過去のバージョン

{{Firefox_for_developers(73)}}
