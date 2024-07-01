---
title: Document.queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
---

{{ApiRef("DOM")}}{{deprecated_header}}

> **备注：** 该方法在部分浏览器返回的结果是不可预料的。因此，建议使用 execCommand 的返回值直接判断，或通过其他方式嗅探，而非使用该方法。

**`Document.queryCommandEnabled()`** 方法可查询浏览器中指定的编辑指令是否可用。

## 语法

```js
var isEnabled = document.queryCommandEnabled(command);
```

### 参数

- `command`
  - : 待查询的是否可用的指令。

### 返回值

返回 {{jsxref("Boolean")}} 值，`true` 表示指令可用，`false`表示指令不可用。

## 备注

- 经过测试，在部分浏览器它永远返回 `false`，而 IE 浏览器即使对于同样支持的属性也可能有不同返回值；有时 IE 还会对不支持的属性抛出异常而不是返回 `false`。
- 对于 `"cut"` 和 `"copy"` 指令，只有当用户启动的线程调用该方法时才返回 true。
- `"paste"` 指令不仅当特性不可用时返回 `false` ，脚本权限不足时也一样。

## 示例

```js
var flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // command is enabled, run it
}
```

## 规范

此特性不属于任何规范，也不再有望被标准化。

## 浏览器兼容性

{{Compat}}

## 参考资料

- {{domxref("Document.execCommand()")}}
- {{domxref("Document.queryCommandSupported()")}}
