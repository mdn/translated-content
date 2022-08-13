---
title: Firefox 13 for developers
slug: Mozilla/Firefox/Releases/13
translation_of: Mozilla/Firefox/Releases/13
---
<p>Firefox 13 は 米国時間 2012 年 6 月 5 日にリリースされました。この記事は開発者に影響がある Firefox 13 での変更点をまとめています。</p>

<h2 id="Web_開発者向けの変更点一覧">Web 開発者向けの変更点一覧</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>テーブルの {{ htmlattrxref("cellspacing", "table") }} 属性は、Quirks モード以外でも Quirks モードと同様に解析するようになりました。これは値をパーセント値で指定した場合に、仕様書で実際はパーセント値が認められていないため代わりにピクセル数として扱うものです。</li>
 <li>{{ htmlelement("wbr") }} 要素の双方向テキストに関する動作を修正しました。Unicode の <code>U+200B</code><code> ZERO-WIDTH SPACE</code> 文字と同様の動作になり、従って親要素の双方向性に影響を与えません。</li>
 <li>{{ Cssxref(":invalid") }} 疑似クラスを {{ htmlelement("form") }} 要素へ適用できるようになりました。</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>{{ cssxref("&lt;angle&gt;") }} の単位 <code>turn</code> をサポートしました (<code>rotate()</code> などの CSS 関数で用います)。</li>
 <li>{{ cssxref("background-position") }} で値を 3 - 4 個置く構文をサポートしました。"<code>right 10px bottom 20px</code>" といった表記で、背景画像を任意の角からずらすことができます。{{ bug("522607") }} をご覧ください。</li>
 <li>{{ cssxref("background-repeat") }} で値を 2 個置く構文をサポートしました。</li>
 <li>{{ cssxref("border-radius","-moz-border-radius*") }} および {{ cssxref("box-shadow","-moz-box-shadow") }} のサポートを削除しました。代わりに著作者は接頭辞のない <code>border-radius</code> または <code>box-shadow</code> を使用してください。{{ bug("693510") }} をご覧ください。</li>
 <li>{{ cssxref("column-fill") }} プロパティが実装されました。（接頭辞付き）</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>ECMAScript 6 の <a href="/ja/JavaScript/Reference/Statements/for...of" title="for...of"><code>for..of</code></a> 構造をサポートしました。</li>
 <li>ECMAScript 6 の <a href="/ja/JavaScript/Reference/Global_Objects/Map" title="en/JavaScript/Reference/Global_Objects/Map"><code>Map</code></a> と <a href="/ja/JavaScript/Reference/Global_Objects/Set" title="en/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a> オブジェクトの実験的サポートを実装しました。</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>DOM4 の規定により、{{ domxref("Node.cloneNode()") }} メソッドの引数 <code>deep</code> は省略可能になりました。</li>
 <li>{{ domxref("window.setTimeout()") }} および {{ domxref("window.setInterval()") }} メソッドは、付加的な引数である "遅延" をコールバックルーチンに渡さないようになりました。</li>
 <li>{{ domxref("Blob","Blob.mozSlice()") }} メソッドの接頭辞を削除しました。</li>
 <li>{{ domxref("Blob") }} コンストラクタをサポートしました。</li>
 <li><a href="/ja/DOM/Storage#globalStorage"><code>globalStorage</code></a> のサポートを削除しました。</li>
 <li>バックグラウンドの処理の状態や結果を報告するために用いる {{ domxref("DOMRequest") }} インタフェースを新たに追加しました。</li>
 <li>{{ domxref("HTMLOptionElement", "HTMLOptionElement.index()") }} メソッドは、{{ HTMLElement("option") }} が {{ HTMLElement("datalist") }} HTML 要素の内部にあるときに誤った値 <code>-1</code> ではなく <code>0</code> を返すようになりました。</li>
 <li>{{ domxref("DOMException") }} のうち DOM Level 4 で定義された部分を実装しました。</li>
 <li>最新の File API 仕様での {{ domxref("DOMError") }} の定義に賛同して、{{ domxref("FileError") }} インタフェースを削除しました。</li>
 <li>{{ domxref("Range") }} オブジェクトは <code>RangeException</code> 例外を投げなくなりました。代わりに DOM4 で定義された {{ domxref("DOMException") }} を用います。</li>
 <li>{{ domxref("element.getAttributeNS()") }} は存在しない属性について空の文字列に代わり常に <code>null</code> を返すようになりました。以前は、空の文字列が返る場合がありました。存在しない属性には空の文字列ではなく null を返すべきであるという現在の DOM4 仕様に従います。</li>
 <li>{{ domxref("HTMLCanvasElement") }} インタフェースに非標準の <code>mozFetchAsStream()</code> メソッドを追加しました。これは当該要素の画像データを指定した形式で含む入力ストリームを提供します。</li>
</ul>

<h3 id="UA_文字列">UA 文字列</h3>

<ul>
 <li>Android 版 Firefox は、フォームファクタを示すため <a href="/ja/Gecko_user_agent_string_reference#Mobile_and_Tablet_indicators" title="en/Gecko_user_agent_string_reference#Mobile_and_Tablet_indicators">UserAgent 文字列に Tablet または Mobile のトークンを含むようになり</a>、Fennec トークンは持たなくなりました。また "Gecko/" に続く数値は、フリーズした日付から Gecko のバージョン番号に変わります。</li>
 <li>UA 文字列では、Gecko のパッチ番号やリリース状況をバージョン番号で公開しないようになりました。バージョン番号は常に "X.Y" という形式になり、X はメジャーリリース番号、Y はマイナー番号を表します。例えば、"13.0" や "14.1" となります。"14.0.1b1" のようにはなりません。</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>{{ domxref("SVGStringList") }} DOM インタフェースが <a href="/ja/JavaScript/Reference/Global_Objects/Array" title="Array"><code>Array</code></a> と同様に添字を利用可能になりました。{{ bug("722071") }} をご覧ください。</li>
