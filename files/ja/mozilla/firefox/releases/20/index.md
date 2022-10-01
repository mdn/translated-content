---
title: Firefox 20 for developers
slug: Mozilla/Firefox/Releases/20
---

Gecko 20 を搭載した Firefox 20 は米国時間 2013 年 4 月 2 日にリリースされました。このページでは、開発者に影響する Firefox 20 の変更点をまとめています。

## Web 開発者向けの変更点一覧

### HTML

- {{HTMLElement("a")}} 要素および {{HTMLElement("area")}} 要素で {{htmlattrxref("download", "a") }} 属性をサポートしました ({{bug("676619")}})。
- [グローバル属性](/ja/docs/HTML/Global_attributes) [`dir`](/ja/docs/HTML/Global_attributes#attr-dir) の値 `auto`を実装しました ({{bug("548206")}})。

### JavaScript

- Harmony (EcmaScript 6) の試案に最近追加された、`Weakmap.prototype.clear()` メソッドをサポートしました ({{bug("814562")}})。
- C 言語スタイルの乗算関数である [`Math.imul()`](/ja/docs/JavaScript/Reference/Global_Objects/Math/imul) メソッドをサポートしました。ただし Harmony (EcmaScript 6) への提案はまだ受け入れられておらず、現在は非標準です ({{bug("808148")}})。
- Kinetic 3.x と共にドラッグ可能なテキストを使用している Web アプリが、Canvas バックエンドとして Cairo を使用している場合でも動作するようになりました。({{bug("835064")}})
- [for each...in](/ja/docs/JavaScript/Reference/Statements/for_each...in) 文は非推奨になりましたので、使用するべきではありません。新たに [for...of](/ja/docs/JavaScript/Reference/Statements/for...of) 文の使用を検討してください ({{Bug("804834")}})。

### CSS

- [CSS Flexbox](/ja/docs/CSS/Using_CSS_flexible_boxes) がデフォルトで、プレリリースビルドのみ (Beta を除く) で利用可能になりました。Release ビルドでは、about:config で設定を変更することで利用できます。
- [CSS Masking specification](https://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html) より、`mask-type` プロパティをサポートしました ({{bug("793617")}})。

### DOM

- {{domxref("HTMLMediaElement")}} で `playbackRate` プロパティを (読み取り・書き込みともに)、ピッチ補正と合わせてサポートしました。ピッチ補正は `mozPreservesPitch` プロパティを使用して制御できます ({{bug('495040')}})。
- CSSOM: 新たに {{domxref("CSSGroupingRule")}} および {{domxref("CSSConditionRule")}} をサポートしました ({{bug("814907")}})。
- CSSOM: {{domxref("CSSRule")}} で、定数 `CSSRule.MOZ_KEYFRAME_RULE` および `CSSRule.MOZ_KEYFRAMES_RULE` の接頭辞が外れて `CSSRule.KEYFRAME_RULE` および `CSSRule.KEYFRAMES_RULE` になりました。接頭辞つきのものは Web 開発者によるコードの移行を支援するため、一時的に維持されています {{bug("816431")}})。
- CSSOM: {{domxref("CSSMediaRule")}} に `conditionText` の値を設定することが可能になりました ({{bug("815021")}})。
- {{domxref("DOMParser")}} の `parseFromStream` メソッドおよび `parseFromBuffer` メソッドは、Web Content から使用できなくなりました ({{bug('816410')}})。
- [`XMLSerializer`](/ja/docs/XMLSerializer) の `serializeToStream` メソッドは、Web Content から使用できなくなりました ({{bug('816410')}})。
- `TextDecoder` インタフェースおよび `TextEncoder` インタフェースが、Worker で利用可能になりました ({{bug('795542')}})。
- `CSS.supports()` メソッドをサポートしました ({{bug("779917")}})。
- UndoManager をサポートしました ({{bug("617532")}})。
- CSSOM で、{{domxref("CaretPosition")}} を返す {{domxref("document.caretPositionFromPoint")}} メソッドを実装しました。
- {{domxref("tableRow.insertCell")}} メソッドおよび {{domxref("table.insertRow")}} メソッドの引数 index は、HTML 仕様書のとおり省略可能になりました。

### MathML

- MathML の記述者がドキュメントの "不正なマークアップ" エラーをデバッグすることを支援するため、MathML のパースエラー (子要素が過剰 / 不足など) や、非推奨の属性や誤った属性値の警告を[エラーコンソール](/ja/docs/Error_Console)に表示するようになりました。
- `scriptminsize` 属性が単位のない値やパーセント値を受け入れるようになりました。これらは、既定値 ("8pt") に対する倍数として解釈されます。
- 単位のない値は、`mathsize` 属性および `fontsize` 属性も受け入れます。これらの値は既定値に掛けられます。

## アドオン開発者と Mozilla 開発者向けの変更点

- [ECMAScript for XML (E4X)](/ja/docs/E4X) はすべての chrome および content のスクリプトで無効になりました。content では先に Firefox 17 で無効にしており、Firefox 21 では完全に削除されます。代わりに DOMParser/DOMSerializer または非ネイティブの JXON アルゴリズムを使用してください。
- `nsIDOMParserJS` インタフェースを削除しました ({{bug('816410')}})。代替として [`nsIDOMParser`](/ja/docs/nsIDOMParser) をご覧ください。
- Content Preferences: `nsIContentPrefService` インタフェースは非推奨になり、非同期の `nsIContentPrefService2` storage API を実装しました。

## 関連情報

- [Firefox 20 リリースノート](http://www.mozilla.jp/firefox/20.0/releasenotes/)
- [Firefox 20 アドオン互換性情報](https://dev.mozilla.jp/2013/03/firefox-20-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('19')}}
