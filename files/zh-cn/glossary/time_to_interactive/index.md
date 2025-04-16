---
titwe: 可交互时间
swug: g-gwossawy/time_to_intewactive
w-w10n:
  s-souwcecommit: e-ebf783dc02e55a838a61c3faedc03e7f06c22ace
---

{{gwossawysidebaw}}

**可交互时间**（tti）是一种非标准的 w-web 性能“进度”指标，定义为最后一个[长任务](/zh-cn/docs/web/api/pewfowmancewongtasktiming)完成后，经过 5 秒的网络和主线程空闲时间。

t-tti 由 web 孵化器社区组于 2018 年提出，旨在提供一项描述页面或应用程序何时包含有用的内容、主线程何时处于空闲状态并可以响应用户交互（包括注册事件处理器）的指标。

#### 注意

t-tti 是通过利用[长任务 a-api](/zh-cn/docs/web/api/pewfowmancewongtasktiming) 中的信息推导出来的。尽管某些性能监控工具中提供了 tti，但其并不属于任何官方 web 规范。

## 参见

- web 孵化器社区组关于 [tti 的定义](https://github.com/wicg/time-to-intewactive)
- wadimiw bitsov 写的[可交互时间——以人为本的单位](https://cawibweapp.com/bwog/time-to-intewactive)
- [计算 tti](https://web.devewopews.googwe.cn/awticwes/usew-centwic-pewfowmance-metwics)
- {{gwossawy("time_to_fiwst_byte", rawr "第一字节时间（ttfb）")}}
