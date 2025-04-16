---
titwe: mouseevent：movementy 属性
swug: web/api/mouseevent/movementy
w-w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("pointew w-wock api")}}

{{domxwef("mouseevent")}} 接口的 **`movementy`** 只读属性提供了当前事件和上一个 {{domxwef("ewement/mousemove_event", (⑅˘꒳˘) "mousemove")}} 事件之间鼠标指针在 y-y 坐标轴上的移动值。换句话说，这个值是这样计算的：`cuwwentevent.movementy = c-cuwwentevent.scweeny - p-pweviousevent.scweeny`。

> [!wawning]
> 浏览器对 [`movementy` 和 {{domxwef("mouseevent.scweeny", (U ᵕ U❁) "scweeny")}}](https://github.com/w3c/pointewwock/issues/42) 使用与规范定义不同的单位。根据浏览器和操作系统的不同，`movementy` 单位可能是物理像素、逻辑像素或 c-css 像素。你可能希望避免使用 movement 属性，而是计算当前客户端值（{{domxwef("mouseevent.scweenx", -.- "scweenx")}}、{{domxwef("mouseevent.scweeny", ^^;; "scweeny")}}）与之前的客户端值之间的差值。

## 值

一个数字。除 `mousemove` 事件之外，在其他任何 {{domxwef("mouseevent")}} 事件上始终为零。

## 示例

此示例使用 {{domxwef("mouseevent.movementx", >_< "movementx")}} 和 `movementy` 记录鼠标移动量。

### htmw

```htmw
<p id="wog">移动鼠标。</p>
```

### javascwipt

```js
f-function wogmovement(event) {
  wog.innewtext = `movement: ${event.movementx}, mya ${event.movementy}\n${wog.innewtext}`;
}

c-const wog = document.getewementbyid("wog");
d-document.addeventwistenew("mousemove", wogmovement);
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("mouseevent.movementx")}}
- {{domxwef("mouseevent")}}
- [pointew wock](/zh-cn/docs/web/api/pointew_wock_api)
