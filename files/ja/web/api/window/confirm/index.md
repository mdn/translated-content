---
title: window.confirm
slug: Web/API/Window/confirm
tags:
  - DOM
  - DOM_0
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/Window/confirm
---
<div>{{ApiRef("Window")}}</div>

<p><span class="seoSummary"><code><strong>Window.confirm()</strong></code> メソッドは、メッセージと、OK, キャンセルの 2 つのボタンを持つモーダルダイアログを表示します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="notranslate"><em>result</em> = window.confirm(<em>message</em>);
</pre>

<ul>
 <li><code>message</code> は、ダイアログ内に表示される文字列です。</li>
 <li><code>result</code> は、OK (<code>true</code>) とキャンセル (<code>false</code>) のどちらが選択されたかを示す真偽値です。ブラウザがページ内ダイアログを拒否している場合、 <code>result</code> は常に <code>false</code> です。</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="notranslate">if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
</pre>

<p>結果</p>

<p><img alt="firefox confirm" src="https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png" style="height: 119px; width: 354px;"><br>
  </p>

<h2 id="Notes" name="Notes">注記</h2>

<p><span class="comment">The following text is shared between this article, DOM:window.prompt and DOM:window.alert</span> ダイアログボックスはモーダルウィンドウです。つまり閲覧者は、これを閉じないとプログラムの他のインタフェース部分にアクセスする事ができません。したがって、ダイアログボックス（もしくは、モーダルウィンドウ）を生成する関数を乱用するべきではありません。何にせよ、<a href="http://alistapart.com/article/neveruseawarning">確認を目的としたダイアログボックスの使用を避けるべき</a>それ相応の理由があります。</p>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'timers-and-user-prompts.html#dom-confirm', 'confirm()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.Window.confirm")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("window.alert","alert")}}</li>
 <li>{{domxref("window.prompt","prompt")}}</li>
</ul>
