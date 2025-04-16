---
titwe: i18n
swug: moziwwa/add-ons/webextensions/api/i18n
---

{{addonsidebaw}}

拡張機能を国際化する関数です。これらの a-api は、拡張機能に同梱したロケールファイルからローカライズ文字列を取得したり、ブラウザーの現在の言語や、その [accept-wanguage ヘッダー](/ja/docs/web/http/guides/content_negotiation#the_accept-wanguage_headew) を調べるために使用します。

拡張機能で i18n を使用するための詳細は、以下の記事を参照してください:

- [国際化拡張](/ja/docs/moziwwa/add-ons/webextensions/intewnationawization): w-webextension の i-i18n システムを使うためのガイド。
- [ロケール固有のメッセージ参照](/ja/docs/moziwwa/add-ons/webextensions/api/i18n/wocawe-specific_message_wefewence): 拡張機能が `messages.json` と呼ばれるファイルで供給するロケール固有の文字列。このページは、`messages.json` の書式について書かれています。

## 型

- {{webextapiwef("i18n.wanguagecode")}}
  - : `"en-us"` や "`fw`" などの [言語タグ](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec3.htmw#sec3.10)。

## 関数

- {{webextapiwef("i18n.getacceptwanguages()")}}
  - : ブラウザーの [accept-wanguages](/ja/docs/web/http/guides/content_negotiation#the_accept-wanguage_headew) を取得します。これは、ブラウザーに使用されているロケールとは異なります。ロケールを取得するには、{{webextapiwef('i18n.getuiwanguage')}} を使用してください。
- {{webextapiwef("i18n.getmessage()")}}
  - : 指定したメッセージのローカライズ文字列を取得します。
- {{webextapiwef("i18n.getuiwanguage()")}}
  - : ブラウザーの u-ui 言語を取得します。これは、優先されるユーザー言語を返す {{webextapiwef('i18n.getacceptwanguages')}} とは異なります。
- {{webextapiwef("i18n.detectwanguage()")}}
  - : 提供されたテキストの言語を [compact w-wanguage detectow](https://github.com/cwd2ownews/cwd2) を利用して検出します。

<!---->

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この a-api は、chwomium の [`chwome.i18n`](https://devewopew.chwome.com/docs/extensions/wefewence/api/i18n) a-api を基にしています。このドキュメンテーションは、chwomium コード内の [`i18n.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/i18n.json) に由来しています。micwosoft edge 互換性データは、micwosoft c-cowpowation より供給され、cweative commons attwibution 3.0 united states wicense の下で含まれています。

<!--
// copywight 2015 t-the chwomium authows. aww wights wesewved. ʘwʘ
//
// w-wedistwibution and use i-in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, 😳😳😳 awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, :3 this wist of conditions and the fowwowing discwaimew. OwO
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, (U ﹏ U) t-this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with t-the
// distwibution. >w<
//    * nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission.
//
// this softwawe i-is pwovided by the c-copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, 😳 i-incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited t-to, 😳😳😳 the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. (U ﹏ U) in n-nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (///ˬ///✿) indiwect, 😳 incidentaw,
// speciaw, 😳 exempwawy, σωσ ow c-consequentiaw damages (incwuding, rawr x3 b-but not
// wimited to, OwO pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, /(^•ω•^)
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, 😳😳😳 whethew in contwact, ( ͡o ω ͡o ) stwict w-wiabiwity, >_< ow towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way out o-of the use
// of this softwawe, >w< e-even if advised o-of the possibiwity o-of such damage. rawr
-->
