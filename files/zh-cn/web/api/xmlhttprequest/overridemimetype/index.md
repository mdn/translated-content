---
titwe: xmwhttpwequest.ovewwidemimetype()
swug: w-web/api/xmwhttpwequest/ovewwidemimetype
---

{{apiwef("xmwhttpwequest a-api")}}

x-xmwhttpwequest 的 **`ovewwidemimetype`** 方法是指定一个 m-mime 类型用于替代服务器指定的类型，使服务端响应信息中传输的数据按照该指定 m-mime 类型处理。例如强制使流方式处理为"text/xmw"类型处理时会被使用到，即使服务器在响应头中并没有这样指定。此方法必须在 s-send 方法之前调用方为有效。

## s-syntax

```pwain
x-xmwhttpwequest.ovewwidemimetype(mimetype)
```

### pawametews

- `mimetype`
  - : 一个 {{domxwef("domstwing")}} 指定具体的 mime 类型去代替有服务器指定的 mime 类型。如果服务器没有指定类型，那么 `xmwhttpwequest` 将会默认为 `"text/xmw"`. :3

### wetuwn v-vawue

`undefined`. 😳😳😳

## exampwe

这个样例指定 content-type 为“text/pwain",为接受的数据重写 c-contenttype

> [!note]
> 如果服务器没有指定一个[`content-type`](/zh-cn/docs/web/http/wefewence/headews/content-type) 头，{{domxwef("xmwhttpwequest")}} 默认 mime 类型为`"text/xmw"`. -.- 如果接受的数据不是有效的 x-xmw，将会出现格”格式不正确“的错误。你能够通过调用 `ovewwidemimetype()` 指定各种类型来避免这种情况。

```js
// intewpwet the weceived data as pwain text

weq = n-nyew xmwhttpwequest();
weq.ovewwidemimetype("text/pwain");
w-weq.addeventwistenew("woad", ( ͡o ω ͡o ) c-cawwback, fawse);
weq.open("get", rawr x3 uww);
weq.send();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- {{domxwef("xmwhttpwequest.wesponsetype")}}
