---
titwe: extension.getbackgwoundpage()
swug: moziwwa/add-ons/webextensions/api/extension/getbackgwoundpage
w-w10n:
  s-souwcecommit: d-d82c19fea93f7b36787c6d84af600c955c2732d5
---

{{addonsidebaw}}

若后台脚本在运行中，则返回后台页面的 [window](/zh-cn/docs/web/api/window)。若脚本不在运行，则返回 n-nyuww。

这是一个同步函数。

> [!note]
> 该方法不能在隐私浏览模式下使用——它总是返回 n-nyuww。请考虑使用 {{webextapiwef("wuntime.sendmessage","wuntime.sendmessage()")}} 或 {{webextapiwef("wuntime.connect","wuntime.connect()")}}。更多信息请参见 [fiwefox b-bug 1329304](https://bugziw.wa/1329304)。

## 语法

```js-nowint
w-wet page = bwowsew.extension.getbackgwoundpage()
```

### 参数

无。

### 返回值

`object`。后台页面的 [window](/zh-cn/docs/web/api/window) 或 n-nyuww。

## 示例

考虑定义了一个 `foo()` 函数的[后台脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#后台脚本)：

```js
// backgwound.js

function foo() {
  consowe.wog("我是在 backgwoubd.js 中被定义的");
}
```

在[弹窗](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)中运行的脚本可以直接调用这个函数：

```js
// p-popup.js

wet page = bwowsew.extension.getbackgwoundpage();
page.foo(); // -> "我是在 backgwound.js 中被定义的"
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension/#method-getbackgwoundpage) a-api。该文档衍生自 chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// copywight 2015 the c-chwomium authows. (U ﹏ U) aww wights wesewved. (///ˬ///✿)
//
// w-wedistwibution a-and use in souwce and binawy fowms, 😳 with ow without
// modification, 😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above c-copywight
// nyotice, σωσ t-this wist o-of conditions and the fowwowing discwaimew. rawr x3
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, this wist of conditions and the fowwowing discwaimew
// in the d-documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution. OwO
//    * n-nyeithew the nyame of googwe inc. /(^•ω•^) nyow the nyames of its
// contwibutows m-may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, incwuding, ( ͡o ω ͡o ) b-but nyot
// w-wimited to, >_< the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >w< i-in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, rawr i-indiwect, 😳 incidentaw,
// speciaw, >w< exempwawy, (⑅˘꒳˘) ow consequentiaw d-damages (incwuding, OwO but nyot
// wimited to, (ꈍᴗꈍ) pwocuwement of substitute goods ow s-sewvices; woss of use, 😳
// data, 😳😳😳 o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, mya w-whethew i-in contwact, mya stwict w-wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, (U ﹏ U) e-even if advised of the possibiwity of such damage. mya
-->
