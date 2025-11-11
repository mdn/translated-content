---
title: Firefox 26 for developers
slug: Mozilla/Firefox/Releases/26
---

Firefox 26 は米国時間 2013 年 12 月 10 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者やアドオン開発者にとっても有益な主な変更点を紹介します。

## ウェブ開発者向けの変更点一覧

### CSS

- 現在も接頭辞付きである {{cssxref("text-decoration-line")}} プロパティは、`'blink'` を正しい値とみなすようになりました。ただし、コンテンツは点滅しません ([Firefox バグ 812995](https://bugzil.la/812995))。
- 非標準の {{cssxref("-moz-text-blink")}} プロパティを削除しました ([Firefox バグ 812995](https://bugzil.la/812995))。
- CSS Images & Values Level 4 バージョンにある、`from-image` キーワードと EXIF サポートを備えた {{cssxref("image-orientation")}} プロパティをサポートしました ([Firefox バグ 825771](https://bugzil.la/825771))。
- `position: sticky` を実験的にサポートしました。設定 `layout.css.sticky.enabled` で有効にできます ([Firefox バグ 886646](https://bugzil.la/886646))。
- {{cssxref("text-align")}} プロパティを `::-moz-placeholder` 擬似要素へ適用可能になりました ([Firefox バグ 915551](https://bugzil.la/915551))。

### HTML

- `HTMLSelectElement.selectedOptions` プロパティを実装しました ([Firefox バグ 596681](https://bugzil.la/596681))。
- type が `email` の {{HTMLElement("input")}} で、ドメインのラベルが 63 文字を超える値を正しいと考えないようになりました ([Firefox バグ 884332](https://bugzil.la/884332))。
- `HTMLInputElement.width` プロパティおよび `height` プロパティは、`type` が `image` ではない場合に `0` を返すようになりました ([Firefox バグ 905240](https://bugzil.la/905240))。
- 包含する要素のひとつが無効であるときに {{HTMLElement("fieldset")}} 要素が無効になり、{{cssxref(":invalid")}} 擬似クラスでスタイルを設定できます ([Firefox バグ 717181](https://bugzil.la/717181))。

### JavaScript

[EcmaScript 2015](/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) の実装が続いています!

- ECMAScript 2015 に準拠した構文の[ジェネレーター (yield)](http://wiki.ecmascript.org/doku.php?id=harmony:generators) を実装しました ([Firefox バグ 666399](https://bugzil.la/666399))。
- ジェネレーター/イテレーターの結果が `{ value: foo, done: bool }` のように囲まれるようになりました ([Firefox バグ 907744](https://bugzil.la/907744))。
- [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) へ新たに、数値計算メソッドである [`Math.fround()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/fround) を実装しました ([Firefox バグ 900125](https://bugzil.la/900125))。
- [予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#キーワード)を関数名に使用できません。使用すると [`SyntaxError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) が発生します ([Firefox バグ 907958](https://bugzil.la/907958))。
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)の構文が、デフォルト引数の後にデフォルトのない引数を許容するように更新されました。 `function f(x=1, y)` のような形です。 [Firefox バグ 777060](https://bugzil.la/777060) を参照してください。
- {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} が実装されました ([Firefox バグ 904701](https://bugzil.la/904701))。

### インターフェイス/API/DOM

- {{domxref("DOMImplementation.createDocument")}} の最後の引数 (doctype) を省略可能にしました ([Firefox バグ 909859](https://bugzil.la/909859))。
- 1 回の呼び出しで複数のクラスの追加や削除が可能な、新しい {{domxref("element.classList")}} の仕様を実装しました ([Firefox バグ 814014](https://bugzil.la/814014))。
- {{domxref("URL.URL", "URL()")}} コンストラクターを {{domxref("URL")}} インターフェイスに実装しました ([Firefox バグ 887364](https://bugzil.la/887364))。
- {{domxref("HTMLAnchorElement/origin", "URLUtils.origin")}}, {{domxref("HTMLAnchorElement/password", "URLUtils.password")}}, {{domxref("HTMLAnchorElement/username", "URLUtils.username")}} の各プロパティが {{domxref("URLUtils")}} を実装するすべてのインターフェイス、{{domxref("URL")}}、{{domxref("Location")}}、{{domxref("HTMLAnchorElement")}}、{{domxref("HTMLAreaElement")}} で利用可能になりました。 ([Firefox バグ 887364](https://bugzil.la/887364))。
- {{domxref("URL")}} インターフェイスが、Web Workers からアクセス可能になりました ([Firefox バグ 887364](https://bugzil.la/887364))。
- IndexedDB が「楽観的」なストレージ領域として使用できるようになりました。プロンプトを必要とせず、データは LRU 立ち退きポリシーでプールに保存され、短い一時的なストレージとなります ([Firefox バグ 785884](https://bugzil.la/785884))。
- {{domxref("WaveShaperNode.oversample")}} についての対応が追加されました ([Firefox バグ 875277](https://bugzil.la/875277))。
- 永続的なストレージのパスを `<profile>/indexedDB` から `<profile>/storage/persistent` に変更しました (b2g では `/data/local/indexedDB` から `/data/local/storage/persistent` に変更)。
- {{domxref("Screen.orientation")}} プロパティおよび {{domxref("Screen.lockOrientation()")}} メソッドで値 `default` をサポートしました。デバイスに応じて `portrait-primary` または `landscape-primary` が対応づけられます ([Firefox バグ 908058](https://bugzil.la/908058))。
- {{domxref("Event")}} コンストラクターを Web workers で使用できます ([Firefox バグ 910910](https://bugzil.la/910910))。
- {{HTMLElement("iframe")}} に `sandbox` 属性がついている場合、埋め込まれているページで {{domxref("Document.domain")}} プロパティを設定しようとすると、セキュリティエラーが発生するようになりました ([Firefox バグ 907892](https://bugzil.la/907892))。
- {{domxref("MessageEvent")}} インターフェイスを、最新の仕様に準拠するように更新しました。`initMessageEvent` メソッドを削除した一方で、インターフェイスがコンストラクターを持つようになりました ([Firefox バグ 848294](https://bugzil.la/848294))。
- 設定 `dom.messageChannel.enabled` のもとで、HTML5 の `MessageChannel` API を実装しました ([Firefox バグ 677638](https://bugzil.la/677638))。
- すべての WebVTT に関する実装と同様に、設定 `media.webvtt.enabled` のもとで `VTTCue` をサポートしました ([Firefox バグ 868509](https://bugzil.la/868509))。
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API) が既定で利用できるようになりました ([Firefox バグ 885505](https://bugzil.la/885505))。

### MathML

- {{MathMLElement("mmultiscripts")}}、{{MathMLElement("msub")}}、{{MathMLElement("msup")}}、{{MathMLElement("msubsup")}} の一貫性のないレンダリングを統一しました。また、これらの要素のエラー処理が改善しました ([Firefox バグ 827713](https://bugzil.la/827713))。

### SVG

- OpenType 内への SVG グリフの包含である _SVG-in-OpenType_ を、現行バージョンの仕様に適合するよう更新しました ([Firefox バグ 906521](https://bugzil.la/906521))。
- `SVGElement.ownerSVGElement()` メソッドがエラーを発生させないようになりました ([Firefox バグ 835048](https://bugzil.la/835048))。

## 開発ツール

- インスペクターのリモートアクセスが可能になりました ([Firefox バグ 805526](https://bugzil.la/805526)).
- このリリースで、ウェブコンソールのテキストが選択可能になり、{{cssxref("::before")}} および {{cssxref("::after")}} が調査可能になり、そしてデバッガーやレスポンシブデザインビューの機能追加を計画しています。(<https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/>)

## 関連情報

- [Firefox 26 リリースノート](http://www.mozilla.jp/firefox/26.0/releasenotes/)
- [Firefox 26 アドオン互換性情報](https://dev.mozilla.jp/2013/11/firefox-26-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('25')}}
