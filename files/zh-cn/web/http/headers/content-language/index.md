---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
---

{{HTTPSidebar}}

**`Content-Language`** 是一个 {{Glossary("entity header")}}（实体消息首部），用来说明访问者希望采用的语言或语言组合，这样的话用户就可以根据自己偏好的语言来定制不同的内容。

举个例子，假如设置了这样一条消息首部（ "`Content-Language: de-DE`" ），那么说明这份文件是为说德语的人提供的（当然这并不意味着文件本身就是用德语写的。比如，它可能是为说德语的人开设的英语教程的一部分，也就是用英语写的）。

如果没有指明 `Content-Language`，那么默认地，文件内容是提供给所有语言的访问者使用的。多个语言标签也是合法的，同样的，这个首部还可以用来描述不同媒体类型的文件，而不单单局限于文本型文档。

| Header type                                                               | {{Glossary("Entity header")}} |
| ------------------------------------------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}}                                     | no                            |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | yes                           |
| {{Glossary("Simple header", "CORS-safelisted request-header")}}           | yes                           |

## 语法

```plain
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## 指令

- `language-tag`
  - : 多个语言标签需要用逗号隔开。每一个语言标签都是由一个或多个不区分大小写的子标签构成的，子标签之间用连字号 ("-", %x2D) 隔开。通常情况下，一个语言标签是由标识一个大的语言家族的主语言子标签（例如"en" = English），以及后面可选的用来缩小语言范围使更确切的一系列子标签（"en-CA" 表示在加拿大范围使用的英语的变种）构成的。

> **备注：** 语言标签在 [RFC 5646](https://tools.ietf.org/html/rfc5646)中被正式定义，它使用的[语言代码](https://en.wikipedia.org/wiki/Language_code)依赖于 [ISO 639](https://en.wikipedia.org/wiki/ISO_639) 标准 (通常为 [ISO 639-1 code list](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) 。

## 示例

### 声明文档的书写语言

全局的 [`lang`](/zh-CN/docs/Web/HTML/Global_attributes/lang) 属性使用在 HTML 元素去表达全部的 [HTML](/zh-CN/docs/Web/HTML)文档或者部分的语言。

```html
<html lang="de"></html>
```

不要使用这个 meta 元素去声明文档语言：

```html example-bad
<!-- /!\ This is bad practice -->
<meta http-equiv="content-language" content="de" />
```

### 为资源指定目标访问者

`Content-Language` 请求头用于指定**页面的目标受众，**并且可以指明当前页面存在多种语言。

```plain
Content-Language: de, en
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Accept-Language")}}
- [HTTP headers, meta elements and language information](https://www.w3.org/International/questions/qa-http-and-lang.en)
