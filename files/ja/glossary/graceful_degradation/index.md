---
title: Graceful degradation (グレースフルデグラデーション)
slug: Glossary/Graceful_degradation
tags:
  - graceful degradation
  - グレースフルデグラデーション
  - 用語集
  - 設計
translation_of: Glossary/Graceful_degradation
---
<p><strong>グレースフルデグラデーション</strong> (上品な劣化) とは設計哲学の一つで、最新のブラウザーで動作するように新しいウェブサイトやアプリケーションを構築するものの、古いブラウザーでも、良いものでなくても基本的なコンテンツや機能を引き続き提供する使用方法で代替できるようにしようとすることを目指したものです。</p>

<p>{{Glossary("Polyfill","ポリフィル")}}を使用して JavaScript で<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection">不足している機能</a>を構築することは可能ですが、 CSS のカスケードや HTML の代替の振る舞いなど、可能な限りスタイル付けやレイアウトなどの機能の代替案を用意する必要があります。いくつかの良い事例は、<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS">一般的な HTML と CSS の問題の扱い</a>で見ることができます。</p>

<p>これは、ウェブサイトが複数の未知のユーザーエージェントからアクセスされるという状況下で、ウェブ開発者が最良の可能性を持ったウェブサイトを開発することに集中できるようにするために有用なテクニックです。{{Glossary("Progressive enhancement","プログレッシブエンハンスメント")}}は関連していますが、異なります。これはよくグレースフルデグラデーションとは反対の方向に向いているとよく見られます。実際には、両方のアプローチが有効であり、互いに補完することができます。</p>

<section id="Quick_links">
<ol>
 <li>Wikipedia 上の {{Interwiki("wikipedia", "en:Graceful degradation")}} (英語)</li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS">一般的な HTML と CSS の問題への対処</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection">機能検出の実装</a></li>
 <li><a href="/ja/docs/Glossary">MDN Web Docs 用語集</a>
  <ol>
   <li>{{Glossary("Graceful degradation", "グレースフルデグラデーション")}}</li>
   <li>{{Glossary("Polyfill", "ポリフィル")}}</li>
   <li>{{Glossary("Progressive enhancement", "プログレッシブエンハンスメント")}}</li>
  </ol>
 </li>
</ol>
</section>
