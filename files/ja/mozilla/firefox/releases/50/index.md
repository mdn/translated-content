---
title: Firefox 50 for developers
short-title: Firefox 50
slug: Mozilla/Firefox/Releases/50
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

[Firefox の最新の開発者向け機能を試すには、Firefox Developer Edition をインストールしてください](https://www.firefox.com/en-US/channel/desktop/developer/)。
Firefox 50 は、米国時間 2016 年 11 月 15 日にリリースされました。このページでは、開発者に影響する Firefox 50 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("bdo")}} の既定のスタイルで、{{cssxref("unicode-bidi")}} の値が `isolate-override` になりました ([Firefox バグ 1249497](https://bugzil.la/1249497))。
- {{HTMLElement("track")}} 要素の [`src`](/ja/docs/Web/HTML/Reference/Elements/track#src) 属性の設定が正しく動作するようになりました ([Firefox バグ 1281418](https://bugzil.la/1281418))。
- {{HTMLElement("area")}}、{{HTMLElement("a")}}、{{HTMLElement("img")}}、{{HTMLElement("iframe")}}、{{HTMLElement("link")}} 要素の `referrerpolicy` 属性を、デフォルトで有効化しました ([Firefox バグ 1223838](https://bugzil.la/1223838)、[Firefox バグ 1264165](https://bugzil.la/1264165))。

### CSS

- border-radius のある角が dashed および dotted スタイルであった場合、角の部分を solid スタイルではなく指定したスタイルで描画するようになりました ([Firefox バグ 382721](https://bugzil.la/382721))。
- 非標準の `:-moz-full-screen-ancestor` 擬似クラスセレクターを削除しました ([Firefox バグ 1199529](https://bugzil.la/1199529))。
- {{cssxref("box-sizing", "box-sizing: padding-box")}} は削除されました。仕様書から削除されたため、および実装していた主要ブラウザーが Firefox だけであったためです ([Firefox バグ 1166728](https://bugzil.la/1166728))。
- {{cssxref("unicode-bidi")}} プロパティの値 `isolate`、`isolate-override`、`plaintext` の接頭辞を削除しました ([Firefox バグ 1141895](https://bugzil.la/1141895))。
- 後方互換モードでリストのビュレットが、標準準拠モードと同様にリストのサイズを継承するようになりました ([Firefox バグ 648331](https://bugzil.la/648331))。
- {{cssxref(":in-range")}} および {{cssxref(":out-of-range")}} 擬似クラスが、無効状態または読み取り専用の input に一致しないように動作を変更しました ([Firefox バグ 1264157](https://bugzil.la/1264157))。
- {{cssxref(":any-link")}} 擬似クラスの接頭辞を削除しました ([Firefox バグ 843579](https://bugzil.la/843579))。
- {{cssxref("border-image-repeat")}} で、値 `space` を実装しました ([Firefox バグ 720531](https://bugzil.la/720531))。

### JavaScript

- ES2015 の {{jsxref("Symbol.hasInstance")}} プロパティを実装しました ([Firefox バグ 1054906](https://bugzil.la/1054906))。
- ES2017 の {{jsxref("Object.getOwnPropertyDescriptors()")}} メソッドを実装しました ([Firefox バグ 1245024](https://bugzil.la/1245024))。
- Unicode および ignoreCase フラグを使用する {{jsxref("RegExp")}} の、\W の動作を最新の仕様草案に合わせて変更しました。K、S、k、s、KELVIN SIGN (U+212A)、LATIN SMALL LETTER LONG S (U+017F) に一致しないようになりました ([Firefox バグ 1281739](https://bugzil.la/1281739))。

### 開発者ツール

- [ウェブコンソールがソースマップを理解するようになりました。](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#source-maps)
- [ストレージインスペクターで、IndexedDB のオブジェクトストアから個々のアイテムを削除できるようになりました。](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb)
- [メモリーツールをデフォルトで有効化しました。](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [ボックスモデルビューを計算済みビューに移動しました。](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#computed-view)
- [ウェブコンソールで、XHR や Fetch() によるネットワークリクエストのスタックトレースを表示します。](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details)

[Firefox 49 から Firefox 50 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263766&chfield=resolution&chfieldfrom=2016-06-06&chfieldvalue=FIXED&resolution=FIXED&classification=Client%20Software&chfieldto=2016-08-01&query_format=advanced&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### HTTP

- 実験的 (および非推奨) な [SPDY](https://en.wikipedia.org/wiki/SPDY) 3.1 をデフォルトで無効にしました ([Firefox バグ 1287132](https://bugzil.la/1287132))。
- {{HTTPHeader("X-Content-Type-Options")}} をサポートしました ([Firefox バグ 471020](https://bugzil.la/471020))。
- cookie の `__Host-` および `__Secure-` 接頭辞を実装しました。{{HTTPHeader("Set-Cookie")}} および [Firefox バグ 1283368](https://bugzil.la/1283368) をご覧ください。
- {{HTTPHeader("Referrer-Policy")}} ヘッダーを実装しました ([Firefox バグ 1264164](https://bugzil.la/1264164))。

### セキュリティ

- {{htmlelement("a")}} 要素の [`ping`](/ja/docs/Web/HTML/Reference/Elements/a#ping) 属性が、[`connect-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) [CSP 1.1 ポリシーディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)に従うようになりました ([Firefox バグ 1100181](https://bugzil.la/1100181))。
- [`sandbox`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) [CSP](/ja/docs/Web/HTTP/Guides/CSP) ディレクティブをサポートしました ([Firefox バグ 671389](https://bugzil.la/671389))。
- [ワーカーにコンテンツセキュリティポリシーを設定する](/ja/docs/Web/API/Web_Workers_API/Using_web_workers#コンテンツセキュリティポリシー) ことが可能になりました ([Firefox バグ 959388](https://bugzil.la/959388))。
- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP) の制限によりビーコンデータを送信できなかったとき、{{domxref("Navigator.sendBeacon()")}} メソッドで例外が発生しないようになりました。代わりに、想定どおり `false` を返します ([Firefox バグ 1234813](https://bugzil.la/1234813))。
- RC4 暗号のサポートは Firefox 36 から非推奨にしており、Firefox 44 では既定で無効にしました。1 年間の猶予期間が終了しましたので、Firefox 50 で RC4 のサポートを全面的に廃止しました (Google Chrome は 2016 年 8 月に RC4 のサポートを廃止しました)。今後、Firefox は RC4 暗号に出くわすと常に `SSL_ERROR_NO_CYPHER_OVERLAP` エラーが発生します。

### ネットワーク

- 非同期 {{domxref("XMLHttpRequest")}} でエラーが発生したとき、{{domxref("XMLHttpRequest.getAllResponseHeaders()")}} メソッドが空文字列を返すようになりました ([Firefox バグ 1286744](https://bugzil.la/1286744))。
- CORS または他のネットワークの制約により失敗した非同期 {{domxref("XMLHttpRequest")}} は `NetworkError` を返すのではなく、他のエラーと同様にキャッチ可能な {{domxref("XMLHttpRequestEventTarget/error_event", "error")}} が発生するようになりました ([Firefox バグ 709991](https://bugzil.la/709991))。
- {{domxref("XMLHttpRequest.getResponseHeader()")}} および {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} が、デフォルトで空のヘッダーを返すようになりました。これは設定項目 `network.http.keep_empty_response_headers_as_empty_string` で制御しています ([Firefox バグ 918721](https://bugzil.la/918721))。
- [`Request.cache`](/ja/docs/Web/API/Request/cache) に `only-if-cached` オプションを追加しました ([Firefox バグ 1272436](https://bugzil.la/1272436))。

### DOM

- {{domxref("EventTarget.addEventListener()")}} の `once` オプションをサポートしました ([Firefox バグ 1287706](https://bugzil.la/1287706))。
- {{domxref("NodeList")}} インターフェイスがイテレート可能になり、{{domxref("NodeList.forEach()", "forEach()")}}、{{domxref("NodeList.values()", "values()")}}、{{domxref("NodeList.entries()")}}、{{domxref("NodeList.keys()")}} の各メソッドが使用可能になりました ([Firefox バグ 1290636](https://bugzil.la/1290636))。
- {{domxref("DOMTokenList")}} インターフェイスがイテレート可能になり、{{domxref("DOMTokenList.forEach()", "forEach()")}}、{{domxref("DOMTokenList.values()", "values()")}}、{{domxref("DOMTokenList.entries()")}}、{{domxref("DOMTokenList.keys()")}} の各メソッドが使用可能になりました ([Firefox バグ 1290636](https://bugzil.la/1290636))。
- {{domxref("Document.createElement()")}} および {{domxref("Document.createElementNS()")}} メソッドで、[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)を作成するための省略可能な引数 `options` を追加しました ([Firefox バグ 1276579](https://bugzil.la/1276579))。

### SVG

- `allowReorder` 属性を廃止して、この属性に設定されていた動作を SVG {{SVGElement("switch")}} 要素の既定の動作にしました ([Firefox バグ 1279690](https://bugzil.la/1279690))。
- 最新の SVG2 仕様に従って、SVG {{SVGElement("image")}} 要素の {{SVGAttr("preserveAspectRatio")}} 属性のキーワード `defer` を削除しました ([Firefox バグ 1280425](https://bugzil.la/1280425))。

### ドラッグ & ドロップ API

- HTML ドラッグ & ドロップ API を使用してドラッグアンドドロップしている複数のアイテムにアクセスできる、{{domxref("DataTransfer.items")}} プロパティを実装しました。これを可能にするため、{{domxref("DataTransferItem")}} および {{domxref("DataTransferItemList")}} インターフェイスもサポートしました([Firefox バグ 906420](https://bugzil.la/906420))。これはデフォルトで有効です。
- 古く廃止済みである、Firefox 固有のドラッグ & ドロップ API イベント `dragdrop` および `draggesture` のサポートを廃止しました。これらを使用し続けているコードは、 [HTML ドラッグ & ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) を使用するように更新してください（[Firefox バグ 1162050](https://bugzil.la/1162050)）。

### ポインターロック API

- [ポインターロック API](/ja/docs/Web/API/Pointer_Lock_API) の接頭辞を削除しました ([Firefox バグ 991899](https://bugzil.la/991899))。
- Firefox 50 より前のバージョンではドアハンガーを使用して [`requestPointerLock()`](/ja/docs/Web/API/Element/requestPointerLock) を許可するかを問い合わせており、ユーザーが許可するまでポインターロックを有効化しませんでした。Firefox 50 より、ポインターロックは [全画面 API](/ja/docs/Web/API/Fullscreen_API) と同様に即座に許可されますが、終了方法をユーザーに説明する通知を表示します ([Firefox バグ 1273351](https://bugzil.la/1273351))。

### IndexedDB

- {{domxref("IDBDatabase/close_event", "close")}} イベントが、 {{domxref("IDBDatabase")}} オブジェクトで対応するデータベースが意図せず閉じられたときに、送信されるようになりました ([Firefox バグ 1151017](https://bugzil.la/1151017))。

### Service Workers

- {{domxref("WindowClient.navigate()")}} メソッドを実装しました。このメソッドで、Service Worker で制御されているクライアントウィンドウに、指定した URL を開くことができます ([Firefox バグ 1218148](https://bugzil.la/1218148))。

### WebGL

- {{domxref("EXT_shader_texture_lod")}} WebGL 拡張を実装しました ([Firefox バグ 1111689](https://bugzil.la/1111689))。
- PBO (`PIXEL_UNPACK_BUFFER`) を実装するため、[WebGL 2](/ja/docs/Web/API/WebGL2RenderingContext) 向けに texImage 関係のメソッドを更新しました ([Firefox バグ 1280499](https://bugzil.la/1280499))。

### WebRTC

- {{domxref("MediaStream")}} にトラックを追加すると、仕様書で示されているように {{domxref("MediaStream/addtrack_event", "addtrack")}} イベントが発生するようになりました。このイベントは {{domxref("MediaStreamTrackEvent")}} タイプであり、トラックが追加されたストリームで発生します。`"addtrack"` イベントを扱うために、{{domxref("EventTarget.addEventListener", "MediaStream.addEventListener('addtrack', ...)")}} または `onaddtrack` プロパティを使用できます。
- {{domxref("MediaStreamTrack")}} インターフェイスが、 {{domxref("MediaStreamTrack.ended_event", "ended")}} イベントおよびそのイベントハンドラーをサポートしました。
- Firefox で {{domxref("MediaStreamTrack.readyState")}} プロパティをサポートしました。これは、トラックが生存中であるか永久に終了した状態であるかを示します。
- {{domxref("MediaStreamTrack")}} の {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} および {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} メソッドを実装しました。それぞれ、カスタマイズしたプロパティ制約で直近に適用された値のセットを取得する、およびトラックで制限可能なすべてのプロパティの実際の値を取得するメソッドです。付随するデータ型もドキュメントに記載しています。
- `RTCDataChannel.stream` プロパティを削除しました。これは [Firefox 24](/ja/docs/Mozilla/Firefox/Releases/24) で {{domxref("RTCDataChannel.id")}} に置き換えられましたが、後方互換性のためにサポートしていました。まだ `id` プロパティを使用するようにコードを更新していない場合は、必ず更新してください。

### ウェブオーディオ API

- {{domxref("PannerNode")}} インターフェイスで、オーディオソースの位置 ({{domxref("PannerNode.positionX")}}、{{domxref("PannerNode.positionY")}}、{{domxref("PannerNode.positionZ")}}) や方向性 ({{domxref("PannerNode.orientationX")}}、{{domxref("PannerNode.orientationY")}}、{{domxref("PannerNode.orientationZ")}}) に関する 3D 直交座標系のプロパティをサポートしました。
- 一般的な [無限インパルス応答](https://ja.wikipedia.org/wiki/無限インパルス応答) (IIR) フィルターを生成する、{{domxref("IIRFilterNode")}} インターフェイスを実装しました。
- {{domxref("Window.setInterval()")}}、{{domxref("WorkerGlobalScope.setInterval()")}}、{{domxref("Window.setTimeout()")}}、{{domxref("WorkerGlobalScope.setTimeout()")}} で作成したタイマーをバッググラウンドのタブで抑制する機能は、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の {{domxref("AudioContext")}} がアクティブで音声を再生しているときに実施しないようになりました。これは、タイミングに敏感な音声再生 (タイマーを使用して個々の音を生成する音楽プレイヤーなど) をバックグラウンドで行う際の問題を避ける助けになります ([Firefox バグ 1181073](https://bugzil.la/1181073))。

### Audio/Video

- `AlignSetting` 列挙型 ({{domxref("VTTCue.align")}} で使用可能な値を表す) が以前、誤って `"center"` ではなく `"middle"` を含んでいました。この問題を修正しました ([Firefox バグ 1276130](https://bugzil.la/1276130))。
- 非標準かつ実験的な {{domxref("HTMLMediaElement.seekToNextFrame()")}} メソッドが、メディア内の次のフレームを同期的ではなく非同期的にシークするようになりました。また、シークが完了すると fulfill になる {{jsxref("Promise")}} を返します。
- {{domxref("HTMLTrackElement")}} の実装を、ドキュメント内にない場合でも {{HTMLElement("track")}} 要素がリソースを読み込めるように修正しました ([Firefox バグ 871747](https://bugzil.la/871747))。

### バッテリー API

- Firefox 43 から非推奨にしていた `Navigator.battery` プロパティを廃止および削除しました。代わりに、バッテリーの {{jsxref("Promise")}} を取得する {{domxref("navigator.getBattery()")}} メソッドを使用してください。これは {{domxref("BatteryManager")}} が使用可能になったときに完了します。{{domxref("BatteryManager")}} は、promise が成功した場合のハンドラーに渡されます ([Firefox バグ 12593355](https://bugzil.la/12593355))。

### ファイルとディレクトリー

- 以前は Google Chrome との互換性しか有していなかったサイトとの互換性を向上するため、[ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API) のサブセットを実装しました ([Firefox バグ 1265767](https://bugzil.la/1265767))。
  - 非同期 API インターフェイスを実装しましたが、ファイルの読み取りしかサポートしませんので注意してください。例えば {{domxref("FileSystemFileEntry.createWriter()")}} メソッドは何も行いません。
  - 以下のインターフェイスを実装しました:
    - {{domxref("FileSystem")}}
    - {{domxref("FileSystemEntry")}} (プロパティのみ。メソッドは未実装)
    - {{domxref("FileSystemFileEntry")}} ({{domxref("FileSystemFileEntry.createWriter", "createWriter()")}} を除く)
    - {{domxref("FileSystemDirectoryEntry")}} ({{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}} を除く)
    - {{domxref("FileSystemDirectoryReader")}}

  - {{HTMLElement("input")}} 要素の [`webkitdirectory`](/ja/docs/Web/HTML/Reference/Elements/input#webkitdirectory) 属性および {{domxref("HTMLInputElement.webkitdirectory")}} を実装しました。ファイルではなくディレクトリーを受け入れるように、file 型の input を設定できます ([Firefox バグ 1258489](https://bugzil.la/1258489))。
  - {{domxref("HTMLInputElement.webkitEntries")}} を実装しました。これは、選択されたアイテムを表す {{domxref("FileSystemEntry")}} ベースのオブジェクトの配列を返します。
  - {{domxref("File.webkitRelativePath")}} を実装しました。これは、{{domxref("HTMLInputElement.webkitEntries")}} が返すリスト内のアイテムのひとつである {{domxref("FileSystemDirectoryEntry")}} に含まれているルートに対して相対的な、ファイルのパスを持ちます。
  - これらの API はデフォルトで有効です。一部の API は以前から使用できましたが、設定で無効化されていました ([Firefox バグ 1288683](https://bugzil.la/1288683))。

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API) の一部として、{{domxref("DataTransferItem.webkitGetAsEntry()")}} を実装しました。これは、ドロップされたファイルを表す {{domxref("FileSystemEntry")}} を取得できます ([Firefox バグ 1289255](https://bugzil.la/1289255))。これはデフォルトで有効です。
- [ディレクトリーアップロード API](https://wicg.github.io/directory-upload/proposal.html) 提案の一部である `HTMLInputElement.directory` プロパティを `allowdirs` に改名しました ([Firefox バグ 1288681](https://bugzil.la/1288681))。このプロパティは設定で無効化しています。
