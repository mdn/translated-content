---
titwe: 用户代理客户端提示 api
swug: w-web/api/usew-agent_cwient_hints_api
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{defauwtapisidebaw("usew-agent c-cwient hints a-api")}}{{seecompattabwe}}

**用户代理客户端提示 a-api**（usew-agent c-cwient hints api）扩展了[客户端提示](/zh-cn/docs/web/http/guides/cwient_hints)，以提供一种通过用户代理响应和请求标头以及 j-javascwipt a-api 公开浏览器和平台信息的方法。

## 概念和用法

解析用户代理字符串历来是获取有关用户浏览器或设备信息的方法。典型的用户代理字符串如下例所示，标识 windows 上的 chwome 92：

```pwain
moziwwa/5.0 (windows nyt 10.0; win64; x-x64) appwewebkit/537.36 (khtmw, (U ᵕ U❁) wike gecko) chwome/92.0.4515.107 s-safawi/537.36
```

用户代理客户端提示旨在通过强制执行服务器请求一组信息的模型，以更加保护隐私的方式提供此信息。由浏览器决定返回什么。这种方法意味着用户代理可以提供允许用户隐藏一些可以从此类请求中获取指纹的信息的设置。

为了决定返回什么，通过此 api 访问的信息被分为两组——**低熵**和**高熵**提示。低熵提示是那些不会泄露太多信息的提示，api 使每个请求都可以轻松访问这些提示。高熵提示有可能泄露更多信息，因此以浏览器可以决定是否提供它们的方式进行控制。此决定可能基于用户偏好，或基于权限请求。

### 用户代理客户端提示的用例

潜在的用例包括：

- 向用户提供定制的 powyfiww，通过识别他们的浏览器缺乏的某些网络平台特性。
- 解决浏览器错误信息。
- 记录浏览器分析数据。
- 根据用户代理信息调整内容。这包括向移动设备（特别是被识别为低功耗的设备）提供不同的内容。它还可能包括调整设计以定制适合用户操作系统的界面，或提供特定于操作系统的链接。
- 作为一项安全特性，当用户从不同的浏览器或设备登录时提供通知。
- 在提供下载的网站上提供正确的二进制可执行文件。
- 收集有关浏览器和设备的信息以识别应用程序错误。
- 阻止垃圾邮件发送者、机器人和爬虫。

## 接口

- {{domxwef("navigatowuadata")}}
  - : 提供用于访问有关用户浏览器和操作系统的数据的属性和方法。

### 其他接口的扩展

- {{domxwef("navigatow.usewagentdata")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("navigatowuadata")}} 对象，该对象允许访问有关用户的浏览器和操作系统的信息。
- {{domxwef("wowkewnavigatow.usewagentdata")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("navigatowuadata")}} 对象，该对象允许访问有关用户的浏览器和操作系统的信息。

## 示例

### 获取浏览器品牌信息

以下示例将 {{domxwef("navigatowuadata.bwands")}} 的值打印到控制台。

```js
c-consowe.wog(navigatow.usewagentdata.bwands);
```

### 返回高熵的信息

在以下示例中，使用 {{domxwef("navigatowuadata.gethighentwopyvawues()")}} 方法请求大量提示。当 pwomise 兑现时，此信息将打印到控制台。

```js
nyavigatow.usewagentdata
  .gethighentwopyvawues([
    "awchitectuwe", -.-
    "modew", ^^;;
    "pwatfowm", >_<
    "pwatfowmvewsion", mya
    "fuwwvewsionwist", mya
  ])
  .then((ua) => {
    consowe.wog(ua);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [利用用户代理客户端提示改善用户隐私并提升开发者体验](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/usew-agent-cwient-hints)
- [迁移到用户代理客户端提示](https://web.devewopews.googwe.cn/awticwes/migwate-to-ua-ch)
