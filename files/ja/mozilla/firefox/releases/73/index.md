---
title: Firefox 73 for developers
slug: Mozilla/Firefox/Releases/73
---

{{FirefoxSidebar}}

Firefox 73 は、米国時間 2020 年 2 月 11 日にリリースされました。このページでは、開発者に影響する Firefox 73 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors) をコンソールでエラーとして示す (警告として表示しない) ことで、適切な表示になりました ([Firefox バグ 1602093](https://bugzil.la/1602093))。
- ウェブコンソールの文字列検索や正規表現検索で、['-' を前につけて否定することが可能になりました](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering_and_searching) ([Firefox バグ 1291192](https://bugzil.la/1291192))。

### HTML

_変更なし。_

### CSS

- {{cssxref("overscroll-behavior-x")}} および {{cssxref("overscroll-behavior-y")}} を論理的にしたものである {{cssxref("overscroll-behavior-block")}} および {{cssxref("overscroll-behavior-inline")}} を追加しました ([Firefox バグ 833953](https://bugzil.la/833953))。

#### 廃止

- 独自仕様である [`-moz-touch-enabled`](/ja/docs/Web/CSS/@media/-moz-touch-enabled) メディアクエリーを削除しました ([Firefox バグ 1486964](https://bugzil.la/1486964))。代わりに [`pointer: coarse`](/ja/docs/Web/CSS/@media/pointer) を使用してください。

### SVG

- {{SVGAttr("letter-spacing")}} および {{SVGAttr("word-spacing")}} プロパティが SVG で動作するようになりました ([Firefox バグ 371787](https://bugzil.la/371787))。

### MathML

#### 廃止

- 非推奨の {{MathMLElement("mfenced")}} 要素を削除しました ([Firefox バグ 1603773](https://bugzil.la/1603773))。代わりに {{MathMLElement("mrow")}} および {{MathMLElement("mo")}} 要素を使用してください。

### JavaScript

- The `yearName` および `relatedYear` フィールドが [`DateTimeFormat.prototype.formatToParts()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts) メソッドで使用可能になりました。CJK カレンダー向けに役立つフォーマットです ([Firefox バグ 1591664](https://bugzil.la/1591664))。

### API

#### DOM

- {{domxref("Window")}} オブジェクトの {{domxref("Window.innerWidth", "innerWidth")}} および {{domxref("Window.innerHeight", "innerHeight")}} プロパティが、ときどき視覚的なビューポートに基づいて幅や高を返すことなく、常にレイアウトビューポートの幅や高さを返すようになりました。特に、以前は [レスポンシブデザインモード](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) を使用するときに視覚的なビューポートの寸法を返しており、想定とは異なる動作でした ([Firefox バグ 1514429](https://bugzil.la/1514429))。

#### WebVR

- 非推奨の [WebVR API](/ja/docs/Web/API/WebVR_API) ([拡張現実](https://ja.wikipedia.org/wiki/%E6%8B%A1%E5%BC%B5%E7%8F%BE%E5%AE%9F) および [バーチャル・リアリティ](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%BC%E3%83%81%E3%83%A3%E3%83%AB%E3%83%BB%E3%83%AA%E3%82%A2%E3%83%AA%E3%83%86%E3%82%A3) アプリケーションの両方をサポートする [WebXR](/ja/docs/Web/API/WebXR_Device_API) に取って代わられました) を動作させるために、{{Glossary("HTTPS")}} プロトコルを使用する [安全なコンテキストが必要になりました](/ja/docs/Web/API/WebVR_API#api_availability)。これは、個人情報を含む可能性がある機微な入力ソースを使用できるためです ([Firefox バグ 1381645](https://bugzil.la/1381645))。

#### 廃止

- {{domxref("VideoPlaybackQuality")}} の {{domxref("VideoPlaybackQuality.corruptedVideoFrames", "corruptedVideoFrames")}} プロパティは仕様書で非推奨とされており、Firefox から削除しました ([Firefox バグ 1602163](https://bugzil.la/1602163))。

### セキュリティ

_変更なし。_

### WebDriver conformance (Marionette)

- カレントページを PDF 文書として印刷する `WebDriver:Print` を追加しました ([Firefox バグ 1604506](https://bugzil.la/1604506))。
- `Webdriver:TakeScreenshot` が、キャプチャーする要素が指定されていない場合に現在選択されている閲覧コンテキストではなく、常にトップレベルの閲覧コンテキストをキャプチャーするようになりました ([Firefox バグ 1398087](https://bugzil.la/1398087), [Firefox バグ 1606794](https://bugzil.la/1606794))。
- `Webdriver:TakeScreenshot` の `full` 引数を使用すると、ページ全体をキャプチャーします ([Firefox バグ 1571424](https://bugzil.la/1571424))。

## アドオン開発者向けの変更点

### API の変更点

- {{WebExtAPIRef("sidebarAction.toggle()")}} 関数を実装しました ([bug 1453355](https://bugzilla.mozilla.org/show_bug.cgi?id=1453355))。

### マニフェストの変更点

_変更なし。_

## 関連情報

- Hacks ブログの記事: [Firefox 73 is upon us](https://hacks.mozilla.org/2020/02/firefox-73-is-upon-us/)

## 過去のバージョン

{{Firefox_for_developers(72)}}
