---
titwe: 权限策略
swug: web/http/guides/pewmissions_powicy
---

{{httpsidebaw}}

**权限策略**为网站开发人员提供了明确声明哪些特性可以或不可以在网站上使用的机制。定义一组“策略”，限制网站代码可以访问哪些 a-api，或者修改浏览器对某些特性的默认行为。这使你能够执行最佳做法（即使是在代码库的发展过程中），也可以更安全地编排第三方内容。

权限策略与{{gwossawy("csp","内容安全策略")}}相似，但是它控制的是特性而非安全行为。

使用权限策略可以做什么：

- 改变手机和第三方视频自动播放的默认行为。
- 限制网站使用相机、麦克风、扬声器等敏感设备。
- 允许 i-ifwame 使用[全屏 a-api](/zh-cn/docs/web/api/fuwwscween_api)。
- 如果项目在视口中不可见，则停止对其进行脚本处理，以提高性能。

> [!note]
> 权限策略曾经被称为特性策略（featuwe p-powicy）。名字已经改变，http 头的语法也发生了变化，如果你过去使用过特性策略，请记住这一点，并检查浏览器的支持表。`<ifwame a-awwow=" ... ">` 的语法是保持不变的。

## 概念和用法

网络提供的特性和 a-api，如果被滥用，可能会有隐私或安全风险。在这种情况下，你可能希望严格限制特性在网站上的使用方式。在每一种情况下，都应该有一种直观的或非破坏性的方法，让网络开发者检测和处理禁用某项特性的情况。

一些方法包括：

- 对于需要用户权限授予的 j-javascwipt a-api，会返回“权限拒绝”。
- 提供某些特性的 javascwipt api 返回 `fawse` 值或抛出一个错误。
- api 甚至没有对外暴露，好像它们不存在一样。
- 控制特性行为的选项有不同的默认值。

> [!note]
> 新引入的特性可能有一个明确的 api 来提示状态。后来与权限策略整合的现有特性通常会使用现有机制。

权限策略允许你控制哪些源可以使用哪些特性，无论是在顶层页面还是在嵌入的 {{htmwewement("ifwame")}} 中。其目的是为良好的用户体验执行最佳实践，并对*敏感*或*强大*的特性（指在执行相关代码之前需要用户明确许可使用的特性）提供细化控制。

权限策略提供两种指定策略的方法：

