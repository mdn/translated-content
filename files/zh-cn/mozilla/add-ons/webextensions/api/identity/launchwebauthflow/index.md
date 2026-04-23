---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: b8ed4ae6a9a60693920043935d2531921ae9e483
---

执行 [OAuth2](https://oauth.net/2/) 流程的第一部分，包括用户身份验证和客户端授权。

此函数的唯一必需参数是服务提供商的授权 URL，且它必须包含一些特定 URL 参数：[重定向 URL](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/identity#获取重定向_url) 和扩展的[客户端 ID](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/identity#注册你的扩展)。然后服务提供商将：

- 对用户进行身份验证（如果需要，也即此时用户尚未登录）
- 要求用户授权扩展访问请求的数据（如果需要，也即此时用户尚未授权扩展）

请注意，如果既不需要身份验证也不需要授权，那么此函数将在没有任何用户交互的情况下完成。

此函数还接受一个可选参数 `interactive`：如果省略或设置为假时，则强制流程在没有任何用户交互的情况下完成。在这种情况下，如果用户需要进行身份验证或授权，则操作将失败。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。如果身份验证和授权成功，该 Promise 将兑现为一个包含一些 URL 参数的重定向 URL。根据服务提供商实现的 OAuth2 流程，扩展需要进一步的步骤来获取有效的访问代码，然后扩展可以使用该访问代码来访问用户的数据。

如果出现任何错误，Promise 将被拒绝并返回一个错误消息。错误条件可能包括：

- 无法访问服务提供商的 URL
- 客户端 ID 与注册的客户端 ID 不匹配
- 重定向 URL 与为此客户端注册的任何重定向 URL 不匹配
- 用户未成功进行身份验证
- 用户未授权扩展
- `interactive` 参数被省略或被设置为假，但流程中需要用户交互来授权扩展。

## 语法

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // 对象
)
```

### 参数

- `details`
  - : `object`，对验证流程而言，可选的包含如下属性的对象：
    - `url`
      - : `string`，OAuth2 服务提供商提供的获取访问令牌的 URL。这个 URL 的详细信息应该在服务提供商的文档中给出，但 URL 参数应该始终包括[重定向 URL](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/identity#获取重定向_url) 和扩展的[客户端 ID](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/identity#注册你的扩展)。
    - `redirect_uri` {{optional_inline}}
      - : `string`，代表流程完成时扩展被重定向到的 URI。如果与生成的重定向 URL 匹配，则并不需要提供这一属性供浏览器端的验证流程使用。参见[获取重定向 URL](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/identity#获取重定向_url)。
    - `interactive` {{optional_inline}}
      - : `boolean`，如果被省略或被设为 `false`，则将强制流程在无用户交互的情况下静默完成。

        如果用户已经登录并已经授权扩展访问，那么 `launchWebAuthFlow()` 可以在没有任何用户交互的情况下完成。否则（如果服务提供商需要用户登录，或者需要用户授权扩展），`launchWebAuthFlow()` 将提醒用户执行相应操作：也就是说，此时流程将会是交互式的。

        扩展不应该在没有用户操作的情况下启动交互式流程。不过，有时扩展仍然希望在没有直接用户操作的情况下访问用户的数据（例如，想象一下一个希望在浏览器启动时访问数据的扩展）。

        这就是 `interactive` 的目的：如果省略 `interactive` 或将其设置为 `false`，则流程将被强制静默地完成；此时，如果服务提供商需要与用户交互，流程将会直接失败。因此，作为一个一般性的规则：如果你是在响应用户操作时启动流程，请将 `interactive` 设置为 `true`，否则省略它。

### 返回值

返回值是一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。如果身份验证和授权成功，这一 Promise 将兑现为一个包含重定向 URL 的字符串。该 URL 将包含一个参数，其要么是访问令牌，要么可以使用特定服务提供商记录的流程来交换访问令牌。

## 浏览器兼容性

{{Compat}}

## 示例

下属函数授权一个扩展访问用户的 Google 数据，根据 <https://developers.google.cn/identity/protocols/oauth2/javascript-implicit-flow> 中的文档。这里并未展示返回的访问令牌的验证部分：

```js
function validate(redirectURL) {
  // 校验访问令牌
}

function authorize() {
  const redirectURL = browser.identity.getRedirectURL();
  const clientID =
    "664583959686-fhvksj46jkd9j5v96vsmvs406jgndmic.apps.googleusercontent.com";
  const scopes = ["openid", "email", "profile"];
  let authURL = "https://accounts.google.com/o/oauth2/auth";
  authURL += `?client_id=${clientID}`;
  authURL += `&response_type=token`;
  authURL += `&redirect_uri=${encodeURIComponent(redirectURL)}`;
  authURL += `&scope=${encodeURIComponent(scopes.join(" "))}`;

  return browser.identity.launchWebAuthFlow({
    interactive: true,
    url: authURL,
  });
}

function getAccessToken() {
  return authorize().then(validate);
}
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`identity`](https://developer.chrome.google.cn/docs/extensions/reference/api/identity) API。
