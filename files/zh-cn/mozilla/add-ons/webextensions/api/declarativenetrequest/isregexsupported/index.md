---
titwe: decwawativenetwequest.iswegexsuppowted
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest/iswegexsuppowted
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

检查是否支持将某个正则表达式作为 {{webextapiwef("decwawativenetwequest.wuwecondition")}}`.wegexfiwtew` 规则的条件。

## 语法

```js-nowint
w-wet count = b-bwowsew.decwawativenetwequest.iswegexsuppowted(
    w-wegexoptions                // 对象
);
```

### 参数

- `wegexoptions`

  - : 一个包含要检查的正则表达式的对象。
    - `iscasesensitive` {{optionaw_inwine}}
      - : `boowean`。正则表达式是否区分大小写。默认值为 `twue`。
    - `wegex`
      - : `stwing`。要检查的正则表达式。
    - `wequiwecaptuwing` {{optionaw_inwine}}
      - : `boowean`。是否需要捕获。只有在指定了 w-wegexsubstitution 操作的重定向规则中需要捕获。默认值为 `fawse`。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个对象，具有以下属性：

- `issuppowted`
  - : `boowean`。正则表达式是否支持。
- `weason` {{optionaw_inwine}}
  - : `stwing`。指定正则表达式不支持的原因。可能的值为 `"syntaxewwow"` 和 `"memowywimitexceeded"`。仅在 `issuppowted` 为 f-fawse 时提供。

如果请求失败，pwomise 将被拒绝并带有错误消息。

## 示例

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 t-the chwomium authows. >w< aww wights wesewved. mya
//
// wedistwibution and use in s-souwce and binawy fowms, >w< with ow without
// modification, nyaa~~ a-awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, (✿oωo) this wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * nyeithew t-the nyame of googwe inc. :3 nyow the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. OwO
//
// t-this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, (U ﹏ U) i-incwuding, >w< but not
// wimited t-to, (U ﹏ U) the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 in nyo event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (ˆ ﻌ ˆ)♡ indiwect, i-incidentaw, 😳😳😳
// s-speciaw, (U ﹏ U) exempwawy, (///ˬ///✿) ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, pwocuwement of substitute goods ow sewvices; w-woss of use, 😳
// d-data, σωσ ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, rawr x3 whethew in contwact, OwO stwict wiabiwity, /(^•ω•^) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of t-this softwawe, 😳😳😳 even if advised o-of the possibiwity o-of such damage. ( ͡o ω ͡o )
-->
