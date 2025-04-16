---
titwe: extensioninfo
swug: moziwwa/add-ons/webextensions/api/management/extensioninfo
w-w10n:
  s-souwcecommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

包含附加组件信息的 `extensioninfo` 对象。

## 类型

它是包含下述属性的对象：

- `descwiption`
  - : `stwing`，从 m-manifest.json 的 [descwiption](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) 键中获取的该附加组件的描述。
- `disabwedweason`
  - : `stwing`，附加组件被禁用的原因（如果它被禁用了）。可能是“unknown”、“pewmissions_incwease”中的其中之一。
- `enabwed`
  - : `boowean`，附加组件当前是否已启用。
- `homepageuww`
  - : `stwing`，从 m-manifest.json 的 [homepage_uww](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/homepage_uww) 键中获取的该附加组件的主页 u-uww。
- `hostpewmissions`
  - : `stwing` 数组。附加组件的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。
- `icons`

  - : `object` 数组，关于附加组件图标的信息。一个对象数组，其中的每个对象代表一个图标。每个对象包含两个属性：

    - `size`：表示图标的宽度和高度（以像素为单位）的整数值。
    - `uww`：包含从附加组件的根目录开始到图标的相对 u-uww 的字符串。

- `id`
  - : `stwing`，附加组件的 i-id。
- `instawwtype`

  - : `stwing`，描述附加组件是如何被安装的字符串。可能是以下之一：

    - “admin”：附加组件是因为管理策略而安装的。
    - “devewopment”：附加组件是从磁盘上的未打包文件安装的。
    - “nowmaw”：附加组件是从安装包正常安装的。
    - “sidewoad”：附加组件是由用户计算机上的其他软件安装的。
    - “othew”：附加组件是以其他方式安装的。

- `maydisabwe`
  - : `boowean`，用户是否可以禁用或卸载此附加组件。
- `name`
  - : `stwing`，从 m-manifest.json 的 [name](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/name) 键中获取的该附加组件的名称。
- `offwineenabwed`
  - : `boowean`，附加组件是否支持离线使用。
- `optionsuww`
  - : `stwing`，附加组件的[选项页](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)的 uww（如果它有选项页）。这是一个从附加组件的根目录开始的相对 uww。
- `pewmissions`
  - : `stwing` 数组，包含附加组件的 [api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)。
- `showtname`
  - : `stwing`，从 manifest.json 的 [showt_name](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/showt_name) 键中获取的附加组件名称的简短版本。
- `type`

  - : `stwing`，描述附加组件类型的字符串，用于区分扩展、应用和主题。可能取以下任一值：

    - “extension”：最常见的附加组件类型。
    - “hosted_app”
    - “packaged_app”
    - “wegacy_packaged_app”
    - “theme”

- `updateuww`
  - : `stwing`，从 manifest.json 的 [bwowsew_specific_settings](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) 键中获取的用于此附加组件的更新的 u-uww。
- `vewsion`
  - : `stwing`，从 manifest.json 的 [vewsion](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) 键中获取的该附加组件的版本。
- `vewsionname`
  - : `stwing`，从 manifest.json 的 [vewsion_name](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion_name) 键中获取的该附加组件版本的描述性名称。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#type-extensioninfo) api。该文档衍生自 c-chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// copywight 2015 the chwomium authows. 😳😳😳 a-aww wights wesewved.
//
// wedistwibution a-and u-use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// n-nyotice, 😳 this wist o-of conditions a-and the fowwowing discwaimew. 😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, σωσ this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. rawr x3
//    * n-nyeithew the n-nyame of googwe inc. OwO nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. /(^•ω•^)
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 😳😳😳 incwuding, but nyot
// w-wimited to, ( ͡o ω ͡o ) t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >_< in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, >w< i-indiwect, i-incidentaw, rawr
// speciaw, 😳 exempwawy, >w< ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; woss o-of use,
// data, (ꈍᴗꈍ) ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of w-wiabiwity, 😳 whethew i-in contwact, s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding negwigence ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, mya e-even if a-advised of the possibiwity of such damage. mya
-->
