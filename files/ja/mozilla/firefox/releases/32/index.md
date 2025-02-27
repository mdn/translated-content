---
title: Firefox 32 for developers
slug: Mozilla/Firefox/Releases/32
l10n:
  sourceCommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{FirefoxSidebar}}

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [Web Audio Editor](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html)
- _スクラッチパッドのコード補完とインラインドキュメント_
- [インスペクターのルールビューでユーザーエージェントのスタイルを表示](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#rules-view)
- [要素選択ボタンを移動](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox-32-onwards-2)
- [インスペクターの情報バーにノードの寸法を追加](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox-32-onwards)
- [ページ全体のスクリーンショットボタンを追加](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#extra-tools)
- ツールに HiDPI 画像を追加
- インスペクターで、`display:none` が設定されているノードを異なる書式で表示

[Firefox 31 から Firefox 32 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox)

### CSS

- {{cssxref("mix-blend-mode")}} を既定で有効にしました ([Firefox バグ 952643](https://bugzil.la/952643))。
- release ビルドで、position:sticky を既定で有効にしました (以前は Nightly および Aurora のみ有効) ([Firefox バグ 916315](https://bugzil.la/916315))。
- {{cssxref("box-decoration-break")}} を実装して、非標準の `-moz-background-inline-policy` を削除しました ([Firefox バグ 613659](https://bugzil.la/613659))。
- {{cssxref("flex-grow")}} および {{cssxref("flex-shrink")}} が、0 と 0 以外の値との間でトランジションすることが可能になりました ([Firefox バグ 996945](https://bugzil.la/996945))。

### HTML

- {{HTMLElement("img")}} 要素の [`srcset`](/ja/docs/Web/HTML/Element/img#srcset) プロパティを試験的に実装しました。`dom.image.srcset.enable` を `true` に設定すると有効になります ([Firefox バグ 870021](https://bugzil.la/870021))。
- [**id**](/ja/docs/Web/HTML/Global_attributes/id) および [**class**](/ja/docs/Web/HTML/Global_attributes/class) が真の[グローバル属性](/ja/docs/Web/HTML/Global_attributes)となり、名前空間の有無にかかわらず XML 要素にも適用されるようになりました ([Firefox バグ 741295](https://bugzil.la/741295))。

### JavaScript

- 新たな ECMAScript 2015 の組み込みメソッドを実装しました。

  - {{jsxref("Array.from()")}} ([Firefox バグ 904723](https://bugzil.la/904723))
  - {{jsxref("Array.prototype.copyWithin()")}} ([Firefox バグ 934423](https://bugzil.la/934423))
  - {{jsxref("Number.isSafeInteger()")}} ([Firefox バグ 1003764](https://bugzil.la/1003764))

### インターフェイス/API/DOM

- {{domxref("Navigator/languages", "navigator.languages")}} プロパティおよび {{domxref("Window.languagechange_event", "languagechange")}} イベントを実装しました ([Firefox バグ 889335](https://bugzil.la/889335))。
- {{domxref("Navigator.vibrate()")}} メソッドの動作が最新の仕様に適合するようになりました。長すぎる振動は切り詰められます ([Firefox バグ 1014581](https://bugzil.la/1014581))。
- {{domxref("KeyboardEvent.getModifierState()")}} メソッドおよび {{domxref("MouseEvent.getModifierState()")}} メソッドを、`Accel` 仮想モディファイアをサポートするように拡張しました ([Firefox バグ 1009388](https://bugzil.la/1009388))。
- {{domxref("KeyboardEvent.code")}} プロパティを試験的に実装しました。ただし、release ビルドでは無効化しています ([Firefox バグ 865649](https://bugzil.la/865649))。
- {{domxref("Document.querySelector()")}} および {{domxref("Document.querySelectorAll()")}} で scope が設定されたセレクター (例えば `querySelector(":scope > li")`) を実装しました ([Firefox バグ 528456](https://bugzil.la/528456))。
- [ウェブアニメーション API](https://dev.w3.org/fxtf/web-animations/) に関して、{{domxref("Document.timeline")}} インターフェイスを実験的に実装しました ([Firefox バグ 998246](https://bugzil.la/998246))。これは設定項目 `layout.web-animations.api.enabled` で制御されており、現在は Nightly および Aurora のみで有効化しています。
- [データストア API](/ja/docs/Web/API/Data_Store_API) が[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)で使用可能になりました ([Firefox バグ 949325](https://bugzil.la/949325))。ただし、認定アプリケーションにのみ有効化されています。
- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)の {{domxref("InstallPhaseEvent")}} インターフェイスおよび {{domxref("InstallEvent")}} インターフェイスを実装しました ([Firefox バグ 967264](https://bugzil.la/967264))。
- [MSISDN Verification API](/ja/docs/Web/API/MSISDN_Verification_API) を追加しました。特権アプリに対してのみ有効化されています ([Firefox バグ 988469](https://bugzil.la/988469))。
- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API)を Android 版の Firefox が対応しました ([Firefox バグ 852935](https://bugzil.la/852935))。
- 仕様や CSS 構文の発展に適合するよう、{{domxref("CSS.escape()")}} を若干変更しました。識別子を `'--'` から始めることが可能になり、2 番目のダッシュ記号はエスケープされません。また、ベンダー識別子はエスケープしません。([Firefox バグ 1008719](https://bugzil.la/1008719))
- Hit Regions の実装を完全にするために {{domxref("MouseEvent.region")}} が実装されました ([Firefox バグ 979692](https://bugzil.la/979692)).
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}} メソッドは既定では有効になりました ([Firefox バグ 1004579](https://bugzil.la/1004579))。
- {{domxref("Navigator.doNotTrack")}} プロパティは `'yes'` や `'no'` の代わりに、HTTPの値を反映した `'1'` や `'0'` を返すようになりました ([Firefox バグ 887703](https://bugzil.la/887703))。
- [XMLHttpRequest.responseURL](/ja/docs/Web/API/XMLHttpRequest/responseURL) が実装されました ([Firefox バグ 998076](https://bugzil.la/998076))。

### MathML

- {{MathMLElement("menclose")}} 要素の notation 属性で `phasorangle` をサポートしました。

### SVG

_変更なし。_

### WebRTC

- ストリームのサイズやフレームレートを制限するため、[WebRTC](/ja/docs/Glossary/WebRTC) の {{domxref("NavigatorUserMedia.getUserMedia", "getUserMedia()")}}、`width`、`height`、`framerate` に新たな制約を与えました ([Firefox バグ 907352](https://bugzil.la/907352)):

  ```js
  {
    mandatory: {
      width: { min: 640 },
      height: { min: 480 },
    },
    optional: [
      { width: 650 },
      { width: { min: 650 }},
      { frameRate: 60 },
      { width: { max: 800 }},
    ]
  }
  ```

- 前回までコールバック関数を引数として使用していた WebRTC のメソッドは、 JavaScript の[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)でも利用できるようになりました。

### Audio/Video

_変更なし。_

## セキュリティ

- [特権コードは JavaScript の `Object` および `Array` のインスタンスで Xray vision が適用されるようになりました](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xray-semantics-for-object-and-array)。

## アドオン開発者と Mozilla 開発者向けの変更点

DOM オブジェクトではない JavaScript オブジェクトに、Xray vision を適用するようになりました。 [Xrays for JavaScript objects](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays-for-javascript-objects)。

`getDataDirectory()` メソッドが [`Addon`](/ja/docs/Mozilla/Add-ons/Add-on_Manager/Addon) インスタンスに追加されました。このメソッドは、現在のプロファイル内で、アドオンがデータを格納するために好ましい場所を返します。

### Add-on SDK

#### ハイライト

- `PageMod` に [`exclude`](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-mod#pagemod%28options%29) オプションを追加しました。
- `Request` に [`anonymous`](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/request#request%28options%29) オプションを追加しました。
- [アドオンデバッガー](/ja/docs/Mozilla/Add-ons/Add-on_Debugger)がコンソールとスクラッチパッドを含むようになりました。

#### 詳細

[Firefox 31 から Firefox 32 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

[Firefox 31 から Firefox 32 の間に解決したバグ](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

### XPCOM

- `nsIUDPSocket` インターフェイスは、新しい `nsIUDPSocket.multicastLoopback`、`nsIUDPSocket.multicastInterface`、`nsIUDPSocket.multicastInterfaceAddr` 属性と、 `nsIUDPSocket.joinMulticast()` および `nsIUDPSocket.leaveMulticast()` メソッド が追加されて、マルチキャストにも対応するようになりました。

### 過去のバージョン

{{Firefox_for_developers('31')}}
