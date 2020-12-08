---
title: 印刷
slug: Web/Guide/Printing
tags:
  - DOM
  - Guide
  - NeedsContent
  - NeedsRelocation
  - printing
translation_of: Web/Guide/Printing
---
<p>コンテンツを印刷するときに、ウェブサイトまたはアプリケーションで使い勝手を向上させたい場合があります。考えられるシナリオはいくつかあります。</p>

<ul>
 <li>紙の大きさと形状を生かしてレイアウトを調整したい</li>
 <li>(画面とは) 異なるスタイルを利用して、紙の上でのコンテンツの見栄えを良くしたい</li>
 <li>良い結果をるために、より高解像度の画像を使用したい</li>
 <li>印刷を始める前にコンテンツの印刷プレビュー版を表示するなど、印刷の使い勝手を調整したい</li>
</ul>

<p>他にも印刷処理を管理したい場合がありますが、これらは最も一般的なシナリオの一部です。この記事では、ウェブコンテンツの印刷品質を向上させるためのヒントとテクニックを紹介します。</p>

<h2 id="Using_a_print_style_sheet" name="Using_a_print_style_sheet">印刷スタイルシートの使用</h2>

<p>{{HTMLElement("head")}} タグの中に次のように追加してください。</p>

<pre>&lt;link href="/path/to/print.css" media="print" rel="stylesheet" /&gt;
</pre>

<h2 id="Using_media_queries_to_improve_layout" name="Using_media_queries_to_improve_layout">レイアウトを改善するためのメディアクエリの使用</h2>

<h2 id="Detecting_print_requests" name="Detecting_print_requests">印刷リクエストの検出</h2>

<p>ブラウザーによっては (Firefox 6 以降や Internet Explorer など) コンテンツが印刷を開始することを判断できるように、 <code>beforeprint</code> および <code>afterprint</code> イベントを送信します。これを使用して、印刷中に表示されるユーザーインターフェイスを調整することができます (例えば、印刷処理中にユーザーインターフェイス要素を表示したり隠したりするなど)。</p>

<div class="note"><strong>メモ:</strong> <a href="/ja/docs/DOM/window.onbeforeprint" title="DOM/window.onbeforeprint"><code>window.onbeforeprint</code></a> および <a href="/ja/docs/DOM/window.onafterprint" title="DOM/window.onafterprint"><code>window.onafterprint</code></a> を使用してこれらのイベントにハンドラーを割り当てることもできますが、 {{domxref("EventTarget.addEventListener()")}} を使用することをお勧めします。</div>

<h2 id="Examples" name="Examples">例</h2>

<p>よくある例をいくつか紹介します。</p>

<h4 id="Open_and_automatically_close_a_popup_window_when_finished" name="Open_and_automatically_close_a_popup_window_when_finished">ポップアップウィンドウを開き、終了したら閉じる</h4>

<p>ユーザーがコンテンツを印刷した後に <a href="/ja/docs/DOM/window.open" title="DOM/window.open">popup window</a> (例えば文書の印刷用など) を自動的に閉じたい場合は、次のようなコードで実現できます。</p>

<pre class="brush: html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt; &lt;title&gt;JavaScript Window Close Example &lt;/title&gt;
  &lt;script type="text/javascript"&gt;
    function popuponclick() {
      my_window = window.open('', 'mywindow', 'status=1,width=350,height=150');
      my_window.document.write('&lt;html&gt;&lt;head&gt;&lt;title&gt;Print Me&lt;/title&gt;&lt;/head&gt;');
      my_window.document.write('&lt;body onafterprint="self.close()"&gt;');
      my_window.document.write('&lt;p&gt;When you print this window, it will close afterward.&lt;/p&gt;');
      my_window.document.write('&lt;/body&gt;&lt;/html&gt;');
  }
  &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;To try out the &lt;code&gt;afterprint&lt;/code&gt; event, click the link below to open
  the window to print. You can also try changing the code to use &lt;code&gt;beforeprint&lt;/code&gt;
  to see the difference.&lt;/p&gt;
  &lt;p&gt;&lt;a href="javascript: popuponclick()"&gt;Open Popup Window&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<div><a href="/samples/domref/printevents.html">ライブ例を表示</a></div>

<h3 id="Print_an_external_page_without_opening_it" name="Print_an_external_page_without_opening_it">外部ページを開かずに印刷する</h3>

<p>外部ページを開かずに印刷できるようにしたい場合は、非表示の {{HTMLElement("iframe")}} (<a href="/ja/docs/DOM/HTMLIFrameElement" title="DOM/HTMLIFrameElement">HTMLIFrameElement</a> を参照) を利用し、ユーザーがコンテンツを印刷した後で自動的にそれを削除するようにすることで実現できます。以下の例は、 <code>externalPage.html</code> という名前のファイルを印刷することができる例です。</p>

<pre class="brush: html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;
&lt;title&gt;MDN Example&lt;/title&gt;
&lt;script type="text/javascript"&gt;
function closePrint () {
  document.body.removeChild(this.__container__);
}

function setPrint () {
  this.contentWindow.__container__ = this;
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.focus(); // Required for IE
  this.contentWindow.print();
}

function printPage (sURL) {
  var oHiddFrame = document.createElement("iframe");
  oHiddFrame.onload = setPrint;
  oHiddFrame.style.position = "fixed";
  oHiddFrame.style.right = "0";
  oHiddFrame.style.bottom = "0";
  oHiddFrame.style.width = "0";
  oHiddFrame.style.height = "0";
  oHiddFrame.style.border = "0";
  oHiddFrame.src = sURL;
  document.body.appendChild(oHiddFrame);
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;p&gt;&lt;span onclick="printPage('externalPage.html');" style="cursor:pointer;text-decoration:underline;color:#0000ff;"&gt;Print external page!&lt;/span&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<div class="note"><strong>メモ:</strong> 古いバージョン Internet Explorer は、非表示の {{HTMLElement("iframe")}} の印刷することができません。</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/DOM/window.print" title="DOM/window.print"><code>window.print</code></a></li>
 <li><a href="/ja/docs/DOM/window.onbeforeprint" title="DOM/window.onbeforeprint"><code>window.onbeforeprint</code></a></li>
 <li><a href="/ja/docs/DOM/window.onafterprint" title="DOM/window.onafterprint"><code>window.onafterprint</code></a></li>
 <li><a href="/ja/docs/CSS/Media_queries" title="CSS/Media queries">Media queries</a></li>
 <li>{{cssxref("@media")}}</li>
</ul>
