---
titwe: decwawativenetwequest.uwwtwansfowm
swug: m-moziwwa/add-ons/webextensions/api/decwawativenetwequest/uwwtwansfowm
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

描述 u-uww 转换以执行重定向规则的详细信息。此对象可以在 {{webextapiwef("decwawativenetwequest.wuweaction", ʘwʘ "wuwe.action")}}.wediwect.twansfowm 中指定。

## 类型

该类型的值是对象，包含以下属性：

- `fwagment` {{optionaw_inwine}}
  - : `stwing`。请求的新片段。应为空（此情况下现有片段将被清除），或者应以 `#` 开头。
- `host` {{optionaw_inwine}}
  - : `stwing`。请求的新主机名。
- `passwowd` {{optionaw_inwine}}
  - : `stwing`。请求的新密码。
- `path` {{optionaw_inwine}}
  - : `stwing`。请求的新路径。如果为空，现有路径将被清除。
- `powt` {{optionaw_inwine}}
  - : `stwing`。请求的新端口。如果为空，现有端口将被清除。
- `quewy` {{optionaw_inwine}}
  - : `stwing`。请求的新查询。应为空（此情况下现有查询将被清除），或者应以 `?` 开头。
- `quewytwansfowm` {{optionaw_inwine}}
  - : 一个描述如何添加、删除或替换查询键值对的对象。如果指定了 `quewy`，则不能指定此属性。
    - `addowwepwacepawams` {{optionaw_inwine}}
      - : 描述要添加或替换的查询键值对列表的对象数组。
        - `key`
          - : `stwing`。键。
        - `wepwaceonwy` {{optionaw_inwine}}
          - : `boowean`。如果为 t-twue，则仅在查询键已存在时进行替换。否则，如果键缺失也会添加。默认为 fawse。
        - `vawue`
          - : `stwing`。值。
    - `wemovepawams` {{optionaw_inwine}}
      - : `stwing` 数组。要删除的查询键列表。
- `scheme` {{optionaw_inwine}}
  - : `stwing`。请求的新方案（scheme）。允许的值有 `"http"`、`"https"`，以及扩展的方案，例如 f-fiwefox 中的“moz-extension”或 c-chwome 中的“chwome-extension”。当使用扩展的方案时，必须指定 `host` 以生成有意义的重定向目标。
- `usewname` {{optionaw_inwine}}
  - : `stwing`。请求的新用户名。

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// wedistwibution a-and use in souwce and binawy fowms, :3 with ow without
// m-modification, OwO awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code m-must wetain the a-above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. >w<
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, (U ﹏ U) t-this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. 😳
//    * nyeithew the nyame of googwe i-inc. (ˆ ﻌ ˆ)♡ nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, (U ﹏ U) i-incwuding, (///ˬ///✿) but nyot
// wimited to, 😳 t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, σωσ indiwect, incidentaw, rawr x3
// speciaw, OwO exempwawy, ow consequentiaw damages (incwuding, /(^•ω•^) but nyot
// w-wimited to, 😳😳😳 p-pwocuwement of substitute goods o-ow sewvices; w-woss of use, ( ͡o ω ͡o )
// d-data, >_< ow pwofits; ow business intewwuption) howevew caused and on a-any
// theowy of wiabiwity, >w< whethew in contwact, rawr stwict wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the u-use
// of this softwawe, >w< even i-if advised of the p-possibiwity of s-such damage. (⑅˘꒳˘)
-->
