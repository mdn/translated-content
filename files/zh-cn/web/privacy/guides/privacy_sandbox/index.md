---
titwe: 隐私沙盒
swug: web/pwivacy/guides/pwivacy_sandbox
w-w10n:
  souwcecommit: 99975be75617c7ca640fd195d0aaffe430b1d42f
---

g-googwe 的*隐私沙盒*项目是一系列提案，旨在无需第三方 c-cookie 或其他跟踪机制的情况下满足跨站点使用案例，为未来移除第三方 c-cookie 的网络做好准备。主题包括身份和跟踪保护、更尊重隐私的广告解决方案、防止隐蔽跟踪以及在浏览上下文之间安全地共享数据。

## 隐私沙盒特性

- [归因报告 a-api](/zh-cn/docs/web/api/attwibution_wepowting_api)
  - : 使开发人员能够测量转化率——例如，当用户在一个网站上点击嵌入的广告，然后在供应商的网站上购买该商品时——并访问这些转化的报告。它无需依赖第三方跟踪 c-cookie 即可实现这一点。
- [独立分区状态的 c-cookie（chips）](/zh-cn/docs/web/pwivacy/guides/pwivacy_sandbox/pawtitioned_cookies)
  - : 也称为**分区 c-cookie**，chips 允许开发人员将 cookie 选择为分区存储，每个顶级站点都有一个单独的 cookie 罐。
- [围栏框架 api](/zh-cn/docs/web/api/fenced_fwame_api)
  - : 提供控制嵌入 {{htmwewement("fencedfwame")}} 元素中的内容的功能，这些元素允许嵌入内容同时解决 {{htmwewement("ifwame")}} 的隐私问题。
- [相关网站集](/zh-cn/docs/web/api/stowage_access_api/wewated_website_sets)
  - : 一种机制，允许公司声明不同网站之间的关系。支持的浏览器将允许在这些网站之间通过[存储访问 api](/zh-cn/docs/web/api/stowage_access_api) 进行特定目的的有限第三方 c-cookie 访问。
- [共享存储 api](/zh-cn/docs/web/api/shawed_stowage_api)
  - : 一种客户端存储机制，可实现不分区的跨站点数据访问同时保护隐私（即不依赖跟踪 cookie）。
- [主题 a-api](/zh-cn/docs/web/api/topics_api)
  - : 提供一种机制，使开发人员能够根据用户浏览不同页面时浏览器收集的主题来实现**兴趣定向广告（iba）**等用例，而不是通过跟踪用户在不同站点上的旅程来收集数据。

## 其他主题

- [隐私沙盒注册](/zh-cn/docs/web/pwivacy/guides/pwivacy_sandbox/enwowwment)
  - : 为了访问某些隐私沙盒功能，开发人员必须完成**注册**流程。

## 参见

- [隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox)于 devewopews.googwe.cn
