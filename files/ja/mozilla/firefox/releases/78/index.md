---
title: Firefox 78 for developers
slug: Mozilla/Firefox/Releases/78
l10n:
  sourceCommit: e088b8a1e80e78da560675a4b05e91737d85a4cf
---

このページでは、開発者に影響する Firefox 78 の変更点をまとめています。Firefox 78 は、 2020 年 6 月 30 日にリリースされました。

Mozilla hacks の記事「[New in Firefox 78: DevTools improvements, new regex engine, and abundant web platform updates](https://hacks.mozilla.org/2020/06/new-in-firefox-78/)」もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### デバッガー

- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) パネルで、リモート端末がアクセスする URL を変更できるようになりました ([Firefox バグ 1617237](https://bugzil.la/1617237))。
- [デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html) のメニュー項目 "**JavaScript を無効化**" が現在のタブにのみ作用するようになりました。また、開発ツールを閉じるとリセットされるようになりました ([Firefox バグ 1640318](https://bugzil.la/1640318))。
- [スコープペイン](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#scopes) で **マッピング** を有効にすると、[https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) でソースマップを適用したコードの変数名と元の変数名をマッピングできます ([Firefox バグ 1536857](https://bugzil.la/1536857))。

#### ネットワークモニター

- [ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) で、要求リストの表の列の境界をどこでもドラッグして、リサイズできるようになりました ([Firefox バグ 1618409](https://bugzil.la/1618409))。
- ネットワークモニターの [要求の詳細パネル](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) の UX を改良しました ([Firefox バグ 1631302](https://bugzil.la/1631302), [Firefox バグ 1631295](https://bugzil.la/1631295))。
- リクエストがブロックされたとき、[リクエストリスト](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html) でアドオン、CSP、CORS、強化型トラッキング防止などの理由を表示するようになりました ([Firefox バグ 1555057](https://bugzil.la/1555057), [Firefox バグ 1445637](https://bugzil.la/1445637), [Firefox バグ 1556451](https://bugzil.la/1556451))。

#### その他のツール

- [アクセシビリティ](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) インスペクターがベータ版から脱しました。このツールを使用して、サイトのさまざまなアクセシビリティの問題を確認できます ([Firefox バグ 1602075](https://bugzil.la/1602075))。
- キャッチされていない promise エラーについて、名前やスタックを含む詳細情報をコンソールに表示するようになりました ([Firefox バグ 1636590](https://bugzil.la/1636590))。

### CSS

- {{CSSxRef(":is", ":is()")}} および {{CSSxRef(":where", ":where()")}} 擬似クラスをデフォルトで有効にしました ([Firefox バグ 1632646](https://bugzil.la/1632646))。
- {{CSSxRef(":read-only")}} および {{CSSxRef(":read-write")}} 擬似クラスを、接頭辞なしでサポートしました ([Firefox バグ 312971](https://bugzil.la/312971))。
  - また `:read-write` のスタイルが、無効化した [`<input>`](/ja/docs/Web/HTML/Reference/Elements/input) および [`<textarea>`](/ja/docs/Web/HTML/Reference/Elements/textarea) 要素に適用されないようになりました。これは [HTML 仕様書](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-read-write) に違反していました ([Firefox バグ 888884](https://bugzil.la/888884))。

### JavaScript

- [`Intl.ListFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) API をサポートしました ([Firefox バグ 1589095](https://bugzil.la/1589095))。
- [`Intl.NumberFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) コンストラクターを、[Intl.NumberFormat Unified API Proposal](https://github.com/tc39/proposal-unified-intl-numberformat) で定義された新しいオプションをサポートするように拡張しました ([Firefox バグ 1633836](https://bugzil.la/1633836))。特に、以下のようなものがあります:
  - [指数表記のサポート](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#scientific_engineering_or_compact_notations)
  - [単位](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit_formatting)、[通貨](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency_formatting)、[符号表示](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#displaying_signs) の整形

- {{JSxRef("RegExp")}} エンジンを [更新](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/) して、ECMAScript 2018 で導入したすべての新機能をサポートしました:
  - [後読み言明](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) ([Firefox バグ 1225665](https://bugzil.la/1225665))
  - {{JSxRef("RegExp.prototype.dotAll")}} ([Firefox バグ 1361856](https://bugzil.la/1361856))
  - [Unicode プロパティエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) ([Firefox バグ 1361876](https://bugzil.la/1361876))
  - [名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) ([Firefox バグ 1362154](https://bugzil.la/1362154))

- 2020 年中頃の [WebIDL 仕様書の変更](https://github.com/whatwg/webidl/pull/357) により、[`Symbol.toStringTag` プロパティをすべての DOM プロトタイプオブジェクトに追加しました](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#tostringtag_available_on_all_dom_prototype_objects) ([Firefox バグ 1277799](https://bugzil.la/1277799))。
- {{jsxref("WeakMap")}} オブジェクトのガベージコレクションを改良しました。`WeakMaps` を徐々にマークするようになりました ([Firefox バグ 1167452](https://bugzil.la/1167452))。

### API

#### DOM

- {{DOMxRef("Element.replaceChildren")}} メソッドを実装しました ([Firefox バグ 1626015](https://bugzil.la/1626015))。

#### サービスワーカー

- [Extended Support Releases (ESR)](https://www.mozilla.org/firefox/organizations/): Firefox 78 は [Service workers](/ja/docs/Web/API/Service_Worker_API) (および [プッシュ API](/ja/docs/Web/API/Push_API)) をサポートする最初の ESR リリースです。過去の ESR リリースはサポートしていませんでした ([Firefox バグ 1547023](https://bugzil.la/1547023))。

### WebAssembly

- [Wasm Multi-value](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) をサポートしました。WebAssembly の関数が複数の値を返したり、命令シーケンスが複数のスタックの値を使用および生成したりすることが可能になりました ([Firefox バグ 1628321](https://bugzil.la/1628321))。
- WebAssembly で、[`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt) を使用して JavaScript から 64-bit 整数の関数引数 (i64) をインポートおよびエクスポートできるようになりました ([Firefox バグ 1608770](https://bugzil.la/1608770))。

### TLS 1.0 および 1.1 の廃止

- [Transport Layer Security](/ja/docs/Web/Security/Defenses/Transport_Layer_Security) (TLS) プロトコルのバージョン 1.0 および 1.1 のサポートを、すべてのブラウザーで廃止しました。以前の告知と、影響を受ける場合の対処について、[TLS 1.0 and 1.1 Removal Update](https://hacks.mozilla.org/2019/05/tls-1-0-and-1-1-removal-update/) をご覧ください ([Firefox バグ 1643229](https://bugzil.la/1643229))。

## アドオン開発者向けの変更点

- {{WebExtAPIRef("browsingData.removeCache")}} および {{WebExtAPIRef("browsingData.removePluginData")}} が、ホスト名による削除をサポートしました ([Firefox バグ 1636784](https://bugzil.la/1636784))。
- [`proxy.onRequest`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) を使用するとき、タブやウィンドウの ID に基づいて制限するフィルターが正しく適用されるようになりました。これは、プロキシーの機能をひとつのウィンドウだけに提供したいアドオンで役に立つでしょう。
- "すべてのタブ" ドロップダウンから [コンテキストメニューでクリックするとき](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/onClicked)、適切なタブオブジェクトが渡されるようになりました。以前は、誤ってアクティブなタブが渡されていました。
- [`downloads.download`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download) に saveAs オプションをつけて使用したとき、最近使用したディレクトリーを記憶するようになりました。この情報は開発者が使用できませんでしたが、ユーザーにはとても便利でした。

## 過去のバージョン

{{Firefox_for_developers(77)}}
