---
title: Firefox 24 for developers
slug: Mozilla/Firefox/Releases/24
tags:
  - Firefox
  - Firefox 24
  - NeedsContent
translation_of: Mozilla/Firefox/Releases/24
---
<p>Gecko 24 を搭載した Firefox 24 は米国時間 2013 年 9 月 17 日にリリースされました。このページでは、開発者に影響する Firefox 24 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">Web 開発者向けの変更点一覧</h2>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref("cursor")}} プロパティの値のうち <code>-moz-zoom-in</code> と <code>-moz-zoom-out</code> の 2 つは、接頭辞を外して <code>zoom-in</code> および <code>zoom-out</code> になりました ({{bug("772153")}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li><code>media.webvtt.enabled</code> 設定のもとに、{{HTMLElement("track")}} 要素を実装しました ({{bug(833385)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li><code>"use strict"</code> により明示的に要求される場合を除き、<a href="/ja/docs/Web/JavaScript/Reference/arrow_functions" title="Web/JavaScript/Reference/arrow_functions">Arrow functions</a> は自動的に strict モードにならないようにしました。({{bug(852762)}})</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String/repeat" title="Web/JavaScript/Reference/Global_Objects/String/repeat"><code>String.prototype.repeat</code></a> JS メソッドを実装しました ({{bug(815431)}})。</li>
</ul>

<h3 id="DOM" name="DOM">DOM</h3>

<ul>
 <li>{{domxref("Range.Range", "Range()")}} コンストラクタをサポートしました ({{bug(868999)}})。</li>
 <li>{{domxref("Text.Text", "Text()")}} コンストラクタをサポートしました ({{bug(869000)}})。</li>
 <li>{{domxref("Comment.Comment", "Comment()")}} コンストラクタをサポートしました ({{bug(869006)}})。</li>
 <li>{{domxref("DocumentFragment.DocumentFragment", "DocumentFragment()")}} コンストラクタをサポートしました ({{bug(869002)}})。</li>
 <li>{{domxref("FocusEvent")}} インターフェイスを実装しました ({{bug(855741)}})。</li>
 <li>{{domxref("ChildNode.remove()")}} メソッドをサポートしました ({{bug(856629)}})。</li>
 <li>{{HTMLElement("track")}} 要素に関するインターフェイスである {{domxref("HTMLTrackElement")}}、{{domxref("TextTrack")}}、{{domxref("TextTrackCue")}}、{{domxref("TextTrackList")}}、{{domxref("TextTrackCueList")}} を、既定値が <code>false</code> である設定 <code>media.webvtt.enabled</code> のもとに実装しました ({{bug(833385)}})。</li>
 <li>{{domxref("Gamepad")}} インターフェイスと {{domxref("Navigator.getGamepads")}} を、既定値が <code>false</code> である設定 <code>dom.gamepad.enabled</code> のもとに実装しました ({{bug(690935)}})。</li>
 <li>デスクトップ版 Firefox に限り、<code>HTMLCanvasElement.getContext()</code> の値として <code>experimental-webgl</code> に加えて <code>webgl</code> をとれるようになりました ({{bug(870232)}})。</li>
 <li>{{domxref("HTMLMediaElement")}} の非標準メソッド <code>mozLoadFrom()</code> を削除しました ({{bug(877135)}})。</li>
</ul>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li>ネットワークインスペクタで、コンテンツタイプ (CSS/画像/フォント など) による絞り込みと、絞り込み結果についてサイズや読み込み時間を確認できるようになりました。</li>
 <li>左側にある開発ツールのオプションパネルで、JavaScript を一時的に無効化/有効化できるようになりました。</li>
 <li>拡張機能の開発者は chrome レベルのスクリプトに対して、新たに<a href="http://www.robodesign.ro/mihai/blog/the-browser-console-is-replacing-the-error-console">ブラウザコンソール</a>を使用できるようになりました (エラーコンソールを置き換えます)。</li>
</ul>

<h3 id="MathML" name="MathML">MathML</h3>

<ul>
 <li>例えば {{MathMLElement("math")}} 要素や {{MathMLElement("mrow")}} 要素で、式の書字方向を制御する <code>dir</code> 属性が、{{cssxref("direction")}} CSS プロパティを使用することと同等になりました。</li>
 <li>等号 ("=") を<a href="/ja/docs/Web/MathML/Element/mo#attr-stretchy">引き延ばすことが可能</a>になりました。</li>
 <li>{{MathMLElement("menclose")}} 要素で、<code>notation</code> 属性に値 "<code>updiagonalarrow</code>" を追加しました。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.mozilla.jp/firefox/24.0/releasenotes/">Firefox 24 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2013/09/firefox-24-addon-compatibility/">Firefox 24 アドオン互換性情報</a></li>
</ul>

<h3 id="Older_versions" name="Older_versions">過去のバージョン</h3>

<p>{{Firefox_for_developers('23')}}</p>
