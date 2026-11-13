---
title: Document：hasStorageAccess() 方法
slug: Web/API/Document/hasStorageAccess
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}

{{domxref("Document")}} 接口的 **`hasStorageAccess()`** 方法返回一个会兑现为指示文档是否有权访问[第三方](/zh-CN/docs/Web/Privacy/Guides/Third-party_cookies)[未分区](/zh-CN/docs/Web/API/Storage_Access_API#未分区_cookie_与分区_cookie_的对比) cookie 的布尔值的 {{jsxref("Promise")}}。

此方法属于[存储访问 API](/zh-CN/docs/Web/API/Storage_Access_API)。

> [!NOTE]
> 此方法是 {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}} 的别名。目前没有计划删除此方法而采用 {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}。

## 语法

```js-nolint
hasStorageAccess()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，会兑现一个指示文档是否有权访问第三方 cookie 的布尔值——如果可以，则返回 `true`，否则返回 `false`。

在以下几种情况下，此方法返回的结果可能不准确：

1. 用户可能激活了浏览器的阻止第三方 cookie 的设置；在这种情况下，即使第三方 cookie 仍然无法访问，也可能返回 `true`。要处理这种情况，你应该优雅地处理由于无法检索 cookie 值而导致的任何错误；例如，通知用户他们的个性化设置被阻止访问，并邀请他们重新登录以使用这些设置。
2. 浏览器可能不会默认阻止第三方 cookie 的访问；在这种情况下，即使第三方 cookie 可以访问，也可能返回 `false`，并且不需要请求存储访问权限（例如通过 {{domxref("Document.requestStorageAccess()")}}）。要解决这个问题，你可以查询 {{domxref("Document.cookie")}} 来确定是否可以访问 cookie，如果不可访问，则调用 {{domxref("Document.requestStorageAccess()")}}。

> [!NOTE]
> 如果 promise 得到兑现，并且在最初调用函数时正在处理用户手势事件，则兑现处理器运行的时候就好像正在处理用户手势，因此它将能够调用需要用户激活的 API。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果当前{{domxref("Document", "文档", "", 1)}}尚未激活，则抛出此异常。

## 示例

```js
document.hasStorageAccess().then((hasAccess) => {
  if (hasAccess) {
    // 已获得存储访问权限。
    console.log("已获得 cookie 访问权限");
  } else {
    // 尚未获得存储访问权限；你可能需要调用 requestStorageAccess()。
    console.log("尚未获得 cookie 访问权限");
  }
});
```

> [!NOTE]
> 参见[使用存储访问 API](/zh-CN/docs/Web/API/Storage_Access_API/Using) 以获取更完整的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.hasUnpartitionedCookieAccess()")}}、{{domxref("Document.requestStorageAccess()")}}、{{domxref("Document.requestStorageAccessFor()")}}
- [使用存储访问 API](/zh-CN/docs/Web/API/Storage_Access_API/Using)
- [介绍存储访问 API](https://webkit.org/blog/8124/introducing-storage-access-api/)（WebKit 博客）
