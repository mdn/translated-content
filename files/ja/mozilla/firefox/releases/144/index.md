---
title: Firefox 144 release notes for developers (Stable)
short-title: Firefox 144 (Stable)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 08f01e6cd0103ac0a472f9e3cf2482bb9fc2f25a
---

このページでは、開発者に影響する Firefox 144 の変更点をまとめています。
Firefox 144 は、米国時間 [2025 年 10 月 14 日](https://whattrainisitnow.com/release/?version=144) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- {{htmlelement("button")}} 要素の [`command`](/ja/docs/Web/HTML/Reference/Elements/button#command) および [`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor) 属性をサポートしました。`command` 属性は、実行するアクションを定義できます。`commandfor` 属性は、コマンドが作用する別の要素とボタンを関連づけることができます。コマンドは `close` のような定義済みの値、または開発者が定義した [カスタム値](/ja/docs/Web/HTML/Reference/Elements/button#custom_values) を指定できます ([Firefox bug 1983523](https://bugzil.la/1983523))。

### MathML

#### 廃止

- 非推奨の MathML STIXGeneral フォントを削除しました。設定項目 `mathml.stixgeneral_operator_stretching.disabled` も削除しました ([Firefox bug 1336058](https://bugzil.la/1336058))。

### CSS

- 単一ページアプリケーション ([SPA](/ja/docs/Glossary/SPA)) で、ビュー遷移のための [CSS 機能](/ja/docs/Web/API/View_Transition_API#css_の追加) をサポートしました。これは、ビュー遷移アニメーションの部品にスタイルを設定する手段を提供します ([Firefox bug 1985809](https://bugzil.la/1985809))。以下の機能が含まれます:
  - {{CSSXRef(":active-view-transition")}} 擬似クラス
  - {{CSSXRef("view-transition-class")}} プロパティ
  - {{CSSXRef("view-transition-name")}} プロパティ
  - {{CSSXRef("::view-transition")}} 擬似要素
  - {{CSSXRef("::view-transition-group()")}} 擬似要素
  - {{CSSXRef("::view-transition-image-pair()")}} 擬似要素
  - {{CSSXRef("::view-transition-new()")}} 擬似要素
  - {{CSSXRef("::view-transition-old()")}} 擬似要素

### JavaScript

- {{jsxref("Map.prototype.getOrInsert()")}}、{{jsxref("Map.prototype.getOrInsertComputed()")}}、{{jsxref("WeakMap.prototype.getOrInsert()")}}、{{jsxref("WeakMap.prototype.getOrInsertComputed()")}} インスタンスメソッドをサポートしました。
  これらのメソッドはすべて、指定したキーが存在する場合に、そのキーに対応する値を返します。
  キーが存在しない場合は、`getOrInsert()` はそのキーと指定した既定値の要素を挿入して返します。一方、`getOrInsertComputed()` は与えられたコールバック関数で計算した値を挿入して返します ([Firefox bug 1979917](https://bugzil.la/1979917))。

### API

- {{domxref("ScreenOrientation")}} インターフェイスの [`lock()`](/ja/docs/Web/API/ScreenOrientation/lock) および [`unlock()`](/ja/docs/Web/API/ScreenOrientation/unlock) メソッドを、Android および Windows タブレットでサポートしました ([Firefox bug 1983483](https://bugzil.la/1983483))。
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API) を [SPA (単一ページアプリケーション)](/ja/docs/Glossary/SPA) でサポートしました。これはウェブサイトの別のビューとの間で、アニメーションを使用した遷移を簡単に作るための仕組みを提供します ([Firefox bug 1985809](https://bugzil.la/1985809))。
- [CSS Object Model (CSSOM)](/ja/docs/Web/API/CSS_Object_Model) の {{domxref("CSSStyleProperties")}} インターフェイスを実装しました (非標準のインターフェイスであった `CSS2Properties` を改名しました)。インターフェイスは存在しますが、まだ使用されていません ([Firefox bug 1919582](https://bugzil.la/1919582))。
- {{domxref("PerformanceEventTiming")}} インターフェイスの {{domxref("PerformanceEventTiming.interactionId", "interactionId")}} プロパティは、ひとつのユーザー操作に属している関連イベントを関連づける一意の識別子です。これは {{glossary("Interaction to next paint")}} のメトリック計算に使用することができ、ページのライフタイムに渡ってユーザー操作への応答性を分析することに役立ちます ([Firefox bug 1956809](https://bugzil.la/1956809))。

#### DOM

- {{domxref("Element.moveBefore()","Element")}}、{{domxref("DocumentFragment.moveBefore()","DocumentFragment")}}、{{domxref("Document.moveBefore()","Document")}} インターフェイスで `moveBefore()` メソッドをサポートしました。これはオブジェクトの直下にある子要素を、別の子要素の前に移動できます。{{domxref("Node.insertBefore()")}} との違いは、移動された要素がその状態を維持することです ([Firefox bug 1983688](https://bugzil.la/1983688))。

#### Media、WebRTC、Web Audio

- 異なるオリジンの {{htmlelement("iframe")}} は、`window.top.location` を使用してトップレベルのページをリダイレクトするためにユーザー操作 ({{glossary("sticky activation", "粘着的な有効化")}}) または明示的な許可が必要になりました。
  詳しくは [Top navigation in cross-origin frames](/ja/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) をご覧ください ([Firefox bug 1419501](https://bugzil.la/1419501))。
- {{domxref("RTCDataChannel")}} のインスタンスが [移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects) になり、[ワーカー](/ja/docs/Web/API/Worker) に渡すことも可能になりました ([Firefox bug 1209163](https://bugzil.la/1209163))。
- [`closing` イベント](/ja/docs/Web/API/RTCDataChannel/closing_event) および `onclosing()` イベントハンドラーを {{domxref("RTCDataChannel")}} インターフェイスでサポートしました ([Firefox bug 1611953](https://bugzil.la/1611953))。
- {{domxref("MediaDevices")}} インターフェイスの {{domxref("MediaDevices/getUserMedia","getUserMedia()")}} および {{domxref("MediaDevices/getDisplayMedia","getDisplayMedia()")}} メソッドで [`resizeMode`](/ja/docs/Web/API/MediaTrackConstraints#resizemode) 制約をサポートしました。
  この制約は、要求した制約が基盤のハードウェアでサポートされていない場合でも、解像度やフレームレートなどほかの制約に合致する動画を開発者が要求することを可能にします。
  ブラウザーはカメラから取得した動画にクロップ、ダウンスケール、フレームレート削減を施したり、スクリーンやウィンドウから取得した動画に (クロップではなく) ダウンスケールを施したりする可能性があります ([Firefox bug 1286945](https://bugzil.la/1286945))。

#### 廃止

- 以下の非推奨および非標準のイベントを削除しました: `Document` インターフェイスの [`afterscriptexecute` event](/ja/docs/Web/API/Document/afterscriptexecute_event) および [`beforescriptexecute` event](/ja/docs/Web/API/Document/beforescriptexecute_event)、`Element` インターフェイスの [`afterscriptexecute` event](/ja/docs/Web/API/Element/afterscriptexecute_event) および [`beforescriptexecute` event](/ja/docs/Web/API/Element/beforescriptexecute_event) ([Firefox bug 1584269](https://bugzil.la/1584269))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- 新たに `browsingContext.downloadWillBegin` イベントを実装しました。これは `download` 属性を持つリンクのクリックや、添付ファイルを示す `Content-Disposition` ヘッダーを持つネットワーク要求への応答で、新たにダウンロードが開始されたときに発生します ([Firefox bug 1874365](https://bugzil.la/1874365))。

- 新たに `emulation.setScreenOrientationOverride` コマンドを実装しました。これはクライアントでスクリーンの異なる向きをエミュレーションできます。このコマンドはモバイル端末に限定されておらず、デスクトップアプリケーションでも動作します ([Firefox bug 1974167](https://bugzil.la/1974167))。

- 新たに `emulation.setTimezoneOverride` コマンドを実装しました。これはクライアントで特定のタイムゾーン設定をシミュレーションできます ([Firefox bug 1978027](https://bugzil.la/1978027))。

- `emulation.setLocaleOverride` コマンドを、過去に WebDriver BiDi で作成したサンドボックスにも特定の設定を適用できるように改良しました ([Firefox bug 1983807](https://bugzil.la/1983807))。

- `emulation.setLocaleOverride` を使用してオーバーライド設定したロケールが、同じプロセスの別のブラウジングコンテキストとの間で共有されない場合がある不具合を修正しました ([Firefox bug 1980211](https://bugzil.la/1980211))。

- `browsingContext.navigate` コマンドを、ナビゲーションがコミットされた後に発生するリダイレクトまたは中断によって発生する `NS_BINDING_ABORTED` エラーを回避するように改良しました ([Firefox bug 1914407](https://bugzil.la/1914407))。

#### Marionette

- Marionette で 一部の WebDriver classic コマンドで使用される [WebDriver の `Scroll Into View` アルゴリズム](https://w3c.github.io/webdriver/#dfn-scrolls-into-view) を、`instant` スクロール動作を常に使用するように戻しました。これは Firefox 97 で実施した変更を戻すもので、動作を `auto` に切り替えていました。この復帰は、`smooth` 動作を使用する要素をスクロールするときの潜在的な競合状態に対処します ([Firefox bug 1986238](https://bugzil.la/1986238)) ([Firefox bug 1986238](https://bugzil.la/1986238))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("scripting.RegisteredContentScript")}} の `cssOrigin` プロパティや {{WebExtAPIRef("contentScripts.register")}} の `cssOrigin` プロパティ を伴う {{WebExtAPIRef("scripting.registerContentScripts()")}} で、[`"content_scripts"` マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) からの CSS 挿入に対して、スタイルオリジンを指定する機能を追加しました。スタイルオリジンは、CSS をユーザースタイルシートとして追加する `"user"`、または作成者スタイルシートとして追加する `"author"` を使用できます。既定値は `"author"` オリジンです。これらのプロパティは大文字・小文字を区別しません。また、{{WebExtAPIRef("scripting.insertCSS()")}} の [`origin`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) プロパティの値が大文字・小文字を区別しないようになりました ([Firefox bug 1679997](https://bugzil.la/1679997))。
- {{WebExtAPIRef("storage.local")}} および {{WebExtAPIRef("storage.managed")}} で {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} をサポートしました ([Firefox bug 1385832](https://bugzil.la/1385832))。

## 実験的なウェブ機能

以下の機能は Firefox 144 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **datetime-local の時刻選択:** `dom.forms.datetime.timepicker`

  HTML の datetime-local 型 input 要素 ([`<input type="datetime-local">`](/ja/docs/Web/HTML/Reference/Elements/input/datetime-local)) に時刻選択が含まれるようになりました ([Firefox bug 1726108](https://bugzil.la/1726108))。

- **:heading():** `layout.css.heading-selector.enabled`

  [`:heading()`](/ja/docs/Web/CSS/Reference/Selectors/:heading_function) 関数擬似クラスが、見出しレベルに一致する整数のカンマ区切りリストを受け入れるように、よりシンプルになりました ([Firefox bug 1974386](https://bugzil.la/1974386) & [Firefox bug 1984310](https://bugzil.la/1984310))。
