---
title: Firefox 36 for developers
slug: Mozilla/Firefox/Releases/36
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{FirefoxSidebar}}

Firefox 36 は、米国時間 2015 年 2 月 24 日にリリースされました。このページでは、開発者に影響する Firefox 36 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [eval で評価されるソースをデバッガーで表示](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html#debug-eval-sources)
- [Android 版 Firefox への接続手順を簡素化](https://web.archive.org/web/20220410035837/https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/debugging_firefox_for_android_with_webide/index.html)
- リモートでボックスモデルのハイライト表示が動作
- [プロファイラの "呼び出しツリーを反転" オプション](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html#inverting-the-call-tree)
- [コンソールで DOM Promise を調査](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#type-specific-rich-output)
- [インスペクタで "貼り付け" 方法を追加](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Firefox 35 から Firefox 36 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-11-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-10-13&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11736454)

### CSS

- {{cssxref("will-change")}} プロパティをデフォルトで有効にしました ([Firefox バグ 961871](https://bugzil.la/961871))。
- {{cssxref("white-space")}} プロパティが {{HTMLElement("textarea")}} HTML 要素で動作するようになりました ([Firefox バグ 82711](https://bugzil.la/82711))。
- {{cssxref("@font-face")}} で {{cssxref("@font-face/unicode-range", "unicode-range")}} ディスクリプターをサポートしました ([Firefox バグ 475891](https://bugzil.la/475891))。ただし、デフォルトで無効です。
- {{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-style")}} の各プロパティの接頭辞を削除しました ([Firefox バグ 825004](https://bugzil.la/825004))。接頭辞つきのプロパティも、移行をスムーズにするためしばらく使用可能です ([Firefox バグ 1097922](https://bugzil.la/1097922))。
- {{cssxref("text-decoration")}} プロパティを、短縮プロパティに変更しました ([Firefox バグ 1039488](https://bugzil.la/1039488))。
- {{cssxref("object-fit")}} プロパティおよび {{cssxref("object-position")}} プロパティをサポートしました ([Firefox バグ 624647](https://bugzil.la/624647))。
- {{cssxref("display")}} プロパティの値 `contents` を実験的に実装しました。デフォルトで無効に設定しています ([Firefox バグ 907396](https://bugzil.la/907396))。
- [Quirks モード](/ja/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)で、[`:active` および `:hover` の Quirk](/ja/docs/Mozilla_Quirks_Mode_Behavior#Miscellaneous_.26_Style) の適用対象を削減しました。リンクにのみ、および要素内に擬似要素や他の擬似クラスがない場合や擬似クラスの要素の一部ではない場合に限り適用されます ([Firefox バグ 783213](https://bugzil.la/783213))。
- {{cssxref("isolation")}} プロパティを実装しました ([Firefox バグ 1077872](https://bugzil.la/1077872))。
- CSS の {{cssxref("&lt;gradient&gt;")}} が乗算済み色に適用されるようになり、仕様書や他ブラウザと合致しました。また、途中に予期しない灰色が現れないようになりました ([Firefox バグ 591600](https://bugzil.la/591600))。
- {{cssxref("&lt;gradient&gt;")}} に、補間法のヒントを与える構文を追加しました ([Firefox バグ 1074056](https://bugzil.la/1074056))。
- {{cssxref("scroll-behavior")}} プロパティを実装しました ([Firefox バグ 1010538](https://bugzil.la/1010538))。

### HTML

- [`<meta name="referrer">`](/ja/docs/Web/HTML/Element/meta) をサポートしました ([Firefox バグ 704320](https://bugzil.la/704320))。
- Firefox では {{HTMLElement("input")}} 要素の [`accept`](/ja/docs/Web/HTML/Element/input#accept) 属性で指定したフィルタが未知の値、すなわち未知の MIME タイプや不正な形式の値でない限り、常にデフォルトで選択されるようになりました。以前は `image/*`、`video/*`、`audio/*` が指定された場合に限り、デフォルトで選択されていました ([Firefox バグ 826185](https://bugzil.la/826185))。

### JavaScript

- [ECMAScript 6](/ja/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) の Symbol データ型をデフォルトで有効にしました (Firefox 33 より、Nightly チャンネルでは使用できていました) ([Firefox バグ 1066322](https://bugzil.la/1066322)):

  - {{jsxref("Symbol")}}
  - {{jsxref("Symbol.for()")}}
  - {{jsxref("Symbol.keyFor()")}}
  - {{jsxref("Object.getOwnPropertySymbols()")}}

- [イテレート可能](/ja/docs/Web/JavaScript/Guide/iterable)なインターフェイスのプロパティキーのための、旧来のプレースホルダ文字列である `"@@iterator"` を、ES6 で周知のシンボルである {{jsxref("Symbol.iterator")}} に置き換えました ([Firefox バグ 918828](https://bugzil.la/918828))。
- 仕様内部の抽象的な演算である `ToNumber(string)` で 2 進 (`0b`) および 8 進 (`0o`) リテラルをサポートしました。これは潜在的に、ES5 からの破壊的な変更になります ([Firefox バグ 1079120](https://bugzil.la/1079120))。

  - `Number("0b11")` は、`NaN` ではなく `3` を返します。
  - `"0o11" == 9` は、`false` ではなく `true` を返します。

- [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) 宣言はブロックスコープが設定されるようになりました。また、初期化子が必要になりました ([Firefox バグ 611388](https://bugzil.la/611388))。さらに、再宣言が不可になりました ([Firefox バグ 1095439](https://bugzil.la/1095439))。

  - `{const a=1}; a;` は `1` が返らずに {{jsxref("ReferenceError")}} が発生します。これはブロックスコープがあるためです。
  - `const a;` は {{jsxref("SyntaxError")}} ("missing = in const declaration") が発生します。初期化子が必要です。
  - `const a = 1; a = 2;` は {{jsxref("SyntaxError")}} ("invalid assignment to const a") が発生します。

- ES7 の {{jsxref("Array.prototype.includes")}} メソッドを実装しました。ただし、現在は Nightly ビルドのみで有効です ([Firefox バグ 1069063](https://bugzil.la/1069063))。
- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) および [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) とともに [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子を使用すると、「[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)」が発生するようになりました ([Firefox バグ 1074571](https://bugzil.la/1074571))。
- 非標準の [`let` ブロックおよび `let` 式](/ja/docs/Web/JavaScript/Reference/Statements/let#non-standard_let_extensions)は非推奨になり、コンソールに警告が表示されます。将来削除する予定であるため、今後は使用しないようにしてください。
- [WeakMap](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) コンストラクタで、省略可能な引数 iterable を扱うようになりました ([Firefox バグ 1092537](https://bugzil.la/1092537))。

### インターフェイス/API/DOM

- Canvas API の {{domxref("CanvasRenderingContext2D.resetTransform()")}} メソッドを実装しました ([Firefox バグ 1099148](https://bugzil.la/1099148))。
- Web Crypto API で ECDSA をサポートしました ([Firefox バグ 1034854](https://bugzil.la/1034854))。
- WebGL 2.0 の実験的な実装を進めています!

  - {{domxref("WebGLQuery")}} インターフェイスが利用可能になりました ([Firefox バグ 1048719](https://bugzil.la/1048719))。
  - {{domxref("WebGL2RenderingContext.invalidateFrameBuffer()")}} メソッドを実装しました ([Firefox バグ 1076456](https://bugzil.la/1076456))。

- {{jsxref("Promise")}} ベースの {{domxref("MediaDevices.getUserMedia()", "getUserMedia()")}} を持つ、{{domxref("MediaDevices")}} インターフェイスを追加しました。{{domxref("Navigator.mediaDevices")}} を通して使用できます ([Firefox バグ 1033885](https://bugzil.la/1033885))。
- EME 関連の {{domxref("Navigator.requestMediaKeySystemAccess()")}} メソッドおよび {{domxref("MediaKeySystemAccess")}} をサポートしました ([Firefox バグ 1095257](https://bugzil.la/1095257))。
- セッション中で EME 関連の CDM が鍵情報を変更したときに、{{domxref("MediaKeySession/keystatuseschange_event", "keyschange")}} イベントが発生するようになりました ([Firefox バグ 1081755](https://bugzil.la/1081755))。
- バーチャルリアリティデバイスを、設定項目 `dom.vr.enabled` の元で実験的にサポートしました。既定では無効です ([Firefox バグ 1036604](https://bugzil.la/1036604))。
- 仕様書に基づき {{domxref("RTCPeerConnection.onsignalingstatechange")}} に関連づけられた関数は、イベントをパラメータとして受け取るようになりました ([Firefox バグ 1075133](https://bugzil.la/1075133))。
- Web Animations の実験的な実装を続けています。メソッド {{domxref("Animation/play", "AnimationPlayer.play()")}}、{{domxref("Animation/pause", "AnimationPlayer.pause()")}} ([Firefox バグ 1070745](https://bugzil.la/1070745)) および {{domxref("AnimationPlayer.playState")}} ([Firefox バグ 1037321](https://bugzil.la/1037321)) をサポートしました。
- 非標準の `DOMRequest` インターフェイスが `DOMRequest.then()` メソッドを持つようになりました ([Firefox バグ 839838](https://bugzil.la/839838))。
- CSSOM View のスクロール動作を制御するメソッドである {{domxref("Element.scroll()")}}、{{domxref("Element.scrollTo()")}}、{{domxref("Element.scrollBy()")}}、{{domxref("Element.scrollIntoView()")}} を実装または拡張しました ([Firefox バグ 1045754](https://bugzil.la/1045754) および [Firefox バグ 1087559](https://bugzil.la/1087559))。
- {{domxref("SVGElement")}} に {{domxref("Element.innerHTML")}} を割り当ていると、SVG ネームスペース内に要素を作成するようになりました ([Firefox バグ 886390](https://bugzil.la/886390))。
- `nsIWebBrowserPersist.saveURI()` メソッドは、以前のリリースとは互換性のない順序で 8 個の引数が必要になりました。
- Media Source Extensions (MSE) を、non-build 版 (Nightly および Developer Edition ) ではデフォルトで有効にしました ([Firefox バグ 1000686](https://bugzil.la/1000686))。Beta および Release では、引き続き無効です。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## ネットワーク

- SPDY/3 のサポートを廃止しました。SPDY/3.1 は引き続き使用可能です ([Firefox バグ 1097944](https://bugzil.la/1097944))。

## セキュリティ

- RC4 は安全でないとみなすようになり、すべての UI インジケータがそのように対応します。また SSLv3 は Firefox 34 からデフォルトで無効になっていますが、何が起きているかをユーザが理解しやすくなるように UI を変更しました ([Firefox バグ 1093595](https://bugzil.la/1093595))。
- TLS の初期ハンドシェイクで RC4 を提示しないようになりました ([Firefox バグ 1088915](https://bugzil.la/1088915))。
- CSP 1.1 の [`form-action`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#form-action) ディレクティブをサポートしました ([Firefox バグ 529697](https://bugzil.la/529697))。
- Firefox のオプションで、[Do not track](/ja/docs/Web/Security/Do_not_track_field_guide) の設定ウィジェットを有効/無効の切り替えに戻しました ([Firefox バグ 1071747](https://bugzil.la/1071747))。

## アドオン開発者と Mozilla 開発者向けの変更点

### Add-on SDK

#### ハイライト

- [`sdk/test/httpd`](/ja/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/test_httpd) モジュールを [Firefox 36](/ja/docs/Mozilla/Firefox/Releases/36) で削除しました。代わりに [addon-httpd](https://www.npmjs.com/package/addon-httpd) npm モジュールを使用してください。
- [`sdk/ui`](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/ui) ボタンにバッジを付加できます ([Firefox バグ 994280](https://bugzil.la/994280))。
- どこででも sdk モジュールにアクセスできるグローバル関数 `require` を実装しました ([Firefox バグ 1070927](https://bugzil.la/1070927))。使用方法は以下のとおりです。

  ```js
  var { require } = Cu.import(
    "resource://gre/modules/commonjs/toolkit/require.js",
    {},
  );
  ```

#### 詳細

[Firefox 35 から Firefox 36 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox35...firefox36)。

### JavaScript コードモジュール

- `PromiseUtils.resolveOrTimeout` を実装しました ([Firefox バグ 1080466](https://bugzil.la/1080466))。
- `PromiseUtils.defer` (`Promise.defer()` を置き換えるもの) を実装しました ([Firefox バグ 1093021](https://bugzil.la/1093021))。

### インターフェイス

#### nsIContentPolicy

新しい定数が `nsIContentPolicy` に追加され、Gecko 内部とアドオンコードが異なる型のリクエストをより良く区別することができるようになりました。これらは次の通りです。

- `TYPE_FETCH`
  - : {{domxref("fetch()")}} メソッドによって開始された、コンテンツの読み込みリクエストを示す。
- `TYPE_IMAGESET`
  - : {{HTMLElement("img")}} ([`srcset`](/ja/docs/Web/HTML/Element/img#srcset) 属性または {{HTMLElement("picture")}} 要素を読み込むリクエストを示す。

### XUL

_変更なし。_

### その他

- Firefox の `-remote` [コマンドラインオプション](/ja/docs/Mozilla/Command_Line_Options)を廃止しました ([Firefox バグ 1080319](https://bugzil.la/1080319))。

## 過去のバージョン

{{Firefox_for_developers('35')}}
