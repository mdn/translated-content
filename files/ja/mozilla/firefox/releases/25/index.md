---
title: Firefox 25 for developers
slug: Mozilla/Firefox/Releases/25
---

Gecko 25 を搭載した Firefox 25 は米国時間 2013 年 10 月 29 日にリリースされました。このページでは、開発者に影響する Firefox 25 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### Firefox 開発ツールの新機能

- インスペクターに、CSS の名称や値のオートコンプリート機能を追加しました。
- ブレークポイントがあなたのデバッグに関与しないライブラリー内で停止しないようにするため、デバッガで "ブラックボックス" スクリプトファイルが使用可能になりました。
- プロファイラで、プロファイリング結果の保存やインポートが可能になりました。Firefox 開発ツールのオプションに、"Gecko プラットフォームのデータを表示" が加わりました。
- ネットワークパネルに、URL コマンドのコピーや再送信を行うコンテキストメニューを搭載しました。
- 多数の内部変更により、開発ツールに手を加えるアドオンで書き換えが必要になるかもしれません。

### CSS

- {{cssxref("background-attachment")}} CSS プロパティの値として、キーワード `local` をサポートしました ([Firefox バグ 483446](https://bugzil.la/483446))。
- オペレーティングシステムのバージョンを検出するための、非標準で Mozilla だけのメディアクエリーをサポートしました: [`-moz-os-version`](/ja/docs/Web/CSS/Guides/Media_queries/Using#-moz-os-version) ([Firefox バグ 810399](https://bugzil.la/810399))。現在このプロパティは、Windows のみで実装されています。
- {{cssxref("-moz-osx-font-smoothing")}} CSS プロパティを実装しました ([Firefox バグ 857142](https://bugzil.la/857142))。

### HTML

- {{HTMLElement("iframe")}} の [`srcdoc`](/ja/docs/Web/HTML/Reference/Elements/iframe#srcdoc) 属性をサポートしました。これは、{{HTMLElement("iframe")}} のコンテンツをインラインで記載できる属性です ([Firefox バグ 802895](https://bugzil.la/802895))。
- `"image/jpeg"` タイプとともに使用するとき `HTMLCanvasElement.toBlob` メソッドは、画像の品質を指定する第 3 引数を受け入れます ([Firefox バグ 891884](https://bugzil.la/891884))。

### JavaScript

[EcmaScript 6](/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) の実装が続いています!

- [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) に {{jsxref("Array.of()")}} メソッドを実装しました ([Firefox バグ 866849](https://bugzil.la/866849))。
- {{jsxref("Array.prototype.find()")}} メソッドおよび {{jsxref("Array.prototype.findIndex()")}} メソッドをサポートしました ([Firefox バグ 885553](https://bugzil.la/885553))。
- {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} および {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} メソッドを実装しました ([Firefox バグ 886949](https://bugzil.la/886949))。
- `Map.prototype.forEach()` メソッドおよび `Set.prototype.forEach()` メソッドを実装しました ([Firefox バグ 866847](https://bugzil.la/866847))。
- [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) へ新たに、数学的なメソッドを追加しました: `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` and `Math.cbrt()` ([Firefox バグ 717379](https://bugzil.la/717379)).
- 2 進数および 8 進数の整数リテラルをサポートしました: `0b10101010`, `0B1010`, `0o777`, `0O237` が有効になりました ([Firefox バグ 894026](https://bugzil.la/894026))。
- 計算機イプシロン定数 (1 に追加することで 1 ではなくなる、表現可能な最小の値) を {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} として使用できます ([Firefox バグ 885798](https://bugzil.la/885798))。

### インターフェイス/API/DOM

- [Web Audio API](/ja/docs/Web/API/Web_Audio_API) をサポートしました。以前は不完全な実装を、設定のもとで使用できました ([Firefox バグ 779297](https://bugzil.la/779297))。
- Windows の IME に関するキーの一部を `KeyboardEvent.key` でサポートしました ([Firefox バグ 865565](https://bugzil.la/865565))。詳しくは[キー名の表](/ja/docs/Web/API/KeyboardEvent#key_names_and_char_values)をご覧ください。
- Metro 版 Firefox が、デスクトップ版と同じ方法でキーイベントを発生させるようになりました ([Firefox バグ 843236](https://bugzil.la/843236))。
- 前の `keydown` イベントの `preventDefault()` が呼び出された場合は`keypress` イベントが発生しないようになりました ([Firefox バグ 501496](https://bugzil.la/501496))。詳しくは [`keydown` イベントのドキュメント](</ja/docs/Web/Reference/Events/keydown#preventDefault()_of_keydown_event> "Web/Reference/Events/keydown#preventDefault()_of_keydown_event")をご覧ください。
- `Future` インターフェイスの名称を `Promise` に変更しました ([Firefox バグ 884279](https://bugzil.la/884279))。
- {{domxref("HTMLIFrameElement")}} インターフェイスで `srcDoc`プロパティをサポートしました。これは、{{HTMLElement("iframe")}} のコンテンツをインラインで記載できるプロパティです ([Firefox バグ 802895](https://bugzil.la/802895))。
- {{domxref("HTMLTableElement")}} インターフェイスで `createTBody()` メソッドをサポートしました。これは、`createTBody()` の取得を可能にします ([Firefox バグ 813034](https://bugzil.la/813034))。
- 仕様書で定められているように、{{domxref("Range.collapse()")}} メソッドの引数 `toStart` は省略可能になり、また既定値が `false` になりました ([Firefox バグ 891340](https://bugzil.la/891340))。
- {{domxref("Document")}} および {{domxref("DocumentFragment")}} で {{domxref("ParentNode")}} インターフェイスをサポートしました ([Firefox バグ 895974](https://bugzil.la/895974))。
- `previousElementSibling` および `nextElementSibling` を、{{domxref("Element")}} オブジェクトだけでなく {{domxref("CharacterData")}} オブジェクトや {{domxref("DocumentType")}} オブジェクトでも呼び出せるようにするため、{{domxref("ChildNode")}} に移転しました ([Firefox バグ 895974](https://bugzil.la/895974))。
- `navigator.geolocation` プロパティを、仕様書に合致するよう更新しました。`null` を返さないようになります。設定 `geo.enabled` が `false` であるときは、`undefined` を返します ([Firefox バグ 884921](https://bugzil.la/884921))。
- {{domxref("HTMLVideoElement")}} インターフェイスの `videoPlaybackQuality` 属性を、`getVideoPlaybackQuality` メソッドに変更しました ([Firefox バグ 889205](https://bugzil.la/889205))。

### MathML

_変更なし。_

### SVG

_変更なし。_

## 関連情報

- [Firefox 25 リリースノート](http://www.mozilla.jp/firefox/25.0/releasenotes/)
- [Firefox 25 アドオン互換性情報](https://dev.mozilla.jp/2013/10/firefox-25-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('24')}}
