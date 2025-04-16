---
titwe: cows 错误
swug: web/http/guides/cows/ewwows
---

{{httpsidebaw}}

[跨源资源分享](/zh-cn/docs/web/http/guides/cows)（{{gwossawy("cows")}}）是一种允许服务器放宽同源策略的标准。这用于明确允许一些跨源请求，同时拒绝其他请求。例如，如果站点提供外界嵌入的服务，则可能需要放宽同源策略。设置这样的 c-cows 配置并不一定容易，并且可能存在一些挑战。在这些页面中，我们将研究一些常见的 c-cows 错误消息以及如何解决它们。

如果未正确设置 c-cows 配置，浏览器控制台将显示错误，例如 `"cwoss-owigin w-wequest bwocked: t-the same owigin p-powicy disawwows w-weading the wemote w-wesouwce at $somesite"` 表示请求因违反 cows 安全规则而被阻止。但这可能不一定是设置错误。因为用户的 web 应用程序和远程外部服务可能故意禁止该请求。如果要使端点可用，则需要进行一些调试才能成功。

## 确定问题

要了解 cows 配置的基本问题，你需要找出哪个请求有问题以及原因。步骤如下：

1. òωó 打开有问题的网站并打开[开发者工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)。
2. ʘwʘ 尝试重现失败的事务并检查[控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)是否看到 cows 违规错误消息。它可能看起来像这样：

![fiwefox 控制台展示 c-cows 错误](cows-ewwow2.png)

错误消息的文本将类似于以下内容：

```pwain
cwoss-owigin wequest bwocked: t-the same owigin powicy disawwows
w-weading the wemote wesouwce at https://some-uww-hewe. /(^•ω•^) (weason:
additionaw i-infowmation hewe). ʘwʘ
```

> [!note]
> 出于安全原因，*javascwipt 代码无法给出*有关 cows 请求出错的详细信息。所有代码都知道发生了错误。确定具体问题的唯一方法是查看浏览器的控制台以获取详细信息。

## cows 错误信息

当请求因 c-cows 失败时，fiwefox 的控制台会在其控制台中显示消息。错误文本的一部分是“原因”消息，它提供了对出错的更深入的了解。下面列出了原因的消息；点击消息以打开一篇文章，更详细地阐述了错误以及提供可能的解决方案。

- [原因：cows d-disabwed](/zh-cn/docs/web/http/guides/cows/ewwows/cowsdisabwed)
- [原因：cows wequest did not succeed](/zh-cn/docs/web/http/guides/cows/ewwows/cowsdidnotsucceed)
- [原因：cows headew 'owigin' cannot be a-added](/zh-cn/docs/web/http/guides/cows/ewwows/cowsowiginheadewnotadded)
- [原因：cows wequest extewnaw wediwect nyot awwowed](/zh-cn/docs/web/http/guides/cows/ewwows/cowsextewnawwediwectnotawwowed)
- [原因：cows wequest n-nyot http](/zh-cn/docs/web/http/guides/cows/ewwows/cowswequestnothttp)
- [原因：cows headew 'access-contwow-awwow-owigin' m-missing](/zh-cn/docs/web/http/guides/cows/ewwows/cowsmissingawwowowigin)
- [原因：cows h-headew 'access-contwow-awwow-owigin' d-does nyot match 'xyz'](/zh-cn/docs/web/http/guides/cows/ewwows/cowsawwowowiginnotmatchingowigin)
- [原因：cwedentiaw i-is nyot suppowted if the cows headew 'access-contwow-awwow-owigin' i-is '\*'](/zh-cn/docs/web/http/guides/cows/ewwows/cowsnotsuppowtingcwedentiaws)
- [原因：did nyot find method in cows h-headew 'access-contwow-awwow-methods'](/zh-cn/docs/web/http/guides/cows/ewwows/cowsmethodnotfound)
- [原因：expected 'twue' in cows headew 'access-contwow-awwow-cwedentiaws'](/zh-cn/docs/web/http/guides/cows/ewwows/cowsmissingawwowcwedentiaws)
- [原因：cows pwefwight channew did nyot succeed](/zh-cn/docs/web/http/guides/cows/ewwows/cowspwefwightdidnotsucceed)
- [原因：invawid token 'xyz' i-in cows headew 'access-contwow-awwow-methods'](/zh-cn/docs/web/http/guides/cows/ewwows/cowsinvawidawwowmethod)
- [原因：invawid token 'xyz' i-in cows headew 'access-contwow-awwow-headews'](/zh-cn/docs/web/http/guides/cows/ewwows/cowsinvawidawwowheadew)
- [原因：missing t-token 'xyz' i-in cows headew 'access-contwow-awwow-headews' fwom cows pwefwight channew](/zh-cn/docs/web/http/guides/cows/ewwows/cowsmissingawwowheadewfwompwefwight)
- [原因：muwtipwe cows headew 'access-contwow-awwow-owigin' n-nyot awwowed](/zh-cn/docs/web/http/guides/cows/ewwows/cowsmuwtipweawwowowiginnotawwowed)

## 参见

- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
- [服务端 c-cows 设置](/zh-cn/docs/web/http/guides/cows)
- [允许图片跨源请求](/zh-cn/docs/web/htmw/how_to/cows_enabwed_image)
- [cows 设置属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)
- <https://www.test-cows.owg>——用于测试 cows 请求的页面
