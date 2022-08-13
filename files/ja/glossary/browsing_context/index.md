---
title: Browsing context (閲覧コンテキスト)
slug: Glossary/Browsing_context
tags:
  - CodingScripting
  - Glossary
  - HTML
translation_of: Glossary/Browsing_context
---
<p id="Summary"><strong>閲覧コンテキスト</strong>は、{{glossary("browser", "ブラウザー")}} が {{domxref("Document")}} (今日では通常タブであり、場合によってはウィンドウまたはページ内のフレーム) を表示する環境です。</p>

<p>各閲覧コンテキストは、固有の{{glossary("origin", "オリジン")}}、すなわちアクティブな文書の生成元と、すべての表示された文書を順番に記録した履歴を持っています。</p>

<p>閲覧コンテキスト間の通信は、厳しく制限されています。同じ生成元の閲覧コンテキストとの間で、 {{domxref("BroadcastChannel")}} を開放して使用することができます。</p>

<h2 id="Learn_more" name="Learn_more">理解を深める</h2>

<h3 id="Technical_reference" name="Technical_reference">技術リファレンス</h3>

<ul>
 <li><a href="https://html.spec.whatwg.org/multipage/browsers.html#windows">WHATWG の閲覧コンテキスト</a></li>
 <li><a href="http://w3c.github.io/html/browsers.html#sec-browsing-contexts">W3C の閲覧コンテキスト</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Glossary")}}</div>
