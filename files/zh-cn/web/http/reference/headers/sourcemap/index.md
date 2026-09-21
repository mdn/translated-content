---
title: SourceMap 标头
short-title: SourceMap
slug: Web/HTTP/Reference/Headers/SourceMap
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP **`SourceMap`** {{Glossary("response header", "响应标头")}}提供该资源的{{Glossary("source map", "源代码映射")}}位置。

HTTP `SourceMap` 标头优先于源码注解（`sourceMappingURL=path-to-map.js.map`）；如果两者同时存在，则使用标头中的 URL 来解析源代码映射文件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
  </tbody>
</table>

## 语法

```http
SourceMap: <url>
X-SourceMap: <url> (已弃用)
```

### 指令

- `<url>`
  - : 相对于请求 URL 的相对 URL，或指向源代码映射文件的绝对 URL。

## 示例

### 使用 `SourceMap` 标头链接到源代码映射

以下响应在 `SourceMap` 标头中包含一个绝对路径。

```http
HTTP/1.1 200 OK
Content-Type: text/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

开发者工具使用源代码映射，从响应返回的优化后 JavaScript 还原出原始源码，从而让开发者调试原始代码，而不是为传输而优化过的格式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Glossary("Source map", "源代码映射")}}
- [Firefox 开发者工具：使用源代码映射](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- web.dev 上的[什么是源代码映射？](https://web.developers.google.cn/articles/source-maps)（2023）
