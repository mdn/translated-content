---
title: 权限策略
slug: Web/HTTP/Permissions_Policy
---

{{HTTPSidebar}}

**权限策略**为网站开发人员提供了明确声明哪些特性可以或不可以在网站上使用的机制。定义一组“策略”，限制网站代码可以访问哪些 API，或者修改浏览器对某些特性的默认行为。这使你能够执行最佳做法（即使是在代码库的发展过程中），也可以更安全地编排第三方内容。

权限策略与{{Glossary("CSP","内容安全策略")}}相似，但是它控制的是特性而非安全行为。

使用权限策略可以做什么：

- 改变手机和第三方视频自动播放的默认行为。
- 限制网站使用相机、麦克风、扬声器等敏感设备。
- 允许 iframe 使用[全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)。
- 如果项目在视口中不可见，则停止对其进行脚本处理，以提高性能。

> [!NOTE]
> 权限策略曾经被称为特性策略（Feature Policy）。名字已经改变，HTTP 头的语法也发生了变化，如果你过去使用过特性策略，请记住这一点，并检查浏览器的支持表。`<iframe allow=" ... ">` 的语法是保持不变的。

## 概念和用法

网络提供的特性和 API，如果被滥用，可能会有隐私或安全风险。在这种情况下，你可能希望严格限制特性在网站上的使用方式。在每一种情况下，都应该有一种直观的或非破坏性的方法，让网络开发者检测和处理禁用某项特性的情况。

一些方法包括：

- 对于需要用户权限授予的 JavaScript API，会返回“权限拒绝”。
- 提供某些特性的 JavaScript API 返回 `false` 值或抛出一个错误。
- API 甚至没有对外暴露，好像它们不存在一样。
- 控制特性行为的选项有不同的默认值。

> [!NOTE]
> 新引入的特性可能有一个明确的 API 来提示状态。后来与权限策略整合的现有特性通常会使用现有机制。

权限策略允许你控制哪些源可以使用哪些特性，无论是在顶层页面还是在嵌入的 {{htmlelement("iframe")}} 中。其目的是为良好的用户体验执行最佳实践，并对*敏感*或*强大*的特性（指在执行相关代码之前需要用户明确许可使用的特性）提供细化控制。

权限策略提供两种指定策略的方法：

