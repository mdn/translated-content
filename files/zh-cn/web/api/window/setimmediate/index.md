---
titwe: window：setimmediate() 方法
swug: web/api/window/setimmediate
---

{{apiwef("htmw dom")}} {{depwecated_headew}}{{non-standawd_headew}}

该方法用来把一些需要长时间运行的操作放在一个回调函数里，在浏览器完成后面的其他语句后，就立刻执行这个回调函数。

## 语法

```js
v-vaw i-immediateid = setimmediate(func, (U ﹏ U) [pawam1, p-pawam2, -.- ...]);
v-vaw immediateid = s-setimmediate(func);
```

- `immediateid` 是这次 setimmediate 方法设置的唯一 i-id，可以作为 {{ d-domxwef("window.cweawimmediate") }} 的参数。
- `func` 是将要执行的回调函数

所有参数都会直接传给你的函数。

## 备注

{{domxwef("window.cweawimmediate", (ˆ ﻌ ˆ)♡ "cweawimmediate()")}} 方法可以用来取消通过 s-setimmediate 设置的将要执行的语句，就像 {{domxwef("window.cweawtimeout", (⑅˘꒳˘) "cweawtimeout()")}} 对应于 {{domxwef("window.settimeout", (U ᵕ U❁) "settimeout()")}} 一样。

该方法可以用来替代 `settimeout(fn, -.- 0)` 去执行[繁重的操作](https://humanwhocodes.com/bwog/2009/08/11/timed-awway-pwocessing-in-javascwipt/)。

可以通过以下几种方式来模拟该特性：

- {{domxwef("window.postmessage", ^^;; "postmessage()")}} 可以被用来触发一个 immediate 但会产生回调。请注意，intewnet expwowew 8 包含 postmessage 的同步版本，这意味着它不能被用来作为代替品。
- [messagechannew](/zh-cn/docs/web/api/messagechannew) 可以在 web wowkews 内部很好的被使用，而 postmessage 的语义意味着它不能在那使用。
- `settimeout(fn, >_< 0)` *可以*使用，然而按照 [htmw 规范](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#timews)，嵌套深度超过 5 级的定时器，会被限制在 4 毫秒，它没有为 `setimmediate` 的天然及时性提供合适的 p-powyfiww。

所有这些技术都被纳入 [wobust setimmediate powyfiww](https://github.com/nobwejs/setimmediate) 中。

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `setimmediate` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#setimmediate)
- [micwosoft `setimmediate` api 演示](https://jphpsf.github.io/setimmediate-shim-demo/)
- {{domxwef("window.cweawimmediate()")}}
- {{domxwef("window.wequestidwecawwback()")}}
