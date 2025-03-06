---
title: Firefox 128 for developers
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 95beef16ce880c41315c2e8b9d3e54c17c660124
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 128 の変更点をまとめています。Firefox 128 は、米国時間 [2024 年 7 月 9 日](https://whattrainisitnow.com/release/?version=128) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- `<base>` 要素の [`target`](/ja/docs/Web/HTML/Element/base#target) で ASCII の改行、タブ、`<` の文字が禁止されて、それらが存在する場合は値を `_blank` に変更します。これは、閉じていない `target` 属性を使用するダングリングマークアップインジェクション攻撃を防止します ([Firefox bug 1835157](https://bugzil.la/1835157))。

### CSS

- [相対的な色の構文](/ja/docs/Web/CSS/CSS_colors/Relative_colors) をデフォルトで有効にしました。相対的な色の構文により、元の色に対して相対的な色の値を作成できます。また、[色関数](/ja/docs/Web/CSS/CSS_colors#functions) を使用して異なる [色空間](/ja/docs/Glossary/Color_space) の色の値に変換できます ([Firefox bug 1900251](https://bugzil.la/1900251))。
- [`content`](/ja/docs/Web/CSS/content) プロパティで、画像を含むコンテンツのための [代替テキスト](/ja/docs/Web/CSS/content#alternative_text) をサポートしました。代替テキストは、ブラウザーのアクセシビリティツリーに現れます ([Firefox bug 1281158](https://bugzil.la/1281158)、[Firefox bug 1896047](https://bugzil.la/1896047))。

#### 廃止

- メイソンリーレイアウトのプロパティである `align-tracks` および `justify-tracks` を削除しました。これらのプロパティは Firefox のみ実装しており、最近 [仕様書から削除されました](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox bug 1900195](https://bugzil.la/1900195))。

### JavaScript

- サイズ変更可能な {{jsxref("ArrayBuffer")}} と拡張可能な {{jsxref("SharedArrayBuffer")}} をサポートしました。新しいバッファーを割り当ててデータをコピーする必要なく、バッファーのサイズを変更できます ([Firefox bug 1884150](https://bugzil.la/1884150))。
  関連するメソッドやプロパティは以下のとおりです:

  - {{jsxref("SharedArrayBuffer.prototype.grow()")}} メソッドを使用して {{jsxref("SharedArrayBuffer")}} を拡張します。
    バッファーで許可される最大サイズは、[`SharedArrayBuffer()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) の `options.maxByteLength` 引数で設定します。
    {{jsxref("SharedArrayBuffer.prototype.growable")}} および {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} プロパティはそれぞれバッファーが拡張可能であるか、および許可される最大サイズを表します。
  - {{jsxref("ArrayBuffer.prototype.resize()")}} メソッドを使用して {{jsxref("ArrayBuffer")}} のサイズを変更します。
    バッファーで許可される最大サイズは、[`ArrayBuffer()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) の `options.maxByteLength` パラメーターで設定します。
    {{jsxref("ArrayBuffer.prototype.resizable")}} および {{jsxref("ArrayBuffer.prototype.maxByteLength")}} プロパティはそれぞれバッファーがサイズ変更可能であるか、および許可される最大サイズを表します。

### HTTP

- [既定のリクエストと画像のリクエスト](/ja/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) で、HTTP [`Accept`](/ja/docs/Web/HTTP/Headers/Accept) ヘッダーに `image/svg+xml` MIME タイプを含むようになりました ([Firefox bug 1711622](https://bugzil.la/1711622))。
- HTTP [`Priority`](/ja/docs/Web/HTTP/Headers/Priority) リクエストヘッダーおよびレスポンスヘッダーを含む、{{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} をサポートしました。これは、コネクションで送信するリソースに対して想定する相対的な優先度と、ヘッダーが送信された後に優先度を変更できる HTTP/2 および HTTP/3 の `PRIORITY_UPDATE` をクライアントが示すことを可能にします ([Firefox bug 1865040](https://bugzil.la/1865040))。

### API

- {{domxref('RTCRtpReceiver.getParameters()')}} および {{domxref('RTCRtpSender.getParameters()')}} をサポートしました。それぞれ、受信トラックおよび送信トラックでエンコードや伝送に使用する現在のコーデックを表すオブジェクトを返します ([Firefox bug 1534687](https://bugzil.la/1534687))。
- {{domxref("Request.bytes()")}} および {{domxref("Response.bytes()")}} をサポートしました。それぞれ、{{domxref("Request")}} および {{domxref("Response")}} から {{jsxref("Uint8Array")}} を取得するのに便利な手段です ([Firefox bug 1896475](https://bugzil.la/1896475))。
- {{domxref("PushMessageData.bytes()")}} をサポートしました。プッシュメッセージから {{jsxref("Uint8Array")}} オブジェクトのバイト配列としてデータを返します ([Firefox bug 1897871](https://bugzil.la/1897871))。
- {{domxref("Blob.bytes()")}} をサポートしました。{{domxref('Blob')}} から {{jsxref("Uint8Array")}} オブジェクトのバイト配列としてデータを返します ([Firefox bug 1896509](https://bugzil.la/1896509))。
- {{domxref('MediaKeys.getStatusForPolicy()')}} をサポートしました。DRM で保護されたコンテンツを復号するために使用する CDM モジュールが、システムでサポートされる [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection) バージョンのような指定されたポリシー要件に基づく "仮想" キーに暗号化されたメディアの提示を許可するかを確認します。
  これは最適な解像度での再生が許可されるかを、メディアキーセッションを作成したり実際のライセンスを取得したりする必要なく事前に知るためのシンプルな仕組みをアプリケーションに提供します ([Firefox bug 1878714](https://bugzil.la/1878714))。
- {{domxref('RTCRtpTransceiver.setCodecPreferences()')}} をサポートしました。WebRTC のローカルピアが受信したデータをデコードするために使用できるコーデックを、好みの順番で設定します。ウェブアプリケーションは、リモートピアに好みのコーデックを選択させたり、(再送信、冗長化、前方誤り訂正に使用するものを含む) 特定のコーデックのネゴシエーションを無効にしたりするためにこのメソッドを使用できます ([Firefox bug 1396922](https://bugzil.la/1396922))。
- {{domxref('ShadowRoot.getHTML()')}}、{{domxref('Element.getHTML()')}} メソッド、およびこれらに関連する {{domxref('ShadowRoot.serializable')}}、{{domxref('HTMLTemplateElement.shadowRootSerializable')}} プロパティを含む、[宣言的なシャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM#html_で宣言的に) のシリアライズをサポートしました。
- [`CSSPropertyRule`](/ja/docs/Web/API/CSSPropertyRule) インターフェイスをデフォルトで有効にして、CSS の [`@property`](/ja/docs/Web/CSS/@property) アットルールを表すようになりました。このインターフェイスは [`name`](/ja/docs/Web/API/CSSPropertyRule/name)、[`syntax`](/ja/docs/Web/API/CSSPropertyRule/syntax)、[`inherits`](/ja/docs/Web/API/CSSPropertyRule/inherits)、[`initialValue`](/ja/docs/Web/API/CSSPropertyRule/initialValue) のような、`@property` アットルールを使用して定義した CSS カスタムプロパティの値を取得できます ([Firefox bug 1864818](https://bugzil.la/1864818))。
- [`registerProperty()`](/ja/docs/Web/API/CSS/registerProperty_static) メソッドをデフォルトで有効にしました。JavaScript で [CSS カスタムプロパティ](/ja/docs/Web/CSS/--*) を定義できます。これは、CSS の `@property` アットルールを使用することに似ています ([Firefox bug 1864818](https://bugzil.la/1864818))。

#### Media、WebRTC、Web Audio

#### 廃止

- 非標準の {{domxref('HTMLMediaElement.seekToNextFrame()')}} メソッドを削除しました。現在はどのブラウザーもサポートしていません ([Firefox bug 1336404](https://bugzil.la/1336404))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### 一般

- 文字列 (WebDriver クラシック) または JSON オブジェクト (WebDriver BiDi) のいずれかになり得る、拡張された "unhandledPromptBehavior" をサポートしました。オブジェクト型は "beforeunload" プロンプトの処理など、WebDriver BiDi 向けにより多くの機能を提供します ([Firefox bug 1884650](https://bugzil.la/1884650))。

#### WebDriver BiDi

- WebDriver BiDi 仕様に準拠して、WebDriver セッションの "BiDi フラグ" をサポートしました。これにより、WebDriver BiDi 向けに作成またはアップグレードしたセッションを識別できます ([Firefox bug 1898719](https://bugzil.la/1898719))。
- `network.continueRequest` コマンドでいくつかの引数をサポートしました。これらはリクエストがネットワークへ送信される前に、ヘッダー、Cookie、メソッド、内容を変更することを可能にします ([Firefox bug 1850680](https://bugzil.la/1850680))。
- `permissions.setPermission` コマンドで引数 `userContext` をサポートしました。これは特定のユーザーコンテキスト (Firefox ではコンテナーとして実装) へのパーミッションを分離することを可能にします ([Firefox bug 1894217](https://bugzil.la/1894217))。
- `browsingContext.navigate` で、ナビゲーションエラーによりエラーページが読み込まれて以降のコマンドが失敗する不具合を修正しました ([Firefox bug 1878690](https://bugzil.la/1878690))。
- リダイレクトにより `network.responseCompleted` イベントが発生する順序を修正しました。元のリクエストの `responseCompleted` が、常にリダイレクトのイベントより前に発生するようになりました ([Firefox bug 1879580](https://bugzil.la/1879580))。
- 現在の Firefox の動作に合わせて、対象のコンテキストに読み込まれたページと同じドメインに "storage.setCookie" コマンドで追加された Cookie を分離しないための回避策を導入しました ([Firefox bug 1898222](https://bugzil.la/1898222))
- `input.setFiles` コマンドを、指定したファイルが存在しない場合に `UnsupportedOperation` エラーが発生するように更新しました ([Firefox bug 1887644](https://bugzil.la/1887644))。

#### Marionette

- WebDriver クラシック仕様に準拠して、WebDriver セッションの "HTTP フラグ" をサポートしました。これにより、WebDriver クラシック向けに作成したセッションを識別できます ([Firefox bug 1884090](https://bugzil.la/1884090))。
- WebDriver クラシックで Permissions API をサポートしました ([Firefox bug 1524074](https://bugzil.la/1524074))。

## アドオン開発者向けの変更点一覧

- 静的な宣言型ネットワークリクエストのルールセットのルールを {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} で有効化または無効化する機能、および静的ルールセットで無効化されたルールを {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} で取得する機能を追加しました ([Firefox bug 1810762](https://bugzil.la/1810762))。
- [`declarative_net_request` マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) で定義された静的な宣言型ネットワークリクエストのルールが、認識できないプロパティを含むがほかのプロパティが有効である場合に読み込まれるようになりました ([Firefox bug 1886608](https://bugzil.la/1886608))。
- {{WebExtAPIRef("proxy.settings")}} プロパティの `proxyDNS` の既定値が、SOCKS4 を使用する場合は `false`、SOCKS5 を使用する場合は `true` になりました。以前は、SOCKS4 および SOCKS5 で既定値が `false` でした ([Firefox bug 1741375](https://bugzil.la/1741375))。
- 非標準の Web API イベント `overflow` および `underflow` が非推奨になりました。Firefox 131 のリリースより前に、拡張機能の文書からこれらのイベントの使用方法を削除する予定です ([Firefox bug 1898445](https://bugzil.la/1898445))。
- ウェブページの実行環境でスクリプトを実行する機能をサポートしました。これは {{WebExtAPIRef("scripting")}} API で {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} の `MAIN` をサポートすること、{{WebExtAPIRef("contentScripts.register()")}} API に `world` を追加すること、[`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) マニフェストキーで `world` をサポートすることにより提供されます ([Firefox bug 1736575](https://bugzil.la/1736575))。
- {{WebExtAPIRef("scripting")}} API が、`about:blank`、`about:srcdoc`、`data:` URL によりサンドボックス化されたページへスクリプトや CSS を挿入できるようになりました。これは {{WebExtAPIRef("scripting.RegisteredContentScript")}} へ `matchOriginAsFallback` を導入することにより、{{WebExtAPIRef("scripting.executeScript")}}、{{WebExtAPIRef("scripting.insertCSS")}}、{{WebExtAPIRef("scripting.removeCSS")}} ([Firefox bug 1475831](https://bugzil.la/1475831) および {{WebExtAPIRef("scripting.registerContentScripts")}}、{{WebExtAPIRef("scripting.updateContentScripts")}} ([Firefox bug 1853411](https://bugzil.la/1853411) に実装しました。
- [`content_scripts` マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) で `match_origin_as_fallback`、および {{WebExtAPIRef("contentScripts.register")}} で `matchOriginAsFallback` をサポートしました。CSP や iframe サンドボックスの使用によりドキュメントのオリジンが不明瞭なときに、`about:`、`data:`、`blob:` ページへスクリプトを挿入可能にします ([Firefox bug 1475831](https://bugzil.la/1475831)、[Firefox bug 1896669](https://bugzil.la/1896669))。また、`match_origin_as_fallback` が `true` である場合に、`content_scripts` マニフェストキーで登録されたスクリプトを `blob:` ページに限り実行可能になりました ([Firefox bug 1897113](https://bugzil.la/1897113))。

## 実験的なウェブ機能

以下の機能は Firefox 128 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **既定および画像のリクエストで `image/jxl` MIME タイプを Accept ヘッダーに追加:** `image.jxl.enabled`.

  - [既定のリクエストと画像のリクエスト](/ja/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) で、HTTP [`Accept`](/ja/docs/Web/HTTP/Headers/Accept) ヘッダーで `image/jxl` MIME タイプのサポートを示すように設定できます ([Firefox bug 1711622](https://bugzil.la/1711622))。

- **Cookies Having Independent Partitioned State (CHIPS):** `network.cookie.CHIPS.enabled`。

  [CHIPS](/ja/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), または "partitioned cookies" は、開発者が `Set-Cookie` HTTP ヘッダーの [`partitioned`](/ja/docs/Web/HTTP/Headers/Set-Cookie#partitioned) ディレクティブを使用して、Cookie を分離された記憶領域へ保存できるようにします。これを設定すると Cookie がトップレベルごとに分離された記憶領域に保存されて、同じトップレベルサイトかサブドメインに限り読み取れるようになります。これはクロスサイトトラッキングを防ぎながら、サイトのさまざまなサブドメインにわたって埋め込み地図やチャットウィジェットの状態を維持するなどの、適切なサードパーティ Cookie の利用を可能にします ([Firefox bug 1898253](https://bugzil.la/1898253))。

## 過去のバージョン

{{Firefox_for_developers}}
