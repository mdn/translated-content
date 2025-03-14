---
title: Firefox 39 for developers
slug: Mozilla/Firefox/Releases/39
---

{{FirefoxSidebar}}

Firefox 39 は、米国時間 2015 年 6 月 30 日にリリースされました。このページでは、開発者に影響する Firefox 39 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [WebIDE で、Wi-Fi 経由で Firefox OS デバイスのデバッグが可能になりました](/ja/docs/Tools/WebIDE/Setting_up_runtimes#Connecting_over_WiFi)
- [WebIDE で Cordova のプロジェクトをサポートしました](/ja/docs/Tools/WebIDE/Working_with_Cordova_apps_in_WebIDE)
- [アニメーションビューで早戻し、早送り、特定の時間へのジャンプが可能になりました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox_39)
- [3 次ベジェ曲線エディターにプリセットを 31 個搭載しました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox_39)
- [インスペクターで要素のドラッグ・アンド・ドロップが可能になりました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#drag_and_drop)
- [ウェブコンソールのコマンド履歴が、セッションをまたいで維持されるようになりました](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#command_history)
- [コンソールで最後に評価された式の結果を表示する $\_ コマンド](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper_commands)
- [インライン要素のボックスモデルのハイライト機能を改善](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#firefox_39)

[Firefox 38 から Firefox 39 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&query_based_on=devtools_resolved_week&chfieldto=2015-03-31&chfield=resolution&query_format=advanced&chfieldfrom=2015-02-22&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&known_name=devtools_resolved_week&list_id=12157026)

### CSS

- {{cssxref("list-style-type")}} プロパティと短縮プロパティである {{cssxref("list-style")}} で、{{cssxref("&lt;string&gt;")}} 型をサポートしました ([Firefox バグ 1144607](https://bugzil.la/1144607))。
- CSS Scroll Snapping を実装しました ([Firefox バグ 945584](https://bugzil.la/945584) および [Firefox バグ 1138658](https://bugzil.la/1138658))。
- CSS Animations と CSS Transitions のカスケーディングを、最新の仕様に合致するよう修正しました ([Firefox バグ 1125455](https://bugzil.la/1125455))。
- {{cssxref("writing-mode")}} の縦書きをサポートしました。Nightly および Developer Edition ではデフォルトで有効ですが、Beta および Release では無効化しています ([Firefox バグ 1099032](https://bugzil.la/1099032))。現在の実装は不完全であり、またテーブルなど一部のウィジェットでは対応していない値があります。

### HTML

- {{glossary("ARIA")}} の新たなロールである `switch` をサポートしました ([Firefox バグ 1136563](https://bugzil.la/1136563))。
- 情報を一切明らかにせずに将来の接続を先に始めることを可能にする、`<link rel="preconnect">` を実装しました ([Firefox バグ 1135160](https://bugzil.la/1135160))。

### JavaScript

- [`RegExp` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)は第 1 引数に `RegExp`、また第 2 引数に `flags` を指定した場合に、例外が発生しないようになりました ([Firefox バグ 1108949](https://bugzil.la/1108949))。
- `Object.prototype.__noSuchMethod__` プロパティは非推奨になり、コンソールに警告を表示します ([Firefox バグ 1140428](https://bugzil.la/1140428) および [platform でのアナウンス](https://groups.google.com/forum/#!topic/mozilla.dev.platform/0EkHgphxUo8)をご覧ください)。
- {{jsxref("Proxy")}} オブジェクトの実装を、ES6 仕様へさらに準拠するよう更新しました:

  - {{jsxref("Global_Objects/Proxy/handler/defineProperty", "defineProperty")}} ハンドラーおよび {{jsxref("Global_Objects/Proxy/handler/set", "set")}} ハンドラーは、成功時に `true` を、strict モードで成功しない場合は {{jsxref("TypeError")}} 例外を明示的に返すことが必要になりました ([Firefox バグ 1132522](https://bugzil.la/1132522))。
  - {{domxref("window")}} をターゲットとして設定した場合、これらのハンドラーで `TypeError` 例外が発生します ([Firefox バグ 828137](https://bugzil.la/828137))。

- [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`) を使用する際、行末 (`\n`) をアロー関数の引数の後ろに置くことができなくなりました (`() \n => {}`) ([Firefox バグ 1141392](https://bugzil.la/1141392))。
- {{jsxref("RegExp.prototype.toString")}} がジェネリック関数になりました ([Firefox バグ 1079919](https://bugzil.la/1079919))。
- {{jsxref("String.prototype.match()")}}、{{jsxref("String.prototype.search()")}}、{{jsxref("String.prototype.replace()")}} の非標準引数 `flags` が非推奨になり、コンソールに警告を表示します([Firefox バグ 1142351](https://bugzil.la/1142351))。
- 最新の ES6 ドラフトに準拠させるため、{{jsxref("Object.assign()")}} の try/catch の動作を削除しました ([Firefox バグ 1103344](https://bugzil.la/1103344))。

### インターフェイス/API/DOM

- 実験的機能である {{domxref("CanvasRenderingContext2D.addHitRegion()")}} メソッドで、`path` オプションをサポートしました。これは [hit region](/ja/docs/Web/API/Canvas_API/Tutorial#hit_regions) を {{domxref("Path2D")}} オブジェクトに追加できます ([Firefox バグ 1129147](https://bugzil.la/1129147))。
- {{domxref("FormData")}} オブジェクトを操作する新たなメソッドを追加しました ([Firefox バグ 1085283](https://bugzil.la/1085283))。また、Web workers で `FormData` をサポートしました ([Firefox バグ 739173](https://bugzil.la/739173))。
- 非標準の {{domxref("XMLHttpRequest.sendAsBinary()")}} メソッドを削除しました ([Firefox バグ 853162](https://bugzil.la/853162))。
- Web Animations の実験的な実装を続けています。{{domxref("AnimationPlayer.startTime")}} が書き込み可能になりました ([Firefox バグ 1073379](https://bugzil.la/1073379))。
- [Service Worker](/ja/docs/Web/API/Service_Worker_API) の実験的な実装を進めています。{{domxref("Cache")}} インターフェイスおよび {{domxref("CacheStorage")}} インターフェイスを実装しました ([Firefox バグ 940273](https://bugzil.la/940273))。
- [Fetch API](/ja/docs/Web/API/Fetch_API) の実験的な実装をデフォルトで有効にしました ([Firefox バグ 1133861](https://bugzil.la/1133861))。
- WebGL2 の実験的な実装を続けています。{{domxref("WebGLSync")}} を実装しました ([Firefox バグ 1048721](https://bugzil.la/1048721))。
- デスクトップ版 Firefox で {{domxref("MouseEvent.offsetX")}} および {{domxref("MouseEvent.offsetY")}} をサポートしました ([Firefox バグ 69787](https://bugzil.la/69787)。Android 版 Firefox および Firefox OS ではサポートしていません ([Firefox 43](/ja/docs/Mozilla/Firefox/Releases/43) でサポート予定)。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

### その他

- [WOFF2](/ja/docs/Web/CSS/CSS_fonts/WOFF) フォントのサポートを Release バージョンの Firefox でも、デフォルトで有効にしました (Nightly や Developer Edition に加えて、Beta や Release も有効) ([Firefox バグ 1084026](https://bugzil.la/1084026))。
- [`-remote`](https://wiki.mozilla.org/Firefox/CommandLineOptions#-remote_remote_command) コマンドラインオプションを削除しました ([Firefox バグ 1080319](https://bugzil.la/1080319))。
- 新たに [Unicode 8.0 skin tone emoji](https://www.bbc.co.uk/newsbeat/article/32220611/diverse-thumbs-up-emojis-with-different-skin-tones-finally-here) サポートしました ([Firefox バグ 1153460](https://bugzil.la/1153460))。

## ネットワーク

- SSLv3 のサポートを完全に廃止しました ([Firefox バグ 1106470](https://bugzil.la/1106470))。

## セキュリティ

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

_変更なし。_

## 関連情報

- [Firefox 39 リリースノート](http://www.mozilla.jp/firefox/39.0/releasenotes/)
- [Firefox 39 アドオン互換性情報](https://dev.mozilla.jp/2015/05/firefox-39-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers('38')}}
