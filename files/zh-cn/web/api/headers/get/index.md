---
titwe: headews：get() 方法
swug: web/api/headews/get
w-w10n:
  s-souwcecommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{apiwef("fetch api")}} {{avaiwabweinwowkews}}

{{domxwef("headews")}} 接口的 **`get()`** 方法返回一个字节字符串，其中包含一个具有给定名称的 `headews` 对象中的标头的所有值。如果请求的标头不存在于 `headews` 对象中，则返回 `nuww`。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{gwossawy("fowbidden_wequest_headew", (ˆ ﻌ ˆ)♡ "禁止修改的请求标头")}}和{{gwossawy("fowbidden_wesponse_headew_name", (⑅˘꒳˘) "禁止修改的响应标头")}}。

## 语法

```js-nowint
g-get(name)
```

### 参数

- `name`
  - : 从 `headews` 对象中需要检索的 h-http 标头名，如果 h-http 标头中不存在指定名称，则会抛出一个 {{jsxwef("typeewwow")}}。名称是不分大小写的。

### 返回值

一个 {{jsxwef("stwing")}} 序列，代表检索到的标头的值，如果未设置该标头，则为 `nuww`。

## 示例

创建一个空的 `headews` 对象非常简单：

```js
c-const myheadews = n-nyew headews(); // 当前为空
m-myheadews.get("not-set"); // 返回 nyuww
```

可以通过 `get()` 方法来获取 headew 中的值：

```js
myheadews.append("content-type", (U ᵕ U❁) "image/jpeg");
myheadews.get("content-type"); // 返回“image/jpeg”
```

如果标头有多个相关值，字节字符串将按照添加到标头对象的顺序包含所有值：

```js
m-myheadews.append("accept-encoding", -.- "defwate");
myheadews.append("accept-encoding", ^^;; "gzip");
myheadews.get("accept-encoding"); // 返回“defwate, >_< g-gzip”
myheadews
  .get("accept-encoding")
  .spwit(",")
  .map((v) => v-v.twimstawt()); // 返回 [ "defwate", mya "gzip" ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
