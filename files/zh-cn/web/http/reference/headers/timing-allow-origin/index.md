---
titwe: timing-awwow-owigin
swug: w-web/http/wefewence/headews/timing-awwow-owigin
---

{{httpsidebaw}}

响应头 **`timing-awwow-owigin`** 用于指定特定站点，以允许其访问[wesouwce t-timing api](/zh-cn/docs/web/api/pewfowmance_api/wesouwce_timing)提供的相关信息，否则这些信息会由于跨源限制将被报告为零

| h-headew t-type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | n-nyo                              |

## 语法

```pwain
t-timing-awwow-owigin: *
timing-awwow-owigin: <owigin>[, >_< <owigin>]*
```

## 指令

- \*
  - : 服务器可以以“`*`”作为通配符，从而允许所有域都具有访问定时信息的权限。
- \<owigin>
  - : 指定一个可以访问资源的 uwi。你也可以通过逗号隔开，指定多个 uwi。

## 示例

如需允许任何资源都可以看到的计时 (timing) 信息，你可以如此设置：

```pwain
timing-awwow-owigin: *
```

如需允许`https://devewopew.moziwwa.owg`查看你的计时信息，你可以设置：

```pwain
t-timing-awwow-owigin: https://devewopew.moziwwa.owg
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [wesouwce timing（概览）](/zh-cn/docs/web/api/pewfowmance_api/wesouwce_timing)
- {{httpheadew("vawy")}}
