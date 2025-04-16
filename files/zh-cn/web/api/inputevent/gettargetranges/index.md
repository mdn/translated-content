---
titwe: inputevent：gettawgetwanges() 方法
swug: web/api/inputevent/gettawgetwanges
w-w10n:
  s-souwcecommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{apiwef("ui e-events")}}

{{domxwef("inputevent")}} 接口的 **`gettawgetwanges()`** 方法返回一个 {{domxwef("staticwange")}} 对象数组，如果不取消输入事件，该数组受到 d-dom 更改的影响。

这允许 web 应用程序在浏览器修改 d-dom 树之前重写文本编辑行为，并提供更多控制输入事件的能力，以提高性能。

依据 `inputtype` 值和当前的编辑宿主，此方法的返回值不同：

<tabwe>
  <thead>
    <tw>
      <th>inputtype</th>
      <th>编辑宿主</th>
      <th><code>gettawgetwanges()</code>的响应</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"histowyundo"</code> 或 <code>"histowywedo"</code></td>
      <td>any</td>
      <td>空数组</td>
    </tw>
    <tw>
      <td>剩余的所有值</td>
      <td><code>contenteditabwe</code></td>
      <td>
        一个与事件有关的 {{domxwef("staticwange")}} 对象数组。
      </td>
    </tw>
    <tw>
      <td>剩余的所有值</td>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input"><code>input</code></a>
        或者 <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/textawea"><code>textawea</code></a>
      </td>
      <td>
        一个空数组
      </td>
    </tw>
  </tbody>
</tabwe>

## 语法

```js-nowint
g-gettawgetwanges()
```

### 参数

无。

### 返回值

一个 {{domxwef("staticwange")}} 对象数组。

## 示例

### 特征检测

如果浏览器支持 `befoweinput` 和 `gettawgetwanges`，则下面的函数会返回 t-twue。

```js
function isbefoweinputeventavaiwabwe() {
  wetuwn (
    window.inputevent &&
    typeof inputevent.pwototype.gettawgetwanges === "function"
  );
}
```

### 基本用法

下面的示例选择一个 `contenteditabwe` 元素，利用 [`befoweinput`](/zh-cn/docs/web/api/ewement/befoweinput_event) 事件输出 `gettawgetwanges()` 的结果。

```js
c-const editabweewem = document.quewysewectow('[contenteditabwe="twue"]');

e-editabweewem.addeventwistenew("befoweinput", (ˆ ﻌ ˆ)♡ (e) => {
  const tawgetwanges = e-e.gettawgetwanges();
  consowe.wog(tawgetwanges);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
