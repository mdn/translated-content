---
title: HTMLElement.contextMenu
slug: Web/API/HTMLElement/contextMenu
tags:
  - API
  - Deprecated
  - Element
  - HTML
  - HTML DOM
  - Property
  - Reference
  - UX
translation_of: Web/API/HTMLElement/contextMenu
---
<div>{{APIRef("HTML DOM")}}{{deprecated_header()}}
<p><span class="seoSummary"><code><strong>HTMLElement.contextMenu</strong></code> プロパティは、{{htmlattrxref("contextmenu")}} 属性を使用して要素に割り当てられたコンテキストメニューを参照します。 メニュー自体は、{{HTMLElement("menu")}} 要素を使用して作成されます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>elementContextMenu</var> = <var>element</var>.contextMenu;
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var contextMenu = document.getElementById("element").contextMenu;

// 最初のメニューエントリのラベルを変更する
contextMenu.firstElementChild.label = "新しいラベル";
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.contextMenu")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{htmlattrxref("contextmenu")}}</li>
 <li>{{HTMLElement("menu")}}</li>
 <li>{{HTMLElement("menuitem")}}</li>
</ul>
</div>
