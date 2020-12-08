---
title: グローバル間フェッチの使用
slug: Web/API/Fetch_API/Cross-global_fetch_usage
tags:
  - Cross global
  - Fetch
  - edge case
  - relative URL
translation_of: Web/API/Fetch_API/Cross-global_fetch_usage
---
<p>{{DefaultAPISidebar("Fetch API")}}</p>

<p class="summary"><span class="seoSummary">この記事では、フェッチ（および潜在的に同種のリソース取得の振る舞いを示す他の API）で発生するエッジケースについて説明します。 相対 URL を含む オリジン間フェッチ（cross-origin fetch）が {{htmlelement("iframe")}} から開始される場合、相対 URL は iframe のロケーションではなく現在のグローバルなロケーションに対して解決していました。</span></p>

<h2 id="The_edge_case" name="The_edge_case">エッジケース</h2>

<p>多くのサイトは、このエッジケースに立ち向かうことはありません。 それを見るには次のようにします。</p>

<ul>
 <li>同一オリジン（same-origin）の iframe が必要です。</li>
 <li>その同一オリジンの iframe には、異なるベース URL を持つロケーションが必要です。</li>
 <li>フェッチ関数をグローバル間（cross-global）で使用する必要があります。 例えば、<code>frame.contentWindow.fetch()</code>。</li>
 <li>フェッチするために渡す URL は相対である必要があります。</li>
</ul>

<h2 id="The_problem" name="The_problem">問題</h2>

<p>以前は、例えば次のように、現在のグローバルに対して相対 URL を解決していました。</p>

<pre class="brush: js">let absolute = new URL(relative, window.location.href)</pre>

<p>これ自体は問題ではありません。 この種の振る舞いを示すさまざまな API が仕様で定義されている振る舞いと矛盾してそれを実行しているだけであり、それがさらに問題を引き起こす可能性があります。</p>

<h2 id="The_solution" name="The_solution">解決策</h2>

<p>Firefox 60 以降では、Mozilla は、使用している <code>fetch()</code> 関数を所有するグローバルに対して相対 URL を解決します（{{bug(1432272)}} を参照）。 したがって、上記の場合、次のように、iframe のロケーションに対して解決します。</p>

<pre class="brush: js">let absolute = new URL(relative, frame.contentWindow.location.href)</pre>

<p>今後の潜在的な問題を軽減するために、この振る舞いの変更に合わせた新しい仕様を取得することについて、多くの議論が進行中です。</p>
