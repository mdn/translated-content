---
title: Firefox 20 for developers
slug: Mozilla/Firefox/Releases/20
---

{{FirefoxSidebar}}

Gecko 20 を搭載した Firefox 20 は米国時間 2013 年 4 月 2 日にリリースされました。このページでは、開発者に影響する Firefox 20 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("a")}} 要素および {{HTMLElement("area")}} 要素で [`download`](/ja/docs/Web/HTML/Element/a#download) 属性をサポートしました ([Firefox バグ 676619](https://bugzil.la/676619))。
- [グローバル属性](/ja/docs/Web/HTML/Global_attributes) [`dir`](/ja/docs/Web/HTML/Global_attributes#attr-dir) の値 `auto`を実装しました ([Firefox バグ 548206](https://bugzil.la/548206))。

### JavaScript

- Harmony (EcmaScript 6) の試案に最近追加された、`Weakmap.prototype.clear()` メソッドをサポートしました ([Firefox バグ 814562](https://bugzil.la/814562))。
- C 言語スタイルの乗算関数である [`Math.imul()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/imul) メソッドをサポートしました。ただし Harmony (EcmaScript 6) への提案はまだ受け入れられておらず、現在は非標準です ([Firefox バグ 808148](https://bugzil.la/808148))。
- Kinetic 3.x と共にドラッグ可能なテキストを使用しているウェブアプリが、Canvas バックエンドとして Cairo を使用している場合でも動作するようになりました。([Firefox バグ 835064](https://bugzil.la/835064))
- [for each...in](/ja/docs/JavaScript/Reference/Statements/for_each...in) 文は非推奨になりましたので、使用するべきではありません。新たに [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) 文の使用を検討してください ([Firefox バグ 804834](https://bugzil.la/804834))。

### CSS

- [CSS Flexbox](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) がデフォルトで、プレリリースビルドのみ (Beta を除く) で利用可能になりました。Release ビルドでは、about:config で設定を変更することで利用できます。
- [CSS Masking specification](https://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html) より、`mask-type` プロパティをサポートしました ([Firefox バグ 793617](https://bugzil.la/793617))。

### DOM

- {{domxref("HTMLMediaElement")}} で `playbackRate` プロパティを (読み取り・書き込みともに)、ピッチ補正と合わせてサポートしました。ピッチ補正は `mozPreservesPitch` プロパティを使用して制御できます ([Firefox バグ 495040](https://bugzil.la/495040))。
- CSSOM: 新たに {{domxref("CSSGroupingRule")}} および {{domxref("CSSConditionRule")}} をサポートしました ([Firefox バグ 814907](https://bugzil.la/814907))。
- CSSOM: {{domxref("CSSRule")}} で、定数 `CSSRule.MOZ_KEYFRAME_RULE` および `CSSRule.MOZ_KEYFRAMES_RULE` の接頭辞が外れて `CSSRule.KEYFRAME_RULE` および `CSSRule.KEYFRAMES_RULE` になりました。接頭辞つきのものはウェブ開発者によるコードの移行を支援するため、一時的に維持されています [Firefox バグ 816431](https://bugzil.la/816431))。
- CSSOM: {{domxref("CSSMediaRule")}} に `conditionText` の値を設定することが可能になりました ([Firefox バグ 815021](https://bugzil.la/815021))。
- {{domxref("DOMParser")}} の `parseFromStream` メソッドおよび `parseFromBuffer` メソッドは、Web Content から使用できなくなりました ([Firefox バグ 816410](https://bugzil.la/816410))。
- [`XMLSerializer`](/ja/docs/Web/API/XMLSerializer) の `serializeToStream` メソッドは、Web Content から使用できなくなりました ([Firefox バグ 816410](https://bugzil.la/816410))。
- `TextDecoder` インターフェイスおよび `TextEncoder` インターフェイスが、Worker で利用可能になりました ([Firefox バグ 795542](https://bugzil.la/795542))。
- `CSS.supports()` メソッドをサポートしました ([Firefox バグ 779917](https://bugzil.la/779917))。
- UndoManager をサポートしました ([Firefox バグ 617532](https://bugzil.la/617532))。
- CSSOM で、{{domxref("CaretPosition")}} を返す {{domxref("document.caretPositionFromPoint")}} メソッドを実装しました。
- {{domxref("tableRow.insertCell")}} メソッドおよび {{domxref("table.insertRow")}} メソッドの引数 index は、HTML 仕様書のとおり省略可能になりました。

### MathML

- MathML の記述者がドキュメントの "不正なマークアップ" エラーをデバッグすることを支援するため、MathML のパースエラー (子要素が過剰 / 不足など) や、非推奨の属性や誤った属性値の警告を[エラーコンソール](/ja/docs/Error_Console)に表示するようになりました。
- `scriptminsize` 属性が単位のない値やパーセント値を受け入れるようになりました。これらは、既定値 ("8pt") に対する倍数として解釈されます。
- 単位のない値は、`mathsize` 属性および `fontsize` 属性も受け入れます。これらの値は既定値に掛けられます。

## アドオン開発者と Mozilla 開発者向けの変更点

- [ECMAScript for XML (E4X)](/ja/docs/E4X) はすべての chrome および content のスクリプトで無効になりました。content では先に Firefox 17 で無効にしており、Firefox 21 では完全に削除されます。代わりに DOMParser/DOMSerializer または非ネイティブの JXON アルゴリズムを使用してください。
- `nsIDOMParserJS` インターフェイスを削除しました ([Firefox バグ 816410](https://bugzil.la/816410))。代替として [`nsIDOMParser`](/ja/docs/nsIDOMParser) をご覧ください。
- Content Preferences: `nsIContentPrefService` インターフェイスは非推奨になり、非同期の `nsIContentPrefService2` storage API を実装しました。

## 関連情報

- [Firefox 20 リリースノート](http://www.mozilla.jp/firefox/20.0/releasenotes/)
- [Firefox 20 アドオン互換性情報](https://dev.mozilla.jp/2013/03/firefox-20-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('19')}}
