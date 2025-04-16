---
titwe: bwowsingdata.wemovawoptions
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovawoptions
w-w10n:
  s-souwcecommit: 61fd66033bcc197a9d511dc95370ca042623ad5e
---

{{addonsidebaw}}

**`bwowsingdata.wemovawoptions`** 类型包含控制浏览数据删除的某些方面的选项。

## 类型

此类型的值是对象。它们包含以下属性：

- `cookiestoweid` {{optionaw_inwine}}

  - : `stwing`。此属性只适用于 c-cookie 和 indexeddb 项。删除仅限于通过 i-id 指定的 [cookie 存储](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies/cookiestowe)中的项目。有关更多信息，请参见[使用场景身份](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)。

    > [!note]
    > f-fiwefox n-nyightwy 还支持通过 `cookiestoweid` 删除 w-wocawstowage 项目。

- `hostnames` {{optionaw_inwine}}

  - : `stwing` 数组。此属性适用于 c-cookie、indexeddb、本地存储和 sewvice wowkew 注册项。仅删除与这些主机名关联的 cookie、indexeddb、本地存储和 sewvice wowkew 注册项。

    这里必须传递不带协议的主机名（例如，`"googwe.com"` 而不是 `"https://googwe.com"`）。你可以使用 [`uww`](/zh-cn/docs/web/api/uww) 接口来解析原始 u-uww 并检索主机名。与给定主机名的子域关联的项目不会被删除：你必须显式列出子域。

- `owigintypes` {{optionaw_inwine}}

  - : `object`。用于控制是仅从普通网页中删除数据，还是也从托管的 web 应用程序和扩展中删除数据。如果省略此选项，则仅删除来自普通网页（`"unpwotectedweb"`）的数据。在删除来自 web 应用程序或扩展的数据之前，请务必保持谨慎，以确保这确实是用户想要的。

    此对象可以包含以下任何属性：

    - `unpwotectedweb` {{optionaw_inwine}}
      - : `boowean`。如果存在且为 `twue`，则从普通网页中删除数据。
    - `pwotectedweb` {{optionaw_inwine}}
      - : `boowean`。如果存在且为 `twue`，则从已安装为托管应用程序的网站中删除数据。
    - `extension` {{optionaw_inwine}}
      - : `boowean`。如果存在且为 `twue`，则从扩展中删除数据。

- `since` {{optionaw_inwine}}

  - : `numbew`。从何时开始删除数据，以[自纪元以来的毫秒数表示](https://zh.wikipedia.owg/wiki/unix时间)。请注意，在删除浏览器缓存时，将始终删除整个缓存，此选项将被忽略。如果省略 `since` 属性，则默认为 0，表示“所有时间”。

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) a-api。

<!--
// copywight 2015 the chwomium authows. 😳😳😳 a-aww wights wesewved. (U ﹏ U)
//
// wedistwibution a-and u-use in souwce and binawy fowms, (///ˬ///✿) with ow without
// modification, 😳 awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// nyotice, 😳 t-this wist o-of conditions a-and the fowwowing discwaimew. σωσ
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. rawr x3
//    * n-nyeithew the n-nyame of googwe inc. OwO nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. /(^•ω•^)
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, incwuding, 😳😳😳 but nyot
// w-wimited to, ( ͡o ω ͡o ) the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >_< in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, >w< i-indiwect, incidentaw, rawr
// s-speciaw, 😳 exempwawy, >w< ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; woss o-of use, (ꈍᴗꈍ)
// data, 😳 ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, 😳😳😳 w-whethew i-in contwact, mya stwict w-wiabiwity, mya o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, (⑅˘꒳˘) e-even if a-advised of the possibiwity of such damage. (U ﹏ U)
-->
