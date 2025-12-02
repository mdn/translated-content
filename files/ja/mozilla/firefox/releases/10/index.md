---
title: Firefox 10 for developers
slug: Mozilla/Firefox/Releases/10
---

Gecko 10.0 を搭載した Firefox 10 は米国時間 2012 年 1 月 31 日にリリースされました。このページでは、開発者に影響する Firefox 10 の変更点をまとめています。

> [!NOTE]
> Firefox 10 は、2 桁の数値で表記される最初のリリースです。これにより、一部の UserAgent 検出スクリプトで問題が発生するおそれがあります。そのようなスクリプトや、ページに埋め込まれているサードパーティのソフトウェア (ライブラリーなど) で UserAgent 検出を行っているものの確認を行うようにしてください。この点に関する詳細情報は、hack.mozilla.org の記事 [Firefox goes 2-digit article on](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/) をご覧ください。

## ウェブ開発者向けの変更点一覧

### HTML

- 方向が異なるテキストの部分を分離することを可能にする、HTML5 の {{ HTMLElement("bdi") }} (bi-directional isolation) 要素が実装されました。これは、既知の方向のテキスト内に未知の方向のテキスト (例えばデータベースから取り出したテキストで、方向が異なる可能性がある) を表示する場合に特に有用です。
- [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) 属性に、ページ先頭へのリンクを作成するための断片 "top" を指定可能になりました。これは過去に動作していてその後一時的に削除されていましたが、HTML5 仕様書との互換性のため再び動作するようになりました。例: `<a href="#top">Return to top of page</a>`.

### JavaScript

