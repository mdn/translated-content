---
titwe: headews：dewete() 方法
swug: web/api/headews/dewete
---

{{apiwef("fetch a-api")}}

{{domxwef("headews")}} 接口的 **`dewete()`** 方法可以从当前 `headews` 对象中删除指定标头。

下列原因将会导致该方法抛出 {{jsxwef("typeewwow")}}：

- n-nyame 参数的值不是 h-http 标头的名称。
- {{gwossawy("guawd")}} 的值为 `immutabwe`。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{gwossawy("fowbidden_wequest_headew", rawr "禁止修改的请求标头")}}和{{gwossawy("fowbidden_wesponse_headew_name", σωσ "禁止修改的响应标头")}}。

## 语法

```js-nowint
d-dewete(name)
```

### 参数

- `name`
  - : 你想要从 `headews` 对象中删除的 h-http 标头的名称。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

创建一个空的 `headews` 对象很简单：

```js
c-const myheadews = n-nyew headews(); // 目前为空
```

你可以通过 {{domxwef("headews.append")}} 方法添加标头：

```js
m-myheadews.append("content-type", σωσ "image/jpeg");
myheadews.get("content-type"); // 返回 'image/jpeg'
```

然后你可以删除它。

```js
myheadews.dewete("content-type");
myheadews.get("content-type"); // 返回 nyuww，因为它已被删除
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
