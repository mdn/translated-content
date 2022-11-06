---
title: Firefox 31 for developers
slug: Mozilla/Firefox/Releases/31
---

Gecko 31 を搭載した Firefox 31 は、米国時間 2014 年 7 月 22 日にリリースされました。このページでは、開発者に影響する Firefox 31 の変更点をまとめています。

## Web 開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [Web ページから色を選択するスポイトツール](/ja/docs/Tools/Eyedropper)
- [コンソールのエラーメッセージでフルスタックトレースを表示](/ja/docs/Tools/Web_Console#Error_messages)
- [ボックスモデルビューで編集が可能](/ja/docs/Tools/Page_Inspector#Box_model_view)
- [コンソールのメッセージにスタイルを設定する %c 書式](/ja/docs/Tools/Web_Console#Styling_messages)
- [ネットワークモニタの "cURL としてコピー" コマンド](/ja/docs/Tools/Network_Monitor#Copy_as_cURL)
- [ソースエディタで Sublime Text のキーバインドをサポート](/ja/docs/tools/Keyboard_shortcuts#Source_editor)
- [ネットワークモニタのログを残し続けるオプション](/ja/docs/Tools/Network_Monitor#Network_request_list)
- [Web コンソールで、JavaScript の警告をデフォルトで表示するように変更](/ja/docs/Tools/Web_Console#JavaScript_errors_and_warnings)
- [Alt+クリックでノードの子孫をすべて展開](/ja/docs/Tools/Page_Inspector#HTML_pane_2)

[Firefox 30 から Firefox 31 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921)

### CSS

- 最新の仕様の変更を反映して、CSS Variables の接頭辞 `var-` を `--` に変更しました ({{Bug(985838)}})。
- {{cssxref("hyphens")}} プロパティでポーランド語のハイフネーション規則をサポートしました ({{Bug(987668)}})。
- 韓国語のカウンタスタイルで、10,000 の倍数に不要なホワイトスペースがある問題を修正しました ({{Bug(985186)}})。
- 親の :before 疑似要素が存在して overflow が auto である場合に、CSS opacity のトランジションが機能しない問題を修正しました ({{Bug(990340)}})。
- `::-moz-math-stretchy` 疑似要素を削除しました ({{Bug(1000879)}})。

### HTML

- {{HTMLElement("track")}} を実装しました ({{Bug(629350)}})。

### JavaScript

新たな ECMAScript 6 の機能を実装しました:

- 新たな `Array` のメソッド: {{jsxref("Array.prototype.fill()")}} ({{Bug(911147)}})
- 新たな `Math` の関数: {{jsxref("Math.clz32()")}} ({{Bug(925123)}})
- 新たな `String` のメソッド: デスクトップ版 Firefox で {{jsxref("String.prototype.normalize()")}} が利用可能になりました ({{Bug(918987)}})。
- 新たな `Object` のメソッド: {{jsxref("Object.setPrototypeOf()")}}
- 新たな `Number` 定数: {{jsxref("Number.MAX_SAFE_INTEGER")}} および {{jsxref("Number.MIN_SAFE_INTEGER")}}。

### インターフェイス/API/DOM

- `KeyboardEvent` のコンストラクタを実装しました ({{Bug(930893)}})。
- Resource Timing API を実装しました ({{Bug("822480")}})。
- `KeyboardEvent.isComposing` 属性を実装しました ({{Bug(993234)}})。
- `InputEvent` インターフェイスを実装しました ({{Bug(993253)}})。
- `InputEvent.isComposing` 属性を実装しました ({{Bug(993253)}})。
- {{domxref("CSS.escape", "CSS.escape()")}} を実装しました ({{Bug(955860)}})。
- 他のブラウザと同様に {{event("mousemove")}} がキャンセル可能になりました ({{Bug(704423)}})。`preventDefault()` の呼び出しは `defaultPrevented` 属性に `true` を設定するだけであり、他の動作は変わりません。たとえば、`:hover` ステートの設定を抑止することはできません。

### MathML

- ISO/IEC CD 14496-22 3rd edtion のセクション 6.3.6 にある [OpenType MATH table](http://mpeg.chiariglione.org/standards/mpeg-4/open-font-format/text-isoiec-cd-14496-22-3rd-edition) を部分的に実装しました ({{Bug(407059)}})。詳しくは [Fonts for Mozilla's MathML engine](/ja/docs/Mozilla/MathML_Project/Fonts) をご覧ください。また [MathML torture test](/ja/docs/Mozilla/MathML_Project/MathML_Torture_Test) をお試しください。
- `::-moz-math-stretchy` 疑似要素を削除しました ({{Bug(1000879)}})。
- 可能であれば、mathvaliant が bold、italic、bold-italic である場合に Unicode の数学用英数字記号を使用するようになりました ({{Bug(930504)}})。

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## セキュリティ

- [特権コードは `Date` のインスタンスで Xray vision が適用されるようになりました](/ja/docs/Xray_vision#Xrays_for_JavaScript_objects)。

## アドオン開発者と Mozilla 開発者向けの変更点

- [昔から](http://bonsai.mozilla.org/cvsview2.cgi?diff_mode=context&whitespace_mode=show&root=/cvsroot&subdir=mozilla/browser/base/content&command=DIFF_FRAMESET&file=browser.xul&rev2=1.10&rev1=1.9) "`center`" に設定されていた、`urlbar-wrapper` (以前は `urlbar-container`) の "`align`" 属性を削除しました。これはサードパーティーのテーマに影響を与えることがわかっています。それぞれのテーマにおける正しい修正法は何かを注意深く探るべきですが、同等の効果を維持するのであればテーマに以下の CSS 規則を追加してください:
  `#urlbar-wrapper { -moz-box-align: center; }`
- [`nsIDOMWindowUtils.sendQueryContentEvent()`](</ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#sendQueryContentEvent()>) および [`nsIDOMWindowUtils.sendSelectionSetEvent()`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#sendSelectionSetEvent%28%29) が、省略可能な引数 `aAdditionalFlags` を持ちます。`aReverse` を `true` にして `nsIDOMWindowUtils.sendSelectionSetEvent()` を呼び出している場合、この変更により動作に問題が発生します。`aAdditionalFlags` について詳しくは、[各フラグの説明](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#Constants) (`QUERY_CONTENT_FLAG_*` および `SELECTION_SET_FLAG_*`) をご覧ください。

### Add-on SDK

ハイライト:

- [アドオンデバッガ](/ja/docs/Mozilla/Add-ons/Add-on_Debugger)
- [高水準な BrowserWindow オブジェクトと DOM の windows との間の変換](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#Converting_to_DOM_windows)および[高水準な Tab オブジェクトと XUL の tabs との間の変換](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#Converting_to_XUL_tabs)を行う機能を追加しました。
- Mac OS X の panel で使用するデフォルトテーマを更新しました。
- panel に [contentStyle および contentStyleFile](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#Styling_panel_content) オプションを追加しました。

[Firefox 30 から Firefox 31 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

[Firefox 30 から Firefox 31 の間に解決したバグ](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

## 関連情報

- [Firefox 31 リリースノート](http://www.mozilla.jp/firefox/31.0/releasenotes/)

### 過去のバージョン

{{Firefox_for_developers('30')}}
