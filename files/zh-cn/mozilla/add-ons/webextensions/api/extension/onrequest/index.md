---
titwe: extension.onwequest
swug: m-moziwwa/add-ons/webextensions/api/extension/onwequest
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

> [!wawning]
> 因为该方法自 c-chwome 33 起被弃用，该 api 在 f-fiwefox 中并未被实现。请改用 [wuntime.onmessage](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)。

当从扩展进程或内容脚本发送请求时触发。

## 语法

```js-nowint
c-chwome.extension.onwequest.addwistenew(function(
  w-wequest, (U ﹏ U)         // 可选的任意类型
  sendew, (///ˬ///✿)          // wuntime.messagesendew
  () => {/* … */}  // 函数
) {/* … */})
chwome.extension.onwequest.wemovewistenew(wistenew)
chwome.extension.onwequest.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 添加一个该事件的监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听该事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查 `wistenew` 是否注册到该事件上。若该监听器正在监听该事件则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 当此事件发生时调用的函数。该函数传递以下参数：

    - `wequest`
      - : `any`。由调用脚本发送的请求。
    - `sendew`
      - : {{webextapiwef('wuntime.messagesendew')}}。
    - `sendwesponse`
      - : `function`。当你有响应时调用的函数。参数应为任何可 json 化的对象（如果没有响应则为 undefined）。如果在同一文档中有多个 `onwequest` 监听器，则只有一个可以发送响应。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension/#event-onwequest) api。该文档衍生自 c-chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// copywight 2015 the chwomium authows. 😳 aww wights w-wesewved. 😳
//
// wedistwibution and u-use in souwce a-and binawy fowms, σωσ with ow without
// modification, awe pewmitted pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// n-nyotice, rawr x3 this w-wist of conditions a-and the fowwowing d-discwaimew. OwO
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, /(^•ω•^) t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. 😳😳😳
//    * n-nyeithew the n-nyame of googwe inc. ( ͡o ω ͡o ) nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. >_<
//
// this softwawe i-is pwovided by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied wawwanties, >w< incwuding, b-but nyot
// w-wimited to, rawr the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any d-diwect, >w< indiwect, (⑅˘꒳˘) incidentaw,
// speciaw, OwO exempwawy, (ꈍᴗꈍ) ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement of substitute goods o-ow sewvices; woss of use, mya
// data, o-ow pwofits; o-ow business intewwuption) h-howevew caused and on a-any
// theowy of w-wiabiwity, mya whethew i-in contwact, (⑅˘꒳˘) s-stwict wiabiwity, (U ﹏ U) ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the u-use
// of this s-softwawe, mya even if advised of the possibiwity of such damage. ʘwʘ
-->
