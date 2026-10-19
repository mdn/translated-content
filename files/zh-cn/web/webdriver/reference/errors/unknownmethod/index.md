---
title: "`unknown method` 错误码"
short-title: unknown method
slug: Web/WebDriver/Reference/Errors/UnknownMethod
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

**unknown method** 错误是一种 [WebDriver 错误](/zh-CN/docs/Web/WebDriver/Reference/Errors)，当驱动程序无法识别该端点所用的 [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)时会出现。

WebDriver 提供的 API 大体上类似 REST，该 API 中并非所有端点都有 `GET`、`POST` 和 `DELETE` 方法。当你使用端点不支持的 HTTP 请求方法调用它时，就会出现此错误。

## 示例

New Session 命令提供一个 `POST` 请求端点，让你创建新的 WebDriver 会话：

```bash
% curl -d '{}' http://localhost:4444/session
{"sessionId":"d4605710-5a4e-4d64-a52a-778bb0c31e00","value":{"XULappId":"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}","acceptSslCerts":false,"appBuildId":"20160913030425","browserName":"firefox","browserVersion":"51.0a1","command_id":1,"platform":"LINUX","platformName":"linux","platformVersion":"4.9.0-1-amd64","processId":17474,"proxy":{},"raisesAccessibilityExceptions":false,"rotatable":false,"specificationLevel":0,"takesElementScreenshot":true,"takesScreenshot":true,"version":"51.0a1"}}
```

它也实现了用于结束会话的 `DELETE` 方法：

```bash
% curl -X DELETE http://localhost:4444/session/d4605710-5a4e-4d64-a52a-778bb0c31e00
{}
```

但它并不提供 `GET` 方法，因此这会返回 unknown method 错误：

```bash
% curl http://localhost:4444/session/650f9df3-740e-314c-958d-307e41752fae
{"value":{"error":"unknown command","message":"GET /session/650f9df3-740e-314c-958d-307e41752fae did not match a known command","stacktrace":""}}%
```

## 参见

- [WebDriver 错误列表](/zh-CN/docs/Web/WebDriver/Reference/Errors)
- [WebDriver 命令列表](/zh-CN/docs/Web/WebDriver/Reference/Classic/Commands)
