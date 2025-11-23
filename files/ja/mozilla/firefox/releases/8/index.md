---
title: Firefox 8 開発者向けリリースノート
short-title: Firefox 8
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 8 は 2011 年 11 月 8 日にリリースされました。この記事は、[ウェブ開発者](#ウェブ開発者向けの変更点一覧)とアドオンおよび [Mozilla プロジェクト開発者](#mozilla_開発者とアドオン開発者向けの変更点)の双方が、このリリースの機能を最大限に活用できるよう支援するための情報を提供します。

## ウェブ開発者向けの変更点一覧

### HTML

- {{ domxref("HTMLImageElement") }} に `crossOrigin` プロパティが追加され、また [`crossorigin`](/ja/docs/Web/HTML/Reference/Elements/img#crossorigin) 属性が {{ HTMLElement("img") }} 要素に追加されました。（参考: [Firefox バグ 664299](https://bugzil.la/664299)）
- {{ domxref("HTMLSelectElement.add()") }} メソッドの引数に、インデックスが追加されました。インデックスが指す要素の前に、新たな項目が挿入されます。このメソッドはこれまで、項目のみがサポートされていました。(参考: [Firefox バグ 666200](https://bugzil.la/666200))
- `HTMLIsIndexElement` コンストラクターが削除されました。Firefox 4 以前から、どの要素もこのインターフェイスをインプリメントしていませんでした。
- HTML5 のコンテキストメニュー機能 (contextmenu 属性) がサポートされました。この機能によって、要素固有のメニュー項目をネイティブのコンテキストメニューに追加できます。(この機能は HTML5 仕様の変更を待っている関係で、現時点では試験実装という扱いです。参考: [バグ 617528](https://bugzil.la/617528))
- すべての要素に {{ domxref("HTMLElement.accessKeyLabel") }} 属性がサポートされました。
- {{ HTMLElement("input") }} と {{ HTMLElement("textarea") }} に `selectionDirection` 属性が追加されました。また、`setSelectionRange()` メソッドが選択方向を指定できるようになりました。
- `tabindex` 属性でフォーカス可能になった要素にフォーカスしたとき、ほとんどの要素でフォーカスリングが描画されるようになりました。
- 入れ子にされた一連の {{ HTMLElement("label") }} 要素において、クリックイベントが複数の \<label> 要素を起動しなくなりました。これにより、過去に Firefox が応答しなくなる問題が発生していました（[Firefox バグ 646157](https://bugzil.la/646157) を参照）。

### DOM

- {{ domxref("Element.insertAdjacentHTML","insertAdjacentHTML") }} メソッドが実装されました。
- `BlobBuilder` に `getFile()` メソッドが追加されました。このメソッドは blob の内容をファイルとして返します。
- {{ domxref("FileReaderSync") }} インターフェイス（ファイル API の一部）が実装されました。
- 入れ子になった {{ HTMLElement("label") }} のイベントハンドリングが修正されました。
- ウィンドウ間での {{ domxref("window.postMessage()") }} に {{ domxref("File") }} と {{ domxref("FileList") }} が使えるようになりました。
- {{ domxref("HTMLelement.contenteditable", "contenteditable") }} な領域において、見出しで改行した際、もしくはリスト編集モードから 2 回改行して抜け出す際、段落が挿入されるようになりました。(これまでは {{ HTMLElement("br") }} でしたが、これからは {{ HTMLElement("p") }} が挿入されます。)
- {{ domxref("HTMLelement.contenteditable", "contenteditable") }} な領域において、1 行目に均等割付を与えたときに適切な処理を妨げるバグを修正しました。
- {{ domxref("HTMLelement.contenteditable", "contenteditable") }} な領域の最初で delete もしくは backspace を押した際に、前のブロックに影響するバグを修正しました。
- {{ domxref("Document.getSelection()") }} が文字列化ではなく、{{ domxref("window.getSelection()") }} と同じ `Selection` オブジェクトを返すようになりました。
- HTML5 の `selectionDirection` プロパティが実装されました。編集可能テキストで選択した方向を指定できます。
- {{ domxref("HTMLMediaElement") }} の `seekable` プロパティが実装されました。このプロパティは {{ domxref("TimeRanges") }} を返します。
- {{ domxref("HTMLMediaElement.preload") }} 属性が適切な列挙値を反映するようになりました。
- [`crossOrigin` プロパティ](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) に不正な値が使われた場合は "Anonymous" と扱われるようになりました。
- {{ domxref("navigator.cookieEnabled") }} が、サイトごとの設定で Cookie の設定が上書きされている場合においても正しい情報を返すようになりました。

### JavaScript

- 引数なしで呼び出された [`RegExp.exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`RegExp.test()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) が文字列 "undefined" にマッチするようになりました。
- 引数なし、もしくは `undefined` をとり呼び出された [`String.search()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/search), [`String.match()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match) が空文字列にマッチするようになり、つまりはすべての文字列にマッチするようになりました。
- ウォッチリストのサポートが行われました。ウォッチリストは (非標準の) `watch()` メソッドおよび `unwatch()` メソッドから利用できます。

### CSS

- {{ cssxref("resolution") }} が仕様に従い、{{cssxref("&lt;integer&gt;")}} だけでなく {{cssxref("&lt;number&gt;")}} もサポートしました。
- {{ cssxref("hyphens") }} 利用時のハイフネーション規則がより多くの言語でサポートされました。
- {{ cssxref("background-size") }} の処理が仕様により従ったものになりました。
- これまで Quriks モードでの {{ cssxref("text-decoration") }} は、太い線で描画され、また子孫要素のテキストに沿って描画されていました。Firefox 8 からは、標準モードにより近い表示になります。
- 要素の水平方向への配置がより仕様に沿った実装になりました。この件に関するドキュメントを準備中ですが、今は [Firefox バグ 682780](https://bugzil.la/682780) のコメント 23 をお読みください。
- [SVG 画像の拡大縮小](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds) が背景画像においても適切に処理されるようになりました。

### ネットワーク

- ダブルクォートが {{ RFC("2231") }} または {{ RFC("5987") }} エンコーディングの区切り子として利用できなくなりました。これはそれらの RFC への準拠によるものです。
- MIME ヘッダーフィールドのパーサーは、引数に「=」が含まれない `Content-Disposition` ヘッダーを受け付けなくなりました。
- JavaScript が無効な環境ではスクリプトファイルをダウンロードしないようになりました。
- SSL 2.0 のサポートが打ち切られました。

### WebSocket

- [`WebSocket`](/ja/docs/Web/API/WebSocket) オブジェクトの [`send()`](/ja/docs/Web/API/WebSocket/send) メソッドが不適切に論理値を返していた挙動が修正されました。
- [`WebSocket`](/ja/docs/Web/API/WebSocket) オブジェクトの [`close()`](/ja/docs/Web/API/WebSocket/close) メソッドが現在の標準草案に従ったものになりました。また、クローズイベントが適切に [`CloseEvent`](/ja/docs/Web/API/CloseEvent) インターフェイスを利用するようになりました。
- [`WebSocket`](/ja/docs/Web/API/WebSocket) オブジェクトの `extensions` 属性がサポートされました。
- WebSocket コンストラクターがひとつのプロトコル文字列だけではなく、プロトコルの配列もサポートするようになりました。
- WebSocket では混在コンテンツは許可されていません。つまり、保護されたコンテンツから保護されていない WebSocket サーバーへの接続を開くことはできなくなりました。
- WebSocket の接続エラーが `onerror` ハンドラーをトリガーするようになりました。
- [WebSocket](/ja/docs/Web/API/WebSockets_API) API が最新版の仕様に追従しました。(参考: [Firefox バグ 674890](https://bugzil.la/674890), [Firefox バグ 674527](https://bugzil.la/674527), [Firefox バグ 674716](https://bugzil.la/674716))
- WebSocket の deflate-stream 拡張が無効にされました。この拡張は非推奨とされており、またいくつかのウェブサイトとの互換性を損ねていました。

### WebGL

- 他のドメインからのテクスチャ読み込みが再び可能になりました。ただし、CORS によってアクセスを許可されている場合に限ります。(参考: [Cross-domain textures](/ja/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL))
- Cross-process rendering with Direct2D/Direct3D 10.

### MathML

- {{ MathMLElement("math") }} 要素に `displaystyle` 属性のサポートが追加されました。
- {{ MathMLElement("mtable") }} 要素の `align` において、_負の行数_ の解釈が修正されました。

### 開発者ツール

- [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) オブジェクトが `dir()` メソッドをサポートしました。個のメソッドは指定したオブジェクトについて、インタラクティブなプロパティリストを表示します。

## Mozilla 開発者とアドオン開発者向けの変更点

アドオンを Firefox 8 互換にする際に必要となりそうな変更点は [Updating add-ons for Firefox 8](/ja/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) にまとめられています。

> [!NOTE]
> Firefox 8 では、従来のメジャーリリースと同様に、バイナリーコンポーネントをコンパイルし直す必要があります。

### XPCOM

- `Components.utils`
  - : 特定のコンパートメントでより簡単にオブジェクトを作成できるようにするため、新しいメソッド `Components.utils.createObjectIn()` と `Components.utils.makeObjectPropsNormal()` が追加されました。

#### その他の XPCOM 関連の変更

- コンポーネントコードから DOM オブジェクトをインスタンス化する場合、直接 `nsIDOMFile` をインスタンス化する必要がなくなり、代わりに new File を実行することで DOM {{ domxref("File") }} オブジェクトをインスタンス化できるようになりました。
- `nsTPtrArray` 配列型は削除されました。その機能はすべて `nsTArray` で利用可能となり、ポインタ型を使用してインスタンス化される場合に `SafeElementAt()` メソッドを提供します。

### ワーカー

ChromeWorkers から XPCOM オブジェクトにアクセスできなくなりました。XPConnect は [バグ 649537](https://bugzil.la/649537) によりワーカーコンテキストで無効にされています。

### XUL

- {{ domxref("document.execCommand()") }} のバグが修正されました。このバグは、`contentDocument` の値に対して呼び出した際に発生していました。Firefox 3 以降、この操作は正しく動作せずエラーが発生していました。
- ブートストラップされたアドオンは、`chrome.manifest` ファイルを使用して Chrome をロードできるようになりました。
- 最大サイズを指定した場合、XUL 画像の両方向の縮尺比が均等になるようになりました。

### ビルドシステムの変更

- 以下のビルド設定オプションは削除されました。
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- IDL ファイルをヘッダーにコンパイルする際、必要に応じてヘッダーファイル `jspubtd.h` が自動的にインクルードされます。 jsval または \[implicit_jscontext\] を使用する IDL ファイルにおいて、`jspubtd.h` や `jsapi.h` を手動でインクルードする必要はなくなりました。

### クロームの登録

- Gecko のバージョン互換性を指定する `platformversion` フラグが chrome.manifest でも使えるようになりました。

### インターフェイスの変更

- `mozIJSSubScriptLoader.loadSubScript()` メソッドが、可能な場合、起動キャッシュからスクリプトを読み込むようになりました。
- `nsIAccessNode` インターフェイスから `ownerWindow` 属性が削除されました。
- `nsIDOMStorageWindow` インターフェイスは `nsIDOMWindow` インターフェイスへ統合されました。
- `nsIDOMWindowInternal` インターフェイスの全メンバーが `nsIDOMWindow` インターフェイスへ移動されました。インターフェイス自体は互換性維持のため Firefox 9 まで (メンバーを持たない状態で) 残されます。
- パフォーマンス向上のため、非同期の Places データベース更新に対するコールバック処理が変更されました。新しい `mozIVisitInfoCallback.handleResult()` および `mozIVisitInfoCallback.handleError()` メソッドを参照してください。これらは、エラーと成功の両方の条件を処理する従来の単一メソッドに代わるものです。
- `nsIMemoryReporter` の `KIND_MAPPED` 属性が廃止され、代わりに `KIND_NONHEAP` 属性と新しい単位型 `UNITS_COUNT_CUMULATIVE`、`UNITS_PERCENTAGE` が追加されました。
- `nsIMemoryReporterManager` インターフェイスに新しい `explicit` 属性が追加されました。これは明示的なメモリー割り当ての合計サイズを報告します。
- `nsIMemoryReporterManager` インターフェイスに新しい `resident` 属性が追加されました。これは使用されている物理メモリーの量を報告します。
- `nsINetworkLinkService` インターフェイスに `linkType` 属性が追加されました。この属性で使用中のネットワーク接続の種類を参照できます。ただし、今のところすべての OS で `LINK_TYPE_UNKNOWN` が返ります。Android 対応は、セキュリティの懸念が報告されたため、バックアウトされました。
- `nsISelection2` インターフェイスは `nsISelectionPrivate` インターフェイスへ統合されました。
- `nsISelection3` インターフェイスは `nsISelection` インターフェイスへ統合されました。
- `nsISessionStartup` の属性の状態が、パフォーマンス上の理由から、文字列型ではなく `jsval` 型になりました。
- `nsIDocShell` の `isActive` 属性は、最小化されたウィンドウでは `false` を返すようになりました。

#### 削除されたインターフェイス

次のインターフェイスは内部で使用されていたもので、必要がなくなったため削除されました。

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

`nsIWorkerFactory` インターフェイスも削除されました。ワーカーは `Worker`, `ChromeWorker` コンストラクターから生成可能です。

### その他の変更

- ウィンドウが最小化されたとき、最小化から復帰したとき、あるいは全画面表示と通常表示の切り替えが行われたときに、`window` が `sizemodechange` イベントを受け取るようになりました。
- [`extensions.autoDisableScopes` 設定を使う](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations) ことで、特定の場所からのアドオン自動インストールを無効化できるようになりました。
- {{ domxref("Document") }} オブジェクトの新しい `mozSyntheticDocument` プロパティを使用すると、文書が完全な標準 DOM 文書ではなく合成文書（つまり、スタンドアロンの画像、動画、音声ファイルなど）であるかどうかを判断できます。例えば、この状況で異なるユーザーインターフェイスを表示したい場合（このケースに応じてコンテキストメニュー項目を異なる方法で追加するなど）に有用です。
- `about:config` を開く際にフィルターを指定できるようになりました。例えば、`about:config?filter=sessionstore` と入力すると、セッションストレージ関連の設定のみが表示されます。

<!-- cSpell:ignore sessionstore -->
