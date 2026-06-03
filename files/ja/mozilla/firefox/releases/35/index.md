---
title: Firefox 35 開発者向けリリースノート
short-title: Firefox 35
slug: Mozilla/Firefox/Releases/35
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 35 は、米国時間 2015 年 1 月 13 日にリリースされました。この記事では、ウェブ開発者だけでなく、Firefox および Gecko の開発者、アドオン開発者にも有益な主な変更点を掲載しています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [ページインスペクターで ::before および ::after 擬似要素を確認できるようになりました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#.3a.3abefore-and-.3a.3aafter)。
- [CSS ソースマップがデフォルトで有効になりました](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#source-map-support)。
- [インスペクターから "DOM プロパティの表示" が可能になりました](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Firefox 34 から Firefox 35 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176)

### CSS

- {{cssxref("mask-type")}} プロパティをデフォルトで有効にしました ([バグ 1058519](https://bugzil.la/1058519))。
- {{cssxref("filter")}} プロパティをデフォルトで有効にしました ([バグ 1057180](https://bugzil.la/1057180))。
- {{cssxref("@font-face")}} アットルールで WOFF2 フォントに対応しました ([バグ 1064737](https://bugzil.la/1064737))。
- {{cssxref("symbols", "symbols()")}} 関数記法に対応しました ([バグ 966168](https://bugzil.la/966168))。
- CSS Font Loading API を実装しました ([バグ 1028497](https://bugzil.la/1028497))。
- コンボボックスで `-moz-appearance` に値 `none` を指定すると、ドロップダウンボタンを表示しないようになりました ([バグ 649849](https://bugzil.la/649849))。
- 他ブラウザーに合致させるため、プロパティへのアクセス手段である `element.style["css-property-name"]` を追加しました ([バグ 958887](https://bugzil.la/958887))。

### HTML

- {{HTMLElement("body")}} 要素において廃止済みであり仕様に適合しない `bottommargin`、`leftmargin`、`rightmargin`、`topmargin` の各属性を後方互換モード以外でも有効にしました ([バグ 95530](https://bugzil.la/95530))。

### JavaScript

- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) 宣言の「[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)」を実装しました。ES2015 の `let` のセマンティクスに合わせて、以下の状況ではエラーが発生します。[ニュースグループでの発表](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds)や [バグ 1001090](https://bugzil.la/1001090) もご覧ください。
  - 関数本体の同一スコープ内で、`let` を使用して既存の変数や引数を再度宣言すると構文エラーになります。
  - 関数本体で `let` を使用して宣言した変数を、その宣言に到達して評価される前に使用すると、実行時エラーが発生します。

- 最近の仕様の変更に合致するよう、ES2015 の [`Symbols`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (Nightly チャンネルのみ有効) を更新しました ([バグ 1042602](https://bugzil.la/1042602)):
  - `String(Symbol("1"))` で [`TypeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypeError) が発生しないようになりました。代わりに文字列 (`"Symbol(1)"`) が返ります ([バグ 1058396](https://bugzil.la/1058396))。

- [_TypedArray_ のさまざまなコンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)が `[[Prototype]]` として、ES2015 で `%TypedArray%` と示されている単一の関数を持つようになりました (しかし、他には直接公開されません)。それぞれの型付き配列のプロトタイプは、`%TypedArray%.prototype` から継承します。(`%TypedArray%` および `%TypedArray%.prototype` は、それぞれ [`Function.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) および [`Object.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object) から継承しますので、型付き配列のコンストラクターやインスタンスはこれらのオブジェクトに存在するプロパティを持ちます) 型付き配列関数のプロパティは `%TypedArray%.prototype` 上に存在して、型付き配列で動作するようになります。詳しくは [_TypedArray_](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#description) や [バグ 896116](https://bugzil.la/896116) をご覧ください。
- ES2015 の、[オブジェクトリテラルを使用して行うプロトタイプ変更](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)を実装しました ([バグ 1061853](https://bugzil.la/1061853))。
  - オブジェクトリテラル構文内では、`__proto__:value` として指定するメンバーが 1 つだけであれば `[[Prototype]]` の変更を行うようになりました。
  - `__proto__() {}` のようなメソッドメンバーは、`[[Prototype]]` をオーバーライトしないようになりました。

### インターフェイス/API/DOM

- {{domxref("WorkerNavigator.language", "navigator.language")}} と {{domxref("WorkerNavigator.languages", "navigator.languages")}} がワーカーでも {{domxref("WorkerNavigator")}} で利用可能になりました ([バグ 925849](https://bugzil.la/925849))。
- {{domxref("Element.closest()")}} メソッドは、現在の要素にもっとも近い祖先要素を返します ([バグ 1055533](https://bugzil.la/1055533))。
- {{domxref("CanvasRenderingContext2D.filter")}} プロパティを実験的にサポートしました。設定項目 `canvas.filters.enabled` で制御されます ([バグ 927892](https://bugzil.la/927892))。
- `Animation.target` プロパティの実装により、ウェブアニメーションの実験的な実装が進展しました。設定項目 `dom.animations-api.core.enabled` で制御されており、デフォルトで無効化されています ([バグ 1067701](https://bugzil.la/1067701))。
- 仕様書の定めにより、{{domxref("Element.hasAttributes", "hasAttributes()")}} メソッドを {{domxref("Node")}} から {{domxref("Element")}} へ移しました ([バグ 1055773](https://bugzil.la/1055773))。
- {{domxref("HTMLImageElement")}}、{{domxref("HTMLLinkElement")}}、{{domxref("HTMLMediaElement")}}、{{domxref("HTMLScriptElement")}}、{{domxref("SVGScriptElement")}} の `crossOrigin` 属性は有効な値のみを受け入れるようになりました。`""` は有効ではなく、代わりに `null` を使用する必要があります ([バグ 880997](https://bugzil.la/880997))。
- リソースタイミング API をデフォルトで有効にしました ([バグ 1002855](https://bugzil.la/1002855))。
- 仕様に合致させるため、{{domxref("Selection.containsNode()")}} の第一引数を `null` にすることはできなくなりました ([バグ 1068058](https://bugzil.la/1068058))。
- {{domxref("ImageCapture")}} API を新たに実装しました。{{domxref("ImageCapture.takePhoto()")}} を使用できます ([バグ 916643](https://bugzil.la/916643))。
- HTTP 以外の {{domxref("XMLHttpRequest")}} リクエストが成功した場合は (誤りである `0` に代わり) `200` を返すようになりました ([バグ 716491](https://bugzil.la/716491))。
- {{domxref("XMLHttpRequest.responseURL")}} を最新の仕様に適合させて、URL のフラグメント (`'#xyz'`) は存在しても含めないようになりました ([バグ 1073882](https://bugzil.la/1073882))。
- 内部で使用している標準外の `File.mozFullPath` プロパティはコンテンツから参照できなくなりました ([バグ 1048293](https://bugzil.la/1048293))。
- {{domxref("File")}} のコンストラクターを、仕様に準拠するよう拡張しました ([バグ 1047483](https://bugzil.la/1047483))。
- 自身を生成したものとは別のエンティティによってアボートされることが可能な Promise である、`AbortablePromise` を実験的に実装しました。接頭辞 `Moz` を付加しており、設定項目 `dom.abortablepromise.enabled` (デフォルト値は `false`) で制御されます ([バグ 1035060](https://bugzil.la/1035060))。
- 標準外の `Navigator.mozIsLocallyAvailable` プロパティを削除しました ([バグ 1066826](https://bugzil.la/1066826))。
- 設定項目 `network.websocket.enabled` (デフォルト値は `true`) を削除しました。今後は [WebSocket](/ja/docs/Web/API/WebSockets_API) API を無効化できません ([バグ 1091016](https://bugzil.la/1091016))。
- {{domxref("Crypto")}} の標準外メソッドおよび標準外プロパティを削除しました ([バグ 1030963](https://bugzil.la/1030963))。標準の WebCrypto API で定義されているメソッドおよびプロパティのみが残ります。
- WebGL 2.0 の実験的な実装を進めています!
  - {{domxref("WebGL2RenderingContext.copyBufferSubData()")}} メソッドを実装しました ([バグ 1048668](https://bugzil.la/1048668))。

### MathML

- 文字が重ねて置かれる場合 (例えば数学のハット記号がついた、ドットがない i) に、OpenType の `dtls` 機能 (デフォルト CSS スタイルシートの {{cssxref("font-feature-settings")}} による) が MathML 要素へ自動的に適用されるようになりました。

### SVG

_変更なし。_

### Audio/Video

_変更なし。_

## ネットワークおよびセキュリティ

- AEAD 暗号化方式を使用する場合に限り、HTTP/2 を実装および有効化しました ([バグ 1027720](https://bugzil.la/1027720) および [バグ 1047594](https://bugzil.la/1047594))。
- HTTP/2 の `alt-svc` ヘッダーをサポートしました ([バグ 1003448](https://bugzil.la/1003448))。
- HTTP の Public Key Pinning 拡張 (HPKP) を実装しました ([バグ 787133](https://bugzil.la/787133))。
- [CSP](/ja/docs/Web/HTTP/Guides/CSP) 1.1 の `base-uri` [ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)に対応しました ([Firefox バグ 1045897](https://bugzil.la/1045897)).
- ソースのパスが host-source 照合時に [CSP](/ja/docs/Web/HTTP/Guides/CSP) で認識されるようになりました ([Firefox bug 808292](https://bugzil.la/808292)).

## アドオン開発者と Mozilla 開発者向けの変更点

### XUL およびアドオン

- `<xul:tabbrowser>` のプライベートなメソッドである `_getTabForBrowser()` が非推奨になりました。代わりに、パブリックなメソッドである `getTabForBrowser` を新たに追加しました。予想されているとおり、このメソッドは指定した `<xul:browser>` を包含する `<xul:tab>` 要素を返します。
- {{domxref("Performance.now()")}} と対等である `Components.utils.now()` を、ウィンドウ以外のクロームコード向けに実装しました ([バグ 969490](https://bugzil.la/969490))。

### アドオン SDK

#### ハイライト

- コンテキストメニューのアクセスキーを追加しました。
- `BrowserWindow` から `isPrivateBrowsing` を削除しました。
- `toJSON` メソッドを `URL` インスタンスに追加しました。

#### 詳細

[Firefox 34 から Firefox 35 の間に行われた GitHub コミット](https://github.com/mozilla/addon-sdk/compare/firefox34...firefox35)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。

[Firefox 34 から Firefox 35 の間に解決したバグ](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840)。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。
