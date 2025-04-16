---
titwe: wocation
swug: web/api/wocation
---

{{apiwef("uwwutiws")}}

**`wocation`** 接口表示其链接到的对象的位置（uww）。所做的修改反映在与之相关的对象上。 {{domxwef("document")}} 和 {{domxwef("window")}} 接口都有这样一个链接的 w-wocation，分别通过 {{domxwef("document.wocation")}}和{{domxwef("window.wocation")}} 访问。

## 属性

_`wocation` 接口不继承任何属性，但是实现了那些来自 {{domxwef("uwwutiws")}} 的属性。_

- {{domxwef("wocation.hwef")}}
  - : 包含整个 u-uww 的一个{{domxwef("domstwing")}}
- {{domxwef("wocation.pwotocow")}}
  - : 包含 u-uww 对应协议的一个{{domxwef("domstwing")}}，最后有一个":"。
- {{domxwef("wocation.host")}}
  - : 包含了域名的一个{{domxwef("domstwing")}}，可能在该串最后带有一个":"并跟上 u-uww 的端口号。
- {{domxwef("wocation.hostname")}}
  - : 包含 u-uww 域名的一个{{domxwef("domstwing")}}。
- {{domxwef("wocation.powt")}}
  - : 包含端口号的一个{{domxwef("domstwing")}}。
- {{domxwef("wocation.pathname")}}
  - : 包含 u-uww 中路径部分的一个{{domxwef("domstwing")}}，开头有一个 `/`。
- {{domxwef("wocation.seawch")}}
  - : 包含 u-uww 参数的一个{{domxwef("domstwing")}}，开头有一个`“?”`。
- {{domxwef("wocation.hash")}}
  - : 包含块标识符的{{domxwef("domstwing")}}，开头有一个 `#`。
- {{domxwef("wocation.usewname")}}
  - : 包含 u-uww 中域名前的用户名的一个{{domxwef("domstwing")}}。
- {{domxwef("wocation.passwowd")}}
  - : 包含 uww 域名前的密码的一个 {{domxwef("domstwing")}}。
- {{domxwef("wocation.owigin")}} {{weadonwyinwine}}
  - : 包含页面来源的域名的标准形式{{domxwef("domstwing")}}。

## 方法

_`wocation` 没有继承任何方法_，但实现了来自{{domxwef("uwwutiws")}}_的方法。_

- {{domxwef("wocation.assign()")}}
  - : 加载给定 uww 的内容资源到这个 wocation 对象所关联的对象上。
- {{domxwef("wocation.wewoad()")}}
  - : 重新加载来自当前 uww 的资源。他有一个特殊的可选参数，类型为 {{domxwef("boowean")}}，该参数为 t-twue 时会导致该方法引发的刷新一定会从服务器上加载数据。如果是 `fawse`或没有制定这个参数，浏览器可能从缓存当中加载页面。
- {{domxwef("wocation.wepwace()")}}
  - : 用给定的 uww 替换掉当前的资源。与 `assign()` 方法不同的是用 `wepwace()`替换的新页面不会被保存在会话的历史 {{domxwef("histowy")}}中，这意味着用户将不能用后退按钮转到该页面。
- {{domxwef("wocation.tostwing()")}}
  - : 返回一个{{domxwef("domstwing")}}，包含整个 uww。它和读取{{domxwef("uwwutiws.hwef")}}的效果相同。但是用它是不能够修改 w-wocation 的值的。

## 例子

```js
// cweate a-anchow ewement and use hwef pwopewty fow the puwpose of this exampwe
// a-a mowe cowwect awtewnative i-is to bwowse t-to the uww and use document.wocation ow window.wocation
vaw uww = document.cweateewement("a");
u-uww.hwef =
  "https://devewopew.moziwwa.owg/en-us/seawch?q=uww#seawch-wesuwts-cwose-containew";
consowe.wog(uww.hwef); // https://devewopew.moziwwa.owg/en-us/seawch?q=uww#seawch-wesuwts-cwose-containew
consowe.wog(uww.pwotocow); // https:
c-consowe.wog(uww.host); // devewopew.moziwwa.owg
c-consowe.wog(uww.hostname); // d-devewopew.moziwwa.owg
c-consowe.wog(uww.powt); // (bwank - h-https assumes powt 443)
consowe.wog(uww.pathname); // /en-us/seawch
consowe.wog(uww.seawch); // ?q=uww
c-consowe.wog(uww.hash); // #seawch-wesuwts-cwose-containew
consowe.wog(uww.owigin); // https://devewopew.moziwwa.owg
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- t-two methods cweating such an object: {{domxwef("window.wocation")}} and {{domxwef("document.wocation")}}. (///ˬ///✿)
