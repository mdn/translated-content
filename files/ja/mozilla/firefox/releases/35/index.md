---
title: Firefox 35 for developers
slug: Mozilla/Firefox/Releases/35
---

Gecko 35 を搭載した Firefox 35 は、米国時間 2015 年 1 月 13 日にリリースされました。このページでは、開発者に影響する Firefox 35 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [インスペクターで ::before および ::after 擬似要素を確認できるようになりました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#.3a.3abefore_and_.3a.3aafter)。
- [CSS ソースマップがデフォルトで有効になりました](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#source_map_support)。
- [インスペクターから "DOM プロパティの表示" が可能になりました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element_popup_menu_2)。

[Firefox 34 から Firefox 35 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176)

### CSS

- [`mask-type`](/ja/docs/Web/CSS/Reference/Properties/mask-type) プロパティをデフォルトで有効にしました ([バグ 1058519](https://bugzilla.mozilla.org/show_bug.cgi?id=1058519))。
- [`filter`](/ja/docs/Web/CSS/Reference/Properties/filter) プロパティをデフォルトで有効にしました ([バグ 1057180](https://bugzilla.mozilla.org/show_bug.cgi?id=1057180))。
- [`@font-face`](/ja/docs/Web/CSS/Reference/At-rules/@font-face) @ 規則で WOFF2 フォントをサポートしました ([バグ 1064737](https://bugzilla.mozilla.org/show_bug.cgi?id=1064737))。
- [`symbols()`](/ja/docs/Web/CSS/Reference/Values/symbols "この項目についての文書はまだ書かれていません。書いてみませんか？") 関数記法をサポートしました ([バグ 966168](https://bugzilla.mozilla.org/show_bug.cgi?id=966168))。
- CSS Font Loading API を実装しました ([バグ 1028497](https://bugzilla.mozilla.org/show_bug.cgi?id=1028497))。
- コンボボックスで [`-moz-appearance`](/ja/docs/Web/CSS/Reference/Properties/appearance) に値 `none` を指定すると、ドロップダウンボタンを表示しないようになりました ([バグ 649849](https://bugzilla.mozilla.org/show_bug.cgi?id=649849))。
- 他ブラウザーに合致させるため、プロパティへのアクセス手段である `element.style["css-property-name"]` を追加しました ([バグ 958887](https://bugzilla.mozilla.org/show_bug.cgi?id=958887 'FIXED: Add support for element.style["css-property-name"] non-standard extension'))。

### HTML

- [`<body>`](/ja/docs/Web/HTML/Reference/Elements/body)要素において廃止済みであり仕様に適合しない `bottommargin`、`leftmargin`、`rightmargin`、`topmargin` の各属性を Quirks モード以外でも有効にしました ([バグ 95530](https://bugzilla.mozilla.org/show_bug.cgi?id=95530))。

### JavaScript

- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) 宣言の「[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)」を実装しました。ES6 の `let` のセマンティクスに合わせて、以下の状況ではエラーが発生します。[ニュースグループでの発表](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds)や [バグ 1001090](https://bugzilla.mozilla.org/show_bug.cgi?id=1001090 'FIXED: Implement ES6 "temporal dead zone" for let') もご覧ください。
  - 関数ボディの同一スコープ内で、`let` を使用して既存の変数や引数を再度宣言すると構文エラーになります。
  - 関数ボディで `let` を使用して宣言した変数を、その宣言に到達して評価される前に使用すると、実行時エラーが発生します。

- 最近の仕様の変更に合致するよう、ES6 の [`Symbols`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (Nightly チャンネルのみ有効) を更新しました ([バグ 1042602](https://bugzilla.mozilla.org/show_bug.cgi?id=1042602)):
  - `String(Symbol("1"))` で [`TypeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypeError) が発生しないようになりました。代わりに文字列 (`"Symbol(1)"`) が返ります ([バグ 1058396](https://bugzilla.mozilla.org/show_bug.cgi?id=1058396))。

- [_TypedArray_ のさまざまなコンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)が `[[Prototype]]` として、ES6 で `%TypedArray%` と示されている単一の関数を持つようになりました (しかし、他には直接公開されません)。各 Typed Array のプロトタイプは、`%TypedArray%.prototype` から継承します。(`%TypedArray%` および `%TypedArray%.prototype` は、それぞれ [`Function.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) および [`Object.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object) から継承しますので、Typed Array のコンストラクターやインスタンスはこれらのオブジェクトに存在するプロパティを持ちます) Typed Array 関数のプロパティは `%TypedArray%.prototype` 上に存在して、Typed Array で動作するようになります。詳しくは [_TypedArray_](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#description) や [バグ 896116](https://bugzilla.mozilla.org/show_bug.cgi?id=896116) をご覧ください。
- ES6 の、[オブジェクトリテラルを使用して行うプロトタイプミューテーション](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_mutation)を実装しました ([バグ 1061853](https://bugzilla.mozilla.org/show_bug.cgi?id=1061853))。
  - オブジェクトリテラル構文内では、`__proto__:value` として指定するメンバーが 1 つだけであれば `[[Prototype]]` のミューテーションを行うようになりました。
  - `__proto__() {}` のようなメソッドメンバーは、`[[Prototype]]` をオーバーライトしないようになりました。

### インターフェイス/API/DOM

- [`NavigatorLanguage`](/ja/docs/Web/API/Navigator) インターフェイスが、[`WorkerNavigator`](/ja/docs/Web/API/WorkerNavigator) によって Workers から使用可能になりました ([バグ 925849](https://bugzilla.mozilla.org/show_bug.cgi?id=925849))。
- [`Element.closest()`](/ja/docs/Web/API/Element/closest) メソッドは、カレント要素にもっとも近い祖先要素を返します ([バグ 1055533](https://bugzilla.mozilla.org/show_bug.cgi?id=1055533))。
- [`CanvasRenderingContext2D.filter`](/ja/docs/Web/API/CanvasRenderingContext2D/filter) プロパティを実験的にサポートしました。設定項目 `canvas.filters.enabled` で制御されます ([バグ 927892](https://bugzilla.mozilla.org/show_bug.cgi?id=927892))。
- [`Animation.target`](/ja/docs/Web/API/Animation/target) プロパティの実装により、Web Animations の実験的にな実装が進展しました。設定項目 `dom.animations-api.core.enabled` で制御されており、デフォルトで無効化されています ([バグ 1067701](https://bugzilla.mozilla.org/show_bug.cgi?id=1067701))。
- 仕様書の定めにより、[`hasAttributes()`](/ja/docs/Web/API/Element/hasAttributes) メソッドを [`Node`](/ja/docs/Web/API/Node) から [`Element`](/ja/docs/Web/API/Element) に移しました ([バグ 1055773](https://bugzilla.mozilla.org/show_bug.cgi?id=1055773))。
- [`HTMLImageElement`](/ja/docs/Web/API/HTMLImageElement)、[`HTMLLinkElement`](/ja/docs/Web/API/HTMLLinkElement)、[`HTMLMediaElement`](/ja/docs/Web/API/HTMLMediaElement)、[`HTMLScriptElement`](/ja/docs/Web/API/HTMLScriptElement)、[`SVGScriptElement`](/ja/docs/Web/API/SVGScriptElement) の `crossOrigin` 属性は有効な値のみを受け入れるようになりました。`""` は有効ではなく、代わりに `null` を使用します ([バグ 880997](https://bugzilla.mozilla.org/show_bug.cgi?id=880997))。
- Resource Timing API をデフォルトで有効にしました ([バグ 1002855](https://bugzilla.mozilla.org/show_bug.cgi?id=1002855))。
- 仕様に合致させるため、[`Selection.containsNode()`](/ja/docs/Web/API/Selection/containsNode) の第一引数を `null` にすることはできなくなりました ([バグ 1068058](https://bugzilla.mozilla.org/show_bug.cgi?id=1068058))。
- [`ImageCapture`](/ja/docs/Web/API/ImageCapture) API を新たに実装しました。[`ImageCapture.takePhoto()`](/ja/docs/Web/API/ImageCapture/takePhoto) を使用できます ([バグ 916643](https://bugzilla.mozilla.org/show_bug.cgi?id=916643))。
- HTTP 以外の [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) 要求が成功した場合は (誤りである `0` に代わり) `200` を返すようになりました ([バグ 716491](https://bugzilla.mozilla.org/show_bug.cgi?id=716491))。
- [`XMLHttpRequest.responseURL`](/ja/docs/Web/API/XMLHttpRequest/responseURL) を最新の仕様に適合させて、URL のフラグメント (`'#xyz'`) は存在しても含めないようになりました ([バグ 1073882](https://bugzilla.mozilla.org/show_bug.cgi?id=1073882))。
- 内部で使用している非標準の [`File.mozFullPath`](/ja/docs/Web/API/File/mozFullPath) プロパティは content から参照できなくなりました ([バグ 1048293](https://bugzilla.mozilla.org/show_bug.cgi?id=1048293))。
- [`File`](/ja/docs/Web/API/File) のコンストラクターを、仕様に準拠するよう拡張しました ([バグ 1047483](https://bugzilla.mozilla.org/show_bug.cgi?id=1047483))。
- 自身を生成したものとは別のエンティティによってアボートされることが可能な Promise である、[`AbortablePromise`](/ja/docs/Web/API/AbortablePromise) を実験的に実装しました。接頭辞 `Moz` を付加しており、設定項目 `dom.abortablepromise.enabled` (既定値は `false`) で制御されます ([バグ 1035060](https://bugzilla.mozilla.org/show_bug.cgi?id=1035060))。
- 非標準の [`Navigator.mozIsLocallyAvailable`](/ja/docs/Web/API/Navigator) プロパティを削除しました ([バグ 1066826](https://bugzilla.mozilla.org/show_bug.cgi?id=1066826))。
- 設定項目 `network.websocket.enabled` (既定値は `true`) を削除しました。今後は [Websocket](/ja/docs/Web/API/WebSockets_API) API を無効化できません ([バグ 1091016](https://bugzilla.mozilla.org/show_bug.cgi?id=1091016))。
- [`Window.crypto`](/ja/docs/Web/API/Window/crypto) の非標準メソッドおよび非標準プロパティを削除しました ([バグ 1030963](https://bugzilla.mozilla.org/show_bug.cgi?id=1030963))。標準の WebCrypto API で定義されているメソッドおよびプロパティのみが残ります。
- WebGL 2.0 の実験的な実装を進めています!
  - [`WebGL2RenderingContext.copyBufferSubData()`](/ja/docs/Web/API/WebGL2RenderingContext/copyBufferSubData) メソッドを実装しました ([バグ 1048668](https://bugzilla.mozilla.org/show_bug.cgi?id=1048668))。

### MathML

- 文字が重ねて置かれる場合 (例えば数学のハット記号がついた、ドットがない i) に、OpenType の `dtls` 機能 (デフォルト CSS スタイルシートの [`font-feature-settings`](/ja/docs/Web/CSS/Reference/Properties/font-feature-settings) による) が MathML 要素へ自動的に適用されるようになりました。

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## ネットワークおよびセキュリティ

- AEAD 暗号化方式を使用する場合に限り、HTTP/2 を実装および有効化しました ([バグ 1027720](https://bugzilla.mozilla.org/show_bug.cgi?id=1027720) および [バグ 1047594](https://bugzilla.mozilla.org/show_bug.cgi?id=1047594))。
- HTTP/2 の `alt-svc` ヘッダーをサポートしました ([バグ 1003448](https://bugzilla.mozilla.org/show_bug.cgi?id=1003448))。
- HTTP の [Public Key Pinning](/ja/docs/conflicting/Web/Security/Certificate_Transparency) 拡張 (HPKP) を実装しました ([バグ 787133](https://bugzilla.mozilla.org/show_bug.cgi?id=787133))。

## アドオン開発者と Mozilla 開発者向けの変更点

### XUL およびアドオン

- [`tabbrowser`](/ja/docs/Mozilla/Tech/XUL/tabbrowser) のプライベートなメソッドである `_getTabForBrowser()` が非推奨になりました。代わりに、パブリックなメソッドである [`getTabForBrowser`](/ja/docs/Mozilla/Tech/XUL/Method/getTabForBrowser) を新たに追加しました。予想されているとおり、このメソッドは指定した [`browser`](/ja/docs/Mozilla/Tech/XUL/browser) を包含する [`tab`](/ja/docs/Mozilla/Tech/XUL/tab) 要素を返します。
- [`Performance.now()`](/ja/docs/Web/API/Performance/now) と対等である `Components.utils.now()` を、window 以外の chrome コード向けに実装しました ([バグ 969490](https://bugzilla.mozilla.org/show_bug.cgi?id=969490))。

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
