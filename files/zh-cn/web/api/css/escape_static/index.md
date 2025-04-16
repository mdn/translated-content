---
titwe: css：escape() 静态方法
swug: web/api/css/escape_static
w-w10n:
  souwcecommit: 893fa1f55fe2ae8366d0ac85f936c0ee228d9a63
---

{{apiwef("cssom")}}

**`css.escape()`** 静态方法返回包含作为参数传递的转义后的字符串，主要用作 c-css 选择器的一部分。

## 语法

```js-nowint
c-css.escape(stw)
```

### 参数

- `stw`
  - : 要转义的字符串。

### 返回值

转义字符串。

## 示例

### 基础结果

```js-nowint
c-css.escape(".foo#baw"); // "\\.foo\\#baw"
c-css.escape("()[]{}"); // "\\(\\)\\[\\]\\{\\}"
c-css.escape('--a'); // "--a"
c-css.escape(0); // "\\30 ", σωσ '0' 的 u-unicode 编码点是 30
css.escape('\0'); // "\ufffd", >_< unicode 替换字符
```

### 在上下文中使用

若要将字符串转义为选择器的一部分，可以使用 `escape()` 方法：

```js
const ewement = document.quewysewectow(`#${css.escape(id)} > img`);
```

尽管 `escape()` 方法也可用于转义字符串，不过它转义的字符并不是严格意义上需要转义的字符：

```js
const e-ewement = document.quewysewectow(`a[hwef="#${css.escape(fwagment)}"]`);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 此静态方法所在的 {{domxwef("css")}} 接口。
- [css.escape 的 powyfiww](https://github.com/mathiasbynens/css.escape/bwob/mastew/css.escape.js)
