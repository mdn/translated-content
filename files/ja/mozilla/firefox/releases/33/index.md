---
title: Firefox 33 for developers
slug: Mozilla/Firefox/Releases/33
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

Gecko 33 を搭載した Firefox 33 は、米国時間 2014 年 10 月 14 日にリリースされました。このページでは、開発者に影響する Firefox 33 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト

- イベントリスナーのポップアップ
- @media サイドバー
- 新たな CSS 規則の追加
- keyframes の編集
- 3 次ベジェ曲線エディター
- Transform のハイライト表示
- 持続的にキャッシュを無効化
- 新たなコマンド
- エディターの設定
- WebIDE

詳しくは [hacks ブログの記事](https://hacks.mozilla.org/2014/07/event-listeners-popup-media-sidebar-cubic-bezier-editor-more-firefox-developer-tools-episode-33/)をご覧ください。このリリースで[機能追加や修正](http://mzl.la/1pGLFDs)を行った 33 名の貢献者に感謝します。

### CSS

- {{cssxref("@counter-style")}} 規則を実装しました ([Firefox バグ 966166](https://bugzil.la/966166))。
- {{cssxref("list-style-type")}} の `ethiopic-numeric`, `persian`, `arabic-indic`, `devanagari`, `bengali`, `gurmukhi`, `gujarati`, `oriya`, `tamil`, `telugu`, `kannada`, `malayalam`, `thai`, `lao`, `myanmar`, `khmer`, `cjk-heavenly-stem`, `cjk-earthly-branch` から接頭辞を削除しました ([Firefox バグ 985825](https://bugzil.la/985825) および [Firefox バグ 1063856](https://bugzil.la/1063856))。
- {{cssxref("list-style-type")}} のカウンタースタイルで `mongolian`、`disclosure-open` および `disclosure-closed` をサポートしました ([Firefox バグ 982355](https://bugzil.la/982355))。
- 内容がないキーフレーム規則を持つ CSS アニメーションでイベントが発生するように修正しました ([Firefox バグ 1004377](https://bugzil.la/1004377))。
- CSS Colors level 4 で新たに定義された {{cssxref("&lt;color&gt;")}} である `rebeccapurple` をサポートしました ([Firefox バグ 1024642](https://bugzil.la/1024642))。
- CSS Fonts Level 3 の実験的な実装を進めています。これらを有効にするかは設定項目 `layout.css.font-features.enabled` で制御されており、Nightly ではデフォルトで有効です。以下の機能を新たに実装しました:
  - {{cssxref("font-variant-caps")}} のフォールバックアルゴリズム。不足しているグリフを代替するものを生成します ([Firefox バグ 961558](https://bugzil.la/961558))。
  - {{cssxref("font-synthesis")}} CSS プロパティを実装しました ([Firefox バグ 871453](https://bugzil.la/871453))。

### HTML

- {{htmlelement("picture")}} 要素を実験的にサポートしました ([Firefox バグ 870022](https://bugzil.la/870022))。設定項目 `dom.image.picture.enabled` で制御されます (デフォルトは無効)。
- {{HTMLElement("label")}} 要素、特に [`for`](/ja/docs/Web/HTML/Reference/Elements/label#for) 属性を持たない label 要素が `<input type=hidden>` フィールドに適用されないようになりました ([Firefox バグ 597650](https://bugzil.la/597650))。以前は仕様に準拠していない動作でした。
- {{HTMLElement("a")}} 要素で、リンクの注釈 `noreferrer` を実装しました。`<a rel="noreferrer">` で、リンクをたどる際の HTTP リクエストにリファラの URL が含まれないようになります ([Firefox バグ 530396](https://bugzil.la/530396))。これはページ内でのリンクでのみ動作するものであり、コンテキストメニューによるリンクなど UI を通してクリックされたリンクでは動作しません。
- Android において、{{HTMLElement("meta")}} の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta#name) 属性で新たに 2 つの値をサポートしました。 `msapplication-TileImage` と `msapplication-TileColor` です ([Firefox バグ 1014712](https://bugzil.la/1014712))。 例:

  ```html
  <meta name="msapplication-TileImage" content="images/benthepcguy-144.png" />
  <meta name="msapplication-TileColor" content="#d83434" />
  ```

### JavaScript

- 非標準の {{jsxref("Number.toInteger()")}} メソッドを削除しました ([Firefox バグ 1022396](https://bugzil.la/1022396))。
- {{jsxref("Map.prototype.set()")}}、{{jsxref("WeakMap.prototype.set()")}}、{{jsxref("Set.prototype.add()")}} の各メソッドがチェイン可能になり、`undefined` ではなく同等のオブジェクトを返すようになりました ([Firefox バグ 1031632](https://bugzil.la/1031632))。
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)は関数のボディにある関数宣言より先に評価されますので、これらの関数はデフォルト引数から参照できなくなりました ([Firefox バグ 1022962](https://bugzil.la/1022962))。
- オブジェクトリテラルで短縮プロパティを許容するようになりました。明示的に定義されていない場合は、プロパティのキーは同名の変数で初期化されます。例: `function f(x, y) { return {x, y}; }` は `function f(x, y) { return {x: x, y: y}; }` と等価です ([Firefox バグ 875002](https://bugzil.la/875002))。
- [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) および [`yield*`](/ja/docs/Web/JavaScript/Reference/Operators/yield*) の構文解析を、最新の ES6 仕様に準拠するよう更新しました ([Firefox バグ 981599](https://bugzil.la/981599))。
- 非標準の `hasOwn` トラップを削除しました ([Firefox バグ 980565](https://bugzil.la/980565))。

### インターフェイス/API/DOM

- {{domxref("RadioNodeList")}} API が実装され、{{domxref("RadioNodeList.value")}} で選択しているラジオボタンにアクセスできます ([Firefox バグ 779723](https://bugzil.la/779723))。
- {{domxref("DOMMatrix")}} を追加しました ([Firefox バグ 1018497](https://bugzil.la/1018497))。
- 非標準の (ただし他のブラウザーで実装されている) `DOMException.stack` プロパティを追加しました。これはスタックを可読性の高い書式 (既存の非標準プロパティ {{jsxref("Error.stack")}} と同じ書式) で表した文字列を返します ([Firefox バグ 857648](https://bugzil.la/857648))。
- {{HTMLElement("canvas")}} 向けに、一次 Transform を {{domxref("SVGMatrix")}} 表記によりパターンを変更することが可能な {{domxref("CanvasPattern.setTransform()")}} メソッドを追加しました ([Firefox バグ 1019257](https://bugzil.la/1019257))。
- 設定項目 `media.mediasource.enabled` で制御しており Nightly および Aurora のみで有効化している Media Source Extensions の実験的な実装で、MP4 をサポートしました ([Firefox バグ 1000686](https://bugzil.la/1000686))。
- {{domxref("HTMLMediaElement.audioTracks")}} プロパティおよび {{domxref("HTMLMediaElement.videoTracks")}} プロパティを実験的に実装しました。これらは設定項目 `media.track.enabled` で制御されており、デフォルトは無効です ([Firefox バグ 744896](https://bugzil.la/744896))。
- 非標準の `XMLHttpRequest.mozBackgroundRequest()` はウェブサイトからアクセス不可になりました。Firefox 内部のコード (Chrome コード) のみ使用できます ([Firefox バグ 1035242](https://bugzil.la/1035242))。
- 仕様から削除された `touchenter` イベントおよび `touchleave` イベントを削除しました ([Firefox バグ 1036444](https://bugzil.la/1036444))。
- {{domxref("HTMLTrackElement")}} が発生させる、以前は `loaded` と呼ばれていたイベントを仕様に合致するよう {{domxref("Window/load_event", "load")}} にリネームしました ([Firefox バグ 1035505](https://bugzil.la/1035505))。
- IndexedDB の `FileHandle` インターフェイスを {{domxref("IDBMutableFile")}} にリネームしました ([Firefox バグ 1006485](https://bugzil.la/1006485))。
- IndexedDB の `LockedFile` インターフェイスを {{domxref("IDBFileHandle")}} にリネームしました ([Firefox バグ 1006485](https://bugzil.la/1006485))。
- [ServiceWorker](/ja/docs/Web/API/ServiceWorker) インターフェイスを実装しました。設定項目 `dom.serviceWorkers.enabled` で制御されます ([Firefox バグ 903441](https://bugzil.la/903441) で総括しています)。
- {{domxref("NetworkInformation.type")}} が `"unknown"` の値に対応するようになりました ([Firefox バグ 1023029](https://bugzil.la/1023029))。

### MathML

- {{MathMLElement("mtable")}} 要素で `columnspacing`、`framespacing`、`rowspacing` の各属性をサポートしました ([Firefox バグ 330964](https://bugzil.la/330964))。
- fraction、stack、radical、script 用の [Open Type MATH](https://wiki.mozilla.org/MathML:Open_Type_MATH_Table#Implementation_Status) constant を使用するようになりました ([Firefox バグ 961365](https://bugzil.la/961365))。

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

### WebGL

- {{domxref("EXT_blend_minmax")}} を公開しました。これはブレンド元の色とブレンド先の最小および最大の色成分を生成する新たなブレンド方程式を 2 つ追加することで、ブレンド機能を拡張します ([Firefox バグ 973815](https://bugzil.la/973815))。

## セキュリティ

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

- 新たな [Debugger API](https://firefox-source-docs.mozilla.org/devtools-user/debugger-api/index.html) が好ましいため、[JavaScript Debugger Service (JSD)](/ja/docs/Mozilla/Add-ons/Code_snippets/JavaScript_Debugger_Service) を削除しました ([Firefox バグ 800200](https://bugzil.la/800200))。
- nsIX509CertDB2 インターフェイスを削除しました。また、このインターフェイス由来のメソッドを nsIX509CertDB インターフェイスに移しました。

### Add-on SDK

#### ハイライト

- [`Panel` コンストラクター](</ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#panel(options)>)の新たなオプションにより、パネルのコンテキストメニューをサポートしました。
- [`tab.readyState`](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#readyState) をサポートしました。
- [`BrowserWindow`](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#browserwindow) 引数を [`sidebar.show()`](</ja/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_sidebar#show(window)>) および [`sidebar.hide()`](</ja/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_sidebar#hide(window)>) に追加しました。サイドバーを表示または非表示にするウィンドウを制御するための引数です。

#### 詳細

[Firefox 32 から Firefox 33 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox32...firefox33)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

[Firefox 32 から Firefox 33 の間に解決したバグ](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-07-21&chfield=resolution&query_format=advanced&chfieldfrom=2014-06-09&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

### 過去のバージョン

{{Firefox_for_developers('32')}}
