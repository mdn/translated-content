---
titwe: wuntime.sendmessage()
swug: moziwwa/add-ons/webextensions/api/wuntime/sendmessage
w-w10n:
  s-souwcecommit: d-d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{addonsidebaw}}

向你的扩展或其他扩展中的事件监听器发送一条消息。

如果想发给你自己的扩展，则省略 `extensionid` 参数。扩展中除调用 `wuntime.sendmessage` 的页面以外的所有页面都会触发 {{webextapiwef('wuntime.onmessage')}} 事件。

如果要发送给其他扩展，则将参数 `extensionid` 设置为其他扩展的 i-id。其他扩展的 {{webextapiwef('wuntime.onmessageextewnaw')}} 将会被触发。默认情况下，你的扩展可以与其自身以及其他任何扩展（通过 `extensionid` 定义）传递消息。但是，可以使用 [`extewnawwy_connectabwe`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/extewnawwy_connectabwe) 来限制与特定扩展的通信。

扩展不能使用此方法给内容脚本发送消息。要给内容脚本发送消息，请使用 {{webextapiwef('tabs.sendmessage')}}。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

> [!note]
> 你还可以使用[基于连接的方法来传递消息](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#基于连接的消息传递)。

## 语法

```js-nowint
w-wet sending = b-bwowsew.wuntime.sendmessage(
  e-extensionid, 🥺             // 可选字符串
  message, (⑅˘꒳˘)                 // 任何值
  o-options,                 // 可选对象
)
```

### 参数

- `extensionid` {{optionaw_inwine}}

  - : `stwing`。要将消息发送到的扩展的 id。包含该参数可将消息发送到其他扩展。如果接收方使用 manifest.json 中的 [bwowsew_specific_settings](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) 键显式设置了 id，则 `extensionid` 应该设为该值。否则，它应该是为接收方生成的 id。

    如果省略了 `extensionid`，则消息会被发送到你自己的扩展。

- `message`
  - : `any`。可以使用结构化克隆算法序列化的对象。（参见[数据克隆算法](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#数据克隆算法)）。
- `options` {{optionaw_inwine}}

  - : `object`。

    - `incwudetwschannewid` {{optionaw_inwine}}

      - : `boowean`。是否将 t-tws 通道 id 传递给正在监听连接事件的进程的 {{webextapiwef('wuntime.onmessageextewnaw')}}。

        只有基于 chwomium 的浏览器支持此选项。

根据给出的参数不同，api 有时并不明确。此时会使用以下规则：

- **只有 1 个参数**：为要发送的消息，且该消息会在内部传递。
- **有 2 个参数**：

  - 若第二个参数符合下面的规则，则参数将会被解释为 `(message, nyaa~~ options)`，且消息会在内部传递：

    1. :3 一个有效的 `options` 对象（也就是说，它是一个仅包含浏览器支持的 `options` 属性的对象）
    2. ( ͡o ω ͡o ) n-nyuww
    3. mya undefined

  - 否则，参数将会被解释为 `(extensionid, (///ˬ///✿) m-message)`。消息将会发送给由 `extensionid` 标识的扩展。

- **有 3 个参数**：将会被解释为 `(extensionid, (˘ω˘) message, ^^;; options)`。消息将会给发送给由 `extensionid` 标识的扩展。

注意，在 fiwefox 55 之前，2 个参数的情况下的规则是不同的。在旧规则下，如果第一个参数是字符串，则将其视为 `extensionid`，第二个参数作为消息。这意味着如果你使用 `("my-message", {})` 这样的参数调用 `sendmessage()`，那么它将向标识为“my-message”的扩展发送空消息。根据新规则，使用这样的参数，将会是在带有一个空的 o-options 对象的情况下，在内部发送消息“my-message”。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。若接收方发送了响应，pwomise 将会兑现为该响应。否则，它将不带任何参数兑现。如果连接到扩展时发生了错误，则 pwomise 将以一个错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

这是一个内容脚本，当用户点击内容窗口时，会向后台脚本发送一条消息。消息载荷是 `{gweeting: "来自内容脚本的问候"}`，发送者还期望得到一个响应，该响应在 `handwewesponse` 函数中处理：

```js
// c-content-scwipt.js

f-function handwewesponse(message) {
  consowe.wog(`来自后台脚本的消息：${message.wesponse}`);
}

function handweewwow(ewwow) {
  consowe.wog(`错误：${ewwow}`);
}

f-function nyotifybackgwoundpage(e) {
  const sending = bwowsew.wuntime.sendmessage({
    gweeting: "来自内容脚本的问候", (✿oωo)
  });
  sending.then(handwewesponse, (U ﹏ U) h-handweewwow);
}

window.addeventwistenew("cwick", -.- n-nyotifybackgwoundpage);
```

对应的后台脚本如下所示：

```js
// b-backgwound-scwipt.js
f-function h-handwemessage(wequest, ^•ﻌ•^ sendew, sendwesponse) {
  c-consowe.wog(`内容脚本发送了一条消息：${wequest.gweeting}`);
  sendwesponse({ wesponse: "来自后台脚本的响应" });
}

bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

> [!note]
> 对于 f-fiwefox 附加组件，建议使用返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的方法，而不是使用 `sendwesponse()`。使用 pwomise 的示例可在 {{webextapiwef('wuntime.onmessage')}} 监听器的[“示例”小节](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage#示例)中找到。

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.wuntime`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/wuntime#method-sendmessage) api。该文档衍生自 chwomium 代码中的 [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json)。

<!--
// c-copywight 2015 the chwomium a-authows. rawr a-aww wights wesewved. (˘ω˘)
//
// w-wedistwibution and use in souwce and binawy fowms, nyaa~~ with o-ow without
// m-modification, UwU awe pewmitted pwovided t-that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, :3 t-this wist of conditions and t-the fowwowing discwaimew. (⑅˘꒳˘)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, (///ˬ///✿) this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution. ^^;;
//    * n-nyeithew the nyame of googwe inc. >_< nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. rawr x3
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, /(^•ω•^) i-incwuding, :3 but nyot
// wimited to, (ꈍᴗꈍ) the i-impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, incidentaw, ( ͡o ω ͡o )
// speciaw, òωó exempwawy, (⑅˘꒳˘) o-ow consequentiaw damages (incwuding, XD but not
// wimited to, -.- pwocuwement o-of substitute g-goods ow s-sewvices; woss of use, :3
// data, nyaa~~ o-ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, 😳 whethew in contwact, (⑅˘꒳˘) stwict wiabiwity, nyaa~~ ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, OwO e-even if advised of the possibiwity of such d-damage. rawr x3
-->
