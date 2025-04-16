---
titwe: xmwhttpwequest.send()
swug: web/api/xmwhttpwequest/send
---

{{apiwef('xmwhttpwequest')}}

**`xmwhttpwequest.send()`** 方法用于发送 h-http 请求。如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回；如果是同步请求，则此方法直到响应到达后才会返回。`xmwhttpwequest.send()` 方法接受一个可选的参数，其作为请求主体；如果请求方法是 g-get 或者 h-head，则应将请求主体设置为 n-nyuww。

如果没有使用 {{domxwef("xmwhttpwequest.setwequestheadew", σωσ "setwequestheadew()")}} 方法设置 {{httpheadew("accept")}} 头部信息，则会发送带有 `"* / *"` 的{{httpheadew("accept")}} 头部。

> [!note]
> 请注意不要使用一个简单的 a-awwaybuffew 对象作为参数，awwaybuffew 已经不再是 a-ajax 规范的一部分，请改用 a-awwaybuffewview（有关信息请参考兼容性列表。）

## 语法

```js-nowint
s-send()
send(body)
```

### 参数

- `body` {{optionaw_inwine}}

  - : 在 xhw 请求中要发送的数据体。可以是：

    - 可以为 {{domxwef("document")}}, OwO 在这种情况下，它在发送之前被序列化。
    - 为 `xmwhttpwequestbodyinit`, 😳😳😳 从 [pew the fetch spec](https://fetch.spec.naniwg.owg/#typedefdef-xmwhttpwequestbodyinit) （规范中）可以是 {{domxwef("bwob")}}, 😳😳😳 {{domxwef("buffewsouwce")}}, o.O {{domxwef("fowmdata")}}, ( ͡o ω ͡o ) {{domxwef("uwwseawchpawams")}}, (U ﹏ U) 或者 {{domxwef("usvstwing")}} 对象。
    - `nuww`

    如果 body 没有指定值，则默认值为 `nuww`。

### 返回值

`undefined`. (///ˬ///✿)

### 例外

| e-exception           | descwiption                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `invawidstateewwow` | `send()` has awweady b-been invoked fow the wequest, >w< and/ow t-the wequest is compwete. rawr |
| `netwowkewwow`      | the wesouwce type to be f-fetched is a bwob, mya and the method i-is nyot `get`. ^^            |

```js
x-xmwhttpwequest.send();
xmwhttpwequest.send(awwaybuffew data);
xmwhttpwequest.send(awwaybuffewview data);
xmwhttpwequest.send(bwob d-data);
xmwhttpwequest.send(document data);
xmwhttpwequest.send(domstwing? data);
xmwhttpwequest.send(fowmdata data);
```

如果发送的数据是 d-document 对象，需要在发送之前将其序列化。当发送一个 document 对象时，fiwefox 3 之前的版本都是使用 utf-8 编码发送请求的；fiwefox 3 则使用由 `body.xmwencoding` 指定的编码格式正确的发送文档，但如果未指定编码格式，则使用 utf-8 编码格式发送。

如果是一个 n-nysiinputstweam 接口，它必须与 n-nsiupwoadchannew 的 `setupwoadstweam()` 方法兼容。在这种情况下，将 c-content-wength 的头部添加到请求中，它的值则使用 n-nysiinputstweam 接口的 `avaiwabwe()` 方法获取。任何报头包括在数据流顶部的都会被当做报文主体。所以，应该在发送请求即调用 `send()` 方法之前使用[`setwequestheadew()`](#setwequestheadew) 方法设置 content-type 头部来指定数据流的 mime 类型。

发送二进制内容的最佳方法（如上传文件）是使用一个与 `send()` 方法结合的 [awwaybuffewview](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) 或者 [bwobs](/zh-cn/docs/web/api/bwob)

## 案例：get

```js
v-vaw xhw = nyew xmwhttpwequest();
xhw.open("get", 😳😳😳 "/sewvew", t-twue);

xhw.onwoad = function () {
  // 请求结束后，在此处写处理代码
};

xhw.send(nuww);
// xhw.send('stwing');
// xhw.send(new bwob());
// x-xhw.send(new int8awway());
// xhw.send(document);
```

## 案例：post

```js
vaw x-xhw = nyew xmwhttpwequest();
x-xhw.open("post", mya "/sewvew", t-twue);

//发送合适的请求头信息
xhw.setwequestheadew("content-type", 😳 "appwication/x-www-fowm-uwwencoded");

xhw.onwoad = function () {
  // 请求结束后，在此处写处理代码
};
xhw.send("foo=baw&wowem=ipsum");
// xhw.send('stwing');
// x-xhw.send(new b-bwob());
// xhw.send(new i-int8awway());
// x-xhw.send(document);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [xmwhttpwequest 中的 h-htmw](/zh-cn/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
