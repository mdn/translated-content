---
title: contextmenu
slug: Web/HTML/Global_attributes/contextmenu
tags:
  - Deprecated
  - Global attributes
  - HTML
  - Reference
  - contextmenu
translation_of: Web/HTML/Global_attributes/contextmenu
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<div class="warning">
<p><a href="https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu">contextmenu 属性は廃止</a>されており、今後、すべてのブラウザーから削除される予定です。</p>
</div>

<p><code><strong>contextmenu</strong></code> <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a> は、当該要素のコンテキストメニューとして使用する {{HTMLElement("menu")}} 要素の <a href="/ja/docs/Web/HTML/Global_attributes/id"><strong>id</strong></a> です。</p>

<p><em>コンテキストメニュー</em>は、右クリックなどユーザーの操作によって現れます。 HTML5 ではこのメニューをカスタマイズできます。以下は入れ子のメニューを含む実装例です。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html highlight:[1,10,15] notranslate">&lt;body contextmenu="share"&gt;
  &lt;menu type="context" id="share"&gt;
    &lt;menu label="share"&gt;
      &lt;menuitem label="Twitter" onclick="shareViaTwitter()"&gt;&lt;/menuitem&gt;
      &lt;menuitem label="Facebook" onclick="shareViaFacebook()"&gt;&lt;/menuitem&gt;
    &lt;/menu&gt;
  &lt;/menu&gt;
  &lt;ol&gt;
    &lt;li&gt;
      この例のどこででも、コンテキストメニューの "share" メニューを使用して
      Twitter や Facebook に、このページを共有できます。
    &lt;/li&gt;
    &lt;li contextmenu="changeFont" id="fontSizing"&gt;
      このリスト項目で、コンテキストメニューの
      "Increase/Decrease font" を使用してテキストのサイズを変更できます。
    &lt;/li&gt;
    &lt;menu type="context" id="changeFont"&gt;
      &lt;menuitem label="Increase Font" onclick="incFont()"&gt;&lt;/menuitem&gt;
      &lt;menuitem label="Decrease Font" onclick="decFont()"&gt;&lt;/menuitem&gt;
    &lt;/menu&gt;
    &lt;li contextmenu="ChangeImage" id="changeImage"&gt;
      以下の画像で、コンテキストメニューから "Change Image" の
      アクションを実行できます。&lt;br /&gt;
      &lt;img src="https://developer.mozilla.org/media/img/promote/promobutton_mdn5.png"
          contextmenu="ChangeImage" id="promoButton" /&gt;
      &lt;menu type="context" id="ChangeImage"&gt;
        &lt;menuitem label="Change Image" onclick="changeImage()"&gt;&lt;/menuitem&gt;
      &lt;/menu&gt;
    &lt;/li&gt;
  &lt;/ol&gt;
&lt;/body&gt;
</pre>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">function shareViaTwitter() {
  window.open("https://twitter.com/intent/tweet?text=" +
      "Hurray! I am learning ContextMenu from MDN via Mozilla");
}

function shareViaFacebook() {
  window.open("https://facebook.com/sharer/sharer.php?u=" +
      "https://developer.mozilla.org/en/HTML/Element/Using_HTML_context_menus");
}

function incFont() {
  document.getElementById("fontSizing").style.fontSize = "larger";
}

function decFont() {
  document.getElementById("fontSizing").style.fontSize = "smaller";
}

function changeImage() {
  var index = Math.ceil(Math.random() * 39 + 1);
  document.images[0].src =
      "https://developer.mozilla.org/media/img/promote/promobutton_mdn" +
      index + ".png";
}</pre>

<h3 id="Result" name="Result">表示結果</h3>

<p>{{EmbedLiveSample("Example", "100%", 400)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "interactive-elements.html#context-menus", "contextmenu")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>{{SpecName("HTML WHATWG")}} のスナップショットであり、初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.global_attributes.contextmenu")}}</p>

<p>[1] コマンドラインオプション <code>--enable-blink-features=ContextMenu</code> を使用して、実験的な実装を使用できます。 Chrome 52 および Opera 39 までは<em>試験運用版のウェブプラットフォームの機能</em>フラグでも有効化できましたが、<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=412945">ウェブ互換性の問題</a> のために削除されました。この機能の対応は <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=87553">Chrome bug 87553</a> で要望されています。</p>

<p>[2] Firefox モバイルから <code>contextmenu</code> 属性の対応が削除されました ({{bug(1424252)}})。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>すべての <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>。</li>
 <li>{{domxref("HTMLElement.contextMenu")}}</li>
</ul>
