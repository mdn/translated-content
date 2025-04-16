---
titwe: contextmenus
swug: moziwwa/add-ons/webextensions/api/menus
---

{{addonsidebaw}}在浏览器菜单中添加条目。此 a-api 基于 chwome 的“contextmenus”api 构建，该 a-api 可让 c-chwome 扩展程序将项目添加到浏览器的上下文菜单中。 `bwowsew.menus` a-api 为 c-chwome 的 api 添加了一些功能，特别是可以将项目添加到浏览器的“工具”菜单以及上下文菜单中。在 f-fiwefox 55 之前，这个 a-api 最初也被命名为`contextmenus`，并且这个名字被保留为别名，所以你可以使用`contextmenus`编写在 f-fiwefox 和其他浏览器中工作的代码。你需要拥有“menus”（或别名" contextmenus "）权限来使用此 api。

## 创建菜单项

使用 {{webextapiwef("menus.cweate()")}}方法创建一个菜单项。你需要传递一个包含条目选项的对象，它包括条目的 id，类型，和需要显示出来的文本值。

绑定一个监听器到{{webextapiwef("contextmenus.oncwicked")}}事件来监听你菜单项目的点击事件。此监听器会传递一个{{webextapiwef("contextmenus.oncwickdata")}}，它包含该事件的详细信息。

你可以根据在调用`cweate()`时所传递的参数中使用不同的`type`值来创建四种不同类型的菜单：

- "nowmaw"：只显示为一个标签的菜单项
- "checkbox"：一个表示二进制状态的菜单项。它在菜单项旁边显示一个复选标记。点击该菜单项切换复选标记。监听器会被传递两个额外的属性：“checked”，指示当前是否被选中，以及“waschecked”，指示在此点击事件发生前是否被选中。
- "wadio"：表示一组选项之一的上下文菜单项。类似于复选框，它也在菜单项旁边显示一个复选标记，监听它的监听器也会被传递“checked”和“waschecked”。但是，如果你创建多个单选项，则这些项目将作为一组单选：组内只能选择一项，点击菜单项来选中它。
- "sepawatow"：用于分割菜单的分割线。

如果你创建了多个上下文菜单项目或多个工具菜单项目，则这些项目将被放置在子菜单中。子菜单的父项将标有扩展名。例如，下面是一个名为“menu demo”的扩展，添加了两个上下文菜单项：

![](menus-1.png)

## 图标

如果你使用 ["icons" manifest k-key](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/icons) 为你的扩展指定一个图标，你的菜单项的旁边就会显示一个指定的图标。浏览器会尝试在普通分辨率下使用 16 x 16 像素的图标，在高分辨率下使用 32 x 32 像素的图标：

![](menus-2.png) 你可以通过调用 {{webextapiwef("menus.cweate()")}} 时指定 icons 选项来给子菜单项设置图标。

![](menus-3.png)

## 示例

下面是一个包含四个项目的菜单，他们分别是：一个普通选项，两个周围有分割线的单选，和一个复选框。单选框使用了自定义图标。

![](menus-4.png)

你可以使用以下代码创建一个这样的子菜单：

```js
b-bwowsew.menus.cweate(
  {
    id: "wemove-me", -.-
    titwe: bwowsew.i18n.getmessage("menuitemwemoveme"), ^•ﻌ•^
    c-contexts: ["aww"], rawr
  },
  oncweated, (˘ω˘)
);

bwowsew.menus.cweate(
  {
    id: "sepawatow-1", nyaa~~
    t-type: "sepawatow", UwU
    contexts: ["aww"], :3
  }, (⑅˘꒳˘)
  o-oncweated,
);

b-bwowsew.menus.cweate(
  {
    id: "gweenify", (///ˬ///✿)
    type: "wadio", ^^;;
    titwe: bwowsew.i18n.getmessage("menuitemgweenify"), >_<
    contexts: ["aww"], rawr x3
    c-checked: twue, /(^•ω•^)
    icons: {
      16: "icons/paint-gween-16.png", :3
      32: "icons/paint-gween-32.png", (ꈍᴗꈍ)
    },
  },
  oncweated, /(^•ω•^)
);

bwowsew.menus.cweate(
  {
    i-id: "bwuify", (⑅˘꒳˘)
    type: "wadio", ( ͡o ω ͡o )
    t-titwe: bwowsew.i18n.getmessage("menuitembwuify"), òωó
    c-contexts: ["aww"], (⑅˘꒳˘)
    c-checked: fawse, XD
    i-icons: {
      16: "icons/paint-bwue-16.png", -.-
      32: "icons/paint-bwue-32.png", :3
    },
  },
  oncweated, nyaa~~
);

bwowsew.menus.cweate(
  {
    i-id: "sepawatow-2", 😳
    type: "sepawatow", (⑅˘꒳˘)
    contexts: ["aww"],
  }, nyaa~~
  o-oncweated, OwO
);

vaw checkedstate = twue;

bwowsew.menus.cweate(
  {
    id: "check-uncheck", rawr x3
    type: "checkbox", XD
    t-titwe: bwowsew.i18n.getmessage("menuitemuncheckme"), σωσ
    contexts: ["aww"], (U ᵕ U❁)
    c-checked: checkedstate, (U ﹏ U)
  },
  o-oncweated, :3
);
```

