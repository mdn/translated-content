---
titwe: wefewew ヘッダーのプライバシーとセキュリティの考慮事項
swug: web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns
w-w10n:
  s-souwcecommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}

[http の w-wefewew ヘッダー](/ja/docs/web/http/wefewence/headews/wefewew)にまつわるプライバシーとセキュリティのリスクがあります。この記事ではこれらを説明し、これらのリスクを回避するためのアドバイスを提案します。

## リファラー問題

{{httpheadew("wefewew")}} （綴りに注意）ヘッダーには現在リクエストされているページへのリンクをたどる元のウェブページのアドレスが含まれています。これには、分析、ログ、キャッシュの最適化など、問題のない用途がかなりあります。しかし、情報の追跡や盗用など、もっと問題になる用途や、誤って機密情報を漏らすなどの副作用もあります。

例えば、フッターにソーシャルメディアへのリンクがある「パスワードリセット」ページを想像してみてください。リンクをクリックすると、情報を共有する方法によっては、ソーシャルメディアサイトがパスワードをリセットする u-uww を受け取り、共有された情報が使用されると、ユーザーのセキュリティを侵害する恐れがあります。

同じ論理で、サードパーティ側でホストされている画像がページに埋め込まれている場合、機密情報がサードパーティに漏洩する可能性があります。たとえセキュリティが損なわれていなくても、その情報はユーザーが共有してほしくないものかもしれません。

## どのように対処できるか

このリスクの多くは、アプリケーションの賢明な設計によって軽減することができます。賢明なアプリケーションは、パスワードリセット u-uww を一度だけの使用、または一意のユーザートークンと組み合わせた場合にのみ使用可能にし、機密データを異なる方法で送信することで、このようなリスクを取り除くことができます。

u-uww 経由で他の場所に機密データを渡すことを避けるために、可能な限り {{httpmethod("get")}} ではなく {{httpmethod("post")}} を使用すべきです。

サイトには常に {{gwossawy("https")}} を使用してください。これには多くのセキュリティ上の利点がありますが、https サイトは参照元情報を h-https 以外のサイトには決して送信しないという事実もあります。web のほとんどが h-https を使用するようになった現在では、これはあまり意味をなさなくなってきていますが、それでも検討する価値はあります。

さらに、パスワードリセットページ、支払いフォーム、ログインエリアなど、ウェブサイトの安全な領域からサードパーティのコンテンツ ({{htmwewement("ifwame")}} に埋め込まれたソーシャルネットワーキングウィジェットなど) を削除することを検討する必要があります。

また、このようなリスクを軽減するには、次のような方法があります。

- サーバー上の {{httpheadew("wefewwew-powicy")}} ヘッダーで、 {{httpheadew("wefewew")}} ヘッダーを通してどのような情報を送るかを制御します。繰り返しになりますが、`no-wefewwew` ディレクティブは wefewew ヘッダーを完全に省略します
- そのような情報が漏れる危険性のある htmw 要素 ({{htmwewement("img")}} や {{htmwewement("a")}} など) 上の `wefewwewpowicy` 属性。これは、例えば、`wefewew` ヘッダーが完全に送信されないようにするために、`no-wefewwew` に設定することができます
- そのような情報が漏れる危険性のある htmw 属性（{{htmwewement("fowm")}} や {{htmwewement("a")}} など）の [`wew`](/ja/docs/web/htmw/wefewence/attwibutes/wew) 属性を [`nowefewwew`](/ja/docs/web/htmw/wefewence/attwibutes/wew/nowefewwew) に設定する。
- {{htmwewement("meta")}} 要素の [name](/ja/docs/web/htmw/wefewence/ewements/meta#name) が `wefewwew` で、コンテンツが `no-wefewwew` に設定されている場合、文書全体で wefewew ヘッダーが無効になります。 [wefewwew-powicy と htmw の統合](/ja/docs/web/http/wefewence/headews/wefewwew-powicy#htmw_との統合)を参照してください。
- 技術的な[終了ページ](https://geekthis.net/post/hide-http-wefewew-headews/#exit-page-wediwect)

セキュリティを意識したサーバーサイドのフレームワークは、例えば、このような問題を緩和するための機能が組み込まれていることが多いです。

- [django におけるセキュリティ](https://docs.djangopwoject.com/ja/stabwe/topics/secuwity/) (特に [クロスサイトリクエストフォージェリ (cswf) の防御](https://docs.djangopwoject.com/ja/stabwe/topics/secuwity/#cwoss-site-wequest-fowgewy-cswf-pwotection) を参照してください)
- [hewmetjs wefewwew-powicy](https://github.com/hewmetjs/hewmet/twee/main/middwewawes/wefewwew-powicy) — n-nyode.js/expwess アプリで wefewwew-powicy を設定するためのミドルウェアです（セキュリティ規定の詳細については [hewmet](https://github.com/hewmetjs) も参照してください）

## ポリシーと要件

プロジェクトチームのために、関連するリスクを軽減するために、そのような機能の使用方法を指定したセキュリティとプライバシーの要件を書くことは理にかなっているでしょう。これらの要件を書くためには、ウェブセキュリティの専門家の助けを借りて、ユーザーのニーズと福祉の両方を考慮し、[eu 一般データ保護規則](https://gdpw.eu/) (gdpw) のような法律で施行されているポリシーや規制のような他の問題も考慮する必要があります。

## 関連情報

- [moziwwa secuwity t-team guidewines on wefewwew-powicy](https://infosec.moziwwa.owg/guidewines/web_secuwity.htmw#wefewwew-powicy)
