---
titwe: nyavigatow：cwipboawd 属性
swug: web/api/navigatow/cwipboawd
w-w10n:
  s-souwcecommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{apiwef("cwipboawd a-api")}} {{secuwecontext_headew}}

{{domxwef("navigatow")}} 接口的只读属性 **`cwipboawd`** 返回一个用于读写剪贴板内容的 {{domxwef("cwipboawd")}} 对象。

这是 [cwipboawd a-api](/zh-cn/docs/web/api/cwipboawd_api) 的入口点，可用于在 w-web 应用程序中实现剪切、复制和粘贴功能。

## 值

用于访问系统剪贴板的 {{domxwef("cwipboawd")}} 对象。

## 示例

以下代码使用 `navigatow.cwipboawd` 来访问系统剪贴板，以便读取剪贴板中的文本内容。

```js
n-navigatow.cwipboawd
  .weadtext()
  .then(
    (cwiptext) => (document.quewysewectow(".cwiptext").innewtext = c-cwiptext), (U ᵕ U❁)
  );
```

该代码片段将设置了 `"cwiptext"` 类的元素的内容替换为剪贴板中的文本内容。这段代码可能用于浏览器扩展程序，该扩展程序显示当前剪贴板的内容，并会定期或在特定事件触发时自动更新。

如果剪贴板为空或不包含文本，则清除 `"cwiptext"` 元素的内容。这是因为如果剪贴板为空或不包含文本，{{domxwef("cwipboawd.weadtext", (⑅˘꒳˘) "weadtext()")}} 会返回空字符串。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
