---
title: 実践的なセキュリティ実装ガイド
slug: Web/Security/Practical_implementation_guides
l10n:
  sourceCommit: a7c51be4aa79186586c9f8133f551bbdc4a9ddec
---

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}

ユーザーはウェブサイト上で、名前、住所、パスワード、銀行口座情報などの機密データを頻繁に入力します。ウェブ開発者としては、このような情報を盗み、個人的な利益のために利用しようとする悪意のある行為から、この情報を保護することが極めて重要です。[ウェブセキュリティ](/ja/docs/Web/Security)の焦点は、これらの悪用からウェブサイトを保護し、ユーザーの機密データを安全に保つことです。

このページでは、ウェブサイトにセキュリティ機能を実装するためのベストプラクティスをまとめたガイドを紹介します。これらのガイドは、すべてのセキュリティシナリオをカバーしているわけではなく、お客様のウェブサイトのセキュリティを完全に保証するものではありませんが、これらのガイドの情報やベストプラクティスに従うことで、お客様のサイトのセキュリティを大幅に強化することができます。

## HTTP セキュリティの基本

この章のガイドでは、セキュリティ上の問題を軽減するために HTTP ヘッダーを正しく実装するためのベストプラクティスを要約しており、 [HTTP Observatory](/ja/observatory) ツールと直接関連しています。

Observatory はウェブサイトに対してセキュリティ監査を行い、セキュリティ上の問題点を発見した場合は、その問題点を修正するための推奨事項とともに、評価とスコアを提供します。 HTTP Observatory のテストで検出された問題の解決方法については、これらのガイドで説明されています。このツールは、各問題に関連するガイドにリンクしており、効果的な解決策を導く手助けをします。興味深いことに、 Mozilla の内部開発チームは、ウェブサイトを実装する際に、セキュリティのベストプラクティスが確実に適用されるよう、このガイドラインを使用しています。

以下の表のガイドは、記載されているセキュリティ機能の実装を推奨する順に記載されています。この順序は、各機能のセキュリティへの影響と、運用および開発の両方の観点から見た実装の容易さの組み合わせに基づいて決定されています。表には、各機能の影響、実装の難易度、必要性の有無、および簡単な説明が記載されています。

| ガイド                                                                                                                    | 影響 | 難易度 | 必須   | 説明                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ---- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TLS 設定](/ja/docs/Web/Security/Practical_implementation_guides/TLS#tls_configuration)                                   | 中   | 中     | はい   | ユーザーベースに最適な最も安全な[トランスポートレイヤーセキュリティ](/ja/docs/Glossary/TLS) (TLS) 設定を使用しましょう。                                                                                                                                      |
| TLS: [リソース読み込み](/ja/docs/Web/Security/Practical_implementation_guides/TLS#resource_loading)                       | 最大 | 低     | はい   | パッシブリソースとアクティブリソースの両方を HTTPS 経由で読み込みます。                                                                                                                                                                                       |
| TLS: [HTTP リダイレクト](/ja/docs/Web/Security/Practical_implementation_guides/TLS#http_redirection)                      | 最大 | 低     | はい   | ウェブサイトは HTTPS にリダイレクトしなければなりません。 API エンドポイントは HTTP を完全に無効にすべきです。                                                                                                                                                |
| TLS: [HSTS 実装](/ja/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) | 高   | 低     | はい   | HTTP Strict transport security (HSTS) を使用して、たとえ選択された元のスキームが HTTP であったとしても、ユーザーエージェントに HTTPS のみでサイトに接続するよう通知する。                                                                                     |
| [クリックジャッキング防止](/ja/docs/Web/Security/Practical_implementation_guides/Clickjacking)                            | 高   | 低     | はい   | [クリックジャッキング](/ja/docs/Web/Security/Attacks/Clickjacking)を防止するために、サイトが {{htmlelement("iframe")}} 内にどのように組み込まれるかを制御します。                                                                                             |
| [CSRF 防止](/ja/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)                                        | 高   | 不明   | 様々   | `SameSite` クッキーと anti-CSRF トークンを使用して、[クロスサイトリクエストフォージェリー](/ja/docs/Glossary/CSRF) (CSRF) を防止します。                                                                                                                      |
| [安全なクッキー設定](/ja/docs/Web/Security/Practical_implementation_guides/Cookies)                                       | 高   | 中     | はい   | すべてのクッキーを可能な限り制限的に設定する。                                                                                                                                                                                                                |
| [CORP の実装](/ja/docs/Web/Security/Practical_implementation_guides/CORP)                                                 | 高   | 中     | はい   | Cross-Origin Resource Policy (CORP) を使用して、投機的なサイドチャネル攻撃から保護します。                                                                                                                                                                    |
| [MIME タイプの検証](/ja/docs/Web/Security/Practical_implementation_guides/MIME_types)                                     | 低   | 低     | いいえ | すべてのウェブサイトがすべてのリソースに対して適切な [MIME タイプ](/ja/docs/Glossary/MIME_type)を設定していることを確認してください。                                                                                                                         |
| [CSP の実装](/ja/docs/Web/Security/Practical_implementation_guides/CSP)                                                   | 高   | 高     | はい   | [コンテンツセキュリティポリシー](/ja/docs/Glossary/CSP) (CSP) により、サイトに読み込むコードをきめ細かく制御し、そのコードが実行できることを制御することで、クロスサイトスクリプティング ({{Glossary("Cross-site_scripting", "XSS")}}) の脆弱性を軽減します。 |
| [CORS の実装](/ja/docs/Web/Security/Practical_implementation_guides/CORS)                                                 | 高   | 低     | はい   | ページのコンテンツにアクセスし、そこからリソースを読み込むために必要な非同一のオリジンを、[オリジン間リソース](/ja/docs/Glossary/CORS) (CORS) を使用して定義します。                                                                                          |
| [リファラーポリシーの設定](/ja/docs/Web/Security/Practical_implementation_guides/Referrer_policy)                         | 低   | 低     | はい   | ユーザーのプライバシーを向上させ、 {{httpheader("Referer")}} ヘッダー経由の社内URLの漏洩を防止します。                                                                                                                                                        |
| [robots.txt の設定](/ja/docs/Web/Security/Practical_implementation_guides/Robots_txt)                                     | 低   | 低     | いいえ | ウェブサイト上の特定のパスをクロールしないようロボット（検索エンジンのインデクサーなど）に指示することで、ロボットの動作を制御します。                                                                                                                        |
| [SRI の実装](/ja/docs/Web/Security/Practical_implementation_guides/SRI)                                                   | 低   | 低     | いいえ | [サブリソース完全性](/ja/docs/Glossary/SRI) (SRI) を使用して、取得したリソース（CDN など）が予期せぬ操作なしに配信されていることを確認します。                                                                                                                |

## ユーザー情報のセキュリティ

- [フォームの自動入力を無効にするには](/ja/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
  - : フォームフィールドには自動入力があります。つまり、ユーザーがフォームに入力した値を記憶し、次回訪問時には自動的にその値が入力されることになります。ある特定のデータに関しては、この機能を無効にしたほうが適切かもしれません。

## 関連情報

- [Open Web Application Security Project (OWASP): Cheatsheet series](https://cheatsheetseries.owasp.org/)
- [OWASP: Attacks](https://owasp.org/www-community/attacks/)
