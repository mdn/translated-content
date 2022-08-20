---
title: Firefox 26 for developers
slug: Mozilla/Firefox/Releases/26
tags:
  - Firefox
  - Firefox 26
translation_of: Mozilla/Firefox/Releases/26
---
<div>{{FirefoxSidebar}}</div>

<p>Firefox 26 は米国時間 2013 年 12 月 10 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者やアドオン開発者にとっても有益な主な変更点を紹介します。</p>

<h2 id="Changes_for_Web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="CSS">CSS</h3>

<ul>
 <li>現在も接頭辞付きである {{cssxref("text-decoration-line")}} プロパティは、<code>'blink'</code> を正しい値とみなすようになりました。ただし、コンテンツは点滅しません ({{bug("812995")}})。</li>
 <li>非標準の {{cssxref("-moz-text-blink")}} プロパティを削除しました ({{bug("812995")}})。</li>
 <li>CSS Images &amp; Values Level 4 バージョンにある、<code>from-image</code> キーワードと EXIF サポートを備えた {{cssxref("image-orientation")}} プロパティをサポートしました ({{bug(825771)}})。</li>
 <li><code>position: sticky</code> を実験的にサポートしました。設定 <code>layout.css.sticky.enabled</code> で有効にできます ({{bug(886646)}})。</li>
 <li>{{cssxref("text-align")}} プロパティを <code>::-moz-placeholder</code> 疑似要素へ適用可能になりました ({{bug(915551)}})。</li>
</ul>

<h3 id="HTML">HTML</h3>

<ul>
 <li><code>HTMLSelectElement.selectedOptions</code> プロパティを実装しました ({{bug("596681")}})。</li>
 <li>type が <code>email</code> の {{HTMLElement("input")}} で、ドメインのラベルが 63 文字を超える値を正しいと考えないようになりました ({{bug("884332")}})。</li>
 <li><code>HTMLInputElement.width</code> プロパティおよび <code>height</code> プロパティは、<code>type</code> が <code>image</code> ではない場合に <code>0</code> を返すようになりました ({{bug("905240")}})。</li>
 <li>包含する要素のひとつが無効であるときに {{HTMLElement("fieldset")}} 要素が無効になり、{{cssxref(":invalid")}} 疑似クラスでスタイルを設定できます ({{bug("717181")}})。</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<p><a href="/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla">EcmaScript 2015</a> の実装が続いています!</p>

