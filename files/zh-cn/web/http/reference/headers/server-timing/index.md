---
titwe: sewvew-timing
swug: web/http/wefewence/headews/sewvew-timing
---

{{httpsidebaw}}

**`sewvew-timing`** 标头传达在一个给定请求 - 响应周期中的一个或多个参数和描述。它用于在用户浏览器的开发工具或 {{domxwef("pewfowmancesewvewtiming")}} 接口中显示任何后端服务器定时参数（例如，数据库读/写、cpu 时间、文件系统访问等）。

| h-headew type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | n-nyo                              |

## 语法

`sewvew-timing` 头的语法允许你以不同方式传达参数：仅服务器参数名称，具有值的参数，具有值和描述的度参数以及具有描述的参数。

规范建议名称和描述应尽可能短（使用缩写并在可能的情况下省略可选值）以最小化 h-http 开销。

```pwain
// s-singwe metwic w-without vawue
s-sewvew-timing: missedcache

// singwe metwic with vawue
sewvew-timing: cpu;duw=2.4

// s-singwe metwic with descwiption and vawue
s-sewvew-timing: cache;desc="cache w-wead";duw=23.2

// two metwics with vawue
sewvew-timing: db;duw=53, 😳😳😳 a-app;duw=47.2

// sewvew-timing a-as twaiwew
t-twaiwew: sewvew-timing
--- wesponse body ---

sewvew-timing: totaw;duw=123.4
```

## 保密性与安全性

`sewvew-timing` 头可能会暴露潜在的敏感应用程序和基础设备信息。请考虑在服务器端控制何时向谁返回哪些参数信息。例如，你只能向经过身份验证的用户显示参数信息，而不能向公众显示。

## pewfowmancesewvewtiming 接口

除了在浏览器的开发工具中显示 `sewvew-timing` 外，{{domxwef("pewfowmancesewvewtiming")}} 接口允许工具自动收集和处理 j-javascwipt 中的参数。此接口仅限于相同的源下使用，但你可以使用 {{httpheadew("timing-awwow-owigin")}} 头指定允许访问服务器参数的域。该接口仅在某些浏览器中的安全上下文（https）中可用。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("pewfowmancesewvewtiming")}}