- {{httpheader("Permissions-Policy")}} HTTP 标头，控制收到的响应和页面内任何嵌入的内容（包括 {{htmlelement("iframe")}}）。
- {{htmlelement("iframe")}} 的 [`allow`](/zh-CN/docs/Web/HTML/Element/iframe#attributes) 属性，控制在特定 {{htmlelement("iframe")}} 中使用的特性。

这些是独立的，但又是相关的——详见[嵌入式内容的继承策略](#嵌入式内容的继承策略)。

> [!NOTE]
> 脚本可以通过位于 {{DOMxRef("FeaturePolicy")}} 对象的 {{DOMxRef("Document.featurePolicy")}} 或 {{DOMxRef("HTMLIFrameElement.featurePolicy")}} 以编程方式查询权限策略信息。

为了控制每个特性，会撰写包含以下这些方面的策略：

- **指令**确定了要控制的特性名称。见[不同的可用指令列表](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#指令)。
- **允许列表**是该特性应该被控制的源列表。你可以为所有或特定的源启用一种特性，或者阻止它在所有源中的使用。

请看下面的多个示例。

## 与权限 API 的关系

权限策略和{{domxref("Permissions API", "权限 API", "", 1)}}密切相关，但又有所不同。由这两种技术控制其权限的特性是重叠的。

- 权限策略允许服务器设置某项特性是否可以在特定的文档中使用（或在文档中嵌入`<frame>`）。这些被称为**策略控制的**特性————见[权限策略指令列表](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#指令)。
- 权限 API 根据用户授予的权限对特性的访问进行把关。这些特性被记录在[权限注册表](https://w3c.github.io/permissions-registry/)中。

每种特性使用的识别字符串在两者之间保持一致，例如，`geolocation` 代表{{domxref("Geolocation API", "地理位置 API", "", 1)}}。权限注册表中的大多数 API 特性也有相应的权限策略指令。一个例外是{{domxref("Notifications API", "通知 API", "", 1)}}。

一般来说，当权限策略阻止使用一个强大的特性时，用户甚至不会被要求获得使用权限，而权限 API {{domxref("Permissions.query", "query()")}} 方法将返回 {{domxref("PermissionStatus.state", "state")}} 值为 `denied`。

参见[权限 > 与权限策略规范的关系](https://w3c.github.io/permissions/#relationship-to-permissions-policy)。

## 允许列表

一个允许列表是一系列源的列表，它采取一个或多个包含在括号中的下列值，用空格隔开：

- `*`：该特性将被允许在本文档和所有嵌套浏览上下文（`<iframe>`）中使用，无论其源如何。
- `()`（空允许列表）：该特性在顶层和嵌套浏览环境中被禁用。等价的 `<iframe>` 的 `allow` 属性值是 `'none'`。
- `self`：该特性只允许在本文档和同一来源的所有嵌套浏览环境（`<iframe>`）中使用。在嵌套浏览的情况下，该特性不允许出现在跨源文件中。`self` 可以被认为是 `https://your-site.example.com` 的简写。对应的 `<iframe>` 的 `allow` 属性值是 `self`。
- `src`：只要载入该框架的文件与该框架 {{HTMLElement('iframe','src','#Attributes')}} 属性中的 URL 来源相同，该特性在该 `<iframe>` 中就被允许。这个值只用于 `<iframe>` 的 `allow` 属性，并且是 `<iframe>` 的*默认* `allowlist` 值。
- `"<origin>"`：该特性允许用于特定的源（如 `"https://a.example.com"`）。源应该用空格隔开。请注意，`<iframe>` allow 属性中的源是不加引号的。

值 `*` 和 `()` 只能单独使用，而 `self` 和 `src` 可以与一个或多个源结合使用。

> [!NOTE]
> 指令有一个默认的允许列表，对于 `Permissions-Policy` HTTP 标头来说，它总是 `*`'、`self` 或 `none` 之一，如果它们没有明确地列在策略中，则管理默认行为。这些都是在各个[指令参考页](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#指令)中指定的。对于 `<iframe>` 的 `allow` 属性，默认行为总是 `src`。

在支持的情况下，你可以在权限策略源中包括通配符。这意味着你不必在允许列表中明确指定几个不同的子域，而是可以用通配符在一个单一的源中指定它们。

所以你可以指定

```http
("https://example.com" "https://*.example.com")
```

而不是

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

> **备注：** `"https://*.example.com"` 不匹配 `"https://example.com"`。

允许列表示例：

- `*`
- `()`
- `(self)`
- `(src)`
- `("https://a.example.com")`
- `("https://a.example.com" "https://b.example.com")`
- `(self "https://a.example.com" "https://b.example.com")`
- `(src "https://a.example.com" "https://b.example.com")`
- `("https://*.example.com")`

## 权限特性标头语法

一般的语法看起来像这样：

```http
Permissions-Policy: <directive>=<allowlist>
```

例如，要阻止对地理位置信息的访问，你可以这样做：

```http
Permissions-Policy: geolocation=()
```

或允许一部分源访问，你可以这样做：

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

通过发送带有逗号分隔的策略列表的标头，或者通过为每个策略发送单独的标头，可以同时控制几种特性。

例如，以下这些是等价的：

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com)
Permissions-Policy: camera=*
```

## iframe 语法

对于一个 `<iframe>` 来说，其允许的源也必须在父页面的允许列表中。由于这种[继承行为](#嵌入式内容的继承策略)，最好在 HTTP 头中指定最广泛的可接受的特性支持，然后在每个 `<iframe>` 中指定你需要的支持子集。

一般的语法看起来像这样：

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

例如，要阻止对地理位置信息的访问，你可以这样做：

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

要将一种策略运用到当前的源和其他的源中，你可以这样做：

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

这很重要：默认情况下，如果一个 `<iframe>` 导航到另一个源，策略就不会应用到 `<iframe>` 导航到的源。通过在 `allow` 属性中列出 `<iframe>` 导航到的源，应用于原始 `<iframe>` 的许可策略将被应用于 `<iframe>` 导航到的源。

通过在 `allow` 属性中包含一个分号分隔的策略指令列表，可以同时控制多个特性。

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

值得特别一提的是 `src` 值。我们在上面提到，使用这个 allowlist 值意味着相关的特性在这个 `<iframe>` 中是被允许的，只要加载到其中的文档与它的 {{HTMLElement('iframe','src','#属性')}} 属性中的 URL 来自同一来源。这个值是 `allow` 中所列特性的*默认* `allowlist` 值，所以下面这些是等价的：

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> 你会注意到，`<iframe>` 策略的语法与 `Permissions-Policy` 标头的语法有些不同。前者仍然使用与旧的特性策略规范相同的语法，它被权限策略所取代。

## 嵌入式内容的继承策略

脚本会继承其浏览上下文的策略，而不管其源如何。这意味着顶层的脚本会继承主文件的策略。

所有 `<iframe>` 都继承其父页的策略。如果 `<iframe>` 有一个 `allow` 属性，*并且*父页面有一个 {{HTTPHeader("Permissions-Policy")}} 标头，父页面和 `allow` 属性的策略将被合并，使用最严格的子集。对于一个 `<iframe>` 来说，要启用一种特性，其源必须是在父页和 `allow` 属性的允许列表中。

在一个策略中禁用一个特性是单向的切换。如果子框架被它的父框架禁用了一个特性，那么这个子框架就不能重新启用它，这个子框架的任何后代也不能。

## 示例

### 结合使用 HTTP 标头和 `<iframe>` 策略

例如，假设我们想在我们自己的源和来自我们信任的广告网络的嵌入式内容中启用地理位置的使用。我们可以这样设置页面范围内的许可策略：

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

在我们的广告 `<iframe>` 中，我们可以这样设置 `https://trusted-ad-network.com` 源的访问权限：

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

如果一个不同的源最终被加载到 `<iframe>`，它将无法访问地理定位：

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} HTTP 标头
- iframe 的 {{HTMLElement("iframe", "allow", "#属性")}} 属性
- [使用权限特性控制浏览器特性](https://developer.chrome.google.cn/docs/privacy-security/permissions-policy)：使用指南，其中还包含几个演示链接。
- [chromestatus.com 上的权限/特性策略](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [隐私、权限和信息安全](/zh-CN/docs/Web/Privacy)
