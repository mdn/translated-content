---
title: プライバシーサンドボックス
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 793bcbe2dd88fc553d2c4c918c4dec4899704022
---

Google の**プライバシーサンドボックス**プロジェクトは、サードパーティクッキーやその他のトラッキング機構を必要とせずにサイト横断的な利用ケースに対応するための一連の提案であり、サードパーティクッキーが廃止された将来のウェブに向けた準備を目的としています。主なテーマには、身元確認とトラッキング保護、プライバシーをより尊重した広告ソリューション、潜伏トラッキングの防止、および閲覧コンテキスト間での安全なデータ共有などが含まれます。

> [!WARNING]
> これらの機能の一部については、現在、1 社以上のブラウザベンダーが反対しています。
> 詳細については、それぞれの API のエントリーポイントを参照してください。

## プライバシーサンドボックスの機能

- [帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : 開発者が、コンバージョン（例えば、ユーザーがあるサイトに埋め込まれた広告をクリックし、その後で販売者のサイトで商品を購入するといったケース）を測定し、そのコンバージョンに関するレポートを確認できるようになります。この機能は、サードパーティのトラッキングクッキーに依存することなく実現されます。
- [バウンストラッキング対策](/ja/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : バウンストラッキング対策は、ヒューリスティック手法を用いてトラッカーサイトを特定し、それらに関連するクッキーやその他の状態データを定期的に削除することで、ユーザーをバウンストラッキングから保護します。
- [独立分離状態を持つクッキー (CHIPS)](/ja/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : **パーティション化クッキー**とも呼ばれる CHIPS は、開発者がクッキーを分離されたストレージに格納できるようにするもので、最上位サイトごとに個別のクッキーストアが用意されます。
- [フェンスフレーム API](/ja/docs/Web/API/Fenced_frame_API)
  - : {{htmlelement("fencedframe")}} 要素に埋め込まれたコンテンツを制御する機能を提供します。これにより、{{htmlelement("iframe")}} のプライバシー上の課題を解決しつつ、コンテンツを埋め込むことが可能になります。
- [プライベート状態トークン API](/ja/docs/Web/API/Private_State_Token_API)
  - : ユーザーの身元情報を共有したり、ウェブサイト間でのユーザーの行動を追跡されたりすることなく、ある閲覧コンテキストから別の閲覧コンテキストへ、ユーザーの真正性に対する信頼を伝達する仕組みを提供します。
- [Related website sets](https://privacysandbox.google.com/cookies/related-website-sets-integration) {{deprecated_inline}}
  - : 企業が異なるサイト間の関係を宣言するための仕組みです。対応しているブラウザーでは、[ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API) を通じて、特定の目的のために、それらのサイト間でサードパーティクッキーへの限定的なアクセスを許可するようになります。
- [共有ストレージ API](/ja/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : プライバシーを保護しつつ（つまり、トラッキングクッキーに依存することなく）、パーティション化されていないクロスサイトデータへのアクセスを可能にするクライアントサイドのストレージ機構です。
- [トピック API](/ja/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : 開発者が、サードパーティクッキーによるユーザーの動きのトラッキングではなく、ユーザーがさまざまなページを閲覧する際にブラウザが収集したトピックに基づいて、**興味関心に基づく広告 (IBA)** などのユースケースを実装するための仕組みを提供します。

## その他のトピック

- [プライバシーサンドボックスの登録](/ja/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : 特定のプライバシーサンドボックス機能を利用するには、開発者は**登録**手続きを完了する必要があります。

## 関連情報

- [プライバシー サンドボックス](https://privacysandbox.google.com/) - privacysandbox.google.com
