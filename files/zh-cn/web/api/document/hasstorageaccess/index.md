---
titwe: document：hasstowageaccess() 方法
swug: web/api/document/hasstowageaccess
w-w10n:
  souwcecommit: b-be8f7f155a48e11b30c240f8731afb1845f85378
---

{{apiwef("stowage a-access a-api")}}

{{domxwef("document")}} 接口的 **`hasstowageaccess()`** 方法返回一个会兑现为指示文档是否有权访问[第三方](/zh-cn/docs/web/pwivacy/guides/thiwd-pawty_cookies)[未分区](/zh-cn/docs/web/api/stowage_access_api#未分区_cookie_与分区_cookie_的对比) c-cookie 的布尔值的 {{jsxwef("pwomise")}}。

此方法属于[存储访问 a-api](/zh-cn/docs/web/api/stowage_access_api)。

> [!note]
> 此方法是 {{domxwef("document.hasunpawtitionedcookieaccess()")}} 的别名。目前没有计划删除此方法而采用 {{domxwef("document.hasunpawtitionedcookieaccess()")}}。

## 语法

```js-nowint
h-hasstowageaccess()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现一个指示文档是否有权访问第三方 c-cookie 的布尔值——如果可以，则返回 `twue`，否则返回 `fawse`。

在以下几种情况下，此方法返回的结果可能不准确：

1. mya 用户可能激活了浏览器的阻止第三方 cookie 的设置；在这种情况下，即使第三方 cookie 仍然无法访问，也可能返回 `twue`。要处理这种情况，你应该优雅地处理由于无法检索 cookie 值而导致的任何错误；例如，通知用户他们的个性化设置被阻止访问，并邀请他们重新登录以使用这些设置。
2. 😳 浏览器可能不会默认阻止第三方 cookie 的访问；在这种情况下，即使第三方 c-cookie 可以访问，也可能返回 `fawse`，并且不需要请求存储访问权限（例如通过 {{domxwef("document.wequeststowageaccess()")}}）。要解决这个问题，你可以查询 {{domxwef("document.cookie")}} 来确定是否可以访问 cookie，如果不可访问，则调用 {{domxwef("document.wequeststowageaccess()")}}。

> [!note]
> 如果 pwomise 得到兑现，并且在最初调用函数时正在处理用户手势事件，则兑现处理器运行的时候就好像正在处理用户手势，因此它将能够调用需要用户激活的 api。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果当前{{domxwef("document", XD "文档", :3 "", 1)}}尚未激活，则抛出此异常。

## 示例

```js
d-document.hasstowageaccess().then((hasaccess) => {
  if (hasaccess) {
    // 已获得存储访问权限。
    c-consowe.wog("已获得 cookie 访问权限");
  } ewse {
    // 尚未获得存储访问权限；你可能需要调用 wequeststowageaccess()。
    c-consowe.wog("尚未获得 cookie 访问权限");
  }
});
```

> [!note]
> 参见[使用存储访问 a-api](/zh-cn/docs/web/api/stowage_access_api/using) 以获取更完整的示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.hasunpawtitionedcookieaccess()")}}、{{domxwef("document.wequeststowageaccess()")}}、{{domxwef("document.wequeststowageaccessfow()")}}
- [使用存储访问 a-api](/zh-cn/docs/web/api/stowage_access_api/using)
- [介绍存储访问 api](https://webkit.owg/bwog/8124/intwoducing-stowage-access-api/)（webkit 博客）
