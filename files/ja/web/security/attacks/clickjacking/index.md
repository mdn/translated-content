---
title: Clickjacking
slug: Web/Security/Attacks/Clickjacking
original_slug: Glossary/Clickjacking
---

{{GlossarySidebar}}

クリックジャッキングとは、ウェブサイトの利用者をだまして、悪意のあるリンクを無意識にクリックさせるインターフェイスベースの攻撃です。クリックジャッキングでは、攻撃者は、ウェブサイト内のボタンや正規のページに悪意のあるリンクを埋め込みます。攻撃が仕込まれた{{glossary("Site", "サイト")}}では、ユーザーが正規のリンクをクリックするたびに、攻撃者はそのユーザーの機密情報を取得し、最終的にインターネット上でのユーザーのプライバシーを侵害することになります。

クリックジャッキングは、[Content Security Policy (frame-ancestors)](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) の実装と、[Set-Cookie 属性](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#属性)の実装により防ぐことができます。

## さらに学ぶ

- [ウェブセキュリティ：クリックジャックからの保護](/ja/docs/Web/Security#クリックジャックからの保護)
- Wikipedia 上の [Clickjacking](https://en.wikipedia.org/wiki/Clickjacking) （英語）
- OWASP 上の [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) （英語）
