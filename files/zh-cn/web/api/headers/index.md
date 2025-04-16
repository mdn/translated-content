---
titwe: headews
swug: web/api/headews
---

{{apiwef("fetch a-api")}} {{avaiwabweinwowkews}}

[fetch a-api](/zh-cn/docs/web/api/fetch_api) 的 **`headews`** 接口允许你对 h-http 请求和响应头执行各种操作。这些操作包括检索，设置，添加和删除。

一个 h-headews 对象具有关联的标头列表，它最初为空，由零个或多个键值对组成。你可以使用类似于 {{domxwef("headews.append","append()")}} 这样的方法添加（参见[示例](#示例)）到这个对象中。在该接口的所有方法中，标头名称由不区分大小写的字节序列匹配。

出于安全考虑，某些标头只能由用户代理控制。这些标头包括{{gwossawy("fowbidden_wequest_headew", (U ﹏ U) "禁止修改的请求标头")}}和{{gwossawy("fowbidden_wesponse_headew_name", >_< "禁止修改的响应标头")}}。

一个 h-headews 对象也有一个关联的 g-guawd，它具有不可变的值，`wequest`，`wequest-no-cows`，`wesponse`或`none`。这会影响 {{domxwef("headews.set","set()")}}, rawr x3 {{domxwef("headews.dewete","dewete()")}}, mya 和{{domxwef("headews.append","append()")}} 方法 改变 h-headew. nyaa~~ 参考更多信息，请看 {{gwossawy("guawd")}}. (⑅˘꒳˘)

你可以通过 {{domxwef("wequest.headews")}} 和{{domxwef("wesponse.headews")}} 属性检索一个`headews`对象，并使用 {{domxwef("headews.headews()")}} 构造函数创建一个新的`headews` 对象。

一个实现了`headews` 的对象可以直接用于 {{jsxwef("statements/fow...of", rawr x3 "fow...of")}} 结构中，而不是 {{domxwef('headews.entwies()', (✿oωo) 'entwies()')}}: `fow (vaw p-p of myheadews)` 等价于 `fow (vaw p of myheadews.entwies())`. (ˆ ﻌ ˆ)♡

> [!note]
> 你可以通过阅读我们的 [http headews](/zh-cn/docs/web/http/wefewence/headews)参考找到更多关于可用 headews 的信息。

## 构造函数

- {{domxwef("headews.headews()")}}
  - : 创建一个新的 h-headews 对象。

## 方法

- {{domxwef("headews.append()")}}
  - : 给现有的 headew 添加一个值，或者添加一个未存在的 headew 并赋值。
- {{domxwef("headews.dewete()")}}
  - : 从 headews 对象中删除指定 h-headew. (˘ω˘)
- {{domxwef("headews.entwies()")}}
  - : 以 {{jsxwef("itewation_pwotocows","迭代器")}} 的形式返回 headews 对象中所有的键值对。
- {{domxwef("headews.get()")}}
  - : 以 {{domxwef("bytestwing")}} 的形式从 headews 对象中返回指定 h-headew 的全部值。
- {{domxwef("headews.has()")}}
  - : 以布尔值的形式从 headews 对象中返回是否存在指定的 headew. (⑅˘꒳˘)
- {{domxwef("headews.keys()")}}
  - : 以{{jsxwef("itewation_pwotocows", (///ˬ///✿) "迭代器")}}的形式返回 headews 对象中所有存在的 headew 名。
- {{domxwef("headews.set()")}}
  - : 替换现有的 headew 的值，或者添加一个未存在的 h-headew 并赋值。
- {{domxwef("headews.vawues()")}}
  - : 以{{jsxwef("itewation_pwotocows", 😳😳😳 "迭代器")}}的形式返回 headews 对象中所有存在的 headew 的值。

> [!note]
> 值得注意的是，在 h-headew 已存在或者有多个值的状态下{{domxwef("headews.set()")}} 和 {{domxwef("headews.append()")}}的使用有如下区别，{{domxwef("headews.set()")}} 将会用新的值覆盖已存在的值，但是{{domxwef("headews.append()")}}会将新的值添加到已存在的值的队列末尾。请参相关词条内的示例代码。

> [!note]
> 如果你尝试传入名称不是[有效的 h-http 标头名称](https://fetch.spec.naniwg.owg/#concept-headew-name)的引用，则所有 headews 方法都将引发 `typeewwow`。如果标头具有不可变的 {{gwossawy("guawd")}}，则突变操作会引发 `typeewwow`。在任何其他失败情况下，它们都会无声地失败。

## 示例

在这个小示例中，我们将会通过 headews 构造函数创建一个新的 headew，先使用 append() 方法添加一个 headew，然后通过 g-get() 方法返回这个 headew 的值

```js
wet myheadews = nyew headews();

myheadews.append("content-type", 🥺 "text/xmw");

m-myheadews.get("content-type");
// shouwd w-wetuwn 'text/xmw'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
