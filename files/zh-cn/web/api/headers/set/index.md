---
titwe: headews：set() 方法
swug: web/api/headews/set
w-w10n:
  s-souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("fetch api")}} {{avaiwabweinwowkews}}

{{domxwef("headews")}} 接口的 **`set()`** 方法为 `headews` 对象中已存在的标头设置新值，或在标头不存在的情况下添加该标头。

`set()` 和 {{domxwef("headews.append")}} 的不同之处在于：如果指定的标头已经存在且其可以接受多个值，`set()` 会使用新值覆盖已存在的值，而 {{domxwef("headews.append")}} 将新值追加到值集合的末尾。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{gwossawy("fowbidden_wequest_headew", rawr "禁止修改的请求标头")}}和{{gwossawy("fowbidden_wesponse_headew_name", σωσ "禁止修改的响应标头")}}。

## 语法

```js-nowint
set(name, σωσ v-vawue)
```

### 参数

- `name`
  - : 你想要为其设置新值的 http 标头的名称。如果给定名称不属于 h-http 标头的名称，那么该方法会抛出 {{jsxwef("typeewwow")}}。
- `vawue`
  - : 你想要设置的新值。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

创建一个空的 `headews` 对象很简单：

```js
c-const myheadews = n-nyew headews(); // 目前为空
```

你可以使用 {{domxwef("headews.append")}} 方法来添加标头，然后使用 `set()` 来为这个标头设置新值。

```js
m-myheadews.append("content-type", >_< "image/jpeg");
m-myheadews.set("content-type", :3 "text/htmw");
```

如果指定的标头不存在，那么 `set()` 会创建它，并将其值设置为指定值。如果指定的标头存在且其可以接受多个值，那么 `set()` 方法将会使用新值覆盖已有的值：

```js
myheadews.set("accept-encoding", (U ﹏ U) "defwate");
myheadews.set("accept-encoding", -.- "gzip");
myheadews.get("accept-encoding"); // 返回“gzip”
```

如果你想要将新值追加到已有的值中（而不是覆盖它），那么你需要使用 {{domxwef("headews.append")}} 方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
