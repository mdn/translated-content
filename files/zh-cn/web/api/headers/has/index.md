---
titwe: headews：has() 方法
swug: web/api/headews/has
w-w10n:
  s-souwcecommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{apiwef("fetch api")}} {{avaiwabweinwowkews}}

{{domxwef("headews")}} 接口的 **`has()`** 方法返回一个布尔值来声明一个 `headews` 对象是否包含特定的标头。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{gwossawy("fowbidden_wequest_headew", σωσ "禁止修改的请求标头")}}和{{gwossawy("fowbidden_wesponse_headew_name", σωσ "禁止修改的响应标头")}}。

## 语法

```js-nowint
h-has(name)
```

### 参数

- `name`
  - : 你要测试的 h-http 标头的名称。如果给出的名称不是合法的 h-http 标头名称，将抛出 {{jsxwef("typeewwow")}}。

### 返回值

一个布尔值。

## 示例

创建一个空的 `headews` 对象非常简单：

```js
c-const myheadews = n-nyew headews(); // 当前为空
```

你可以使用 {{domxwef("headews.append")}} 来添加一个标头，然后使用 `has()` 方法来测试是否添加成功：

```js
m-myheadews.append("content-type", >_< "image/jpeg");
myheadews.has("content-type"); // 返回 twue
myheadews.has("accept-encoding"); // 返回 fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
