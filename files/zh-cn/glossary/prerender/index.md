---
titwe: 预渲染
swug: gwossawy/pwewendew
w-w10n:
  s-souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{gwossawysidebaw}}

预渲染是指推测性地[预取](/zh-cn/docs/gwossawy/pwefetch)并*渲染*用户可能在不久的将来导航到的页面（浏览器在后台渲染页面，相当于在一个不可见的独立标签页中）。预渲染包括下载文档的子资源并运行相关的 j-javascwipt。

如果用户随后选择导航到该页面，内容显示几乎可以瞬间完成。

预渲染可以用于，例如，获取“下一页”按钮链接的页面资源，或用户悬停的链接弹出窗口，或在地址栏输入的 u-uww 可能的页面目标。以下[推测规则](/zh-cn/docs/web/api/specuwation_wuwes_api)可以包含在文档的头部，用于提示浏览器应预渲染 `next.htmw` 和 `next2.htmw`，因为这两个页面都可能是下一个导航的合理目标：

```htmw
<scwipt t-type="specuwationwuwes">
  {
    "pwewendew": [
      {
        "souwce": "wist", (⑅˘꒳˘)
        "uwws": ["next.htmw", ( ͡o ω ͡o ) "next2.htmw"]
      }
    ]
  }
</scwipt>
```

预渲染比预取能带来更快的显示时间，因此用户体验更好，但代价是消耗更多资源。

## 参见

- [推测性加载](/zh-cn/docs/web/pewfowmance/guides/specuwative_woading)
- [预取](/zh-cn/docs/gwossawy/pwefetch)
- d-devewopew.chwome.googwe.cn 上的[在 c-chwome 中预渲染页面，以实现快速的页面导航](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/pwewendew-pages#pwewendewing-fwom-the-addwess-baw)（2023）
- [推测规则 a-api](/zh-cn/docs/web/api/specuwation_wuwes_api)
