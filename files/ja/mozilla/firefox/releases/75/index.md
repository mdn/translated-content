---
title: Firefox 75 for developers
slug: Mozilla/Firefox/Releases/75
---

{{FirefoxSidebar}}

Firefox 75 は、米国時間 2020 年 4 月 7 日にリリースされました。このページでは、開発者に影響する Firefox 75 の変更点をまとめています。

**付随する hacks ブログの記事「[Firefox 75: Ambitions for April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/)」もご覧ください。**

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [測定ツール](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) で長方形のリサイズが可能になりました ([Firefox バグ 1152321](https://bugzil.la/1152321))。
- [インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) で、以前から使用できていた CSS セレクターに加えて、[XPath](/ja/docs/Web/XPath) の式を使用して要素を示すことが可能になりました ([Firefox バグ 963933](https://bugzil.la/963933))。
- プレーンテキストによる検索に加えて、スラッシュの間に [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions) を記述することで [WebSocket](/ja/docs/Web/API/WebSockets_API) メッセージをフィルタリングできるようになりました ([Firefox バグ 1593837](https://bugzil.la/1593837))。

### HTML

- {{HTMLElement("img")}} 要素の [`loading`](/ja/docs/Web/HTML/Element/img#loading) 属性を実装しました。この文字列値は `lazy` を設定することで、画像を [遅延読み込み](/ja/docs/Web/Performance/Lazy_loading) するべきであると示します ([Firefox バグ 1542784](https://bugzil.la/1542784))。
- [`<style>`](/ja/docs/Web/HTML/Element/style) 要素の `type` 属性の値を、仕様書に従って `text/css` のみに限定しました ([Firefox バグ 1614329](https://bugzil.la/1614329))。

### CSS

- {{cssxref("min")}}、{{cssxref("max")}}、{{cssxref("clamp")}} 関数を実装しました ([Firefox バグ 1519519](https://bugzil.la/1519519))。
- {{cssxref("text-decoration-skip-ink")}} プロパティの値 `all` を追加しました ([Firefox バグ 1611965](https://bugzil.la/1611965))。

### アクセシビリティ

[ARIA annotations](/ja/docs/Web/Accessibility/ARIA) に関する新しいロールやオブジェクトを、Windows および Linux の Firefox で公開しました (これらはスクリーンリーダーがサポートするまで使用できないことを覚えておいてください):

- `aria-description` ([Firefox バグ 1608961](https://bugzil.la/1608961))
- [`role="mark"`](/ja/docs/Web/Accessibility/ARIA/Roles/Mark_role) および [`role="suggestion"`](/ja/docs/Web/Accessibility/ARIA/Roles/Suggestion_role) ([Firefox バグ 1608965](https://bugzil.la/1608965))
- [`role="comment"`](/ja/docs/Web/Accessibility/ARIA/Roles/Comment_role) ([Firefox バグ 1608969](https://bugzil.la/1608969))
- `aria-details` で複数の ID ([Firefox バグ 1608883](https://bugzil.la/1608883))

> [!NOTE]
> macOS では、はじめに Apple が Safari で Apple 方式の属性として VoiceOver へ公開するものを定義することを待っており、それらに一式に従う計画です。

### JavaScript

- [Public static class fields](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields#public_static_fields) をサポートしました ([Firefox バグ 1535804](https://bugzil.la/1535804))。
- [`Intl.Locale`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) クラスをサポートしました ([Firefox バグ 1613713](https://bugzil.la/1613713))。
- [`Function.caller`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) プロパティを、最新の [ECMAScript 仕様の提案](https://github.com/claudepache/es-legacy-function-reflection) に合わせて更新しました。呼び出し元が strict、async、あるいは generator 関数であった場合に、以前は `TypeError` が発生していましたが、`null` を返すようになりました ([Firefox バグ 1610206](https://bugzil.la/1610206))。

### API

#### DOM

- {{domxref("HTMLFormElement")}} インターフェイスへ新たに {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}} メソッドを追加しました。古い (現在も使用できる) {{domxref("HTMLFormElement.submit", "submit()")}} メソッドとは異なり、`requestSubmit()` はフォームのデータを宛先に送信するだけでなく、指定した送信ボタンがクリックされたかのように動作します。よって {{domxref("HTMLFormElement.submit_event", "submit")}} イベントが発生して、フォームはデータを送信する前に妥当性のチェックを受けます ([Firefox バグ 1613360](https://bugzil.la/1613360))。
- {{domxref("HTMLFormElement.submit_event", "submit")}} イベントが単なる {{domxref("Event")}} ではなく、{{domxref("SubmitEvent")}} 型のオブジェクトとして表すようになりました。`SubmitEvent` は新たに {{domxref("SubmitEvent.submitter", "submitter")}} プロパティを持っており、これはフォームの送信を発生させた {{domxref("Element")}} です。このイベントにより送信イベントに対してひとつのハンドラーで、複数のボタンやリンクのうちどれがフォームの送信に使用されたかを見わけることが可能になります ([Firefox バグ 1588715](https://bugzil.la/1588715))。
- 切り離された (DOM ツリーの一部ではない) 要素で {{domxref("HTMLElement.click", "click()")}} メソッドを呼び出すと、その要素に `click` イベントを送信するようになりました ([Firefox バグ 1610821](https://bugzil.la/1610821))。

#### Web animations API

Firefox 75 で、[Web Animations API](/ja/docs/Web/API/Web_Animations_API) に複数の機能を追加しました:

- ほかの無期限に実行されるアニメーションによって置き換えられたアニメーションを自動的に削除するような、[Implicit to/from keyframes](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) をサポートしました ([Firefox バグ 1618773](https://bugzil.la/1618773))。これは以下のサポートを含みます:

  - [`Animation.commitStyles()`](/ja/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/ja/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/ja/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/ja/docs/Web/API/Animation/replaceState)

- [`Animation.timeline`](/ja/docs/Web/API/Animation/timeline) ゲッター、[`Document.timeline`](/ja/docs/Web/API/Document/timeline)、[`DocumentTimeline`](/ja/docs/Web/API/DocumentTimeline)、[`AnimationTimeline`](/ja/docs/Web/API/AnimationTimeline) の機能をデフォルトで有効にしました ([Firefox バグ 1619178](https://bugzil.la/1619178))。
- [`Document.getAnimations()`](/ja/docs/Web/API/Document/getAnimations) および [`Element.getAnimations()`](/ja/docs/Web/API/Element/getAnimations) メソッドをデフォルトで有効にしました ([Firefox バグ 1619821](https://bugzil.la/1619821))。

#### メディア、Web Audio、WebRTC

- [`RTCPeerConnection.setLocalDescription()`](/ja/docs/Web/API/RTCPeerConnection/setLocalDescription) メソッドを引数なしで呼び出せるようになりました。この場合、WebRTC ランタイムは新しいローカルセッションデスクリプション自体を作成しようとします ([Firefox バグ 1568292](https://bugzil.la/1568292))。

### HTTP

_変更なし。_

### セキュリティ

- CSS セレクターや `.getAttribute("nonce")` の呼び出しなど、スクリプト以外をソースとする [CSP](/ja/docs/Web/HTTP/CSP) nonce が隠されるようになりました。代わりに、スクリプトから nonce へアクセスするには [`.nonce`](/ja/docs/Web/API/HTMLElement/nonce) プロパティを確認してください ([Firefox バグ 1374612](https://bugzil.la/1374612))。

### プラグイン

_変更なし。_

### WebDriver conformance (Marionette)

- Firefox が起動するとき常に Marionette の初期化が行われる不具合を修正しました。コマンドライン引数や環境変数で制限されるようになりました ([Firefox バグ 1622012](https://bugzil.la/1622012))。
- `WebDriver:Print` が、文書に余分なマージンを追加しないようになりました ([Firefox バグ 1616932](https://bugzil.la/1616932))。
- 投機的な接続を強制的に無効化するため `network.http.speculative-parallel-limit` の設定値を `0` に変更していた動作を修正しました ([Firefox バグ 1617869](https://bugzil.la/1617869))。

### その他

_変更なし。_

## アドオン開発者向けの変更点

### API の変更点

- {{WebExtAPIRef("browserSettings")}} に新たな設定を追加しました ([Firefox バグ 1286953](https://bugzil.la/1286953)):

  - ズームがサイトごとかタブごとかを制御する {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}。
  - ズームがページ全体に適用されるかテキストのみに適用されるかを制御する {{WebExtAPIRef("browserSettings.zoomFullPage")}}。

- {{WebExtAPIRef("tabs.saveAsPDF")}} を使用して PDF 形式で保存するときに使用するファイル名を、`tabs.PageSettings` の `toFileName` で指定できるようになりました ([Firefox バグ 1483590](https://bugzil.la/1483590))。

### マニフェストの変更点

- "privacy" パーミッションが省略可能になりました ([Firefox バグ 1618399](https://bugzil.la/1618399))。

## 過去のバージョン

{{Firefox_for_developers(74)}}
