---
title: Firefox 31 for developers
slug: Mozilla/Firefox/Releases/31
l10n:
  sourceCommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [ウェブページから色を選択するスポイトツール](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [コンソールのエラーメッセージでフルスタックトレースを表示](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [ボックスモデルビューで編集が可能](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [コンソールのメッセージにスタイルを設定する %c 書式](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [ネットワークモニタの "cURL としてコピー" コマンド](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [ソースエディターで Sublime Text のキーバインドをサポート](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [ネットワークモニタのログを残し続けるオプション](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [ウェブコンソールで、JavaScript の警告をデフォルトで表示するように変更](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt+クリックでノードの子孫をすべて展開](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[Firefox 30 から Firefox 31 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921)

### CSS

- 最新の仕様の変更を反映して、CSS Variables の接頭辞 `var-` を `--` に変更しました ([Firefox バグ 985838](https://bugzil.la/985838))。
- {{cssxref("hyphens")}} プロパティでポーランド語のハイフネーション規則をサポートしました ([Firefox バグ 987668](https://bugzil.la/987668))。
- 韓国語のカウンタスタイルで、10,000 の倍数に不要なホワイトスペースがある問題を修正しました ([Firefox バグ 985186](https://bugzil.la/985186))。
- 親の :before 擬似要素が存在して overflow が auto である場合に、CSS opacity のトランジションが機能しない問題を修正しました ([Firefox バグ 990340](https://bugzil.la/990340))。
- `::-moz-math-stretchy` 擬似要素を削除しました ([Firefox バグ 1000879](https://bugzil.la/1000879))。

### HTML

- {{HTMLElement("track")}} を実装しました ([Firefox バグ 629350](https://bugzil.la/629350))。

### JavaScript

新たな ECMAScript 2015 の機能を実装しました。

- 新たな `Array` のメソッド: {{jsxref("Array.prototype.fill()")}} ([Firefox バグ 911147](https://bugzil.la/911147))
- 新たな `Math` の関数: {{jsxref("Math.clz32()")}} ([Firefox バグ 925123](https://bugzil.la/925123))
- 新たな `String` のメソッド: デスクトップ版 Firefox で {{jsxref("String.prototype.normalize()")}} が利用可能になりました ([Firefox バグ 918987](https://bugzil.la/918987))。
- 新たな `Object` のメソッド: {{jsxref("Object.setPrototypeOf()")}}
- 新たな `Number` 定数: {{jsxref("Number.MAX_SAFE_INTEGER")}} および {{jsxref("Number.MIN_SAFE_INTEGER")}}。

### インターフェイス/API/DOM

- `KeyboardEvent` のコンストラクターを実装しました ([Firefox バグ 930893](https://bugzil.la/930893))。
- Resource Timing API を実装しました ([Firefox バグ 822480](https://bugzil.la/822480))。
- `KeyboardEvent.isComposing` 属性を実装しました ([Firefox バグ 993234](https://bugzil.la/993234))。
- `InputEvent` インターフェイスを実装しました ([Firefox バグ 993253](https://bugzil.la/993253))。
- `InputEvent.isComposing` 属性を実装しました ([Firefox バグ 993253](https://bugzil.la/993253))。
- {{domxref("CSS.escape", "CSS.escape()")}} を実装しました ([Firefox バグ 955860](https://bugzil.la/955860))。
- 他のブラウザーと同様に {{domxref("Element/mousemove_event", "mousemove")}} がキャンセル可能になりました ([Firefox バグ 704423](https://bugzil.la/704423))。`preventDefault()` の呼び出しは `defaultPrevented` 属性に `true` を設定するだけであり、他の動作は変わりません。たとえば、`:hover` ステートの設定を抑止することはできません。
- {{domxref("Path2D")}} インターフェイスが実装されました。
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}、{{domxref("CanvasRenderingContext2D.isPointInStroke()")}}、{{domxref("CanvasRenderingContext2D.clip()")}}、{{domxref("CanvasRenderingContext2D.fill()")}}、{{domxref("CanvasRenderingContext2D.stroke()")}} メソッドがオプションで {{domxref("Path2D")}} オブジェクトを受け付けるように更新されました。
- {{domxref("HTMLMediaElement.fastSeek()")}} を実装しました。
- `Connection` インターフェイスは {{domxref("NetworkInformation")}} に名称が変更され、新しい仕様に一致するように変更されました ([Firefox バグ 960426](https://bugzil.la/960426))。
- {{domxref("Navigator.sendBeacon()")}} が実装されました。これは、解析や他のデータの非同期送信を、送信するページが読み込まれているかどうかに依存しない方法で行うもので、 {{domxref("Window/unload_event", "unload")}} または {{domxref("Window.beforeunload_event", "beforeunload")}} ハンドラーで使用することができます。

### MathML

- ISO/IEC CD 14496-22 3rd edtion のセクション 6.3.6 にある [OpenType MATH table](http://mpeg.chiariglione.org/standards/mpeg-4/open-font-format/text-isoiec-cd-14496-22-3rd-edition) を部分的に実装しました ([Firefox バグ 407059](https://bugzil.la/407059))。詳しくは [MathML torture test](/ja/docs/Mozilla/MathML_Project/MathML_Torture_Test) をお試しください。
- `::-moz-math-stretchy` 擬似要素を削除しました ([Firefox バグ 1000879](https://bugzil.la/1000879))。
- 可能であれば、math valiant が bold、italic、bold-italic である場合に Unicode の数学用英数字記号を使用するようになりました ([Firefox バグ 930504](https://bugzil.la/930504))。

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## セキュリティ

- [特権コードは `Date` のインスタンスで Xray vision が適用されるようになりました](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects)。

## アドオン開発者と Mozilla 開発者向けの変更点

- 昔から "`center`" に設定されていた `urlbar-wrapper` （以前は `urlbar-container` ）上の "`align`" 属性が削除されました。これはサードパーティのテーマに影響を与えることが知られています。自分のテーマにとって正しい修正が何であるかはよく見ていく必要がありますが、同等の効果を維持するためには、以下の CSS ルールを追加するとよいでしょう。

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` および `nsIDOMWindowUtils.sendSelectionSetEvent()` が、省略可能な引数 `aAdditionalFlags` を持ちます。`aReverse` を `true` にして `nsIDOMWindowUtils.sendSelectionSetEvent()` を呼び出している場合、この変更により動作に問題が発生します。`aAdditionalFlags` について詳しくは、[各フラグの説明](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#定数) (`QUERY_CONTENT_FLAG_*` および `SELECTION_SET_FLAG_*`) をご覧ください。

### Add-on SDK

ハイライト:

- [アドオンデバッガー](/ja/docs/Mozilla/Add-ons/Add-on_Debugger)
- [高水準な BrowserWindow オブジェクトと DOM の windows との間の変換](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#converting_to_dom_windows)および[高水準な Tab オブジェクトと XUL の tabs との間の変換](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#converting_to_xul_tabs)を行う機能を追加しました。
- Mac OS X の panel で使用するデフォルトテーマを更新しました。
- panel に [contentStyle および contentStyleFile](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#styling_panel_content) オプションを追加しました。

[Firefox 30 から Firefox 31 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

[Firefox 30 から Firefox 31 の間に解決したバグ](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

### 過去のバージョン

{{Firefox_for_developers('30')}}
