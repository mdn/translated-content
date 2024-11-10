---
title: Firefox 124 for developers
slug: Mozilla/Firefox/Releases/124
l10n:
  sourceCommit: 08ef601955d7fc92a9a4c6d6c047854b5aef723d
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 124 の変更点をまとめています。Firefox 124 は、米国時間 [2024 年 3 月 19 日](https://whattrainisitnow.com/release/?version=124) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### CSS

- {{cssxref("text-wrap")}} プロパティがショートハンドプロパティに転換されて、{{cssxref("text-wrap-mode")}} および {{cssxref("text-wrap-style")}} の構成要素プロパティを包括するようになりました。([Firefox bug 1758391](https://bugzil.la/1758391))

### JavaScript

変更なし。

### SVG

- {{cssxref("::first-letter")}} および {{cssxref("::first-line")}} CSS 擬似要素を {{SVGElement("text")}} SVG 要素へ適用可能になりました。たとえば `<text>` 要素の最初の文字や行の塗りつぶし、輪郭、フォントを、CSS を使用して変更できます。([Firefox bug 1302722](https://bugzil.la/1302722))

### API

- [`AbortSignal.any()`](/ja/docs/Web/API/AbortSignal/any_static) をサポートしました。複数のシグナル発生源から操作を中止するために使用できる、複合シグナルを生成できます。([Firefox bug 1830781](https://bugzil.la/1830781))

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- ユーザーが Cookie を取得することを可能にする [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) コマンドを実装しました。このコマンドは、2 つの省略可能な引数を受け入れます。クライアントは、指定した基準に一致する Cookie だけ返すようにする引数 `filter` を与えることができます。また引数 `partition` は、パーティションキーを構築したり、[一致するパーティションが所有する](/ja/docs/Web/Privacy/State_Partitioning) Cookie を取得したりするために使用できます。([Firefox bug 1854580](https://bugzil.la/1854580))
- 新しい Cookie を生成する [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie) コマンドを実装しました。ユーザーは引数 `cookie` で Cookie に関する情報を提供できます。また、省略可能な引数 `partition` で、Cookie を所有するパーティションのパーティションキーを構築できます。([Firefox bug 1854582](https://bugzil.la/1854582))
- リクエストを中断するためのさまざまなコマンドを実装しました:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept) は、ネットワークイベントのライフサイクルのさまざまな段階でリクエストを中断するために使用される、URL パターンを定義できます。このコマンドは、作成したネットワークインターセプトのために生成した一意な ID を返します。([Firefox bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) は、一意の ID に基づいてインターセプトを削除できます。([Firefox bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) は、`AuthRequired` の段階で中断したリクエストを再開できます。引数 "action" を使用して、クライアントは "cancel"、ユーザー名とパスワードを与える "provideCredentials"、あるいはブラウザーが認証プロンプトをを表示させる "default" へのフォールバックが可能です。([Firefox bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) は、`BeforeRequestSent` または `ResponseStarted` の段階で中断したリクエストを中止できます。([Firefox bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest)、[network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse)、および [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) も使用できますが、現在は引数 "request" だけサポートしており、またブロックされたリクエストの再開だけが可能です。将来のリリースでは、リクエストやレスポンスを変更する追加の引数も使用できる予定です。([Firefox bug 1874206](https://bugzil.la/1874206) および [Firefox bug 1853882](https://bugzil.la/1853882))
- "ユーザーコンテキスト" に関する複数のコマンドを、Firefox で [コンテナー](https://support.mozilla.org/kb/how-use-firefox-containers) として実装しました:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) は新しいユーザーコンテキストを作成して、ユーザーコンテキストの一意の ID を返します。([Firefox bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) はデフォルトでないユーザーコンテキストを、一意の ID を指定することで削除できます。([Firefox bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) は、デフォルトユーザーコンテキストを含むすべての使用可能なユーザーコンテキストの一覧を、クライアントが取得できます。([Firefox bug 1870847](https://bugzil.la/1870847))
- [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) コマンドで引数 "userContext" をサポートしました。この引数は、新しい閲覧コンテキスト (タブやウィンドウ) を特定のユーザーコンテキスト (Firefox のコンテナー) に割り当てできます。([Firefox bug 1874918](https://bugzil.la/1874918))
- [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info) 型を、"userContext" フィールドを含むように更新しました。このフィールドは、閲覧コンテキストのタブを所有するユーザーコンテキストの一意の ID です。([Firefox bug 1874920](https://bugzil.la/1874920))
- [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript) コマンドで引数 "contexts" をサポートしました。この引数は特定の閲覧コンテキストツリー (タブ) のトップレベルの閲覧コンテキストを指定することで、特定の閲覧コンテキストツリーに限ってプリロードスクリプトをクライアントが追加することを可能にします。([Firefox bug 1858458](https://bugzil.la/1858458))
- [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) が、最後のタブやウィンドウをを閉じることができない不具合を修正しました。([Firefox bug 1873948](https://bugzil.la/1873948))

#### Marionette

- [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) で、カスタムテキストが指定されていない場合にスロットの値が無視される不具合を修正しました。([Firefox bug 1865381](https://bugzil.la/1865381))

## アドオン開発者向けの変更点一覧

- 低速なコンテンツスクリプトなど、拡張機能実行時のパフォーマンスの問題をブラウザーが検知したときの情報を、拡張機能が取得できるようにする {{WebExtAPIRef("runtime.onPerformanceWarning")}} イベントを追加しました ([Firefox bug 1861445](https://bugzil.la/1861445))。

## 実験的なウェブ機能

以下の機能は Firefox 124 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **拡張可能な `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`。

  {{jsxref("SharedArrayBuffer.prototype.grow()")}} メソッドを使用して {{jsxref("SharedArrayBuffer")}} を拡張できるようになりました。
  バッファーで許可される最大サイズは、[`SharedArrayBuffer()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) の `options.maxByteLength` 引数で設定します。
  {{jsxref("SharedArrayBuffer.prototype.growable")}} および {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} プロパティはそれぞれバッファーが拡張可能であるか、および許可される最大サイズを表します。
  ([Firefox bug 1842773](https://bugzil.la/1842773))

- **サイズ変更可能な `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`。

  {{jsxref("ArrayBuffer.prototype.resize()")}} メソッドを使用して、{{jsxref("ArrayBuffer")}} のサイズ変更が可能になりました。
  バッファーで許可される最大サイズは、[`ArrayBufferffer()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) の `options.maxByteLength` パラメーターで設定します。
  {{jsxref("ArrayBuffer.prototype.resizable")}} および {{jsxref("ArrayBuffer.prototype.maxByteLength")}} プロパティはそれぞれバッファーがサイズ変更可能であるか、および許可される最大サイズを表します。
  ([Firefox bug 1842773](https://bugzil.la/1842773))

## 過去のバージョン

{{Firefox_for_developers}}
