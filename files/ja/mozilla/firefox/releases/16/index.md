---
title: Firefox 16 開発者向けリリースノート
short-title: Firefox 16
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 16 は、2012 年 10 月 9 日にリリースされました。この記事では、ウェブ開発者に知らせるだけでなく、Firefox や Gecko 開発者、アドオン開発者にも役立つ主な変更点のリストを掲載しています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- 便利な開発ツールバーを実装しており、ツール > ウェブ開発 > 開発ツールバー から、あるいは Ctrl-Shift-V (Mac OS X では Cmd-Opt-V) を押して呼び出すことができます。このツールバーは、ボタンと同じように便利なツールをすばやく呼び出せるコマンドラインインターフェイスを提供します。Graphical command line interface _GCLI_ は、将来の拡張やコマンドの追加が容易であると期待されています。"help" と入力すると、サポートしているコマンドの一覧を得られます。
- ウェブコンソールがエラーの回数を表示するようになり、この先あなたの作業がどれだけあるかをすばやく見ることができます。
- スクラッチパッドが、最近開いたファイルの一覧を提供するようになりました。

### HTML

- {{HTMLElement("meter")}} 要素をサポートしました。
- HTML Microdata API のサポートが追加されました。([bug 591467](https://bugzil.la/591467))
- {{ HTMLElement("canvas")}} が CSS の `currentColor` をすべての場合でサポートするようになりました。([Firefox バグ 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} で、`accept` 属性の任意の MIME タイプに基づくフィルタリングが可能になりました。([Firefox バグ 565274](https://bugzil.la/565274))
- 2 個の属性 `width` および `height` が {{HTMLElement("input")}} 要素に追加されました ([bug 683855](https://bugzil.la/683855))

### CSS

- 標準の、接頭辞無しのバージョンの [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)が使えるようになりました。([bug 762302](https://bugzil.la/762302))
- アニメーションの方向の逆転（{{cssxref("animation-direction")}} プロパティの `reverse` と `alternate-reverse` キーワード）のサポートが追加されました。([bug 655920](https://bugzil.la/655920))
- CSS の {{cssxref("height")}} および {{cssxref("width")}} プロパティのアニメーションが可能になりました。
- {{cssxref("animation-duration")}} および {{cssxref("transition-duration")}} の CSS プロパティが、負の値を拒絶するようになりました (さらに、そのような値はもはや `0s` として扱われません)。([bug 773102](https://bugzil.la/773102))
- 標準の、接頭辞無しのバージョンの [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms/Using) が使えるようになりました ([bug 745523](https://bugzil.la/745523))。 {{cssxref("&lt;length&gt;")}} は `matrix()` と `matrix3d()` の座標変換値に使うことができなくなりました ([Firefox bug 719054](https://bugzil.la/719054))。
- 標準の、接頭辞無しのバージョンの [CSS グラデーション](/ja/docs/Web/CSS/Guides/Images/Using_gradients)が使えるようになりました。接頭辞付きのバージョンから構文がかなり変わっていますので、よく学んでおくとよいでしょう。 ([bug 752187](https://bugzil.la/752187))
- {{cssxref("box-sizing", "-moz-box-sizing")}} の実装がテーブルのセルにも適用されるように更新されました。([bug 338554](https://bugzil.la/338554))
- 標準の、接頭辞無しの {{cssxref("calc")}} が使えるようになりました。([bug 771678](https://bugzil.la/771678))
- {{cssxref("&lt;resolution&gt;")}} CSS データ型が拡張され、`dppx` がサポートされるようになりました。([bug 741644](https://bugzil.la/741644))
- 画面上で、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using) のために、`dppx`、`dpi`、および `dpcm` が物理単位ではなく、CSS ピクセル単位で再表現されるようになりました。 ([bug 771390](https://bugzil.la/771390))
- 特定の状態にある {{HTMLElement("meter")}} 要素へのアクセスやスタイル付けを行うため、新たに 3 つの擬似クラス `:-moz-meter-optimum`、`:-moz-meter-sub-optimum`、`:-moz-meter-sub-sub-optimum` を追加しました。([bug 660238](https://bugzil.la/660238))
- {{cssxref("appearance")}} プロパティが新たに 2 つの値、`meterbar` および `meterchunk` を採り入れました。これらは、{{HTMLElement("meter")}} 要素内部のコンポーネントを表します。([bug 659999](https://bugzil.la/659999))
- {{cssxref("min-width")}} および {{cssxref("min-height")}} で、flex item のための `auto` キーワードをサポートしました (他のアイテムでは `0` と解釈します)。([Firefox バグ 763689](https://bugzil.la/763689))

### API/DOM

- `width` と `height` の 2 つの新しいプロパティが {{domxref("HTMLInputElement")}} インターフェイスに追加されました。([bug 683855](https://bugzil.la/683855))
- IndexedDB プロパティとメソッドが接頭辞無しになりました。([bug 726378](https://bugzil.la/726378))
- [Battery API](/ja/docs/Web/API/Navigator/getBattery) が接頭辞なしになりました。
- Vibration API が接頭辞なしになりました。
- 標準外の `Keyboard` インターフェイスは、接頭辞付きの `mozKeyboard` として、`Keyboard.setSelectedOption()` および `Keyboard.setValue()` メソッドと `Keyboard.onfocuschange` プロパティを持つようになりました。 _このインターフェイスは Firefox OS でのみ利用できるものでしたが、Firefox 31で除去されました。_
- [`java`](https://web.archive.org/web/20201004062409/https://developer.mozilla.org/en-US/docs/Archive/Web/LiveConnect_Reference/java) および [`Packages`](https://web.archive.org/web/20201031083247/https://developer.mozilla.org/en-US/docs/Archive/Web/LiveConnect_Reference/Packages) グローバルオブジェクトが削除されました。[LiveConnect](https://web.archive.org/web/20210516230302/https://developer.mozilla.org/en-US/docs/Archive/Web/LiveConnect) を参照してください。
- {{domxref("CSSNamespaceRule")}} に結びつけられている `CSSRule.type` を、`UNKNOWN_RULE` (`0`) から `NAMESPACE_RULE` (`10`) に更新しました。([bug 765590](https://bugzil.la/765590))
- WebSMS API: `SmsRequest` は、より一般的な `DOMRequest` に置き換えられました。
- 非標準の {{domxref("Element.scrollTopMax")}} および {{domxref("Element.scrollLeftMax")}} 読み取り専用プロパティが追加されました ([Firefox バグ 766937](https://bugzil.la/766937))。
- {{domxref("Blob.blob", "Blob()")}} の第 2 引数に `null` または `undefined` をセットした場合、空ディレクトリーとして扱われるようになりました ([Firefox バグ 7691119](https://bugzil.la/7691119))。

### JavaScript

- [`Number`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number) オブジェクトに `isFinite()`、`toInteger()`、`isInteger()` メソッドを追加しました。([bug 761480](https://bugzil.la/761480), [bug 761495](https://bugzil.la/761495))
- Harmony の [spread 演算子](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread)を [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) オブジェクトに追加しました ([バグ 574130](https://bugzil.la/574130))。なお、呼び出しではまだ対応していません（[バグ 762363](https://bugzil.la/762363)）。
- 実験的な `TypedArray.prototype.move()` メソッドが追加されました (Aurora および Nightly チャンネルのみで利用可能) ([Firefox バグ 730873](https://bugzil.la/730873))。

### WebGL

_変更なし。_

### SVG

_変更なし。_

### MathML

- {{MathMLElement("mo")}} の `lspace` および `rspace` 属性の初期値が、正しく `thickmathspace` になります。

## Open Web App 開発者向けの変更点

- Firefox のデスクトップ版（Windows、Mac OS X、Linux）において、[Open Web App サポート](https://web.archive.org/web/20190117093115/https://developer.mozilla.org/en-US/docs/Web/Apps/Getting_Started)が実装されました。

## アドオンと Mozilla 開発者向け

### インターフェイスの変更点

`nsIPrivateDOMEvent` が `nsIDOMEvent` に併合されました ([Firefox バグ 761613](https://bugzil.la/761613))。
