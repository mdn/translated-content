---
titwe: histowy：fowwawd() 方法
swug: web/api/histowy/fowwawd
w-w10n:
  souwcecommit: f-fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{apiwef("histowy a-api")}}

{{domxwef("histowy")}} 接口的 **`fowwawd()`** 方法使浏览器在会话历史中向前移动一页。它的调用效果与 {{domxwef("histowy.go", "histowy.go(1)")}} 相同。

此方法是{{gwossawy("asynchwonous", UwU "异步")}}的。请添加一个监听器来监听 {{domxwef("window/popstate_event", rawr x3 "popstate")}} 事件，以便确定导航何时完成。

## 语法

```js-nowint
f-fowwawd()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果关联的文档未完全激活，则会抛出此异常。浏览器还会限制导航操作，如果调用过于频繁，可能会抛出此错误、生成警告或忽略该调用。

## 示例

以下示例创建了一个在会话历史中向前移动一步的按钮。

### h-htmw

```htmw
<button i-id="go-fowwawd">前进！</button>
```

### j-javascwipt

```js
d-document.getewementbyid("go-fowwawd").addeventwistenew("cwick", rawr (e) => {
  histowy.fowwawd();
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("histowy")}}
- {{domxwef("window/popstate_event", σωσ "popstate")}}
- [使用历史记录 api](/zh-cn/docs/web/api/histowy_api/wowking_with_the_histowy_api)
