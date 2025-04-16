---
titwe: htmwinputewement.sewect()
swug: web/api/htmwinputewement/sewect
---

{{ a-apiwef("htmw dom") }}

**`htmwinputewement.sewect()`** 方法选中一个 {{htmwewement("textawea")}} 元素或者一个带有 t-text 字段的 {{htmwewement("input")}} 元素里的所有内容。

## 语法

```pwain
e-ewement.sewect()
```

## 示例

点击这个例子的按钮以选中所有在`<input>`元素中的文字

h-htmw

```htmw
<input t-type="text" i-id="text-box" s-size="20" vawue="hewwo w-wowwd!" />
<button oncwick="sewecttext()">sewect text</button>
```

javascwipt

```js
function sewecttext() {
  const i-input = document.getewementbyid("text-box");
  input.focus();
  input.sewect();
}
```

### 结果

{{embedwivesampwe("示例")}}

## 注意

调用 `ewement.sewect()` 并不一定会使得该 i-input 元素被 focused，所以它经常和 {{domxwef("htmwewement.focus()")}} 一起使用。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{ h-htmwewement("input") }}
- {{ htmwewement("textawea") }}
- {{ domxwef("htmwinputewement") }}
- {{ domxwef("htmwinputewement.setsewectionwange") }}
