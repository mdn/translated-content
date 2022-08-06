---
title: クリップボードとのやりとり
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
---
<div>{{AddonSidebar}}</div>

<p><code><a href="/ja/docs/Web/API/Document/execCommand">document.execCommand()</a></code>を使用することで、WebExtension API で構築されたブラウザー拡張がシステムのクリップボードと連携できるようになります:</p>

<ul>
 <li><code>document.execCommand("copy")</code></li>
 <li><code>document.execCommand("cut")</code></li>
 <li><code>document.execCommand("paste")</code></li>
</ul>

<h2 id="Writing_to_the_clipboard" name="Writing_to_the_clipboard">クリップボードへの書き込み</h2>

<p>document.execCommand をユーザー操作に対する短命なイベントハンドラー(例えば click ハンドラー)のなかで実行することで、特別な許可なしに"切り取り"や"コピー"などのクリップボード操作が可能になります。</p>

<p>例えば、次のような HTML を含むポップアップを見たとします:</p>

<pre class="brush: html">&lt;input id="input" type="text"/&gt;
&lt;button id="copy"&gt;Copy&lt;/button&gt;
</pre>

<p>"copy"ボタンで"input"要素の内容をコピーするためには、次のようなコードを使用します。:</p>

<pre class="brush: js">function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);</pre>

<p><code>execCommand()</code> が click イベントハンドラーの中で呼ばれているので、特別な許可はここでは不要です。</p>

<p>しかし、たとえば alarm の中からコピーを実行するとどうなるでしょうか。:</p>

<pre class="brush: js">function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1
});

browser.alarms.onAlarm.addListener(copy);</pre>

<p>ブラウザーにもよりますが、おそらくコピーはうまくいかないでしょう。Firefox ではうまくいきません。そして、ブラウザーコンソールに以下のようなメッセージが出力されているのが確認できると思います。:</p>

<pre>"document.execCommand(‘cut’/‘copy’) was denied because it was not called from inside a short running user-generated event handler."</pre>

<p>上記のようなケースでもコピーを可能にするには、"clipboardWrite" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> の要求が必要です。"clipboardWrite"はユーザー操作に対する短命なイベントハンドラー以外の箇所でもクリップボードに対する書き込みを可能にします。</p>

<h3 id="Browser-specific_considerations" name="Browser-specific_considerations">特定のブラウザーにおける留意事項</h3>

<p>Chrome の場合:</p>

<ul>
 <li>バックグラウンドページ、コンテンツスクリプト、オプションページ、ポップアップなどすべての実行コンテキストでクリップボードへの書き込みが可能です。</li>
 <li>ユーザー操作が起点のイベントハンドラーの外でクリップボードに書き込む場合でも、実際には"clipboardWrite"は不要です。</li>
</ul>

<p>Firefox の場合:</p>

<ul>
 <li>バックグラウンドページを除くすべての実行コンテキストでクリップボードへの書き込みが可能です。Firefox ではテキストを選択したり、入力フィールドにフォーカスすることがバックグラウンドページではできません。そのため、バックグラウンドページからはクリップボードへの書き込みができません。</li>
 <li>"clipboardWrite" パーミッションはバージョン 51以降でのみサポートされます。</li>
 <li>バージョン 57以降では、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData">clipboard.setImageData()</a></code> API を使用することでクリップボードへの画像のコピーが可能です。</li>
</ul>

<h2 id="Reading_from_the_clipboard" name="Reading_from_the_clipboard">クリップボードからの読み込み</h2>

<p>"貼り付け"を使用するには"clipboardRead" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Request_the_right_permissions">permission</a> が必要です。例えば、HTML に次のような内容を含めると思います:</p>

<pre class="brush: html">&lt;textarea id="output"&gt;&lt;/textarea&gt;
&lt;button id="paste"&gt;Paste&lt;/button&gt;
</pre>

<p>ユーザーが"paste"をクリックした際に"output"要素にクリップボードの内容を設定する場合、次のようなコードを使用します:</p>

<pre class="brush: js">function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);</pre>

<p>このコードには、ユーザー操作が起点のイベントハンドラーの場合でも"clipboardRead"のパーミッションが必要です。</p>

<h3 id="Browser-specific_considerations_2" name="Browser-specific_considerations_2">特定のブラウザーにおける留意事項</h3>

<p>Firefox は"clipboardRead" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> をバージョン 54 からサポートしています。しかし、クリップボードからの読み込みにはパーミッションの他に、貼り付け先の要素が <a href="/ja/docs/Web/Guide/HTML/Editable_content">content editable mode</a> である必要があります。さらに、コンテンツスクリプトの場合は&lt;textarea&gt;要素のみ動作します。バックグラウンドスクリプトでは、どの要素でも content editable mode に設定できます。</p>

<div id="simple-translate-button" class="hidden"> </div>

<div id="simple-translate-panel" class="hidden">
<p>...</p>
</div>
