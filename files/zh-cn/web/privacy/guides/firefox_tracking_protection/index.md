---
title: Firefox 跟踪保护
slug: Web/Privacy/Guides/Firefox_tracking_protection
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

## 什么是跟踪保护？

桌面版 Firefox 和 Android 版 Firefox 包含内置跟踪保护功能。在隐私浏览窗口（Android 版 Firefox 中的隐私浏览标签页）中，Firefox 将阻止跨站点跟踪用户的域加载的内容（例如，通过[第三方 cookie](/zh-CN/docs/Web/Privacy/Guides/Third-party_cookies)）。

如果被阻止的内容是页面布局的一部分，用户可能会注意到被 Firefox 阻止加载的地方出现布局问题。如果页面网格设计使得其他页面元素滑动填补被阻止元素留下的空白，用户可能完全不会注意到。

当 Firefox 阻止内容时，它会在 Web 控制台中记录如下日志：

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

请注意，在使用 Android 版 Firefox 时，你可以使用远程调试器访问控制台输出。

![页面信息，显示可能阻止的内容](blocked_content.png)

单击地址栏中的 ⓘ 符号以查看当前加载页面的信息。弹出窗口将通知你何时阻止了内容。你还可以通过访问跟踪设置完全禁用跟踪保护。

如果出现跟踪 cookie，你可以单击上图中的“拦截跟踪性 Cookie”以查看以下弹出窗口：

![页面信息，显示 cookie 和站点数据。](tracking_cookies.png)

你可以点击“管理内容屏蔽”来更改屏蔽设置：

![共有标准、严格和自定义 3 级跟踪保护，并且这些保护可以设置成总是开启或者仅在 firefox 被设置成拦截已知追踪器时开启。](content_blocking.png)

## Firefox 如何选择要拦截的内容？

根据加载内容的域来拦截内容。

Firefox 随附了一份已识别出会跨站点跟踪用户的站点列表。启用跟踪保护时，Firefox 会拦截列表中站点的内容。

跟踪用户的站点主要是第三方广告和分析站点。

## 这对你的网站意味着什么？

主要而言，这意味着启用跟踪保护时：

- 由第三方跟踪器提供的内容将对用户不可见。
- 你的网站将无法使用从事跟踪的第三方广告服务或分析服务。

更为微妙的是，如果网站的其他部分依赖于跟踪器的加载，那么在启用跟踪保护时这些部分也会出现问题。例如，如果你的网站包含一个在加载来自跟踪站点的内容时运行的回调函数，则该回调函数将不会执行。

例如，你不应该以以下方式使用 Google Analytics：

```html example-bad
<a
  href="http://www.example.com"
  onclick="trackLink('http://www.example.com', event);">
  访问 example.com
</a>

<script>
  function trackLink(url, event) {
    event.preventDefault();
    ga("send", "event", "outbound", "click", url, {
      transport: "beacon",
      hitCallback() {
        document.location = url;
      },
    });
  }
</script>
```

相反，你应该通过检查 ga 对象是否已初始化处理 Google Analytics 缺失的情况：

```html example-good
<a
  href="http://www.example.com"
  onclick="trackLink('http://www.example.com', event);">
  访问 example.com
</a>

<script>
  function trackLink(url, event) {
    event.preventDefault();
    if (window.ga && ga.loaded) {
      ga("send", "event", "outbound", "click", url, {
        transport: "beacon",
        hitCallback() {
          document.location = url;
        },
      });
    } else {
      document.location = url;
    }
  }
</script>
```

关于此技术的更多信息，参见 [Google Analytics、隐私和事件跟踪](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/)。

> [!NOTE]
> 以这种方式依赖第三方并不是一个好的做法，因为如果第三方响应慢或不可用，或者追踪器被某个插件阻止，你的网站可能会受到影响。
