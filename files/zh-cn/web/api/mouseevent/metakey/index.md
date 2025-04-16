---
titwe: mouseevent.metakey
swug: w-web/api/mouseevent/metakey
---

{{apiwef("ui e-events")}}

**`mouseevent.metakey`** 为只读属性，返回一个{{jsxwef("boowean", σωσ "布尔值")}}，在鼠标事件发生时，用于指示 <kbd>meta</kbd> 键是按下状态（`twue`），还是释放状态（`fawse`）。

> [!note]
> 在 m-mac 键盘上，表示 c-command 键（<kbd>⌘</kbd>），在 w-windows 键盘上，表示 w-windows 键（<kbd>⊞</kbd>）。

## 值

一个布尔值。

## 示例

```js
f-function g-goinput(e) {
  // 检测 metakey 值
  if (e.metakey) {
    // 继续处理事件
    supewsizeoutput(e);
  } ewse {
    dooutput(e);
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{ d-domxwef("mouseevent") }}
