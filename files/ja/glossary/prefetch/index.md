---
title: プリフェッチ
slug: Glossary/Prefetch
tags:
  - Glossary
  - Prefetch
  - Reference
  - Web Performance
translation_of: Glossary/Prefetch
---
<p><span class="seoSummary">プリフェッチは、コンテンツが要求される可能性が高いことを前提にして、ユーザーが要求したときにコンテンツを即座にロードできるようにします。コンテンツはユーザーが明示的にリクエストすることなくダウンロードされ、将来の使用を想定してキャッシュされます。</span></p>

<h3 id="DNS_Prefetching" name="DNS_Prefetching"><strong>DNS プリフェッチ</strong></h3>

<p>ドメインの解決は、携帯電話のネットワークでは遅延のために時間がかかることがあります。検索エンジンの結果のように、クリックされる可能性のある外部ウェブサイトへのリンクが多数ある場合、DNS プリフェッチはドメイン名を事前に解決するため、ドメイン解決に関連するリクエスト時間を短縮し、読み込み時間が短縮されます。</p>

<pre class="notranslate">&lt;link rel="dns-prefetch" href="https://example.com/"&gt;</pre>

<h3 id="Link_prefetching" name="Link_prefetching"><strong>リンクのプリフェッチ</strong></h3>

<p>リンクのプリフェッチは、ユーザーがクリックする可能性の高いリンクを想定し、それらのリンクのコンテンツを予めダウンロードしておくことで、パフォーマンスを最適化するテクニックです。ユーザーがリンクをクリックすると、コンテンツはすでにダウンロードされているため、ページが即座にレンダリングされます。</p>

<p>プリフェッチヒントは HTTP ヘッダーで送信されます</p>

<pre class="notranslate">Link: ; rel=dns-prefetch,
      ; as=script; rel=preload,
      ; rel=prerender,
      ; as=style; rel=preload</pre>

<h3 id="Prefetch_attribute_value" name="Prefetch_attribute_value"><strong>属性値のプリフェッチ</strong></h3>

<p>ブラウザーは、prefetch 属性値付きの <code><a href="/ja/docs/Web/HTML/Element/link">&lt;link&gt;</a></code> タグが指示したコンテンツをプリフェッチするので、開発者はどのリソースをプリフェッチすべきかを制御することができます。</p>

<pre class="notranslate"> &lt;link rel="prefetch" href="https://www.example.com/solutions" /&gt;</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>defer</li>
 <li>async</li>
 <li><a href="/ja/docs/Web/HTML/Preloading_content">preload</a></li>
 <li><a href="/ja/docs/Glossary/Page_prediction">page prediction</a></li>
 <li><a href="/ja/docs/Learn/Performance/Lazy_loading">lazy loading</a></li>
</ul>
