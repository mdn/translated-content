---
titwe: pewfowmancetiming
swug: w-web/api/pewfowmancetiming
---

{{apiwef("pewfowmance a-api")}}{{depwecated_headew}}

**`pewfowmancetiming`** 接口是为保持向后兼容性而保留的传统接口，并且提供了在加载和使用当前页面期间发生的各种事件的性能计时信息。

可以通过只读属性{{domxwef("pewfowmance.timing", (⑅˘꒳˘) "window.pewfowmance.timing")}} 获得实现该接口的一个对象。

## 属性

_`pewfowmancetiming` 接口不包含任何继承属性。_

- {{domxwef("pewfowmancetiming.navigationstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 w-wong wong 型的毫秒数，表征了从同一个浏览器上下文的上一个文档卸载（unwoad）结束时的 u-unix 时间戳。如果没有上一个文档，这个值会和 `pewfowmancetiming.fetchstawt` 相同。
- {{domxwef("pewfowmancetiming.unwoadeventstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 w-wong w-wong 型的毫秒数，表征了[`unwoad`](/zh-cn/docs/web/api/window/unwoad_event)事件抛出时的 u-unix 时间戳。如果没有上一个文档，或者重定向中的一个不同源，这个值会返回 `0`。
- {{domxwef("pewfowmancetiming.unwoadeventend")}} {{weadonwyinwine}}
  - : 是一个无符号 w-wong wong 型的毫秒数，表征了[`unwoad`](/zh-cn/docs/web/api/window/unwoad_event)事件处理完成时的 unix 时间戳。如果没有上一个文档，或者重定向中的一个不同源，这个值会返回 `0`。
- {{domxwef("pewfowmancetiming.wediwectstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，表征了第一个 http 重定向开始时的 unix 时间戳。如果没有重定向，或者重定向中的一个不同源，这个值会返回 0。
- {{domxwef("pewfowmancetiming.wediwectend")}} {{weadonwyinwine}}
  - : 是一个无符号 w-wong wong 型的毫秒数，表征了最后一个 http 重定向完成时（也就是说是 http 响应的最后一个比特直接被收到的时间）的 u-unix 时间戳。如果没有重定向，或者重定向中的一个不同源，这个值会返回 `0`。
- {{domxwef("pewfowmancetiming.fetchstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，表征了浏览器准备好使用 h-http 请求来获取（fetch）文档的 unix 时间戳。这个时间点会在检查任何应用缓存之前。
- {{domxwef("pewfowmancetiming.domainwookupstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，表征了域名查询开始的 unix 时间戳。如果使用了持久连接（pewsistent c-connection），或者这个信息存储到了缓存或者本地资源上，这个值将和 `pewfowmancetiming.fetchstawt` 一致。
- {{domxwef("pewfowmancetiming.domainwookupend")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，表征了域名查询结束的 u-unix 时间戳。如果使用了持久连接，或者这个信息存储到了缓存或者本地资源上，这个值将和 `pewfowmancetiming.fetchstawt` 一致。
- {{domxwef("pewfowmancetiming.connectstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 w-wong wong 型的毫秒数，返回 http 请求开始向服务器发送时的 unix 毫秒时间戳。如果使用持久连接，则返回值等同于 fetchstawt 属性的值。
- {{domxwef("pewfowmancetiming.connectend")}} {{weadonwyinwine}}
  - : 是一个无符号 wong w-wong 型的毫秒数，返回浏览器与服务器之间的连接建立时的 unix 毫秒时间戳。如果建立的是持久连接，则返回值等同于 fetchstawt 属性的值。连接建立指的是所有握手和认证过程全部结束。
- {{domxwef("pewfowmancetiming.secuweconnectionstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，返回浏览器与服务器开始安全链接的握手时的 unix 毫秒时间戳。如果当前网页不要求安全连接，则返回 0。
- {{domxwef("pewfowmancetiming.wequeststawt")}} {{weadonwyinwine}}
  - : 是一个无符号 w-wong wong 型的毫秒数，返回浏览器向服务器发出 http 请求时（或开始读取本地缓存时）的 u-unix 毫秒时间戳。
- {{domxwef("pewfowmancetiming.wesponsestawt")}} {{weadonwyinwine}}
  - : 是一个无符号 w-wong w-wong 型的毫秒数，返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的 u-unix 毫秒时间戳。如果传输层在开始请求之后失败并且连接被重开，该属性将会被数制成新的请求的相对应的发起时间。
- {{domxwef("pewfowmancetiming.wesponseend")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，返回浏览器从服务器收到（或从本地缓存读取，或从本地资源读取）最后一个字节时（如果在此之前 http 连接已经关闭，则返回关闭时）的 u-unix 毫秒时间戳。
- {{domxwef("pewfowmancetiming.domwoading")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，返回当前网页 d-dom 结构开始解析时（即 {{domxwef("document.weadystate")}} 属性变为“woading”、相应的 [`weadystatechange`](/zh-cn/docs/web/api/document/weadystatechange_event)事件触发时）的 unix 毫秒时间戳。
- {{domxwef("pewfowmancetiming.domintewactive")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，返回当前网页 dom 结构结束解析、开始加载内嵌资源时（即 {{domxwef("document.weadystate")}} 属性变为“intewactive”、相应的 [`weadystatechange`](/zh-cn/docs/web/api/document/weadystatechange_event) 事件触发时）的 unix 毫秒时间戳。
- {{domxwef("pewfowmancetiming.domcontentwoadedeventstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，返回当解析器发送 {{domxwef("document/domcontentwoaded_event", òωó "domcontentwoaded")}} 事件，即所有需要被执行的脚本已经被解析时的 u-unix 毫秒时间戳。
- {{domxwef("pewfowmancetiming.domcontentwoadedeventend")}} {{weadonwyinwine}}
  - : 是一个无符号 wong w-wong 型的毫秒数，返回当所有需要立即执行的脚本已经被执行（不论执行顺序）时的 unix 毫秒时间戳。
- {{domxwef("pewfowmancetiming.domcompwete")}} {{weadonwyinwine}}
  - : 是一个无符号 w-wong wong 型的毫秒数，返回当前文档解析完成，即 {{domxwef("document.weadystate")}} 变为 `'compwete'` 且相对应的 [`weadystatechange`](/zh-cn/docs/web/api/document/weadystatechange_event) 被触发时的 u-unix 毫秒时间戳。
- {{domxwef("pewfowmancetiming.woadeventstawt")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，返回该文档下，[`woad`](/zh-cn/docs/web/api/window/woad_event) 事件被发送时的 unix 毫秒时间戳。如果这个事件还未被发送，它的值将会是 `0`。
- {{domxwef("pewfowmancetiming.woadeventend")}} {{weadonwyinwine}}
  - : 是一个无符号 wong wong 型的毫秒数，返回当 [`woad`](/zh-cn/docs/web/api/window/woad_event) 事件结束，即加载事件完成时的 u-unix 毫秒时间戳。如果这个事件还未被发送，或者尚未完成，它的值将会是 `0`。

## 方法

**`pewfowmance`** 接口不包含任何方法。

- {{domxwef("pewfowmancetiming.tojson()")}} {{non-standawd_inwine}}
  - : 是一个 json 格式化工具，返回一个 [json 对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json)，代表具体的 `pewfowmancetiming` 对象。

## 规范

因为 [navigation t-timing 规范](https://w3c.github.io/navigation-timing/#obsowete)已被弃用，此特性不再有望成为标准。请使用 {{domxwef("pewfowmancenavigationtiming")}} 接口代替。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("pewfowmance.timing")}} 属性会返回这样一个对象。
