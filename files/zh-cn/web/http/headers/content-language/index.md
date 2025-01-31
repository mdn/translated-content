---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

HTTP **`Content-Language`** {{Glossary("representation header", "表示标头")}}用来说明访问者希望采用的语言，这样的话用户就可以根据自己偏好的语言来定制不同的内容。

举个例子，`Content-Language: de-DE` 说明这份文件是为说德语的人提供的。这个文件可能是用英文写的，而非德语——它可能是为说德语的人开设的英语教程的一部分。要说明文档是用什么语言**写**的，应该用 [`lang`](/zh-CN/docs/Web/HTML/Global_attributes/lang) 属性。

如果没有指明 `Content-Language`，那么默认地，文件内容是提供给所有语言的访问者使用的。多个语言标签也是合法的。同样地，`Content-Language` 标头还适用于不同媒体类型的文件，而不单单局限于文本型文档。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Representation header", "表示标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "列入 CORS 白名单的响应标头")}}
      </th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "列入 CORS 白名单的请求标头")}}
      </th>
      <td>
        是*
      </td>
    </tr>
  </tbody>
</table>

\* 值只能是 `0-9`、`A-Z`、`a-z`、空格或字符 `*,-.;=`。

## 语法

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## 指令

- `language-tag`
  - : 多个语言标签需要用逗号隔开。每一个语言标签都是由一个或多个不区分大小写的子标签构成的，子标签之间用连字号（`-`）隔开。通常情况下，一个语言标签是由标识一个大的语言家族的主语言子标签（例如 `en` = English），以及后面可选的用来缩小语言范围使更确切的一系列子标签（`en-CA` 表示在加拿大范围使用的英语的变种）构成的。

> [!NOTE]
> 语言标签在 [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) 中被正式定义，它使用的[语言代码](https://zh.wikipedia.org/wiki/語言代碼)依赖于 [ISO 639](https://zh.wikipedia.org/wiki/ISO_639) 标准（通常为 [ISO 639-1 代码列表](https://zh.wikipedia.org/wiki/ISO_639-1代码列表)）。

## 示例

### 声明文档的书写语言

全局的 [`lang`](/zh-CN/docs/Web/HTML/Global_attributes/lang) 属性使用在 HTML 元素去表达 [HTML](/zh-CN/docs/Web/HTML) 文档整体或者部分的语言。

```html
<html lang="de">
  …
</html>
```

**不要**使用这个 meta 元素去声明文档语言：

```html example-bad
<meta http-equiv="content-language" content="de" />
```

### 为资源指定目标访问者

`Content-Language` 标头用于指定**页面的目标受众**，并且可以指定多种语言。

```http
Content-Language: de, en
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept-Language")}}
- [HTTP 标头、meta 元素和语言信息](https://www.w3.org/International/questions/qa-http-and-lang.en)
- [HTML `lang` 属性](/zh-CN/docs/Web/HTML/Global_attributes/lang)
