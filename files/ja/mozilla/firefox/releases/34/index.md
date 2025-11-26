---
title: Firefox 34 for developers
slug: Mozilla/Firefox/Releases/34
---

Gecko 34 を搭載した Firefox 34 は、米国時間 2014 年 12 月 1 日にリリースされました。このページでは、開発者に影響する Firefox 34 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [Storage Inspector: ウェブページが保存したデータを確認できる新ツール](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Performance tool: プロファイラの UI の改良とフレームレートのタイムライン](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Frame switching: 開発ツールがページ内の特定の iframe を指すようにする](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html)
- [console.table をサポート](/ja/docs/Web/API/console/table_static)
- [インスペクターで jQuery のイベントの確認が可能](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#examining_event_listeners)

[Firefox 33 から Firefox 34 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176)

### CSS

- CSS Fonts Level 3 の実験的な実装を進めています。以下の機能を新たに実装しました:
  - {{cssxref("font-variant-position")}} のフォールバックアルゴリズム。フォントから与えられる上付き文字および下付き文字のメトリックを基に、不足しているグリフの代替を生成します ([Firefox バグ 1024804](https://bugzil.la/1024804))。
  - 設定項目 `layout.css.font-features.enabled` を削除しました。以下のプロパティはデフォルトで有効になります:
    - 短縮プロパティになった、CSS Font Level 3 版の {{cssxref("font-variant")}}。
    - 個別のプロパティである {{cssxref("font-variant-caps")}}、{{cssxref("font-variant-numeric")}}、{{cssxref("font-variant-position")}}、{{cssxref("font-variant-east-asian")}}、{{cssxref("font-variant-ligatures")}}、{{cssxref("font-variant-alternates")}}。
    - {{cssxref("font-kerning")}} プロパティおよび {{cssxref("font-synthesis")}} プロパティ。
    - {{cssxref("font-feature-settings")}} プロパティおよび {{cssxref("font-language-override")}} プロパティの接頭辞を削除。接頭辞つきのプロパティも、移行を容易にするためしばらく使用可能です。

- {{cssxref("min-width")}} および {{cssxref("min-height")}} に、以前とは異なる動作で値 `auto` を追加しました ([Firefox バグ 984711](https://bugzil.la/984711) および [Firefox バグ 1015474](https://bugzil.la/1015474))。
- {{cssxref("filter")}} プロパティの関数タイプの値を、実験的に実装しました。ただし、デフォルトで無効です。これは設定項目 `layout.css.filters.enabled` で制御します ([Firefox バグ 948265](https://bugzil.la/948265))。
- {{cssxref("display")}}、{{cssxref("position")}}、{{cssxref("overflow")}} および類似のプロパティの変更とともに開始する CSS Transitions の開始処理を修正しました ([Firefox バグ 887541](https://bugzil.la/887541))。

### HTML

_変更なし。_

### JavaScript

- ES6 の[オブジェクトリテラルにおける算出プロパティ名](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#算出プロパティ名) の構文を実装しました ([Firefox バグ 924688](https://bugzil.la/924688))。
  - これは [getter](/ja/docs/Web/JavaScript/Reference/Functions/get) および [setter](/ja/docs/Web/JavaScript/Reference/Functions/set) のメソッド名も同様に含まれており ([Firefox バグ 1048384](https://bugzil.la/1048384))、また [構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#計算されたオブジェクトのプロパティの名前と構造分解)と共に使用することもできます。

- ES6 の、オブジェクトの[メソッド定義における短縮記法](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を実装しました ([Firefox バグ 924672](https://bugzil.la/924672))。
- ES6 の `Object` のメソッドである {{jsxref("Object.assign", "Object.assign()")}} を実装しました ([Firefox バグ 937855](https://bugzil.la/937855))。
- ES6 の [template strings](/ja/docs/Web/JavaScript/Reference/Template_literals) および {{jsxref("String.raw()")}} メソッドをサポートしました ([Firefox バグ 1038259](https://bugzil.la/1038259)、[Firefox バグ 1039774](https://bugzil.la/1039774))。
- ES6 の新たなオブジェクトである {{jsxref("WeakSet")}} を実装しました ([Firefox バグ 792439](https://bugzil.la/792439))。
- 最近の仕様の変更に合致するよう、ES6 の [Symbol](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (Nightly チャンネルのみ有効) を更新しました ([Firefox バグ 1042602](https://bugzil.la/1042602)):
  - symbol を数値に変換しようとしたときに、[`TypeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypeError) が発生するようになりました。
  - 寛容な等価性を使用するとき、`Object(sym) == sym` は `true` を返すようになりました。

- 実験的な実装であった {{jsxref("TypedArray.prototype.move()")}} メソッド (以前の Nightly および Aurora チャンネルでのみ有効) を、ES6 標準の {{jsxref("TypedArray.prototype.copyWithin()")}} メソッドの実装で置き換えました ([Firefox バグ 1021379](https://bugzil.la/1021379))。
- [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で、ES6 の仕様に応じて[オブジェクトリテラルでの重複したプロパティ名](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#重複したプロパティ名)に対して `SyntaxError` が発生しないようになりました ([Firefox バグ 1041128](https://bugzil.la/1041128))。
- 正規表現において (`String.replace` を含む)、量指定子が妨げたために捕獲式集合が調査されなかったときのマッチ文字列が、空文字列から `undefined` に変わりました ([Firefox バグ 369778](https://bugzil.la/369778) および[サンプルコード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#firefox_固有の注意事項)を参照)。ウェブ互換性のため、RegExp.$N は引き続き空文字列を返します ([Firefox バグ 1053944](https://bugzil.la/1053944))。
- [構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)で、ES6 の [Spread Operator](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)をサポートしました ([Firefox バグ 933276](https://bugzil.la/933276))。
- [構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)で、配列のような手順に代わりイテレーターの手順を使用するようになりました ([Firefox バグ 933276](https://bugzil.la/933276))。
- {{jsxref("Proxy.revocable()")}} を実装しました ([Firefox バグ 978279](https://bugzil.la/978279))。

### インターフェイス/API/DOM

- {{domxref("Element.matches()")}} メソッドを追加しました。このメソッドの機能は、非標準の `mozMatchesSelector()` と同じです ([Firefox バグ 886308](https://bugzil.la/886308))。
- {{domxref("Performance.now()")}} メソッドを Web workers で使用可能になりました ([Firefox バグ 908390](https://bugzil.la/908390))。
- 非標準の `MozNamedAttrMap` インターフェイスを標準の {{domxref("NamedNodeMap")}} に改名しました。また、{{domxref("Element.attributes")}} はこれを使用するように改造しました ([Firefox バグ 1055467](https://bugzil.la/1055467))。
- {{domxref("Path2D.addPath()")}} メソッドを追加しました ([Firefox バグ 985801](https://bugzil.la/985801))。
- 非標準の [Device Storage API](/ja/docs/Web/API/Device_Storage_API) を、Android にインストールされた特権アプリ向けにも有効化しました ([Firefox バグ 886627](https://bugzil.la/886627))。
- Web Crypto API をデフォルトで有効にしました ([Firefox バグ 1074001](https://bugzil.la/1074001))。
- {{domxref("MediaStreamTrack.stop()")}} メソッドを追加しました ([Firefox バグ 1057955](https://bugzil.la/1057955))。
- EME の実験的な実装を続けています。{{domxref("MediaKeySession.getUsableKeyIds()")}} メソッドを追加しました ([Firefox バグ 1057171](https://bugzil.la/1057171))。
- [WebRTC](/ja/docs/Web/API/WebRTC_API) に関する変更点:
  - {{domxref("RTCPeerConnection")}} とともに動作する、{{domxref("RTPSender")}} および {{domxref("RTPReceiver")}} を試験的に実装しました ([Firefox バグ 1032835](https://bugzil.la/1032835))。
  - {{domxref("Navigation.getUserMedia()")}} に、アプリケーションウィンドウの共有機能を追加しました ([Firefox バグ 1036653](https://bugzil.la/1036653))。また、{{domxref("MediaTrackConstraintSet")}} で `browserWindow` および `scrollWithPage` をサポートしました。これは、タブ選択ダイアログを表示せずに共有しなければならないウィンドウの、タブを選択可能にします ([Firefox バグ 1041700](https://bugzil.la/1041700))。
  - MediaSourceEnum で制限を定義するために使用する値として、`"browser"` をサポートしました ([Firefox バグ 1041493](https://bugzil.la/1041493))。

- Web Components で、イベントのリターゲティングを実装しました ([Firefox バグ 887541](https://bugzil.la/887541))。
- {{domxref("Headers")}} インターフェイスを実装しました ([Firefox バグ 1029620](https://bugzil.la/1029620))。設定項目 `dom.fetch.enabled` で制御されており、初期値は `false` です。
- Web Animations の実験的な実装について、{{domxref("AnimationEffect")}} インターフェイスを実装しました。{{domxref("AnimationEffect.name")}} プロパティを持ちます ([Firefox バグ 1045993](https://bugzil.la/1045993))。Web Animations は既定で無効であり、設定項目 `dom.animations-api.core.enabled` で制御しています。
- CSSOM View のスムーズスクロールメソッドを追加しました: {{domxref("Window.scroll()")}}、{{domxref("Window.scrollTo()")}}、{{domxref("Window.scrollBy()")}} ([Firefox バグ 1022818](https://bugzil.la/1022818))。
- 非標準の `MozSmsSegmentInfo` は、グローバルオブジェクトで不可視になりました ([Firefox バグ 916607](https://bugzil.la/916607))。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## セキュリティとネットワーク

- SSLv3 がデフォルトで無効になりました ([Firefox バグ 1030963](https://bugzil.la/1030963))。

## アドオン開発者と Mozilla 開発者向けの変更点

- localstore.rdf を削除しました ([Firefox バグ 559505](https://bugzil.la/559505))。

### Add-on SDK

#### ハイライト

- 新規 API: [dev/panel](/ja/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/dev_panel) で Firefox の開発ツールを拡張できます。
- [jpm](/ja/docs/Mozilla/Add-ons/SDK/Tools/jpm) のベータ版をリリースしました。
- `require("sdk/self").data.url("my-file")` の別名として、`"./my-file"` を全面的に導入しました。
- [個々のタブにスタイルシートを適用する](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#Attaching_stylesheets)機能を追加しました。

#### 詳細

[Firefox 33 から Firefox 34 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox33...firefox34)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

[Firefox 33 から Firefox 34 の間に解決したバグ](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

## 関連情報

- [Firefox 34 リリースノート](http://www.mozilla.jp/firefox/34.0/releasenotes/)
- [Firefox 34 アドオン互換性情報](https://dev.mozilla.jp/2014/11/firefox-34-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers('33')}}
