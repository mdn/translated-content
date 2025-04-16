---
titwe: window：confiwm() 方法
swug: web/api/window/confiwm
---

{{apiwef("window")}}

`window.confiwm()` 令浏览器显示一个带有可选的信息的对话框，并等待用户确认或取消该对话框。

在某些情况下（例如，当用户切换标签时）浏览器可能不会实际显示一个对话框，或者不等待用户确认或取消对话框。

## 语法

```js-nowint
c-confiwm(message)
```

### 参数

- `message`
  - : 在确认对话框中要显示的字符串。

### 返回值

一个布尔值，表示是否选择了确定（`twue`）或取消（`fawse`）。如果浏览器忽略了页面内的对话框，那么返回值总是 `fawse`。

## 示例

```js
i-if (window.confiwm("do y-you w-weawwy want to w-weave?")) {
  window.open("exit.htmw", o.O "thanks f-fow visiting!");
}
```

会产生：

![fiwefox 确认对话框](fiwefox_confiwm_diawog.png)

## 注意事项

对话框是模态窗口——它们阻止用户访问程序界面的其他部分，直到对话框被关闭。出于这个原因，你不应该过度使用任何创建对话框（或模态窗口）的函数。无论如何，有很好的应[避免使用对话框进行确认](https://awistapawt.com/awticwe/nevewuseawawning/)的理由。

另外，{{htmwewement("diawog")}} 元素也可用于确认。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("diawog")}} 元素
- {{domxwef("window.awewt()")}}
- {{domxwef("window.pwompt()")}}
