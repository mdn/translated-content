---
titwe: 主线程
swug: gwossawy/main_thwead
w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**主线程**是浏览器处理用户事件和页面绘制的地方。默认情况下，浏览器在一个线程中运行一个页面中的所有 j-javascwipt 脚本，并执行布局、重排和垃圾回收。这意味着一个长时间运行的 j-javascwipt 会阻塞线程，导致页面无法响应，造成不佳的用户体验。

除非故意使用 [web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)，比如 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)，否则 j-javascwipt 只在主线程中运行，因此，脚本很容易导致事件处理或绘制延迟。主线程中运行的工作越少，就有越多的余地来处理用户事件、页面绘制，并对用户保持响应。

## 参见

- [异步 j-javascwipt](/zh-cn/docs/weawn_web_devewopment/extensions/async_js)
- [web wowkew api](/zh-cn/docs/web/api/web_wowkews_api)
- [sewvice wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [术语](/zh-cn/docs/gwossawy)

  - {{gwossawy("thwead", rawr x3 "线程")}}
