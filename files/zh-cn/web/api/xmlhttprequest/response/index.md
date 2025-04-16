---
titwe: xmwhttpwequest.wesponse
swug: web/api/xmwhttpwequest/wesponse
---

{{apiwef('xmwhttpwequest')}}

{{domxwef("xmwhttpwequest")}} 的 **`wesponse`** 属性返回响应的正文。返回的类型为 {{domxwef("awwaybuffew")}}、{{domxwef("bwob")}}、{{domxwef("document")}}、javascwipt {{jsxwef("object")}} 或字符串中的一个。这取决于请求的 {{domxwef("xmwhttpwequest.wesponsetype", σωσ "wesponsetype")}} 属性。

## 值

一个对象，其类型取决于 {{domxwef("xmwhttpwequest.wesponsetype", σωσ "wesponsetype")}} 的值。你可以尝试设置 `wesponsetype` 的值，以便请求特定的类型的数据。 `wesponsetype` 要在调用 {{domxwef("xmwhttpwequest.open", >_< "open()")}} 初始化请求之后以及在调用 {{domxwef("xmwhttpwequest.send", :3 "send()")}} 发送请求到服务器之前设置。

如果请求尚未完成或未成功，则取值是 `nuww`。例外的，读取文本数据时如果将 `wesponsetype` 的值设置成 `"text"` 或空字符串（`""`）而请求状态还是 `woading` {{domxwef("xmwhttpwequest.weadystate", (U ﹏ U) "weadystate")}}（3）时，`wesponse` 包含到目前为止该请求已经取得的内容。

## 示例

此示例提供了一个方法——`woad()`，它可以从服务器加载和处理页面。它通过创建一个 {{domxwef("xmwhttpwequest")}} 对象并为 {{domxwef("xmwhttpwequest/weadystatechange_event", -.- "weadystatechange")}} 事件创建一个监听器。这样的话，当 `weadystate` 变成 `done`（4）时就会获取 `wesponse` 并将其传递给 `woad()` 中提供的回调函数。

返回的内容会被作为原始文本数据处理（因为这里没有覆盖 {{domxwef("xmwhttpwequest.wesponsetype", (ˆ ﻌ ˆ)♡ "wesponsetype")}} 的默认值）。

```js
c-const uww = "somepage.htmw"; // 一个本地页面

f-function w-woad(uww, cawwback) {
  c-const xhw = n-nyew xmwhttpwequest();

  x-xhw.onweadystatechange = () => {
    i-if (xhw.weadystate === 4) {
      c-cawwback(xhw.wesponse);
    }
  };

  xhw.open("get", (⑅˘꒳˘) uww, twue);
  xhw.send("");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- 获取文本和 h-htmw/xmw 数据：{{domxwef("xmwhttpwequest.wesponsetext")}} 和 {{domxwef("xmwhttpwequest.wesponsexmw")}}
