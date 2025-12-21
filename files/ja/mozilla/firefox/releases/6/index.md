---
title: Firefox 6 開発者向けリリースノート
short-title: Firefox 6
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 6 は Gecko 6.0 ベースのブラウザーで、2011 年 8 月 16 日にリリースされました。このページは Firefox 6 のリリースにあたり、開発者に関係する変更についてまとめたものです。

## ウェブ開発者向けの変更点一覧

### HTML

- プログレスバーを表す HTML5 の {{ HTMLElement("progress") }} 要素がサポートされました。
- メディア要素にテキストトラックを追加する HTML5 の {{ HTMLElement("track") }} 要素について、そのパース処理部分が実装されました。要素そのものは実装されていませんが、DOM に現れるようにはなります。
- {{ cssxref("border-radius") }} プロパティによって角が丸められたコンテナー内の {{HTMLElement("iframe")}} についても、適切に角が丸められるようになりました。
- {{ HTMLElement("form") }} 要素の {{ HTMLElement("input") }} テキストフィールドが XUL の [`maxwidth`](https://web.archive.org/web/20190117013205/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Property/maxWidth) プロパティをサポートしなくなりました。これは意図的なものではなく、また HTML 仕様違反でもあります。要素の最大幅を設定するには、[`size`](/ja/docs/Web/HTML/Reference/Elements/input#size) 属性を使用してください。
- {{ HTMLElement("canvas") }} の {{ domxref("CanvasRenderingContext2d") }} の `fillStyle` と `strokeStyle` プロパティはこれまで、妥当な色の指定の後に続く余計なものを無視する処理をしていましたが、適切にエラーとして処理されるように修正されました。たとえば、"red blue" を指定したとき、これまでは "red" と扱われていましたが、これからは指定そのものが無視されます。
- {{ HTMLElement("canvas") }} 要素の width と height を適切に 0px と指定できるようになりました。これまではそう指定しても 300px にされていました。
- HTML [カスタムデータ属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) に対応しました。DOM の {{ domxref("HTMLElement/dataset", "dataset") }} プロパティからデータにアクセスできます。
- {{ HTMLElement("textarea") }} 要素がフォーカスされたとき、テキスト挿入箇所が最後ではなく先頭になりました。これにより、他のブラウザーの挙動と一致します。

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : このプロパティは、テキスト装飾で使用する下線、上線、取り消し線などの色を指定します。
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : このプロパティはテキスト装飾の種類を指定します。
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : このプロパティは、テキスト装飾で使用する下線、上線、取り消し線などのなどのスタイルを指定します。スタイルには単一線、二重線、破線、点線などがあります。
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : このプロパティは行の折り返しが発生する際、単語のハイフネーションを制御するプロパティです。
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : 現在は Mozilla 固有のプロパティで、いくつかの要素 ({{ HTMLElement("progress") }} 要素など) の縦横の向きを制御します。
- {{ cssxref("::-moz-progress-bar") }}
  - : Mozilla 固有の擬似要素で、{{ HTMLElement("progress") }} 要素において、完了した部分のスタイルづけを行うためのものです。

#### その他の変更

- `@-moz-document` に新しく `regexp()` 関数記法が追加されました。これにより、スタイルシートを適用する文書の URL を [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)で照合できます。
- `aural` 媒体グループのために持っていたコードを削除したため、`azimuth` CSS プロパティのサポートが廃止されました。このプロパティはちゃんと実装されていなかったため、パッチを当て続けるのではなく未完成の実装を省くほうが理にかなっていると考えました。
- これまで、{{ cssxref(":hover") }} 擬似クラスは前方互換モードにおいてクラスセレクターに適用されませんでした。このため `.someclass:hover` といったコードは動きませんでしたが、この例外が取り払われました。
- {{ cssxref(":indeterminate") }} 擬似クラスは {{ HTMLElement("progress") }} 要素にも適用できます。これは標準外ですが、便利ですので他のブラウザーにも取り入れられて欲しいと考えています。
- `moz-win-exclude-glass` 値が `-moz-appearance` CSS プロパティに追加されました。これにより、Windows システム上の Aero Glass グラデーション効果における不透明領域を除外できます。
- [Firefox bug 658949](https://bugzil.la/658949) により、データ URL におけるハッシュ記号 (#) の処理方法が変更されました。エスケープされていない場合、この記号が含まれている CSS スタイルシートは、場合により破損することがありました。

### DOM

- [コード内でのメディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
  - : {{ domxref("window.matchMedia()") }} メソッドと {{ domxref("MediaQueryList") }} インターフェイスによって、メディアクエリーの結果をプログラムから検証できます。
- [タッチイベント](/ja/docs/Web/API/Touch_events)
  - : Firefox 6 は W3C の標準タッチイベント仕様に対応しています。これにより、タッチスクリーンやトラックパッドなどタッチセンサー式の機器でのタッチの解釈が容易になります。
- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)
  - : サーバー送信イベントは、サーバーが手元で生成された DOM イベントと同じようにイベントを送出するよう、ウェブアプリケーションが尋ねるための機能です。

<!---->

- これまでずっと、空文字列を返すだけだった `navigator.securityPolicy` プロパティが完全に削除されました。
- `BlobBuilder` に対応しました。現時点では接頭辞付きの実装 (`MozBlobBuilder`) となっています。
- `Document.height`, `Document.width` が削除されました。 [Firefox バグ 585877](https://bugzil.la/585877)
- {{ domxref("DocumentType") }} オブジェクトの `entities`, `notations` プロパティが削除されました。これは実装されておらず常に `null` を返しており、また仕様からも削除されていました。
- `DOMConfiguration` インターフェイスと、それを使用していた `document.domConfig` プロパティが削除されました。これらはサポートされておらず、また DOM 仕様からも削除されていました。
- `hashchange` イベントが適切に [`newURL`, `oldURL` フィールド](/ja/docs/Web/API/Window/hashchange_event)を含むようになりました。
- {{ domxref("FileReader") }} インターフェイスの `abort()` メソッドが、ファイルの読み込み中に利用された際に例外を投げるようになりました。
- {{ domxref("window.postMessage()") }} メソッドが[構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用するようになり、あるウィンドウから他のウィンドウに文字列ではなく JavaScript オブジェクトを渡せるようになりました。
- {{ domxref("window.history") }} API が `pushState()`, `replaceState()` メソッドに渡されたオブジェクトのシリアライズに[構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用するようになりました。これによって循環参照などを含むより複雑なオブジェクトも使用可能となりました。
- 新しく追加された `beforeprint`, `afterprint` イベントによって、[印刷が行われたときと完了したときを検出する](/ja/docs/Web/CSS/Guides/Media_queries/Printing#印刷リクエストの検出)ことができるようになりました。
- `document.strictErrorChecking` プロパティが削除されました。実装されておらず、また DOM 仕様からも削除されていました。
- 標準である {{ domxref("event.defaultPrevented") }} プロパティがサポートされました。{{ domxref("event.preventDefault()") }} がイベントから呼び出されたかを知る際には、標準外の `getPreventdefault()` ではなくこちらを使うようにしましょう。
- {{ domxref("window.top") }} プロパティが、適切に読み取り専用となりました。
- これまでドキュメントのなかった DOM views が削除されました。これらには実装の詳細が多く、また不必要に様々なものを複雑にしていたため削除されました。もしこの変化に気づいた場合は、何か誤ったことをしている可能性があります。
- `EventTarget` の関数 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) に指定する引数 `useCapture` が省略可能となりました。これは WebKit の動作とも共通し、また新しい仕様でもそう定義されています。
- [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) オブジェクトの `mozResponseArrayBuffer` プロパティが `responseType`, `response` プロパティに置き換えられました。
- {{ domxref("HTMLElement/dataset", "dataset") }} プロパティが [`HTMLElement`](/ja/docs/Web/API/HTMLElement) インターフェイスに追加されました。このプロパティにより [要素の `data-*` グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) にアクセスできます。
- {{ domxref("CustomEvent") }} インターフェイスが実装されました ([Firefox バグ 427537](https://bugzil.la/427537))
- セキュリティの観点から、ユーザーがロケーションバーに `data:` URI と `javascript:` URI を入力した時、現在のページのセキュリティコンテキストを受け継がなくなりました。代わりに、新しい空のセキュリティコンテキストが生成されます。これにより、ロケーションバーに入力した `javascript:` URL から読み込まれたスクリプトは、DOM メソッドなどへのアクセスを持たなくなります。しかし、これらの URL がスクリプトから使用された場合は、これまでと同じように動作します。

### JavaScript

- これまで、いくつかの組み込み関数 (`eval`, `parseInt`, `Date.parse` など) に対し `new` 演算子を使うことができましたが、仕様においてこれは許されるべきではないとされていました。Firefox 6 では、このサポートが廃止されました。`new` 演算子のこういった利用は公式にはサポートされておらず、また広く利用されてもいません。この変更が何かに影響することはないでしょう。
- ECMAScript 2015 の [WeakMaps](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) がプロトタイプ実装として追加されました。

### SVG

- {{ SVGAttr("pathLength") }} 属性に対応しました。
- [`data:` URL](/ja/docs/Web/URI/Reference/Schemes/data) から読み込まれたパターン、グラデーション、フィルターが適切に動作するようになりました。

### MathML

- {{ MathMLElement("mstyle") }} の実装が修正されました。

### アクセシビリティ (ARIA)

- 状態変化イベントが `aria-busy` の値の変化でも発生するようになりました。
- `aria-sort` が発生した際に属性変化イベントが発生するようになりました。

### ネットワーク

- [WebSocket](/ja/docs/Web/API/WebSockets_API)
  - : WebSocket プロトコルのサポートがバージョン 07 に更新されました。また、グローバルオブジェクトの `WebSocket` オブジェクトが `MozWebSocket` に改称されました。接頭辞のないオブジェクトの検出を目的としたときに問題となるため、それを防ぐ目的です。

<!---->

- `Content-Disposition` ヘッダーの構文解析が修正され、バックスラッシュでエスケープされた ASCII 文字が適切に文字そのものとして処理されるようになりました。これまではその文字をアンダースコア ("\_") に置き換えるという誤った処理がなされていました。
- `Set-Cookie` ヘッダーのパスの値において、クォートが適切に処理されるようになりました。これまでクォートを使った場合はそれがデリミタではなく、パスの文字列として認識されていました。**この変更により、いくつかのサイトで互換性の問題が発生する可能性があります。**製作者はコードをチェックすることが望まれます。
- [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) リクエストヘッダーがサポートされました。`nsIHttpChannelInternal.HTTPUpgrade()` を呼ぶことで、HTTP チャネルから他のプロトコルへのアップグレードをリクエストできます。

### その他の変更

- Microsummary が削除されました。広く使われおらず、また見つけにくい機能でもあり、サポートの継続によって Places (ブックマークと履歴) のアーキテクチャを向上させることが難しくなっていたからです。
- WebGL が [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt) 拡張に対応しました。
- JavaScript コードをテストする簡易で便利なツール _Scratchpad_ が追加されました。
- `console.trace()` メソッドが[コンソール API](/ja/docs/Web/API/Console_API) に追加されました ([Firefox バグ 585956](https://bugzil.la/585956))。

## Mozilla 開発者とアドオン開発者向けの変更点

Firefox 6 へアドオンを対応させるために必要な作業の概要は [アドオンの Firefox 6 対応](/ja/docs/Mozilla/Firefox/Releases/6/Updating_add-ons) をご覧ください。

> [!NOTE]
> Firefox 6 では、従来のメジャーリリースと同様に、バイナリーコンポーネントをコンパイルし直す必要があります。詳しくは [バイナリーインターフェイス](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) をご覧ください。

### JavaScript コードモジュール

#### FileUtils.jsm

- `openSafeFileOutputStream()` メソッドは、ファイルを即座に開こうとする代わりに、`DEFER_OPEN` [ビヘイビアフラグ](https://web.archive.org/web/20210506072901/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFileOutputStream#behavior_flag_constants) 付きで開くようになりました。

#### XPCOMUtils.jsm

- 新しい `importRelative()` メソッドは、ある JavaScript コードモジュールを、他の JavaScript コードモジュールの相対パスから読み込むようになりました。これによって互いに依存するモジュールを開発しやすくなりました。

### XPCOM

- [`nsCOMArray<T>`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Guide/Arrays#nsCOMArray.3cT.3e) に、配列から複数のオブジェクトを一度に削除できる [`RemoveObjectsAt()`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Guide/Arrays#deleting_objects) メソッドが追加されました。

### クロームからの DOM の使用

- [クロームコードでの DOM File API の使用](https://web.archive.org/web/20210618235235/https://developer.mozilla.org/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : これまでもクロームコード内で DOM File API を使うことは可能でしたが、{{ domxref("File") }} コンストラクターをクロームで使用した場合に、ローカルパス名文字列を指定できるようになりました。また、`nsIFile` オブジェクトを使用して、DOM File API を通じてアクセスするファイルを指定できるようになりました。

### インターフェイスの変更

- `nsINavHistoryQueryOptions` で、新たな定数 `SORT_BY_FRECENCY_ASCENDING` と `SORT_BY_FRECENCY_DESCENDING` を使った訪問頻度順のソートが可能になりました。
- `nsIFilePicker` に `addToRecentDocs` 属性が追加されました。これは、もしユーザーの「最近使用したドキュメント」リストがあれば、そのリストに選択したファイルを追加するよう指定できるものです。この属性はプライベートブラウジングモードでは無視されます。
- `nsINavBookmarkObserver` メソッドにアイテム ID 引数を与える場合、GUID も必要となります。
- `nsIPrefBranch.clearUserPref()` が、指定された設定が存在しない場合やユーザー設定値がない場合も、例外を投げなくなりました。その代わり、単に何もしなくなりました。
- `nsIMemoryReporter` インターフェイスで、調べたいメモリーの種類 (マップ、ヒープ、その他) を指定できるようになりました。
- `nsISHEntry` の `stateData` 属性が `nsIStructuredCloneContainer` を返すようになりました。
- `nsIURI` に `nsIURI.ref` 属性が追加されました。これは、URI の一部の参照 ("#" 以降の部分) を返すものです。また、参照メンバーなしに `nsIURI` を複製できる `cloneIgnoringRef()` メソッドと、参照メンバーを無視して他の `nsIURI` と比較できる `equalsExceptRef()` メソッドが追加されました。

#### 新しいインターフェイス

- `mozIAsyncFavicons`
  - : ブックマークアイコン (favicon) サービスへの非同期アクセスが可能な新サービスです。
- `nsIEventSource`
  - : _詳細は後日解説します。_
- `nsIGSettingsCollection`
  - : _詳細は後日解説します。_
- `nsIGSettingsService`
  - : _詳細は後日解説します。_
- `nsIHttpUpgradeListener`
  - : `nsIHttpChannelInternal.HTTPUpgrade()` メソッドを通じた HTTP アップグレード要求を処理するためのコールバックインターフェイスです。
- `nsIStructuredCloneContainer`
  - : [構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) を使ってシリアライズされたオブジェクトのためのコンテナーです。
- `nsITelemetry`
  - : パフォーマンス測定を目的とした使用統計情報 (Telemetry)を記録とヒストグラムの生成に使用されます。[Firefox バグ 649502](https://bugzil.la/649502) と [Firefox バグ 585196](https://bugzil.la/585196) 参照。
- `nsITimedChannel`
  - : [Firefox バグ 576006](https://bugzil.la/576006) 参照。
- `nsIWebSocketListener`
  - : [Firefox バグ 640003](https://bugzil.la/640003) 参照。
- `nsIWebSocketProtocol`
  - : [Firefox バグ 640003](https://bugzil.la/640003) 参照。

#### 削除されたインターフェイス

以下のインターフェイスは、不要となり削除された実装です。詳細はバグを参照してください。

- `nsIDOMDocumentEvent` ([Firefox バグ 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` ([Firefox バグ 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` ([Firefox バグ 655513](https://bugzil.la/655513))
- `IWeaveCrypto` ([Firefox バグ 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` ([Firefox バグ 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` ([Firefox バグ 637253](https://bugzil.la/637253))
- `nsIPluginInstance` ([Firefox バグ 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` ([Firefox バグ 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` ([Firefox バグ 649534](https://bugzil.la/649534))

### その他の変更

- [アプリケーションコードからの設定の使用](https://web.archive.org/web/20210419233418/https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Using_preferences_from_application_code)（英語）
  - : 設定へ簡単にアクセスできる、新しい静的な API が実装されました。これはアプリケーションコードからのみ使用可能であり、アドオンでは使用できません。
