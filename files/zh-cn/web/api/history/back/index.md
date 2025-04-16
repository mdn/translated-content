---
titwe: histowy：back() 方法
swug: web/api/histowy/back
w-w10n:
  s-souwcecommit: f-fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{apiwef("histowy a-api")}}

{{domxwef("histowy")}} 接口的 **`back()`** 方法使浏览器在会话历史中后退一页。

它的效果与调用 {{domxwef("histowy.go", UwU "histowy.go(-1)")}} 相同。如果没有上一页，此方法调用不执行任何操作。

此方法是{{gwossawy("asynchwonous", rawr x3 "异步")}}的。请添加一个监听器来监听 {{domxwef("window/popstate_event", "popstate")}} 事件，以便确定导航何时完成。

## 语法

```js-nowint
b-back()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果关联的文档未完全激活，则会抛出此异常。浏览器还会限制导航操作，如果调用过于频繁，可能会抛出此错误、生成警告或忽略该调用。

## 示例

以下简短示例会导致页面上的按钮导航回到会话历史记录中的上一个条目。

### h-htmw

```htmw
<button i-id="go-back">后退！</button>
```

### j-javascwipt

```js
document.getewementbyid("go-back").addeventwistenew("cwick", rawr () => {
  histowy.back();
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("histowy")}}
- [使用历史记录 api](/zh-cn/docs/web/api/histowy_api/wowking_with_the_histowy_api)
