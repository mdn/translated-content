---
title: Firefox 35 for developers
slug: Mozilla/Firefox/Releases/35
tags:
  - Firefox
  - Guide
  - Mozilla
translation_of: Mozilla/Firefox/Releases/35
---
Gecko 35 を搭載した Firefox 35 は、米国時間 2015 年 1 月 13 日にリリースされました。このページでは、開発者に影響する Firefox 35 の変更点をまとめています。

## Web 開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [インスペクタで ::before および ::after 疑似要素を確認できるようになりました](/ja/docs/Tools/Page_Inspector#.3A.3Abefore_and_.3A.3Aafter)。
- [CSS ソースマップがデフォルトで有効になりました](/ja/docs/Tools/Style_Editor#Source_map_support)。
- [インスペクタから "DOM プロパティの表示" が可能になりました](/ja/docs/Tools/Page_Inspector#Element_popup_menu_2)。

[Firefox 34 から Firefox 35 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176)

### CSS

- [`mask-type`](/ja/docs/Web/CSS/mask-type "この項目についての文書はまだ書かれていません。書いてみませんか？") プロパティをデフォルトで有効にしました ([バグ 1058519](https://bugzilla.mozilla.org/show_bug.cgi?id=1058519 "FIXED: Ship mask-type CSS property"))。
- [`filter`](/ja/docs/Web/CSS/filter "CSS の filter プロパティは、ぼかしや色変化などのグラフィック効果を要素に適用します。フィルターは画像、背景、境界の描画を調整するためによく使われます。") プロパティをデフォルトで有効にしました ([バグ 1057180](https://bugzilla.mozilla.org/show_bug.cgi?id=1057180 "FIXED: Turn on CSS Filters by default (by enabling about:config pref)"))。
- [`@font-face`](/ja/docs/Web/CSS/@font-face "CSS の @font-face @-規則は、テキストを表示するための独自フォントを指定します。フォントはリモートサーバーまたはユーザー自身のコンピューターのどちらかから読み込むことができます。") @ 規則で WOFF2 フォントをサポートしました ([バグ 1064737](https://bugzilla.mozilla.org/show_bug.cgi?id=1064737 "FIXED: support WOFF2 fonts via @font-face"))。
- [`symbols()`](</ja/docs/Web/CSS/symbols()> "この項目についての文書はまだ書かれていません。書いてみませんか？") 関数記法をサポートしました ([バグ 966168](https://bugzilla.mozilla.org/show_bug.cgi?id=966168 "FIXED: Implement symbols() CSS function"))。
- CSS Font Loading API を実装しました ([バグ 1028497](https://bugzilla.mozilla.org/show_bug.cgi?id=1028497 "FIXED: implement the CSS Font Loading API"))。
- コンボボックスで [`-moz-appearance`](/ja/docs/Web/CSS/-moz-appearance "この項目についての文書はまだ書かれていません。書いてみませんか？") に値 `none` を指定すると、ドロップダウンボタンを表示しないようになりました ([バグ 649849](https://bugzilla.mozilla.org/show_bug.cgi?id=649849 "FIXED: Make -moz-appearance:none on a combobox remove the dropdown button"))。
- 他ブラウザに合致させるため、プロパティへのアクセス手段である `element.style["css-property-name"]` を追加しました ([バグ 958887](https://bugzilla.mozilla.org/show_bug.cgi?id=958887 'FIXED: Add support for element.style["css-property-name"] non-standard extension'))。

### HTML

- [`<body>`](/ja/docs/Web/HTML/Element/body "HTML の <body> 要素は、HTML 文書のコンテンツを示す要素です。<body> 要素は文書中に一つだけ配置できます。")要素において廃止済みであり仕様に適合しない `bottommargin`、`leftmargin`、`rightmargin`、`topmargin` の各属性を Quirks モード以外でも有効にしました ([バグ 95530](https://bugzilla.mozilla.org/show_bug.cgi?id=95530 "FIXED: topmargin and leftmargin attributes on the BODY element should be honored in all modes (not just Quirks mode)"))。

### JavaScript

- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) 宣言の "[temporal dead zone](/ja/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)" を実装しました。ES6 の `let` のセマンティクスに合わせて、以下の状況ではエラーが発生します。[ニュースグループでの発表](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds)や [バグ 1001090](https://bugzilla.mozilla.org/show_bug.cgi?id=1001090 'FIXED: Implement ES6 "temporal dead zone" for let') もご覧ください。

  - 関数ボディの同一スコープ内で、`let` を使用して既存の変数や引数を再度宣言すると構文エラーになります。
  - 関数ボディで `let` を使用して宣言した変数を、その宣言に到達して評価される前に使用すると、実行時エラーが発生します。

- 最近の仕様の変更に合致するよう、ES6 の [`Symbols`](/ja/docs/Web/JavaScript/Reference/Symbols "この項目についての文書はまだ書かれていません。書いてみませんか？") (Nightly チャンネルのみ有効) を更新しました ([バグ 1042602](https://bugzilla.mozilla.org/show_bug.cgi?id=1042602 "FIXED: Symbol behavior changes in ES6 draft rev 26")):

  - `String(Symbol("1"))` で [`TypeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError オブジェクトは、値が期待される型でない場合のエラーを表します。") が発生しないようになりました。代わりに文字列 (`"Symbol(1)"`) が返ります ([バグ 1058396](https://bugzilla.mozilla.org/show_bug.cgi?id=1058396 "FIXED: String(aSymbol) now returns the symbol’s description in ES6 draft rev 27"))。

- [_TypedArray_ のさまざまなコンストラクタ](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)が `[[Prototype]]` として、ES6 で `%TypedArray%` と示されている単一の関数を持つようになりました (しかし、他には直接公開されません)。各 Typed Array のプロトタイプは、`%TypedArray%.prototype` から継承します。(`%TypedArray%` および `%TypedArray%.prototype` は、それぞれ [`Function.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) および [`Object.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype) から継承しますので、Typed Array のコンストラクタやインスタンスはこれらのオブジェクトに存在するプロパティを持ちます) Typed Array 関数のプロパティは `%TypedArray%.prototype` 上に存在して、Typed Array で動作するようになります。詳しくは [_TypedArray_](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Description) や [バグ 896116](https://bugzilla.mozilla.org/show_bug.cgi?id=896116 "FIXED: Implement ES6 %TypedArray% superclass that all ArrayBufferViews inherit from") をご覧ください。
- ES6 の、[オブジェクトリテラルを使用して行うプロトタイプミューテーション](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#Prototype_mutation)を実装しました ([バグ 1061853](https://bugzilla.mozilla.org/show_bug.cgi?id=1061853 "FIXED: Implement ES6 object-literal __proto__ restrictions/semantics"))。

  - オブジェクトリテラル構文内では、`__proto__:value` として指定するメンバーが 1 つだけであれば `[[Prototype]]` のミューテーションを行うようになりました。
  - `__proto__() {}` のようなメソッドメンバーは、`[[Prototype]]` をオーバーライトしないようになりました。

### インターフェイス/API/DOM

- [`NavigatorLanguage`](/ja/docs/Web/API/NavigatorLanguage "NavigatorLanguage contains methods and properties related to the language of the navigator.") インターフェイスが、[`WorkerNavigator`](/ja/docs/Web/API/WorkerNavigator "この項目についての文書はまだ書かれていません。書いてみませんか？") によって Workers から使用可能になりました ([バグ 925849](https://bugzilla.mozilla.org/show_bug.cgi?id=925849 "FIXED: WorkerNavigator does not implement NavigatorLanguage"))。
- [`Element.closest()`](/ja/docs/Web/API/Element/closest "この項目についての文書はまだ書かれていません。書いてみませんか？") メソッドは、カレント要素にもっとも近い祖先要素を返します ([バグ 1055533](https://bugzilla.mozilla.org/show_bug.cgi?id=1055533 "FIXED: Implement Element.closest()"))。
- [`CanvasRenderingContext2D.filter`](/ja/docs/Web/API/CanvasRenderingContext2D/filter "この項目についての文書はまだ書かれていません。書いてみませんか？") プロパティを実験的にサポートしました。設定項目 `canvas.filters.enabled` で制御されます ([バグ 927892](https://bugzilla.mozilla.org/show_bug.cgi?id=927892 "FIXED: Exposing the CSS/SVG Filters as Canvas APIs"))。
- [`Animation.target`](/ja/docs/Web/API/Animation/target "この項目についての文書はまだ書かれていません。書いてみませんか？") プロパティの実装により、Web Animations の実験的にな実装が進展しました。設定項目 `dom.animations-api.core.enabled` で制御されており、デフォルトで無効化されています ([バグ 1067701](https://bugzilla.mozilla.org/show_bug.cgi?id=1067701 "FIXED: Implement Animation.target"))。
- 仕様書の定めにより、[`hasAttributes()`](/ja/docs/Web/API/Element/hasAttributes "hasAttributes は現在の要素が何らかの属性を持つか否かを示す真偽値を返します。") メソッドを [`Node`](/ja/docs/Web/API/Node "Node はいくつもの DOM API オブジェクトタイプが継承しているインターフェイスで、それらのさまざまなタイプを同じように扱える (同じメソッドのセットを継承する、または同じ方法でテストできる) ようにします。") から [`Element`](/ja/docs/Web/API/Element "Element は Document の中にあるすべての要素が継承する、もっとも一般的な基底クラスです。このインターフェイスは、すべての種類の要素に共通するメソッドとプロパティを記述するだけのものです。多くの具体的なクラスが Element を継承します。") に移しました ([バグ 1055773](https://bugzilla.mozilla.org/show_bug.cgi?id=1055773 "FIXED: Move hasAttributes() to Element"))。
- [`HTMLImageElement`](/ja/docs/Web/API/HTMLImageElement "この項目についての文書はまだ書かれていません。書いてみませんか？")、[`HTMLLinkElement`](/ja/docs/Web/API/HTMLLinkElement "HTMLLinkElement インターフェイスは、外部リソースの参照情報、およびそれらのリソースとドキュメントの関係 (またはその逆) を表します。このオブジェクトは、HTMLElement インターフェイスのすべてのプロパティとメソッドを継承します。")、[`HTMLMediaElement`](/ja/docs/Web/API/HTMLMediaElement "HTMLMediaElement は HTMLElement に音声や動画といったメディア関連機能の属性とメソッドを追加します。HTMLVideoElement と HTMLAudioElement はこのインタフェースを継承しています。")、[`HTMLScriptElement`](/ja/docs/Web/API/HTMLScriptElement "DOMの ScriptオブジェクトはHTMLScriptElement (または HTML 4 HTMLScriptElement)インターフェイスに具現化されます．それは通常のelementオブジェクトインターフェイスに加えて(継承によって利用可能)，<script> 要素のレイアウトおよび表現を扱う特別なプロパティとメソッドを提供します．")、[`SVGScriptElement`](/ja/docs/Web/API/SVGScriptElement "この項目についての文書はまだ書かれていません。書いてみませんか？") の `crossOrigin` 属性は有効な値のみを受け入れるようになりました。`""` は有効ではなく、代わりに `null` を使用します ([バグ 880997](https://bugzilla.mozilla.org/show_bug.cgi?id=880997 "FIXED: Reflect crossOrigin as a limited enumerated attribute"))。
- Resource Timing API をデフォルトで有効にしました ([バグ 1002855](https://bugzilla.mozilla.org/show_bug.cgi?id=1002855 "FIXED: Turn on Resource Timing"))。
- 仕様に合致させるため、[`Selection.containsNode()`](/ja/docs/Web/API/Selection/containsNode "この項目についての文書はまだ書かれていません。書いてみませんか？") の第一引数を `null` にすることはできなくなりました ([バグ 1068058](https://bugzilla.mozilla.org/show_bug.cgi?id=1068058 "FIXED: Update Selection.containsNode according to the spec"))。
- [`ImageCapture`](/ja/docs/Web/API/ImageCapture "この項目についての文書はまだ書かれていません。書いてみませんか？") API を新たに実装しました。[`ImageCapture.takePhoto()`](/ja/docs/Web/API/ImageCapture/takePhoto "この項目についての文書はまだ書かれていません。書いてみませんか？") を使用できます ([バグ 916643](https://bugzilla.mozilla.org/show_bug.cgi?id=916643 "FIXED: ImageCapture - Implement WebIDL and takePhoto()"))。
- HTTP 以外の [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest "XMLHttpRequest (XHR) オブジェクトを使用すると、サーバーと対話することができます。ページ全体を更新する必要なしに、データを受け取ることができます。これでユーザーの作業を中断させることなく、ウェブページの一部を更新することができます。") 要求が成功した場合は (誤りである `0` に代わり) `200` を返すようになりました ([バグ 716491](https://bugzilla.mozilla.org/show_bug.cgi?id=716491 "FIXED: Investigate the status code for non-HTTP XHR."))。
- [`XMLHttpRequest.responseURL`](/ja/docs/Web/API/XMLHttpRequest/responseURL "XMLHttpRequest.responseURL プロパティは読み取り専用で、レスポンスのシリアライズされた URL を返します。 URL が null の場合は、空文字を返します。 URL に存在する URL フラグメントはすべて取り除かれます。 responseURL の値は、任意のリダイレクト後に得られる最後の URL になります。") を最新の仕様に適合させて、URL のフラグメント (`'#xyz'`) は存在しても含めないようになりました ([バグ 1073882](https://bugzilla.mozilla.org/show_bug.cgi?id=1073882 "FIXED: XMLHttpRequest.prototype.responseURL should not have fragment per latest spec"))。
- 内部で使用している非標準の [`File.mozFullPath`](/ja/docs/Web/API/File/mozFullPath "File インターフェイスに対する特権的な拡張として、mozFullPath プロパティには、表現されたファイルの絶対パス名が含まれます。") プロパティは content から参照できなくなりました ([バグ 1048293](https://bugzilla.mozilla.org/show_bug.cgi?id=1048293 "FIXED: File::mozFullPath attribute should not be exposed to content."))。
- [`File`](/ja/docs/Web/API/File "File インターフェイスは、ファイルについての情報を提供したり、ウェブページ内の JavaScript でその内容にアクセスできるようにしたりします。") のコンストラクタを、仕様に準拠するよう拡張しました ([バグ 1047483](https://bugzilla.mozilla.org/show_bug.cgi?id=1047483 "FIXED: Porting DOMFile/DOMBlob to WebIDL"))。
- 自身を生成したものとは別のエンティティによってアボートされることが可能な Promise である、[`AbortablePromise`](/ja/docs/Web/API/AbortablePromise "この項目についての文書はまだ書かれていません。書いてみませんか？") を実験的に実装しました。接頭辞 `Moz` を付加しており、設定項目 `dom.abortablepromise.enabled` (既定値は `false`) で制御されます ([バグ 1035060](https://bugzilla.mozilla.org/show_bug.cgi?id=1035060 "FIXED: Implement AbortablePromise"))。
- 非標準の [`Navigator.mozIsLocallyAvailable`](/ja/docs/Web/API/Navigator/mozIsLocallyAvailable "Navigator.mozIsLocallyAvailable() メソッドは、アドオンが指定されたリソースが両可能かどうかを判断できるようにします。") プロパティを削除しました ([バグ 1066826](https://bugzilla.mozilla.org/show_bug.cgi?id=1066826 "FIXED: Remove Navigator::MozisLocallyAvailable API"))。
- 設定項目 `network.websocket.enabled` (既定値は `true`) を削除しました。今後は [Websocket](/ja/docs/WebSockets) API を無効化できません ([バグ 1091016](https://bugzilla.mozilla.org/show_bug.cgi?id=1091016 "FIXED: Pref network.websocket.enabled is no longer reasonable"))。
- [`Window.crypto`](/ja/docs/Web/API/Window/crypto "Window.crypto 読み取り専用プロパティは、グローバルオブジェクトに関連付けられた Crypto オブジェクトを返します。このオブジェクトは、ウェブページが暗号に関連したサービスにアクセスできるようにします。") の非標準メソッドおよび非標準プロパティを削除しました ([バグ 1030963](https://bugzilla.mozilla.org/show_bug.cgi?id=1030963 "FIXED: remove proprietary window.crypto functions/properties"))。標準の WebCrypto API で定義されているメソッドおよびプロパティのみが残ります。
- WebGL 2.0 の実験的な実装を進めています!

  - [`WebGL2RenderingContext.copyBufferSubData()`](/ja/docs/Web/API/WebGL2RenderingContext/copyBufferSubData "この項目についての文書はまだ書かれていません。書いてみませんか？") メソッドを実装しました ([バグ 1048668](https://bugzilla.mozilla.org/show_bug.cgi?id=1048668 "FIXED: WebGL2 - Implement CopyBufferSubData"))。

### MathML

- 文字が重ねて置かれる場合 (例えば数学のハット記号がついた、ドットがない i) に、OpenType の `dtls` 機能 (デフォルト CSS スタイルシートの [`font-feature-settings`](/ja/docs/Web/CSS/font-feature-settings "CSS の font-feature-settings プロパティは、 OpenType フォントの拡張タイポグラフィの特性を制御します。") による) が MathML 要素へ自動的に適用されるようになりました。

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## ネットワークおよびセキュリティ

- AEAD 暗号化方式を使用する場合に限り、HTTP/2 を実装および有効化しました ([バグ 1027720](https://bugzilla.mozilla.org/show_bug.cgi?id=1027720 "FIXED: Restrict HTTP/2 connections to AEAD ciphers only") および [バグ 1047594](https://bugzilla.mozilla.org/show_bug.cgi?id=1047594 "FIXED: Enable http/2 (and alpn) by default"))。
- HTTP/2 の `alt-svc` ヘッダをサポートしました ([バグ 1003448](https://bugzilla.mozilla.org/show_bug.cgi?id=1003448 "FIXED: http/2 alt-svc support"))。
- HTTP の [Public Key Pinning](/ja/docs/Web/Security/Public_Key_Pinning) 拡張 (HPKP) を実装しました ([バグ 787133](https://bugzilla.mozilla.org/show_bug.cgi?id=787133 "FIXED: Implement Public Key Pinning Extension for HTTP (HPKP)"))。

## アドオン開発者と Mozilla 開発者向けの変更点

### XUL およびアドオン

- [`tabbrowser`](/ja/docs/Mozilla/Tech/XUL/tabbrowser "tabbrowser") のプライベートなメソッドである `_getTabForBrowser()` が非推奨になりました。代わりに、パブリックなメソッドである [`getTabForBrowser`](/ja/docs/Mozilla/Tech/XUL/Method/getTabForBrowser) を新たに追加しました。予想されているとおり、このメソッドは指定した [`browser`](/ja/docs/Mozilla/Tech/XUL/browser "browser") を包含する [`tab`](/ja/docs/Mozilla/Tech/XUL/tab "tab") 要素を返します。
- [`Performance.now()`](/ja/docs/Web/API/Performance/now "performance.now() メソッドは、ミリ秒単位で計測された DOMHighResTimeStamp を返します。") と対等である `Components.utils.now()` を、window 以外の chrome コード向けに実装しました ([バグ 969490](https://bugzilla.mozilla.org/show_bug.cgi?id=969490 "FIXED: Implement Components.utils.now() to match Performance.now() for non-window chrome code"))。

### Add-on SDK

#### ハイライト

- [コンテキストメニューのアクセスキー](/ja/docs/Mozilla/Add-ons/SDK/Tutorials/Add_a_Context_Menu_Item#Adding_an_access_key)を追加できます。
- [`BrowserWindow`](/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#BrowserWindow) から `isPrivateBrowsing` を削除しました。

#### 詳細

[Firefox 34 から Firefox 35 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox34...firefox35)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

[Firefox 34 から Firefox 35 の間に解決したバグ](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

## 関連情報

- [Firefox 35 リリースノート](http://www.mozilla.jp/firefox/35.0/releasenotes/)
- [Firefox 35 アドオン互換性情報](https://dev.mozilla.jp/2014/12/firefox-35-addon-compatibility/)

## 過去のバージョン

- [Firefox 34 for developers](/ja/docs/Mozilla/Firefox/Releases/34)
- [Firefox 33 for developers](/ja/docs/Mozilla/Firefox/Releases/33)
- [Firefox 32 for developers](/ja/docs/Mozilla/Firefox/Releases/32)
- [Firefox 31 for developers](/ja/docs/Mozilla/Firefox/Releases/31)
- [Firefox 30 for developers](/ja/docs/Mozilla/Firefox/Releases/30)
- [Firefox 29 for developers](/ja/docs/Mozilla/Firefox/Releases/29)
- [Firefox 28 for developers](/ja/docs/Mozilla/Firefox/Releases/28)
- [Firefox 27 for developers](/ja/docs/Mozilla/Firefox/Releases/27)
- [Firefox 26 for developers](/ja/docs/Mozilla/Firefox/Releases/26)
- [Firefox 25 for developers](/ja/docs/Mozilla/Firefox/Releases/25)
- [Firefox 24 for developers](/ja/docs/Mozilla/Firefox/Releases/24)
- [Firefox 23 for developers](/ja/docs/Mozilla/Firefox/Releases/23)
- [Firefox 22 for developers](/ja/docs/Mozilla/Firefox/Releases/22)
- [Firefox 21 for developers](/ja/docs/Mozilla/Firefox/Releases/21)
- [Firefox 20 for developers](/ja/docs/Mozilla/Firefox/Releases/20)
- [Firefox 19 for developers](/ja/docs/Mozilla/Firefox/Releases/19)
- [Firefox 18 for developers](/ja/docs/Mozilla/Firefox/Releases/18)
- [Firefox 17 for developers](/ja/docs/Mozilla/Firefox/Releases/17)
- [Firefox 16 for developers](/ja/docs/Mozilla/Firefox/Releases/16)
- [Firefox 15 for developers](/ja/docs/Mozilla/Firefox/Releases/15)
- [Firefox 14 for developers](/ja/docs/Mozilla/Firefox/Releases/14)
- [Firefox 13 for developers](/ja/docs/Mozilla/Firefox/Releases/13)
- [Firefox 12 for developers](/ja/docs/Mozilla/Firefox/Releases/12)
- [Firefox 11 for developers](/ja/docs/Mozilla/Firefox/Releases/11)
- [Firefox 10 for developers](/ja/docs/Mozilla/Firefox/Releases/10)
- [Firefox 9 for developers](/ja/docs/Mozilla/Firefox/Releases/9)
- [Firefox 8 for developers](/ja/docs/Mozilla/Firefox/Releases/8)
- [Firefox 7 for developers](/ja/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 for developers](/ja/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 for developers](/ja/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/ja/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/ja/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/ja/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/ja/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/ja/docs/Mozilla/Firefox/Releases/1.5)
