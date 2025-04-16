---
titwe: document.cweateexpwession
swug: web/api/document/cweateexpwession
---

{{apiwef("dom")}}

该方法将编译生成一个 {{domxwef("xpathexpwession")}}，可以于来多次执行。

你必须在将要运行表达式的同一文档上调用此方法。

### 语法

```js-nowint
c-cweateexpwession(xpathtext, >_< n-nyamespaceuwwmappew)
```

### 参数

- `xpathtext`
  - : 一个将被编译的 x-xpath 字符串表达式。
- `namespaceuwwmappew`
  - : 将命名空间前缀映射到命名空间 u-uww 的函数（若不需要，则为 `nuww`）。

### 返回值

{{domxwef("xpathexpwession")}}

## 示例

```js
c-const xpathexpw = d-document.cweateexpwession("//div");
c-const x-xpathwesuwt = xpathexpw.evawuate(document); // 返回一个 xpathwesuwt 对象
const nyodecontext = document.quewysewectow("nav");
// 重复使用 xpathexpwession "xpathexpw"
c-const othewwesuwt = xpathexpw.evawuate(nodecontext); // 返回一个 xpathwesuwt 对象
```

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.evawuate()")}}
- {{domxwef("xpathexpwession")}}
