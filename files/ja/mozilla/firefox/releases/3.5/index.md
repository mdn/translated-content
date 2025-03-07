---
title: Firefox 3.5 開発者向け情報
slug: Mozilla/Firefox/Releases/3.5
---

{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-US/firefox/3.5/releasenotes/) (_2009 年 7 月 30 日にリリース_) では数多くの新機能が導入され、また、幅広い種類のウェブ標準に対するサポートが追加および改善されます。この記事は主な変更点をカバーする記事へのリンクを伴う広範囲に及ぶ一覧を提供します。

## Firefox 3.5 の開発者向け新機能

### ウェブサイトとアプリケーション開発者向け

#### HTML 5 サポート

- [Firefox での音声と動画の使用](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 では HTML 5 の [audio](/ja/docs/Web/HTML/Element/audio) および [video](/ja/docs/Web/HTML/Element/video) 要素がサポートされます。
- [Firefox でのオフラインリソース](/ja/docs/Web/HTML/Using_the_application_cache)
  - : Firefox 3.5 では HTML 5 のオフラインリソース仕様をすべてサポートしています。
- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
  - : HTML5 のドラッグ＆ドロップ API によってウェブサイト内およびウェブサイト間のアイテムのドラッグ＆ドロップがサポートされます。これにより、拡張や Mozilla ベースアプリケーションに対してもより単純な API が提供されます

#### 新しくサポートされる CSS の機能

- [ダウンロードフォントのサポート](/ja/docs/Web/CSS/@font-face)
  - : 新しい @規則である {{ cssxref("@font-face") }} を利用してウェブページでダウンロードフォントを提供できます。これにより、ページ作者が期待する通りにサイトが描画されるようになります。
- [CSS メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)
  - : Firefox 3.5 では CSS メディアクエリーをサポートしています。これはメディア依存スタイルシートを拡張するものです。
- {{ cssxref("::before") }} および {{ cssxref("::after") }} の CSS 2.1 への更新
  - : `::before` および `::after` 擬似要素が CSS 2.1 サポートを満たすように更新されました。`position`、`float`、`list-style-*`、そして、いくつかの `display` プロパティのサポートが追加されています。
- 長さの単位 `ch`
  - : 単位 `ch` が通常の[長さの単位](/ja/docs/Web/CSS/length#units)として任意の場所で使えるようになりました。"1 ch" は文字 '0' の横幅です。
- {{ cssxref("opacity") }}
  - : 標準の `opacity` プロパティの先行実装である `-moz-opacity` という CSS への Mozilla 拡張が削除されました。
- {{ cssxref("text-shadow") }}
  - : ウェブコンテンツにテキストとテキスト装飾に適用される影付き効果を指定できる `text-shadow` プロパティがサポートされました。
- {{ cssxref("overflow-wrap") }}
  - : この新しくサポートされたプロパティはコンテンツに単語内で改行するかどうかを指定できます。これは単語内で改行しないと 1 行に収まらないときに発生する文字あふれを防ぐためのものです。
- `white-space` プロパティが値 `pre-line` をサポート
  - : {{ cssxref("white-space") }} プロパティの値に `pre-line` を指定できるようになりました。
- `-moz-box-shadow`

  `-moz-border-image`

  `-moz-column-rule`

  `-moz-column-rule-width`

  `-moz-column-rule-style`

  `-moz-column-rule-color`

  - : Firefox 3.5 ではこれらの CSS への Mozilla 拡張に対するサポートが追加されます。

- {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} カラー値
  - : この新しいカラー値はユーザーのシステムのデフォルトのハイパーリンクの色を表します。
- {{ cssxref("-moz-window-shadow") }} プロパティおよび {{ cssxref(":-moz-system-metric(mac-graphite-theme)") }} 擬似クラス
  - : これらの新しい CSS 機能はテーマ作成を手助けするために追加されました。
- `-moz-appearance` 向けの新しい値
  - : `-moz-win-glass` および `-moz-mac-unified-toolbar` という値が `-moz-appearance` 向けに追加されました。
- [CSS transforms の使用](/ja/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 では CSS transform がサポートされます。詳細は {{ cssxref("-moz-transform") }} および {{ cssxref("-moz-transform-origin") }} を参照してください。
- {{ cssxref(":nth-child") }}

  {{ cssxref(":nth-last-child") }}

  {{ cssxref(":nth-of-type") }}

  {{ cssxref(":nth-last-of-type") }}

  {{ cssxref(":first-of-type") }}

  {{ cssxref(":last-of-type") }}

  {{ cssxref(":only-of-type") }}

  - : これらのセレクターがすべて Firefox 3.5 で新たにサポートされます。

#### 新しい DOM の機能

- [localStorage](/ja/docs/Web/API/Web_Storage_API#localstorage)
  - : Firefox 3.5 では Web Storage の `localStorage` プロパティをサポートします。これはウェブアプリケーションがクライアントのコンピューター上にローカルにデータを保存する方法を提供します。
- [Web Workers の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 ではウェブアプリケーションでの簡単なマルチスレッドサポートを可能にする Web Workers をサポートします。
- [位置情報の使用](/ja/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 では Geolocation API をサポートします。これによりウェブアプリケーションはユーザーの現在位置についての情報を提供するプロバイダがインストールされ有効化されていれば、その情報を保持することができます。
- [セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Selectors API により与えられた選択ルールにマッチする要素を指定するために文書を検索できます。
- [マウスジェスチャイベント](/ja/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 はトラックパッドスワイプのようなマウスジェスチャイベントをサポートします。
- [NodeIterator オブジェクト](/ja/docs/Web/API/NodeIterator)
  - : `NodeIterator` オブジェクトは DOM サブツリーのノードのリストを繰り返し処理するためのサポートを提供します。
- [MozAfterPaint イベント](/ja/docs/Gecko-Specific_DOM_Events#MozAfterPaint)
  - : この新しい DOM イベントはウィンドウで塗り直し後に送られます。
- [MozMousePixelScroll イベント](/ja/docs/Gecko-Specific_DOM_Events#MozMousePixelScroll)
  - : この新しい DOM イベントにより行ベースのスクロールイベントの代わりにピクセルベースのマウススクロールホイールイベントを検知できます。

#### 新しい JavaScript の機能

- [JavaScript 1.8.1 の新機能](/ja/docs/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : JavaScript 1.8.1 における変更のすべての概要。
- [Object.getPrototypeOf()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : このメソッドは指定されたオブジェクトのプロトタイプを返します。
- [ネイティブ JSON の使用](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON)
  - : Firefox 3.5 は JSON をネイティブでサポートします。
- String オブジェクトの新しい trim メソッド
  - : String オブジェクトに [trim()](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trim)、[trimLeft()](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)、そして [trimRight()](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) メソッドが定義されました。

#### ネットワーク機能

- [HTTP 向けのクロスサイトアクセスコントロール](/ja/docs/Web/HTTP/CORS)
  - : Firefox 3.5 では、サーバーがサポートする場合に、[`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) によるものも含む HTTP リクエストでドメインを超える動作が可能になりました。
- [`XMLHttpRequest` のための Progress イベント](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Progress イベントが拡張がリクエストの進捗を監視できるようにするために提供されるようになりました。
- 同期 `XMLHttpRequest`サポートの改善
  - : [DOM Timeout](https://bugzilla.mozilla.org/show_bug.cgi?id=340345) と [Input Events](https://bugzilla.mozilla.org/show_bug.cgi?id=333198) が同期 `XMLHttpRequest中に抑制されるようになりました。`
- [DNS プリフェッチの制御](/ja/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)
  - : Firefox 3.5 では DNS プリフェッチが提供され、それにより現在のページに含まれるリンクのドメイン名解決が事前に行われ、リンクが実際にクリックされたときの時間を節約しま す。この記事ではウェブサイト側でプリフェッチを無効にする、もしくは、プリフェッチの動作を調整する方法について説明しています。

#### 新しい Canvas の機能

- [`Canvas`](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)[要素向けの HTML5 テキスト API](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas 要素が HTML5 テキスト API をサポートするようになりました。
- [`Canvas` での影付き効果](/ja/docs/Canvas_tutorial/Applying_styles_and_colors#Shadows)
  - : Canvas での影付き効果がサポートされるようになりました。
- [`createImageData()`](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Canvas の `createImageData()` メソッドがサポートされるようになりました。こ`のメソッドを利用することで、ImageData` オブジェクトを必要なときに自動的に作成させるのではなく、コードで明示的に作成することができます。オブジェクトを作成する必要性を無くすことができるので、このメソッドで他の `ImageData` を扱うメソッドのパフォーマンスを改善することができます。
- `moz-opaque` 属性
  - : `moz-opaque` DOM 属性が追加されたことにより、Canvas は半透明な要素があるかどうか知ることができます。Canvas が半透明な要素がないことを知った場合、ペインティングパフォーマンスが最適化されます。

#### 新しい SVG の機能

- [HTML の内容への SVG 効果の適用](/ja/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
  - : SVG 効果を HTML および XHTML の内容に適用できるようになりました。この記事はその方法について説明しています。

#### その他の新機能

- [Firefox での ICC カラー補正](/ja/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 では タグ付けられた画像に対して ICC カラー補正がサポートされています。
- [script](/ja/docs/Web/HTML/Element/script) 要素で defer 属性がサポート
  - : この属性はスクリプトが実行し終わるの待たずにブラウザーにパースし描画し続けることを選択させます。

### その他の改善

- Text ノードの [`wholeText`](/ja/docs/Web/API/Text/wholeText) プロパティ と [`replaceWholeText()`](/ja/docs/Web/API/Text) メソッドが実装されました。
- [`element.children`](/ja/docs/Web/API/Element/children) プロパティが追加されました。これは与えられた要素の子要素の*コレクション*を返します。
- {{ domxref("element.contentEditable") }} プロパティに対応するようになり、編集可能な要素に対応するようになりました。
- DOM [Element](/ja/docs/Web/API/Element) オブジェクトで Element Traversal API がサポートされました。
- HTML document ノードを [`cloneNode()`](/ja/docs/Web/API/Node/cloneNode) を用いて複製できるようになりました。
- 非標準である DOM の `getBoxObjectFor()` メソッドが削除されました。代わりとして [`getBoundingClientRect()`](/ja/docs/Web/API/Element/getBoundingClientRect) を利用すべきです。
- 伝達された DOM イベントを再伝達できるようになりました。これにより Firefox 3.5 は Acid 3 test 30 をパスします。
- DOM 2 Range ハンドリングが改善されました。
- 非 Chrome スコープにおいて、例外でキャッチされるオブジェクトがスローされたオブジェクトを含む [XPConnect](/ja/docs/XPConnect) ラッパーではなく実際にスローされたオブジェクトになりました。
- SVG ID 参照が動的な変更に対応するようになりました。
- SVG フィルターが `foreignObject` でも動作するようになりました。
- 互換性のために `GetSVGDocument()` メソッドが [`object`](/ja/docs/Web/HTML/Element/object) および [`iframe`](/ja/docs/Web/HTML/Element/iframe) 要素に追加されました。
- JavaScript においてオブジェクトおよび配列の初期化子によるプロパティの暗黙的な設定ではセッターの定義を行わないようになりました。詳細は [オブジェクトおよび配列の初期化子は評価時にセッターの定義を行うべきではない](/web-tech/2009/04/29/object-and-array-initializers-should-not-invoke-setters-when-evaluated) というブログ投稿を参照してください。
- `gDownloadLastDir.path` 変数は、パスではなく `nsIFile` を参照しているので、 `gDownloadLastDir.file` に名称変更されました。
- `gDownloadLastDirPath` 変数は、パスではなく `nsIFile` を参照しているので、 `gDownloadLastDirFile` に名称変更されました。
- Firefox 3.5 から、`XPCNativeWrapper` オートメーションを得る Chrome パッケージでの `data:` バインディングを利用することはできなくなります。

### XUL とアドオン開発者向け

拡張開発者であるなら、[Firefox 3.5 向けに拡張を更新する](/ja/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) から読み始めるべきです。その記事ではあなたの拡張に影響しうる変更を知る上で役立つ概観を提供しています。

#### 新しいコンポーネントと機能

- [プライベートブラウジングモードのサポート](/ja/Supporting_private_browsing_mode)
  - : Firefox 3.5 ではプライベートブラウジングモードが提供されます。これはユーザーの活動を記録しません。拡張はこの記事で挙げるガイドラインに従ってプライベートブラウジングをサポートすることができます。
- [Firefox 3.5 でのセキュリティの変更](/ja/Security_changes_in_Firefox_3.5)
  - : この記事は Firefox 3.5 でのセキュリティ関連の変更をカバーしています。
- [Firefox 3.5 でのテーマの変更](/ja/Theme_changes_in_Firefox_3.5)
  - : この記事は Firefox 3.5 でのテーマ関連の変更をカバーしています。
- [WiFi アクセスポイントのモニタリング](/ja/Monitoring_WiFi_access_points)
  - : UniversalXPConnect 特権を持つコードで有効なアクセスポイントの一覧がモニタリング可能になり、個々の SSIDs、MAC アドレス、シグナル強度の情報が取得できます。 これを Geolocation と連携して用いることで WiFi ベースのロケーションサービスを提供できます。

#### 注目すべき変更と改善

- XUL [`textbox`](/ja/docs/XUL/textbox) ウィジェットが検索フィールドとして利用するための [`search`](/ja/docs/XUL/Attribute/textbox.type) type を提供するようになりました。
- ウィンドウ間のタブのドラッグ＆ドロップのサポートのために、[`browser`](/ja/docs/XUL/browser) ウィジェットに [`swapDocShells()`](/ja/XUL/Method/SwapDocShells) メソッドが定義されました。
- [`panel`](/ja/docs/XUL/panel) 要素に [`level`](/ja/docs/XUL/Attribute/panel.level) 属性が追加されました。 これは panel を他のアプリケーションの手前に表示するか、単純に panel が含まれるウィンドウの手前に表示するかどうかを指定できます。
- XUL 要素が `clientHeight`、`clientWidth`、`scrollHeight`、`scrollWidth` プロパティをサポートするようになりました。
- [`keyset`](/ja/docs/XUL/keyset)s now include a `disabled` 要素に `disabled` 属性が追加されました。
- 加えて、 `keyset` 要素はノードの [`removeChild()`](/ja/docs/Web/API/Node/removeChild) メソッドを用いて削除可能になりました。
- [`mozIStorageStatement`](/ja/docs/mozIStorageStatement) には `initialize()` メソッドがありましたが、削除されました。利用者は新しいステートメントオブジェクトを得るための代替として [`createStatement()`](</ja/docs/mozIStorageConnection#createStatement()>) メソッドを使うべきです。
- [Storage](/ja/docs/Storage) API が非同期リクエストのサポートを提供するようになりました。
- [`nsICookie2`](/ja/docs/XPCOM_Interface_Reference/nsICookie2) インターフェイスに新しく `creationTime` 属性が追加され、Cookie が作成された時間を取得できるようになりました。
- プロトコルが登録することを許可されることを保証するために Chrome 登録の間にチェックされる [`nsIProtocolHandler`](/ja/docs/nsIProtocolHandler) へのフラグが追加されました (`URI_IS_LOCAL_RESOURCE`)。
- Linux で Firefox がプラグインを探すために `/usr/lib/mozilla/plugins` を見るようになりました。以前にサポートされていた場所も同様に検索対象です。
- プラグイン API がプライベートブラウジングモードのサポートを含むために更新されました。これにより、`NPNprivateModeBool` を用いているプライベートブラウジングモードの状態を調べるために、 [`NPN_GetValue()`](/ja/docs/NPN_GetValue) を使用できるようになりました。

## エンドユーザー向け新機能

### ユーザーエクスペリエンス

- ロケーションアウェアブラウジング
  - : 選択次第で、 Firefox 3.5 がウェブサイトと現在の位置についての情報を共有できるようになります。 Firefox 3.5 は接続しているネットワークについての情報を位置を共有するために用いることができます。もちろん、プライバシーを確保するために、そうする前に許可を求めます。
- オープンなオーディオとビデオのサポート
  - : Firefox 3.5 は、オーディオのための WAV 同様、オープンな Ogg フォーマットを用いた埋め込みビデオおよびオーディオをサポートします。プラグインは必要なく、何かあるいはどうやってもあなたのプラットフォームで利用出来ないものをインストールする必要があるという旨のエラーメッセージに混乱することはありません。
- ローカルデータストレージ
  - : ウェブアプリケーションはあなたのコンピューターにデータを保存するために Web Storage のローカルストレージ機能を利用できるようになります。これはサイト設定からより複雑なデータまであらゆるものにとって素晴らしく役立つものです。

### セキュリティとプライバシー

- プライベートブラウジング
  - : 他人のコンピューターを利用する必要がありますか？プライベートブラウジングモードに切り替えることで、Cookie、履歴、その他のあらゆる潜在的なプライベートな情報を含んだあなたのセッションは全く記録されなくなります。
- より良いプライバシーコントロール
  - : プライバシー設定画面はユーザーがプライベート情報をより細かくコントロールできるようにするために完全にデザインし直されました。ユー ザは履歴、Cookie、ダウンロード、フォーム入力のような情報を保持、破棄するかどうか選択できます。 さらに、ユーザーは履歴とブックマークの内容をそれぞれアドレスバーの自動サジェストに含むかどうか指定できます。 ですから、アドレスバーでタイプ中に意図せずプライベートなウェブアドレスがポップアップすることを防ぐことができます。

### パフォーマンス

- より速い JavaScript パフォーマンス
  - : 新しい TraceMonkey JavaScript エンジンを持つ Firefox 3.5 では "AJAX" の "J" である、JavaScript が劇的にスピードアップしています。ウェブアプリケーションは Firefox 3 よりももっとより速くなります。
- より速いページレンダリング
  - : "Speculative parsing（投機的解釈）" のような技術のおかげで、 Firefox 3.5 ではウェブコンテンツがより速く描画されます。ユーザーは「Firefox 3.5 ではコンテンツがより速く描画される」ということ以外は知る必要がありません。

## 関連情報

{{Firefox_for_developers('3')}}
