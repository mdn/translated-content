---
title: Firefox 132 開発者向けリリースノート
short-title: Firefox 132
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

このページでは、開発者に影響する Firefox 132 の変更点をまとめています。Firefox 132 は、米国時間 [2024 年 10 月 29 日](https://whattrainisitnow.com/release/?version=132) にリリースされました。

## ウェブ開発者向けの変更点

### HTML

変更なし。

### CSS

- {{CSSXRef("text-emphasis-position")}} プロパティで、{{CSSXRef("text-underline-position")}} に合わせて配置するための値 `auto` をサポートしました ([Firefox バグ 1919658](https://bugzil.la/1919658))。
- CSS で [Nested declaration rule](/ja/docs/Web/API/CSSNestedDeclarations) をサポートしました。入れ子の CSS が正しい順序で解析されるようになりました ([Firefox バグ 1918408](https://bugzil.la/1918408))。

#### 廃止

- [`-moz-user-modify`](/ja/docs/Web/CSS/Reference/Properties/user-modify) CSS プロパティを削除しました。このプロパティは、[`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) グローバル属性が支持されたため非推奨になっていました ([Firefox バグ 1920118](https://bugzil.la/1920118))。

### JavaScript

- 正規表現の [`(?ims-ims:...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) モディファイアーは、正規表現パターンの特定の一部分に限って効果がある変更を行えます ([Firefox バグ 1913752](https://bugzil.la/1913752)、[Firefox バグ 1899813](https://bugzil.la/1899813))。

### HTTP

- HTTP {{httpheader("Accept")}} ヘッダーの[デフォルト値/ドキュメント値](/ja/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values)が `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` に変更されました。
  これにより、互換性の課題を発生させたことがある画像の MIME タイプが除去され、fetch 仕様および Safari との整合性が図られます。 ([Firefox バグ 1917177](https://bugzil.la/1917177)).

#### 廃止

- HTTP/2 サーバープッシュを、設定項目 `network.http.http2.allow-push` を `false` に設定することで無効化しました。
  この機能はほかのメジャーなブラウザーでサポートしておらず、将来のリリースで実装を完全に削除する予定です ([Firefox バグ 1915848](https://bugzil.la/1915848))。

### プライバシー

- [厳格な強化型トラッキング防止機能](https://support.mozilla.org/ja/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) で、すべての [サードパーティ Cookie](/ja/docs/Web/Privacy/Guides/Third-party_cookies) をブロックするようになりました ([Firefox バグ 1918037](https://bugzil.la/1918037))。

### API

- {{domxref('WebGLRenderingContext')}} および {{domxref('WebGL2RenderingContext')}} インターフェイスの {{domxref('WebGLRenderingContext.drawingBufferColorSpace', 'drawingBufferColorSpace')}} および {{domxref('WebGLRenderingContext.unpackColorSpace','unpackColorSpace')}} プロパティをサポートしました。これらはそれぞれ、WebGL 描画バッファーの色空間と、テクスチャーをインポートする際に変換する色空間を指定します ([Firefox バグ 1885491](https://bugzil.la/1885491), [Firefox バグ 1885446](https://bugzil.la/1885446))。
- {{domxref("Notification.silent")}} プロパティをサポートしました。システムの通知を静音化するかを制御します。{{domxref("Notification.Notification", "Notification()")}} コンストラクターで `silent: true` を指定すると、デバイスの設定に関わらずシステムの通知は通知音やバイブレーションを伴わずに発行されます ([Firefox バグ 1809028](https://bugzil.la/1809028))。
- {{htmlelement("link")}}・{{htmlelement("script")}}・{{htmlelement("img")}} 要素の `fetchpriority` 属性、{{domxref("HTMLLinkElement")}}・{{domxref("HTMLScriptElement")}}・{{domxref("HTMLImageElement")}} インターフェイスの `fetchPriority` プロパティ、[`Request()` コンストラクター](/ja/docs/Web/API/Request/Request) に渡す引数 [`options.priority`](/ja/docs/Web/API/RequestInit#priority)、HTTP {{httpheader("Link")}} ヘッダーの `fetchpriority` ディレクティブをサポートしました。これらは特定のリソースを読み込むときの、同じ種類の他のリソースと比較した相対的な優先度に関する助言を開発者が与えられるようにします。また事前読み込みなど、ほかの優先度設定方法と組み合わせて使用できます ([Firefox バグ 1854077](https://bugzil.la/1854077))。
- {{domxref("CSSNestedDeclarations")}} インターフェイスと {{domxref("CSSNestedDeclarations.style")}} プロパティをサポートしました ([Firefox バグ 1918408](https://bugzil.la/1918408))。
- `microphone` および `camera` [権限](/ja/docs/Web/API/Permissions_API)が {{domxref("Permissions.query()")}} メソッドで使用できるようになりました。これにより、対応するハードウェアへのアクセスが許可されているか、拒否されているか、あるいはまだユーザーの承認が要求されるかを確認できるようになりました。 ([Firefox バグ 1609427](https://bugzil.la/1609427) および [Firefox バグ 1915222](https://bugzil.la/1915222)).

#### Media、WebRTC、Web Audio

- {{domxref('HTMLVideoElement')}} インターフェイスの {{domxref('HTMLVideoElement/requestVideoFrameCallback','requestVideoFrameCallback()')}} および {{domxref('HTMLVideoElement/cancelVideoFrameCallback','cancelVideoFrameCallback()')}} メソッドをサポートしました。`requestVideoFrameCallback()` は、新しい動画フレームがコンポジターへ送信されたときに実行するコールバック関数を登録します。開発者はこの関数を使用してそれぞれの動画フレームで処理を行うことができ、キャンバスへの描画、動画の分析、外部音声ソースとの同期などがより効率的になります。このメソッドは、未処理のコールバック要求をキャンセルするために `cancelVideoFrameCallback()` へ渡すことができるコールバックハンドラーを返します。([Firefox バグ 1919367](https://bugzil.la/1919367)、[Firefox バグ 1800882](https://bugzil.la/1800882))。
- {{domxref("MediaStreamTrack.getCapabilities()")}} メソッドをサポートしました。これは関連づけられた {{domxref("MediaStreamTrack")}} の、それぞれの制約可能なプロパティで受け入れる値または値の範囲を詳しく示すオブジェクトを返します ([Firefox バグ 1179084](https://bugzil.la/1179084))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- WebDriver BiDi のコマンドをナビゲーションの途中や新たに作成したタブで使用したときの信頼性を高める改善を施しました。以前は `browsingContext.setViewport` のようなコマンドが `AbortError` を理由にして失敗することがありましたが、その問題を避けるために少し時間をおいて再実行するようになりました ([Firefox バグ 1854942](https://bugzil.la/1854942)、[Firefox バグ 1918287](https://bugzil.la/1918287)、[Firefox バグ 1918672](https://bugzil.la/1918672)、[Firefox バグ 1921756](https://bugzil.la/1921756))。
- `browsingContext.contextCreated` イベントが、遅延読み込みのフレームで正しく発生するようになりました。以前は、インラインフレームが実際にコンテンツの読み込みを開始したときに限ってイベントが発生していました ([Firefox バグ 1878166](https://bugzil.la/1878166))。
- キャッシュ済みのスタイルシートの要求で、ネットワークのイベントが正しく発生するようになりました ([Firefox バグ 1879438](https://bugzil.la/1879438))。
- 以前はネットワークのイベントの時間の単位が誤っており、マイクロ秒を使用していました。現在はミリ秒を正しく設定しています ([Firefox バグ 1916685](https://bugzil.la/1916685))。
- ネットワークのイベントの時間で `requestTime` がより正確になり、リクエストが実際に開始した時間に一致するようになりました ([Firefox バグ 1922390](https://bugzil.la/1922390))。

## 実験的なウェブ機能

以下の機能は Firefox 132 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **Cookie Store API:** `dom.cookieStore.enabled`。

  [Cookie Store API](/ja/docs/Web/API/Cookie_Store_API) は新しい {{jsxref("Promise")}} ベースの Cookie 管理方法で、イベントループをブロックせず、{{domxref("Document")}} に依存しません (このため [サービスワーカー](/ja/docs/Web/API/Service_Worker_API) で使用できます)。Firefox 132 では Cookie Store API のサブセットを実装しました ([Firefox バグ 1800882](https://bugzil.la/1800882))。以下のプロパティが含まれます:
  - [`CookieStore`](/ja/docs/Web/API/CookieStore) インターフェイス。ただし戻り値に `partitioned` は含まれません。
  - [`CookieChangeEvent`](/ja/docs/Web/API/CookieChangeEvent) インターフェイス。ただし `partitioned` プロパティを除きます。
  - [`Window.cookieStore`](/ja/docs/Web/API/Window/cookieStore) プロパティ。
  - [`ServiceWorkerGlobalScope.cookieStore`](/ja/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) プロパティ。

- **`fetch()` の `keepalive` オプション:** `dom.fetchKeepalive.enabled`。

  {{domxref('Window.fetch','fetch()')}} グローバルメソッドに [`keepalive`](/ja/docs/Web/API/RequestInit#keepalive) 初期化オプションがあります。`keepalive` を `true` に設定すると、ブラウザーはリクエストが完了する前にリクエストを開始したページがアンロードされても、関連するリクエストを中止しません。

  これはセッションの終了時に分析情報を送信するときに {{domxref("Navigator.sendBeacon()")}} の代替として読み込みリクエストが機能することを可能にして、いくつかの利点をもたらします ([`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) 以外の HTTP メソッドを利用する、リクエストのプロパティをカスタマイズする、あるいは読み込みの {{jsxref("Promise")}} のフルフィルメントを通してサーバーのレスポンスにアクセスすることが可能です)。これは [サービスワーカー](/ja/docs/Web/API/Service_Worker_API) でも使用できます ([Firefox バグ 1906952](https://bugzil.la/1906952))。

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>。
  {{domxref("CloseWatcher")}} インターフェイスは、組み込みコンポーネントと同じようにデバイスのネイティブな仕組みを使用して閉じることが可能なコンポーネントを開発者が実装することを可能にします。たとえば Android では、戻るボタンを使用してダイアログを閉じることができます。このインターフェイスで、独自のサイドバーを同じように閉じることができます ([Firefox バグ 1888729](https://bugzil.la/1888729))。

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>。{{jsxref("Promise.try()")}} はあらゆる種類 (値を返す、例外が発生する、同期、非同期) のコールバックを受け取り、その結果を Promise の機能 (たとえば {{jsxref("Promise.then", ".then()")}} や {{jsxref("Promise.catch", ".catch()")}}) で扱えるようにするため {{jsxref("Promise")}} にラップする便利なメソッドです ([Firefox バグ 1905364](https://bugzil.la/1905364))。

- **`JSON.parse` with source**: <code>javascript.options.experimental.json_parse_with_source</code>。[`JSON.parse` source text access proposal](https://github.com/tc39/proposal-json-parse-with-source) は、大きな浮動小数点数や日付の値を JavaScript の値と JSON 文字列の間で変換するときに精度が低下することに関する問題を軽減する機能を提供するように `JSON.parse` の動作を拡張します ([Firefox バグ 1913085](https://bugzil.la/1913085)、[Firefox バグ 1925334](https://bugzil.la/1925334))。特に、以下の機能を使用可能です:
  - `JSON.parse()` の [引数 `reviver` 内の引数 `context`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): パースした元の JSON ソース文字列へアクセスできます。
  - [`JSON.isRawJSON()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): 値が `JSON.rawJSON()` から返されたオブジェクトであるかを確認します。
  - [`JSON.rawJSON()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): JSON 文字列の一部を含む "raw JSON" オブジェクトを生成します。これをオブジェクトに含めることで、オブジェクトが文字列化されるときに指定した値を維持できます。
