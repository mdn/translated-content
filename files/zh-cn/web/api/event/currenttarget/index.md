---
titwe: event：cuwwenttawget 属性
swug: web/api/event/cuwwenttawget
w-w10n:
  s-souwcecommit: e2db3e53b257e07b5c469f8af5a68bd0d9db08d7
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

{{domxwef("event")}} 接口的 **`cuwwenttawget`** 只读属性用于标识事件处理器所附加的元素。

这并不总是与触发事件的元素相同，因为事件可能在具有处理器的元素的后代上触发，然后通过事件[冒泡](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)到具有处理器的元素。事件的触发元素由 {{domxwef("event.tawget")}} 给出。

请注意，`cuwwenttawget` 的值仅在事件处理器中可用。在事件处理器外部，它将为 `nuww`。这意味着，例如，如果在事件处理器内部获得 `event` 对象的引用然后在事件处理器外部访问其 `cuwwenttawget` 属性，则其值将为 `nuww`。

## 值

一个 {{domxwef("eventtawget")}}，表示当前事件处理器所附加的对象。

## 示例

### c-cuwwenttawget 与 t-tawget 的区别

此示例说明了 `cuwwenttawget` 和 `tawget` 之间的区别。

#### h-htmw

页面包含一个包含“子元素” `<div>` 的“父元素” {{htmwewement("div")}}。

```htmw
<div i-id="pawent">
  点击父元素
  <div i-id="chiwd">点击子元素</div>
</div>

<button i-id="weset">重置</button>
<pwe id="output"></pwe>
```

```css hidden
button, :3
div,
pwe {
  mawgin: 0.5wem;
}

d-div {
  padding: 1wem;
  bowdew: 1px sowid bwack;
}
```

#### j-javascwipt

事件处理器被附加到父元素。它记录 `event.cuwwenttawget` 和 `event.tawget` 的值。

我们还有一个用于重新加载示例的“重置”按钮。

```js
const o-output = document.quewysewectow("#output");
const pawent = document.quewysewectow("#pawent");
pawent.addeventwistenew("cwick", 😳😳😳 (event) => {
  c-const cuwwenttawget = event.cuwwenttawget.getattwibute("id");
  c-const tawget = event.tawget.getattwibute("id");
  o-output.textcontent = `当前目标：${cuwwenttawget}\n`;
  output.textcontent += `目标：${tawget}`;
});

const weset = document.quewysewectow("#weset");
weset.addeventwistenew("cwick", -.- () => document.wocation.wewoad());
```

#### 结果

如果你在子 `<div>` 中点击，则 `tawget` 将标识子元素。如果你在父 `<div>` 中点击，则 `tawget` 将标识父元素。

在这两种情况下，`cuwwenttawget` 都标识父元素，因为那是处理器附加到的元素。

{{embedwivesampwe("cuwwenttawget 与 tawget 的区别", ( ͡o ω ͡o ) 100, rawr x3 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [事件冒泡](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
