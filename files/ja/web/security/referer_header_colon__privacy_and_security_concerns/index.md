---
title: Referer ヘッダーのプライバシーとセキュリティの考慮事項
slug: 'Web/Security/Referer_header:_privacy_and_security_concerns'
tags:
  - Privacy
  - Referrer Policy
  - Security
  - referer
  - referrer
  - セキュリティ
  - プライバシー
translation_of: 'Web/Security/Referer_header:_privacy_and_security_concerns'
---
<p class="summary"><a href="/ja/docs/Web/HTTP/Headers/Referer">HTTP の Referer ヘッダー</a>にまつわるプライバシーとセキュリティのリスクがあります。この記事ではこれらを説明し、これらのリスクを回避するためのアドバイスを提案します。</p>

<h2 id="The_referrer_problem" name="The_referrer_problem">リファラー問題</h2>

<p>{{httpheader("Referer")}} (綴りに注意) ヘッダーには現在リクエストされているページへのリンクをたどる元のウェブページのアドレスが含まれています。これには、分析、ログ、キャッシュの最適化など、問題のない用途がかなりあります。しかし、情報の追跡や盗用など、もっと問題になる用途や、誤って機密情報を漏らすなどの副作用もあります。</p>

<p>例えば、フッターにソーシャルメディアへのリンクがある「パスワードリセット」ページを想像してみてください。リンクをクリックすると、情報を共有する方法によっては、ソーシャルメディアサイトがパスワードをリセットする URL を受け取り、共有された情報が使用されると、ユーザーのセキュリティを侵害する恐れがあります。</p>

<p>同じ論理で、サードパーティ側でホストされている画像がページに埋め込まれている場合、機密情報がサードパーティに漏洩する可能性があります。たとえセキュリティが損なわれていなくても、その情報はユーザーが共有してほしくないものかもしれません。</p>

<h2 id="How_can_we_fix_this" name="How_can_we_fix_this">どのように対処できるか</h2>

<p>このリスクの多くは、アプリケーションの賢明な設計によって軽減することができます。賢明なアプリケーションは、パスワードリセット URL を一度だけの使用、または一意のユーザートークンと組み合わせた場合にのみ使用可能にし、機密データを異なる方法で送信することで、このようなリスクを取り除くことができます。</p>

<p>URL 経由で他の場所に機密データを渡すことを避けるために、可能な限り {{HTTPMethod("GET")}} ではなく {{HTTPMethod("POST")}} を使用すべきです。</p>

<p>サイトには常に {{glossary("HTTPS")}} を使用してください。これには多くのセキュリティ上の利点がありますが、HTTPS サイトは参照元情報を HTTPS 以外のサイトには決して送信しないという事実もあります。Web のほとんどが HTTPS を使用するようになった現在では、これはあまり意味をなさなくなってきていますが、それでも検討する価値はあります。</p>

<p>さらに、パスワードリセットページ、支払いフォーム、ログインエリアなど、Web サイトの安全な領域からサードパーティのコンテンツ ({{htmlelement("iframe")}} に埋め込まれたソーシャルネットワーキングウィジェットなど) を削除することを検討する必要があります。</p>

<p>また、このようなリスクを軽減するには、次のような方法があります。</p>

<ul>
 <li>サーバ上の {{httpheader("Referrer-Policy")}} ヘッダで、<code>Referer</code> ヘッダを通してどのような情報を送るかを制御します。繰り返しになりますが、<code>no-referrer</code> ディレクティブは Referer ヘッダを完全に省略します</li>
 <li>そのような情報が漏れる危険性のある HTML 要素 ({{HTMLElement("img")}} や {{HTMLElement("a")}} など) 上の <code>referrerpolicy</code> 属性。これは、例えば、<code>Referer</code> ヘッダーが完全に送信されないようにするために、<code>no-referrer</code> に設定することができます</li>
 <li>そのような情報が漏れる危険性のある HTML 要素 ({{HTMLElement("img")}} や {{HTMLElement("a")}} など) で <code>no-referrer</code> に設定されている <code>rel</code> 属性。詳細については、<a href="/ja/docs/Web/HTML/Link_types">リンク種別</a>と <code>no-referrer</code> の検索を参照してください</li>
 <li>技術的な<a href="https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect">終了ページ</a></li>
</ul>

<p>セキュリティを意識したサーバーサイドのフレームワークは、例えば、このような問題を緩和するための機能が組み込まれていることが多いです。</p>

<ul>
 <li><a href="https://docs.djangoproject.com/ja/3.1/topics/security/">Django におけるセキュリティ</a> (特に <a href="https://docs.djangoproject.com/ja/3.1/topics/security/#cross-site-request-forgery-csrf-protection">クロス・サイト・リクエスト・フォージェリ(CSRF)の防御</a> を参照してください)</li>
 <li><a href="https://github.com/helmetjs/helmet/tree/d75632db7dece10210e3a1db1a36d6dec686697d/middlewares/referrer-policy">helmetjs referrer-policy </a>— Node.js/Express アプリで Referrer-Policy を設定するためのミドルウェアです (セキュリティ規定の詳細については <a href="https://github.com/helmetjs">helmetjs</a> も参照してください)</li>
</ul>

<h2 id="ポリシーと要件">ポリシーと要件</h2>

<p>プロジェクトチームのために、関連するリスクを軽減するために、そのような機能の使用方法を指定したセキュリティとプライバシーの要件を書くことは理にかなっているでしょう。これらの要件を書くためには、ウェブセキュリティの専門家の助けを借りて、ユーザーのニーズと福祉の両方を考慮し、<a href="https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules_en">EU 一般データ保護規則 (GDPR)</a> のような法律で施行されているポリシーや規制のような他の問題も考慮する必要があります。</p>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li><a href="https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy">Mozilla security team guidelines on Referrer-Policy</a></li>
</ul>
