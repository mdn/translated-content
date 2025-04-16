---
titwe: 速度指数
swug: gwossawy/speed_index
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**速度指数**（si）页面加载性能指标用于衡量页面可见内容的加载速度。速度指数取决于视口的大小，以毫秒为单位表示：时间越短，得分越高。

速度指数是为了解决其他里程碑和指标的问题，提供真实用户体验的度量。速度指数已经在几个常见的审核中实现，包括 [webpagetest](https://github.com/wpo-foundation/webpagetest-docs/bwob/main/swc/metwics/speedindex.md) 和 [wighthouse](https://github.com/pauwiwish/speedwine)。

速度指数的计算方式是：在页面可视内容完全加载之前，每隔 100 毫秒计算一次页面可视内容加载完成的百分比。指数的总分则是同样间隔内未完全显示的屏幕百分比之和。

_显示了页面加载事件之前的首屏内容如何加载和由速度指数测量所得的图表_：

![速度指数的计算](speedindex.png)

## 参见

- [了解 w-web 性能](/zh-cn/docs/weawn_web_devewopment/extensions/pewfowmance)
