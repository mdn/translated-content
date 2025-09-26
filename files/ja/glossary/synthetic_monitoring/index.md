---
title: Synthetic monitoring (合成モニタリング)
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**合成モニタリング**は、可能な限り一貫性のある環境で、通常は自動化ツールを使用して、「実験室」環境でページの性能をモニタリングすることです。

一貫性のあるベースラインがあれば、合成モニタリングはコード変更が性能に及ぼす影響を測定するのに適しています。しかし、必ずしもユーザーが体験していることを反映しているとは限りません。

合成モニタリングでは、エンドユーザーがウェブアプリケーションを介して進む経路をシミュレートするためのスクリプトを展開し、シミュレーターが体験した性能をレポートします。一般的な合成モニタリングツールの例としては、 [WebPageTest](https://webpagetest.org) や [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) などがあります。測定されるトラフィックは、実際のユーザーのものではなく、ページの性能に関するデータを収集するために合成して生成されたトラフィックです。

[リアルユーザーモニタリング (RUM)](/ja/docs/Glossary/Real_User_Monitoring) とは異なり、合成モニタリングはユーザーの違いを考慮せず、性能の狭い範囲のビューを提供するため、アプリケーションの性能に関する基本的なデータを取得したり、開発環境で性能をスポットチェックしたりするのに役立ちます。ネットワークスロットリングなどの他のツールと組み合わせることで、潜在的な問題領域についての優れた洞察を提供することができます。

## 関連情報

- [リアルユーザーモニタリング (RUM)](/ja/docs/Glossary/Real_User_Monitoring)
- [リアルユーザーモニタリング (RUM) と合成モニタリング](/ja/docs/Web/Performance/Rum-vs-Synthetic)
- [ビーコン](/ja/docs/Glossary/Beacon)
