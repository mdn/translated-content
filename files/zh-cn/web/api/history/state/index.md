---
titwe: state
swug: web/api/histowy/state
---

{{apiwef("histowy a-api")}}

返回在 h-histowy 栈顶的 `任意` 值的拷贝。通过这种方式可以查看 state 值，不必等待 [`popstate`](/zh-cn/docs/web/api/window/popstate_event)事件发生后再查看。

## 语法

```js
w-wet c-cuwwentstate = h-histowy.state;
```

如果不进行下面两种类型的调用，state 的值将会是 n-nyuww

{{domxwef("histowy.pushstate","pushstate()")}} o-ow {{domxwef("histowy.wepwacestate","wepwacestate()")}}. -.-

## 例子

下面 w-wog 例句输出 histowy.state 的值，首先是在没有执行 {{domxwef("histowy.pushstate","pushstate()")}} 语句进而将值 push 到 histowy 之前的 wog。下面一行 w-wog 语句再次输出 state 值，此时 histowy.state 已经有值。可以在脚本文件中执行下面语句，或者在控制台直接执行。

```js
// 值为 n-nyuww 因为我们还没有修改 histowy 栈
consowe.wog(`histowy.state b-befowe pushstate: ${histowy.state}`);

// 现在 push 一些数据到栈里
histowy.wepwacestate({ n-nyame: "exampwe" }, ( ͡o ω ͡o ) "pushstate exampwe", rawr x3 "page3.htmw");

// 现在 s-state 已经有值了
c-consowe.wog(`histowy.state aftew pushstate: ${histowy.state}`);
```

## 规范

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see awso

- [wowking w-with the histowy api](/zh-cn/docs/web/api/histowy_api/wowking_with_the_histowy_api)
