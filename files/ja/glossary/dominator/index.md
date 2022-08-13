---
title: Dominator (ドミネーター)
slug: Glossary/Dominator
tags:
  - CodingScripting
  - Glossary
translation_of: Glossary/Dominator
---
<p>グラフ理論では、ルートノードからノード B へのすべてのパスがノード A を通過する場合、ノード A はノード B をドミネート (支配) すると言います。</p>

<p>この概念は{{Glossary("garbage collection","ガベージコレクション")}}にとって重要です。 なぜなら、B は A を介してのみ到達可能であるということです。 ガベージコレクターが A に到達できず、再利用可能であると判断した場合、B も到達不能で、したがって、A が支配するオブジェクトは、A の保持するサイズに寄与します。 つまり、A 自身が解放された場合に解放される可能性のあるメモリの合計量です。</p>

<h2 id="Learn_more">詳細情報</h2>

<h3 id="General_knowledge">一般知識</h3>

<ul>
 <li><a href="https://en.wikipedia.org/wiki/Dominator_(graph_theory)">Dominator</a> (Wikipedia、英語)</li>
</ul>

<h3 id="Technical_reference">技術リファレンス</h3>

<ul>
 <li><a href="/ja/docs/Tools/Memory/Dominators">ドミネーター</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Memory_Management#garbage_collection">ガベージコレクション</a></li>
</ul>
