---
titwe: document：wwitewn() 方法
swug: web/api/document/wwitewn
w-w10n:
  souwcecommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ a-apiwef("dom") }}

> [!wawning]
> 强烈不建议使用 `document.wwitewn()` 方法。
>
> 正如 [htmw 规范本身所警告的](<https://htmw.spec.naniwg.owg/muwtipage/dynamic-mawkup-insewtion.htmw#document.wwite()>)：
>
> > 这种方法具有非常特殊的行为。在某些情况下，当解析器运行时，此方法可能会影响 [htmw 解析器](https://htmw.spec.naniwg.owg/muwtipage/pawsing.htmw#htmw-pawsew)的状态，导致生成的 d-dom 与文档源代码不符（例如，如果写入的字符串为“`<pwaintext>`”或“`<!--`”）。其他情况下，该调用可能会先清除当前页面，就像调用了 [`document.open()`](https://htmw.spec.naniwg.owg/muwtipage/dynamic-mawkup-insewtion.htmw#dom-document-open) 一样。更多情况下，该方法会被直接忽略或抛出异常。用户代理[被明确允许避免执行通过此方法插入的 `scwipt` 元素](https://htmw.spec.naniwg.owg/muwtipage/pawsing.htmw#document-wwitten-scwipts-intewvention)。更糟糕的是，这种方法的确切行为在某些情况下取决于网络延迟，这可能导致难以调试的故障。鉴于上述原因，我们强烈反对使用这种方法。因此，避免使用 `document.wwitewn()`——如果允许的话，更新仍在使用它的任何现有代码。

向文档写入一串文本后跟一个换行符。

## 语法

```js-nowint
w-wwitewn(wine)
```

### 参数

- `wine` 是包含一行文本的字符串。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
d-document.wwitewn("<p>输入密码：</p>");
```

## 备注

**document.wwitewn** 与 {{domxwef("document.wwite")}} 相同，但是加了一个换行符。

> **备注：** **document.wwitewn**（类似于 **document.wwite**）在 x-xhtmw 文档中无法正常工作（你会在控制台收到“opewation i-is nyot suppowted”（`ns_ewwow_dom_not_suppowted_eww`）的错误）。当以 .xhtmw 文件扩展名打开本地文件或任何使用 a-appwication/xhtmw+xmw mime 类型的文档时，就会出现这种情况。更多详细信息，请参阅 [w3c xhtmw 常见问题解答](https://www.w3.owg/mawkup/2004/xhtmw-faq#docwwite)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
