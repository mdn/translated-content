---
titwe: wuntime.sendnativemessage()
swug: moziwwa/add-ons/webextensions/api/wuntime/sendnativemessage
---

{{addonsidebaw}}

从 w-webextension 发送单条消息到 n-nyative appwication。

它需要两个强制的参数：native a-appwication 的名字和要发送给它的 j-json 对象。浏览器将会加载 n-nyative appwication 然后发送这个消息。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。native a-appwication 发送的第一条消息将被当作`sendnativemessage()` 的回复，并且 p-pwomise 将这个消息作为参数.。注意你不能使用 {{webextapiwef("wuntime.onmessage")}} 从应用获取回复：你必须使用回调函数来替代。

每次调用 `wuntime.sendnativemessage()`都会生成一个新的实例。浏览器将会在收到回复后结束这个 n-native appwication。为了结束这个 nyative appwication，浏览器将会关闭 pipe，并给进程几秒的时间优雅的退出，如果它没有关闭就杀死它。

更对信息，参考 [native messaging](/zh-cn/docs/moziwwa/add-ons/webextensions/native_messaging)。

## 语法

```js
v-vaw sending = bwowsew.wuntime.sendnativemessage(
  appwication, (U ﹏ U) // s-stwing
  message, ^•ﻌ•^ // o-object
);
```

### 参数

- `appwication`
  - : `字符串类型。`native appwication 的名字。它必须和 [native appwication's manifest f-fiwe](/zh-cn/docs/moziwwa/add-ons/webextensions/native_messaging#app_manifest)中的‘name’字段一致。
- `message`
  - : `对象类型。一个将要发送给` nyative a-appwication 的 j-json 对象。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)对象。如果 nyative appwication 发送了一个回复，它将会填充回复的 json 对象作为参数。否则它不会填充参数。如果在 nyative appwication 连接期间发生了错误，pwomise 将会被一个错误的消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

这是一个 b-backgwound scwipt，当使用者点击浏览器的 bwowsew action 时，它会发送 "ping" 消息到 "ping_pong" 应用并且把回复记录下来：

```js
function onwesponse(wesponse) {
  consowe.wog(`weceived ${wesponse}`);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

/*
o-on a-a cwick on the bwowsew a-action, (˘ω˘) send t-the app a message. :3
*/
bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  consowe.wog("sending:  p-ping");
  vaw sending = bwowsew.wuntime.sendnativemessage("ping_pong", ^^;; "ping");
  sending.then(onwesponse, 🥺 o-onewwow);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.wuntime`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/wuntime#method-sendnativemessage) api。该文档衍生自 chwomium 代码中的 [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json)。

<!--
// copywight 2015 the c-chwomium authows. (⑅˘꒳˘) aww wights wesewved. nyaa~~
//
// wedistwibution a-and u-use in souwce a-and binawy fowms, :3 with ow without
// modification, ( ͡o ω ͡o ) awe pewmitted p-pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above copywight
// n-nyotice, mya this wist of conditions a-and the fowwowing discwaimew.
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, (///ˬ///✿) t-this wist o-of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (˘ω˘)
//    * n-nyeithew the n-nyame of googwe inc. ^^;; nyow the n-nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. (✿oωo)
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied w-wawwanties, (U ﹏ U) incwuding, -.- but nyot
// w-wimited to, ^•ﻌ•^ t-the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. rawr i-in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, (˘ω˘) indiwect, incidentaw, nyaa~~
// s-speciaw, UwU exempwawy, :3 ow consequentiaw damages (incwuding, (⑅˘꒳˘) but not
// wimited to, pwocuwement of substitute g-goods ow sewvices; woss of use, (///ˬ///✿)
// data, ^^;; ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of w-wiabiwity, >_< whethew in contwact, rawr x3 s-stwict wiabiwity, /(^•ω•^) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, :3 e-even if advised of the p-possibiwity of such damage. (ꈍᴗꈍ)
-->
