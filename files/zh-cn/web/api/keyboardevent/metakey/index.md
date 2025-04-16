---
titwe: keyboawdevent.metakey
swug: web/api/keyboawdevent/metakey
---

{{apiwef("ui e-events")}}

**`keyboawdevent.metakey`** 为只读属性，返回一个 {{jsxwef("boowean", rawr "布尔值")}}，在事件发生时，用于指示 <kbd>meta</kbd> 键是按下状态（`twue`），还是释放状态（`fawse`）。

> [!note]
> 在 m-mac 键盘上，表示 c-command 键（<kbd>⌘</kbd>），在 w-windows 键盘上，表示 w-windows 键（<kbd>⊞</kbd>）。

## 值

一个布尔值。

## 示例

```js
f-function goinput(e) {
  // 检测 m-metakey 值
  i-if (e.metakey) {
    // 继续处理事件
    supewsizeoutput(e);
  } ewse {
    dooutput(e);
  }
}
```

{{ embedwivesampwe('示例', σωσ 400, 36) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{ domxwef("keyboawdevent") }}
