---
title: パフォーマンス予算
slug: Web/Performance/Guides/Performance_budgets
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

パフォーマンス予算は、退行を防止するための制限です。これは、ファイル、ファイル形式、ページに読み込まれたすべてのファイル、特定の指標（例えば [Time to Interactive](/ja/docs/Glossary/Time_to_interactive)）、カスタム指標（例えば Time to Hero Element）、または一定期間にわたるしきい値に適用できます。

## なぜパフォーマンス予算が必要なのか

予算は達成可能な目標を反映するものです。これは、使い勝手とその他のパフォーマンス指標（例：コンバージョン率）とのトレードオフです。

これらの目標は次の通りです。

- タイミングベース（例： [Time to Interactive](/ja/docs/Glossary/Time_to_interactive)、[First Contentful Paint](/ja/docs/Glossary/First_contentful_paint)）
- 数量ベース（例： JS ファイルの数／画像の総サイズ）
- ルールベース（例える PageSpeed インデックス、Lighthouse スコア）。

これらの主たる目的は退行を防止することですが、傾向を予測する洞察をすることができます（例えば 9 月には予算の 50% が 1 週間で支出されました）。

さらに、開発上のニーズを明らかにすることもできます（例えば、一般的な問題を解決するために、より小さな代替手段があるにもかかわらず、大規模なライブラリーが多くの場合選択される）。

## パフォーマンス予算をどのように定義するのか

予算には 2 つのレベルを記載するべきです。

- 警告
- エラー

警告レベルにより、開発や展開を妨げることなく、技術的負債を事前に計画し、積極的に対処することが可能になります。

エラーレベルは上限の制限であり、この値を超える変更は悪影響を存在させ、顕著な問題を引き起こします。

始めるためには、最初に、ユーザーが使用する端末と接続速度（例： 3G 接続の約 200 ドル相当の Android 端末）を複数の[ツール](/ja/docs/Learn_web_development/Extensions/Performance/Best_practices)を用いて測定する必要があります。これらの時点ベースの指標は、ファイルサイズの予算に対応させます。

直帰率を低減するための既定の基準値は、[Time to Interactive を 3G/4G 環境で 5 秒未満、その後の読み込みでは 2 秒未満に達成すること](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/)です。ただし、サイトの特定の目標やコンテンツによっては、他の指標に重点を置く選択も可能です。

ブログやニュースサイトのようなテキスト中心のサイトでは、[First Contentful Paint](/ja/docs/Glossary/First_contentful_paint) 指標がユーザー行動をより正確に反映する可能性があります（つまり、ユーザーが読み始められるまでの時間）。これにより、ファイル固有の予算（例：フォントサイズ）とその最適化方針が明確になります。（例： [font-display](/ja/docs/Web/CSS/Reference/At-rules/@font-face/font-display) を使用して[知覚パフォーマンス](/ja/docs/Learn_web_development/Extensions/Performance/Perceived_performance)を改善する）。

パフォーマンス予算の究極的な価値は、パフォーマンスがビジネス目標や製品目標に与える影響を関連付けることです。指標を定義する際には、[ユーザー体験](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)に焦点を当てるべきです。これは直帰率やコンバージョン率だけでなく、そのユーザーが再訪する可能性も左右するからです。

## パフォーマンス予算をどのように実装するか

開発中、新しい資産や変更された資産に対してチェックを実行するためのツールがいくつかあります。

- モジュールバンドラー（例：[webpack](https://webpack.js.org/)）には、資産が指定された制限を超えた場合に通知する[パフォーマンス機能](https://webpack.js.org/configuration/performance/)が備わっています。
- [Bundlesize](https://github.com/siddharthkp/bundlesize)は、継続的インテグレーション (CI) パイプライン内でファイルサイズを調べることができます。

ファイルサイズのチェックは退行に対する最初の防御線ですが、開発環境ではサードパーティ製スクリプトが不足している場合や、 [CDN](/ja/docs/Glossary/CDN) によって一般的に指定される最適化が適用されていない場合があるため、サイズを時間指標に対応させることは困難です。

最初の段階は、それぞれのブランチに対して比較対象となる開発ベースラインを定義することです。開発環境と本番環境の差異の精度は、本番環境との一致を向上させるための目標として使用することができます。

[Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) は [Travis CI](https://www.travis-ci.com/) と連携し、開発用 URL から使用できる状態で [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) および [Webpage Test](https://www.webpagetest.org/) の指標を収集します。ボットは提供する最小スコアに基づいて合格/不合格を判定します。

## パフォーマンス予算をどのように適用するのか

予算を圧迫する可能性のある追加要素を早期に特定できればできるほど、サイトの状態をより的確に分析し、最適化すべき箇所や不要なコードを特定しやすくなります。

ただし、複数の予算を設定し、柔軟に対応するべきです。これらは継続的な目標を反映するものであり、リスクや実験を許容することです。例えば、全体の読み込み時間を増加させるが、ユーザーエンゲージメント（ユーザーがページやサイトに滞在する時点）の向上を図る機能を導入する場合などが挙げられます。

パフォーマンス予算は、現在のユーザーにとって最適な動作を保護する手助けとなり、新たな市場を開拓し、独自の使い勝手を提供することができるようにします。

## 関連情報

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) by Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) by Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) by Tim Kadlec
