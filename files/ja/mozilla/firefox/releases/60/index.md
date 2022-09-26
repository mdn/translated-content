---
title: Firefox 60 for developers
slug: Mozilla/Firefox/Releases/60
---

Firefox 60 は、米国時間 2018 年 5 月 9 日にリリースされました。このページでは、開発者に影響する Firefox 60 の変更点をまとめています。

## Android 版 Firefox 60 に Stylo を導入

[デスクトップ版 Firefox 57 で始めにデフォルトで有効化された](/ja/Firefox/Releases/57#Firefox_57_Firefox_Quantum)、**Quantum CSS** または **Stylo** として知られる [Firefox の新しい並列処理 CSS エンジン](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) を、Android 版 Firefox で有効化しました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- CSS ペインのルールビュー ([CSS の調査と編集](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS) をご覧ください) で精密に値を増減する (0.1 ずつ増減) キーボードショートカットを、Linux および Windows で OS のデフォルトのショートカットと衝突しないようにするため、

  <kbd>Alt</kbd>

  &#x20;\+&#x20;

  <kbd>↑</kbd>

  /

  <kbd>↓</kbd>

  &#x20;から&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>↑</kbd>

  /

  <kbd>↑</kbd>

  &#x20;に変更しました ({{bug("1413314")}})。

- CSS ペインのルールビューで、[CSS 変数名](/ja/docs/Web/CSS/Using_CSS_variables) のオートコンプリートが可能になりました ({{bug(1422635)}})。プロパティの値に `var(` と入力してダッシュ (`-`) を押下すると、CSS で宣言した変数をオートコンプリートのリストに表示します。
- [レスポンシブデザインモード](/ja/docs/Tools/Responsive_Design_Mode) で、タッチのシミュレーションを切り替えたときやシミュレーションするユーザーエージェントを変更したときにページを自動的に再読み込みする機能を有効化/無効化できる、_Reload when..._ ドロップダウンメニューを追加しました。詳しくは [ページ再読み込みの動作を制御する](/ja/docs/Tools/Responsive_Design_Mode#Controlling_page_reload_behavior) をご覧ください ({{bug(1428816)}})。
- 設定項目 `view_source.tab` を削除しましたので、[ソース表示](/ja/docs/Tools/View_source) モードを新しいタブか新しいウィンドウで選ぶことができなくなりました。ページのソースは、常に新しいタブで表示されます ({{bug(1418403)}})。

### HTML

- `designMode` および `contenteditable` の状況で、ブロックレベルの編集ホストの子であるインライン要素またはテキストノードの内部にキャレットがあるときに Enter キーを押下すると、`<div>` 要素を挿入するようになりました。以前は、`<br>` 要素を挿入していました。アプリで以前の動作を望む場合は、`document.execCommand()` で実現できます。詳しくは [マークアップ生成の違い](/ja/docs/Web/Guide/HTML/Editable_content#Differences_in_markup_generation) をご覧ください ({{bug(1430551)}})。

### CSS

- {{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("align-self")}}、{{cssxref("justify-content")}}、{{cssxref("place-content")}} プロパティの値を、最新の [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) 仕様書に従って更新しました ({{bug(1430817)}})。
- {{cssxref("paint-order")}} プロパティを実装しました ({{bug(1426146)}})。

### SVG

_変更なし。_

### JavaScript

- ECMAScript 2015 モジュールを、デフォルトで有効にしました ({{bug(1438139)}})。詳しくは [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) および [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) をご覧ください。または、MDN のリファレンス文書を確認してください:

  - [`<script src="main.js" type="module">`](/ja/docs/Web/HTML/Element/script#attr-type) および [`<script nomodule src="fallback.js">`](/ja/docs/Web/HTML/Element/script#attr-nomodule)
  - [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 文と [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 文。

- {{jsxref("Array.prototype.values()")}} メソッドを再び追加しました ({{bug(1420101)}})。これは以前のバージョンで、互換性の問題のために無効化されました。このメソッドを独自に実装していないことを確認してください。

### API

#### 新規 API

- [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) を有効化しました ({{bug(1432542)}})。

#### DOM

- [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) で、`MakePublicKeyCredentialOptions` ディクショナリーオブジェクトを {{domxref("PublicKeyCredentialCreationOptions")}} に改名されました。これを Firefox でも実施しました ({{bug(1436473)}})。
- 設定項目 `dom.workers.enabled` を削除しました。すなわち、Worker を無効化できなくなりました ({{bug(1434934)}})。
- {{domxref("Document.body","body")}} プロパティを {{domxref("Document")}} インターフェイスに実装しました。以前は {{domxref("HTMLDocument")}} インターフェイスにありました ({{bug(1276438)}})。
- {{domxref("PerformanceResourceTiming")}} が Worker で使用可能になりました ({{bug(1425458)}})。
- {{domxref("PerformanceObserver.takeRecords()")}} メソッドを実装しました ({{bug(1436692)}})。
- アクティブなキーボードレイアウトが ASCII 文字を生成しない場合でも、句読点キーの {{domxref("KeyboardEvent.keyCode")}} 属性は 0 ではない値になります。[詳しくはこちらをご覧ください](/ja/docs/Web/API/KeyboardEvent/keyCode#keyCode_of_punctuation_keys_on_some_keyboard_layout)。新しいアプリケーションでは `KeyboardEvent.keyCode` を**使用しない**ようにしてください。代わりに {{domxref("KeyboardEvent.key")}} または {{domxref("KeyboardEvent.code")}} を使用します。
- {{domxref("Animation.updatePlaybackRate()")}} メソッドを実装しました ({{bug("1436659")}})。
- [句読点キーの keyCode の値](/ja/docs/Web/API/KeyboardEvent/keyCode#keyCode_of_punctuation_keys_on_some_keyboard_layout) を決定するための新しい規則を導入しました ({{bug(1036008)}})。
- Gecko 限定の option オブジェクトである、{{domxref("IDBFactory.open()")}} メソッドの `storage` オプション ([Experimental Gecko options object](/ja/docs/Web/API/IDBFactory/open#Experimental_Gecko_options_object) もご覧ください) が非推奨になりました ({{bug(1442560)}})。
- [IndexedDB](/ja/docs/Web/API/IndexedDB_API) のコード内で Promise が使用可能になりました ({{bug(1193394)}})。

#### DOM イベント

_変更なし。_

#### Service workers

_変更なし。_

#### メディアと WebRTC

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得したメディアを録画または共有するとき、対応するトラックの {{domxref("MediaStreamTrack.enabled")}} プロパティを `false` に設定してカメラをミュートすると、カメラを使用していないことをユーザーにわかりやすくするために、カメラが "使用中" であることを示すランプを消灯するようになりました ({{bug(1299515)}})。詳しくは [MediaDevices.getUserMedia()](/ja/docs/Web/API/MediaDevices/getUserMedia) の [User privacy](/ja/docs/Web/API/MediaDevices/getUserMedia#User_privacy) をご覧ください。また、[こちらのブログ記事](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/) もご覧ください。
- {{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}} を使用して {{domxref("RTCPeerConnection")}} からトラックを削除するときに、{{domxref("RTCPeerConnection.getSenders", "getSenders()")}} が報告する送信者のピアコネクションのリストからトラックの {{domxref("RTCRtpSender")}} を削除しないようになりました ({{bug(1290949)}})。
- {{domxref("RTCRtpContributingSource")}} および {{domxref("RTCRtpSynchronizationSource")}} オブジェクトのタイムスタンプは、以前は {{jsxref("Date.getTime()")}} が返す値に基づいて報告されていました。Firefox 60 で、正しく [Performance Timing API](/ja/docs/Web/API/Performance_API) を使用するように修正しました ({{bug(1433576)}})。
- 仕様書に合わせて {{domxref("ConvolverNode.ConvolverNode","ConvolverNode()")}} コンストラクターで、参照される {{domxref("AudioBuffer")}} のチャンネル数が 1、2、あるいは 4 でない場合に `NotSupportedError` が発生するようになりました ({{bug(1443228)}})。
- {{domxref("RTCPeerConnection")}} で廃止されたイベントハンドラーである {{domxref("RTCPeerConnection.onremovestream")}} を削除しました。代わりに {{event("removetrack")}} イベントを使用するべきです ({{bug(1442385)}})。
- {{domxref("RTCDataChannel")}} は `DataChannel` の別名ではなく、`RTCDataChannel` そのものが本名になりました。`DataChannel` という名前はサポートしません ({{bug(1173851)}})。

#### Canvas と WebGL

- 設定項目 `privacy.resistFingerprinting` が `true` である場合に、{{domxref("WEBGL_debug_renderer_info")}} WebGL 拡張が無効になります ({{bug(1337157)}})。

### CSSOM

_変更なし。_

### HTTP

_変更なし。_

### セキュリティ

- {{httpheader("X-Content-Type-Options")}} ヘッダーで `no-sniff` を設定したときに、JavaScript の MIME タイプの仕様に従うようになりました。特に、`text/json` および `application/json` は有効な値ではなくなりました ({{bug(1431095)}})。

### プラグイン

_変更なし。_

### その他

- クレデンシャルを含むフェッチとクレデンシャルを含まないフェッチが、接続を共有できるようになりました。例えば同じオリジンからウェブフォントとクレデンシャルが設定されたユーザーデータを同じ CDN へ要求するときに、どちらも同じ接続を共有することにより、応答が早くなる可能性があります ({{bug(1363284)}})。

## ウェブプラットフォームから廃止

### HTML

_変更なし。_

### CSS

- 独自仕様である {{cssxref("-moz-user-input")}} プロパティの `enabled` および `disabled` 値が使用できなくなりました ({{bug("1405087")}})。
- 独自仕様である {{cssxref("-moz-border-top-colors")}}、{{cssxref("-moz-border-right-colors")}}、{{cssxref("-moz-border-bottom-colors")}}、{{cssxref("-moz-border-left-colors")}} プロパティを、プラットフォームから完全に削除しました ({{bug(1429723)}})。

### JavaScript

- 非標準の [式クロージャ](/ja/docs/Web/JavaScript/Reference/Operators/Expression_closures) 構文を削除しました ({{bug(1426519)}})。

### API

- {{event("userproximity")}} および {{event("deviceproximity")}} イベント ({{domxref("UserProximityEvent")}} および {{domxref("DeviceProximityEvent")}} もご覧ください) を設定項目 `device.sensors.proximity.enabled` で、デフォルトで無効化しました ({{bug(1359076)}})。
- {{event("devicelight")}} イベント ({{domxref("DeviceLightEvent")}} もご覧ください) を設定項目 `device.sensors.ambientLight.enabled` で、デフォルトで無効化しました ({{bug(1359076)}})。

### SVG

_変更なし。_

### その他

_変更なし。_

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

テーマ API:

- headerURL が省略可能になりました。
- ブラウザー [テーマ](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) を作成するとき、`headerURL` が指定されていない場合は、ヘッダーテキストに適用されている {{cssxref("text-shadow")}} を削除します ({{bug(1404688)}})。
- 新たにサポートしたプロパティ:

  - **tab_line**
  - **tab_selected**
  - **popup**
  - **popup_border**
  - **popup_text**
  - **tab_loading**
  - **icons**
  - **icons_attention**
  - **frame_inactive**
  - **button_background_active**
  - **button_background_hover**

## 関連情報

- [Firefox — Notes (60.0)](https://www.mozilla.org/firefox/60.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(59)}}
