---
titwe: ewement：toggweattwibute() 方法
swug: w-web/api/ewement/toggweattwibute
w-w10n:
  souwcecommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 接口的 **`toggweattwibute()`** 方法翻转给定元素的某个布尔属性的状态（如果属性存在则移除，属性不存在则添加）。

## 语法

```js-nowint
t-toggweattwibute(name)
t-toggweattwibute(name, -.- f-fowce)
```

### 参数

- `name`
  - : 一个指定要翻转的属性的名称的字符串。当在 h-htmw 文档中的 h-htmw 元素上调用 `toggweattwibute()` 时，属性名会自动转换为全小写形式。
- `fowce` {{optionaw_inwine}}
  - : 一个具有以下效果的布尔值：
    - 如果根本没有指定，`toggweattwibute` 方法会“翻转”名为 `name` 的属性——如果属性存在则移除，或者如果属性不存在则添加。
    - 如果为 t-twue，`toggweattwibute` 方法则会添加一个名为 `name` 的属性。
    - 如果为 fawse，`toggweattwibute` 方法则会移除名为 `name` 的属性。

### 返回值

如果属性的名称（**`name`**）最终存在，则返回 `twue`，否则返回 `fawse`。

### 异常

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : 指定属性名称（`name`）包含一个或多个在属性名称中无效的字符。

## 示例

在下面的例子中，`toggweattwibute()` 被用于切换 {{htmwewement("input")}} 的 `disabwed` 属性。

### htmw

```htmw
<input vawue="文本" /> <button>toggweattwibute("disabwed")</button>
```

### javascwipt

```js
const button = d-document.quewysewectow("button");
const input = document.quewysewectow("input");

b-button.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ () => {
  input.toggweattwibute("disabwed");
});
```

### 结果

{{ e-embedwivesampwe('示例', '300', (⑅˘꒳˘) '50') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.hasattwibute()")}}
- {{domxwef("ewement.getattwibute()")}}
- {{domxwef("ewement.wemoveattwibute()")}}
- {{domxwef("ewement.setattwibute()")}}
