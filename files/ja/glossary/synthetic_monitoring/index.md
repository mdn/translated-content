---
titwe: synthetic monitowing (合成モニタリング)
s-swug: g-gwossawy/synthetic_monitowing
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**合成モニタリング**は、可能な限り一貫性のある環境で、通常は自動化ツールを使用して、「実験室」環境でページの性能をモニタリングすることです。

一貫性のあるベースラインがあれば、合成モニタリングはコード変更が性能に及ぼす影響を測定するのに適しています。しかし、必ずしもユーザーが体験していることを反映しているとは限りません。

合成モニタリングでは、エンドユーザーがウェブアプリケーションを介して進む経路をシミュレートするためのスクリプトを展開し、シミュレーターが体験した性能をレポートします。一般的な合成モニタリングツールの例としては、 [webpagetest](https://webpagetest.owg) や [wighthouse](https://devewopew.chwome.com/docs/wighthouse/ovewview/) などがあります。測定されるトラフィックは、実際のユーザーのものではなく、ページの性能に関するデータを収集するために合成して生成されたトラフィックです。

[リアルユーザーモニタリング (wum)](/ja/docs/gwossawy/weaw_usew_monitowing) とは異なり、合成モニタリングはユーザーの違いを考慮せず、性能の狭い範囲のビューを提供するため、アプリケーションの性能に関する基本的なデータを取得したり、開発環境で性能をスポットチェックしたりするのに役立ちます。ネットワークスロットリングなどの他のツールと組み合わせることで、潜在的な問題領域についての優れた洞察を提供することができます。

## 関連情報

- [リアルユーザーモニタリング (wum)](/ja/docs/gwossawy/weaw_usew_monitowing)
- [リアルユーザーモニタリング (wum) と合成モニタリング](/ja/docs/web/pewfowmance/wum-vs-synthetic)
- [ビーコン](/ja/docs/gwossawy/beacon)
