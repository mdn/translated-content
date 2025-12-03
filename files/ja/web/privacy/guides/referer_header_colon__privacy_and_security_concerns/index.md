---
title: Referer ヘッダーのプライバシーとセキュリティの考慮事項
slug: Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns
original_slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}

[HTTP の Referer ヘッダー](/ja/docs/Web/HTTP/Reference/Headers/Referer)にまつわるプライバシーとセキュリティのリスクがあります。この記事ではこれらを説明し、これらのリスクを回避するためのアドバイスを提案します。

## リファラー問題

{{httpheader("Referer")}} （綴りに注意）ヘッダーには現在リクエストされているページへのリンクをたどる元のウェブページのアドレスが含まれています。これには、分析、ログ、キャッシュの最適化など、問題のない用途がかなりあります。しかし、情報の追跡や盗用など、もっと問題になる用途や、誤って機密情報を漏らすなどの副作用もあります。

例えば、フッターにソーシャルメディアへのリンクがある「パスワードリセット」ページを想像してみてください。リンクをクリックすると、情報を共有する方法によっては、ソーシャルメディアサイトがパスワードをリセットする URL を受け取り、共有された情報が使用されると、ユーザーのセキュリティを侵害する恐れがあります。

同じ論理で、サードパーティ側でホストされている画像がページに埋め込まれている場合、機密情報がサードパーティに漏洩する可能性があります。たとえセキュリティが損なわれていなくても、その情報はユーザーが共有してほしくないものかもしれません。

## どのように対処できるか

このリスクの多くは、アプリケーションの賢明な設計によって軽減することができます。賢明なアプリケーションは、パスワードリセット URL を一度だけの使用、または一意のユーザートークンと組み合わせた場合にのみ使用可能にし、機密データを異なる方法で送信することで、このようなリスクを取り除くことができます。

URL 経由で他の場所に機密データを渡すことを避けるために、可能な限り {{HTTPMethod("GET")}} ではなく {{HTTPMethod("POST")}} を使用すべきです。

サイトには常に {{glossary("HTTPS")}} を使用してください。これには多くのセキュリティ上の利点がありますが、HTTPS サイトは参照元情報を HTTPS 以外のサイトには決して送信しないという事実もあります。Web のほとんどが HTTPS を使用するようになった現在では、これはあまり意味をなさなくなってきていますが、それでも検討する価値はあります。

さらに、パスワードリセットページ、支払いフォーム、ログインエリアなど、ウェブサイトの安全な領域からサードパーティのコンテンツ ({{htmlelement("iframe")}} に埋め込まれたソーシャルネットワーキングウィジェットなど) を削除することを検討する必要があります。

また、このようなリスクを軽減するには、次のような方法があります。

- サーバー上の {{httpheader("Referrer-Policy")}} ヘッダーで、 {{httpheader("Referer")}} ヘッダーを通してどのような情報を送るかを制御します。繰り返しになりますが、`no-referrer` ディレクティブは Referer ヘッダーを完全に省略します
- そのような情報が漏れる危険性のある HTML 要素 ({{HTMLElement("img")}} や {{HTMLElement("a")}} など) 上の `referrerpolicy` 属性。これは、例えば、`Referer` ヘッダーが完全に送信されないようにするために、`no-referrer` に設定することができます
- そのような情報が漏れる危険性のある HTML 属性（{{HTMLElement("form")}} や {{HTMLElement("a")}} など）の [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性を [`noreferrer`](/ja/docs/Web/HTML/Reference/Attributes/rel/noreferrer) に設定する。
- {{HTMLElement("meta")}} 要素の [name](/ja/docs/Web/HTML/Reference/Elements/meta#name) が `referrer` で、コンテンツが `no-referrer` に設定されている場合、文書全体で Referer ヘッダーが無効になります。 [Referrer-Policy と HTML の統合](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy#html_との統合)を参照してください。
- 技術的な[終了ページ](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)

セキュリティを意識したサーバーサイドのフレームワークは、例えば、このような問題を緩和するための機能が組み込まれていることが多いです。

- [Django におけるセキュリティ](https://docs.djangoproject.com/ja/stable/topics/security/) (特に [クロスサイトリクエストフォージェリ (CSRF) の防御](https://docs.djangoproject.com/ja/stable/topics/security/#cross-site-request-forgery-csrf-protection) を参照してください)
- [helmetjs referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Node.js/Express アプリで Referrer-Policy を設定するためのミドルウェアです（セキュリティ規定の詳細については [Helmet](https://github.com/helmetjs) も参照してください）

## ポリシーと要件

プロジェクトチームのために、関連するリスクを軽減するために、そのような機能の使用方法を指定したセキュリティとプライバシーの要件を書くことは理にかなっているでしょう。これらの要件を書くためには、ウェブセキュリティの専門家の助けを借りて、ユーザーのニーズと福祉の両方を考慮し、[EU 一般データ保護規則](https://gdpr.eu/) (GDPR) のような法律で施行されているポリシーや規制のような他の問題も考慮する必要があります。

## 関連情報

- [Mozilla security team guidelines on Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
