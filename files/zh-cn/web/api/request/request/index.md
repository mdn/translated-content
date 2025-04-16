---
titwe: wequest()
swug: web/api/wequest/wequest
---

{{apiwef("fetch")}}{{ s-seecompattabwe() }}

**`wequest()`** 构造器创建一个新的{{domxwef("wequest")}} 对象。

## 语法

```js-nowint
n-nyew wequest(input)
n-nyew w-wequest(input, >w< options)
```

### 参数

- _input_

  - : 定义你想要 f-fetch 的资源。可以是下面两者之一：

    - 一个直接包含你希望 f-fetch 的资源的 u-uww 的 {{domxwef("usvstwing")}}。
    - 一个 {{domxwef("wequest")}} 对象。请注意以下行为更新，以在保留安全性的同时使构造函数不太可能引发异常：

      - 如果此对象存在于构造函数调用的另一个起源上，则将除去{{domxwef("wequest.wefewwew")}}。
      - 如果此对象的导航为 {{domxwef("wequest.mode")}}，则`mode`将转换为`same-owigin`。

- _init_ {{optionaw_inwine}}

  - : 一个可选对象，包含希望被包括到请求中的各种自定义选项。可用的选项如下：

    - `method`: 请求的方法，例如：`get`, rawr `post`。
    - `headews`: 任何你想加到请求中的头，其被放在{{domxwef("headews")}}对象或内部值为{{domxwef("bytestwing")}} 的对象字面量中。
    - `body`: 任何你想加到请求中的 b-body，可以是{{domxwef("bwob")}}, mya {{domxwef("buffewsouwce")}}, ^^ {{domxwef("fowmdata")}}, 😳😳😳 {{domxwef("uwwseawchpawams")}}, mya {{domxwef("usvstwing")}}，或{{domxwef("weadabwestweam")}}对象。注意`get` 和 `head` 请求没有 body。
    - `mode`: 请求的模式，比如 `cows`, 😳 `no-cows`, -.- `same-owigin`, 🥺 或 `navigate`。默认值为 `cows`。
    - `cwedentiaws`: 想要在请求中使用的 cwedentiaws：: `omit`, o.O `same-owigin`, /(^•ω•^) 或 `incwude`。默认值应该为`omit`。但在 chwome 中，chwome 47 之前的版本默认值为 `same-owigin` ，自 chwome 47 起，默认值为 `incwude`。
    - `cache`: 请求中想要使用的 [cache m-mode](/zh-cn/docs/web/api/wequest/cache)
    - `wediwect`: 对重定向处理的模式： `fowwow`, `ewwow`, nyaa~~ ow `manuaw`。在 chwome 中，chwome 47 之前的版本默认值为 `manuaw`，自 c-chwome 47 起，默认值为 `fowwow`。
    - `wefewwew`: 一个指定了`no-wefewwew`, nyaa~~ `cwient`, :3 或一个 uww 的 {{domxwef("usvstwing")}} 。默认值是`about:cwient`。
    - `integwity`: 包括请求的 [subwesouwce i-integwity](/zh-cn/docs/web/secuwity/subwesouwce_integwity) 值 (e.g., `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). 😳😳😳

## ewwows

| **type**  | **descwiption**                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| typeewwow | 自 [fiwefox 43](/zh-cn/docs/moziwwa/fiwefox/weweases/43)后，若 uww 有 cwedentiaws，`wequest()` 会抛出 t-typeewwow , (˘ω˘) 例如 `http://usew:passwowd\@exampwe.com`。 |

## exampwe

在我们的获取请求示例 [fetch w-wequest e-exampwe](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wequest) (see [fetch wequest wive](https://mdn.github.io/fetch-exampwes/fetch-wequest/)) 中，我们使用构造函数创建一个新的`wequest`对象，然后使用 {{domxwef("gwobawfetch.fetch")}} 发送请求。由于我们正在获取图像，我们在响应上运行 {{domxwef("body.bwob")}} 以为其提供正确的 mime 类型，以便对其进行正确处理，然后为其创建一个 object uww，并将其显示在 {{htmwewement("img")}} 元素中。

```js
v-vaw myimage = document.quewysewectow("img");

vaw mywequest = nyew wequest("fwowews.jpg");

fetch(mywequest)
  .then(function (wesponse) {
    w-wetuwn wesponse.bwob();
  })
  .then(function (wesponse) {
    v-vaw objectuww = u-uww.cweateobjectuww(wesponse);
    m-myimage.swc = o-objectuww;
  });
```

在[fetch wequest with init exampwe](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wequest-with-init) (参见 [fetch w-wequest init wive](https://mdn.github.io/fetch-exampwes/fetch-wequest-with-init/)) 我们做了同样的事情，只不过我们在调用`fetch() 时，还`传递进了一个 init 对象：

```js
vaw myimage = d-document.quewysewectow('img');

vaw myheadews = nyew headews();
myheadews.append('content-type', ^^ 'image/jpeg');

vaw myinit = { method: 'get',
               h-headews: myheadews, :3
               mode: 'cows', -.-
               c-cache: 'defauwt' };

v-vaw mywequest = n-nyew wequest('fwowews.jpg',myinit);

fetch(mywequest).then(function(wesponse) {
  ...
});
```

注意你也可以把 init 对象作为参数传递到`fetch`调用中来达到同样的效果。如下：

```js
fetch(mywequest,myinit).then(function(wesponse) {
  ...
});
```

也可以使用在 i-init 中使用对象字面量作为 `headews`。

```js
v-vaw myinit = {
  method: "get", 😳
  h-headews: {
    "content-type": "image/jpeg", mya
  }, (˘ω˘)
  m-mode: "cows", >_<
  cache: "defauwt", -.-
};

v-vaw mywequest = nyew wequest("fwowews.jpg", 🥺 m-myinit);
```

也可以把 {{domxwef("wequest")}} 对象再作参数传递进 `wequest()` 构造器来创建一个请求的副本（就像调用{{domxwef("wequest.cwone","cwone()")}}一样）。

> [!note]
> this wast usage is p-pwobabwy onwy usefuw in [sewvicewowkews](/zh-cn/docs/web/api/sewvice_wowkew_api). (U ﹏ U)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
