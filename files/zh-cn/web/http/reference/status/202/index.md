---
title: 202 Accepted
slug: Web/HTTP/Reference/Status/202
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`202 Accepted`** [成功响应](/zh-CN/docs/Web/HTTP/Reference/Status#成功响应)状态码表示请求已被接受处理，但处理尚未完成或可能尚未开始。该请求的实际处理结果并不受保证——当服务器尝试处理时，相关任务或操作仍可能失败或被拒绝。

`202` 响应属于非承诺性响应，这意味着后续无法通过异步 HTTP 响应来返回处理结果。该状态码通常用于以下场景：当请求由其他进程或服务器处理时，或者当请求被批量处理时。

## 状态

```http
202 Accepted
```

## 示例

### 开始自动化任务

在以下示例中，我们将启动一个自动化流程，向狗主人发送关于领取任务的通知邮件：

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

该响应表明启动任务的请求已被接受并进入处理流程。响应正文中返回了一个客户端可通过跟踪任务状态的变化的 URL：

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "message": "请求已接受，正在启动任务处理。",
  "taskId": "123",
  "monitorUrl": "http://example.com/tasks/123/status"
}
```

## 规范

{{Specifications}}

## 参见

- {{HTTPHeader("Accept")}}
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
