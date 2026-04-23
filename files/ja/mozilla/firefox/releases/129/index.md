---
title: Firefox 129 for developers
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: 10096e0e61277e85474989237545b705f1fa181b
---

このページでは、開発者に影響する Firefox 129 の変更点をまとめています。Firefox 129 は、米国時間 [2024 年 8 月 6 日](https://whattrainisitnow.com/release/?version=129) にリリースされました。

## ウェブ開発者向けの変更点一覧

### CSS

- [@starting-style](/ja/docs/Web/CSS/Reference/At-rules/@starting-style) CSS アットルールをサポートしました。これは要素が最初にスタイルの更新を受けたときに、トランジションさせたい要素に設定されたプロパティの開始値を定義できます。現在、`display: none;` からアニメーションすることはできません ([Firefox bug 1834876](https://bugzil.la/1834876)、[Firefox bug 1834877](https://bugzil.la/1834877))。
- {{CSSXRef("transition-behavior")}} CSS プロパティをサポートしました。これは値に [`allow-descrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) を設定することで、{{CSSXRef("display")}} や {{CSSXRef("overlay")}} のような離散的なプロパティをトランジション可能にするかを指定できます ([Firefox bug 1901645](https://bugzil.la/1901645))。
- `-webkit-font-feature-settings` を、標準の {{cssxref("font-feature-settings")}} プロパティの別名として実装しました ([Firefox bug 1595620](https://bugzil.la/1595620))。

### JavaScript

- {{jsxref("Float16Array")}} 型付き配列と、{{jsxref("DataView")}} から `Float16Array` の値を取得および設定する {{jsxref("DataView.prototype.getFloat16()")}} および {{jsxref("DataView.prototype.setFloat16()")}}、数値を 16 ビット値に丸めるために使用できる {{jsxref("Math.f16round()")}} 静的メソッドをサポートしました。新しい型は、特にメモリ消費量のために精度を犠牲にすることが合理的な用途で、GPU とデータを共有するのに便利です ([Firefox bug 1903329](https://bugzil.la/1903329))。
- 正規表現で、異なる [論理和の選択肢](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) の [名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) に同じ名前を使用できるようになりました。これは、論理和では 1 つの選択肢だけがマッチするため、複数の選択肢で宣言した名前が 1 つのキャプチャグループだけを参照できることから許可されました。個々の選択肢の内部、およびパターンの残りの部分全体では引き続き名前が一意であることが必要です ([Firefox bug 1903288](https://bugzil.la/1903288))。

### HTTP

- Windows 11、Linux、Android 10 以降で、HTTPS DNS レコードをオペレーティングシステムの DNS リゾルバーを使用して解決できるようになりました。これはユーザーが [DNS over HTTPS (DoH)](https://support.mozilla.org/ja/kb/dns-over-https-doh-faqs) をブラウザーで有効化していない場合でも、デバイスで有効化していれば DoH が使用されることを保証します。この機能で {{httpheader("Alt-Svc")}} ヘッダーを使用せずに HTTP/3 を使用したり、HTTPS DNS がある場合に HTTP 要求を自動的に HTTPS へアップグレードしたりできます。もっとも重要なことは、DoH がデバイスだけで有効化されておりブラウザーでは無効な場合でも [Encrypted Client Hello (ECH)](https://support.mozilla.org/ja/kb/faq-encrypted-client-hello) プライバシー機能を使用できることです ([Firefox bug 1906239](https://bugzil.la/1906239))。

### API

- 非推奨の {{domxref("TextEvent", "textInput")}} をサポートしました。このイベントに依存する古いライブラリーやフレームワークを使用するウェブアプリが動作します。
  [`beforeinput` イベント](/ja/docs/Web/API/Element/beforeinput_event) が `textInput` を置き換えており、新しいアプリケーションはこちらを使用するべきです ([Firefox bug 1901923](https://bugzil.la/1901923))。
- 既定の `.toJSON()` メソッドである {{domxref("GeolocationCoordinates.toJSON()")}} および {{domxref("GeolocationPosition.toJSON()")}} をサポートしました。`GeolocationCoordinates` および `GeolocationPosition` オブジェクトを {{jsxref("JSON.stringify()")}} でシリアライズできます ([Firefox bug 1890706](https://bugzil.la/1890706))。
- {{domxref("CSSPageDescriptors")}} をサポートして、現在の仕様書に合わせて {{domxref("CSSStyleDeclaration")}} に代わり、{{domxref("CSSPageRule.style")}} の型として使用するようになりました。
  これは、`CSSPageDescriptors` がすべてのプロパティではなく `@page` に関連するプロパティだけを公開することを保証します。また、CSS `@page` アットルールでページの [`size`](/ja/docs/Web/CSS/Reference/At-rules/@page#size) の設定が `CSSPageRule.style` に反映されない問題を解決します。
  ([Firefox bug 1890842](https://bugzil.la/1890842)、[Firefox bug 1867106](https://bugzil.la/1867106))。
- {{domxref('MediaCapabilities.decodingInfo()')}} が特定の _暗号化されたメディア_ 構成のデコード情報も、暗号化されていないメディアと同様に取得できるようになりました。構成をサポートしているかや、コンテンツがスムーズに再生されて電力効率が良いかをアプリケーションが事前に知ることができます。この変更ではメディアを暗号化するために使用する鍵システムのプロパティを定義する `keySystemConfiguration` プロパティをメソッドの `configuration` 引数へ新たに追加しました。また鍵の作成や再生するコンテンツのデコードに使用できる {{domxref('MediaKeySystemAccess')}} オブジェクトを示す `keySystemAccess` プロパティを返されるオブジェクトへ新たに追加しました ([Firefox bug 1898344](https://bugzil.la/1898344))。
- Firefox は同期 {{domxref("XMLHttpRequest")}} のイベントを、任意の進行中の非同期 `XMLHttpRequest` のイベントより先に発生させるようになりました。これは長期に渡っていた、他のブラウザーとの動作の違いを修正します。これは一部のサイトの問題を修正する一方で、同期 `XMLHttpRequest` の古い "ノンブロッキング" 動作を想定したサイトでパフォーマンスの劣化が発生する可能性があります。あなたのウェブサイトでこの変更により問題が解消するはずですが、まだ関連する不具合がみられる場合は [バグを報告](https://bugzil.la/) してください ([Firefox bug 697151](https://bugzil.la/697151))。
- [Ed25519](/ja/docs/Web/API/SubtleCrypto/sign#ed25519) デジタル署名アルゴリズムを [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) でサポートして、{{domxref("SubtleCrypto")}} の {{domxref("SubtleCrypto.sign()", "sign()")}}、{{domxref("SubtleCrypto.verify()", "verify()")}}、{{domxref("SubtleCrypto.generateKey()", "generateKey()")}}、{{domxref("SubtleCrypto.importKey()", "importKey()")}}、{{domxref("SubtleCrypto.exportKey()", "exportKey()")}} メソッドで使用可能になりました ([Firefox bug 1804788](https://bugzil.la/1804788))。
- {{domxref("PerformanceResourceTiming")}} インターフェイスの {{domxref("PerformanceResourceTiming.contentType","contentType")}} および {{domxref("PerformanceResourceTiming.responseStatus","responseStatus")}} プロパティをサポートしました。それぞれ、取得したリソースのコンテンツタイプと、リソースを取得したときに返された HTTP レスポンスステータスコードを示します ([Firefox bug 1800443](https://bugzil.la/1800443)、[Firefox bug 1796785](https://bugzil.la/1796785))。
- {{domxref("RTCDTMFSender.canInsertDTMF")}} プロパティをサポートしました。これは WebRTC の送信側が、送信コネクションに DTMF トーンを挿入できるかを確認できます。サポートしている場合は、{{domxref("RTCDTMFSender.insertDTMF()")}} を使用して DTMF トーンを挿入できます ([Firefox bug 1623193](https://bugzil.la/1623193))。

#### 廃止

- {{domxref('Navigator.vibrate()')}} メソッドを削除しました ([Firefox bug 1653318](https://bugzil.la/1653318)、[Firefox bug 1900037](https://bugzil.la/1900037))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### 廃止

- CDP (Chrome DevTools Protocol) をデフォルトで無効にしました。設定項目 `remote.active-protocols` で再び有効化できます。詳しくは [ブログ記事](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/) で知ることができます ([Firefox bug 1882089](https://bugzil.la/1882089))。

#### WebDriver BiDi

- グローバルまたは一連のトップレベル閲覧コンテキストでネットワークキャッシュを使用しないようにブラウザーを設定できる `network.setCacheBehavior` コマンドをサポートしました ([Firefox bug 1901032](https://bugzil.la/1901032)、[Firefox bug 1906100](https://bugzil.la/1906100))。
- ほかのユーザープロンプトと同じ方法で制御できる、`beforeUnload` タイプのプロンプトをサポートしました ([Firefox bug 1824220](https://bugzil.la/1824220))。
- モック応答を返すことを可能にする引数 `body` など、`beforeRequestSent` 段階で使用する `network.provideResponse` コマンドのすべての引数をサポートしました ([Firefox bug 1853882](https://bugzil.la/1853882))。
- `browsingContext.userPromptOpened` が、イベントを発生させたプロンプト向けに設定したユーザープロンプトハンドラーの情報を持つ `handler` フィールドを含むようになりました ([Firefox bug 1904822](https://bugzil.la/1904822))。
- `BrowsingContextInfo` 型が、"オープナー" 閲覧コンテキストのコンテキスト ID を表す `originalOpener` フィールドを提供するようになりました。これはリンク (`rel=noopener` である場合も含む) や `window.open` などを使用して作成された新しいコンテキストのインスタンスに設定されます。新しい閲覧コンテキストに関係するオープナーがない場合は null が設定されます ([Firefox bug 1898004](https://bugzil.la/1898004))。
- data URL の要求でネットワークイベント (`beforeRequestSent`、`responseStarted`、`responseCompleted`) が生成されるようになりました。Firefox 129 では、ナビゲーション要求に限り列挙されます ([Firefox bug 1805176](https://bugzil.la/1805176))。
- `browsingContext.close` で、コマンドでコンテキストを閉じるときに "beforeunload" プロンプトを避けることができる引数 `promptUnload` をサポートしました ([Firefox bug 1862380](https://bugzil.la/1862380))。
- `network.continueRequest` で、同一のハンドラーに複数の値を設定できない不具合を修正しました ([Firefox bug 1904379](https://bugzil.la/1904379))
- `unhandledPromptBehavior` 機能を BiDi だけのセッションで使用できない不具合を修正しました ([Firefox bug 1907935](https://bugzil.la/1907935))。
- `session.end` および `browser.close` が、Marionette クライアントが接続されていないときに突然失敗することがある不具合を修正しました ([Firefox bug 1890091](https://bugzil.la/1890091))。
- `browsingContext.navigate` が、"beforeunload" で同一ドキュメントのナビゲーションを開始した場合に解決できないことがある不具合を修正しました ([Firefox bug 1879163](https://bugzil.la/1879163))。
- トップレベルの閲覧コンテキストを閉じるときにすべての "beforeunload" プロンプトを破棄するように、`browser.close` コマンドを改良しました ([Firefox bug 1873196](https://bugzil.la/1873196))。
- `browsingContext.userPromptOpened` イベントで、突然 `defaultValue` フィールドが失われる不具合を修正しました ([Firefox bug 1859814](https://bugzil.la/1859814))。
- 認証フローの間に `network.responseCompleted` イベントが仕様書と比べて過剰に発生する問題を修正しました。HTTP 認証フロー全体に対して `responseCompleted` (または `fetchError`) イベントが 1 回だけ発生することが想定されています ([Firefox bug 1906106](https://bugzil.la/1906106))
- すべての "beforeunload" プロンプトをスキップするように `browser.removeUserContext` コマンドを改良しました ([Firefox bug 1876062](https://bugzil.la/1876062))。

## 過去のバージョン

{{Firefox_for_developers}}
