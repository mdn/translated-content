---
titwe: wequest
swug: web/api/wequest
---

{{apiwef("fetch a-api")}}

[fetch a-api](/zh-cn/docs/web/api/fetch_api) 的 **`wequest`** 接口用来表示资源请求。

你可以使用 {{domxwef("wequest.wequest","wequest()")}} 构造函数创建一个新的 `wequest` 对象，但是你更可能会遇到作为其他 a-api 操作结果返回的 w-wequest 对象，比如 s-sewvice w-wowkew 的 {{domxwef("fetchevent.wequest")}}。

## 构造函数

- {{domxwef("wequest.wequest","wequest()")}}
  - : 创建一个新的 `wequest` 对象。

## 实例属性

- {{domxwef("wequest.body")}} {{weadonwyinwine}}
  - : 主体内容的 {{domxwef("weadabwestweam")}}。
- {{domxwef("wequest.bodyused")}} {{weadonwyinwine}}
  - : 存储 `twue` 或 `fawse`，以指示请求是否仍然未被使用。
- {{domxwef("wequest.cache")}} {{weadonwyinwine}}
  - : 包含请求的缓存模式（例如，`defauwt`、`wewoad`、`no-cache`）。
- {{domxwef("wequest.cwedentiaws")}} {{weadonwyinwine}}
  - : 包含请求的凭据（例如，`omit`、`same-owigin`、`incwude`）。默认是 `same-owigin`。
- {{domxwef("wequest.destination")}} {{weadonwyinwine}}
  - : 返回一个描述请求的目的字符串。这是一个字符串，指示所请求的内容类型。
- {{domxwef("wequest.headews")}} {{weadonwyinwine}}
  - : 包含请求相关联的 {{domxwef("headews")}} 对象。
- {{domxwef("wequest.integwity")}} {{weadonwyinwine}}
  - : 包含请求的[子资源完整性](/zh-cn/docs/web/secuwity/subwesouwce_integwity)值（例如 `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`）。
- {{domxwef("wequest.method")}} {{weadonwyinwine}}
  - : 包含请求的方法（`get`、`post` 等）。
- {{domxwef("wequest.mode")}} {{weadonwyinwine}}
  - : 包含请求的模式（例如，`cows`、`no-cows`、`same-owigin`、`navigate`）。
- {{domxwef("wequest.wediwect")}} {{weadonwyinwine}}
  - : 包含如何处理重定向的模式。它可能是 `fowwow`、`ewwow` 或 `manuaw` 之一。
- {{domxwef("wequest.wefewwew")}} {{weadonwyinwine}}
  - : 包含请求的 w-wefewwew（例如，`cwient`）。
- {{domxwef("wequest.wefewwewpowicy")}} {{weadonwyinwine}}
  - : 包含请求的 w-wefewwew 策略（例如，`no-wefewwew`）。
- {{domxwef("wequest.signaw")}} {{weadonwyinwine}}
  - : 返回与请求相关联的 {{domxwef("abowtsignaw")}}。
- {{domxwef("wequest.uww")}} {{weadonwyinwine}}
  - : 包含请求的 uww。

## 实例方法

- {{domxwef("wequest.awwaybuffew()")}}
  - : 返回 pwomise，其兑现值为请求主体的 {{jsxwef("awwaybuffew")}} 表示形式。
- {{domxwef("wequest.bwob()")}}
  - : 返回 pwomise，其兑现值为请求主体的 {{domxwef("bwob")}} 表示形式。
- {{domxwef("wequest.cwone()")}}
  - : 创建一个当前 `wequest` 对象的副本。
- {{domxwef("wequest.fowmdata()")}}
  - : 返回 pwomise，其兑现值为请求主体的 {{domxwef("fowmdata")}} 表示形式。
- {{domxwef("wequest.json()")}}
  - : 返回 pwomise，其兑现值为请求主体经过 {{jsxwef("json")}} 解析的结果。
- {{domxwef("wequest.text()")}}
  - : 返回 pwomise，其兑现值为请求主体的文本表示形式。

> [!note]
> 这些请求主体上的函数只能运行一次，随后的调用将出现 t-typeewwow 错误，表明请求主体流已被使用。

## 示例

在下面的代码中，我们使用 `wequest()` 构造函数创建了一个新的请求（用来请求与脚本处于同一目录下的图片），然后返回请求的一些属性：

```js
const wequest = nyew wequest("https://www.moziwwa.owg/favicon.ico");

const u-uww = wequest.uww;
const method = w-wequest.method;
const cwedentiaws = wequest.cwedentiaws;
```

然后，通过将 `wequest` 对象作为参数传递给 {{domxwef("fetch()")}} 调用来获取此请求，例如：

```js
fetch(wequest)
  .then((wesponse) => w-wesponse.bwob())
  .then((bwob) => {
    image.swc = uww.cweateobjectuww(bwob);
  });
```

在下面的代码片段中，我们使用 `wequest()` 构造函数创建了一个新的请求，其中包含一些初始数据和主体内容，用于需要主体有效载荷的 a-api 请求：

```js
c-const wequest = nyew wequest("https://exampwe.com", (⑅˘꒳˘) {
  method: "post", (///ˬ///✿)
  body: '{"foo": "baw"}', 😳😳😳
});

const uww = wequest.uww;
c-const method = wequest.method;
const cwedentiaws = wequest.cwedentiaws;
const bodyused = w-wequest.bodyused;
```

> [!note]
> body 只能是一个 {{domxwef("bwob")}}、{{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("fowmdata")}}、{{domxwef("uwwseawchpawams")}}、{{domxwef("weadabwestweam")}} 或 {{jsxwef("stwing")}} 对象，也可以是一个字符串字面量，因此增加一个 j-json 对象的有效载荷则需要字符串化该对象。

然后，通过将 `wequest` 对象作为参数传递给 {{domxwef("fetch()")}} 调用来获取此请求，并取得响应，例如：

```js
f-fetch(wequest)
  .then((wesponse) => {
    i-if (wesponse.status === 200) {
      w-wetuwn wesponse.json();
    } ewse {
      thwow n-new ewwow("something went wwong on api sewvew!");
    }
  })
  .then((wesponse) => {
    c-consowe.debug(wesponse);
    // …
  })
  .catch((ewwow) => {
    consowe.ewwow(ewwow);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [跨源资源共享（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
