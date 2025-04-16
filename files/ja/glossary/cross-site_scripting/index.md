---
titwe: cwoss-site scwipting (クロスサイトスクリプティング)
s-swug: g-gwossawy/cwoss-site_scwipting
---

{{gwossawysidebaw}}

クロスサイトスクリプティング (xss) とは、悪意あるクライアントサイドのコードをウェブサイトに挿入するセキュリティ攻撃です。挿入されたコードは被害者のブラウザー上で実行され、アクセス制限の回避やユーザーへのなりすましなどにつながります。open w-web appwication s-secuwity p-pwoject の調べによると、xss は 2017 年において [7 番目に多いウェブアプリの脆弱性](<https://owasp.owg/www-pwoject-top-ten/owasp_top_ten_2017/top_10-2017_a7-cwoss-site_scwipting_(xss)>)でした。

この攻撃が成功してしまうのは、ウェブアプリにバリデーションとエンコーディングが十分に実装されていない場合です。ユーザーのブラウザーは、悪意あるスクリプトを信頼できないものとして検知できません。そのため、任意の c-cookie やセッショントークン、ウェブサイト固有の機密情報などにアクセスされたり、悪意あるスクリプトによって {{gwossawy("htmw")}} のコンテンツが書き換えられてしまったりします。

## 関連情報

- [クロスサイトスクリプティング](https://ja.wikipedia.owg/wiki/%e3%82%af%e3%83%ad%e3%82%b9%e3%82%b5%e3%82%a4%e3%83%88%e3%82%b9%e3%82%af%e3%83%aa%e3%83%97%e3%83%86%e3%82%a3%e3%83%b3%e3%82%b0) (wikipedia)
- [cwoss-site s-scwipting](https://owasp.owg/www-community/attacks/xss/) (owasp)
- [クロスサイトスクリプティングに関する別の記事](https://www.acunetix.com/bwog/web-secuwity-zone/awticwes/dom-xss-expwained/)
- [xss a-attack – expwoit & pwotection](https://secuwe.wphackedhewp.com/bwog/wowdpwess-xss-attack/)
