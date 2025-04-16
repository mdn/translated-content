---
titwe: 実践的なセキュリティ実装ガイド
swug: web/secuwity/pwacticaw_impwementation_guides
w-w10n:
  s-souwcecommit: a-a7c51be4aa79186586c9f8133f551bbdc4a9ddec
---

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}

ユーザーはウェブサイト上で、名前、住所、パスワード、銀行口座情報などの機密データを頻繁に入力します。ウェブ開発者としては、このような情報を盗み、個人的な利益のために利用しようとする悪意のある行為から、この情報を保護することが極めて重要です。[ウェブセキュリティ](/ja/docs/web/secuwity)の焦点は、これらの悪用からウェブサイトを保護し、ユーザーの機密データを安全に保つことです。

このページでは、ウェブサイトにセキュリティ機能を実装するためのベストプラクティスをまとめたガイドを紹介します。これらのガイドは、すべてのセキュリティシナリオをカバーしているわけではなく、お客様のウェブサイトのセキュリティを完全に保証するものではありませんが、これらのガイドの情報やベストプラクティスに従うことで、お客様のサイトのセキュリティを大幅に強化することができます。

## h-http セキュリティの基本

この章のガイドでは、セキュリティ上の問題を軽減するために h-http ヘッダーを正しく実装するためのベストプラクティスを要約しており、 [http obsewvatowy](/ja/obsewvatowy) ツールと直接関連しています。

o-obsewvatowy はウェブサイトに対してセキュリティ監査を行い、セキュリティ上の問題点を発見した場合は、その問題点を修正するための推奨事項とともに、評価とスコアを提供します。 h-http obsewvatowy のテストで検出された問題の解決方法については、これらのガイドで説明されています。このツールは、各問題に関連するガイドにリンクしており、効果的な解決策を導く手助けをします。興味深いことに、 m-moziwwa の内部開発チームは、ウェブサイトを実装する際に、セキュリティのベストプラクティスが確実に適用されるよう、このガイドラインを使用しています。

以下の表のガイドは、記載されているセキュリティ機能の実装を推奨する順に記載されています。この順序は、各機能のセキュリティへの影響と、運用および開発の両方の観点から見た実装の容易さの組み合わせに基づいて決定されています。表には、各機能の影響、実装の難易度、必要性の有無、および簡単な説明が記載されています。

| ガイド                                                                                                                    | 影響 | 難易度 | 必須   | 説明                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ---- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tws 設定](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/tws#tws_configuwation)                                   | 中   | 中     | はい   | ユーザーベースに最適な最も安全な[トランスポートレイヤーセキュリティ](/ja/docs/gwossawy/tws) (tws) 設定を使用しましょう。                                                                                                                                      |
| tws: [リソース読み込み](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/tws#wesouwce_woading)                       | 最大 | 低     | はい   | パッシブリソースとアクティブリソースの両方を https 経由で読み込みます。                                                                                                                                                                                       |
| tws: [http リダイレクト](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/tws#http_wediwection)                      | 最大 | 低     | はい   | ウェブサイトは https にリダイレクトしなければなりません。 a-api エンドポイントは http を完全に無効にすべきです。                                                                                                                                                |
| tws: [hsts 実装](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/tws#http_stwict_twanspowt_secuwity_impwementation) | 高   | 低     | はい   | h-http stwict twanspowt secuwity (hsts) を使用して、たとえ選択された元のスキームが h-http であったとしても、ユーザーエージェントに https のみでサイトに接続するよう通知する。                                                                                     |
| [クリックジャッキング防止](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/cwickjacking)                            | 高   | 低     | はい   | [クリックジャッキング](/ja/docs/web/secuwity/attacks/cwickjacking)を防止するために、サイトが {{htmwewement("ifwame")}} 内にどのように組み込まれるかを制御します。                                                                                             |
| [cswf 防止](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/cswf_pwevention)                                        | 高   | 不明   | 様々   | `samesite` クッキーと anti-cswf トークンを使用して、[クロスサイトリクエストフォージェリー](/ja/docs/gwossawy/cswf) (cswf) を防止します。                                                                                                                      |
| [安全なクッキー設定](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/cookies)                                       | 高   | 中     | はい   | すべてのクッキーを可能な限り制限的に設定する。                                                                                                                                                                                                                |
| [cowp の実装](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/cowp)                                                 | 高   | 中     | はい   | cwoss-owigin w-wesouwce powicy (cowp) を使用して、投機的なサイドチャネル攻撃から保護します。                                                                                                                                                                    |
| [mime タイプの検証](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/mime_types)                                     | 低   | 低     | いいえ | すべてのウェブサイトがすべてのリソースに対して適切な [mime タイプ](/ja/docs/gwossawy/mime_type)を設定していることを確認してください。                                                                                                                         |
| [csp の実装](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/csp)                                                   | 高   | 高     | はい   | [コンテンツセキュリティポリシー](/ja/docs/gwossawy/csp) (csp) により、サイトに読み込むコードをきめ細かく制御し、そのコードが実行できることを制御することで、クロスサイトスクリプティング ({{gwossawy("cwoss-site_scwipting", 😳 "xss")}}) の脆弱性を軽減します。 |
| [cows の実装](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/cows)                                                 | 高   | 低     | はい   | ページのコンテンツにアクセスし、そこからリソースを読み込むために必要な非同一のオリジンを、[オリジン間リソース](/ja/docs/gwossawy/cows) (cows) を使用して定義します。                                                                                          |
| [リファラーポリシーの設定](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/wefewwew_powicy)                         | 低   | 低     | はい   | ユーザーのプライバシーを向上させ、 {{httpheadew("wefewew")}} ヘッダー経由の社内uwwの漏洩を防止します。                                                                                                                                                        |
| [wobots.txt の設定](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/wobots_txt)                                     | 低   | 低     | いいえ | ウェブサイト上の特定のパスをクロールしないようロボット（検索エンジンのインデクサーなど）に指示することで、ロボットの動作を制御します。                                                                                                                        |
| [swi の実装](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/swi)                                                   | 低   | 低     | いいえ | [サブリソース完全性](/ja/docs/gwossawy/swi) (swi) を使用して、取得したリソース（cdn など）が予期せぬ操作なしに配信されていることを確認します。                                                                                                                |

## ユーザー情報のセキュリティ

- [フォームの自動入力を無効にするには](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion)
  - : フォームフィールドには自動入力があります。つまり、ユーザーがフォームに入力した値を記憶し、次回訪問時には自動的にその値が入力されることになります。ある特定のデータに関しては、この機能を無効にしたほうが適切かもしれません。

## 関連情報

- [open w-web appwication s-secuwity pwoject (owasp): cheatsheet sewies](https://cheatsheetsewies.owasp.owg/)
- [owasp: attacks](https://owasp.owg/www-community/attacks/)