- `WeakMap.set()` メソッドの戻り値はそれ自身から `undefined` に替わりました。
- Firefox 7 以降で正規表現のハンドリングに関する不具合がありましたが、修正されました。詳しくは [Firefox バグ 683838](https://bugzil.la/683838) をご覧ください。
- [ECMAScript 5 strict mode](/ja/docs/Web/JavaScript/Reference/Strict_mode) (すなわち、`"use strict;"` 以降) では、[E4X](/ja/docs/E4X) の構文を使用できなくなりました。

### DOM

#### DOM3 Events

- DOM イベントの [`event.stopImmediatePropagation`](/ja/docs/Web/API/Event/stopImmediatePropagation) メソッドが実装されました。
- マウスイベントの `mouseenter` および `mouseleave` が実装されました。

#### DOM4

- DOM4 仕様書で非推奨とされたため、{{ domxref("document.xmlVersion") }} 属性 (読み取りのみ可能で、設定は不可) が削除されました。{{ domxref("document.xmlVersion") }} の記事では、このプロパティを使用せずに ドキュメントが HTML か XML かを判断する方法を提案しています。
- DOM4 仕様書で非推奨とされたため、{{ domxref("document.xmlStandalone") }} 属性が削除されました。
- DOM4 仕様書で非推奨とされたため、{{ domxref("document.xmlEncoding") }} 属性が削除されました。
- DOM4 仕様書で非推奨とされたため、{{ domxref("text.isElementContentWhiteSpace") }} 属性が削除されました。
- DOM4 仕様書で非推奨とされたため、{{ domxref("text.replaceWholeText") }} メソッドが削除されました。
- DOM4 仕様書で非推奨とされたため、{{ domxref("node.isSameNode") }} メソッドが削除されました。`node1.isSameNode(node2)` に代わり、`===` 演算子を使用できます。例: `node1 === node2`

#### Page Visibility API

- [Page Visibility API](/ja/docs/Web/API/Page_Visibility_API) が実装されました (接頭辞が付加されています): `document.mozHidden`、`document.mozVisibilityState` が利用可能であり、また状態が変更されると `mozvisibilitychanged` イベントが送信されます。

#### Full Screen API

- {{ domxref("document.mozFullScreenEnabled") }} のサポートが追加されました。
- {{ cssxref(":-moz-full-screen-ancestor") }} プロパティが追加されました。これはフルスクリーンモードになっている要素の祖先要素に対してマッチします。

#### Battery API

- {{ domxref("window.navigator.mozBattery") }} の実験的なサポートが追加されました (設定 `dom.battery.enabled` を `true` にすることで有効になります。また、Firefox 11 からはデフォルトで有効になる予定です)。

#### Canvas

- [`createPattern()`](/ja/docs/DOM/CanvasRenderingContext2D#createPattern%28%29) メソッドは、サイズが 0 の canvas が指定された場合に例外が発生するようになりました。
- 仕様書に準拠するため、[`putImageData()`](/ja/docs/DOM/CanvasRenderingContext2D#putImageData%28%29) の数値引数のいずれかに有限値でない値を与えたときに例外が発生するのではなく、値を無視するようになりました。

#### WebGL

- Firefox 10 で、[`OES_standard_derivatives`](https://www.khronos.org/registry/webgl/extensions/OES_standard_derivatives/) 拡張がサポートされました。
- 完全な開発環境上で、最低限のサポートにとどまるデバイスとの WebGL コードの互換性を確認するために役立つ [新たな設定項目](/ja/docs/Web/API/WebGL_API#webgl_debugging_and_testing) が追加されました。

#### Web Workers

- [Workers](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) 内で `XMLHttpRequest.responseType` 属性および `XMLHttpRequest.response` 属性が利用可能になりました。
- [`Worker()`](</ja/docs/DOM/Worker#Worker()> "DOM/Worker#Worker()") コンストラクターが [data URIs](/ja/docs/Web/URI/Reference/Schemes/data) を受け入れるようになりました。

#### IndexedDB

IndexedDB を最新のドラフト仕様に更新するための大きな進展がありました。この努力は Firefox 11 でも続くでしょう。

- [`IDBIndex.count()`](/ja/docs/Web/API/IDBIndex#count) メソッドおよび [`IDBObjectStore.count()`](/ja/docs/Web/API/IDBObjectStore#count) メソッドが追加されました。
- [`IDBCursor.advance()`](/ja/docs/Web/API/IDBCursor#advance) メソッドが追加されました。
- [`IDBObjectStore.createIndex()`](/ja/docs/Web/API/IDBObjectStore#createindex) および [`IDBDatabase.createObjectStore()`](/ja/docs/Web/API/IDBDatabase#createobjectstore) で未知のオプション引数が渡されたとき、Gecko は例外を発生させるのではなくそれを無視するようになりました。
- [`IDBTransaction.abort()`](/ja/docs/IndexedDB/IDBTransaction#abort%28%29) が呼び出されると、待機状態にあるすべての [`IDBRequest`](/ja/docs/Web/API/IDBRequest) は `errorCode` を `ABORT_ERROR` に設定します。
- [`IDBObjectStore.delete()`](</ja/docs/IndexedDB/IDBObjectStore#delete()> "IndexedDB/IDBObjectStore#delete()") メソッドおよび [`IDBCursor.delete()`](</ja/docs/IndexedDB/IDBCursor#delete()> "IndexedDB/IDBCursor#delete()") メソッドは、戻り値となる [`IDBRequest`](/ja/docs/Web/API/IDBRequest) の `result` 属性の値を `undefined` にするようになりました。
- 最新の仕様書で削除されたため、[`IDBDatabase.setVersion()`](</ja/docs/IndexedDB/IDBDatabase#setVersion()> "IndexedDB/IDBDatabase#setVersion()") メソッドは削除されました。データベースのバージョンは、更新された [`IDBFactory.open()`](/ja/docs/Web/API/IDBFactory#open) メソッドで渡すことができ、`onupgradeneeded` コールバックでデータベースのスキーマの更新が可能になります。なお、バージョンの型は `DOMString` から `unsigned long long` に替わりました。また、[`IDBVersionChangeRequest`](/ja/docs/IndexedDB/IDBVersionChangeRequest) インターフェイスは削除され、新たな [`IDBOpenDBRequest`](/ja/docs/Web/API/IDBOpenDBRequest) インターフェイスに置き換えられました。
- [`IDBFactory.deleteDatabase()`](/ja/docs/IndexedDB/IDBFactory#deleteDatabase%28%29) メソッドが追加されました。

#### その他の変更点

- SVG を含む文字列が与えられたとき、適切な MIME タイプ `image/svg+xml` が渡された場合は [`DOMParser` が `SVGDocument` を生成する](/ja/docs/Web/API/DOMParser#parsing_a_svg_document)ようになりました。
- 従来 {{ domxref("element.setAttribute()") }} が整数値の構文解析を行うときは、数値ではない文字列が含まれる場合 (例えば "42foo") にエラーを報告していました。これが仕様書へ合致させるために、数値 42 へ正しく切り詰めるようになりました。
- ESC キーで {{ domxref("window.oninput") }} ハンドラーが誤って呼び出されるという、間違った結果にならないようになりました。
- 従来実装されていたものの実際にはアクセスする方法がない {{ domxref("NameList") }} インターフェイスは削除されました。
- {{ domxref("document.createProcessingInstruction()") }} メソッドが HTML ドキュメントでも、XML ドキュメントの場合と同様に動作するようになりました。{{ domxref("ProcessingInstruction") }} ノードは現在も XML ドキュメントでのみサポートされていますが、ノードはドキュメントをまたいで移動させられますので、HTML ドキュメントでも同様にノードを作成することに役立ちます。
- {{ domxref("XMLHttpRequest") }} のプロパティ `responseType` の値として [Firefox 9 で導入した](/ja/docs/Mozilla/Firefox/Releases/9#dom) "`moz-json`" は、最新のドラフト仕様への更新を行い接頭辞を削除しました。[Firefox バグ 707142#c13](https://bugzil.la/707142#c13) をご覧ください。

### CSS

- CSS 3D Transforms がサポートされました。これには {{ cssxref("transform-style") }}、{{ cssxref("perspective") }}、{{ cssxref("perspective-origin") }}、{{ cssxref("backface-visibility") }} の各プロパティ、また同様に {{ cssxref("transform") }} および {{ cssxref("transform-function") }} プロパティによる 3D transform 機能が含まれます。詳しくは [Using CSS transforms](/ja/docs/Web/CSS/Guides/Transforms/Using#3d_specific_css_properties) をご覧ください。
- {{ cssxref("unicode-bidi") }} CSS プロパティへ、新たに 2 つの値 `-moz-isolation` および `-moz-plaintext` が追加されました。値 `-moz-isolation` は、要素がその環境から受けるテキストの方向の見解から切り離すことで、異なる方向のテキストであることを示すことができます。`unicode-bidi:-moz-isolation` を指定した要素は、 {{ HTMLElement("bdi") }} 要素のように動作します。値 `-moz-plaintext` は、テキストの方向の決定に CSS の {{ cssxref("direction") }} プロパティではなく Unicode のヒューリスティックな方法を用いることを示します。
- CSS の {{ cssxref("linear-gradient") }} プロパティおよび {{ cssxref("repeating-linear-gradient") }} プロパティは、新たに `to` 構文と _magic corner_ アルゴリズムをサポートするよう更新されました。これにより、グラデーションが描画されたボックスの隅へ精密に色を配置することができます。
- {{ cssxref("text-overflow") }} プロパティに処理法が一つだけ指定されている場合に、ボックスの両側へオーバーフローする場合の `text-overflow` の扱いが [正しくなりました](/ja/docs/Web/CSS/Reference/Properties/text-overflow#gecko_notes)。
- ポジショニングされた {{ HTMLElement("table") }} 要素内部での {{ cssxref("position") }} プロパティの扱いが [修正されました](/ja/docs/Web/CSS/Reference/Properties/position#gecko_notes)。**この変更はページのレイアウトに影響を与えますが、CSS 仕様書や他のブラウザーに従うことになりますので、レイアウトの修正は容易でしょう。**
- {{ HTMLElement("table") }} 要素のマージンの相殺が、CSS 仕様書に合致するようになりました。以前は table 要素のマージンは隣接する要素のマージンと相殺されなかったため、正しくないレイアウトになっていました。**この変更はページのレイアウトに影響を与えますが、CSS 仕様書や他のブラウザーに従うことになりますので、レイアウトの修正は容易でしょう。**

### SVG

- 最新の SVG 1.1 仕様書へ準拠するため、{{ SVGElement("mask") }} 要素は sRGB および linearRGB をサポートするように更新されました。デフォルトは sRGB です。

### ネットワーク

- HTTP ヘッダー `Accept-Charset` は、HTTP 要求時に送信されなくなりました。このヘッダーがない場合、サーバーは UTF-8 での送信として応答するべきです。

### 開発ツール

- {{ domxref("console") }} オブジェクトへ新たに 2 つのメソッド、{{ domxref("console.time()") }} および {{ domxref("console.timeEnd()") }} が追加されました。これらはページにタイマーをセットするために用いられます。
- コンテンツの背後にある HTML や CSS の調査および操作を行うすばらしい方法を提供する、[調査ツール](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) が新たに追加されました。

## Mozilla 開発者とアドオン開発者向けの変更点

アドオンを Firefox 10 へ対応させる際に発生すると思われる問題の概要に関しては、[Updating add-ons for Firefox 10](/ja/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10) をご覧ください。

> [!NOTE]
> 古い [`PRBool`](/ja/docs/PRBool) データ形式は退役されました。これを参照する文書では、どこでも代わりに標準 C++ `bool` 形式を使用します。現時点では文書が更新されていませんが、将来更新されますので留意してください。

### Manifests

- インストールマニフェストに [`<em:strictCompatibility>`](/ja/docs/Install_Manifests#strictCompatibility) のサポートが追加されました。これによりアドオンの作者が、拡張機能で最大バージョンのチェックを有効にすることができます。`true` に設定すると、アプリケーションのバージョンが `<em:maxVersion>` を上回っている場合にアドオンが無効になります。Firefox 10 はデフォルトで、指定された最大バージョンに関わらずアドオンは互換性があるものとします。このフラグは、その設定を上書きします。Firefox の更新により動作しなくなる可能性があることをアドオンで行っている場合はこれを設定するべきですが、アドオンにバイナリーコンポーネントが含まれている場合は常に厳密なチェックが行われますのでこれを**設定しない**ようにしてください (バイナリーコンポーネントは Firefox のメジャーリリースごとに、必ず再コンパイルが必要です)。
- 以前の動作、つまりマニフェストの `strictCompatibility` の値に関わらずすべてのアドオンで厳密な互換性チェックを行う方式に戻したい場合は、設定項目 `extensions.strictCompatibility` を `true` にしてください。

### XUL

- [chrome.manifest](/ja/docs/Chrome_Registration) ファイルを用いるブートストラップ型アドオンは、マニフェストファイルが自動的に登録されるようになりました。詳しくは [Adding user interface with a chrome.manifest](/ja/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) をご覧ください。

### XPConnect

- [`Components.utils`](/ja/docs/Components.utils) に、デバッグ用に用意された情報へのアクセスを可能にするプロパティとメソッドがいくつか追加されました。

### インターフェイスの変更

- `mozISpellCheckingEngine` インターフェイスおよび `nsIEditorSpellCheck` インターフェイスは、再起動の不要なアドオンがスペルチェッカに辞書を追加できるように更新されました。**注: これを行う方法に関して [ドキュメントの更新](/ja/docs/Mozilla/Firefox/Releases/3/Using_an_external_spell_checker) が必要。**
- `nsIBrowserHistory.lastPageVisited` 属性は削除されました。
- `nsIDocumentViewer` インターフェイスは `nsIContentViewer` に統合されました。
- `nsIURIFixup` インターフェイスに、コンバートする際にプラットフォームの文字コードではなく UTF-8 を使用することを示す `FIXUP_FLAG_USE_UTF8` フラグが追加されました。

### プラグインの変更

- 新しい変数 [`NPNVdocumentOrigin`](/ja/docs/Gecko_Plugin_API_Reference/Plug-in_Development_Overview#Working_with_URLs) を追加しました。これはドキュメントの生成元を返すもので、{{ domxref("window.location") }} よりセキュアです。

### ビルドシステムの変更

- 実際はビルドを成功できないようにしてしまう、`--disable-rdf` ビルドオプションが削除されました。RDF サポートの完全な削除を可能にする作業は進行中ですが、現在の XUL ではこの機能が必須です。RDF を必要とする最後の痕跡を削除する作業の進捗については [Firefox バグ 559505](https://bugzil.la/559505) をご覧ください。
- `--disable-smil` ビルドオプションは削除されました。

## 関連情報

{{Firefox_for_developers('9')}}