<ul>
 <li>ECMAScript 2015 に準拠した構文の<a href="http://wiki.ecmascript.org/doku.php?id=harmony:generators">ジェネレーター (yield)</a> を実装しました ({{bug("666399")}})。</li>
 <li>ジェネレーター/イテレーターの結果が <code>{ value: foo, done: bool }</code> のように囲まれるようになりました ({{bug(907744)}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Math"><code>Math</code></a> へ新たに、数値計算メソッドである <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/fround"><code>Math.fround()</code></a> を実装しました ({{bug("900125")}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#keywords">予約語</a>を関数名に使用できません。使用すると <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a> が発生します ({{bug("907958")}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters">デフォルト引数</a>の構文が、デフォルト引数の後にデフォルトのない引数を許容するように更新されました。 <code>function f(x=1, y)</code> のような形です。 {{bug(777060)}} を参照してください。</li>
 <li>{{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} が実装されました ({{bug(904701)}})。</li>
</ul>

<h3 id="Interfaces.2FAPIs.2FDOM" name="Interfaces.2FAPIs.2FDOM">インターフェイス/API/DOM</h3>

<ul>
 <li>{{domxref("DOMImplementation.createDocument")}} の最後の引数 (doctype) を省略可能にしました ({{bug(909859)}})。</li>
 <li>1 回の呼び出しで複数のクラスの追加や削除が可能な、新しい {{domxref("element.classList")}} の仕様を実装しました ({{bug(814014)}})。</li>
 <li>{{domxref("URL.URL", "URL()")}} コンストラクターを {{domxref("URL")}} インタフェースに実装しました ({{bug("887364")}})。</li>
 <li>{{domxref("HTMLAnchorElement/origin", "URLUtils.origin")}}, {{domxref("HTMLAnchorElement/password", "URLUtils.password")}}, {{domxref("HTMLAnchorElement/username", "URLUtils.username")}} の各プロパティが {{domxref("URLUtils")}} を実装するすべてのインターフェイス、{{domxref("URL")}}、{{domxref("Location")}}、{{domxref("HTMLAnchorElement")}}、{{domxref("HTMLAreaElement")}} で利用可能になりました。 ({{bug("887364")}})。</li>
 <li>{{domxref("URL")}} インタフェースが、Web Workers からアクセス可能になりました ({{bug("887364")}})。</li>
 <li>IndexedDBが「楽観的」なストレージ領域として使用できるようになりました。プロンプトを必要とせず、データは LRU 立ち退きポリシーでプールに保存され、短い一時的なストレージとなります ({{bug("785884")}})。</li>
 <li>{{domxref("WaveShaperNode.oversample")}} についての対応が追加されました ({{bug(875277)}})。</li>
 <li>永続的なストレージのパスを <code>&lt;profile&gt;/indexedDB</code> から <code>&lt;profile&gt;/storage/persistent</code> に変更しました (b2g では <code>/data/local/indexedDB</code> から <code>/data/local/storage/persistent</code> に変更)。</li>
 <li>{{domxref("Screen.orientation")}} プロパティおよび {{domxref("Screen.lockOrientation()")}} メソッドで値 <code>default</code> をサポートしました。デバイスに応じて <code>portrait-primary</code> または <code>landscape-primary</code> が対応づけられます ({{bug(908058)}})。</li>
 <li>{{domxref("Event")}} コンストラクタを Web workers で使用できます ({{bug(910910)}})。</li>
 <li>{{HTMLElement("iframe")}} に <code>sandbox</code> 属性がついている場合、埋め込まれているページで {{domxref("Document.domain")}} プロパティを設定しようとすると、セキュリティエラーが発生するようになりました ({{bug(907892)}})。</li>
 <li>{{domxref("MessageEvent")}} インタフェースを、最新の仕様に準拠するように更新しました。<code>initMessageEvent</code> メソッドを削除した一方で、インタフェースがコンストラクタを持つようになりました ({{bug(848294)}})。</li>
 <li>設定 <code>dom.messageChannel.enabled</code> のもとで、HTML5 の <code>MessageChannel</code> API を実装しました ({{bug("677638")}})。</li>
 <li>すべての WebVTT に関する実装と同様に、設定 <code>media.webvtt.enabled</code> のもとで <code>VTTCue</code> をサポートしました ({{bug("868509")}})。</li>
 <li><a href="/ja/docs/Web/API/Web_Audio_API">Web Audio API</a> が既定で利用できるようになりました ({{bug("885505")}})。</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>{{MathMLElement("mmultiscripts")}}、{{MathMLElement("msub")}}、{{MathMLElement("msup")}}、{{MathMLElement("msubsup")}} の一貫性のないレンダリングを統一しました。また、これらの要素のエラー処理が改善しました ({{bug("827713")}})。</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>OpenType 内への SVG グリフの包含である <em>SVG-in-OpenType</em> を、現行バージョンの仕様に適合するよう更新しました ({{bug("906521")}})。</li>
 <li><code>SVGElement.ownerSVGElement()</code> メソッドがエラーを発生させないようになりました ({{bug("835048")}})。</li>
</ul>

<h2 id="Development_tools">開発ツール</h2>

<ul>
 <li>インスペクターのリモートアクセスが可能になりました ({{bug(805526)}}).</li>
 <li>このリリースで、ウェブコンソールのテキストが選択可能になり、{{cssxref("::before")}} および {{cssxref("::after")}} が調査可能になり、そしてデバッガーやレスポンシブデザインビューの機能追加を計画しています。(<a href="https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/">https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/</a>)</li>
</ul>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.mozilla.jp/firefox/26.0/releasenotes/">Firefox 26 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2013/11/firefox-26-addon-compatibility/">Firefox 26 アドオン互換性情報</a></li>
</ul>

<h3 id="Older_versions">過去のバージョン</h3>

<p>{{Firefox_for_developers('25')}}</p>
