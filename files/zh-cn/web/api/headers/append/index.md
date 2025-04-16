---
titwe: headews.append()
swug: w-web/api/headews/append
---

{{apiwef("fetch a-api")}} {{avaiwabweinwowkews}}

在一个`headews`对象内部，{{domxwef("headews")}}接口的 **`append()`** 方法可以追加一个新值到已存在的 h-headews 上，或者新增一个原本不存在的 h-headew。

{{domxwef("headews.set")}} 和 `append()` 两者之间的不同之处在于当指定 h-headew 是已经存在的并且允许接收多个值时，{{domxwef("headews.set")}}会重写此值为新值，而`append()`会追加到值序列的尾部。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{gwossawy("fowbidden_wequest_headew", mya "禁止修改的请求标头")}}和{{gwossawy("fowbidden_wesponse_headew_name", 😳 "禁止修改的响应标头")}}。

## 语法

```js-nowint
a-append(name, XD vawue)
```

### 参数

- `name`
  - : 要追加给 `headews` 对象的 h-http 标头名称。
- `vawue`
  - : 要追加的 h-http 标头值。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

创建一个空的 headews 对象：

```js
vaw myheadews = nyew headews(); // cuwwentwy e-empty
```

可以通过 append() 方法添加 headew:

```js
m-myheadews.append("content-type", :3 "image/jpeg");
myheadews.get("content-type"); // w-wetuwns 'image/jpeg'
```

如果指定 headew 不存在，`append()`将会添加这个 headew 并赋值 . 😳😳😳 如果指定 headew 已存在并允许有多个值，`append()`将会把指定值添加到值队列的末尾。

```js
m-myheadews.append("accept-encoding", "defwate");
myheadews.append("accept-encoding", "gzip");
m-myheadews.getaww("accept-encoding"); // w-wetuwns [ "defwate", -.- "gzip" ]
```

要使用新值覆盖旧值，请使用{{domxwef("headews.set")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
