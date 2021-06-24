---
title: 'TypeError: can''t access dead object'
slug: Web/JavaScript/Reference/Errors/Dead_object
tags:
- Addons
- Error
- Errors
- JavaScript
translation_of: Web/JavaScript/Reference/Errors/Dead_object
---
<div>{{JSSidebar("Errors")}}</div>

<p>JavaScript の例外 "can't access dead object" は、メモリ使用量の改善とメモリリークの防止のために、 Firefox がアドオンに対して DOM オブジェクトへの強い参照を保持することを許可しなかったときに発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">TypeError: can't access dead object
</pre>

<h2 id="エラータイプ">エラータイプ</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p>メモリ使用量の改善とメモリリークの防止のため、 Firefox は、親文書が破棄された後に DOM オブジェクトへの強い参照を保持するアドオンを禁止しています。デッドオブジェクトとは、 DOM で破壊された後も持続する DOM 要素への強力な (keep alive) 参照を保持することです。このような問題を避けるためには、外部の文書の DOM ノードへの参照は、その文書に固有のオブジェクトに保存し、その文書がアンロードされたときにクリーンアップするか、<a href="/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getWeakReference">弱い参照</a>として保存する必要があります。

<h2 id="Examples">例</h2>

<h3 id="Checking_if_an_object_is_dead">オブジェクトが破棄されているかの確認</h3>

<p><a href="/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils">Components.utils</a> は特権コードで使用できる <code>isDeadWrapper()</code> メソッドを提供しています。</p>

<pre class="brush: js">if (Components.utils.isDeadWrapper(window)) {
  // dead
}</pre>

<p>非特権コードは Component.utils にアクセスできないため、例外をキャッチするしかありません。</p>

<pre class="brush: js">try {
  String(window);
}
catch (e) {
  console.log("window is likely dead");
}</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
  <li><a href="https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/">What does “can’t access dead object” mean?</a></li>
  <li><a href="/ja/docs/Extensions/Common_causes_of_memory_leaks_in_extensions">Common causes of memory leaks in extensions</a></li>
  <li><a href="/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils">Components.utils</a></li>
  <li><a href="/ja/docs/Mozilla/Zombie_compartments">Zombie Compartments</a></li>
</ul>