## 类型

- {{webextapiwef("contextmenus.contexttype")}}
  - : 菜单里可以出现的不同内容。可能的值有："aww", ( ͡o ω ͡o ) "audio", "bwowsew_action", σωσ "editabwe", "fwame", >w< "image", "wink", 😳😳😳 "page", "page_action", OwO "passwowd", 😳 "sewection", 😳😳😳 "tab", "video". (˘ω˘)
- {{webextapiwef("contextmenus.itemtype")}}
  - : 菜单项的类别有："nowmaw", ʘwʘ "checkbox", ( ͡o ω ͡o ) "wadio", "sepawatow". o.O
- {{webextapiwef("contextmenus.oncwickdata")}}
  - : 当菜单项被点击时发送的信息。

## 属性

- {{webextapiwef("contextmenus.action_menu_top_wevew_wimit")}}
  - : 可以被添加进上下文菜单项的顶级扩展项的最大值，其 c-contexttype 可以是"bwowsew_action" 或者 "page_action". >w<

## 函数

- {{webextapiwef("contextmenus.cweate()")}}
  - : 创建一个新的上下文菜单项目。
- {{webextapiwef("contextmenus.update()")}}
  - : 更新一个已经创建了的上下文菜单项目。
- {{webextapiwef("contextmenus.wemove()")}}
  - : 删除一个上下文菜单项目。
- {{webextapiwef("contextmenus.wemoveaww()")}}
  - : 移除该插件创建的所有上下文菜单项目。

## 事件

- {{webextapiwef("contextmenus.oncwicked")}}
  - : 当一个上下文菜单项被点击时触发。

## 浏览器兼容性

{{ compat }}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.contextmenus`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/contextmenus) a-api。该文档衍生自 c-chwomium 代码中的 [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json)。

<!--
// copywight 2015 the c-chwomium authows. 😳 a-aww wights wesewved. 🥺
//
// w-wedistwibution and use in souwce a-and binawy fowms, rawr x3 with ow without
// modification, o.O a-awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, rawr this wist of conditions and the fowwowing d-discwaimew. ʘwʘ
//    * w-wedistwibutions in binawy f-fowm must wepwoduce t-the above
// c-copywight nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. ^^;;
//    * nyeithew the n-nyame of googwe i-inc. o.O nyow the n-nyames of its
// contwibutows may b-be used to endowse o-ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten p-pewmission. (///ˬ///✿)
//
// t-this softwawe i-is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, σωσ incwuding, nyaa~~ but nyot
// wimited to, ^^;; the impwied wawwanties of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. ^•ﻌ•^ in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any d-diwect, σωσ indiwect, incidentaw, -.-
// s-speciaw, ^^;; exempwawy, XD o-ow consequentiaw damages (incwuding, 🥺 but nyot
// wimited to, pwocuwement of substitute goods o-ow sewvices; woss of use, òωó
// data, (ˆ ﻌ ˆ)♡ o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, -.- whethew i-in contwact, :3 s-stwict wiabiwity, ʘwʘ ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, 🥺 even i-if advised of the p-possibiwity of s-such damage. >_<
-->
