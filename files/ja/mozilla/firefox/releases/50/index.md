---
title: Firefox 50 for developers
slug: Mozilla/Firefox/Releases/50
tags:
  - Firefox
  - Release Notes
translation_of: Mozilla/Firefox/Releases/50
---
<p>Firefox 50 は、米国時間 2016 年 11 月 15 日にリリースされました。このページでは、開発者に影響する Firefox 50 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">ウェブ開発者向けの変更点一覧</h2>

<ul>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{HTMLElement("bdo")}} のデフォルトスタイルで、{{cssxref("unicode-bidi")}} の値が <code>isolate-override</code> になりました ({{bug(1249497)}})。</li>
 <li>{{HTMLElement("track")}} 要素の {{htmlattrxref("src", "track")}} 属性の設定が正しく動作するようになりました ({{bug(1281418)}})。</li>
 <li>{{HTMLElement("area")}}、{{HTMLElement("a")}}、{{HTMLElement("img")}}、{{HTMLElement("iframe")}}、{{HTMLElement("link")}} 要素の <code>referrerpolicy</code> 属性を、デフォルトで有効化しました ({{bug(1223838)}}、{{bug(1264165)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>dashed および dotted スタイルのボーダーに border-radius を設定したとき、角の部分を solid スタイルではなく指定したスタイルで描画するようになりました ({{bug(382721)}})。</li>
 <li>非標準の {{cssxref(":-moz-full-screen-ancestor")}} 疑似クラスセレクターを削除しました ({{bug(1199529)}})。</li>
 <li>仕様書から削除されたため、および実装していた主要ブラウザーが Firefox だけであったため、{{cssxref("box-sizing")}}<code>: padding-box</code> を削除しました ({{bug(1166728)}})。</li>
 <li>{{cssxref("unicode-bidi")}} プロパティの値 <code>isolate</code>、<code>isolate-override</code>、<code>plaintext</code> の接頭辞を削除しました ({{bug(1141895)}})。</li>
 <li>Quirk モードでリストのビュレットが、標準準拠モードと同様にリストのサイズを継承するようになりました ({{bug(648331)}})。</li>
 <li>{{cssxref(":in-range")}} および {{cssxref(":out-of-range")}} 疑似クラスが、無効状態または読み取り専用の input にマッチしないように動作を変更しました ({{bug(1264157)}})。</li>
 <li>{{cssxref(":any-link")}} 疑似クラスの接頭辞を削除しました ({{bug(843579)}})。</li>
 <li>{{cssxref("border-image-repeat")}} で、値 <code>space</code> を実装しました ({{bug(720531)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>ES2015 の {{jsxref("Symbol.hasInstance")}} プロパティを実装しました ({{bug(1054906)}})。</li>
 <li>ES2017 の {{jsxref("Object.getOwnPropertyDescriptors()")}} メソッドを実装しました ({{bug(1245024)}})。</li>
 <li>Unicode および ignoreCase フラグを使用する {{jsxref("RegExp")}} の、\W の動作を最新の仕様草案に合わせて変更しました。K、S、k、s、KELVIN SIGN (U+212A)、LATIN SMALL LETTER LONG S (U+017F) にマッチしないようになりました ({{bug(1281739)}})。</li>
</ul>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Web_Console/Console_messages#Source_maps">ウェブコンソールがソースマップを理解するようになりました。</a></li>
 <li><a href="/ja/docs/Tools/Storage_Inspector#IndexedDB">ストレージインスペクターで、IndexedDB のオブジェクトストアから個々のアイテムを削除できるようになりました。</a></li>
 <li><a href="/ja/docs/Tools/Memory">メモリーツールをデフォルトで有効化しました。</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/UI_Tour#Computed_view">ボックスモデルビューを計算済みビューに移動しました。</a></li>
 <li><a href="/ja/docs/Tools/Web_Console/Console_messages#Viewing_network_request_details">ウェブコンソールで、XHR や Fetch() によるネットワークリクエストのスタックトレースを表示します。</a></li>
</ul>

<p><a class="external external-icon" href="https://bugzilla.mozilla.org/buglist.cgi?list_id=13263766&amp;chfield=resolution&amp;chfieldfrom=2016-06-06&amp;chfieldvalue=FIXED&amp;resolution=FIXED&amp;classification=Client%20Software&amp;chfieldto=2016-08-01&amp;query_format=advanced&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;component=Developer%20Tools&amp;component=Developer%20Tools%3A%20about%3Adebugging&amp;component=Developer%20Tools%3A%20Animation%20Inspector&amp;component=Developer%20Tools%3A%20Canvas%20Debugger&amp;component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&amp;component=Developer%20Tools%3A%20Console&amp;component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&amp;component=Developer%20Tools%3A%20Debugger&amp;component=Developer%20Tools%3A%20DOM&amp;component=Developer%20Tools%3A%20Font%20Inspector&amp;component=Developer%20Tools%3A%20Framework&amp;component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&amp;component=Developer%20Tools%3A%20Inspector&amp;component=Developer%20Tools%3A%20JSON%20Viewer&amp;component=Developer%20Tools%3A%20Memory&amp;component=Developer%20Tools%3A%20Netmonitor&amp;component=Developer%20Tools%3A%20Object%20Inspector&amp;component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&amp;component=Developer%20Tools%3A%20Responsive%20Design%20Mode&amp;component=Developer%20Tools%3A%20Scratchpad&amp;component=Developer%20Tools%3A%20Shared%20Components&amp;component=Developer%20Tools%3A%20Source%20Editor&amp;component=Developer%20Tools%3A%20Storage%20Inspector&amp;component=Developer%20Tools%3A%20Style%20Editor&amp;component=Developer%20Tools%3A%20User%20Stories&amp;component=Developer%20Tools%3A%20Web%20Audio%20Editor&amp;component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&amp;component=Developer%20Tools%3A%20WebIDE&amp;product=Firefox">Firefox 49 から Firefox 50 の間に解決した開発ツール関連のバグ一覧</a></p>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
 <li>実験的 (および非推奨) な <a href="https://en.wikipedia.org/wiki/SPDY">SPDY</a> 3.1 をデフォルトで無効にしました ({{bug(1287132)}})。</li>
 <li>{{HTTPHeader("X-Content-Type-Options")}} をサポートしました ({{bug(471020)}})。</li>
 <li>cookie の <strong><code>__Host-</code></strong> および <strong><code>__Secure-</code></strong> 接頭辞を実装しました。{{HTTPHeader("Set-Cookie")}} および {{bug(1283368)}} をご覧ください。</li>
 <li>{{HTTPHeader("Referrer-Policy")}} ヘッダーを実装しました ({{bug(1264164)}})。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li>{{htmlelement("a")}} 要素の {{htmlattrxref("ping", "a")}} 属性が、<code><a href="/ja/docs/Web/Security/CSP/CSP_policy_directives#connect-src">connect-src</a></code> <a href="/ja/docs/Web/Security/CSP/CSP_policy_directives">CSP 1.1 ポリシーディレクティブ</a> に従うようになりました ({{bug(1100181)}})。</li>
 <li><code><a href="/ja/docs/Web/Security/CSP/CSP_policy_directives#sandbox">sandbox</a></code> <a href="/ja/docs/Web/Security/CSP">CSP</a> ディレクティブをサポートしました ({{bug(671389)}})。</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers#Content_security_policy">workers に content security policy を設定する</a> ことが可能になりました ({{bug (959388)}})。</li>
 <li><a href="/ja/docs/Web/Security/CSP">Content Security Policy</a> の制限によりビーコンデータを送信できなかったとき、{{domxref("Navigator.sendBeacon()")}} メソッドで例外が発生しないようになりました。代わりに、想定どおり <code>false</code> を返します ({{bug(1234813)}})。</li>
 <li>RC4 暗号のサポートは Firefox 36 から非推奨にしており、Firefox 44 では既定で無効にしました。1 年間の猶予期間が終了しましたので、Firefox 50 で RC4 のサポートを全面的に廃止しました (Google Chrome は 2016 年 8 月に RC4 のサポートを廃止しました)。今後、Firefox は RC4 暗号に出くわすと常に <code>SSL_ERROR_NO_CYPHER_OVERLAP</code> エラーが発生します。</li>
</ul>

<h3 id="Networking" name="Networking">ネットワーク</h3>

<ul>
 <li>非同期 {{domxref("XMLHttpRequest")}} でエラーが発生したとき、{{domxref("XMLHttpRequest.getAllResponseHeaders()")}} メソッドが空文字列を返すようになりました ({{bug(1286744)}})。</li>
 <li>CORS または他のネットワークの制約により失敗した非同期 {{domxref("XMLHttpRequest")}} は <code>NetworkError</code> を返すのではなく、他のエラーと同様にキャッチ可能な {{event("error")}} が発生するようになりました ({{bug(709991)}})。</li>
 <li>{{domxref("XMLHttpRequest.getResponseHeader()")}} および {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} が、デフォルトで空のヘッダーを返すようになりました。これは設定項目 <code>network.http.keep_empty_response_headers_as_empty_string</code> で制御しています ({{bug(918721)}})。</li>
 <li><code><a href="/ja/docs/Web/API/Request/cache">Request.cache</a></code> に <code>only-if-cached</code> オプションを追加しました ({{bug(1272436)}})。</li>
</ul>

<h3 id="DOM" name="DOM">DOM</h3>

<ul>
 <li>{{domxref("EventTarget.addEventListener()")}} の <code>once</code> オプションをサポートしました ({{bug(1287706)}})。</li>
 <li>{{domxref("NodeList")}} インターフェイスがイテレート可能になり、{{domxref("NodeList.forEach()", "forEach()")}}、{{domxref("NodeList.values()", "values()")}}、{{domxref("NodeList.entries()")}}、{{domxref("NodeList.keys()")}} の各メソッドが使用可能になりました ({{bug(1290636)}})。</li>
 <li>{{domxref("DOMTokenList")}} インターフェイスがイテレート可能になり、{{domxref("DOMTokenList.forEach()", "forEach()")}}、{{domxref("DOMTokenList.values()", "values()")}}、{{domxref("DOMTokenList.entries()")}}、{{domxref("DOMTokenList.keys()")}} の各メソッドが使用可能になりました ({{bug(1290636)}})。</li>
 <li>{{domxref("Document.createElement()")}} および {{domxref("Document.createElementNS()")}} メソッドで、<a href="/ja/docs/Web/Web_Components/Custom_Elements">custom elements</a> を作成するための省略可能な引数 <code>options</code> を追加しました ({{bug(1276579)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<ul>
 <li><code>allowReorder</code> 属性を廃止して、この属性に設定されていた動作を SVG {{SVGElement("switch")}} 要素の既定の動作にしました ({{bug(1279690)}})。</li>
 <li>最新の SVG2 仕様に従って、SVG {{SVGElement("image")}} 要素の {{SVGAttr("preserveAspectRatio")}} 属性のキーワード <code>defer</code> を削除しました ({{bug(1280425)}})。</li>
</ul>

<h3 id="Drag_and_Drop_API" name="Drag_and_Drop_API">Drag and Drop API</h3>

<ul>
 <li>HTML Drag and Drop API を使用してドラッグアンドドロップしている複数のアイテムにアクセスできる、{{domxref("DataTransfer.items")}} プロパティを実装しました。これを可能にするため、{{domxref("DataTransferItem")}} および {{domxref("DataTransferItemList")}} インターフェイスもサポートしました({{bug(906420)}})。これはデフォルトで有効です。</li>
 <li>古く廃止済みである、Firefox 固有の drag and drop API イベント <code>dragdrop</code> および <code>draggesture</code> のサポートを廃止しました。これらを使用し続けているコードは、 <a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API">HTML drag and drop API</a> を使用するように更新してください ({{bug(1162050)}}。</li>
</ul>

<h3 id="Pointer_Lock_API" name="Pointer_Lock_API">Pointer Lock API</h3>

<ul>
 <li><a href="/ja/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a> の接頭辞を削除しました ({{bug(991899)}})。</li>
 <li>Firefox 50 より前のバージョンではドアハンガーを使用して <code><a href="/ja/docs/Web/API/Element/requestPointerLock">requestPointerLock()</a></code> を許可するかを問い合わせており、ユーザーが許可するまで pointer lock を有効化しませんでした。Firefox 50 より、pointer lock は <a href="/ja/docs/Web/API/Fullscreen_API">fullscreen API</a> と同様に即座に許可されますが、終了方法をユーザーに説明する通知を表示します ({{bug(1273351)}})。</li>
</ul>

<h3 id="IndexedDB" name="IndexedDB">IndexedDB</h3>

<ul>
 <li>{{domxref("IDBDatabase")}} オブジェクトで対応するデータベースが意図せず閉じられたときに、{{event("close")}} イベントが送信されるようになりました ({{bug(1151017)}})。</li>
</ul>

<h3 id="Service_Workers" name="Service_Workers">Service Workers</h3>

<ul>
 <li>{{domxref("WindowClient.navigate()")}} メソッドを実装しました。このメソッドで、Service Worker で制御されているクライアントウィンドウに、指定した URL を開くことができます ({{bug(1218148)}})。</li>
</ul>

<h3 id="WebGL" name="WebGL">WebGL</h3>

<ul>
 <li>{{domxref("EXT_shader_texture_lod")}} WebGL 拡張を実装しました ({{bug(1111689)}})。</li>
 <li>PBO (<code>PIXEL_UNPACK_BUFFER</code>) を実装するため、<a href="/ja/docs/Web/API/WebGL2RenderingContext">WebGL 2</a> 向けに texImage 関係のメソッドを更新しました ({{bug(1280499)}})。</li>
</ul>

<h3 id="WebRTC" name="WebRTC">WebRTC</h3>

<ul>
 <li>{{domxref("MediaStream")}} にトラックを追加すると、仕様書で示されているように {{event("addtrack")}} イベントが発生するようになりました。このイベントは {{domxref("MediaStreamTrackEvent")}} タイプであり、トラックが追加されたストリームで発生します。<code>"addtrack"</code> イベントを扱うために、{{domxref("EventTarget.addEventListener", "MediaStream.addEventListener('addtrack', ...)")}} または {{domxref("MediaStream.onaddtrack")}} プロパティを使用できます。</li>
 <li>{{domxref("MediaStreamTrack")}} インターフェイスが、{{event("ended")}} イベントおよび {{domxref("MediaStreamTrack.onended")}} イベントハンドラをサポートしました。</li>
 <li>Firefox で {{domxref("MediaStreamTrack.readyState")}} プロパティをサポートしました。これは、トラックが生存中であるか永久に終了した状態であるかを示します。</li>
 <li>{{domxref("MediaStreamTrack")}} の {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} および {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} メソッドを実装しました。それぞれ、カスタマイズしたプロパティ制約で直近に適用された値のセットを取得する、およびトラックで制限可能なすべてのプロパティの実際の値を取得するメソッドです。付随するデータ型もドキュメントに記載しています。</li>
 <li>{{domxref("RTCDataChannel.stream")}} プロパティを削除しました。これは <a href="/ja/docs/Mozilla/Firefox/Releases/24">Firefox 24</a> で {{domxref("RTCDataChannel.id")}} に置き換えられましたが、後方互換性のためにサポートしていました。まだ <code>id</code> プロパティを使用するようにコードを更新していない場合は、必ず更新してください。</li>
</ul>

<h3 id="Web_Audio_API" name="Web_Audio_API">Web Audio API</h3>

<ul>
 <li>{{domxref("PannerNode")}} インターフェイスで、オーディオソースの位置 ({{domxref("PannerNode.positionX")}}、{{domxref("PannerNode.positionY")}}、{{domxref("PannerNode.positionZ")}}) や方向性 ({{domxref("PannerNode.orientationX")}}、{{domxref("PannerNode.orientationY")}}、{{domxref("PannerNode.orientationZ")}}) に関する 3D 直交座標系のプロパティをサポートしました。</li>
 <li>一般的な {{interwiki("wikipedia", "無限インパルス応答")}} (IIR) フィルターを生成する、{{domxref("IIRFilterNode")}} インターフェイスを実装しました。</li>
 <li>{{domxref("WindowTimers.setInterval", "Window.setInterval()")}} および {{domxref("WindowTimers.setTimeout", "Window.setTimeout()")}} で作成したタイマーをバッググラウンドのタブで抑制する機能は、<a href="/ja/docs/Web/API/Web_Audio_API">Web Audio API</a> の {{domxref("AudioContext")}} がアクティブで音声を再生しているときに実施しないようになりました。これは、タイミングに敏感な音声再生 (タイマーを使用して個々の音を生成する音楽プレイヤーなど) をバックグラウンドで行う際の問題を避ける助けになります ({{bug(1181073)}})。</li>
</ul>

<h3 id="AudioVideo" name="AudioVideo">Audio/Video</h3>

<ul>
 <li><code>AlignSetting</code> 列挙型 ({{domxref("VTTCue.align")}} で使用可能な値を表す) が以前、誤って <code>"center"</code> ではなく <code>"middle"</code> を含んでいました。この問題を修正しました ({{bug(1276130)}})。</li>
 <li>非標準かつ実験的な {{domxref("HTMLMediaElement.seekToNextFrame()")}} メソッドが、メディア内の次のフレームを同期的ではなく非同期的にシークするようになりました。また、シークが完了すると fullfill になる {{jsxref("Promise")}} を返します。</li>
 <li>{{domxref("HTMLTrackElement")}} の実装を、ドキュメント内にない場合でも {{HTMLElement("track")}} 要素がリソースを読み込めるように修正しました ({{bug(871747)}})。</li>
</ul>

<h3 id="Battery_API" name="Battery_API">Battery API</h3>

<ul>
 <li>Firefox 43 から非推奨にしていた {{domxref("navigator.battery")}} プロパティを廃止および削除しました。代わりに、バッテリーの {{jsxref("Promise")}} を取得する {{domxref("navigator.getBattery()")}} メソッドを使用してください。これは {{domxref("BatteryManager")}} が使用可能になったときに完了します。{{domxref("BatteryManager")}} は、promise が成功した場合のハンドラに渡されます ({{bug(12593355)}})。</li>
</ul>

<h3 id="Files_and_directories" name="Files_and_directories">ファイルとディレクトリー</h3>

<ul>
 <li>以前は Google Chrome との互換性しか有していなかったサイトとの互換性を向上するため、<a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a> のサブセットを実装しました ({{bug(1265767)}})。

  <ul>
   <li>非同期 API インターフェイスを実装しましたが、ファイルの読み取りしかサポートしませんので注意してください。例えば {{domxref("FileSystemFileEntry.createWriter()")}} メソッドは何も行いません。</li>
   <li>以下のインターフェイスを実装しました:
    <ul>
     <li>{{domxref("FileSystem")}}</li>
     <li>{{domxref("FileSystemEntry")}} (プロパティのみ。メソッドは未実装)</li>
     <li>{{domxref("FileSystemFileEntry")}} ({{domxref("FileSystemFileEntry.createWriter", "createWriter()")}} を除く)</li>
     <li>{{domxref("FileSystemDirectoryEntry")}} ({{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}} を除く)</li>
     <li>{{domxref("FileSystemDirectoryReader")}}</li>
    </ul>
   </li>
   <li>{{HTMLElement("input")}} 要素の {{HTMLattrxref("webkitdirectory", "input")}} 属性および {{domxref("HTMLInputElement.webkitdirectory")}} を実装しました。ファイルではなくディレクトリーを受け入れるように、file 型の input を設定できます ({{bug(1258489)}})。</li>
   <li>{{domxref("HTMLInputElement.webkitEntries")}} を実装しました。これは、選択されたアイテムを表す {{domxref("FileSystemEntry")}} ベースのオブジェクトの配列を返します。</li>
   <li>{{domxref("File.webkitRelativePath")}} を実装しました。これは、{{domxref("HTMLInputElement.webkitGetEntries()")}} が返すリスト内のアイテムのひとつである {{domxref("FileSystemDirectoryEntry")}} に含まれているルートに対して相対的な、ファイルのパスを持ちます。</li>
   <li>この API で何をサポートしているかについて、詳しくは <a href="/ja/docs/Web/API/File_and_Directory_Entries_API/Firefox_support">File and Directory Entries API support in Firefox</a> をご覧ください。</li>
   <li>これらの API はデフォルトで有効です。一部の API は以前から使用できましたが、設定で無効化されていました ({{bug(1288683)}})。</li>
  </ul>
 </li>
 <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a> の一部として、{{domxref("DataTransferItem.webkitGetAsEntry()")}} を実装しました。これは、ドロップされたファイルを表す {{domxref("FileSystemEntry")}} を取得できます ({{bug(1289255)}})。これはデフォルトで有効です。</li>
 <li><a href="https://wicg.github.io/directory-upload/proposal.html">Directory Upload API</a> 提案の一部である <code>HTMLInputElement.directory</code> プロパティを <code>allowdirs</code> に改名しました ({{bug(1288681)}})。このプロパティは設定で無効化しています。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.jp/firefox/50.0/releasenotes/">Firefox 50.0 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2016/09/firefox-50-addon-compatibility/">Firefox 50 アドオン互換性情報</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(49)}}</p>
