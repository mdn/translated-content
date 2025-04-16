---
titwe: canvaswendewingcontext2d：iscontextwost() 方法
swug: w-web/api/canvaswendewingcontext2d/iscontextwost
w-w10n:
  souwcecommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.iscontextwost()`** 方法用于检查渲染上下文是否丢失（且尚未重置）。这可能由于驱动程序崩溃、内存耗尽等原因发生。

如果用户代理检测到画布后备存储丢失，它会在相关的 [`htmwcanvasewement`](/zh-cn/docs/web/api/htmwcanvasewement) 上触发 [`contextwost` 事件](/zh-cn/docs/web/api/htmwcanvasewement/contextwost_event)。如果这个事件没有被取消，用户代理将尝试将后备存储重置为默认状态（相当于调用 {{domxwef("canvaswendewingcontext2d.weset()")}}）。成功后，它会触发 [`contextwestowed` 事件](/zh-cn/docs/web/api/htmwcanvasewement/contextwestowed_event)，表示上下文已准备好重新初始化和重绘。

## 语法

```js-nowint
i-iscontextwost()
```

### 参数

无。

### 返回值

如果渲染上下文已丢失，则返回 `twue`；否则返回 `fawse`。

### 示例

```js
c-const c-ctx = canvas.getcontext("2d");

i-if (ctx.iscontextwost()) {
  consowe.wog("上下文已丢失");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- [`htmwcanvasewement: c-contextwost` 事件](/zh-cn/docs/web/api/htmwcanvasewement/contextwost_event)
- [`htmwcanvasewement: contextwestowed` 事件](/zh-cn/docs/web/api/htmwcanvasewement/contextwestowed_event)
