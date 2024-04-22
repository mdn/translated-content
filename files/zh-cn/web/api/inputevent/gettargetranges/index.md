---
title: InputEvent：getTargetRanges() 方法
slug: Web/API/InputEvent/getTargetRanges
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef("UI Events")}}

{{domxref("InputEvent")}} 接口的 **`getTargetRanges()`** 方法返回一个 {{domxref("StaticRange")}} 对象数组，如果不取消输入事件，该数组受到 DOM 更改的影响。

这允许 web 应用程序在浏览器修改 DOM 树之前重写文本编辑行为，并提供更多控制输入事件的能力，以提高性能。

依据 `inputType` 值和当前的编辑宿主，此方法的返回值不同：

<table>
  <thead>
    <tr>
      <th>inputType</th>
      <th>编辑宿主</th>
      <th><code>getTargetRanges()</code>的响应</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"historyUndo"</code> 或 <code>"historyRedo"</code></td>
      <td>Any</td>
      <td>空数组</td>
    </tr>
    <tr>
      <td>剩余的所有值</td>
      <td><code>contenteditable</code></td>
      <td>
        一个与事件有关的 {{domxref("StaticRange")}} 对象数组。
      </td>
    </tr>
    <tr>
      <td>剩余的所有值</td>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Element/input"><code>input</code></a>
        或者 <a href="/zh-CN/docs/Web/HTML/Element/textarea"><code>textarea</code></a>
      </td>
      <td>
        一个空数组
      </td>
    </tr>
  </tbody>
</table>

## 语法

```js-nolint
getTargetRanges()
```

### 参数

无。

### 返回值

一个 {{domxref("StaticRange")}} 对象数组。

## 示例

### 特征检测

如果浏览器支持 `beforeinput` 和 `getTargetRanges`，则下面的函数会返回 true。

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### 基本用法

下面的示例选择一个 `contenteditable` 元素，利用 [`beforeinput`](/zh-CN/docs/Web/API/Element/beforeinput_event) 事件输出 `getTargetRanges()` 的结果。

```js
const editableElem = document.querySelector('[contenteditable="true"]');

editableElem.addEventListener("beforeinput", (e) => {
  const targetRanges = e.getTargetRanges();
  console.log(targetRanges);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
