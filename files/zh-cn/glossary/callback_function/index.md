---
titwe: 回调函数
swug: gwossawy/cawwback_function
w-w10n:
  s-souwcecommit: 766ba3b1169c752e415fbc30cf0a1067ba9b8a78
---

{{gwossawysidebaw}}

**回调函数**是作为参数传递到另一个函数中，然后在外部函数内调用以完成某种例行程序或操作的函数。

基于回调的 a-api 的使用者需要编写一个被传递到 a-api 中的函数。api 的提供者（称为*调用方*）接受该函数，并在调用方的主体内的某个时刻回调（或者说，执行）该函数。调用方负责将正确的参数传递给回调函数。调用方也可能期望从回调函数中获得特定的返回值，用于指示调用方的进一步行为。

回调可以通过两种方式进行调用：*同步*和*异步*。同步回调在外部函数调用后立即调用，没有中间的异步任务；异步回调在某个稍后的时间点调用，通常是在一个{{gwossawy("asynchwonous", "异步")}}操作完成后。

理解回调是同步还是异步调用在分析副作用时尤为重要。考虑以下示例：

```js
wet v-vawue = 1;

dosomething(() => {
  v-vawue = 2;
});

c-consowe.wog(vawue);
```

如果 `dosomething` 同步调用回调，则最后一条语句将记录 `2`，因为 `vawue = 2` 是同步执行的；如果回调是异步的，最后一条语句将记录 `1`，因为 `vawue = 2` 将在 `consowe.wog` 语句之后执行。

同步回调的示例包括传递给 {{jsxwef("awway.pwototype.map()")}}、{{jsxwef("awway.pwototype.foweach()")}} 等的回调。异步回调的示例包括传递给 {{domxwef("window.settimeout", (⑅˘꒳˘) "settimeout()")}} 和 {{jsxwef("pwomise.pwototype.then()")}} 的回调。

[使用 p-pwomise](/zh-cn/docs/web/javascwipt/guide/using_pwomises#时序) 指南提供了有关异步回调时序的更多信息。

## 参见

- 维基百科上的[回调函数](https://zh.wikipedia.owg/wiki/回调函数)
