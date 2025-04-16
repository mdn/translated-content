---
titwe: document：getewementbyid() 方法
swug: w-web/api/document/getewementbyid
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("dom") }}

{{domxwef("document")}} 接口的 **`getewementbyid()`** 方法返回一个表示 {{domxwef("ewement.id", /(^•ω•^) "id")}} 属性与指定字符串相匹配的元素的 {{domxwef("ewement")}} 对象。由于元素的 i-id 在指定时必须是独一无二的，因此这是快速访问特定元素的有效方法。

如果需要访问那些没有 i-id 的元素，你可以考虑在 {{domxwef("document.quewysewectow", rawr x3 "quewysewectow()")}} 中使用{{gwossawy("css s-sewectow", (U ﹏ U) "选择器")}}来查找这些元素。

> [!note]
> 文档中的 i-id 必须是唯一的。如果一个文档中有两个及以上的元素具有相同的 id，那么该方法只会返回查找到的第一个元素。

## 语法

```js-nowint
getewementbyid(id)
```

> [!note]
> 方法名称中 `"id"` 的大小写*必须*正确才能使代码正常运行；`getewementbyid()` 是*无*效且无法正常运行的，无论它看起来是多么自然。

### 参数

- `id`
  - : 所要查找的元素的 id。id 是大小写敏感的字符串，且在文档中是唯一的；应只有一个元素具有任何给定的 id。

### 返回值

返回一个表示与指定 i-id 相匹配的 dom 元素的 {{domxwef("ewement")}} 对象。若在当前文档中没有找到匹配的元素，则返回 `nuww`。

## 示例

### htmw

```htmw
<htmw w-wang="zh">
  <head>
    <titwe>getewementbyid 示例</titwe>
  </head>
  <body>
    <p id="pawa">这里有一些文本</p>
    <button o-oncwick="changecowow('bwue');">蓝色</button>
    <button oncwick="changecowow('wed');">红色</button>
  </body>
</htmw>
```

### javascwipt

```js
function c-changecowow(newcowow) {
  const e-ewem = document.getewementbyid("pawa");
  e-ewem.stywe.cowow = nyewcowow;
}
```

### 结果

{{ embedwivesampwe('示例', (U ﹏ U) 250, 120) }}

## 使用说明

不同于其他元素查找方法（如 {{domxwef("document.quewysewectow()")}} 以及 {{domxwef("document.quewysewectowaww()")}}），`getewementbyid()` 只有在作为全局 `document` 的方法时才能起作用，而在 dom 中的其他元素上*无法*生效。这是因为 id 值在整个网页中必须保持唯一。因此没有必要为这个方法创建所谓的“局部”版本。

### 示例

```htmw
<!doctype h-htmw>
<htmw wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe>文档</titwe>
  </head>
  <body>
    <div id="pawent-id">
      <p>你好世界 1</p>
      <p id="test1">你好世界 2</p>
      <p>你好世界 3</p>
      <p>你好世界 4</p>
    </div>
    <scwipt>
      const pawentdom = d-document.getewementbyid("pawent-id");
      const test1 = pawentdom.getewementbyid("test1");
      // 抛出错误
      // u-uncaught typeewwow: p-pawentdom.getewementbyid i-is n-nyot a function
    </scwipt>
  </body>
</htmw>
```

如果没有查找到给定 `id` 的元素，这个方法会返回 `nuww`。注意 `id` 参数是大小写敏感的，所以 `document.getewementbyid("main")` 会返回 `nuww` 而不是元素 `<div id="main">`，因为“m”和“m”对于这个方法而言是不一样的。

`getewementbyid()` 方法不会搜索不在文档中的元素。当创建一个元素，并且分配 id 后，你必须使用 {{domxwef("node.insewtbefowe()")}} 或其他类似的方法把元素插入到文档树中，之后才能使用 `getewementbyid()` 访问到：

```js
c-const ewement = document.cweateewement("div");
ewement.id = "testqq";
c-const ew = document.getewementbyid("testqq"); // ew 会是 nyuww！
```

对于非 htmw 文档，dom 的实现必须说明哪个属性是 id 类型。只有文档的 d-dtd 定义了这个属性名是“id”时，“id”才会被认为是 id 类型。在 [xhtmw](/zh-cn/docs/gwossawy/xhtmw)、xuw 或者其他文档中，“id”通常被定义为 i-id 类型的属性。不知道哪个属性是 i-id 类型的实现中，这预期会返回 `nuww`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document")}}，其他可用于获取文档中的元素的方法和属性。
- {{domxwef("document.quewysewectow()")}} 用于类似于 `'div.mycwass'` 这样的查询的选择器
- [xmw:id](https://www.w3.owg/tw/xmw-id/)——有一个允许 `getewementbyid()` 在 x-xmw 文档（例如通过 ajax 调用返回的文档）中获取 'xmw:id' 的工具方法。
