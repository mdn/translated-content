---
title: Firefox 30 for developers
slug: Mozilla/Firefox/Releases/30
---

{{FirefoxSidebar}}

Gecko 30 を搭載した Firefox 30 は、米国時間 2014 年 6 月 10 日にリリースされました。このページでは、開発者に影響する Firefox 30 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ボックスモデルのハイライト表示機能を実装しました ([Firefox バグ 663778](https://bugzil.la/663778))。
- コンソールの出力に DOM ノードがあるとき、その出力にマウスポインターを載せるとノードをハイライト表示します ([Firefox バグ 757866](https://bugzil.la/757866))。同様に、すべての JS 関数やオブジェクトをコンソールの出力でハイライトします ([Firefox バグ 584733](https://bugzil.la/584733))。コンソールの改善点について、詳しくは[こちらのブログ投稿](http://www.robodesign.ro/mihai/blog/web-console-improvements-episode-30)をご覧ください。
- {{domxref("Console.count()")}} をサポートしました ([Firefox バグ 922208](https://bugzil.la/922208))。

### CSS

- {{cssxref("background-blend-mode")}} プロパティをデフォルトで有効にしました ([Firefox バグ 970600](https://bugzil.la/970600))。
- 非標準である {{cssxref("overflow-clip-box")}} プロパティを、UI スタイルシートでの使用に限り実装しました ([Firefox バグ 966992](https://bugzil.la/966992))。
- {{cssxref("line-height")}} プロパティが単一行のテキスト入力 (`<input type=text|password|email|search|tel|url|unknown>`) に作用します。ただし `1.0` を下回る line-height に縮小することはできません ([Firefox バグ 349259](https://bugzil.la/349259))。
- {{cssxref("line-height")}} プロパティは `type=button` にも、制限なく作用します ([Firefox バグ 697451](https://bugzil.la/697451))。
- キーフレームの名前を変更しても既存の要素に反映されない問題を修正しました ([Firefox バグ 978648](https://bugzil.la/978648))。

### HTML

_変更なし。_

### JavaScript

- ES6 互換の新たな[配列内包](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `[for (item of iterable) item]` および [Generator 内包](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` を実装しました ([Firefox バグ 979865](https://bugzil.la/979865))。
- Typed arrays が拡張可能になり、新たな名前のプロパティをサポートしました ([Firefox バグ 695438](https://bugzil.la/695438))。
- {{jsxref("Error.prototype.stack")}} プロパティがカラム番号を含むようになり ([Firefox バグ 762556](https://bugzil.la/762556))、[`Function()` や `eval()` を呼び出す](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/stack#stack_of_eval'ed_code)際の動作が向上しました。ミニファイされた、あるいは生成された JavaScript コードのデバッグを改善する助けになります。

### インターフェイス/API/DOM

- テレメトリーの収集を容易にする {{domxref("Navigator.sendBeacon")}} を実装しました ([Firefox バグ 936340](https://bugzil.la/936340))。
- {{domxref("HTMLLinkElement")}}、{{domxref("HTMLAreaElement")}}、{{domxref("HTMLAnchorElement")}} に、{{domxref("DOMTokenList")}} を返す `relList` プロパティを追加しました ([Firefox バグ 968637](https://bugzil.la/968637))。
- 最新の仕様により、{{domxref("OscillatorNode.start")}} および {{domxref("OscillatorNode.stop")}} の第 1 引数は省略可能および既定値が `0` になりました ([Firefox バグ 982541](https://bugzil.la/982541))。
- {{domxref("Navigator.requestWakeLock()")}} メソッドおよび非標準である {{domxref("MozWakeLock")}} メソッドは、デスクトップ版 Firefox で使用できなくなりました ([Firefox バグ 963366](https://bugzil.la/963366))。
- `DOM_VK_ENTER` 定数を {{domxref("KeyboardEvent")}} から削除しました ([Firefox バグ 969247](https://bugzil.la/969247))。
- Web components の {{domxref("Document.register")}} を、最新版の仕様で説明されている動作に従うよう修正しました ([Firefox バグ 856140](https://bugzil.la/856140))。
- Canvas の Hit resion の基本的なサポートを追加: {{domxref("CanvasRenderingContext2D.addHitRegion()")}} メソッドおよび {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} メソッドを追加しました。これらはデフォルトで無効です。有効化するには設定項目 `canvas.hitregions.enabled` を `true` に変更してください。([Firefox バグ 966591](https://bugzil.la/966591))
- 非標準であり Firefox 15 から非推奨であった {{domxref("Blob.mozSlice")}} を廃止しました ([Firefox バグ 961804](https://bugzil.la/961804))。
- 非標準である {{domxref("ArchiveReader")}} および {{domxref("ArchiveRequest")}} はウェブ向けに公開しないようになりました ([Firefox バグ 968883](https://bugzil.la/968883))。
- [WebIDL コンストラクター](http://dxr.mozilla.org/mozilla-central/source/dom/webidl/)を関数として呼び出すことが不可になりました。キーワード `new` を前につけることが必要です。([Firefox バグ 916644](https://bugzil.la/916644))
- {{domxref("Canvas.getContext()")}} メソッドで、アルファブレンディングを保存しなければならないか否かを定義可能にする、省略可能な第 2 引数 (`alpha`) をサポートしました。設定しない場合、ピクセルごとのアルファ値は常に `1.0` になります。これによりバックエンドでファストトラックの実装が可能になります。([Firefox バグ 982480](https://bugzil.la/982480))

### MathML

_変更なし。_

### SVG

- Filter Effects Module より、{{SVGElement("feDropShadow")}} およびそのインターフェイスである {{domxref("SVGFEDropShadowElement")}} をサポートしました ([Firefox バグ 964200](https://bugzil.la/964200))。

### Audio/Video

- Linux において、Gstreamer 1.0 をサポートしました (0.10 に代わり) ([Firefox バグ 806917](https://bugzil.la/806917))。

## セキュリティ

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

- `nsIDOMWindowUtils` インターフェイスで、ウィンドウ (任意のタブまたは iframe) から生じた音声の制御を可能にする論理属性 `audioMuted` および `[0.0` , `1.0]` の範囲の浮動小数点数値をとる `audioVolume` 属性をサポートしました。UI はありませんが、アドオンで使用できます。([Firefox バグ 923247](https://bugzil.la/923247))

## 関連情報

- [Firefox 30 リリースノート](http://www.mozilla.jp/firefox/30.0/releasenotes/)
- [Firefox 30 アドオン互換性情報](https://dev.mozilla.jp/2014/05/firefox-30-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('29')}}
