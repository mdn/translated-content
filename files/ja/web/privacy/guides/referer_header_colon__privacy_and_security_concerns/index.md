---
title: Referer ヘッダーのプライバシーとセキュリティの考慮事項
slug: Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

[HTTP の Referer ヘッダー](/ja/docs/Web/HTTP/Reference/Headers/Referer)には、プライバシーとセキュリティ上のリスクがあります。この記事ではそのリスクを説明し、軽減する方法を紹介します。

## リファラー問題

{{httpheader("Referer")}} （この綴りに注意）ヘッダーには、リクエスト元のアドレスが含まれます。例えば、現在リクエストされているページへのリンク元となったウェブページや、画像などのリソースを読み込んでいるページのアドレスです。これには、分析、ログ記録、キャッシュの最適化など、問題のない用途が多くあります。一方、情報の追跡や窃取などの問題のある用途のほか、機密情報を誤って漏らすといった副作用もあります。

例えば、フッターにソーシャルメディアへのリンクがある「パスワードリセット」ページを想像してみてください。リンクをクリックすると、情報を共有する方法によっては、ソーシャルメディアサイトがパスワードをリセットする URL を受け取り、共有された情報が使用されると、ユーザーのセキュリティを侵害する恐れがあります。

同じ理屈で、サードパーティのサイトでホストされている画像をページに埋め込むと、機密情報がサードパーティに漏れる可能性があります。セキュリティが損なわれていなくても、ユーザーが共有したくない情報が含まれているかもしれません。

## どのように対処できるか

このリスクの多くは、アプリケーションを適切に設計することで軽減できます。例えば、パスワードリセット URL を一度しか使えないようにするか、一意のユーザートークンと組み合わせることで、リスクを取り除けます。機密データをより安全な方法で送信することでも、リスクを減らせます。

URL 経由で他の場所に機密データを渡すことを避けるために、可能な限り {{HTTPMethod("GET")}} ではなく {{HTTPMethod("POST")}} を使用すべきです。

サイトには常に {{glossary("HTTPS")}} を使用してください。これには多くのセキュリティ上の利点がありますが、HTTPS サイトは参照元情報を HTTPS 以外のサイトには決して送信しないという事実もあります。Web のほとんどが HTTPS を使用するようになった現在では、これはあまり意味をなさなくなってきていますが、それでも検討する価値はあります。

さらに、パスワードリセットページ、支払いフォーム、ログイン領域など、ウェブサイトの保護された領域からサードパーティのコンテンツ ({{htmlelement("iframe")}} に埋め込まれたソーシャルネットワーキングウィジェットなど) を削除することも検討してください。

また、このようなリスクを軽減するには、次のような方法があります。

- サーバー上の {{httpheader("Referrer-Policy")}} ヘッダーで、{{httpheader("Referer")}} ヘッダーを通して送る情報を制御します。例えば、`no-referrer` ディレクティブを指定すると、Referer ヘッダーが完全に省略されます。
- そのような情報が漏れる危険性のある HTML 要素 ({{HTMLElement("img")}} や {{HTMLElement("a")}} など) 上の `referrerpolicy` 属性。これは、例えば、`Referer` ヘッダーが完全に送信されないようにするために、`no-referrer` に設定することができます。
- そのような情報が漏れる危険性のある HTML 要素（{{HTMLElement("form")}} や {{HTMLElement("a")}} など）の [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性を [`noreferrer`](/ja/docs/Web/HTML/Reference/Attributes/rel/noreferrer) に設定します。
- {{HTMLElement("meta")}} 要素の [name](/ja/docs/Web/HTML/Reference/Elements/meta#name) を `referrer` にし、`content` を `no-referrer` に設定すると、文書全体で Referer ヘッダーが無効になります。[Referrer-Policy と HTML の統合](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy#html_との統合)を参照してください。
- 技術的な[終了ページ](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)<sup>(英語)</sup>の手法を使います。

セキュリティを重視したサーバーサイドフレームワークには、このような問題を軽減する機能が組み込まれていることがよくあります。例えば、次のものがあります。

- [Django におけるセキュリティ](https://docs.djangoproject.com/ja/stable/topics/security/) (特に [クロスサイトリクエストフォージェリ (CSRF) の防御](https://docs.djangoproject.com/ja/stable/topics/security/#cross-site-request-forgery-csrf-protection) を参照してください)
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Node.js/Express アプリで Referrer-Policy を設定するためのミドルウェアです（セキュリティ規定の詳細については [Helmet](https://github.com/helmetjs) も参照してください）

## ポリシーと要件

関連するリスクを軽減するため、プロジェクトチーム向けに、こうした機能の利用方法を定めたセキュリティとプライバシーの要件を作成するとよいでしょう。要件の作成にはウェブセキュリティの専門家の協力を得て、ユーザーのニーズと福祉に加え、[EU 一般データ保護規則](https://gdpr.eu/) (GDPR) などの法律で定められた方針や規制も考慮してください。

## 関連情報

- [Mozilla security team guidelines on Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)<sup>(英語)</sup>
