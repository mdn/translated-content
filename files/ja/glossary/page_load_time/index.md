---
title: ページ読み込み時間
slug: Glossary/Page_load_time
tags:
  - Glossary
  - Timings
  - Web Performance
  - metrics
  - page load time
translation_of: Glossary/Page_load_time
---
<p><span class="seoSummary"><strong>ページ読み込み時間</strong>とはページの読み込みにかかる時間のことであり、<a href="/ja/docs/Web/API/PerformanceTiming/navigationStart">ナビゲーション開始時</a>から<a href="/ja/docs/Web/API/PerformanceTiming/loadEventStart">ロードイベント開始時</a>までをもって測定されます。</span></p>

<pre class="brush: js notranslate">let time = performance.timing;

let pageloadtime = time.loadEventStart - time.navigationStart;</pre>

<p>ページ読み込み時間は完璧なウェブパフォーマンス測定基準に聞こえますが、そうではありません。読み込み時間はユーザーのデバイス性能やネットワーク状態、そして程度は低いもののサーバーからの距離によって大きく変化します。ページ読み込み時間が測定される開発環境は最適化された環境である場合が多くユーザーの実態体験を反映しません。さらにウェブパフォーマンスはロードイベント発生時間だけではありません。それは<a href="/ja/docs/Glossary/Perceived_performance">体感速度</a>、応答性、<a href="/ja/docs/Glossary/Jank">ジャンク（Jank)</a>、そしてジッター(Jitter)でもあります。</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/ja/docs/Web/Performance/Navigation_and_resource_timings">Navigation and resource timing</a></li>
 <li>{{domxref("PerformanceNavigationTiming")}}</li>
 <li>{{domxref("PerformanceResourceTiming")}},</li>
</ul>
