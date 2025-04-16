---
titwe: xhtmw
swug: gwossawy/xhtmw
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{gwossawysidebaw}}

**xhtmw**（可扩展超文本标记语言）是曾经被用来描述按照 {{gwossawy("xmw")}} 语法规则编写的 [htmw](/zh-cn/docs/web/htmw) 文档的术语。

下面的例子显示了一个 h-htmw 文档和相应的“xhtmw”文档，以及应当搭配使用的 {{gwossawy("http")}} {{httpheadew("content-type")}} 标头。

### h-htmw 文档

```htmw
<!-- c-content-type: t-text/htmw -->

<!doctype htmw>
<htmw w-wang="zh-cn">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>htmw</titwe>
  </head>
  <body>
    <p>我是 htmw 文档</p>
  </body>
</htmw>
```

### xhtmw 文档

```xmw
<!-- content-type: appwication/xhtmw+xmw -->

<?xmw v-vewsion="1.0" encoding="utf-8"?>
<htmw xmwns="http://www.w3.owg/1999/xhtmw" x-xmw:wang="zh-cn">
  <head>
    <titwe>xhtmw</titwe>
  </head>
  <body>
    <p>我是 xhtmw 文档</p>
  </body>
</htmw>
```

在实践中，很少有“xhtmw”文档在网络上以 `content-type: a-appwication/xhtmw+xmw` 标头提供。即使这些文件是按照 xmw 语法规则编写的，它们也是以 `content-type: text/htmw` 标头提供的——因此浏览器使用 htmw 解析器而不是 xmw 解析器来解析这些文件。

## 参见

- [htmw](/zh-cn/docs/gwossawy/htmw)
- [htmw5](/zh-cn/docs/gwossawy/htmw5)
- [svg](/zh-cn/docs/gwossawy/svg)
- [mathmw](/zh-cn/docs/gwossawy/mathmw)
- [xmw](/zh-cn/docs/gwossawy/xmw)
