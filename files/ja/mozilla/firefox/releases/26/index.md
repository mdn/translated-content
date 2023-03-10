---
title: Firefox 26 for developers
slug: Mozilla/Firefox/Releases/26
---

{{FirefoxSidebar}}

Firefox 26 は米国時間 2013 年 12 月 10 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者やアドオン開発者にとっても有益な主な変更点を紹介します。

## ウェブ開発者向けの変更点一覧

### CSS

- 現在も接頭辞付きである {{cssxref("text-decoration-line")}} プロパティは、`'blink'` を正しい値とみなすようになりました。ただし、コンテンツは点滅しません ({{bug("812995")}})。
- 非標準の {{cssxref("-moz-text-blink")}} プロパティを削除しました ({{bug("812995")}})。
- CSS Images & Values Level 4 バージョンにある、`from-image` キーワードと EXIF サポートを備えた {{cssxref("image-orientation")}} プロパティをサポートしました ({{bug(825771)}})。
- `position: sticky` を実験的にサポートしました。設定 `layout.css.sticky.enabled` で有効にできます ({{bug(886646)}})。
- {{cssxref("text-align")}} プロパティを `::-moz-placeholder` 疑似要素へ適用可能になりました ({{bug(915551)}})。

### HTML

- `HTMLSelectElement.selectedOptions` プロパティを実装しました ({{bug("596681")}})。
- type が `email` の {{HTMLElement("input")}} で、ドメインのラベルが 63 文字を超える値を正しいと考えないようになりました ({{bug("884332")}})。
- `HTMLInputElement.width` プロパティおよび `height` プロパティは、`type` が `image` ではない場合に `0` を返すようになりました ({{bug("905240")}})。
- 包含する要素のひとつが無効であるときに {{HTMLElement("fieldset")}} 要素が無効になり、{{cssxref(":invalid")}} 疑似クラスでスタイルを設定できます ({{bug("717181")}})。

### JavaScript

[EcmaScript 2015](/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) の実装が続いています!

- ECMAScript 2015 に準拠した構文の[ジェネレーター (yield)](http://wiki.ecmascript.org/doku.php?id=harmony:generators) を実装しました ({{bug("666399")}})。
- ジェネレーター/イテレーターの結果が `{ value: foo, done: bool }` のように囲まれるようになりました ({{bug(907744)}})。
- [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) へ新たに、数値計算メソッドである [`Math.fround()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/fround) を実装しました ({{bug("900125")}})。
- [予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)を関数名に使用できません。使用すると [`SyntaxError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) が発生します ({{bug("907958")}})。
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)の構文が、デフォルト引数の後にデフォルトのない引数を許容するように更新されました。 `function f(x=1, y)` のような形です。 {{bug(777060)}} を参照してください。
- {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} が実装されました ({{bug(904701)}})。

### インターフェイス/API/DOM

- {{domxref("DOMImplementation.createDocument")}} の最後の引数 (doctype) を省略可能にしました ({{bug(909859)}})。
- 1 回の呼び出しで複数のクラスの追加や削除が可能な、新しい {{domxref("element.classList")}} の仕様を実装しました ({{bug(814014)}})。
- {{domxref("URL.URL", "URL()")}} コンストラクターを {{domxref("URL")}} インタフェースに実装しました ({{bug("887364")}})。
- {{domxref("HTMLAnchorElement/origin", "URLUtils.origin")}}, {{domxref("HTMLAnchorElement/password", "URLUtils.password")}}, {{domxref("HTMLAnchorElement/username", "URLUtils.username")}} の各プロパティが {{domxref("URLUtils")}} を実装するすべてのインターフェイス、{{domxref("URL")}}、{{domxref("Location")}}、{{domxref("HTMLAnchorElement")}}、{{domxref("HTMLAreaElement")}} で利用可能になりました。 ({{bug("887364")}})。
- {{domxref("URL")}} インタフェースが、Web Workers からアクセス可能になりました ({{bug("887364")}})。
- IndexedDB が「楽観的」なストレージ領域として使用できるようになりました。プロンプトを必要とせず、データは LRU 立ち退きポリシーでプールに保存され、短い一時的なストレージとなります ({{bug("785884")}})。
- {{domxref("WaveShaperNode.oversample")}} についての対応が追加されました ({{bug(875277)}})。
- 永続的なストレージのパスを `<profile>/indexedDB` から `<profile>/storage/persistent` に変更しました (b2g では `/data/local/indexedDB` から `/data/local/storage/persistent` に変更)。
- {{domxref("Screen.orientation")}} プロパティおよび {{domxref("Screen.lockOrientation()")}} メソッドで値 `default` をサポートしました。デバイスに応じて `portrait-primary` または `landscape-primary` が対応づけられます ({{bug(908058)}})。
- {{domxref("Event")}} コンストラクタを Web workers で使用できます ({{bug(910910)}})。
- {{HTMLElement("iframe")}} に `sandbox` 属性がついている場合、埋め込まれているページで {{domxref("Document.domain")}} プロパティを設定しようとすると、セキュリティエラーが発生するようになりました ({{bug(907892)}})。
- {{domxref("MessageEvent")}} インタフェースを、最新の仕様に準拠するように更新しました。`initMessageEvent` メソッドを削除した一方で、インタフェースがコンストラクタを持つようになりました ({{bug(848294)}})。
- 設定 `dom.messageChannel.enabled` のもとで、HTML5 の `MessageChannel` API を実装しました ({{bug("677638")}})。
- すべての WebVTT に関する実装と同様に、設定 `media.webvtt.enabled` のもとで `VTTCue` をサポートしました ({{bug("868509")}})。
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API) が既定で利用できるようになりました ({{bug("885505")}})。

### MathML

- {{MathMLElement("mmultiscripts")}}、{{MathMLElement("msub")}}、{{MathMLElement("msup")}}、{{MathMLElement("msubsup")}} の一貫性のないレンダリングを統一しました。また、これらの要素のエラー処理が改善しました ({{bug("827713")}})。

### SVG

- OpenType 内への SVG グリフの包含である _SVG-in-OpenType_ を、現行バージョンの仕様に適合するよう更新しました ({{bug("906521")}})。
- `SVGElement.ownerSVGElement()` メソッドがエラーを発生させないようになりました ({{bug("835048")}})。

## 開発ツール

- インスペクターのリモートアクセスが可能になりました ({{bug(805526)}}).
- このリリースで、ウェブコンソールのテキストが選択可能になり、{{cssxref("::before")}} および {{cssxref("::after")}} が調査可能になり、そしてデバッガーやレスポンシブデザインビューの機能追加を計画しています。(<https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/>)

## 関連情報

- [Firefox 26 リリースノート](http://www.mozilla.jp/firefox/26.0/releasenotes/)
- [Firefox 26 アドオン互換性情報](https://dev.mozilla.jp/2013/11/firefox-26-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('25')}}
