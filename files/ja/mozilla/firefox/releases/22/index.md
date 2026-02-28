---
title: Firefox 22 開発者向けリリースノート
short-title: Firefox 22
slug: Mozilla/Firefox/Releases/22
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 22 は米国時間 2013 年 6 月 25 日にリリースされました。この記事では、ウェブ開発者だけでなく、Firefox および Gecko の開発者、アドオン開発者にも有益な主な変更点を掲載しています。

## ウェブ開発者向けの変更点一覧

### HTML

- HTML5 の {{HTMLElement("data")}} 要素を実装しました ([Firefox バグ 839371](https://bugzil.la/839371))。
- HTML5 の {{HTMLElement("time")}} 要素を実装しました ([Firefox バグ 629801](https://bugzil.la/629801))。
- {{HTMLElement("input")}} 要素の `range` ステート (`<input type="range">`) を実装しました。設定 `dom.experimental_forms_range` で制御されており、現在は Nightly および Aurora チャンネルのみ既定で有効にしています ([Firefox バグ 841948](https://bugzil.la/841948)).
- ウェブコンポーネント仕様の一部である {{HTMLElement("template")}} 要素をサポートしました ([Firefox バグ 818976](https://bugzil.la/818976))。

### JavaScript

- [Asm.js](http://asmjs.org/spec/latest/) の最適化が有効になり、パフォーマンス向上のために C/C++ アプリケーションを JavaScript のサブセットにコンパイルすることが可能になります。
- ES2015 の [Arrow Function](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 構文を実装しました ([Firefox バグ 846406](https://bugzil.la/846406))。
- 新しい [Object.is](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 関数が追加されました ([Firefox バグ 839979](https://bugzil.la/839979))。
- ジェネレーター式の [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) が包含する軸スコープから継承されるようになりました ([Firefox bug 848051](https://bugzil.la/848051))。
- ES2015 プロキシーの {{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}} トラップが実装されました ([Firefox bug 789897](https://bugzil.la/789897))。

### DOM

- `XMLHttpRequest` の `multipart` プロパティおよび `XMLHttpRequest` の `multipart/x-mixed-replace` レスポンスのサポートを削除しました。これは Gecko だけの機能であり、標準化されませんでした。[Server-Sent Events](/ja/docs/Web/API/Server-sent_events)、[Web Sockets](/ja/docs/Web/API/WebSockets_API)、あるいは progress イベントをもとに `responseText` を調べることを、代わりに使用できます。
- [ウェブ通知](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API) に対応しました ([Firefox バグ 782211](https://bugzil.la/782211))。
- {{domxref("FormData")}} の `append` メソッドが、省略可能な第 3 引数 `filename` を受け入れるようになりました ([Firefox バグ 690659](https://bugzil.la/690659))。
- `Node.isSupported` を削除しました ([Firefox バグ 801562](https://bugzil.la/801562))。
- `Node.setUserData` および `Node.getUserData` をウェブコンテンツ向けには削除、クロームコンテンツ向けには非推奨としました ([Firefox バグ 842372](https://bugzil.la/842372))。
- 仕様書で求められたため、{{domxref("Element.attributes")}} プロパティを {{domxref("Node")}} から移転しました ([Firefox バグ 844134](https://bugzil.la/844134))。
- **Ambient Light Events** の Mac OS X バックエンドを実装しました。
- HTML 名前空間でローカル名が `<bgsound>`、`<multicol>`、`<image>` である要素は、{{domxref("HTMLSpanElement")}} インターフェイスを実装しなくなりました。`<bgsound>` は {{domxref("HTMLUnknownElement")}} を、`<image>` は {{domxref("HTMLElement")}} を実装します。
- {{ domxref("NodeIterator.detach") }} は何も行わないようになりました ([Firefox バグ 823549](https://bugzil.la/823549))。
- {{domxref("BlobEvent")}} インターフェイスを実装しました ([Firefox バグ 834165](https://bugzil.la/834165))。
- `HTMLMediaElement.crossorigin` プロパティおよび `HTMLInputElement.inputmode` プロパティは、それぞれ {{domxref("HTMLMediaElement.crossOrigin")}} および `HTMLInputElement.inputMode` の仕様に合致させるため削除しました ([Firefox バグ 847370](https://bugzil.la/847370) および [Firefox バグ 850346](https://bugzil.la/850346))。
- WebRTC: Media Stream API および Peer Connection API をデフォルトでサポートします。
- ウェブコンポーネント: `Document.register()` メソッドを実装しました ([Firefox バグ 783129](https://bugzil.la/783129))。
- `ProgressEvent.initProgressEvent()` コンストラクターメソッドが削除されました。標準のコンストラクターである {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}} を使用して、 {{domxref("ProgressEvent")}} を構築および初期化するようにしてください ([Firefox bug 843489](https://bugzil.la/843489))。
- {{domxref("Element/cut_event", "cut")}}、{{domxref("Element/copy_event", "copy")}}、{{domxref("Element/paste_event", "paste")}} の各イベントに関連付けられた操作データが {{domxref("ClipboardEvent.clipboardData")}} プロパティでアクセスできるようになりました ([Firefox bug 407983](https://bugzil.la/407983))。
- {{domxref("HTMLTimeElement")}} インターフェイスを実装しました ([Firefox bug 629801](https://bugzil.la/629801))。
- {{domxref("Worker")}} コンストラクターに不正な URL を渡すと、 {{domxref("DOMException")}} を `SECURITY_ERR` で発生するようになりました ([Firefox bug 587251](https://bugzil.la/587251))。

### CSS

- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) をデフォルトで有効にしました ([Firefox バグ 841876](https://bugzil.la/841876))。
- 仕様書の変更に従って、{{cssxref("min-width")}} および {{cssxref("min-height")}} の初期値をフレックスボックスアイテムでも `0` に戻しました ([Firefox バグ 848539](https://bugzil.la/848539))。
- CSS 条件文 ({{cssxref("@supports")}} および {{domxref("CSS.supports")}}) をデフォルトで有効にしました ([Firefox バグ 855455](https://bugzil.la/855455))。
- {{cssxref("background-clip")}} および {{cssxref("background-origin")}} プロパティを {{cssxref("background")}} 一括指定プロパティでサポートしました ([Firefox バグ 570896](https://bugzil.la/570896))。

## アドオン開発者と Mozilla 開発者向けの変更点

- `nsITreeView` のメソッド `nsITreeView.getCellProperties`、`nsITreeView.getColumnProperties` および `nsITreeView.getRowProperties` から、引数 `properties` を削除しました。これらのメソッドは空白で区切られたプロパティ名の文字列を返すようになります。([Firefox バグ 407956](https://bugzil.la/407956))
- `inIDOMUtils.getCSSPropertyNames` メソッドを実装しました。これはサポートしているすべての [CSS プロパティ](/ja/docs/Web/CSS/Reference)名を返します。
- さらなる変更点については [こちら](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/) ([日本語訳](https://dev.mozilla.jp/2013/06/firefox-22-addon-compatibility/)) をご覧ください。

### Firefox 開発者ツール

- [フォントインスペクター](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/)が、コンピューター内のどのフォントがページに適用されているかを表示します。
- ハイライト表示によるフィードバックで、ページのどの領域がいつ再描画されたかを示します。
- 開発ツールをブラウザーの下側だけでなく、右側にもドッキング可能になりました。
- 開発ツール内の一部ペインを [XUL から HTML](https://bugzil.la/875727) に切り替えました。例えば CSS ルールビューアーは、`cssruleview.xul` ではなく chrome://browser/content/devtools/cssruleview\.xhtml になりました。load listener を読み込んでこれらの HTML 文書を変更するには、ペインの機能を拡張するために直接オーバーレイを追加するのではなく、外側の XUL 文書にオーバーレイやスクリプトを追加します。
- デバッガで、スタックトレースが上側にパンくずリストのように表示されるようになりました。またスクリプト一覧がパネルの左側に表示されるようになりました。

## 関連情報

- [Firefox 22 リリースノート](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Firefox 22 アドオン互換性情報](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)
