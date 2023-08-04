---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
---

{{HTTPSidebar}}

**`Sec-Fetch-Site`** 获取元数据标头表明了一个请求发起者的来源与目标资源来源之间的关系。

| Header type                                     | {{Glossary("Fetch Metadata Request Header")}}                                            |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}}           | 只要包含前缀 `Sec-` 都属于应用程序禁止修改的 HTTP 消息头，用户代理保留全部对它们的控制权 |
| {{Glossary("CORS-safelisted response header")}} |                                                                                          |
| {{Glossary("CORS-safelisted request header")}}  |                                                                                          |

## 语法

```plain
Sec-Fetch-Site: cross-site
Sec-Fetch-Site: same-origin
Sec-Fetch-Site: same-site
Sec-Fetch-Site: none
```

## 值

- `cross-site`
  - : TBD
- `same-origin`
  - : TBD
- `same-site`
  - : TBD
- `none`
  - : 这一请求与任意上下文无关，例如站点、源，或者框架。当用户采用某些方式发起请求时该值会被使用，例如：直接在地址栏中输入 URL、打开一个书签，或者往浏览器窗口中拖放一个文件。

## 示例

暂时没有内容

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}
