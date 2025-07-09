---
title: Firefox 24 for developers
slug: Mozilla/Firefox/Releases/24
---

Gecko 24 を搭載した Firefox 24 は米国時間 2013 年 9 月 17 日にリリースされました。このページでは、開発者に影響する Firefox 24 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### CSS

- {{cssxref("cursor")}} プロパティの値のうち `-moz-zoom-in` と `-moz-zoom-out` の 2 つは、接頭辞を外して `zoom-in` および `zoom-out` になりました ([Firefox バグ 772153](https://bugzil.la/772153))。

### HTML

- `media.webvtt.enabled` 設定のもとに、{{HTMLElement("track")}} 要素を実装しました ([Firefox バグ 833385](https://bugzil.la/833385))。

### JavaScript

- `"use strict"` により明示的に要求される場合を除き、[Arrow functions](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) は自動的に strict モードにならないようにしました。([Firefox バグ 852762](https://bugzil.la/852762))
- [`String.prototype.repeat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) JS メソッドを実装しました ([Firefox バグ 815431](https://bugzil.la/815431))。

### DOM

- {{domxref("Range.Range", "Range()")}} コンストラクターをサポートしました ([Firefox バグ 868999](https://bugzil.la/868999))。
- {{domxref("Text.Text", "Text()")}} コンストラクターをサポートしました ([Firefox バグ 869000](https://bugzil.la/869000))。
- {{domxref("Comment.Comment", "Comment()")}} コンストラクターをサポートしました ([Firefox バグ 869006](https://bugzil.la/869006))。
- {{domxref("DocumentFragment.DocumentFragment", "DocumentFragment()")}} コンストラクターをサポートしました ([Firefox バグ 869002](https://bugzil.la/869002))。
- {{domxref("FocusEvent")}} インターフェイスを実装しました ([Firefox バグ 855741](https://bugzil.la/855741))。
- {{domxref("ChildNode.remove()")}} メソッドをサポートしました ([Firefox バグ 856629](https://bugzil.la/856629))。
- {{HTMLElement("track")}} 要素に関するインターフェイスである {{domxref("HTMLTrackElement")}}、{{domxref("TextTrack")}}、{{domxref("TextTrackCue")}}、{{domxref("TextTrackList")}}、{{domxref("TextTrackCueList")}} を、既定値が `false` である設定 `media.webvtt.enabled` のもとに実装しました ([Firefox バグ 833385](https://bugzil.la/833385))。
- {{domxref("Gamepad")}} インターフェイスと {{domxref("Navigator.getGamepads")}} を、既定値が `false` である設定 `dom.gamepad.enabled` のもとに実装しました ([Firefox バグ 690935](https://bugzil.la/690935))。
- デスクトップ版 Firefox に限り、`HTMLCanvasElement.getContext()` の値として `experimental-webgl` に加えて `webgl` をとれるようになりました ([Firefox バグ 870232](https://bugzil.la/870232))。
- {{domxref("HTMLMediaElement")}} の非標準メソッド `mozLoadFrom()` を削除しました ([Firefox バグ 877135](https://bugzil.la/877135))。

### 開発者ツール

- ネットワークインスペクターで、コンテンツタイプ (CSS/画像/フォント など) による絞り込みと、絞り込み結果についてサイズや読み込み時間を確認できるようになりました。
- 左側にある開発ツールのオプションパネルで、JavaScript を一時的に無効化/有効化できるようになりました。
- 拡張機能の開発者は chrome レベルのスクリプトに対して、新たに[ブラウザーコンソール](http://www.robodesign.ro/mihai/blog/the-browser-console-is-replacing-the-error-console)を使用できるようになりました (エラーコンソールを置き換えます)。

### MathML

- 例えば {{MathMLElement("math")}} 要素や {{MathMLElement("mrow")}} 要素で、式の書字方向を制御する `dir` 属性が、{{cssxref("direction")}} CSS プロパティを使用することと同等になりました。
- 等号 ("=") を[引き延ばすことが可能](/ja/docs/Web/MathML/Reference/Element/mo#attr-stretchy)になりました。
- {{MathMLElement("menclose")}} 要素で、`notation` 属性に値 "`updiagonalarrow`" を追加しました。

## 関連情報

- [Firefox 24 リリースノート](http://www.mozilla.jp/firefox/24.0/releasenotes/)
- [Firefox 24 アドオン互換性情報](https://dev.mozilla.jp/2013/09/firefox-24-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('23')}}
