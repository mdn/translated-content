---
title: Firefox 29 for developers
slug: Mozilla/Firefox/Releases/29
---

{{FirefoxSidebar}}

Gecko 29 を搭載した Firefox 29 は、米国時間 2014 年 4 月 29 日にリリースされました。このページでは、開発者に影響する Firefox 29 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

主な変更点:

- ウェブコンソールを大きく改善しました。Array の内容はクリックして調査ツールを起動しなくてもインラインで表示する、window オブジェクトで自身の URL を表示するなどです。
- Web Worker に [console API](/ja/docs/Web/API/console) を追加しました ([Firefox バグ 620935](https://bugzil.la/620935))。Web Worker からウェブコンソールへのログ出力が可能になりました。
- [ネットワークモニタ](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)が、円グラフを使用してパフォーマンス統計を表示するようになりました ([Firefox バグ 846601](https://bugzil.la/846601))。
- [インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)で、CSS transform のプレビューツールチップが使用可能になりました ([Firefox バグ 726427](https://bugzil.la/726427))。
- デバッガやコンソールでみられる DOM 要素は、変数リストの右側に新設したボタンを使用して直接削除または調査することが可能になりました。
- CSS ソースマップを[スタイルエディター](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)でサポートしました ([Firefox バグ 926014](https://bugzil.la/926014))。
- CSS プロパティおよび値のオートコンプリート機能を[スタイルエディター](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)に追加しました ([Firefox バグ 717369](https://bugzil.la/717369))。

_詳細および他の小規模な変更点については [Mozilla Hacks ブログの記事](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/)をご覧ください。_

### CSS

- [CSS variables](/ja/docs/Web/CSS/Using_CSS_custom_properties) を実装しました ([Firefox バグ 773296](https://bugzil.la/773296))。この件に関する Mozilla Hacks の記事は[こちら](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/)です。これは Release ビルド以外でのみデフォルトで有効です (Release ビルドで使用したい場合は設定項目 `layout.css.variables.enabled` を `true` に変更してください)。
- Flexbox で {{cssxref("visibility")}}`: collapse` をサポートしました ([Firefox バグ 783470](https://bugzil.la/783470))。
- {{cssxref("box-sizing")}} プロパティの接頭辞を外しました ([Firefox バグ 243412](https://bugzil.la/243412))。
- 何かがアニメーションするであろうというヒントを与える、{{cssxref("will-change")}} プロパティを追加しました。有効化するには設定項目 `layout.css.will-change.enabled` を `true` に変更しなければなりません。([Firefox バグ 940842](https://bugzil.la/940842))
- `3e1` や `10e+0` といった指数表記を {{cssxref("&lt;number&gt;")}} 値でサポートしました ([Firefox バグ 964529](https://bugzil.la/964529))。
- {{cssxref("&lt;gradient&gt;")}} タイプの画像を {{cssxref("border-image")}} でサポートしました ([Firefox バグ 709587](https://bugzil.la/709587))。
- {{cssxref("touch-action")}} プロパティを実装しました。デフォルトでは無効であり、設定項目 `layout.css.touch_action.enabled` で制御します。([Firefox バグ 795567](https://bugzil.la/795567))
- \<pre> 要素用の冗長なデフォルトスタイルを quirk.css から削除しました ([Firefox バグ 948914](https://bugzil.la/948914))。
- CSS Variables のフォールバックを正しく実装しました (基本的な循環参照) ([Firefox バグ 950497](https://bugzil.la/950497))。
- 宣言の優先度の後にトークンがある @supports の条件が、false に評価されるようになりました ([Firefox バグ 909170](https://bugzil.la/909170))。

### HTML

- `<input type=color>` および `<input type=number>` がデフォルトで有効になりました。
- 非標準である `<pre cols>` のサポート、および `<pre wrap>` のレイアウト効果を廃止しました。これらの効果は CSS で実現可能であり、また実現すべきです。([Firefox バグ 949879](https://bugzil.la/949879))

### JavaScript

- ECMAScript 6 の String の新たなメソッドである {{jsxref("String.prototype.codePointAt()")}} および {{jsxref("String.prototype.fromCodePoint()")}} を実装しました ([Firefox バグ 918879](https://bugzil.la/918879))。
- [ECMAScript Internationalization API (ECMA-402)](https://www.ecma-international.org/ecma-402/1.0/) を実装しました。また、デスクトップ版 Firefox ではデフォルトで有効にしました ([Firefox バグ 853301](https://bugzil.la/853301)):

  - {{jsxref("Intl")}} オブジェクトネームスペースの新たなオブジェクト:

    - {{jsxref("Collator", "Intl.Collator")}}
    - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("NumberFormat", "Intl.NumberFormat")}}

  - 以下の {{jsxref("String")}}、{{jsxref("Number")}}、{{jsxref("Date")}} のメソッドを、ECMA-402 により引数 `locales` および `options` を持つように更新しました:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- 更新された ECMAScript6 仕様草案に準拠するため、{{jsxref("Map")}} オブジェクトおよび {{jsxref("Set")}} オブジェクトがキーと値の同一性を確認するときは、`-0` と `+0` を同一として扱うようになりました。
- `Promise` をデフォルトで有効にしました ([Firefox バグ 918806](https://bugzil.la/918806))。
- 完了した Generator は例外を発生させるのではなく {{jsxref("IteratorResult")}} を返すようになりました ([Firefox バグ 958951](https://bugzil.la/958951))。

### インターフェイス/API/DOM

- 新たな種類の Worker である {{domxref("SharedWorker")}} をデフォルトで有効にしました ([Firefox バグ 924089](https://bugzil.la/924089))。
- {{domxref("URLUtils")}} インターフェイスが、{{domxref("URLSearchParams")}} オブジェクトを返す {{domxref("URLUtils.searchParams", "searchParams")}} プロパティをサポートしました。URL の検索引数を変更できます ([Firefox バグ 887836](https://bugzil.la/887836))。{{domxref("URLSearchParams")}} コンストラクターにより、文字列のパースや検索が容易になります。
- {{domxref("Worker.onLine")}} プロパティをサポートしました。Worker のオンライン/オフライン状況を知ることができます ([Firefox バグ 925437](https://bugzil.la/925437))。
- Web Components の実装の一環として、{{domxref("HTMLShadowElement")}} インターフェイスを設定項目 `dom.webcomponents.enabled` のもとに実装しました。使用したい場合は値を `true` に変更してください。([Firefox バグ 887538](https://bugzil.la/887538))
- 読み取り専用の {{domxref("HTMLIFrameElement.sandbox")}} プロパティの型は {{domxref("string")}} ではなく {{domxref("HTMLSettableToken")}} になりました ([Firefox バグ 845057](https://bugzil.la/845057))。
- {{domxref("HTMLCanvasElement.getContext()")}} で、値 `moz-webgl` のサポートを廃止しました。標準化された値 `webgl` を使用してください ([Firefox バグ 913597](https://bugzil.la/913597))。
- {{domxref("ImageData")}} のコンストラクターを追加しました。このインターフェイスは {{domxref("Worker")}} で使用できます。([Firefox バグ 959958](https://bugzil.la/959958))
- {{domxref("NavigatorLocation.origin", "location.origin")}} が Worker で使用可能になりました ([Firefox バグ 964148](https://bugzil.la/964148))。
- {{domxref("ValidityState.badInput")}} プロパティを実装しました ([Firefox バグ 827161](https://bugzil.la/827161))。
- 非推奨である {{domxref("Window.pkcs11")}} プロパティを削除しました。これは Firefox 3.0.14 から `null` を返していました。([Firefox バグ 964964](https://bugzil.la/964964))
- {{domxref("Node.cloneNode()")}} メソッドおよび {{domxref("Document.importNode()")}} メソッドは論理値の引数 `deep` をとります。これまでの引数を省略すると、メソッドは `deep` が `true` である場合の動作になりました。しかし最新の仕様により動作が変更され、省略した場合は値が `false` であるように動作します。([Firefox バグ 937461](https://bugzil.la/937461))
- {{domxref("Window._content")}} は Web content で使用できなくなりました ([Firefox バグ 946564](https://bugzil.la/946564))。
- {{domxref("URLUtils.port")}} の動作を若干変更しました。`''` を与えるとプロトコルに関連付けられたデフォルトのポートが設定されます。また `0` を与えると `0` が設定されます。([Firefox バグ 930450](https://bugzil.la/930450))
- {{domxref("Document.referrer")}} は incumbent script に基づくようになりました ([Firefox バグ 887928](https://bugzil.la/887928))。
- [Gamepad API](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) をデフォルトで有効にしました ([Firefox バグ 878828](https://bugzil.la/878828))。

### MathML

_変更なし。_

### SVG

_変更なし。_

## セキュリティ

- CSP 1.1 の試験的なディレクティブ `hash-source` を実装しました。この機能を有効にするには、設定項目 `security.csp.experimentalEnabled` を `true` に設定してください ([Firefox バグ 883975](https://bugzil.la/883975))。

## アドオン開発者と Mozilla 開発者向けの変更点

- [Australis and add-on compatibility](/ja/docs/Mozilla/Firefox/Australis_add-on_compat) - Firefox のユーザーインターフェイスに関与する拡張機能のほとんどに影響する、Firefox テーマの主要な変更点です。
- `nsISecurityCheckedComponent` を削除しました ([Firefox バグ 794943](https://bugzil.la/794943))。利用者のほとんどは、インターフェイスの定義から nsISecurityCheckedComponent を単純に削除してかまいません。これで動作し続けるでしょう。

Australis 以外の変更点は未定です。

## 関連情報

- [Firefox 29 リリースノート](http://www.mozilla.jp/firefox/29.0/releasenotes/)

### 過去のバージョン

{{Firefox_for_developers('28')}}
