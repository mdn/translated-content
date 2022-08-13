---
title: Synthetic monitoring (合成モニタリング)
slug: Glossary/Synthetic_monitoring
tags:
  - Glossary
  - RUM
  - Reference
  - Synthetic monitoring
  - Web Performance
  - 用語集
translation_of: Glossary/Synthetic_monitoring
---
<p><span class="seoSummary"><strong>合成モニタリング</strong>は、可能な限り一貫性のある環境で、通常は自動化ツールを使用して、「実験室」環境でページの性能をモニタリングすることです。</span>一貫性のあるベースラインがあれば、合成モニタリングはコード変更が性能に及ぼす影響を測定するのに適しています。しかし、必ずしもユーザーが体験していることを反映しているとは限りません。</p>

<p>合成モニタリングでは、エンドユーザがウェブアプリケーションを介して進む経路をシミュレートするためのスクリプトを展開し、シミュレーターが体験した性能をレポートします。一般的な合成モニタリングツールの例としては、 <a href="https://webpagetest.org">WebPageTest</a> や <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> などがあります。測定されるトラフィックは、実際のユーザーのものではなく、ページの性能に関するデータを収集するために合成して生成されたトラフィックです。</p>

<p>RUM とは異なり、合成モニタリングはユーザーの違いを考慮せず、性能の狭い範囲のビューを提供するため、アプリケーションの性能に関する基本的なデータを取得したり、開発環境で性能をスポットチェックしたりするのに役立ちます。ネットワークスロットリングなどの他のツールと組み合わせることで、潜在的な問題領域についての優れた洞察を提供することができます。</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Glossary/Real_User_Monitoring">実ユーザーモニタリング (RUM)</a></li>
 <li><a href="/ja/docs/Web/Performance/Rum-vs-Synthetic">実ユーザーモニタリング (RUM) と合成モニタリング</a></li>
 <li><a href="/ja/docs/Glossary/beacon">ビーコン</a></li>
</ul>
