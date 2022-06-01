---
title: Cross-site scripting (クロスサイトスクリプティング)
slug: Glossary/Cross-site_scripting
tags:
  - クロスサイトスクリプティング
  - DOM
  - 用語集
  - セキュリティ
  - XSS
  - exploit
translation_of: Glossary/Cross-site_scripting
---
クロスサイトスクリプティング (XSS) とは、悪意あるクライアントサイドのコードをウェブサイトに挿入するセキュリティ攻撃です。挿入されたコードは被害者のブラウザー上で実行され、アクセス制限の回避やユーザーへのなりすましなどにつながります。Open Web Application Security Project の調べによると、XSS は 2017 年において [7 番目に多いウェブアプリの脆弱性](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>)でした。

この攻撃が成功してしまうのは、ウェブアプリにバリデーションとエンコーディングが十分に実装されていない場合です。ユーザーのブラウザーは、悪意あるスクリプトを信頼できないものとして検知できません。そのため、任意の Cookie やセッショントークン、ウェブサイト固有の機密情報などにアクセスされたり、悪意あるスクリプトによって {{glossary("HTML")}} のコンテンツが書き換えられてしまったりします。

## 関連情報

- [クロスサイトスクリプティング](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0) (Wikipedia)
- [Cross-site scripting](https://owasp.org/www-community/attacks/xss/) (OWASP)
- [クロスサイトスクリプティングに関する別の記事](https://www.acunetix.com/blog/web-security-zone/articles/dom-xss-explained/)
- [XSS Attack – Exploit & Protection](https://secure.wphackedhelp.com/blog/wordpress-xss-attack/)
