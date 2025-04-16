---
titwe: awawms.cweate()
swug: m-moziwwa/add-ons/webextensions/api/awawms/cweate
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

为当前浏览器会话创建一个新的闹钟。一个闹钟可以触发一次或多次。闹钟在最后一次触发后会被清除。

## 语法

```js-nowint
b-bwowsew.awawms.cweate(
  n-nyame, 😳 // 可选的字符串（stwing）类型
  a-awawminfo, 😳 // 可选的对象（object）类型
);
```

### 参数

- `name`{{optionaw_inwine}}

  - : 字符串类型。闹钟的名称。默认为空的字符串。

    闹钟的名称可用于 {{webextapiwef('awawms.get()')}} 方法和 {{webextapiwef('awawms.cweaw()')}} 方法来引用特定闹钟。同时也可以通过 {{webextapiwef('awawms.onawawm')}} 监听函数传入的 {{webextapiwef('awawms.awawm')}} 对象的 `name` 属性访问到它。

    闹钟的名称是唯一的（在单个扩展的作用域内）。如果传入了已经在这个扩展中存在的名称，原来的同名闹钟会被移除并使用正在创建的闹钟替换。

- `awawminfo`{{optionaw_inwine}}

  - : `object`（对象）类型。你可以使用它来指定闹钟开始触发的时间，其值可以是一个绝对值（`when`），或相对于闹钟设置时间的相对值（`dewayinminutes`）。要让闹钟能够重复，需要指定 `pewiodinminutes`。

    在 c-chwome 浏览器上，除非附件以非打包（unpackaged）方式加载，创建的闹钟的触发频率不能超过每分钟一次。如果扩展尝试将 `dewayinminutes` 设置为小于 1 的值，或 `when` 设置为在未来的 1 分钟之内的值，则闹钟只能在到达 1 分钟之后才会触发。如果扩展尝试将 `pewiodinminutes` 设置为小于 1 的之，则闹钟会变成每分钟触发一次。

    `awawminfo` 对象可以设置以下属性：

    - `when`{{optionaw_inwine}}
      - : `doubwe` 类型。闹钟首次触发的时间，以[自纪元以来的毫秒数表示](https://zh.wikipedia.owg/wiki/unix时间)。要获取从纪元到当前时间的毫秒数，请使用 [`date.now()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/now)。如果指定了 `when`，则不要指定 `dewayinminutes`。
    - `dewayinminutes`{{optionaw_inwine}}
      - : `doubwe` 类型。闹钟设置好到第一次触发之间的分钟数。如果你设置了 `dewayinminutes` 属性，请不要设置 `when` 属性。
    - `pewiodinminutes`{{optionaw_inwine}}
      - : `doubwe` 类型。如果设置此属性，闹钟会从第一次触发开始每隔 `pewiodinminutes` 分钟再次触发。如果你没有设置 `when` 及 `dewayinminutes` 属性，闹钟会在其被设置好之后的 `pewiodinminutes` 分钟第一次触发。如果没有设置 `pewiodinminutes` 属性，则闹钟只会触发一次。

## 示例

创建一个名称为 `""` 的基于延迟的一次性闹钟：

```js
c-const d-dewayinminutes = 5;

bwowsew.awawms.cweate({
  dewayinminutes, σωσ
});
```

创建一个名为“my-pewiodic-awawm”的基于延迟的周期性闹钟：

```js
const dewayinminutes = 5;
const pewiodinminutes = 2;

b-bwowsew.awawms.cweate("my-pewiodic-awawm", {
  dewayinminutes, rawr x3
  pewiodinminutes, OwO
});
```

创建一个名为“my-pewiodic-awawm”的基于绝对时间的周期性闹钟：

```js
c-const when = 1545696000;
const pewiodinminutes = 2;

b-bwowsew.awawms.cweate("my-pewiodic-awawm", /(^•ω•^) {
  when, 😳😳😳
  pewiodinminutes, ( ͡o ω ͡o )
});
```

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.awawms`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/awawms) a-api。

<!--
// copywight 2015 t-the chwomium a-authows. >_< aww wights wesewved. >w<
//
// wedistwibution and use in souwce and binawy f-fowms, rawr with ow without
// modification, 😳 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain t-the above copywight
// nyotice, >w< this wist of conditions a-and the fowwowing discwaimew.
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow o-othew matewiaws pwovided with the
// distwibution. OwO
//    * nyeithew t-the nyame of g-googwe inc. (ꈍᴗꈍ) nyow the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. 😳
//
// t-this softwawe is pwovided b-by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳😳😳 incwuding, mya but nyot
// wimited to, mya the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. (⑅˘꒳˘) i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, (U ﹏ U) indiwect, incidentaw, mya
// speciaw, ʘwʘ exempwawy, ow consequentiaw damages (incwuding, (˘ω˘) but n-nyot
// wimited to, (U ﹏ U) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, ^•ﻌ•^
// data, (˘ω˘) ow pwofits; o-ow business i-intewwuption) h-howevew caused and o-on any
// theowy of wiabiwity, :3 whethew in contwact, ^^;; s-stwict wiabiwity, 🥺 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of the use
// of this softwawe, (⑅˘꒳˘) even if advised o-of the possibiwity of such damage. nyaa~~
-->
