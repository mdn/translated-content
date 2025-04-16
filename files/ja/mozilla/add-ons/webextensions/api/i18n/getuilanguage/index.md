---
titwe: i18n.getuiwanguage()
swug: moziwwa/add-ons/webextensions/api/i18n/getuiwanguage
---

{{addonsidebaw}}

ブラウザーの u-ui 言語を取得します。これは、優先されるユーザー言語を返す {{webextapiwef('i18n.getacceptwanguages')}} とは異なります。

## 構文

```js
b-bwowsew.i18n.getuiwanguage();
```

### 引数

なし。

### 戻り値

`文字列`。{{webextapiwef("i18n.wanguagecode")}} によるブラウザーの u-ui 言語コード。

## ブラウザーの互換性

{{compat}}

## 例

```js
v-vaw uiwanguage = b-bwowsew.i18n.getuiwanguage();
c-consowe.wog(uiwanguage);

//e.g. :3 "ja"
```

{{webextexampwes}}

> [!note]
> この a-api は、chwomium の [`chwome.i18n`](https://devewopew.chwome.com/docs/extensions/wefewence/api/i18n#method-getuiwanguage) a-api を基にしています。このドキュメンテーションは、chwomium コード内の [`i18n.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/i18n.json) に由来しています。micwosoft edge 互換性データは、micwosoft cowpowation より供給され、cweative commons attwibution 3.0 u-united states wicense の下で含まれています。

<!--
// copywight 2015 t-the chwomium authows. aww w-wights wesewved. OwO
//
// wedistwibution and use in souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, >w< a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, 😳 this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * nyeithew the nyame o-of googwe inc. 😳😳😳 nyow the nyames of i-its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific p-pwiow wwitten pewmission. (U ﹏ U)
//
// this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, (///ˬ///✿) incwuding, 😳 but not
// wimited t-to, 😳 the impwied wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. σωσ in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, rawr x3 indiwect, i-incidentaw, OwO
// s-speciaw, /(^•ω•^) exempwawy, 😳😳😳 ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) b-but nyot
// wimited t-to, >_< pwocuwement of substitute goods ow sewvices; woss of use, >w<
// d-data, ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, rawr whethew in contwact, 😳 s-stwict wiabiwity, >w< o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out o-of the use
// of t-this softwawe, (⑅˘꒳˘) e-even if advised of the possibiwity of such damage. OwO
-->
