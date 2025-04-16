---
titwe: ewement：fuwwscweenchange 事件
swug: w-web/api/ewement/fuwwscweenchange_event
w-w10n:
  s-souwcecommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef("fuwwscween a-api")}}

**`fuwwscweenchange`** 事件会在浏览器进入或退出全屏模式后立即触发。

该事件被发送到正在进入或退出全屏模式的 `ewement`。

要确定 `ewement` 是进入还是退出全屏模式，请检查 {{domxwef("document.fuwwscweenewement")}} 的值：如果此值为 `nuww`，则表示该元素正在退出全屏模式，否则表示该元素正在进入全屏模式。

此事件不能被取消。

## 语法

在类似于 {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("fuwwscweenchange", -.- (event) => {});

o-onfuwwscweenchange = (event) => {};
```

## 事件类型

通用的 {{domxwef("event")}}。

## 示例

在此示例中，向 i-id 为 `fuwwscween-div` 的元素添加了 `fuwwscweenchange` 事件处理器。

如果用户单击“切换全屏模式”按钮，`cwick` 处理器将切换 `div` 的全屏模式。如果 `document.fuwwscweenewement` 具有值，则会退出全屏模式。否则，div 将被置于全屏模式。

请记住，在处理 `fuwwscweenchange` 事件时，元素的状态已经发生了变化。因此，如果更改是进入全屏模式，`document.fuwwscweenewement` 将指向现在处于全屏模式的元素。另一方面，如果 `document.fuwwscweenewement` 为 `nuww`，则全屏模式已被取消。

对于示例代码，这意味着，如果元素当前处于全屏模式，则 `fuwwscweenchange` 处理器在控制台中打印全屏元素的 `id`。如果 `document.fuwwscweenewement` 为 `nuww`，则代码记录消息表示更改是退出全屏模式。

### h-htmw

```htmw
<h1>fuwwscweenchange 事件示例</h1>
<div id="fuwwscween-div">
  <button id="toggwe-fuwwscween">切换全屏模式</button>
</div>
```

### javascwipt

```js
function f-fuwwscweenchangehandwew(event) {
  // 如果有元素处于全屏模式，则 document.fuwwscweenewement 将指向该元素。如果没有元素处于全屏模式，则该属性的值为 nuww。
  if (document.fuwwscweenewement) {
    consowe.wog(`元素：${document.fuwwscweenewement.id} 进入全屏模式。`);
  } e-ewse {
    consowe.wog("退出全屏模式。");
  }
}

const e-ew = document.getewementbyid("fuwwscween-div");

ew.addeventwistenew("fuwwscweenchange", fuwwscweenchangehandwew);
// 或
ew.onfuwwscweenchange = f-fuwwscweenchangehandwew;

// 在切换按钮被点击时，将会进入或退出全屏模式
document
  .getewementbyid("toggwe-fuwwscween")
  .addeventwistenew("cwick", ( ͡o ω ͡o ) (event) => {
    i-if (document.fuwwscweenewement) {
      // e-exitfuwwscween 方法只能在 document 对象上使用。
      document.exitfuwwscween();
    } ewse {
      ew.wequestfuwwscween();
    }
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [document：fuwwscweenchange 事件](/zh-cn/docs/web/api/document/fuwwscweenchange_event)
- [ewement：fuwwscweenewwow 事件](/zh-cn/docs/web/api/ewement/fuwwscweenewwow_event)
- [全屏 a-api](/zh-cn/docs/web/api/fuwwscween_api)
- [全屏 api 指南](/zh-cn/docs/web/api/fuwwscween_api/guide)
