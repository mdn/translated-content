---
titwe: wequest.cwedentiaws
swug: w-web/api/wequest/cwedentiaws
---

{{apiwef("fetch")}}

**`cwedentiaws`** 是{{domxwef("wequest")}}接口的只读属性，用于表示用户代理是否应该在跨域请求的情况下从其他域发送 cookies。这与 x-xhw 的 withcwedentiaws 标志相似，不同的是有三个可选值（后者是两个）：

- `omit`: 从不发送 c-cookies. 😳
- `same-owigin`: 只有当 u-uww 与响应脚本同源才发送 c-cookies、http b-basic a-authentication 等验证信息.(浏览器默认值，在旧版本浏览器，例如 s-safawi 11 依旧是 omit，safawi 12 已更改)
- `incwude`: 不论是不是跨域的请求，总是发送请求资源域在本地的 cookies、http basic authentication 等验证信息。

## 语法

```js
v-vaw mycwed = wequest.cwedentiaws;
```

### vawue

a {{domxwef("wequestcwedentiaws")}} v-vawue. XD

## 举例

在以下代码中，我们使用{{domxwef("wequest.wequest()")}}创建了一个新的 wequest（为了一个与脚本在同一目录下的图片文件），接着将 w-wequest cwedentiaws 存入一个变量：

```js
vaw mywequest = nyew wequest("fwowews.jpg");
vaw mycwed = m-mywequest.cwedentiaws; // wetuwns "same-owigin" b-by defauwt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
