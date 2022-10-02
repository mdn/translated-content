---
title: Firefox 39 for developers
slug: Mozilla/Firefox/Releases/39
---

Firefox 39 は、米国時間 2015 年 6 月 30 日にリリースされました。このページでは、開発者に影響する Firefox 39 の変更点をまとめています。

## Web 開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [WebIDE で、Wi-Fi 経由で Firefox OS デバイスのデバッグが可能になりました](/ja/docs/Tools/WebIDE/Setting_up_runtimes#Connecting_over_WiFi)
- [WebIDE で Cordova のプロジェクトをサポートしました](/ja/docs/Tools/WebIDE/Working_with_Cordova_apps_in_WebIDE)
- [アニメーションビューで早戻し、早送り、特定の時間へのジャンプが可能になりました](/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations#Firefox_39)
- [3 次ベジェ曲線エディタにプリセットを 31 個搭載しました](/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations#Firefox_39)
- [インスペクタで要素のドラッグ・アンド・ドロップが可能になりました](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Drag_and_drop)
- [Web コンソールのコマンド履歴が、セッションをまたいで維持されるようになりました](/ja/docs/Tools/Web_Console#Command_history)
- [コンソールで最後に評価された式の結果を表示する $\_ コマンド](/ja/docs/Tools/Web_Console#Helper_commands)
- [インライン要素のボックスモデルのハイライト機能を改善](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_the_box_model#Firefox_39)

[Firefox 38 から Firefox 39 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&query_based_on=devtools_resolved_week&chfieldto=2015-03-31&chfield=resolution&query_format=advanced&chfieldfrom=2015-02-22&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&known_name=devtools_resolved_week&list_id=12157026)

### CSS

- {{cssxref("list-style-type")}} プロパティと短縮プロパティである {{cssxref("list-style")}} で、{{cssxref("&lt;string&gt;")}} 型をサポートしました ({{bug(1144607)}})。
- CSS Scroll Snapping を実装しました ({{bug(945584)}} および {{bug(1138658)}})。
- CSS Animations と CSS Transitions のカスケーディングを、最新の仕様に合致するよう修正しました ({{bug(1125455)}})。
- {{cssxref("writing-mode")}} の縦書きをサポートしました。Nightly および Developer Edition ではデフォルトで有効ですが、Beta および Release では無効化しています ({{bug(1099032)}})。現在の実装は不完全であり、またテーブルなど一部のウィジェットでは対応していない値があります。

### HTML

- {{glossary("ARIA")}} の新たなロールである `switch` をサポートしました ({{bug(1136563)}})。
- 情報を一切明らかにせずに将来の接続を先に始めることを可能にする、`<link rel="preconnect">` を実装しました ({{bug(1135160)}})。

### JavaScript

- [`RegExp` コンストラクタ](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)は第 1 引数に `RegExp`、また第 2 引数に `flags` を指定した場合に、例外が発生しないようになりました ({{bug(1108949)}})。
- {{jsxref("Object.noSuchMethod", "Object.prototype.__noSuchMethod__")}} プロパティは非推奨になり、コンソールに警告を表示します ({{bug(1140428)}} および [platform でのアナウンス](https://groups.google.com/forum/#!topic/mozilla.dev.platform/0EkHgphxUo8)をご覧ください)。
- {{jsxref("Proxy")}} オブジェクトの実装を、ES6 仕様へさらに準拠するよう更新しました:

  - {{jsxref("Global_Objects/Proxy/handler/defineProperty", "defineProperty")}} ハンドラおよび {{jsxref("Global_Objects/Proxy/handler/set", "set")}} ハンドラは、成功時に `true` を、strict モードで成功しない場合は {{jsxref("TypeError")}} 例外を明示的に返すことが必要になりました ({{bug(1132522)}})。
  - {{domxref("window")}} をターゲットとして設定した場合、これらのハンドラで `TypeError` 例外が発生します ({{bug(828137)}})。

- [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`) を使用する際、行末 (`\n`) をアロー関数の引数の後ろに置くことができなくなりました (`() \n => {}`) ({{bug(1141392)}})。
- {{jsxref("RegExp.prototype.toString")}} がジェネリック関数になりました ({{bug(1079919)}})。
- {{jsxref("String.prototype.match()")}}、{{jsxref("String.prototype.search()")}}、{{jsxref("String.prototype.replace()")}} の非標準引数 `flags` が非推奨になり、コンソールに警告を表示します({{bug(1142351)}})。
- 最新の ES6 ドラフトに準拠させるため、{{jsxref("Object.assign()")}} の try/catch の動作を削除しました ({{bug(1103344)}})。

### インターフェイス/API/DOM

- 実験的機能である {{domxref("CanvasRenderingContext2D.addHitRegion()")}} メソッドで、`path` オプションをサポートしました。これは [hit region](/ja/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility#Hit_regions) を {{domxref("Path2D")}} オブジェクトに追加できます ({{bug(1129147)}})。
- {{domxref("FormData")}} オブジェクトを操作する新たなメソッドを追加しました ({{bug(1085283)}})。また、Web workers で `FormData` をサポートしました ({{bug(739173)}})。
- 非標準の {{domxref("XMLHttpRequest.sendAsBinary()")}} メソッドを削除しました ({{bug(853162)}})。
- Web Animations の実験的な実装を続けています。{{domxref("AnimationPlayer.startTime")}} が書き込み可能になりました ({{bug(1073379)}})。
- [Service Worker](/ja/docs/Web/API/ServiceWorker_API) の実験的な実装を進めています。{{domxref("Cache")}} インターフェイスおよび {{domxref("CacheStorage")}} インターフェイスを実装しました ({{bug(940273)}})。
- [Fetch API](/ja/docs/Web/API/Fetch_API) の実験的な実装をデフォルトで有効にしました ({{bug(1133861)}})。
- WebGL2 の実験的な実装を続けています。{{domxref("WebGLSync")}} を実装しました ({{bug(1048721)}})。
- デスクトップ版 Firefox で {{domxref("MouseEvent.offsetX")}} および {{domxref("MouseEvent.offsetY")}} をサポートしました ({{bug(69787)}}。Android 版 Firefox および Firefox OS ではサポートしていません ([Firefox 43](/ja/docs/Mozilla/Firefox/Releases/43) でサポート予定)。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

### その他

- [WOFF2](/ja/docs/Web/Guide/WOFF) フォントのサポートを Release バージョンの Firefox でも、デフォルトで有効にしました (Nightly や Developer Edition に加えて、Beta や Release も有効) ({{bug(1084026)}})。
- [`-remote`](/ja/docs/Mozilla/Command_Line_Options#-remote_remote_command) コマンドラインオプションを削除しました ({{bug(1080319)}})。
- 新たに [Unicode 8.0 skin tone emoji](http://www.bbc.co.uk/newsbeat/article/32220611/diverse-thumbs-up-emojis-with-different-skin-tones-finally-here) サポートしました ({{bug(1153460)}})。

## ネットワーク

- SSLv3 のサポートを完全に廃止しました ({{bug(1106470)}})。

## セキュリティ

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

_変更なし。_

## 関連情報

- [Firefox 39 リリースノート](http://www.mozilla.jp/firefox/39.0/releasenotes/)
- [Firefox 39 アドオン互換性情報](https://dev.mozilla.jp/2015/05/firefox-39-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers('38')}}
