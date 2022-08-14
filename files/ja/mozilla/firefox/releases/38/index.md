---
title: Firefox 38 for developers
slug: Mozilla/Firefox/Releases/38
tags:
  - Firefox
  - Release
translation_of: Mozilla/Firefox/Releases/38
---
{{FirefoxSidebar}}

Firefox 38 は、米国時間 2015 年 5 月 12 日にリリースされました。この記事では、ウェブ開発者だけでなく、Firefox や Gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [Web Audio Editor で音声ノードをバイパス](/ja/docs/Tools/Web_Audio_Editor#bypassing_nodes)
- [ウェブコンソールの "コピー" コマンド](/ja/docs/Tools/Web_Console#helper_commands)
- [ウェブコンソールで XmlHttpRequest をハイライトおよびフィルター](/ja/docs/Tools/Web_Console#xhr)
- [デバッガーで、最適化により削除された変数を確認](/ja/docs/Tools/Debugger/How_to/Set_Watch_Expressions)
- [ネットワークモニターでセキュリティの警告を確認](/ja/docs/Tools/Network_Monitor#security)
- [ネットワークモニターで伝送サイズを確認](/ja/docs/Tools/Network_Monitor#network_request_fields)
- [ページのアニメーションを再生/停止](/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations#animations_view)

[Firefox 37 から Firefox 38 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-02-23&query_format=advanced&chfield=resolution&chfieldfrom=2015-01-12&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12076303).

### CSS

- {{cssxref("ruby-position")}} および {{cssxref("ruby-align")}} に対応して、既定で有効にしました ({{bug(1055676)}}、{{bug(1123917)}}、{{bug(1039006)}})。
- カスタム要素向けに {{cssxref(":unresolved")}} 擬似クラスを実装しました ({{bug(1111633)}})。
- 定義済みスタイル {{cssxref("list-style-type", "ethiopic-numeric")}} の接尾辞は最近の仕様書の変更に合わせて、ドットに代わり空白文字を使用するようになりました ({{bug(1120721)}})。
- インライン要素とブロック要素の両方に分けて生成した Generated Content ({{cssxref("::before")}} や {{cssxref("::after")}} による) の CSS Transitions が、仕様書で要求されているとおりに動作するようになりました ({{bug(1110277)}})。
- CSS 論理的プロパティの実装が大きく前進しました。 `layout.css.vertical-text.enabled` フラグの設定 (既定値は `false`) により、以下のプロパティを使用できます。

  - 書字方向に依存しない {{cssxref("width")}} および {{cssxref("height")}}: {{cssxref("block-size")}} および {{cssxref("inline-size")}} ({{bug(1117983)}})。
  - 書字方向に依存しない {{cssxref("min-width")}} および {{cssxref("min-height")}}: {{cssxref("min-block-size")}} および {{cssxref("min-inline-size")}} ({{bug(1117983)}})。
  - 書字方向に依存しない {{cssxref("max-width")}} および {{cssxref("max-height")}}: {{cssxref("max-block-size")}} および {{cssxref("max-block-size")}} ({{bug(1117983)}})。
  - 書字方向に依存しない {{cssxref("margin-top")}}、{{cssxref("margin-right")}}、{{cssxref("margin-bottom")}}、{{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}、{{cssxref("margin-block-end")}}、{{cssxref("margin-inline-start")}}、{{cssxref("margin-inline-end")}} ({{bug(649142)}})。
  - 書字方向に依存しない {{cssxref("padding-top")}}、{{cssxref("padding-right")}}、{{cssxref("padding-bottom")}}、{{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}、{{cssxref("padding-block-end")}}、{{cssxref("padding-inline-start")}}、{{cssxref("padding-inline-end")}} ({{bug(649142)}})。
  - 書字方向に依存しない {{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}}、{{cssxref("border-left")}} および幅、スタイル、色の個別指定プロパティ: {{cssxref("border-block-start")}}、{{cssxref("border-block-start-width")}}、{{cssxref("border-block-start-style")}}、{{cssxref("border-block-start-color")}}、{{cssxref("border-block-end")}}、{{cssxref("border-block-end-width")}}、{{cssxref("border-block-end-style")}}、{{cssxref("border-block-end-color")}}、{{cssxref("border-inline-start")}}、{{cssxref("border-inline-start-width")}}、{{cssxref("border-inline-start-style")}}、{{cssxref("border-inline-start-color")}}、{{cssxref("border-inline-end")}}、{{cssxref("border-inline-end-width")}}、{{cssxref("border-inline-end-style")}}、{{cssxref("border-inline-end-color")}} ({{bug(649142)}})。
  - 書字方向に依存しない {{cssxref("top")}}、{{cssxref("right")}}、{{cssxref("bottom")}}、{{cssxref("left")}}: {{cssxref("inset-block-start")}}、`offset-block-end`、`offset-inline-start`、`offset-inline-end` ({{bug(1120283)}})。

- ブラウザー間で相互運用性がある動作を目指して、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)の始まり方を、最近の仕様変更に合致するよう変更しました ({{bug(960465)}})。

### HTML

- {{HTMLElement("label")}} 要素でイベントターゲットとラベルの間にインタラクティブコンテンツがある場合は、イベントをターゲット要素に発行しないようになりました ({{bug(229925)}})。
- {{HTMLElement("picture")}} 要素を既定で有効にしました ({{bug(1017875)}})。
- コンテキストメニューや中クリックによるナビゲーションで、 `<meta name="referrer">` に対応しました ({{bug(1113431)}})。

### JavaScript

- {{jsxref("Generator/return", "Generator.prototype.return()")}} を実装しました ({{bug(1115868)}})。
- {{jsxref("Functions/set", "セッター", "", 1)}}が{{jsxref("Functions/rest_parameters", "残余引数", "", 1)}}を持っている場合に{{jsxref("SyntaxError")}} が発生するようになりました ({{bug(1089632)}})。
- 関数の {{jsxref("Function/name", "name")}} プロパティが構成可能になりました ({{bug(1084019)}})。
- {{jsxref("Array")}} のメソッドのいくつかを、[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays) にも実装しました。

  - {{jsxref("TypedArray.of", "of()")}} メソッドと {{jsxref("TypedArray.from", "from()")}} メソッド ({{bug(896608)}})。
  - {{jsxref("TypedArray.forEach", "forEach()")}} メソッド ({{bug(1107645)}})。
  - {{jsxref("TypedArray.filter", "filter()")}} メソッドと {{jsxref("TypedArray.map", "map()")}} メソッド ({{bug(1121936)}})。
  - {{jsxref("TypedArray.slice", "slice()")}} メソッド ({{bug(1121935)}})。

- 残余引数を使用する場合は、引数名の重複が不可になりました ({{bug(1096376)}})。
- アロー関数を使用する場合は、引数名の重複が不可になりました ({{bug(1096377)}})。
- 簡潔なメソッド定義では、引数名の重複が不可になりました ({{bug(1096378)}})。
- {{jsxref("Map")}}/{{jsxref("Set")}}/{{jsxref("WeakMap")}} コンストラクターを {{jsxref("Operators/new", "new")}} なしで呼び出すと、警告が発生するようになりました ({{bug(1108930)}})。
- {{jsxref("WeakMap")}} オブジェクトの {{jsxref("WeakMap.get", "get")}}、{{jsxref("WeakMap.has", "has")}}、{{jsxref("WeakMap.delete", "delete")}} メソッドは、引数 `key` がオブジェクトではない場合に、例外が発生しないようになりました ({{bug(1127827)}})。
- {{jsxref("WeakMap.prototype.get()")}} メソッドの、省略可能な非標準の引数 `fallback` を削除しました ({{bug(1127827)}})。
- [Generator メソッド](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions) を定義するとき、"`set`" および "`get`" は有効な名前として扱うようになりました ({{bug(1073809)}})。
- 正規表現が存在しないとき、{{jsxref("RegExp.prototype.source")}} は空文字列に代わり "(?:)" を返すようになりました ({{bug(1130798)}})。
- {{jsxref("RegExp.prototype.source")}} および {{jsxref("RegExp.prototype.toString()")}} は、正規表現のパターンを適切にエスケープするようになりました (例えば、行末の "\n") ({{bug(1130860)}})。
- {{jsxref("Regexp")}} の {{jsxref("Regexp.global", "global")}}、{{jsxref("Regexp.ignoreCase", "ignoreCase")}}、{{jsxref("Regexp.multiline", "multiline")}}、{{jsxref("Regexp.sticky", "sticky")}} プロパティは、`RegExp` インスタンスのデータのプロパティから、プロトタイプのアクセサープロパティに変わりました ({{bug(1120169)}})。
- {{jsxref("RegExp.prototype.source")}} プロパティが、`RegExp` のインスタンス自体のデータプロパティから、プロトタイプのアクセサープロパティに変わりました ({{bug(1120169)}})。{{bug(1150297)}} のため、Release 以外のバージョンに限り使用できます。
- {{jsxref("Function.prototype.toString()")}} は、{{jsxref("Proxy")}} オブジェクトに対して例外が発生するようになりました ({{bug(1100936)}})。

### インターフェイス/API/DOM

- Fetch API の {{domxref("fetch()")}} メソッドを実装しました ({{bug(1039846)}})。
- {{domxref("BroadcastChannel")}} API を実装して、[Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用可能にしました ({{bug(966439)}} および {{bug(1121420)}})。
- Console API が [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用可能になりました。
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} を実装しました ({{bug(1119527)}})。
- {{domxref("KeyboardEvent.location")}} の定数 `DOM_KEY_LOCATION_MOBILE` および DOM_KEY_LOCATION_JOYSTICK を削除しました。DOM Level 3 仕様から削除されたためです ({{bug(936313)}}。
- {{domxref("KeyboardEvent.code")}} を Release ビルドで有効にしました。以前はプレリリース版のみで有効でした({{bug(1126673)}})。
- {{domxref("KeyboardEvent.code")}} で Linux 環境の Sun キーボード、Android、Firefox OS の特殊キーをサポートしました({{bug(1020139)}})。
- {{domxref("TextEncoder.TextEncoder", "TextEncoder()")}} コンストラクターを、仕様に合致するよう変更しました。無効な引数を渡した場合に発生する例外が、誤りである {{jsxref("TypeError")}} ではなく `RangeError` {{domxref("DOMException")}} になりました ({{bug(1125766)}})。
- User Timing API の {{domxref("Performance.mark()")}}、{{domxref("Performance.clearMarks()")}}、{{domxref("Performance.measure()")}}、{{domxref("Performance.clearMeasures()")}} を実装しました ({{bug(782751)}})。
- 接頭辞付きの {{domxref("Window.indexedDB", "indexedDB")}} である `mozIndexedDB` を削除しました ({{bug(975699)}})。
- {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベントはキャンセル不可になりました ({{bug(1134559)}})。
- [Worker](/ja/docs/Web/API/Web_Workers_API) で [WebSocket](/ja/docs/Web/API/WebSockets_API) を使用できるようになりました ({{bug(504553)}})。
- {{domxref("XMLHttpRequest.responseType")}} および {{domxref("XMLHttpRequest.withCredentials")}} プロパティが、{{domxref("XMLHttpRequest.open()")}} を呼び出す前に設定できるようになりました ({{bug(707484)}})。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## ネットワーク

_変更なし。_

## セキュリティ

- Firefox では、ログインフォームを扱う際に {{htmlattrxref("autocomplete", "input")}}`=false` 属性を無視するようになりました ({{bug(1025703)}})。これはパスワードマネージャーがより確実に動作できるようにすることで、より安全なパスワードの使用を促進しようとするものです。
- ホワイトリストで明示されたウェブサイトを除き、TLS を使用する際は RC4 が無効になりました。このホワイトリストは、ウェブサイトが修正されるまでの経過措置です ({{bug(1124039)}})。このフォールバック機能は設定項目 `security.tls.unrestricted_rc4_fallback` で制御されており、現在の既定値は `true` です ({{bug(1138882)}})。
- 安全でないバージョンの TLS へのフォールバックが必要なウェブサイトを、ハードコードされたホワイトリストに記載します。これは次第に削減する予定です ({{bug(1114816)}})。 `security.tls.insecure_fallback_hosts.use_static_list` を `false` に設定すると、ホワイトリストを無効化できます。

## アドオン開発者と Mozilla 開発者向けの変更点

### Add-on SDK

#### ハイライト

- `sdk/context-menu@2` を実装しました ({{bug(1070952)}})。
- `sdk/addon/bootstrap` を実装しました ({{bug(1075541)}})。
- `sdk/windows/loader` を削除しました ({{bug(970135)}})。
- Linux での、既定言語の検出機能を修正しました ({{bug(1114712)}})。
- `toolkit/loader` に、オプトインモジュールの互換性検証機能を搭載しました。これはすべての jpm アドオンに対して有効です ({{bug(1037235)}})。

#### Electrolysis (E10s) 対応

- `sdk/page-worker` が e10s に対応しました ({{bug(1116004)}})。
- `sdk/content/worker` が e10s に対応しました ({{bug(1116544)}})。
- `sdk/tabs` が e10s に対応しました ({{bug(1033838)}})。

#### 詳細

- [Firefox 37 から Firefox 38 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox36...firefox38).

### XUL

_変更なし。_

### JavaScript コードモジュール

#### Downloads.jsm

- [`DownloadTarget`](/ja/docs/Mozilla/JavaScript_code_modules/Downloads.jsm/DownloadTarget) オブジェクトが `exists` および `size` プロパティを持つようになりました。ダウンロード先のファイルがディスクに存在するかや、ファイルのサイズを確認できます。また、新規メソッド [`refresh()`](</ja/docs/Mozilla/JavaScript_code_modules/Downloads.jsm/DownloadTarget#refresh()>) で、これらの値の更新を求めます。

### XPCOM

- `"@mozilla.org/network/atomic-file-output-stream;1"` および `"@mozilla.org/network/safe-file-output-stream;1"` は、`PR_TRUNCATE` を伴わずに `PR_APPEND` を渡した場合に例外が発生するようになりました ({{bug(1117580)}})。
- `nsICompositionStringSynthesizer` および `nsIDOMWindowUtils.sendCompositionEvent` を削除しました。代わりに `nsITextInputProcessor` を使用してください({{bug(917322)}})。
- `nsIDOMWindowUtils.sendKeyEvent()` は非推奨になりました。代わりに `nsITextInputProcessor` を使用してください ({{bug(1119609)}})。

## 過去のバージョン

{{Firefox_for_developers('37')}}
