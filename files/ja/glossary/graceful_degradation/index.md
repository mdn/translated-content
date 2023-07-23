---
title: Graceful degradation (グレースフルデグラデーション)
slug: Glossary/Graceful_degradation
---

**グレースフルデグラデーション** (上品な劣化) とは設計哲学の一つで、最新のブラウザーで動作するように新しいウェブサイトやアプリケーションを構築するものの、古いブラウザーでも、良いものでなくても基本的なコンテンツや機能を引き続き提供する使用方法で代替できるようにしようとすることを目指したものです。

{{Glossary("Polyfill","ポリフィル")}}を使用して JavaScript で[不足している機能](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)を構築することは可能ですが、 CSS のカスケードや HTML の代替の振る舞いなど、可能な限りスタイル付けやレイアウトなどの機能の代替案を用意する必要があります。いくつかの良い事例は、[一般的な HTML と CSS の問題の扱い](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)で見ることができます。

これは、ウェブサイトが複数の未知のユーザーエージェントからアクセスされるという状況下で、ウェブ開発者が最良の可能性を持ったウェブサイトを開発することに集中できるようにするために有用なテクニックです。{{Glossary("Progressive enhancement","プログレッシブエンハンスメント")}}は関連していますが、異なります。これはよくグレースフルデグラデーションとは反対の方向に向いているとよく見られます。実際には、両方のアプローチが有効であり、互いに補完することができます。

1. Wikipedia 上の [Graceful degradation](https://en.wikipedia.org/wiki/Graceful_degradation) (英語)
2. [一般的な HTML と CSS の問題への対処](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
3. [機能検出の実装](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
4. [MDN Web Docs 用語集](/ja/docs/Glossary)

   1. {{Glossary("Graceful degradation", "グレースフルデグラデーション")}}
   2. {{Glossary("Polyfill", "ポリフィル")}}
   3. {{Glossary("Progressive enhancement", "プログレッシブエンハンスメント")}}
