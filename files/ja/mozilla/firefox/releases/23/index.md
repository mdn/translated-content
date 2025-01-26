---
title: Firefox 23 for developers
slug: Mozilla/Firefox/Releases/23
---

{{FirefoxSidebar}}

Gecko 23 を搭載した Firefox 23 は米国時間 2013 年 8 月 6 日にリリースされました。このページでは、開発者に影響する Firefox 23 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### セキュリティ

- Mixed content のブロック。Firefox はセキュアな (https) ページでセキュアでない (http) リソースを読み込みません ([Firefox バグ 834836](https://bugzil.la/834836))。
- [CSP](/ja/docs/Web/HTTP/CSP) 1.0 ポリシーの標準的な構文を実装して、デフォルトで施行します。

### 開発者ツール

- 開発者ツールにネットワークパネルを追加しました。これは、ウェブコンソールの "ネットワーク" ビューより詳細なツールです。
- ウェブコンソールを "コンソール" に改名して、セキュリティのエラーや警告をフィルタリングする設定を追加しました。
- ツールボックスの新たな設定項目によって機能の無効化、Light/Dark テーマの切り替え、Chrome/Remote デバッグの有効化が可能になりました。

### HTML

- `<blink>` 要素のサポートを完全に廃止しました。`<blink>` タグは {{domxref("HTMLUnknownElement")}} インターフェイスを実装します ([Firefox バグ 857820](https://bugzil.la/857820))。
- {{HTMLElement("input")}} 要素の `range` ステート (`<input type="range">`) を、デフォルトで有効にしました ([Firefox バグ 841950](https://bugzil.la/841950))。

### JavaScript

- [`Object.defineProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) メソッドが、[`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) オブジェクトの `length` プロパティの再定義に使用できるようになりました。
- ウィンドウの移動やコンテキストメニューの置き換えを含む、JavaScript を無効化する選択項目を削除しました。about:config で設定項目 "javascript.enabled" をダブルクリックすることで、JavaScript を無効化できます。

### DOM

- D3E の [`KeyboardEvent.key`](/ja/docs/Web/API/KeyboardEvent#key_names_and_char_values) を、文字入力可能ではないキーについてのみサポートしました ([Firefox バグ 842927](https://bugzil.la/842927))。
- {{domxref("DOMImplementation.createHTMLDocument")}} の引数 `title` は、更新された DOM 仕様書のとおり省略可能になりました。
- サイドバーパネルを追加する機能 (`window.sidebar.addPanel`) を削除しました ([Firefox バグ 691647](https://bugzil.la/691647))。
- 接頭辞なしの {{domxref("window.requestAnimationFrame")}}、{{domxref("window.cancelAnimationFrame")}} メソッドが追加されました ([Firefox バグ 704063](https://bugzil.la/704063))。
- 接頭辞のない版で {{domxref("Window.requestAnimationFrame")}} のコールバックは、詳細度が低い {{domxref("DOMTimeStamp")}} に代わり {{domxref("DOMHighResTimeStamp")}} を引数として受け取ります ([Firefox バグ 753453](https://bugzil.la/753453))。
- {{domxref("window.alert")}} および {{domxref("window.confirm")}} のテキスト引数が省略可能になりました ([Firefox バグ 861605](https://bugzil.la/861605))。
- 仕様書から削除された {{domxref("HTMLMediaElement.initialTime")}} プロパティのサポートを廃止しました ([Firefox バグ 742537](https://bugzil.la/742537))。
- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}} コンストラクターを追加しました ([Firefox バグ 848293](https://bugzil.la/848293))。
- {{domxref("AnimationEvent.pseudoElement")}} プロパティを実装しました ([Firefox バグ 848293](https://bugzil.la/848293))。
- {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}} コンストラクターを追加しました ([Firefox バグ 848291](https://bugzil.la/848291))。
- {{domxref("TransitionEvent.pseudoElement")}} プロパティを実装しました ([Firefox バグ 848291](https://bugzil.la/848291))。
- 非標準の {{domxref("TransitionEvent.initTransitionEvent()")}} および {{domxref("AnimationEvent.initAnimationEvent()")}} を削除しました ([Firefox バグ 868751](https://bugzil.la/868751))。

### CSS

- `text-decoration: blink;` の点滅効果を廃止しましたが、値そのものは現在も有効です ([Firefox バグ 857820](https://bugzil.la/857820))。
- フロー内の {{cssxref("::after")}} 擬似要素や {{cssxref("::before")}} 擬似要素は、flex アイテムになりました ([Firefox バグ 867454](https://bugzil.la/867454))。

### MathML

- {{MathMLElement("mspace")}} 要素でマイナスの幅を実装しました ([Firefox バグ 717546](https://bugzil.la/717546))。
- {{MathMLElement("semantics")}} 要素は MathML3 仕様で述べられているとおりに、表示する子要素を決めるようになりました。

## アドオン開発者と Mozilla 開発者向けの変更点

### Firefox 開発者ツール

chrome://browser/content/debugger.xul にオーバーレイするアドオンは、chrome://browser/content/devtools/debugger.xul. へのオーバーレイが必要になりました。互換性のため、chrome.manifest でこれら両方への参照を追加してもさしつかえありません。

## 関連情報

- [Firefox 23 リリースノート](http://www.mozilla.jp/firefox/23.0/releasenotes/)
- [Firefox 23 アドオン互換性情報](https://dev.mozilla.jp/2013/07/firefox-23-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('22')}}