</ul>

<h3 id="WebGL">WebGL</h3>

<ul>
 <li><a href="/ja/WebGL/Using_Extensions#EXT_texture_filter_anisotropic"><code>EXT_texture_filter_anisotropic</code></a> 拡張のサポートを追加しました。異方性テクスチャフィルタリングは、テクスチャが貼り付けられた斜めのプリミティブを表示する際のミップマップテクスチャのアクセスの品質を向上させます。</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>{{ MathMLElement("mtable") }} 要素で <code>width</code> 属性をサポートしました ({{ bug("722880") }})。</li>
 <li>数学的なテキストで <a class="external" href="http://cdn.mathjax.org/mathjax/latest/fonts/HTML-CSS/TeX/otf/" rel="external">MathJax fonts</a> をデフォルトフォントとして使用するようになりました。詳しくは <a href="/ja/Mozilla_MathML_Project/Fonts" title="Fonts for Mozilla's MathML engine">Fonts for Mozilla's MathML engine</a> をご覧ください。</li>
</ul>

<h3 id="Developer_tools">Developer tools</h3>

<h4 id="3D_ビューの改良">3D ビューの改良</h4>

<ul>
 <li>"f" キーを押すと、選択中のノードが見えるように位置を調整することができます。</li>
</ul>

<h4 id="スタイルパネルの改良">スタイルパネルの改良</h4>

<ul>
 <li><a href="/ja/Tools/Page_Inspector/Style_panel" title="Style panel">スタイルパネル</a> でルールの見出しをクリックすると、対応する CSS を <a href="/ja/Tools/Style_Editor" title="Style Editor">スタイルエディタ</a> で開くようになりました。</li>
 <li><a href="/ja/Tools/Page_Inspector/Style_panel" title="Style panel">スタイルパネル</a> でルールを右クリックすると、そのルールをクリップボードへコピーできるようになりました。</li>
 <li>未知のプロパティ名や誤った値を入力すると、プロパティの隣に警告アイコンを表示します。</li>
</ul>

<h4 id="スクラッチパッドの改良">スクラッチパッドの改良</h4>

<ul>
 <li><a href="/ja/Tools/Scratchpad" title="Scratchpad">スクラッチパッド</a> のヘルプメニューに、MDN のスクラッチパッドに関する文書を開くための項目を追加しました。</li>
</ul>

<h2 id="Mozilla_開発者とアドオン開発者向けの変更点">Mozilla 開発者とアドオン開発者向けの変更点</h2>

<h3 id="互換性情報">互換性情報</h3>

<p>Firefox 13 より、Windows 版の Firefox は Windows XP Service Pack 2 以降を要求します。従って、 Windows 2000 や古いバージョンの Windows XP では動作しません。</p>

<h3 id="JavaScript_code_modules">JavaScript code modules</h3>

<h4 id="source-editor.jsm">source-editor.jsm</h4>

<ul>
 <li>ソースエディタの API に、ダーティフラグのサポートを追加しました。</li>
 <li>ソースエディタは、Orion を利用せずに {{ HTMLElement("textarea") }} へフォールバックする動作をサポートしなくなりました。</li>
 <li>エディタが focus と blue のイベントを公開するようになりました。</li>
 <li><a href="/ja/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29" title="en/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29"><code>getIndentationString()</code></a> メソッドを追加しました。これは、エディタでテキストのインデントに使用する文字を返します。</li>
 <li>ソースエディタで、ブレークポイントのリストの管理とブレークポイントのオン・オフを切り替えるユーザインタフェースの表示をサポートしました。ただし実際は、ブレークポイントを実装していません。そのためのデバッガのコードを記述するのはあなた次第です。</li>
 <li><code>highlightCurrentLine</code> 設定オプションを用いて、カレント行をハイライトする機能をサポートしました。</li>
</ul>

<h3 id="ARIA">ARIA</h3>

<ul>
 <li>CSS プロパティ {{ cssxref("margin-left") }}、{{ cssxref("margin-right") }}、{{ cssxref("margin-top") }}、および {{ cssxref("margin-bottom") }} はすべて、同じ名前で ARIA オブジェクトに反映されます。詳しくは <a href="/ja/Accessibility/AT-APIs/Gecko/Attrs" title="Gecko Object Attributes">Gecko object attributes</a> をご覧ください。</li>
</ul>

<h3 id="インタフェースの変更">インタフェースの変更</h3>

<ul>
 <li><code>nsIScreen</code> インタフェースが、新たに引数 <code>rotation</code> を通して回転の制御をサポートしました。</li>
 <li><code>nsIPrefBranch2</code> インタフェースを <code>nsIPrefBranch</code> に統合しました ({{ bug("718255") }})。</li>
 <li>以前のバージョンの Gecko で削除されたエイリアス <code>MozOpacity</code>、<code>MozOutline</code>、<code>MozOutlineStyle</code>、<code>MozOutlineWidth</code>、<code>MozOutlineOffset</code>、および <code>MozOutlineColor</code> を、<code>nsIDOMCSS2Properties</code> から削除しました。これは、エイリアスを削除した当初に行うべきでした。</li>
 <li><code>nsINavHistoryQueryOptions</code> の属性 <code>excludeItemIfParentHasAnnotation</code> を、対応するクエリ操作と共に削除しました。これはライブブックマークのサポート用に存在しましたが、もはや存在しません。</li>
</ul>

<h2 id="See_also" name="See_also">関連記事</h2>

<div>{{Firefox_for_developers('12')}}</div>
