---
title: "`unknown command` 错误码"
short-title: unknown command
slug: Web/WebDriver/Reference/Errors/UnknownCommand
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

**`unknown command`** 错误是一种 [WebDriver 错误](/zh-CN/docs/Web/WebDriver/Reference/Errors)，当驱动程序不识别该命令/HTTP 端点时会出现。

## 示例

`/session/{session id}/foo` 端点不存在，将返回 `unknown command` 错误，HTTP 状态码为 [`404 Not Found`](/zh-CN/docs/Web/HTTP/Reference/Status/404)：

```bash
curl -i -d '{}' http://localhost:4444/session/foo
```

```http
HTTP/1.1 404 Not Found
Connection: close
Content-Type: application/json; charset=utf-8
Cache-Control: no-cache
Content-Length: 113
Date: Fri, 30 Mar 2018 15:30:51 GMT

{"value":{"error":"unknown command","message":"POST /session/asd did not match a known command","stacktrace":""}}
```

## 参见

- [WebDriver 错误列表](/zh-CN/docs/Web/WebDriver/Reference/Errors)
- [WebDriver 命令列表](/zh-CN/docs/Web/WebDriver/Reference/Classic/Commands)
