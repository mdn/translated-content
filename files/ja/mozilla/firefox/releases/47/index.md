---
title: Firefox 47 for developers
slug: Mozilla/Firefox/Releases/47
---

Firefox 47 は、米国時間 2016 年 6 月 7 日にリリースされました。このページでは、開発者に影響する Firefox 47 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [レスポンシブデザインモード](/ja/docs/Tools/Responsive_Design_Mode) で [ユーザーエージェントをスプーフィング](/ja/docs/Browser_detection_using_the_user_agent) する
- メモリーツールの [Retaining paths パネル](/ja/docs/Tools/Memory/Dominators_view#Retaining_Paths_panel)
- [Service Worker](/ja/docs/Web/API/ServiceWorker) と [Push API](/ja/docs/Web/API/Push_API) のデバッグ

  - Worker 用の [about:debugging](/ja/docs/Tools/about:debugging) ダッシュボード
  - キャッシュされたリクエストを [ネットワークモニター](/ja/docs/Tools/Network_Monitor) で表示
  - [キャッシュストレージ](/ja/docs/Web/API/Cache) を [ストレージインスペクター](/ja/docs/Tools/Storage_Inspector) でサポート

- [ストレージインスペクター](/ja/docs/Tools/Storage_Inspector) で項目をフィルターする機能
- [コンソール](/ja/docs/Tools/Web_Console) が不完全なコマンド入力を検出して、自動的に複数行モードに切り替える
- [デバッガー](/ja/docs/Tools/Debugger) でブレークポイントのスタイルを更新
- ブラウザーやアドオンのデバッグを支援するため、[ブラウザーツールボックス](/ja/docs/Tools/Browser_Toolbox) の使用中はパネルを自動的に閉じないようにする
- [フォントインスペクター](/ja/docs/Tools/Page_Inspector/UI_Tour#Fonts_view) をデフォルトで無効化 ({{bug(1247723)}})
- [3D ビュー](/ja/docs/Tools/3D_View) を削除
- 開発ツールのテーマを更新
- フォントパネルを無効化 ({{bug(1247723)}})

### HTML

_変更なし。_

### CSS

- {{cssxref("::backdrop")}} 疑似要素をサポートしました ({{bug(1064843)}})。
- [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors) で大文字・小文字を区別しないことを示す修飾子 `i` (例: `[foo=bar i]`) を実装しました ({{bug(888190)}})。
- CSS Mask Image プロパティを実験的に実装しました。現在は Nightly 版の Firefox のみで使用できます。{{cssxref("mask-repeat")}}、{{cssxref("mask-position")}}、{{cssxref("mask-size")}}、およびショートハンドの {{cssxref("mask")}} を使用できます ({{bug(686281)}})。
- HTML 要素において、{{cssxref("clip-path")}} プロパティで `polygon()`, `ellipse()`, `circle()` を実験的にサポートしました ([inset()](https://bugzilla.mozilla.org/show_bug.cgi?id=1246762) および [path()](https://bugzilla.mozilla.org/show_bug.cgi?id=1246764) はサポートしていません)。設定項目 `layout.css.clip-path-shapes.enabled` で制御しており、既定値は `false` です ({{bug(1075457)}})。値の変更は (従ってアニメーションも) 未サポートです。
- CSS Grid の実験的な実装を更新しました:

  - グリッドコンテナーで、{{cssxref("align-content")}}`: normal` は `stretch` と同じ動作になりました ({{bug(1237754)}})。
  - {{cssxref('grid')}}、{{cssxref('grid-template')}}、{{cssxref('grid-gap')}} プロパティで、列と行の値の順序を入れ替えました ({{bug(1251999)}})。

- {{cssxref("@media/display-mode", "display-mode")}} メディア特性をサポートしました ({{bug("1104916")}})。
- {{cssxref("text-align")}} および {{cssxref("text-align-last")}} の値 `true` を、`unsafe` に改名しました ({{bug("1250342")}})。

### JavaScript

- ES2017 の {{jsxref("Object.values()")}} および {{jsxref("Object.entries()")}} メソッドを実装しました ({{bug(1232639)}})。
- 非推奨の [古い Proxy API](/ja/docs/Archive/Web/Old_Proxy_API) (`Proxy.create` および `Proxy.createFunction`) は、コンソールで警告を表示するようになりました。また、将来のバージョンで削除する予定です。代わりに標準の {{jsxref("Proxy")}} オブジェクトを使用してください ({{bug(892903)}})。
- 非推奨かつ非標準である、`String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} の `flags` 引数をリリース版以外の以外のビルドで廃止しました ({{bug(1245801)}})。
- 新たな ES2016 仕様に従い、[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) 用の {{jsxref("Proxy")}} [enumerate](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/enumerate) トラップを削除しました ({{bug(1246318)}})。
- ECMAScript 仕様に従い、{{jsxref("Array.prototype.indexOf()")}} および {{jsxref("Array.prototype.lastIndexOf()")}} メソッド (および {{jsxref("TypedArray")}} の同等メソッド) を、`-0` を返さないように更新しました ({{bug(1242043)}})。

### インターフェイス/API/DOM

#### DOM & HTML DOM

- {{domxref("Document.scrollingElement")}} プロパティを実装しました。設定項目 `dom.document.scrollingElement.enabled` で制御しており、既定値は `false` です ({{bug(1153322)}})。

#### WebGL

_変更なし。_

#### IndexedDB

- {{domxref("IDBKeyRange.includes()")}} メソッドを実装しました ({{bug("1251498")}})。

#### Service Worker と関連 API

- {{domxref("Request.Request()")}} コンストラクターで、init オプションとして referrer を受け入れるようになりました ({{bug(1251448)}})。
- {{domxref("Request.referrerPolicy")}} プロパティをサポートしました ({{bug(1251872)}})。
- [Service workers](/ja/docs/Web/API/Service_Worker_API) および [Push](/ja/docs/Web/API/Push_API) を、[Firefox 45 Extended Support Release](https://www.mozilla.org/ja/firefox/organizations/) (ESR) で無効にしました ({{bug(1232029)}})。

#### WebRTC

- {{domxref("RTCIceServer")}} 辞書のサポートを、{{domxref("RTCIceServer.credentialType", "credentialType")}} プロパティをサポートすることにより WebRTC 1.0 仕様に合わせて更新しました。このプロパティは、クレデンシャルがパスワードかトークンかを指定する文字列です。現在、Firefox は `"password"` のみサポートしています。

#### 新規 API

_変更なし。_

#### その他

- {{domxref("Cache.add()")}} および {{domxref("Cache.addAll()")}} で、レスポンスステータスが `200` 番台ではない場合に `TypeError` 例外が発生するようになりました ({{bug(1244764)}})。
- [アプリのインストールと管理の API](/ja/docs/Mozilla/Firefox_OS/API/App_installation_and_management_APIs) (`navigator.mozApps.*`) を、Firefox OS 以外のプラットフォームでは公開しないようになりました ({{bug("1238576")}})。
- [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) のメソッドで、RSA-PSS 暗号化アルゴリズムが使用可能になりました ({{bug (1191936)}})。
- [Permissions API](/ja/docs/Web/API/Permissions_API) の {{domxref("Permissions.revoke()")}} メソッドを追加しました ({{bug("1197461")}})。
- HTML を使用してウェブコンテンツを表示するフレームを作成できるようにするため {{htmlelement("iframe")}} の機能を拡張する、[Browser API](/ja/docs/Web/API/Browser_API) (以前は Firefox OS のみサポートしていました) が、デスクトップ版の chrome コードでも使用可能になりました ({{bug(1238160)}})。
- [Notification API](/ja/docs/Web/API/notification) の {{domxref("Notification.requestPermission()","requestPermission()")}} メソッドを、コールバックベースの構文から Promise ベースの構文に更新しました ({{bug(1241278)}})。
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API) を最新の仕様に合わせて更新して、接頭辞を削除しました。一部のメソッドは改名および大文字・小文字を変更しました ({{bug(743198)}})。これは設定項目 `full-screen-api.unprefix.enabled` で制御されており、デフォルトで無効化していることに注意してください ({{bug(1268749)}})。

### Audio/Video

- u-law 圧縮の WAV ファイルが再生可能になりました ({{bug(851530)}})。
- Google Inc. が提供する [Widevine](https://www.widevine.com/) Content Decryption Module が、Windows Vista 以降および Mac OS X で MP4 との組み合わせにより [Encrypted Media Extensions API](/ja/docs/Web/API/Encrypted_Media_Extensions_API) で使用可能になりました (MP4 限定。EME と WebM のサポートについては {{bug(1257716)}} をご覧ください)。Silverlight から移行することができます ({{bug(1265270)}})。

## HTTP

- {{HTTPHeader("Accept")}} ヘッダーの、画像用の既定値を `image/png,image/*;q=0.8,*/*;q=0.5` から `*/*` に変更しました ({{bug(1249474)}})。

## ネットワーク

_変更なし。_

## セキュリティ

- `view-source:` プロトコルの URL をウェブページから使用したときに、[ソース表示](/ja/docs/Tools/View_source) ツールを開かないようになりました ({{bug(1172165)}})。
- Firefox の [click-to-activate プラグインのホワイトリスト](https://blog.mozilla.org/futurereleases/2013/09/24/plugin-activation-in-firefox/) を削除しました。アクティブにするためクリックする必要がないプラグインは、Flash だけです。 ({{bug(1263630)}})。

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェイス

- アドオン向けに、JavaScript で CSS トークナイザーが使用可能になりました ({{bug(1152033)}})。

### FUEL

Firefox 3 で導入された [FUEL](/ja/docs/Mozilla/Tech/Toolkit_API/FUEL) JavaScript ライブラリーを**削除しました**。このライブラリーはアドオンの開発を支援するように設計されましたが、[Add-on SDK](/ja/docs/Mozilla/Add-ons/SDK) の導入や [WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) のサポートにより、役に立つものではなくなりました ({{bug(1090880)}})。

### XUL

_変更なし。_

### JavaScript コードモジュール

_変更なし。_

### XPCOM

_変更なし。_

### その他

_変更なし。_

## 関連情報

- [Firefox 47 リリースノート](https://www.mozilla.jp/firefox/47.0/releasenotes/)
- [Firefox 47 アドオン互換性情報](https://dev.mozilla.jp/2016/04/firefox-47-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers(46)}}
