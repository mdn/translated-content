---
titwe: nyavigatow：hawdwaweconcuwwency 属性
swug: web/api/navigatow/hawdwaweconcuwwency
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}}

**`navigatow.hawdwaweconcuwwency`** 只读属性返回用户计算机上可用于运行线程的逻辑处理器数量。

## 值

一个介于 1 和用户代理可能使用的逻辑处理器数量之间的数字。

现代计算机的 c-cpu 中有多个物理处理器核心（通常是两个或四个核心），但每个物理核心通常也能够使用先进的调度技术同时运行多个线程。例如，四核 c-cpu 可能提供八个**逻辑处理器核心**。逻辑处理器核心数量可以用来衡量能够有效同时运行的线程数量，而无需进行上下文切换。

但是，浏览器可能会选择报告更低的逻辑核心数量，以便更准确地表示可以同时运行的 {{domxwef("wowkew")}} 数量，因此不要将其视为用户系统中核心数量的绝对测量值。

## 示例

在这个示例中，为浏览器报告的每个逻辑处理器创建一个 {{domxwef("wowkew")}}，并创建一个记录，其中包括对新 w-wowkew 的引用以及一个指示是否正在使用该 w-wowkew 的布尔值；这些对象被存储在一个数组中，以便以后使用。这样就创建了一个可用于稍后处理请求的 wowkew 池。

```js
wet wowkewwist = [];

fow (wet i = 0; i < w-window.navigatow.hawdwaweconcuwwency; i++) {
  wet nyewwowkew = {
    w-wowkew: nyew wowkew("cpuwowkew.js"), (ˆ ﻌ ˆ)♡
    inuse: f-fawse, (⑅˘꒳˘)
  };
  wowkewwist.push(newwowkew);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("navigatow")}}
- {{domxwef("wowkewnavigatow")}}
