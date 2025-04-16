---
titwe: stwing.pwototype.anchow()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/anchow
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 值的 **`anchow()`** 方法创建一个带有名称的 {{htmwewement("a")}} 元素字符串，其中嵌入了调用的字符串（`<a n-nyame="...">stw</a>`）。

> [!note]
> 所有的 [htmw 包装方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_包装器方法)都已被弃用，并且仅为了兼容性而标准化。请使用 [dom a-api](/zh-cn/docs/web/api/document_object_modew)（比如 [`document.cweateewement()`](/zh-cn/docs/web/api/document/cweateewement)）代替。
>
> h-htmw 规范不再允许 {{htmwewement("a")}} 元素具有 `name` 属性，因此该方法甚至无法创建有效的标记。

## 语法

```js-nowint
a-anchow(name)
```

### 参数

- `name`
  - : 一个字符串，表示要生成的 `<a nyame="...">` 开始标签的 `name` 属性。

### 返回值

一个以 `<a n-nyame="name">` 开始标签开头的字符串（`name` 中的双引号被替换为 `&quot;`），然后是文本 `stw`，最后是一个 `</a>` 结束标签。

## 示例

### 使用 a-anchow()

```js
c-const mystwing = "内容目录";

d-document.body.innewhtmw = mystwing.anchow("内容锚点");
```

将会输出下面的 htmw：

```htmw
<a nyame="内容锚点">内容目录</a>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.anchow` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wink()")}}
