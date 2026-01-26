---
title: Firefox 9 開発者向けリリースノート
short-title: Firefox 9
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 9 は Windows 向けに 2011 年 12 月 20 日にリリースされました。その直後に見つかったクラッシュバグを修正した Mac 版および Linux 版のバージョン 9.0.1 は、2011 年 12 月 21 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ウェブコンソールが、ログ出力メソッドで基本的な[文字列置換](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions)に対応するようになりました。
- ウェブコンソールで[視覚的にネストされた出力ブロック](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console)を作成できるようになり、読みやすさの助けになります。

### HTML

- {{ HTMLElement("li") }} 要素の `value` 属性が負の値を取れるようになりました。以前は負の値は 0 に変換されていました。
- {{HTMLElement("audio")}} と {{HTMLElement("video")}} 要素を用いるときのメディアの URI において、[メディアの開始時間と終了時間を指定](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#specifying_playback_range) できるようになりました。
- {{ HTMLElement("input") }} 要素と {{ HTMLElement("textarea") }} 要素が、スペルチェッカーの実行において `lang` 属性の値を加味するようになりました。
- Android 版 Firefox において、{{ HTMLElement("input") }} 要素に `type="file"` と `accept="image/*"` が指定されているとき、ユーザーがブラウザーからアプリを切り替えることなく電話のカメラを用いて写真を撮れるようになりました。
- Windows Vista スタイルの PNG ICO イメージがサポートされるようになりました。
- [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性を用いて CORS アクセスのリクエストを行った画像を描画しても、不正に[キャンバスを汚染](/ja/docs/Web/HTML/How_to/CORS_enabled_image#セキュリティと汚染されたキャンバス)しないようになりました。
- [`rowspan`](/ja/docs/Web/HTML/Reference/Elements/td#rowspan) 属性に指定できる値の最大値が 8190 から 65,534 になりました。

### CSS

- {{ cssxref("font-stretch") }} プロパティに対応しました。
- {{ cssxref("columns") }} プロパティが `-moz` 接頭辞付きでサポートされました。このプロパティは {{ cssxref("column-width") }} と {{ cssxref("column-count") }} をまとめて記述する短縮形プロパティです。
- {{ HTMLElement("link") }} 要素を用いて取り込まれたスタイルシートが完全にロードされてパースされたとき (しかしまだドキュメントに適用されていない状態)、[`load` イベント](/ja/docs/Web/HTML/Reference/Elements/link#スタイルシートの_load_イベント) が発生するようになりました。また、スタイルシートの処理においてエラーが起きた場合、`error` イベントが発生します。
- {{ cssxref("text-overflow") }} 向けの 2 つの値を指定できる新しい構文を用いて、左端と右端の両方のオーバフロー設定を指定できるようになりました。

### JavaScript

_変更なし。_

### DOM

- [全画面モードの利用](/ja/docs/Web/API/Fullscreen_API)
  - : 新しい全画面 API は、ブラウザーインターフェイスを表示せずに、画面全体を用いてコンテンツを表示する方法を提供します。これは動画やゲームにとって素晴らしいものです。この API は現在実験的かつ接頭辞付きです。

<!---->

- {{ domxref("Node.contains()") }} メソッドに対応しました。このメソッドによって、あるノードが別のノードの子孫であるかを調べられます。
- {{ domxref("Node.parentElement") }} 属性が実装されました。このメソッドは DOM ノードの親 {{ domxref("Element") }}、または、親が要素ではない場合は `null` を返します。
- DOM Level 3 [Composition イベント](/ja/docs/Web/API/CompositionEvent) に対応しました。
- {{ domxref("Document.scripts") }} 属性が実装されました。このメソッドはドキュメントのすべての {{ HTMLElement("script") }} 要素の {{ domxref("HTMLCollection") }} を返します。
- {{ domxref("Document.queryCommandSupported()") }} メソッドが実装されました。
- {{ HTMLElement("body") }} 要素でリスナーを登録できるイベントのセットは、HTML5 仕様書の最新草案と一致するように改訂されました。イベントの一覧は、[DOM イベント](/ja/docs/Web/API/Document_Object_Model/Events#イベント索引)ガイドに記載されている通り、{{ HTMLElement("body") }} でリスナーを登録できるイベントを反映しています。
- `readystatechange` イベントは、意図通り {{ domxref("Document") }} のみで発生するようになりました。
- 標準 IDL インターフェイスとして Event ハンドラーが実装されました。多くのケースで、これはコンテンツに影響を及ぼさないはずですが、例外が存在します。
- 新しいレスポンス型、 `"moz-json"` が `XMLHttpRequest` に追加されました。 その型を用いると、 `XMLHttpRequest` に自動的に [JSON](/ja/docs/Glossary/JSON) 文字列を解釈させられます。つまり、この型をリクエストしたときは解釈された JSON 文字列が返るので、`response` プロパティの値が解釈結果の JavaScript オブジェクトになります。
- [`XMLHttpRequest` の "progress" イベント](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#進捗の監視)が受け取ったデータの各チャンクに対して確実に送信されるようになりました。つまり、以前のバージョンでは受け取ったデータの最後のチャンクが "progress" イベントを発生させない可能性がありました。データの最後のチャンクを受け取ったかを判定するために "load" イベントも監視する必要はもう無くなり、"progress" イベントだけで進捗を追えるようになります。
- 過去に、`null` のリスナーを指定した [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) の呼び出しは例外を投げていましたが、エラーを出すことなく、何の影響も及ぼさずに処理を戻すようになりました。
- 新しい {{ domxref("navigator.doNotTrack") }} プロパティを用いることで、コンテンツ中で簡単にユーザーが do-no-track 設定を有効にしているかを判定できます。この値が "yes" ならば、ユーザーを追跡するべきではありません。
- {{domxref("Range")}} オブジェクトや {{ domxref("Selection") }} オブジェクトが、{{ domxref("Text.splitText()", "splitText()") }} や {{ domxref("Node.normalize", "normalize()") }} が呼び出されたときにとる挙動が仕様通りになりました。
- doctype ノードに対しての {{ domxref("Node.ownerDocument") }} の値が、`null` ではなく、ノードを作成するために呼ばれた [`createDocumentType()`](/ja/docs/Web/API/DOMImplementation/createDocumentType) 上のドキュメントになるようになりました。
- `window.navigator.taintEnabled` が削除されました。このプロパティは長年サポートされていませんでした。

### ワーカー

- Firefox 8 では、blob URL で実装されたワーカーが壊れていましたが、Firefox 9 から再び動作するようになりました。

### WebGL

- [WebGL](/ja/docs/Web/API/WebGL_API) コンテキストの `drawingBufferWidth` および `drawingBufferHeight` 属性に対応するようになりました。

### MathML

- {{ MathMLElement("maction") }} 要素の `actiontype` 属性における非推奨な値 `restyle` が削除されました。
- まだ要素自体はサポートされていませんが、`mlabeledtr` 要素を用いても、描画を完全に壊さないようになりました。この要素の実際のサポートの進捗は [バグ 689641](https://bugzil.la/689641) を参照してください。

### ネットワーク

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)（つまり [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) オブジェクトのコンテンツ）を [XMLHttpRequest を使用して](/ja/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data)送信することが可能になりました。
- WebSocket 接続で、有効な UTF-8 データフレーム内で文字以外のデータである場合、受信に失敗するのではなく、受信できるようになりました。
- XSLT リクエストの HTTP `Accept` ヘッダーは、分かりやすさのため `*/*` に変更されました。 XSLT の取得は常に `*/*` に代替していたため、初期リクエストを簡略化するのは意味があります。
- サーバーが `301 Moved Permanently` または `307 Temporary Redirect` コードを使用して、ユーザーを `javascript:` URI にリダイレクトしようとすると、実際にリダイレクトされる代わりに「接続エラー」が発生するようになりました。これにより、特定の種類のクロスサイトスクリプティング攻撃を防ぐことができます。
- {{ HTTPHeader("Content-Disposition") }} が空の状態で提供されたコンテンツは、以前は {{ HTTPHeader("Content-Disposition") }} が "attachment" であるかのように扱われていました。これは常に期待通りに動作するとは限りませんでした。これらは、{{ HTTPHeader("Content-Disposition") }} が "inline" であるかのように処理されるようになりました。
- ディスクキャッシュ内のアイテムのデフォルト最大サイズが 50MB に増加されました。以前は 5MB 以内のアイテムのみがキャッシュされていました。

## Mozilla 開発者とアドオン開発者向けの変更点

Firefox 9 でアドオンが取得できるようにするために、ある変更が必要となる場合があります。その概要については、[Firefox 9 向けアドオンの更新](/ja/docs/Mozilla/Firefox/Releases/9/Updating_add-ons)を参照してください。

### XUL

- `<xul:tab>` 要素は、これでセッションストアサービスによるタブの復元処理中であることを示す `pending` 属性（値：`true`）を持つようになりました。テーマにおけるタブのスタイル設定に使用できます。処理待ち状態ではないタブにはこの属性は存在しません。
- `<xul:tab>` 要素は、`unread` 属性を持つようになりました。この属性の値は、タブが前回アクティブだった時点から変更された場合、または現在のセッションを始める以降選択されていない場合に `true` となります。未読でないタブにはこの属性は存在しません。
- DOM のドラッグ＆ドロップ操作において、`<xul:panel>` をドラッグ用画像として使用するようになりました。これにより、XUL コンテンツのドラッグ＆ドロップに[標準のドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) を利用することができます。
- `<xul:notificationbox>` 要素の `appendNotification` メソッドでは、通知ボックスに関連する興味深いイベントが発生した際に呼び出されるコールバックを指定できるようになりました。現在、唯一のイベントは "removed" であり、これはボックスがウィンドウから除去されたことを指示します。

### JavaScript コードモジュールの変更

- `FileUtils.jsm` は、パス名で指定されたファイルを表す `nsIFile` オブジェクトを返す `File` コンストラクターを持つようになりました。

### サービスの変更

- サイト別設定サービスがプライベートブラウジングモードを考慮するようになりました ([バグ 679784](https://bugzil.la/679784) 参照)。

### NSPR

- NSPR は "append" モジュールを持つようになり、既存ログの出力終わりに新しいデータを追加できるようになりました。

### インターフェイスの変更

#### 削除されたインターフェイス

- `nsIGlobalHistory3` は、Places および DocShell コードの整理過程で除去されました。

#### その他のインターフェイスの変更

- `nsISound` インターフェイスに新しい定数 `EVENT_EDITOR_MAX_LEN` が導入され、テキスト欄に入力された文字数が制限を超えた場合にシステム効果音を鳴らせるようになりました。今のところ、これは Windows のみで使用されています。
- `nsIScriptError2` インターフェイスに新しいプロパティ `timeStamp` と `innerWindowID` が追加されました。また、`initWithWindowID()` メソッドが、外部ウィンドウ ID の代わりに内部ウィンドウ ID を受け取るようになりました。
- `nsIBidiKeyboard.haveBidiKeyboards` 属性が追加されました。これは、OS に 1 つ以上の双方向 (LTR もしくは RTL) のキーボードがインストールされているかどうかを判別できるものです。
- 新しい `nsIEditor.isSelectionEditable` 属性により、現在の選択範囲のアンカーが編集可能かどうかを判定できます。これにより、文書の特定部分のみが編集可能な場合に、現在の選択範囲が編集可能な区間内にあるかどうかを確認できるようになり、対応が役立つようになります。
- `nsIBrowserHistory.registerOpenPage()` および `nsIBrowserHistory.unregisterOpenPage()` メソッドは、Places システムのパフォーマンス改善の一環として除去されました。代わりに `mozIPlacesAutoComplete` の対応するメソッドを使用することができます。
- `nsIDOMWindowUtils.wrapDOMFile()` メソッドが追加されました。このメソッドは、指定された `nsIFile` に対して DOM の {{ domxref("File") }} オブジェクトを返します。
- `nsIChromeFrameMessageManager.removeDelayedFrameScript()` メソッドが追加され、遅延読み込みスクリプトを削除することに対応しました。起動時に自身で読み込んだアドオンは、終了時にこれを呼び出して、遅延読み込みフラグを設定して `nsIChromeFrameMessageManager.loadFrameScript()` で読み込まれたスクリプトをすべて除去されるように設定する必要があります。これはアドオン向けに `browser.messageManager.removeDelayedFrameScript()` として公開されています。
- `nsIAppStartup` インターフェイスには新しい `interrupted` 属性が追加されました。これにより、起動プロセスがインタラクティブなプロンプトによってこの点で中断されたかどうかを判別できます。例えば、パフォーマンス評価中に起動時間を計測する際、中断されたセッションの数値を除外できるようにするなど、有用な場合があります。
- `nsIEditorSpellCheck` インターフェイスは、サイトごとのスペルチェッカー辞書の選択に対応するよう改訂されました。

### IDL パーサー

IDL パーサーから、これまで完全に実装されたことのなかったユニークポインターの概念が削除されました。

### ビルドシステムの変更

- スタンドアロンの XPConnect をビルドするための `--enable-application=standalone` オプションは除去されました。いずれにせよ、2007 年以降動作していませんでした。
- Necko および Transformiix XSLT スタンドアロンのビルドに対する対応が除去さ れました。`--enable-application=network` または `--enable-application=content/xslt` は使用できなくなりました。
- ビルドシステムは、`MOZCONFIG` 環境変数で `.mozconfig` のパスを上書きしない限り、`$topsrcdir/.mozconfig` または `$topsrcdir/mozconfig` 以外の場所では `.mozconfig` を見るようになりました。
- SDK では `xpidl` ユーティリティが `pyxpidl` をつけて置き換えました。

### その他の変更

- スペルチェッカーは、チェック対象となる単語の長さについて、以前任意に設定されていた 130 文字の制限を廃止しました。この制限は、スペルチェッカーで発生していたクラッシュを防ぐために導入されていましたが、基盤の不具合は既に修正された状態にあります。
- "JavaScript-navigator-property" カテゴリーを使用することで、 {{ domxref("window.navigator") }} オブジェクトに機能を追加するためのコンポーネントを追加することができるようになりました。
