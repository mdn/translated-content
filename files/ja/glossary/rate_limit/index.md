---
title: Rate limit (レート制限)
slug: Glossary/Rate_limit
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{GlossarySidebar}}

コンピューター、特にネットワークにおいて、**レート制限** (rate limiting) とは、指定された時間内に実行できる操作の数を制御できるということ、通常はシステムに過負荷がかかりパフォーマンスが低下するのを避けることを意味します。例えば、サーバーは指定された時間内に単一のクライアントから受け入れられるリクエストの数を制限することができ、サーバー全体のパフォーマンスを最適化するだけでなく、{{glossary("DoS attack", "DoS 攻撃")}}のような攻撃を軽減することもできます。

レート制限は通常、{{glossary("throttle", "スロットリング")}}と同義ですが、{{glossary("debounce", "デバウンシング")}}は、特定のケースにおいてより良い意味づけと使い勝手を提供する、もう一つの有効な戦略です。

## 関連情報

- 用語項目:
  - {{Glossary("Debounce", "デバウンス")}}
  - {{Glossary("Throttle", "スロットル")}}
- {{HTTPStatus("429", "429 Too Many Requests")}}
- [What is rate limiting? | Rate limiting and bots](https://www.cloudflare.com/en-gb/learning/bots/what-is-rate-limiting/) (cloudflare.com)