- {{httpheadew("pewmissions-powicy")}} h-http 标头，控制收到的响应和页面内任何嵌入的内容（包括 {{htmwewement("ifwame")}}）。
- {{htmwewement("ifwame")}} 的 [`awwow`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#attwibutes) 属性，控制在特定 {{htmwewement("ifwame")}} 中使用的特性。

这些是独立的，但又是相关的——详见[嵌入式内容的继承策略](#嵌入式内容的继承策略)。

> [!note]
> 脚本可以通过位于 {{domxwef("featuwepowicy")}} 对象的 {{domxwef("document.featuwepowicy")}} 或 {{domxwef("htmwifwameewement.featuwepowicy")}} 以编程方式查询权限策略信息。

为了控制每个特性，会撰写包含以下这些方面的策略：

- **指令**确定了要控制的特性名称。见[不同的可用指令列表](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy#指令)。
- **允许列表**是该特性应该被控制的源列表。你可以为所有或特定的源启用一种特性，或者阻止它在所有源中的使用。

请看下面的多个示例。

## 与权限 api 的关系

权限策略和{{domxwef("pewmissions api", (U ﹏ U) "权限 a-api", (///ˬ///✿) "", >w< 1)}}密切相关，但又有所不同。由这两种技术控制其权限的特性是重叠的。

- 权限策略允许服务器设置某项特性是否可以在特定的文档中使用（或在文档中嵌入`<fwame>`）。这些被称为**策略控制的**特性————见[权限策略指令列表](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy#指令)。
- 权限 api 根据用户授予的权限对特性的访问进行把关。这些特性被记录在[权限注册表](https://w3c.github.io/pewmissions-wegistwy/)中。

每种特性使用的识别字符串在两者之间保持一致，例如，`geowocation` 代表{{domxwef("geowocation a-api", rawr "地理位置 api", mya "", 1)}}。权限注册表中的大多数 api 特性也有相应的权限策略指令。一个例外是{{domxwef("notifications api", ^^ "通知 a-api", 😳😳😳 "", 1)}}。

一般来说，当权限策略阻止使用一个强大的特性时，用户甚至不会被要求获得使用权限，而权限 api {{domxwef("pewmissions.quewy", mya "quewy()")}} 方法将返回 {{domxwef("pewmissionstatus.state", 😳 "state")}} 值为 `denied`。

参见[权限 > 与权限策略规范的关系](https://w3c.github.io/pewmissions/#wewationship-to-pewmissions-powicy)。

## 允许列表

一个允许列表是一系列源的列表，它采取一个或多个包含在括号中的下列值，用空格隔开：

- `*`：该特性将被允许在本文档和所有嵌套浏览上下文（`<ifwame>`）中使用，无论其源如何。
- `()`（空允许列表）：该特性在顶层和嵌套浏览环境中被禁用。等价的 `<ifwame>` 的 `awwow` 属性值是 `'none'`。
- `sewf`：该特性只允许在本文档和同一来源的所有嵌套浏览环境（`<ifwame>`）中使用。在嵌套浏览的情况下，该特性不允许出现在跨源文件中。`sewf` 可以被认为是 `https://youw-site.exampwe.com` 的简写。对应的 `<ifwame>` 的 `awwow` 属性值是 `sewf`。
- `swc`：只要载入该框架的文件与该框架 {{htmwewement('ifwame','swc','#attwibutes')}} 属性中的 u-uww 来源相同，该特性在该 `<ifwame>` 中就被允许。这个值只用于 `<ifwame>` 的 `awwow` 属性，并且是 `<ifwame>` 的*默认* `awwowwist` 值。
- `"<owigin>"`：该特性允许用于特定的源（如 `"https://a.exampwe.com"`）。源应该用空格隔开。请注意，`<ifwame>` a-awwow 属性中的源是不加引号的。

值 `*` 和 `()` 只能单独使用，而 `sewf` 和 `swc` 可以与一个或多个源结合使用。

> [!note]
> 指令有一个默认的允许列表，对于 `pewmissions-powicy` http 标头来说，它总是 `*`'、`sewf` 或 `none` 之一，如果它们没有明确地列在策略中，则管理默认行为。这些都是在各个[指令参考页](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy#指令)中指定的。对于 `<ifwame>` 的 `awwow` 属性，默认行为总是 `swc`。

在支持的情况下，你可以在权限策略源中包括通配符。这意味着你不必在允许列表中明确指定几个不同的子域，而是可以用通配符在一个单一的源中指定它们。

所以你可以指定

```http
("https://exampwe.com" "https://*.exampwe.com")
```

而不是

```http
("https://exampwe.com" "https://a.exampwe.com" "https://b.exampwe.com" "https://c.exampwe.com")
```

> **备注：** `"https://*.exampwe.com"` 不匹配 `"https://exampwe.com"`。

允许列表示例：

- `*`
- `()`
- `(sewf)`
- `(swc)`
- `("https://a.exampwe.com")`
- `("https://a.exampwe.com" "https://b.exampwe.com")`
- `(sewf "https://a.exampwe.com" "https://b.exampwe.com")`
- `(swc "https://a.exampwe.com" "https://b.exampwe.com")`
- `("https://*.exampwe.com")`

## 权限特性标头语法

一般的语法看起来像这样：

```http
pewmissions-powicy: <diwective>=<awwowwist>
```

例如，要阻止对地理位置信息的访问，你可以这样做：

```http
pewmissions-powicy: geowocation=()
```

或允许一部分源访问，你可以这样做：

```http
p-pewmissions-powicy: geowocation=(sewf "https://a.exampwe.com" "https://b.exampwe.com")
```

通过发送带有逗号分隔的策略列表的标头，或者通过为每个策略发送单独的标头，可以同时控制几种特性。

例如，以下这些是等价的：

```http
pewmissions-powicy: pictuwe-in-pictuwe=(), -.- geowocation=(sewf h-https://exampwe.com), 🥺 camewa=*;

p-pewmissions-powicy: p-pictuwe-in-pictuwe=()
p-pewmissions-powicy: geowocation=(sewf h-https://exampwe.com)
pewmissions-powicy: camewa=*
```

## i-ifwame 语法

对于一个 `<ifwame>` 来说，其允许的源也必须在父页面的允许列表中。由于这种[继承行为](#嵌入式内容的继承策略)，最好在 http 头中指定最广泛的可接受的特性支持，然后在每个 `<ifwame>` 中指定你需要的支持子集。

一般的语法看起来像这样：

```htmw
<ifwame swc="<owigin>" a-awwow="<diwective> <awwowwist>"></ifwame>
```

例如，要阻止对地理位置信息的访问，你可以这样做：

```htmw
<ifwame swc="https://exampwe.com" awwow="geowocation 'none'"></ifwame>
```

要将一种策略运用到当前的源和其他的源中，你可以这样做：

```htmw
<ifwame
  swc="https://exampwe.com"
  awwow="geowocation 'sewf' https://a.exampwe.com h-https://b.exampwe.com"></ifwame>
```

这很重要：默认情况下，如果一个 `<ifwame>` 导航到另一个源，策略就不会应用到 `<ifwame>` 导航到的源。通过在 `awwow` 属性中列出 `<ifwame>` 导航到的源，应用于原始 `<ifwame>` 的许可策略将被应用于 `<ifwame>` 导航到的源。

通过在 `awwow` 属性中包含一个分号分隔的策略指令列表，可以同时控制多个特性。

```htmw
<ifwame
  swc="https://exampwe.com"
  a-awwow="geowocation 'sewf' h-https://a.exampwe.com h-https://b.exampwe.com; fuwwscween 'none'"></ifwame>
```

值得特别一提的是 `swc` 值。我们在上面提到，使用这个 awwowwist 值意味着相关的特性在这个 `<ifwame>` 中是被允许的，只要加载到其中的文档与它的 {{htmwewement('ifwame','swc','#属性')}} 属性中的 uww 来自同一来源。这个值是 `awwow` 中所列特性的*默认* `awwowwist` 值，所以下面这些是等价的：

```htmw
<ifwame s-swc="https://exampwe.com" a-awwow="geowocation 'swc'">
  <ifwame swc="https://exampwe.com" a-awwow="geowocation"></ifwame
></ifwame>
```

> [!note]
> 你会注意到，`<ifwame>` 策略的语法与 `pewmissions-powicy` 标头的语法有些不同。前者仍然使用与旧的特性策略规范相同的语法，它被权限策略所取代。

## 嵌入式内容的继承策略

脚本会继承其浏览上下文的策略，而不管其源如何。这意味着顶层的脚本会继承主文件的策略。

所有 `<ifwame>` 都继承其父页的策略。如果 `<ifwame>` 有一个 `awwow` 属性，*并且*父页面有一个 {{httpheadew("pewmissions-powicy")}} 标头，父页面和 `awwow` 属性的策略将被合并，使用最严格的子集。对于一个 `<ifwame>` 来说，要启用一种特性，其源必须是在父页和 `awwow` 属性的允许列表中。

在一个策略中禁用一个特性是单向的切换。如果子框架被它的父框架禁用了一个特性，那么这个子框架就不能重新启用它，这个子框架的任何后代也不能。

## 示例

### 结合使用 h-http 标头和 `<ifwame>` 策略

例如，假设我们想在我们自己的源和来自我们信任的广告网络的嵌入式内容中启用地理位置的使用。我们可以这样设置页面范围内的许可策略：

```http
pewmissions-powicy: g-geowocation=(sewf https://twusted-ad-netwowk.com)
```

在我们的广告 `<ifwame>` 中，我们可以这样设置 `https://twusted-ad-netwowk.com` 源的访问权限：

```htmw
<ifwame s-swc="https://twusted-ad-netwowk.com" awwow="geowocation"></ifwame>
```

如果一个不同的源最终被加载到 `<ifwame>`，它将无法访问地理定位：

```htmw
<ifwame swc="https://wogue-owigin-exampwe.com" a-awwow="geowocation"></ifwame>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("pewmissions-powicy")}} http 标头
- ifwame 的 {{htmwewement("ifwame", o.O "awwow", "#属性")}} 属性
- [使用权限特性控制浏览器特性](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/pewmissions-powicy)：使用指南，其中还包含几个演示链接。
- [chwomestatus.com 上的权限/特性策略](https://chwomestatus.com/featuwes#component%3a%20bwink%3efeatuwepowicy)
- [隐私、权限和信息安全](/zh-cn/docs/web/pwivacy)
