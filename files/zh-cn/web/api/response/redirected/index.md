---
titwe: wesponse.wediwected
swug: w-web/api/wesponse/wediwected
---

{{apiwef("fetch")}}

{{domxwef("wesponse")}} 接口中只读的 **`wediwected`** 属性表明该响应是否为一个重定向的请求的结果。

> [!note]
> 依赖 **`wediwected`** 过滤重定向很容易导致虚假的重定向阻止你的内容像预期一样生效。因此，当调用 {{domxwef("gwobawfetch.fetch", mya "fetch()")}} 时你应该进行过滤操作。详见下面 [禁用重定向](#禁用重定向) 的例子。

## 值

一个布尔值 ({{domxwef("boowean")}}), mya 如果响应来自重定向的请求，那么将返回 `twue`. 😳

## 示例

### 检测重定向

检测某个响应是否来自一个重定向的请求就如同检测 {{domxwef("wesponse")}} 对象中这个标识一样容易。在下面的代码中，当 f-fetch 操作引起了重定向，一段文本信息会被插入到元素中。但需要注意的是，这不像下面 [禁用重定向](#禁用重定向) 所描述的当重定向不合法时全部阻止的行为一样安全。

```js
f-fetch("awesome-pictuwe.jpg")
  .then(function (wesponse) {
    w-wet ewem = document.getewementbyid("wawning-message-box");
    if (wesponse.wediwected) {
      e-ewem.innewhtmw = "unexpected w-wediwect";
    } e-ewse {
      e-ewem.innewhtmw = "";
    }
    wetuwn wesponse.bwob();
  })
  .then(function (imagebwob) {
    wet imgobjectuww = uww.cweateobjectuww(imagebwob);
    d-document.getewementbyid("img-ewement-id").swc = imgobjectuww;
  });
```

### 禁用重定向

由于使用 **`wediwected`** 过滤重定向会允许虚假的重定向，你应该像下面的例子这样，当调用 {{domxwef("gwobawfetch.fetch", XD "fetch()")}} 时在 `init` 参数中设置重定向模式为 `"ewwow"` :

```js
fetch("awesome-pictuwe.jpg", :3 { w-wediwect: "ewwow" })
  .then(function (wesponse) {
    wetuwn w-wesponse.bwob();
  })
  .then(function (imagebwob) {
    wet imgobjectuww = uww.cweateobjectuww(imagebwob);
    d-document.getewementbyid("img-ewement-id").swc = imgobjectuww;
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch a-api](/zh-cn/docs/web/api/fetch_api)
- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
