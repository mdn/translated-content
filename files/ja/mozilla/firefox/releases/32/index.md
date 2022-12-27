---
title: Firefox 32 for developers
slug: Mozilla/Firefox/Releases/32
---

Gecko 32 を搭載した Firefox 32 は、米国時間 2014 年 9 月 2 日にリリースされました。このページでは、開発者に影響する Firefox 32 の変更点をまとめています。

## Web 開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [Web Audio Editor](/ja/docs/Tools/Web_Audio_Editor)
- [スクラッチパッドのコード補完とインラインドキュメント](/ja/docs/Tools/Scratchpad#Code_completion_and_inline_documentation)
- [インスペクタのルールビューでユーザエージェントのスタイルを表示](/ja/docs/Tools/Page_Inspector#Rules_view)
- [要素選択ボタンを移動](/ja/docs/Tools/Page_Inspector#Firefox_32_onwards_2)
- [インスペクタの情報バーにノードの寸法を追加](/ja/docs/Tools/Page_Inspector#Firefox_32_onwards)
- [ページ全体のスクリーンショットボタンを追加](/ja/docs/Tools/Tools_Toolbox#Extra_tools)
- ツールに HiDPI 画像を追加
- インスペクタで、`display:none` が設定されているノードを異なる書式で表示

[Firefox 31 から Firefox 32 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox)

### CSS

- {{cssxref("mix-blend-mode")}} をデフォルトで有効にしました ({{Bug(952643)}})。
- release ビルドで、position:sticky をデフォルトで有効にしました (以前は Nightly および Aurora のみ有効) ({{Bug(916315)}})。
- {{cssxref("box-decoration-break")}} を実装して、非標準の {{cssxref("-moz-background-inline-policy")}} を削除しました ({{Bug(613659)}})。
- {{cssxref("flex-grow")}} および {{cssxref("flex-shrink")}} が、0 と 0 以外の値との間でトランジションすることが可能になりました ({{Bug(996945)}})。

### HTML

- {{HTMLElement("img")}} 要素の {{HTMLattrxref("srcset", "img")}} プロパティを試験的に実装しました。`dom.image.srcset.enable` を `true` に設定すると有効になります ({{Bug(870021)}})。

### JavaScript

- 新たな ECMAScript 6 の組み込みメソッドを実装しました:

  - {{jsxref("Array.from()")}} ({{bug(904723)}})
  - {{jsxref("Array.prototype.copyWithin()")}} ({{bug(934423)}})
  - {{jsxref("Number.isSafeInteger()")}} ({{bug(1003764)}})

### インターフェイス/API/DOM

- {{domxref("NavigatorLanguage.languages", "navigator.languages")}} プロパティおよび {{event("languagechange")}} イベントを実装しました ({{Bug(889335)}})。
- {{domxref("Navigator.vibrate()")}} メソッドの動作が最新の仕様に適合するようになりました。長すぎる振動は切り詰められます ({{bug(1014581)}})。
- {{domxref("KeyboardEvent.getModifierState()")}} メソッドおよび {{domxref("MouseEvent.getModifierState()")}} メソッドを、`Accel` 仮想モディファイアをサポートするように拡張しました ({{Bug(1009388)}})。
- {{domxref("KeyboardEvent.code")}} プロパティを試験的に実装しました。ただし、release ビルドでは無効化しています ({{Bug(865649)}})。
- {{domxref("Document.querySelector()")}} および {{domxref("Document.querySelectorAll()")}} で scope が設定されたセレクタ (例えば `querySelector(":scope > li")`) を実装しました ({{Bug(528456)}})。
- [Web Animation API](http://dev.w3.org/fxtf/web-animations/) に関して、{{domxref("Document.timeline")}} インターフェイスを実験的に実装しました ({{bug("998246")}})。これは設定項目 `layout.web-animations.api.enabled` で制御されており、現在は Nightly および Aurora のみで有効化しています。
- [Data Store API](/ja/docs/Web/API/Data_Store_API) が [Web Workers](/ja/docs/Web/Guide/Performance/Using_web_workers) で使用可能になりました ({{bug("949325")}})。ただし、認定アプリケーションにのみ有効化されています。
- [ServiceWorker](/ja/docs/Web/API/ServiceWorker_API) の {{domxref("InstallPhaseEvent")}} インターフェイスおよび {{domxref("InstallEvent")}} インターフェイスを実装しました ({{Bug("967264")}})。
- [MSISDN Verification API](/ja/docs/Web/API/MSISDN_Verification_API) を追加しました。特権アプリに対してのみ有効化されています ({{Bug("988469")}})。
- 仕様や CSS 構文の発展に適合するよう、{{domxref("CSS.escape()")}} を若干変更しました。識別子を `'--'` から始めることが可能になり、2 番目のダッシュ記号はエスケープされません。また、ベンダー識別子はエスケープしません。({{bug(1008719)}})
- ストリームのサイズやフレームレートを制限するため、[WebRTC](/ja/docs/Glossary/WebRTC) の {{domxref("NavigatorUserMedia.getUserMedia", "getUserMedia()")}}、`width`、`height`、`framerate` に新たな制約を与えました ({{bug("907352")}}):

  ```json
  {
    mandatory: {
      width: { min: 640 },
      height: { min: 480 }
    },
    optional: [
      { width: 650 },
      { width: { min: 650}},
      { frameRate: 60 },
      { width: { max: 800}},
    ]
  }
  ```

### MathML

- {{MathMLElement("menclose")}} 要素の notation 属性で `phasorangle` をサポートしました。

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## セキュリティ

- [特権コードは JavaScript の `Object` および `Array` のインスタンスで Xray vision が適用されるようになりました](/ja/docs/Xray_vision#Xray_semantics_for_Object_and_Array)。

## アドオン開発者と Mozilla 開発者向けの変更点

DOM オブジェクトではない JavaScript オブジェクトに、Xray vision を適用するようになりました: [Xrays for JavaScript objects](/ja/docs/Xray_vision#Xrays_for_JavaScript_objects)。

### Add-on SDK

#### ハイライト

- `PageMod` に [`exclude`](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-mod#PageMod%28options%29) オプションを追加しました。
- `Request` に [`anonymous`](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/request#Request%28options%29) オプションを追加しました。
- [アドオンデバッガ](/ja/docs/Mozilla/Add-ons/Add-on_Debugger)がコンソールとスクラッチパッドを含むようになりました。

#### 詳細

[Firefox 31 から Firefox 32 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

[Firefox 31 から Firefox 32 の間に解決したバグ](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

## 関連情報

- [Firefox 32 リリースノート](http://www.mozilla.jp/firefox/32.0/releasenotes/)
- [Firefox 32 アドオン互換性情報](https://dev.mozilla.jp/2014/08/firefox-32-addon-compatibility/)

### 過去のバージョン

{{Firefox_for_developers('31')}}
