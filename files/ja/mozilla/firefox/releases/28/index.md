---
title: Firefox 28 for developers
slug: Mozilla/Firefox/Releases/28
---

Firefox 28 は米国時間 2014 年 3 月 18 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者やアドオン開発者にとっても有益な主な変更点を紹介します。

## ウェブ開発者向けの変更点

### 開発者ツール

- {{domxref("console.exception")}} プロパティを追加しました ([Firefox バグ 922214](https://bugzil.la/922214))。
- {{domxref("console.assert")}} プロパティを追加しました ([Firefox バグ 760193](https://bugzil.la/760193))。
- アプリマネージャー: 新しいマニフェストエディターを追加しました。
- アプリマネージャー: アプリのデバッグ用のツールボックスを、アプリマネージャーの UI 内に組み込みました。
- ウェブコンソール: "スプリットコンソール" モードを追加しました。Escape キーを押すと、他のツール内にコンソールをすばやく開きます。
- ウェブコンソール: 出力エリア用の Dark テーマを追加しました。
- デバッガー: ミニファイされた JavaScript の整形。
- デバッガー: 変数にマウスポインターを乗せるか変数をクリックすると、現在の値をポップアップで表示します。
- インスペクター: ルールビューでのカラーピッカーや、さまざまなツールチップを追加しました。
- ブラウザーツールボックス: アドオンやプラットフォームの開発者が、ブラウザー自身を対象にしてほぼすべての開発ツールを使用できるようになりました。

詳しくは[こちらの投稿](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/)をご覧ください。

### CSS

- 複数行の [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) をサポートしました ([Firefox バグ 939901](https://bugzil.la/939901))。
- 東アジア言語における長い表記のの[カウンタースタイル](/ja/docs/Web/CSS/Reference/Properties/list-style-type)を実装しました ([Firefox バグ 934072](https://bugzil.la/934072))。
- {{cssxref("background-blend-mode")}} プロパティをサポートしました ([Firefox バグ 841601](https://bugzil.la/841601))。
- {{cssxref("font-variant-ligatures")}} プロパティに値 `none` を追加しました ([Firefox バグ 913264](https://bugzil.la/913264))。
- 擬似要素で {{cssxref(":hover")}} ユーザーアクション擬似クラスをサポートしました ([Firefox バグ 922669](https://bugzil.la/922669))。

### HTML

- `<input type=color>` および `<input type=number>` を実装しましたが、デフォルトでは無効です。

### JavaScript

- [ECMAScript 2015](/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) の実装が続いています。
  - `Array` の新たなメソッド、 {{jsxref("Array.prototype.entries()")}} および {{jsxref("Array.prototype.keys()")}} を実装しました ([Firefox バグ 894658](https://bugzil.la/894658))。

- A bug causing that {{jsxref("Object.getOwnPropertyNames()")}} did not see unresolved properties of {{jsxref("Error")}} objects has been fixed ([Firefox バグ 724768](https://bugzil.la/724768)).

### インターフェイス/API/DOM

- `HTMLVideoElement.canPlayType('video/webm')` が `maybe` を返すようになりました ([Firefox バグ 884275](https://bugzil.la/884275))。
- {{domxref("DocumentFragment.getElementById()")}} メソッドを実装しました。例: `document.createDocumentFragment().getElementById()` ([Firefox バグ 933193](https://bugzil.la/933193))
- {{domxref("KeyboardEvent.repeat")}} 属性を実装しました ([Firefox バグ 600117](https://bugzil.la/600117))。
- {{domxref("File")}} コンストラクターを実装しました。例: `new File(["foo"], "foo.txt")` ([Firefox バグ 819900](https://bugzil.la/819900))
- プライバシーの理由により、{{domxref("NavigatorPlugins.plugins", "navigator.plugins")}} が enumerable ではなくなりました ([Firefox バグ 757726](https://bugzil.la/757726))。
- {{domxref("Window.screenX")}} 属性および {{domxref("Window.screenY")}} 属性が CSS ピクセル値を返すようになりました (デバイスピクセル値は返しません) ([Firefox バグ 943668](https://bugzil.la/943668))。
- {{domxref("CanvasRenderingContext2D.drawSystemFocusRing()")}} メソッドおよび {{domxref("CanvasRenderingContext2D.drawCustomFocusRing()")}} メソッドを実装しました。これらを有効にするには、設定項目 `canvas.focusring.enabled` を `true` に設定しなければなりません ([Firefox バグ 540456](https://bugzil.la/540456))。
- `willReadFrequently` コンテキスト属性が "`2d`" キャンバスコンテキストで実装されました ({{domxref("HTMLCanvasElement.getContext()")}} を参照) ([Firefox バグ 884226](https://bugzil.la/884226))。
- {{domxref("NavigatorID")}} の属性やメソッドのうち、 {{domxref("NavigatorID.appCodeName", "appCodeName")}}, {{domxref("NavigatorID.product", "product")}}, {{domxref("NavigatorID.taintEnabled", "taintEnabled()")}} が {{domxref("WorkerNavigator")}} に実装され、ワーカーで利用できるようになりました。 ([Firefox バグ 925847](https://bugzil.la/925847))。
- {{domxref("Element/previousElementSibling" , "previousElementSibling")}} および {{domxref("Element/nextElementSibling" , "nextElementSibling")}} の各プロパティが互換性の問題により、 {{domxref("DocumentType")}} から削除されました ([Firefox バグ 932501](https://bugzil.la/932501))。

### MathML

- `mathvariant` 属性をサポートしました ([Firefox バグ 114365](https://bugzil.la/114365))。

### SVG

_変更なし。_

### Audio/Video

- WebM で Opus をサポートしました ([Firefox バグ 938686](https://bugzil.la/938686))。
- VP9 ビデオデコーダをサポートしました ([Firefox バグ 833023](https://bugzil.la/833023))。

### ネットワーク

- `SPDY/2` のサポートを廃止しました。

## アドオン開発者と Mozilla 開発者向けの変更点

- [DeferredTask.jsm](/ja/docs/Mozilla/JavaScript_code_modules/DeferredTask.jsm) のインターフェイスを変更しました。また `isPending()`、`start()`、`flush()`、`cancel()` の各メソッドを削除しました ([Firefox バグ 940408](https://bugzil.la/940408))。

## セキュリティ

- sandbox 化した iframe では、CSP が適用されていませんでした。これを修正しました ([Firefox バグ 886164](https://bugzil.la/886164))。
- CSP 1.1 の試験的なディレクティブ `script-nonce` を実装しました。この機能を有効にするには、設定項目 `security.csp.experimentalEnabled` を `true` に設定してください ([Firefox バグ 855326](https://bugzil.la/855326))。

## 関連情報

- [Firefox 28 リリースノート](http://www.mozilla.jp/firefox/28.0/releasenotes/)
- [Firefox 28 アドオン互換性情報](https://dev.mozilla.jp/2014/02/firefox-28-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('27')}}
