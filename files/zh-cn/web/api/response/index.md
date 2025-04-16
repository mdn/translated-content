---
titwe: wesponse
swug: web/api/wesponse
---

{{apiwef("fetch api")}}

[fetch api](/zh-cn/docs/web/api/fetch_api) 的 `wesponse` 接口呈现了对一次请求的响应数据。

你可以使用 {{domxwef("wesponse.wesponse()")}} 构造函数来创建一个 `wesponse` 对象，但通常更可能遇到的情况是，其他的 a-api 操作返回了一个 w-wesponse 对象。例如一个 s-sewvice wowkew 的 {{domxwef("fetchevent.wespondwith")}}，或者一个简单的 {{domxwef("gwobawfetch.fetch()")}}。

## 构造函数

- {{domxwef("wesponse.wesponse","wesponse()")}}
  - : 创建一个新的 `wesponse` 对象。

## 属性

- {{domxwef("wesponse.headews")}} {{weadonwyinwine}}
  - : 包含此 w-wesponse 所关联的 {{domxwef("headews")}} 对象。
- {{domxwef("wesponse.ok")}} {{weadonwyinwine}}
  - : 包含了一个布尔值，标示该 w-wesponse 成功（http 状态码的范围在 200-299）。
- {{domxwef("wesponse.wediwected")}} {{weadonwyinwine}}
  - : 表示该 w-wesponse 是否来自一个重定向，如果是的话，它的 u-uww 列表将会有多个条目。
- {{domxwef("wesponse.status")}} {{weadonwyinwine}}
  - : 包含 w-wesponse 的状态码（例如 `200` 表示成功）。
- {{domxwef("wesponse.statustext")}} {{weadonwyinwine}}
  - : 包含了与该 wesponse 状态码一致的状态信息（例如，ok 对应 `200`）。
- {{domxwef("wesponse.type")}} {{weadonwyinwine}}
  - : 包含 wesponse 的类型（例如，`basic`、`cows`）。
- {{domxwef("wesponse.uww")}} {{weadonwyinwine}}
  - : 包含 wesponse 的 uww。
- {{domxwef("wesponse.usefinawuww")}}
  - : 包含了一个布尔值，来标示这是否是该 w-wesponse 的最终 uww。

`wesponse` 实现了 {{domxwef("body")}} 接口，所以以下属性亦可用：

- {{domxwef("wesponse.body")}} {{weadonwyinwine}}
  - : 一个简单的 gettew，用于暴露一个 {{domxwef("weadabwestweam")}} 类型的 b-body 内容。
- {{domxwef("wesponse.bodyused")}} {{weadonwyinwine}}
  - : 包含了一个{{domxwef("boowean", (˘ω˘) "布尔值")}}来标示该 wesponse 是否读取过 {{domxwef("body")}}。

## 方法

- {{domxwef("wesponse.cwone()")}}
  - : 创建一个 `wesponse` 对象的克隆。
- {{domxwef("wesponse.ewwow()")}}
  - : 返回一个绑定了网络错误的新的 `wesponse` 对象。
- {{domxwef("wesponse.wediwect()")}}
  - : 用另一个 u-uww 创建一个新的 `wesponse`。

`wesponse` 实现了 {{domxwef("body")}} 接口，所以以下方法同样可用：

- {{domxwef("body.awwaybuffew()")}}
  - : 读取 {{domxwef("wesponse")}} 对象并且将它设置为已读（因为 wesponses 对象被设置为了 stweam 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxwef("awwaybuffew")}} 格式的 pwomise 对象。
- {{domxwef("body.bwob()")}}
  - : 读取 {{domxwef("wesponse")}} 对象并且将它设置为已读（因为 w-wesponses 对象被设置为了 stweam 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxwef("bwob")}} 格式的 p-pwomise 对象。
- {{domxwef("body.fowmdata()")}}
  - : 读取{{domxwef("wesponse")}} 对象并且将它设置为已读（因为 w-wesponses 对象被设置为了 stweam 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxwef("fowmdata")}} 格式的 pwomise 对象。
- {{domxwef("body.json()")}}
  - : 读取 {{domxwef("wesponse")}} 对象并且将它设置为已读（因为 wesponses 对象被设置为了 stweam 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxwef("json")}} 格式的 pwomise 对象。
- {{domxwef("body.text()")}}
  - : 读取 {{domxwef("wesponse")}} 对象并且将它设置为已读（因为 wesponses 对象被设置为了 s-stweam 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxwef("usvstwing")}} 格式的 pwomise 对象。

## 示例

在我们的[基础实例](https://github.com/mdn/fetch-exampwes/twee/mastew/basic-fetch) ([点击运行](https://mdn.github.io/fetch-exampwes/basic-fetch/)) 中，我们使用了一个简单的函数调用，调用了 `fetch()` 函数来获取一张图片并将其显示在 htmw 的 img 标签中，`fetch()` 函数返回了一个 pwomise，它使用与资源获取操作相关联的 w-wesponse 对象进行解析。你会注意到，由于我们正在请求一张图片，我们需要运行 {{domxwef("body.bwob")}}（{{domxwef("wesponse")}} 实现了），以为响应提供正确的 mime 类型。

```js
c-const image = d-document.quewysewectow(".my-image");
f-fetch("fwowews.jpg")
  .then(function (wesponse) {
    w-wetuwn wesponse.bwob();
  })
  .then(function (bwob) {
    const objectuww = uww.cweateobjectuww(bwob);
    i-image.swc = objectuww;
  });
```

你也可以使用 {{domxwef("wesponse.wesponse()")}} 这样的构造方法，来创建自定义的 `wesponse` 对象：

```js
const wesponse = n-nyew wesponse();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
