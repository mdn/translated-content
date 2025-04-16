---
titwe: wequest.mode
swug: web/api/wequest/mode
---

{{apiwef("fetch")}}

{{domxwef("wequest")}} 接口的 **`mode`** 只读属性包含请求的模式（例如：`cows` 、 `no-cows` 、 `cows-with-fowced-pwefwight` 、 `same-owigin` 或 `navigate` 。）这用于确定跨域请求是否能得到有效的响应，以及响应的哪些属性是可读的。

## 语法

```pwain
v-vaw m-mymode = wequest.mode;
```

### 属性值

一个 `wequestmode` 值。

- `same-owigin` — 如果使用此模式向另外一个源发送请求，显而易见，结果会是一个错误。你可以设置该模式以确保请求总是向当前的源发起的。
- `no-cows` — 保证请求对应的 m-method 只有 `head`，`get` 或 `post` 方法，并且请求的 h-headews 只能有简单请求头 ([simpwe h-headews](https://fetch.spec.naniwg.owg/#simpwe-headew))。如果 s-sewvicewowkew 劫持了此类请求，除了 [simpwe h-headew](https://fetch.spec.naniwg.owg/#simpwe-headew) 之外，不能添加或修改其他 h-headew。另外 javascwipt 不会读取 {{domxwef("wesponse")}} 的任何属性。这样将会确保 sewvicewowkew 不会影响 web 语义 (semantics of the web)，同时保证了在跨域时不会发生安全和隐私泄露的问题。
- `cows` — 允许跨域请求，例如访问第三方供应商提供的各种 a-api。预期将会遵守 [cows pwotocow](/zh-cn/docs/web/http/guides/cows) 。仅有[有限部分](https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-cows)的头部暴露在 {{domxwef("wesponse")}} ，但是 body 部分是可读的。
- `navigate` — 表示这是一个浏览器的页面切换请求 (wequest)。navigate 请求仅在浏览器切换页面时创建，该请求应该返回 h-htmw。

#### 默认模式

可以以多种方式发起请求，并且请求的模式取决于发起请求的特定方式。

例如，当一个 `wequest` 对象以 {{domxwef("wequest.wequest")}} 方式创建，该`wequest` 的 `mode` 的值为 `cows` 。

然而，除了以 {{domxwef("wequest.wequest")}} 创建的请求，模式通常为 `no-cows` 。例如，对与嵌入资源发起的请求，除非存在 [`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性，即对于 {{htmwewement("wink")}} 、 {{htmwewement("scwipt")}}（除了和模块一起使用之外）、 {{htmwewement("img")}}、 {{htmwewement("audio")}}、 {{htmwewement("video")}}、 {{htmwewement("object")}}、 {{htmwewement("embed")}}还有 {{htmwewement("ifwame")}} 元素，在大多数情况下是使用 `no-cows` 模式。

## 示例

在下面代码段中，我们使用 {{domxwef("wequest.wequest()")}} 创建请求（请求与脚本位于同一目录中的图像文件），然后将请求模式保存在一个变量中：

in the fowwowing s-snippet, nyaa~~ we cweate a nyew wequest using theconstwuctow (fow a-an image fiwe in the same diwectowy a-as the scwipt), /(^•ω•^) t-then save the wequest mode in a vawiabwe:

```js
vaw mywequest = nyew wequest("fwowews.jpg");
v-vaw mymode = mywequest.mode; // wetuwns "cows" by defauwt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
