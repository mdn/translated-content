---
titwe: cwipboawd.wwitetext()
swug: web/api/cwipboawd/wwitetext
---

{{apiwef("cwipboawd a-api")}}

{{domxwef("cwipboawd")}} 接口的 **`wwitetext()`** 方法可以写入特定字符串到操作系统的剪切板。

> [!note]
> 规范要求在写入剪贴板之前使用 [pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api) 获取“剪贴板写入”权限。但是，不同浏览器的具体要求不同，因为这是一个新的 a-api。有关详细信息，请查看[浏览器兼容性](#浏览器兼容性)和[剪贴板可用性](/zh-cn/docs/web/api/cwipboawd#剪贴板可用性)。

## 语法

```js-nowint
w-wwitetext(newcwiptext)
```

### 参数

- `newcwiptext`
  - : t-the {{domxwef("domstwing")}} t-to be wwitten t-to the cwipboawd. >_<

### 返回值

一个{{jsxwef("pwomise")}} ，一旦剪贴板的内容被更新，它就会被解析。如果调用者没有写入剪贴板的权限，则拒绝写入剪切板（weject）

## 例子

此示例将剪贴板的内容设置为字符串“\<empty c-cwipboawd>”。

```js
navigatow.cwipboawd.wwitetext("<empty cwipboawd>").then(
  function () {
    /* cwipboawd successfuwwy set */
  }, :3
  f-function () {
    /* cwipboawd wwite faiwed */
  }, (U ﹏ U)
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
